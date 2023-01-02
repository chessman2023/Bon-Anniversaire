$(document).ready(function () {
   $('#b2, #b3, #b4, iframe, img').hide();
})
$(document).ready(function () {
   $('#b1').click(function () {
         $('#b2').show();
      })
})
$(document).ready(function () {
   $('#b2').click(function () {
         $('#b3').show();
      })
})
$(document).ready(function () {
   $('#b3').click(function () {
         $('#b4').show();
      })
})
$(document).ready(function () {
   $('#b4').click(function () {
         $('iframe, img').show();
      })
})