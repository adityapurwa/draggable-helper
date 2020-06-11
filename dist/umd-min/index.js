/*!
 * draggable-helper v5.0.1
 * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
 * Homepage: undefined
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).draggableHelper={})}(this,(function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var r=t((function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t}));var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e};t((function(e){function t(r,o,i){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=t=Reflect.get:e.exports=t=function(e,t,r){var o=n(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(r):i.value}},t(r,o,i||r)}e.exports=t})),t((function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t})),t((function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t}));var o=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n};var i=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}};t((function(e){var t=function(e){var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function l(e,t,r,n){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=E(a,r);if(l){if(l===u)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var f=c(e,t,r);if("normal"===f.type){if(n=r.done?"completed":"suspendedYield",f.arg===u)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(n="completed",r.method="throw",r.arg=f.arg)}}}(e,r,a),i}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u={};function f(){}function s(){}function p(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,g=h&&h(h(S([])));g&&g!==t&&r.call(g,o)&&(d=g);var m=p.prototype=f.prototype=Object.create(d);function v(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,l){var u=c(e[o],e,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,l)}),(function(e){n("throw",e,a,l)})):t.resolve(s).then((function(e){f.value=e,a(f)}),(function(e){return n("throw",e,a,l)}))}l(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function b(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return s.prototype=m.constructor=p,p.constructor=s,p[a]=s.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},v(y.prototype),y.prototype[i]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new y(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),b(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));var a=function(e){if(Array.isArray(e))return o(e)};var l=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)};var c=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var u=function(e){return a(e)||l(e)||i(e)||c()};
/*!
   * helper-js v2.0.0
   * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: undefined
   * Released under the MIT License.
   */function f(e){return t=e,"[object Array]"===Object.prototype.toString.call(t)?e:[e];var t}function s(e,t){Object.keys(t).forEach((function(r){null==e[r]&&(e[r]=t[r])}))}function p(e,t){for(;;){if(null==e.parentElement)return!1;if(e.parentElement===t)return!0;e=e.parentElement}}function d(e){var t=e.getBoundingClientRect(),r=t.top-document.documentElement.clientTop,n=t.bottom,o=t.left-document.documentElement.clientLeft,i=t.right;return{top:r,right:i,bottom:n,left:o,width:t.width||i-o,height:t.height||n-r,x:o,y:r}}var h=d;function g(e,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r&&r.withSelf?e:e.parentElement;n;){var o=t(n);if("break"===o)return;if(o)return n;n=n.parentElement}}function m(e,t){e["original_".concat(t)]=e.getAttribute(t)}function v(e,t){var r=e["original_".concat(t)];null==r?e.removeAttribute(t):e.setAttribute(t,r)}function y(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}function E(e,t){y(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)}function w(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];e.addEventListener?e.addEventListener.apply(e,[t,r].concat(o)):e.attachEvent&&e.attachEvent.apply(e,["on".concat(t),r].concat(o))}function b(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];e.removeEventListener?e.removeEventListener.apply(e,[t,r].concat(o)):e.detachEvent&&e.detachEvent.apply(e,["on".concat(t),r].concat(o))}function x(e){e.element||(e.element=document.scrollingElement||document.documentElement),null==e.duration&&(e.duration=0);var t,r=e.x,n=e.y,o=e.duration,i=e.element,a=0,l=i.scrollTop,c=n-l,u=i.scrollLeft,f=r-u,s=+new Date;return function d(){if(!e.beforeEveryFrame||!1!==e.beforeEveryFrame(a)){var h=(new Date).getTime()-s;null!=n&&(i.scrollTop=parseInt(p(l,c,h,o))),null!=r&&(i.scrollLeft=parseInt(p(u,f,h,o))),h<o?t=requestAnimationFrame(d):(null!=n&&(i.scrollTop=n),null!=r&&(i.scrollLeft=r)),a++}}(),function(){cancelAnimationFrame(t)};function p(e,t,r,n){return e+t*(r/n)}}
