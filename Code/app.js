const express = require ("express");
const app = express();
const path = require('path');

require('dotenv').config();
const port = process.env.PORT;


//-------------MIDDLEWARES-------------//
//Archivos Estáticos
app.use(express.static('public'));
//Favicon
const favicon = require('serve-favicon');
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
//View Engine ejs
app.set('view engine', 'ejs');
//urlencoded para capturar información de formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//method-override para poder usar put y delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
// Session:
const session = require("express-session")
app.use(session({
    secret: "very secret password",
    resave: false,
    saveUninitialized: true,
}))
// Cookies: 
const cookies = require("cookie-parser")
app.use(cookies())
// Recordar usuario
const recordar = require("./middlewares/recordame")
app.use(recordar)
// Autenticación de usuarios
const auth = require('./middlewares/authUser');
app.use(auth);
//Page not Found 404
/* app.use((req, res, next) => {
    res.status(404).render('404');
}) */


//---------------ROUTES---------------//
const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

const productRoutes = require('./routes/product');
app.use('/products', productRoutes);

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

app.get('*', (req, res) => {
    res.render('404');
})

//---------------LISTEN---------------//
app.listen(port, () => {
    console.log("Servidor escuchando en el puerto: ", port);
});