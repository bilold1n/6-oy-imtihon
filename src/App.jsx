import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./page/layout";
import Login from "./page/login";
import Signup from "./page/sigup";
import Home from "./page/home";
import Detalis from "./page/detalis";
import Dashboard from "./page/Dashboard";
import Product from "./page/Product";

function App() {
  function Redirect({ children }) {
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user")) ?? false;
    return user ? children : <Navigate to="/" />;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

        <Route
          path="/layout"
          element={
            <Redirect>
              <Layout />
            </Redirect>
          }
        >
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="myprofil" element={<Detalis></Detalis>}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
