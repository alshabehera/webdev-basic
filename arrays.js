
var fruit=["mango","orange","stawberry"];
function loadfunction()
{
    document.getElementById("fruit").innerHTML =fruit;
}
function myFunction()
{
    var fruits=prompt("enter your avourite fruit?");
    fruit[fruit.length]=fruits;
    document.getElementById("fruit").innerHTML =fruit;
    document.write("time to learn java");
    
}