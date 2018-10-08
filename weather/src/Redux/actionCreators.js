import getTemp from "../Api/getTemp";


export function startFetch() {
    console.log("start fetch");
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
export function fetchDataThunk(cityName) {
    return dispatch => {
        dispatch(startFetch());
        getTemp(cityName)
            .then(temp => {
                dispatch(fetchSuccess(cityName,temp));
                console.log(temp);
            } )
            .catch(() => {
                dispatch(fetchError())
            });
    };
}

