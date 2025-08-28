// Função para validar o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contato');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação simples
            if (nome === '' || email === '' || mensagem === '') {
                alert('Por favor, preencha todos os campos!');
                event.preventDefault();
            } else {
                alert('Mensagem enviada com sucesso!');
            }
        });
    }
});

// Função para calcular o orçamento mensal
function calcularOrcamento() {
    const receita = parseFloat(document.getElementById('receita').value);
    const despesas = parseFloat(document.getElementById('despesas').value);
    
    if (!isNaN(receita) && !isNaN(despesas)) {
        const saldo = receita - despesas;
        document.getElementById('resultado').innerText = `Seu saldo mensal é: R$ ${saldo.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
    }
}

// Função de animação ao rolar a página
document.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.animar');
    elementos.forEach(function(elemento) {
        const posicao = elemento.getBoundingClientRect().top;
        const tamanhoTela = window.innerHeight;

        // Se o elemento está visível na tela
        if (posicao < tamanhoTela * 0.8) {
            elemento.classList.add('visivel');
        }
    });
});

// Função para abrir/fec
