var sequelize = require("sequelize")
var banco = require("../configs/bancoConfig")

var endereco = banco.define("endereco", {

    idEndereco: {
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: sequelize.STRING(50),
        allowNull: true
    },
    cep: {
        type: sequelize.STRING(9),
        allowNull: false
    },
    ddd: {
        type: sequelize.INTEGER(3),
        allowNull: true
    },
    telefone: {
        type: sequelize.STRING(10),
        allowNull: true
    },
    logradouro: {
        type: sequelize.STRING(50),
        allowNull: false
    },
    numero: {
        type: sequelize.STRING(30),
        allowNull: false
    },
    complemento: {
        type: sequelize.STRING(50),
        allowNull: true
    },
    bairro: {
        type: sequelize.STRING(50),
        allowNull: false
    },
    localidade: {
        type: sequelize.STRING(50),
        allowNull: false
    },
    uf: {
        type: sequelize.STRING(2),
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false
})

endereco.sync()

module.exports = endereco