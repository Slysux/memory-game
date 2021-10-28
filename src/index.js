import Template from './templates/Template'
import { game } from './utils/game'
import './styles/main.scss'

(async function App() {
    const cards = null || document.getElementById('cards')
    cards.innerHTML = await Template()
    game()
})()