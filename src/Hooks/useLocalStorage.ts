import { useState, useCallback } from "react";

type UseLocalStorageReturnType<T> = {
  storedValue: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): UseLocalStorageReturnType<T> {
  const [storedValue, setStorageValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = useCallback(
    (value: React.SetStateAction<T>) => {
      setStorageValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    [key],
  );

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
