import React, { useState } from "react";

function Product() {
  const data = JSON.parse(localStorage.getItem("Product")) ?? [];
  const [malumot, setmalumot] = useState(data);
  console.log(malumot);

  return (
    <div className="orab-product">
      <ul className="ul">
        {malumot &&
          malumot.map(({ id, images, price, title, description, category }) => {
            console.log(images[0]);
            const imagesString = images[0];

            const imagesArray = JSON.parse(imagesString);

            console.log(imagesArray);
            const rasm = imagesArray.map((url, index) => {
              return url;
            });
            {
            }
            function deleteItem(params) {
              const filterItem = data.filter((row) => row.id !== params);
              console.log(filterItem);
              localStorage.setItem("Product", JSON.stringify(filterItem));
              setmalumot(JSON.parse(localStorage.getItem("Product")));
            }
            console.log(category);
            return (
              <div className="li1">
                <img src={rasm[0]} alt={rasm[0]} />

                <p className="id">id:{id}</p>
                <h2>{title}</h2>
                <h3>category id:{category.id} </h3>
                <h4 style={{ marginTop: "4px" }}>{price}$</h4>
                <p className="id">Product desc: {description}</p>
                <button onClick={() => deleteItem(id)} className="deletebyn">
                  Delete
                </button>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Product;
