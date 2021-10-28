// 
const bill = document.body.querySelector('.bill')
const tipButton = document.body.querySelectorAll(".tip-button")
const tipCustom = document.body.querySelector(".tip-custom")
const numPeople = document.body.querySelector(".num-people")
const resetButton = document.body.querySelector('.left button')

bill.addEventListener("input", setBillValue)
tipButton.forEach(btn => {
    btn.addEventListener("click", setTipButtonValue)
})
tipCustom.addEventListener('input', setCustomValue)
numPeople.addEventListener("input", setPeopleValue)
resetButton.addEventListener('click', reset)

// 
