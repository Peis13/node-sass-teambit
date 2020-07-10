$(document).ready(
  function() {

    ////////// BURGER MENU
    // Al click dell'icona burger menù, mostra il menù navigazione
    // e cambia l'icona con '#chiudi-menu'
    $('#burger-menu').click(
      function() {
        $(this).hide();
        $('#chiudi-menu').show();
        $('.navigation .menu').slideDown();
      }
    );

    // Al click dell'icona chiudi menù, nascondi il menù navigazione
    // e cambia l'icona con '#burger-menu'
    $('#chiudi-menu').click(
      function() {
        $(this).hide();
        $('#burger-menu').show();
        $('.navigation .menu').slideUp(200);
      }
    );

    ////////// DROPDOWN
    // Se al click di un elemento del menù navigazione il menù a tendina è visibile, nascondilo
    // altrimenti mostra il menù a tendina e nascondi tutti gli altri
    $('.navigation .menu > li').click(
      function() {
        var dropdown = $(this).children('.dropdown');
        var altreDropdown = $(this).siblings().children('.dropdown');

        if (dropdown.attr('style') == 'display: block;') {
          dropdown.slideUp(200);
        } else {
          altreDropdown.slideUp(200, function() {
            dropdown.slideDown();
          });
        }
      }
    );


  }
);
