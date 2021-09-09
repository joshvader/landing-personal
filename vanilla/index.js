let date = document.getElementById('date');
date.innerText = `Fecha de hoy: ${new Date().toLocaleDateString()}`;

$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );