import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/Signup';
import Myorders from './pages/Myorders';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children:[
        {index:true, element:<Home/>},
        {path: "/signin", element: <SignIn/>},
        {path: "/signup", element: <SignUp/>},
        {path: "/myorders", element: <Myorders/>},
        {path: "/cart", element: <Cart/>}
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
