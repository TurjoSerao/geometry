// calculate all area

// get input value by Id
function getInputById(inputFiledId) {
    const inputField = document.getElementById(inputFiledId);
    const inputText = inputField.value;
    const value = parseFloat(inputText);

    return value;
}

// Display value by id

function displayValueById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// Triangle
function triangleCalculatorArea() {
    const base = getInputById('triangle-base');
    const height = getInputById('triangle-height');
    const area = 0.5 * base * height;
    displayValueById('triangle-area', area);
}

// rectangle
function rectangleCalculatorArea(){
    const rectangleWidth = getInputById('rectangle-width');
    const rectangleLength = getInputById('rectangle-length')
    const area = rectangleWidth * rectangleLength;
    displayValueById('rectangle-area', area)
}

// parallelogram
function parallelogramArea(){
    const parallelogramBase = getInputById('parallelogram-base');
    const parallelogramHeight = getInputById('parallelogram-height');
    const area = parallelogramBase * parallelogramHeight;
    displayValueById('parallelogram-area', area)
}

// Rhombus
function rhombusArea(){
    const rhombsOne = getInputById('rhombus-diagonal-1');
    const rhombsTwo = getInputById('rhombus-diagonal-2');
    const area = 0.5 * rhombsOne * rhombsTwo;
    displayValueById('rhombus-area', area)
}

// Pentagon 
function pentagonArea(){
    const pentagonP = getInputById('pentagon-p')
    const pentagonB = getInputById('pentagon-b')
    const area = 0.5 * pentagonP * pentagonB;
    displayValueById('pentagon-area', area)
}

// Ellipse 
function ellipseArea(){
    const ellipseArea = getInputById('ellipse-a');
    const ellipseBase = getInputById('ellipse-b');
    const area = 3.14 * ellipseArea * ellipseBase;
    displayValueById('ellipse-area', area);
}