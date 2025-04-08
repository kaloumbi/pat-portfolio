import App from "./App.js";

function renderApp() {
  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = App();
  }
}

// Écouter l'événement de chargement de la page (DOM prêt)
document.addEventListener("DOMContentLoaded", renderApp);

// Écouter les changements de hash dans l'URL
window.addEventListener("hashchange", renderApp);
