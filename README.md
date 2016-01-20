# Tute Icons

## Install

```
bower install tute-icons
```

```
npm install tute-icons
```


## Example usage

```javascript
// ANGULAR
// include module in app
angular.module('exampleApp', [
	require('tute-icons')
])
// if you want to configure options:
.run(function(tuteIconProvider) {
	tuteIconProvider.setOpts({
		baseClass: 'icon-ex'
	});
});

// html usage: <icon icon="grid-on"></icon>

// REACT
// import the react component from package
import TuteIcon from 'tute-icons/dist/react';

// JSX usage: <TuteIcon icon="star" />
```

See icons-manifest.json to quickly see all available icons.

Only needed SVGs are included in the build. The `google-svgs` folder is all of Google's icons. The ones included in the Tute icon build process are in the `svg` folder.
