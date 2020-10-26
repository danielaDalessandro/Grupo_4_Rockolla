import React from "react";

/*        COMPONENTS               */
import NavItem from "./NavItem";

function Sidebar(props) {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sticky-top sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Rockolla</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <NavItem
          title="Dashboard"
          link="/admin/dashboard"
          icon="fas fa-fw fa-tachometer-alt"
        />

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Productos</div>
        <NavItem title="Ver Productos" link="/admin/dashboard/products" icon="fas fa-table" />

        <li className={"nav-item"}>
          <a href={`${props.rockollaUrl}products/create`} className="nav-link">
            <i className="fas fa-plus"></i>
            <span> "Agregar Producto"</span>
          </a>
        </li>

        <div className="sidebar-heading">Ventas</div>
        <NavItem title="Ver Ventas" link="/admin/dashboard/sales" icon="fa fa-shopping-cart" />
        <NavItem
          title="Agregar Número Envío"
          link="/shipping"
          icon="fas fa-shipping-fast"
        />

        <div className="sidebar-heading">Usuarios</div>
        <NavItem
          title="Ver Usuarios"
          link="/admin/dashboard/users"
          icon="fas fa-address-book"
        />
        <li className={"nav-item"}>
          <a href={`${props.rockollaUrl}admin/create`} className="nav-link">
            <i className="fas fa-key"></i>
            <span> "Agregar Administrador"</span>
          </a>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    </div>
  );
}

export default Sidebar;
