import ElementCreator from '../../../../util/element-creator'
import View from '../../../../util/view'
import CardItem from '../cardItem.js'

export default class BlockButtonsModal extends View {
	constructor(buttons) {
		/**
		 * @type {import('../../../../util/element-creator.js').ElementParams} params
		 */
		const params = {
			tag: 'div',
			classNames: ['block-buttons__choice-block'],
		}
		super(params)
		this.cardItem = new CardItem()
		this.configureView(buttons)
	}

	configureView(buttons) {
		const choiceBlock = this.elementCreator.getElement()
		for (const sizes in buttons) {
			const id = buttons[sizes].name ? buttons[sizes].name.split(' ')[0] : sizes

			const groupInput = buttons[sizes].name ? 'additives' : 'size'

			const input = new ElementCreator({
				tag: 'input',
				classNames: ['block-buttons__input'],
				attribute: [
					{ id: 'id', value: id },
					{ id: 'type', value: `${groupInput === 'size' ? 'radio' : 'checkbox'}` },
					{ id: 'name', value: `${groupInput}` },
				],
				callback: [{ event: 'click', callback: () => this.handleChange() }],
			}).getElement()

			if (sizes === 's') {
				input.setAttribute('checked', true)
			}

			choiceBlock.append(input)
		}

		const buttonsView = new ElementCreator({
			tag: 'div',
			classNames: ['block-buttons__buttons-view'],
		}).getElement()

		for (const sizes in buttons) {
			const id = buttons[sizes].name ? buttons[sizes].name.split(' ')[0] : sizes
			const button = new ElementCreator({
				tag: 'div',
				classNames: ['button'],
			}).getElement()

			const label = new ElementCreator({
				tag: 'label',
				classNames: ['button__label'],
				attribute: [{ id: 'for', value: id }],
			}).getElement()
			const icon = new ElementCreator({
				tag: 'div',
				classNames: ['button__icon'],
				textContent: `${buttons[sizes].name ? +sizes + 1 : sizes}`,
			}).getElement()
			const title = new ElementCreator({
				tag: 'span',
				classNames: ['button__title'],
				textContent: `${buttons[sizes].name ? buttons[sizes].name : buttons[sizes].size}`,
			}).getElement()

			button.append(label, icon, title)
			buttonsView.append(button)
		}
		choiceBlock.append(buttonsView)
	}

	handleChange() {
		this.cardItem.handleChangeCost()
	}
}
