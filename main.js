const form = document.getElementById('formComp');
const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obter o valor dos campos
    const compA = parseFloat(document.getElementById('form-A').value);
    const compB = parseFloat(document.getElementById('form-B').value);

    // Verifica se compB é maior que compA
    if (compB > compA) {
        mensagem.textContent = "Formulário válido, parabéns!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Erro: O número do campo B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});

