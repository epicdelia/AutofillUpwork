'use strict';

// document.getElementById('coverLetter').value= "hello";

console.log(`TEST ${config}`)

chrome.storage.sync.get({
    [config]: "",
    likesColor: true
  }, function(items) {
    console.log("restoring values " +  items.bio, items.sec, items[config]);
    document.getElementById('coverLetter').value = items[config]
  });

//   chrome.storage.sync.get({
//     sec: 'second.',
//     likesColor: true
//   }, function(items) {
//     console.log("restoring values " +  items.bio, config);
//     document.getElementById('coverLetter').value = items.bio
//   });

// const fillForm = (id) => {
//     console.log(id)
//     chrome.storage.sync.get({
//         bio: 'Hello, nice to meet you.',
//         likesColor: true
//       }, function(items) {
//         console.log("restoring values " +  items.bio);
//         document.getElementById('coverLetter').value = items.bio
//       });
// }

// export default fillForm