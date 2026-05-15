function pentagonArea() { 
    const inputP = document.getElementById('pentagon-p');
    const textP = inputP.value;
    const perimeter = parseFloat(textP);

    const inputB = document.getElementById('pentagon-b');
    const textB = inputB.value;
    const diagonal = parseFloat(textB);

    const pentagon = 0.5 * perimeter * diagonal;

    const pentagonDisplay = document.getElementById('pentagon-area');
    pentagonDisplay.innerText = pentagon;
}