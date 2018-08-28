## Quick ISO 8601 timestamps that definitely include the timezone

The standard JS APIs for dates don't necessarily include the current 
timezone, because it's all open. This uses the current timezone 
information to make sure you get the zone information you need.

The result is an ISO 8601 time, which always parses to be the same
as the current time. 

You can also add a `{zone: true}` option to get an added, browser-derived
location zone name, if one is available. This, obviously, is no longer 
ISO 8601 so simply trim after the first space if you need to. 

## Usage

```js
var times = require('timestamp-zoned');

times.getTimestamp();
//=> '2018-08-28T15:04:25.247-04:00'
times.getTimestamp({zone: true});
//=> '2018-08-28T15:04:50.009-04:00 (America/Toronto)'
```

## License

Copyright © 2018, Stuart Watt. Released under the MIT License.