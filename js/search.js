const f = document.getElementById("form");
const q = document.getElementById("query");
const search = "https://duckduckgo.com/?t=ffab&q=";

function submitted(event) {
  event.preventDefault();
  const url = search + q.value + "&ia=web";
  window.open(url, "_self");
}

f.addEventListener("submit", submitted);