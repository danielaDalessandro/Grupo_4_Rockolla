import React from "react";

function CategoryCard(props) {
  return (
    <React.Fragment>
      {props.categories.map((category, i) => (
        <div className="col-lg-6 mb-4" key={ i }>
          <div className="card bg-info text-white shadow">
            <div className="card-body">{category}</div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default CategoryCard;
