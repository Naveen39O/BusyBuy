import style from "./SignIn.module.css"
import { Link } from "react-router-dom";
import { useAuthValue } from "../../authContext";

const SignIn = ()=> {

  const value = useAuthValue();

  return (
    <div className={style.signin_container}>
      <div className>
        <span className="fs-1 fw-bold">Sign In</span>
        <div className={style.form_container}>
          <form onSubmit={value.handleSignIn}>
            <div className="mb-3">
              {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter Email address"
                value={value.userInfo.email}
                onChange={value.handleEmailChange}
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
              <input type="password" className="form-control" id="exampleInputPassword1"
                placeholder="Enter Password"
                value={value.userInfo.password}
                onChange={value.handlePasswordChange}
              />
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
        <span>Or <Link to="/SignUp">Sign Up</Link> instead</span>
      </div>
    </div>
  )
}

export default SignIn;