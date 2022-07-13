// Listen to the message from the content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendRespons){
    if (request.todo == "showPageAction"){
        // This method retrieves all the tags
        chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
            chrome.pageAction.show(tabs[0].id);
        });
    }
});