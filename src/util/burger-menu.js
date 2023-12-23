export default class BurgerMenu {
	constructor() {
		this.status = false
		this.burger = document.querySelector('.header__burger')
		this.menu = document.querySelector('.header__list')
		this.link = document.querySelectorAll('.header__link')
		this.burger.addEventListener('click', () => this.handlerButton())

		for (const link of this.link) {
			link.addEventListener('click', () => {
				if (window.innerWidth < 769) {
					this.handlerButton()
				}
			})
		}
	}

	handlerButton() {
		this.status = !this.status
		if (this.status) {
			this.burger.classList.add('active')
			this.menu.classList.add('active')
			for (const item of this.menu.children) {
				item.classList.add('active')
			}
		} else {
			this.burger.classList.remove('active')
			this.menu.classList.remove('active')
			for (const item of this.menu.children) {
				item.classList.remove('active')
			}
		}
	}
}
