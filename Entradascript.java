document.addEventListener('DOMContentLoaded', function() {
  var avisoForm = document.getElementById('aviso-form');
  var avisosLista = document.getElementById('avisos-lista');

  avisoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var tituloInput = document.getElementById('titulo');
    var conteudoInput = document.getElementById('conteudo');

    var titulo = tituloInput.value;
    var conteudo = conteudoInput.value;

    if (titulo.trim() === '' || conteudo.trim() === '') {
      return;
    }

    var avisoItem = document.createElement('li');
    avisoItem.innerHTML = '<span>' + titulo + ':</span> ' + conteudo;

    avisosLista.appendChild(avisoItem);

    tituloInput.value = '';
    conteudoInput.value = '';
  });
});
