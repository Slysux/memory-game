
const sizeStyles = () => {
    const frontCards = [...document.querySelectorAll('.card')];
    if (size.value === '6') {
        cards.className = 'cards--small'
        console.log(frontCards)
        frontCards.forEach(el => {
            el.className = 'card--small'
        })
    } else if (size.value === '15') {
        cards.className = 'cards--large'
        frontCards.forEach(el => {
            el.className = 'card--large'
        })
    }
    if (size.value <= 8) {
        cards.className = 'cards--small'
    } else if (size.value  >= 12) {
        cards.className = 'cards--large'
    } else {
        cards.className = 'cards'
    }

}

export default sizeStyles