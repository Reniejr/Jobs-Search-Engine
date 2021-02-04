//FETCH
export const getJobsList = async (query) => {
    let response = await fetch(`${process.env.REACT_APP_JOBS_API}${query}`),
        result = await response.json()
    console.log(result)
    return result
}


//DIVIDE BY CHUNKS
export const chunkArray = (array, value) => {
    let chunkContainer = [],
        times = array.length / value,
        arrayRest = array
    for (let i = 0; i < times; i++) {
        let chunk = []
        chunk = arrayRest.splice(0, value)
        chunkContainer.push(chunk)
    }
    console.log(chunkContainer)
    return chunkContainer
}
