$(function(){
    // Makes sure that anytime the Chrome extension is opened, the total is already displayed and updated (also add the limit later on to be refreshed)
    chrome.storage.sync.get(['total','limit'], function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
    });

    $('#spendAmount').click(function(){
        // When user clicks on the spendAmount button
        chrome.storage.sync.get(['total', 'limit'], function(budget){
            // Create a Chrome storage and check if total already exists
            var newTotal = 0;
            if (budget.total){
                // If budget existing (from the Chrome storage)
                newTotal += parseInt(budget.total);
                    // Add the new total
            }
            var amount = $('#amount').val();
            if (amount){
                // Add the amount that the user entered to the new total
                newTotal += parseInt(amount);
            }
            chrome.storage.sync.set({'total': newTotal}, function(){
                if (amount && newTotal >= budget.limit){
                    // Create a notification options object
                    var notifoptions = {
                        type: 'basic',
                        iconUrl: 'icon128.png',
                        title: 'Limit reached!',
                        message: "Uh oh. Looks like you reached your limit!"
                    };
                    // Use Chrome API to create a notification
                    chrome.notifications.create('limitNotif', notifoptions);
                }
            });
                // Sets the new total in the Chrome storage
            $('#total').text(newTotal)
                // Updates the new total
            $('#amount').val('');
                // Clear the input box
        });
    });
});