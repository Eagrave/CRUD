const loginButton = document.getElementById('login');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const  togglePasswordVisibility = ()=> {
    const passwordInput = document.getElementById('password-input');
    const toggleIcon = document.getElementById('toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.add('show'); 
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('show'); 
    }
}
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem('userData');
    const userData = storedData ? JSON.parse(storedData) : null;
    if (userData) {
        const { username, password } = userData;
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;
        if (enteredUsername === username && enteredPassword === password) {
            alert("Login successful!");
            window.location.href = './login.html'; 
        } else {
            alert("Incorrect username or password");
        }
    } else {
        alert("No registered users found");
    }
});
