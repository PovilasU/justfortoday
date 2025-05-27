// This is the main JavaScript file for the website.
// It contains the logic and functionality of the site.

document.addEventListener("DOMContentLoaded", () => {
  // Try to get the element with id 'greeting'
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = "Welcome to My Website!";
  }

  // Additional functionality can be added here
});
