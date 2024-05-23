import React, { useEffect } from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
function Dashboard() {
  const [text, settext] = useState();
  const [dara, setdara] = useState("");
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setdara(data);
        console.log(data);
      });
  }, []);
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));
  const navigate = useNavigate();
  const [userinput, setuserinput] = useState({
    title: "",
    price: "",
    description: "",
    categoryId: Number,
    images: [],
  });
  const hendlesubmit = async (e) => {
    e.preventDefault();
    console.log(userinput);
    try {
      const req = await fetch("https://api.escuelajs.co/api/v1/products/", {
        method: "POST",
        headers: {
          Access: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userinput }),
      });
      const res = await req.json();
      console.log(req);
      console.log(res);
      const data = JSON.parse(localStorage.getItem("Product")) ?? [];
      localStorage.setItem("Product", JSON.stringify([...data, res]));
    } catch {}
    setuserinput({
      title: "",
      price: "",
      description: "",
      categoryId: "",
      images: [],
    });
    settext("Product muvaffaqiyatli saqlandi");
  };
  return (
    <>
      <div className=" container hammasini-orab2">
        <div className=" container sahifa">
          <h2 className="title">Create Products</h2>
        </div>
        <div className="container ou11">
          <form className="inout" onSubmit={hendlesubmit}>
            <div className="orab">
              <p className="parg">Name:</p>
              <input
                onChange={(e) =>
                  setuserinput((prev) => ({ ...prev, title: e.target.value }))
                }
                value={userinput.title}
                className="input"
                type="text"
                required
                placeholder="Product name"
              />
              <p className="parg">Catigory:</p>
              <select
                onChange={(e) => {
                  console.log(e.target.value);
                  setuserinput((prev) => ({
                    ...prev,
                    categoryId: Number(e.target.value),
                  }));
                }}
                className="select"
              >
                <option>Category:</option>
                {dara &&
                  dara.map(({ id, name }) => {
                    console.log(id, name);
                    return (
                      <option style={{ color: "black" }} value={id}>
                        {name}
                      </option>
                    );
                  })}
              </select>
              {/* <input
                onChange={(e) =>
                  setuserinput((prev) => ({
                    ...prev,
                    categoryId: Number(e.target.value),
                  }))
                }
                value={userinput.categoryId}
                className="input"
                type="number"
                required
                placeholder="product catigory"
              /> */}

              <p className="parg">Price:</p>
              <input
                onChange={(e) =>
                  setuserinput((prev) => ({
                    ...prev,
                    price: Number(e.target.value),
                  }))
                }
                value={userinput.price}
                className="input"
                type="number"
                required
                placeholder="Product price"
              />

              <p className="parg">Image link:</p>
              <input
                onChange={(e) =>
                  setuserinput((prev) => ({
                    ...prev,
                    images: [e.target.value],
                  }))
                }
                value={userinput.images}
                className="input"
                type="url"
                required
                placeholder="Product image"
              />
              <p className="parg">Description:</p>
              <input
                onChange={(e) =>
                  setuserinput((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                value={userinput.description}
                className="input"
                type="text area"
                required
                placeholder="Description"
              />
              <p style={{ textAlign: "center" }}>{text}</p>
            </div>
            <div className="div1">
              <button className="btn" type="submit">
                Careat
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
