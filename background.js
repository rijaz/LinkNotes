chrome.browserAction.onClicked.addListener(function(tab){
  console.log('Tab url is ' + tab.url + ' and title is ' + tab.title);
});
