const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menuLinks = document.querySelectorAll('#menu a');

menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link (scroll para a seção)

    const nav = document.getElementById('nav');
    const menu = document.getElementById('menu');

    
    menu.style.transition = 'height 0.6s ease-in-out, visibility 0.6s ease-in-out';
    menu.style.height = '0';  
    menu.style.visibility = 'hidden'; 

    
    setTimeout(function() {
      nav.classList.remove('active'); 
      menu.style.height = ''; 
      menu.style.visibility = ''; 
    }, 600); 
    
    setTimeout(function() {
      window.location.href = link.href; 
    }, 600); 
  });
});