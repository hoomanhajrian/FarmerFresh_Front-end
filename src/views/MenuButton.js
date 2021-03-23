import React, { Component } from "react";
 
class MenuButton extends Component {
  render() {
    return (
        <button id="burguerButton"
              onMouseDown={this.props.handleMouseDown}><i className="fas fa-bars"></i></button>
    );
  }
}
 
export default MenuButton;