import FeedBack from "./Component/FeedBack";
import Footer from "./Component/Footer";
import Navbar from "./Component/Shared/Navbar";
import SubHeader from "./Component/SubHeader";
import Home from "./Component/Home/Index";
import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <div id="">
        <Navbar/>
        <SubHeader/>
        <Home/>
      </div>
      <div id="">
        
      </div>
    </div>
  );
}

export default App;
