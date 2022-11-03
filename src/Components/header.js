import searchImg from "../assets/search.png";
import helpImg from "../assets/help.png";
import cartImg from "../assets/cart.png";
import profileImg from "../assets/profile.png";

import "./header.css";
function Header() {
  return (
    <div className="header" id="header">
      <span>Store</span>
      <div className="optionsContainer">
        <img src={searchImg} alt="search items" />
        <img src={helpImg} alt="help" />
        <img src={cartImg} alt="your cart" />
        <img src={profileImg} alt="profile" />
      </div>
    </div>
  );
}

export default Header;
