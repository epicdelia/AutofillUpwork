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
  console.log(divs)
  for (let i = 0; i < divs.length; i++) {
    console.log(i)
    divs[i].addEventListener('click', () => click(i));
  }
});

