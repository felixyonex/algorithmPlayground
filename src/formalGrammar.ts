export class ExeExpression {

  public tokens: Token[];

  public variables: any = {};

  public opArr = [['/', '*'], ['+', '-']];

  public char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  public execute(input: string) {
    const compiled = this.compile(input);
    // return this.evaluateToke(compiled);
  }

  public compile (expression: string) {
    const tokens = this.tokenizeExpression(expression);
    console.log(tokens);
    let tree;

    //deal with groups and functions
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token.type === 'startBracket') {
          this.groupTokens(tokens, i);
          i--;
      }
    }
    tree = this.buildTree(tokens);
    console.log(tree);
    return tree;

  }

  public tokenizeExpression (expression: string) {
    // const numbers = '0123456789';
    const char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const tokens: Token[] = [];
    let parsedToken: any[];
    const len = expression.length;

    for (let i = 0; i < len; i++) {

      const tokenEle = expression[i];

      const isDigit = tokenEle >= '0' && tokenEle <= '9';

      if (isDigit || tokenEle === '.') {

        parsedToken = this.parseNumber(expression, i);
        tokens.push({
          type: 'number',
          pos: i,
          value: parsedToken[0]
        });

        i = parsedToken[1] - 1;
        continue;
      }

      const isVar = char.indexOf(tokenEle) >= 0;

      if (isVar) {
        let varToken = '';
        while (i < len) {
          if (char.indexOf(expression[i]) < 0) {
            break;
          }
          varToken += tokenEle;
          i ++;
        }
        this.variables[varToken] = true;
        tokens.push({
          type: 'variable',
          pos: i,
          value: varToken
        });

        i --;
        continue;
      }

      const isOp = [].concat(...this.opArr).indexOf(tokenEle);

      if (isOp) {
        tokens.push({
          type: 'operator',
          pos: i,
          value: tokenEle
        });
        continue;
      }

      if (tokenEle === '(') {
        tokens.push({
          type: 'startBracket',
          pos: i,
          value: tokenEle
        });
        continue;
      }

      if (tokenEle === ')') {
        tokens.push({
          type: 'endBracket',
          pos: i,
          value: tokenEle
        });
        continue;
      }

      if (tokenEle === ',') {
        tokens.push({
          type: 'comma',
          pos: i,
          value: tokenEle
        });
        continue;
      }

      if (tokenEle === ' ' || tokenEle === '\t' || tokenEle === '\f' || tokenEle === '\r' || tokenEle === '\n') {
        continue;
      }

      throw new Error ('Unexpected token at ' + i);

    }
    return tokens;
  }

  public groupTokens (tokens: Token[], startAt: number) {
    const isFunc = startAt > 0 && tokens[startAt - 1].type === 'variable';
    const rootToken = tokens[isFunc ? startAt - 1 : startAt];
    const len = tokens.length;
    let groups: any[];
    let sub: any[];

    if (isFunc) {
      rootToken.type = 'function';
      groups = rootToken.args = [];
      sub = [];
    } else {
      rootToken.type = 'group';
      sub = rootToken.tokens = [];
    }

    for (let i = startAt + 1; i < len; i++) {
        const token = tokens[i];
        if (isFunc && token.type === 'comma') {
          sub = [];
          groups.push(sub);
          continue;
        }

        if (token.type === 'endBracket') {
          if (isFunc) {
            tokens.splice(startAt, i - startAt + 1);
          } else {
            tokens.splice(startAt + 1, i - startAt);
          }
          return rootToken;
        }

        if (token.type === 'startBracket') {
          this.groupTokens(tokens, i);
          i--;
          //len = tokens.length;
          continue;
        }

        if (isFunc && groups.length === 0) {
          groups.push(sub);
        }
        sub.push(token);
    }
    throw new Error('Unmatched brackets at index ' + tokens[startAt].pos);
  }

  public lastIndexOfOp (tokens: Token[], op: string): number {

    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i];
      if (token.value === op) {
        return i;
      }
    }
    return -1;
  }

  public lastIndexOfOpArr (tokens: Token[], opEleArr: string[]): any[] {
    let last = -1;
    let m: string;
    let item: string;
    let p: number;

    for (let i = 0; i < opEleArr.length; i++) {
      item = opEleArr[i];
      p = this.lastIndexOfOp(tokens, item);

      if (p === -1) {
        continue;
      }
      if (last === -1 || p > last) {
        last = p;
        m = item;
      }
    }
    return [last, m];
  }

  public buildTree (tokens: Token[]): Token {
    let op: string;
    let pos: number;
    let left: any;
    let right: any;

    for (let i = this.opArr.length - 1; i >= 0; i-- ) {
      const opEleArr = this.opArr[i];
      const found = this.lastIndexOfOpArr(tokens, opEleArr);
      pos = found[0];
      op = found[1];

      if (pos !== -1) {
      const token = tokens[pos];
      left = tokens.slice(0, pos);
      right = tokens.slice(pos + 1);

      if (left.length === 0 && (op === '-' || op === '+')) {
        left = null;
      }

      if ((left && left.length === 0) || (right && right.length === 0)) {
        throw new Error('Invalid Expression. No operator found!');
      }
      if (!left && op === '-') {

        left = new Token('number', '0');

      } else if (!left && op === '+') {
          return this.buildTree(right);
      }

      if (left) {
        token.left = this.buildTree(left);
      }
      if (right) {
        token.right = this.buildTree(right);
      }
      return token;
    }
    }

    let singleToken = tokens[0];
    if (singleToken.type === 'group') {
      singleToken = this.buildTree(singleToken.tokens);
    }
    return singleToken;
  }

  public parseNumber(data: string, startAt: number) {

    let i = startAt || 0;
    const len = data.length;
    for (; i < len; i++) {
      const tokenEle = data[i];
      if (tokenEle >= '0' && tokenEle <= '9' || tokenEle === '.') {
        continue;
      } else {
        break;
      }
    }
    return [data.substr(startAt, i - startAt), i];
  }

  public evaluateToke (token: Token): any {
    const value = token.value;

    switch (token.type) {
        case 'variable':
          return value;
        case 'number':
          return Number(value);
        case 'operator':
          // let res;
          switch (token.value) {
            case '/':
              return this.evaluateToke(token.left) / this.evaluateToke(token.right);
            case '*':
              return this.evaluateToke(token.left) * this.evaluateToke(token.right);
            case '+':
              return this.evaluateToke(token.left) + this.evaluateToke(token.right);
            case '-':
              return this.evaluateToke(token.left) - this.evaluateToke(token.right);
            default:
              break;
          }
        default:
        break;
    }

  }

//   public parseVariable(data: string, startAt: number) {

//     let i = startAt || 0;
//     const len = data.length;

//     const tokenEle = data[i];

//     for (; i < len; i++) {
//       if (this.char.indexOf(tokenEle) >= 0 ) {
//         continue;
//       } else {
//         break;
//       }
//     }
//     return [data.substr(startAt, i - startAt), i];
//   }
}

export class TokenNode {

  public type: string;

  public pos: number;

  public value: string;

  public left: TokenNode;

  public right: TokenNode;

  constructor (type: string, pos: number, value: string, left: TokenNode, right: TokenNode) {
    this.type = type;
    this.value = value;
    this.pos = pos;
    this.left = left;
    this.right = right;
  }
}

class Token {
  public type: string;
  public value: string;
  public pos?: number;
  public args?: any[];
  public tokens?: Token[];
  public left?: Token;
  public right?: Token;
  constructor (type: string, value: string, pos?: number, args?: string[], tokens?: Token[]) {
    this.type = type;
    this.value = value;
    this.pos = pos;
    this.args = args;
    this.tokens = tokens;
  }
}
