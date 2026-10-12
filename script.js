/* =========================================================
   EDIT YOUR CONTENT HERE. The page builds itself from these lists.
   ========================================================= */

/* ---- PROJECTS: copy one block to add a project ---- */
const projects = [
  {
    title: "FamiljeFärd",
    category: "School project",
    description: "FamiljeFärd is a concept for a travel planning service designed to help families discover Stockholm together…",
    image: "main/familjefärd.png",
    link: ""
  },
  {
    title: "Kvarteret Thai",
    category: "Personal",
    description: "The visual identity was created for Kvarteret Thai, a restaurant with the goal of strengthening…",
    image: "kvarteretthai.png",
    link: ""
  },
  {
    title: "Joy",
    category: "Client",
    description: "JOY is a slow travel brand that inspires people to explore nature, slow down, and create meaningful memories across Sweden and the Nordic countries.",
    image: "joy2.png",
    link: ""
  },
  {
    title: "Studio Pixel",
    category: "Internship",
    description: "During my internship at Studio Pixel, I had the opportunity to apply my knowledge in a professional environment…",
    image: "studiopixel.png",
    link: ""
  },
  {
    title: "Nytt IQ - Huntry",
    category: "Internship",
    description: "",
    image: "Huntry-white.png",
    link: ""
  },
  {
    title: "Nynäs Bowling",
    category: "School project",
    description: "",
    image: "nynasbowling.png",
    link: ""
  },
  {
    title: "Ekonomiska Museet",
    category: "School project",
    description: "The Ekonomiska museet is dedicated to exploring topics related to economics, finance and society...",
    image: "ekonomiska.png",
    link: ""
  },
  {
    title: "RCO",
    category: "Personal",
    description: "An independent UI/UX redesign created as a personal case study. This project was not commissioned, endorsed or affiliated with RCO Security. Check out the prototype: https://www.figma.com/proto/2iFyswa2LE0g35CkyYpm4G/Untitled?node-id=373-255&t=kObbRe8gNDbIX2xZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=103%3A129",
    image: "rco.png",
    link: ""
  },
  {
    title: "Valorant - KillJoy",
    category: "Personal",
    description: "An independent UI/UX redesign created as a personal case study. This project was not commissioned, endorsed or affiliated with Riot Games / Valorant",
    image: "ValorantSpray.png",
    link: ""
  },
  {
    title: "FN Day",
    category: "School project",
    description: "",
    image: "fnday.png",
    link: ""
  },
  {
    title: "Dan Carino",
    category: "School project",
    description: "",
    image: "dancarino.png",
    link: ""
  },
  {
    title: "Canva Trend",
    category: "Personal",
    description: "",
    image: "CanvaTrend.png",
    link: ""
  }
];

/* ---- SKILLS ---- */
const skills = {
  "Design": ["UX/UI design", "Graphic design", "Web design", "Prototyping (Lo-fi to Hi-fi)", "Design methods"],
  "Marketing": ["Digital marketing", "SoMe", "GA4", "Client acquisition", "SEO", "Copy writing"],
  "Digital / ICT": ["E-commerce", "HTML", "CSS"],
  "Planning": ["Miro", "Notion", "Jira"],
  "Creative tools": ["Figma", "Davinci Resolve", "Canva", "CapCut", "Adobe Illustrator", "Adobe Premier Pro", "Adobe Photoshop", "Adobe InDesign"]
};

