//document.write("Hello World");
//console.log("It worked");
//alternative to DOMContentLoaded event
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
      initApplication();
    }
  }

var initApplication = function() {
  let el = document.getElementById("rightOrWrong");
console.log(el);

el.addEventListener("change", function() {
  console.log(el.checked);
});

}