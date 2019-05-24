import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

export default class CustomScrollbar extends Component {
  renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: '#0289FF',
      width: '.15rem',
      marginLeft: 'auto',
      opacity: '.8',
      borderRadius: '0.5rem',
    };

    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}
      />
    );
  }

  render() {
    return (
      <Scrollbars
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        onUpdate={this.handleUpdate}
        {...this.props}
      />
    );
  }
}
