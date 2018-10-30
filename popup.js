//Triggered when the popuphas loaded
window.addEventListener('load', function load(event){
  retrieveLinks();
  
  document.getElementById('delete').onclick = function(){
    console.log('clicked');
    var link_urls = getDeletionLinks();
    deleteLinks(link_urls);
  };

  document.getElementById('add').onclick = function(){
    console.log("navigating to add_new");
    //Changes the url while the popup is still open use browserAction for when closed
    window.location.href="add_new.html";
  };

});

function deleteLinks(toDelete){
  chrome.storage.sync.remove(toDelete, function(){
    console.log("removed");
  });
  window.location.href="popup.html";
}

function getDeletionLinks(){
  var checked = document.querySelectorAll('input[name=link_check]:checked');    
  var url_list = []
  for (var i=0; i<checked.length; i++) {
    var link_url = checked[i].getAttribute('id');
    console.log("link: " + link_url);
    url_list.push(link_url);
  }
  return (url_list);
}

function retrieveLinks(){
  console.log('Getting all the values')
  //Get Task and parse into JDSON
  var tasksList = document.getElementById('tasksList');
  var delete_btn = document.getElementById('delete');

  tasksList.innerHTML = '';

  chrome.storage.sync.get(null, function(items){
    if(items == null){
      tasksList.innerHTML += "<p> No links to view </p>";
    }

    else{
      delete_btn.removeAttribute('hidden');
      for (key in items){
        var url = key;
        var name = items[key][0];
        var notes = items[key][1];
        console.log("url key: " + key + " and values are title: " + items[key][0] +" and notes "+ items[key][1]);
        
  
        tasksList.innerHTML += '<div class="row">'+
                              '<div class="row_left">'+
                              '<h2 class="title">' + name + '</h2>'+
                              '<p>' + notes + '</p>' +
                              '</div>' +
                              '<div class="row_right">' +
                              '<input type="checkbox" name="link_check" id="'+url+'">'+
                              '</div>' +
                              '</div>';
      
      }
    }
    
  });


function deleteLink(url_name){
  console.log("you tried to delete: " + url_name);
}


  // storage.clear(function(){
  //   console.log('cleared')
  // });
}
