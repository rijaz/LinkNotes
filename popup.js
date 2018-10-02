var tab_title, tab_url, notes_value;

console.log("i am working mf")

window.addEventListener('load', function load(event){
  chrome.tabs.query(tab_query, callback);
  document.getElementById('send').onclick = function(){
    notes_value = document.getElementById('notes').value;
    console.log("you typed in: ", notes_value);
  };
});

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
  document.getElementById("title").innerHTML = title;
}

//Gets all the tabs with the specified properties in tab_query
//chrome.tabs.query(tab_query, callback);
