import { createContext, useState, useContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setToken: () => {},
    setUser: () => {}
})

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(
        // localStorage.getItem('ACCESS_TOKEN')
        {name: 'John'}
    );
    const [token, _setToken] = useState(
        localStorage.getItem('ACCESS_TOKEN')
        // 123
        );
    

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

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(StateContext)