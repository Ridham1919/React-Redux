import axios from "axios"

function Fetchdata() {
    return async (dispatch) => {
        dispatch({
            type: "Fetch_Start"
        })
        try {
            const response = await axios.get('https://geton.skmbpk1z.a2hosted.com/get-data.php')
            dispatch({
                type: "Fetch_Success",
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: "Fetch_Failed",
                payload: error
            })


        }
    }
}

export default Fetchdata