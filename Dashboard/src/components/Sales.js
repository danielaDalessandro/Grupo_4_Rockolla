import React from "react";
import axios from "axios";


export default class Sales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      renderTable: false,
      sales: {},
      total: 0,
      cols: ["Id","User", "Total", "Date", "State", "Products"],
    };
  }

  componentDidMount() {
    axios
      .get(`${this.props.rockollaUrl}api/carts`)
      .then((res) => {
        const sales = res.data.data;
        const total = res.data.meta.total;
        let data = [];
        sales.forEach((sale) => {
          let cart = {
            id: sale.id,
            user: sale.user.email,
            total: sale.total,
            date: sale.date,
            state: sale.cart_state.state_name,
            products: [],
          };
          sale.products.forEach((product) => {
            cart.products.push({
              ammount: product.ammount,
              title: product.product.title,
            });
          });
          data.push(cart);
        });
        this.setState({ sales: data });
        this.setState({ total });
        this.setState({ renderTable: true });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Ventas</h1>
          <h2>{this.state.total}</h2>
        </div>

        <div className="row">
          <div className="col-lg-10 mb-6">
            {this.state.renderTable && (
              <table className="table table-bordered">
                <thead>
                  <tr>
                    {this.state.cols.map((column, i) => (
                      <th scope="col" key={i}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.sales.map((row, rowIndex) => {
                    return (
                      <React.Fragment key={rowIndex}>
                        <tr key={rowIndex}>
                          <td>{row.id}</td>
                          <td>{row.user}</td>
                          <td>{row.total}</td>
                          <td>{row.date}</td>
                          <td>{row.state}</td>
                          <td>
                          {row.products.map((product, index) => {
                            return <p key={index}> {`${product.ammount} X ${product.title}`} </p>;
                          })}
                          </td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
