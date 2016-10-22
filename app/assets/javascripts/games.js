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

  $(document).on('click', '.difficulty', function() {
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




var cards = [
  {
    name: "name1",
    img: "https://",
    id: 1,
  },
  {
    name: "name2",
    img: "https://",
    id: 2
  },
  {
    name: "name3",
    img: "https://",
    id: 3
  },
  {
    name: "name4",
    img: "https://",
    id: 4
  },
  {
    name: "name5",
    img: "https://",
    id: 5
  },
  {
    name: "name6",
    img: "https://",
    id: 6
  },
  {
    name: "name7",
    img: "https://",
    id: 7
  },
  {
    name: "name8",
    img: "https://",
    id: 8
  },
  {
    name: "name9",
    img: "https://",
    id: 9
  },
  {
    name: "name10",
    img: "https://",
    id: 10
  },
  {
    name: "name11",
    img: "https://",
    id: 11
  },
  {
    name: "name12",
    img: "https://",
    id: 12
  },
];

var memoryCards = [] //run selectDifficulty before caling memoryCards

function selectDifficulty(difficulty) {
  if(difficulty=='easy') {
    gameCards = getCardsByDifficulty(cards, 4)
  } else if(difficulty=='medium') {
    gameCards = getCardsByDifficulty(cards, 8)
  } else if(difficulty=='hard') {
    gameCards = cards
  }
  memoryCards = gameCards.concat(gameCards)
}

function getCardsByDifficulty(cardsArray, neededNumberCards) {
  var cardsByDifficulty = [];
  for (var i = 0; i < neededNumberCards; i++) {
    cardsByDifficulty.push(cardsArray[Math.floor(Math.random()*cardsArray.length)]);
  }
  return cardsByDifficulty;
}
