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
                exact path="/"
                render={(props) => <Dashboard {...props} rockollaUrl={this.state.rockolla} />}
              />
              <Route
                exact path="/products"
                render={(props) => <Products {...props} rockollaUrl={this.state.rockolla} />}
              />
              <Route
                exact path="/users"
                render={(props) => <Users {...props} rockollaUrl={this.state.rockolla} />}
              />
              <Route exact path="/sales" component={Sales} />
              <Route exact path="/shipping" component={Shipping} />
              <Route exact path="/admin" component={NewAdmin} />
            </div>

            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
