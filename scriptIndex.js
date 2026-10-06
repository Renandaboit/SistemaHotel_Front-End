import { listar } from "./app.js";

async function carregarClientes() {
    const listaCliente = await listar();
    
    const lista = document.querySelector("[data-list]");

    listaCliente.forEach(cliente => {
        const linha = document.createElement("div");

        linha.classList.add(
                "grid",
                "grid-cols-4",
                "gap-10",
                "py-2"
            );

        linha.innerHTML = `
            <span>${cliente.nome}</span>
            <span>${cliente.cpf}</span>
            <span>${cliente.email}</span>
            <button class="border" data-id="${cliente.id}" type="button">Detalhes</button>
        `;

        lista.appendChild(linha);
    });

    const botoesDetalhes = document.querySelectorAll("[data-id]")

    botoesDetalhes.forEach(botao => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.id;

            window.location.href = `detalhes.html?id=${id}`;
        });
    });
}

carregarClientes();