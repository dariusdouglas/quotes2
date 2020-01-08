/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './ScoreBoard.scss';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 150,
    minHeight: 140
  }
});

const ScoreBoard = props => {
  const classes = useStyles();
  const { correct, incorrect } = props;
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Correct</TableCell>
              <TableCell align="right">Incorrect</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{correct}</TableCell>
              <TableCell align="right">{incorrect}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

ScoreBoard.propTypes = {
  correct: PropTypes.string.isRequired,
  incorrect: PropTypes.string.isRequired
};

export default ScoreBoard;
