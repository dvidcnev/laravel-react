import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setToken: () => {},
    setUser: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token);
        if ( token ) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setToken,
            setUser
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)