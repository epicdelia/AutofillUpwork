'use strict';

const click = (index) => {
  chrome.tabs.executeScript(null, {
    code: `var config = ${index};`
  });
  chrome.tabs.executeScript(null,
      {file:"script.js"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  const divs = document.querySelectorAll('div.popup');
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', () => click(i));
  }
});

function build_popup(n, profile) {
  let element = `<div class = "front-button popup" id="bio${n}">${profile}</div>\n`;
  $("#popup_data_area").append(element);
}

window.onload = function() {
  chrome.storage.sync.get({
    arr: ''
  }, function(data) {
    if(data.arr){
      $("#no_profiles").remove();
      for (var i = 0; i < data.arr.length; i++) {
        build_popup(i,data.arr[i].name)
      }
    }
    const divs = document.querySelectorAll('div.popup');
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', () => click(i));
    }
  });
};
