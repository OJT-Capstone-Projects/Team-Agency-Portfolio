/* =============================================================
   DevTeam Portfolio  -  team-projects.js
   Plain JavaScript only. CPR level. No frameworks.
   ============================================================= */

/* ── TEAM DATA ── */
var teamMembers = [
  {
    name:   "Sumit Tiwari",
    role:   "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sumittiwari1302",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=ST&backgroundColor=2c7a4b&fontFamily=Arial&fontSize=40&fontWeight=700"
  },
  {
    name:   "Khushi Shah",
    role:   "UI/UX Designer",
    skills: ["CSS", "Figma", "HTML"],
    github: "https://github.com/shahkhushi0307",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=KS&backgroundColor=e91e8c&fontFamily=Arial&fontSize=40&fontWeight=700"
  },
  {
    name:   "Rudra",
    role:   "Frontend Developer",
    skills: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/rudraabhishek-collab",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=RA&backgroundColor=e07b3a&fontFamily=Arial&fontSize=40&fontWeight=700"
  },
  {
    name:   "Abhishek Yadav",
    role:   "API Integration",
    skills: ["fetch()", "JSON", "Async"],
    github: "https://github.com/abhishekydvtech65",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AY&backgroundColor=4a7fc1&fontFamily=Arial&fontSize=40&fontWeight=700"
  }
];

/* ── PROJECTS DATA ── */
var projects = [
  {
    name:  "Expense Tracker",
    desc:  "Track income and expenses with localStorage persistence, category filters, and live balance calculation.",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fojt-capstone-projects.github.io%2Fexpense-tracker%2F&screenshot=true&meta=false&embed=screenshot.url",
    fallback: "https://placehold.co/600x360/5b9fbf/ffffff?text=Expense+Tracker",
    badge: "CRUD App",
    link:  "https://ojt-capstone-projects.github.io/expense-tracker/"
  },
  {
    name:  "Live News Feed",
    desc:  "Real-time news aggregator using NewsAPI with category filtering, search, and responsive card layout.",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fojt-capstone-projects.github.io%2FLive-News-Feed%2F&screenshot=true&meta=false&embed=screenshot.url",
    fallback: "https://placehold.co/600x360/7b6fa0/ffffff?text=Live+News+Feed",
    badge: "API Project",
    link:  "https://ojt-capstone-projects.github.io/Live-News-Feed/"
  },
  {
    name:  "Kanban Task Board",
    desc:  "Task management board with To Do, In Progress, and Done columns using localStorage persistence.",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fojt-capstone-projects.github.io%2FKanban--Task-board%2F&screenshot=true&meta=false&embed=screenshot.url",
    fallback: "https://placehold.co/600x360/6aab8e/ffffff?text=Kanban+Board",
    badge: "DOM App",
    link:  "https://ojt-capstone-projects.github.io/Kanban--Task-board/"
  },
  {
    name:  "Interactive Quiz App",
    desc:  "Dynamic quiz with multiple categories, score tracking, timer, and result summary built with DOM manipulation.",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fojt-capstone-projects.github.io%2FInteractive-quiz-app%2F&screenshot=true&meta=false&embed=screenshot.url",
    fallback: "https://placehold.co/600x360/4a9d6f/ffffff?text=Quiz+App",
    badge: "JavaScript",
    link:  "https://ojt-capstone-projects.github.io/Interactive-quiz-app/"
  },
  {
    name:  "GitHub Developer Explorer",
    desc:  "Search any GitHub username to explore their profile, repositories, and language breakdown.",
    image: "https://api.microlink.io/?url=https%3A%2F%2Fojt-capstone-projects.github.io%2FGithub-developer-explorer%2F&screenshot=true&meta=false&embed=screenshot.url",
    fallback: "https://placehold.co/600x360/3d5a73/ffffff?text=GitHub+Explorer",
    badge: "API Project",
    link:  "https://ojt-capstone-projects.github.io/Github-developer-explorer/"
  }
];

