const API = process.env.API;
const options = {
    headers: {
        'x-api-key': process.env.API_KEY
    }
}

const getData = async () => {
    const apiURL = `${API}`;
    console.log(apiURL)
    try {
        const response = await fetch(apiURL, options);
        const data = await response.json();
        console.log(data)
        return data
    } catch (error) {
        console.error('Fetch Error', error)
    }
}

export default getData;