import { lazy, Suspense } from "react";
import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loading } from "./Components/Loading/Loading";

// Lazy loading de componentes
const Hero = lazy(() => import("./Components/Hero/Hero").then(module => ({ default: module.Hero })));
const About = lazy(() => import("./Components/About/about").then(module => ({ default: module.About })));
const Studio = lazy(() => import("./Components/Studio/Studio").then(module => ({ default: module.Studio })));
const Experience = lazy(() => import("./Components/Experiences/Experience").then(module => ({ default: module.Experience })));
const Projects = lazy(() => import("./Components/Projects/Projects").then(module => ({ default: module.Projects })));
const Contact = lazy(() => import("./Components/Contact/Contact").then(module => ({ default: module.Contact })));
const Transport = lazy(() => import("./Components/Trans/Transport").then(module => ({ default: module.Transport })));
const PagError = lazy(() => import("./Components/PagError/PagError").then(module => ({ default: module.PagError })));
const InvenProject = lazy(() => import("./Components/InvenProject/InvenProject").then(module => ({ default: module.InvenProject })));

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Suspense fallback={<Loading />}>
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
            <Route path="/InvenProject" element={<InvenProject />} />
            <Route path="*" element={<PagError />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;