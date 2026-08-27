function alcular_Media() {

    // Variaveis das notas
    let nota1 = Number (document.getElementById("nota1").value)
    let nota2 = Number (document.getElementById("nota1").value)
    let nota3 = Number (document.getElementById("nota1").value)

    // Resultado após calcular a média de todas as notas 
    let resultado = document.getElementById("resultado")

    let multiplicando = nota1 + nota2 + nota3 
    let media = multiplicando / 3 

    resultado.textContent = "Sua média é " + media 

    console.log("media")
}