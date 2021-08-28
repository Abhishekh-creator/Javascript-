// Formatting Currency

function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return `$ ${value}`;
}

// Formatting Split

function formatSplit(value) {
  if (value === 1) return value + " person";
  return value + " people";
}

function update() {
  // Events and user input 

  let bill = Number(document.querySelector("#yourBill").value);
  let tipPrecent = Number(document.querySelector("#tipInput").value);
  let split = Number(document.querySelector("#splitInput").value);

  //  Calculating  Values

  let tipValue = bill * (tipPrecent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;

  // Displaying Values

  document.querySelector("#tipPrecent").innerHTML = tipPrecent + "%";
  document.querySelector("#tipValue").innerHTML = formatMoney(tipValue);
  document.querySelector("#totalWithTip").innerHTML = formatMoney(bill + tipValue);
  document.querySelector("#splitValue").innerHTML = formatSplit(split);
  document.querySelector("#billEach").innerHTML = formatMoney(newBillEach);
  document.querySelector("#tipEach").innerHTML = formatMoney(tipEach);
}

let container = document.querySelector("#container");
container.addEventListener("input", update);








// Events and user input 

// 1. First I selected all input of type="range", and input of type="number" . I used .value to  returns the value of the value attribute of a text field of inputs.

// 2. This main section is wrapping all of our inputs and now each time one of our inputs has been updated, this will now call our update function, we see the tip percentage. And also the splits , bill value.

/*================================= */

//  Calculating & Displaying Values

// 1. First I converted output of all input values to numbers.

// 2. let tipValue; is used to calculate the total tip need . let tipEach is used to calculate the tip per person . Then, newBillEach is bill share is given by everyone.

// 3.  document.querySelector("#tipPrecent"), is selected to show the tipPercent in span adjacent to the label Select Bill. 

// 4. document.querySelector("#tipValue"),document.querySelector("#totalWithTip") are used to display tip and total bill including tip.

// 5.  document.querySelector("#splitValue").innerHTML = split ; document.querySelector("#billEach") ; document.querySelector("#tipEach") are the span with id to show the value on the screen.


// Formatting Currency And Split

// 1. formatMoney(); is used to Format a number to a fixed number of decimal places using toFixed() method.At the moment when we call in the toFixed method, this is actually rounding either up or down depending on the number. So, we use Math.ceil() Returns the smallest integer (whole number) greater than or equal to a number.


// 2. formatSplit(); is used in document.querySelector("#splitValue") to show the tip is given by a person or individuals.