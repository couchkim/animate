

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
    let subtractDays = moment(input, 'MMMM D, YYYY').subtract(3, 'months')
    showThird.textContent = subtractDays.format('l');
    parent2.appendChild(showThird);

// show how long from now
    let showFourth = document.createElement('h3');
    let parent3 = document.querySelector('#fromNow');
    let fromNow = moment(input, 'MMMM D, YYYY').fromNow();
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

// start of week
  let dom1 = document.querySelector('#start');
  let startOf = document.createElement('h3');
  startOf.textContent = moment().startOf('week');
  dom1.appendChild(startOf);

// end of year
  let dom2 = document.querySelector('#end');
  let endOf = document.createElement('h3');
  endOf.textContent = moment().endOf('year');
  dom2.appendChild(endOf);

// days in month
  let dom3 = document.querySelector('#dim');
  let daysInMonth = document.createElement('h3');
  daysInMonth.textContent = moment().daysInMonth();
  // daysInMonth.textContent = moment("2012-02", "YYYY-MM").daysInMonth();
  dom3.appendChild(daysInMonth);

// is today before
  let dom4 = document.querySelector('#before');
  let before = document.createElement('h3');
  let compare = moment().isBefore('2018-10-10');
  before.textContent = compare;
  dom4.appendChild(before);


})
















