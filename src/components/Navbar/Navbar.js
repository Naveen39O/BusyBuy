import style from "./Navbar.module.css";
import { Outlet, Link } from "react-router-dom";

const Navbar = ()=> {
  const isLoggedIn = false;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light-rgb">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Busy Buy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {isLoggedIn && 
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
              <ul className="navbar-nav ">
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <a className="nav-link">Home</a>
                </li>
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <a className="nav-link">My orders</a>
                </li>
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <a className="nav-link">Cart</a>
                </li>
                <li className={`nav-item ${style.flex_row}`}>
                  <img src="" alt=""/>
                  <a className="nav-link">Logout</a>
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