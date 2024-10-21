
// Seleciona o botão
const backToTopButton = document.getElementById('back-to-top');

// Adiciona um evento para mostrar o botão ao rolar a página
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {  // Exibe o botão após 300px de rolagem
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

// Adiciona o evento de clique para rolar ao topo
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'  // Rolagem suave
  });
});