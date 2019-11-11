parcelRequire = (function (init) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;
  var modules = {};

  function localRequire(name, jumped) {
    if (name in modules) {
      return modules[name];
    }

    // if we cannot find the module within our internal map or
    // cache jump to the current global require ie. the last bundle
    // that was added to the page.
    var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
    if (!jumped && currentRequire) {
      return currentRequire(name, true);
    }

    // If there are other bundles on this page the require from the
    // previous one is saved to 'previousRequire'. Repeat this as
    // many times as there are bundles until the module is found or
    // we exhaust the require chain.
    if (previousRequire) {
      return previousRequire(name, true);
    }

    // Try the node require function if it exists.
    if (nodeRequire && typeof name === 'string') {
      return nodeRequire(name);
    }

    var err = new Error('Cannot find module \'' + name + '\'');
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  }

  localRequire.register = function register(id, exports) {
    modules[id] = exports;
  };

  modules = init(localRequire);
  localRequire.modules = modules;
  return localRequire;
})(function (require) {
// ASSET: ../node_modules/@mood/dom/lib/utils/set_attribute.js
var $RSj4$exports = {};
Object.defineProperty($RSj4$exports, "__esModule", {
  value: true
});

var $RSj4$export$setOneStyle = function (el, name, value) {
  var anyStyle = el.style;

  if (value == null) {
    anyStyle[name] = null;
  } else {
    var s = String(value);

    if (s !== anyStyle[name]) {
      anyStyle[name] = String(value);
    }
  }
};

$RSj4$exports.setOneStyle = $RSj4$export$setOneStyle;

var $RSj4$export$setEvent = function (dispatch) {
  return function (el, name, value) {
    var anyEl = el;

    if (value == null) {
      anyEl[name] = null;
    } else {
      anyEl[name] = function (e) {
        var r = value(e);
        if (r != null) dispatch(r);
      };
    }
  };
};

$RSj4$exports.setEvent = $RSj4$export$setEvent;

var $RSj4$export$setAttribute = function (el, name, value) {
  if (value == null) {
    el.removeAttribute(name);
  } else {
    var s = String(value);

    if (s !== el.getAttribute(name)) {
      el.setAttribute(name, s);
    }
  }
};

$RSj4$exports.setAttribute = $RSj4$export$setAttribute;

var $RSj4$export$setProperty = function (el, name, value) {
  var anyEl = el;

  if (value == null && anyEl[name] != null) {
    anyEl[name] = null;
  } else if (anyEl[name] !== value) {
    anyEl[name] = value;
  }
};

$RSj4$exports.setProperty = $RSj4$export$setProperty;

var $RSj4$export$setStyleAttribute = function (el, name, value) {
  var html = el;

  if (value == null) {
    html.removeAttribute(name);
  } else {
    var s = Object.keys(value).map(function (k) {
      // const cssName = cssMapper[k as keyof (typeof cssMapper)] || k
      return k + ": " + value[k] + ";";
    }).join(' ');
    $RSj4$export$setAttribute(el, name, s.length && s || null);
  }
};

$RSj4$exports.setStyleAttribute = $RSj4$export$setStyleAttribute;

var $RSj4$export$setBoolProperty = function (el, name, value) {
  var anyEl = el;

  if (value == null) {
    anyEl[name] = null;
  } else {
    var bool = Boolean(value);

    if (anyEl[name] !== bool) {
      anyEl[name] = bool;
    }
  }
};

$RSj4$exports.setBoolProperty = $RSj4$export$setBoolProperty;

var $RSj4$export$setEnumBoolAttribute = function (el, name, value) {
  $RSj4$export$setAttribute(el, name, value === true ? 'true' : value === false ? 'false' : null);
};

$RSj4$exports.setEnumBoolAttribute = $RSj4$export$setEnumBoolAttribute;

var $RSj4$export$setBoolAttribute = function (el, name, value) {
  $RSj4$export$setAttribute(el, name, value === true ? '' : null);
};

$RSj4$exports.setBoolAttribute = $RSj4$export$setBoolAttribute;

var $RSj4$export$setCommaSeparated = function (el, name, values) {
  $RSj4$export$setAttribute(el, name, values && values.length > 0 && values.join(', ') || null);
};

$RSj4$exports.setCommaSeparated = $RSj4$export$setCommaSeparated;

var $RSj4$export$setSpaceSeparated = function (el, name, values) {
  $RSj4$export$setAttribute(el, name, values && values.length > 0 && values.join(' ') || null);
};

$RSj4$exports.setSpaceSeparated = $RSj4$export$setSpaceSeparated; //# sourceMappingURL=set_attribute.js.map

// ASSET: ../node_modules/@mood/dom/lib/web_attributes_mapper.js
var $mUrf$exports = {};
Object.defineProperty($mUrf$exports, "__esModule", {
  value: true
});
/* istanbul ignore file */

var $mUrf$export$htmlAttributeNameMap = {
  acceptCharset: 'accept-charset',
  asAttr: 'as',
  className: 'class',
  contentEditable: 'contenteditable',
  httpEquiv: 'http-equiv'
};
$mUrf$exports.htmlAttributeNameMap = $mUrf$export$htmlAttributeNameMap;
var $mUrf$export$htmlAttributeMap = {
  acceptCharset: $RSj4$export$setSpaceSeparated,
  async: $RSj4$export$setBoolAttribute,
  autofocus: $RSj4$export$setBoolAttribute,
  autoplay: $RSj4$export$setBoolAttribute,
  checked: $RSj4$export$setBoolProperty,
  contentEditable: $RSj4$export$setEnumBoolAttribute,
  controls: $RSj4$export$setBoolAttribute,
  default: $RSj4$export$setBoolAttribute,
  defer: $RSj4$export$setBoolAttribute,
  disabled: $RSj4$export$setBoolAttribute,
  draggable: $RSj4$export$setEnumBoolAttribute,
  formnovalidate: $RSj4$export$setBoolAttribute,
  headers: $RSj4$export$setSpaceSeparated,
  hidden: $RSj4$export$setBoolAttribute,
  ismap: $RSj4$export$setBoolAttribute,
  itemscope: $RSj4$export$setBoolAttribute,
  loop: $RSj4$export$setBoolAttribute,
  multiple: $RSj4$export$setBoolProperty,
  muted: $RSj4$export$setBoolProperty,
  nomodule: $RSj4$export$setBoolAttribute,
  novalidate: $RSj4$export$setBoolAttribute,
  open: $RSj4$export$setBoolAttribute,
  ping: $RSj4$export$setSpaceSeparated,
  playsinline: $RSj4$export$setBoolAttribute,
  readonly: $RSj4$export$setBoolAttribute,
  rel: $RSj4$export$setSpaceSeparated,
  required: $RSj4$export$setBoolAttribute,
  reversed: $RSj4$export$setBoolAttribute,
  selected: $RSj4$export$setBoolProperty,
  sizes: $RSj4$export$setCommaSeparated,
  srcset: $RSj4$export$setCommaSeparated,
  style: $RSj4$export$setStyleAttribute,
  typemustmatch: $RSj4$export$setBoolAttribute,
  value: $RSj4$export$setProperty
};
$mUrf$exports.htmlAttributeMap = $mUrf$export$htmlAttributeMap; //# sourceMappingURL=web_attributes_mapper.js.map

// ASSET: ../node_modules/@mood/dom/lib/utils/node_view.js
var $l2IW$exports = {};

var $l2IW$var$__extends = $l2IW$exports && $l2IW$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($l2IW$exports, "__esModule", {
  value: true
});

var $l2IW$var$DOMBaseNodeView =
/** @class */
function () {
  function DOMBaseNodeView(node, children, beforeDestroy) {
    this.node = node;
    this.children = children;
    this.beforeDestroy = beforeDestroy;
  }

  DOMBaseNodeView.prototype.destroy = function () {
    if (this.beforeDestroy) this.beforeDestroy();
    $maac$export$removeNode(this.node);

    for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
      var c = _a[_i];
      c.destroy();
    }
  };

  return DOMBaseNodeView;
}();

var $l2IW$export$DOMBaseNodeView = $l2IW$var$DOMBaseNodeView;
$l2IW$exports.DOMBaseNodeView = $l2IW$export$DOMBaseNodeView;

var $l2IW$var$DOMStaticNodeView =
/** @class */
function (_super) {
  $l2IW$var$__extends(DOMStaticNodeView, _super);

  function DOMStaticNodeView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.kind = 'static';
    return _this;
  }

  return DOMStaticNodeView;
}($l2IW$var$DOMBaseNodeView);

var $l2IW$export$DOMStaticNodeView = $l2IW$var$DOMStaticNodeView;
$l2IW$exports.DOMStaticNodeView = $l2IW$export$DOMStaticNodeView;

var $l2IW$var$DOMDynamicNodeView =
/** @class */
function (_super) {
  $l2IW$var$__extends(DOMDynamicNodeView, _super);

  function DOMDynamicNodeView(node, children, change, beforeDestroy) {
    var _this = _super.call(this, node, children, beforeDestroy) || this;

    _this.node = node;
    _this.children = children;
    _this.change = change;
    _this.beforeDestroy = beforeDestroy;
    _this.kind = 'dynamic';
    return _this;
  }

  return DOMDynamicNodeView;
}($l2IW$var$DOMBaseNodeView);

var $l2IW$export$DOMDynamicNodeView = $l2IW$var$DOMDynamicNodeView;
$l2IW$exports.DOMDynamicNodeView = $l2IW$export$DOMDynamicNodeView; //# sourceMappingURL=node_view.js.map

// ASSET: ../node_modules/@mood/dom/lib/text.js
var $bvNU$exports = {};
Object.defineProperty($bvNU$exports, "__esModule", {
  value: true
});

var $bvNU$var$renderLiteral = function (ctx, value) {
  var node = ctx.doc.createTextNode(value || '');
  var view = new $l2IW$export$DOMStaticNodeView(node, []);
  ctx.append(node);
  return view;
};

var $bvNU$var$renderFunction = function (ctx, state, map) {
  var node = ctx.doc.createTextNode(map(state) || '');

  var f = function (state) {
    var newContent = map(state) || ''; // TODO, is this optimization worth it?

    if (node.textContent !== newContent) node.textContent = newContent;
  };

  var view = new $l2IW$export$DOMDynamicNodeView(node, [], f);
  ctx.append(node);
  return view;
};

