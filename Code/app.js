const express = require ("express");
const favicon = require('serve-favicon');
const path = require('path');

const app = express();
const port = 3000;

//----------ARCHIVOS_ESTÁTICOS----------//
app.use(express.static('public'));

//-------------MIDDLEWARES-------------//
app.use(favicon(path.join(__dirname, '/public/images/favicon.ico')));
app.set('view engine', 'ejs');

//---------------ROUTES---------------//
const mainRoutes = require('./routes/index');
app.use('/', mainRoutes);

const productRoutes = require('./routes/product');
app.use('/product', productRoutes);

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

//---------------PAGINA_DE_ERROR---------------//
app.get("/*", (req,res) =>{
	res.render(path.join(__dirname + '/views/404'))
});

app.listen(port, () => {
    console.log("Servidor escuchando en el puerto: ", port);
});