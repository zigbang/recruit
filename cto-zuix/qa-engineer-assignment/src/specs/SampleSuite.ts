import { suite, test } from "@testdeck/mocha"
import * as assert from "assert"

import { BaseSpec } from "./BaseSpec"

import 게이트웨이 from "../pages/게이트웨이"
import 아파트메인 from "../pages/아파트메인"
import 원룸메인 from "../pages/원룸메인"

@suite("SampleSuite")
export class Suite extends BaseSpec {
	static before() {
		super.before()
		browser.url("/")
		browser.pause(5000)
	}

	@test
	SampleTest_게이트웨이화면() {
		assert.equal(게이트웨이.URL, browser.getUrl())
	}

	@test
	SampleTest_아파트진입() {
		게이트웨이.아파트.waitForDisplayed()
		게이트웨이.아파트.click()

		browser.pause(5000)
		assert.equal(아파트메인.URL, browser.getUrl())

		아파트메인.뒤로가기.waitForDisplayed()
		아파트메인.뒤로가기.click()

		browser.pause(5000)
		assert.equal(게이트웨이.URL, browser.getUrl())
	}

	@test
	SampleTest_원름진입() {
		게이트웨이.원룸.waitForDisplayed()
		게이트웨이.원룸.click()

		browser.pause(5000)
		assert.equal(원룸메인.URL, browser.getUrl())

		원룸메인.뒤로가기.waitForDisplayed()
		원룸메인.뒤로가기.click()

		browser.pause(5000)
		assert.equal(게이트웨이.URL, browser.getUrl())
	}
}
