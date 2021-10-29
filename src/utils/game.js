import showCardImage from './showCardImage'
import playPauseCrono from './stopwatch'
import Template from '../templates/Template'

const cards = document.getElementById('cards')
const playPause = document.getElementById('play-pause')
const reset = document.getElementById('reset')
const tries = document.getElementById('tries')
const size = document.getElementById('size')
// const time = document.getElementById('time')
let isPaused = true

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const game = () => {
    playPause.addEventListener('click', playPauseGame)
    reset.addEventListener('click', resetGame)
    size.addEventListener('change', resetGame)
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

const resetGame = async () => {
    tries.innerHTML = 'Tries: <span>0</span>'
    isPaused = false
    playPauseGame()
    playPauseCrono(true)
    cards.innerHTML = await Template()
}

export { game , delay }