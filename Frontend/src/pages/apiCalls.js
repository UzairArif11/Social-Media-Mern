import axios from "axios"

export const loginCall = async (userCredential, dispatch)=>{
    const URLR = process.env.REACT_APP_URL;
    dispatch({type: "LOGIN_START"})
    try {
        const res = await axios.post(`${URLR}/auth/login`, userCredential)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error})
    }
}