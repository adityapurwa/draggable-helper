import * as hp from "helper-js";
import DragEventService, {
  EventPosition,
  MouseOrTouchEvent,
} from "drag-event-service";

const _edgeScroll = {
  afterFirstMove(store: Store, opt: Options) {},
  afterMove(store: Store, opt: Options) {},
  afterDrop(store: Store, opt: Options) {},
};
export default function (listenerElement: HTMLElement, opt: Options = {}) {
  let store: Store;
  // set default value of options
  hp.objectAssignIfKeyNull(opt, defaultOptions);
  // define the event listener of mousedown and touchstart
  const onMousedownOrTouchStart = (
    e: MouseOrTouchEvent,
    mouse: EventPosition
  ) => {
    // execute native event hooks
    if (!DragEventService.isTouch(e)) {
      opt.onmousedown && opt.onmousedown(<MouseEvent>e);
    } else {
      opt.ontouchstart && opt.ontouchstart(<TouchEvent>e);
    }
    const target = e.target as HTMLElement;
    // check if triggered by ignore tags
    if (opt.ingoreTags.includes(target.tagName)) {
      return;
    }
    // check if trigger element and its parent has undraggable class name
    if (hp.hasClass(target, opt.undraggableClassName)) {
      return;
    }
    const isParentUndraggable = hp.findParent(target, (el) => {
      if (hp.hasClass(el, opt.undraggableClassName)) {
        return true;
      }
      if (el === listenerElement) {
        return "break";
      }
    });
    if (isParentUndraggable) {
      return;
    }
    // Initialize store. Store start event, initial position
    store = JSON.parse(JSON.stringify(initialStore));
    store.startEvent = e;
    store.listenerElement = listenerElement;
    store.directTriggerElement = target;
    store.initialMouse = { ...mouse };
    // get triggerElement
    let triggerElementIsMovedOrClonedElement = false;
    if (opt.getTriggerElement) {
      const el = opt.getTriggerElement(store.directTriggerElement, store);
      if (!el) {
        return;
      }
      store.triggerElement = el;
    } else if (opt.triggerClassName) {
      let triggerElement;
      for (const className of hp.toArrayIfNot(opt.triggerClassName)) {
        triggerElement = hp.findParent(
          store.directTriggerElement,
          (el) => {
            if (hp.hasClass(el, <string>className)) {
              return true;
            }
            if (el === listenerElement) {
              return "break";
            }
          },
          { withSelf: true }
        );
        if (triggerElement) {
          break;
        }
      }
      if (!triggerElement) {
        return;
      }
      store.triggerElement = triggerElement;
    } else {
      triggerElementIsMovedOrClonedElement = true;
    }
    // get movedOrClonedElement
    store.movedOrClonedElement = opt.getMovedOrClonedElement
      ? opt.getMovedOrClonedElement(store.directTriggerElement, store, opt)
      : listenerElement;
    if (!store.movedOrClonedElement) {
      return;
    }
    if (triggerElementIsMovedOrClonedElement) {
      store.triggerElement = store.movedOrClonedElement;
    }
    // check if trigger element is same with directTriggerElement when options.triggerBySelf is true
    if (
      opt.triggerBySelf &&
      store.triggerElement !== store.directTriggerElement
    ) {
      return;
    }
    // prevent text be selected
    if (!DragEventService.isTouch(e)) {
      // Do not prevent when touch. Or the elements within the node can not trigger click event.
      if (opt.preventTextSelection) {
        e.preventDefault();
      }
    }
    // listen mousemove and touchmove
    DragEventService.on(document, "move", onMousemoveOrTouchMove, {
      touchArgs: [{ passive: false }],
    });
    // listen mouseup and touchend
    DragEventService.on(window, "end", onMouseupOrTouchEnd);
  };
  // bind mousedown or touchstart event listener
  DragEventService.on(listenerElement, "start", onMousedownOrTouchStart);

  // define the event listener of mousemove and touchmove
  const onMousemoveOrTouchMove = (
    e: MouseOrTouchEvent,
    mouse: EventPosition
  ) => {
    // execute native event hooks
    if (!DragEventService.isTouch(e)) {
      opt.onmousemove && opt.onmousemove(<MouseEvent>e);
    } else {
      opt.ontouchmove && opt.ontouchmove(<TouchEvent>e);
    }
    //
    const { movedOrClonedElement } = store;
    // calc move and attach related info to store
    const move = (store.move = {
      x: mouse.clientX - store.initialMouse.clientX,
      y: mouse.clientY - store.initialMouse.clientY,
    });
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
    }
    // first move
    if (store.movedCount === 0) {
      // check if min displacement exceeded.
      console.log(opt.minDisplacement);
      if (opt.minDisplacement) {
        const x2 = Math.pow(move.x, 2);
        const y2 = Math.pow(move.y, 2);
        const dtc = Math.pow(x2 + y2, 0.5);
        if (dtc < opt.minDisplacement) {
          return;
        }
      }
      // resolve elements
      const movedElement = opt.clone
        ? (movedOrClonedElement.cloneNode(true) as HTMLElement)
        : movedOrClonedElement;
      if (opt.clone) {
        store.remnantElement = movedOrClonedElement;
        store.remnantElement.classList.add(opt.remnantClassName);
      }
      const initialPosition = hp.getViewportPosition(movedOrClonedElement);
      // attach elements and initialPosition to store
      store.movedOrClonedElement = movedOrClonedElement;
      store.movedElement = movedElement;
      store.initialPositionRelativeToViewport = initialPosition;
      store.initialPosition = initialPosition;

      // define the function to update moved element style
      const updateMovedElementStyle = () => {
        if (opt.clone) {
          store.movedOrClonedElement.parentElement.appendChild(movedElement);
        }
        const size = hp.getBoundingClientRect(movedElement);
        const style = {
          width: `${Math.ceil(size.width)}px`,
          height: `${Math.ceil(size.height)}px`,
          zIndex: 9999,
          opacity: 0.8,
          position: "fixed",
          left: initialPosition.x + "px",
          top: initialPosition.y + "px",
          pointerEvents: "none",
        };
        hp.backupAttr(movedElement, "style");
        for (const key in style) {
          movedElement.style[key] = style[key];
        }
        hp.backupAttr(movedElement, "class");
        hp.addClass(movedElement, opt.draggingClassName);

        const nowPosition = hp.getViewportPosition(movedElement);
        if (nowPosition.x !== initialPosition.x) {
          initialPosition.x =
            initialPosition.x - (nowPosition.x - initialPosition.x);
          initialPosition.y =
            initialPosition.y - (nowPosition.y - initialPosition.y);
          movedElement.style.left = initialPosition.x + "px";
          movedElement.style.top = initialPosition.y + "px";
        }
      };
      store.updateMovedElementStyle = updateMovedElementStyle;
      // call hook beforeFirstMove, beforeMove
      if (opt.beforeFirstMove && opt.beforeFirstMove(store, opt) === false) {
        return;
      }
      if (opt.beforeMove && opt.beforeMove(store, opt) === false) {
        return;
      }
      // try to update moved element style
      if (!opt.updateMovedElementStyleManually) {
        store.updateMovedElementStyle();
      }
      _edgeScroll.afterFirstMove(store, opt);
    }
    // Not the first move
    else {
      // define the function to update moved element style
      const updateMovedElementStyle = () => {
        Object.assign(store.movedElement.style, {
          left: store.initialPosition.x + move.x + "px",
          top: store.initialPosition.y + move.y + "px",
        });
      };
      store.updateMovedElementStyle = updateMovedElementStyle;
      // call hook beforeMove
      if (opt.beforeMove && opt.beforeMove(store, opt) === false) {
        return;
      }
      // try to update moved element style
      if (!opt.updateMovedElementStyleManually) {
        store.updateMovedElementStyle();
      }
    }
    _edgeScroll.afterMove(store, opt);
    store.movedCount++;
  };

  // define the event listener of mouseup and touchend
  const onMouseupOrTouchEnd = (e: MouseOrTouchEvent) => {
    if (opt.clone && store.remnantElement) {
      store.remnantElement.classList.remove(opt.remnantClassName);
    }
    // execute native event hooks
    if (!DragEventService.isTouch(e)) {
      opt.onmousedown && opt.onmousedown(<MouseEvent>e);
    } else {
      opt.ontouchend && opt.ontouchend(<TouchEvent>e);
    }
    // cancel listening mousemove, touchmove, mouseup, touchend
    DragEventService.off(document, "move", onMousemoveOrTouchMove, {
      touchArgs: [{ passive: false }],
    });
    DragEventService.off(window, "end", onMouseupOrTouchEnd);
    //
    if (store.movedCount === 0) {
      return;
    }
    store.endEvent = e;
    const { movedElement } = store;
    // define the function to update moved element style
    const updateMovedElementStyle = () => {
      hp.restoreAttr(movedElement, "style");
      hp.restoreAttr(movedElement, "class");
      if (opt.clone) {
        movedElement.parentElement.removeChild(movedElement);
      }
    };
    store.updateMovedElementStyle = updateMovedElementStyle;
    // call hook beforeDrop
    if (opt.beforeDrop && opt.beforeDrop(store, opt) === false) {
      return;
    }
    // try to update moved element style
    if (!opt.updateMovedElementStyleManually) {
      updateMovedElementStyle();
    }
    _edgeScroll.afterDrop(store, opt);
  };

  // define the destroy function
  const destroy = () => {
    DragEventService.off(listenerElement, "start", onMousedownOrTouchStart);
    DragEventService.on(document, "move", onMousemoveOrTouchMove, {
      touchArgs: [{ passive: false }],
    });
    DragEventService.on(window, "end", onMouseupOrTouchEnd);
  };
  //
  return { destroy, options: opt };
}

