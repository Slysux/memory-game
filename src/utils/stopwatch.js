const time = document.getElementById('time')
let runningTime = 0
let stopwatchInterval;
let isPaused = true

const playPauseCrono = (reset = false) => {
    if (reset){
        resetCrono()
    } else if (isPaused) {
        play()
    } else {
        pause()
    } 
    isPaused = !isPaused
}

const play = () => {
    let startTime = Date.now() - runningTime
    stopwatchInterval = setInterval(() => {
        runningTime = Date.now() - startTime
        time.firstElementChild.innerHTML = calculateTime(runningTime)
    }, 1000)
}

const pause = () => { 
    clearInterval(stopwatchInterval)
} 

const resetCrono = () => {
    pause()
    runningTime = 0
    time.firstElementChild.innerHTML = '00:00'
    isPaused = false
}

const calculateTime = runningTime => {
    const totalSeconds = Math.floor(runningTime / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)

    return `${totalMinutes.toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`
}

export default playPauseCrono