
chrome.browserAction.onClicked.addListener(function(activeTab){
	var range = "cookies";
	//var range = window.getSelection();
	//alert(range);
  	//var range = window.clipboardData.getData('Text');
  	var newURL = 'https://translate.google.com/?hl=en&ie=UTF-8&text='+range+'&sl=en&tl=gu#en/hu/'+range+'';
  	chrome.tabs.create({ url: newURL });
  	//alert(range);
});