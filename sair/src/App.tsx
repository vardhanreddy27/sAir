import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home";
import BestOffers from "./pages/BestOffers";
import Shops from "./pages/Shops";
import TrackOrders from "./pages/TrackOrders";
import Wishlist from "./pages/Wishlist";
import Support from "./pages/Support";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/bestoffers" element={<BestOffers />}></Route>
          <Route path="/shops" element={<Shops />}></Route>
          <Route path="/trackorders" element={<TrackOrders />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
