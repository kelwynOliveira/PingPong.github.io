<script>
//Page title
document.querySelector('#title').innerHTML = document.title;

//Show and hide item 
function showHide(el) {
    let displayForm = document.querySelector(el).style.display;
    if(displayForm == "block"){
        document.querySelector(el).style.display = 'none';
    }
    else{
        document.querySelector(el).style.display = 'block';
    }
}
</script>

