import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import GoogleIcon from "@mui/icons-material/Google";

import "./header.css";
function Header() {
  return (
    <div className="header" id="header">
      <div className="store">
        <GoogleIcon />
        <span>Store</span>
      </div>

      <div className="optionsContainer">
        <SearchIcon />
        <HelpIcon />
        <AccountCircleIcon />
        <ShoppingCartIcon />
      </div>
    </div>
  );
}

export default Header;
