import * as github from '@actions/github';

class DeprecatedTask {
	public async run() {
		// Code Index deprecated, returning error on build.
		github.warning(`As of January 2024, the RichCodeNav task is being deprecated. Please remove this task from your CI.`);
	}
}

new DeprecatedTask().run();
