const API_URL = "http://localhost:8088/sistemahotel/v1.0"

export async function get(url) {
    const resposta = await fetch(`${API_URL}${url}`);

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    return await resposta.json();
}

export async function search(url) {
    const resposta = await fetch(`${API_URL}${url}`);

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    return await resposta.json();
}

export async function post(url, body) {
    const resposta = await fetch(`${API_URL}${url}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    return await resposta.json();
}

export async function put(url, body) {
    const resposta = await fetch(`${API_URL}${url}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    return await resposta.json();
}

export async function del(url) {
    const resposta = await fetch(`${API_URL}${url}`, {
        method: "DELETE"
    });
    
    if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
    }

    if (resposta.status === 204) {
        return;
    }

    const texto = await resposta.text();

    if (!texto) {
        return
    }

    return JSON.parse(texto);
}