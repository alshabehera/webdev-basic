var grades = [2,3,4,5,6,7];
var sum=0;
if (grades.length > 0){
    for(index=0; index<grades.length; index++){
    sum= sum+grades[index];
}
document.write(sum/grades.length);
}
else document.write("Empty Array");

