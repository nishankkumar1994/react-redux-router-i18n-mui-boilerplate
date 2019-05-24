import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CustomScrollbar from 'AppComponents/CustomScrollbar';

import {
  Typography,
  withStyles,
} from '@material-ui/core';

import Header from 'AppContainers/Header';

import styles from './styles';

const Dashboard = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <div className={classes.mainSection}>
          Hello World
        </div>
      </div>
    </React.Fragment>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object,
};

Dashboard.defaultProps = {
  classes: {},
};

const mapStateToProps = state => ({
  // store state mapping into props
});

const mapDispatchToProps = dispatch => ({
  // actions will be mapped in here
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));
