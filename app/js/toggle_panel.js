window.addEventListener('DOMContentLoaded', () => {
  const welcomePanel = document.querySelector('.header__panel--welcome');
  const loginPanel = document.querySelector('.header__panel--login');
  const registerPanel = document.querySelector('.header__panel--register');
  const loginBtns = document.querySelectorAll('.login-btn');
  const registerBtns = document.querySelectorAll('.register-btn');
  const backToWelcomePanelBtns = document.querySelectorAll('.welcome-btn');

  const showWelcomePanel = () => {
    welcomePanel.classList.remove('none');
    loginPanel.classList.add('none');
    registerPanel.classList.add('none');
  }

  const showLoginPanel = () => {
    welcomePanel.classList.add('none');
    loginPanel.classList.remove('none');
    registerPanel.classList.add('none');
  }

  const showRegisterPanel = () => {
    welcomePanel.classList.add('none');
    loginPanel.classList.add('none');
    registerPanel.classList.remove('none');
  }

  [...registerBtns].map(btn => {
    btn.addEventListener('click', () => {
      showRegisterPanel();
    })
  });

  [...loginBtns].map(btn => {
    btn.addEventListener('click', () => {
      showLoginPanel();
    })
  });

  [...backToWelcomePanelBtns].map(btn => {
    btn.addEventListener('click', () => {
      showWelcomePanel();
    })
  });
});