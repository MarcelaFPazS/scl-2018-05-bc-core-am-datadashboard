window.onload = () => {
  dataJSON ();
}

function dataJSON () {
  const btn = document.getElementById('btncont');
  const usersJSON = '../data/cohorts.json';

  fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    renderUsers(data);
})
const renderUsers = data => {
  btn.addEventListener('click', () => {
    const render = data.forEach(element => {
      const contenedorData = document.createElement('div');
      const contenedor = document.getElementById('contenedor');
      contenedor.appendChild(contenedorData);
      //crear un a que sea padre de titulo text
      const lim = document.createElement('a');
      contenedorData.appendChild(lim);
      //agregarle atributo href
      lim.setAttribute('href', 'estgeneral.html');
      //indicarle a donde quieren enlazar
      

      let titulo_text= document.createTextNode(element.id);
      lim.appendChild(titulo_text);
    })
    return contenedorData;
  })
}

}
