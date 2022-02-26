function toggleFunction(){
  let x = document.getElementById("toggle-icon").innerHTML;
  if(x=="close")
  {
    document.getElementById("toggle-icon").innerHTML="menu";
    document.getElementById("toggle-icon").style.color="#3a0176";
    return;
  }
  else{
    document.getElementById("toggle-icon").innerHTML="close";
    document.getElementById("toggle-icon").style.color="#f82873";
    return;
  }
}
function redirectfunction(){
    var initialPage = "http://facebook.com";
    location.href = initialPage;
}
