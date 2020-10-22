$(document).ready(function() {
  $("#zoo").submit(function(event) {  
    event.preventDefault();
    let animals = $("input:radio[name=boo]:checked").val();
    if (animals === "dg") {
      $("#dogg").show();
      $("#crocc").hide();
      $("#catt").hide();
    } else if (animals === "ct") {
      $("#catt").show();
      $("#crocc").hide();
      $("#dogg").hide();
    } else {
      $("#crocc").show();
      $("#dogg").hide();
      $("#catt").hide();
    }
  });
});
