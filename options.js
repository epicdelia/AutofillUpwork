
// Saves options to chrome.storage

function save_options() {
    var bio = document.getElementById('bio').value;
    var sec = document.getElementById('sec').value;
    chrome.storage.sync.set({
      bio: bio,
      sec: sec,
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
    chrome.storage.sync.get({
      bio: '',
      sec: ''
    }, function(items) {
      document.getElementById('bio').value = items.bio;
      document.getElementById('sec').value = items.sec;
      console.log("restoring values " +  items.sec, items.bio);
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);
      