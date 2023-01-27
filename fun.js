
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);


// creating the list
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myinput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert("you must write something");
    }
    else {
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("myinput").value = "";

    var span = document.createElement("SPAN");
    // var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(i=0; i<close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}





// Close button for appending items from the list
// var mylist = document.getElementsByTagName("li");
// var i;
// for(i=0; i<mylist.length; i++){
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     mylist[i].appendChild(span);
// }

// Close button functionality

// var close = document.getElementsByClassName("close");
// var i;
// for(i=0; i<close.length; i++){
//     close[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

