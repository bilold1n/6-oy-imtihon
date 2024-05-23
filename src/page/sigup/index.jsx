import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
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
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const hendlesubmit = async (e) => {
    e.preventDefault();
    console.log(userinput);
    try {
      const req = await fetch("https://api.escuelajs.co/api/v1/users/", {
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
      const data = JSON.parse(localStorage.getItem("users")) ?? [];
      localStorage.setItem("users", JSON.stringify([...data, res]));
      localStorage.setItem("user", JSON.stringify(res));
    } catch {}

    navigate("/layout");
    setuserinput({
      name: "",
      email: "",
      pasword: "",
      avatar: "",
    });
  };
  return (
    <>
      <div className="hammasini-orab">
        <div className=" container sahifa">
          <h2>Welcome!</h2>
          <p>
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
        <div className="container ou1">
          <form className="inout" onSubmit={hendlesubmit}>
            <div className="orab">
              <p className="parg">Name</p>
              <input
                onChange={(e) =>
                  setuserinput((prev) => ({ ...prev, name: e.target.value }))
                }
                value={userinput.name}
                className="input"
                type="text"
                required
                placeholder="Your full name"
              />
              <p className="parg">Avatar</p>
              <input
                onChange={(e) =>
                  setuserinput((prev) => ({
                    ...prev,
                    avatar: e.target.value,
                  }))
                }
                value={userinput.avatar}
                className="input"
                type="url"
                required
                placeholder="Your avatar link"
              />
              <p className="parg">Email</p>
              <input
                onChange={(e) =>
                  setuserinput((prev) => ({ ...prev, email: e.target.value }))
                }
                value={userinput.email}
                className="input"
                type="email"
                required
                placeholder="Your email address"
              />
              <p className="parg">Password</p>
              <label className="label">
                <input
                  onChange={(e) =>
                    setuserinput((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  value={userinput.password}
                  className="input"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Your password"
                />
                {showPassword ? (
                  <RemoveRedEyeIcon
                    style={{ cursor: "pointer" }}
                    className="login_eyeicon eye"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                ) : (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer" }}
                    className="login_eyeicon eye"
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                )}
              </label>

              <Stack
                className="rember"
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>Remember me </Typography>
              </Stack>
            </div>
            <div className="div1">
              <button className="btn" type="submit">
                Sign up
              </button>
              <p className="paraf">
                Already have an account?{" "}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                  type="submit"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
