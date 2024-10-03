const registerButton = document.getElementById('register');
let userIdCounter = 0;
registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    userIdCounter++;
    if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
    }
    const uniqueId = userIdCounter.toString(); 
    const userData = {
        username: username,
        password: password,
        uniqueId: uniqueId
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Successfully Created an account");
    setTimeout(e=> window.location.href = './index.html' ,1000)
});