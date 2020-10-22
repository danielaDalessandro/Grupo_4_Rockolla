import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: this.props.cols,
      rows: this.props.rows,
    };
  }
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            {this.state.cols.map((column) => (
              <th scope="col">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.rows.forEach((row, i) => (
            <tr>
              {this.state.cols.forEach((element, i) => {
                  return (<td>{element} </td>)
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
