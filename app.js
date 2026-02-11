// Importaciones

// Constantes y variables
const formulario = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const cuerpo = document.querySelector('#cuerpo');
const tareas = document.querySelector('#tareas');

// Funciones y metodos

// eventos

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    if(nombre.value.trim() == ""){
        nombre.classList.add('error');
        alert('El nombre de la tarea no puede estar vacio');
        nombre.value = "";
        nombre.focus();
    }
    else{
        nombre.classList.remove('error');
        if(cuerpo.value.trim() == ""){
            cuerpo.classList.add('error');
            alert('El cuerpo de la tarea no puede estar vacio');
            cuerpo.value = "";
            cuerpo.focus();
        }
        else{
            cuerpo.classList.remove('error');
            let nombreTarea = document.createElement('p');
            let cuerpoTarea = document.createElement('p');
            nombreTarea.textContent = (`Nombre: ${nombre.value}`);
            cuerpoTarea.textContent = (`Cuerpo: ${cuerpo.value}`);
            tareas.append(nombreTarea);
            tareas.append(cuerpoTarea);
            formulario.reset();
        }
    }
    
});