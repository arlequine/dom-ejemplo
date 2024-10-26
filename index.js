console.log('hola mundo')

const inputTarea = document.getElementById('nueva-tarea')
const botonAgregar = document.getElementById('agregar-tarea')
const listaTareas = document.getElementById('lista-tareas')


// Funcion para agregar una tarea a la lista
const agregarTarea = () => {
  const tareaTexto = inputTarea.value

  if(tareaTexto === '') {
    alert("Porfavor, ingresa una tarea.")
    return
  }

  // Crear un nuevo elemento LI para la tarea
  const nuevaTarea = document.createElement('li')
  nuevaTarea.textContent = tareaTexto

  // Crear Boton de  "Eliminar" para la tarea
  const botonEliminar = document.createElement('button')
  botonEliminar.textContent = 'Eliminar'
  botonEliminar.style.marginLeft = '10px'

  // Cuando se haga click en el boton "Eliminar", se elimina la tarea
  botonEliminar.addEventListener('click', () => {
    nuevaTarea.remove()
  })

  // Cuando se haga click en la tarea, marcarla como completada (toggle)
  nuevaTarea.addEventListener('click', () => {
    nuevaTarea.classList.toggle('completado')
  })

  //Añadir el boton de eliminar al <li> de la tarea
  nuevaTarea.appendChild(botonEliminar)

  // Agregar la nueva tarea a la lista de tareas
  listaTareas.appendChild(nuevaTarea)

  // Limpiar el input despues de agregar la tarea
  inputTarea.value = ''

}


// Asignar la funcion agregarTarea al boton
botonAgregar.addEventListener('click', agregarTarea)