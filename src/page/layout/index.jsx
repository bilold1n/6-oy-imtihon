import React from "react";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
function Layout() {
  return (
    <>
      {/* <Header></Header> */}
      <main>
        <div className="main">
          <div>{<Sidebar />}</div>
          <div className="container">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default Layout;
