import React, { useRef, useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
import { useNavigate, Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [userName, setname] = useState("");
  const [pasword, setpasword] = useState("");
  const [eror, seteror] = useState("");

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
  const naviate = useNavigate();
  const hendlesubmit = (e) => {
    e.preventDefault();
    console.log(userName);

    let inpuy = userName;
    let pasWord = pasword;

    const data = JSON.parse(localStorage.getItem("users")) ?? [];
    console.log(data);
    const userf = data.some(
      ({ email, password }) => email == inpuy && password === pasWord
    );
    if (userf) {
      const user = data.filter(({ email }) => email === inpuy)[0];
      localStorage.setItem("user", JSON.stringify(user));
      naviate("/layout");
    } else {
      seteror("User not found !");
    }
  };
  return (
    <>
      <div className="container ou">
        <form className="inout" onSubmit={hendlesubmit}>
          <div className="div orab">
            <h2 className="sar">Nice to see you!</h2>
            <p>Enter your email and password to sign in</p>
          </div>
          <div className="orab">
            <p className="parg">Email</p>
            <input
              className="input"
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={userName}
              type="email"
              required
              placeholder="Your email address"
            />
            <p className="parg">Password</p>
            {/* <input
              className="input"
              onChange={(e) => {
                setpasword(e.target.value);
              }}
              value={pasword}
              type="password"
              required
              placeholder="Your password" */}
            {/* /> */}
            <p className="parg">Password</p>
            <label className="label1">
              <input
                className="input"
                onChange={(e) => {
                  setpasword(e.target.value);
                }}
                value={pasword}
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
            <h2 className="eror">{eror}</h2>
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
              Sig in
            </button>
            <p className="paraf">
              Don't have an account?{" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/signup"}
                type="submit"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
        {/* <div className="orab orab7">
          <>Don’t have an account yet? Register for free</>
        </div> */}
      </div>
    </>
  );
}

export default Login;
