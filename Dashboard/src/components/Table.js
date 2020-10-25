import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.data,
      cols: Object.keys(this.props.data.data[0]),
      rows: [...this.props.data.data],
    };
  }

  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            {this.state.cols.map((column, i) => (
              <th scope="col" key={i}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.rows.map( (row, rowIndex) => {
            return (
              <React.Fragment key={rowIndex}>
                <tr>
                  {this.state.cols.map( (key, elementIndex) => {
                    return ( <td key={elementIndex}> {row[key]} </td>) 
                  })}
                </tr>
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
