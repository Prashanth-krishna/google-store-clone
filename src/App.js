import { useState } from "react";
import Header from "./Components/header";
import "./App.css";
import SideBar from "./Components/sidebar";
import Products from "./Components/products";
import { Route, Routes } from "react-router-dom";
import Checkout from "./Components/checkout";
import ProductDetail from "./Components/productdetail";
import Login from "./Components/login";
const All_Products = [
  {
    id: 1,
    name: "C to C Charging Cable",
    price: 9,
    src: "ctoc.png",
    type: "phone",
    shortDescription: "Quick and powerful.",
    longDescription:
      "Connect your USB-C™-enabled gear to transfer data and charge devices. This cable comes in two lengths (1 m and 2 m) for the reach that you need.",
  },
  {
    id: 2,
    name: "C to 3.5mm Dongle",
    price: 9,
    src: "cto3.5mm.png",
    type: "phone",
    shortDescription: "Sleek, seamless, powerful.",
    longDescription:
      "Use your favorite 3.5mm headphones with your Pixel and Pixel Slate, or connect to your sound system, with the compact USB-C™ adaptor.",
  },
  {
    id: 3,
    name: "C to A Adapter ",
    price: 9,
    src: "ctoaadaptor.png",
    type: "phone",
    shortDescription: "The new industry standard",
    longDescription:
      "With USB Type-C technology, use the same connector for your next-generation laptops, phones and more.",
  },
  {
    id: 4,
    name: "C to A Charging Cable",
    price: 10,
    src: "ctoacable.png",
    type: "phone",
    shortDescription: "Quick and powerful.",
    longDescription:
      "With this handy cable, your USB-A devices can be used with the latest USB-C™ laptops, phones and more for charging and data transfer.",
  },
  {
    id: 5,
    name: "Nest Audio",
    price: 50,
    src: "nestaudio.png",
    type: "home",
    shortDescription: "The way that sound should sound.",
    longDescription:
      "With Nest Audio’s woofer, tweeter and tuning software, crisp vocals and powerful bass fill your room.5Nest Audio is 75% louder than the original Google Home, and has 50% stronger bass.",
  },
  {
    id: 6,
    name: "Nest Aware",
    price: 100,
    src: "nestaware.png",
    type: "home",
    shortDescription: "Don’t miss a thing with Google Nest Aware.",
    longDescription:
      "Get the most out of your Nest Cam with Nest Aware. See more of what happened at home with longer video history and intelligent alerts that matter on your Google Home app. Also, teach your Nest cameras to learn the difference between friends and strangers.",
  },
  {
    id: 7,
    name: "Nest Cam",
    price: 69,
    src: "nestcam.png",
    type: "home",
    shortDescription: "The battery-powered security camera with smarts.",
    longDescription:
      "Nest Cam is battery powered, which means installation is as easy as hanging a picture frame. Get one Nest Cam or a few to put inside or outside, anywhere you want to check in from.",
  },
  {
    id: 8,
    name: "Nest Cam Charger Cable",
    price: 10,
    src: "nestcamchargecable.png",
    type: "home",
    shortDescription: "A spare cable for the unexpected.",
    longDescription:
      "Whether your pet chewed the cable or you just misplaced it, a spare charge cable can keep your Nest Cam connected.",
  },
  {
    id: 9,
    name: "Nest Mini",
    price: 20,
    src: "nestmini.png",
    type: "home",
    shortDescription: "Engineered for sound.Designed for your home.",
    longDescription:
      "Meet the new Google Nest Mini. Your music sounds bigger ans better than ever. And the Google Assistant is a huge help around the house.",
  },
  {
    id: 10,
    name: "Type C Earbuds",
    price: 50,
    src: "typecearbuds.png",
    type: "phone",
    shortDescription: "Play more music.Get more done.",
    longDescription:
      "Better sound changes everything. Immerse yourself in the clear sound of 24-bit digital audio. Adjustable loops help each earbud fit comfortably and securely.",
  },
];

function App() {
  const [selected, SetSelected] = useState([]);
  const [searchText, SetSearchText] = useState("");
  const allselected = (select) => {
    SetSelected(select);
  };
  function searchTextHandler(text) {
    SetSearchText(text);
  }
  return (
    <div className="App">
      <Routes>
        <Route
          path="/Checkout"
          element={
            <>
              <Header /> <Checkout products={All_Products} />
            </>
          }
        />
        <Route
          path="/:category/:id"
          element={
            <ProductDetail
              products={All_Products}
              loader={({ params }) => {}}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header filter={searchTextHandler} />
              <aside>
                <SideBar selectHandler={allselected} />
              </aside>
              <main>
                <Products
                  products={All_Products}
                  selected={selected}
                  TextToSearch={searchText}
                />
              </main>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
