// ==UserScript==
// @name     CSA
// @version  1
// @include https://view.csagroup.org/hzYvtN/AriaViewer*
// @require       https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// @grant    GM_download
// @grant    GM.download
// ==/UserScript==



var pagenum = 1;

function fuck(msg) {
  console.log("FUCK: "+msg);
}

function download_image_when_loaded() {
  	fuck("download_image_when_loaded");
    fuck($("body.st-page-loaded"));
    if (null == $("body.st-page-loaded")) {
    	setTimeout(download_image_when_loaded,500);
    }
  	else {
      fuck("downloading");
      var blob = $("canvas")[0].toDataURL({ format: 'png' });

			var arg = {
  			url: blob,
    		name: "p"+pagenum+".png",
        onload: next
			};

			GM_download(arg);
      //next();
      pagenum++;
    }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function next() {
  fuck("next");
	$("a[data-action=next-page]")[0].click();
  fuck($("a[data-action=next-page]"));
  var dt = 1000+getRandomInt(500);
  setTimeout(download_image_when_loaded,dt);
  //wait until we dont have a loading class, that means its loaded
}

function wheres_the_canvas() {
  fuck($("canvas")[0].toDataURL());
}

function k_fuck_you() {
  setTimeout(download_image_when_loaded,3000);
  //setInterval(wheres_the_canvas,1000);
}

fuck("STARTING UP");
window.addEventListener('load', k_fuck_you);
