import { get, search, post, put, del } from "../app.js";

const QUARTO_URL = "/quarto"

export function listar() {
    return get(QUARTO_URL);
}

export function buscar(id) {
    return search(`${QUARTO_URL}/${id}`);
}

export function cadastrar(cliente) {
    return post(QUARTO_URL, cliente);
}

export function atualizar(id, cliente) {
    return put(`${QUARTO_URL}/${id}`, cliente);
}

export function excluir(id) {
    return del(`${QUARTO_URL}/${id}`);
}