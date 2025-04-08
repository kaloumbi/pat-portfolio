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
  const path = window.location.pathname;

  if (path.includes("About.html")) {
    return About();
  }

  if (path.includes("Projects.html")) {
    return Projects();
  }

  if (path.includes("Skills.html")) {
    return Skills();
  }

  if (path.includes("Contact.html")) {
    return Contact();
  }

  return Home();
}
