const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();
const port = process.env.PORT;
if (!port) {
  return console.log("\n NO CONFIGURASTE EL PUERTO EN EL ARCHIVO .env");
}

//-------------MIDDLEWARES-------------//
//Favicon
const favicon = require("serve-favicon");
app.use(favicon(path.join(__dirname, "/public/images/favicon.ico")));
//View Engine ejs
app.set("view engine", "ejs");
// CORS
const cors = require("cors");
app.use(cors());
//urlencoded para capturar información de formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//method-override para poder usar put y delete
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// Session:
const session = require("express-session");
app.use(
  session({
    secret: "very secret password",
    resave: false,
    saveUninitialized: true,
  })
);
// Cookies:
const cookies = require("cookie-parser");
app.use(cookies());
// Recordar usuario
const recordar = require("./middlewares/recordame");
app.use(recordar);
// Autenticación de usuarios
const auth = require("./middlewares/authUser");
app.use(auth);
// Información de Carrito
const cart = require("./middlewares/cart");
app.use(cart);

//-------------DASHBOARD-------------//
const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);

//Archivos Estáticos
app.use(express.static("public"));

//---------------ROUTES---------------//
const mainRoutes = require("./routes/index");
app.use("/", mainRoutes);

const productRoutes = require("./routes/product");
app.use("/products", productRoutes);

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

//---------------API ROUTES---------------//
const userAPIRoutes = require("./routes/api/user");
app.use("/api/user", userAPIRoutes);

const productsAPIRoutes = require("./routes/api/products");
app.use("/api/product", productsAPIRoutes);

const cartsAPIRoutes = require("./routes/api/carts");
app.use("/api/carts", cartsAPIRoutes);

const secondaryTablesAPIRoutes = require("./routes/api/secondaryTables");
app.use("/api/", secondaryTablesAPIRoutes);

//---------------404 ROUTE---------------//
app.get("*", (req, res) => {
  res.status(404);
  res.render("404");
});

//---------------LISTEN---------------//
app.listen(port, () => {
  console.log("Servidor escuchando en el puerto: ", port);
});
