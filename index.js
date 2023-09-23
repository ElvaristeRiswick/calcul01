function All() {
  let n1 = document.getElementById("number1").value;
  let n2 = document.getElementById("number2").value;

  let number1 = parseFloat(n1);
  let number2 = parseFloat(n2);

  let Alls = number1 + number2;

  window.alert("le resultats est " + Alls);
}

function soustration() {
  let n1 = document.getElementById("number1").value;
  let n2 = document.getElementById("number2").value;

  let number1 = parseFloat(n1);
  let number2 = parseFloat(n2);

  let Ad = number1 - number2;

  window.alert("le resultats est " + Ad);
}

function multiplication() {
  let n1 = document.getElementById("number1").value;
  let n2 = document.getElementById("number2").value;

  let number1 = parseFloat(n1);
  let number2 = parseFloat(n2);

  let mul = number1 * number2;

  window.alert("le resultats est " + mul);
}

function division() {
  let n1 = document.getElementById("number1").value;
  let n2 = document.getElementById("number2").value;

  let number1 = parseFloat(n1);
  let number2 = parseFloat(n2);

  let divi = number1 / number2;

  window.alert("le resultats est " + divi);
}
