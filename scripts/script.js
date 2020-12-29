const Store = window.sessionStorage;
if (Store.getItem('page')) {
  page(Store.getItem('page'));
}

function openNav() {
  navbutton = document.getElementById('navbutton');
  nav = document.getElementById('nav');
  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    navbutton.classList.remove('active');
    navbutton.classList.remove('fa-chevron-left');
    navbutton.classList.add('fa-bars');
  } else {
    nav.classList.add('active');
    navbutton.classList.add('active');
    navbutton.classList.add('fa-chevron-left');
    navbutton.classList.remove('fa-bars');
  }
}

function page(id) {
  Store.setItem('page', id);
  for (const e of document.getElementsByClassName('page')) {
    e.classList.remove('active');
  }
  document.getElementById(id).classList.add('active');

  for (const e of document.getElementsByClassName('nav-link')) {
    e.classList.remove('active');
  }
  document.getElementById(`linkto:${id}`).classList.add('active');

  if (nav.classList.contains('active')) openNav();
}