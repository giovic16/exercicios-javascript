function clicar() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let dataHora = new Date
    let resultado = window.document.getElementById('resultado')
    let mes = dataHora.getMonth() 
    let sem = dataHora.getDay()
    resultado.innerHTML = `<p>Dia: <mark>${dataHora.getDate()}</mark></p>`
    resultado.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    resultado.innerHTML += `<p>Ano: <mark>${dataHora.getFullYear()}</mark></p>`
    resultado.innerHTML += `<p>Dia da Semana: <mark>${semana[sem]}</mark></p>`
    resultado.innerHTML += `<p>Hora: <mark>${dataHora.getHours()}</mark></p>`
    resultado.innerHTML += `<p>Minutos: <mark>${dataHora.getMinutes()}</mark></p>`
    resultado.innerHTML += `<p>Segundos: <mark>${dataHora.getSeconds()}</mark></p>`
}