import hideCardImage from './hideCardImage'
import cardMatchFound from './cardMatchFound'
import showCardImage from './showCardImage'

const cardsMatch = () => {
    let cardsSelected = []
    const addCard = (card) => {
        const triesText = document.getElementById('tries')
        let tries = parseInt(triesText.firstElementChild.textContent)
        cardsSelected.push(card)
        if (cardsSelected.length === 2) {
            cards.removeEventListener('click', showCardImage)
            cards.removeEventListener('keyup', showCardImage)
            tries++
            triesText.innerHTML = `Tries: <span>${tries}</span>`
            if (cardsSelected[0].firstElementChild.currentSrc === cardsSelected[1].firstElementChild.currentSrc) {
                cardMatchFound()
                cardsSelected = []
                return true
            }
            hideCardImage(cardsSelected)
            cardsSelected = []
        }
        return false
    }
    return addCard
}

export default cardsMatch