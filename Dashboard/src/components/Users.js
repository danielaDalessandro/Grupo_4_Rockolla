import React from "react";

export default class Users extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    props,
    }
    }
  
  render () {
    return (
      <div>
          <h2>
              Users
          </h2>
      </div>
    );
  }
}