import * as indexCore from '@cloudkernel/rich-code-nav-indexer-core';
import { CachingTask, GitHubRepoInfo } from '@cloudkernel/rich-code-nav-indexer-core';
import { factory } from 'cloudbuild-task-github-actions';

class GitHubCachingTask extends CachingTask {
	protected getSourceControlInformationProvider(useRichNavMsbuildLog: boolean, languageInput?: string | undefined): indexCore.BaseRepoInfo {
		console.log('Testing prod endpoint...');
		return new GitHubRepoInfo(factory, useRichNavMsbuildLog, factory.inputs.getInput('repo-token'), languageInput);
	}
}

new GitHubCachingTask(
	factory,
	{
		serviceConnection: factory.inputs.getInput('service-token'),
	}).run();
