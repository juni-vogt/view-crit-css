var toggle = function() {
	chrome.tabs.executeScript({
	  file: 'toggle-external-stylesheets.js'
	});
};

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(toggle);

chrome.commands.onCommand.addListener(function(command) {
	if(command === "toggle-external-stylesheets") {
		toggle();
	}
});