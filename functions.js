socialDiv = document.querySelector('#social-div-mobile');

function showHide(el){
    display = document.querySelector(el);
    display.style.display === 'block'? display.style.display = 'none' : display.style.display = 'block';
}

function mobileMenu(){
    socialDiv.style.display === 'flex'? socialDiv.style.display = 'none' : socialDiv.style.display = 'flex';
}