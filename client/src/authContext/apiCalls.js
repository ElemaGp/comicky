import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("/signin", user);
         dispatch(loginSuccess(res.data));
         localStorage.setItem("jwt",res.data.token);
    }catch(err){
         dispatch(loginFailure());
    }
};


