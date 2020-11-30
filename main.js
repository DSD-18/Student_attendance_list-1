var name_and_date = [];
function submit(){
    var n1 = document.getElementById ("S1").value;
    var n2 = document.getElementById ("S2").value;
    var n3 = document.getElementById ("S3").value;
    var n4 = document.getElementById ("S4").value;
    var n5 = document.getElementById ("S5").value;
    name_and_date.push(n1);
    name_and_date.push(n2);
    name_and_date.push(n3);
    name_and_date.push(n4);
    name_and_date.push(n5);
    console.log(name_and_date);
    document.getElementById("output").innerHTML= name_and_date;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline";
}
function sort(){
    name_and_date.sort();
    console.log(name_and_date);
    document.getElementById("output").innerHTML=name_and_date;
}