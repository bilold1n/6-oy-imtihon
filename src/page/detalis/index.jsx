import React from "react";
import { Link } from "react-router-dom";

function Detalis() {
  const data = JSON.parse(localStorage.getItem("user"));
  const data2 = Array(data);
  console.log(data2);
  return (
    <div>
      {data2.map(({ name, avatar, email, password }) => {
        return (
          <div className="container orab89">
            <div className="oiu">
              {" "}
              <Link
                to="/layout"
                style={{
                  textAlign: "center",
                  textDecoration: "none",
                  width: "150px",
                }}
                className="btn "
              >
                Back to Home
              </Link>
            </div>
            <img className="img7" src={avatar} alt={avatar} />
            <h4>My name:{name}</h4>
            <p>My email:{email}</p>
            <p>My password:{password}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Detalis;
