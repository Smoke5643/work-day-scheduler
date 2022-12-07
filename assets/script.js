// for loop hour 9-17
// determine past grey present red future green

var saveButton = $('.saveBtn');

$(function blockColor() {
 
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
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});
