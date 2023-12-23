import { Slider } from '../slider'

export class Pagination {
	constructor() {
		// ======== > singleton < ======== //
		if (Pagination.exists) {
			return Pagination.instance
		}
		Pagination.instance = this
		Pagination.exists = true
		// ======== > singleton < ======== //
		this.loaders = document.querySelectorAll('.pagination__loader')
		this.count = 1
		this.interval = null
		this.isPause = false
		this.slider = new Slider()
	}

	setLoader(currentSlide) {
		this.count = 1
		clearInterval(this.interval)
		this.interval = setInterval(() => {
			this.increment(currentSlide)
		}, 60)
		// this.startLoader(currentSlide)
		this.loaders.forEach((loader) => loader.style.setProperty('--loaderWidthPercent', `${0}%`))
	}

	startLoader = (currentSlide) => {
		clearInterval(this.interval)
		if (this.isPause) {
			this.interval = setInterval(() => {
				this.increment(currentSlide)
			}, 60)
		}
	}

	pauseLoader() {
		this.isPause = true
		clearInterval(this.interval)
	}

	increment(currentSlide) {
		this.loaders[currentSlide].style.setProperty('--loaderWidthPercent', `${this.count}%`)
		this.count += 1
		if (this.count >= 101) {
			clearInterval(this.interval)
			this.count = 1
			this.slider.handlerButton('arrow-right')
		}
	}
}
