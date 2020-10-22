import React from "react";
import axios from "axios";

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    props,
    }
    }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({ products });
      })
  }
  render () {
    return (
      <div className={`card border-left-${this.props.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${this.props.color} text-uppercase mb-1`}
              >
                {" "}
                {this.props.title}
                {this.state.length}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {this.props.ammount}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${this.props.icon} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
