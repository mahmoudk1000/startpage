window.onload = displayClock();
function displayClock() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Set to true to use a 12 hour date format
  var format_12hour = true;

  var d = new Date();
  var mm = monthNames[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ("0" + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ampm = "";
  var yy = d.getFullYear();

  if (format_12hour) {
    ampm = hh >= 12 ? " PM" : " AM";
    hh = hh % 12;
    hh = hh ? hh : 12; //show mod 0 as 12
  }

  document.getElementById("hour").innerText = hh;
  document.getElementById("separator").innerHTML = " : ";
  document.getElementById("minutes").innerText = min + ampm;

  document.getElementById("day").innerText = dd;
  document.getElementById("month").innerText = mm;
  document.getElementById("year").innerText = yy;

  setTimeout(displayClock, 1000);
}
