'use strict';

// import fillForm from "./script";

function click(e) {  
  chrome.tabs.executeScript(null, {
    code: `var config = ${JSON.stringify(e.target.id.toString())};`
  });
  chrome.tabs.executeScript(null,
      {file:"script.js"});
      // {code:"document.getElementById('coverLetter').value='" + e.target.id + "'"});
      // {code:"document.getElementById('coverLetter').value='" + e.target.id + "'"});
      // {code:"document.getElementById('coverLetter').value='" + e.target.id + "'"});
      // {code:"document.getElementById('coverLetter').style.backgroundColor='" + e.target.id + "'"});

  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
