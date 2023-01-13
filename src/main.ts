import * as indexCore from '@richnav/rich-code-nav-indexer-core';
import { CachingTask, GitHubRepoInfo } from '@richnav/rich-code-nav-indexer-core';
import { factory } from 'cloudbuild-task-github-actions';
import * as github from '@actions/github';

class GitHubCachingTask extends CachingTask {
	constructor(cloudTask, apiTokens) {
		super(cloudTask,
			{ pipelineHost: "GitHub Actions", buildId: github.context.runId.toString(), buildDefinitionId: github.context.workflow},
			apiTokens);
	}

	protected getSourceControlInformationProvider(languageInput?: string | undefined): indexCore.BaseRepoInfo {
		const repoToken = factory.inputs.getInput('repo-token') ?? process.env.REPO_TOKEN;
		return new GitHubRepoInfo(factory, repoToken, languageInput);
	}
}

const serviceConnection = factory.inputs.getInput('service-token') ?? process.env.SERVICE_TOKEN;
new GitHubCachingTask(
	factory,
	{
		serviceConnection: serviceConnection,

		// Used to access private NuGet feeds. Does nothing if isPrivate input is not `true`.
		systemVSSConnection: process.env.CODEINDEX_FEED_TOKEN,
	}).run();
