let cardsSelected = [], counter = 0

const toggleCards = async (e) => {
    const frontCards = document.querySelectorAll('.front');
    const frontArr = [...frontCards]
    const data = JSON.parse(localStorage.getItem('data'))
    let cardTarget = e.target.previousElementSibling
    console.log(cardTarget)
    if (e.target.localName === 'div' && cardsSelected.length < 2) {
        frontArr.forEach((el, i) => {
            if (el === cardTarget) {
                const alt = data[i].breeds.length !== 0 ? (data[i].breeds[0].name + ' ') : '';
                cardTarget.innerHTML = `<img loading="lazy" src="${data[i].url}" alt="${alt}Cat image">`
                cardsSelected.push(cardTarget)
                e.target.parentElement.classList.toggle('card--active')
            }
        })
    } 
    
    if (cardsSelected.length === 2) {
        console.log(cardsSelected)
        if (cardsSelected[0].firstChild.currentSrc === cardsSelected[1].firstChild.currentSrc) {
            console.log(frontArr.length)
            counter++
            cardsSelected = []
        } else {
            console.log(cardsSelected)
            setTimeout(() => {
                cardsSelected.forEach(el => {
                    el.parentElement.classList.remove('card--active')
                })
                cardsSelected = []
            }, 1000)
        }
    }

    if (counter === frontArr.length / 2) {
        console.log('Ganaste')
        const cards = document.getElementById('cards')
        cards.removeEventListener('click', toggleCards)
    }

}

export default toggleCards;