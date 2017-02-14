var j = 0;
    // oubli = document.querySelector('#oubli'),
    // retard = document.querySelector('#retard'),
    // injoignable = document.querySelector('#injoignable'),
    // tard = document.querySelector('#tard');

function conditionSelect(){
    if(j === 1){
      alert("11111111 !!!");
    } else if (j === 2) {
        alert("22222 !!");
    } else if (j === 3) {
        alert("33333");
    } else if (j === 4) {
        alert("44444");
    } else{
        alert("rien");
    }
    console.log("j : " + j);
    }

oubli.addEventListener('click', function(){
  //alert("ok");
  j = 1;
  conditionSelect();
});

retard.addEventListener('click', function(){
  //alert("ok");
  j = 2;
  conditionSelect();
});

injoignable.addEventListener('click', function(){
  //alert("ok");
  j = 3;
  conditionSelect();
});

tard.addEventListener('click', function(){
  //alert("ok");
  j = 4;
  conditionSelect();
});
