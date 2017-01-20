

const moment = require('moment');


let displayTypes = [
  moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  moment().format("ddd, hA"),
  moment().format('YYYY-MM-DD'),
  moment().format("DDDo, Wo"),
  // day of year, week of year
  moment().format("ddd, hA"),
  // add new format here:
  
]

window.addEventListener('load', function () {

  for (let i = 0; i < displayTypes.length; i++) {
    let parent = document.querySelector('#displayMoment');
    let p = document.createElement('p');
    p.textContent = displayTypes[i];
    parent.appendChild(p);

  }


  let button = document.querySelector('#submit');
  button.addEventListener('click', showOutput);

  function showOutput() {

    // parse the date submitted in the format below
    let input = document.querySelector('#date').value;
    console.log(input);
    let date = moment(input, 'MMMM D, YYYY');

    let showFirst = document.createElement('h3');
    showFirst.textContent = date.format('YYYY-M-D');
    let parent = document.querySelector('#parse');
    parent.appendChild(showFirst);

    // subtract 3 months

    let showThird = document.createElement('h3');
    let parent2 = document.querySelector('#subtract');
    let subtractDays  = moment(input, 'MMMM D, YYYY').subtract(3, 'months')
    showThird.textContent = subtractDays.format('l');
    parent2.appendChild(showThird);

     let showFourth = document.createElement('h3');
     let parent3 = document.querySelector('#fromNow');
    let fromNow  = moment(input, 'MMMM D, YYYY').fromNow();
    showFourth.textContent = fromNow;
    parent3.appendChild(showFourth);

    // add 1 year to input
    let showSecond = document.createElement('h3');
    let parent4 = document.querySelector('#years');
    let addYear = moment(input, 'MMMM D, YYYY').add(1, 'year');
    showSecond.textContent = addYear.format('l');
    parent4.appendChild(showSecond);

    // add 365 days example here

  }

  function 

})
















