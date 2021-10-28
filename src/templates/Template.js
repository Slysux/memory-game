import getData from "../utils/getData";
import duplicate from "../utils/duplicate";

const Template = async () => {
    const size = document.getElementById('size')
    const data = await getData()
    const newArr = await duplicate(data)
    const view = `
        ${newArr.map(el => `
            <div class="card">
                <div class="front face">
                    <img src="${el.url}" alt="${el.breeds.length !== 0 ? (el.breeds[0].name + ' ') : ''}">
                </div>
                <div class="back face"></div>
            </div>
        `).join('')}
    `
    return view;
}

export default Template;