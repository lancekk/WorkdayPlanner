let timeblocks = document.querySelector('.container');
let dayDiv = document.querySelector('#currentDay');
const workHours = [9,10,11,12,1,2,3,4,5];

const dayFormat = 'dddd, MMMM Do';

function showCurrentDay() {
  dayDiv.textContent = moment().format(dayFormat);
}





showCurrentDay();
