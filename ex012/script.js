function clicar() {
    let numero = Number(window.prompt('Digite um número:'))
    let resultado = window.document.getElementById('resultado')
    if (numero % 2 == 0) {
        resultado.innerHTML = `<p>O número ${numero} que foi digitado é <strong>PAR!</strong></p>`
    } else {
        resultado.innerHTML = `<p>O número ${numero} que foi digitado é <strong>ÍMPAR!</strong></p>`
    }
}