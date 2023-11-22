import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Project from "./component/Projects/Projects";
import Blog from './component/Blog/Blog';


function App() {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
      <Project/>
      <Blog/>
      
    </>
  );
}

export default App;