var $bvNU$var$DOMText =
/** @class */
function () {
  function DOMText(content) {
    this.content = content;
  }

  DOMText.prototype.render = function (ctx, state) {
    if (typeof this.content === 'function') {
      return $bvNU$var$renderFunction(ctx, state, this.content);
    } else {
      return $bvNU$var$renderLiteral(ctx, this.content);
    }
  };

  return DOMText;
}();

var $bvNU$export$DOMText = $bvNU$var$DOMText;
$bvNU$exports.DOMText = $bvNU$export$DOMText;

var $bvNU$export$text = function (content) {
  return new $bvNU$var$DOMText(content);
};

$bvNU$exports.text = $bvNU$export$text; //# sourceMappingURL=text.js.map

// ASSET: ../node_modules/@mood/dom/lib/utils/dom.js
var $maac$exports = {};
Object.defineProperty($maac$exports, "__esModule", {
  value: true
});

var $maac$export$removeNode = function (node) {
  var el = node;

  if (el && el.onblur) {
    el.onblur = null;
  }

  if (node && node.parentElement) {
    node.parentElement.removeChild(node);
  }
};

$maac$exports.removeNode = $maac$export$removeNode;

var $maac$export$insertBefore = function (ref) {
  return function (node) {
    if (ref.parentElement != null) {
      ref.parentElement.insertBefore(node, ref);
    }
  };
};

$maac$exports.insertBefore = $maac$export$insertBefore;

var $maac$export$filterDynamics = function (children) {
  return children.filter(function (child) {
    return child.kind === 'dynamic';
  }).map(function (child) {
    return child;
  });
};

$maac$exports.filterDynamics = $maac$export$filterDynamics;

var $maac$export$domChildToTemplate = function (dom) {
  if (typeof dom === 'string' || typeof dom === 'function') return $bvNU$export$text(dom);else return dom;
};

$maac$exports.domChildToTemplate = $maac$export$domChildToTemplate;

var $maac$export$processAttribute = function (el, name, value, dispatch, acc) {
  name = $mUrf$export$htmlAttributeNameMap[name] || name;
  var set;
  var isEvent = name.startsWith('on');

  if (isEvent) {
    // events
    name = name.toLowerCase();
    set = $RSj4$export$setEvent(dispatch);
  } else if (name.startsWith('$')) {
    // pseudo-styles
    name = name.substring(1);
    set = $RSj4$export$setOneStyle;
  } else {
    // other attributes/properties
    set = $mUrf$export$htmlAttributeMap[name] || $RSj4$export$setAttribute;
  }

  var anyValue = value;

  if (anyValue && anyValue.kind && anyValue.kind === 'derived') {
    var derived_1 = anyValue;

    var f = function (state) {
      return set(el, name, derived_1.resolve(state));
    };

    return {
      dynamics: acc.dynamics.concat([f]),
      statics: acc.statics
    };
  } else if (!isEvent && typeof value === 'function') {
    var f = function (state) {
      return set(el, name, value(state));
    };

    return {
      dynamics: acc.dynamics.concat([f]),
      statics: acc.statics
    };
  } else {
    var f = function () {
      return set(el, name, value);
    };

    return {
      dynamics: acc.dynamics,
      statics: acc.statics.concat([f])
    };
  }
};

$maac$exports.processAttribute = $maac$export$processAttribute; //# sourceMappingURL=dom.js.map

// ASSET: ../node_modules/@mood/dom/lib/fragment.js
var $tFRt$exports = {};

var $tFRt$var$__extends = $tFRt$exports && $tFRt$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($tFRt$exports, "__esModule", {
  value: true
});

var $tFRt$var$DOMBaseFragmentView =
/** @class */
function () {
  function DOMBaseFragmentView(views) {
    this.views = views;
  }

  DOMBaseFragmentView.prototype.destroy = function () {
    for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
      var v = _a[_i];
      v.destroy();
    }
  };

  return DOMBaseFragmentView;
}();

var $tFRt$export$DOMBaseFragmentView = $tFRt$var$DOMBaseFragmentView;
$tFRt$exports.DOMBaseFragmentView = $tFRt$export$DOMBaseFragmentView;

var $tFRt$var$DOMStaticFragmentView =
/** @class */
function (_super) {
  $tFRt$var$__extends(DOMStaticFragmentView, _super);

  function DOMStaticFragmentView() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.kind = 'static';
    return _this;
  }

  return DOMStaticFragmentView;
}($tFRt$var$DOMBaseFragmentView);

var $tFRt$export$DOMStaticFragmentView = $tFRt$var$DOMStaticFragmentView;
$tFRt$exports.DOMStaticFragmentView = $tFRt$export$DOMStaticFragmentView;

var $tFRt$var$DOMDynamicFragmentView =
/** @class */
function (_super) {
  $tFRt$var$__extends(DOMDynamicFragmentView, _super);

  function DOMDynamicFragmentView(views, change) {
    var _this = _super.call(this, views) || this;

    _this.change = change;
    _this.kind = 'dynamic';
    return _this;
  }

  return DOMDynamicFragmentView;
}($tFRt$var$DOMBaseFragmentView);

var $tFRt$export$DOMDynamicFragmentView = $tFRt$var$DOMDynamicFragmentView;
$tFRt$exports.DOMDynamicFragmentView = $tFRt$export$DOMDynamicFragmentView;

var $tFRt$export$fragmentView = function (views) {
  var dynamics = $maac$export$filterDynamics(views);

  if (dynamics.length > 0) {
    return new $tFRt$var$DOMDynamicFragmentView(views, function (state) {
      for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
        var d = dynamics_1[_i];
        d.change(state);
      }
    });
  } else {
    return new $tFRt$var$DOMStaticFragmentView(views);
  }
};

$tFRt$exports.fragmentView = $tFRt$export$fragmentView; //# sourceMappingURL=fragment.js.map

// ASSET: ../node_modules/@mood/dom/node_modules/@mood/store/lib/emitter.js
var $NwTl$exports = {};
Object.defineProperty($NwTl$exports, "__esModule", {
  value: true
});

var $NwTl$var$Emitter =
/** @class */
function () {
  function Emitter() {
    this.listeners = [];
  }

  Emitter.ofOne = function () {
    return new Emitter();
  };

  Emitter.ofTwo = function () {
    return new Emitter();
  };

  Emitter.ofThree = function () {
    return new Emitter();
  };

  Emitter.prototype.emit = function () {
    var value = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      value[_i] = arguments[_i];
    }

    for (var _a = 0, _b = this.listeners; _a < _b.length; _a++) {
      var l = _b[_a];
      l.apply(void 0, value);
    }
  };

  Emitter.prototype.on = function (listener) {
    this.listeners.push(listener);
  };

  Emitter.prototype.off = function (listener) {
    var index = this.listeners.indexOf(listener);
    if (index < 0) return false;
    this.listeners.splice(index, 1);
    return true;
  };

  Emitter.prototype.once = function (listener) {
    var _this = this;

    var wrapper = function () {
      var values = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }

      _this.off(wrapper);

      listener.apply(void 0, values);
    };

    this.on(wrapper);
  };

  return Emitter;
}();

var $NwTl$export$Emitter = $NwTl$var$Emitter;
$NwTl$exports.Emitter = $NwTl$export$Emitter;

var $NwTl$export$debounce = function (delay) {
  return function (listener) {
    var running = false;
    var acc;
    return function () {
      var values = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }

      acc = values;
      if (running) return;
      running = true;
      setTimeout(function () {
        running = false;
        listener.apply(void 0, acc);
      }, delay);
    };
  };
};

$NwTl$exports.debounce = $NwTl$export$debounce;

var $NwTl$export$nextFrame = function (listener) {
  var running = false;
  var acc;
  return function () {
    var values = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }

    acc = values;
    if (running) return;
    running = true;
    requestAnimationFrame(function () {
      running = false;
      listener.apply(void 0, acc);
    });
  };
};

$NwTl$exports.nextFrame = $NwTl$export$nextFrame; //# sourceMappingURL=emitter.js.map

// ASSET: ../node_modules/@mood/dom/lib/component.js
var $LVnZ$exports = {};

var $LVnZ$var$__extends = $LVnZ$exports && $LVnZ$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($LVnZ$exports, "__esModule", {
  value: true
});

var $LVnZ$var$DOMComponentView =
/** @class */
function (_super) {
  $LVnZ$var$__extends(DOMComponentView, _super);
  /* istanbul ignore next */

  function DOMComponentView(store, dispatch, children, dynamics, _destroy) {
    var _this = _super.call(this, children, function (state) {
      store.property.set(state);

      for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
        var dy = dynamics_1[_i];
        dy.change(state);
      }
    }) || this;

    _this.store = store;
    _this.dispatch = dispatch;
    _this._destroy = _destroy;
    return _this;
  }

  DOMComponentView.prototype.destroy = function () {
    this._destroy();

    _super.prototype.destroy.call(this);
  };

  return DOMComponentView;
}($tFRt$export$DOMDynamicFragmentView);

var $LVnZ$export$DOMComponentView = $LVnZ$var$DOMComponentView;
$LVnZ$exports.DOMComponentView = $LVnZ$export$DOMComponentView;

var $LVnZ$var$DOMComponent =
/** @class */
function () {
  function DOMComponent(store, children, delayed) {
    this.store = store;
    this.children = children;
    this.delayed = delayed;
  }

  DOMComponent.prototype.render = function (ctx, state) {
    var update = function (state) {
      return view.change(state);
    };

    if (this.delayed) {
      update = $NwTl$export$nextFrame(update);
    }

    var store = this.store;
    store.property.observable.on(update);

    var innerDispatch = function (action) {
      store.process(action);
    };

    var newCtx = ctx.withDispatch(innerDispatch);
    var viewChildren = this.children.map(function (child) {
      return child.render(newCtx, store.property.get());
    });
    var dynamics = $maac$export$filterDynamics(viewChildren);
    var view = new $LVnZ$var$DOMComponentView(store, innerDispatch, viewChildren, dynamics, function () {
      store.property.observable.off(update);
    });
    store.property.set(state);
    return view;
  };

  return DOMComponent;
}();

var $LVnZ$export$DOMComponent = $LVnZ$var$DOMComponent;
$LVnZ$exports.DOMComponent = $LVnZ$export$DOMComponent;

