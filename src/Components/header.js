import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GoogleIcon from "@mui/icons-material/Google";

import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header" id="header">
      <Link to="/" style={{ color: "black", textDecoration: "none" }}>
        <div className="store">
          <GoogleIcon />
          <span>Store</span>
        </div>
      </Link>

      <div className="optionsContainer">
        <SearchIcon />
        <HelpIcon />
        <AccountCircleIcon />
        <Link to="/Checkout" style={{ color: "black" }}>
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
}

export default Header;
