// for loop hour 9-17
// determine past grey present red future green



$(function blockColor() {
 
  var saveButton = $('.saveBtn');
  var currentHour = dayjs().subtract(5, 'hour').hour();
 
  $('.description').each(function() {
    // $(this).parent().removeClass('past present future');
    var divTime = parseInt($(this).parent().attr('id').replace("hour-", ""));
    if (divTime < currentHour){
      $(this).addClass('past');
    }else if(divTime == currentHour){
      $(this).addClass('present');
    } else{
      $(this).addClass('future');
    }

  });

  $(saveButton).click(function() {
    var textInput = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(textInput, time);
   
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
