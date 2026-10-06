import { buscar } from "./app.js";

async function carregarDetalhes() {
    const parametros = new URLSearchParams(window.location.search);

    const id = parametros.get("id");

    const cliente = await buscar(id);

    const div = document.querySelector("[data-cliente]");

    div.classList.add(
        "flex",
        "flex-col",
        "gap-4",
        "align-start",
        "text-left",
        "bg-[#cacaca]"
    );

    div.innerHTML = `
        <h1 class="text-lg">${cliente.nome}</h1>
        <p>${cliente.cpf}</p>
        <p>${cliente.email}</p>
        <p>${cliente.endereco}</p>
        <p>${cliente.telefone}</p>
        <p>${cliente.dataNascimento}</p>
    `;
}

carregarDetalhes();