import React, { Component } from "react";

class HiddenMenu extends Component {
  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (
      <div id="HiddenMenu"
        onClick={this.props.handleMouseDown}

        className={visibility}

      >
        <a className="menu_icon" onClick={this.props.handleMouseDown}><img src="./img/Icon metro-cross.png" /></a>
        <h2><a href="#about">About</a></h2>
        <h2><a href="#features">Features</a></h2>
        <h2><a href="#team">Team</a></h2>
        <h2><a href="#contactus">Contact Us</a></h2>
      </div>
    );
  }
}

export default HiddenMenu;