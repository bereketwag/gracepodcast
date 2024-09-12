document.getElementById('toggle-login').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
    this.classList.add('btn-primary');
    this.classList.remove('btn-outline-primary');
    document.getElementById('toggle-signup').classList.add('btn-outline-primary');
    document.getElementById('toggle-signup').classList.remove('btn-primary');
});

document.getElementById('toggle-signup').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    this.classList.add('btn-primary');
    this.classList.remove('btn-outline-primary');
    document.getElementById('toggle-login').classList.add('btn-outline-primary');
    document.getElementById('toggle-login').classList.remove('btn-primary');
});