/* ── SKILLS with real SVG logos ── */
var skills = [
  {
    name: "HTML5",
    svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"#e34c26\" d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z\"/></svg>"
  },
  {
    name: "CSS3",
    svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"#264de4\" d=\"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z\"/></svg>"
  },
  {
    name: "JavaScript",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#f7df1e\"/><path d=\"M6.465 21.89l1.69-1.024c.326.579.623.069 1.101.069.448 0 .732-.174.732-.853V13.5h2.081v6.625c0 1.407-.824 2.045-2.028 2.045-1.086 0-1.714-.564-2.576-1.28zm5.686-.239 1.69-1.025c.446.728 1.028 1.264 2.056 1.264 1.062 0 1.734-.53 1.734-1.264 0-.878-.694-1.189-1.862-1.7l-.64-.275c-1.844-.786-3.067-1.774-3.067-3.86 0-1.921 1.463-3.384 3.749-3.384 1.629 0 2.8.566 3.641 2.05l-1.994 1.279c-.439-.786-.912-1.095-1.647-1.095-.75 0-1.225.475-1.225 1.095 0 .767.475 1.078 1.575 1.552l.64.275C20.2 16.5 21.5 17.46 21.5 19.64c0 2.185-1.716 3.568-4.023 3.568-2.253 0-3.71-1.07-4.326-2.557z\" fill=\"#000\"/></svg>"
  },
  {
    name: "DOM API",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#2c7a4b\"/><text x=\"12\" y=\"16\" text-anchor=\"middle\" fill=\"white\" font-size=\"8\" font-weight=\"700\" font-family=\"monospace\">DOM</text></svg>"
  },
  {
    name: "fetch() API",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#17a085\"/><text x=\"12\" y=\"13\" text-anchor=\"middle\" fill=\"white\" font-size=\"6.5\" font-weight=\"700\" font-family=\"monospace\">fetch</text><text x=\"12\" y=\"20\" text-anchor=\"middle\" fill=\"white\" font-size=\"6\" font-family=\"monospace\">()</text></svg>"
  },
  {
    name: "localStorage",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#d47b0f\"/><text x=\"12\" y=\"13\" text-anchor=\"middle\" fill=\"white\" font-size=\"5.5\" font-weight=\"700\" font-family=\"monospace\">local</text><text x=\"12\" y=\"20\" text-anchor=\"middle\" fill=\"white\" font-size=\"5.5\" font-weight=\"700\" font-family=\"monospace\">Store</text></svg>"
  },
  {
    name: "JSON",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#6b4fa0\"/><text x=\"12\" y=\"16\" text-anchor=\"middle\" fill=\"white\" font-size=\"8\" font-weight=\"700\" font-family=\"monospace\">JSON</text></svg>"
  },
  {
    name: "Git",
    svg: "<svg viewBox=\"0 0 24 24\"><path fill=\"#f05032\" d=\"M23.546 10.93L13.067.452a1.55 1.55 0 00-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 012.327 2.34l2.658 2.66a1.838 1.838 0 11-1.102 1.102L12.74 9.08v6.237a1.839 1.839 0 11-1.504-.07V9.017a1.839 1.839 0 01-.997-2.416L7.49 3.844.45 10.884a1.55 1.55 0 000 2.189l10.48 10.477a1.55 1.55 0 002.186 0l10.43-10.43a1.55 1.55 0 000-2.19z\"/></svg>"
  },
  {
    name: "GitHub",
    svg: "<svg viewBox=\"0 0 24 24\" class=\"github-svg\"><path class=\"github-path\" d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/></svg>"
  },
  {
    name: "Flexbox",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#4a7fc1\"/><rect x=\"3\" y=\"10\" width=\"4\" height=\"4\" rx=\"1\" fill=\"white\"/><rect x=\"10\" y=\"10\" width=\"4\" height=\"4\" rx=\"1\" fill=\"white\"/><rect x=\"17\" y=\"10\" width=\"4\" height=\"4\" rx=\"1\" fill=\"white\"/></svg>"
  },
  {
    name: "CSS Grid",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#c0392b\"/><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\" fill=\"white\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\" fill=\"white\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\" fill=\"white\"/><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\" fill=\"white\"/></svg>"
  },
  {
    name: "ES6+",
    svg: "<svg viewBox=\"0 0 24 24\"><rect width=\"24\" height=\"24\" rx=\"2\" fill=\"#f7df1e\"/><text x=\"12\" y=\"16\" text-anchor=\"middle\" fill=\"#000\" font-size=\"8\" font-weight=\"800\" font-family=\"monospace\">ES6+</text></svg>"
  }
];

/* ── DOM REFERENCES ── */
var teamGrid     = document.getElementById("teamGrid");
var projectsGrid = document.getElementById("projectsGrid");
var skillsGrid   = document.getElementById("skillsGrid");

