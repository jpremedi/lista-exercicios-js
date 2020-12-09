function Teste() {
    let numero1 = document.getElementById("numero1").value;

    // let numero = parseInt(numero1);


    if (numero1 > 18) {
        document.getElementById("resultado").innerText = "Idade maior que 18 anos.";
    }
    else if (numero1 < 18) {
        document.getElementById("resultado").innerText = "Idade menor que 18 anos.";
    }
    else{
        document.getElementById("resultado").innerText = "Idade igual a 18 anos."
    }
}