// available options and default options value
export const defaultOptions = {
  ingoreTags: ["INPUT", "TEXTAREA", "SELECT", "OPTGROUP", "OPTION"],
  undraggableClassName: "undraggable",
  minDisplacement: 20, // The minimum displacement that triggers the drag. 触发拖动的最小位移.
  draggingClassName: "dragging", // Be added to the dragged element. 将被添加到被拖动的元素.
  clone: false, // Whether to clone element when drag.
  updateMovedElementStyleManually: false, // If true, you may need to call store.updateMovedElementStyle in beforeFirstMove, beforeMove, beforeDrop
  preventTextSelection: true,
  edgeScrollTriggerMargin: 80,
  edgeScrollSpeed: 0.35,
  edgeScrollTriggerMode: "top_left_corner",
  remnantClassName: "remnant",
};

export interface Options extends Partial<typeof defaultOptions> {
  triggerClassName?: string | string[]; // triggerElement must have the class name.
  triggerBySelf?: boolean; // directTriggerElement must be the triggerElement
  getTriggerElement?: (
    directTriggerElement: HTMLElement,
    store: Store
  ) => HTMLElement | undefined; // get triggerElement by directTriggerElement. override triggerClassName.
  getMovedOrClonedElement?: (
    directTriggerElement: HTMLElement,
    store: Store,
    opt: Options
  ) => HTMLElement;
  beforeFirstMove?: (store: Store, opt: Options) => boolean | undefined;
  beforeMove?: (store: Store, opt: Options) => boolean | undefined;
  beforeDrop?: (store: Store, opt: Options) => boolean | undefined;
  preventTextSelection?: boolean;
  // edge scroll
  edgeScroll?: boolean;
  edgeScrollTriggerMargin?: number;
  edgeScrollSpeed?: number;
  edgeScrollTriggerMode?: "top_left_corner" | "mouse";
  // native event hooks
  onmousedown?: (e: MouseEvent) => void;
  onmousemove?: (e: MouseEvent) => void;
  onmouseup?: (e: MouseEvent) => void;
  ontouchstart?: (e: TouchEvent) => void;
  ontouchmove?: (e: TouchEvent) => void;
  ontouchend?: (e: TouchEvent) => void;
}

