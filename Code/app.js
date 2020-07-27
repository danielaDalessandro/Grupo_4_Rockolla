const express = require ("express");
const favicon = require('serve-favicon');

const app = express();
const port = 3000;

//Static files to be used
app.use(express.static('public'));

//favicon
app.use(favicon(__dirname + '/public/images/favicon.ico'));

//Landing page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

//Detalle del Producto
app.get("/detalle", (req, res) => {
    res.sendFile(__dirname + "/views/productDetail.html")
});

//Carrito de compras
app.get("/carrito", (req, res) => {
    res.sendFile(__dirname + "/views/productCart.html")
});

//Registro
app.get("/registro", (req, res) => {
    res.sendFile(__dirname + "/views/register.html")
});

//Login
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html")
});

//Culaquier otra página
app.get("/*", (req,res) =>{
	res.sendFile(__dirname + "/views/404.html")
});

app.listen(port, () => {
    console.log("Servidor escuchando en el puerto: ", port);
});
