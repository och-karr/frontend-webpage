window.addEventListener('DOMContentLoaded', () => {
  const showMenu = () => {
    const openMenuIcon = document.querySelector('.nav__icon--hamburger');
    const closeMenuIcon = document.querySelector('.nav__icon--close');
    const navList = document.querySelector('.nav__list');

    const closeMenu = () => {
      openMenuIcon.classList.remove("none");
      closeMenuIcon.classList.add("none");
      navList.classList.add("none");
    }

    const openMenu = () => {
      openMenuIcon.classList.add("none");
      closeMenuIcon.classList.remove("none");
      navList.classList.remove("none");
    }

    const checkWidthAndToggle = () => {
      let width = window.innerWidth;

      if (width < 575) {
        closeMenu();
      } else {
        navList.classList.remove("none");
      }
    }

    openMenuIcon.addEventListener("click", openMenu);
    closeMenuIcon.addEventListener("click", closeMenu);

    window.addEventListener('resize', function() {
      checkWidthAndToggle();
    });

    checkWidthAndToggle();
  };

  showMenu();
});