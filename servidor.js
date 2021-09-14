var express = require("express")
var handlebars = require("express-handlebars")
var rotasEndereco = require("./routes/enderecoRoutes")

var servidor = express()
const PORTA = 8085
    /*
     * const PORTA = 3000
     */

//configuração do handlebars no projeto
servidor.engine("handlebars", handlebars({ defaultLayout: "frmMainEndereco" }))
servidor.set("view engine", "handlebars")

servidor.use(express.urlencoded({ extended: true }))
servidor.use(rotasEndereco)

servidor.listen(PORTA, function() {
    console.log("Executando servidor...")
})