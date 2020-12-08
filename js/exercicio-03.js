function Teste() {
    let numero1 = document.getElementById("numero1").value;

    // let numero = parseInt(numero1);



    if (numero1 > 100) {
        document.getElementById("resultado").innerText = "Maior que 100";
    }
    else if (numero1 < 100) {
        document.getElementById("resultado").innerText = "Menor que 100";
    }
    else{
        document.getElementById("resultado").innerText = "Igual a 100"
    }
}