$(document).ready(function() {

  // Métodos necesarios para que al presionar una tecla numérica, se muestre el número correspondiente en la pantalla
  $("#cero").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000" || valor == ""){
  			$("#display").text(valor + "0");
  	}
  	else if(len <= 7 && valor != 0){
  			$("#display").text(valor + "0");
   	}
  });

  $("#uno").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("1");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "1");
   	}
  });

  $("#dos").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("2");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "2");
   	}
  });

  $("#tres").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("3");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "3");
   	}
  });

  $("#cuatro").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("4");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "4");
   	}
  });

  $("#cinco").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("5");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "5");
   	}
  });

  $("#seis").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("6");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "6");
   	}
  });

  $("#siete").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("7");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "7");
   	}
  });

  $("#ocho").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("8");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "8");
   	}
  });

  $("#nueve").click(function(){
    len = $("#display").text().trim().length;
    valor = document.getElementById("display").innerHTML;
    if (valor == "0" || valor == ""){
  			$("#display").text("9");
  	}
  	else if(len <= 7 && valor != 0 || valor == "0." || valor == "0.0" || valor == "0.00" || valor == "0.000" || valor == "0.0000" || valor == "0.00000"){
  			$("#display").text(valor + "9");
   	}
  });


  // Método que al presionar el botón ON/C se borren los números que estén en pantalla y se muestre sólo el número cero.
  $("#on").click(function(){
    $("#display").text("0");
  });



  // Método que al presionar la tecla del punto, lo añada a la derecha del número actual que se muestra en pantalla
  $("#punto").click(function(){
    valor = document.getElementById("display").innerHTML;
    console.log(valor);
    if(valor.indexOf('.') == -1) {
      $("#display").text(valor + ".");
    }
  });



// Método que añada el signo negativo al presionar la tecla +/- a un número en pantalla.
$("#sign").click(function(){
  valor = 0;
  valor = document.getElementById("display").innerHTML;
  total = valor * -1;
  $("#display").text(total);
});



// Cuatro operaciones matemáticas básicas, de tal manera que al presionar un número y el signo aritmético, la pantalla quede vacía para indicar que la calculadora está en medio de una operación
var mem = 0;
var op = "";
var num;

$("#mas").click(function() {
  mem = parseFloat(document.getElementById("display").innerHTML);
  op = "+";
  $("#display").text("");
});

$("#menos").click(function() {
  mem = parseFloat(document.getElementById("display").innerHTML);
  op = "-";
  $("#display").text("");
});

$("#dividido").click(function() {
  mem = parseFloat(document.getElementById("display").innerHTML);
  op = "/";
  $("#display").text("");
});

$("#por").click(function() {
  mem = parseFloat(document.getElementById("display").innerHTML);
  op = "*";
  $("#display").text("");
});

$("#igual").click(function() {
  if (op === "+") {num = (mem + parseFloat(document.getElementById("display").innerHTML))};
	if (op === "-") {num = (mem - parseFloat(document.getElementById("display").innerHTML))};
	if (op === "/") {num = (mem / parseFloat(document.getElementById("display").innerHTML))};
	if (op === "*") {num = (mem * parseFloat(document.getElementById("display").innerHTML))};
  var str = num.toString();
  var res = str.substring(0,8);
  $("#display").text(res);
});


});
