import { useState, useEffect, useCallback } from 'react';

function useLocalStorage(key, initialValue) {
	const [storedValue, setStorageValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	})

	const setValue = useCallback((value) => {
		setStorageValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key])

	return { storedValue, setValue };
}



export default useLocalStorage;

//Пример использования
// import useLocalStorage from './hooks/useLocalStorage'

// const Test = () => {
// 	const { setValue, storedValue } = useLocalStorage('key', '')

// 	return (
// <div>
// 	<div>{storedValue}</div>
// 	<button onClick={() => setValue('Lalala')}>Записать</button>
// </div>
// 	)
// }