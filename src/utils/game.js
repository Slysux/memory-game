import showCardImage from './showCardImage'
import playPauseCrono from './stopwatch'

const cards = document.getElementById('cards')
const playPause = document.getElementById('play-pause')
const reset = document.getElementById('reset')
const tries = document.getElementById('tries')
let isPaused = true

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const game = () => {
    console.log(playPause)
    playPause.addEventListener('click', playPauseGame)
    reset.addEventListener('click', resetGame)
}

const startGame = async () => {
    const frontCards = [...document.querySelectorAll('.card')];
    showCardImage(frontCards)
}

const playPauseGame = async () => {
    if (isPaused) {
        cards.addEventListener('click', showCardImage)
        playPause.innerHTML = 'Pause'
        if (tries.firstElementChild.textContent === '0') {
            startGame()
            await delay(2000)
        }
    } else {
        cards.removeEventListener('click', showCardImage)
        playPause.innerHTML = 'Play'
    } 
    isPaused = !isPaused
    playPauseCrono()
}

const resetGame = () => {
    playPauseCrono()
}

export { game , delay }