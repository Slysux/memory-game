import showCardImage from './showCardImage'

const start = async () => {
    const cards = document.getElementById('cards')
    cards.addEventListener('click', showCardImage)
}

export default start