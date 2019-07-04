function formatDate(date) {
    function nth(d) {
        if (d > 3 && d < 21) return 'th'; 
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
    }

    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var dayNames = [
      "Sunday", "Monday", "Tuesday",
      "Wednesday", "Thursday", "Friday", "Saturday"      
    ];
  
    var dayIndex = date.getDay();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return dayNames[dayIndex] + ' ' + day + nth(day) + ' ' + monthNames[monthIndex] + ' ' + year;
}
  
var currentDate = document.getElementById("current-date");
currentDate.innerText = formatDate(new Date());

