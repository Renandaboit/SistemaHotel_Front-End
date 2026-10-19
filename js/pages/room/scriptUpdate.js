import { atualizar } from "../../api/room.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async evento => {
    
    evento.preventDefault();

    const paramentros = new URLSearchParams(window.location.search);

    const quarto = {
        id: paramentros.get("id"),
        numero: formulario.numero.value,
        tipo: formulario.tipoQuarto.value,
        capacidade: formulario.capacidade.value,
        preco: formulario.preco.value,
        status: formulario.statusQuarto.value
    };

    await atualizar(quarto.id, quarto);

    alert(`Quarto N° ${quarto.numero} atualizado com sucesso`);

    window.location.href = "templates/room/list.html";
});