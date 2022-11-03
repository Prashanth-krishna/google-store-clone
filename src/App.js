import Header from "./Components/header";
import "./App.css";
import SideBar from "./Components/sidebar";
import Products from "./Components/products";

function App() {
  return (
    <div className="App">
      <Header />
      <aside>
        <SideBar />
      </aside>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
