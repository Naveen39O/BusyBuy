import style from "./SignIn.module.css"
import { Link } from "react-router-dom";
const SignIn = ()=> {

  return (
    <div className={style.signin_container}>
      <div className>
        <span className="fs-1 fw-bold">Sign In</span>
        <div className={style.form_container}>
          <form>
            <div className="mb-3">
              {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter Email address"
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
              <input type="password" className="form-control" id="exampleInputPassword1"
                placeholder="Enter Password"
              />
            </div>
            <div class="d-grid gap-2">
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