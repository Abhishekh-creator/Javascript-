// Get the fields
let passwords = document.querySelectorAll('[type="password"]');
let toggle = document.querySelector('#show-passwords');

// Listen for click events on the toggle
toggle.addEventListener('click', function () {

  // Loop through each password field
  for (let password of passwords) {

    // If the toggle is checked, change the type to "text"
    // Otherwise, change it back to "password"
    if (toggle.checked) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }

  }

});