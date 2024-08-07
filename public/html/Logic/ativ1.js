let res = document.getElementById("res")

function calculo() {
    let vetor = [1, 2, 3, 4, 5]
    
    for(let i = 0 ; i < 5 ; i++) {
        vetor[i] = vetor[i] * 3
    }

    res.innerHTML = vetor
    
    console.log(vetor)
}