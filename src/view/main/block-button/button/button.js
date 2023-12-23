import ElementCreator from '../../../../util/element-creator'
import View from '../../../../util/view'

export default class Button extends View {
	constructor(button) {
		/**
		 * @type {import('../../../../util/element-creator.js').ElementParams} params
		 */
		const params = {
			tag: 'div',
			classNames: ['button'],
		}
		super(params)
		this.configureView(button)
	}

	/**
	 * @type {import('../../../../util/variables.js').TypeButton} button
	 */
	configureView(button) {
		const wrapper = this.elementCreator.getElement()

		const label = new ElementCreator({
			tag: 'label',
			classNames: ['button__label'],
			attribute: [{ id: 'for', value: button.id }],
		}).getElement()

		const icon = new ElementCreator({
			tag: 'div',
			classNames: ['button__icon'],
		}).getElement()

		const img = new ElementCreator({
			tag: 'img',
			classNames: [],
			attribute: [{ id: 'src', value: button.image }],
		}).getElement()

		icon.append(img)

		const titleElement = new ElementCreator({
			tag: 'span',
			classNames: ['button__title'],
			textContent: button.title,
		}).getElement()

		wrapper.append(label, icon, titleElement)
	}
}
