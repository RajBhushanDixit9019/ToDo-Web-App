// Signup form submission
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Retrieve form input values
  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Perform signup logic here (e.g., send data to the server)
  // You can use AJAX, fetch API, or any other method to handle the form submission

  // Assuming signup was successful, redirect the user to the dashboard page
  window.location.href = 'dashboard.html'; // Replace 'dashboard.html' with the actual URL of your dashboard page
});

// Login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Retrieve form input values
  const usernameOrEmail = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Perform login logic here (e.g., send data to the server)
  // You can use AJAX, fetch API, or any other method to handle the form submission

  // Assuming login was successful, redirect the user to the dashboard page
  window.location.href = 'dashboard.html'; // Replace 'dashboard.html' with the actual URL of your dashboard page
});
