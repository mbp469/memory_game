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
      button.addClass('view-scores').text('View Scores');

    }
    $('#user-table').toggleClass('hidden');
    $('#score-table').toggleClass('hidden');

  });

  /* When #user-details-edit is clicked, .input-user-info becomes readonly:false */
  $('#user-details-edit').on('click',function(event){
    console.log('user-details-edit');
    var button = $(this);
    var userObject = respondToEdit(button);
    console.log(userObject);
//TODO send userObject to backend to update records.
  });

      /* helper function called in the event listener for the edit user details button */
      function respondToEdit(button) {
        var userObject = {};
        if(button.hasClass('edit-user')) {
          $('.input-user-info').attr('readonly', false);
          $('#user-details-edit').text('Submit Changes');
          button.toggleClass('edit-user');
        } else {
          userObject.name = $('#user-name').val();
          userObject.email = $('#email').val();
          userObject.password = $('#password').val();
          $('.input-user-info').attr('readonly', true);
          $('#user-details-edit').text('Edit User');
          button.toggleClass('edit-user');
          return userObject;
        }
      }



}); //end of $(document).ready function
})(); //end of anonymous function
