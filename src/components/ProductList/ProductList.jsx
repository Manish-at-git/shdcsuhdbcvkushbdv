import React from "react";
import ComputerImg from "../../assets/images/ComputerImg.png";
import Game from "../../assets/images/GameImg.png";
import Image from "next/image";

const ProductList = () => {
  const products = [
    {
      id: 1,
      productImg: ComputerImg,
      name: "LCD Monitor",
      price: 100,
      quantity: 10,
      subtotal: 1000,
    },
    {
      id: 2,
      productImg: Game,
      name: "Product 2",
      price: 200,
      quantity: 20,
      subtotal: 4000,
    },
  ];

  return (
    <div className="w-7/12 mx-auto flex justify-center items-center">
      <table className="w-full">
        <thead className="w-full  shadow-md">
          <tr className="">
            <th className="px-5 py-5  text-start">Name</th>
            <th className="px-5 py-5 text-start">Price</th>
            <th className="px-5 py-5 text-start">Quantity</th>
            <th className="px-5 py-5 text-start">Subtotal</th>
          </tr>
        </thead>
        {products.map((product) => {
          return (
            <tbody>
              <tr key={product.id}>
                <td>
                  <Image
                    src={product?.productImg}
                    alt="product"
                    width={20}
                    height={20}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.subtotal}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ProductList;