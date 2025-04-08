import imgPath from '../assets/images/kaloumbi.png';

export default function About() {
  return `
    <section class="about-section">
      <div class="container">
        <div class="profile">
          <img src="${imgPath}" alt="Photo de Paterne Diedhiou" class="profile-img">
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
  `;
}
