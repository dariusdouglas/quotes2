/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.scss';
import CardsGrid from './Components/CardsGrid/CardsGrid';
import characterHelper from './Helpers/character-helpers';
import QuoteContainer from './Components/QuoteContainer/QuoteContainer';

const url = 'https://thesimpsonsquoteapi.glitch.me/quotes?count=4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      currentCharacter: '',
      currentQuote: '',
      error: '',
      correctCount: 0,
      incorrectCount: 0
    };
  }

  componentDidMount() {
    this.main();
  }

  async getCharacters() {
    try {
      const response = await fetch(url);
      const characters = await response.json();
      return characters;
    } catch (err) {
      return err;
    }
  }

  getQuotePrompt() {
    const { characters } = this.state;
    const index = Math.floor(Math.random() * characters.length);
    const currentMainCharacter = characters[index];

    this.setState({
      currentCharacter: currentMainCharacter.character,
      currentQuote: currentMainCharacter.quote
    });
  }

  handleCardClick(e) {
    const clickedCharacter = e.target.title;
    const { currentCharacter } = this.state;
    if (clickedCharacter === currentCharacter) {
      this.setState(state => ({
        correctCount: state.correctCount + 1
      }));

      this.main();
    } else {
      this.setState(state => ({
        incorrectCount: state.incorrectCount + 1
      }));
    }
  }

  async main() {
    let characters = await this.getCharacters();

    let hasDupes = characterHelper.checkForDupes(characters);

    if (hasDupes) {
      while (hasDupes) {
        characters = await this.getCharacters();
        hasDupes = characterHelper.checkForDupes(characters);
      }
    }

    this.setState({ characters });

    this.getQuotePrompt();
  }

  render() {
    const { correctCount, incorrectCount, currentQuote, characters } = this.state;
    const counterInfo = { correct: correctCount, incorrect: incorrectCount };
    const quoteContainer = <QuoteContainer quote={currentQuote} counterInfo={counterInfo} />;
    const cardsGrid = <CardsGrid characters={characters} clicked={e => this.handleCardClick(e)} />;
    return (
      <div className="App">
        {quoteContainer}
        {cardsGrid}
      </div>
    );
  }
}

export default App;
