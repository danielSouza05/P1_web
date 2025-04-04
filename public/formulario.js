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
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        return response.json();
    })
    .then(data => {
        alert("Produto cadastrado com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao cadastrar produto:", error);
        alert("Erro ao cadastrar produto. Tente novamente.");
    });
});

// Envio do formulário de cadastro de usuário
window.addEventListener('DOMContentLoaded', (event) => {
    // Aqui estamos garantindo que o código só vai rodar depois que o DOM estiver totalmente carregado.
    console.log("DOM totalmente carregado");
    
    const formUsuario = document.getElementById("formUsuario");

    // Se não encontrar o formulário, vamos exibir no console um erro.
    if (!formUsuario) {
        console.error("Erro: Formulário 'formUsuario' não encontrado!");
        return;
    }

    // Se encontrou o formulário, configuramos o event listener para o submit.
    formUsuario.addEventListener("submit", function(event) {
        event.preventDefault();  // Impede o envio padrão do formulário

        const usuarioData = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        };

        console.log("Dados do usuário", usuarioData);  // Exibe os dados coletados

        // Enviando os dados para o backend via API
        fetch("/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuarioData)
        })
        .then(response => {
            if (!response.ok) {
                console.error('Erro ao cadastrar usuário:', response.statusText);
                alert("Erro ao cadastrar usuário.");
                return;
            }
            return response.json();
        })
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
