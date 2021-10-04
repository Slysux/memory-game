const toggleCards = (e) => {
    if (e.target.localName === 'img') {
        e.path[2].classList.toggle('card--active')
    } else if (e.target.localName === 'div') {
        e.path[1].classList.toggle('card--active')

    }
    // console.log(e.target)
    console.log(e.path[1])
}

export default toggleCards;