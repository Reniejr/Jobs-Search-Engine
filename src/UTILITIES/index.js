//FETCH
export const getJobsList = async (query) => {
    let response = await fetch(`${process.env.REACT_APP_JOBS_API}${query}`),
        result = await response.json()
    console.log(result)
    return result
}