// Info after event triggered. Created when mousedown or touchstart, destroied after mouseup or touchend.
export const initialStore = {
  movedCount: 0,
};
type InitialStore = typeof initialStore;

export interface Store extends InitialStore {
  remnantElement: HTMLElement;
  listenerElement: HTMLElement;
  directTriggerElement: HTMLElement; // The element triggered event directly. 直接触发事件的元素
  triggerElement: HTMLElement; // The element allowed to trigger event. Maybe the parent of directTriggerElement. 允许作为拖拽触发器的元素. 可能是directTriggerElement的父级.
  startEvent: MouseOrTouchEvent;
  moveEvent: MouseOrTouchEvent;
  endEvent: MouseOrTouchEvent;
  mouse: EventPosition; // current event position
  initialMouse: EventPosition;
  move: EventPosition2; // Moved displacement relative to viewport. 相对于视窗的位移
  movedOrClonedElement: HTMLElement; // The element to be moved or cloned.
  movedElement: HTMLElement; // The element to be moved.
  initialPosition: EventPosition2; // fixed position. The position relative to viewport by default. Relative to stacking context. Sometimes stacking context is not html, for example a parent with css 'transform' defined.
  initialPositionRelativeToViewport: EventPosition2; // fixed position. The position relative to viewport
  updateMovedElementStyle: () => void;
}

// Other type
type EventPosition2 = { x: number; y: number };