var $LVnZ$export$component = function (attributes) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $LVnZ$var$DOMComponent(attributes.store, children.map($maac$export$domChildToTemplate), attributes.delayed || false);
};

$LVnZ$exports.component = $LVnZ$export$component; //# sourceMappingURL=component.js.map

// ASSET: ../node_modules/@mood/dom/lib/context.js
var $IiTS$exports = {};
Object.defineProperty($IiTS$exports, "__esModule", {
  value: true
});

var $IiTS$var$DOMContext =
/** @class */
function () {
  function DOMContext(doc, append, parent, dispatch) {
    this.doc = doc;
    this.append = append;
    this.parent = parent;
    this.dispatch = dispatch;
  }

  DOMContext.fromElement = function (element, dispatch) {
    return new DOMContext(
    /* istanbul ignore next */
    element.ownerDocument || window && window.document, function (node) {
      return element.appendChild(node);
    }, element, dispatch);
  };

  DOMContext.prototype.mapAction = function (f) {
    var _this = this;

    return new DOMContext(this.doc, this.append, this.parent, function (action) {
      return _this.dispatch(f(action));
    });
  };

  DOMContext.prototype.conditionalMapAction = function (f) {
    var _this = this;

    return new DOMContext(this.doc, this.append, this.parent, function (action) {
      var newAction = f(action);

      if (newAction !== undefined) {
        _this.dispatch(newAction);
      }
    });
  };

  DOMContext.prototype.withAppend = function (append) {
    return new DOMContext(this.doc, append, this.parent, this.dispatch);
  };

  DOMContext.prototype.withParent = function (parent) {
    return new DOMContext(this.doc, this.append, parent, this.dispatch);
  };

  DOMContext.prototype.withDispatch = function (dispatch) {
    return new DOMContext(this.doc, this.append, this.parent, dispatch);
  };

  return DOMContext;
}();

var $IiTS$export$DOMContext = $IiTS$var$DOMContext;
$IiTS$exports.DOMContext = $IiTS$export$DOMContext; //# sourceMappingURL=context.js.map

// ASSET: ../node_modules/@mood/dom/lib/mood.js
var $L3cT$export$Mood,
    $L3cT$exports = {};
Object.defineProperty($L3cT$exports, "__esModule", {
  value: true
});
var $L3cT$var$Mood;

(function (Mood) {
  function renderComponent(options) {
    var maybeElement = options.el,
        component = options.component;
    var store = component.store;
    /* istanbul ignore next */

    var doc = options.document || document;
    var el = maybeElement || doc.body;

    var append = function (node) {
      return el.appendChild(node);
    };

    var view = component.render(new $IiTS$export$DOMContext(doc, append, el, function () {} // (action) => store.process(action)
    ), store.property.get());
    return {
      destroy: function () {
        return view.destroy();
      },
      store: store
    };
  }

  Mood.renderComponent = renderComponent;

  function render(options) {
    var el = options.el,
        store = options.store,
        document = options.document,
        template = options.template;
    var comp = $LVnZ$export$component({
      store: store
    }, template);
    return Mood.renderComponent({
      el: el,
      component: comp,
      document: document
    });
  }

  Mood.render = render;
})($L3cT$var$Mood = $L3cT$export$Mood || ($L3cT$export$Mood = {}, $L3cT$exports.Mood = $L3cT$export$Mood)); //# sourceMappingURL=mood.js.map


// ASSET: ../node_modules/@mood/store/lib/emitter.js
var $Z1u3$exports = {};
Object.defineProperty($Z1u3$exports, "__esModule", {
  value: true
});

var $Z1u3$var$Emitter = function () {
  function Emitter() {
    this.listeners = [];
  }

  Emitter.ofOne = function () {
    return new Emitter();
  };

  Emitter.ofTwo = function () {
    return new Emitter();
  };

  Emitter.ofThree = function () {
    return new Emitter();
  };

  Emitter.prototype.emit = function () {
    var value = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      value[_i] = arguments[_i];
    }

    for (var _a = 0, _b = this.listeners; _a < _b.length; _a++) {
      var l = _b[_a];
      l.apply(void 0, value);
    }
  };

  Emitter.prototype.on = function (listener) {
    this.listeners.push(listener);
  };

  Emitter.prototype.off = function (listener) {
    var index = this.listeners.indexOf(listener);
    if (index < 0) return false;
    this.listeners.splice(index, 1);
    return true;
  };

  Emitter.prototype.once = function (listener) {
    var _this = this;

    var wrapper = function () {
      var values = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }

      _this.off(wrapper);

      listener.apply(void 0, values);
    };

    this.on(wrapper);
  };

  return Emitter;
}();

var $Z1u3$export$Emitter = $Z1u3$var$Emitter;
$Z1u3$exports.Emitter = $Z1u3$export$Emitter;

var $Z1u3$export$debounce = function (delay) {
  return function (listener) {
    var running = false;
    var acc;
    return function () {
      var values = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }

      acc = values;
      if (running) return;
      running = true;
      setTimeout(function () {
        running = false;
        listener.apply(void 0, acc);
      }, delay);
    };
  };
};

$Z1u3$exports.debounce = $Z1u3$export$debounce;

var $Z1u3$export$nextFrame = function (listener) {
  var running = false;
  var acc;
  return function () {
    var values = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      values[_i] = arguments[_i];
    }

    acc = values;
    if (running) return;
    running = true;
    requestAnimationFrame(function () {
      running = false;
      listener.apply(void 0, acc);
    });
  };
};

$Z1u3$exports.nextFrame = $Z1u3$export$nextFrame;
// ASSET: ../node_modules/@mood/store/lib/equality.js
var $ovAD$exports = {};
Object.defineProperty($ovAD$exports, "__esModule", {
  value: true
});

var $ovAD$export$strictEqual = function (a, b) {
  return a === b || a !== a && b !== b;
};

$ovAD$exports.strictEqual = $ovAD$export$strictEqual;

var $ovAD$export$deepEqual = function (a, b) {
  if ($ovAD$export$strictEqual(a, b)) return true;
  if (a == null || b == null) return false;
  var aIsArr = Array.isArray(a);
  var bIsArr = Array.isArray(b);
  if (aIsArr !== bIsArr) return false;

  if (aIsArr) {
    var aArr = a;
    var bArr = b;
    var aLength = aArr.length;
    if (aLength !== bArr.length) return false;

    for (var i = 0; i < aLength; i++) {
      if (!$ovAD$export$deepEqual(aArr[i], bArr[i])) return false;
    }

    return true;
  }

  var aIsDate = a instanceof Date;
  var bIsDate = b instanceof Date;
  if (aIsDate !== bIsDate) return false;

  if (aIsDate) {
    var aDate = a;
    var bDate = b;
    return +aDate === +bDate;
  }

  var aIsSet = a instanceof Set;
  var bIsSet = b instanceof Set;
  if (aIsSet !== bIsSet) return false;

  if (aIsSet) {
    var aSet = a;
    var bSet = b;
    if (aSet.size !== bSet.size) return false;
    var it_1 = aSet.keys();

    while (true) {
      var curr = it_1.next();
      if (curr.done) break;
      if (!bSet.has(curr.value)) return false;
    }

    return true;
  }

  var aIsMap = a instanceof Map;
  var bIsMap = b instanceof Map;
  if (aIsMap !== bIsMap) return false;

  if (aIsMap) {
    var aMap = a;
    var bMap = b;
    var aMapLength = aMap.size;
    if (aMapLength !== bMap.size) return false;
    var it_2 = aMap.keys();

    while (true) {
      var curr = it_2.next();
      if (curr.done) break;
      if (!$ovAD$export$deepEqual(aMap.get(curr.value), bMap.get(curr.value))) return false;
    }

    return true;
  }

  var aIsObj = typeof a === 'object';
  var bIsObj = typeof b === 'object';
  if (aIsObj !== bIsObj) return false;

  if (aIsObj) {
    var aObj = a;
    var bObj = b;
    var aFields = Object.keys(aObj);
    var bFields = Object.keys(bObj);
    var aLength = aFields.length;
    if (aLength !== bFields.length) return false;

    for (var i = 0; i < aLength; i++) {
      var field = aFields[i];
      if (!bObj.hasOwnProperty(field)) return false;
      if (!$ovAD$export$deepEqual(aObj[field], bObj[field])) return false;
    }

    return true;
  }

  return false;
};

$ovAD$exports.deepEqual = $ovAD$export$deepEqual; //# sourceMappingURL=equality.js.map

// ASSET: ../node_modules/@mood/store/lib/property.js
var $KXQ8$exports = {};
Object.defineProperty($KXQ8$exports, "__esModule", {
  value: true
});

// @ts-ignore
var $KXQ8$var$Property =
/** @class */
function () {
  function Property(value, equal) {
    if (equal === void 0) {
      equal = $ovAD$export$deepEqual;
    }

    this.value = value;
    this.equal = equal;
    this.observable = this.emitter = $Z1u3$export$Emitter.ofOne();
  }

  Property.prototype.set = function (value) {
    if (this.equal(this.value, value)) {
      return false;
    }

    this.value = value;
    this.emit(this.value);
    return true;
  };

  Property.prototype.get = function () {
    return this.value;
  };

  Property.prototype.emit = function (value) {
    this.emitter.emit(value);
  };

  return Property;
}();

var $KXQ8$export$Property = $KXQ8$var$Property;
$KXQ8$exports.Property = $KXQ8$export$Property; //# sourceMappingURL=property.js.map

// ASSET: ../node_modules/@mood/store/lib/store.js
var $ythw$exports = {};
Object.defineProperty($ythw$exports, "__esModule", {
  value: true
});

var $ythw$var$Store =
/** @class */
function () {
  function Store(property, reducer) {
    this.property = property;
    this.reducer = reducer;
    this.observable = this.emitter = $Z1u3$export$Emitter.ofThree();
  }

  Store.ofState = function (options) {
    return new Store(new $KXQ8$export$Property(options.state, options.equal), options.reducer);
  };

  Store.prototype.process = function (action) {
    var value = this.reducer(this.property.get(), action);
    var result = this.property.set(value);
    this.emitter.emit(value, action, result);
    return result;
  };

  return Store;
}();

