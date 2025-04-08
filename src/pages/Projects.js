import mysmsImage from "../assets/images/mysmc.png";
import kadioulaImage from "../assets/images/kadioula.png";
import burgerImage from "../assets/images/burger.png";
import cotisationImage from "../assets/images/cotisation.png";
import csbambilorImage from "../assets/images/csbambilor.png";
import libraryImage from "../assets/images/library.png";

export default function Projects() {
  return `
    <section class="projects-section">
      <div class="btn-projects">
        <a href="Home.html">Go Back</a>
      </div>
      <div class="container-projects">
        <h1>Mes Projets</h1>
        <div class="projects">
          <div class="project-card">
            <img src="${mysmsImage}" alt="Système de Gestion de Bibliothèque">
            <div class="project-info">
              <h2 class="project-title">Système de Gestion des Incidents</h2>
              <p class="project-description">Conception et développement d'une application dédiée à la gestion des incidents au sein de Sonatel...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${kadioulaImage}" alt="Application de Prévision Météorologique">
            <div class="project-info">
              <h2 class="project-title">Plateforme E-commerce de Produits Naturels</h2>
              <p class="project-description">Kadioula Shop est une plateforme e-commerce monolithique sous Laravel...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${burgerImage}" alt="Classification des Races de Chiens">
            <div class="project-info">
              <h2 class="project-title">Projet E-commerce</h2>
              <p class="project-description">Développé avec Angular et Symfony, ce projet facilite la gestion des commandes et des livraisons...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${cotisationImage}" alt="Prédiction des Prix des Maisons à Boston">
            <div class="project-info">
              <h2 class="project-title">Système de Gestion des Cotisations</h2>
              <p class="project-description">Développement d'une application dédiée à la gestion des adhésions, des paiements...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${csbambilorImage}" alt="Prédiction des Prix des Maisons à Boston">
            <div class="project-info">
              <h2 class="project-title">Système de gestion des versements des adhérents</h2>
              <p class="project-description">Assurer le bon fonctionnement de l'application en effectuant des mises à jour régulières...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${libraryImage}" alt="Système de gestion de bibliothèque">
            <div class="project-info">
              <h2 class="project-title">Système de Gestion d'une Bibliothèque</h2>
              <p class="project-description">Ce projet s'inscrit dans un cadre révolutionnaire, pour contribuer au développement des bibliothèques...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