// edge scroll
let stopHorizontalScroll, stopVerticalScroll;
_edgeScroll.afterMove = (store: Store, opt: Options) => {
  if (!opt.edgeScroll) {
    return;
  }
  const margin = opt.edgeScrollTriggerMargin;
  stopOldScrollAnimation();
  // get triggerPoint. The point trigger edge scroll.
  let triggerPoint = { x: store.mouse.clientX, y: store.mouse.clientY };
  if (opt.edgeScrollTriggerMode === "top_left_corner") {
    const vp = hp.getViewportPosition(store.movedElement);
    triggerPoint = { x: vp.x, y: vp.y };
  }
  // find the scrollable parent elements
  let foundHorizontal: HTMLElement,
    foundVertical: HTMLElement,
    prevElement: HTMLElement,
    horizontalDir: "left" | "right",
    verticalDir: "up" | "down";
  for (const itemEl0 of hp.elementsFromPoint(triggerPoint.x, triggerPoint.y)) {
    const itemEl = <HTMLElement>itemEl0;
    if (prevElement && !hp.isDescendantOf(prevElement, itemEl)) {
      // itemEl is being covered by other elements
      continue;
    }
    const t = 10; // min scrollable displacement
    if (!foundHorizontal) {
      if (itemEl.scrollWidth > itemEl.clientWidth) {
        const vp = fixedGetViewportPosition(itemEl);
        if (triggerPoint.x <= vp.left + margin) {
          if (
            scrollableDisplacement(itemEl, "left") > t &&
            isScrollable(itemEl, "x")
          ) {
            foundHorizontal = itemEl;
            horizontalDir = "left";
          }
        } else if (triggerPoint.x >= vp.left + itemEl.clientWidth - margin) {
          if (
            scrollableDisplacement(itemEl, "right") > t &&
            isScrollable(itemEl, "x")
          ) {
            foundHorizontal = itemEl;
            horizontalDir = "right";
          }
        }
      }
    }
    if (!foundVertical) {
      if (itemEl.scrollHeight > itemEl.clientHeight) {
        const vp = fixedGetViewportPosition(itemEl);
        if (triggerPoint.y <= vp.top + margin) {
          if (
            scrollableDisplacement(itemEl, "up") > t &&
            isScrollable(itemEl, "y")
          ) {
            foundVertical = itemEl;
            verticalDir = "up";
          }
        } else if (triggerPoint.y >= vp.top + itemEl.clientHeight - margin) {
          if (
            scrollableDisplacement(itemEl, "down") > t &&
            isScrollable(itemEl, "y")
          ) {
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
  }
  // scroll
  if (foundHorizontal) {
    if (horizontalDir === "left") {
      stopHorizontalScroll = hp.scrollTo({
        x: 0,
        element: foundHorizontal,
        duration:
          scrollableDisplacement(foundHorizontal, "left") / opt.edgeScrollSpeed,
      });
    } else {
      stopHorizontalScroll = hp.scrollTo({
        x: foundHorizontal.scrollWidth - foundHorizontal.clientWidth,
        element: foundHorizontal,
        duration:
          scrollableDisplacement(foundHorizontal, "right") /
          opt.edgeScrollSpeed,
      });
    }
  }
  if (foundVertical) {
    if (verticalDir === "up") {
      stopVerticalScroll = hp.scrollTo({
        y: 0,
        element: foundVertical,
        duration:
          scrollableDisplacement(foundVertical, "up") / opt.edgeScrollSpeed,
      });
    } else {
      stopVerticalScroll = hp.scrollTo({
        y: foundVertical.scrollHeight - foundVertical.clientHeight,
        element: foundVertical,
        duration:
          scrollableDisplacement(foundVertical, "down") / opt.edgeScrollSpeed,
      });
    }
  }
  // is element scrollable in a direction
  function isScrollable(el: HTMLElement, dir: "x" | "y") {
    const style = getComputedStyle(el);
    const key = `overflow-${dir}`;
    // document.documentElement is special
    const special = document.scrollingElement || document.documentElement;
    if (el === special) {
      return (
        style[key] === "visible" ||
        style[key] === "auto" ||
        style[key] === "scroll"
      );
    }
    return style[key] === "auto" || style[key] === "scroll";
  }

  // scrollable displacement of element  in a direction
  function scrollableDisplacement(
    el: HTMLElement,
    dir: "up" | "down" | "left" | "right"
  ) {
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

  function fixedGetViewportPosition(el: HTMLElement) {
    const r = hp.getViewportPosition(el);
    // document.documentElement is special
    const special = document.scrollingElement || document.documentElement;
    if (el === special) {
      r.top = 0;
      r.left = 0;
    }
    return r;
  }
};
_edgeScroll.afterDrop = (store: Store, opt: Options) => {
  if (!opt.edgeScroll) {
    return;
  }
  stopOldScrollAnimation();
};

// stop old scroll animation
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
