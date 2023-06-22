// Get the login and register buttons
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

// Get the login and register forms
const loginForm = document.getElementById('login-container');
const registerForm = document.getElementById('register-container');

// Add click event listeners to the buttons
loginButton.addEventListener('click', function() {
    // Remove the active class from the register button
    registerButton.classList.remove('active');
    // Add the active class to the login button
    loginButton.classList.add('active');

    // Show the login form
    loginForm.classList.add('active');
    // Hide the register form
    registerForm.classList.remove('active');
});

registerButton.addEventListener('click', function() {
    // Remove the active class from the login button
    loginButton.classList.remove('active');
    // Add the active class to the register button
    registerButton.classList.add('active');

    // Show the register form
    registerForm.classList.add('active');
    // Hide the login form
    loginForm.classList.remove('active');
});


//home page script
// Import jQuery from CDN
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'; // Replace with the desired jQuery version
document.getElementsByTagName('head')[0].appendChild(script);

// Use jQuery in your code
function clicked(id){
    
}

$(document).ready(function() {
    $('#mohit').click(function() {
        console.log("started");
      // Code to execute when the button is clicked
      alert('Button clicked!');
    });
  });

  $(document).ready(function() {
    $('.container').mouseenter(function() {
      $(this).find('.hidden-text').show();
    }).mouseleave(function() {
      $(this).find('.hidden-text').hide();
    });
  });
  