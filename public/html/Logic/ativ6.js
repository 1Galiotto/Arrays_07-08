let res = document.getElementById("res")

function calculo() {
    let vetorUmTemp = document.getElementById("Um").value
    let vetorUm = vetorUmTemp.split(",").map(Number)
    let vetorDoisTemp = document.getElementById("Dois").value
    let vetorDois = vetorDoisTemp.split(",").map(Number)
    let vetorTres = []
    for(let i = 0; i < vetorUm.length; i++){
        vetorTres.push(vetorUm[i] - vetorDois[i])
    }
    res.innerHTML = "A Subtração deles são: " + vetorTres

    
    
    console.log(vetorTres)
}