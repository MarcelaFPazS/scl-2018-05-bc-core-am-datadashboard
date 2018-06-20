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
      //element.name === arreglo[i].name
      return container.innerHTML += `<p>${element.name}</p>`
    })
    return render;
  })
}

}
