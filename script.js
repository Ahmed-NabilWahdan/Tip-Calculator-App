const billAmountInput = document.querySelector('#bill');
const peopleNumberInput = document.querySelector('#people-number');
const customTipInput = document.querySelector('#custom-tip');
const tipSelectionSection = document.querySelector('.tip-selection-section')
const tipAmountResult = document.querySelector('.tip-amount-section p');
const totalResult = document.querySelector('.total-section p');
const errorMessage = document.querySelector('.error-msg');
const resetButton = document.querySelector('.reset-btn');

billAmountInput.addEventListener('keydown', (eventObject) => {
    // console.log(typeof billValue, billValue, eventObject.key, eventObject.which)
    if (
        (eventObject.key == "-" || eventObject.key == "+" || eventObject.key == "e")
        ||
        (eventObject.ctrlKey && eventObject.key == "v")
    ) {
        eventObject.preventDefault()
    }
});
peopleNumberInput.addEventListener('keydown', (eventObject) => {
    // console.log(typeof billValue, billValue, eventObject.key, eventObject.which)
    if (
        (eventObject.key == "-" || eventObject.key == "e" || eventObject.key == ".")
        ||
        (eventObject.ctrlKey && eventObject.key == "v")
    ) {
        eventObject.preventDefault()
    }
});
tipSelectionSection.addEventListener('click', (eventObject) => {
    btnClassName = eventObject.target.className;
    billValue = billAmountInput.value != '' ? Number(billAmountInput.value) : 0;
    peopleNumber = peopleNumberInput.value != '' ? Number(peopleNumberInput.value) : 0;
    if (btnClassName == 'tip-btn') {
        if (peopleNumber != 0) {
            tipPercentage = Number(eventObject.target.value) / 100;
            tipAmountForPerson = (billValue / peopleNumber) * tipPercentage;
            totalForPerson = (billValue / peopleNumber) + tipAmountForPerson;

            // to get only 2  digits after the dicemal point
            tipAmountResult.textContent = "$" + Math.floor(tipAmountForPerson * 100) / 100;
            totalResult.textContent = "$" + Math.round(totalForPerson * 100) / 100;
            errorMessage.classList.add('display-none')
            peopleNumberInput.classList.remove('outline-red');

        } else {
            errorMessage.classList.remove('display-none')
            peopleNumberInput.classList.add('outline-red');
        }
    }
});

let pressedEnter = false;
customTipInput.addEventListener('keydown', (eventObject) => {
    if (
        (eventObject.key == "-" || eventObject.key == "+" || eventObject.key == "e")
        ||
        (eventObject.ctrlKey && eventObject.key == "v")
    ) {
        eventObject.preventDefault()
    }
    console.log(eventObject.target.value)

});
customTipInput.addEventListener('input', (eventObject) => {
    billValue = billAmountInput.value != '' ? Number(billAmountInput.value) : 0;
    peopleNumber = peopleNumberInput.value != '' ? Number(peopleNumberInput.value) : 0;

    if (eventObject.target.value == '') {
        tipAmountResult.textContent = "$0.00";
        totalResult.textContent = "$0.00";
        errorMessage.classList.add('display-none');
        peopleNumberInput.classList.remove('outline-red');
    }else if (peopleNumber == 0) {
        errorMessage.classList.remove('display-none');
        peopleNumberInput.classList.add('outline-red');
    } else {
        tipPercentage = Number(eventObject.target.value) / 100;
        tipAmountForPerson = (billValue / peopleNumber) * tipPercentage;
        totalForPerson = (billValue / peopleNumber) + tipAmountForPerson;

        // to get only 2 digits after the dicemal point.
        tipAmountResult.textContent = "$" + Math.floor(tipAmountForPerson * 100) / 100;
        totalResult.textContent = "$" + Math.round(totalForPerson * 100) / 100;
        errorMessage.classList.add('display-none')
        peopleNumberInput.classList.remove('outline-red');
    }
});

resetButton.addEventListener('click', (eventObject) => {
    billAmountInput.value = '';
    peopleNumberInput.value = '';
    customTipInput.value = '';
    tipAmountResult.textContent = "$0.00"
    totalResult.textContent = "$0.00"
    errorMessage.classList.add('display-none');
    peopleNumberInput.classList.remove('outline-red');
});
