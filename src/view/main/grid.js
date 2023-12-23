import ElementCreator from '../../util/element-creator'
import { images } from '../../util/variables'
import Modal from '../modal/modal'

export default class Grid {
	constructor() {
		this.grid = document.querySelector('#grid')
		this.modal = new Modal()
	}

	/**
	 * @param {import('../../util/variables.js').CoffeeItem[]} arrData
	 */
	configureView(arrData) {
		if (this.grid.childNodes.length) {
			this.grid.childNodes.forEach((el) => {
				el.classList.remove('open')
				el.classList.add('close')
			})
			setTimeout(() => {
				this.grid.replaceChildren()
				arrData.forEach((data, index) => {
					this.grid.append(this.createItem(data, index))
				})
				this.grid.childNodes.forEach((el) => {
					el.classList.add('open')
					setTimeout(() => {
						el.classList.remove('open')
					}, 200)
				})
			}, 200)
		} else {
			this.grid.replaceChildren()
			arrData.forEach((data, index) => {
				this.grid.append(this.createItem(data, index))
			})
		}
	}

	createItem(data, index) {
		const item = new ElementCreator({
			tag: 'li',
			classNames: ['grid__item'],
			attribute: [{ id: 'id', value: data.name }],
		}).getElement()

		item.addEventListener('click', (e) => {
			this.modal.showModal(e.currentTarget.id)
		})

		const poster = new ElementCreator({
			tag: 'div',
			classNames: ['grid__poster'],
		}).getElement()

		const description = new ElementCreator({
			tag: 'div',
			classNames: ['grid__description'],
		}).getElement()

		const title = new ElementCreator({
			tag: 'div',
			classNames: ['grid__title'],
			textContent: data.name,
		}).getElement()

		const spinner = new ElementCreator({ tag: 'div', classNames: ['spinner'] }).getElement()
		const spinnerChild1 = new ElementCreator({ tag: 'div', classNames: [] }).getElement()
		const spinnerChild2 = new ElementCreator({ tag: 'div', classNames: [] }).getElement()
		spinner.append(spinnerChild1, spinnerChild2)

		const image = new ElementCreator({
			tag: 'img',
			classNames: [],
			attribute: [
				{ id: 'src', value: images[data.category][index] },
				{ id: 'onload', value: 'imgLoaded(this)' },
			],
		}).getElement()

		poster.append(spinner, image)

		const subtitle = new ElementCreator({
			tag: 'div',
			classNames: ['grid__subtitle'],
			textContent: data.description,
		}).getElement()

		const price = new ElementCreator({
			tag: 'div',
			classNames: ['grid__price'],
			textContent: `\u0024${data.price}`,
		}).getElement()

		description.append(title, subtitle, price)

		item.append(poster, description)

		return item
	}
}
