// login.js
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Comprobación de credenciales simples (esto debe ser más seguro en un backend)
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'admin-dashboard.html'; // Redirige a la página de administración
    } else {
        alert('Credenciales incorrectas');
    }
});
