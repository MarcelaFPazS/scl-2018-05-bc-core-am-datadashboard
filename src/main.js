let users = null;
let progress = null;
let cohorts = null; 
let usersStats = null;

//funciones
window.onload = () => {
  dataJSON();
  areWeFinishedYet()

}

fetch('https://fabianbravoa.github.io/2018-1-SolucionarioDatadashboard/data/cohorts/lim-2018-03-pre-core-pw/users.json')
  .then(response => response.json())
  .then(usersJSON => {
    users = usersJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener usuarios");
    //console.error indica un mensaje de error, indica una alerta grave
    console.error("ERROR > " + error.stack); //error.stack muestra donde falló el codigo, imprime donde esta el error
  });

  fetch('https://fabianbravoa.github.io/2018-1-SolucionarioDatadashboard/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(progressJSON => {
    progress = progressJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener el progreso");
    console.error("ERROR > " + error.stack);
  });

  fetch('https://fabianbravoa.github.io/2018-1-SolucionarioDatadashboard/data/cohorts.json')
  .then(response => response.json())
  .then(cohortsJSON => {
    cohorts = cohortsJSON;
    areWeFinishedYet();//se llama en todas las respuestas por que no sabemos cual llegara primero y asi nos aseguramos si se ejecutan
  })
  .catch(error => {
    console.error("No pudimos obtener el listado de cohorts");
    console.error("ERROR > " + error.stack);
  });


//Para login con alert
let go = () => { //solo funciona con este nombre y contraseña
  if (document.form.password.value ==='laboratoria' &&  document.form.login.value ==='Valentina'){ 
  window.open('menu.html') //abre página index si se pone correcto
  } 
  else{ 
    alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
  } 
}

  // data cohorts
