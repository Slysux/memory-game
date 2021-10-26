import getData from "../utils/getData";
import duplicate from "../utils/duplicate";

const Template = async () => {
    const data = await getData()
    const newArr = await duplicate(data)
    localStorage.setItem('data', JSON.stringify(newArr))
    const view = `
        ${newArr.map(el => `
            <div class="card">
                <div class="front face">
                    
                </div>
                <div class="back face"></div>
            </div>
        `).join('')}
    `
    return view;
}

export default Template;