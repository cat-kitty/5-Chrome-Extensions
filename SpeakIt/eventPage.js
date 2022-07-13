// Creating the context menu
var menuItem = {
    "id": "speak",
    "title": "Read the text out loud.",
    "contexts": ["selection"]
};

// So the context menu is only created once
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(menuItem);
});

// Listen for when user clicks on context menu item
chrome.contextMenus.onClicked.addListener(function(clickData){
    // First check if the user clicked the SpeakIt extension, then check if text was selected
    if (clickData.menuItemId == "speak" && clickData.selectionText) {
        // Use the chrome extension to select what rate to read the text
        chrome.tts.speak(clickData.selectionText, {'rate': 1});
        // Use https://developer.chrome.com/docs/extensions/reference/tts/ to adjust the speaker if needed
    }
});