import toggleCards from './toggleCards'

const start = async () => {
    const cards = document.getElementById('cards')
    cards.addEventListener('click', toggleCards)
}

export default start