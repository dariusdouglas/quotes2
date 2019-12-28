import ACTIONS from './action';

const initialState = {
  characters: [],
  currentCharacter: '',
  currentQuote: '',
  error: '',
  correctCount: 0,
  incorrectCount: 0
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.GET_CHARACTERS: {
      console.log('here in reducer');
      const characters = action.payload;
      console.log('TCL: characterReducer -> characters', characters);

      return {
        ...state,
        characters
      };
    }
    default:
      return state;
  }
};

export default characterReducer;
