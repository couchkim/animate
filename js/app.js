

const moment = require('moment');


console.log(moment('2017-10-28').fromNow());

let displayTypes = [                                
  moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
  moment().format("ddd, hA"),  
  moment().format('YYYY-MM-DD')   
]


window.addEventListener('load', function () {

for(let i=0; i<displayTypes.length; i++){
  let parent = document.querySelector('#displayMoment');
  let p = document.createElement('p');
  p.textContent = displayTypes[i];
  parent.appendChild(p);
}
  

  let button = document.querySelector('#submit');
  button.addEventListener('click', showOutput);

  function showOutput() { 
    let input = document.querySelector('#date').value;
    console.log(input);
    let date = moment(input, 'MMMM D, YYYY');

    let showFirst = document.createElement('p');
    showFirst.textContent = date.format('YYYY-M-D');
    let parent = document.querySelector('#enterDate');
    parent.appendChild(showFirst);

  }

})
















