// Check if the page is refreshed and redirect to the landing page
//function checkRefresh() {
 // if (performance.navigation.type === 1) {
   // window.location.href = 'index.html';
  //}
//}

// Execute the checkRefresh function when the page finishes loading
window.onload = function() {
  if (performance.navigation.type === 1) {
    window.location.href = 'index.html';
  }
};


// Add this code to your script.js file for login
document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const usernameOrEmail = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Create an object to send to the server
    const data = {
      usernameOrEmail: usernameOrEmail,
      password: password,
    };

    // Send an AJAX request to LoginResponse.php
    fetch('LoginResponse.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Handle the response here
        if (responseJson.success) {
          // Redirect or perform actions upon successful login
          window.location.href = 'MainApp.php';
        } else {
          // Display an error message
          alert('Login failed: ' + responseJson.message);
        }
      })
      .catch((error) => {
        // Handle network errors or server issues
        console.error('Error:', error);
      });
  });
});

// Add this code to your script.js file for sign-up
document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the input values
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Create an object to send to the server
    const data = {
      username: username,
      email: email,
      password: password,
    };

    // Send an AJAX request to SignupResponse.php
    fetch('SignupResponse.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Handle the response here
        if (responseJson.success) {
          // Redirect or perform actions upon successful registration
          window.location.href = 'login.html';
        } else {
          // Display an error message
          alert('Registration failed: ' + responseJson.message);
        }
      })
      .catch((error) => {
        // Handle network errors or server issues
        console.error('Error:', error);
      });
  });
});
