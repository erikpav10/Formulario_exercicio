const form = document.getElementById('form-atividade');

let linha = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputemailAtividade = document.getElementById('email-atividade');

    const newRow = document.createElement('tr');

    // Cria e anexa table cells com valores de entrada
    const cellNome = document.createElement('td');
    cellNome.textContent = inputNomeAtividade.value;
    newRow.appendChild(cellNome);

    const cellEmail = document.createElement('td');
    cellEmail.textContent = inputemailAtividade.value;
    newRow.appendChild(cellEmail);

   // Acrescenta a nova linha ao corpo da tabela
    const corpotabela = document.querySelector('tbody');
    corpotabela.appendChild(newRow);

   // Reseta valores dos input
    inputNomeAtividade.value = '';
    inputemailAtividade.value = '';
});