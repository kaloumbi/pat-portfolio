import Home from "../src/pages/Home.js";
import About from "../src/pages/About.js";
import Contact from "../src/pages/Contact.js";
import Projects from "../src/pages/Projects.js";
import Skills from "../src/pages/Skills.js";
import "./assets/css/main.css";
import "./assets/css/about.css";
import "./assets/css/projects.css";
import "./assets/css/skills.css";
import "./assets/css/contact.css";

export default function App() {
  const hash = window.location.hash;

  switch (hash) {
    case "#about":
      return About();
    case "#projects":
      return Projects();
    case "#skills":
      return Skills();
    case "#contact":
      return Contact();
    default:
      return Home();
  }
}
