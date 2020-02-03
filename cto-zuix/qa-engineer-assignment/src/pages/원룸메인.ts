class 원룸메인 {
	get URL() {
		return `https://m.realty.daum.net/home/oneroom`
	}

	get 뒤로가기() {
		return $(`//*[@id="__next"]/div[1]/div/div[1]/div/div[2]/div/div[1]/div/div[2]`)
	}
}

export default new 원룸메인()
