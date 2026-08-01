// Mobile sidebar toggle
document.getElementById("menuBtn").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
});

// Scrollspy: highlight active section in both nav panels
const sections = Array.from(
  document.querySelectorAll("main h2[id], main .lede[id]"),
);
const navLinks = Array.from(document.querySelectorAll(".sidebar a, .toc a"));

function setActive(id) {
  navLinks.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + id);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
);

sections.forEach((s) => observer.observe(s));
