function calcular() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let primeiraNota = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let segundaNota = Number(window.prompt(`Além de ${primeiraNota}, qual foi a outra nota de ${nome}?`))
    let media = (primeiraNota + segundaNota)/2
    let resultado = window.document.getElementById('resultado')
    
    resultado.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${primeiraNota} e ${segundaNota}</mark>.</p>`
    resultado.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
    
    if (media > 6) {
        resultado.innerHTML += `<p>A mensagem esperada que temos é: <strong style='color:red;'>Meus parabéns!</mark></p>`
    }
    else {
        resultado.innerHTML += `<p>A mensagem esperada que temos é: <strong style='color:red;'>Estude um pouco mais!</strong></p>`
    }
}