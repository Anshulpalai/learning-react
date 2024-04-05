// Rather creating multiple files can export all the context content in a single file.
import { createContext, useContext } from "react";

// In the createContext we can pass an object containing the basic variables
export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme: () => {},
        lightTheme: () => {}
    }
);


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}

