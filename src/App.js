import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Watchhistoty from "./pages/Watchhistoty";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Landing></Landing>} ></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Watchhistoty' element={<Watchhistoty></Watchhistoty>}></Route>
    
      </Routes>
      <Footer></Footer>
      

    </div>
  );
}

export default App;
