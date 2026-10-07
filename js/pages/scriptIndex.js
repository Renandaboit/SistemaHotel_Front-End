async function inicio() {

    const botaoClientes = document.querySelector("[data-clientes]");

    botaoClientes.addEventListener("click", () => {
        window.location.href = `/templates/cliente/listar.html`;
    });

    const botoesQuartos = document.querySelector("[data-quartos]");

    botoesQuartos.addEventListener("click", () => {
        window.location.href = `/templates/quarto/listar.html`;
    });
}

inicio();