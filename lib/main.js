"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const rich_code_nav_indexer_core_1 = require("@richnav/rich-code-nav-indexer-core");
const cloudbuild_task_github_actions_1 = require("cloudbuild-task-github-actions");
const github = __importStar(require("@actions/github"));
class GitHubCachingTask extends rich_code_nav_indexer_core_1.CachingTask {
    constructor(cloudTask, apiTokens) {
        super(cloudTask, { pipelineHost: "GitHub Actions", buildId: github.context.runId.toString(), buildDefinitionId: github.context.workflow }, apiTokens);
    }
    getSourceControlInformationProvider(languageInput) {
        var _a;
        const repoToken = (_a = cloudbuild_task_github_actions_1.factory.inputs.getInput('repo-token')) !== null && _a !== void 0 ? _a : process.env.REPO_TOKEN;
        return new rich_code_nav_indexer_core_1.GitHubRepoInfo(cloudbuild_task_github_actions_1.factory, repoToken, languageInput);
    }
}
const serviceConnection = (_a = cloudbuild_task_github_actions_1.factory.inputs.getInput('service-token')) !== null && _a !== void 0 ? _a : process.env.SERVICE_TOKEN;
new GitHubCachingTask(cloudbuild_task_github_actions_1.factory, {
    serviceConnection: serviceConnection,
    systemVSSConnection: process.env.CODEINDEX_FEED_TOKEN,
}).run();
//# sourceMappingURL=main.js.map