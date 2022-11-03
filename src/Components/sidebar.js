import { useRef, useState } from "react";
import "./sidebar.css";
function SideBar() {
  const [selected, SetSelected] = useState([false, false]);
  const phoneref = useRef();
  const homeref = useRef();
  const onclickHandler = (e) => {
    const { id, checked } = e.target;
    // console.log(id, checked);
    if (id === "home") {
      if (checked) {
        // console.log("1");
        SetSelected((selected) => [true, selected[1]]);
      } else {
        SetSelected((selected) => [false, selected[1]]);
        // console.log("2");
      }
    } else {
      if (checked) {
        // console.log("3");
        SetSelected((selected) => [selected[0], true]);
      } else {
        // console.log("4");
        SetSelected((selected) => [selected[0], false]);
      }
    }
    console.log(selected);
    // console.log(e.target.id);
    // console.log(e.target.checked);
  };

  return (
    <div className="sidebarContainer">
      <span>Product Type</span>
      <div className="home">
        <input
          type="checkbox"
          id="home"
          value="home"
          ref={homeref}
          onClick={onclickHandler}
        />
        <label htmlFor="home">Connected home</label>
      </div>
      <div className="phone">
        <input
          type="checkbox"
          id="phones"
          ref={phoneref}
          onClick={onclickHandler}
        />
        <label htmlFor="phones">Phones</label>
      </div>
    </div>
  );
}
export default SideBar;
