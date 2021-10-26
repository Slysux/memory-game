import showCardImage from "./showCardImage"
import playPause from './stopwatch'

let pairs = 8

const cardMatchFound = () => {
    pairs--
    console.log(pairs)
    cards.addEventListener('click', showCardImage)
    if (pairs === 0) {
        alert('Ganaste')
        playPause()
    }
    return pairs
}

export default cardMatchFound