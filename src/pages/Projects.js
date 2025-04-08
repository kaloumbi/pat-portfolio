export default function Projects() {
  return `
    <section class="projects-section">
        <div class="btn-projects" >
         <a href="Home.html" >Go Back</a>
        </div>
        <div class="container-projects">
            <h1>Mes Projets</h1>
            <div class="projects">
                <div class="project-card">
                    <img src="./src/assets/images/mysmc.png" alt="Système de Gestion de Bibliothèque">
                    <div class="project-info">
                        <h2 class="project-title">Système de Gestion des Incidents</h2>
                        <p class="project-description">Conception et développement d'une application dédiée à la gestion des incidents au sein de Sonatel, permettant une supervision efficace et une gestion fluide des processus liés aux incidents. Ce projet repose sur une architecture robuste et sécurisée. Le backend est développé avec Spring Boot, garantissant des performances optimales et une intégration fluide avec les systèmes existants.</p>
                    </div>
                </div>
                <div class="project-card">
                    <img src="./src/assets/images/kadioula.png" alt="Application de Prévision Météorologique">
                    <div class="project-info">
                        <h2 class="project-title">Plateforme E-commerce de Produits Naturels</h2>
                        <p class="project-description">Kadioula Shop est une plateforme e-commerce monolithique sous Laravel, spécialisée dans les produits naturels locaux. Elle offre une expérience d'achat fluide et sécurisée grâce à l'intégration de Stripe.</p>
                    </div>
                </div>
                <div class="project-card">
                    <img src="./src/assets/images/burger.png" alt="Classification des Races de Chiens">
                    <div class="project-info">
                        <h2 class="project-title">Projet E-commerce</h2>
                        <p class="project-description">Développé avec Angular et Symfony, ce projet facilite la gestion des commandes et des livraisons. Il intègre une authentification sécurisée (JWT), la confirmation par e-mail et un système avancé de gestion des rôles, garantissant une expérience fluide et sécurisée pour les clients et les gestionnaires.</p>
                    </div>
                </div>
                <div class="project-card">
                    <img src="./src/assets/images/cotisation.png" alt="Prédiction des Prix des Maisons à Boston">
                    <div class="project-info">
                        <h2 class="project-title">Système de Gestion des Cotisations</h2>
                        <p class="project-description">Développement d'une application dédiée à la gestion des adhésions, des paiements et à la génération de rapports analytiques, utilisant le framework Java Spring Boot.</p>
                    </div>
                </div>
                <div class="project-card">
                    <img src="./src/assets/images/csbambilor.png" alt="Prédiction des Prix des Maisons à Boston">
                    <div class="project-info">
                        <h2 class="project-title">Systeme de gestion  des versements des adhérents</h2>
                        <p class="project-description">Assurer le bon fonctionnement de l'application en effectuant des mise à jour régulieres et en corrigeant les eventuels bugs.</p>
                    </div>
                </div>
                <div class="project-card">
                    <img src="./src/assets/images/library.png" alt="Prédiction des Prix des Maisons à Boston">
                    <div class="project-info">
                        <h2 class="project-title">Systeme De Gestion D'une Bibliotheque</h2>
                        <p class="project-description">Ce projet s'inscrit dans un cadre revolutionnaire, pas pour remettre en cause le fonctionnement actuel des bibliotheques ni leur organisation mais pour apporter sa contribution pour le developpement de cette institution.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  `;
}
