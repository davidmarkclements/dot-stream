# dot-stream

Sends a stream of dots, useful for representing progress
where completion time/amount is unknown

## Example

```javascript
var dot = require('dot-stream');

dots = dot();

dots.pipe(process.stdout);

setTimeout(function () {
  dots.end();
}, 5000);
```

## Kudos

Sponsored by nearForm
