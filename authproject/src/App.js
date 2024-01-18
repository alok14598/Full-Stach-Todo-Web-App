import Home from "./Pages/Home/Home"
import SignUp from "./Pages/SignUp/SignUp";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import UserPost from "./Pages/UserPost/UserPost";
import NewPost from "./Pages/NewPost/NewPost";
import { useContext } from "react";
import { UserContext } from "./Context/UserContext";


function App() {

  const {user} = useContext(UserContext);


  return (

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
  
    <Route path="/:id/userpost" element={!user ? <Home/> :<UserPost />}/>
    <Route path="/newPost" element={!user ? <Home/> : <NewPost />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
 