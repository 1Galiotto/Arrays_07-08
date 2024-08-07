let res = document.getElementById("res")

function calculo() {
    let vetor = [1, 2, 3, 4, 5]
    let num = Number(document.getElementById("numero").value)
    
    for(let i = 0 ; i < 5 ; i++) {
        vetor[i] = vetor[i] * num
    }

    res.innerHTML = vetor
    
    console.log(vetor)
}