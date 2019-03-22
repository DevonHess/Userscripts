function m3u()
{
	playlist = document.querySelectorAll("[href$=flac],[href$=mp3],[href$=mp4],[href$=m4a],[href$=ogg],[href$=wav]");
	file = '';
  for (var i = 0; i < playlist.length; i++) {
			file += playlist[i].href + '\r\n';
  }
	download(file);
}

function download(data)
{
	a = document.createElement('a');
	a.href = 'data:text/plain,' + encodeURIComponent(data);
	a.download = document.title + '.m3u';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

if (window.top == window.self) {
	GM_registerMenuCommand('Create .m3u', m3u);
}

// ==UserScript==
// @name m3u Creator
// @namespace http://devonhess.org
// @include *
// @grant GM_registerMenuCommand
// @version 20190322
// ==/UserScript==
