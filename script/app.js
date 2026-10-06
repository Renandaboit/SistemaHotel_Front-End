const API_URL = "http://localhost:8088/sistemahotel/v1.0/cliente"

export async function listar() {
    const resposta = await fetch(API_URL, {
        method: "GET"
    });
    
    const clientes = await resposta.json();

    return clientes;
}

export async function buscar(id) {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "GET"
    });
    
    const cliente = await resposta.json();

    return cliente;
}

export async function cadastrar(cliente) {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(cliente)
    });

    const resultado = await resposta.json();

    return resultado;
}

export async function atualizar(id, cliente) {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(cliente)
    });

    const resultado = await resposta.json();

    return resultado;
}

export async function excluir(id) {
    const resposta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if(resposta.status == 204) {
        return;
    }

    return await resultado.json;
}