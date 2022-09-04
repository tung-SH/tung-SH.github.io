const quotes = [
              "Cái ác là gì? - Là những thứ sinh ra từ sự yếu đuối", 
              "Cần 1 tài năng xuất chúng để che giấu đi 1 tài năng.", 
              "Loài người là sinh vật biết trả giá, không loài vật nào khác làm được điều này. Không có con chó nào đi đổi xương với con chó khác", 
              "Không nên quá phản cảm chuyện người khác che giấu sự thật với chúng ta khi bản thân chúng ta cũng che giấu rất nhiều với người khác",
              "Có 2 loại dối trá. Một để che đậy sự thật trong quá khứ, một để đảm bảo lợi ích cho tương lai",
              "Không có gì nguy hiểm hơn bạn bè vô tri, thà rằng có kẻ thù thông minh",
              "thiên tài chỉ đứng trên kẻ điên một nấc mà thôi.",
              "Trong lúc khó khăn, phải giữ tâm thế bình thản.", 
              "Xét về bản chất của tội lỗi, thì có hai đại tội: nóng vội và cẩu thả.", 
              "Nhân tài cần phải được tạo ra.",
              "Mọi thất bại là bước đệm để tới thành công.",
              "Nghịch cảnh là con đường đầu tiên đi đến sự thật.",
              "Nghi ngờ tất cả hay tin tưởng tất cả đều đơn giản, chẳng khác gì từ bỏ tư duy.",
              "Tổn thương lặng lẽ sống ở nơi sâu thẳm của lồng ngực", 
              "Đã sai mà ko sửa, vậy mới gọi là sai.",
              

            ]

window.addEventListener('DOMContentLoaded', randomQuote)
window.addEventListener('keydown', function(event) {
    // console.log(1)
    if (event.code == "Space") randomQuote()
    if (event.code == "ArrowRight") nextQuote()
    if (event.code == "ArrowLeft") prevQuote()

})
/****************
 *      DI CHUYỂN SANG QUOTES KẾ TIẾP HAY TRƯỚC ĐÓ
 */

// input
const prevBtn = document.querySelector('button.prev-btn')
const nextBtn = document.querySelector('button.next-btn')
const quote = document.querySelector('#info')

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
