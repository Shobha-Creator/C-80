var names = [];

function submit() {
    var guestList = document.getElementById("input_name").value;
    names.push(guestList);
}


function show() {
    document.getElementById("names").innerHTML = names;
    
}

function sort_show() {
  names.sort();
  document.getElementById("sorted_names").innerHTML = names;    
  
}

function search() {
    var s = document.getElementById("input_search").value;
    var found = 0;
    var j;
    for (j = 0; j < names.length; j++){
        if (s == names[j]){
            found = found + 1;
            
        }
    }
    document.getElementById("p_search").innerHTML = "Name found" + found "time/s";
    console.log("Name found" + found "time/s");
}