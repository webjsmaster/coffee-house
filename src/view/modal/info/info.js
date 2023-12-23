import View from '../../../util/view'
import iconInfo from '../../../images/info-empty.svg'

export default class ModalInfo extends View {
	constructor() {
		/**
		 * @type {import('../../../util/variables.js').ElementParams} params
		 */
		const params = {
			tag: 'div',
			classNames: ['modal__info'],
		}
		super(params)
		this.configureView()
	}

	configureView() {
		const modalInfo = this.elementCreator.getElement()
		const htmlData = `<div class="info__icon">
            <img src=${iconInfo} alt="info-image">
        </div>
        <div class="info__text">
            The cost is not final. 
			Download our mobile app to see the final price and place your order. 
			Earn loyalty points and enjoy your favorite coffee with up to 20% discount.
        </div>`
		modalInfo.innerHTML = htmlData
	}
}
