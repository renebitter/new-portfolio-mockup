window.onscroll = function () {
  fixNavbar();
};
const navbar = document.getElementById('navbar');

function fixNavbar() {
  if (window.pageYOffset >= 400) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