/* ── renderTeam() ── */
function renderTeam() {
  teamGrid.innerHTML = "";
  teamMembers.forEach(function(member) {
    var tagsHTML = member.skills.map(function(s) {
      return "<span class=\"skill-tag\">" + s + "</span>";
    }).join("");
    var card = document.createElement("div");
    card.classList.add("team-card");
    card.innerHTML =
      "<img class=\"team-avatar\" src=\"" + member.avatar + "\" alt=\"" + member.name + "\" />" +
      "<p class=\"team-name\">" + member.name + "</p>" +
      "<p class=\"team-role\">" + member.role + "</p>" +
      "<div class=\"team-skills\">" + tagsHTML + "</div>" +
      "<a class=\"team-github\" href=\"" + member.github + "\" target=\"_blank\" rel=\"noopener\">GitHub</a>";
    teamGrid.appendChild(card);
  });
}

/* ── renderProjects() — uses correct CSS class names ── */
function renderProjects() {
  projectsGrid.innerHTML = "";
  projects.forEach(function(project) {
    var card = document.createElement("div");
    card.classList.add("project-card");
    card.innerHTML =
      "<div class=\"proj-img\">" +
        "<img src=\"" + project.image + "\" alt=\"" + project.name + "\" loading=\"lazy\" />" +
        "<span class=\"proj-badge\">" + project.badge + "</span>" +
      "</div>" +
      "<div class=\"proj-body\">" +
        "<p class=\"proj-name\">" + project.name + "</p>" +
        "<p class=\"proj-desc\">" + project.desc + "</p>" +
        "<div class=\"proj-foot\">" +
          "<button class=\"btn-view\" data-link=\"" + project.link + "\">View Project</button>" +
        "</div>" +
      "</div>";

    /* Fallback if screenshot API fails to load */
    var img = card.querySelector("img");
    img.addEventListener("error", function() {
      img.src = project.fallback;
    });

    projectsGrid.appendChild(card);
  });
  var btns = projectsGrid.querySelectorAll(".btn-view");
  btns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      window.open(btn.getAttribute("data-link"), "_blank");
    });
  });
}

/* ── renderSkills() — real SVG tech logos ── */
function renderSkills() {
  skillsGrid.innerHTML = "";
  skills.forEach(function(skill) {
    var card = document.createElement("div");
    card.classList.add("skill-card");
    card.innerHTML =
      "<div class=\"skill-logo\">" + skill.svg + "</div>" +
      "<span class=\"skill-label\">" + skill.name + "</span>";
    skillsGrid.appendChild(card);
  });
}

/* ── Counter animation ── */
function animateCounter(el, target, suffix) {
  var start = 0;
  var duration = 1800;
  var step = Math.ceil(target / (duration / 16));
  var timer = setInterval(function() {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.innerText = start + suffix;
  }, 16);
}

function startCounters() {
  var c1 = document.getElementById("cnt1");
  var c2 = document.getElementById("cnt2");
  var c3 = document.getElementById("cnt3");
  if (c1) animateCounter(c1, 5,  "");
  if (c2) animateCounter(c2, 4,  "");
  if (c3) animateCounter(c3, 10, "+");
}

/* ── NAV smooth scroll ── */
var navLinkEls = document.querySelectorAll(".nav-link");
navLinkEls.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute("href"));
    if (target) { target.scrollIntoView({ behavior: "smooth" }); }
  });
});

/* ── NAV active on scroll ── */
var allSections = document.querySelectorAll("section");
window.addEventListener("scroll", function() {
  var sy = window.scrollY;
  allSections.forEach(function(sec) {
    var top = sec.offsetTop - 80;
    var bot = top + sec.offsetHeight;
    var id  = sec.getAttribute("id");
    if (sy >= top && sy < bot) {
      navLinkEls.forEach(function(l) { l.classList.remove("active"); });
      var al = document.querySelector(".nav-link[href=\"#" + id + "\"]");
      if (al) { al.classList.add("active"); }
    }
  });
});

/* ── INIT ── */
renderTeam();
renderProjects();
renderSkills();
startCounters();

/* ── Typewriter effect ── */
var typeWords = ["Developers", "Designers", "Builders", "Creators", "Innovators"];
var typeEl    = document.getElementById("typeText");
var wordIndex = 0;
var charIndex = 0;
var isDeleting = false;

function typeWriter() {
  if (!typeEl) return;
  var word = typeWords[wordIndex];
  if (isDeleting) {
    charIndex--;
    typeEl.innerText = word.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typeWords.length;
      setTimeout(typeWriter, 400);
      return;
    }
    setTimeout(typeWriter, 60);
  } else {
    charIndex++;
    typeEl.innerText = word.substring(0, charIndex);
    if (charIndex === word.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1600);
      return;
    }
    setTimeout(typeWriter, 100);
  }
}

setTimeout(typeWriter, 800);
