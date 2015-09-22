var releaseDate = new Date(2015, 10, 17, 0, 0, 0)

// give time to release in milliseconds
function getCountdown(releaseDate) {
	var currentTime = new Date();
	var countdown = releaseDate - currentTime;
	return countdown;
}

function getText(milliseconds) {
	var totalSeconds = Math.floor(milliseconds / 1000);
	var secondsPerMinute = 60;
	var secondsPerHour = 3600;
	var secondsPerDay = 86400;
	var secondsPerWeek= 604800;

	var weeks = Math.floor(totalSeconds / secondsPerWeek);
	totalSeconds -= (weeks * secondsPerWeek);
	var days = Math.floor(totalSeconds / secondsPerDay);
	totalSeconds -= (days * secondsPerDay);
	var hours = Math.floor(totalSeconds / secondsPerHour);
	totalSeconds -= (hours * secondsPerHour);
	var minutes = Math.floor(totalSeconds / secondsPerMinute);
	totalSeconds -= (minutes * secondsPerMinute);
	var seconds = totalSeconds;

	var weekText = weeks == 1 ? 'week' : 'weeks';
	var dayText = days == 1 ? 'day' : 'days';
	var hourText = hours == 1 ? 'hour' : 'hours';
	var minuteText = minutes == 1 ? 'minute' : 'minutes';
	var secondText = seconds == 1 ? 'second' : 'seconds';

	var text = [weeks, weekText, days, dayText, hours, hourText, minutes, minuteText, seconds, secondText];
	return text.join(' ');
}

function countdown() {
	var countdown = getCountdown(releaseDate);
	var text = getText(countdown);
	document.getElementById('countdown').innerText = text;
}

countdown();
setInterval(countdown, 100)