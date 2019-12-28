/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './QuoteContainer.scss';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import ScoreBoard from '../ScoreBoard/ScoreBoard';

const useStyles = makeStyles({
  card: {
    maxWidth: 700
  },
  media: {
    height: 300
  }
});

const QuoteContainer = props => {
  const { quote, counterInfo } = props;
  const classes = useStyles();
  return (
    <div className="header">
      <div className="quote-container">
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {quote}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className="scoreboard-container">
        <ScoreBoard correct={counterInfo.correct} incorrect={counterInfo.incorrect} />
      </div>
    </div>
  );
};

QuoteContainer.propTypes = {
  counterInfo: PropTypes.element.isRequired,
  quote: PropTypes.string.isRequired
};
export default QuoteContainer;
