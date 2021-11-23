// main program - level 1
const ques = document.body.querySelectorAll('.ques')

for (let i = 0; i < ques.length; i++) {
    ques[i].addEventListener('click', () => {
        toggleAns(i)
    })
}



// level 2
const img = document.body.querySelectorAll('.ques img')
const ans = document.body.querySelectorAll('.ans')

function toggleAns(i) {
    img[i].classList.toggle('on-off')
    ans[i].classList.toggle('on-off')
}






