var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function goTo(path){
  window.location.assign(path);
}

function showMenu(){
  if (document.getElementById('phn-menu').classList.contains('hide2') === true){
    document.getElementById('phn-menu').classList.remove('hide2');
  }else{
    document.getElementById('phn-menu').classList.add('hide2');
  }
}
