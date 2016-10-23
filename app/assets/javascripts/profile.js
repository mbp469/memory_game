(function() {
    "use strict";
    $(document).ready(function() {

/* EVENT LISTENERS FOR USER PAGE */

  /* When #goto-scores is clicked, hide #user-table, show #score-table...
  change #goto-scores text to 'See User Details' */

  $('#goto-scores').on('click', function(event){
    var button = $(this);
    if(button.hasClass('view-scores'))
    {
      $('#goto-scores').text('See User Details').toggleClass('view-scores');
    } else {
      button.addClass('view-scores');
    }
    $('#user-table').toggleClass('hidden');
    $('#score-table').toggleClass('hidden');

  });

  /* When #user-details-edit is clicked, .input-user-info becomes readonly:false */
  $('#user-details-edit').on('click',function(event){
    console.log('user-details-edit');
    var button = $(this);
    if(button.hasClass('hidden')) {
      $('')
    }
    if()

  });

  /* When #user-details-submit is clicked, send updated info to backend. */
  $('#user-details-submit').on('click', function(event){
    console.log('user-details-submit');
  })

}); //end of $(document).ready function
})(); //end of anonymous function
