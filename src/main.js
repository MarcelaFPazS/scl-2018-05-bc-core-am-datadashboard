window.onload = () => {
  dataJSON ();
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
      const limaCohort = data[31].id;
        const render = data.forEach(element => {
          console.log(limaCohort);
          const contenedorData = document.createElement('li');
          const contenedor = document.getElementById('contenedor');
          contenedor.appendChild(contenedorData);
          const lim = document.createElement('a');
          let titulo_text= document.createTextNode(element.id);
          contenedorData.appendChild(titulo_text);



      })
      if (limaCohort === data[31].id) {
        lim.appendChild(limaCohort);
        lim.setAttribute('href', 'estgeneral.html');
      }
    })

  }

}