var $ythw$export$Store = $ythw$var$Store;
$ythw$exports.Store = $ythw$export$Store; //# sourceMappingURL=store.js.map

// ASSET: utils.ts
var $UnXq$exports = {};
Object.defineProperty($UnXq$exports, "__esModule", {
  value: true
});

var $UnXq$var$Utils =
/** @class */
function () {
  function Utils() {}

  Utils.uuid = function () {
    var uuid = '';

    for (var i = 0; i < 32; i++) {
      // tslint:disable-next-line:no-bitwise
      var random = Math.random() * 16 | 0;

      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      } // tslint:disable-next-line:no-bitwise


      uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }

    return uuid;
  };

  Utils.pluralize = function (count, word) {
    return count === 1 ? word : word + 's';
  };

  return Utils;
}();

var $UnXq$export$Utils = $UnXq$var$Utils;
$UnXq$exports.Utils = $UnXq$export$Utils;
// ASSET: state.ts
var $mIWh$export$Filter,
    $mIWh$exports = {};
Object.defineProperty($mIWh$exports, "__esModule", {
  value: true
});
var $mIWh$var$Filter;

(function (Filter) {
  Filter[Filter["All"] = 0] = "All";
  Filter[Filter["Active"] = 1] = "Active";
  Filter[Filter["Completed"] = 2] = "Completed";
})($mIWh$var$Filter = $mIWh$export$Filter || ($mIWh$export$Filter = {}, $mIWh$exports.Filter = $mIWh$export$Filter));

var $mIWh$export$createTodo = function (title) {
  return {
    id: $UnXq$export$Utils.uuid(),
    title: title,
    completed: false
  };
};

$mIWh$exports.createTodo = $mIWh$export$createTodo;
// ASSET: data_store.ts
var $u2Gx$exports = {};
Object.defineProperty($u2Gx$exports, "__esModule", {
  value: true
});
var $u2Gx$var$STORE_KEY = 'todomvc-mood';

var $u2Gx$var$DataStore =
/** @class */
function () {
  function DataStore() {}

  DataStore.get = function () {
    var store = localStorage.getItem($u2Gx$var$STORE_KEY);
    return store && JSON.parse(store) || {
      filter: $mIWh$export$Filter.All,
      todos: []
    };
  };

  DataStore.set = function (data) {
    return localStorage.setItem($u2Gx$var$STORE_KEY, JSON.stringify(data));
  };

  return DataStore;
}();

var $u2Gx$export$DataStore = $u2Gx$var$DataStore;
$u2Gx$exports.DataStore = $u2Gx$export$DataStore;
// ASSET: reducer.ts
var $pSX2$exports = {};

var $pSX2$var$__assign = $pSX2$exports && $pSX2$exports.__assign || function () {
  $pSX2$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return $pSX2$var$__assign.apply(this, arguments);
};

var $pSX2$var$__spreadArrays = $pSX2$exports && $pSX2$exports.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};

Object.defineProperty($pSX2$exports, "__esModule", {
  value: true
});

var $pSX2$export$reducer = function (state, action) {
  var newState = Object.assign({}, state);

  switch (action.kind) {
    case 'adding-todo':
      if (action.title) {
        newState.adding = action.title;
      } else {
        delete newState.adding;
      }

      break;

    case 'create-todo':
      if (action.title) newState.todos = state.todos.concat([$mIWh$export$createTodo(action.title)]);
      delete newState.adding;
      break;

    case 'editing-todo':
      newState.editing = {
        id: action.id,
        title: action.title
      };
      break;

    case 'cancel-adding-todo':
      delete newState.adding;
      break;

    case 'cancel-editing-todo':
      delete newState.editing;
      break;

    case 'clear-completed':
      newState.todos = state.todos.filter(function (v) {
        return !v.completed;
      });
      break;

    case 'remove-todo':
      newState.todos = state.todos.filter(function (v) {
        return v.id !== action.id;
      });
      break;

    case 'toggle-completed':
      var index = state.todos.findIndex(function (v) {
        return v.id === action.id;
      });
      var current = state.todos[index];
      var todo = $pSX2$var$__assign($pSX2$var$__assign({}, current), {
        completed: !current.completed
      });
      newState.todos = $pSX2$var$__spreadArrays(state.todos.slice(0, index), [todo], state.todos.slice(index + 1));
      break;

    case 'toggle-filter':
      newState.filter = action.filter;
      break;

    case 'update-todo':
      delete newState.editing;
      var index2 = state.todos.findIndex(function (o) {
        return o.id === action.id;
      });

      if (index2 >= 0) {
        var updated = {
          id: action.id,
          title: action.title,
          completed: state.todos[index2].completed
        };
        newState.todos = $pSX2$var$__spreadArrays(state.todos.slice(0, index2), [updated], state.todos.slice(index2 + 1));
      }

      break;

    default:
      throw 'unreacheable code';
  }

  return newState;
};

$pSX2$exports.reducer = $pSX2$export$reducer;
// ASSET: ../node_modules/@mood/dom/node_modules/@mood/core/lib/value.js
var $uvLw$exports = {};

var $uvLw$var$__extends = $uvLw$exports && $uvLw$exports.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty($uvLw$exports, "__esModule", {
  value: true
});

var $uvLw$var$WrappedValueBase =
/** @class */
function () {
  function WrappedValueBase() {}

  return WrappedValueBase;
}();

var $uvLw$var$WrappedLiteralValue =
/** @class */
function (_super) {
  $uvLw$var$__extends(WrappedLiteralValue, _super);

  function WrappedLiteralValue(value) {
    var _this = _super.call(this) || this;

    _this.value = value;
    _this.kind = 'literal';
    return _this;
  }

  WrappedLiteralValue.prototype.resolve = function (_) {
    return this.value;
  };

  return WrappedLiteralValue;
}($uvLw$var$WrappedValueBase);

var $uvLw$export$WrappedLiteralValue = $uvLw$var$WrappedLiteralValue;
$uvLw$exports.WrappedLiteralValue = $uvLw$export$WrappedLiteralValue;

var $uvLw$var$WrappedDerivedValue =
/** @class */
function (_super) {
  $uvLw$var$__extends(WrappedDerivedValue, _super);

  function WrappedDerivedValue(map) {
    var _this = _super.call(this) || this;

    _this.map = map;
    _this.kind = 'derived';
    return _this;
  }

  WrappedDerivedValue.prototype.resolve = function (state) {
    return this.map(state);
  };

  return WrappedDerivedValue;
}($uvLw$var$WrappedValueBase);

var $uvLw$export$WrappedDerivedValue = $uvLw$var$WrappedDerivedValue;
$uvLw$exports.WrappedDerivedValue = $uvLw$export$WrappedDerivedValue;

var $uvLw$export$derived = function (map) {
  return new $uvLw$var$WrappedDerivedValue(map);
};

$uvLw$exports.derived = $uvLw$export$derived;

var $uvLw$export$literal = function (value) {
  return new $uvLw$var$WrappedLiteralValue(value);
};

$uvLw$exports.literal = $uvLw$export$literal;

var $uvLw$export$wrapLiteral = function (value) {
  if (value && value.kind === 'derived') {
    return value;
  } else {
    return $uvLw$export$literal(value);
  }
};

$uvLw$exports.wrapLiteral = $uvLw$export$wrapLiteral; //# sourceMappingURL=value.js.map

// ASSET: ../node_modules/@mood/dom/lib/element.js
var $YOjV$exports = {};

var $YOjV$var$__assign = $YOjV$exports && $YOjV$exports.__assign || function () {
  $YOjV$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return $YOjV$var$__assign.apply(this, arguments);
};

Object.defineProperty($YOjV$exports, "__esModule", {
  value: true
});

var $YOjV$export$applyMood = function (el, attr) {
  return function (state) {
    var f = attr.resolve(state);
    /* istanbul ignore next */

    if (f != null) {
      f(el);
    }
  };
};

$YOjV$exports.applyMood = $YOjV$export$applyMood;

var $YOjV$export$maybeApplyMood = function (el, attr) {
  return function (state) {
    if (attr != null) {
      $YOjV$export$applyMood(el, attr)(state);
    }
  };
};

$YOjV$exports.maybeApplyMood = $YOjV$export$maybeApplyMood;

var $YOjV$export$prepareAttributes = function (attrs) {
  var attributes = $YOjV$var$__assign({}, attrs);
  var afterRender = attributes.moodAfterRender && $uvLw$export$wrapLiteral(attributes.moodAfterRender);
  var beforeChange = attributes.moodBeforeChange && $uvLw$export$wrapLiteral(attributes.moodBeforeChange);
  var afterChange = attributes.moodAfterChange && $uvLw$export$wrapLiteral(attributes.moodAfterChange);
  var beforeDestroyf = attributes.moodBeforeDestroy;

  var beforeDestroy = beforeDestroyf && function () {
    return beforeDestroyf($YOjV$export$el);
  };

  delete attributes.moodAfterRender;
  delete attributes.moodBeforeChange;
  delete attributes.moodAfterChange;
  delete attributes.moodBeforeDestroy;
  return {
    attributes: attributes,
    afterRender: afterRender,
    beforeChange: beforeChange,
    afterChange: afterChange,
    beforeDestroy: beforeDestroy
  };
};

$YOjV$exports.prepareAttributes = $YOjV$export$prepareAttributes;

