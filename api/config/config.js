const express = require("express")
const app=express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const moment = require("moment");
const Clientes = require("./models/Incluicliente")
const Industrias = require("./models/incluiIndustia")
const Vendedores = require("./models/vendedores")
const Produtos = require("./models/Produtos")


app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());


/*******HANDELBARS CONFIGURAÇÕES */
app.engine('handlebars',handlebars({
    defaultLayout:'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    },
    runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},
}))

app.set('view engine','handlebars');
app.use(express.static('public'));
app.use(express.static(__dirname+'public/appjs'));

module.exports = app