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

var memoryCards = []
var shuffledMemoryCards = []

function selectDifficulty(difficulty) {
  if(difficulty=='Easy') {
    gameCards = getCardsByDifficulty(cards, 4)
  } else if(difficulty=='Medium') {
    gameCards = getCardsByDifficulty(cards, 8)
  } else if(difficulty=='Hard') {
    gameCards = cards
  }
  memoryCards = gameCards.concat(gameCards)
}

function getCardsByDifficulty(cardsArray, neededNumberCards) {
  var cardsByDifficulty = [];
  for (var i = 0; i < neededNumberCards; i++) {
    cardsByDifficulty.push(cardsArray[Math.floor(Math.random()*cardsArray.length)]);
  } //try to make conditional for above line - not repeat cards chosen
  return cardsByDifficulty;
}

function shuffleMemoryCards(cardsArray) {
  shuffledMemoryCards = this.shuffle(cardsArray);
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
