'use strict';

var bg = document.getElementById('color-bg');
var btn = document.getElementById('color-btn');
var text = document.getElementById('color-black');

function setColor(name, val) {
    var rootStyles = document.styleSheets[0].cssRules[0].style;
    console.log(name);
    console.log(val);
    rootStyles.setProperty('--theme-' +  name, val);
}

bg.addEventListener('input', function(e){
    setColor('bg', e.target.value);
});

btn.addEventListener('input', function(e){
    setColor('btn-bg', e.target.value);
});

text.addEventListener('input', function(e){
    setColor('black', e.target.value);
});

setColor('bg', bg.value);
setColor('btn-bg', btn.value);
setColor('text', text.value);