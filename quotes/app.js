const quotes = [
              "Cái ác là gì? - Là những thứ sinh ra từ sự yếu đuối", 
              "Cần 1 tài năng xuất chúng để che giấu đi 1 tài năng.", 
              "Loài người là sinh vật biết trả giá, không loài vật nào khác làm được điều này. Không có con chó nào đi đổi xương với con chó khác", 
              "Không nên quá phản cảm chuyện người khác che giấu sự thật với chúng ta khi bản thân chúng ta cũng che giấu rất nhiều với người khác",
              "Có 2 loại dối trá. Một để che đậy sự thật trong quá khứ, một để đảm bảo lợi ích cho tương lai"
            ]

window.addEventListener('DOMContentLoaded', randomQuote)
/****************
 *      DI CHUYỂN SANG QUOTES KẾ TIẾP HAY TRƯỚC ĐÓ
 */

// input
const prevBtn = document.querySelector('button.prev-btn')
const nextBtn = document.querySelector('button.next-btn')
const quote = document.querySelector('p#info')

prevBtn.addEventListener('click', prevQuote)
nextBtn.addEventListener('click', nextQuote)

// process
let orderCurrQuote;

function prevQuote() {
    // kiểm tra quote hiện tại
    orderCurrQuote = checkCurrentQuote()
    // console.log(orderCurrQuote)

    // cộng 1 vào thùng thứ tự quote hiện tại
    if (orderCurrQuote == 1) {
        orderCurrQuote = quotes.length
    } else {
        orderCurrQuote--
    }
    // console.log(orderCurrQuote)

    // biểu hiện ra ở website
    output(orderCurrQuote)
}
function nextQuote() {
    // kiểm tra quote hiện tại
    orderCurrQuote = checkCurrentQuote()
    // console.log(orderCurrQuote)

    // cộng 1 vào thùng thứ tự quote hiện tại
    if (orderCurrQuote == quotes.length) {
        orderCurrQuote = 1
    } else {
        orderCurrQuote++
    }
    // console.log(orderCurrQuote)

    // biểu hiện ra ở website
    output(orderCurrQuote)
}


function checkCurrentQuote() {
    let currentQuote = quote.innerHTML
    let i = 0
    while (true) {
        if (currentQuote == quotes[i]) break;
        i++
    }
    return ++i; // sai lầm của mình lần này là sự khác biệt giữa i++ và ++i
}


// ouput
function output(orderCurrQuotePara) {
    let orderArr = orderCurrQuotePara - 1
    // console.log(quote.textContent)
    // console.log(quotes[orderArr])
    quote.textContent = quotes[orderArr]
}


// console.log(random(1, 3, 2))
/*******************
 *      RANDOM QUOTE
 * 
 */

// input
const randomBtn = document.querySelector('button.random-btn')

randomBtn.addEventListener('click', randomQuote)


// process 
function randomQuote() {
    orderCurrQuote = random(1, quotes.length, checkCurrentQuote())

    output(orderCurrQuote)
}

function random(start, end, curr) {
    let num = curr;
    while (num == curr) {
        num = Math.floor(Math.random() * (end - start + 1)) + start
    }  
    return num
}