var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("enviar");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(x_inicial, y_inicial);
   lienzo.lineTo(x_final, y_final);
   lienzo.stroke();
   lienzo.closePath();
}

function dibujoPorClick() {
   var lineas = parseInt(texto.value);
   var l = 0;
   var xi, yi, xf, yf;
   var lxf, lyf;
   var espacio = ancho / lineas;

   //while(l < lineas) 
   for (l = 0; l < lineas; l++) {
      xi = espacio * l;
      yi = espacio * l;
      xf = espacio * (l + 1);
      yf = espacio * (l + 1);
      lxf = 300 - xf;
      lyf = 300 - yf;
      dibujarLinea("orange", xi, 300, 300, lyf);
      dibujarLinea("black", 0, xf, lxf, 0);
      dibujarLinea("red", 0, xf, yi, 300);
      dibujarLinea("green", xi, 0, 300, yf);
      //l = l + 1; se utiliza cuando es ciclo while

   }

}

function mostrarAlerta(){
   alert("Hola!")
}


