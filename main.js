var tableDiv = document.getElementById("table");
var input = document.querySelector('input');

function calc() {
    var numberString = input.value;
    var number = parseFloat(numberString);

        if (number <= 10) {
            var table = "";
            for (var i = 1; i <= 10; i++) {
                table += number + " x " + i + " = " + (number * i) + "<br>";
            }
            tableDiv.innerHTML = table;
        } else {
            tableDiv.innerHTML = "Por favor, insira um número menor ou igual a 10.";
        }
    }