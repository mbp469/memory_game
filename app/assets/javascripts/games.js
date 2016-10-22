$(document).on('turbolinks:load', function() {

  function createCard(id) {
    var front = document.createElement('div'),
    back = document.createElement('div'),
    flipper = document.createElement('div'),
    card = document.createElement('div');

    front.className = 'front';
    back.className = 'back';
    flipper.className = 'flipper';
    card.className = 'card';

    $(flipper).append(front, back);
    $(card).attr('id', id).append(flipper);
    $('#board-container').append(card);
  }

  $(document).on('click', '.card', function() {
    $(this).find('.flipper').toggleClass('flip');
  });

  $(document).one('click', '.difficulty', function() {
    var numCards;
    var level = $(this).val();

    if (level === 'Easy') {
      numCards = 8;
    } else if (level === 'Medium') {
      numCards = 16;
    } else if (level === 'Hard') {
      numCards = 24;
    }

    for (var i = 1; i <= numCards; i++) {
      createCard('card'+i);
    }

  });

});
