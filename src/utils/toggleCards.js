const toggleCards = async (e) => {
    const frontCards = document.querySelectorAll('.front');
    const frontArr = [...frontCards]
    const data = JSON.parse(localStorage.getItem('data'))
    if (e.target.localName === 'img') {
        e.path[2].classList.toggle('card--active')
        setTimeout(() => {
            frontArr.forEach((el, i) => {
                let cardTarget = e.target.offsetParent
                if (el === cardTarget) {
                    cardTarget.innerHTML = ''
                }
            })
        }, 1000);
    } else if (e.target.localName === 'div') {
        frontArr.forEach((el, i) => {
            let cardTarget = e.target.previousElementSibling
            if (el === cardTarget) {
                cardTarget.innerHTML = `<img loading="lazy" src="${data[i].url}" alt="${data[i].breeds.length !== 0 ? (data[i].breeds[0].name + ' ') : ''}Cat image">`
            }
        })
        e.target.parentElement.classList.toggle('card--active')
    }
    console.log(e)
}

export default toggleCards;