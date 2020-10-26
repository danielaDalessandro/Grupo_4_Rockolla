import React from "react";
import axios from "axios";

/*        COMPONENTS               */
import Table from "./Table";

export default class CategoryTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      tableToRender: this.props.table,
      renderTable: false,
      data: {},
      rockollaUrl: this.props.rockollaUrl,
    };
  }

  componentDidMount() {
    if (this.state.tableToRender) {
      axios
        .get(`${this.props.rockollaUrl}api/${this.state.tableToRender}`)
        .then((res) => {
          const data = res.data;
          this.setState({ data });
          this.setState({ renderTable: true });
        })
        .catch((e) => console.log(e));
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-10 mb-6">
            <h2>{`${this.state.tableToRender}s:`}</h2>
            <h3>{`Total: ${this.state.renderTable && this.state.data.meta.total}`}</h3>
            {this.state.renderTable && <Table data={this.state.data} />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
