import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GoogleIcon from "@mui/icons-material/Google";

import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Cart from "./store/context";
function Header() {
  const CartCTX = useContext(Cart);
  const itemsArray = CartCTX.items;
  const spanShow = itemsArray.length === 0;
  return (
    <div className="header" id="header">
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <div className="store">
          <GoogleIcon />
          <span>Store</span>
        </div>
      </Link>

      <div className="optionsContainer">
        <div className="searchicon">
          <SearchIcon />
        </div>
        <div className="helpicon">
          <HelpIcon />
        </div>
        <div className="accounticon">
          <AccountCircleIcon />
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
