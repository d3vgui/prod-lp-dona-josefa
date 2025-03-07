const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  const header = document.querySelector('header');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    header.style.backgroundColor = 'var(--black-bg)';
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    header.style.backgroundColor = 'transparent';
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const menu = document.getElementById('menu');

    
    if (window.innerWidth <= 735 && nav.classList.contains('active')) {
      event.preventDefault(); 

      
      menu.style.transition = 'height 0.4s ease-in-out, visibility 0.4s ease-in-out';
      menu.style.height = '0';
      menu.style.visibility = 'hidden';

      
      setTimeout(() => {
        nav.classList.remove('active');
        menu.style.height = '';
        menu.style.visibility = '';
      }, 400);

      
      setTimeout(() => {
        window.location.href = link.href;
      }, 400);
    }
  });
});