import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BT3 from "./components/BT3";
import BT4 from "./components/BT4";
import Header from "./components/Header";

// //import BT1 from "./components/BT1";
// // import BT2 from "./components/BT2";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Cart from "./components/Cart";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      {/* <BT1 /> */}
      {/* <BT2 /> */}
      {/* <BT3></BT3> */}
      {/* BT */}
      <Header />
      <Routes>
        <Route path="/" element={<BT4 />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      {/* BT5 */}
      {/* <Quiz /> */}
    </>
  );
}

export default App;
