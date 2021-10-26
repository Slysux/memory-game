import showCardImage from "./showCardImage"

const hideCardImage = (arr) => {
    setTimeout(() => {
        arr.forEach(el => {
            el.parentElement.classList.remove('card--active')
            setTimeout(() => {
                el.innerHTML = ''
            }, 400)
            cards.addEventListener('click', showCardImage)
        })
    }, 1000)
}

export default hideCardImage