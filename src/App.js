import React from "react";

// components
import MyNavbar from "./components/navbar/mynavbar";
import MyCarousel from "./components/carousel/myCarousel";
import TitleMessage from "./components/titleMessage/titleMessage";

import "./App.css";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
};

export default App;
