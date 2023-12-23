import View from '../../../util/view'
import Button from './button/button'
import { buttonId, radioButtons } from '../../../util/variables'
import ElementCreator from '../../../util/element-creator'
import Grid from '../grid'
import products from '../../../util/products'
import { RefreshButton } from '../refresh-button'

export default class BlockButton extends View {
	constructor() {
		/**
		 * @type {import('../../../util/element-creator.js').ElementParams} params
		 */
		const params = {
			tag: 'div',
			classNames: ['main__block-button'],
		}
		super(params)
		// ======== > singleton < ======== //
		if (BlockButton.exists) {
			return BlockButton.instance
		}
		BlockButton.instance = this
		BlockButton.exists = true
		// ======== > singleton < ======== //
		this.checked = buttonId.coffee
		this.isPress = false
		this.control = document.querySelector('#control')
		this.refreshBtn = new RefreshButton()
		this.configureView()
		this.grid = new Grid()

		window.addEventListener('resize', () => {
			this.handleResize()
		})
	}

	configureView() {
		const blockButton = this.elementCreator.getElement()
		/**
		 * @type {import('../../../util/variables.js').typeButton} button
		 */
		radioButtons.forEach((button) => {
			const input = new ElementCreator({
				tag: 'input',
				classNames: ['input-menu'],
				attribute: [
					{ id: 'id', value: button.id },
					{ id: 'type', value: 'radio' },
					{ id: 'name', value: 'menu' },
				],
				callback: [{ event: 'click', callback: () => this.handleChange(button.id) }],
			}).getElement()

			if (button.id === this.checked) {
				this.handleChange(button.id)
				input.setAttribute('checked', true)
			}

			this.control.append(input)
			blockButton.append(new Button(button).getHtmlElement())
		})

		this.control.append(blockButton)
	}

	handleChange(value) {
		if (value === this.checked && this.isPress) {
			return
		}

		this.checked = value
		this.isPress = true

		this.handleResize()
	}

	handleRefresh() {
		const grid = new Grid()
		const productsCategory = products.filter((p) => p.category === this.checked)
		grid.configureView(productsCategory)
		this.refreshBtn.hideBtn()
	}

	handleResize() {
		const grid = new Grid()
		const value = this.checked
		const productsCategory = products.filter((p) => p.category === value)
		if (window.innerWidth < 769 && productsCategory.length > 4) {
			this.refreshBtn.showBtn()
		} else {
			this.refreshBtn.hideBtn()
		}

		if (window.innerWidth < 769) {
			productsCategory.splice(4, productsCategory.length - 1)
		}
		grid.configureView(productsCategory)
	}
}
