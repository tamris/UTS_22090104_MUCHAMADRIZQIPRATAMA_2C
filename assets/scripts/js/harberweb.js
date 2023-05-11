$(document).ready(function(){
    $("#btnsearch").click(function(e){
        $.ajax({
            type: "POST",
            url: "./assets/scripts/ajax/getcurl.php",
            data: "",
            success: (response) => {
                $("#infoinvaccr").html(`<br/>Response<br/> ${response}`);
            }
        });
    });
});w