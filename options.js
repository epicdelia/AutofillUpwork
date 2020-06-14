
// Saves options to chrome.storage

function save_options() {
    var bio = document.getElementById('bio').value;
    console.log("got value of " + bio);
    var likesColor = document.getElementById('like').checked;
    chrome.storage.sync.set({
      bio: bio,
      likesColor: likesColor
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
      console.log("in restore");
    chrome.storage.local.get(['bio'], function(result) {
        console.log('Value currently is ' + result.key);
      });
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
      bio: 'Hello, nice to meet you.',
      likesColor: true
    }, function(items) {
      document.getElementById('bio').value = items.bio;
      document.getElementById('like').checked = items.likesColor;
      console.log("restoring values " +  items.bio);

    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);