/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './CharacterCard.scss';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  card: {
    maxWidth: 355
  },
  media: {
    height: 300
  }
});

const CharacterCard = props => {
  const classes = useStyles();
  const { clicked, image, name } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia onClick={clicked} className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CharacterCard.propTypes = {
  clicked: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CharacterCard;
