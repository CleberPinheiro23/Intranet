$(document).ready(function() {
  var form = $('#atualizar-form');

  form.on('submit', function(event) {
    event.preventDefault();

    var aniversariantesInput = $('#aniversariantes');
    var eventosInput = $('#eventos');

    var aniversariantes = aniversariantesInput.val();
    var eventos = eventosInput.val();

    // Chamar a função do Google Apps Script para atualizar a página inicial
    atualizarPaginaInicial(aniversariantes, eventos);

    // Limpar os campos do formulário
    aniversariantesInput.val('');
    eventosInput.val('');
  });

  // Função para chamar a API do Google Apps Script
  function atualizarPaginaInicial(aniversariantes, eventos) {
    var url = 'https://script.google.com/macros/s/SCRIPT_ID/exec';
    var data = {
      aniversariantes: aniversariantes,
      eventos: eventos
    };

    $.ajax({
      url: url,
      type: 'GET',
      data: data,
      success: function(response) {
        console.log('Página inicial atualizada com sucesso!');
      },
      error: function(error) {
        console.error('Ocorreu um erro ao atualizar a página inicial:', error);
      }
    });
  }
});
