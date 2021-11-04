const Popup = () => {
    const tries = document.getElementById('tries')
    const time = document.getElementById('time')
    const popup = `
    <div class="popup">
        <h1 class="popup__title">You finished the puzzle!!</h1>
        <div class="popup__results">
            <p class="popup__time"><span>Your time</span>: ${time.firstElementChild.textContent}</p>
            <p class="popup__tries"><span>Your tries</span>: ${tries.firstElementChild.textContent}</p>
        </div>
        <button id="popup-button" class="btn">Continue</button>
    </div>
    `
    return popup
}

export default Popup