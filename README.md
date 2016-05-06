# vuejs-chrome-example

This is a demonstration of a bug in vuejs when executed within a chrome kiosk app.

To test:

1. Open chrome://extensions/
2. Check the Developer mode box.
3. Click Load unpacked extension.
4. Browse to the vuejs-chrome-example directory
5. Click Launch
6. Under "Inspect Views" click "application.html"

View the following error in the console:

```
Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "default-src 'self' blob: filesystem: chrome-extension-resource:".
```

Related to these lines of code:

```javascript
    function createClass(name) {
      /* eslint-disable no-new-func */
      return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
      /* eslint-enable no-new-func */
    }
```

For reference: https://support.google.com/chrome/a/answer/6137027?hl=en