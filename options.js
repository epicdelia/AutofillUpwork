// Saves options to chrome.storage
function save_options() {
  var arr = [];
  for (var i = 0; i < $(".category").length; i++) {
    var profile = $(`#profile${i}`).text();
    var bio = $(`#bio${i}`).val();
    arr.push({ name: profile, bio: bio });
  }

  chrome.storage.sync.set({
    bio: '',
    arr: arr
  }, function () {
    // Update status to let user know options were saved.
    $("#status").textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
      bio: '',
      arr: ''
    },
    function (data) {
      if(data.arr){
        for (var i = 0; i < data.arr.length; i++) {
          $(`textarea#bio${i}`).val(data.arr[i].bio);
        }
      }
    });
}

function create_new_profile() {
  var n = $(".category").length + 1;
  var inputValue = $("#myInput").val();
  let element = `    <div class="category">
        <legend>
            <span class="number">${n}</span>
            <label id="profile${n}" class="profile">${inputValue}</label>
        </legend>
        <div class="info_option">
            <label class="profile" for="bio${n}">Cover Letter:</label>
            <textarea id="bio${n}" name="user_bio"></textarea>
        </div>
    </div>`;
  $("#data").append(element);
  $("#myInput").val("");
  save_options()
}

window.onload = function() {
  restore_options();
  $('#save').click(save_options);
  $('#add_new_profile').click(create_new_profile);
};
