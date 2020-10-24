import React from "react";

export default class NewProduct extends React.Component {
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
              NewProduct
          </h2>
      </div>
    );
  }
}