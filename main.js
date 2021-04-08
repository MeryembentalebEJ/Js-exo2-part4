var list = ['Meryem', 'Soulainah', 'Emma', 'Marcela', 'Wiam'];
// Add and Show refers to the Onclick on the HTML
function add(){
    var input = document.getElementById('input').value; // WE select our id from the HTML which is "input" 
    //The .value means the value of the input(things we're going to put on the field)
    list.unshift(input); // the unshift array permets to add one or more elements to the begining of the table. 
    alert(input);
}


// Show the table with the new added elements. 
function show(){
    alert(list);
}

