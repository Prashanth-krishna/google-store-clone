import "./sidebar.css";
let selected = [" ", " "];
function SideBar(props) {
  const onclickHandler = (e) => {
    const { id, checked } = e.target;
    if (id === "home") {
      if (checked) {
        selected = ["home", selected[1]];
      } else {
        selected = [" ", selected[1]];
      }
    } else {
      if (checked) {
        selected = [selected[0], "phone"];
      } else {
        selected = [selected[0], " "];
      }
    }
    props.selectHandler(selected);
  };

  return (
    <div className="sidebarContainer">
      <span>Product Type</span>
      <div className="home">
        <input
          type="checkbox"
          id="home"
          value="home"
          onClick={onclickHandler}
        />
        <label htmlFor="home">Connected Home</label>
      </div>
      <div className="phone">
        <input type="checkbox" id="phones" onClick={onclickHandler} />
        <label htmlFor="phones">Phones</label>
      </div>
    </div>
  );
}
export default SideBar;
