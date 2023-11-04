import { createContext, useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword,
        signInWithEmailAndPassword, signOut  } from "firebase/auth";
import { db, app } from "./firebaseinit";

const authContext = createContext();

const useAuthValue = ()=>{
  const value = useContext(authContext);
  return value;
}

export default function CustomAuthContext({children}){

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({name:"", email:"", password:""});
  const [userId, setUserId] = useState();

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
            setIsLoggedIn(true);
            setUserId(user.uid);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            return false;
          });

    setUserInfo({name:"", email:"", password:""});
    return true;
  }

  const handleSignUp = async (e)=>{
    e.preventDefault();

    const auth = getAuth(app);
    await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        setUserId(user.uid);
        // console.log("User Credentials:", userCredential);
        setIsLoggedIn(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, "====", errorMessage);
        return false;
        // ..
      });

    setUserInfo({name:"", email:"", password:""});
    return true;
  }

  const handleSignOut = ()=>{
    const auth = getAuth(app);
    signOut(auth).then(() => {
      // Sign-out successful.
      setIsLoggedIn(false);
      console.log("Log out Successful");
    }).catch((error) => {
      // An error happened.
      console.log("Error signing out:", error);
    });

  }

  return (
    <authContext.Provider value={{handleSignUp, handleNameChange, handleEmailChange,
                                  handlePasswordChange, userInfo, handleSignIn, isLoggedIn,
                                  handleSignOut, userId
                                  }}> 
      {children}
    </authContext.Provider>
  )
}

export {useAuthValue};