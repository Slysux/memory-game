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
        if ((e.type === 'keyup' && e.key === 'Enter') || e.type === 'click') {
            const cardTarget = e.target.previousElementSibling
            cards.removeEventListener('click', showCardImage)
            cards.removeEventListener('keyup', showCardImage)
            setTimeout(() => {
                cards.addEventListener('click', showCardImage)
                cards.addEventListener('keyup', showCardImage)
                checkCards(cardTarget)
            }, 500)
            e.target.tabIndex = -1
            e.target.blur()
            e.target.parentElement.classList.add('card--active')
        }
    }
}

export default showCardImage