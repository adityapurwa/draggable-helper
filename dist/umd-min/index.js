/*!
 * draggable-helper v5.0.4
 * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: undefined
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).draggableHelper={})}(this,(function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=t((function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t}));var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n(e)););return e};t((function(e){function t(n,o,i){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=t=Reflect.get:e.exports=t=function(e,t,n){var o=r(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}},t(n,o,i||n)}e.exports=t})),t((function(e){function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t})),t((function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t}));var o=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r};var i=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}};t((function(e){var t=function(e){var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=w(a,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function f(){}function p(){}function d(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(T([])));v&&v!==t&&n.call(v,o)&&(h=v);var g=d.prototype=f.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,l){var c=u(e[o],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return r("throw",e,a,l)}))}l(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=g.constructor=d,d.constructor=p,p.displayName=l(d,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,a,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),E.prototype[i]=function(){return this},e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(g),l(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));var a=function(e){if(Array.isArray(e))return o(e)};var l=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)};var c=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var u=function(e){return a(e)||l(e)||i(e)||c()};
/*!
   * helper-js v2.0.1
   * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: undefined
   * Released under the MIT License.
   */function s(e){return t=e,"[object Array]"===Object.prototype.toString.call(t)?e:[e];var t}function f(e,t){Object.keys(t).forEach((function(n){null==e[n]&&(e[n]=t[n])}))}function p(e,t){for(;;){if(null==e.parentElement)return!1;if(e.parentElement===t)return!0;e=e.parentElement}}function d(e){var t=e.getBoundingClientRect(),n=t.top-document.documentElement.clientTop,r=t.bottom,o=t.left-document.documentElement.clientLeft,i=t.right;return{top:n,right:i,bottom:r,left:o,width:t.width||i-o,height:t.height||r-n,x:o,y:n}}var h=d;function m(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n&&n.withSelf?e:e.parentElement;r;){var o=t(r);if("break"===o)return;if(o)return r;r=r.parentElement}}function v(e,t){e["original_".concat(t)]=e.getAttribute(t)}function g(e,t){var n=e["original_".concat(t)];null==n?e.removeAttribute(t):e.setAttribute(t,n)}function y(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function E(e,t){y(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)}function w(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];e.addEventListener?e.addEventListener.apply(e,[t,n].concat(o)):e.attachEvent&&e.attachEvent.apply(e,["on".concat(t),n].concat(o))}function b(e,t,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];e.removeEventListener?e.removeEventListener.apply(e,[t,n].concat(o)):e.detachEvent&&e.detachEvent.apply(e,["on".concat(t),n].concat(o))}function x(e){e.element||(e.element=document.scrollingElement||document.documentElement),null==e.duration&&(e.duration=0);var t,n=e.x,r=e.y,o=e.duration,i=e.element,a=0,l=i.scrollTop,c=r-l,u=i.scrollLeft,s=n-u,f=+new Date;return function d(){if(!e.beforeEveryFrame||!1!==e.beforeEveryFrame(a)){var h=(new Date).getTime()-f;null!=r&&(i.scrollTop=parseInt(p(l,c,h,o))),null!=n&&(i.scrollLeft=parseInt(p(u,s,h,o))),h<o?t=requestAnimationFrame(d):(null!=r&&(i.scrollTop=r),null!=n&&(i.scrollLeft=n)),a++}}(),function(){cancelAnimationFrame(t)};function p(e,t,n,r){return e+t*(n/r)}}
