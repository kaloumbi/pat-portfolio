// LES SCRIPTES DE LA PAGE
setTimeout(function () {
  const homeLink = document.querySelector("#home-link");
  if (homeLink) {
    homeLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "Home.html";
    });
  }
});

setTimeout(() => {
  const aboutLink = document.querySelector("#about-link");
  if (aboutLink) {
    aboutLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "About.html";
    });
  }
}, 0);

setTimeout(() => {
  const projectsLink = document.querySelector("#projects-link");
  if (projectsLink) {
    projectsLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "Projects.html";
    });
  }
}, 0);

setTimeout(() => {
  const skillsLink = document.querySelector("#skills-link");
  if (skillsLink) {
    skillsLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "Skills.html";
    });
  }
}, 0);

setTimeout(() => {
  const contactLink = document.querySelector("#contact-link");
  if (contactLink) {
    contactLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "Contact.html";
    });
  }
}, 0);
