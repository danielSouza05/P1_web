document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o formulário existe antes de adicionar o eventListener
    const formUsuario = document.getElementById("formUsuario");

    if (!formUsuario) {
        console.error("Erro: Formulário 'formUsuario' não encontrado!");
        return;
    }

    // Adiciona o event listener ao formulário de usuário
    formUsuario.addEventListener("submit", function (event) {
        event.preventDefault();  // Impede o envio padrão do formulário

        const usuarioData = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        };

        console.log(usuarioData);  // Verifique os dados antes de enviar

        // Envia os dados para o backend via API
        fetch("/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuarioData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);  // Mensagem de erro ou sucesso do servidor
                } else {
                    alert("Usuário cadastrado com sucesso!");
                }
            })
            .catch(error => {
                console.error("Erro ao cadastrar usuário:", error);
                alert("Erro ao cadastrar usuário. Tente novamente.");
            });
    });
});
