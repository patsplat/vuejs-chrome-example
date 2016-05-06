# vuejs-chrome-example

This is a demonstration of a bug in vuejs when executed within a chrome kiosk app.

To test:

1. `git clone https://github.com/patsplat/vuejs-chrome-example.git`
2. Open chrome://extensions/
3. Check the Developer mode box.
4. Click Load unpacked extension.
5. Browse to the vuejs-chrome-example directory
6. Click Launch
7. Under "Inspect Views" click "application.html"

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

For reference:

Content Security Policy for Chrome Apps: https://developer.chrome.com/apps/contentSecurityPolicy
How to create a Kiosk App: https://support.google.com/chrome/a/answer/6137027?hl=en
