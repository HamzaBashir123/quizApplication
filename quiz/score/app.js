const selectedValue = JSON.parse(localStorage.getItem("Score"));
console.log(selectedValue);
const progressValue= document.querySelector(".progress")
const goToHomePage= document.querySelector(".goToHomePage")
const passFail= document.querySelector(".passFail")

goToHomePage.addEventListener('click',homePageHandler)

function homePageHandler(){
    window.location.href = "../quizSelect.html"
}

if(selectedValue > 70){
    passFail.innerHTML = 'Passed'
    passFail.style.color = 'rgb(42, 133, 42)'
}
else{
    passFail.innerHTML = 'Failed'
    passFail.style.color = 'red'
}
progressValue.setAttribute('data-progress', selectedValue)
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]);
  }
};
window.onload = function () {
  var max = -219.99078369140625;
  forEach(document.querySelectorAll(".progress"), function (index, value) {
    percent = value.getAttribute("data-progress");
    value
      .querySelector(".fill")
      .setAttribute(
        "style",
        "stroke-dashoffset: " + ((100 - percent) / 100) * max
      );
    value.querySelector(".value").innerHTML = percent + "%";
  });
};
