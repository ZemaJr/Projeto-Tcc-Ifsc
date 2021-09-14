var endereco = require("../models/endereco")
var axios = require("axios")
var qs = require("querystring")

var controladorEndereco = {}

//Create - POST
controladorEndereco.inserir = function(req, res) {
    endereco.create({
        nome: req.body.nomePessoa,
        email: req.body.emailPessoa,
        cep: req.body.cepPessoa,
        ddd: req.body.dddPessoa,
        telefone: req.body.telefonePessoa,
        logradouro: req.body.logradouroPessoa,
        numero: req.body.numeroPessoa,
        complemento: req.body.complementoPessoa,
        bairro: req.body.bairroPessoa,
        localidade: req.body.localidadePessoa,
        uf: req.body.ufPessoa
    }).then(
        function(dados) {
            res.status(200).redirect("/consultarEnderecos")
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao inserir o endereco: " + erro + ".")
        }
    )
}

//Read - GET
controladorEndereco.buscar = function(req, res) {

    endereco.findAll({
        raw: true
    }).then(
        function(dados) {
            res.render("frmExcluirTabelaEndereco", {
                endereco: dados,
                pessoa: "José de Castro Jr"
            })
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao buscar por endereços: " + erro + ".")
        }
    )
}

controladorEndereco.atualizarEndereco = function(req, res) {

    endereco.findAll({
        raw: true
    }).then(
        function(dados) {
            res.render("frmAtualizarTabelaEndereco", {
                endereco: dados,
                pessoa: "José de Castro Jr"
            })
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao buscar por endereços: " + erro + ".")
        }
    )
}

controladorEndereco.consultar = function(req, res) {

    endereco.findAll({
        raw: true
    }).then(
        function(dados) {
            res.render("frmConsultarEndereco", {
                endereco: dados,
                pessoa: "José de Castro Jr"
            })
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao buscar por endereços: " + erro + ".")
        }
    )
}

//Read - GET 2
controladorEndereco.buscarUm = function(req, res) {
    endereco.findAll({
        raw: true,
        where: {
            idEndereco: req.params.id
        }
    }).then(
        function(dados) {
            res.status(200).send(dados)
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao buscar por endereco: " + erro + ".")
        }
    )
}

//Update - PUT
controladorEndereco.atualizar = function(req, res) {
    endereco.update({
        nome: req.body.nome,
        email: req.body.email,
        cep: req.body.cep,
        ddd: req.body.ddd,
        telefone: req.body.telefone,
        logradouro: req.body.logradouro,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        localidade: req.body.localidade,
        uf: req.body.uf
    }, {
        where: {
            idEndereco: req.params.id
        }
    }).then(
        function(dados) {
            res.sendStatus(200)
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao atualizar um endereco: " + erro + ".")
        }
    )
}

//Delete - DELETE
controladorEndereco.remover = function(req, res) {
    endereco.destroy({
        where: {
            idEndereco: req.params.id
        }
    }).then(
        function(dados) {
            res.sendStatus(200)
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao remover um endereco: " + erro + ".")
        }
    )
}

controladorEndereco.consultarEndereco = function(req, res) {
    res.render("frmConsultarEndereco")
}

//solicitarNovoFormulario
controladorEndereco.NovoCadastroEndereco = function(req, res) {
    res.render("frmCadastrarNovoEndereco")
}

//solicitarEditarFormulario
controladorEndereco.EditarEndereco = function(req, res) {
    endereco.findAll({
        raw: true,
        where: {
            idEndereco: req.params.id
        }
    }).then(
        function(dados) {
            res.render("frmEditarEndereco", {
                idEndereco: dados[0].idEndereco,
                nome: dados[0].nome,
                email: dados[0].email,
                cep: dados[0].cep,
                ddd: dados[0].ddd,
                telefone: dados[0].telefone,
                logradouro: dados[0].logradouro,
                numero: dados[0].numero,
                complemento: dados[0].complemento,
                bairro: dados[0].bairro,
                localidade: dados[0].localidade,
                uf: dados[0].uf
            })
        }
    ).catch(
        function(erro) {
            res.status(500).send("Erro ao buscar por endereco: " + erro + ".")
        }
    )
}

//montarRequisiçãoEditar
controladorEndereco.montarReqEdicaoEndereco = function(req, res) {
    axios.put("/enderecos/" + req.params.id,
            qs.stringify({
                nome: req.body.nomePessoa,
                email: req.body.emailPessoa,
                cep: req.body.cepPessoa,
                ddd: req.body.dddPessoa,
                telefone: req.body.telefonePessoa,
                logradouro: req.body.logradouroPessoa,
                numero: req.body.numeroPessoa,
                complemento: req.body.complementoPessoa,
                bairro: req.body.bairroPessoa,
                localidade: req.body.localidadePessoa,
                uf: req.body.ufPessoa
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                proxy: {
                    /* host: "3.131.97.189",
                    port: 3000 */
                    host: "localhost",
                    port: 8085
                }
            }
        ).then(
            function() {
                res.status(200).redirect("/atualizarEndereco")
            })
        .catch(
            function(err) {
                res.status(500).send("Erro ao editar o endereco: " + err + ".");
            })
}

//montarRequisiçãoRemover
controladorEndereco.montarReqDeleteEndereco = function(req, res) {
    axios.delete('/enderecos/' + req.params.id, {
            proxy: {
                /* host: "3.131.97.189",
                port: 3000 */
                host: "localhost",
                port: 8085
            }
        }).then(function() {
            res.status(200).redirect("/enderecos")
        })
        .catch(function(err) {
            res.status(500).send("Erro ao apagar um endereco: " + err);
        })
}

module.exports = controladorEndereco