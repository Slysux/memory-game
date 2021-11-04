import Popup from '../templates/Popup'
import playPauseCrono from './stopwatch'
import { resetGame } from './game'


const showResults = async () => {
    const overlay = document.querySelector('.overlay')
    playPauseCrono()
    overlay.innerHTML = await Popup()
    overlay.classList.add('active')
    const popupButton = document.getElementById('popup-button')
    popupButton.addEventListener('click', function handler(e) {
        overlay.classList.remove('active')
        resetGame()
        e.target.removeEventListener('click', handler)
    })
}

export default showResults