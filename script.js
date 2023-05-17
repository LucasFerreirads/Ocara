function isMobile() {
    return window.innerWidth < 769;
}
function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuToggle = document.getElementById('menu-toggle');
    
    if (isMobile()) {
      menu.style.display = menuToggle.checked ? 'block' : 'none';
    } else {
      menu.style.display = 'flex';
    }
  }
  
  // Chama a função toggleMenu ao carregar a página e redimensionar a tela
window.addEventListener('DOMContentLoaded', toggleMenu);
window.addEventListener('resize', toggleMenu);