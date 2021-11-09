const themeColor = (e) => {
    console.log(e)
    const doc = document.firstElementChild
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('dark')
        if (e.target.checked) {
            doc.setAttribute('color-scheme', 'light')
            e.target.checked = true
        } else {
            doc.setAttribute('color-scheme', 'dark')
            e.target.checked = false
        }
    } else{
        console.log('light')
        if (e.target.checked) {
            doc.setAttribute('color-scheme', 'dark')
            e.target.checked = true
        } else {
            doc.setAttribute('color-scheme', 'light')
            e.target.checked = false
        }
    }
    // switcher.addEventListener('change', setTheme)
}

// const setTheme = () => {

// }

export default themeColor
