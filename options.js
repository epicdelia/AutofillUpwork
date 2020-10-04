
/**
 * Saves options to chrome.storage
 * Loop through each item in profiles by selecting category class
 * Create JSON objects for profiles and push onto array to store in chrome storage
 */
function save_options() {
  var arr = [];
  for (var i = 0; i < $(".category").length; i++) {
    var profile = $(`#profile${i}`).text();
    var bio = $(`#bio${i}`).val();
    arr.push({ name: profile, bio: bio });
  }

  chrome.storage.sync.set({
    arr: arr
  }, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

/**
 * Restores existing profiles from chrome.storage
 * Loop through each JSON object and populates data
 * Creates DOM element for profiles and appends to DOM
 */
function restore_options() {
  chrome.storage.sync.get({
      arr: ''
    },
    function (data) {
      if(data.arr){
        for (var i = 0; i < data.arr.length; i++) {
          create_profiles_in_DOM(i,data.arr[i].name)
          $(`#profile${i}`).val(data.arr[i].name);
          $(`textarea#bio${i}`).val(data.arr[i].bio);
        }
      }
    });
}

/**
 * Creates a new profile with user input
 * Resets user input after it is used
 */
function create_new_profile() {
  var n = $(".category").length;
  var inputValue = $("#myInput").val();
  create_profiles_in_DOM(n,inputValue);
  save_options();
  $("#myInput").val("");
}

/**
 * Resets all data by clearing chrome storage
 */
function reset() {
  var reset_data = confirm("Are you sure you want to reset all profiles?");
  if (reset_data) {
    chrome.storage.sync.clear(function() {
      var error = chrome.runtime.lastError;
      if (error) {
        console.error(error);
      }
    });
  }
  location.reload();

}

/**
 * Adds profile to DOM given a profile name and number
 */
function create_profiles_in_DOM(n,profile) {
  let element = `    <div class="category">
        <legend>
            <span class="number">${n+1}</span>
            <label id="profile${n}" class="profile">${profile}</label>
        </legend>
        <div class="info_option">
            <label for="bio${n}">Cover Letter:</label>
            <textarea id="bio${n}" name="user_bio"></textarea>
        </div>
    </div>`;
  $("#data").append(element);
}

/**
 * Main functions and event listeners
 */
window.addEventListener('load', () => {
  restore_options();
  $('#save').click(save_options);
  $('#add_new_profile').click(create_new_profile);
  $('#reset').click(reset);
}, false);
