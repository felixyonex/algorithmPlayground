import { Grammars } from 'ebnf';
import * as readline from 'readline';
export class FormalGrammar2 {

}
const lisp = `
<Equation>         ::= <BinaryOperation> | <Term>
<Term>             ::= "(" <RULE_WHITESPACE> <Equation> <RULE_WHITESPACE> ")" | "(" <RULE_WHITESPACE> <Number> <RULE_WHITESPACE> ")" | <RULE_WHITESPACE> <Number> <RULE_WHITESPACE>
<BinaryOperation>  ::= <Term> <RULE_WHITESPACE> <Operator> <RULE_WHITESPACE> <Term>

<Number>           ::= <RULE_NEGATIVE> <RULE_NON_ZERO> <RULE_NUMBER_LIST> | <RULE_NON_ZERO> <RULE_NUMBER_LIST> | <RULE_DIGIT>
<Operator>         ::= "+" | "-" | "*" | "/" | "^"

<RULE_NUMBER_LIST> ::= <RULE_DIGIT> <RULE_NUMBER_LIST> | <RULE_DIGIT>
<RULE_NEGATIVE>    ::= "-"
<RULE_NON_ZERO>    ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<RULE_DIGIT>       ::= "0" | <RULE_NON_ZERO>
<RULE_WHITESPACE>  ::= <RULE_WS> | ""
<RULE_WS>          ::= " " <RULE_WHITESPACE> | <EOL> <RULE_WHITESPACE> | " " | <EOL>
`;
const myGrammar = `
<ValidInput>       ::= <FunctionList> ";" <RULE_WHITESPACE> <Equation> | <Equation>
<FunctionList>     ::= <FunctionDef> ";" <RULE_WHITESPACE> <FunctionList> | <FunctionDef>
<FunctionDef>      ::= <FunctionName> "(" <Arguments> ")" <RULE_WHITESPACE> <FunctionAssign> <RULE_WHITESPACE> <Equation>
<Function>         ::= <FunctionName> "(" <Arguments> ")"
<Arguments>        ::= <Variable> "," <RULE_WHITESPACE> <Arguments> | <Number> "," <RULE_WHITESPACE> <Arguments> | <Number> | <Variable>
<FunctionName>     ::= <Variable>

<Variable>         ::= <RULE_LETTER> <VariableRest> | <Punctuation> <VariableRest> | <RULE_LETTER>
<VariableRest>     ::= <RULE_LETTER> <VariableRest> | <RULE_NUMBER_LIST> <VariableRest> | <Punctuation> <VariableRest>

<FunctionAssign>   ::= ":="
<Punctuation>      ::= "_" | "$"
<RULE_LETTER>      ::= "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z"
<Equation>         ::= <BinaryOperation> | <Term>
<Term>             ::= "(" <RULE_WHITESPACE> <Equation> <RULE_WHITESPACE> ")" | "(" <RULE_WHITESPACE> <TermElement> <RULE_WHITESPACE> ")" | <RULE_WHITESPACE> <TermElement> <RULE_WHITESPACE>
<BinaryOperation>  ::= <Term> <RULE_WHITESPACE> <Operator> <RULE_WHITESPACE> <Term>

<TermElement>      ::= <Number> | <Function> | <Variable>
<Number>           ::= <RULE_NEGATIVE> <RULE_NON_ZERO> <RULE_NUMBER_LIST> | <RULE_NON_ZERO> <RULE_NUMBER_LIST> | <RULE_DIGIT>
<Operator>         ::= "+" | "-" | "*" | "/" | "^"

<RULE_NUMBER_LIST> ::= <RULE_DIGIT> <RULE_NUMBER_LIST> | <RULE_DIGIT>
<RULE_NEGATIVE>    ::= "-"
<RULE_NON_ZERO>    ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<RULE_DIGIT>       ::= "0" | <RULE_NON_ZERO>
<RULE_WHITESPACE>  ::= <RULE_WS> | ""
<RULE_WS>          ::= " " <RULE_WHITESPACE> | <EOL> <RULE_WHITESPACE> | " " | <EOL>

`;

const bnfParser = new Grammars.BNF.Parser(myGrammar, {});
//const tree = bnfParser.getAST('f(x) := (x + 2); g(x) := (x + 2); f(x) + g(x)');
const tree = bnfParser.getAST('1 + (1 - 2)');
console.log(tree);
