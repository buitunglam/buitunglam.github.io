export function startFetch() {
    return {type:"START_FETCH"};
}

export function fetchSuccess(cityName,temp) {
    return {
        type:"FETCH_SUCCESS",
        cityName,
        temp
    }
}

export function fetchError() {
    return {type:"FETCH_ERROR"}
}