Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var real_word = array.random();
var synth = window.speechSynthesis;

function play() {
var msg = new SpeechSynthesisUtterance(real_word);
voice = synth.getVoices().filter(function(voice) { return voice.voiceURI == 'Microsoft Aria Online (Natural) - English (United States)' })[0];
msg.voice = voice
synth.speak(msg);

}
attempts = 0;
function new_word() {
real_word = array.random();
}

function submit() {

  node = document.getElementById('table-body');
  attempts++;

  var word = document.getElementById("word").value;
  if (word.toLowerCase() == real_word.toLowerCase()) 
  {
    var msg = new SpeechSynthesisUtterance('Correct');
    window.speechSynthesis.speak(msg);
    new_word();
    document.getElementById("word").value = "";
    node.insertAdjacentHTML('afterend', "<tr><td>" + word + "</td><td>" + attempts + "</td><td>" + "Yes" +"</td></tr>");
    attempts = 0;
  }
  else
  {
    var msg = new SpeechSynthesisUtterance('Wrong');
    window.speechSynthesis.speak(msg);
    if (attempts >= 3)
    {
      node.insertAdjacentHTML('afterend', "<tr><td>" + real_word + "</td><td>" + attempts + "</td><td>" + "Wrong" +"</td></tr>");
      new_word();
      document.getElementById("word").value = "";
      attempts = 0;
    }
  }
}