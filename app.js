var cinput   = document.getElementById("ci");
var valinput = document.getElementById("val_ci");
var random   = document.getElementById("random");

cinput.addEventListener('keyup', function(){
 ci_uy(cinput.value);
});

valinput.addEventListener('keyup', function(){
  if (validate_ci(valinput.value)){
    valinput.style.background = "#9deb91";
  } else{
    valinput.style.background = "#eb91ae";
  }
});

random.addEventListener('click', function(){
  document.getElementById("ran_ci").value = random_ci();
});

randomCol.addEventListener('click', function(){
  document.getElementById("ran_ci_col").value = cadenaRandom();
});

goorvyRandom.addEventListener('click', function(){
  document.getElementById("ran_ci_col").value = cadenaRandomGroovy();
});

sqlRandom.addEventListener('click', function(){
  document.getElementById("ran_ci_col").value = cadenaRandomSql();
});

sqlGroovyRandom.addEventListener('click', function(){
  document.getElementById("ran_ci_col").value = cadenaGroovySql();
});


function ci_uy(ci){
  if(ci.length > 5){
    ci = clean_ci(ci);
    document.getElementById("validation").value = validation_digit(ci);
  }
}

