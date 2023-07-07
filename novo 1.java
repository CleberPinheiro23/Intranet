document.addEventListener('DOMContentLoaded', function() {
  var aniversariantesLista = document.getElementById('aniversariantes-lista');
  var eventosLista = document.getElementById('eventos-lista');

  // Atualizar aniversariantes
  var aniversariantes = ['João', 'Maria', 'Carlos'];
  var aniversariantesHTML = '';

  for (var i = 0; i < aniversariantes.length; i++) {
    aniversariantesHTML += '<p>' + aniversariantes[i] + '</p>';
  }

  aniversariantesLista.innerHTML = aniversariantesHTML;

  // Atualizar eventos
  var eventos = ['Reunião de equipe', 'Workshop de desenvolvimento', 'Festa de confraternização'];
  var eventosHTML = '';

  for (var j = 0; j < eventos.length; j++) {
    eventosHTML += '<p>' + eventos[j] + '</p>';
  }

  eventosLista.innerHTML = eventosHTML;
});

}
