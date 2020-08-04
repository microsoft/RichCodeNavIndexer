"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rich_code_nav_indexer_core_1 = require("@richnav/rich-code-nav-indexer-core");
const cloudbuild_task_github_actions_1 = require("cloudbuild-task-github-actions");
class GitHubCachingTask extends rich_code_nav_indexer_core_1.CachingTask {
    getSourceControlInformationProvider(useRichNavMsbuildLog, languageInput) {
        return new rich_code_nav_indexer_core_1.GitHubRepoInfo(cloudbuild_task_github_actions_1.factory, useRichNavMsbuildLog, cloudbuild_task_github_actions_1.factory.inputs.getInput('repo-token'), languageInput);
    }
}
new GitHubCachingTask(cloudbuild_task_github_actions_1.factory, {
    serviceConnection: cloudbuild_task_github_actions_1.factory.inputs.getInput('service-token'),
}).run();
//# sourceMappingURL=main.js.map