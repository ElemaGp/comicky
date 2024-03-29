import AuthReducer from "./AuthReducer";
import {createContext, useEffect, useReducer} from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null, //if the user had logged in before, the initial state when he comes back to the website will be the "user" already stored in browser. Else, if he hadn't logged in, it'll be null.
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    //storing the user object in the browser whenever it's generated after login
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user)) //this useEffect fires everytime the state of the "user" object changes, which happens during login and logout
    },[state.user]);

    return (
        <AuthContext.Provider 
        value={{
            user:state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            dispatch
        }}
        >
          {children}
          </AuthContext.Provider>
    );
};