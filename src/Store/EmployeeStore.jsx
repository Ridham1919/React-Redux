const abc = {
    location: false,
    data: null,
    error: null
}

function Employeereducer(state = abc, action) {
    switch (action.type) {
        case "Fetch_Start":
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

export default Employeereducer;