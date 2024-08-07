let res = document.getElementById("res")
function calculo(){
    let vetorTemp = document.getElementById("Um").value
    let vetor = vetorTemp.split(",").map(Number)
    let soma = 0;
    for(let i = 0; i < vetor.length; i++){
        soma = soma + vetor[i]

        res.innerHTML = "A soma dos elementos é: " + soma
    }
}
