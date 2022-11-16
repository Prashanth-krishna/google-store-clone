import { useRef } from "react";
import { useContext } from "react";
import Cart from "./store/context";
import "./login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const CartCTX = useContext(Cart);
  const userRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  function SubmitHandler(e) {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passRef.current.value;
    CartCTX.Login(username, password);
    alert("You Logged In succesfully.");
    navigate(-1);
  }
  return (
    <div className="loginContainer">
      <div className="loginform">
        <form onSubmit={SubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={userRef}
            required
            placeholder="Enter username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="Password"
            ref={passRef}
            required
            placeholder="Enter password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
export default Login;
