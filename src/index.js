import Template from './templates/Template'
import themeColor from './utils/themeColor'
import { game } from './utils/game'
import './styles/main.scss'
import './styles/media.scss'

(async function App() {
    const cards = null || document.getElementById('cards')
    const switcher = document.getElementById('switch')
    switcher.addEventListener('change', themeColor)
    cards.innerHTML = await Template()
    game()

})()