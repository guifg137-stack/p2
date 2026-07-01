import fornecedorService from '../services/fornecedor.service.js';
import { response } from 'express';

async function findAllFornecedorController(request, response) {
    try {
        const fornecedores = await fornecedorService.findAllFornecedorService();
        response.status(200).send(fornecedores);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function findFornecedorByIdController(request, response) {
    const {id} = request.params;
    try {
        const fornecedor = await fornecedorService.findFornecedorByIdService(id);
        response.status(200).send({fornecedor});
    }catch (error) {
        response.status(404).send(error.message);
    }
}

async function createFornecedorController(request, response) {
    const novoFornecedor = request.body;
    try {
        const fornecedor = await fornecedorService.createFornecedorService(novoFornecedor);
        response.status(201).send(fornecedor);
    } catch (error) {
        response.status(404).send(error.message);
    }
}

async function updateFornecedorController(request, response) {
    const {id} = request.params;
    const fornecedorAtualizado = request.body;
    try {
        const fornecedor = await fornecedorService.updateFornecedorService(id, fornecedorAtualizado);
        response.status(200).send({fornecedor});
    }catch (error) {
        response.status(404).send(error.message);
    }
}

async function deleteFornecedorController(request, response) {
    const {id} = request.params;
    try {
        const retorno = await fornecedorService.deleteFornecedorService(id);
        response.status(200).send(retorno);
    }catch (error) {
        response.status(400).send(error.message);
    }
}


export default {
    findAllFornecedorController,
    findFornecedorByIdController,
    createFornecedorController,
    updateFornecedorController,
    deleteFornecedorController
}