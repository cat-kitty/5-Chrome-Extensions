$(function(){
    chrome.storage.sync.get('limit', function(budget){
        $('#limit').val(budget.limit);
    });

    // When user clicks the Save Limit button
    $('#saveLimit').click(function(){
        var limit = $('#limit').val();
        if (limit){
            chrome.storage.sync.set({'limit': limit}, function(){
                // Sets the value of the Chrome storage
                close();
                    // Closes the tab
            });
        }
    });

    // When user clicks the Reset Total button
    // A callback function is used
    // A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action
    $('#resetTotal').click(function(){
        chrome.storage.sync.set({'total': 0}, function(){
            var notifoptions = {
                type: 'basic',
                iconUrl: 'icon128.png',
                title: 'Total reset!',
                message: "Total has been reset to 0!"
            };
            chrome.notifications.create('resetNotif', notifoptions);
        });
    });
});