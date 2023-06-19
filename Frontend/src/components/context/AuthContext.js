import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {"_id":"64576245297b96423980ea09",
    "username":"xddd","email":"xju@gmsail.com",
    "password":"$2b$10$Jq7pVtSsopQJKQM/c3mVMeUJ3TAhGyKqjNS64gsXosW3Y7WUlBmAi",
    "profilePicture":"2.jpeg","coverPicture":"","followers":["6456cebb5b1db14622295dc4"],
    "following":["6456a287a9b00697c14520cb"],"isAdmin":false,"createdAt":{"$date":{"$numberLong":"1683448389958"}},"updatedAt":{"$date":{"$numberLong":"1686663304131"}},"__v":{"$numberInt":"0"},"desc":"hey des is uddpdated","city":"lahore","from":"multan","relationship":{"$numberInt":"2"}},
    isFecthing: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);
export const AuthContextProvider= ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
return(
    <AuthContext.Provider
    value={{
        user:state.user,
        isFecthing: state.isFecthing,
        error: state.error,
        dispatch
    }}
    >
        {children}
    </AuthContext.Provider>
);
};