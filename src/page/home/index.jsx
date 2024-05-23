import React, { useEffect, useState } from "react";

function Home() {
  const [url, setUrl] = useState("https://api.escuelajs.co/api/v1/products");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 10));
        console.log(data);
      });
  }, []);
  return <div className="container ulconta"></div>;
}

export default Home;
