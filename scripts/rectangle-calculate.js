function rectangleCalculatorArea() {
    // Rectangle width Input
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    
    const rectangleWidth = parseFloat(rectangleWidthText)
    

    // rectangle Length Input
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLengthInput.value;
    const rectangleLength = parseFloat(rectangleLengthText);
    

    // calculate rectangle area
    const rectangleArea = rectangleLength * rectangleWidth;


    // Display rectangle Area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}