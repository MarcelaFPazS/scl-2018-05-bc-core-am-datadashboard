
window.computeUsersStats=(users, progress, courses) =>{ 
};

window.sortUsers = (users, orderBy, orderDirection) => {
};

window.filterUsers = (users, search) => {
  var nuevoUsuario = [];
  return users.filter((element) => {    
    return element.name.toLowerCase().indexOf(search.toLowerCase()) >= 0;
  });
  return nuevoUsuario;
};

window.processCohortData = (options) => {
  
};
