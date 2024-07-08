let slideIndex = 1;//criação de uma variavel
showSlides(slideIndex);//criação da função

function plusSlides(n) {//a função plusSlides é responsavel por ir pro proximo ou anterior
    showSlides(slideIndex += n);
}


function currentSlide(n) { //responsavel por exbir o numero so slide
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;//variavel index
    let slides = document.getElementsByClassName("mySlides");//puxando a classe do html
    let pontos = document.getElementsByClassName("ponto");//puxando a classe do html

    if (n > slides.length) { //se a variavel n, for maior que a quantidade de slide, o index do slide recebe 1
        slideIndex = 1 
    }
    
    if (n < 1) { //se a variavel n for menor que 1, o index de slide vai receber a quantidade de slide atual
        slideIndex = slides.length 
    }
    
    for (i = 0; i < slides.length; i++) {//se a variavel i for igual a 0, e a variavel i for menor que a quantidade de slide, e adicioar +1 a variavel i
        slides[i].style.display = "none"; //desabilita o display do slide que esta na posição i
    }
    
    for (i = 0; i < pontos.length; i++) {//se a variavel i for igual a 0, e a variavel i for menor que a quantidade de pontos, e adicioar +1 a variavel i
        pontos[i].className = pontos[i].className.replace(" active", "");//ele pega o ponto que esta na posicão i, e realça
    }
    
    slides[slideIndex - 1].style.display = "block"//ele exibe o slide
    
    pontos[slideIndex - 1].className += " active";//ele ativa as bolinhas
}


//Lógica do Slideshow usa funções para mostrar um slide de cada vez e atualizar os pontos de navegação (como bolinhas que indicam o slide atual). Há uma função que controla quais slides são visíveis. Apenas um slide aparece de cada vez. Outra função muda a aparência dos pontos de navegação para mostrar qual slide está sendo exibido. O JavaScript escuta cliques nos botões e pontos de navegação. Dependendo do clique, ele avança ou volta pelos slides ou mostra o primeiro slide. Essas funções e eventos garantem que o usuário possa navegar pelos slides de maneira fácil e intuitiva.


