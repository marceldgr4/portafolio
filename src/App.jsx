
import styles from'./App.module.css';
import {About} from "./Componets/About/about";
import{Contact} from "./Componets/Contact/Contact";
import {Studio} from "./Componets/Studio/Studio";
import {Experience} from "./Componets/Experiences/Experience";
import{Projects} from "./Componets/Projects/Projects";
import { Transport } from "./Componets/Trans/Transport";

import {Hero} from "./Componets/Hero/Hero";
import {Navbar} from "./Componets/Navbar/Navbar";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
            <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="studio"><Studio /></section>
              <section id="experience"><Experience /></section>
              <section id="projects"><Projects /></section>
              <section id="contact"><Contact /></section>
              
            </>
          } />
          <Route path="/Transport" element={<Transport/>}/>
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
