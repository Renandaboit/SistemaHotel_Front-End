import { buscar } from "../app.js";

async function carregarDetalhes() {
    const parametros = new URLSearchParams(window.location.search);

    const id = parametros.get("id");

    const cliente = await buscar(id);

    const div = document.querySelector("[data-cliente]");

    div.classList.add(
        "grid",
        "grid-col-3",
        "grid-row-2",
        "gap-4",
        "align-start",
        "text-left",
        "bg-[#cacaca]",
        "px-4",
        "py-4"
    );

    div.innerHTML = `
        <h1 class="text-lg col-1">${cliente.nome}</h1>
        <p class="col-2">${cliente.cpf}</p>
        <p class="col-3">${cliente.email}</p>
        <p>${cliente.endereco}</p>
        <p>${cliente.telefone}</p>
        <p>${formatarData(cliente.dataNascimento)}</p>
    `;
}

carregarDetalhes();

function formatarData(data) {
    return new Date(data).toLocaleDateString("pt-BR");
}