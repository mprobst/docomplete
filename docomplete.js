console.log('Enabling password completion...');

var uncompleted = document.querySelectorAll('input[type=password][autocomplete=off]');
var i = 0;
for (; i < uncompleted.length; i++) {
  uncompleted[i].autocomplete = 'on';
}

console.log('Done enabling password completion, enabled ' + i);
