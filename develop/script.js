// calls for the current date and time from momentjs
// leave moment() undefined format() = some form of date documentation
var now = moment().format('LL');


// creates a text section in the currentDay div to display the current date and time
var currentDay = $("#currentDay");
$(currentDay).text(now);

var times = ["9am  ", "10am", "11am", "12pm", "1pm  ", "2pm  ", "3pm  ", "4pm  ", "5pm  "];
var timeBlocks = $(".container");

$.each(times, function(i, time) {
    timeBlocks.append("<div class='hour row'>" + time + "<textarea></textarea>" + "<button class='saveBtn'></button>"+ "</div>");
});




// if (timeBlock) {
  
// };
// else if (index > hoursPast) {
//     timeBlocks.addClass("")
// }; 


