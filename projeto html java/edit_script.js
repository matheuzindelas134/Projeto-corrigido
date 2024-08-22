document.addEventListener('DOMContentLoaded', () => {
    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const numero = document.querySelector("#numero");
    const form = document.querySelector("#form");

    const contatoEdit = JSON.parse(localStorage.getItem("contato_edit"));

    if (contatoEdit) {
        nome.value = contatoEdit.nome;
        email.value = contatoEdit.email;
        numero.value = contatoEdit.numero;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const listaContatos = JSON.parse(localStorage.getItem("lista")) || [];
        const contatoIndex = listaContatos.findIndex(contato => contato.id === contatoEdit.id);

        if (contatoIndex > -1) {
            listaContatos[contatoIndex] = {
                id: contatoEdit.id,
                nome: nome.value,
                numero: numero.value,
                email: email.value
            };

            localStorage.setItem("lista", JSON.stringify(listaContatos));
        }

        window.location.href = "./index.html";
    });
});