var $YOjV$var$DOMElement =
/** @class */
function () {
  function DOMElement(name, attributes, children) {
    this.name = name;
    this.attributes = attributes;
    this.children = children;
  }

  DOMElement.prototype.render = function (ctx, state) {
    var el = ctx.doc.createElement(this.name);

    var _a = $YOjV$export$prepareAttributes(this.attributes),
        attributes = _a.attributes,
        afterRender = _a.afterRender,
        beforeChange = _a.beforeChange,
        afterChange = _a.afterChange,
        beforeDestroy = _a.beforeDestroy;

    var keys = Object.keys(attributes);

    var _b = keys.reduce(function (acc, key) {
      return $maac$export$processAttribute(el, key, attributes[key], ctx.dispatch, acc);
    }, {
      statics: [],
      dynamics: []
    }),
        statics = _b.statics,
        dynamics = _b.dynamics;

    ctx.append(el); // apply attributes

    for (var _i = 0, statics_1 = statics; _i < statics_1.length; _i++) {
      var st = statics_1[_i];
      st();
    }

    for (var _c = 0, dynamics_1 = dynamics; _c < dynamics_1.length; _c++) {
      var dy = dynamics_1[_c];
      dy(state);
    } // children


    var appendChild = function (n) {
      return el.appendChild(n);
    };

    var views = this.children.map(function (child) {
      return child.render(ctx.withAppend(appendChild).withParent(el), state);
    });
    $YOjV$export$maybeApplyMood(el, afterRender)(state);
    var dynamicChildren = $maac$export$filterDynamics(views).map(function (child) {
      return function (state) {
        return child.change(state);
      };
    });
    var allDynamics = dynamics.concat(dynamicChildren);

    if (beforeChange) {
      allDynamics.unshift($YOjV$export$applyMood(el, beforeChange));
    }

    if (afterChange) {
      allDynamics.push($YOjV$export$applyMood(el, afterChange));
    }

    if (allDynamics.length > 0) {
      return new $l2IW$export$DOMDynamicNodeView(el, views, function (state) {
        for (var _i = 0, allDynamics_1 = allDynamics; _i < allDynamics_1.length; _i++) {
          var f = allDynamics_1[_i];
          f(state);
        }
      }, beforeDestroy);
    } else {
      return new $l2IW$export$DOMStaticNodeView(el, views, beforeDestroy);
    }
  };

  return DOMElement;
}();

var $YOjV$export$DOMElement = $YOjV$var$DOMElement;
$YOjV$exports.DOMElement = $YOjV$export$DOMElement;

var $YOjV$export$el = function (name, attributes) {
  var children = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }

  return new $YOjV$var$DOMElement(name, attributes, children.map($maac$export$domChildToTemplate));
};

$YOjV$exports.el = $YOjV$export$el;

var $YOjV$export$el2 = function (name) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    return new $YOjV$var$DOMElement(name, attributes, children.map($maac$export$domChildToTemplate));
  };
};

$YOjV$exports.el2 = $YOjV$export$el2; //# sourceMappingURL=element.js.map

// ASSET: ../node_modules/@mood/dom/lib/element_ns.js
var $XJ80$exports = {};
Object.defineProperty($XJ80$exports, "__esModule", {
  value: true
});

var $XJ80$var$DOMElementNS =
/** @class */
function () {
  function DOMElementNS(ns, name, attributes, children) {
    this.ns = ns;
    this.name = name;
    this.attributes = attributes;
    this.children = children;
  }

  DOMElementNS.prototype.render = function (ctx, state) {
    var el = ctx.doc.createElementNS(this.ns, this.name);

    var _a = $YOjV$export$prepareAttributes(this.attributes),
        attributes = _a.attributes,
        afterRender = _a.afterRender,
        beforeChange = _a.beforeChange,
        afterChange = _a.afterChange,
        beforeDestroy = _a.beforeDestroy;

    var keys = Object.keys(attributes);

    var _b = keys.reduce(function (acc, key) {
      return $maac$export$processAttribute(el, key, attributes[key], ctx.dispatch, acc);
    }, {
      statics: [],
      dynamics: []
    }),
        statics = _b.statics,
        dynamics = _b.dynamics;

    ctx.append(el); // apply attributes

    for (var _i = 0, statics_1 = statics; _i < statics_1.length; _i++) {
      var st = statics_1[_i];
      st();
    }

    for (var _c = 0, dynamics_1 = dynamics; _c < dynamics_1.length; _c++) {
      var dy = dynamics_1[_c];
      dy(state);
    } // children


    var appendChild = function (n) {
      return el.appendChild(n);
    };

    var views = this.children.map(function (child) {
      return child.render(ctx.withAppend(appendChild).withParent(el), state);
    });
    $YOjV$export$maybeApplyMood(el, afterRender)(state);
    var dynamicChildren = $maac$export$filterDynamics(views).map(function (child) {
      return function (state) {
        return child.change(state);
      };
    });
    var allDynamics = dynamics.concat(dynamicChildren);

    if (beforeChange) {
      allDynamics.unshift($YOjV$export$applyMood(el, beforeChange));
    }

    if (afterChange) {
      allDynamics.push($YOjV$export$applyMood(el, afterChange));
    }

    if (allDynamics.length > 0) {
      return new $l2IW$export$DOMDynamicNodeView(el, views, function (state) {
        for (var _i = 0, allDynamics_1 = allDynamics; _i < allDynamics_1.length; _i++) {
          var f = allDynamics_1[_i];
          f(state);
        }
      }, beforeDestroy);
    } else {
      return new $l2IW$export$DOMStaticNodeView(el, views, beforeDestroy);
    }
  };

  return DOMElementNS;
}();

var $XJ80$export$DOMElementNS = $XJ80$var$DOMElementNS;
$XJ80$exports.DOMElementNS = $XJ80$export$DOMElementNS;
var $XJ80$export$defaultNamespaces = {
  'svg': 'http://www.w3.org/2000/svg'
};
$XJ80$exports.defaultNamespaces = $XJ80$export$defaultNamespaces;

var $XJ80$export$elNS = function (ns, name, attributes) {
  var children = [];

  for (var _i = 3; _i < arguments.length; _i++) {
    children[_i - 3] = arguments[_i];
  }

  var namespace = $XJ80$export$defaultNamespaces[ns] || ns;
  return new $XJ80$var$DOMElementNS(namespace, name, attributes, children.map($maac$export$domChildToTemplate));
};

$XJ80$exports.elNS = $XJ80$export$elNS;

var $XJ80$export$elNS2 = function (ns, ame) {
  return function (attributes) {
    var children = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      children[_i - 1] = arguments[_i];
    }

    var namespace = $XJ80$export$defaultNamespaces[ns] || ns;
    return new $XJ80$var$DOMElementNS(namespace, name, attributes, children.map($maac$export$domChildToTemplate));
  };
};

$XJ80$exports.elNS2 = $XJ80$export$elNS2; //# sourceMappingURL=element_ns.js.map

// ASSET: ../node_modules/@mood/dom/lib/web.js
var $dkSp$export$html,
    $dkSp$export$svg,
    $dkSp$exports = {}; // THIS FILE IS AUTOMATICALLY GENERATED, PLEASE DO NOT CHANGE DIRECTLY

Object.defineProperty($dkSp$exports, "__esModule", {
  value: true
});
var $dkSp$var$html;

(function (html_1) {
  html_1.a = $YOjV$export$el2('a');
  html_1.abbr = $YOjV$export$el2('abbr');
  html_1.address = $YOjV$export$el2('address');
  html_1.applet = $YOjV$export$el2('applet');
  html_1.area = $YOjV$export$el2('area');
  html_1.article = $YOjV$export$el2('article');
  html_1.aside = $YOjV$export$el2('aside');
  html_1.audio = $YOjV$export$el2('audio');
  html_1.b = $YOjV$export$el2('b');
  html_1.base = $YOjV$export$el2('base');
  html_1.basefont = $YOjV$export$el2('basefont');
  html_1.bdi = $YOjV$export$el2('bdi');
  html_1.bdo = $YOjV$export$el2('bdo');
  html_1.blockquote = $YOjV$export$el2('blockquote');
  html_1.body = $YOjV$export$el2('body');
  html_1.br = $YOjV$export$el2('br');
  html_1.button = $YOjV$export$el2('button');
  html_1.canvas = $YOjV$export$el2('canvas');
  html_1.caption = $YOjV$export$el2('caption');
  html_1.cite = $YOjV$export$el2('cite');
  html_1.code = $YOjV$export$el2('code');
  html_1.col = $YOjV$export$el2('col');
  html_1.colgroup = $YOjV$export$el2('colgroup');
  html_1.data = $YOjV$export$el2('data');
  html_1.datalist = $YOjV$export$el2('datalist');
  html_1.dd = $YOjV$export$el2('dd');
  html_1.del = $YOjV$export$el2('del');
  html_1.details = $YOjV$export$el2('details');
  html_1.dfn = $YOjV$export$el2('dfn');
  html_1.dialog = $YOjV$export$el2('dialog');
  html_1.dir = $YOjV$export$el2('dir');
  html_1.div = $YOjV$export$el2('div');
  html_1.dl = $YOjV$export$el2('dl');
  html_1.dt = $YOjV$export$el2('dt');
  html_1.em = $YOjV$export$el2('em');
  html_1.embed = $YOjV$export$el2('embed');
  html_1.fieldset = $YOjV$export$el2('fieldset');
  html_1.figcaption = $YOjV$export$el2('figcaption');
  html_1.figure = $YOjV$export$el2('figure');
  html_1.font = $YOjV$export$el2('font');
  html_1.footer = $YOjV$export$el2('footer');
  html_1.form = $YOjV$export$el2('form');
  html_1.frame = $YOjV$export$el2('frame');
  html_1.frameset = $YOjV$export$el2('frameset');
  html_1.h1 = $YOjV$export$el2('h1');
  html_1.h2 = $YOjV$export$el2('h2');
  html_1.h3 = $YOjV$export$el2('h3');
  html_1.h4 = $YOjV$export$el2('h4');
  html_1.h5 = $YOjV$export$el2('h5');
  html_1.h6 = $YOjV$export$el2('h6');
  html_1.head = $YOjV$export$el2('head');
  html_1.header = $YOjV$export$el2('header');
  html_1.hgroup = $YOjV$export$el2('hgroup');
  html_1.hr = $YOjV$export$el2('hr');
  html_1.html = $YOjV$export$el2('html');
  html_1.i = $YOjV$export$el2('i');
  html_1.iframe = $YOjV$export$el2('iframe');
  html_1.img = $YOjV$export$el2('img');
  html_1.input = $YOjV$export$el2('input');
  html_1.ins = $YOjV$export$el2('ins');
  html_1.kbd = $YOjV$export$el2('kbd');
  html_1.label = $YOjV$export$el2('label');
  html_1.legend = $YOjV$export$el2('legend');
  html_1.li = $YOjV$export$el2('li');
  html_1.link = $YOjV$export$el2('link');
  html_1.listing = $YOjV$export$el2('listing');
  html_1.main = $YOjV$export$el2('main');
  html_1.map = $YOjV$export$el2('map');
  html_1.mark = $YOjV$export$el2('mark');
  html_1.marquee = $YOjV$export$el2('marquee');
  html_1.menu = $YOjV$export$el2('menu');
  html_1.meta = $YOjV$export$el2('meta');
  html_1.meter = $YOjV$export$el2('meter');
  html_1.nav = $YOjV$export$el2('nav');
  html_1.noscript = $YOjV$export$el2('noscript');
  html_1.object = $YOjV$export$el2('object');
  html_1.ol = $YOjV$export$el2('ol');
  html_1.optgroup = $YOjV$export$el2('optgroup');
  html_1.option = $YOjV$export$el2('option');
  html_1.output = $YOjV$export$el2('output');
  html_1.p = $YOjV$export$el2('p');
  html_1.param = $YOjV$export$el2('param');
  html_1.picture = $YOjV$export$el2('picture');
  html_1.pre = $YOjV$export$el2('pre');
  html_1.progress = $YOjV$export$el2('progress');
  html_1.q = $YOjV$export$el2('q');
  html_1.rp = $YOjV$export$el2('rp');
  html_1.rt = $YOjV$export$el2('rt');
  html_1.ruby = $YOjV$export$el2('ruby');
  html_1.s = $YOjV$export$el2('s');
  html_1.samp = $YOjV$export$el2('samp');
  html_1.script = $YOjV$export$el2('script');
  html_1.section = $YOjV$export$el2('section');
  html_1.select = $YOjV$export$el2('select');
  html_1.slot = $YOjV$export$el2('slot');
  html_1.small = $YOjV$export$el2('small');
  html_1.source = $YOjV$export$el2('source');
  html_1.span = $YOjV$export$el2('span');
  html_1.strong = $YOjV$export$el2('strong');
  html_1.style = $YOjV$export$el2('style');
  html_1.sub = $YOjV$export$el2('sub');
  html_1.summary = $YOjV$export$el2('summary');
  html_1.sup = $YOjV$export$el2('sup');
  html_1.table = $YOjV$export$el2('table');
  html_1.tbody = $YOjV$export$el2('tbody');
  html_1.td = $YOjV$export$el2('td');
  html_1.template = $YOjV$export$el2('template');
  html_1.textarea = $YOjV$export$el2('textarea');
  html_1.tfoot = $YOjV$export$el2('tfoot');
  html_1.th = $YOjV$export$el2('th');
  html_1.thead = $YOjV$export$el2('thead');
  html_1.time = $YOjV$export$el2('time');
  html_1.title = $YOjV$export$el2('title');
  html_1.tr = $YOjV$export$el2('tr');
  html_1.track = $YOjV$export$el2('track');
  html_1.u = $YOjV$export$el2('u');
  html_1.ul = $YOjV$export$el2('ul');
  html_1.varEl = $YOjV$export$el2('var');
  html_1.video = $YOjV$export$el2('video');
  html_1.wbr = $YOjV$export$el2('wbr');
  html_1.xmp = $YOjV$export$el2('xmp');
})($dkSp$var$html = $dkSp$export$html || ($dkSp$export$html = {}, $dkSp$exports.html = $dkSp$export$html));

