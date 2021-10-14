import Template from './templates/Template'
import start from './utils/start'
import './styles/main.scss'

(async function App() {
    const main = null || document.getElementById('main')
    main.innerHTML = await Template()
    start()
})()