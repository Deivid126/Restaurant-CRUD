
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const db = require('./database');
const Horarios = require('./models/Horarios');
const Estabelecimentos = require('./models/Estabelecimentos');
const SwaggerDocs = require('../swagger.json');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(routes);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(SwaggerDocs))


     db.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });

// (async () => {

//    Horarios.hasOne(Estabelecimentos);
//    Estabelecimentos.belongsTo(Horarios);

//     await Horarios.sync({ force: true }).then(() => console.log("Ok E"));
//     await Estabelecimentos.sync({force:true}).then(() => console.log("H ok"));
// })();
     




app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});