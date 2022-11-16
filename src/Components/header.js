import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";

import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Cart from "./store/context";
import { useState } from "react";
function Header(props) {
  const [searchvisible, SetSearchVisible] = useState(false);
  const CartCTX = useContext(Cart);
  const itemsArray = CartCTX.items;
  const spanShow = itemsArray.length === 0;
  function SearchHandler() {
    SetSearchVisible(true);
  }
  function SearchDisbale() {
    SetSearchVisible(false);
  }
  function SearchTextHandler(e) {
    const searchText = e.target.value;
    props.filter(searchText);
  }
  function LogoutHandler() {
    CartCTX.Logout();
    alert("You Logged Out succesfully.");
  }
  return (
    <div className="header" id="header">
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <div className="store">
          <GoogleIcon />
          <span>Store</span>
        </div>
      </Link>
      <div className="optionsContainer">
        {searchvisible ? (
          <div className="searchBox">
            <input type="text" onChange={SearchTextHandler} />
            <div className="closeIcon" onClick={SearchDisbale}>
              <CloseIcon
                style={{ position: "absolute", top: "1px", right: "5px" }}
              />
            </div>
          </div>
        ) : (
          <div className="searchicon" onClick={SearchHandler}>
            <SearchIcon />
          </div>
        )}
        <div className="helpicon">
          <a
            href="https://support.google.com/store?p=store_nav&hl=en-GB"
            target="_blank"
            rel="noreferrer"
          >
            <HelpIcon style={{ color: "black" }} />
          </a>
        </div>
        <div className="accounticon">
          {CartCTX.isLoggedIn ? (
            <AccountCircleIcon onClick={LogoutHandler} />
          ) : (
            <Link to="/login">
              <AccountCircleIcon style={{ color: "black" }} />
            </Link>
          )}
        </div>
        <div className="carticon">
          <Link to="/Checkout" style={{ color: "black" }}>
            <ShoppingCartIcon />
            {!spanShow ? <span></span> : ""}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
