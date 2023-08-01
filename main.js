const form = document.getElementById('form-deposito')

function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ')
    return nomeComArray.length >= 2;
}

form.addEventListener('submit',function(e){
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById("nome-beneficiario");
    const numeroContaBeneficiario = document.getElementById("numero-conta");
    const valorDeposito = document.getElementById("valor-deposito");
    const mensagemSucesso = `montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;
    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        alert(mensagemSucesso); 

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        alert("O nome não esta completo");
    }

})

console.log(form);