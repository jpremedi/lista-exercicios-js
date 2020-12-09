function Teste() {
    let numero1 = document.getElementById("numero1").value;

    // let numero = parseInt(numero1);



    if (numero1 > 100) {
        document.getElementById("resultado").innerText = "Número maior que 100.";
    }
    else if (numero1 < 100) {
        document.getElementById("resultado").innerText = "Número menor que 100.";
    }
    else{
        document.getElementById("resultado").innerText = "Número igual a 100."
    }
}