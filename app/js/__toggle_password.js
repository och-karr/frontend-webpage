window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('.input--password');
  const eye = document.querySelector('.header__eye');

  eye.addEventListener('click', () => {
    eye.classList.toggle('header__eye--active');
    
    if (input.getAttribute('type') === 'password') {
      input.setAttribute('type', 'text');
    } else {
      input.setAttribute('type', 'password');
    }
  })
});