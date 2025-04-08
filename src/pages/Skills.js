import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import jsIcon from "../assets/images/js.png";
import phpIcon from "../assets/images/php.png";
import javaIcon from "../assets/images/java.png";
import sqlIcon from "../assets/images/sql.png";
import laravelIcon from "../assets/images/laravel.png";
import symfonyIcon from "../assets/images/symfony.png";
import springBootIcon from "../assets/images/spring-boot_1.png";
import angularIcon from "../assets/images/angular.png";
import reactIcon from "../assets/images/react.png";
import mysqlIcon from "../assets/images/mysql_1.png";

export default function Skills() {
  return `
    <div class="inner">
        <div class="header">
            <h1>Mes Skills</h1>
            <a href="Home.html" class="home">Go back</a>
        </div>
        <div class="container-skills">
            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${htmlIcon}" class="skill-icon" alt="HTML5">
                    </div>
                    <h3>HTML 5</h3>
                </div>
                <p>Langage de balisage structurant les pages web, permettant d'afficher du contenu interactif et accessible sur tous les navigateurs.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${cssIcon}" class="skill-icon" alt="CSS3">
                    </div>
                    <h3>CSS 3</h3>
                </div>
                <p>Feuilles de style en cascade offrant des designs modernes, animations et mises en page responsives pour une meilleure expérience utilisateur.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${jsIcon}" class="skill-icon" alt="JavaScript">
                    </div>
                    <h3>JS</h3>
                </div>
                <p>Langage de programmation essentiel pour le web, permettant de créer des interactions dynamiques et d'améliorer l'expérience utilisateur.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${phpIcon}" class="skill-icon" alt="PHP">
                    </div>
                    <h3>PHP</h3>
                </div>
                <p>Langage backend robuste et sécurisé, utilisé pour la création de sites dynamiques et la gestion des bases de données côté serveur.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${javaIcon}" class="skill-icon" alt="Java">
                    </div>
                    <h3>JAVA</h3>
                </div>
                <p>Langage polyvalent, utilisé pour le développement d'applications web, mobiles et d'entreprise grâce à sa portabilité et sa performance.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${sqlIcon}" class="skill-icon" alt="SQL">
                    </div>
                    <h3>SQL</h3>
                </div>
                <p>Langage de gestion des bases de données relationnelles, essentiel pour stocker, interroger et manipuler des données efficacement.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${laravelIcon}" class="skill-icon" alt="Laravel">
                    </div>
                    <h3>Laravel</h3>
                </div>
                <p>Framework PHP moderne offrant une architecture MVC optimisée, facilitant le développement rapide d’applications web sécurisées.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${symfonyIcon}" class="skill-icon" alt="Symfony">
                    </div>
                    <h3>Symfony</h3>
                </div>
                <p>Framework PHP puissant, modulaire et flexible, idéal pour développer des applications web complexes et performantes.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${springBootIcon}" class="skill-icon" alt="Spring Boot">
                    </div>
                    <h3>Spring Boot</h3>
                </div>
                <p>Framework Java permettant la création rapide d'applications web robustes et évolutives avec une configuration simplifiée.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${angularIcon}" class="skill-icon" alt="Angular">
                    </div>
                    <h3>Angular</h3>
                </div>
                <p>Framework JavaScript moderne basé sur TypeScript, utilisé pour construire des applications web dynamiques et performantes.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${reactIcon}" class="skill-icon" alt="React JS">
                    </div>
                    <h3>React JS</h3>
                </div>
                <p>Bibliothèque JavaScript optimisée pour la création d’interfaces utilisateur réactives, performantes et modulaires.</p>
            </div>

            <div class="skill-box">
                <div class="skill-title">
                    <div class="img">
                        <img src="${mysqlIcon}" class="skill-icon" alt="MySQL">
                    </div>
                    <h3>MySQL</h3>
                </div>
                <p>Système de gestion de bases de données relationnelles, rapide et fiable, couramment utilisé pour stocker et gérer des données.</p>
            </div>
        </div>
    </div>
  `;
}
