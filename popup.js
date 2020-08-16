'use strict';

function click(e) {  
  chrome.tabs.executeScript(null, {
    code: `var config = ${JSON.stringify(e.target.id.toString())};`
  });
  chrome.tabs.executeScript(null,
      {file:"script.js"});

  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div.popup');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
