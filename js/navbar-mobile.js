function navMenu() {
  const navMenu = document.getElementById('navMenu');
  if (navMenu.className === 'nav-menu') {
    navMenu.className += ' responsive';
  } else {
    navMenu.className = 'nav-menu';
  }
}
