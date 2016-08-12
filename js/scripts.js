$(document).ready(function() {
  $("#survey form").submit(function(event) {
    var nameInput = $("input#name").val();
    var endtypeInput = $("input:radio[name=end-type]:checked").val();
    var focusInput = $("#focus").val();

    $(".name").text(nameInput);

    if (endtypeInput==="yes") {
      $(".track").text("CSS/Design");
    } else if ((endtypeInput==="no")&&(focusInput==="java")) {
      $(".track").text("Java/Android");
    } else if ((endtypeInput==="no")&&(focusInput==="ruby")) {
      $(".track").text("Ruby/Rails");
    } else if ((endtypeInput==="no")&&(focusInput==="software")) {
      $(".track").text("C#/.NET");
    } else if ((endtypeInput==="no")&&(focusInput="php")) {
      $(".track").text("PHP/Drupal");
    } else {
      console.log("something");
    }

    $("#result").show();
    event.preventDefault();
  });

  $("#reset").click(function(event) {
    $("#result").hide();
  });

});
