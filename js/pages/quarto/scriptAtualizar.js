import { atualizar } from "../../api/quarto.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async evento => {
    
    evento.preventDefault();

    const paramentros = new URLSearchParams(window.location.search);

    const quarto = {
        id: paramentros.get("id"),
        numero: formulario.numero.value,
        tipo: formulario.tipo.value,
        capacidade: formulario.capacidade.value,
        preco: formulario.preco.value
    };

    await atualizar(quarto.id, quarto);

    alert(`Quarto N° ${quarto.numero} atualizado com sucesso`);

    window.location.href = "templates/quarto/listar.html";
});