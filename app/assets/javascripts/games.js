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

  $(document).on('click', '.card', function() {
    var state = $(this).attr('data-card-state');
    $(this).find('.flipper').toggleClass('flip');

    if (state === 'inactive') {
      $(this).attr('data-card-state', 'active');
    } else if (state === 'active') {
      $(this).attr('data-card-state', 'inactive');
    }
  });
});

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


//run selectDifficulty('thedifficulty')
//now all pairs exist for game, but in identical order
//run shuffleMemoryCards(memoryCards)
//now shuffledMemoryCards is in the order which to use in game
