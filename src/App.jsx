import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsSection from "./components/ProjectsSection"; // Updated to use ProjectsSection
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SunsickWebsiteProject from "./components/SunsickWebsiteProject";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      {/* App Content */}
      <Router>
        <div className="container mx-auto px-8">
          <Navbar />
          <Routes>
            {/* Homepage with Hero, About, and Projects */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <ProjectsSection />
                </>
              }
            />

            {/* Detailed Project Pages */}
            <Route
              path="/projects/sunsick-band-website"
              element={<SunsickWebsiteProject />}
            />
            {/* Add more project routes as needed */}
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