var $dkSp$var$svg;

(function (svg_1) {
  svg_1.a = $XJ80$export$elNS2('svg', 'a');
  svg_1.circle = $XJ80$export$elNS2('svg', 'circle');
  svg_1.clipPath = $XJ80$export$elNS2('svg', 'clipPath');
  svg_1.defs = $XJ80$export$elNS2('svg', 'defs');
  svg_1.desc = $XJ80$export$elNS2('svg', 'desc');
  svg_1.ellipse = $XJ80$export$elNS2('svg', 'ellipse');
  svg_1.feBlend = $XJ80$export$elNS2('svg', 'feBlend');
  svg_1.feColorMatrix = $XJ80$export$elNS2('svg', 'feColorMatrix');
  svg_1.feComponentTransfer = $XJ80$export$elNS2('svg', 'feComponentTransfer');
  svg_1.feComposite = $XJ80$export$elNS2('svg', 'feComposite');
  svg_1.feConvolveMatrix = $XJ80$export$elNS2('svg', 'feConvolveMatrix');
  svg_1.feDiffuseLighting = $XJ80$export$elNS2('svg', 'feDiffuseLighting');
  svg_1.feDisplacementMap = $XJ80$export$elNS2('svg', 'feDisplacementMap');
  svg_1.feDistantLight = $XJ80$export$elNS2('svg', 'feDistantLight');
  svg_1.feFlood = $XJ80$export$elNS2('svg', 'feFlood');
  svg_1.feFuncA = $XJ80$export$elNS2('svg', 'feFuncA');
  svg_1.feFuncB = $XJ80$export$elNS2('svg', 'feFuncB');
  svg_1.feFuncG = $XJ80$export$elNS2('svg', 'feFuncG');
  svg_1.feFuncR = $XJ80$export$elNS2('svg', 'feFuncR');
  svg_1.feGaussianBlur = $XJ80$export$elNS2('svg', 'feGaussianBlur');
  svg_1.feImage = $XJ80$export$elNS2('svg', 'feImage');
  svg_1.feMerge = $XJ80$export$elNS2('svg', 'feMerge');
  svg_1.feMergeNode = $XJ80$export$elNS2('svg', 'feMergeNode');
  svg_1.feMorphology = $XJ80$export$elNS2('svg', 'feMorphology');
  svg_1.feOffset = $XJ80$export$elNS2('svg', 'feOffset');
  svg_1.fePointLight = $XJ80$export$elNS2('svg', 'fePointLight');
  svg_1.feSpecularLighting = $XJ80$export$elNS2('svg', 'feSpecularLighting');
  svg_1.feSpotLight = $XJ80$export$elNS2('svg', 'feSpotLight');
  svg_1.feTile = $XJ80$export$elNS2('svg', 'feTile');
  svg_1.feTurbulence = $XJ80$export$elNS2('svg', 'feTurbulence');
  svg_1.filter = $XJ80$export$elNS2('svg', 'filter');
  svg_1.foreignObject = $XJ80$export$elNS2('svg', 'foreignObject');
  svg_1.g = $XJ80$export$elNS2('svg', 'g');
  svg_1.image = $XJ80$export$elNS2('svg', 'image');
  svg_1.line = $XJ80$export$elNS2('svg', 'line');
  svg_1.linearGradient = $XJ80$export$elNS2('svg', 'linearGradient');
  svg_1.marker = $XJ80$export$elNS2('svg', 'marker');
  svg_1.mask = $XJ80$export$elNS2('svg', 'mask');
  svg_1.metadata = $XJ80$export$elNS2('svg', 'metadata');
  svg_1.path = $XJ80$export$elNS2('svg', 'path');
  svg_1.pattern = $XJ80$export$elNS2('svg', 'pattern');
  svg_1.polygon = $XJ80$export$elNS2('svg', 'polygon');
  svg_1.polyline = $XJ80$export$elNS2('svg', 'polyline');
  svg_1.radialGradient = $XJ80$export$elNS2('svg', 'radialGradient');
  svg_1.rect = $XJ80$export$elNS2('svg', 'rect');
  svg_1.script = $XJ80$export$elNS2('svg', 'script');
  svg_1.stop = $XJ80$export$elNS2('svg', 'stop');
  svg_1.style = $XJ80$export$elNS2('svg', 'style');
  svg_1.svg = $XJ80$export$elNS2('svg', 'svg');
  svg_1.switchEl = $XJ80$export$elNS2('svg', 'switch');
  svg_1.symbol = $XJ80$export$elNS2('svg', 'symbol');
  svg_1.text = $XJ80$export$elNS2('svg', 'text');
  svg_1.textPath = $XJ80$export$elNS2('svg', 'textPath');
  svg_1.title = $XJ80$export$elNS2('svg', 'title');
  svg_1.tspan = $XJ80$export$elNS2('svg', 'tspan');
  svg_1.use = $XJ80$export$elNS2('svg', 'use');
  svg_1.view = $XJ80$export$elNS2('svg', 'view');
})($dkSp$var$svg = $dkSp$export$svg || ($dkSp$export$svg = {}, $dkSp$exports.svg = $dkSp$export$svg)); //# sourceMappingURL=web.js.map


// ASSET: ../node_modules/@mood/dom/lib/map.js
var $kfAy$exports = {};
Object.defineProperty($kfAy$exports, "__esModule", {
  value: true
});

var $kfAy$var$MapStateTemplate =
/** @class */
function () {
  function MapStateTemplate(map, children) {
    this.map = map;
    this.children = children;
  }

  MapStateTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map;

    var innerState = map(state);
    var views = children.map(function (c) {
      return c.render(ctx, innerState);
    });
    var dynamics = $maac$export$filterDynamics(views);

    if (dynamics.length === 0) {
      return new $tFRt$export$DOMStaticFragmentView(views);
    } else {
      return new $tFRt$export$DOMDynamicFragmentView(views, function (state) {
        var innerState = map(state);

        for (var _i = 0, dynamics_1 = dynamics; _i < dynamics_1.length; _i++) {
          var d = dynamics_1[_i];
          d.change(innerState);
        }
      });
    }
  };

  return MapStateTemplate;
}();

var $kfAy$export$MapStateTemplate = $kfAy$var$MapStateTemplate;
$kfAy$exports.MapStateTemplate = $kfAy$export$MapStateTemplate;

var $kfAy$export$mapState = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $kfAy$var$MapStateTemplate(options.map, children.map($maac$export$domChildToTemplate));
};

$kfAy$exports.mapState = $kfAy$export$mapState;

var $kfAy$var$MapActionTemplate =
/** @class */
function () {
  function MapActionTemplate(map, children) {
    this.map = map;
    this.children = children;
  }

  MapActionTemplate.prototype.render = function (ctx, state) {
    var _a = this,
        children = _a.children,
        map = _a.map;

    var views = children.map(function (c) {
      return c.render(ctx.conditionalMapAction(map), state);
    });
    return $tFRt$export$fragmentView(views);
  };

  return MapActionTemplate;
}();

var $kfAy$export$MapActionTemplate = $kfAy$var$MapActionTemplate;
$kfAy$exports.MapActionTemplate = $kfAy$export$MapActionTemplate;

var $kfAy$export$mapAction = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $kfAy$var$MapActionTemplate(options.map, children.map($maac$export$domChildToTemplate));
};

$kfAy$exports.mapAction = $kfAy$export$mapAction; //# sourceMappingURL=map.js.map

