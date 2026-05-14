function parallelogramArea () {
    // parallelogram Base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    

    // parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramBaseInput.value;
    const height = parseFloat(parallelogramBaseText);

    // parallelogram calculate area
    const parallelogram = base * height;
    console.log(parallelogram);

    // display parallelogram
    const displayParallelogram = document.getElementById('parallelogram-area');
    displayParallelogram.innerText = parallelogram;
}