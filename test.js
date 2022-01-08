Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var real_word = array.random();
var synth = window.speechSynthesis;

function play() {
var msg = new SpeechSynthesisUtterance(real_word);
var voices = synth.getVoices();
console.log(voices)
msg.voice = voices[2]
synth.speak(msg);

}

function new_word() {
real_word = array.random();
}

function submit() {
var word = document.getElementById("word").value;
if (word.toLowerCase() == real_word.toLowerCase()) 
{
var msg = new SpeechSynthesisUtterance('Correct');
window.speechSynthesis.speak(msg);
new_word();
document.getElementById("word").value = "";
}
else
{
var msg = new SpeechSynthesisUtterance('Wrong');
window.speechSynthesis.speak(msg);
}
}