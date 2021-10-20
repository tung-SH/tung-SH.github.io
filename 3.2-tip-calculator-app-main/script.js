// 
const button = document.body.querySelector('.left > button');

button.addEventListener('click', () => {
    calculateTip()
})


// 
function calculateTip() {
    let billValue = document.body.querySelector('.bill input').value;
    let tipPercentValue = document.body.querySelector('.tip-percent input').value;
    let numPeople = document.body.querySelector('.num-people input').value;


    let tipAmountValue = billValue * tipPercentValue / 100 / numPeople;
    let totalMoneyValue = billValue + tipAmount ;

    
    setResult(tipAmountValue, totalMoneyValue);
}


// 
const tipAmount = document.body.querySelector('.tip-amount .result');
const totalMoney = document.body.querySelector('.total .result')

function setResult(a, b) {
    tipAmount.innerHTML = a;
    totalMoney.innerHTML = b;
    
}