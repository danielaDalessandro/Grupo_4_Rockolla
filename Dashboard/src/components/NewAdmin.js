import React from "react";

export default class NewAdmin extends React.Component {
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
              NewAdmin
          </h2>
      </div>
    );
  }
}