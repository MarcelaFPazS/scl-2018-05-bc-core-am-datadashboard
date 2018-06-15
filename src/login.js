function entrar() {
  if (document.form.email.value === 'valentina@laboratoria.cl' && document.form.password.value === 'laboratoria') {
    const btnhide = document.getElementById('buttonlogin');
    btnhide.addEventListener('click', () => {
      document.getElementsByClassName('ingresar')[0].classList.add('buttonlogin');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
    document.getElementById('errorPassword').innerHTML = '¡Datos inválidos! Vuelve a intentarlo.';
  }
}