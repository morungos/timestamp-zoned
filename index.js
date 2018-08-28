/**
 * A small helper function that returns a time with a time zone attached, the local
 * offset. This can be written into events, so that we have an originating zone 
 * track. These times are parsable by (new Date()) so that they're easy to handle
 * on a server which supports timezones. 
 * 
 * As an additional extension, we also append a parethesized zone on the end, if
 * we can obtain one. This means, in theory, we can detect zone changes for the 
 * same zone, and be aware of DST etc.
 */

function getTimestamp(options) {
  const current = new Date();
  const offset = current.getTimezoneOffset();
  const offsetHours = parseInt(Math.abs(offset / 60));
  const offsetMinutes = Math.abs(offset % 60);
  
  const currentDate = current.getDate();
  const currentMonth = current.getMonth() + 1;
  const currentYear = current.getFullYear();
  const currentHours = current.getHours();
  const currentMinutes = current.getMinutes();
  const currentSeconds = current.getSeconds();
  const currentMilliseconds = current.getMilliseconds();

  let zoneName = null;
  if ((options && options.zone) && Intl) {
    const options = new Intl.DateTimeFormat().resolvedOptions();
    if (options.timeZone) {
      zoneName = options.timeZone;
    }
  }
  
  const date = `${currentYear}-${currentMonth < 10 ? '0' + currentMonth : currentMonth}-${currentDate < 10 ? '0' + currentDate : currentDate}`;
  const time = `${currentHours < 10 ? '0' + currentHours : currentHours}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}:${currentSeconds < 10 ? '0' + currentSeconds : currentSeconds}.${currentMilliseconds < 10 ? '00' + currentMilliseconds : currentMilliseconds < 100 ? '0' + currentMilliseconds : currentMilliseconds}`;
  const zone = offset === 0 ? "Z" : `${offset < 0 ? '+' : '-'}${offsetHours < 10 ? '0' + offsetHours : offsetHours}:${offsetMinutes < 10 ? '0' + offsetMinutes : offsetMinutes}`;
  return `${date}T${time}${zone}${zoneName ? ' (' + zoneName + ')' : ''}`;
};


module.exports = {
  getTimestamp: getTimestamp
};