import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestaurantCard from "./components/RestaurantCard";
import Restaurant from "./components/Restaurant";
import Contact from "./components/Contact";
import Error from "./components/Error";
import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <LoginForm />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Restaurant/:id",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
