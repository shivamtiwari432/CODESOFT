// Smooth scrolling for internal links
// document.querySelectorAll('a[href^="#"]').forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//   });
// });

// // Alert on "Hire Me" button click
// const hireBtn = document.querySelector('.btn');
// if (hireBtn && hireBtn.textContent.includes('Hire Me')) {
//   hireBtn.addEventListener('click', () => {
//     alert("Thanks for your interest! Please contact me below.");
//   });
// }

// // Welcome message in console
// console.log("Welcome to Shivam Tiwari's Portfolio!");

/* Reset & Basics */
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle button icon
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