/*!
   * drag-event-service v1.1.7
   * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: undefined
   * Released under the MIT License.
   */var S={start:["mousedown","touchstart"],move:["mousemove","touchmove"],end:["mouseup","touchend"]},T={isTouch:function(e){return e.type&&e.type.startsWith("touch")},_getStore:function(e){return e._wrapperStore||(e._wrapperStore=[]),e._wrapperStore},on:function(e,t,n,r){var o,i,a=O(r),l=a.args,c=a.mouseArgs,s=a.touchArgs,f=this._getStore(e),p=this,d=function(e){var r;if(p.isTouch(e))r={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,pageX:e.changedTouches[0].pageX,pageY:e.changedTouches[0].pageY,clientX:e.changedTouches[0].clientX,clientY:e.changedTouches[0].clientY,screenX:e.changedTouches[0].screenX,screenY:e.changedTouches[0].screenY};else if(r={x:e.pageX,y:e.pageY,pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY},"start"===t&&1!==e.which)return;return n.call(this,e,r)};f.push({handler:n,wrapper:d}),(o=w).call.apply(o,[null,e,S[t][0],d].concat([].concat(u(l),u(c)))),(i=w).call.apply(i,[null,e,S[t][1],d].concat([].concat(u(l),u(s))))},off:function(e,t,n,r){for(var o=O(r),i=o.args,a=o.mouseArgs,l=this._getStore(e),c=l.length-1;c>=0;c--){var s,f,p=l[c],d=p.handler,h=p.wrapper;if(n===d)(s=b).call.apply(s,[null,e,S[t][0],h].concat([].concat(u(i),u(a)))),(f=b).call.apply(f,[null,e,S[t][1],h].concat([].concat(u(i),u(a)))),l.splice(c,1)}}};function O(e){return e||(e={}),{args:e.args||[],mouseArgs:e.mouseArgs||[],touchArgs:e.touchArgs||[]}}function L(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw i}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _={afterFirstMove:function(e,t){},afterMove:function(e,t){},afterDrop:function(e,t){}};var A,j,C={ingoreTags:["INPUT","TEXTAREA","SELECT","OPTGROUP","OPTION"],undraggableClassName:"undraggable",minDisplacement:10,draggingClassName:"dragging",clone:!1,updateMovedElementStyleManually:!1,preventTextSelection:!0,edgeScrollTriggerMargin:50,edgeScrollSpeed:.35,edgeScrollTriggerMode:"top_left_corner",remnantClassName:"remnant"},N={movedCount:0};function P(){A&&(A(),A=null),j&&(j(),j=null)}_.afterMove=function(e,t){if(t.edgeScroll){var n=t.edgeScrollTriggerMargin;P();var r,o,i,a,l,c={x:e.mouse.clientX,y:e.mouse.clientY};if("top_left_corner"===t.edgeScrollTriggerMode){var u=h(e.movedElement);c={x:u.x,y:u.y}}var s,f,d,m,v=L((f=c.x,d=c.y,m=[f,d],(document.elementsFromPoint||document.msElementsFromPoint||function(e,t){var n=[],r=void 0;do{r!==document.elementFromPoint(e,t)?(r=document.elementFromPoint(e,t),n.push(r),r.style.pointerEvents="none"):r=!1}while(r);return n.forEach((function(e){return e.style.pointerEvents="all"})),n}).apply(document,m)));try{for(v.s();!(s=v.n()).done;){var g=s.value;if(!i||p(i,g)){if(!r&&g.scrollWidth>g.clientWidth){var y=S(g);c.x<=y.left+n?b(g,"left")>10&&w(g,"x")&&(r=g,a="left"):c.x>=y.left+g.clientWidth-n&&b(g,"right")>10&&w(g,"x")&&(r=g,a="right")}if(!o&&g.scrollHeight>g.clientHeight){var E=S(g);c.y<=E.top+n?b(g,"up")>10&&w(g,"y")&&(o=g,l="up"):c.y>=E.top+g.clientHeight-n&&b(g,"down")>10&&w(g,"y")&&(o=g,l="down")}if(r&&o)break;i=g}}}catch(e){v.e(e)}finally{v.f()}r&&(A=x("left"===a?{x:0,element:r,duration:b(r,"left")/t.edgeScrollSpeed}:{x:r.scrollWidth-r.clientWidth,element:r,duration:b(r,"right")/t.edgeScrollSpeed})),o&&(j=x("up"===l?{y:0,element:o,duration:b(o,"up")/t.edgeScrollSpeed}:{y:o.scrollHeight-o.clientHeight,element:o,duration:b(o,"down")/t.edgeScrollSpeed}))}function w(e,t){var n=getComputedStyle(e),r="overflow-".concat(t);return e===(document.scrollingElement||document.documentElement)?"visible"===n[r]||"auto"===n[r]||"scroll"===n[r]:"auto"===n[r]||"scroll"===n[r]}function b(e,t){return"up"===t?e.scrollTop:"down"===t?e.scrollHeight-e.scrollTop-e.clientHeight:"left"===t?e.scrollLeft:"right"===t?e.scrollWidth-e.scrollLeft-e.clientWidth:void 0}function S(e){var t=h(e);return e===(document.scrollingElement||document.documentElement)&&(t.top=0,t.left=0),t}},_.afterDrop=function(e,t){t.edgeScroll&&P()},e.default=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};f(n,C);var r=function(r,a){T.isTouch(r)?n.ontouchstart&&n.ontouchstart(r):n.onmousedown&&n.onmousedown(r);var l=r.target;if(!n.ingoreTags.includes(l.tagName)&&(!y(l,n.undraggableClassName)&&!m(l,(function(t){return!!y(t,n.undraggableClassName)||(t===e?"break":void 0)})))){(t=JSON.parse(JSON.stringify(N))).startEvent=r,t.listenerElement=e,t.directTriggerElement=l,t.initialMouse=Object.assign({},a);var c=!1;if(n.getTriggerElement){var u=n.getTriggerElement(t.directTriggerElement,t);if(!u)return;t.triggerElement=u}else if(n.triggerClassName){var f,p,d=L(s(n.triggerClassName));try{var h=function(){var n=p.value;if(f=m(t.directTriggerElement,(function(t){return!!y(t,n)||(t===e?"break":void 0)}),{withSelf:!0}))return"break"};for(d.s();!(p=d.n()).done;){if("break"===h())break}}catch(e){d.e(e)}finally{d.f()}if(!f)return;t.triggerElement=f}else c=!0;t.movedOrClonedElement=n.getMovedOrClonedElement?n.getMovedOrClonedElement(t.directTriggerElement,t,n):e,t.movedOrClonedElement&&(c&&(t.triggerElement=t.movedOrClonedElement),n.triggerBySelf&&t.triggerElement!==t.directTriggerElement||(T.isTouch(r)||n.preventTextSelection&&r.preventDefault(),T.on(document,"move",o,{touchArgs:[{passive:!1}]}),T.on(window,"end",i)))}};T.on(e,"start",r);var o=function(e,r){T.isTouch(e)?n.ontouchmove&&n.ontouchmove(e):n.onmousemove&&n.onmousemove(e);var o=t.movedOrClonedElement,i=t.move={x:r.clientX-t.initialMouse.clientX,y:r.clientY-t.initialMouse.clientY};if(t.moveEvent=e,t.mouse=r,(T.isTouch(e)||n.preventTextSelection)&&e.preventDefault(),0===t.movedCount){if(n.minDisplacement){var a=Math.pow(i.x,2),l=Math.pow(i.y,2);if(Math.pow(a+l,.5)<n.minDisplacement)return}var c=n.clone?o.cloneNode(!0):o;n.clone&&(t.remnantElement=o,t.remnantElement.classList.add(n.remnantClassName));var u=h(o);t.movedOrClonedElement=o,t.movedElement=c,t.initialPositionRelativeToViewport=u,t.initialPosition=u;if(t.updateMovedElementStyle=function(){n.clone&&t.movedOrClonedElement.parentElement.appendChild(c);var e=d(c),r={width:"".concat(Math.ceil(e.width),"px"),height:"".concat(Math.ceil(e.height),"px"),zIndex:9999,opacity:1,position:"fixed",left:u.x+"px",top:u.y+"px",pointerEvents:"none"};for(var o in v(c,"style"),r)c.style[o]=r[o];v(c,"class"),E(c,n.draggingClassName);var i=h(c);i.x!==u.x&&(u.x=u.x-(i.x-u.x),u.y=u.y-(i.y-u.y),c.style.left=u.x+"px",c.style.top=u.y+"px")},n.beforeFirstMove&&!1===n.beforeFirstMove(t,n))return;if(n.beforeMove&&!1===n.beforeMove(t,n))return;n.updateMovedElementStyleManually||t.updateMovedElementStyle(),_.afterFirstMove(t,n)}else{if(t.updateMovedElementStyle=function(){Object.assign(t.movedElement.style,{left:t.initialPosition.x+i.x+"px",top:t.initialPosition.y+i.y+"px"})},n.beforeMove&&!1===n.beforeMove(t,n))return;n.updateMovedElementStyleManually||t.updateMovedElementStyle()}_.afterMove(t,n),t.movedCount++},i=function e(r){if(n.clone&&t.remnantElement&&t.remnantElement.classList.remove(n.remnantClassName),T.isTouch(r)?n.ontouchend&&n.ontouchend(r):n.onmousedown&&n.onmousedown(r),T.off(document,"move",o,{touchArgs:[{passive:!1}]}),T.off(window,"end",e),0!==t.movedCount){t.endEvent=r;var i=t.movedElement,a=function(){g(i,"style"),g(i,"class"),n.clone&&i.parentElement.removeChild(i)};t.updateMovedElementStyle=a,n.beforeDrop&&!1===n.beforeDrop(t,n)||(n.updateMovedElementStyleManually||a(),_.afterDrop(t,n))}},a=function(){T.off(e,"start",r),T.on(document,"move",o,{touchArgs:[{passive:!1}]}),T.on(window,"end",i)};return{destroy:a,options:n}},e.defaultOptions=C,e.initialStore=N,Object.defineProperty(e,"__esModule",{value:!0})}));
