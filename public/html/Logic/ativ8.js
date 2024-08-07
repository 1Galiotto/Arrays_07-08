function calculo(){
    let vetorTemp = document.getElementById("Um").value
    let vetor = vetorTemp.split(",").map(Number)
    let vetorInv = []
    for(let i = vetor.length - 1; i > -1; i--){
        vetorInv.push(vetor[i])
    }
    document.getElementById('res').innerHTML = "De forma inversa fica: " + vetorInv
}