function dataJSON() {
  const btnCohort = document.getElementById('btncont');
  const usersJSON = '../data/cohorts.json';
  fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    renderCohort(data);    
  })
  const renderCohort = data => {
    btnCohort.addEventListener('click', () => {
        const render = data.forEach(element => {
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


function areWeFinishedYet() { //¿hemos terminado?
  // se llama desde todas las promesas para que tome los tome en cuenta sin importar cual de ellos se ejecute primero
  //vemos si users progress y cohorts ya tienen datos en su interior sino no se ejecuta
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw'); //busca el cohort que tiene ese id ya que este es el unico cohort que esta en los json
    const courses = Object.keys(cohort.coursesIndex);
    // guardamos el resultado de llamar a la funcion en una variable global    
    usersStats = window.computeUsersStats(users, progress, courses);//recibe users, progress y el listado de los cursos del cohort
  }
}
//se declara la funcion para darle funcionalidad al boton toggler y que cambie al darle click
function onToggleSort() {
  const direction = toggleSort.innerText;
  if (direction == "ASC") {
    toggleSort.innerText = "DESC";
  } else {
    toggleSort.innerText = "ASC";
  }
  //llamamos a la funcion de ordenamiento para que que ordene los usuarios
  const sortedUsers = window.sortUsers(usersStats, "percent", direction);
  //no se hace el getElementById por que en JS todo lo declarado en el html con un id queda como variable global :O
  studentContainer.innerHTML = "";
  for(let student of sortedUsers){
    studentContainer.innerHTML += `
      <p>${student.name} ${student.stats.percent}</p>
    `;
  }
}

function onSearchBoxChange(){
  const search = searchBox.value;
  const filteredUsers = window.filterUsers(usersStats, search);
  studentContainer.innerHTML = "";
  filteredUsers.forEach(student => {
    studentContainer.innerHTML += `
      <p>${student.name}</p>
    `;
  });
}


/*


//data lim-2018-03-pre-core-pw
function computeUsersStats() {
  const btnlista = document.getElementById('btnlista');
  const containerRanking = document.getElementById('ranking');
  const containerName = document.getElementById('name');
  const containerPercent = document.getElementById('percent');
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
      let ranking = null;
      let percent = null;
      return containerName.innerHTML += `<p>${element.name}</p>`
      })
      return containerRanking.innerHTML += ranking
    })
  }
}
*/
/*
function loadAllData () {
// Concadena las url para enviar a la api 
  const url1 = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  const url2 = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
  const url3 = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
  const btnlista = document.getElementById('btnlista'); 
  const container = document.getElementById('root');

  Promise.all([   //Ejecuta todas las llamadas de manera paralela
    fetch(url1),
    fetch(url2),
    fetch(url3)
    ]).then(
      (responses)=>{   //Responde a todas las promesas
        return Promise.all(responses.map((response)=>{
          return response.json();
        }));
      }
    ).then((responseJsons)=>{ //Arreglo de respuestas en json
         responseJsons^*
         // 
         //
         console.log("holi");
    }).catch(
        (error)=>{ 
        }
    );
  
    btnlista.addEventListener('click', () => {
      const render = data.forEach(element => {
        //element.name === arreglo[i].name
        return container.innerHTML += `<li>${element.name}  ${element.percent} ${element}</li>`;
      });
    });

}
*/
/*
//filtrar lista alumnas
/*function searchStudent() {
  //input vacio desde el que lo saco
  const buscar = document.getElementById('buscar');
  //enlace con data.js
  const filtro = window.filterUsers(users, search);
  //donde quiero dejarlo en el html
  const table = document.getElementById('search-a');

  buscar.addEventListener ('keypress', (event) => {
    let key = event.wich || event.keyCode; //evento del teclado
    if (key === 13) { //codigo 13 es enter
      renderInfo(users);
    }
  })

  const renderInfo = users => {
    if(users.response === true){
      table.innerHTML = `<a><p>${element.name}</p></a>`;
    } else{
      return "busca nuevamente"
      }
  }
}*/


let users = null;
let progress = null;
let cohorts = null; //null == false => true
// null para que sea false siempre, llaves no, corchetes si.
let usersStats = null;

// se utiliza el link de git para no usar el server 
//el link es hacia una api de ususarios que esta online
fetch('https://github.com/MarcelaFPazS/scl-2018-05-bc-core-am-datadashboard/blob/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(usersJSON => {
    users = usersJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener usuarios");
    //console.error indica un mensaje de error, indica una alerta grave
    console.error("ERROR > " + error.stack); //error.stack muestra donde falló el codigo, imprime donde esta el error
  });
// se utiliza url relativa de gh pages.
fetch('https://github.com/MarcelaFPazS/scl-2018-05-bc-core-am-datadashboard/blob/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(progressJSON => {
    progress = progressJSON;
    areWeFinishedYet();
  })
  .catch(error => {
    console.error("No pudimos obtener el progreso");
    console.error("ERROR > " + error.stack);
  });

fetch('https://github.com/MarcelaFPazS/scl-2018-05-bc-core-am-datadashboard/blob/master/data/cohorts/lim-2018-03-pre-core-pw/progress.json')
  .then(response => response.json())
  .then(cohortsJSON => {
    cohorts = cohortsJSON;
    areWeFinishedYet();//se llama en todas las respuestas por que no sabemos cual llegara primero y asi nos aseguramos si se ejecutan
  })
  .catch(error => {
    console.error("No pudimos obtener el listado de cohorts");
    console.error("ERROR > " + error.stack);
  });

function areWeFinishedYet() { //¿hemos terminado?
  // se llama desde todas las promesas para que tome los tome en cuenta sin importar cual de ellos se ejecute primero
  //vemos si users progress y cohorts ya tienen datos en su interior sino no se ejecuta
  if (users && progress && cohorts) {
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw'); //busca el cohort que tiene ese id ya que este es el unico cohort que esta en los json
    const courses = Object.keys(cohort.coursesIndex);
    // guardamos el resultado de llamar a la funcion en una variable global    
    usersStats = window.computeUsersStats(users, progress, courses);//recibe users, progress y el listado de los cursos del cohort
  }
}
//se declara la funcion para darle funcionalidad al boton toggler y que cambie al darle click
function onToggleSort() {
  const direction = toggleSort.innerText;
  if (direction == "ASC") {
    toggleSort.innerText = "DESC";
  } else {
    toggleSort.innerText = "ASC";
  }
  //llamamos a la funcion de ordenamiento para que que ordene los usuarios
  const sortedUsers = window.sortUsers(usersStats, "percent", direction);
  //no se hace el getElementById por que en JS todo lo declarado en el html con un id queda como variable global :O
  studentContainer.innerHTML = "";
  for(let student of sortedUsers){
    studentContainer.innerHTML += `
      <p>${student.name} ${student.stats.percent}</p>
    `;
  }
}

