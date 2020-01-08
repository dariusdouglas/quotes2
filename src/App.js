/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreaters from './redux/actions';
import './App.scss';
import CardsGrid from './Components/CardsGrid/CardsGrid';
import characterHelper from './Helpers/character-helpers';
import api from './Helpers/api-helper';
import QuoteContainer from './Components/QuoteContainer/QuoteContainer';
import store from './redux/store';
import TitleBar from './Components/TitleBar/TitleBar';

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=4';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.main();
  }

  async getCharacters() {
    const { dispatch } = this.props;
    const getUsers = bindActionCreators(ActionCreaters.getUsers, dispatch);
    const response = await api.get(url);

    getUsers(response);
  }

  getQuotePrompt() {
    const { dispatch } = this.props;
    const { characters } = store.getState();
    const getCurrentCharacter = bindActionCreators(ActionCreaters.setCurrentCharacter, dispatch);

    if (characters) {
      const index = Math.floor(Math.random() * characters.length);
      const currentMainCharacter = characters[index];

      getCurrentCharacter(currentMainCharacter);
    }
  }

  handleCardClick(e) {
    const { dispatch } = this.props;
    const incrementCorrectCount = bindActionCreators(
      ActionCreaters.incrementCorrectCount,
      dispatch
    );
    const incrementIncorrectCount = bindActionCreators(
      ActionCreaters.incrementIncorrectCount,
      dispatch
    );
    const clickedCharacter = e.target.title;
    const { currentCharacter } = store.getState();
    if (clickedCharacter === currentCharacter) {
      incrementCorrectCount(store.getState().correctCount);

      // move into separate function later
      const disabledElements = document.getElementsByClassName('Mui-disabled');
      [...disabledElements].forEach(el => {
        el.classList.remove('Mui-disabled');
      });

      this.main();
    } else {
      incrementIncorrectCount(store.getState().incorrectCount);
      e.target.parentElement.disabled = true;
      e.target.parentElement.classList.add('Mui-disabled');
    }
  }

  async main() {
    await this.getCharacters();
    let characters = store.getState().characters;

    let hasDupes = characterHelper.checkForDupes(characters);

    if (hasDupes) {
      while (hasDupes) {
        await this.getCharacters();
        hasDupes = characterHelper.checkForDupes(store.getState().characters);
      }
    }

    this.getQuotePrompt();
  }

  render() {
    const { correctCount, incorrectCount, currentQuote, characters } = store.getState();
    const counterInfo = { correct: correctCount, incorrect: incorrectCount };
    const quoteContainer = <QuoteContainer quote={currentQuote} counterInfo={counterInfo} />;
    const cardsGrid = <CardsGrid characters={characters} clicked={e => this.handleCardClick(e)} />;
    return (
      <div className="App">
        <TitleBar />
        {quoteContainer}
        {cardsGrid}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.characters,
  currentCharacter: state.currentCharacter,
  currentQuote: state.currentQuote,
  correctCount: state.correctCount,
  incorrect: state.incorrectCount
});

export default connect(mapStateToProps)(App);
