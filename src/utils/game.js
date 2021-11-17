import Template from '../templates/Template'
import showCardImage from './showCardImage'
import playPauseCrono from './stopwatch'
import cardMatchFound from './cardMatchFound'
import sizeStyles from './sizeStyles'
import buttonsDisable from './buttonsDisable'

const cards = document.getElementById('cards')
const playPause = document.getElementById('play-pause')
const reset = document.getElementById('reset')
const tries = document.getElementById('tries')
const size = document.getElementById('size')
let isPaused = true

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const game = () => {
    playPause.addEventListener('click', playPauseGame)
    reset.addEventListener('click', resetGame)
    size.addEventListener('change', resetGame)
}

const startGame = async () => {
    const frontCards = [...document.querySelectorAll('#cards > *')];
    console.log(frontCards)
    showCardImage(frontCards)
}

const playPauseGame = async () => {
    if (isPaused) {
        cards.addEventListener('click', showCardImage)
        cards.addEventListener('keyup', showCardImage)
        playPause.innerHTML = '<i class="fas fa-pause"></i>'
        if (tries.firstElementChild.textContent === '0') {
            startGame()
            await delay(2000)
        }
    } else {
        cards.removeEventListener('click', showCardImage)
        cards.removeEventListener('keyup', showCardImage)
        playPause.innerHTML = '<i class="fas fa-play"></i>'
    } 
    isPaused = !isPaused
    playPauseCrono()
}

const resetGame = async () => {
    isPaused = false
    playPauseGame()
    buttonsDisable(true)
    playPauseCrono(true)
    cardMatchFound(true)
    tries.innerHTML = 'Tries: <span>0</span>'
    cards.innerHTML = await Template()
    sizeStyles()
    buttonsDisable(false)
}

export { game , delay, resetGame }