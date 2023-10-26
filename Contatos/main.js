const form = document.getElementById('form-atividade');

let linha = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputemailAtividade = document.getElementById('email-atividade');

    linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}<td>`;
    linha += `<td>${inputemailAtividade.value}<td>`;
    linha += '<tr>';


    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linha;

    inputNomeAtividade.value = '';
    inputemailAtividade.value = '';
});

