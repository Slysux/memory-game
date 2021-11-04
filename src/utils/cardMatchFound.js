import showCardImage from "./showCardImage"
import showResults from './showResults'

let pairs = parseInt(document.getElementById('size').value)

const cardMatchFound = (reset = false) => {
    if (reset) {
        pairs = parseInt(document.getElementById('size').value)
    } else {
        pairs--
        console.log(pairs)
        cards.addEventListener('click', showCardImage)
        cards.addEventListener('keyup', showCardImage)
        if (pairs === 0) {
            showResults()
        }
    }
    return pairs
}

export default cardMatchFound