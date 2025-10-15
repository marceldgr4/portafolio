import styles from "./App.module.css";
import { About } from "./Components/About/about";
import { Contact } from "./Components/Contact/Contact";
import { Studio } from "./Components/Studio/Studio";
import { Experience } from "./Components/Experiences/Experience";
import { Projects } from "./Components/Projects/Projects";

import { Transport } from "./Components/Trans/Transport";

import { PagError } from "./Components/PagError/PagError";

import { InvenProject } from "./Components/InvenProject/InvenProject";

import { Hero } from "./Components/Hero/Hero";

import { Navbar } from "./Components/Navbar/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <Hero />
                </section>

                <section id="about">
                  <About />
                </section>

                <section id="studio">
                  <Studio />
                </section>

                <section id="experience">
                  <Experience />
                </section>

                <section id="projects">
                  <Projects />
                </section>

                <section id="contact">
                  <Contact />
                </section>
              </>
            }
          />

          <Route path="/Transport" element={<Transport />} />

          <Route path="/PagError" element={<PagError />} />

          <Route path="/InvenProject" element={<InvenProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
