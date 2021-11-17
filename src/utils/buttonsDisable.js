const buttonsDisable = (value) => {
    const buttons = [...document.querySelectorAll('.btn')]
    buttons.forEach(button => {
        button.disabled = value
    })
}

export default buttonsDisable