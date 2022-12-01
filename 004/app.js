function Somar(){
    let n1 = document.getElementById("numero1").value
    let n2 = document.getElementById("numero2").value
    let n3 = document.getElementById("numero3").value

    if (parseInt(n1) + parseInt(n2) < parseInt(n3)){
        document.getElementById("resposta").innerHTML = "A soma dos números 1 e 2 é MENOR que o Número 3"
    }else {
        document.getElementById("resposta").innerHTML = "A soma dos números 1 e 2 é MAIOR que o Número 3"
    }

  
}


