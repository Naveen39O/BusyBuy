import style from "./SignUp.module.css"
import { Link, useNavigate } from "react-router-dom";
import {useAuthValue} from "../../authContext";


const SignUp = ()=> {
  const value = useAuthValue();
  const navigate = useNavigate();

  return (
    <div className={style.signup_container}>
      <div className>
        <span className="fs-1 fw-bold">Sign Up</span>
        <div className={style.form_container}>
          <form onSubmit={(e)=> {
            value.handleSignUp(e);
            navigate("/");
          }}>
            <div className="mb-3">
              {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
              <input type="text" className="form-control" id="name" aria-describedby="emailHelp"
                placeholder="Enter Name"
                value ={value.userInfo.name}
                onChange={value.handleNameChange}
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                placeholder="Enter Email address"
                value={value.userInfo.email}
                onChange={value.handleEmailChange}
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
              <input type="password" className="form-control" id="password"
                placeholder="Enter Password"
                value={value.userInfo.password}
                onChange={value.handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp;