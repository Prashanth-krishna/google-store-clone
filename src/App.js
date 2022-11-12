import { useState } from "react";
import Header from "./Components/header";
import "./App.css";
import SideBar from "./Components/sidebar";
import Products from "./Components/products";

function App() {
  const [selected, SetSelected] = useState(["", ""]);
  const allselected = (select) => {
    SetSelected(select);
    console.log(selected);
  };
  return (
    <div className="App">
      <Header />
      <aside>
        <SideBar selectHandler={allselected} />
      </aside>
      <main>
        <Products selected={selected} />
      </main>
    </div>
  );
}

export default App;
