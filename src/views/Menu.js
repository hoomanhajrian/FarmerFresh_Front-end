import React, { Component } from 'react'
import MenuButton from './MenuButton'
import HiddenMenu from './HiddenMenu'

class Menu extends Component {
   constructor(props, context) {
    super(props, context);
 
    this.state = {
      visible: false
    };
 
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
 
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("menu button clicked");
    e.stopPropagation();
  }
 
  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
  }
  
  render() {
  return(
    <div className="Menu" id="menu">
      <div className="Menu_container">
        <MenuButton handleMouseDown={this.handleMouseDown} />
        
          <a href="#about">
            <div className="Menu_about ClearClass">About</div>
          </a>
          <a href="#features">
            <div className="Menu_features ClearClass">Features</div>
        </a>
        
          <a href="#menu">
            <div className="Menu_logo"> <img src="img/logo.png" alt="FarmerFresh Logo" /></div>
          </a>
          <a href="#team">
            <div className="Menu_team ClearClass">Team</div>
          </a>
          <a href="#contactus">
            <div className="Menu_contact ClearClass">Contact Us</div>
          </a>
      </div>
      <HiddenMenu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
      </div>
  );
}}

export default Menu