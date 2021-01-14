import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

// components
import MyNavbar from "./components/navbar/mynavbar";
import MyCarousel from "./components/carousel/myCarousel";
import TitleMessage from "./components/titleMessage/titleMessage";
import Footer from "./components/footer/footer";

// Pages
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";

import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

      {/* About me section */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/images/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

      {/* skills section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>

      {/* contact */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>

      {/* Footer */}
      <hr />
      <Footer />
    </div>
  );
};

export default App;
