Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

var array = ["above", "cap", "belong", "alone", "change", "both", "answer", "clock", "bridge", "bad", "corn", "building", "been", "cover", "buy", "bell", "across", "care", "blow", "along", "city", "breakfast", "any", "clothes", "brought", "bank", "corner", "busy", "before", "cross", "air", "almost", "bicycle", "also", "always", "bread", "anything", "arm", "brother", "beautiful", "because", "bus", "behind", "believe", "can’t", "better", "carry", "caught", "bought", "clean", "climb", "bright", "cloud", "cook", "burn", "count", "country", "cannot", "cut", "dance", "dark", "dear", "everyone", "dinner", "dish", "fall", "don’t", "drink", "few", "each", "ear", "finish", "end", "enough", "food", "ever", "friend", "front", "face", "game", "gas", "fence", "gold", "gone", "fine", "grew", "grow", "follow", "happen", "hard", "deep", "didn’t", "eye", "does", "done", "farmer", "drive", "drove", "fill", "early", "else", "floor", "even", "evening", "forgot", "everything", "fruit", "full", "family", "glad", "glass", "field", "grass", "great", "flew", "hall", "handle", "foot", "heavy", "herself", "high", "met", "himself", "hope", "milk", "hot", "hurt", "most", "husband", "inside", "much", "isn’t", "kind", "need", "king", "lady", "north", "lend", "late", "only", "later", "leg", "part", "let’s", "low", "place", "listen", "list", "lunch", "middle", "hit", "might", "minute", "hour", "moon", "mountain", "I’ll", "mouth", "myself", "it’s", "nail", "neighbor", "kitchen", "never", "nothing", "large", "o’clock", "outside", "learn", "own", "pass", "letter", "people", "plant", "lot", "point", "young", "maybe", "told", "hold", "mile", "present", "hungry", "more", "quick", "I’m", "move", "reach", "keep", "neck", "remember", "knew", "nice", "river", "last", "often", "sad", "left", "park", "seem", "light", "piece", "sent", "love", "poor", "ship", "meet", "show", "proud", "push", "toward", "quiet", "race", "turn", "read", "real", "village", "rest", "right", "wash", "rode", "rope", "weather", "sand", "sea", "wheel", "seen", "sell", "wife", "seven", "sheep", "winter", "shop", "should", "won’t", "shut", "sick", "write", "question", "silver", "than", "railroad", "six", "threw", "really", "smell", "tired", "ring", "sound", "sing", "round", "stairs", "sled", "seed", "step", "smile", "send", "store", "south", "shine", "strong", "stand", "shout", "supper", "stick", "sign", "talk", "storm", "such", "start", "small", "sure", "still", "song", "tall", "strange", "spring", "these", "suit", "station", "through", "swim", "stood", "today", "teacher", "string", "sister", "those", "summer", "slow", "throw", "table", "soft", "together", "ten", "spot", "sit", "tiny", "tomorrow", "tonight", "top", "track", "trip", "try", "until", "upon", "useful", "visit", "wait", "warm", "watch", "wave", "wear", "week", "well", "we’ll", "wild", "while", "wide", "without", "win", "wing", "wood", "wonder", "wonderful", "year", "work", "world"]
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
if (word == real_word) 
{
var msg = new SpeechSynthesisUtterance('Correct');
window.speechSynthesis.speak(msg);
new_word();
document.getElementById("word") = "";
}
else
{
var msg = new SpeechSynthesisUtterance('Wrong');
window.speechSynthesis.speak(msg);
}
}