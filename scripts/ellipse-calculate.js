function ellipseArea() {
    const ellipseInputA = document.getElementById('ellipse-a');
    const ellipseInputText = ellipseInputA.value;
    const axis = parseFloat(ellipseInputText);

    const ellipseInputB = document.getElementById('ellipse-b');
    const ellipseInputTextB = ellipseInputB.value;
    const axisB = parseFloat(ellipseInputTextB);

    const ellipse = 3.14 * axis * axisB;

    const ellipseDisplay = document.getElementById('ellipse-area');
    ellipseDisplay.innerText = ellipse;
}