import Template from './templates/Template'
import { startGame, resetGame} from './utils/start'
import './styles/main.scss'

(async function App() {
    const cards = null || document.getElementById('cards')
    cards.innerHTML = await Template()
    const start = document.getElementById('start')
    start.addEventListener('click',  () => {
        startGame()
    })
})()