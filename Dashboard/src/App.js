import React from "react";
import { Route } from "react-router-dom";
/*        COMPONENTS               */
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Sales from "./components/Sales";
import Shipping from "./components/Shipping";
import Users from "./components/Users";
import NewAdmin from "./components/NewAdmin";
import CategoryTable from "./components/CategoryTable";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rockolla: this.props.rockollaUrl,
    };
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <Sidebar rockollaUrl={this.state.rockolla} />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
            </div>
            <div className="container-fluid">
              <Route
                exact path="/admin/dashboard"
                render={(props) => <Dashboard {...props} rockollaUrl={this.state.rockolla} />}
              />
              <Route
                exact path="/admin/dashboard/products"
                render={(props) => <Products {...props} rockollaUrl={this.state.rockolla} />}
              />
              <Route
                exact path="/admin/dashboard/users"
                render={(props) => <Users {...props} rockollaUrl={this.state.rockolla} />}
              />
               <Route
                exact path="/admin/dashboard/sales"
                render={(props) => <Sales {...props} rockollaUrl={this.state.rockolla} />}
              />
              <Route exact path="/admin/dashboard/shipping" component={Shipping} />
              <Route exact path="/admin/dashboard/admin" component={NewAdmin} />
              <Route
                exact path="/admin/dashboard/genre"
                render={(props) => <CategoryTable {...props} table="genre" rockollaUrl={this.state.rockolla} />}
              />
              <Route
                exact path="/admin/dashboard/artist"
                render={(props) => <CategoryTable {...props} table="artist" rockollaUrl={this.state.rockolla} />}
              />
              <Route
                exact path="/admin/dashboard/format"
                render={(props) => <CategoryTable {...props} table="format" rockollaUrl={this.state.rockolla} />}
              />
              <Route
                exact path="/admin/dashboard/label"
                render={(props) => <CategoryTable {...props} table="label" rockollaUrl={this.state.rockolla} />}
              />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
