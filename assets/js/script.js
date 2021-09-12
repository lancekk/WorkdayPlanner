let timeblocks = $('.container');
let dayDiv = $('#currentDay');
const workHours = [9,10,11,12,1,2,3,4,5];

const dayFormat = 'dddd, MMMM Do [at] h:mm:ss a';

const showCurrentDay = function () {
  dayDiv.text(moment().format(dayFormat));
  setTimeout(showCurrentDay, 1000);
}





showCurrentDay();
