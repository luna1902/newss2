
import './App.css';
import Home from './home';
import Navigate from './navigate';
import Footer from './footer';
import Apps from './container'
import Navig from './navig';
// import Product from './product';
import axios from 'axios';
function App() {
  return (
    <div className="App">
     <div className="content1">
       <Navig/>
       <Home/> 
       <Navigate/>
       {/* <Product/> */}
       
      <Apps/> 
     <Footer/>
     </div>
    </div>
  );
}

export default App;
