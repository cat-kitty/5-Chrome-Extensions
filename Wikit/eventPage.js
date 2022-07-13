// Creating the context menu
var menuItem = {
    "id": "wikit",
    "title": "Search on Wikipedia",
    "contexts": ["selection"]
};

// So the context menu is only created once
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(menuItem);
});

// Formats any text that is selected to be able to be appended to a URL
function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

// Listen for when user clicks on context menu item
chrome.contextMenus.onClicked.addListener(function(clickData){
    // First check if the user clicked the Wikit extension, then check if text was selected
    if (clickData.menuItemId == "wikit" && clickData.selectionText) {
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        // Create a new window
        var createData = {
            "url": wikiUrl,
            "type": "popup",
            "top": 5,
            "left": 5
        };
        chrome.windows.create(createData, function(){});
    }
});