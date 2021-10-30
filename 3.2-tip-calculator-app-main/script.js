// 
const bill = document.body.querySelector('.bill')
const tipButton = document.body.querySelectorAll(".tip-button")
const tipCustom = document.body.querySelector(".tip-custom")
const numPeople = document.body.querySelector(".num-people")
const resetButton = document.body.querySelector('.left button')
let billValue = 0; // default value
let tipValue = 0.15; // default value
let peopleValue = 1;
const tipAmount = document.body.querySelector(".tip-amount .result")
const total = document.body.querySelector('.total .result')

calculateTip()
bill.addEventListener("input", setBillValue);
tipButton.forEach(btn => {
    btn.addEventListener("click", setTipButtonValue)
});
tipCustom.addEventListener('input', setCustomValue);
numPeople.addEventListener("input", setPeopleValue);
resetButton.addEventListener('click', reset);




// 
function setBillValue(e) {

    console.log('set bill value function runs')
    billValue = e.target.value

    calculateTip()
}
function setTipButtonValue() {
    console.log('set bill value function runs')

    calculateTip()
}
function setCustomValue(e) {

    console.log('set custom value function runs')
    tipValue = e.target.value

    calculateTip()
}
function setPeopleValue(e) {

    console.log('set people value function runs')
    peopleValue = e.target.value

    calculateTip()
}
function reset() {

    return true
}
function calculateTip() {
    console.log('calculate tip function runs')

    let tipAmountValue = billValue * tipValue / peopleValue / 100
    let totalValue = tipAmountValue + billValue / peopleValue

    console.log(tipAmountValue)
    console.log(totalValue)
    
    tipAmount.innerHTML = tipAmountValue
    total.innerHTML = totalValue

    console.log('end run -----------------------')
}