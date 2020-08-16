'use strict';

console.log(`TEST ${config}`)

chrome.storage.sync.get({
    [config]: ""
  }, function(items) {
    console.log("restoring values " + items[config]);
    document.getElementById('coverLetter').value = items[config]
  });


// const fillForm = (id) => {
//     console.log(id)
//     chrome.storage.sync.get({
//       [config]: ""
//     }, function(items) {
//         console.log("restoring values " +  items.bio);
//         document.getElementById('coverLetter').value = items.bio
//       });
// }
//
// export default fillForm