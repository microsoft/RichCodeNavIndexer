class DeprecatedTask {
	public async run() {
		// Code Index deprecated, returning error on build.
		console.log(`As of January 2024, the RichCodeNavIndexer task is being deprecated. Please remove this task from your CI.`);
	}
}

new DeprecatedTask().run();
