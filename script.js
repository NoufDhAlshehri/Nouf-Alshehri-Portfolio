const roles = [
  "AI Engineer",
  "Data Analyst",
  "Machine Learning Enthusiast"
];

let i = 0;

setInterval(() => {
  document.querySelector(".typing").textContent = roles[i];
  i = (i + 1) % roles.length;
}, 2000);

ScrollReveal().reveal('.section', {
    delay: 200,
    distance: '40px',
    duration: 1000,
    origin: 'bottom'
});