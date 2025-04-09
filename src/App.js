import Home from "../src/pages/Home.js";
import About from "../src/pages/About.js";
import Contact from "../src/pages/Contact.js";
import Projects from "../src/pages/Projects.js";
import Skills from "./pages/Skills.js";
import "./assets/css/main.css";
import "./assets/css/about.css";
import "./assets/css/projects.css";
import "./assets/css/skills.css";
import "./assets/css/contact.css";

export default function App() {
  const hash = window.location.hash;

  if (hash.includes("about")) {
    return About();
  }

  if (hash.includes("projects")) {
    return Projects();
  }

  if (hash.includes("skills")) {
    return Skills();
  }

  if (hash.includes("contact")) {
    return Contact();
  }

  return Home();
}
