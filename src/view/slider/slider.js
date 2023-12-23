import ElementCreator from '../../util/element-creator'
import favorites from '../../util/favorites'
import { sliderImage } from '../../util/variables'
import { Pagination } from './pagination/pagination'

export class Slider {
	constructor() {
		// ======== > singleton < ======== //
		if (Slider.exists) {
			return Slider.instance
		}
		Slider.instance = this
		Slider.exists = true
		// ======== > singleton < ======== //
		this.root = document.documentElement
		this.container = document.querySelector('.slider__slide-container')
		this.configureView()
		this.currentSlide = 0

		this.pagination = new Pagination()
		this.pagination.setLoader(this.currentSlide)

		this.arrows = document.querySelectorAll('.slider__arrow')
		this.arrows.forEach((arrow) => {
			arrow.addEventListener('click', (e) => {
				this.handlerButton(e.currentTarget.id)
				this.direction = e.currentTarget.id
			})
		})
		this.items = document.querySelectorAll('.slider__item')
		this.addEventListener()
		this.arrOrdinates = []
		this.statusDownMouse = false
		this.statusEventMouse = false
	}

	handlerButton(id) {
		this.disableButton()
		const width = this.getWidthSlide()
		if (this.currentSlide === 2 && id === 'arrow-right') {
			this.root.style.setProperty('--startTr', -(this.currentSlide * width))
			this.root.style.setProperty('--endTr', 0)
			this.currentSlide = 0
		} else if (id === 'arrow-right') {
			this.root.style.setProperty('--startTr', -(this.currentSlide * width))
			this.root.style.setProperty('--endTr', -((this.currentSlide + 1) * width))
			this.currentSlide += 1
		} else if (this.currentSlide === 0 && id === 'arrow-left') {
			this.root.style.setProperty('--startTr', -(0 * width))
			this.root.style.setProperty('--endTr', -(2 * width))
			this.currentSlide = 2
		} else {
			this.root.style.setProperty('--startTr', -(this.currentSlide * width))
			this.root.style.setProperty('--endTr', -((this.currentSlide - 1) * width))
			this.currentSlide -= 1
		}
		this.pagination.setLoader(this.currentSlide)
		this.container.classList.add('transition')
	}

	handleMouseOver() {
		this.pagination.pauseLoader()
	}

	handleMouseOut() {
		this.pagination.startLoader(this.currentSlide)
	}

	handleMouseMove(e) {
		if (this.statusDownMouse) {
			this.arrOrdinates.push(e.clientX)
		}
	}

	handleMouseDown(e) {
		this.startEvent()
	}

	handleMouseUp(e) {
		this.endEvent()
	}

	handleTouchStart(e) {
		this.startEvent()
	}

	handleTouchMove(e) {
		if (this.statusDownMouse) {
			this.arrOrdinates.push(e.touches[0].clientX)
		}
	}

	handleTouchEnd() {
		this.endEvent()
	}

	endTransitionHandler() {
		this.container.classList.remove('transition')
		this.changePosition()
		this.unDisableButton()
	}

	changePosition() {
		this.container.style.transform = `translateX(-${this.currentSlide * this.getWidthSlide()}px)`
	}

	disableButton() {
		this.arrows.forEach((el) => (el.disabled = true))
	}

	unDisableButton() {
		this.arrows.forEach((el) => (el.disabled = false))
		this.statusDownMouse = false
		this.statusEventMouse = false
	}

	startEvent() {
		if (!this.statusEventMouse) {
			this.statusDownMouse = true
			this.statusEventMouse = true
		}
	}

	endEvent() {
		const distance = this.arrOrdinates[0] - this.arrOrdinates[this.arrOrdinates.length - 1]
		if (distance > 0 && Math.abs(distance) > 100) {
			this.pagination.isPause = false
			this.handlerButton('arrow-right')
		} else if (Math.abs(distance) > 100) {
			this.pagination.isPause = false
			this.handlerButton('arrow-left')
		}
		this.arrOrdinates = []
		this.statusDownMouse = false
	}

	configureView() {
		favorites.forEach((fav, index) => {
			this.container.append(this.createElement(fav, index))
		})
	}

	/**
	 * @param {{name: string, description:string, price:string}} params
	 */
	createElement(params, index) {
		const item = new ElementCreator({ tag: 'div', classNames: ['slider__item'] }).getElement()

		const image = new ElementCreator({ tag: 'div', classNames: ['item__image'] }).getElement()

		const img = new ElementCreator({
			tag: 'img',
			classNames: [],
			attribute: [{ id: 'src', value: sliderImage[index] }],
		}).getElement()

		image.append(img)

		const title = new ElementCreator({
			tag: 'div',
			classNames: ['item__title'],
			textContent: params.name,
		}).getElement()

		const subtitle = new ElementCreator({
			tag: 'div',
			classNames: ['item__subtitle'],
			textContent: params.description,
		}).getElement()

		const price = new ElementCreator({
			tag: 'div',
			classNames: ['item__price'],
			textContent: `$${params.price}`,
		}).getElement()

		item.append(image, title, subtitle, price)

		return item
	}

	getWidthSlide() {
		return this.container.children[0].offsetWidth
	}

	addEventListener() {
		this.container.addEventListener('animationend', () => this.endTransitionHandler())
		this.container.addEventListener('touchstart', (e) => this.handleTouchStart(e), false)
		this.container.addEventListener('touchmove', (e) => this.handleTouchMove(e), false)
		this.container.addEventListener('touchend', () => this.handleTouchEnd(), false)
		this.container.addEventListener('mouseover', () => this.handleMouseOver(), false)
		this.container.addEventListener('mousedown', (e) => this.handleMouseDown(e))
		this.container.addEventListener('mouseup', (e) => this.handleMouseUp(e))
		this.container.addEventListener('mousemove', (e) => this.handleMouseMove(e), false)
		this.container.addEventListener('mouseout', () => this.handleMouseOut())
	}

	removeEventListener() {
		this.container.removeEventListener('animationend', () => this.endTransitionHandler())
		this.container.removeEventListener('touchstart', (e) => this.handleTouchStart(e), false)
		this.container.removeEventListener('touchmove', (e) => this.handleTouchMove(e), false)
		this.container.removeEventListener('touchend', () => this.handleTouchEnd(), false)
		this.container.removeEventListener('mouseover', () => this.handleMouseOver(), false)
		this.container.removeEventListener('mousedown', (e) => this.handleMouseDown(e))
		this.container.removeEventListener('mouseup', (e) => this.handleMouseUp(e))
		this.container.removeEventListener('mousemove', (e) => this.handleMouseMove(e), false)
		this.container.removeEventListener('mouseout', () => this.handleMouseOut())
	}
}
