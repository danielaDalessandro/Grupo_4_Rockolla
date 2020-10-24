import React from "react";

export default class Shipping extends React.Component {
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
              Shipping
          </h2>
      </div>
    );
  }
}