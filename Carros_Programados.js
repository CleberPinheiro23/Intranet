document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('Forms_Operacional');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var CarrosInput = document.getElementById('Carros');

    var carros = CarrosInput.value;

    // Construir a URL da página inicial com os parâmetros de query string
    var url = 'index.html?Carros=' + encodeURIComponent(carros);

    // Redirecionar para a página inicial com os parâmetros de query string
    window.location.href = url;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var carrosLista = document.getElementById('Carros-lista');

  // Obter os parâmetros de query string da URL
  var urlParams = new URLSearchParams(window.location.search);
  var carros = urlParams.get('Carros');

  // Atualizar a lista de carros
  if (carrosLista) {
    var carrosArray = carros.split(',');
    var carrosHTML = '';
    for (var i = 0; i < carrosArray.length; i++) {
      var carro = carrosArray[i].trim();
      if (carro !== '') {
        carrosHTML += '<p>' + carro + '</p>';
      }
    }
    carrosLista.innerHTML = carrosHTML;
  }



});
