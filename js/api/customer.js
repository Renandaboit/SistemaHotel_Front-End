import { get, search, post, put, del } from "../app.js";

const CLIENTE_URL = "/cliente"

export function listar() {
    return get(CLIENTE_URL);
}

export function buscar(id) {
    return search(`${CLIENTE_URL}/${id}`);
}

export function cadastrar(cliente) {
    return post(CLIENTE_URL, cliente);
}

export function atualizar(id, cliente) {
    return put(`${CLIENTE_URL}/${id}`, cliente);
}

export function excluir(id) {
    return del(`${CLIENTE_URL}/${id}`);
}