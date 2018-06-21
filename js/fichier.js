//Déclaration d'une fonction
function number(){
  // Déclaration des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  //Déclaration du regex
  var regex =/^[0-9]+[.]?[0-9]*$/;
  //boite de dialogue avec appel des variables
  if(regex.test(firstNumber) && regex.test(secondNumber)){
    var modulo = firstNumber % secondNumber;
    alert(modulo);
  }else{
    alert('erreur');
  }
  }
