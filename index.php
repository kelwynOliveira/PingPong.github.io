<?php

header("location: home.php");

$page_var = array(  "page_name"=>"Games", 
                    "page_language" => "pt-BR");
// verificar a linguagem, se for qualquer outra diferente de pt-br mudar abrir home em inglês.

require "header.php"; ?>

  <main>

  <!-- lista de jogos -->
  <?php games_list(); ?>

  </main> 

<?php require "footer.php"; ?>

