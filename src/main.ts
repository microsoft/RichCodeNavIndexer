import * as indexCore from '@richnav/rich-code-nav-indexer-core';
import { CachingTask, GitHubRepoInfo } from '@richnav/rich-code-nav-indexer-core';
import { factory } from 'cloudbuild-task-github-actions';

class GitHubCachingTask extends CachingTask {
	public pipelineHost: string = "GitHub Actions";
	protected getSourceControlInformationProvider(languageInput?: string | undefined): indexCore.BaseRepoInfo {
		return new GitHubRepoInfo(factory, factory.inputs.getInput('repo-token'), languageInput);
	}
}

new GitHubCachingTask(
	factory,
	{
		serviceConnection: factory.inputs.getInput('service-token'),
	}).run();
