// for loop hour 9-17

$(function blockColor() {
 
  var saveButton = $('.saveBtn');
  var currentHour = dayjs().hour();
 
  $('.description').each(function() {
    
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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
