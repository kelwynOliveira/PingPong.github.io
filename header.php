<?php require_once 'init.php'; ?>

<!DOCTYPE html>
<html lang=<?php page_language(); ?>>
  <head>
    <meta charset="utf-8" />
    <title><?php page_name(); ?></title>

    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body class="flex-center">
    
<!-- Top Navigation Menu -->
    <div class="container"> <!-- start container for header and main -->
        <header class="design">
          <a href="javascript:void(0);" id="hamburguer_menu" onclick="mobileMenu()">
            <img src ="src/svg/menu.svg" alt="Menu"/>
          </a>

          <h1 id="title"><a href="index.php"><?php page_name(); ?></a></h1>
          
          <?php menu(); ?>
        </header>