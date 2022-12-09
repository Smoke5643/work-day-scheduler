$(function blockColor() {
  // Named variable from dayjs to use in function
  var currentHour = dayjs().hour();
  // Listening for click on the save button to save info to local storage
  $('.saveBtn').click(function() {
    var textInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, textInput);
   
  });
// Looping a function to check current time again the time listed for each time block
// to change color throughout the workday
  $('.description').each(function() {
    
    var divTime = parseInt($(this).parent().attr('id'));
    if (divTime < currentHour){
      $(this).addClass('past');
    }else if(divTime == currentHour){
      $(this).addClass('present');
    } else{
      $(this).addClass('future');
    }
// Getting items from local storage and reinserting on page refresh
    var textArea = localStorage.getItem($(this).parent().attr('id'));
    
    $(this).val(textArea)
   
  });

// Set the day and date in the header
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D YYYY'));
});
