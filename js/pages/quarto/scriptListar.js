import { listar, excluir } from "../../api/quarto.js";

async function carregarQuartos() {
    const listaQuarto = await listar();
    
    const lista = document.querySelector("[data-list]");

    listaQuarto.forEach(quarto => {
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
            <span>${quarto.numero}</span>
            <span>${quarto.preco}</span>
            <span>${quarto.status}</span>
            <div class="flex gap-4">
                <button class="border rounded-sm bg-[#dadada] w-30 justify-self-center" data-detalhes="${quarto.id}" type="button">Detalhes</button>
                <button class="border rounded-sm bg-[#dadada] w-30 justify-self-center" data-atualizar="${quarto.id}" type="button">Atualizar</button> 
                <button class="border rounded-sm bg-[#dadada] w-30 justify-self-center" data-excluir="${quarto.id}" type="button">Excluir</button> 
            </div>
        `;

        lista.appendChild(linha);
    });

    const botaoCadastrar = document.querySelector("[data-cadastrar]");

    botaoCadastrar.addEventListener("click", () => {
        window.location.href = `/templates/quarto/cadastrar.html`;
    });

    const botoesDetalhes = document.querySelectorAll("[data-detalhes]");

    botoesDetalhes.forEach(botao => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.detalhes;

            window.location.href = `/templates/quarto/detalhes.html?id=${id}`;
        });
    });

    const botoesAtualizar = document.querySelectorAll("[data-atualizar]");

    botoesAtualizar.forEach(botao => {
        botao.addEventListener("click", () => {
            const id = botao.dataset.atualizar;
            
            window.location.href = `/templates/quarto/atualizar.html?id=${id}`;
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

carregarQuartos();