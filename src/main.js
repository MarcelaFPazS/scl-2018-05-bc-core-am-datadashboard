//Para login con alert

let go = () => { //solo funciona con este nombre y contraseña
  if (document.form.password.value ==='laboratoria' && document.form.login.value ==='Valentina'){ 
          window.open('menu.html') //abre página index si se pone correcto

      } 
      else{ 
           alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
      } 
  } 




//variables globales
let users = [];

//funciones
window.onload = () => {
  dataJSON();
  computeUsersStats();
  searchStudent();
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

//data lim-2018-03-pre-core-pw
function computeUsersStats() {
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
      let ranking = 0;
      //element.name === arreglo[i].name
      users = data;
      console.log(users);
      return container.innerHTML += '<tr>' +
      '<td>' + ranking + '</td>' +
      '<td>' + user.name.toUpperCase() + '</td>' +
      '<td>' + percent + '</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '<td>' + +'</td>' +
      '</tr>';
      })
      return render;
      //console.log(render);
    })
  }
}

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

//filtrar lista alumnas
function searchStudent() {
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
}

