<?php
function page_language()
{
    global $page_var;
    echo $page_var['page_language'];
}

function page_name()
{
    global $page_var;
    echo $page_var['page_name'];
}

//Menu creation
function menu()
{

    echo    '<div id="social-div-pc" class="flex-center">

                <ul>';
    //Home
    echo       '<li class="menuBtn"><a href="index.php"><img src ="src/svg/Home.svg" alt="Home"/><p>Home</p></a></li>';
    social_links();
    btn_language("translatorPTpc","translatorENpc");

    echo        '</ul>
            </div>';

    

    //menu mobile
    echo    '<div id="social-div-mobile" class="flex-center menu-mobile" onclick="mobileMenu()">
                <div id="divMobile">

                <ul>';

    //Home
    echo       '<li class="menuBtn"><a href="index.php"><img src ="src/svg/Home.svg" alt="Home"/><p>Home</p></a></li>';

    //social links
    social_links();
    btn_language("translatorPTmob","translatorENmob");

    echo    '</ul>
            </div>
        </div>';
}

function social_links(){
global $menuJson;
$menuItem = $menuJson->menu;
foreach ($menuItem as $el) {
    echo       '<li class="menuBtn"><a target="_blank" href=', $el->link, '>
                    <img src = ', $el->svgIcon, ' alt=', $el->altText, '/>
                    <p>', $el->text, '</p>
                </a></li>';
}
}

function btn_language($idPT, $idEN)
{
    echo       '<li class="menuBtn" >
                    <form method="post">
                        <button id="',$idPT,'" type="submit" name="languagePT" value="languageEN"><img  src = "src/svg/language.svg" alt="Choose a language"/><p>Tranduzir</p></button>
                        <button id="',$idEN,'" type="submit" name="languageEN" value="languageEN"><img  src = "src/svg/language.svg" alt="Choose a language"/><p>Translate</p></button>
                    </form>
                </li>
            ';
}

//change language
if (isset($_POST['languagePT'])) {
    global $page_var;
    $page_var['page_language'] = 'pt-BR';
}
if (isset($_POST['languageEN'])) {
    global $page_var;
    $page_var['page_language'] = 'en';
}


function games_list()
{
    global $gamesJson;
    $game = $gamesJson->games;
    global $page_var;



    echo    '<h4 id="game_list">' . ($page_var['page_language'] == 'pt-BR' ? 'Lista de jogos' : 'Games list') . '</h4><ul class="links">';

    foreach ($game as $el) {
        echo   '<li><a href="game-page.php?game=' . $el->name . '"
        >' . $el->name . '</a></li>';
    }
    echo    '</ul>';
}

function start_game()
{
    global $page_var;

    echo '
    <div id="start" class="flex-center">
    <button class="btn">';
    echo $page_var['page_language'] == 'pt-BR' ? 'Começar o jogo' : 'Start game';

    echo '</button>
  </div>';
}


function info_content()
{
    global $page_var;
    $page_var['page_language'] == 'pt-BR' ? $language = 'pt-BR' : $language = 'en';
    require 'language/' . $language . '/' . 'info-pingpong.php';
}
