document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    // Dados de login e usuário
    var loginsUsuarios = {
      login1: {
        usuario: 'pdoeste.cleber',
        senha: 'pdoeste123'
      },
      login2: {
        usuario: 'usuario2',
        senha: 'senha2'
      },
      login3: {
        usuario: 'usuario3',
        senha: 'senha3'
      }
    };

    // Verificar as credenciais
    var loginValido = false;
    for (var login in loginsUsuarios) {
      if (loginsUsuarios.hasOwnProperty(login)) {
        if (loginsUsuarios[login].usuario === username && loginsUsuarios[login].senha === password) {
          loginValido = true;
          break;
        }
      }
    }

    if (loginValido) {
      // Credenciais válidas, redirecionar para a página de formulários
      window.location.href = 'form.html';
    } else {
      // Credenciais inválidas, exibir uma mensagem de erro
      alert('Credenciais inválidas. Tente novamente.');
    }
  });
});
