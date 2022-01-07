/**************************************************
 * 
 *              TOGGLE ANSWER SECTION
 * 
 */

// input
const ques = document.body.querySelectorAll('.ques')

for (let i = 0; i < ques.length; i++) {
    ques[i].addEventListener('click', () => {
        toggleAns(i)
    })
}



// ouput
const img = document.body.querySelectorAll('.ques img')
const ans = document.body.querySelectorAll('.ans')

function toggleAns(i) {
    img[i].classList.toggle('on-off')
    ans[i].classList.toggle('on-off')
}






