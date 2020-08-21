// Saves options to chrome.storage
function save_options() {
  var arr=["test"];

  var profiles = document.getElementsByClassName("category")
  for (var i = 0; i < profiles.length; i++) {
    var profile = $(`#profile${i}`).text();
    var bio = $(`#bio${i}`).val();
    var obj = { id: i , name: profile, bio: bio };
    arr.push(obj);
  }

  chrome.storage.sync.set({
    bio: '',
    list: arr
  }, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  console.log("restoring options")
  chrome.storage.sync.get({
    bio: 'test',
    list: arr },
    function (data) {
      console.log("in options")
      console.log(data.list);
      console.log(data.bio)
      // update(data.list); //storing the storage value in a variable and passing to update function
    // function (items) {
    // console.log("this is it" + arr);
    // items.forEach((item, i) => {
    //   console.log(item)
    //   // document.getElementById(`bio${i}`).value = item.bio;
    //   add_profile(item.bio)
    // })
  });

  function update(array) {
    //
    // obj = JSON.parse(text);
    // document.getElementById("demo").innerHTML += add_element(obj.profile[1], obj.desc[1])
    //
    array.push("testAdd");
    //then call the set to update with modified value
    chrome.storage.sync.set({
      list: array
    }, function () {
      console.log("added to list with new values");
    });
  }
}

//
// function add_element(profile, n) {
//   let element = `    <div class="category">
//         <legend><span class="number">${n}</span>${profile}</legend>
//         <div class="info_option">
//             <label for="bio${n}">Cover Letter:</label>
//             <textarea id="bio${n}" name="user_bio"></textarea>
//         </div>
//     </div>`;
//   const position = 'beforeend'
//   document.getElementById('data').insertAdjacentHTML(element);
// }

function create_new_profile() {
  var n = document.getElementsByClassName("category").length + 1;
  console.log(n);
  var inputValue = document.getElementById("myInput").value;
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
  document.getElementById('data').insertAdjacentHTML('beforeend', element);
  document.getElementById("myInput").value = "";
  save_options()
}

$(document).ready(function(){
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
    save_options);
  document.getElementById('add_new_profile').addEventListener('click', create_new_profile);
})




