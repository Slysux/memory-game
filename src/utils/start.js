import showCardImage from './showCardImage'
import playPause from './stopwatch'

const cards = document.getElementById('cards')
const start = document.getElementById('start')
let isPaused = true

const startGame = async () => {
    if (isPaused) {
        cards.addEventListener('click', showCardImage)
        start.innerHTML = 'Pause'
    } else {
        cards.removeEventListener('click', showCardImage)
        start.innerHTML = 'Play'
    } 
    isPaused = !isPaused
    playPause()
}

const resetGame = () => {
    const pause = document.getElementById('pause')
    pause.addEventListener('click', () => {
        playPause()
    })
}

export { startGame, resetGame }