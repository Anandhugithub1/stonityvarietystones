import Home from "./Home/Home";
import About from "./sections/about/About";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const App = () => {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" index element={<Home/>}/>

    <Route path="/about" element={<About/>}/>

  </Routes>

  </BrowserRouter>
  </>
  );
}

export default App;