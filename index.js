var html = document.getElementById("html");
var css = document.getElementById("css");
var bootstrap = document.getElementById("bootstrap");
var javascript = document.getElementById("javascript");
var react = document.getElementById("react");

let x = 1;
setInterval(fun, 10);
function fun() {
  if (x < 100) {
    x++;
    html.style.width = x + "%";
    html.innerText = x + "%";
  }
  if (x <= 80) {
    css.style.width = x + "%";
    css.innerText = x + "%";
  }
  if (x <= 85) {
    bootstrap.style.width = x + "%";
    bootstrap.innerText = x + "%";
  }
  if (x <= 75) {
    javascript.style.width = x + "%";
    javascript.innerText = x + "%";
  }
  if (x <= 70) {
    react.style.width = x + "%";
    react.innerText = x + "%";
  }
}
