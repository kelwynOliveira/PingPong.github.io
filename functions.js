let btnPTpc = document.querySelector('#translatorPTpc');
let btnENpc = document.querySelector('#translatorENpc');
let btnPTmob = document.querySelector('#translatorPTmob');
let btnENmob = document.querySelector('#translatorENmob');
socialDiv = document.querySelector('#social-div-mobile');



function showHide(el){
    display = document.querySelector(el);
    display.style.display === 'block'? display.style.display = 'none' : display.style.display = 'block';
}

function mobileMenu(){
    socialDiv.style.display === 'flex'? socialDiv.style.display = 'none' : socialDiv.style.display = 'flex';
}