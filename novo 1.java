document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    // Dados dos usuários
    var usuarios = {
      usuario1: 'senha1',
      usuario2: 'senha2',
      usuario3: 'senha3'
    };

    // Verificar as credenciais
    if (usuarios.hasOwnProperty(username) && usuarios[username] === password) {
      // Credenciais válidas, redirecionar para a página de formulários
      window.location.href = 'form.html';
    } else {
      // Credenciais inválidas, exibir uma mensagem de erro
      alert('Credenciais inválidas. Tente novamente.');
    }
  });
});

