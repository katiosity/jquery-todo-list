$(document).ready(function() {

	$('ul').sortable();


  	// prevent default page refresh when form area clicked
 	$('#form-area').on('submit', function(event) {
  		event.preventDefault();

      $('#no-text-alert').html('');

  		var $listItem = $('#form-area input').val();
  		// var $dueDate = $('#due-date').val();

  		// append new list item to list area, but only if text exists
  		if ($('#form-area input').val() != '') {

  			$('#list-tasks').append('<li>' + '<input type ="checkbox">' + ' ' + $listItem + '</li>');
  		} else {
  			$('#no-text-alert').html('Task required!');
  		};

  		// clear input text area once new list item added
  		$('#form-area input').val('');

  		// delete to do item when checkbox is clicked
  		$("input:checkbox").click(function() {
  			var $this = $(this);
  			if (this.checked) {
  				$this.parent().remove();
  			}

  			});

  		// local storage
  		





	});

});



