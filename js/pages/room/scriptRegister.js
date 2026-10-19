import { cadastrar } from "../../api/room.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async evento => {
    
    evento.preventDefault();

    const quarto = {
        numero: formulario.numero.value,
        tipo: formulario.tipo.value,
        capacidade: formulario.capacidade.value,
        preco: formulario.preco.value
    };

    await cadastrar(quarto);

    alert(`Quarto N° ${quarto.numero} cadastrado com sucesso`);

    window.location.href = "templates/room/list.html";
})

