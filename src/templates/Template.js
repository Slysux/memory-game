import getData from "../utils/getData";

const Template = async () => {
    const data = await getData();
    const view = `
        <section class="wrapper">
            ${data.map(el => `
                <div class="card">
                    <div class="front face">
                        <img src="${el.url}" alt="Cat image">
                    </div>
                    <div class="back face"></div>
                </div>
            `).join('')}
        </section>
    `
    return view;
}

export default Template;