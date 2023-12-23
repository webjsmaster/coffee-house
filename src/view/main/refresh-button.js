import BlockButton from './block-button/block-button';

export class RefreshButton {
	constructor() {
		this.button = document.querySelector('.main__button')

		this.button.addEventListener('click', () => this.handleClick())
		this.button.addEventListener('animationend', () => this.toggleClass())

		this.blockButton = new BlockButton()
	}

	showBtn() {
		this.button.classList.add('show')
	}

	hideBtn() {
		this.button.classList.remove('show')
	}

	handleClick() {
		this.button.classList.add('active')
	}

	toggleClass() {
		this.button.classList.remove('active')
		this.blockButton.handleRefresh()
	}
}
