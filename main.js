const form = document.getElementById('form-atividade');

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputTelefone.value = '';
});