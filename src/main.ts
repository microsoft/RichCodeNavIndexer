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
		return new GitHubRepoInfo(factory, factory.inputs.getInput('repo-token'), languageInput);
	}
}

new GitHubCachingTask(
	factory,
	{
		serviceConnection: factory.inputs.getInput('service-token'),
	}).run();
