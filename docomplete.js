// Create a no-op object with console's keys or just return console.
var logger = (function(debug) {
  if (debug) return console;
  var logger = {};
  for (var key in console) {
    logger[key] = function() {};
  }
  return logger;
})(false); // pass true to debug

function enableCompletion(selector) {
  var elements = document.querySelectorAll(selector);
  var i = 0;
  for (; i < elements.length; i++) {
    elements[i].autocomplete = 'on';
  }
  return i;
}

logger.time('Enabling password completion');

var completed = 0;
completed += enableCompletion('input[type=password][autocomplete=off]');
completed += enableCompletion('form[autocomplete=off]');

logger.log('Done enabling password completion, enabled ' + completed);

logger.timeEnd('Enabling password completion');
