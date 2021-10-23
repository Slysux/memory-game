const hideCardImage = (arr) => {
    setTimeout(() => {
        arr.forEach(el => {
            el.parentElement.classList.remove('card--active')
            setTimeout(() => {
                el.innerHTML = ''
            }, 1000)
        })
    }, 1000)
}

export default hideCardImage