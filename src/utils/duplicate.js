const duplicate = arr => {
    const copy = arr.slice()
    const values = arr.slice()
    const random = () => Math.floor(Math.random() * values.length)
    arr.forEach(() => {
        let valueRandom = random()
        copy.splice(valueRandom * 2, 0 , values[valueRandom])
        values.splice(valueRandom, 1)
    }) 
    console.log(copy)
    return copy
}

export default duplicate;