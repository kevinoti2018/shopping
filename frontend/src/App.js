import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import About from './pages/About'
import Wish from './pages/Wish'
import Login from './pages/Login'
import Cart from './pages/cart'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
     <Route path='/' element ={<Home/>}/>
     <Route path='/login' element ={<Login/>}/>
     <Route path='/wish' element ={<Wish/>}/>
     <Route path='/cart' element ={<Cart/>}/>
     <Route path='/shop' element ={<Shop/>}/>
     <Route path='/about' element ={<About/>}/>
     <Route path='/contact' element ={<Contact/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
