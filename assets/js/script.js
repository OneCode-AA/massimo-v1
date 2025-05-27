document.addEventListener('DOMContentLoaded', () => {


/* ========================
   Intro Card
======================== */

    const introCard = document.getElementById('introCard');


  setTimeout(() => {
    if (introCard) {
      introCard.classList.add('fadeOout');
      setTimeout(() => {
        introCard.style.display = 'none';
        document.body.classList.remove('loading');
      }, 1000); 
    }
  }, 4500); 



  /* ========================
   Menu Btn & Social Btn
======================== */

  const socialBtn = document.getElementById('socialLinksBtn');
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('navMobile');

    menuBtn.addEventListener('click', () => {
    nav.classList.toggle('opened');
    menuBtn.classList.toggle('isActive')
  });



 socialBtn.addEventListener('click', () => {
    socialBtn.classList.toggle('isOpened');
    const icon = document.getElementById('socialBtnIcon');
    const container = document.getElementById('socialContainer');

    if (socialBtn.classList.contains('isOpened')) {
      icon.setAttribute('name', 'chevron-up-circle-outline');
      container.classList.add('showLinks');
    } else {
      icon.setAttribute('name', 'chevron-down-circle-outline');
      container.classList.remove('showLinks');
    }
  });


   const socialLinks = [
    {
      name: 'CodePen',
      icon: 'logo-codepen',
      href: 'https://codepen.io/thetwomigrations',
    },
    {
      name: 'LinkedIn',
      icon: 'logo-linkedin',
      href: 'https://www.linkedin.com/in/abooabdillaahmbj/',
    },
    {
      name: 'GitHub',
      icon: 'logo-github',
      href: 'https://codepen.io/thetwomigrations',
    },
    {
      name: 'Youtube',
      icon: 'logo-youtube',
      href: 'https://www.youtube.com/@TheTwoMigrations',
    },
  ];


  function generateSocial(id) {
    const container = document.getElementById(id);
    if (!container) return;

    socialLinks.forEach(({ name, icon, href }) => {
      const a = document.createElement('a');
      a.className = 'socialLink';
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';

      const spanName = document.createElement('span');
      spanName.className = 'spanName';
      spanName.textContent = name;

      const spanIcon = document.createElement('span');
      spanIcon.className = 'spanIcon';

      const ion = document.createElement('ion-icon');
      ion.setAttribute('name', icon);
      ion.classList.add('ion-icon');

      spanIcon.appendChild(ion);
      a.appendChild(spanName);
      a.appendChild(spanIcon);
      container.appendChild(a);
    });
  }

  generateSocial('socialContainer');
  generateSocial('socialFooter')
  generateSocial('bodySocial-ul')





// ==========================
// Scroll Behavior
// ==========================

let lastScrollTop = 0;
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0"
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});




  /* ========================
   Experiences
======================== */



const experiences = [
  {
    title: "Coding Instructor Intern",
    company: "New Vision Foundation",
    alias: ["NVF", "New Vision Foundation"],
    date: "April 2025 - Present",
    location: "Saint Paul, MN, USA",
    description: `Teaching coding skills to elementary students, mentoring projects, and providing feedback.`,
  },
  {
    title: "Frontend Developer Freelancer",
    company: "Upwork",
    alias: ["Upwork"],
    date: "March 2024 - April 2025",
    location: "Remote",
    description: `Building responsive websites and web applications using React, HTML, CSS, and JavaScript.`,
  }
];

function renderExperienceByCompany(companyKey) {
  const jobContainer = document.getElementById("occupation");
  jobContainer.innerHTML = "";

  const experience = experiences.find(exp =>
    exp.alias.includes(companyKey) || exp.company === companyKey
  );
  if (!experience) return;

  jobContainer.innerHTML = `
    <section class="occupationContainer">
      <article class="job">
        <p class="title">${experience.title}</p>
        <p class="company">@ ${experience.company}</p>
      </article>
      <article>
        <p class="date">${experience.date}</p>
        <p class="location">${experience.location}</p>
      </article>
    </section>
    <p class="description">${experience.description}</p>
  `;
}


document.getElementById("job-ul").addEventListener("click", (e) => {
  const li = e.target.closest(".job-li");
  if (!li) return;

  const company = li.dataset.company;
  renderExperienceByCompany(company);

  document.querySelectorAll(".job-li").forEach(el => el.classList.remove("active"));
  li.classList.add("active");
});

