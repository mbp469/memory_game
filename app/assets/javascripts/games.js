$(document).on('turbolinks:load', function() {

  function createCard(id) {
    var front = document.createElement('div'),
    back = document.createElement('div'),
    flipper = document.createElement('div'),
    flipContainer = document.createElement('div');

    front.className = 'front';
    back.className = 'back';
    flipper.className = 'flipper';
    flipContainer.className = 'flipContainer';

    $(flipper).append(front, back);
    $(flipContainer).attr('id', id).append(flipper);
    $('#board-container').append(flipContainer);
  }

  $(document).on('click', '.flipContainer', function() {
    $(this).toggleClass('flip');
  });

  $(document).on('click', '.difficulty', function() {
    var numCards;
    var level = $(this).val();

    if (level === 'Easy') {
      numCards = 8;
    } else if (level === 'Medium') {
      numCards = 12;
    } else if (level === 'Hard') {
      numCards = 16;
    }

    for (var i = 1; i <= numCards; i++) {
      createCard('card'+i);
    }
  });

});
