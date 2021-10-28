import cardsMatch from './cardsMatch'
import { delay } from './game'

let checkCards = cardsMatch()

const showCardImage = (e) => {
    if (e.length !== undefined) {
        e.forEach(async el => {
            if (![...el.classList].includes('card--active')){
                el.classList.add('card--active')
                await delay(2000)
                el.classList.remove('card--active')
            }
        })
    } else if ([...e.target.classList].includes('back')) {
        const cardTarget = e.target.previousElementSibling
        cards.removeEventListener('click', showCardImage)
        console.log(cardTarget)
        setTimeout(() => {
            cards.addEventListener('click', showCardImage)
            checkCards(cardTarget)
        }, 500)
        e.target.parentElement.classList.add('card--active')
    }
}

export default showCardImage