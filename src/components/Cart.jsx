import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/crud";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const listCart = useSelector((state) => state.store.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const handlePlus = (product) => {
    const updatedCart = listCart.map((item) => {
      if (item.id == product.id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    dispatch(add(updatedCart));
  };
  const handleMinus = (product) => {
    const updatedCart = listCart.map((item) => {
      if (item.id == product.id) {
        if (item.count == 1) {
          return { ...item, count: 1 };
        }
        return { ...item, count: item.count - 1 };
      } else {
        return item;
      }
    });
    dispatch(add(updatedCart));
  };
  const handleRemove = (product, index) => {
    const updatedCart = listCart.filter((item, i) => i !== index);
    dispatch(add(updatedCart));
  };
  const handleCheckOut = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };
  useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };

    document.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", preventScroll);
    };
  }, []);
  return (
    <>
      {/* <div
        className=" absolute top-[50vh] left-[30vw] w-[500px] p-6 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert"
      >
        <span className="font-medium">Thanh toán thành công!</span> Chuyển sang
        trang Home
      </div> */}
      {showToast ? (
        <div className="absolute w-[100vw] h-[100vh] bg-[#00000050]">
          <div
            className=" absolute top-[30vh] left-[30vw] w-[500px] p-6 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span className="font-medium">Thanh toán thành công!</span> Chuyển
            sang trang Home
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="bg-gray-100 h-screen py-8 ">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                      <th className="text-left font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listCart.map((item, index) => (
                      <tr key={index}>
                        <td className="py-4">
                          <div className="flex items-center">
                            <img
                              className="h-16 w-16 mr-4"
                              src={item.image}
                              alt="Product image"
                            />
                            <span className="font-semibold">{item.title}</span>
                          </div>
                        </td>
                        <td className="py-4">{item.price}</td>
                        <td className="py-4">
                          <div className="flex items-center">
                            <button
                              onClick={() => handlePlus(item)}
                              className="border rounded-md py-2 px-4 mr-2"
                            >
                              +
                            </button>
                            <span className="text-center w-8">
                              {item.count}
                            </span>
                            <button
                              onClick={() => handleMinus(item)}
                              className="border rounded-md py-2 px-4 ml-2"
                            >
                              -
                            </button>
                          </div>
                        </td>
                        <td className="py-4">{item.count * item.price}</td>
                        <td>
                          <button
                            onClick={() => handleRemove(item, index)}
                            className="border rounded-md py-2 px-4 mr-2"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                    {/* More product rows */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>
                    {listCart.reduce((acc, item) => {
                      return item.price * item.count;
                    }, 0)}
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    {listCart.reduce((acc, item) => {
                      return item.price * item.count;
                    }, 0)}
                  </span>
                </div>
                <button
                  onClick={handleCheckOut}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
