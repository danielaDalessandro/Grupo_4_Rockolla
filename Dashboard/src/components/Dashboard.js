import React from "react";
import axios from "axios";

/*        COMPONENTS               */
import Card from "./Card";
import ContentCard from "./ContentCard";
import CategoryCard from "./CategoryCard";
/* import Table from "./Table"; */

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      products: { meta: { total: 0 } },
      capital: 0,
      users: { meta: { total: 0 } },
      latest: { description: "" },
      cover: "",
      renderTable: false,
      tableData: "",
    };
  }

  componentDidMount() {
    axios
      .get(`${this.props.rockollaUrl}api/product`)
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        let capital = 0;
        products.data.forEach((product) => {
          capital += product.price * product.stock;
        });
        this.setState({ capital });
      })
      .catch((e) => console.log(e));

    axios
      .get(`${this.props.rockollaUrl}api/product/latest`)
      .then((res) => {
        const latest = res.data.data[0];
        this.setState({ latest });
        this.setState({ cover: "images/tapas/" + latest.cover });
      })
      .catch((e) => console.log(e));

    axios
      .get(`${this.props.rockollaUrl}api/user`)
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <React.Fragment>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Rockolla Dashboard</h1>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <Card
              title="Discos en Base de Datos"
              ammount={this.state.products.meta.total || ""}
              color="primary"
              icon="fa-clipboard-list"
            />
          </div>

          <div className="col-md-4 mb-4">
            <Card
              title="Dinero en Productos"
              ammount={this.state.capital || ""}
              color="success"
              icon="fa-dollar-sign"
            />
          </div>

          <div className="col-md-4 mb-4">
            <Card
              title="Cantidad de Usuarios"
              ammount={this.state.users.meta.total || ""}
              color="warning"
              icon="fa-user-check"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <ContentCard header="Ultimo producto en Base de Datos">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: 25 + "rem" }}
                  src={`http://localhost:3001/${this.state.cover}`}
                  alt="cover"
                />
              </div>
              <h2 className="text-center text-dark">
                {this.state.latest.title}
              </h2>
              <p>{this.state.latest.description}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"http://localhost:3001/products/" + this.state.latest.id}
              >
                Detalle del producto
              </a>
            </ContentCard>
          </div>

          <div className="col-lg-6 mb-4">
            <ContentCard header="Categories in Database">
              <div className="row">
                <CategoryCard
                  categories={["Artist", "Genre", "Format", "Label"]}
                />
              </div>
            </ContentCard>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
