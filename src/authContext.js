import { createContext, useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword  } from "firebase/auth";
import { redirect } from "react-router-dom";
import { db, app } from "./firebaseinit";

const authContext = createContext();

const useAuthValue = ()=>{
  const value = useContext(authContext);
  return value;
}

export default function CustomAuthContext({children}){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({name:"", email:"", password:""});

  const handleNameChange = (e)=> {
    setUserInfo({...userInfo, name: e.target.value});
  }

  const handleEmailChange = (e)=> {
    setUserInfo({...userInfo, email: e.target.value});
  }

  const handlePasswordChange = (e)=> {
    setUserInfo({...userInfo, password: e.target.value});
  }

  const handleSignIn = async (e)=>{
    e.preventDefault();

    const auth = getAuth(app);
    await signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });

    setUserInfo({name:"", email:"", password:""});
  }

  const handleSignUp = async (e)=>{
    e.preventDefault();

    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        console.log("User Credentials:", userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "====", errorMessage);
        // ..
        // return;
      });

    setUserInfo({name:"", email:"", password:""});
    // return redirect("/");
  }

  return (
    <authContext.Provider value={{handleSignUp, handleNameChange, handleEmailChange,
                                  handlePasswordChange, userInfo, handleSignIn,
                                  }}> 
      {children}
    </authContext.Provider>
  )
}

export {useAuthValue};