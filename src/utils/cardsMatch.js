import hideCardImage from './hideCardImage'
import cardMatchFound from './cardMatchFound'
import showCardImage from './showCardImage'

const cardsMatch = () => {
    let cardsSelected = []
    let tries = 0
    const addCard = (card) => {
        const triesText = document.getElementById('tries')
        cardsSelected.push(card)
        console.log(cardsSelected)
        if (cardsSelected.length === 2) {
            cards.removeEventListener('click', showCardImage)
            tries++
            triesText.innerHTML = `<span>Tries: </span>${tries}`
            console.log(tries)
            if (cardsSelected[0].firstChild.currentSrc === cardsSelected[1].firstChild.currentSrc) {
                cardMatchFound()
                cardsSelected = []
                return true
            }
            hideCardImage(cardsSelected)
            console.log("No son xd")
            cardsSelected = []
        }
        return false
    }
    return addCard
}

export default cardsMatch