var tab_title, tab_url;

//Get all the current active tabs in the window
var tab_query = { active : true, currentWindow: true };

function callback(tabs){
  //Tab array will be returned with only one elem
  var current_tab = tabs[0];
  tab_title = current_tab.title;
  tab_url = current_tab.url;
  console.log("Current tab title: "+ tab_title);
  console.log("Current tab URL: "+ tab_url);
  popup_title(tab_title);
}

function popup_title(title){
  //Set the title in the pop-up
  console.log("trying to update: " + title);
  document.getElementById("title").innerHTML = title;
}

//Gets all the tabs with the specified properties in tab_query
chrome.tabs.query(tab_query, callback);
