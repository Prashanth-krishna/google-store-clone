// import { useRef, useState } from "react";
import "./sidebar.css";
function SideBar(props) {
  // const [selected, SetSelected] = useState(["", ""]);
  // const phoneref = useRef();
  // const homeref = useRef();
  let selected = [" ", " "];
  const onclickHandler = (e) => {
    const { id, checked } = e.target;
    // console.log(id, checked);
    if (id === "home") {
      if (checked) {
        // console.log("1");
        // SetSelected((selected) => ["home", selected[1]]);
        selected = ["home", selected[1]];
        // console.log(selected[0]);
      } else {
        // SetSelected((selected) => [selected[1]]);
        // console.log("2");
        selected = [" ", selected[1]];
      }
    } else {
      if (checked) {
        // console.log("3");
        // SetSelected((selected) => [selected[0], "phone"]);
        // console.log(selected[0]);
        selected = [selected[0], "phone"];
      } else {
        // console.log("4");
        // SetSelected((selected) => [selected[0]]);
        selected = [selected[0], " "];
      }
    }
    props.selectHandler(selected);
    // console.log(selected);
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
          // ref={homeref}
          onClick={onclickHandler}
        />
        <label htmlFor="home">Connected home</label>
      </div>
      <div className="phone">
        <input
          type="checkbox"
          id="phones"
          // ref={phoneref}
          onClick={onclickHandler}
        />
        <label htmlFor="phones">Phones</label>
      </div>
    </div>
  );
}
export default SideBar;
