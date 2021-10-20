// 
const button = document.body.querySelector('.left > button');

while(true) {
    calculateTip()

    button.addEventListener('click', () => {
        resetCalculate()
    })

}


// 
function calculateTip() {
    let billValue = document.body.querySelector('.bill input').value;
    let tipPercentValue = document.body.querySelector('.tip-percent input').value;
    let numPeople = document.body.querySelector('.num-people input').value;


    let tipAmountValue = billValue * tipPercentValue / 100 / numPeople;
    let totalValue = +billValue + +tipAmountValue ;
    
    let label = 'checking the value of tipAmountValue and totalMoneyValue'
    console.group(label);
    console.info(tipAmountValue);
    console.info(totalValue);
    console.groupEnd(label)

    setResult(tipAmountValue, totalValue);
}

function resetCalculate() {
    document.body.querySelector('.bill input').value = 0;
    document.body.querySelector('.tip-percent input').value = 0;
    document.body.querySelector('.num-people input').value = 0;
}

// 
const tipAmount = document.body.querySelector('.tip-amount .result');
const totalMoney = document.body.querySelector('.total .result')

function setResult(a, b) {
    tipAmount.innerHTML = a;
    totalMoney.innerHTML = b;
    
}