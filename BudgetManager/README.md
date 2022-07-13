# Budget Manager Extension

## Motivation
The goal of writing this extension is to get a basic understanding of making Chrome extensions.

## Tech/Framework Used
This extension uses JSON, HTML, CSS, JS and jQuery.

## Installation
No installation is required, simply download the folder and save it on the computer that is usually not accessed. Then go to chrome://extensions/ and turn on "Developer Mode" and choose the "Load Unpacked" option. Select the folder of this extension and it will be ready to use in the toolbar.

After upload, it should appear as below:<br/>
<img src="Budget Manager Extension.png" alt="Budget Manager Extension in Chrome Extension Developer" width="400"/>

## How to Use
This is a very simple Chrome extension. Enter integers (whole value numbers) into the text area and it will be added to the total spent.

Right click on the extension and seletct "Options" to set the Budget Manager Options including the Limit by entering the limit into the text area (as an integer) and press the "Save Limit" button. Saving the limit will close the options tab. Reset the total (amount spent) with the "Reset Total" button. Upon resetting the total amount spent, a notification will pop up indication that the total has been successfully reset to 0.

If the total spent that is submitted is over the limit, a notification will pop up reminding that the user is spending over the limit. In addition, there will be a small badge in the corner of the icon in the toolbar which displays the amount spent.

There is also a context menu functaionality. When hilighting text and right clicking, the option to add the number to the Spend Money extension will also appear. Clicking the Spend Money extension will add the number to the total spent if and only if it is a valid number. (This will be seen in the small badge.)

### Appearance:
<img src="Extension Pin.png" alt="Budget Manager Extension Pin" width="400"/>

Extension in action: <br/>

Budget Manager Options

<img src="Budget Manager Options.png" alt="Budget Manager Options" width="400">

Budget Manager Context Menu

<img src="Budget Manager Context Menu.png" alt="Budget Manager Context Menu" width="400">

Budget Manager Badge - <img src="Budget Manager Badge 2.png" alt="Budget Manager Badge" width="25">

<img src="Budget Manager Badge 1.png" alt="Budget Manager Badge" width="400">

Budget Manager Notifications

<img src="Budget Manager Limit Notification.png" alt="Budget Manager Limit reached! Notification" width="400">
<img src="Budget Manager Reset Notification.png" alt="Budget Manager Toatal reset! Notification" width="400">


## Credits
This extension was created based on Udemy's Chrome Extensions: Develop 5 chrome extensions from scratch lesson by Vishwas Gopinath. (Extension 2 of 5)

## Footnotes:
*This extension was created by Zhi Rong Cai on July 7, 2022. It can be found on the Github @cat-kitty. This project is considered complete and no updates are forseeable.*

---

> **Acknowledgement of Errors**
> <br /> It is recognized that there is a runtime error which appears:
`Unchecked runtime.lastError: Cannot create item with duplicate id spendMoney`
> <br /> However, this has been recognized and ignored because it does not affect the functionality and has been ignored at this time.