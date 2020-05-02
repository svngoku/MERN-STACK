import React , {createContext , useReducer } from "react";
import AppReducer from "./AppReducer";
import userService from "../services/userService";

const getUsers = async () => {
  let res = await userService.getAll();
  return res;
};

const initalState = {
    listUser: [
        {
            "_id": "5e4182bcaad892d38e116be3",
            "ID": 1,
            "firstname": "Nelson",
            "lastname": "Mandela",
            "login": "Nelson Mandela"
        }
    ]
};

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);

    return (
        <GlobalContext.Provider value={{
            users: state.users
        }}>
            { children }
        </GlobalContext.Provider>
    );
}