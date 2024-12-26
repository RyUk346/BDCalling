import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <>
      <NavBar className=""></NavBar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Works></Works>
      <Pricing></Pricing>
      <Blog></Blog>
      <Footer></Footer>
    </>
  );
}

export default App;
