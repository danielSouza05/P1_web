document.addEventListener('DOMContentLoaded', function () 
{
    const formUsuario = document.getElementById("formUsuario");

    if (!formUsuario) 
    {
        console.error("Erro: Formulário 'formUsuario' não encontrado!");
        return;
    }

    formUsuario.addEventListener("submit", function (event) 
    {
        event.preventDefault(); 

        const usuarioData = 
        {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("senha").value
        };

        console.log(usuarioData); 

        // envia os dados pro backend via api
        fetch("/api/usuarios", 
        {
            method: "POST",
            headers: 
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuarioData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) 
                {
                    alert(data.message);  // mensagem de erro ou sucesso do servidor
                } 
                else 
                {
                    alert("Usuário cadastrado com sucesso!");
                }
            })
            .catch(error => 
            {
                console.error("Erro ao cadastrar usuário:", error);
                alert("Erro ao cadastrar usuário. Tente novamente.");
            });
    });
});
