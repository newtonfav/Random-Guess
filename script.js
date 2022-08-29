//INITIALISATION

const input = document.querySelector(".guess__input");
const submit = document.querySelector(".guess__submit");
const gameStatus = document.querySelector(".status");

let numGenerated = Math.trunc(Math.random() * 100) + 1;

let lessThan = numGenerated - 10;
let greaterThan = numGenerated + 10;
let arr1 = [];
let arr2 = [];
let lastInput;

//FUNCTIONS

function generated(num) {
  return num != numGenerated && num >= 1 && num <= 100;
}

const withinTen = function (start, end, arr) {
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
};

withinTen(lessThan, numGenerated, arr1);
withinTen(numGenerated, greaterThan, arr2);

let newArr1 = arr1.filter(generated);
let newArr2 = arr2.filter(generated);

const compareInput = function (input, lastInput) {
  gameStatus.textContent = finalArr.includes(input) ? "WARM⛅" : "COLD❄️";

  if (!finalArr.includes(input)) return;
  if (input === lastInput) return;
  if (lastInput === undefined) return;

  let lastIndex = finalArr.indexOf(lastInput);
  let inputIndex = finalArr.indexOf(input);

  // if (
  //   !(newArr1.includes(input) && newArr1.includes(lastInput)) ||
  //   !(newArr2.includes(input) && newArr2.includes(lastInput))
  // )
  //   return;

  if (inputIndex < numGenerated && lastIndex < inputIndex)
    gameStatus.textContent = "WARMER😬";

  if (inputIndex < numGenerated && lastIndex > inputIndex)
    gameStatus.textContent = "COLDER🥶";

  if (inputIndex > numGenerated && inputIndex < lastIndex)
    gameStatus.textContent = "WARMER😬";

  if (inputIndex > numGenerated && inputIndex > lastIndex)
    gameStatus.textContent = "COLDER🥶";
};

//WORKINGS
let finalArr = [...newArr1, ...newArr2];
// compareInput();
// console.log(newArr1);
// console.log(newArr2);
// console.log(lessThan, greaterThan);
// console.log(`Number generated: ${numGenerated}`);
console.log(finalArr);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const inputValue = Number(input.value);
  compareInput(inputValue, lastInput);

  if (numGenerated === inputValue) {
    gameStatus.textContent = "Correct Guess🥳";
    return;
  }

  if (inputValue < 1 || inputValue > 100) {
    gameStatus.textContent = "OUT OF BOUNDS⚠️";
    return;
  }

  // gameStatus.textContent = finalArr.includes(inputValue) ? "WARM⛅" : "COLD❄️";

  console.log(lastInput);

  lastInput = inputValue;
});
