import showCardImage from "./showCardImage"

const hideCardImage = (arr) => {
    setTimeout(() => {
        arr.forEach(el => {
            el.nextElementSibling.tabIndex = 0
            el.parentElement.classList.remove('card--active')
            setTimeout(() => {
                cards.addEventListener('click', showCardImage)
                cards.addEventListener('keyup', showCardImage)
            }, 500)
        })
    }, 1000)
}

export default hideCardImage