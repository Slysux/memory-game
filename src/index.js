import Template from './templates/Template'
import toggleCards from './utils/toggleCards'
import './styles/main.scss'

(async function App() {
    const main = null || document.getElementById('main')
    main.innerHTML = await Template()
    const cards = await document.getElementById('cards')
    cards.addEventListener('click', e => toggleCards(e))
})()