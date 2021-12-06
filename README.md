# GitHub Action for Rich Code Navigation indexing

[![GitHub Actions status](https://github.com/microsoft/RichCodeNavIndexer/workflows/CI/PR/badge.svg)](https://github.com/microsoft/RichCodeNavIndexer/actions)

This action indexes the repo it runs within and uploads the language service data to the Rich Code Nav service.

**Pre-requisite:
You must [sign-up](https://aka.ms/richnavigation) and be approved for Rich Code Navigation Private Preview prior to installing this GitHub Action.**

## Example usage

```yaml
- uses: microsoft/RichCodeNavIndexer@v0.1
  with:
    repo-token: ${{ github.token }}
```

## Inputs

You may have specific requirements that need additional configurations beyond the default. There are a number of optional inputs that are accepted to support various repository requirements.

|Name|Default|Description
|--|--|--|
`repo-token` | | Required input to get access to the repo and should be set to `${{ github.token }}`.
`languages` | | List of languages to use when discovering repository symbols, separated by `,`
`environment` | `production` | `development`, `staging`, or `production`
`nugetFeed` | | Feed source to use when installing Rich Code Navigation NuGet packages
`nugetVersion` | `latest` | The version of the Rich Code Navigation nuget packages to use. Use `latest` to download the latest package (including prereleases).
`configFiles` | | The config file(s) for the project(s) to be indexed either as glob patterns or specific file paths relative to the root of the repo, separated by ','
`richNavLogOutputDirectory` | | A comma-separated list of log files created from the build when RichCodeNav.EnvVarDump is a package reference
`sourceRootDir` | | The directory on the machine where the source code is located, if different from the default.
`uploadRichNavArtifacts` | `false` | A boolean indicating whether Rich Nav log files should be uploaded as a build artifact. Not yet supported for GitHub Actions. Instead, please use the output variable `lspLogsPath` to publish Rich Nav artifacts.
`maxParallelIndexingJobs` | 2 | The number of indexers to be run in parallel.
`typescriptVersion` | 0.6.0-next.13 | Optional version of TypeScript tools to use. See https://www.npmjs.com/package/lsif
`csharpVersion` | 4.0.0-3.21372.2 | Optional version of Csharp tools to use. For versions see https://dnceng.visualstudio.com/public/_packaging?_a=feed&feed=dotnet-tools
`javaVersion` | 0.5.1 | Optional version of Java tools to use. For versions see https://github.com/microsoft/lsif-java/releases
`advancedOptionsCpp` | | Additional command line arguments to the c++ LSIF tool. E.g. --arch x86 --verbose
`defaultExpiry` | 30 | The default maximum number of days for an index to be saved (may be overridden by prExpiry and branchRetention settings)
`prExpiry` | 3 | The maximum number of days for the index of a PR to be saved
`branchRetention` | | A comma-separated list of specific branches and maximum number of days to retain; e.g. main, 15, release/production, 30

## Outputs

Name | Description
--|--
`lspLogsPath` | The path to LSP logs that may be uploaded as an artifact for diagnostics.

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