// ASSET: ../node_modules/@mood/dom/lib/value.js
var $EwUz$exports = {};
Object.defineProperty($EwUz$exports, "__esModule", {
  value: true
});

var $EwUz$export$lifecycle = function (f) {
  return $uvLw$export$derived(f);
};

$EwUz$exports.lifecycle = $EwUz$export$lifecycle;

var $EwUz$export$handler = function (f) {
  return $uvLw$export$derived(f);
};

$EwUz$exports.handler = $EwUz$export$handler;

var $EwUz$export$stateHandler = function (f) {
  return $uvLw$export$derived(function (s) {
    return function (_) {
      return f(s);
    };
  });
};

$EwUz$exports.stateHandler = $EwUz$export$stateHandler; //# sourceMappingURL=value.js.map

// ASSET: ../node_modules/@mood/dom/lib/until.js
var $K46h$exports = {};
Object.defineProperty($K46h$exports, "__esModule", {
  value: true
});

var $K46h$var$DOMUntilView =
/** @class */
function () {
  function DOMUntilView(ref, repeatUntil, ctx, children) {
    this.ref = ref;
    this.repeatUntil = repeatUntil;
    this.ctx = ctx;
    this.children = children;
    this.kind = 'dynamic';
    this.childrenView = [];
  }

  DOMUntilView.prototype.destroy = function () {
    $maac$export$removeNode(this.ref);

    for (var _i = 0, _a = this.childrenView; _i < _a.length; _i++) {
      var c = _a[_i];

      for (var _b = 0, c_1 = c; _b < c_1.length; _b++) {
        var e = c_1[_b];
        e.destroy();
      }
    }

    this.childrenView = [];
  };

  DOMUntilView.prototype.change = function (state) {
    var _this = this;

    var currentViewLength = this.childrenView.length;
    var count = 0;
    var value;

    while ((value = this.repeatUntil(state, count)) !== undefined) {
      if (count < currentViewLength) {
        // replace existing
        for (var _i = 0, _a = $maac$export$filterDynamics(this.childrenView[count]); _i < _a.length; _i++) {
          var v = _a[_i];
          v.change(value);
        }
      } else {
        // add node
        this.childrenView.push(this.children.map(function (el) {
          return el.render(_this.ctx, value);
        }));
      }

      count++;
    }

    var i = count;

    while (i < currentViewLength) {
      // remove extra nodes
      for (var _b = 0, _c = this.childrenView[i]; _b < _c.length; _b++) {
        var c = _c[_b];
        c.destroy();
      }

      i++;
    }

    this.childrenView = this.childrenView.slice(0, count);
  };

  return DOMUntilView;
}();

var $K46h$export$DOMUntilView = $K46h$var$DOMUntilView;
$K46h$exports.DOMUntilView = $K46h$export$DOMUntilView;

var $K46h$var$DOMUntilTemplate =
/** @class */
function () {
  function DOMUntilTemplate(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMUntilTemplate.prototype.render = function (ctx, state) {
    var ref = ctx.doc.createComment(this.options.refId || 'md:until');
    ctx.append(ref);
    var view = new $K46h$var$DOMUntilView(ref, this.options.repeatUntil, ctx.withAppend($maac$export$insertBefore(ref)), this.children);
    view.change(state);
    return view;
  };

  return DOMUntilTemplate;
}();

var $K46h$export$DOMUntilTemplate = $K46h$var$DOMUntilTemplate;
$K46h$exports.DOMUntilTemplate = $K46h$export$DOMUntilTemplate;

var $K46h$export$until = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $K46h$var$DOMUntilTemplate(options, children.map($maac$export$domChildToTemplate));
};

$K46h$exports.until = $K46h$export$until; //# sourceMappingURL=until.js.map

// ASSET: ../node_modules/@mood/dom/lib/for_each.js
var $OzSG$exports = {};

var $OzSG$var$__spreadArrays = $OzSG$exports && $OzSG$exports.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty($OzSG$exports, "__esModule", {
  value: true
});

var $OzSG$export$forEach = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return $K46h$export$until.apply(void 0, $OzSG$var$__spreadArrays([{
    refId: options.refId || 'md:for_each',
    repeatUntil: function (state, index) {
      return state[index];
    }
  }], children));
};

$OzSG$exports.forEach = $OzSG$export$forEach; //# sourceMappingURL=for_each.js.map

// ASSET: ../node_modules/@mood/dom/lib/when.js
var $fsWf$exports = {};
Object.defineProperty($fsWf$exports, "__esModule", {
  value: true
});

var $fsWf$var$DOMWhenView =
/** @class */
function () {
  function DOMWhenView(condition, ctx, dispatch, removeNode, children) {
    this.condition = condition;
    this.ctx = ctx;
    this.dispatch = dispatch;
    this.removeNode = removeNode;
    this.children = children;
    this.kind = 'dynamic';
  }

  DOMWhenView.prototype.change = function (value) {
    var _this = this;

    if (this.condition(value)) {
      if (this.views == null) {
        // it has never been rendered before
        this.views = this.children.map(function (c) {
          return c.render(_this.ctx, value);
        });
        this.dynamics = $maac$export$filterDynamics(this.views);
      } else if (this.dynamics) {
        for (var _i = 0, _a = this.dynamics; _i < _a.length; _i++) {
          var d = _a[_i];
          d.change(value);
        }
      }
    } else {
      this.destroyViews();
    }
  };

  DOMWhenView.prototype.destroy = function () {
    this.destroyViews();
    this.removeNode();
  };

  DOMWhenView.prototype.destroyViews = function () {
    if (this.views != null) {
      for (var _i = 0, _a = this.views; _i < _a.length; _i++) {
        var v = _a[_i];
        v.destroy();
      }

      this.views = undefined;
      this.dynamics = undefined;
    }
  };

  return DOMWhenView;
}();

var $fsWf$export$DOMWhenView = $fsWf$var$DOMWhenView;
$fsWf$exports.DOMWhenView = $fsWf$export$DOMWhenView;

var $fsWf$var$DOMWhen =
/** @class */
function () {
  function DOMWhen(options, children) {
    this.options = options;
    this.children = children;
  }

  DOMWhen.prototype.render = function (ctx, state) {
    var ref = ctx.doc.createComment(this.options.refId || 'md:when');
    ctx.append(ref);
    var parent = ref.parentElement;
    var view = new $fsWf$var$DOMWhenView(this.options.condition, ctx.withAppend(function (node) {
      return parent.insertBefore(node, ref);
    }), ctx.dispatch, function () {
      return $maac$export$removeNode(ref);
    }, this.children.map($maac$export$domChildToTemplate));
    view.change(state);
    return view;
  };

  return DOMWhen;
}();

var $fsWf$export$DOMWhen = $fsWf$var$DOMWhen;
$fsWf$exports.DOMWhen = $fsWf$export$DOMWhen;

var $fsWf$export$when = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $fsWf$var$DOMWhen(options, children);
};

$fsWf$exports.when = $fsWf$export$when;

var $fsWf$export$unless = function (options) {
  var children = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    children[_i - 1] = arguments[_i];
  }

  return new $fsWf$var$DOMWhen({
    condition: function (v) {
      return !options.condition(v);
    },
    refId: options.refId || 'md:unless'
  }, children);
};

$fsWf$exports.unless = $fsWf$export$unless; //# sourceMappingURL=when.js.map

// ASSET: action.ts
var $FLek$exports = {};
Object.defineProperty($FLek$exports, "__esModule", {
  value: true
});

var $FLek$var$AddingTodo = function () {
  function AddingTodo(title) {
    this.title = title;
    this.kind = 'adding-todo';
  }

  return AddingTodo;
}();

var $FLek$export$AddingTodo = $FLek$var$AddingTodo;
$FLek$exports.AddingTodo = $FLek$export$AddingTodo;

var $FLek$var$CreateTodo =
/** @class */
function () {
  function CreateTodo(title) {
    this.title = title;
    this.kind = 'create-todo';
  }

  return CreateTodo;
}();

var $FLek$export$CreateTodo = $FLek$var$CreateTodo;
$FLek$exports.CreateTodo = $FLek$export$CreateTodo;

var $FLek$var$CancelAddingTodo =
/** @class */
function () {
  function CancelAddingTodo() {
    this.kind = 'cancel-adding-todo';
  }

  return CancelAddingTodo;
}();

var $FLek$export$CancelAddingTodo = $FLek$var$CancelAddingTodo;
$FLek$exports.CancelAddingTodo = $FLek$export$CancelAddingTodo;

var $FLek$var$CancelEditingTodo =
/** @class */
function () {
  function CancelEditingTodo() {
    this.kind = 'cancel-editing-todo';
  }

  return CancelEditingTodo;
}();

var $FLek$export$CancelEditingTodo = $FLek$var$CancelEditingTodo;
$FLek$exports.CancelEditingTodo = $FLek$export$CancelEditingTodo;

var $FLek$var$ClearCompleted =
/** @class */
function () {
  function ClearCompleted() {
    this.kind = 'clear-completed';
  }

  return ClearCompleted;
}();

var $FLek$export$ClearCompleted = $FLek$var$ClearCompleted;
$FLek$exports.ClearCompleted = $FLek$export$ClearCompleted;

var $FLek$var$EditingTodo =
/** @class */
function () {
  function EditingTodo(id, title) {
    this.id = id;
    this.title = title;
    this.kind = 'editing-todo';
  }

  return EditingTodo;
}();

var $FLek$export$EditingTodo = $FLek$var$EditingTodo;
$FLek$exports.EditingTodo = $FLek$export$EditingTodo;

var $FLek$var$RemoveTodo =
/** @class */
function () {
  function RemoveTodo(id) {
    this.id = id;
    this.kind = 'remove-todo';
  }

  return RemoveTodo;
}();

var $FLek$export$RemoveTodo = $FLek$var$RemoveTodo;
$FLek$exports.RemoveTodo = $FLek$export$RemoveTodo;

var $FLek$var$ToggleFilter =
/** @class */
function () {
  function ToggleFilter(filter) {
    this.filter = filter;
    this.kind = 'toggle-filter';
  }

  return ToggleFilter;
}();

var $FLek$export$ToggleFilter = $FLek$var$ToggleFilter;
$FLek$exports.ToggleFilter = $FLek$export$ToggleFilter;

