import { createContext, useReducer } from "react";

export const ThemeContext = createContext()

const reducer = (state, action) => {

    switch (action.type) {

        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        case 'CHANGE_MODE':
            return { ...state, mode: action.payload }

        default:
            return state
    }



}

export function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        color: "#58249c",
        mode: 'light'
    })

    const changeColor = (color) => {
        // Dispatch function takes in an action Object with 2 propreties  type and payload
        dispatch({ type: 'CHANGE_COLOR', payload: color })
    }

    const changeMode = (mode) => {
        dispatch({ type: 'CHANGE_MODE', payload: mode })
    }




    return (
        < ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}