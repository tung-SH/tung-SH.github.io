// const timeFrames = document.body.querySelector('.report-list')
// fetch('data.json')
// 	.then(res => res.json())
// 	.then(data => {

// 		// main program
// 		timeFrames.addEventListener('click', e => {
// 			if (e.target.localName == 'a') {
// 				showStats(data, e.target.classList[0])
// 			}
// 		})

// 		// default stats to show
// 		showStats(data, 'weekly')
// 	})


// // 
// const sides = document.body.querySelectorAll(".side")
	
// function showStats(data, timeFrame) {
// 	let context
// 	if (timeFrame == 'monthly') context = 'Month'
// 	if (timeFrame == 'weekly') context = 'Week'
// 	if (timeFrame == 'daily') context = 'Day'

// 	for (let card in sides) {
// 		const cardCurrentTime = sides[card].querySelector('.current')
// 		const cardPreviousTime = sides[card].querySelector('.previous')
// 		cardCurrentTime.textContent = data[card].timeframes[timeFrame].current + 'hrs'
// 		cardPreviousTime.textContent = `Last ${context} - ${data[card].timeframes[timeFrame].previous}hrs`
// 	}
// }


const reportList = document.body.querySelectorAll('.report-list')
fetch("data.json")
	.then(respond => respond.json())
	.then(data => {
		// main program 
	})


// main program (1)


// default values 
showStats(data, weekly)

