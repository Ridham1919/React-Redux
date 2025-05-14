import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";


const abc = {
    location: false,
    data: null,
    error: null
}

function reducer(state = abc, action) {
    switch (action.type) {
        case "Fetch_start":
            return {
                ...state,
                loading: true
            }
        case "Fetch_Success":
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case "Fetch_Failed":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "Insert_Success":
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

function Fetchdata() {
    return async (dispatch) => {
        dispatch({
            type: "Fetch_start"
        })
        try {
            const response = await axios.get('https://geton.skmbpk1z.a2hosted.com/get-data.php')
            dispatch({
                type: "Fetch_Success",
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: "fetch_failed",
                payload: error
            })


        }
    }
}

function Insertdata(a) {
    return async (dispatch) => {
        dispatch({
            type: "Fetch_start"
        })
        try {
            const response = await axios.post('https://geton.skmbpk1z.a2hosted.com/insert-data.php', a)
            dispatch({
                type: "Insert_Success",
            })
        } catch (error) {
            dispatch({
                type: "fetch_failed",
                payload: error
            })


        }
    }
}

const Store2 = createStore(reducer, applyMiddleware(thunk))

export { Store2, Fetchdata, Insertdata }
