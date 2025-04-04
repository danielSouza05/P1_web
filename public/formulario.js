document.getElementById("formProduto").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio padrão do formulário

    const produtoData = {
        nome: document.getElementById("nome").value,
        preco: parseFloat(document.getElementById("preco").value),  // Certifique-se de enviar um número
        estoque: parseInt(document.getElementById("estoque").value)  // Certifique-se de enviar um número inteiro
    };

    console.log(produtoData);  // Verifique se os dados estão corretos antes de enviar

    fetch("/api/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(produtoData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);  // Mensagem de erro ou sucesso do servidor
        } else {
            alert("Produto cadastrado com sucesso!");
        }
    })
    .catch(error => {
        console.error("Erro ao cadastrar produto:", error);
        alert("Erro ao cadastrar produto. Tente novamente.");
    });
});

// Envio do formulário de cadastro de usuário
window.addEventListener('DOMContentLoaded', (event) => {
    // Agora, o código será executado apenas depois que o DOM for totalmente carregado
    const formUsuario = document.getElementById("formUsuario");
    
    if (formUsuario) {
        formUsuario.addEventListener("submit", function(event) {
            event.preventDefault();  // Impede o envio padrão do formulário

            const usuarioData = {
                nome: document.getElementById("nome").value,
                email: document.getElementById("email").value,
                senha: document.getElementById("senha").value
            };

            console.log(usuarioData);  // Verifique se os dados estão corretos antes de enviar

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
    } else {
        console.error("Formulário não encontrado.");
    }
});