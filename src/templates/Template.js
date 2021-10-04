import getData from "../utils/getData";
import duplicate from "../utils/duplicate";

const Template = async () => {
    const data = await getData();
    const newArr = await duplicate(data)
    const view = `
        <div class="wrapper">
            <section class="cards" id="cards">
                ${newArr.map(el => `
                    <div class="card">
                        <div class="front face">
                            <img src="${el.url}" alt="Cat image">
                        </div>
                        <div class="back face"></div>
                    </div>
                `).join('')}
            </section>
        </div>
    `
    return view;
}

export default Template;