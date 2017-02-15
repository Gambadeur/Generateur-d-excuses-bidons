// Récupérer l'event click sur le bouton facon Vanilla Js
btn.addEventListener("click", function(){
  NoseAnim()
  if(j === 0){
    Excuse();
  } else if (j === 1) {
    oubliList();
  } else if (j === 2) {
    retardList();
  } else if (j === 3) {
    injoingableList();
  } else if (j === 4) {
    plusTardList();
  }
});


var j = 0;
    // oubli = document.querySelector('#oubli'),
    // retard = document.querySelector('#retard'),
    // injoignable = document.querySelector('#injoignable'),
    // tard = document.querySelector('#tard');


bidon.addEventListener('click', function(){
      //alert("ok");
      j = 0;
    });

oubli.addEventListener('click', function(){
  //alert("ok");
  j = 1;
});

retard.addEventListener('click', function(){
  //alert("ok");
  j = 2;
});

injoignable.addEventListener('click', function(){
  //alert("ok");
  j = 3;
});

tard.addEventListener('click', function(){
  //alert("ok");
  j = 4;
});
