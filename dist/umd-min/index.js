/*!
 * draggable-helper v5.0.0
 * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: undefined
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).draggableHelper={})}(this,(function(t){"use strict";function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e((function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e}));var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t};e((function(t){function e(r,o,i){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=e=Reflect.get:t.exports=e=function(t,e,r){var o=n(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(r):i.value}},e(r,o,i||r)}t.exports=e})),e((function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e})),e((function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e})),e((function(t){var e=function(t){var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==e&&r.call(v,o)&&(p=v);var g=h.prototype=s.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=g.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new m(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),g[a]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));function o(t){return e=t,"[object Array]"===Object.prototype.toString.call(e)?t:[t];
/*!
   * helper-js v1.4.36
   * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: undefined
   * Released under the MIT License.
   */
var e}function i(t,e){for(;;){if(null==t.parentElement)return!1;if(t.parentElement===e)return!0;t=t.parentElement}}function a(t){for(var e=function(t){var e=t.offsetParent;return(!e||e===document.body&&"static"===getComputedStyle(document.body).position)&&(e=document.body.parentElement),e}(t),r={x:t.offsetLeft,y:t.offsetTop},n=t;(n=n.parentElement)!==e&&n;)r.x-=n.scrollLeft,r.y-=n.scrollTop;return r}function c(t){var e=t.getBoundingClientRect(),r=e.top-document.documentElement.clientTop,n=e.bottom,o=e.left-document.documentElement.clientLeft,i=e.right;return{top:r,right:i,bottom:n,left:o,width:e.width||i-o,height:e.height||n-r,x:o,y:r}}var u=c;function l(t,e,r){for(var n=r&&r.withSelf?t:t.parentElement;n;){var o=e(n);if("break"===o)return;if(o)return n;n=n.parentElement}}function s(t,e){t["original_".concat(e)]=t.getAttribute(e)}function f(t,e){var r="original_".concat(e);t.setAttribute(e,t[r])}function h(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)}function p(t,e){h(t,e)||(t.classList?t.classList.add(e):t.className+=" "+e)}function d(){for(var t=document.elementsFromPoint||document.msElementsFromPoint||o,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(document,r);function o(t,e){var r=[],n=void 0;do{n!==document.elementFromPoint(t,e)?(n=document.elementFromPoint(t,e),r.push(n),n.style.pointerEvents="none"):n=!1}while(n);return r.forEach((function(t){return t.style.pointerEvents="all"})),r}}var v=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n};var g=function(t){if(Array.isArray(t))return v(t)};var y=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var m=function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}};var w=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var E=function(t){return g(t)||y(t)||m(t)||w()},b=e((function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(r)}t.exports=e}));var x=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t};e((function(t){function e(r,n,o){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=e=Reflect.get:t.exports=e=function(t,e,r){var n=x(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(r):o.value}},e(r,n,o||r)}t.exports=e})),e((function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(r,n)}t.exports=e})),e((function(t){function e(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(r)}t.exports=e})),e((function(t){var e=function(t){var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function s(){}function f(){}function h(){}var p={};p[o]=function(){return this};var d=Object.getPrototypeOf,v=d&&d(d(O([])));v&&v!==e&&r.call(v,o)&&(p=v);var g=h.prototype=s.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function m(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var l=u(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=g.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new m(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),g[a]="Generator",g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}));
/*!
   * helper-js v1.4.36
   * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: undefined
   * Released under the MIT License.
   */
function O(t,e,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];t.addEventListener?t.addEventListener.apply(t,[e,r].concat(o)):t.attachEvent&&t.attachEvent.apply(t,["on".concat(e),r].concat(o))}function L(t,e,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];t.removeEventListener?t.removeEventListener.apply(t,[e,r].concat(o)):t.detachEvent&&t.detachEvent.apply(t,["on".concat(e),r].concat(o))}
/*!
   * drag-event-service v1.1.5
   * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: undefined
   * Released under the MIT License.
   */var S={start:["mousedown","touchstart"],move:["mousemove","touchmove"],end:["mouseup","touchend"]},T={isTouch:function(t){return t.type&&t.type.startsWith("touch")},_getStore:function(t){return t._wrapperStore||(t._wrapperStore=[]),t._wrapperStore},on:function(t,e,r,n){var o,i,a=_(n),c=a.args,u=a.mouseArgs,l=a.touchArgs,s=this._getStore(t),f=this,h=function(t){var n;if(f.isTouch(t))n={x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY,pageX:t.changedTouches[0].pageX,pageY:t.changedTouches[0].pageY,clientX:t.changedTouches[0].clientX,clientY:t.changedTouches[0].clientY,screenX:t.changedTouches[0].screenX,screenY:t.changedTouches[0].screenY};else if(n={x:t.pageX,y:t.pageY,pageX:t.pageX,pageY:t.pageY,clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY},"start"===e&&1!==t.which)return;return r.call(this,t,n)};s.push({handler:r,wrapper:h}),(o=O).call.apply(o,[null,t,S[e][0],h].concat([].concat(E(c),E(u)))),(i=O).call.apply(i,[null,t,S[e][1],h].concat([].concat(E(c),E(l))))},off:function(t,e,r,n){for(var o=_(n),i=o.args,a=o.mouseArgs,c=this._getStore(t),u=c.length-1;u>=0;u--){var l,s,f=c[u],h=f.handler,p=f.wrapper;if(r===h)(l=L).call.apply(l,[null,t,S[e][0],p].concat([].concat(E(i),E(a)))),(s=L).call.apply(s,[null,t,S[e][1],p].concat([].concat(E(i),E(a)))),c.splice(u,1)}}};function _(t){return t||(t={}),{args:t.args||[],mouseArgs:t.mouseArgs||[],touchArgs:t.touchArgs||[]}}function j(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(t,e)}(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var A=!1;var P={ingoreTags:["INPUT","TEXTAREA","SELECT","OPTGROUP","OPTION"],undraggableClassName:"undraggable",minDisplacement:10,draggingClassName:"dragging",clone:!1,updateMovedElementStyleManually:!1},Y={movedCount:0},X={triggerMargin:50,triggerOutterMargin:30,scrollSpeed:.3},N=new Set,F=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={position:{}},r=function(t,r){var n=T.isTouch(r);n?Object.assign(e.position,{x:r.changedTouches[0].pageX,y:r.changedTouches[0].pageY,pageX:r.changedTouches[0].pageX,pageY:r.changedTouches[0].pageY,clientX:r.changedTouches[0].clientX,clientY:r.changedTouches[0].clientY,screenX:r.changedTouches[0].screenX,screenY:r.changedTouches[0].screenY}):Object.assign(e.position,{x:r.pageX,y:r.pageY,pageX:r.pageX,pageY:r.pageY,clientX:r.clientX,clientY:r.clientY,screenX:r.screenX,screenY:r.screenY}),"start"===t?e.startEvent=r:"end"===t&&(e.endEvent=r),Object.assign(e,{event:r,isTouch:n,eventType:t})},n=function(e){(T.isTouch(e)||1===e.which)&&(r("start",e),t.onStart&&t.onStart())},o=function(e){r("move",e),t.onMove&&t.onMove()},i=function(e){r("end",e),t.onEnd&&t.onEnd()},a=function(){T.on(document,"start",n),T.on(document,"move",o),T.on(window,"end",i),e.started=!0},c=function(){T.off(document,"start",n),T.off(document,"move",o),T.off(window,"end",i),e.started=!1};return{info:e,start:a,stop:c}}({onEnd:function(){F.stop()}});function C(t,e){Object.keys(e).forEach((function(r){null==t[r]&&(t[r]=e[r])}))}function k(t){t.element||(t.element=document.scrollingElement||document.documentElement),null==t.duration&&(t.duration=0);var e,r=t.x,n=t.y,o=t.duration,i=t.element,a=0,c=i.scrollTop,u=n-c,l=i.scrollLeft,s=r-l,f=+new Date;return function p(){if(!t.beforeEveryFrame||!1!==t.beforeEveryFrame(a)){var d=(new Date).getTime()-f;null!=n&&(i.scrollTop=parseInt(h(c,u,d,o))),null!=r&&(i.scrollLeft=parseInt(h(l,s,d,o))),d<o?e=requestAnimationFrame(p):(null!=n&&(i.scrollTop=n),null!=r&&(i.scrollLeft=r)),a++}}(),function(){cancelAnimationFrame(e)};function h(t,e,r,n){return t+e*(r/n)}}t.allListeningElementsOfFixScrollBox=N,t.default=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};C(r,P);var n=function(n,a){var c=n.target;if(!r.ingoreTags.includes(c.tagName)&&(!h(c,r.undraggableClassName)&&!l(c,(function(e){return!!h(e,r.undraggableClassName)||(e===t?"break":void 0)})))){(e=JSON.parse(JSON.stringify(Y))).startEvent=n,e.listenerElement=t,e.directTriggerElement=c,e.initialMouse=Object.assign({},a);var s=!1;if(r.getTriggerElement){var f=r.getTriggerElement(e.directTriggerElement,e);if(!f)return;e.triggerElement=f}else if(r.triggerClassName){var p,d,v=j(o(r.triggerClassName));try{var g=function(){var r=d.value;if(p=l(e.directTriggerElement,(function(e){return!!h(e,r)||(e===t?"break":void 0)}),{withSelf:!0}))return"break"};for(v.s();!(d=v.n()).done;){if("break"===g())break}}catch(t){v.e(t)}finally{v.f()}if(!p)return;e.triggerElement=p}else s=!0;e.movedOrClonedElement=r.getMovedOrClonedElement?r.getMovedOrClonedElement(e.directTriggerElement,e,r):t,e.movedOrClonedElement&&(s&&(e.triggerElement=e.movedOrClonedElement),r.triggerBySelf&&e.triggerElement!==e.directTriggerElement||(T.isTouch(n)||n.preventDefault(),T.on(document,"move",i,{touchArgs:[{passive:!1}]}),T.on(window,"end",u)))}};T.on(t,"start",n);var i=function(t,n){var o=e.movedOrClonedElement;t.preventDefault();var i=e.move={x:n.x-e.initialMouse.x,y:n.y-e.initialMouse.y};if(e.moveEvent=t,e.mouse=n,0===e.movedCount){if(r.minDisplacement){var u=Math.pow(i.x,2),l=Math.pow(i.y,2);if(Math.pow(u+l,.5)<r.minDisplacement)return}var f=r.clone?o.cloneNode(!0):o,h=a(o);e.movedOrClonedElement=o,e.movedElement=f,e.initialPosition=h;if(e.updateMovedElementStyle=function(){r.clone&&e.movedOrClonedElement.parentElement.appendChild(f);var t=c(f),n={width:"".concat(Math.ceil(t.width),"px"),height:"".concat(Math.ceil(t.height),"px"),zIndex:9999,opacity:.8,position:"absolute",left:h.x+"px",top:h.y+"px",pointerEvents:"none"};for(var o in s(f,"style"),n)f.style[o]=n[o];s(f,"class"),p(f,r.draggingClassName)},r.beforeFirstMove&&!1===r.beforeFirstMove(e,r))return;if(A=!0,r.beforeMove&&!1===r.beforeMove(e,r))return;r.updateMovedElementStyleManually||e.updateMovedElementStyle()}else{if(e.updateMovedElementStyle=function(){Object.assign(e.movedElement.style,{left:e.initialPosition.x+i.x+"px",top:e.initialPosition.y+i.y+"px"})},r.beforeMove&&!1===r.beforeMove(e,r))return;r.updateMovedElementStyleManually||e.updateMovedElementStyle()}e.movedCount++},u=function t(n){if(A=!1,T.off(document,"move",i,{touchArgs:[{passive:!1}]}),T.off(window,"end",t),0!==e.movedCount){e.endEvent=n;var o=e.movedElement,a=function(){f(o,"style"),f(o,"class"),r.clone&&o.parentElement.removeChild(o)};e.updateMovedElementStyle=a,r.beforeDrop&&!1===r.beforeDrop(e,r)||(r.updateMovedElementStyleManually||a(),A=!1)}},d=function(){T.off(t,"start",n),T.on(document,"move",i,{touchArgs:[{passive:!1}]}),T.on(window,"end",u)};return{destroy:d,options:r}},t.defaultOptions=P,t.defaultOptionsForFixScrollBox=X,t.fixScrollBox=function(t){var e,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};C(n,X),N.add(t);var o=function(o,a){if(A&&(F.info.started||F.start(),e&&(e(),e=null),r&&(r(),r=null),t.scrollHeight>t.offsetHeight||t.scrollWidth>t.offsetWidth)){var c=u(t),l=n.triggerMargin,s=(n.triggerOutterMargin,function(t){if(0!==t){var e,r,n,o=F.info.position,a=j(d(o.clientX,o.clientY));try{for(a.s();!(n=a.n()).done;){var c=n.value;if(r||(r=c),N.has(c)){e=c;break}}}catch(t){a.e(t)}finally{a.f()}return r===e||i(r,e)||(e=null),!!e&&void 0}});t.scrollHeight>t.offsetHeight&&(a.clientY<=c.top+l?e=k({y:0,element:t,beforeEveryFrame:s,duration:t.scrollTop/n.scrollSpeed}):a.clientY>=c.top+c.height-l&&(e=k({y:t.scrollHeight,element:t,beforeEveryFrame:s,duration:(t.scrollHeight-t.offsetHeight-t.scrollTop)/n.scrollSpeed}))),t.scrollWidth>t.offsetWidth&&(a.clientX<=c.left+l?r=k({x:0,element:t,beforeEveryFrame:s,duration:t.scrollLeft/n.scrollSpeed}):a.clientX>=c.left+c.width-l&&(r=k({x:t.scrollWidth,element:t,beforeEveryFrame:s,duration:(t.scrollWidth-t.offsetWidth-t.scrollLeft)/n.scrollSpeed})))}};return T.on(t,"move",o),{options:n,destroy:function(){T.off(t,"move",o),N.delete(t)}}},t.initialStore=Y,Object.defineProperty(t,"__esModule",{value:!0})}));
