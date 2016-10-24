$(document).on('turbolinks:load', function() {
  var counter = 0
  var height = $(window).height();
  var gameHeight = height + 'px';
  var level;

  $('.board-wrap').css('height', gameHeight);

  $(document).on('click', '.difficulty', function() {
    level = $(this).val();
    var memoryCards = selectDifficulty(level); // num of cards
    var shuffledMemoryCards = shuffleMemoryCards(memoryCards);

    function buildGame() {
      shuffledMemoryCards.forEach(function(cardId) {
        createCard(cardId);
      });

      $('html, body').stop().animate({
        scrollTop: $(".board-wrap").offset().top
      }, 1000);

      $('.card').on('click', handleCardClick);
    }

    if ($('.card').length > 0) {
      $('#board-container').empty();
      buildGame();
    } else {
      buildGame();
    }
    console.log($('.cards').length);
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
    counter++
    var state = $(this).attr('data-card-state');
    $(this).find('.flipper').toggleClass('flip');

    if (state === 'inactive') {
      $(this).attr('data-card-state', 'active');
    } else if (state === 'active') {
      $(this).attr('data-card-state', 'inactive');
    }

    var activeCards = $('[data-card-state=active]');

    setTimeout(checkMatch, 500, activeCards);
    console.log(counter); // counter that works - div by 2, send to score table via scores#win action
  };

  function checkMatch(activeCards) {
    if (activeCards.length === 2) {
      if(activeCards[0].dataset.cardId === activeCards[1].dataset.cardId) {
        activeCards.off();
        activeCards[0].dataset.cardState = 'matched';
        activeCards[1].dataset.cardState = 'matched';
      } else {
        activeCards[0].dataset.cardState = 'inactive';
        $(activeCards[0]).find('.flipper').toggleClass('flip');
        activeCards[1].dataset.cardState = 'inactive';
        $(activeCards[1]).find('.flipper').toggleClass('flip');
      }
    }
    if ($('#board-container').find('.card').length === $('[data-card-state=matched]').length) {
      $.ajax({
        type: "POST",
        url: '/game',
        data: {
          user_id: $('#board-container').attr('data-user-id'),
          completeness: scoreRound,
          turns_taken: counter/2,
        },
      });
      console.log('you win! ' + counter/2 + ' tries.');
      allGames.push(scoreRound());
      storage.set();
      console.log(localStorage);
      var modal = document.getElementById('win-modal');
      var attempts = document.getElementById('attempts');
      $(attempts).text('You won in ' + counter/2 + ' attempts!');
      counter = 0;
      modal.style.display = 'block';
    }
  }

  function scoreRound() {
    switch (level) {
      case 'Easy':
      if (counter/2 <= 4) {
        return 10;
      } else {
        return 5;
      }
      break;
      case 'Medium':
      if (counter/2 <= 8) {
        return 20;
      } else {
        return 10;
      }
      break;
      case 'Hard':
      if (counter/2 <= 12) {
        return 30;
      } else {
        return 15;
      }
      break;
    }
  }

  $(document).on('click', '.play-again', function() {
    var modal = document.getElementById('win-modal');
    modal.style.display = 'none';
    $('#board-container').empty();
    $('html, body').animate({scrollTop:0}, 1000);
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
/*******************LOCAL STORAGE********************************/

  /* allGames is an array of game scores for a session */
  let allGames = [];
const storage = {
  set() {
    localStorage.setItem("games", JSON.stringify(allGames));
  },
  get() {
    var games = localStorage.games === undefined ?
      false :
      JSON.parse(localStorage.games);
    return games;
  },
};


});
