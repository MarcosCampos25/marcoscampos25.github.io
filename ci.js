const MAX_RANDOM = 9999
const MIN_RANDOM = 0

function validation_digit(ci){
  var a = 0;
  var i = 0;
  if(ci.length <= 6){
    for(i = ci.length; i < 7; i++){
      ci = '0' + ci;
    }
  }
  for(i = 0; i < 7; i++){
    a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
  }
  if(a%10 === 0){
    return 0;
  }else{
    return 10 - a % 10;
  }
}

function validate_ci(ci){
  ci = clean_ci(ci);
  var dig = ci[ci.length - 1];
  ci = ci.replace(/[0-9]$/, '');
  return (dig == validation_digit(ci));
}

function random_ci(){
  var ci = Math.floor(Math.random() * 10000000).toString();
  ci = ci.substring(0,7) + validation_digit(ci);
  return ci;
}

function clean_ci(ci){
  return ci.replace(/\D/g, '');
}


function cadenaRandom(){

  let length = document.getElementById("numberOfCis").value
  let cadena = []

  for (let i = 0; i < length; i++){
    cadena.push(random_ci())
  }
  return cadena;
}

function cadenaRandomGroovy(){
  let cadena = cadenaRandom();
  let string = "";

  for (let i = 0; i < cadena.length; i++) {
    string += "[" + "PersonaCi:" +'"'+cadena[i]+'"'+"]" + "," +"\n"
  }
  return string;
}

function cadenaRandomSql(){
  let cadena = cadenaRandom();
  let string = "";
  let resultado = "select * from personadocumento where personadocumentonumero in (";

  for (let i = 0; i < cadena.length; i++) {
    if(i == cadena.length - 1) {
      string += "'" + cadena[i] + "'" + ");";
    } else {
      string += "'" + cadena[i] + "'" + ", ";
    }
  }
  return resultado + string;

}

function cadenaGroovySql () {
  let cadena = cadenaRandom();

  let stringGroovy = "";

  let stringSql = "";
  let resultado = "select * from personadocumento where personadocumentonumero in (";

  for (let i = 0; i < cadena.length; i++) {
    if(i == cadena.length - 1) {
      stringSql += "'" + cadena[i] + "'" + ");";
    } else {
      stringSql += "'" + cadena[i] + "'" + ", ";
    }
  }
  resultado = resultado + stringSql;

  for (let i = 0; i < cadena.length; i++) {
    stringGroovy += "[" + "PersonaCi:" +'"'+cadena[i]+'"'+"]" + "," +"\n"
  }

  return resultado + "\n" + stringGroovy
}


function ran_mail() {
  const dominios = ['gmail', 'yahoo', 'hotmail', 'live', 'example'];
  const nombres = ['juan', 'pedro', 'marcos', 'julieta', 'paula', 'emma', 'felipe', 'mateo', 'sofia'];
  const extensiones = ['.com', '.net', '.org', '.uy', '.arg', '.cl'];

  const numeroAleatorio = getRandomInt(MIN_RANDOM, MAX_RANDOM)
  const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
  const dominioAleatorio = dominios[Math.floor(Math.random() * dominios.length)];
  const extensionAleatoria = extensiones[Math.floor(Math.random() * extensiones.length)];
  const emailAleatorio = `${nombreAleatorio}${numeroAleatorio}@${dominioAleatorio}${extensionAleatoria}`;
 
  return emailAleatorio;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

