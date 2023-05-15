function converterTemperatura() {
    var input = document.getElementById("fahrenheit");
    var fahrenheit = parseFloat(input.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    var body = document.getElementsByTagName("body")[0];
    var resultadoElement = document.getElementById("resultado");

    resultadoElement.innerHTML = celsius.toFixed(1) + " °C";

    if (celsius > 30) {
      body.style.backgroundColor = "orange";
    } else {
      body.style.backgroundColor = "#7DD5FF";
    }

    
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      converterTemperatura();
      event.preventDefault();
    }
  }