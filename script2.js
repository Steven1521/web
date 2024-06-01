document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var documento = document.getElementById("documento").value;
    var correo = document.getElementById("correo").value;
    var celular = document.getElementById("celular").value;
    var fecha = document.getElementById("fecha").value;

    console.log("Nombre:", nombre);
    console.log("Apellidos:", apellidos);
    console.log("Documento:", documento);
    console.log("Correo:", correo);
    console.log("Celular:", celular);
    console.log("Fecha de la Exposición:", fecha);
});