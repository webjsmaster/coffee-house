import CardItem from './cardItem/cardItem'
import './modal.scss'

export default class Modal {
	constructor() {
		// ======== > singleton < ======== //
		if (Modal.exists) {
			return Modal.instance
		}
		Modal.instance = this
		Modal.exists = true
		// ======== > singleton < ======== //
		this.show = false
		this.modal = document.querySelector('.modal')
		this.modal.addEventListener('click', (e) => {
			if (e.target === e.currentTarget) {
				this.closeModal()
			}
		})

		this.cardItem = new CardItem()
	}

	configureView(id) {
		this.cardItem.configureView(id)
	}

	render(id) {
		if (this.getStatus()) {
			this.modal.classList.add('active')
			this.configureView(id)
		} else {
			this.modal.classList.add('close')
			setTimeout(() => {
				this.modal.classList.remove('active')
				this.modal.classList.remove('close')
				this.modal.replaceChildren()
			}, 300)
		}
	}

	showModal(id) {
		this.show = true
		this.render(id)
	}

	closeModal() {
		this.show = false
		this.render()
	}

	getStatus() {
		return this.show
	}
}
