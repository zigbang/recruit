class 게이트웨이 {
	get URL() {
		return `https://m.realty.daum.net/`
	}

	get 아파트() {
		return $(`//*[@id="__next"]/div[1]/div/div[1]/div/div/div/div/div/div/div/div[3]/div[1]`)
	}

	get 빌라() {
		return $(`//*[@id="__next"]/div[1]/div/div[1]/div/div/div/div/div/div/div/div[3]/div[2]`)
	}

	get 원룸() {
		return $(`//*[@id="__next"]/div[1]/div/div[1]/div/div/div/div/div/div/div/div[4]/div[1]`)
	}

	get 오피스텔() {
		return $(`//*[@id="__next"]/div[1]/div/div[1]/div/div/div/div/div/div/div/div[4]/div[2]`)
	}

}

export default new 게이트웨이()
