var tab_title, tab_url, tab_notes;
var storage = chrome.storage.sync;

//Triggered when the popuphas loaded
window.addEventListener('load', function load(event){
  //Gets all the tabs with the specified properties in tab_query
  chrome.tabs.query(tab_query, callback);
  //Triggered with the "Submit" button
  document.getElementById('send').onclick = function(){
    //Retrieve any notes about the link
    tab_notes = document.getElementById('notes').value;
    save();
  };

  document.getElementById('view').onclick = function(){
    retrieve();
  };
});

//Get all the current active tabs in the window
var tab_query = { active : true, currentWindow: true };

function callback(tabs){
  //Tab array will be returned with only one elem
  var current_tab = tabs[0];
  tab_title = current_tab.title;
  tab_url = current_tab.url;
  set_title(tab_title);
}

function set_title(title){
  //Set the title in the pop-up
  document.getElementById("title").innerHTML = title;
}

function save(notes){
  console.log("Tab title: "+ tab_title);
  console.log("Tab URL: "+ tab_url);
  console.log("Notes: ", tab_notes);
  var new_obj = {}
  new_obj[tab_title] = tab_notes;
  storage.set(new_obj);
  // storage.set({tab_title: notes}, function(){
  //   console.log('Value is set to ' + notes);
  // });
}

function retrieve(){
  console.log('Getting all the values')
  chrome.storage.sync.get(null, function(items){
    for (key in items){
      console.log("Key: " + key + " and value: " + items[key]);
    }
  });
}

//chrome.tabs.query(tab_query, callback);
