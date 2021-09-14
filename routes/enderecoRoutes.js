var express = require("express")
var enderecoControlador = require("../controllers/controladorEndereco")

var rotasEndereco = express.Router()

//rotasEndereco da API
rotasEndereco.post("/enderecos", enderecoControlador.inserir)
rotasEndereco.get("/enderecos", enderecoControlador.buscar)
rotasEndereco.get("/atualizarEndereco", enderecoControlador.atualizarEndereco)
rotasEndereco.get("/consultarEnderecos", enderecoControlador.consultar)
rotasEndereco.get("/enderecos/:id", enderecoControlador.buscarUm)
rotasEndereco.put("/enderecos/:id", enderecoControlador.atualizar)
rotasEndereco.delete("/enderecos/:id", enderecoControlador.remover)

//rotasEndereco de páginas
rotasEndereco.get("/cadastrarEndereco", enderecoControlador.NovoCadastroEndereco) //retorna a página de cadastro
rotasEndereco.get("/editarEndereco/:id", enderecoControlador.EditarEndereco) //retorna a pagina de edição
rotasEndereco.post("/ediReqEndereco/:id", enderecoControlador.montarReqEdicaoEndereco) //monta requisição de edição
rotasEndereco.get("/removerEndereco/:id", enderecoControlador.montarReqDeleteEndereco) //monta requisição de remoção

module.exports = rotasEndereco