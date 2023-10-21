import style from "./SignUp.module.css"
import { Link } from "react-router-dom";

const SignUp = ()=> {

  return (
    <div className={style.signup_container}>
      <div className>
        <span className="fs-1 fw-bold">Sign Up</span>
        <div className={style.form_container}>
          <form>
            <div className="mb-3">
              {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
              <input type="email" className="form-control" id="name" aria-describedby="emailHelp"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                placeholder="Enter Email address"
              />
            </div>
            <div className="mb-3">
              {/* <label for="exampleInputPassword1" className="form-label">Password</label> */}
              <input type="password" className="form-control" id="password"
                placeholder="Enter Password"
              />
            </div>
            <div class="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
        <span>Or <Link to="/SignUp">Sign Up</Link> instead</span>
      </div>
    </div>
  )
}

export default SignUp;