var $FLek$var$ToggleTodo =
/** @class */
function () {
  function ToggleTodo(id) {
    this.id = id;
    this.kind = 'toggle-completed';
  }

  return ToggleTodo;
}();

var $FLek$export$ToggleTodo = $FLek$var$ToggleTodo;
$FLek$exports.ToggleTodo = $FLek$export$ToggleTodo;

var $FLek$var$UpdateTodo =
/** @class */
function () {
  function UpdateTodo(id, title) {
    this.id = id;
    this.title = title;
    this.kind = 'update-todo';
  }

  return UpdateTodo;
}();

var $FLek$export$UpdateTodo = $FLek$var$UpdateTodo;
$FLek$exports.UpdateTodo = $FLek$export$UpdateTodo;
var $FLek$export$Action = {
  adddingTodo: function adddingTodo(title) {
    return new $FLek$var$AddingTodo(title);
  },
  addTodo: function addTodo(title) {
    return new $FLek$var$CreateTodo(title);
  },
  cancelAddTodo: new $FLek$var$CancelAddingTodo(),
  cancelUpdateTodo: new $FLek$var$CancelEditingTodo(),
  clearCompleted: new $FLek$var$ClearCompleted(),
  editingTodo: function editingTodo(id, title) {
    return new $FLek$var$EditingTodo(id, title);
  },
  removeTodo: function removeTodo(id) {
    return new $FLek$var$RemoveTodo(id);
  },
  toggleTodo: function toggleTodo(id) {
    return new $FLek$var$ToggleTodo(id);
  },
  toggleFilter: function toggleFilter(filter) {
    return new $FLek$var$ToggleFilter(filter);
  },
  updateTodo: function updateTodo(id, title) {
    return new $FLek$var$UpdateTodo(id, title);
  }
};
$FLek$exports.Action = $FLek$export$Action;
// ASSET: app_template.ts
var $yo0O$exports = {};

var $yo0O$var$__assign = $yo0O$exports && $yo0O$exports.__assign || function () {
  $yo0O$var$__assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return $yo0O$var$__assign.apply(this, arguments);
};

Object.defineProperty($yo0O$exports, "__esModule", {
  value: true
});
var $yo0O$var$section = $dkSp$export$html.section,
    $yo0O$var$header = $dkSp$export$html.header,
    $yo0O$var$h1 = $dkSp$export$html.h1,
    $yo0O$var$input = $dkSp$export$html.input,
    $yo0O$var$ul = $dkSp$export$html.ul,
    $yo0O$var$label = $dkSp$export$html.label,
    $yo0O$var$div = $dkSp$export$html.div,
    $yo0O$var$li = $dkSp$export$html.li,
    $yo0O$var$footer = $dkSp$export$html.footer,
    $yo0O$var$span = $dkSp$export$html.span,
    $yo0O$var$a = $dkSp$export$html.a,
    $yo0O$var$p = $dkSp$export$html.p,
    $yo0O$var$button = $dkSp$export$html.button;

var $yo0O$var$changeF = function changeF(filter) {
  return $EwUz$export$handler(function (state) {
    if (state.filter === filter) {
      return undefined;
    } else {
      return function (_) {
        return $FLek$export$Action.toggleFilter(filter);
      };
    }
  });
};

var $yo0O$var$filterF = function filterF(filter) {
  if (filter === $mIWh$export$Filter.All) {
    return function (_) {
      return true;
    };
  } else if (filter === $mIWh$export$Filter.Completed) {
    return function (todo) {
      return todo.completed;
    };
  } else {
    return function (todo) {
      return !todo.completed;
    };
  }
};

var $yo0O$var$selectedF = function selectedF(filter) {
  return function (state) {
    return state.filter === filter ? 'selected' : undefined;
  };
};

var $yo0O$export$template = $yo0O$var$section({}, $yo0O$var$section({
  className: 'todoapp'
}, $yo0O$var$header({
  className: 'header'
}, $yo0O$var$h1({}, 'todos'), $yo0O$var$input({
  className: 'new-todo',
  placeholder: 'What needs to be done?',
  autofocus: function autofocus(state) {
    return state.editing == null;
  },
  value: function value(state) {
    return state.adding;
  },
  onkeydown: function onkeydown(e) {
    var input = e.target;

    if (e.keyCode === 13) {
      return $FLek$export$Action.addTodo(input.value.trim());
    } else if (e.keyCode === 27) {
      return $FLek$export$Action.cancelAddTodo;
    } else {
      return $FLek$export$Action.adddingTodo(input.value);
    }
  }
})), $yo0O$var$section({
  className: 'main'
}, $yo0O$var$input({
  id: 'toggle-all',
  className: 'toggle-all',
  type: 'checkbox'
}), $yo0O$var$label({
  for: 'toggle-all'
}, 'Mark all as complete'), $yo0O$var$ul({
  className: 'todo-list'
}, $kfAy$export$mapState({
  map: function map(state) {
    return state.todos.filter($yo0O$var$filterF(state.filter)).map(function (todo) {
      if (state.editing && state.editing.id === todo.id) {
        return $yo0O$var$__assign($yo0O$var$__assign({}, todo), {
          editing: true,
          title: state.editing.title
        });
      } else {
        return $yo0O$var$__assign($yo0O$var$__assign({}, todo), {
          editing: false
        });
      }
    });
  }
}, $OzSG$export$forEach({
  key: function key(todo) {
    return todo.id;
  }
}, $yo0O$var$li({
  className: function className(todo) {
    var classes = [todo.completed ? 'completed' : undefined, todo.editing ? 'editing' : undefined].filter(function (v) {
      return v != null;
    });
    return classes.join(' ') || undefined;
  }
}, $yo0O$var$div({
  className: 'view'
}, $yo0O$var$input({
  className: 'toggle',
  type: 'checkbox',
  checked: function checked(todo) {
    return todo.completed;
  },
  onchange: $EwUz$export$stateHandler(function (todo) {
    return $FLek$export$Action.toggleTodo(todo.id);
  })
}), $yo0O$var$label({
  ondblclick: $EwUz$export$stateHandler(function (todo) {
    return $FLek$export$Action.editingTodo(todo.id, todo.title);
  })
}, function (todo) {
  return todo.title;
}), $yo0O$var$button({
  className: 'destroy',
  onclick: $EwUz$export$stateHandler(function (todo) {
    return $FLek$export$Action.removeTodo(todo.id);
  })
})), $fsWf$export$when({
  condition: function condition(todo) {
    return todo.editing;
  }
}, $yo0O$var$input({
  moodAfterRender: function moodAfterRender(el) {
    return el.focus();
  },
  className: 'edit',
  value: function value(todo) {
    return todo.title;
  },
  onkeypress: $EwUz$export$handler(function (todo) {
    return function (e) {
      var input = e.target;

      if (e.keyCode === 13) {
        var value = input.value.trim();

        if (value) {
          return $FLek$export$Action.updateTodo(todo.id, value);
        } else {
          return $FLek$export$Action.removeTodo(todo.id);
        }
      } else if (e.keyCode === 27) {
        return $FLek$export$Action.cancelUpdateTodo;
      } else {
        return $FLek$export$Action.editingTodo(todo.id, input.value);
      }
    };
  }),
  onblur: $EwUz$export$handler(function (todo) {
    return function (e) {
      var input = e.target;
      return $FLek$export$Action.updateTodo(todo.id, input.value.trim());
    };
  })
}))))))), $yo0O$var$footer({
  className: 'footer'
}, $yo0O$var$span({
  className: 'todo-count'
}), $yo0O$var$ul({
  className: 'filters'
}, $yo0O$var$li({}, $yo0O$var$a({
  href: '#/',
  className: $yo0O$var$selectedF($mIWh$export$Filter.All),
  onclick: $yo0O$var$changeF($mIWh$export$Filter.All)
}, 'All')), $yo0O$var$li({}, $yo0O$var$a({
  href: '#/active',
  className: $yo0O$var$selectedF($mIWh$export$Filter.Active),
  onclick: $yo0O$var$changeF($mIWh$export$Filter.Active)
}, 'Active')), $yo0O$var$li({}, $yo0O$var$a({
  href: '#/completed',
  className: $yo0O$var$selectedF($mIWh$export$Filter.Completed),
  onclick: $yo0O$var$changeF($mIWh$export$Filter.Completed)
}, 'Completed'))), $fsWf$export$when({
  condition: function condition(state) {
    return state.todos.filter(function (v) {
      return v.completed;
    }).length > 0;
  }
}, $yo0O$var$button({
  className: 'clear-completed',
  onclick: function onclick(_) {
    return $FLek$export$Action.clearCompleted;
  }
}, 'Clear completed')))), $yo0O$var$footer({
  className: 'info'
}, $yo0O$var$p({}, 'Double-click to edit a todo'), $yo0O$var$p({}, 'Created by ', $yo0O$var$a({
  href: 'http://github.com/fponticelli'
}, 'Franco Ponticelli')), $yo0O$var$p({}, 'Part of ', $yo0O$var$a({
  href: 'http://todomvc.com'
}, 'TodoMVC'))));
$yo0O$exports.template = $yo0O$export$template;
// ASSET: main.ts
var $ZCfc$exports = {};
Object.defineProperty($ZCfc$exports, "__esModule", {
  value: true
});
var $ZCfc$var$state = $u2Gx$export$DataStore.get();
var $ZCfc$var$store = $ythw$export$Store.ofState({
  state: $ZCfc$var$state,
  reducer: $pSX2$export$reducer
});
var $ZCfc$var$saveToDataStore = $Z1u3$export$debounce(250)(function (state) {
  return $u2Gx$export$DataStore.set(state);
});
$ZCfc$var$store.property.observable.on($ZCfc$var$saveToDataStore);
$ZCfc$var$store.observable.on(function (_, action) {
  return console.log(action);
});
$L3cT$export$Mood.render({
  store: $ZCfc$var$store,
  template: $yo0O$export$template
});

if (typeof exports === "object" && typeof module !== "undefined") {
  // CommonJS
  module.exports = $ZCfc$exports;
} else if (typeof define === "function" && define.amd) {
  // RequireJS
  define(function () {
    return $ZCfc$exports;
  });
}

return {
  "ZCfc": $ZCfc$exports
};
});