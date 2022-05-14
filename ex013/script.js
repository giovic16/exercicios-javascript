function clicar() {
    let primeiroNumero = Number(window.prompt('Digite um número: '))
    let segundoNumero = Number(window.prompt('Digite outro número: '))
    
    let resultado = document.querySelector('section#resultado')
    if (primeiroNumero > segundoNumero) {
        resultado.innerHTML = `<p>Analisando os valores <mark>${primeiroNumero}</mark> e <mark>${segundoNumero}</mark>, o maior valor é <strong>${primeiroNumero}</strong></p>`
    } else if (primeiroNumero < segundoNumero) {
        resultado.innerHTML = `<p>Analisando os valores <mark>${primeiroNumero}</mark> e <mark>${segundoNumero}</mark>, o maior valor é <strong>${segundoNumero}</strong></p>`
    } else {
        resultado.innerHTML = `<p>Analisando os valores <mark>${primeiroNumero}</mark> e <mark>${segundoNumero}</mark>, ambos são <strong>IGUAIS</strong></p>`
    }
}