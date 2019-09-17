import { useState } from "react";



// below we are accessing the local storage key and returning whatever that value is after the code is processed. the key and value exist in locastorage in the window and can be seen in the DOM. it has to be parsed through JSON beause it needs to be a string.


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
}