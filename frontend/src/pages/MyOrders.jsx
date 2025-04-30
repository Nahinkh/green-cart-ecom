import React, { use, useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyOrders } from "../assets/assets";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { currency } = useAppContext();

  const fetchOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="">
        {myOrders.map((order, index) => (
          <div key={index}
          className="border border-gray-400 rounded-lg mb-10 p-4 py-5 md:gap-4 max-w-4xl"
          >
            <p className="flex justify-between  text-gray-500 text-sm md:items-center md:font-medium max-md:flex-col">
              <span className="text-gray-500">Order ID: {order._id}</span>
              <span>Payment: {order.paymentType} </span>
              <span>
                Total Amount: {currency} {order.amount}{" "}
              </span>
            </p>
            {order.items.map((item, index) => (
              <div
                className={`relative bg-white text-gray-500/10 ${
                  order.items.length !== index + 1 && "border-b"
                } border-gray-400 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-4 w-full max-w-4xl`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <img
                      src={item.product.image[0]}
                      alt="product Image"
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-medium text-gray-800">
                      {item.product.name}
                    </h2>
                    <p className="text-gray-700">Category: {item.product.category}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center-center md:ml-8 mb-4 md:mb-0 text-gray-700 font-medium">
                  <p>Quantity: {item.quantity || "1"}</p>
                  <p>Status: {order.status}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <p className="text-lg font-medium text-primary">
                  Amount : {currency} {item.product.offerPrice * item.quantity}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
