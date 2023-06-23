<?php 
$page_var = array(  "page_name"=>"Games", 
                    "page_language" => "pt-BR");

require "header.php"; ?>

<main>

<!-- lista de jogos -->
<?php games_list(); ?>
    
</main>


<?php require "footer.php"; 

