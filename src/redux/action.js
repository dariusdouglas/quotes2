import CONSTANTS from './constants';
import Types from './constants';

// actions
const setCharacters = characters => ({
  type: CONSTANTS.SET_CHARACTERS,
  payload: characters
});

const incrementCorrect = correctCount => ({
  type: Types.INCREMENT_CORRECT,
  payload: correctCount
});

const decrementCorrect = incorrectCount => ({
  type: Types.INCREMENT_INCORRECT,
  payload: incorrectCount
});

const setMainCharacter = character => ({
  type: Types.SET_MAIN_CHARACTER,
  payload: character
});

export default {
  setCharacters,
  Types
};
