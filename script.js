'use strict';

console.log(`TEST ${config}`)

chrome.storage.sync.get({
    [config]: "",
    arr: ''
  }, function(items) {
    console.log("restoring values", items);
    document.getElementById('coverLetter').value = items.arr[config].bio;
  });

