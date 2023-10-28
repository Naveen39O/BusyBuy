import style from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = ()=> {
  const isLoggedIn = true;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light-rgb">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Busy Buy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {isLoggedIn && 
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
              <ul className="navbar-nav ">
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <Link className="nav-link" to="/myorders">My orders</Link>
                </li>
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <Link className="nav-link" to="/cart">Cart</Link>
                </li>
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <Link className="nav-link" to="/signin">Logout</Link>
                </li>
              </ul>
            </div>
          }
          {
            !isLoggedIn &&
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
              <ul className="navbar-nav ">
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <Link className="nav-link" to="/signin">SignIn</Link>
                </li>
              </ul>
            </div>
          }
        </div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Navbar;