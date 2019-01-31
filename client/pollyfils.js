/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes'
import repeat from 'core-js/library/fn/string/virtual/repeat'
import startsWith from 'core-js/library/fn/string/virtual/starts-with'
import set from 'core-js/es6/set'
import map from 'core-js/es6/map'

// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)

String.prototype.includes = includes
String.prototype.repeat = repeat
String.prototype.startsWith = startsWith
String.prototype.Set = set
String.prototype.Map = map
