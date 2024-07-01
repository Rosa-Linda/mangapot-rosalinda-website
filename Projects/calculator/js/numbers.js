function number (num) {

    var textbox = document.getElementById('number-input');
    var current =textbox.value;

    if(current == 0) {
        textbox.value = num;
    }

    else {
        textbox.value = current + num;
    }
}


function clearInput() {
        var textbox = document.getElementById('number-input');
        var current = textbox.value;

        if (current !== "0") {
            textbox.value = "0"; 
        }

        var textbox = document.getElementById('previous');
        var current = textbox.value;

        if (current !== "0") {
            textbox.value = "0";
        }
    
    
 }