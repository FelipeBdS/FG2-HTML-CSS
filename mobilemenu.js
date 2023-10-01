document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menuOverlay = document.getElementById('menu-overlay');

    // Função para abrir o menu móvel
    function openMobileMenu() {
        menuOverlay.style.display = 'flex';
    }

    // Função para fechar o menu móvel
    function closeMobileMenu() {
        menuOverlay.style.display = 'none';
    }

    // Event listener para abrir o menu móvel ao clicar no ícone de menu
    menuIcon.addEventListener('click', openMobileMenu);

    // Event listener para fechar o menu móvel ao clicar no botão "X"
    const closeMenuButton = document.getElementById('close-menu');
    closeMenuButton.addEventListener('click', closeMobileMenu);
});

// Selecionar elementos relevantes
const toggleButton = document.getElementById('toggle-dropdown');
const brandOptions = document.getElementById('brand-options');

// Adicionar um ouvinte de evento de clique ao botão
toggleButton.addEventListener('click', () => {
    // Alternar a classe 'hidden' nas opções da marca para mostrar ou ocultar o dropdown
    brandOptions.classList.toggle('hidden');
});

// Ouvinte de evento de redimensionamento para fechar o dropdown quando a tela for maior que 768px
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        brandOptions.classList.add('hidden');
    }
});

// Fechar o dropdown quando um item da marca for clicado
const brandLinks = brandOptions.querySelectorAll('a');
brandLinks.forEach(link => {
    link.addEventListener('click', () => {
        brandOptions.classList.add('hidden');
    });
});

