$(document).on('turbolinks:load', function() {
  var height = $(window).height();
  var gameHeight = height + 'px';

  $('.board-wrap').css('height', gameHeight);

  $(document).one('click', '.difficulty', function() {
    var level = $(this).val();

    var memoryCards = selectDifficulty(level);
    var shuffledMemoryCards = shuffleMemoryCards(memoryCards);

    shuffledMemoryCards.forEach(function(cardId) {
      createCard(cardId);
    });

    $('html, body').stop().animate({
      scrollTop: $(".board-wrap").offset().top
    }, 1000);

    $('.card').on('click', handleCardClick);
  });

  function createCard(cardId) {
    var front = document.createElement('div'),
    back = document.createElement('div'),
    flipper = document.createElement('div'),
    card = document.createElement('div');

    front.className = 'front';
    back.className = 'back';
    flipper.className = 'flipper';
    card.className = 'card';

    $(flipper).append(front, back);
    $(card).attr({'data-card-id': cardId, 'data-card-state': 'inactive'}).append(flipper);
    $('#board-container').append(card);
  }

  function handleCardClick() {
    var state = $(this).attr('data-card-state');
    $(this).find('.flipper').toggleClass('flip');

    if (state === 'inactive') {
      $(this).attr('data-card-state', 'active');
    } else if (state === 'active') {
      $(this).attr('data-card-state', 'inactive');
    }

    var activeCards = $('[data-card-state=active]');
    setTimeout(checkMatch, 500, activeCards);
  };

  function checkMatch(activeCards) {
    if (activeCards.length === 2) {
      if(activeCards[0].dataset.cardId === activeCards[1].dataset.cardId) {
        activeCards.off();
        activeCards[0].dataset.cardState = 'matched';
        activeCards[1].dataset.cardState = 'matched';
        console.log('match');
      } else {
        activeCards[0].dataset.cardState = 'inactive';
        $(activeCards[0]).find('.flipper').toggleClass('flip');
        activeCards[1].dataset.cardState = 'inactive';
        $(activeCards[1]).find('.flipper').toggleClass('flip');

      }
    }
  }

  function selectDifficulty(difficulty) {
    if(difficulty=='Easy') {
      gameCards = getCardsByDifficulty(4);
    } else if(difficulty=='Medium') {
      gameCards = getCardsByDifficulty(8);
    } else if(difficulty=='Hard') {
      gameCards = getCardsByDifficulty(12);
    }
    return gameCards.concat(gameCards);
  }

  function getCardsByDifficulty(neededNumberPairs) {
    var cardsByDifficulty = [];

    for (var i = 1; i <= neededNumberPairs; i++) {
      cardsByDifficulty.push(i);
    }
    return cardsByDifficulty;
  }

  function shuffleMemoryCards(cardsArray) {
    return shuffle(cardsArray);
  }

  // Fisher-Yates Algorithm
  function shuffle(array) {
    var counter = array.length, temp, index;

    while (counter > 0) {
      index = Math.floor(Math.random() * counter);

      counter--;

      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
});
<<<<<<< HEAD
=======

//run selectDifficulty('thedifficulty')
//now all pairs exist for game, but in identical order
//run shuffleMemoryCards(memoryCards)
//now shuffledMemoryCards is in the order which to use in game
>>>>>>> 68c08c5b63566343b1fe2a33a2c60193b3b45b43
