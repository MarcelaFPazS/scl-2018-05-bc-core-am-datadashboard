window.onload = () => {
  dataJSON ();
  computeUsersStats ();
  searchStudent ();
}

function dataJSON () {
  const btn = document.getElementById('btncont');
  const usersJSON = '../data/cohorts.json';
  fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    renderUsers(data);    
})
  const renderUsers = data => {
    btn.addEventListener('click', () => {
      const limaCohort = data.id;
        const render = data.forEach(element => {
          console.log(limaCohort);
          const contenedorData = document.createElement('li');
          const contenedor = document.getElementById('contenedor');
          contenedor.appendChild(contenedorData);
          const lim = document.createElement('a');
          lim.setAttribute('href', 'estgeneral.html');
          let titulo_text= document.createTextNode(element.id);
          lim.appendChild(titulo_text);
          contenedorData.appendChild(lim);
      })
    })
  }
}

function computeUsersStats () {
  const btnlista = document.getElementById('btnlista');
  const container = document.getElementById('root');
  const usersJSON = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';

  fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
  })

  const renderUsers = data => {
    btnlista.addEventListener('click', () => {
      const render = data.forEach(element => {
      //element.name === arreglo[i].name
      return container.innerHTML += `<a><p>${element.name}</p></a>`
      })
      return render;
      console.log(render);
    })
  }
}

function searchStudent() {
  //input vacio desde el que lo saco
  const buscar = document.getElementById('buscar').value;
  const filtro = window.filterUsers(usersData, search);
  const table = document.getElementById('search-a');
 
  renderUserTable(usersFiltered);
}