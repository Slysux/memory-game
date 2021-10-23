import hideCardImage from './hideCardImage'

const cardsMatch = () => {
    let cardsSelected = []
    const addCard = (card) => {
        cardsSelected.push(card)
        console.log(cardsSelected)
        if (cardsSelected.length === 2) {
            if (cardsSelected[0].firstChild.currentSrc === cardsSelected[1].firstChild.currentSrc) {
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