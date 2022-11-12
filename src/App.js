import { useState } from "react";
import Header from "./Components/header";
import "./App.css";
import SideBar from "./Components/sidebar";
import Products from "./Components/products";
import { Router, Switch, Route, Routes } from "react-router-dom";
import Checkout from "./Components/checkout";

function App() {
  const [selected, SetSelected] = useState([]);
  const allselected = (select) => {
    SetSelected(select);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/Checkout"
          element={
            <>
              <Header /> <Checkout />
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
              <Header />
              <aside>
                <SideBar selectHandler={allselected} />
              </aside>
              <main>
                <Products selected={selected} />
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
