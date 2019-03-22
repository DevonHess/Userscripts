// ==UserScript==
// @name AudPro
// @icon data:image/gif;base64,R0lGODlhEAAQAMQAAPT0/t3d/Gtr85+f+END8enp/W1t9Kqq95eX+Jyc9o2N9VlZ8mRk839/9Scn79HR+7i4+HZ29YeH9kJC8MXF+VhY8Y+P9xUV7zY28CYm7wAA7v///6am+QAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiZWFhYmQxZS0zMzIwLTlmNDUtOGY2OS0yNzc3YjU5NGM1MDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjkwN0RCRDQ3NkY5MTFFNkI0MUVEQzc2OTM3QkU0RUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjkwN0RCRDM3NkY5MTFFNkI0MUVEQzc2OTM3QkU0RUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OGVkM2FjMmItN2M5NC1kOTQwLWI4NGYtMjYwNjAyYmQzMzZiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTk4MzFjNGQtNzZhNy0xMWU2LTllZDMtYmY3OTkzMTI2ZTgyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBAAAAAAsAAAAABAAEAAABUvgJo5kaZZHkp1ikQhavJ5BHCvPbNbCIQK6UqBCArKGxSAJOTLSiE3lCFmoaDJSEdIqK1EmV2LGBh2NY0RITFAonTUK1uiwBsjvphAAIfkEBAAAAAAsAAAAAAEAEAAABQYgJ45kyYUAIfkEBAAAAAAsAQAAAAEAEAAABQYgJ45kyYUAIfkEBAAAAAAsAgAAAAEAEAAABQkgJ44k11yXwYUAIfkEBAAAAAAsAwAAAAEAEAAABQkgJ44k52goFwIAIfkEBAAAAAAsBAAAAAEAEAAABQkgJ44kp50aFwIAIfkEBAAAAAAsBQAAAAEAEAAABQogJ1pkSV6aRnAhACH5BAQAAAAALAYAAAABABAAAAULIMchmoad6LkMXAgAIfkEBAAAAAAsBwAAAAEAEAAABQkgxzEaIZ6oGAIAIfkEBAAAAAAsCAAAAAEAEAAABQsgxxGaIYoIdkVnCAAh+QQEAAAAACwJAAAAAQAQAAAFCSDHaZpoYmQphgAh+QQEAAAAACwKAAAAAQAQAAAFCiBnaAtnmlqqnSEAIfkEBAAAAAAsCwAAAAEAEAAABQwgx2jSYJqXphFcGwIAIfkEBAAAAAAsDAAAAAEAEAAABQkgd41kiSFcGgIAIfkEBAAAAAAsDQAAAAEAEAAABQYgJ45kyYUAIfkEBAAAAAAsDgAAAAEAEAAABQYgJ45kyYUAIfkEBAAAAAAsDwAAAAEAEAAABQYgJ45kyYUAOw==
// @include *
// @exclude *.wikipedia.org*
// @grant none
// @version 20170413
// ==/UserScript==

var link = document.links
var audio = []

function probar(e,a)
{
	reg = /rgb.?\((\d{1,3}), (\d{1,3}), (\d{1,3})(?:\)|, \d(?:.\d*)?\))/;
	color = window.getComputedStyle(e,null).color.replace(reg,
		'rgba($1, $2, $3, '+((a.paused)?'0.15':'0.35')+')');
	percent = a.currentTime/a.duration*100;
	e.style.background = 'linear-gradient(to right, '+color+' '+percent
		+'%, rgba(0, 0, 0, 0) 0%)';
}

function meta(e)
{
	return (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey);
}

for (i=0;i < link.length;i++) {
	if (/^[^?#]+\.(mp3|m4a|ogg|wav)/i.test(link[i].href)) {
		link[i].onclick = function(event)
		{
			if (event.button == 0 && event.buttons == 0
			&& !meta(event)) {
				return false;
			}
		}

		link[i].onmousedown = function(event)
		{
			probar(this,this.lastChild);
			if (event.buttons == 1 && !meta(event)) {
				this.setAttribute("apmou",event.offsetX);
				return false;
			}
		}

		link[i].onmouseup = function(event)
		{
			probar(this,this.lastChild);
			if (this.getAttribute("apmou") == event.offsetX
			&& event.button == 0 && !meta(event)) {
				(this.lastChild.paused)
					? this.lastChild.play()
					: this.lastChild.pause();
				probar(this,this.lastChild);
				this.removeAttribute("apmou");
				return false;
			}
			this.removeAttribute("apmou");
		}

		link[i].onmousemove = function(event)
		{
			if (this.lastChild.duration
			&& this.hasAttribute("apmou")
			&& event.buttons == 1 && event.movementX !== 0) {
				e = this;
				compX = 0;
				while(e) {
					compX += (e.offsetLeft - e.scrollLeft
						+ e.clientLeft);
					e = e.offsetParent;
				}
				if ((event.clientX-compX) <= 2) {
					this.lastChild.currentTime = 0;
				} else if
				((this.offsetWidth+compX-event.clientX) <= 2) {
					this.lastChild.currentTime =
						this.lastChild.duration;
				}
				else {
					this.lastChild.currentTime =
						(event.clientX+1-compX)
						/this.offsetWidth
						*this.lastChild.duration;
				}
				return false;
			}
		}

		link[i].onmouseenter = link[i].onmouseout
		= link[i].onmouseleave = function(event)
		{
			probar(this,this.lastChild);
			this.removeAttribute("apmou");
		}

		audio[i] = link[i].appendChild(document.createElement('audio'));
		audio[i].src = link[i].href;
		audio[i].preload = 'metadata';

		audio[i].ontimeupdate = audio[i].onwaiting = audio[i].onended =
		function(event)
		{
			probar(this.parentNode,this);
		}

		audio[i].onerror = function(event)
		{
			this.parentNode.onclick = this.parentNode.onmousedown =
				this.parentNode.onmouseup =
				this.parentNode.onmousemove =
				this.parentNode.onmouseenter =
				this.parentNode.onmouseout =
				this.parentNode.onmouseleave = null;
		}
	}
}
