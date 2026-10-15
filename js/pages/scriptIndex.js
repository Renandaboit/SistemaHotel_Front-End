async function inicio() {

    const botaoClientes = document.querySelector("[data-clientes]");

    botaoClientes.addEventListener("click", () => {
        window.location.href = `/templates/cliente/listar.html`;
    });

    const botaoQuartos = document.querySelector("[data-quartos]");

    botaoQuartos.addEventListener("click", () => {
        window.location.href = `/templates/quarto/listar.html`;
    });

    const botaoReserva = document.querySelector("[data-reservas]");

    botaoReserva.addEventListener("click", () => {
        window.location.href = `/templates/reserva/listar.html`;
    });
}

inicio();