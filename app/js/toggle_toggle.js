const toggle = document.querySelector('.toggle');
const toggleDot = document.querySelector('.toggle__dot');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('toggle--active');
  toggleDot.classList.toggle('toggle__dot--active');
})