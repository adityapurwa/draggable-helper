'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var hp = require('helper-js');
var DragEventService = _interopDefault(require('drag-event-service'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var _edgeScroll = {
  afterFirstMove: function afterFirstMove(store, opt) {},
  afterMove: function afterMove(store, opt) {},
  afterDrop: function afterDrop(store, opt) {}
};
function index (listenerElement) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var store; // set default value of options

  hp.objectAssignIfKeyNull(opt, defaultOptions); // define the event listener of mousedown and touchstart

  var onMousedownOrTouchStart = function onMousedownOrTouchStart(e, mouse) {
    // execute native event hooks
    if (!DragEventService.isTouch(e)) {
      opt.onmousedown && opt.onmousedown(e);
    } else {
      opt.ontouchstart && opt.ontouchstart(e);
    }

    var target = e.target; // check if triggered by ignore tags

    if (opt.ingoreTags.includes(target.tagName)) {
      return;
    } // check if trigger element and its parent has undraggable class name


    if (hp.hasClass(target, opt.undraggableClassName)) {
      return;
    }

    var isParentUndraggable = hp.findParent(target, function (el) {
      if (hp.hasClass(el, opt.undraggableClassName)) {
        return true;
      }

      if (el === listenerElement) {
        return "break";
      }
    });

    if (isParentUndraggable) {
      return;
    } // Initialize store. Store start event, initial position


    store = JSON.parse(JSON.stringify(initialStore));
    store.startEvent = e;
    store.listenerElement = listenerElement;
    store.directTriggerElement = target;
    store.initialMouse = _objectSpread2({}, mouse); // get triggerElement

    var triggerElementIsMovedOrClonedElement = false;

    if (opt.getTriggerElement) {
      var el = opt.getTriggerElement(store.directTriggerElement, store);

      if (!el) {
        return;
      }

      store.triggerElement = el;
    } else if (opt.triggerClassName) {
      var triggerElement;

      var _iterator = _createForOfIteratorHelper(hp.toArrayIfNot(opt.triggerClassName)),
          _step;

      try {
        var _loop = function _loop() {
          var className = _step.value;
          triggerElement = hp.findParent(store.directTriggerElement, function (el) {
            if (hp.hasClass(el, className)) {
              return true;
            }

            if (el === listenerElement) {
              return "break";
            }
          }, {
            withSelf: true
          });

          if (triggerElement) {
            return "break";
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _ret = _loop();

          if (_ret === "break") break;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!triggerElement) {
        return;
      }

      store.triggerElement = triggerElement;
    } else {
      triggerElementIsMovedOrClonedElement = true;
    } // get movedOrClonedElement


    store.movedOrClonedElement = opt.getMovedOrClonedElement ? opt.getMovedOrClonedElement(store.directTriggerElement, store, opt) : listenerElement;

    if (!store.movedOrClonedElement) {
      return;
    }

    if (triggerElementIsMovedOrClonedElement) {
      store.triggerElement = store.movedOrClonedElement;
    } // check if trigger element is same with directTriggerElement when options.triggerBySelf is true


    if (opt.triggerBySelf && store.triggerElement !== store.directTriggerElement) {
      return;
    } // prevent text be selected


    if (!DragEventService.isTouch(e)) {
      // Do not prevent when touch. Or the elements within the node can not trigger click event.
      if (opt.preventTextSelection) {
        e.preventDefault();
      }
    } // listen mousemove and touchmove


    DragEventService.on(document, "move", onMousemoveOrTouchMove, {
      touchArgs: [{
        passive: false
      }]
    }); // listen mouseup and touchend

    DragEventService.on(window, "end", onMouseupOrTouchEnd);
  }; // bind mousedown or touchstart event listener


  DragEventService.on(listenerElement, "start", onMousedownOrTouchStart); // define the event listener of mousemove and touchmove

  var onMousemoveOrTouchMove = function onMousemoveOrTouchMove(e, mouse) {
    // execute native event hooks
    if (!DragEventService.isTouch(e)) {
      opt.onmousemove && opt.onmousemove(e);
    } else {
      opt.ontouchmove && opt.ontouchmove(e);
    } //


    var _store = store,
        movedOrClonedElement = _store.movedOrClonedElement; // calc move and attach related info to store

    var move = store.move = {
      x: mouse.clientX - store.initialMouse.clientX,
      y: mouse.clientY - store.initialMouse.clientY
    };
    store.moveEvent = e;
    store.mouse = mouse;

    if (DragEventService.isTouch(e)) {
      // prevent page scroll when touch.
      e.preventDefault();
    } else {
      // prevent text be selected
      if (opt.preventTextSelection) {
        e.preventDefault();
      }
    } // first move


    if (store.movedCount === 0) {
      // check if min displacement exceeded.
      if (opt.minDisplacement) {
        var x2 = Math.pow(move.x, 2);
        var y2 = Math.pow(move.y, 2);
        var dtc = Math.pow(x2 + y2, 0.5);

        if (dtc < opt.minDisplacement) {
          return;
        }
      } // resolve elements


      var movedElement = opt.clone ? movedOrClonedElement.cloneNode(true) : movedOrClonedElement;

      if (opt.clone) {
        store.remnantElement = movedOrClonedElement;
        store.remnantElement.classList.add(opt.remnantClassName);
      }

      var initialPosition = hp.getViewportPosition(movedOrClonedElement); // attach elements and initialPosition to store

      store.movedOrClonedElement = movedOrClonedElement;
      store.movedElement = movedElement;
      store.initialPositionRelativeToViewport = initialPosition;
      store.initialPosition = initialPosition; // define the function to update moved element style

      var updateMovedElementStyle = function updateMovedElementStyle() {
        if (opt.clone) {
          store.movedOrClonedElement.parentElement.appendChild(movedElement);
        }

        var size = hp.getBoundingClientRect(movedElement);
        var style = {
          width: "".concat(Math.ceil(size.width), "px"),
          height: "".concat(Math.ceil(size.height), "px"),
          zIndex: 9999,
          opacity: opt.opacity,
          position: "fixed",
          left: initialPosition.x + "px",
          top: initialPosition.y + "px",
          pointerEvents: "none"
        };
        hp.backupAttr(movedElement, "style");

        for (var key in style) {
          movedElement.style[key] = style[key];
        }

        hp.backupAttr(movedElement, "class");
        hp.addClass(movedElement, opt.draggingClassName);
        var nowPosition = hp.getViewportPosition(movedElement);

        if (nowPosition.x !== initialPosition.x) {
          initialPosition.x = initialPosition.x - (nowPosition.x - initialPosition.x);
          initialPosition.y = initialPosition.y - (nowPosition.y - initialPosition.y);
          movedElement.style.left = initialPosition.x + "px";
          movedElement.style.top = initialPosition.y + "px";
        }
      };

      store.updateMovedElementStyle = updateMovedElementStyle; // call hook beforeFirstMove, beforeMove

      if (opt.beforeFirstMove && opt.beforeFirstMove(store, opt) === false) {
        return;
      }

      if (opt.beforeMove && opt.beforeMove(store, opt) === false) {
        return;
      } // try to update moved element style


      if (!opt.updateMovedElementStyleManually) {
        store.updateMovedElementStyle();
      }

      _edgeScroll.afterFirstMove(store, opt);
    } // Not the first move
    else {
        // define the function to update moved element style
        var _updateMovedElementStyle = function _updateMovedElementStyle() {
          Object.assign(store.movedElement.style, {
            left: store.initialPosition.x + move.x + "px",
            top: store.initialPosition.y + move.y + "px"
          });
        };

        store.updateMovedElementStyle = _updateMovedElementStyle; // call hook beforeMove

        if (opt.beforeMove && opt.beforeMove(store, opt) === false) {
          return;
        } // try to update moved element style


        if (!opt.updateMovedElementStyleManually) {
          store.updateMovedElementStyle();
        }
      }

    _edgeScroll.afterMove(store, opt);

    store.movedCount++;
  }; // define the event listener of mouseup and touchend


  var onMouseupOrTouchEnd = function onMouseupOrTouchEnd(e) {
    if (opt.clone && store.remnantElement) {
      store.remnantElement.classList.remove(opt.remnantClassName);
    } // execute native event hooks


    if (!DragEventService.isTouch(e)) {
      opt.onmousedown && opt.onmousedown(e);
    } else {
      opt.ontouchend && opt.ontouchend(e);
    } // cancel listening mousemove, touchmove, mouseup, touchend


    DragEventService.off(document, "move", onMousemoveOrTouchMove, {
      touchArgs: [{
        passive: false
      }]
    });
    DragEventService.off(window, "end", onMouseupOrTouchEnd); //

    if (store.movedCount === 0) {
      return;
    }

    store.endEvent = e;
    var _store2 = store,
        movedElement = _store2.movedElement; // define the function to update moved element style

    var updateMovedElementStyle = function updateMovedElementStyle() {
      hp.restoreAttr(movedElement, "style");
      hp.restoreAttr(movedElement, "class");

      if (opt.clone) {
        movedElement.parentElement.removeChild(movedElement);
      }
    };

    store.updateMovedElementStyle = updateMovedElementStyle; // call hook beforeDrop

    if (opt.beforeDrop && opt.beforeDrop(store, opt) === false) {
      return;
    } // try to update moved element style


    if (!opt.updateMovedElementStyleManually) {
      updateMovedElementStyle();
    }

    _edgeScroll.afterDrop(store, opt);
  }; // define the destroy function


  var destroy = function destroy() {
    DragEventService.off(listenerElement, "start", onMousedownOrTouchStart);
    DragEventService.on(document, "move", onMousemoveOrTouchMove, {
      touchArgs: [{
        passive: false
      }]
    });
    DragEventService.on(window, "end", onMouseupOrTouchEnd);
  }; //


  return {
    destroy: destroy,
    options: opt
  };
} // available options and default options value

var defaultOptions = {
  ingoreTags: ["INPUT", "TEXTAREA", "SELECT", "OPTGROUP", "OPTION"],
  undraggableClassName: "undraggable",
  minDisplacement: 20,
  // The minimum displacement that triggers the drag. 触发拖动的最小位移.
  draggingClassName: "dragging",
  // Be added to the dragged element. 将被添加到被拖动的元素.
  clone: false,
  // Whether to clone element when drag.
  updateMovedElementStyleManually: false,
  // If true, you may need to call store.updateMovedElementStyle in beforeFirstMove, beforeMove, beforeDrop
  preventTextSelection: true,
  edgeScrollTriggerMargin: 80,
  edgeScrollSpeed: 0.35,
  edgeScrollTriggerMode: "top_left_corner",
  remnantClassName: "remnant",
  opacity: 0.8
};
// Info after event triggered. Created when mousedown or touchstart, destroied after mouseup or touchend.
var initialStore = {
  movedCount: 0
};
// edge scroll
var stopHorizontalScroll, stopVerticalScroll;

_edgeScroll.afterMove = function (store, opt) {
  if (!opt.edgeScroll) {
    return;
  }

  var margin = opt.edgeScrollTriggerMargin;
  stopOldScrollAnimation(); // get triggerPoint. The point trigger edge scroll.

  var triggerPoint = {
    x: store.mouse.clientX,
    y: store.mouse.clientY
  };

  if (opt.edgeScrollTriggerMode === "top_left_corner") {
    var vp = hp.getViewportPosition(store.movedElement);
    triggerPoint = {
      x: vp.x,
      y: vp.y
    };
  } // find the scrollable parent elements


  var foundHorizontal, foundVertical, prevElement, horizontalDir, verticalDir;

  var _iterator2 = _createForOfIteratorHelper(hp.elementsFromPoint(triggerPoint.x, triggerPoint.y)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var itemEl0 = _step2.value;
      var itemEl = itemEl0;

      if (prevElement && !hp.isDescendantOf(prevElement, itemEl)) {
        // itemEl is being covered by other elements
        continue;
      }

      var t = 10; // min scrollable displacement

      if (!foundHorizontal) {
        if (itemEl.scrollWidth > itemEl.clientWidth) {
          var _vp = fixedGetViewportPosition(itemEl);

          if (triggerPoint.x <= _vp.left + margin) {
            if (scrollableDisplacement(itemEl, "left") > t && isScrollable(itemEl, "x")) {
              foundHorizontal = itemEl;
              horizontalDir = "left";
            }
          } else if (triggerPoint.x >= _vp.left + itemEl.clientWidth - margin) {
            if (scrollableDisplacement(itemEl, "right") > t && isScrollable(itemEl, "x")) {
              foundHorizontal = itemEl;
              horizontalDir = "right";
            }
          }
        }
      }

      if (!foundVertical) {
        if (itemEl.scrollHeight > itemEl.clientHeight) {
          var _vp2 = fixedGetViewportPosition(itemEl);

          if (triggerPoint.y <= _vp2.top + margin) {
            if (scrollableDisplacement(itemEl, "up") > t && isScrollable(itemEl, "y")) {
              foundVertical = itemEl;
              verticalDir = "up";
            }
          } else if (triggerPoint.y >= _vp2.top + itemEl.clientHeight - margin) {
            if (scrollableDisplacement(itemEl, "down") > t && isScrollable(itemEl, "y")) {
              foundVertical = itemEl;
              verticalDir = "down";
            }
          }
        }
      }

      if (foundHorizontal && foundVertical) {
        break;
      }

      prevElement = itemEl;
    } // scroll

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  if (foundHorizontal) {
    if (horizontalDir === "left") {
      stopHorizontalScroll = hp.scrollTo({
        x: 0,
        element: foundHorizontal,
        duration: scrollableDisplacement(foundHorizontal, "left") / opt.edgeScrollSpeed
      });
    } else {
      stopHorizontalScroll = hp.scrollTo({
        x: foundHorizontal.scrollWidth - foundHorizontal.clientWidth,
        element: foundHorizontal,
        duration: scrollableDisplacement(foundHorizontal, "right") / opt.edgeScrollSpeed
      });
    }
  }

  if (foundVertical) {
    if (verticalDir === "up") {
      stopVerticalScroll = hp.scrollTo({
        y: 0,
        element: foundVertical,
        duration: scrollableDisplacement(foundVertical, "up") / opt.edgeScrollSpeed
      });
    } else {
      stopVerticalScroll = hp.scrollTo({
        y: foundVertical.scrollHeight - foundVertical.clientHeight,
        element: foundVertical,
        duration: scrollableDisplacement(foundVertical, "down") / opt.edgeScrollSpeed
      });
    }
  } // is element scrollable in a direction


  function isScrollable(el, dir) {
    var style = getComputedStyle(el);
    var key = "overflow-".concat(dir); // document.documentElement is special

    var special = document.scrollingElement || document.documentElement;

    if (el === special) {
      return style[key] === "visible" || style[key] === "auto" || style[key] === "scroll";
    }

    return style[key] === "auto" || style[key] === "scroll";
  } // scrollable displacement of element  in a direction


  function scrollableDisplacement(el, dir) {
    if (dir === "up") {
      return el.scrollTop;
    } else if (dir === "down") {
      return el.scrollHeight - el.scrollTop - el.clientHeight;
    } else if (dir === "left") {
      return el.scrollLeft;
    } else if (dir === "right") {
      return el.scrollWidth - el.scrollLeft - el.clientWidth;
    }
  }

  function fixedGetViewportPosition(el) {
    var r = hp.getViewportPosition(el); // document.documentElement is special

    var special = document.scrollingElement || document.documentElement;

    if (el === special) {
      r.top = 0;
      r.left = 0;
    }

    return r;
  }
};

_edgeScroll.afterDrop = function (store, opt) {
  if (!opt.edgeScroll) {
    return;
  }

  stopOldScrollAnimation();
}; // stop old scroll animation


function stopOldScrollAnimation() {
  if (stopHorizontalScroll) {
    stopHorizontalScroll();
    stopHorizontalScroll = null;
  }

  if (stopVerticalScroll) {
    stopVerticalScroll();
    stopVerticalScroll = null;
  }
}

exports.default = index;
exports.defaultOptions = defaultOptions;
exports.initialStore = initialStore;
