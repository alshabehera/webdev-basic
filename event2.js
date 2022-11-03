function closeme()
{ 
    x=document.getElementById('demo'); //select the element
   // x.style.display="none"; //option 1:changing the style attribute directly
    //option2:changing the classname
    x.className="closed";

}
function openme()
{
    x=document.getElementById('demo');
    x.style.display="block";
    //x.className="opened";
}