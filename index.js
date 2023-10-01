// Seletor para o formulário
const form = document.querySelector('form');

// Seletor para a div de sucesso
const successMessage = document.getElementById('success-message');

// Evento para lidar com o envio do formulário
form.addEventListener('submit', function (event) {
    // Impede o envio padrão do formulário para evitar o carregamento da página
    event.preventDefault();

    // Simula um envio bem-sucedido (você pode substituir isso com a lógica real de validação)
    const isFormValid = true;

    if (isFormValid) {
        // Mostra a mensagem de sucesso
        successMessage.style.display = 'block';

        // Opcional: Oculta o formulário após o envio
        form.style.display = 'none';
    }
});


