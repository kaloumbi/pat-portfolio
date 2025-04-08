//IMPORTATION LE FICHIER SCRIPT DE HOME
import "../assets/js/homeScript.js";

export default function Home() {
  return `
    <video autoplay loop muted plays-inline class="back-vid">
      <source src="./src/assets/images/galaxy.mp4" type="video/mp4">
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
            <a class="active" href="#" id="home-link" >Home</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <a href="#" id="about-link" >About</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <a href="#" id="projects-link" >Projects</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="#" id="skills-link" >Skills</a>
          </li>
          <li data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <a href="#" id="contact-link" >Contact</a>
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
            <a href="./src/assets/documents/pat_cv.pdf" class="btn" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="1100">
              Download Cv
            </a>
            <ul class="ul-icons">
              <li>
                <a href="https://urls.fr/xSLPH0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                  <i class='bx bxl-github'></i>
                </a>
              </li>
              <li>
                <a href="https://urls.fr/XIuk1s" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300">
                  <i class='bx bxl-twitter'></i>
                </a>
              </li>
              <li>
                <a href="https://urls.fr/p1qXHS" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
                  <i class='bx bxl-linkedin'></i>
                </a>
              </li>
              <li>
                <a href="https://urls.fr/6lUg1s" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1500">
                  <i class='bx bxl-facebook-circle'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="hero-img" data-aos="zoom-in-left" data-aos-duration="2500">
          <img src="./src/assets/images/kaloumbi.png" alt="person-img">
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
  `;
}
