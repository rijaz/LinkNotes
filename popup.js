//Triggered when the popuphas loaded
window.addEventListener('load', function load(event){
  retrieve();
  
  document.getElementById('add').onclick = function(){
    console.log("navigating to add_new");
    //Changes the url while the popup is still open use browserAction for when closed
    window.location.href="add_new.html";
  };
});

function retrieve(){
  console.log('Getting all the values')
  //Get Task and parse into JDSON
  var tasksList = document.getElementById('tasksList');

  tasksList.innerHTML = '';

  chrome.storage.sync.get(null, function(items){
    for (key in items){
      var url = key;
      var name = items[key][0];
      var notes = items[key][1];
      console.log("url key: " + key + " and values are title: " + items[key][0] +" and notes "+ items[key][1]);
      

      tasksList.innerHTML += '<div class="row">'+
                            '<h2 class="title">' + name + '</h2>'+
                            '<p>' + notes + '</p>' +
                            '<a href="#" class="del_btn" class="del_'+url+'">Delete</a>'+
                            '</div>';
    
    }
    
  });

  // storage.clear(function(){
  //   console.log('cleared')
  // });
}
