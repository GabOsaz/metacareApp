import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const THEME_TYPES = {
    THEME_DARK: "dark",
    THEME_LIGHT: "light",
};

export const useTheme = () => {
    const [ theme, setTheme ] = useState('light')
    // setTheme(localStorage.getItem('theme'))
    console.log(theme)
    return {theme, setTheme}
}

export const useApplyThemePreference = (theme) => {
    const themeContext = useContext(ThemeContext);
    themeContext.setTheme(theme);
    const { THEME_DARK, THEME_LIGHT } = THEME_TYPES;
    const root = window.document.documentElement;
    const isDark = theme === THEME_DARK;
    root.classList.remove(isDark ? THEME_LIGHT : THEME_DARK);
    root.classList.add(theme);
    localStorage.setItem('theme', theme)
};