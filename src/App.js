import React from "react";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

// components
import MyNavbar from "./components/navbar/mynavbar";
import MyCarousel from "./components/carousel/myCarousel";
import TitleMessage from "./components/titleMessage/titleMessage";

// Pages
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";

import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />

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
      {/* skills scetion */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default App;
