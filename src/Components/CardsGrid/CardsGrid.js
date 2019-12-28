/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CardGrid.scss';

const CardsGrid = props => {
  const rows = [];
  let row = [];
  let numItemsInRow = 0;
  const { characters } = props;

  for (let i = 0; i < characters.length; i += 1) {
    numItemsInRow += 1;
    row.push(
      <Grid item xs={12} sm={6}>
        <CharacterCard
          key={i}
          name={characters[i].character}
          quote={characters[i].quote}
          image={characters[i].image}
          clicked={props.clicked}
        />
      </Grid>
    );
    if (numItemsInRow % 2 === 0) {
      rows.push(
        <Grid container item xs={12} spacing={3}>
          {row}
        </Grid>
      );
      row = [];
      numItemsInRow = 0;
    }
  }

  return <div className="card-grid flex">{rows}</div>;
};

CardsGrid.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  clicked: PropTypes.func.isRequired
};

export default CardsGrid;
