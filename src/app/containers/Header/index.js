import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  Paper,
  Typography,
  withStyles,
} from '@material-ui/core';

import styles from './styles';

const Header = (props) => {
  const { classes } = props;
  return (
    <Paper className={classes.root} square>
      <form noValidate autoComplete="off" className={classes.formWrap}>
        <Typography inline className={classes.title} component="h3" color="inherit">
          {'Header Title...'}
        </Typography>
      </form>
    </Paper>
  );
};

Header.propTypes = {
  classes: PropTypes.object,
};

Header.defaultProps = {
  classes: {},
};

export default withStyles(styles)(Header);
