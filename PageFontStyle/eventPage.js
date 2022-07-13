// Listen to the message from the content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendRespons){
    if (request.todo == "showPageAction"){
        // This method retrieves all the tags
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});
// chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
//     chrome.pageAction.show(tabs[0].id);
// });


// Attempting to shift to Manifest 3
// {
//     "manifest_version": 3,
//     "name": "PageFontStyle Extension",
//     "version": "1.0",
//     "description": "Changes font style on a specific page",
//     "icons": {
//         "128": "icon128.png",
//         "48": "icon48.png",
//         "16": "icon16.png"
//     },
//     "action": {
//         "default_icon": "icon128.png",
//         "default_popup": "popup.html",
//         "default_title": "PageFontStyle"
//     },
//     "background": {
//         "service_worker": "/eventPage.js"
//     },
//     "content_scripts": [
//         {
//             "matches": ["https://developer.chrome.com/*"],
//             "js": ["content.js", "jquery-3.6.0.min.js"]
//         }
//     ],
//     "permissions": [
//         "tabs"
//     ],
//     "host_permissions": [
//         "https://developer.chrome.com/*"
//     ]
// }