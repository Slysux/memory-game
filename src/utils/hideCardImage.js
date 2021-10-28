import showCardImage from "./showCardImage"

const hideCardImage = (arr) => {
    setTimeout(() => {
        arr.forEach(el => {
            el.parentElement.classList.remove('card--active')
            setTimeout(() => {
                cards.addEventListener('click', showCardImage)
            }, 500)
        })
    }, 1000)
}

export default hideCardImage