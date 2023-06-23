langHTML = document.querySelector('html').lang;
let btnPTpc = document.querySelector('#translatorPTpc');
let btnENpc = document.querySelector('#translatorENpc');
let btnPTmob = document.querySelector('#translatorPTmob');
let btnENmob = document.querySelector('#translatorENmob');
socialDiv = document.querySelector('#social-div-mobile');

if (langHTML == 'pt-BR'){
    btnPTpc.style.display = 'none';
    btnENpc.style.display = 'inline-flex';
    
    btnPTmob.style.display = 'none';
    btnENmob.style.display = 'inline-flex';
} else {
    btnPTpc.style.display = 'inline-flex';
    btnENpc.style.display = 'none';
    
    btnPTmob.style.display = 'inline-flex';
    btnENmob.style.display = 'none';
}


function showHide(el){
    display = document.querySelector(el);
    display.style.display === 'block'? display.style.display = 'none' : display.style.display = 'block';
}

function pageLanguage(language){
    document.querySelector('html').lang = language;  
}

function mobileMenu(){
    socialDiv.style.display === 'flex'? socialDiv.style.display = 'none' : socialDiv.style.display = 'flex';
}