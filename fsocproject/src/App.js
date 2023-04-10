
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Homepage';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Rooms from "./components/Rooms"

function App() {
  return (
  <BrowserRouter>
  
    <div className="App">

      <Navbar/>   
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/signup" element={<Signup/>}></Route>
        <Route path ="/signin" element={<Signin/>}></Route>
        <Route path ="/rooms" element = {<Rooms/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;