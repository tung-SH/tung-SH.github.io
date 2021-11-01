// WORK
// 5hrs <!-- daily -->
// Previous - 7hrs <!-- daily -->
// 32hrs <!-- weekly -->
// Previous - 36hrs <!-- weekly -->
// 103hrs <!-- monthly -->
// Previous - 128hrs <!-- monthly -->
// PLAY
// 1hr <!-- daily -->
// Previous - 2hrs <!-- daily -->
// 10hrs <!-- weekly -->
// Previous - 8hrs <!-- weekly -->
// 23hrs <!-- monthly -->
// Previous - 29hrs <!-- monthly -->
// STUDY
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 7hrs <!-- weekly -->
// 13hrs <!-- monthly -->
// Previous - 19hrs <!-- monthly -->
// EXERCISE
// 1hr <!-- daily -->
// Previous - 1hr <!-- daily -->
// 4hrs <!-- weekly -->
// Previous - 5hrs <!-- weekly -->
// 11hrs <!-- monthly -->
// Previous - 18hrs <!-- monthly -->
// SOCIAL
// 1hr <!-- daily -->
// Previous - 3hrs <!-- daily -->
// 5hrs <!-- weekly -->
// Previous - 10hrs <!-- weekly -->
// 21hrs <!-- monthly -->
// Previous - 23hrs <!-- monthly -->
// SELF CARE
// 0hrs <!-- daily -->
// Previous - 1hr <!-- daily -->
// 2hrs <!-- weekly -->
// Previous - 2hrs <!-- weekly -->
// 7hrs <!-- monthly -->
// Previous - 11hrs <!-- monthly -->

const timeFrames = document.body.querySelector('.report-list')
fetch('data.json')
	.then(res => res.json())
	.then(data => {

		// main program
		timeFrames.addEventListener('click', e => {
			if (e.target.localName == 'a') {
                ;
				showStats(data, e.target.classList[0])
			}
		})

		// default stats to show
		showStats(data, 'daily')
	})
	.catch(e => console.log(e))


// 
const sides = document.body.querySelectorAll(".side")
	
function showStats(data, timeFrame) {
	let context
	if (timeFrame == 'monthly') context = 'Month'
	if (timeFrame == 'weekly') context = 'Week'
	if (timeFrame == 'daily') context = 'Day'

	for (let card in sides) {
		const cardCurrentTime = sides[card].querySelector('.current')
		const cardPreviousTime = sides[card].querySelector('.previous')
		cardCurrentTime.textContent = data[card].timeframes[timeFrame].current + 'hrs'
		cardPreviousTime.textContent = `Last ${context} - ${data[card].timeframes[timeFrame].previous}hrs`
	}
}