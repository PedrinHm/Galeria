// Inicia a variável que controla o slide atual
let slideIndex = 1; 
// Chama a função para mostrar o slide assim que a página carrega
mostrarSlide(slideIndex); 

// Função para avançar ou voltar os slides
function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
}

// Função principal que exibe o slide correto
function mostrarSlide(n) {
    let i;
    // Pega todos os elementos com a classe "meu-slide" (nossas imagens)
    let slides = document.getElementsByClassName("meu-slide"); 
    
    // Se o índice for maior que o número de slides, volta para o primeiro
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Se o índice for menor que 1, vai para o último slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Loop para esconder TODOS os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // CORREÇÃO FINAL ESTÁ AQUI:
    // Alteramos "block" para "flex" para que a regra de centralização do CSS seja aplicada.
    slides[slideIndex - 1].style.display = "flex";
}