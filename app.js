console.log
  // Add this code to the app.js file
const loginBtn = document.querySelector(".login-btn");
const contactBtn = document.querySelector(".contact-btn");

loginBtn.addEventListener("click", function() {
  document.getElementById("login").style.display = "block";
});

contactBtn.addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView();
});
