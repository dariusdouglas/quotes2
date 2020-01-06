import * as ActionTypes from './actionTypes';

const initialState = {
  characters: [],
  currentCharacter: '',
  currentQuote: '',
  error: '',
  correctCount: 0,
  incorrectCount: 0
};

function CharactersReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return {
        ...state,
        characters: action.payload.characters
      };

    case ActionTypes.SET_CURRENT_CHARACTER:
      return {
        ...state,
        currentCharacter: action.payload.currentCharacter,
        currentQuote: action.payload.currentQuote
      };

    case ActionTypes.INCREMENT_CORRECT_COUNT:
      return {
        ...state,
        correctCount: action.payload.correctCount
      };

    case ActionTypes.INCREMENT_INCORRECT_COUNT:
      return {
        ...state,
        incorrectCount: action.payload.incorrectCount
      };

    default:
      return state;
  }
}

export default CharactersReducer;
