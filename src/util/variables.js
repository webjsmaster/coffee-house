import coffeeIcon from '../images/coffee-icon.png'
import teaIcon from '../images/tea-icon.png'
import dessertIcon from '../images/dessert-icon.png'

import slide1 from '../images/coffee-slider-1.png'
import slide2 from '../images/coffee-slider-2.png'
import slide3 from '../images/coffee-slider-3.png'

import coffee1 from '../images/coffee-1.jpg'
import coffee2 from '../images/coffee-2.jpg'
import coffee3 from '../images/coffee-3.jpg'
import coffee4 from '../images/coffee-4.jpg'
import coffee5 from '../images/coffee-5.jpg'
import coffee6 from '../images/coffee-6.jpg'
import coffee7 from '../images/coffee-7.jpg'
import coffee8 from '../images/coffee-8.jpg'

import tea1 from '../images/tea-1.png'
import tea2 from '../images/tea-2.png'
import tea3 from '../images/tea-3.png'
import tea4 from '../images/tea-4.png'

import dessert1 from '../images/dessert-1.png'
import dessert2 from '../images/dessert-2.png'
import dessert3 from '../images/dessert-3.png'
import dessert4 from '../images/dessert-4.png'
import dessert5 from '../images/dessert-5.png'
import dessert6 from '../images/dessert-6.png'
import dessert7 from '../images/dessert-7.png'
import dessert8 from '../images/dessert-8.png'

const buttonId = {
	coffee: 'coffee',
	tea: 'tea',
	dessert: 'dessert',
}

/**
 * @typedef {{
 * size: string,
 * add-price: string,
 * }} TypeSizes
 */

/**
 * @typedef {{
 * s: {size: string, add-price: string},
 * m: TypeSizes,
 * l: TypeSizes
 * }} SizesProducts
 */

/**
 * @typedef {{
 * name: string,
 * add-price: string
 * }} AdditivesProducts
 */

/**
 * @typedef {{
 * name: string,
 * description: string,
 * price: string,
 * category: string,
 * sizes: SizesProducts,
 * additives: AdditivesProducts[],
 * }} TypeProducts
 */

/**
 * @type {TypeProducts}
 */

/**
 * @typedef {{
 * id: string,
 * title: string,
 * image: string
 * }} TypeButton
 */

/**
 * @type {TypeButton}
 */
const radioButtons = [
	{ id: buttonId.coffee, title: 'Coffee', image: coffeeIcon },
	{ id: buttonId.tea, title: 'Tea', image: teaIcon },
	{ id: buttonId.dessert, title: 'Dessert', image: dessertIcon },
]

const coffeeImage = [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6, coffee7, coffee8]
const teaImage = [tea1, tea2, tea3, tea4]
// eslint-disable-next-line max-len
const dessertImage = [dessert1, dessert2, dessert3, dessert4, dessert5, dessert6, dessert7, dessert8]
const images = { coffee: coffeeImage, tea: teaImage, dessert: dessertImage }
const sliderImage = [slide1, slide2, slide3]

export { buttonId, radioButtons, coffeeImage, images, sliderImage }
