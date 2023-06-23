<?php 
$page_var = array(  "page_name"=>$_GET['game'], 
                    "page_language" => "pt-BR");

if ($page_var["page_name"] == null){
  header('Location: index.php');
  die();
}

require "header.php"; ?>

<main>
  <div id="gameDiv">
    <canvas></canvas>
  </div>

  <div id="infos" >

    <?php start_game(); ?>
    
    <?php info_content(); ?>

  </div>
</main>
<?php 
require "footer.php"; 
