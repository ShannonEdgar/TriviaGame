 
$(document).ready(function() {
var correctAnswers = 0
var incorrectAnswers = 0
var unansweredQuestions = 0
var time = 5;
var timer = setInterval(countDown, 1000)

function displayTime() {
  $("#timer").html(time);
};

function countDown() {
  displayTime();
  if (time !== 0) {
    time -= 1;
  }
  if (time == 0) {
  alert("Times Up!")
  clearInterval(timer)
  $("#hide").hide()
    var amountCorrect = 0; 
    var amountIncorrect = 0; 
    var amountUnchecked = 0; 
    for(var i = 1; i <= 45; i++) 
{
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;}
      if (radio.value == "wrong" && radio.checked) {
      amountIncorrect++;}
     !$('#selector:checked');
      amountUnchecked++;
}}
     $("#results").html("Correct Responses: " + amountCorrect);
     $("#results2").html("Incorrect Responses: " + amountIncorrect);
     $("#results3").html("Unchecked Responses: " + amountUnchecked);
}
};

// Submit Button
$("#submit").click(function submit() { 
    $("#hide").hide()
    var amountCorrect = 0; 
    var amountIncorrect = 0; 
    var amountUnchecked = 0; 
    for(var i = 1; i <= 45; i++) 
{
  var radios = document.getElementsByName('group'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      amountCorrect++;}
      if (radio.value == "wrong" && radio.checked) {
      amountIncorrect++;}
     !$('#selector:checked');
      amountUnchecked++;
}}
     $("#results").html("Correct Responses: " + amountCorrect);
     $("#results2").html("Incorrect Responses: " + amountIncorrect);
     $("#results3").html("Unchecked Responses: " + amountUnchecked);
     clearInterval(timer)
}) 
});

