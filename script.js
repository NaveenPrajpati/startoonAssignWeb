function plotGraph() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let maxValue = parseFloat(document.getElementById('maxValue').value);

    if (isNaN(inputValue) || isNaN(maxValue)) {
        alert("Please enter valid numeric values.");
        return;
    }

    if (inputValue > maxValue) {
        alert("Input Value cannot be greater than Max Value.");
        return;
    }

    let percentage = (inputValue / maxValue) * 100;
    updateProgressBar(percentage);
    updateProgressCircle(percentage);
    updateProgressRectangle(percentage);
}

function updateProgressBar(percentage) {
    let progressBar = document.getElementById('progress-bar');
    let percentageIndicator = document.getElementsByClassName('percentage');
    progressBar.style.height = percentage + '%';
    for (let i = 0; i < percentageIndicator.length; i++) {
        percentageIndicator[i].innerHTML = Math.round(percentage) + '%';
    }
}

function updateProgressCircle(percentage) {
    let circle = document.querySelector('.circle');
    let circumference = 2 * Math.PI * circle.getAttribute('r');
    let offset = (percentage / 100) * circumference;
    circle.style.strokeDasharray = `${offset} ${circumference}`;
}

function updateProgressRectangle(percentage) {
    let container = document.getElementById('progress-container')
    let gradient = `linear-gradient(to top, #008CFF ${percentage}%, #C2E3FF )`;
    container.style.background = gradient;
}