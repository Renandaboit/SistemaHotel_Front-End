import { atualizar } from "../../api/cliente.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async evento => {
    
    evento.preventDefault();

    const paramentros = new URLSearchParams(window.location.search);

    const cliente = {
        id: paramentros.get("id"),
        nome: formulario.nome.value,
        cpf: formulario.cpf.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        dataNascimento: formulario.dataNascimento.value,
        endereco: formulario.endereco.value
    };

    await atualizar(cliente.id, cliente);

    alert(`Cliente ${cliente.nome} atualizado com sucesso`);
});