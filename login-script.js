document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Basic authentication example, replace with more secure method in production
        if (username === 'becca' && password === 'pass') {
            window.location.href = 'adminpanel/admin-panel.html';
        } else {
            alert('Invalid username or password');
        }
    });
});
