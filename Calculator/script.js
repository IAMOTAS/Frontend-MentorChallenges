var input = document.getElementById('inputBox');
var buttons = document.querySelectorAll('button');

var string = "";
var arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML =='='){
            string = eval(string);
            input.value = string;
        }

        string += e.target.innerHTML;
        input.value = string;

    })
})