
// Write a common function

function getInputFieldValueById (id){

    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}

function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;

    const textNumber = parseFloat(textValue);

    return textNumber;
}

function showSectionById(id){

    document.getElementById('add-form').classList.add('hidden');
    document.getElementById('out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    // Show the Section with provided id

    document.getElementById(id).classList.remove('hidden');
}