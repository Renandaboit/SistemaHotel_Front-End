import { listar, excluir } from "../../api/cliente.js";

async function carregarClientes() {
    const listaCliente = await listar();
    
    const lista = document.querySelector("[data-list]");

    listaCliente.forEach(cliente => {
        const linha = document.createElement("div");

        linha.classList.add(
                "grid",
                "grid-cols-4",
                "gap-10",
                "py-2",
                "px-12",
                "bg-[#cacaca]",
                "rounded-sm"
            );

        linha.innerHTML = `
            <span>${cliente.nome}</span>
            <span>${cliente.cpf}</span>
            <span>${cliente.email}</span>
            <div class="flex gap-4">
                <button class="border rounded-sm bg-[#dadada] w-30 justify-self-center" data-detalhes="${cliente.id}" type="button">Detalhes</button>
                <button class="border rounded-sm bg-[#dadada] w-30 justify-self-center" data-atualizar="${cliente.id}" type="button">Atualizar</button> 
                <button class="border rounded-sm bg-[#dadada] w-30 justify-self-center" data-excluir="${cliente.id}" type="button">Excluir</button> 
            </div>
        `;

        lista.appendChild(linha);
    });

    const botaoCadastrar = document.querySelector("[data-cadastrar]");

    botaoCadastrar.addEventListener("click", () => {
        window.location.href = `/templates/cliente/cadastrar.html`;
    });

    const botoesDetalhes = document.querySelectorAll("[data-detalhes]");

    botoesDetalhes.forEach(botao => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.detalhes;

            window.location.href = `/templates/cliente/detalhes.html?id=${id}`;
        });
    });

    const botoesAtualizar = document.querySelectorAll("[data-atualizar]");

    botoesAtualizar.forEach(botao => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.atualizar;
            
            window.location.href = `/templates/cliente/atualizar.html?id=${id}`;
        });
    });

    const botoesExcluir = document.querySelectorAll("[data-excluir]");

    botoesExcluir.forEach(botao => {
        botao.addEventListener("click", async () => {
            const id = botao.dataset.excluir;

            await excluir(id);

            window.location.href = `index.html`;
        });
    });
}

carregarClientes();