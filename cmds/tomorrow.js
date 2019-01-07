const { freeBusy } = require('../lib');

const START_OF_TOMORROW = new Date();
      START_OF_TOMORROW.setHours(24,0,0,0);
const END_OF_TOMORROW = new Date();
      END_OF_TOMORROW.setHours(47,59,59,999);

const DATE = {
  start: START_OF_TOMORROW,
  end: END_OF_TOMORROW
}

freeBusy(DATE);
