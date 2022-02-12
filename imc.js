// Codigo para calcular el IMC
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

// Codigo para guardar datos personales
let alumnos = [
    {carne:"17747", nombre: "Abraham", apellido: "Tun Sanchez", email: "abcod98@gmail.com", fechaInscripcion: "11/02/2022"},
    {carne:"17747", nombre: "Abraham", Apellido: "Tun Sanchez", email: "abcod98@gmail.com", fechaInscripcion: "11/02/2022"},
];

var valueCarne;
var valueNombre;
var valueApellido;
var valueEmail;
var valueFecha;
var newAlumno;

function datosPersonales(){
    const inputCarne = document.getElementById("InputCarne");
    valueCarne = inputCarne.value;

    const inputNombre = document.getElementById("InputNombre");
    valueNombre = inputNombre.value;

    const inputApellido = document.getElementById("InputApellido");
    valueApellido = inputApellido.value;

    const inputEmail = document.getElementById("InputEmail");
    valueEmail = inputEmail.value;

    const inputFecha = document.getElementById("InputFecha");
    valueFecha = inputFecha.value;

    newAlumno = new agregarDatos(valueCarne, valueNombre, valueApellido, valueEmail, valueFecha)
}

function agregarDatos (carne, nombre, apellido, email, fechaInscripcion ){
    this.carne = carne;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email ;
    this.fechaInscripcion = fechaInscripcion;
};



