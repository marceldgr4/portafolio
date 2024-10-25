
import styles from'./App.module.css';
import {About} from "./Componets/About/about";
import{Contact} from "./Componets/Contact/Contact";
import {Studio} from "./Componets/Studio/Studio";
import {Experience} from "./Componets/Experiences/Experience";
import{Projects} from "./Componets/Projects/Projects";


import {Hero} from "./Componets/Hero/Hero";
import {Navbar} from "./Componets/Navbar/Navbar";







function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <About />
    <Studio />
    <Experience/>
    <Projects/>
    < Contact />
    
  

  </div>
  );
}

export default App;
