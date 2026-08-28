function tabuada() {
    let numero = Number(document.getElementById("numero").value)
    let resultado = document.getElementById("resultado")

    for (i == 0; i < 10; i ++) {
        let tabuada = numero * i
        resultado.textContent = tabuada
    }

}

