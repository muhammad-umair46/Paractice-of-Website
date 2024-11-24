alert("Welcome")
const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#signupName').value;
  const email = document.querySelector('#signupEmail').value;
  const password = document.querySelector('#signupPassword').value;

  if (name && email && password) {
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! Redirecting to login...');
    window.location.href = 'login.html'; // Redirect to the login page
  } else {
    alert('Please fill all fields.');
  }
});
const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#loginEmail').value;
  const password = document.querySelector('#loginPassword').value;

  const storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && email === storedUser.email && password === storedUser.password) {
    alert(`Welcome back, ${storedUser.name}!`);
    // Redirect to a dashboard or home page
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid email or password.');
  }
});
// Check if the user is logged in
function checkAuthentication() {
    const isAuthenticated = localStorage.getItem('user'); // Check for user data in localStorage
  
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      window.location.href = 'login.html'; // Redirect to the login page
    }
  }
  
  // Call this function on your main website's pages (e.g., index.html, dashboard.html)
  checkAuthentication();
  