let timeblocks = $('.container');
let dayDiv = $('#currentDay');
const workHours = [9,10,11,12,1,2,3,4,5];

const dayFormat = 'dddd, MMMM Do';

function showCurrentDay() {
  dayDiv.text(moment().format(dayFormat));
}





showCurrentDay();
