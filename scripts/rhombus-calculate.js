function rhombusArea (){
    // rhombus-diagonal-1 input
    const rhombusAreaInputOne = document.getElementById('rhombus-diagonal-1');
    const rhombusAreaText = rhombusAreaInputOne.value;
    const diagonalOne = parseFloat(rhombusAreaText);

    // rhombus-diagonal-2 input
    const rhombusAreaInputTwo = document.getElementById('rhombus-diagonal-2');
    const rhombusAreaTextTwo = rhombusAreaInputTwo.value;
    const diagonalTwo = parseFloat(rhombusAreaTextTwo);

    // calculate Rhombus Area
    const rhombus = 0.5 * diagonalOne * diagonalTwo;
    console.log(rhombus);

    // display rhombs
    const displayRhombus = document.getElementById('rhombus-area');
    displayRhombus.innerText = rhombus;
}