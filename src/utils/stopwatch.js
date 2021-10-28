const time = document.getElementById('time')
let runningTime = 0
let stopwatchInterval;
let isPaused = true

const playPauseCrono = () => {
    if (isPaused) {
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
        time.innerHTML = calculateTime(runningTime)
    }, 1000)
}

const pause = () => { 
    clearInterval(stopwatchInterval)
} 

const calculateTime = runningTime => {
    const totalSeconds = Math.floor(runningTime / 1000)
    const totalMinutes = Math.floor(totalSeconds / 60)

    return `${totalMinutes.toString().padStart(2, '0')}:${(totalSeconds % 60).toString().padStart(2, '0')}`
}

export default playPauseCrono