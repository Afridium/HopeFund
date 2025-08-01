function isValid(amount) {
    return /^[0-9]*\.?[0-9]+$/.test(amount) && parseFloat(amount) > 0;
}


function getVal1(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}
function getVal2(id){
    const inputValue = parseFloat(document.getElementById(id).innerText);
    return inputValue;
}