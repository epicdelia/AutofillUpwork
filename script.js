'use strict';

console.log(`TEST ${config}`)

chrome.storage.sync.get({
    [config]: "",
    arr: ''
  }, function(items) {
    var cl = document.getElementById('coverLetter');
    if(cl){cl.value = items.arr[config].bio;}
  });

