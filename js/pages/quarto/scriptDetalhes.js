import { buscar } from "../../api/quarto.js";

async function carregarDetalhes() {
    const parametros = new URLSearchParams(window.location.search);

    const id = parametros.get("id");

    const quarto = await buscar(id);

    const div = document.querySelector("[data-quarto]");

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
        <h1 class="text-lg col-1">${quarto.numero}</h1>
        <p class="col-2">${quarto.tipo}</p>
        <p class="col-3">${quarto.capacidade} pessoa(s)</p>
        <p>R$${quarto.preco}/diária</p>
        <p>${quarto.status}</p>
    `;
}

carregarDetalhes();