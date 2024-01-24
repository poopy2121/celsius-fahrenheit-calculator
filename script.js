const result = document.getElementById("result");
var celsiusinput = document.getElementById("celsius");
const calculate = document.getElementById("calculate")

calculate.addEventListener('click', function() {


    var celsius = parseFloat(celsiusinput.value);
    var fahrenheit = celsius * (9/5) + 32;


    result.innerText = fahrenheit


    
})