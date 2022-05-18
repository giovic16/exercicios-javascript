function clicar() {
    let minimo = 1
    let maximo = 100
    let diferenca = maximo - minimo
    let sorteio = Math.random()
    let numero = minimo + Math.trunc(diferenca * sorteio)
    let resultado = document.querySelector('section#resultado')
    resultado.innerHTML += `<p>Acabei de pensar no número <mark>${numero}</mark>!</p>`
}

function limpar() {
    let resultado = document.querySelector('section#resultado')
    resultado.innerHTML = null
}