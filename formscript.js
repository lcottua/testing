function formsubmit()
{
    var Nombre = document.getElementById('nombre').value;
    var Apellido = document.getElementById('apellido').value;
    var Edad = document.getElementById('edad').value;
    var Mail = document.getElementById('mail').value;
    var Telefono = document.getElementById('telefono').value;
    /*alert(Nombre);
    alert(Apellido);
    alert(Edad);
    alert(Mail);
    alert(Telefono);
    alert ("Hola, entraste a la función");*/
    
    if (Nombre==null || Nombre=="")
    {  
      console.log("hola mundo");  
      alert(Nombre.length);  
      return false;  
    }

    else if(Nombre.length < 5)
    {
        alert("El nombre debe tener más de 5 caracteres");
        return false;  
    }
    if (Apellido==null || Apellido=="")
    {  
      console.log("hola mundo");  
      alert("El apellido no puede estar en blanco");  
      return false;  
    }
    if (Edad==null || Edad=="" )
    {  
      console.log("hola mundo");  
      alert("La edad no puede estar en blanco");  
      return false;  
    }
    else if(Edad < 18)
    {
      alert("Esta página es para mayores de 18, no puedes acceder");  
      return false;  
    }
    if (Mail==null || Mail=="")
    {  
      console.log("hola mundo");  
      alert("El mail no puede estar en blanco");  
      return false;  
    }
    if (Telefono==null || Telefono=="" )
    {  
      console.log("hola mundo");  
      alert("El teléfono no puede estar en blanco ni contener menos de 10 digitos");  
      return false;  
    }
    else if(Telefono.length < 10)
    {
      alert("El teléfono no debe ser menor a 10 digitos");
      return false;
    }

}