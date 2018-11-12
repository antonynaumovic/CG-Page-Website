$('#view-work').on('click', function() {
    const images = $('#images').position().top;
  
    $('html, body').animate(
      {
        scrollTop: images
      },
      900
    );
  });

  $('#to-top').on('click', function() {
    const i = $('#top').position().top;
  
    $('html, body').animate(
      {
        scrollTop: i
      },
      900
    );
  });