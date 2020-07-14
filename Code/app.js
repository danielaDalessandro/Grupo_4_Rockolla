const express = require ("express");

const app = express();
const port = 3000;

//Static files to be used
app.use(express.static('public'));

//Landing page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
});

/*
app.get("/route", (req, res) => {
    res.sendFile(__dirname + "/views/route.html");
});
*/

//Any other page
app.get("/*", (req,res) =>{
	res.sendFile(__dirname + "/views/404.html")
});

app.listen(port, () => {
    console.log("Servidor escuchando en el puerto: ", port);
});