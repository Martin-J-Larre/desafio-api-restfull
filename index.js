const express = require('express');
const cors = require('cors');
const serverRoutes = require('./routes');
const path = require('path');

const app = express();
const PORT = 8080;


app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/data-form',express.static(path.join(__dirname, 'views')));

app.get("/",(req, res)=>{
    console.log("En la raiz del servidor");
    res.send(true);
});

serverRoutes(app);

app.listen(PORT, () => {
    console.log(`Estamos conectados a la URL http://localhost:${PORT}`)
})
app.on("Error",err => console.log(`Falló la conexión al servidor`,err));