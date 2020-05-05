# Contributing

## Prerequisites

Building and contributing to this repo requires the following dependencies:

1. [Node.js](https://nodejs.org/) v12 or later.
1. [yarn](https://www.npmjs.com/package/yarn)

We recommend using [VS Code](https://code.visualstudio.com/) for development.

## Restore packages

Restore packages with `yarn`.

Do **not** use `npm` to install packages. Our yarn.lock file will only be effective when using yarn.

## Build

`yarn build`

(Note: If you get "'rm' is not recognized..." error from powershell, try add "C:\Program Files\Git\usr\bin" or a directory pointing to a "rm.exe" to your PATH.)

## Test

Use `yarn test` to run all tests in the repo.
Use `yarn test --watch` to keep re-running tests on every save of a .ts file.

### Local GitHub Action emulation

1. Set these environment variables.

    ```ps1
    $env:GITHUB_REPOSITORY='microsoft/RichCodeNavIndexer'
    $env:INPUT_ENVIRONMENT='production'
    $env:RUNNER_TEMP="$env:TEMP/githubSimulation"
    ```

1. Run `node lib/main.js`

### Debug logging while on live on GitHub Actions

Set these two *secret* variables in a GitHub repo to enable debug logging within its github workflows:

|Secret|Value|
|--|--|
`ACTIONS_RUNNER_DEBUG`|`true`
`ACTIONS_STEP_DEBUG`|`true`

See more in [Action Debugging](https://github.com/actions/toolkit/blob/master/docs/action-debugging.md).
