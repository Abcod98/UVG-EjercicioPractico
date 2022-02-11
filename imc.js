var peso = 0;
var altura = 0;

function calcularIMC(){
    const inputPeso = document.getElementById("InputPeso");
    const valuePeso = inputPeso.value;
    const peso = Number(valuePeso);

    const inputAltura = document.getElementById("InputAltura");
    const valueAltura = inputAltura.value;
    const altura = Number(valueAltura);

    var kilogramos = peso * 0.454;
    var imc = kilogramos / (altura*altura);

    const resultadoP = document.getElementById("ResultadoP");
    resultadoP.innerText = "El IMC de la persona es: " + imc;

    return 0;
}