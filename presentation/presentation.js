exports.init = function(SARAH){
SARAH.speak('initialisation termin�, Bonjour monsieur, mon interface et pr�t.');
 }

exports.action = function(data, callback, config, SARAH) {
  var config = config.modules.presentation;
  var tts = data.test + ' ' + config.phrase;
  callback({'tts': tts});
}