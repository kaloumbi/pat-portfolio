//importer le fichier App.js
import "./assets/css/main.css";
import App from "./App.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");

  function render() {
    if (app) app.innerHTML = App();
  }

  window.addEventListener("hashchange", render);
  render(); // initial
});
