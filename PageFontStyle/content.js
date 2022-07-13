// Send a message to the event page to show the icon/hilight the icon
chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.todo == "changeColor"){
        var addColor = "#" + request.clickedColor;
        $('h1').css('color', addColor);
    }
});