import { useState, createContext, useEffect } from 'react';
import { THEME_TYPES } from '../utiilities/themes';

const ThemeContext = createContext();
const { Provider } = ThemeContext;


const ThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState('dark');

    const applyThemePreference = (theme) => {
        const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
        const root = window.document.documentElement;
        const isDark = theme === THEME_DARK;
        root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
        root.classList.add(theme);
        localStorage.setItem('theme', theme)
    };

    useEffect(() => {
        const persistedTheme = localStorage.getItem('theme');

        if(persistedTheme) {
            applyThemePreference(persistedTheme) 
            setTheme(persistedTheme)
        } else {
            applyThemePreference(theme)
            setTheme(theme)
        }
    
        return () => {}
    }, [theme])
    
    return (
        <Provider
            value={{
                theme,
                setTheme: selectedTheme => setTheme(localStorage.setItem('theme', selectedTheme))
            }}
        >
            {children}
        </Provider>
    );
};

export { ThemeContext, ThemeProvider };
