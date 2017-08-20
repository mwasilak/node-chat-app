const moment = require('moment');

var createdAt = 1500000; // 1500 seconds after midnight Jan 1st 1970, UTC

var date = moment(createdAt);

console.log(date.format('h:mm a'));


var timestamp = moment().valueOf();
console.log(timestamp);
