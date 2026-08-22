function ParImpar() {
    let numero = Number (document.getElementById("numero").value)
    let verificar = document.getElementById("placar")

    if (numero %2 == 0) {
        verificar.textContent = "Esse é um número par"
    }

    else if (numero %2 == 1) {
        verificar.textContent = "Esse é um número Impar"
    }
    
}