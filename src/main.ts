import * as indexCore from '@richnav/rich-code-nav-indexer-core';
import { CachingTask, GitHubRepoInfo } from '@richnav/rich-code-nav-indexer-core';
import { factory } from 'cloudbuild-task-github-actions';

class GitHubCachingTask extends CachingTask {
	public pipelineHost: string = "GitHub Actions";
	protected getSourceControlInformationProvider(useRichNavMsbuildLog: boolean, languageInput?: string | undefined): indexCore.BaseRepoInfo {
		return new GitHubRepoInfo(factory, useRichNavMsbuildLog, factory.inputs.getInput('repo-token'), languageInput);
	}
}

new GitHubCachingTask(
	factory,
	{
		serviceConnection: factory.inputs.getInput('service-token'),
	}).run();
