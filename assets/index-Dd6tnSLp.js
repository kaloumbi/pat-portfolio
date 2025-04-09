(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();setTimeout(function(){const e=document.querySelector("#home-link");e&&e.addEventListener("click",s=>{s.preventDefault(),window.location.href="Home.html"})});setTimeout(()=>{const e=document.querySelector("#about-link");e&&e.addEventListener("click",s=>{s.preventDefault(),window.location.href="About.html"})},0);setTimeout(()=>{const e=document.querySelector("#projects-link");e&&e.addEventListener("click",s=>{s.preventDefault(),window.location.href="Projects.html"})},0);setTimeout(()=>{const e=document.querySelector("#skills-link");e&&e.addEventListener("click",s=>{s.preventDefault(),window.location.href="Skills.html"})},0);setTimeout(()=>{const e=document.querySelector("#contact-link");e&&e.addEventListener("click",s=>{s.preventDefault(),window.location.href="Contact.html"})},0);const l="/pat-portfolio/assets/kaloumbi-D4Vbgvzh.png",c="/pat-portfolio/assets/galaxy-C00qCKCU.mp4",r="/pat-portfolio/assets/pat_cv-CGPg1czB.pdf";function d(){return`
    <video autoplay loop muted plays-inline class="back-vid">
      <source src="${c}" type="video/mp4">
    </video>

    <section class="main-section">
      <nav>
        <a href="contact.html" style="text-decoration: none;" >
          <h1 data-aos="zoom-in" data-aos-duration="1000">
            <span style="color: #4acfee;">Pat</span>D
          </h1>
        </a>
        <ul>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <a class="active" href="#" id="home-link">Home</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <a href="#about" id="about-link">About</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <a href="#projects" id="projects-link">Projects</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="#skills" id="skills-link">Skills</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <a href="#contact" id="contact-link">Contact</a>
          </li>
        </ul>
      </nav>

      <div class="hero">
        <div class="hero-info">
          <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="700">
            Hi, I'm Paterne DIEDHIOU
          </h1>
          <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
            I'm a web developer
          </h2>
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-delay="1000">
            Développeur web passionné, spécialisé dans la conception et l'optimisation d'applications performantes. Maîtrisant Angular et Spring Boot, je conçois des solutions sécurisées et évolutives. Rigoureux et innovant, je transforme vos idées en expériences digitales fluides et efficaces.
          </p>
          <div class="Buttons">
            <a href="${r}" class="btn" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="1100">
              Download Cv
            </a>
            <ul class="ul-icons">
              <li><a href="https://urls.fr/xSLPH0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200"><i class='bx bxl-github'></i></a></li>
              <li><a href="https://urls.fr/XIuk1s" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300"><i class='bx bxl-twitter'></i></a></li>
              <li><a href="https://urls.fr/p1qXHS" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400"><i class='bx bxl-linkedin'></i></a></li>
              <li><a href="https://urls.fr/6lUg1s" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500"><i class='bx bxl-facebook-circle'></i></a></li>
            </ul>
          </div>
        </div>

        <div class="hero-img" data-aos="zoom-in-left" data-aos-duration="2500">
          <img src="${l}" alt="person-img">
        </div>
      </div>

      <div class="info-sec">
        <div class="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1600">
          <h1>3+</h1>
          <p>Years of <br> Experience</p>
        </div>
        <div class="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1700">
          <h1>7+</h1>
          <p>Technical <br> Skills</p>
        </div>
        <div class="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1800">
          <h1>10+</h1>
          <p>Projects <br> Completed</p>
        </div>
        <div class="info-card" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1900">
          <h1>11+</h1>
          <p>Satisfied <br> Clients</p>
        </div>
      </div>
    </section>
  `}function p(){return`
    <section class="about-section">
      <div class="container">
        <div class="profile">
          <img src="${l}" alt="Photo de Paterne Diedhiou" class="profile-img">
        </div>
        <div class="about-content">
          <h1>Salut, je suis <span class="name">Paterne DIEDHIOU</span> !</h1>
          <h2>Développeur Web Full Stack, <span>📍Dakar, Sénégal</span></h2>
          
          <p>Passionné par la technologie, je conçois des solutions numériques élégantes et performantes. 
             Mon expertise couvre le développement frontend et backend, avec un fort attrait pour 
             l'optimisation et la performance des applications web.</p>
          <p>Je suis également passionné par l'innovation et l’apprentissage automatique.</p>

          <div class="skills">
            <h3>Mes Compétences :</h3>
            <ul>
              <li>✔️ Développement Web (Front & Back)</li>
              <li>✔️ Architecture des Applications</li>
              <li>✔️ Optimisation des Performances</li>
              <li>✔️ Intelligence Artificielle & Algorithmes</li>
            </ul>
          </div>

          <a href="contact.html" class="btn">Go Back</a>
        </div>
      </div>
    </section>
  `}function u(){return`
      <section class="contact-section">
        <div class="contact-container">
          <h1>Contactez-moi</h1>
          <p>Je suis disponible pour toute demande ou collaboration. Utilisez le formulaire ci-dessous pour me contacter directement.</p>
          <a href="https://urls.fr/bLxSBG" target="_blank" class="contact-btn">Me Contacter</a>
          <a href="index.html" class="btn go-back-btn">Go Back</a> <!-- Nouveau bouton pour revenir à l'accueil -->
        </div>
      </section>
    `}const v="/pat-portfolio/assets/mysmc-7JBfZ_MC.png",m="/pat-portfolio/assets/kadioula-eLhn7pYk.png",f="/pat-portfolio/assets/burger-zAkazBrY.png",h="/pat-portfolio/assets/cotisation-BbEHcICL.png",g="/pat-portfolio/assets/csbambilor-Cqsa-ogz.png",b="/pat-portfolio/assets/library-0wwCzmmx.png";function k(){return`
    <section class="projects-section">
      <div class="btn-projects">
        <a href="Home.html">Go Back</a>
      </div>
      <div class="container-projects">
        <h1>Mes Projets</h1>
        <div class="projects">
          <div class="project-card">
            <img src="${v}" alt="Système de Gestion de Bibliothèque">
            <div class="project-info">
              <h2 class="project-title">Système de Gestion des Incidents</h2>
              <p class="project-description">Conception et développement d'une application dédiée à la gestion des incidents au sein de Sonatel...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${m}" alt="Application de Prévision Météorologique">
            <div class="project-info">
              <h2 class="project-title">Plateforme E-commerce de Produits Naturels</h2>
              <p class="project-description">Kadioula Shop est une plateforme e-commerce monolithique sous Laravel...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${f}" alt="Classification des Races de Chiens">
            <div class="project-info">
              <h2 class="project-title">Projet E-commerce</h2>
              <p class="project-description">Développé avec Angular et Symfony, ce projet facilite la gestion des commandes et des livraisons...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${h}" alt="Prédiction des Prix des Maisons à Boston">
            <div class="project-info">
              <h2 class="project-title">Système de Gestion des Cotisations</h2>
              <p class="project-description">Développement d'une application dédiée à la gestion des adhésions, des paiements...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${g}" alt="Prédiction des Prix des Maisons à Boston">
            <div class="project-info">
              <h2 class="project-title">Système de gestion des versements des adhérents</h2>
              <p class="project-description">Assurer le bon fonctionnement de l'application en effectuant des mises à jour régulières...</p>
            </div>
          </div>
          <div class="project-card">
            <img src="${b}" alt="Système de gestion de bibliothèque">
            <div class="project-info">
              <h2 class="project-title">Système de Gestion d'une Bibliothèque</h2>
              <p class="project-description">Ce projet s'inscrit dans un cadre révolutionnaire, pour contribuer au développement des bibliothèques...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}const y="/pat-portfolio/assets/html-CSjHYa7R.png",S="/pat-portfolio/assets/css-CzimomKO.png",j="/pat-portfolio/assets/js-iy_mWHIL.png",x="/pat-portfolio/assets/php-BOzqSEJJ.png",L="/pat-portfolio/assets/java-DXHSbeF2.png",P="/pat-portfolio/assets/sql-fOeWRYQa.png",w="/pat-portfolio/assets/laravel-ylgtLrU-.png",I="/pat-portfolio/assets/symfony-DShnvIr1.png",C="/pat-portfolio/assets/spring-boot_1-D0s4nKfg.png",q="/pat-portfolio/assets/angular-6AW0G_vR.png",D="/pat-portfolio/assets/react-r8t5lCNq.png",$="/pat-portfolio/assets/mysql_1-Bxz2uNzx.png";function B(){return`
    <div class="inner">
        <div class="header">
            <h1>Mes Skills</h1>
            <a href="Home.html" class="home">Go back</a>
        </div>
        <div class="container-skills">
            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${y}" class="skill-icon" alt="HTML5">
                    </div>
                    <h3>HTML 5</h3>
                </div>
                <p>Langage de balisage structurant les pages web, permettant d'afficher du contenu interactif et accessible sur tous les navigateurs.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${S}" class="skill-icon" alt="CSS3">
                    </div>
                    <h3>CSS 3</h3>
                </div>
                <p>Feuilles de style en cascade offrant des designs modernes, animations et mises en page responsives pour une meilleure expérience utilisateur.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${j}" class="skill-icon" alt="JavaScript">
                    </div>
                    <h3>JS</h3>
                </div>
                <p>Langage de programmation essentiel pour le web, permettant de créer des interactions dynamiques et d'améliorer l'expérience utilisateur.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${x}" class="skill-icon" alt="PHP">
                    </div>
                    <h3>PHP</h3>
                </div>
                <p>Langage backend robuste et sécurisé, utilisé pour la création de sites dynamiques et la gestion des bases de données côté serveur.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${L}" class="skill-icon" alt="Java">
                    </div>
                    <h3>JAVA</h3>
                </div>
                <p>Langage polyvalent, utilisé pour le développement d'applications web, mobiles et d'entreprise grâce à sa portabilité et sa performance.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${P}" class="skill-icon" alt="SQL">
                    </div>
                    <h3>SQL</h3>
                </div>
                <p>Langage de gestion des bases de données relationnelles, essentiel pour stocker, interroger et manipuler des données efficacement.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${w}" class="skill-icon" alt="Laravel">
                    </div>
                    <h3>Laravel</h3>
                </div>
                <p>Framework PHP moderne offrant une architecture MVC optimisée, facilitant le développement rapide d’applications web sécurisées.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${I}" class="skill-icon" alt="Symfony">
                    </div>
                    <h3>Symfony</h3>
                </div>
                <p>Framework PHP puissant, modulaire et flexible, idéal pour développer des applications web complexes et performantes.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${C}" class="skill-icon" alt="Spring Boot">
                    </div>
                    <h3>Spring Boot</h3>
                </div>
                <p>Framework Java permettant la création rapide d'applications web robustes et évolutives avec une configuration simplifiée.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${q}" class="skill-icon" alt="Angular">
                    </div>
                    <h3>Angular</h3>
                </div>
                <p>Framework JavaScript moderne basé sur TypeScript, utilisé pour construire des applications web dynamiques et performantes.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${D}" class="skill-icon" alt="React JS">
                    </div>
                    <h3>React JS</h3>
                </div>
                <p>Bibliothèque JavaScript optimisée pour la création d’interfaces utilisateur réactives, performantes et modulaires.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${$}" class="skill-icon" alt="MySQL">
                    </div>
                    <h3>MySQL</h3>
                </div>
                <p>Système de gestion de bases de données relationnelles, rapide et fiable, couramment utilisé pour stocker et gérer des données.</p>
            </div>
        </div>
    </div>
  `}function H(){const e=window.location.hash;return e.includes("about")?p():e.includes("projects")?k():e.includes("skills")?B():e.includes("contact")?u():d()}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#app");function s(){e&&(e.innerHTML=H())}window.addEventListener("hashchange",s),s()});
