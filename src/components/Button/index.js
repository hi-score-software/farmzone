import React, { PureComponent } from 'react';


/**
 * @param {String} title: the value of the button,
 * @param {String} className: styling for the button background color and text color
 * @param {Function} onClick: a callback function
 *  @param {Boolean} isLoading: a boolean value to show a spinner in the button
 */

class Button extends PureComponent {

  render(){
    const { title, className, onclick, isLoading} = this.props;
    return (
      <button onClick={onclick} className={className}>
        {isLoading ? "loading..." : title }
      </button>
    )
  }
}

export default Button;