/*!
   * drag-event-service v1.1.6
   * (c) phphe <phphe@outlook.com> (https://github.com/phphe)
   * Homepage: undefined
   * Released under the MIT License.
   */var S={start:["mousedown","touchstart"],move:["mousemove","touchmove"],end:["mouseup","touchend"]},O={isTouch:function(e){return e.type&&e.type.startsWith("touch")},_getStore:function(e){return e._wrapperStore||(e._wrapperStore=[]),e._wrapperStore},on:function(e,t,r,n){var o,i,a=T(n),l=a.args,c=a.mouseArgs,f=a.touchArgs,s=this._getStore(e),p=this,d=function(e){var n;if(p.isTouch(e))n={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,pageX:e.changedTouches[0].pageX,pageY:e.changedTouches[0].pageY,clientX:e.changedTouches[0].clientX,clientY:e.changedTouches[0].clientY,screenX:e.changedTouches[0].screenX,screenY:e.changedTouches[0].screenY};else if(n={x:e.pageX,y:e.pageY,pageX:e.pageX,pageY:e.pageY,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY},"start"===t&&1!==e.which)return;return r.call(this,e,n)};s.push({handler:r,wrapper:d}),(o=w).call.apply(o,[null,e,S[t][0],d].concat([].concat(u(l),u(c)))),(i=w).call.apply(i,[null,e,S[t][1],d].concat([].concat(u(l),u(f))))},off:function(e,t,r,n){for(var o=T(n),i=o.args,a=o.mouseArgs,l=this._getStore(e),c=l.length-1;c>=0;c--){var f,s,p=l[c],d=p.handler,h=p.wrapper;if(r===d)(f=b).call.apply(f,[null,e,S[t][0],h].concat([].concat(u(i),u(a)))),(s=b).call.apply(s,[null,e,S[t][1],h].concat([].concat(u(i),u(a)))),l.splice(c,1)}}};function T(e){return e||(e={}),{args:e.args||[],mouseArgs:e.mouseArgs||[],touchArgs:e.touchArgs||[]}}function L(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _={afterFirstMove:function(e,t){},afterMove:function(e,t){},afterDrop:function(e,t){}};var A,j,C={ingoreTags:["INPUT","TEXTAREA","SELECT","OPTGROUP","OPTION"],undraggableClassName:"undraggable",minDisplacement:10,draggingClassName:"dragging",clone:!1,updateMovedElementStyleManually:!1,edgeScrollTriggerMargin:50,edgeScrollSpeed:.35,edgeScrollTriggerMode:"top_left_corner"},N={movedCount:0};function P(){A&&(A(),A=null),j&&(j(),j=null)}_.afterMove=function(e,t){if(t.edgeScroll){var r=t.edgeScrollTriggerMargin;P();var n,o,i,a,l,c={x:e.mouse.clientX,y:e.mouse.clientY};if("top_left_corner"===t.edgeScrollTriggerMode){var u=h(e.movedElement);c={x:u.x,y:u.y}}var f,s,d,g,m=L((s=c.x,d=c.y,g=[s,d],(document.elementsFromPoint||document.msElementsFromPoint||function(e,t){var r=[],n=void 0;do{n!==document.elementFromPoint(e,t)?(n=document.elementFromPoint(e,t),r.push(n),n.style.pointerEvents="none"):n=!1}while(n);return r.forEach((function(e){return e.style.pointerEvents="all"})),r}).apply(document,g)));try{for(m.s();!(f=m.n()).done;){var v=f.value;if(!i||p(i,v)){if(!n&&v.scrollWidth>v.clientWidth){var y=S(v);c.x<=y.left+r?b(v,"left")>10&&w(v,"x")&&(n=v,a="left"):c.x>=y.left+v.clientWidth-r&&b(v,"right")>10&&w(v,"x")&&(n=v,a="right")}if(!o&&v.scrollHeight>v.clientHeight){var E=S(v);c.y<=E.top+r?b(v,"up")>10&&w(v,"y")&&(o=v,l="up"):c.y>=E.top+v.clientHeight-r&&b(v,"down")>10&&w(v,"y")&&(o=v,l="down")}if(n&&o)break;i=v}}}catch(e){m.e(e)}finally{m.f()}n&&(A=x("left"===a?{x:0,element:n,duration:b(n,"left")/t.edgeScrollSpeed}:{x:n.scrollWidth-n.clientWidth,element:n,duration:b(n,"right")/t.edgeScrollSpeed})),o&&(j=x("up"===l?{y:0,element:o,duration:b(o,"up")/t.edgeScrollSpeed}:{y:o.scrollHeight-o.clientHeight,element:o,duration:b(o,"down")/t.edgeScrollSpeed}))}function w(e,t){var r=getComputedStyle(e),n="overflow-".concat(t);return e===(document.scrollingElement||document.documentElement)?"visible"===r[n]||"auto"===r[n]||"scroll"===r[n]:"auto"===r[n]||"scroll"===r[n]}function b(e,t){return"up"===t?e.scrollTop:"down"===t?e.scrollHeight-e.scrollTop-e.clientHeight:"left"===t?e.scrollLeft:"right"===t?e.scrollWidth-e.scrollLeft-e.clientWidth:void 0}function S(e){var t=h(e);return e===(document.scrollingElement||document.documentElement)&&(t.top=0,t.left=0),t}},_.afterDrop=function(e,t){t.edgeScroll&&P()},e.default=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(r,C);var n=function(n,a){var l=n.target;if(!r.ingoreTags.includes(l.tagName)&&(!y(l,r.undraggableClassName)&&!g(l,(function(t){return!!y(t,r.undraggableClassName)||(t===e?"break":void 0)})))){(t=JSON.parse(JSON.stringify(N))).startEvent=n,t.listenerElement=e,t.directTriggerElement=l,t.initialMouse=Object.assign({},a);var c=!1;if(r.getTriggerElement){var u=r.getTriggerElement(t.directTriggerElement,t);if(!u)return;t.triggerElement=u}else if(r.triggerClassName){var s,p,d=L(f(r.triggerClassName));try{var h=function(){var r=p.value;if(s=g(t.directTriggerElement,(function(t){return!!y(t,r)||(t===e?"break":void 0)}),{withSelf:!0}))return"break"};for(d.s();!(p=d.n()).done;){if("break"===h())break}}catch(e){d.e(e)}finally{d.f()}if(!s)return;t.triggerElement=s}else c=!0;t.movedOrClonedElement=r.getMovedOrClonedElement?r.getMovedOrClonedElement(t.directTriggerElement,t,r):e,t.movedOrClonedElement&&(c&&(t.triggerElement=t.movedOrClonedElement),r.triggerBySelf&&t.triggerElement!==t.directTriggerElement||(O.isTouch(n)||n.preventDefault(),O.on(document,"move",o,{touchArgs:[{passive:!1}]}),O.on(window,"end",i)))}};O.on(e,"start",n);var o=function(e,n){var o=t.movedOrClonedElement,i=t.move={x:n.clientX-t.initialMouse.clientX,y:n.clientY-t.initialMouse.clientY};if(t.moveEvent=e,t.mouse=n,e.preventDefault(),0===t.movedCount){if(r.minDisplacement){var a=Math.pow(i.x,2),l=Math.pow(i.y,2);if(Math.pow(a+l,.5)<r.minDisplacement)return}var c=r.clone?o.cloneNode(!0):o,u=h(o);t.movedOrClonedElement=o,t.movedElement=c,t.initialPosition=u;if(t.updateMovedElementStyle=function(){r.clone&&t.movedOrClonedElement.parentElement.appendChild(c);var e=d(c),n={width:"".concat(Math.ceil(e.width),"px"),height:"".concat(Math.ceil(e.height),"px"),zIndex:9999,opacity:.8,position:"fixed",left:u.x+"px",top:u.y+"px",pointerEvents:"none"};for(var o in m(c,"style"),n)c.style[o]=n[o];m(c,"class"),E(c,r.draggingClassName)},r.beforeFirstMove&&!1===r.beforeFirstMove(t,r))return;if(r.beforeMove&&!1===r.beforeMove(t,r))return;r.updateMovedElementStyleManually||t.updateMovedElementStyle(),_.afterFirstMove(t,r)}else{if(t.updateMovedElementStyle=function(){Object.assign(t.movedElement.style,{left:t.initialPosition.x+i.x+"px",top:t.initialPosition.y+i.y+"px"})},r.beforeMove&&!1===r.beforeMove(t,r))return;r.updateMovedElementStyleManually||t.updateMovedElementStyle()}_.afterMove(t,r),t.movedCount++},i=function e(n){if(O.off(document,"move",o,{touchArgs:[{passive:!1}]}),O.off(window,"end",e),0!==t.movedCount){t.endEvent=n;var i=t.movedElement,a=function(){v(i,"style"),v(i,"class"),r.clone&&i.parentElement.removeChild(i)};t.updateMovedElementStyle=a,r.beforeDrop&&!1===r.beforeDrop(t,r)||(r.updateMovedElementStyleManually||a(),_.afterDrop(t,r))}},a=function(){O.off(e,"start",n),O.on(document,"move",o,{touchArgs:[{passive:!1}]}),O.on(window,"end",i)};return{destroy:a,options:r}},e.defaultOptions=C,e.initialStore=N,Object.defineProperty(e,"__esModule",{value:!0})}));
