/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './ScoreBoard.scss';
import PropTypes from 'prop-types';

const ScoreBoard = props => {
  const { correct, incorrect } = props;
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Correct</td>
            <td>Incorrect</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{correct}</td>
            <td>{incorrect}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const handleCardClick = e => {
  const clickedCharacter = e.target.title;
  const { currentCharacter } = store.getState();
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
};

ScoreBoard.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.string.isRequired
};

export default ScoreBoard;
