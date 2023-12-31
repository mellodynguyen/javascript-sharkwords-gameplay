const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;
let correctGuesses = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // Replace this with your code
  // our const word (correct word) is 'hello
  const letterDivs = document.querySelectorAll(`div.${letter}`);
    for (const div of letterDivs) {
      div.innerHTML = letter;
      correctGuesses += 1;
    }

    const wordLength = document.querySelectorAll('.letter-box').length

    if (correctGuesses === wordLength) {
      const allButton = document.querySelectorAll('#letter-buttons')
      for (const button in allButton) {
        disableLetterButton(button);
        document.querySelector('#win').style.display = 'block';
      }
      // showing the element win
      
      //end the game
      // document.querySelectorAll('#letter-buttons')
    }

    
    
  }
  // if letter (L) in word (hello) -> add letter to approp. div?

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // if numWrong is 5, disable all buttons and
  // show the hidden a element the one with (id='play-again')
  if (numWrong === 5) {
    disableAllLetterButtons();
    document.querySelector('#play-again').style.display = '';
  } 
    // .querySelector('#shark-img img')
    const sharkPhoto = document.querySelector('#shark-img img');

    sharkPhoto.setAttribute('src', `/static/images/guess${numWrong}.png`);
  };
  // otherwise increment numWrong and update the image

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // // Math.random() gives us a random number between 0 and 1
  // // we multiply it by the length of the list to get a random
  // // index in the list and then round down since it may be a decimal
  // const word = WORDS[Math.floor(Math.random() * WORDS.length)];

  const word = 'hello';
  // For now, we'll hardcode the word that the user has to guess.

  createDivsForChars(word);
  generateLetterButtons();

  const buttons = document.querySelectorAll('button');

  // add an event handler to handle clicking on a letter button
  for (const button of buttons) {
    button.addEventListener('click', (evt) => {
      const clickedBtn = evt.target; // you can also use button to access this element
      disableLetterButton(clickedBtn);

      const letter = clickedBtn.innerHTML;

      if (isLetterInWord(letter)) {
        handleCorrectGuess(letter, word);
      } else {
        handleWrongGuess();
      }
    });
  }

  document.querySelector('#play-again').addEventListener('click', resetGame);
  document.querySelector('#win').addEventListener('click', resetGame);
})();
