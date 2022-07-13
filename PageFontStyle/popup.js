$(function(){
    var color = $('#fontColor').val();
    // On one of the three options, chage (when the value changes), paste (when the user copy or pastes), keyup (if the user types something) a function will be executed
    $('#fontColor').on("change paste keyup", function(){
        color = $(this).val();
    });
    $('#btnChange').click(function(){
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, {todo:"changeColor", clickedColor: color});
        });
    });
});