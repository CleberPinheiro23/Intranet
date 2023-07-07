document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    // Verificar as credenciais
    var url = 'usuarios.json'; // Arquivo JSON com os usuários e senhas

    fetch(url)
      .then(response => response.json())
      .then(data => {
        var usuarios = data.usuarios;

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
      })
      .catch(error => {
        console.log('Ocorreu um erro:', error);
      });
  });
});
