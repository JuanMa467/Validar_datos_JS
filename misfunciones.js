let contador=0;
parseFloat(contador)
function agregarMateria() {
    contador+=1;
    
    const tablaDatos = document.getElementById("datos");
    const materias = [
    { value: 'SeleccionarMateria', text: 'Seleccionar Materia'},
    { value: 'Taller de Tecnología', text: 'Taller de Tecnología'},
    { value: 'Matemática', text: 'Matemática'},
    { value: 'Lengua', text: 'Lengua'},
    { value: 'Cs. Sociales', text: 'Cs. Sociales'},
    { value: 'SisParadigma', text: 'SisParadigma'},
    { value: 'Artes Visuales', text: 'Artes Visuales'},
    { value: 'Sistemas Operativos', text: 'Sistemas Operativos'},
    { value: 'Modelo de datos', text: 'Modelo de datos'},
    { value: 'Desarrollo del pensamiento', text: 'Desarrollo del pensamiento'},
    { value: 'Emprendedurismo', text: 'Emprendedurismo'},
    ];

    const fila = document.createElement('tr');

    //columna1
    const columna1 = document.createElement('td');
    const select = document.createElement('select');
    select.id=`Materia${contador}`;

    columna1.textContent = "Materia: "; 
    //lleno el select
    for (const materia of materias) {
    const option = document.createElement('option');
    option.value = materia.value;
    option.textContent = materia.text;
    select.appendChild(option);
    }

    columna1.appendChild(select);

    //columna2
    const columna2 = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `nota${contador}`;
    columna2.appendChild(input);

    // agrego las columnas
    fila.appendChild(columna1);
    fila.appendChild(columna2);
    tablaDatos.appendChild(fila);
}




