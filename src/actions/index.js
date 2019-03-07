import axios from "axios";

export const SPINNER_ON = "SPINNER_ON";
export const SPINNER_OFF = "SPINNER_OFF";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";


export const fetch = () => dispatch => {
    dispatch({ type: SPINNER_ON });
    axios.get(`https://swapi.co/api/people/`)
        .then(res => {
            dispatch({ type: SUCCESS, payload: res.data.results});
        })
        .catch(err => {
            dispatch({type: FAILURE, payload: err});
        })
    dispatch({ type: SPINNER_OFF});
}
