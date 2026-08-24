function Maior() {
    let primeiro = Number (document.getElementById("primeiro").value)
    let segundo = Number (document.getElementById("segundo").value)
    let maior = document.getElementById("resultado")

    if (primeiro > segundo) {
        maior.textContent = "O primeiro número é maior"
    }
 
    else if (primeiro < segundo)
        maior.textContent = "O segundo número é maior "

    else if (primeiro == segundo) {
        maior.textContent = "Empate, ambos inquais"
    }

    
}