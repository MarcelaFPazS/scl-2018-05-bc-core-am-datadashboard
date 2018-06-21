window.computeUsersStats=(users, progress, courses) =>{ 
/*Esta función es la responsable de "crear" la lista de usuarios (estudiantes)
que vamos a "pintar" en la pantalla. La idea es "recorrer" el arreglo de
usuarios (`users`) y calcular los indicadores necesarios de progreso para cada
uno. La función debe devolver un nuevo arreglo de usuarios donde a cada objeto
de usuario se le debe agregar una _propiedad_ con el nombre `stats` con las
estadísticas calculadas.*/
const btn = document.querySelector('button');
const container = document.getElementById('root');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
.then(response => response.json())
.then(data => {
  console.log(data);
  renderUsers(data);
})

const renderUsers = data => {
  btn.addEventListener('click', () => {
    const render = data.forEach(element => {
      //element.name === arreglo[i].name
      return container.innerHTML += `<p>${element.name}</p>`
    })
    return render;
  })
}

/*
const btn = document.querySelector('button');
const container = document.getElementById('root');
const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

fetch(usersJSON)
.then(response => response.json())
.then(data => {
  console.log(data);
  renderUsers(data);
})

const renderUsers = data => {
  btn.addEventListener('click', () => {
    const render = data.forEach(element => {
      //element.name === arreglo[i].name
      return container.innerHTML += `<p>${element.name}</p>`
    })
    return render;
  })
}
*/
};

window.sortUsers = (users, orderBy, orderDirection) => {
/*La función `sortUsers()` se encarga de _ordenar_ la lista de usuarios creada con
`computeUsersStats()` en base a `orderBy` y `orderDirection`. */

};

window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};
