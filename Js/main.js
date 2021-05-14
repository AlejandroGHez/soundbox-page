

/*Creacion de un archivo .js o llava script externo que se enlaza al archivo Java.HTML
este mismo archivo maneja 8 sentencias de la tarea que son
Sentencias

Alert

Promtp

Llamada a un js (script externo)
Confirm

Declaración de variables
If-then-else con empleo de  imágenes

Declaración y uso de una función

Empleo de algún elemento en un formulario como :

<input type=“submit” onclick=“alert(‘Hola'); return false;”>------------------------esta sentencia se encuentra en el html del formulario en la linea 66*/

function bienvenida(){              //funcionn de tipo bienvenida para mostrar un alert dando la bienvenida al usuario
  alert('Bienvenido a SOUNBOX para continuar con su registro debe ingresar su edad')      //sentencia de tipo alert
}

function validacion(){                                //función de tipo validacion para validar la edad del usuario y si los datos son correctos
  var  edad = prompt("¿cual es su edad? ")            //variable de tipo edad que guarda la respuesta del prompt

  if(edad >= 18){                                                   //dentencia if para validar si el usuario es mayor o igual a 10 años
    alert('el contenido de esta pagina es apta para usted')         //si es verdadero muestra un alert que dice que el contenido que es apto
  }
  else {
    alert('el contenido de esta pagina no es apta para usted')      //si es falso muestra un alert que dice que
  }

  let confirmar = confirm ("¿Son correctos sus datos?")             //variable coonfirmar que guarda la respuesta de tipo booleano de la sentencia confirm
      if (confirmar){

        document.write ('<img src="../html/Imagenes/confirmacion.png" center  height="150px" width="150px"');   //si es verdadero muestra una imagen de correcto el documento
      }
      else {
        alert('Lo sentimos vuelva a cargar la pagina')                                                        //si es falso muestra un alert que dice que vuelva a cargar la pagina y ingrese sus datos correctamente
        document.write ('<img src="../html/Imagenes/warning.png"height="150px" width="150px"');               //muestra una imagen de advertencia indicadno que los datos aun no son correctos
      }

}//llamado a las funciones
 bienvenida();        //se ejecuta primero la funcion de bienvenida

 validacion();        //se ejecuta despues la funcion validacion


 //creacion de una constante para hacer un llamado a un elemenento dentro del html por su id que es correo
 const correo = document.getElementById('correo')     //consante correo es igual al ID de correo del formulario


 form.addEventListener("submit", e=>{               //se agrega un evento al momento de completar el registro

   let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/      //vaiable de tpo registro de email mediante una validacion de codigo ASCII que dice que debe contener ciertos caracteres para poder ser valido

   if(!regexEmail.test(correo.value)){            //si es falso o hay errores en el correo
     alert("El correo no es valido")
   }


 })
