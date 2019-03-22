function ical()
{
	calendar = document.querySelectorAll(".scheduleDay");
	stamp = new Date().toISOString().replace(/-|:|\.\d+/g, '');
	file = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Devon Hess//Starbucks iCalendar//EN';
	for (i = 0; i < calendar.length; i++) {
		day = calendar[i].querySelector(".scheduleDayTitle").innerText;
		location = calendar[i].querySelector(".scheduleShiftStore").innerText;
		time = calendar[i].querySelector(".scheduleShiftTime").innerText;
		year = (new Date).getUTCFullYear();
		if (time != "Not Scheduled") {
			if ((new Date).getMonth() == 11 && day.match(/January/)) {
				year++;
			}
			if ((new Date).getMonth() == 0 && day.match(/December/)) {
				year--;
			}
			start = new Date(day+' '+year+' '+time.split(' - ')[0]).toISOString().replace(/-|:|\.\d+/g, '');
			end = new Date(day+' '+year+' '+time.split(' - ')[1]).toISOString().replace(/-|:|\.\d+/g, '');
			uid = location.split(', ')[0].split('#')[1] + new Date(day+' '+year).toISOString().replace(/-|:|\.\d+/g, '');
			location = location.split(', ')[1];
			file += '\r\nBEGIN:VEVENT\r\nDTSTART:'+start+'\r\nDTEND:'+end+'\r\nDTSTAMP:'+stamp+'\r\nUID:'+uid+'@devonhess.org\r\nLOCATION:Starbucks, '+location+'\r\nSUMMARY:Work\r\nEND:VEVENT';
		}
	}
	file += '\r\nEND:VCALENDAR';
	download(file);
}

function download(data)
{
	a = document.createElement('a');
	a.href = 'data:text/plain,' + encodeURIComponent(data);
	a.download = 'My Schedule.ics';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

if (window.top == window.self) {
	if (typeof GM_registerMenuCommand == 'undefined') {
		ical();
	} else {
		GM_registerMenuCommand('Create iCal', ical);
	}
}

// ==UserScript==
// @name Starbucks iCal
// @namespace http://devonhess.org
// @version 2019-01-13
// @author Devon Hess
// @match https://mysite.starbucks.com/MySchedule/Schedule.aspx
// @grant GM_registerMenuCommand
// @icon https://www.starbucks.com/static/images/favicon.ico
// ==/UserScript==
