const form = document.getElementById('form-atividade');

let linha = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputemailAtividade = document.getElementById('email-atividade');

    const newRow = document.createElement('tr');

    
    const cellNome = document.createElement('td');
    cellNome.textContent = inputNomeAtividade.value;
    newRow.appendChild(cellNome);

    const cellEmail = document.createElement('td');
    cellEmail.textContent = inputemailAtividade.value;
    newRow.appendChild(cellEmail);


    const corpotabela = document.querySelector('tbody');
    corpotabela.appendChild(newRow);


    inputNomeAtividade.value = '';
    inputemailAtividade.value = '';
});