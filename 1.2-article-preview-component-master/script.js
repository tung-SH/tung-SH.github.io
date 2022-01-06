/*************************************************
 * 
 *          TOGGLE SHARE-BOX
 * 
 */

// input
const icon = document.body.querySelector('.icon-share')

icon.addEventListener('click', onOff)


// output 
const box = document.querySelector('.share-box')

function onOff() {
    box.classList.toggle('on-off')
}
