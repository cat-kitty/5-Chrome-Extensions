// Create a context menu item, when text is hilighted and right clicked an option to go through the Budget Manager app appears
var contextMenuItem = {
    "id": "spendMoney",
    "title": "Spend Money",
    "contexts": ["selection"]
        // This indicates when the user selects something on the webpage rather than other contexts like clicking on images or videos
};
chrome.contextMenus.create(contextMenuItem);

// Checks if the value is an integer
function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && ! isNaN(parseInt(value, 10));
}

// Listen for a click (context menu functionality)
chrome.contextMenus.onClicked.addListener(function(clickData){
    if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {
        // Check if user clicked the extension in the context menu and check if the user really hilighted something
        if (isInt(clickData.selectionText)){
            chrome.storage.sync.get(['total', 'limit'], function(budget){
                var newTotal = 0;
                if (budget.total){
                    newTotal += parseInt(budget.total);
                }
                newTotal += parseInt(clickData.selectionText);
                chrome.storage.sync.set({'total': newTotal}, function (){
                    if (newTotal >= budget.limit){
                        var notifoptions = {
                            type: 'basic',
                            iconUrl: 'icon128.png',
                            title: 'Limit reached!',
                            message: "Uh oh! Looks like you reached your limit."
                        };
                        chrome.notifications.create('limitNotif', notifoptions);
                    }
                });
            });
        }
    }
});

// Adding badges
chrome.storage.onChanged.addListener(function(changes, storageName){
    chrome.action.setBadgeText({"text": changes.total.newValue.toString()});
});