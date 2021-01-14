// Front End
// import {
//     L_HTML5
//   L_CSS3,
//   L_SASS,
//   L_BOOTSTRAP,
//   L_REACT,
//   L_REACT_BOOTSTRAP,
// } from "../../assets/images/skills";

import L_HTML5 from "../../assets/images/skills/html-5.svg";
import L_CSS3 from "../../assets/images/skills/css3.svg";
import L_SASS from "../../assets/images/skills/sass-1.svg";
import L_BOOTSTRAP from "../../assets/images/skills/bootstrap-4.svg";
import L_REACT from "../../assets/images/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/images/skills/react-bootstrap.svg";

// Back End

// Programming Language
import L_JAVASCRIPT from "../../assets/images/skills/javascript.svg";

// Hosting Platforms
// import { L_GITHUB_PAGES, L_HEROKU } from "../../assets/images/skills";
import L_GITHUB_PAGES from "../../assets/images/skills/github.svg";
import L_HEROKU from "../../assets/images/skills/heroku.svg";

export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillsName: "HTML5",
    },
    {
      link: "https://www.w3schools.com/Css/css_intro.asp",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillsName: "CSS3",
    },
    {
      link: "https://sass-lang.com/",
      imgAltText: "SASS",
      imgSrc: L_SASS,
      skillsName: "SASS",
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "BOOTSTRAP",
      imgSrc: L_BOOTSTRAP,
      skillsName: "BOOTSTRAP",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "REACT JS",
      imgSrc: L_REACT,
      skillsName: "REACT JS",
    },
    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "REACT BOOTSTRAP",
      imgSrc: L_REACT_BOOTSTRAP,
      skillsName: "REACT-BOOTSTRAP",
    },
  ],
  programmingLanguage: [
    {
      link: "https://www.javascript.com/",
      imgAltText: "JAVASCRIPT",
      imgSrc: L_JAVASCRIPT,
      skillsName: "JAVASCRIPT",
    },
  ],
  hostingPlatforms: [
    {
      link: "https://github.com/",
      imgAltText: "GITHUB",
      imgSrc: L_GITHUB_PAGES,
      skillsName: "GITHUB",
    },
    {
      link: "https://www.heroku.com/",
      imgAltText: "HEROKU",
      imgSrc: L_HEROKU,
      skillsName: "HEROKU",
    },
  ],
};
