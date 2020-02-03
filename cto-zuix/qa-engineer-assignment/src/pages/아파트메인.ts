class 아파트메인 {
	get URL() {
		return `https://m.realty.daum.net/home/apt`
	}

	get 뒤로가기() {
		return $(`//*[@id="__next"]/div[1]/div/div[1]/div/div[2]/div/div[1]/div/div[2]`)
	}
}

export default new 아파트메인()
