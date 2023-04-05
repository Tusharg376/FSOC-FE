import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Home from './components/homepage';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
  <BrowserRouter>
  
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <Routes>
        {/* <Route path ="/" element={<Home/>}></Route> */}
        <Route path ="/signup" element={<Signup/>}></Route>
        <Route path ="/signin" element={<Signin/>}></Route>
        <Route path ="/profile" element={<profile/>}></Route>

        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;