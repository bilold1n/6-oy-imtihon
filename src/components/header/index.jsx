import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const loacetion = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log();
  });
  const loca = loacetion.pathname;
  // console.log(1);
  function submit() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  const data = JSON.parse(localStorage.getItem("user"));
  console.log(data);
  const data2 = Array(data);
  console.log(data2);
  return (
    <header className="headercontainer">
      <p>Path {loca}</p>
    </header>
  );
}

export default Header;
