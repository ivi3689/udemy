'use strict'

window.addEventListener('load', function(){
    console.log("dom cargado");

    var formulario = document.querySelector("#formulario");
    var datos = document.querySelector(".datos");
    datos.style.display = "none";

    formulario.addEventListener('submit', function(){ 
        console.log('evento submit capturado');
         /*Para acceder al DOM*/
       var nombre =document.querySelector("#nombre").value;
       var apellido = document.querySelector("#apellido").value;
       var edad = parseInt(document.querySelector("#edad").value);
       var email = document.querySelector("#email").value;
       var telefono = document.querySelector("#telefono").value;
       var descripcion = document.querySelector("#descripcion").value;

         /*Validacion del formulario*/ 
       if(nombre.trim() == null || nombre.trim().length == 0){
            alert("El nombre no es valido");
            document.querySelector("#error_nombre").innerHTML = "El nombre no es valido"; 
            return false;
       }else{
        document.querySelector("#error_nombre").style.display = "none";
       }
       if(apellido.trim() == null || apellido.trim().length == 0){
          alert("El apellido no es valido");
          document.querySelector("#error_apellido").innerHTML = "Los apellidos son incorrectos"; 
          return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert("El edad no es valida");
            document.querySelector("#error_edad").innerHTML = "La edad no es valida"; 
            return false;
        }
        if(email.trim() == null || email <= 0 || email.trim().length == 0){
         alert("El email no es valida");
         document.querySelector("#error_email").innerHTML = "El email no es valido"; 
         return false;
     }
       if(telefono.trim() == null || telefono.trim().length == 0){
          alert("El telefono no es valido");
          document.querySelector("#error_telefono").innerHTML = "El telefono no es valido"; 
          return false;
          }
       if(descripcion.trim() == null || descripcion.trim().length == 0){
          alert("La descripción esta vacia");
          document.querySelector("#error_description").innerHTML = "El campo descripción no esta relleno"; 
          return false;
          }

          /*Permite mostrar los datos del formulario dentro del span, la opcion comentada de abajo es igual solo que unicamente nos deja mostrar los datos */
       datos.style.display = "block";

        var p_nombre = document.querySelector("#p_nombre span");
        var p_apellido = document.querySelector("#p_apellido span");
        var p_edad = document.querySelector("#p_edad span");
        var p_email = document.querySelector("#p_email span");
        var p_telefono = document.querySelector("#p_telefono span");
        var p_description = document.querySelector("#p_description span");

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
        p_email.innerHTML = email;
        p_telefono.innerHTML =telefono;
        p_description.innerHTML = descripcion;

       /* 
       var datos_usuario = [nombre, apellido, edad, email,telefono,descripcion];
       var indice;
       for(indice in datos_usuario){
            var parrafo = document.createElement("p");
            parrafo.append(datos_usuario[indice]);
            datos.append(parrafo);
       }*/
       

    });
    console.log(datos);

   
});