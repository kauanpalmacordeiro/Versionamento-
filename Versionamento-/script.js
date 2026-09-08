function tab(){
    let numero = Number (document.getElementById("numero").value)
    let resultado = document.getElementById("resultado")

    for (let i = 1; i <= 10; i++) {
        let tabuada = numero * i 
        resultado.textContent += numero + "x" + i + "=" + tabuada + "\n"
    }

    
}