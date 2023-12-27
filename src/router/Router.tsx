import { App } from "@/components/App/App";
import About from "@/pages/about/About";
import Shop from "@/pages/shop/Shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"Загрузка страницы..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense fallback={"Загрузка страницы..."}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
]);
