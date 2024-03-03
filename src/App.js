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
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";

// Chunking
// Code Splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamix import
const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy(() => import("./components/About"));
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
        element: (
          <Suspense fallback={<h1> Loading ... </h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1> Loading ... </h1>}>
            <Grocery />
          </Suspense>
        ),
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
