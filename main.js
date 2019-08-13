'use strict';
(

function() {

  console.log("Javascript cargado!");

  var boton = document.getElementById("guardar");

//crear una función para construir la fila que tenemos que agregar a nuestra tabla//


function construirRow(){

    //Mandamos a llamar a las entradas de donde sacaré los datos para la tabla//

      var name = document.getElementById("nombre");
      var lastName = document.getElementById("apellido");
      var email = document.getElementById("email");
      var phone = document.getElementById("telefono");

      var tabla = document.querySelector(".list table");

          if (name.value=="") {
            alert ("falta el nombre")
          } else if (lastName.value=="") {
            alert ("falta el apellido")
          } else if (email.value=="") {
            alert ("falta el email")
          } else if (phone.value=="") {
            alert ("falta el telefono")
          } else {

              //Forma 1: //
              //
              // var row = "<tr>"+
              //               "<td>"+name.value+"</td>"+
              //               "<td>"+lastName.value+"</td>"+
              //               "<td>"+email.value+"</td>"+
              //               "<td>"+phone.value+"</td>"+
              //           "</tr>";
              //
              //     tabla.insertRow(-1).innerHTML = row;







// forma 2: insertando el valor de cada input celda por celda //

          // var row = tabla.insertRow(-1);
          //
          // row.insertCell(0).innerHTML = name.value;
          // row.insertCell(0).innerHTML = lastName.value;
          // row.insertCell(0).innerHTML = email.value;
          // row.insertCell(0).innerHTML = phone.value;

// forma 3: insertando cada input en las celdas a través de un ciclo for //

      var inputs = [name.value, lastName.value, phone.value, email.value]


      var row = tabla.insertRow(-1);

      for (var i=0; i<4; i++) {
          row.insertCell(0).innerHTML = inputs[i];
      }

      name.value = "";
      lastName.value = "";
      email.value = "";
      phone.value = "";

  }

}







  function saludo(texto) {
      console.log(texto);
  }

  boton.addEventListener("click", function(){
    saludo("Hola desde el botón");
    construirRow();
  })


  saludo("Hola desde la función saludo!");

  }







)();
