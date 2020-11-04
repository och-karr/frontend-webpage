function showMenu() {

  const openMenuIcon = document.querySelector('.nav__icon--hamburger');
  const closeMenuIcon = document.querySelector('.nav__icon--close');
  const navList = document.querySelector('.nav__list');

  function closeMenu() {
    openMenuIcon.classList.remove("none");
    closeMenuIcon.classList.add("none");
    navList.classList.add("none");
  }

  function openMenu() {
    openMenuIcon.classList.add("none");
    closeMenuIcon.classList.remove("none");
    navList.classList.remove("none");
  }

  openMenuIcon.addEventListener("click", openMenu);
  closeMenuIcon.addEventListener("click", closeMenu);

  window.addEventListener('resize', function() {

      let width = window.innerWidth;

      if (width < 575) {
          closeMenu();
      }
  });

} showMenu();