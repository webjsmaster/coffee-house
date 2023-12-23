import './content.scss'
import products from '../../../util/products'
import { images } from '../../../util/variables'
// eslint-disable-next-line no-unused-vars
import * as Types from '../../../util/variables'
import View from '../../../util/view'
import ElementCreator from '../../../util/element-creator'
import BlockButtonsModal from './block-buttons/block-buttons'
import ModalInfo from '../info/info'
import Modal from '../modal'

export default class CardItem extends View {
	constructor() {
		/**
		 * @type {import('../../../util/element-creator.js').ElementParams} params
		 */
		const params = {
			tag: 'div',
			classNames: ['modal__window'],
		}
		super(params)
		// ======== > singleton < ======== //
		if (CardItem.exists) {
			return CardItem.instance
		}
		CardItem.instance = this
		CardItem.exists = true
		// ======== > singleton < ======== //
		this.modalView = document.querySelector('.modal')
		this.cost = 0
		this.modal = new Modal()
	}

	configureView(id) {
		this.product = products.find((p) => p.name === id)
		const productsWithCategories = products.filter((p) => p.category === this.product.category)
		const index = productsWithCategories.findIndex((p) => p.name === this.product.name)

		this.createContent(this.product, index)
	}

	/**
	 * @param {Types.TypeProducts} product
	 */
	createContent(product, index) {
		const window = this.elementCreator.getElement()
		window.replaceChildren()
		const poster = new ElementCreator({ tag: 'div', classNames: ['modal__poster'] }).getElement()
		const img = new ElementCreator({
			tag: 'img',
			classNames: [],
			attribute: [{ id: 'src', value: images[product.category][index] }],
		}).getElement()

		poster.append(img)

		const description = new ElementCreator({ tag: 'div', classNames: ['modal__description'] }).getElement()
		const title = new ElementCreator({ tag: 'div', classNames: ['modal__title'] }).getElement()

		title.append(
			new ElementCreator({ tag: 'div', classNames: [], textContent: `${product.name}` }).getElement(),
			new ElementCreator({ tag: 'span', classNames: [], textContent: `${product.description}` }).getElement(),
		)

		const blockButtons1 = new ElementCreator({ tag: 'div', classNames: ['modal__block-buttons'] }).getElement()
		const blockButtons2 = new ElementCreator({ tag: 'div', classNames: ['modal__block-buttons'] }).getElement()

		const blockButtonsTitle1 = new ElementCreator({
			tag: 'div',
			classNames: ['block-buttons__title'],
			textContent: 'Size',
		}).getElement()
		const blockButtonsTitle2 = new ElementCreator({
			tag: 'div',
			classNames: ['block-buttons__title'],
			textContent: 'Additives',
		}).getElement()

		blockButtons1.append(blockButtonsTitle1, new BlockButtonsModal({ ...product.sizes }).getHtmlElement())
		blockButtons2.append(blockButtonsTitle2, new BlockButtonsModal({ ...product.additives }).getHtmlElement())

		const total = new ElementCreator({ tag: 'div', classNames: ['modal__total'] }).getElement()
		this.price = new ElementCreator({ tag: 'div', classNames: [], textContent: `$${product.price}` }).getElement()

		total.append(new ElementCreator({ tag: 'div', classNames: [], textContent: 'Total:' }).getElement(), this.price)

		const closeBtn = new ElementCreator({
			tag: 'button',
			classNames: ['modal__close-btn'],
			textContent: 'Close',
			callback: [{ event: 'click', callback: () => this.handleClose() }],
		}).getElement()

		const modalInfo = new ModalInfo().getHtmlElement()

		description.append(title, blockButtons1, blockButtons2, total, modalInfo, closeBtn)

		window.append(poster, description)
		this.modalView.append(window)
	}

	handleChangeCost() {
		this.cost = 0

		const checkedBoxes = document.querySelectorAll('input[name=size]:checked')
		const checkedBoxes1 = document.querySelectorAll('input[name=additives]:checked')

		checkedBoxes.forEach((el) => {
			for (const iterator in this.product.sizes[el.id]) {
				if (+this.product.sizes[el.id][iterator]) {
					this.cost += +this.product.sizes[el.id][iterator]
				}
			}
		})

		checkedBoxes1.forEach((el) => {
			const currentAdditives = this.product.additives.find((a) => a.name === el.id)
			for (const iterator in currentAdditives) {
				if (+currentAdditives[iterator]) {
					this.cost += +currentAdditives[iterator]
				}
			}
		})
		const total = +this.product.price + this.cost

		const dol = String(total).split('.')[0]
		const cent = String(total).split('.')[1]

		this.price.textContent = `$${`${dol}.${cent ? `${cent}0` : '00'}`}`
	}

	handleClose() {
		this.modal.closeModal()
	}
}
