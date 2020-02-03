export class BaseSpec {
	static IMPLICIT_TIMEOUT = 5 * 60 * 1000

	static before() {
		browser.setWindowSize(400, 900)
	}
}
