//importer le fichier App.js
import "./assets/css/main.css";
import App from "./App.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = App();
  }
});
