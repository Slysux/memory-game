import showCardImage from "./showCardImage"
import playPauseCrono from './stopwatch'

let pairs = parseInt(document.getElementById('size').value)

const cardMatchFound = () => {
    pairs--
    console.log(pairs)
    cards.addEventListener('click', showCardImage)
    if (pairs === 0) {
        alert('Ganaste')
        playPauseCrono()
    }
    return pairs
}

export default cardMatchFound