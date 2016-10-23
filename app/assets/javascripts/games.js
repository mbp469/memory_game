$(document).on('turbolinks:load', function() {

  $(document).one('click', '.difficulty', createCards);

  $(document).on('click', '.card', function() {
    $(this).find('.flipper').toggleClass('flip');
  });
});

function createCards() {
  var level = $(this).val();

  selectDifficulty(level);
  shuffleMemoryCards(memoryCards);

  shuffledMemoryCards.forEach(function(card) {
    var cardId = card.id;
    assignCardIDs(cardId);
  });
}

function assignCardIDs(id) {
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

var memoryCards = [];
var shuffledMemoryCards = [];

function selectDifficulty(difficulty) {
  if (difficulty=='Easy') {
    gameCards = getCardsByDifficulty(cards, 4);
  } else if (difficulty=='Medium') {
    gameCards = getCardsByDifficulty(cards, 8);
  } else if (difficulty=='Hard') {
    gameCards = cards;
  }

  memoryCards = gameCards.concat(gameCards)
}

function getCardsByDifficulty(cardsArray, neededNumberOfPairs) {
  var cardsNoDuplicates = [];

  while (cardsNoDuplicates.length < neededNumberOfPairs) {
    cardsNoDuplicates.push(cardsArray[Math.floor(Math.random()*cardsArray.length)]);
    var uniqueMemoryCards = cardsNoDuplicates.filter(eliminateDuplicates)
    cardsNoDuplicates = uniqueMemoryCards
  }
  return uniqueMemoryCards;
}

function shuffleMemoryCards(cardsArray) {
  shuffledMemoryCards = this.shuffle(cardsArray);
}

function eliminateDuplicates(element, index, self) {
  return index == self.indexOf(element);
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

var cards = [
  {
    img: "https://",
    id: 1,
  },
  {
    img: "https://",
    id: 2
  },
  {
    img: "https://",
    id: 3
  },
  {
    img: "https://",
    id: 4
  },
  {
    img: "https://",
    id: 5
  },
  {
    img: "https://",
    id: 6
  },
  {
    img: "https://",
    id: 7
  },
  {
    img: "https://",
    id: 8
  },
  {
    img: "https://",
    id: 9
  },
  {
    img: "https://",
    id: 10
  },
  {
    img: "https://",
    id: 11
  },
  {
    img: "https://",
    id: 12
  },
];

//run selectDifficulty('thedifficulty')
//now all pairs exist for game, but in identical order
//run shuffleMemoryCards(memoryCards)
//now shuffledMemoryCards is in the order which to use in game
