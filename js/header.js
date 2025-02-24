window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {  // Quando a rolagem for maior que 0
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });