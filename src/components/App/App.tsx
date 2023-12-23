import { useState } from "react";
import s from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import "./normalize.scss";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  // if(__PLATFORM__ === 'desktop') {
  // 	return <div>DESKTOP PLATFORM</div>
  // }
  // if(__PLATFORM__ === 'mobile') {
  // 	return <div>MOBILE PLATFORM</div>
  // }

  // if(__ENV__ === 'development') {
  // 	addDevTools()
  // }

  return (
    <div>
      <div className={s.links}>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О нас</Link>
        <Link to={"/shop"}>Магазин</Link>
      </div>
      <div className={s.value}>{count}</div>
      <button className={s.button} onClick={decrement}>
        -
      </button>
      <button className={s.button} onClick={increment}>
        +
      </button>
      <Outlet />
    </div>
  );
};
