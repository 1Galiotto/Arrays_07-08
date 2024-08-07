let res = document.getElementById("res")

function calculo() {
    let vetor = [1, 2, 3, 4, 5]
    let vetor2 = []
    for(let i = 0 ; i < vetor.length ; i++) {
        vetor2.push(vetor[i]+7)
    }

    res.innerHTML = vetor2
    
    console.log(vetor)
}