import Navigation from "./component/navigation/navigation";
import ImageSlider from "./component/slider/ImageSlider";
import { SliderData } from "./component/slider/SliderData";
import Body from "./component/body/body"
import Footer from "./component/footer/footer";
import Mobail from "./component/navigation/mobile";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Mobail/>
      <ImageSlider slides={SliderData}/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
