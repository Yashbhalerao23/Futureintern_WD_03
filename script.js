function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let celsiusTemp;

    // Convert input temperature to Celsius
    if (inputUnit === 'Celsius') {
        celsiusTemp = inputTemp;
    } else if (inputUnit === 'Fahrenheit') {
        celsiusTemp = (inputTemp - 32) * (5/9);
    } else if (inputUnit === 'Kelvin') {
        celsiusTemp = inputTemp - 273.15;
    }

    let outputTemp;

    // Convert Celsius temperature to desired output unit
    if (outputUnit === 'Celsius') {
        outputTemp = celsiusTemp;
    } else if (outputUnit === 'Fahrenheit') {
        outputTemp = (celsiusTemp * (9/5)) + 32;
    } else if (outputUnit === 'Kelvin') {
        outputTemp = celsiusTemp + 273.15;
    }

    // Display the result
    document.getElementById('outputTemp').textContent = outputTemp.toFixed(2);
}