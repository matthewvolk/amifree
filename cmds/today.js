const { freeBusy } = require('../lib');

const START_OF_TODAY = new Date();
      START_OF_TODAY.setHours(0,0,0,0);
const END_OF_TODAY = new Date();
      END_OF_TODAY.setHours(23,59,59,999);

const DATE = {
  start: START_OF_TODAY,
  end: END_OF_TODAY
}

freeBusy(DATE);
