let timeblocks = $('.time-block');
let dayDiv = $('#currentDay');
const workHours = [9,10,11,12,13,14,15,16,17];

const dayFormat = 'dddd, MMMM Do [at] h:mm:ss a';

const showCurrentDay = function () {
  dayDiv.text(moment().format(dayFormat));
  setTimeout(showCurrentDay, 1000);
}

const initTimeBlocks = function () {
  let t = timeblocks;
  console.log(t);

  t.each(function(i) {
    let etime = moment().hour(workHours[i]);
    console.log(etime.format('hA'));
    this.querySelector('.hour').textContent = etime.format('hA');

    let ta = $('textarea', this);

    if (moment().isBefore(etime)) {
      ta.addClass('future');
    } else if (moment().isBefore(moment().hour(workHours[i] + 1))) {
      ta.addClass('present');
    } else {
      ta.addClass('past');
    }

    if ((v = localStorage.getItem(etime.format('hA'))) !== null) {
      ta.val(v);
    }

    $(this).click((e) => {
      console.log(e.target);
      if (e.target.classList.contains('saveBtn')) {
        console.log('time to save');
        localStorage[$('.hour', this).text()] = ta.val();
      }
    });
  });
}




showCurrentDay();
initTimeBlocks();
