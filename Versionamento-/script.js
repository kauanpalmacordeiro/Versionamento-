function tabuada() {
    let numero = Number(document.getElementById("numero").value)
    let resultado = document.getElementById("resultado")

     resultado.textContent = ""

        for (let i = 1; i <= 100; i ++) {
        
            let tabuada = i * numero 

            resultado.textContent += numero + "x" + i + "=" + tabuada + "\n"

        }

        
        

}

