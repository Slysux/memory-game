import cardsMatch from './cardsMatch'

let checkCards = cardsMatch()

const showCardImage = (e) => {
    const cardTarget = e.target.previousElementSibling
    const frontCards = [...document.querySelectorAll('.front')];
    const data = JSON.parse(localStorage.getItem('data'))
    if ([...e.target.classList].includes('back')) {
        console.log(cardTarget)
        frontCards.forEach((el, i) => {
            if (el === cardTarget) {
                const alt = data[i].breeds.length !== 0 ? (data[i].breeds[0].name + ' ') : '';
                cardTarget.innerHTML = `<img loading="lazy" src="${data[i].url}" alt="${alt}Cat image">`
                e.target.parentElement.classList.toggle('card--active')
                cards.removeEventListener('click', showCardImage)
                cardTarget.firstElementChild.addEventListener('load', () => {
                    cards.addEventListener('click', showCardImage)
                    checkCards(cardTarget)
                })
            }
        })
    }
}

export default showCardImage