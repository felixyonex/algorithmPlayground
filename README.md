# ts-node-starter
A starting project for a typescript node app
## Setting up the enviroment
Just run `npm i`
## Application
Apllication source code should be put in src/app
To run the application use either `npm run start-w` (for development) or, if you need to set enviroment variables, you can do `cp scripts/run-local-sample.sh scripts/run-local.sh`, update the scripts/run-local.sh to include the enviroment variables and run it `sh scripts/run-local.sh`.

## Tests
We are using Jest here. `npm test` will run the tests once and `npm run test-w` will run then in the watch mode (recommended for development)

## Docker
There are sample docker files for you to extend as well as some handy scripts to use in CI (see *.yml, scripts/*.sh)

## Debugging

There are several options. By default, it will connect to the node debugger on 9229. You can also specify your own port via `DEBUG_PORT` environment variable. There are also a few other debug configurations: 
* Attach to process — attaches to the running process (works with ts-node-dev processes)
* Jest All — runs jest on all files with debugger attached — handy for debugging the tests
* Jest Current file — runs the current test file with debugger attached.