renderExperienceByCompany("NVF");



  /* ========================
  Project
======================== */



const projects = [
  {
    title: "Plan Ahead App",
    image: "assets/img/planaheadappimg.png",
    description: "Whilst learning working at a company that did distribution, it became very hard on us to go to each store everyday and have to load alot of products in our trucks just to end up not needing it all just to come back and unload, soooo! I thought to myself, why not build an app that helps bridge the gap between us and the clients by having them log in, and let us know what they are low on and what they need so we can bring in exactly amount... so during my react.js learning process, I built Plan Ahead App, which is still under development..no longer with the company but I did learn alot working on this app.",
    tech: ["VS Code", "Material UI", "Next.js", "TailwindCSS"],
    liveLink: "https://plan-ahead-app.vercel.app/",
    codeLink: "https://github.com/OneCode-AA/plan-ahead-app",
  },
  {
    title: "M.A.J. General Maintenance Landing Page",
    image: "assets/img/maj-img.png",
    description: "",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://maj-green.vercel.app/",
    codeLink: "https://github.com/OneCode-AA/maj",
  },
  {
    title: "Todo App",
    image: "assets/img/todoapp.png",
    description: "",
    tech: ["React.js/Next.js"],
    liveLink: "https://todo-app-2k25.vercel.app/",
    codeLink: "https://github.com/OneCode-AA/todo-app-2k25"
  },
];

function renderProjects() {
  const workSection = document.querySelector(".projectsContainer");

  projects.forEach(project => {
    const section = document.createElement("section");
    section.className = "projectCard";

    section.innerHTML = `
      <article class="cardIntro">
        <h4 class="title">${project.title}</h4>
        <img src="${project.image}" alt="" class="workImg" />
        <p class="projectDetails">${project.description}</p>
      </article>
      <article class="details">
        <section class="tech">
          <h4>Technologies Used</h4>
          <ul class="techList">
          ${project.tech.map(tech => `<li class="techItem">${tech}</li>`).join("")}
          </ul>
        </section>
        <section class="repoLive">
          <a href="${project.liveLink}" class="live">
            <ion-icon name="open-outline"></ion-icon>
          </a>
          <a href="${project.codeLink}" class="repo">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </section>
      </article>
    `;

    workSection.appendChild(section);
  });
}


renderProjects();



  /* ========================
   Skills
======================== */

const skills = [
  {
    title: "Frontend",
    sets: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }]
  },
  {
    title: "Backend",
    sets: [{ name: "Node.js" }, { name: "Python" }, { name: "Go" }, { name: "Java" }]
  },
  {
    title: "Frameworks & Libraries",
    sets: [{ name: "React.js/Next.js" }, { name: "Express.js"}, { name: "jQuery" }, { name: "Bootstrap" }, { name: "TailwindCSS" }, { name: "SASS/LESS" }]
  },
  {
    title: "Tools",
    sets: [{ name: "Git" }, { name: "GitHub" }]
  }
];

function renderSkillTabs() {
  const ul = document.getElementById("skill-ul");
  skills.forEach((skill, index) => {
    const li = document.createElement("li");
    li.className = `skill-li ${index === 0 ? "active" : ""}`;
    li.dataset.skill = skill.title;
    li.innerText = skill.title;
    ul.appendChild(li);
  });
}


function renderSkillSet(skillTitle) {
  const container = document.getElementById("skillSet");
  container.innerHTML = "";

  const skill = skills.find(s => s.title === skillTitle);
  if (!skill) return;

  const skillListItems = skill.sets
    .map(set => `<li class="skills-li">${set.name}</li>`)
    .join("");

  const section = document.createElement("section");
  section.className = "skillCard";
  section.innerHTML = `
    <h4 class="skillTitle">${skill.title}</h4>
    <ul class="skills-ul">
      ${skillListItems}
    </ul>
  `;

  container.appendChild(section);
}


document.getElementById("skill-ul").addEventListener("click", (e) => {
  const li = e.target.closest(".skill-li");
  if (!li) return;

  renderSkillSet(li.dataset.skill);

  document.querySelectorAll(".skill-li").forEach(el => el.classList.remove("active"));
  li.classList.add("active");
});

renderSkillTabs();
renderSkillSet("Frontend");



  /* ========================
  
======================== */
})