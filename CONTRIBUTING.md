# Contributing

## Prerequisites

Building and contributing to this repo requires the following dependencies:

1. [Node.js](https://nodejs.org/) v12 or later.
1. [yarn](https://www.npmjs.com/package/yarn)

We recommend using [VS Code](https://code.visualstudio.com/) for development.

## Package dependencies

We use yarn with [Zero Install](https://yarnpkg.com/features/zero-installs) as required so that GitHub Actions can execute the action defined in this repo immediately, since no package restore step is allowed to precede execution of a GitHub Action.

Set up VS Code to work with yarn's Zero Install mode by following these instructions ([source](https://yarnpkg.com/advanced/editor-sdks#vscode)):

1. Press Ctrl+Shift+P in a TypeScript file
1. Choose "Select TypeScript Version"
1. Pick "Use Workspace Version"

Also note [this caveat](https://yarnpkg.com/advanced/editor-sdks#caveat) and vote up 👍 [this issue](https://github.com/microsoft/vscode/issues/75559) 👍.

**Important**: Do **not** use `npm` to install packages.

## Build

`yarn build`

Note: If you get "'rm' is not recognized..." error from powershell, try add "C:\Program Files\Git\usr\bin" or a directory pointing to a "rm.exe" to your PATH.

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
