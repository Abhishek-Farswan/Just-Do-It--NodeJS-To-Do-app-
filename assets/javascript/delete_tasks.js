//Javascript for Delete button in Homepage

const button = document.getElementById('head-deleteTask-button');

// //Adding event listener to Delete button
button.addEventListener('click', function() {
  
    //Fetching all checkboxes checked in list to be deleted
    var checkboxes = document.getElementsByName('tasks');
    var lists = document.getElementsByClassName('task-items');
    var ids = [];
    for (var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked)
        ids.push(checkboxes[i].value);
    }

    var items = $('.task-items').find('input:checked');
    items.closest('li').remove();

    const response = '/delete-task/' + ids;
    fetch(response, {method: 'GET'})
      .catch(function(error) {
        console.log(error);
      });
  });
