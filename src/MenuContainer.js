import React, { Component } from "react";
 
class MenuContainer extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      visible: false
    };
	this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
   }
    handleMouseDown(e) {
      this.toggleMenu();

      console.log("clicked");
      e.stopPropagation();
   }
  
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }  	
	
  render() {
    return (
	  <MenuButton handleMouseDown={this.handleMouseDown}/>
	  <Menu handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible} />
      <div>
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Orange juice</li>
            <li>Milk</li>
            <li>Water</li>
            <li>Apple juice</li>
            <li>Beer</li>
            <li>Lemonade</li>
            <li>Soda pop</li>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default MenuContainer;

