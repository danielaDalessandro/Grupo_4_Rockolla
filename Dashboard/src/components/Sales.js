import React from "react";

export default class Sales extends React.Component {
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
              Sales
          </h2>
      </div>
    );
  }
}