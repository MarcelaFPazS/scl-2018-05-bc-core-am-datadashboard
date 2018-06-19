const btn = document.getElementById('btnlog');


function entrar() {
  if (document.form.email.value === 'valentina@laboratoria.cl' && document.form.contraseña.value === 'laboratoria') {
    btn.addEventListener('click', () => {
      document.getElementById('inlineFormInputGroupUsername2')[0].classList.add('btnlog');
      document.getElementsByClassName('afterEntering')[0].classList.remove('afterEntering');
    }
    );
  } else {
    document.getElementById('errorPassword').innerHTML = 'Datos invalidos, favor verificar correo electrónico y contraseña';
  }
}