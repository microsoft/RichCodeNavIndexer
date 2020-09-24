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
`nugetFeed` | | Feed source to use when installing Rich Code Navigation NuGet packages
`nugetVersion` | `latest` | The version of the Rich Code Navigation nuget packages to use. Use `latest` to download the latest package (including prereleases).
`environment` | `production` | `development`, `staging`, or `production`
`richNavLogOutputDirectory` | | A comma-separated list of log files created from the build when RichCodeNav.EnvVarDump is a package reference

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
