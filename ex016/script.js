function clicar() {
    let ano = Number(window.prompt('Em que ano você nasceu?'))
    let idade = 2022 - ano
    let resultado = document.getElementById('resultado') 
    resultado.innerHTML = `<p>Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em 2022.</p>`
}