import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";




//below we are setting a function that will turn dark mode on and off. we are setting the state to false initially.
// use effect will happen upon component rerendering and it will set dark mode either on and off on the body element

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);

    useEffect(() => {
        const body = document.querySelector("body");
        darkMode
            ?
            body.classList.add("dark-mode") :
            body.classList.remove("dark-mode");
    }, [darkMode]);

    return [darkMode, setDarkMode];
}