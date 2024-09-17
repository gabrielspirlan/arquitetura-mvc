// controllers/clientes.js
import express from "express"
import clientes from "../database/database.js";

const controller = {}; // Cria um objeto vazio para armazenar todas as funções dos controllers

controller.get = async function (req, res) {
    res.json(clientes);
};

controller.create =  function (req, res) {
    try {
        const novoUsuario = req.body // Recebe os dados do novo cliente
        clientes.push(novoUsuario) // Adiciona o novo cliente ao array clientes
        res.status(201).send(clientes)
    } catch (error) {
        res.status(500)
    }
};

controller.update = function (req, res) {
    try {
        
    } catch(error) {
        res.status(500)
    }
}

controller.delete = function (req,res) {
    try {
        const index = parseInt(req.params.index);
     // Remove o item do array 
        clientes.splice(index, 1);
        res.status(201).json({"Mensagem": "Usuário deletado corretamente"})
    } catch (error) {
        res.status(500)
    }
}

export default controller;