/* ---- EXPERIENCE (newest first) ---- */
const experience = [
  { role: "Digital Marketing Intern", org: "Nytt IQ", when: "August 2026 – Now",
    points: ["Managing SoMe e.g. content, accounts", "Analyzing data", "Graphic- & UX/UI design"] },
  { role: "Freelance", org: "Kongkam Studios", when: "March 2026 – August 2026",
    points: ["Graphic- & UX/UI design", "Identifying optimization opportunities"] },
  { role: "H&M Helpdesk Agent", org: "IT Bemanning", when: "November 2025 – August 2026",
    points: ["IT support with high quality", "VIP support, assisting VIP users", "Hands-on support at Tech Lounge in Sporren"] },
  { role: "Sales & Marketing", org: "Studio Pixel", when: "May 2025 – August 2025",
    points: ["Supporting client acquisition", "Business development", "Marketing", "Sales initiatives"] },
  { role: "Graphic-, UX/UI- & Web designer Internship", org: "Studio Pixel", when: "February 2025 – May 2025",
    points: ["Graphic- & UX/UI design", "Web design & development", "Prototyping (Lo-fi, Mid-fi & Hi-fi)", "Design methods", "E-commerce development (WooCommerce)"] },
  { role: "Dispatch Planner", org: "Nynas", when: "June 2024 – August 2024",
    points: ["Planning & coordinating daily transportation", "Managing logistics flows", "Ensuring efficient operations"] }
];

const education = [
  { school: "Södertörn University", field: "ICT, Media & Design", when: "September 2022 – June 2025" },
  { school: "Nynäshamn Gymnasium", field: "Art & Design", when: "August 2019 – June 2022" }
];

/* =========================================================
   Rendering (no need to edit below)
   ========================================================= */
const $ = (id) => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Skills: one tile per category (styles t0 to t4 in style.css)
Object.entries(skills).forEach(([name, items], i) => {
  const g = el("div", `tile t${i}`, `<h3>${esc(name)}</h3>`);
  const ul = el("ul", "tags");
  items.forEach((t) => ul.appendChild(el("li", t.startsWith("[") ? "todo" : "", esc(t))));
  g.appendChild(ul);
  $("skill-groups").appendChild(g);
});

// Projects
projects.forEach((p) => {
  const card = el(p.link ? "a" : "article", "card");
  if (p.link) card.href = p.link;
  const img = p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">` : `<span>[PROJECT IMAGE]</span>`;
  card.innerHTML = `
    <div class="thumb">${img}${p.link ? '<span class="view">View case study</span>' : ""}</div>
    <span class="cat">${esc(p.category)}</span>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.description)}</p>
    ${p.tools && p.tools.length ? `<p class="tools">${p.tools.map(esc).join(", ")}</p>` : ""}`;
  card.dataset.cat = p.category;
  $("project-grid").appendChild(card);
});

// Category filters (only shown when there is more than one category)
{
  const cats = [...new Set(projects.map((p) => p.category))];
  if (cats.length > 1) {
    const bar = $("filters");
    ["All", ...cats].forEach((c, i) => {
      const b = el("button", "", esc(c)); b.type = "button"; b.setAttribute("aria-pressed", i === 0);
      b.onclick = () => {
        bar.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
        document.querySelectorAll(".card").forEach((card) => (card.hidden = !(i === 0 || card.dataset.cat === c)));
      };
      bar.appendChild(b);
    });
  }
}

// Experience + education
experience.forEach((x) => {
  $("timeline").appendChild(el("details", "", `
    <summary><span class="r">${esc(x.role)}</span><span class="o">${esc(x.org)}</span><span class="w">${esc(x.when)}</span></summary>
    <ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`));
});
education.forEach((e) => $("edu").appendChild(el("li", "", `<b>${esc(e.school)}, ${esc(e.field)}</b><span>${esc(e.when)}</span>`)));

// Mobile menu
const burger = document.querySelector(".burger"), menu = $("menu");
const setMenu = (open) => { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// Hero roles, one at a time
const roles = document.querySelectorAll(".roles b");
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let i = 0;
  setInterval(() => {
    roles[i].classList.remove("on");
    i = (i + 1) % roles.length;
    roles[i].classList.add("on");
  }, 2400);
}

// Gentle reveal as sections scroll into view
if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll("h2, .big-text, .prose, .skill-groups > div, .langs, .section-note, .card, .exp details, .sub, .edu li, .contact .lead, .contact-links").forEach((n) => {
    n.classList.add("reveal");
    const sibs = n.parentElement.children;
    n.style.transitionDelay = Math.min([...sibs].indexOf(n), 4) * 90 + "ms";
    io.observe(n);
  });
}

$("year").textContent = new Date().getFullYear();
