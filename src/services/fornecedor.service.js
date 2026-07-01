import fornecedorRepository from "../repositories/fornecedor.repository.js";

async function findAllFornecedorService() {
    const fornecedores = await fornecedorRepository.findAllFornecedorRepository();
    return fornecedores;
}

async function findFornecedorByIdService(id){
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id)
    if (!fornecedor) {
        throw new Error("Fornecedor não encontrado!");
    }
    return fornecedor;
}

async function updateFornecedorService(id, fornecedorAtualizado){
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id)
    if (!fornecedor) {
        throw new Error("Fornecedor não encontrado!");
    }
    const fornecedorRetorno = await fornecedorRepository.updateFornecedorRepository(id, fornecedorAtualizado)
    if (!fornecedorRetorno) {
        throw new Error("Erro ao atualizar o fornecedor!");
    } 
    return fornecedorRetorno;
}

async function createFornecedorService(novoFornecedor) {
    const fornecedor = await fornecedorRepository.createFornecedorRepository(novoFornecedor);
    if (!fornecedor) {
        throw new Error('Erro na criação do fornecedor!');
    }
    return fornecedor;
}

async function deleteFornecedorService(id){
    const fornecedor = await fornecedorRepository.findFornecedorByIdRepository(id)
    if (!fornecedor) {
        throw new Error("Fornecedor não encontrado!");
    }
    const mensagemRetorno = await fornecedorRepository.deleteFornecedorRepository(id)
    if (!mensagemRetorno) {
        throw new Error("Erro ao deletar o fornecedor!");
    } 
    return mensagemRetorno;
}


export default {
    findAllFornecedorService,
    findFornecedorByIdService,
    createFornecedorService,
    updateFornecedorService,
    deleteFornecedorService
};