let celsia = inputData();
let farengeit = getFarengate(celsia);

function inputData() {
    return prompt("Введите температуру в градусах Цельсия: ");
}

function getFarengate(c) {
    let res = (9 / 5) * parseFloat(c) + 32;
    return res;
}

function printResult(cel, faren) {
    alert(`Цельсия:  ${cel}℃\nФаренгейт:  ${faren.toFixed(1)}℉`);
}

function valid(cels, fareng) {
    if(parseFloat(cels)) {
        printResult(cels, fareng);
    } else {
        alert("Введены не верные данные, введите число: ");
        let newData = inputData();
        let newFaren = getFarengate(newData);
        main(newData, newFaren);
    }
}

function main(dataC, dataF) {
    valid(dataC, dataF);
}

main(celsia, farengeit);

