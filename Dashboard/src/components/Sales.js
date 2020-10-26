import React from "react";
import axios from "axios";

/*        COMPONENTS               */
import Table from "./Table";

export default class Sales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      renderTable:false,
      sales: { },
    };
  }

  componentDidMount() {
    axios
      .get(`http://127.0.0.1:3001/api/product`)
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        let capital = 0;
        products.data.forEach((product) => {
          capital += product.price * product.stock;
        });
        this.setState({ capital });
        this.setState({renderTable:true});
      })
      .catch((e) => console.log(e));

  }
  
    render() {
      return (
        <React.Fragment>
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Ventas</h1>
          </div>
  
          <div className="row">
            <div className="col-lg-10 mb-6">
            {this.state.renderTable && (
              <Table
                data={this.state.products}
              />
            )}
            </div>
          </div>
        </React.Fragment>
      );
    }
}