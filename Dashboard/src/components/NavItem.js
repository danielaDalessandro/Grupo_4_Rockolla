import React from "react";
import { NavLink } from "react-router-dom";


export default class NavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
    };
  }

  render() {
    return (
      <li className= {"nav-item"} >
        <NavLink exact to={this.props.link} className="nav-link" >
          <i className={this.props.icon}></i>
          <span>    {this.props.title}</span>
        </NavLink>
      </li>
    );
  }
}
