import * as ActionTypes from './actionTypes';

export const getUsers = characters => {
  return {
    type: ActionTypes.GET_USERS,
    payload: {
      characters: characters
    }
  };
};

export const setCurrentCharacter = character => {
  return {
    type: ActionTypes.SET_CURRENT_CHARACTER,
    payload: {
      currentCharacter: character.character,
      currentQuote: character.quote
    }
  };
};

export const incrementCorrectCount = correctCount => {
  return {
    type: ActionTypes.INCREMENT_CORRECT_COUNT,
    payload: {
      correctCount: correctCount + 1
    }
  };
};

export const incrementIncorrectCount = incorrectCount => {
  return {
    type: ActionTypes.INCREMENT_INCORRECT_COUNT,
    payload: {
      incorrectCount: incorrectCount + 1
    }
  };
};
