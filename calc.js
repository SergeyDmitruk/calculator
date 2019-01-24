'use strict';

function calculator(e) {

    if(e.target.dataset.operator){
        var item = e.target.dataset.operator;
    }else {
        var item = e.target.textContent;
    }

    // for input field
    function input(data){
        inputField.innerHTML = data;
    }

    // for result fiels - collection data
    function result(data){
        if(data === ''){
            resultField.innerHTML = '';
        } else {
            resultField.innerHTML = data + '=' + eval(data);
            resultField.classList.add('active');
        }
    }

    // check items
    if (item === '='){
        result(value);
        value = eval(value);
        input(value);
        return value;
    } else if (item === 'AC') {
        value = '';
        input('');
        result('');
        return value;
    }

    value += item;

    input(value);
}

var btn = document.querySelectorAll('.calc__btn');
var value = '';
var inputField = document.getElementsByClassName('calc__input')[0];
var resultField = document.getElementsByClassName('calc__result')[0];

// for each btn
btn.forEach( function(item) {
    item.addEventListener('click', calculator)
});