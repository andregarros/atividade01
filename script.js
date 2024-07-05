let slideIndex = 1;//criação de uma variavel
showSlides(slideIndex);//criação da função

function plusSlides(n) {//a função plusSlides é responsavel pelo click
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;//variavel
    let slides = document.getElementsByClassName("mySlides");//puxando a classe do html
    let pontos = document.getElementsByClassName("ponto");//puxando a classe do html

    if (n > slides.length) { //se a variavel n for maior que o numero que contem no slide, ele vai ser = 1
        slideIndex = 1 
    }
    
    if (n < 1) { //se a variavel n for menor que 1, ele vai exibir a quantidade que contem o slide
        slideIndex = slides.length 
    }
    
    for (i = 0; i < slides.length; i++) {//se a variavel i for igual a 0, e a variavel i for menor que a quantidade que possui no slide, ele vai adicioar +1
        slides[i].style.display = "none";//se o 
    }
    
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    pontos[slideIndex - 1].className += " active";
}