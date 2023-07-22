//* andiamo a prendere il contenitore delle box

const boxContainer = document.getElementById("box-container");

//* ci creiamo un ciclo che va da 1 a 100 numeri

for (let numero = 1; numero <= 100; numero++) {
  let output = numero;
  //* se i numeri sono multipli di 3 e 5 stampiamo "FizzBuzz"

  if (numero % 3 == 0 && numero % 5 == 0) {
    output = "FizzBuzz";
    //* Altrimenti se i numeri sono multipli di 3 stampiamo "Fizz"
  } else if (numero % 3 == 0) {
    output = "Fizz";

    //* Altrimenti se i numeri sono multipli di 5 stampiamo "Buzz"
  } else if (numero % 5 == 0) {
    output = "Buzz";

    //* Altrimenti stampiamo il numero
  }
  console.log(output);

  //*  Creo un div che conterrà l'output
  const myDiv = document.createElement("div");

  //* aggiungo all'interno del div l'output
  myDiv.innerHTML = output;

  //* aggiungo la classe box per creare la box
  myDiv.classList.add("box");
  myDiv.classList.add(output);

  //* in versione estesa potevamo fare così:
  // if (output == "FizzBuzz") {
  //   myDiv.classList.add("FizzBuzz");
  // } else if (output == "Fizz") {
  //   myDiv.classList.add("Fizz");
  // } else if (output == "Buzz") {
  //   myDiv.classList.add("Buzz");
  // }

  //* aggiungo il contenuto nella l'output nella box
  boxContainer.append(myDiv);
}
