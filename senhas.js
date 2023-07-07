document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    // Array de usuários permitidos
    var usuarios = [
      { username: 'usuario1', password: 'senha1' },
      { username: 'usuario2', password: 'senha2' },
      { username: 'usuario3', password: 'senha3' }
    ];

    // Verificar as credenciais
    var loginValido = usuarios.some(function(usuario) {
      return usuario.username === username && usuario.password === password;
    });

    if (loginValido) {
      // Credenciais válidas, redirecionar para a página de formulários
      window.location.href = 'form.html';
    } else {
      // Credenciais inválidas, exibir uma mensagem de erro
      alert('Credenciais inválidas. Tente novamente.');
    }
  });
});
