import React from "react";


/*        COMPONENTS               */
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import ContentCard from "./components/ContentCard";
import CategoryCard from "./components/CategoryCard";
import Table from "./components/Table";

class App extends React.Component {
  render() {
    return (
    <div>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
              </div>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <Card
                    title="Products in Database"
                    ammount="135"
                    color="primary"
                    icon="fa-clipboard-list"
                  />
                </div>

                <div className="col-md-4 mb-4">
                  <Card
                    title="Amount in products"
                    ammount="$546.456"
                    color="success"
                    icon="fa-dollar-sign"
                  />
                </div>

                <div className="col-md-4 mb-4">
                  <Card
                    title="Users quantity"
                    ammount="38"
                    color="warning"
                    icon="fa-user-check"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <ContentCard header="Last product in Database">
                    <div className="text-center">
                      <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        style={{ width: 25 + "rem" }}
                        src="/images/product_dummy.svg"
                        alt="dummy"
                      />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores, consequatur explicabo officia inventore libero
                      veritatis iure voluptate reiciendis a magnam, vitae,
                      aperiam voluptatum non corporis quae dolorem culpa
                      exercitationem ratione?
                    </p>
                    <a target="_blank" rel="nofollow" href="/">
                      View product detail
                    </a>
                  </ContentCard>
                </div>

                <div className="col-lg-6 mb-4">
                  <ContentCard header="Categories in Database">
                    <div className="row">
                      <CategoryCard
                        categories={[
                          "Category 01",
                          "Category 02",
                          "Category 03",
                          "Category 04",
                          "Category 05",
                          "Category 06",
                        ]}
                      />
                    </div>
                  </ContentCard>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <Table
                    cols = {[
                      "id",
                      "nombre",
                      "apellido"
                    ]}
                    rows = {[
                      {id:"1", nombre:"Facundo", apellido:"Erbin"}
                    ]}
                  
                  />
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );}
}

export default App;