function confirmarDatos(){
    let isValid=true;

    /*Nombre*/
    const name=document.getElementById("name").value;
    if (!name) {
        alert("Falta cargar tu nombre");
        isValid = false;
    } else if (isNaN(name) === false) {
        alert("Has cargado números en tu nombre");
        isValid = false;
    }


    /*Apellido*/
    const apellido=document.getElementById("apellido").value;
    if (!apellido){
        alert("Falta cargar tu apellido");
        isValid=false;
    }
    else if (isNaN(apellido) === false) {
        alert("Has cargado números en tu apellido");
        isValid=false;
    }

    /*Edad*/
    const edad=document.getElementById("edad").value;
    if (!edad){
        alert("No fue cargada edad");
        isValid=false;
    }
    else if (isNaN(edad)===true) {
        alert("Has cargado letras en la celda de edad");
        isValid=false;
    }else if (edad<1||100<edad){
        alert("Has cargado un numero no valido en la celda de edad");
    }
    /*DNI*/
    const DNI=document.getElementById("DNI").value
    if (!DNI){
        alert("No fue cargado su DNI");
        isValid=false;
    }
    else if (isNaN(DNI)===true) {
        alert("Has cargado letras en la celda de DNI");
        isValid=false;
    }else if (DNI<1000000||100000000<DNI){
        alert("Has cargado un numero no valido en la celda de DNI");
        isValid=false;
    }
    /*Fecha de Nacimiento*/
    const dia=document.getElementById("dia").value;
    const mes=document.getElementById("mes").value;
    const año=document.getElementById("año").value;

    if(!dia){
        alert("No ha cargado su dia de nacimiento");
        isValid=false;
    }else if(isNaN(dia)===true){
        alert("Ha cargado letras en el dia de su nacimiento");
        isValid=false;
    }else if(dia<1||31<dia){
        alert("El dia de nacimiento no es valido");
        isValid=false;
    }

    if(!mes){
        alert("No ha cargado su mes de nacimiento");
        isValid=false;
    }else if(isNaN(mes)===true){
        alert("Ha cargado letras en el mes de su nacimiento");
        isValid=false;
    }else if(mes<1||12<mes){
        alert("El mes de nacimiento no es valido");
        isValid=false;
    }

    if(!año){
        alert("No ha cargado su año de nacimiento");
        isValid=false;
    }else if(isNaN(año)===true){
        alert("Ha cargado letras en el año de su nacimiento");
        isValid=false;
    }else if(año<1900||2024<año){
        alert("El año de nacimiento no es valido");
        isValid=false;
    }
    /*Sexo*/
    const sexoRadios = document.getElementsByName('sexo');

    let sexoSeleccionado = '';
    
    for (const radio of sexoRadios) {
        if (radio.checked) {
            sexoSeleccionado = radio.value;
            break;
        }
    }
    if(!sexoSeleccionado){
        alert("No has cargado tu sexo, por favor selecciona tu genero.")
        isValid=false
    }

    /*Provincias*/
    const provincia=document.getElementById("provincia").value;
    if(!provincia){
        alert("No seleccionaste ninguna provincia");
        isValid=false;
    }

    /*Domicilio Calle*/
    const domicilioCalle=document.getElementById("domicilioC").value;
    if(!domicilioCalle){
        alert("No has llenado tu calle");
        isValid=false;
    }else if(isNaN(domicilioCalle)===false){
        alert("Has cargado números en la celda de calle");
        isValid=false;
    }

    /*Domicilio N°calle*/
    const domicilioNC=document.getElementById("domicilioNC").value;
    if (!domicilioNC){
        alert("No fue cargado el numero de casa");
        isValid=false;
    } else if(isNaN(domicilioNC)===true){
        alert("Has puesto letras en el numero de casa");
        isValid=false;
    }else if (domicilioNC<1||10000<domicilioNC){
        alert("Has cargado un numero no valido en la celda de Numero de casa");
    }
    


    /*Materias y Notas*/
    
    let materiasNotas=[];
    if(contador<5){
        alert("No has agregado Materias, como mínimo 5 materias");
        isValid=false;
    }else if(contador>10){
        alert("Has agregado más de 10 materias, no puedes agregar más");
        isValid=false;
    }

    for(let i=1;i<=contador;i++){
        const auxiliar = document.getElementById(`Materia${i}`).value;
        if (!auxiliar){
            alert("No agregaste materias");
            isValid=false;
        }else if (auxiliar === "SeleccionarMateria"){
            alert("No ha seleccionado ninguna materia");
            isValid=false;
        }
        const auxiliar2=document.getElementById(`nota${i}`).value;
        if (!auxiliar2){
            alert("No agregaste nota");
            isValid=false;
        }else if(isNaN(auxiliar2)===true){
            alert("Has puesto letras en una nota");
            isValid=false;
        }else if (auxiliar2 < 0 || 11 < auxiliar2){
            alert("Ha colocado una nota incorrecta");
            isValid=false;
        }
        materiasNotas.push({materia: auxiliar , nota: auxiliar2} );
    }
    let texto=""
    materiasNotas.forEach(element => {
        texto+=`Materia: ${element.materia} - Nota: ${element.nota}\n`
    });
    
    /*Promedio*/
    let sumaDenotas=0;
    let promedio=0;
    materiasNotas.forEach(lista=>{
        sumaDenotas+=parseFloat(lista.nota)
    });
    promedio=(sumaDenotas/contador);
    if(promedio<7){
        alert("El promedio de sus notas son menores de 7")
    }

    /*Llenar el textArea y cambiar imagen*/
    const imagen=document.getElementById("img")
    const pieDeFoto=document.getElementById("pieDeFoto")
    const resultado=document.getElementById('resultado');
    if (isValid) {
        resultado.textContent = `Nombre: ${name}
Apellido: ${apellido}
Edad: ${edad}
DNI: ${DNI}
FechaDeNacimiento: ${dia}/${mes}/${año}
Sexo: ${sexoSeleccionado}
Provincia: ${provincia}
Domicilio:Calle: ${domicilioCalle} - Numero altura de casa: ${domicilioNC}
${texto}Promedio: ${promedio}
`;
    imagen.src  ="./assets/perro.jpg"
    pieDeFoto.innerHTML="Felicidades a cargado sus datos"
}else{
    imagen.src  ="./assets/perrito.jpg"
    pieDeFoto.innerHTML="Vuelve lo a intentar"
}
}