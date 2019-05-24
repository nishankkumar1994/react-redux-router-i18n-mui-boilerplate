import React from 'react';
import { PropTypes } from 'prop-types';

const Loader = (props) => {
  const { className } = props;

  return (
    <div className={`lds-ring ${className}`}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

Loader.defaultProps = {
  className: '',
};

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
