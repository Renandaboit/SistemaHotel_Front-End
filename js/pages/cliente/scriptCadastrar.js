import { cadastrar } from "../../api/cliente.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", async evento => {
    
    evento.preventDefault();

    const cliente = {
        nome: formulario.nome.value,
        cpf: formulario.cpf.value,
        email: formulario.email.value,
        telefone: formulario.telefone.value,
        dataNascimento: formulario.dataNascimento.value,
        endereco: formulario.endereco.value
    };

    await cadastrar(cliente);

    alert(`Cliente ${cliente.nome} cadastrado com sucesso`);

    window.location.href = "index.html";
})

