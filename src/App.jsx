import { lazy, Suspense } from "react";
import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Loading } from "./Components/Loading/Loading";


// Lazy loading de componentes para mejor performance
const Hero = lazy(() => import("./Components/Hero/Hero").then(module => ({ default: module.Hero })));
const About = lazy(() => import("./Components/About/about").then(module => ({ default: module.About })));
const Studio = lazy(() => import("./Components/Studio/Studio").then(module => ({ default: module.Studio })));
const Skills = lazy(() => import("./Components/Skills/Skills").then(module => ({ default: module.Skills })));
const Experience = lazy(() => import("./Components/Experiences/Experience").then(module => ({ default: module.Experience })));
const Architectures = lazy(() => import("./Components/Architectures/Architectures").then(module => ({ default: module.Architectures })));
const Projects = lazy(() => import("./Components/Projects/Projects").then(module => ({ default: module.Projects })));
const Contact = lazy(() => import("./Components/Contact/Contact").then(module => ({ default: module.Contact })));
const Transport = lazy(() => import("./Components/Trans/Transport").then(module => ({ default: module.Transport })));
const PagError = lazy(() => import("./Components/PagError/PagError").then(module => ({ default: module.PagError })));
const InvenProject = lazy(() => import("./Components/InvenProject/InvenProject").then(module => ({ default: module.InvenProject })));
const Cases = lazy(() => import("./Components/Cases/Cases").then(module => ({ default: module.Cases })));

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            {/* Ruta principal con todas las secciones */}
            <Route
              path="/"
              element={
                <main>
                  <section id="home">
                    <Hero />
                  </section>

                  <section id="about">
                    <About />
                  </section>

                  <section id="studio">
                    <Studio />
                  </section>

                  <section id="skills">
                    <Skills />
                  </section>

                  <section id="experience">
                    <Experience />
                  </section>

                  <section id="architectures">
                    <Architectures />
                  </section>

                  <section id="cases">
                    <Cases />
                  </section>

                  <section id="projects">
                    <Projects />
                  </section>

                  <section id="contact">
                    <Contact />
                  </section>

                  <ScrollToTop />
                </main>
              }
            />

            {/* Rutas de proyectos individuales */}
            <Route path="/Transport" element={<Transport />} />
            <Route path="/InvenProject" element={<InvenProject />} />
            
            {/* Ruta 404 - debe ir al final */}
            <Route path="*" element={<PagError />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;