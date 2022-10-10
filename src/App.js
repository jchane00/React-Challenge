import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me")
  return (
    <div>
      <Navbar onClick = {setCurrentPage} currentPage={currentPage}/>
      { currentPage === "About Me" && <AboutMe />}
      { currentPage === "Portfolio" && <Portfolio />}
      { currentPage === "Contact" && <Contact />}
      { currentPage === "Resume" && <Resume />}
    </div>
  );
}

export default App;
