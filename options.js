
let n = 4;

// Saves options to chrome.storage
function save_options() {
    var bio = document.getElementById('bio').value;
    var sec = document.getElementById('sec').value;
    var next = document.getElementById('next').value;

  chrome.storage.sync.set({
      bio: bio,
      sec: sec,
      next: next,
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
      sec: '',
      next: ''
    }, function(items) {
      document.getElementById('bio').value = items.bio;
      document.getElementById('sec').value = items.sec;
      document.getElementById('next').value = items.next;
      console.log("restoring values " +  items.sec, items.bio);
    });
  }

  function add_profile(){
    let n = 4
    let profile = "Graphics"
    let element = `<legend><span class="number">${n}</span> ${profile} </legend> <label >Cover Letter:</label><textarea  name="user_bio"></textarea>`;
    const position = 'beforeend'
    document.getElementById('data').insertAdjacentHTML(position, element);

    chrome.storage.sync.set({
      [items]: ""
    }, function(list) {
      console.log("restoring values " + list[items]);
      document.getElementById('coverLetter').value = list[items]
    });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);
document.getElementById('add_item').addEventListener('click',
  add_profile);
