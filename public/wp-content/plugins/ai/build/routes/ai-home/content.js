var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// package-external:@wordpress/i18n
var require_i18n = __commonJS({
  "package-external:@wordpress/i18n"(exports, module) {
    module.exports = window.wp.i18n;
  }
});

// package-external:@wordpress/element
var require_element = __commonJS({
  "package-external:@wordpress/element"(exports, module) {
    module.exports = window.wp.element;
  }
});

// vendor-external:react
var require_react = __commonJS({
  "vendor-external:react"(exports, module) {
    module.exports = window.React;
  }
});

// vendor-external:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "vendor-external:react/jsx-runtime"(exports, module) {
    module.exports = window.ReactJSXRuntime;
  }
});

// vendor-external:react-dom
var require_react_dom = __commonJS({
  "vendor-external:react-dom"(exports, module) {
    module.exports = window.ReactDOM;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    (function() {
      function is(x2, y2) {
        return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
      }
      function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React92.startTransition || (didWarnOld18Alpha = true, console.error(
          "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
        ));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
          var cachedValue = getSnapshot();
          objectIs(value, cachedValue) || (console.error(
            "The result of getSnapshot should be cached to avoid an infinite loop"
          ), didWarnUncachedGetSnapshot = true);
        }
        cachedValue = useState31({
          inst: { value, getSnapshot }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect4(
          function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
          },
          [subscribe, value, getSnapshot]
        );
        useEffect33(
          function() {
            checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            return subscribe(function() {
              checkIfSnapshotChanged(inst) && forceUpdate({ inst });
            });
          },
          [subscribe]
        );
        useDebugValue2(value);
        return value;
      }
      function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
          var nextValue = latestGetSnapshot();
          return !objectIs(inst, nextValue);
        } catch (error2) {
          return true;
        }
      }
      function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React92 = require_react(), objectIs = "function" === typeof Object.is ? Object.is : is, useState31 = React92.useState, useEffect33 = React92.useEffect, useLayoutEffect4 = React92.useLayoutEffect, useDebugValue2 = React92.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
      exports.useSyncExternalStore = void 0 !== React92.useSyncExternalStore ? React92.useSyncExternalStore : shim;
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    (function() {
      function is(x2, y2) {
        return x2 === y2 && (0 !== x2 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
      }
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var React92 = require_react(), shim = require_shim(), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore2 = shim.useSyncExternalStore, useRef43 = React92.useRef, useEffect33 = React92.useEffect, useMemo43 = React92.useMemo, useDebugValue2 = React92.useDebugValue;
      exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef43(null);
        if (null === instRef.current) {
          var inst = { hasValue: false, value: null };
          instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo43(
          function() {
            function memoizedSelector(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                  var currentSelection = inst.value;
                  if (isEqual(currentSelection, nextSnapshot))
                    return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
              }
              currentSelection = memoizedSelection;
              if (objectIs(memoizedSnapshot, nextSnapshot))
                return currentSelection;
              var nextSelection = selector(nextSnapshot);
              if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
                return memoizedSnapshot = nextSnapshot, currentSelection;
              memoizedSnapshot = nextSnapshot;
              return memoizedSelection = nextSelection;
            }
            var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
              function() {
                return memoizedSelector(getSnapshot());
              },
              null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
              }
            ];
          },
          [getSnapshot, getServerSnapshot, selector, isEqual]
        );
        var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
        useEffect33(
          function() {
            inst.hasValue = true;
            inst.value = value;
          },
          [value]
        );
        useDebugValue2(value);
        return value;
      };
      "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_with_selector_development();
    }
  }
});

// package-external:@wordpress/primitives
var require_primitives = __commonJS({
  "package-external:@wordpress/primitives"(exports, module) {
    module.exports = window.wp.primitives;
  }
});

// package-external:@wordpress/compose
var require_compose = __commonJS({
  "package-external:@wordpress/compose"(exports, module) {
    module.exports = window.wp.compose;
  }
});

// package-external:@wordpress/theme
var require_theme = __commonJS({
  "package-external:@wordpress/theme"(exports, module) {
    module.exports = window.wp.theme;
  }
});

// package-external:@wordpress/private-apis
var require_private_apis = __commonJS({
  "package-external:@wordpress/private-apis"(exports, module) {
    module.exports = window.wp.privateApis;
  }
});

// package-external:@wordpress/components
var require_components = __commonJS({
  "package-external:@wordpress/components"(exports, module) {
    module.exports = window.wp.components;
  }
});

// package-external:@wordpress/core-data
var require_core_data = __commonJS({
  "package-external:@wordpress/core-data"(exports, module) {
    module.exports = window.wp.coreData;
  }
});

// package-external:@wordpress/data
var require_data = __commonJS({
  "package-external:@wordpress/data"(exports, module) {
    module.exports = window.wp.data;
  }
});

// node_modules/fast-deep-equal/es6/index.js
var require_es6 = __commonJS({
  "node_modules/fast-deep-equal/es6/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a2, b2) {
      if (a2 === b2) return true;
      if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
        if (a2.constructor !== b2.constructor) return false;
        var length, i2, keys;
        if (Array.isArray(a2)) {
          length = a2.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (!equal(a2[i2], b2[i2])) return false;
          return true;
        }
        if (a2 instanceof Map && b2 instanceof Map) {
          if (a2.size !== b2.size) return false;
          for (i2 of a2.entries())
            if (!b2.has(i2[0])) return false;
          for (i2 of a2.entries())
            if (!equal(i2[1], b2.get(i2[0]))) return false;
          return true;
        }
        if (a2 instanceof Set && b2 instanceof Set) {
          if (a2.size !== b2.size) return false;
          for (i2 of a2.entries())
            if (!b2.has(i2[0])) return false;
          return true;
        }
        if (ArrayBuffer.isView(a2) && ArrayBuffer.isView(b2)) {
          length = a2.length;
          if (length != b2.length) return false;
          for (i2 = length; i2-- !== 0; )
            if (a2[i2] !== b2[i2]) return false;
          return true;
        }
        if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
        if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
        if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
        keys = Object.keys(a2);
        length = keys.length;
        if (length !== Object.keys(b2).length) return false;
        for (i2 = length; i2-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
        for (i2 = length; i2-- !== 0; ) {
          var key = keys[i2];
          if (!equal(a2[key], b2[key])) return false;
        }
        return true;
      }
      return a2 !== a2 && b2 !== b2;
    };
  }
});

// package-external:@wordpress/date
var require_date = __commonJS({
  "package-external:@wordpress/date"(exports, module) {
    module.exports = window.wp.date;
  }
});

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module.exports = deepmerge_1;
  }
});

// package-external:@wordpress/notices
var require_notices = __commonJS({
  "package-external:@wordpress/notices"(exports, module) {
    module.exports = window.wp.notices;
  }
});

// package-external:@wordpress/api-fetch
var require_api_fetch = __commonJS({
  "package-external:@wordpress/api-fetch"(exports, module) {
    module.exports = window.wp.apiFetch;
  }
});

// node_modules/clsx/dist/clsx.mjs
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) {
    var o2 = e2.length;
    for (t2 = 0; t2 < o2; t2++) e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  } else for (f2 in e2) e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o2 = arguments.length; f2 < o2; f2++) (e2 = arguments[f2]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_default = clsx;

// node_modules/@base-ui/utils/esm/useControlled.js
var React = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/error.js
var set;
if (true) {
  set = /* @__PURE__ */ new Set();
}
function error(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set.has(messageKey)) {
      set.add(messageKey);
      console.error(`Base UI: ${messageKey}`);
    }
  }
}

// node_modules/@base-ui/utils/esm/useControlled.js
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = React.useRef(controlled !== void 0);
  const [valueState, setValue] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (true) {
    React.useEffect(() => {
      if (isControlled !== (controlled !== void 0)) {
        error([`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join("\n"));
      }
    }, [state, name, controlled]);
    const {
      current: defaultValue
    } = React.useRef(defaultProp);
    React.useEffect(() => {
      if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) {
        error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
      }
    }, [defaultProp]);
  }
  const setValueIfUncontrolled = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function serializeToDevModeString(input) {
  let nextId = 0;
  const seen = /* @__PURE__ */ new WeakMap();
  try {
    const result = JSON.stringify(input, function replacer(key, value) {
      if (key === "_owner" && this != null && typeof this === "object" && "$$typeof" in this) {
        return void 0;
      }
      if (typeof value === "bigint") {
        return `__bigint__:${value}`;
      }
      if (value !== null && typeof value === "object") {
        const id = seen.get(value);
        if (id !== void 0) {
          return `__object__:${id}`;
        }
        seen.set(value, nextId);
        nextId += 1;
      }
      return value;
    });
    return result ?? `__top__:${typeof input}`;
  } catch {
    return "__unserializable__";
  }
}

// node_modules/@base-ui/utils/esm/useStableCallback.js
var React3 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/useRefWithInit.js
var React2 = __toESM(require_react(), 1);
var UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
  const ref = React2.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}

// node_modules/@base-ui/utils/esm/useStableCallback.js
var useInsertionEffect = React3[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)];
var useSafeInsertionEffect = (
  // React 17 doesn't have useInsertionEffect.
  useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
  useInsertionEffect !== React3.useLayoutEffect ? useInsertionEffect : (fn) => fn()
);
function useStableCallback(callback) {
  const stable = useRefWithInit(createStableCallback).current;
  stable.next = callback;
  useSafeInsertionEffect(stable.effect);
  return stable.trampoline;
}
function createStableCallback() {
  const stable = {
    next: void 0,
    callback: assertNotCalled,
    trampoline: (...args) => stable.callback?.(...args),
    effect: () => {
      stable.callback = stable.next;
    }
  };
  return stable;
}
function assertNotCalled() {
  if (true) {
    throw (
      /* minify-error-disabled */
      new Error("Base UI: Cannot call an event handler while rendering.")
    );
  }
}

// node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js
var React4 = __toESM(require_react(), 1);
var noop = () => {
};
var useIsoLayoutEffect = typeof document !== "undefined" ? React4.useLayoutEffect : noop;

// node_modules/@base-ui/utils/esm/warn.js
var set2;
if (true) {
  set2 = /* @__PURE__ */ new Set();
}
function warn(...messages) {
  if (true) {
    const messageKey = messages.join(" ");
    if (!set2.has(messageKey)) {
      set2.add(messageKey);
      console.warn(`Base UI: ${messageKey}`);
    }
  }
}

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var React7 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/useMergedRefs.js
function useMergedRefs(a2, b2, c2, d2) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChange(forkRef, a2, b2, c2, d2)) {
    update(forkRef, [a2, b2, c2, d2]);
  }
  return forkRef.callback;
}
function useMergedRefsN(refs) {
  const forkRef = useRefWithInit(createForkRef).current;
  if (didChangeN(forkRef, refs)) {
    update(forkRef, refs);
  }
  return forkRef.callback;
}
function createForkRef() {
  return {
    callback: null,
    cleanup: null,
    refs: []
  };
}
function didChange(forkRef, a2, b2, c2, d2) {
  return forkRef.refs[0] !== a2 || forkRef.refs[1] !== b2 || forkRef.refs[2] !== c2 || forkRef.refs[3] !== d2;
}
function didChangeN(forkRef, newRefs) {
  return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index2) => ref !== newRefs[index2]);
}
function update(forkRef, refs) {
  forkRef.refs = refs;
  if (refs.every((ref) => ref == null)) {
    forkRef.callback = null;
    return;
  }
  forkRef.callback = (instance) => {
    if (forkRef.cleanup) {
      forkRef.cleanup();
      forkRef.cleanup = null;
    }
    if (instance != null) {
      const cleanupCallbacks = Array(refs.length).fill(null);
      for (let i2 = 0; i2 < refs.length; i2 += 1) {
        const ref = refs[i2];
        if (ref == null) {
          continue;
        }
        switch (typeof ref) {
          case "function": {
            const refCleanup = ref(instance);
            if (typeof refCleanup === "function") {
              cleanupCallbacks[i2] = refCleanup;
            }
            break;
          }
          case "object": {
            ref.current = instance;
            break;
          }
          default:
        }
      }
      forkRef.cleanup = () => {
        for (let i2 = 0; i2 < refs.length; i2 += 1) {
          const ref = refs[i2];
          if (ref == null) {
            continue;
          }
          switch (typeof ref) {
            case "function": {
              const cleanupCallback = cleanupCallbacks[i2];
              if (typeof cleanupCallback === "function") {
                cleanupCallback();
              } else {
                ref(null);
              }
              break;
            }
            case "object": {
              ref.current = null;
              break;
            }
            default:
          }
        }
      };
    }
  };
}

// node_modules/@base-ui/utils/esm/getReactElementRef.js
var React6 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/reactVersion.js
var React5 = __toESM(require_react(), 1);
var majorVersion = parseInt(React5.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
  return majorVersion >= reactVersionToCheck;
}

// node_modules/@base-ui/utils/esm/getReactElementRef.js
function getReactElementRef(element) {
  if (!/* @__PURE__ */ React6.isValidElement(element)) {
    return null;
  }
  const reactElement = element;
  const propsWithRef = reactElement.props;
  return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}

// node_modules/@base-ui/utils/esm/mergeObjects.js
function mergeObjects(a2, b2) {
  if (a2 && !b2) {
    return a2;
  }
  if (!a2 && b2) {
    return b2;
  }
  if (a2 || b2) {
    return {
      ...a2,
      ...b2
    };
  }
  return void 0;
}

// node_modules/@base-ui/utils/esm/empty.js
function NOOP() {
}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js
function getStateAttributesProps(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveClassName.js
function resolveClassName(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveStyle.js
function resolveStyle(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var EMPTY_PROPS = {};
function mergeProps(a2, b2, c2, d2, e2) {
  if (!c2 && !d2 && !e2 && !a2) {
    return createInitialMergedProps(b2);
  }
  let merged = createInitialMergedProps(a2);
  if (b2) {
    merged = mergeInto(merged, b2);
  }
  if (c2) {
    merged = mergeInto(merged, c2);
  }
  if (d2) {
    merged = mergeInto(merged, d2);
  }
  if (e2) {
    merged = mergeInto(merged, e2);
  }
  return merged;
}
function mergePropsN(props) {
  if (props.length === 0) {
    return EMPTY_PROPS;
  }
  if (props.length === 1) {
    return createInitialMergedProps(props[0]);
  }
  let merged = createInitialMergedProps(props[0]);
  for (let i2 = 1; i2 < props.length; i2 += 1) {
    merged = mergeInto(merged, props[i2]);
  }
  return merged;
}
function createInitialMergedProps(inputProps) {
  if (isPropsGetter(inputProps)) {
    return {
      ...resolvePropsGetter(inputProps, EMPTY_PROPS)
    };
  }
  return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
  if (isPropsGetter(inputProps)) {
    return resolvePropsGetter(inputProps, merged);
  }
  return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
  if (isPropsGetter(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      const baseUIEvent = event;
      makeEventPreventable(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent(event)) {
      makeEventPreventable(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var import_react = __toESM(require_react(), 1);
function useRenderElement(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp(element, renderProp, outProps, state);
}
function useRenderElementProps(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping7,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping7) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps(props) {
  if (Array.isArray(props)) {
    return mergePropsN(props);
  }
  return mergeProps(void 0, props);
}
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render4, props, state) {
  if (render4) {
    if (typeof render4 === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent(render4);
      }
      return render4(props, state);
    }
    const mergedProps = mergeProps(props, render4.props);
    mergedProps.ref = props.ref;
    let newElement = render4;
    if (newElement?.$$typeof === REACT_LAZY_TYPE) {
      const children = React7.Children.toArray(render4);
      newElement = children[0];
    }
    if (true) {
      if (!/* @__PURE__ */ React7.isValidElement(newElement)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React7.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag(element, props);
    }
  }
  throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ (0, import_react.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ (0, import_react.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React7.createElement(Tag, props);
}

// node_modules/@base-ui/utils/esm/useId.js
var React9 = __toESM(require_react(), 1);

// node_modules/@base-ui/utils/esm/safeReact.js
var React8 = __toESM(require_react(), 1);
var SafeReact = {
  ...React8
};

// node_modules/@base-ui/utils/esm/useId.js
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
  const [defaultId, setDefaultId] = React9.useState(idOverride);
  const id = idOverride || defaultId;
  React9.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`${prefix}-${globalId}`);
    }
  }, [defaultId, prefix]);
  return id;
}
var maybeReactUseId = SafeReact.useId;
function useId(idOverride, prefix) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
  }
  return useGlobalId(idOverride, prefix);
}

// node_modules/@base-ui/utils/esm/useOnMount.js
var React10 = __toESM(require_react(), 1);
var EMPTY = [];
function useOnMount(fn) {
  React10.useEffect(fn, EMPTY);
}

// node_modules/@base-ui/utils/esm/useAnimationFrame.js
var EMPTY2 = null;
var LAST_RAF = globalThis.requestAnimationFrame;
var Scheduler = class {
  /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */
  callbacks = [];
  callbacksCount = 0;
  nextId = 1;
  startId = 1;
  isScheduled = false;
  tick = (timestamp) => {
    this.isScheduled = false;
    const currentCallbacks = this.callbacks;
    const currentCallbacksCount = this.callbacksCount;
    this.callbacks = [];
    this.callbacksCount = 0;
    this.startId = this.nextId;
    if (currentCallbacksCount > 0) {
      for (let i2 = 0; i2 < currentCallbacks.length; i2 += 1) {
        currentCallbacks[i2]?.(timestamp);
      }
    }
  };
  request(fn) {
    const id = this.nextId;
    this.nextId += 1;
    this.callbacks.push(fn);
    this.callbacksCount += 1;
    const didRAFChange = LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
    if (!this.isScheduled || didRAFChange) {
      requestAnimationFrame(this.tick);
      this.isScheduled = true;
    }
    return id;
  }
  cancel(id) {
    const index2 = id - this.startId;
    if (index2 < 0 || index2 >= this.callbacks.length) {
      return;
    }
    this.callbacks[index2] = null;
    this.callbacksCount -= 1;
  }
};
var scheduler = new Scheduler();
var AnimationFrame = class _AnimationFrame {
  static create() {
    return new _AnimationFrame();
  }
  static request(fn) {
    return scheduler.request(fn);
  }
  static cancel(id) {
    return scheduler.cancel(id);
  }
  currentId = EMPTY2;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  request(fn) {
    this.cancel();
    this.currentId = scheduler.request(() => {
      this.currentId = EMPTY2;
      fn();
    });
  }
  cancel = () => {
    if (this.currentId !== EMPTY2) {
      scheduler.cancel(this.currentId);
      this.currentId = EMPTY2;
    }
  };
  disposeEffect = () => {
    return this.cancel;
  };
};
function useAnimationFrame() {
  const timeout = useRefWithInit(AnimationFrame.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {
  }
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@base-ui/utils/esm/detectBrowser.js
var hasNavigator = typeof navigator !== "undefined";
var nav = getNavigatorData();
var platform = getPlatform();
var userAgent = getUserAgent();
var isWebKit2 = typeof CSS === "undefined" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter:none");
var isIOS = (
  // iPads can claim to be MacIntel
  nav.platform === "MacIntel" && nav.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(nav.platform)
);
var isFirefox = hasNavigator && /firefox/i.test(userAgent);
var isSafari = hasNavigator && /apple/i.test(navigator.vendor);
var isEdge = hasNavigator && /Edg/i.test(userAgent);
var isAndroid = hasNavigator && /android/i.test(platform) || /android/i.test(userAgent);
var isMac = hasNavigator && platform.toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
var isJSDOM = userAgent.includes("jsdom/");
function getNavigatorData() {
  if (!hasNavigator) {
    return {
      platform: "",
      maxTouchPoints: -1
    };
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return {
      platform: uaData.platform,
      maxTouchPoints: navigator.maxTouchPoints
    };
  }
  return {
    platform: navigator.platform ?? "",
    maxTouchPoints: navigator.maxTouchPoints ?? -1
  };
}
function getUserAgent() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(({
      brand,
      version: version2
    }) => `${brand}/${version2}`).join(" ");
  }
  return navigator.userAgent;
}
function getPlatform() {
  if (!hasNavigator) {
    return "";
  }
  const uaData = navigator.userAgentData;
  if (uaData?.platform) {
    return uaData.platform;
  }
  return navigator.platform ?? "";
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v2) => ({
  x: v2,
  y: v2
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x2,
    y: y2,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y2,
    left: x2,
    right: x2 + width,
    bottom: y2 + height,
    x: x2,
    y: y2
  };
}

// node_modules/@base-ui/utils/esm/owner.js
function ownerDocument(node) {
  return node?.ownerDocument || document;
}

// node_modules/@base-ui/utils/esm/addEventListener.js
function addEventListener(target, type, listener, options) {
  target.addEventListener(type, listener, options);
  return () => {
    target.removeEventListener(type, listener, options);
  };
}

// node_modules/@base-ui/utils/esm/useOnFirstRender.js
var React11 = __toESM(require_react(), 1);
function useOnFirstRender(fn) {
  const ref = React11.useRef(true);
  if (ref.current) {
    ref.current = false;
    fn();
  }
}

// node_modules/@base-ui/utils/esm/useTimeout.js
var EMPTY3 = 0;
var Timeout = class _Timeout {
  static create() {
    return new _Timeout();
  }
  currentId = EMPTY3;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY3;
      fn();
    }, delay);
  }
  isStarted() {
    return this.currentId !== EMPTY3;
  }
  clear = () => {
    if (this.currentId !== EMPTY3) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY3;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
};
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

// node_modules/@base-ui/utils/esm/useScrollLock.js
var originalHtmlStyles = {};
var originalBodyStyles = {};
var originalHtmlScrollBehavior = "";
function hasInsetScrollbars(referenceElement) {
  if (typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const win = getWindow(doc);
  return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
  const supported = typeof CSS !== "undefined" && CSS.supports && CSS.supports("scrollbar-gutter", "stable");
  if (!supported || typeof document === "undefined") {
    return false;
  }
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const scrollContainer = isOverflowElement(html) ? html : body;
  const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
  const originalHtmlStyleGutter = html.style.scrollbarGutter;
  html.style.scrollbarGutter = "stable";
  scrollContainer.style.overflowY = "scroll";
  const before = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = "hidden";
  const after = scrollContainer.offsetWidth;
  scrollContainer.style.overflowY = originalScrollContainerOverflowY;
  html.style.scrollbarGutter = originalHtmlStyleGutter;
  return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const elementToLock = isOverflowElement(html) ? html : body;
  const originalElementToLockStyles = {
    overflowY: elementToLock.style.overflowY,
    overflowX: elementToLock.style.overflowX
  };
  Object.assign(elementToLock.style, {
    overflowY: "hidden",
    overflowX: "hidden"
  });
  return () => {
    Object.assign(elementToLock.style, originalElementToLockStyles);
  };
}
function preventScrollInsetScrollbars(referenceElement) {
  const doc = ownerDocument(referenceElement);
  const html = doc.documentElement;
  const body = doc.body;
  const win = getWindow(html);
  let scrollTop = 0;
  let scrollLeft = 0;
  let updateGutterOnly = false;
  const resizeFrame = AnimationFrame.create();
  if (isWebKit2 && (win.visualViewport?.scale ?? 1) !== 1) {
    return () => {
    };
  }
  function lockScroll() {
    const htmlStyles = win.getComputedStyle(html);
    const bodyStyles = win.getComputedStyle(body);
    const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || "";
    const hasBothEdges = htmlScrollbarGutterValue.includes("both-edges");
    const scrollbarGutterValue = hasBothEdges ? "stable both-edges" : "stable";
    scrollTop = html.scrollTop;
    scrollLeft = html.scrollLeft;
    originalHtmlStyles = {
      scrollbarGutter: html.style.scrollbarGutter,
      overflowY: html.style.overflowY,
      overflowX: html.style.overflowX
    };
    originalHtmlScrollBehavior = html.style.scrollBehavior;
    originalBodyStyles = {
      position: body.style.position,
      height: body.style.height,
      width: body.style.width,
      boxSizing: body.style.boxSizing,
      overflowY: body.style.overflowY,
      overflowX: body.style.overflowX,
      scrollBehavior: body.style.scrollBehavior
    };
    const isScrollableY = html.scrollHeight > html.clientHeight;
    const isScrollableX = html.scrollWidth > html.clientWidth;
    const hasConstantOverflowY = htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
    const hasConstantOverflowX = htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
    const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
    const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
    const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
    const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
    const elementToLock = isOverflowElement(html) ? html : body;
    updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
    if (updateGutterOnly) {
      html.style.scrollbarGutter = scrollbarGutterValue;
      elementToLock.style.overflowY = "hidden";
      elementToLock.style.overflowX = "hidden";
      return;
    }
    Object.assign(html.style, {
      scrollbarGutter: scrollbarGutterValue,
      overflowY: "hidden",
      overflowX: "hidden"
    });
    if (isScrollableY || hasConstantOverflowY) {
      html.style.overflowY = "scroll";
    }
    if (isScrollableX || hasConstantOverflowX) {
      html.style.overflowX = "scroll";
    }
    Object.assign(body.style, {
      position: "relative",
      height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : "100dvh",
      width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : "100vw",
      boxSizing: "border-box",
      overflow: "hidden",
      scrollBehavior: "unset"
    });
    body.scrollTop = scrollTop;
    body.scrollLeft = scrollLeft;
    html.setAttribute("data-base-ui-scroll-locked", "");
    html.style.scrollBehavior = "unset";
  }
  function cleanup() {
    Object.assign(html.style, originalHtmlStyles);
    Object.assign(body.style, originalBodyStyles);
    if (!updateGutterOnly) {
      html.scrollTop = scrollTop;
      html.scrollLeft = scrollLeft;
      html.removeAttribute("data-base-ui-scroll-locked");
      html.style.scrollBehavior = originalHtmlScrollBehavior;
    }
  }
  function handleResize() {
    cleanup();
    resizeFrame.request(lockScroll);
  }
  lockScroll();
  const unsubscribeResize = addEventListener(win, "resize", handleResize);
  return () => {
    resizeFrame.cancel();
    cleanup();
    if (typeof win.removeEventListener === "function") {
      unsubscribeResize();
    }
  };
}
var ScrollLocker = class {
  lockCount = 0;
  restore = null;
  timeoutLock = Timeout.create();
  timeoutUnlock = Timeout.create();
  acquire(referenceElement) {
    this.lockCount += 1;
    if (this.lockCount === 1 && this.restore === null) {
      this.timeoutLock.start(0, () => this.lock(referenceElement));
    }
    return this.release;
  }
  release = () => {
    this.lockCount -= 1;
    if (this.lockCount === 0 && this.restore) {
      this.timeoutUnlock.start(0, this.unlock);
    }
  };
  unlock = () => {
    if (this.lockCount === 0 && this.restore) {
      this.restore?.();
      this.restore = null;
    }
  };
  lock(referenceElement) {
    if (this.lockCount === 0 || this.restore !== null) {
      return;
    }
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const htmlOverflowY = getWindow(html).getComputedStyle(html).overflowY;
    if (htmlOverflowY === "hidden" || htmlOverflowY === "clip") {
      this.restore = NOOP;
      return;
    }
    const hasOverlayScrollbars = isIOS || !hasInsetScrollbars(referenceElement);
    this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
  }
};
var SCROLL_LOCKER = new ScrollLocker();
function useScrollLock(enabled = true, referenceElement = null) {
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return void 0;
    }
    return SCROLL_LOCKER.acquire(referenceElement);
  }, [enabled, referenceElement]);
}

// node_modules/@base-ui/utils/esm/mergeCleanups.js
function mergeCleanups(...cleanups) {
  return () => {
    for (let i2 = 0; i2 < cleanups.length; i2 += 1) {
      const cleanup = cleanups[i2];
      if (cleanup) {
        cleanup();
      }
    }
  };
}

// node_modules/@base-ui/utils/esm/useValueAsRef.js
function useValueAsRef(value) {
  const latest = useRefWithInit(createLatestRef, value).current;
  latest.next = value;
  useIsoLayoutEffect(latest.effect);
  return latest;
}
function createLatestRef(value) {
  const latest = {
    current: value,
    next: value,
    effect: () => {
      latest.current = latest.next;
    }
  };
  return latest;
}

// node_modules/@base-ui/utils/esm/visuallyHidden.js
var visuallyHiddenBase = {
  clipPath: "inset(50%)",
  overflow: "hidden",
  whiteSpace: "nowrap",
  border: 0,
  padding: 0,
  width: 1,
  height: 1,
  margin: -1
};
var visuallyHidden = {
  ...visuallyHiddenBase,
  position: "fixed",
  top: 0,
  left: 0
};
var visuallyHiddenInput = {
  ...visuallyHiddenBase,
  position: "absolute"
};

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x2,
    y: y2,
    platform: platform3,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform3.getClippingRect({
    element: ((_await$platform$isEle = await (platform3.isElement == null ? void 0 : platform3.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform3.getDocumentElement == null ? void 0 : platform3.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x2,
    y: y2,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform3.getOffsetParent == null ? void 0 : platform3.getOffsetParent(elements.floating));
  const offsetScale = await (platform3.isElement == null ? void 0 : platform3.isElement(offsetParent)) ? await (platform3.getScale == null ? void 0 : platform3.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform3.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform3.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3
  } = config;
  const platformWithDetectOverflow = platform3.detectOverflow ? platform3 : {
    ...platform3,
    detectOverflow
  };
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(floating));
  let rects = await platform3.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x2,
    y: y2
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i2 = 0; i2 < middleware.length; i2++) {
    const currentMiddleware = middleware[i2];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x2,
      y: y2,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x2 = nextX != null ? nextX : x2;
    y2 = nextY != null ? nextY : y2;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform3.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x2,
          y: y2
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i2 = -1;
    }
  }
  return {
    x: x2,
    y: y2,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform3,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every((d2) => getSideAxis(d2.placement) === initialSideAxis ? d2.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d2) => d2.overflows[0] <= 0).sort((a2, b2) => a2.overflows[1] - b2.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d2) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d2.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d2) => [d2.placement, d2.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a2, b2) => a2[1] - b2[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
var hide = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects,
        platform: platform3
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await platform3.detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await platform3.detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform3,
    elements
  } = state;
  const rtl = await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x2,
        y: y2,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x2 + diffCoords.x,
        y: y2 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x2,
        y: y2,
        placement,
        platform: platform3
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x3,
              y: y3
            } = _ref;
            return {
              x: x3,
              y: y3
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x2,
          y: limitedCoords.y - y2,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var limitShift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x: x2,
        y: y2,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset4 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x: x2,
        y: y2
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset4, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = originSides.has(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform3,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await platform3.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform3.isRTL == null ? void 0 : platform3.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform3.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x2 = ($2 ? round(rect.width) : rect.width) / width;
  let y2 = ($2 ? round(rect.height) : rect.height) / height;
  if (!x2 || !Number.isFinite(x2)) {
    x2 = 1;
  }
  if (!y2 || !Number.isFinite(y2)) {
    y2 = 1;
  }
  return {
    x: x2,
    y: y2
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x2 = (clientRect.left + visualOffsets.x) / scale.x;
  let y2 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x2 *= iframeScale.x;
      y2 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x2 += left;
      y2 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x2,
    y: y2
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x2 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y2 = htmlRect.top + scroll.scrollTop;
  return {
    x: x2,
    y: y2
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x2 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y2 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x2 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x2 = 0;
  let y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x2 = left * scale.x;
  const y2 = top * scale.y;
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i2 = 1; i2 < clippingAncestors.length; i2++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i2], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x2 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y2 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x2,
    y: y2,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform2 = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a2, b2) {
  return a2.x === b2.x && a2.y === b2.y && a2.width === b2.width && a2.height === b2.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update2, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update2, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update2);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update2) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update2();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update2();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update2();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update2);
      ancestorResize && ancestor.removeEventListener("resize", update2);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var hide2 = hide;
var limitShift2 = limitShift;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform: platform2,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@base-ui/utils/esm/store/createSelector.js
var createSelector = (a2, b2, c2, d2, e2, f2, ...other) => {
  if (other.length > 0) {
    throw new Error(true ? "Unsupported number of selectors" : formatErrorMessage_default(1));
  }
  let selector;
  if (a2 && b2 && c2 && d2 && e2 && f2) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b2(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      const vd = d2(state, a1, a22, a3);
      const ve = e2(state, a1, a22, a3);
      return f2(va, vb, vc, vd, ve, a1, a22, a3);
    };
  } else if (a2 && b2 && c2 && d2 && e2) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b2(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      const vd = d2(state, a1, a22, a3);
      return e2(va, vb, vc, vd, a1, a22, a3);
    };
  } else if (a2 && b2 && c2 && d2) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b2(state, a1, a22, a3);
      const vc = c2(state, a1, a22, a3);
      return d2(va, vb, vc, a1, a22, a3);
    };
  } else if (a2 && b2 && c2) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      const vb = b2(state, a1, a22, a3);
      return c2(va, vb, a1, a22, a3);
    };
  } else if (a2 && b2) {
    selector = (state, a1, a22, a3) => {
      const va = a2(state, a1, a22, a3);
      return b2(va, a1, a22, a3);
    };
  } else if (a2) {
    selector = a2;
  } else {
    throw (
      /* minify-error-disabled */
      new Error("Missing arguments")
    );
  }
  return selector;
};

// node_modules/@base-ui/utils/esm/store/useStore.js
var React13 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);
var import_with_selector = __toESM(require_with_selector(), 1);

// node_modules/@base-ui/utils/esm/fastHooks.js
var React12 = __toESM(require_react(), 1);
var hooks = [];
var currentInstance = void 0;
function getInstance() {
  return currentInstance;
}
function register(hook) {
  hooks.push(hook);
}
function fastComponent(fn) {
  const FastComponent = (props, forwardedRef) => {
    const instance = useRefWithInit(createInstance).current;
    let result;
    try {
      currentInstance = instance;
      for (const hook of hooks) {
        hook.before(instance);
      }
      result = fn(props, forwardedRef);
      for (const hook of hooks) {
        hook.after(instance);
      }
      instance.didInitialize = true;
    } finally {
      currentInstance = void 0;
    }
    return result;
  };
  FastComponent.displayName = fn.displayName || fn.name;
  return FastComponent;
}
function fastComponentRef(fn) {
  return /* @__PURE__ */ React12.forwardRef(fastComponent(fn));
}
function createInstance() {
  return {
    didInitialize: false
  };
}

// node_modules/@base-ui/utils/esm/store/useStore.js
var canUseRawUseSyncExternalStore = isReactVersionAtLeast(19);
var useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
  return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
  const getSelection = React13.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [store, selector, a1, a2, a3]);
  return (0, import_shim.useSyncExternalStore)(store.subscribe, getSelection, getSelection);
}
register({
  before(instance) {
    instance.syncIndex = 0;
    if (!instance.didInitialize) {
      instance.syncTick = 1;
      instance.syncHooks = [];
      instance.didChangeStore = true;
      instance.getSnapshot = () => {
        let didChange2 = false;
        for (let i2 = 0; i2 < instance.syncHooks.length; i2 += 1) {
          const hook = instance.syncHooks[i2];
          const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
          if (hook.didChange || !Object.is(hook.value, value)) {
            didChange2 = true;
            hook.value = value;
            hook.didChange = false;
          }
        }
        if (didChange2) {
          instance.syncTick += 1;
        }
        return instance.syncTick;
      };
    }
  },
  after(instance) {
    if (instance.syncHooks.length > 0) {
      if (instance.didChangeStore) {
        instance.didChangeStore = false;
        instance.subscribe = (onStoreChange) => {
          const stores = /* @__PURE__ */ new Set();
          for (const hook of instance.syncHooks) {
            stores.add(hook.store);
          }
          const unsubscribes = [];
          for (const store of stores) {
            unsubscribes.push(store.subscribe(onStoreChange));
          }
          return () => {
            for (const unsubscribe of unsubscribes) {
              unsubscribe();
            }
          };
        };
      }
      (0, import_shim.useSyncExternalStore)(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
    }
  }
});
function useStoreFast(store, selector, a1, a2, a3) {
  const instance = getInstance();
  if (!instance) {
    return useStoreR19(store, selector, a1, a2, a3);
  }
  const index2 = instance.syncIndex;
  instance.syncIndex += 1;
  let hook;
  if (!instance.didInitialize) {
    hook = {
      store,
      selector,
      a1,
      a2,
      a3,
      value: selector(store.getSnapshot(), a1, a2, a3),
      didChange: false
    };
    instance.syncHooks.push(hook);
  } else {
    hook = instance.syncHooks[index2];
    if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
      if (hook.store !== store) {
        instance.didChangeStore = true;
      }
      hook.store = store;
      hook.selector = selector;
      hook.a1 = a1;
      hook.a2 = a2;
      hook.a3 = a3;
      hook.didChange = true;
    }
  }
  return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
  return (0, import_with_selector.useSyncExternalStoreWithSelector)(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}

// node_modules/@base-ui/utils/esm/store/Store.js
var Store = class {
  /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */
  // Internal state to handle recursive `setState()` calls
  constructor(state) {
    this.state = state;
    this.listeners = /* @__PURE__ */ new Set();
    this.updateTick = 0;
  }
  /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */
  subscribe = (fn) => {
    this.listeners.add(fn);
    return () => {
      this.listeners.delete(fn);
    };
  };
  /**
   * Returns the current state of the store.
   */
  getSnapshot = () => {
    return this.state;
  };
  /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */
  setState(newState) {
    if (this.state === newState) {
      return;
    }
    this.state = newState;
    this.updateTick += 1;
    const currentTick = this.updateTick;
    for (const listener of this.listeners) {
      if (currentTick !== this.updateTick) {
        return;
      }
      listener(newState);
    }
  }
  /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */
  update(changes) {
    for (const key in changes) {
      if (!Object.is(this.state[key], changes[key])) {
        this.setState({
          ...this.state,
          ...changes
        });
        return;
      }
    }
  }
  /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */
  set(key, value) {
    if (!Object.is(this.state[key], value)) {
      this.setState({
        ...this.state,
        [key]: value
      });
    }
  }
  /**
   * Gives the state a new reference and updates all registered listeners.
   */
  notifyAll() {
    const newState = {
      ...this.state
    };
    this.setState(newState);
  }
  use(selector, a1, a2, a3) {
    return useStore(this, selector, a1, a2, a3);
  }
};

// node_modules/@base-ui/utils/esm/store/ReactStore.js
var React14 = __toESM(require_react(), 1);
var ReactStore = class extends Store {
  /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */
  constructor(state, context = {}, selectors4) {
    super(state);
    this.context = context;
    this.selectors = selectors4;
  }
  /**
   * Non-reactive values such as refs, callbacks, etc.
   */
  /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValue(key, value) {
    React14.useDebugValue(key);
    useIsoLayoutEffect(() => {
      if (this.state[key] !== value) {
        this.set(key, value);
      }
    }, [key, value]);
  }
  /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */
  useSyncedValueWithCleanup(key, value) {
    const store = this;
    useIsoLayoutEffect(() => {
      if (store.state[key] !== value) {
        store.set(key, value);
      }
      return () => {
        store.set(key, void 0);
      };
    }, [store, key, value]);
  }
  /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */
  useSyncedValues(statePart) {
    const store = this;
    if (true) {
      React14.useDebugValue(statePart, (p2) => Object.keys(p2));
      const keys = React14.useRef(Object.keys(statePart)).current;
      const nextKeys = Object.keys(statePart);
      if (keys.length !== nextKeys.length || keys.some((key, index2) => key !== nextKeys[index2])) {
        console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
      }
    }
    const dependencies = Object.values(statePart);
    useIsoLayoutEffect(() => {
      store.update(statePart);
    }, [store, ...dependencies]);
  }
  /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */
  useControlledProp(key, controlled) {
    React14.useDebugValue(key);
    const isControlled = controlled !== void 0;
    useIsoLayoutEffect(() => {
      if (isControlled && !Object.is(this.state[key], controlled)) {
        super.setState({
          ...this.state,
          [key]: controlled
        });
      }
    }, [key, controlled, isControlled]);
    if (true) {
      const cache = this.controlledValues ??= /* @__PURE__ */ new Map();
      if (!cache.has(key)) {
        cache.set(key, isControlled);
      }
      const previouslyControlled = cache.get(key);
      if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) {
        console.error(`A component is changing the ${isControlled ? "" : "un"}controlled state of ${key.toString()} to be ${isControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
      }
    }
  }
  /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */
  select(key, a1, a2, a3) {
    const selector = this.selectors[key];
    return selector(this.state, a1, a2, a3);
  }
  /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */
  useState(key, a1, a2, a3) {
    React14.useDebugValue(key);
    return useStore(this, this.selectors[key], a1, a2, a3);
  }
  /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */
  useContextCallback(key, fn) {
    React14.useDebugValue(key);
    const stableFunction = useStableCallback(fn ?? NOOP);
    this.context[key] = stableFunction;
  }
  /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */
  useStateSetter(key) {
    const ref = React14.useRef(void 0);
    if (ref.current === void 0) {
      ref.current = (value) => {
        this.set(key, value);
      };
    }
    return ref.current;
  }
  /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */
  observe(selector, listener) {
    let selectFn;
    if (typeof selector === "function") {
      selectFn = selector;
    } else {
      selectFn = this.selectors[selector];
    }
    let prevValue = selectFn(this.state);
    listener(prevValue, prevValue, this);
    return this.subscribe((nextState) => {
      const nextValue = selectFn(nextState);
      if (!Object.is(prevValue, nextValue)) {
        const oldValue = prevValue;
        prevValue = nextValue;
        listener(nextValue, oldValue, this);
      }
    });
  }
};

// node_modules/@base-ui/utils/esm/useEnhancedClickHandler.js
var React15 = __toESM(require_react(), 1);
function useEnhancedClickHandler(handler) {
  const lastClickInteractionTypeRef = React15.useRef("");
  const handlePointerDown = React15.useCallback((event) => {
    if (event.defaultPrevented) {
      return;
    }
    lastClickInteractionTypeRef.current = event.pointerType;
    handler(event, event.pointerType);
  }, [handler]);
  const handleClick = React15.useCallback((event) => {
    if (event.detail === 0) {
      handler(event, "keyboard");
      return;
    }
    if ("pointerType" in event) {
      handler(event, event.pointerType);
    } else {
      handler(event, lastClickInteractionTypeRef.current);
    }
    lastClickInteractionTypeRef.current = "";
  }, [handler]);
  return {
    onClick: handleClick,
    onPointerDown: handlePointerDown
  };
}

// node_modules/@base-ui/utils/esm/inertValue.js
function inertValue(value) {
  if (isReactVersionAtLeast(19)) {
    return value;
  }
  return value ? "true" : void 0;
}

// node_modules/@base-ui/utils/esm/usePreviousValue.js
var React16 = __toESM(require_react(), 1);
function usePreviousValue(value) {
  const [state, setState] = React16.useState({
    current: value,
    previous: null
  });
  if (value !== state.current) {
    setState({
      current: value,
      previous: state.current
    });
  }
  return state.previous;
}

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/use-render/useRender.js
function useRender(params) {
  return useRenderElement(params.defaultTagName ?? "div", params, params);
}

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/build-module/text/text.mjs
var import_element = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE = "data-wp-hash";
function getRuntime() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument(targetDocument) {
  const runtime = getRuntime();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle(hash, css) {
  const runtime = getRuntime();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle("0c8601dd83", '@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._83ed8a8da5dd50ea__text{margin:0}._14437cfb77831647__heading-2xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-2xl,32px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-2xl,32px);--_gcd-p-line-height:var(--wpds-typography-line-height-2xl,40px);font-size:var(--wpds-typography-font-size-2xl,32px);line-height:var(--wpds-typography-line-height-2xl,40px)}._14437cfb77831647__heading-2xl,._3c78b7fa9b4072dd__heading-xl{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499)}._3c78b7fa9b4072dd__heading-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-md,24px)}.aa58f227716bcde2__heading-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-lg,15px)}.aa58f227716bcde2__heading-lg,.fc4da56d8dfe52c4__heading-md{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-sm,20px)}.fc4da56d8dfe52c4__heading-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px)}.a9b78c7c82e8dff7__heading-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-xs,11px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-xs,11px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-xs,16px);text-transform:uppercase}._305ff559e52180d5__body-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-xl,32px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-xl,32px)}._305ff559e52180d5__body-xl,.ca1aa3fc2029e958__body-lg{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}.ca1aa3fc2029e958__body-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-lg,15px);line-height:var(--wpds-typography-line-height-md,24px)}._131101940be12424__body-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px)}._0e8d87a42c1f75fa__body-sm,._131101940be12424__body-md{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}._0e8d87a42c1f75fa__body-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}');
}
var style_default = { "text": "_83ed8a8da5dd50ea__text", "heading-2xl": "_14437cfb77831647__heading-2xl", "heading-xl": "_3c78b7fa9b4072dd__heading-xl", "heading-lg": "aa58f227716bcde2__heading-lg", "heading-md": "fc4da56d8dfe52c4__heading-md", "heading-sm": "a9b78c7c82e8dff7__heading-sm", "body-xl": "_305ff559e52180d5__body-xl", "body-lg": "ca1aa3fc2029e958__body-lg", "body-md": "_131101940be12424__body-md", "body-sm": "_0e8d87a42c1f75fa__body-sm" };
if (typeof process === "undefined" || true) {
  registerStyle("1fb29d3a3c", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}");
}
var global_css_defense_default = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Text = (0, import_element.forwardRef)(function Text2({ variant = "body-md", render: render4, className, ...props }, ref) {
  const element = useRender({
    render: render4,
    defaultTagName: "span",
    ref,
    props: mergeProps(props, {
      className: clsx_default(
        style_default.text,
        global_css_defense_default.heading,
        global_css_defense_default.p,
        style_default[variant],
        className
      )
    })
  });
  return element;
});

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert]):not([inert] *)", "select:not([inert]):not([inert] *)", "textarea:not([inert]):not([inert] *)", "a[href]:not([inert]):not([inert] *)", "button:not([inert]):not([inert] *)", "[tabindex]:not(slot):not([inert]):not([inert] *)", "audio[controls]:not([inert]):not([inert] *)", "video[controls]:not([inert]):not([inert] *)", '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', "details>summary:first-of-type:not([inert]):not([inert] *)", "details:not([inert]):not([inert] *)"];
var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var _isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
  var inert = inertAtt === "" || inertAtt === "true";
  var result = inert || lookUp && node && // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  (typeof node.closest === "function" ? node.closest("[inert]") : _isInert(node.parentNode));
  return result;
};
var isContentEditable = function isContentEditable2(node) {
  var _node$getAttribute2;
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
  return attValue === "" || attValue === "true";
};
var getCandidates = function getCandidates2(el, includeContainer, filter) {
  if (_isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (_isInert(element, false)) {
      continue;
    }
    if (element.tagName === "SLOT") {
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = _getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }
      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
      var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};
var hasTabIndex = function hasTabIndex2(node) {
  return !isNaN(parseInt(node.getAttribute("tabindex"), 10));
};
var getTabIndex = function getTabIndex2(node) {
  if (!node) {
    throw new Error("No node provided");
  }
  if (node.tabIndex < 0) {
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};
var getSortOrderTabIndex = function getSortOrderTabIndex2(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables2(a2, b2) {
  return a2.tabIndex === b2.tabIndex ? a2.documentOrder - b2.documentOrder : a2.tabIndex - b2.tabIndex;
};
var isInput = function isInput2(node) {
  return node.tagName === "INPUT";
};
var isHiddenInput = function isHiddenInput2(node) {
  return isInput(node) && node.type === "hidden";
};
var isDetailsWithSummary = function isDetailsWithSummary2(node) {
  var r3 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
    return child.tagName === "SUMMARY";
  });
  return r3;
};
var getCheckedRadio = function getCheckedRadio2(nodes, form) {
  for (var i2 = 0; i2 < nodes.length; i2++) {
    if (nodes[i2].checked && nodes[i2].form === form) {
      return nodes[i2];
    }
  }
};
var isTabbableRadio = function isTabbableRadio2(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios2(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio2(node) {
  return isInput(node) && node.type === "radio";
};
var isNonTabbableRadio = function isNonTabbableRadio2(node) {
  return isRadio(node) && !isTabbableRadio(node);
};
var isNodeAttached = function isNodeAttached2(node) {
  var _nodeRoot;
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea2(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden2(node, _ref) {
  var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
  if (displayCheck === "full-native") {
    if ("checkVisibility" in node) {
      var visible = node.checkVisibility({
        // Checking opacity might be desirable for some use cases, but natively,
        // opacity zero elements _are_ focusable and tabbable.
        checkOpacity: false,
        opacityProperty: false,
        contentVisibilityAuto: true,
        visibilityProperty: true,
        // This is an alias for `visibilityProperty`. Contemporary browsers
        // support both. However, this alias has wider browser support (Chrome
        // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
        // we include it anyway.
        checkVisibilityCSS: true
      });
      return !visible;
    }
  }
  if (getComputedStyle(node).visibility === "hidden") {
    return true;
  }
  var isDirectSummary = matches.call(node, "details>summary:first-of-type");
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
    return true;
  }
  if (!displayCheck || displayCheck === "full" || // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  displayCheck === "full-native" || displayCheck === "legacy-full") {
    if (typeof getShadowRoot === "function") {
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          node = rootNode.host;
        } else {
          node = parentElement;
        }
      }
      node = originalNode;
    }
    if (isNodeAttached(node)) {
      return !node.getClientRects().length;
    }
    if (displayCheck !== "legacy-full") {
      return true;
    }
  } else if (displayCheck === "non-zero-area") {
    return isZeroArea(node);
  }
  return false;
};
var isDisabledFromFieldset = function isDisabledFromFieldset2(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    while (parentNode) {
      if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
        for (var i2 = 0; i2 < parentNode.children.length; i2++) {
          var child = parentNode.children.item(i2);
          if (child.tagName === "LEGEND") {
            return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
          }
        }
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable2(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable2(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isShadowRootTabbable = function isShadowRootTabbable2(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  return false;
};
var _sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function(item, i2) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? _sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i2,
        tabIndex: candidateTabindex,
        item,
        isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable2(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return _sortByOrder(candidates);
};

// node_modules/@wordpress/admin-ui/node_modules/@wordpress/ui/build-module/stack/stack.mjs
var import_element2 = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE2 = "data-wp-hash";
function getRuntime2() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument2(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash2(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE2}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE2) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle2(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime2();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash2(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE2, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument2(targetDocument) {
  const runtime = getRuntime2();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle2(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle2(hash, css) {
  const runtime = getRuntime2();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle2(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle2("b51ff41489", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._19ce0419607e1896__stack{display:flex}}");
}
var style_default2 = { "stack": "_19ce0419607e1896__stack" };
var gapTokens = {
  xs: "var(--wpds-dimension-gap-xs, 4px)",
  sm: "var(--wpds-dimension-gap-sm, 8px)",
  md: "var(--wpds-dimension-gap-md, 12px)",
  lg: "var(--wpds-dimension-gap-lg, 16px)",
  xl: "var(--wpds-dimension-gap-xl, 24px)",
  "2xl": "var(--wpds-dimension-gap-2xl, 32px)",
  "3xl": "var(--wpds-dimension-gap-3xl, 40px)"
};
var Stack = (0, import_element2.forwardRef)(function Stack2({ direction, gap, align, justify, wrap, render: render4, ...props }, ref) {
  const style = {
    gap: gap && gapTokens[gap],
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap
  };
  const element = useRender({
    render: render4,
    ref,
    props: mergeProps(props, { style, className: style_default2.stack })
  });
  return element;
});

// node_modules/@wordpress/admin-ui/build-module/navigable-region/index.mjs
var import_element3 = __toESM(require_element(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var NavigableRegion = (0, import_element3.forwardRef)(
  ({ children, className, ariaLabel, as: Tag = "div", ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      Tag,
      {
        ref,
        className: clsx_default("admin-ui-navigable-region", className),
        "aria-label": ariaLabel,
        role: "region",
        tabIndex: "-1",
        ...props,
        children
      }
    );
  }
);
NavigableRegion.displayName = "NavigableRegion";
var navigable_region_default = NavigableRegion;

// node_modules/@wordpress/admin-ui/build-module/page/sidebar-toggle-slot.mjs
var import_components = __toESM(require_components(), 1);
var { Fill: SidebarToggleFill, Slot: SidebarToggleSlot } = (0, import_components.createSlotFill)("SidebarToggle");

// node_modules/@wordpress/admin-ui/build-module/page/header.mjs
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var STYLE_HASH_ATTRIBUTE3 = "data-wp-hash";
function getRuntime3() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument3(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash3(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE3}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE3) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle3(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime3();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash3(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE3, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument3(targetDocument) {
  const runtime = getRuntime3();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle3(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle3(hash, css) {
  const runtime = getRuntime3();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle3(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle3("aa9c241ccc", "._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-bg-surface-neutral,#fcfcfc);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-bg-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:calc(var(--wpds-dimension-base, 4px)*8)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8113be94e7caf73c__header-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:calc(var(--wpds-dimension-base, 4px)*6);width:calc(var(--wpds-dimension-base, 4px)*6);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-fg-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}");
}
var style_default3 = { "page": "_956b6df0898efed0__page", "header": "_0625b55e82a0d93d__header", "header-content": "a43c44d5ae28b2e8__header-content", "header-actions": "b7cb5b9daf3a3b25__header-actions", "header-title": "_8113be94e7caf73c__header-title", "header-visual": "_9a776c7f70996f61__header-visual", "sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot", "header-subtitle": "_60fea2f6bf5319cd__header-subtitle", "content": "be5e57d029ec4036__content", "has-padding": "_128806d0b26e3a50__has-padding" };
function Header({
  headingLevel = 1,
  breadcrumbs,
  badges,
  visual,
  title,
  subTitle,
  actions,
  showSidebarToggle = true
}) {
  const HeadingTag = `h${headingLevel}`;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Stack, { direction: "column", className: style_default3.header, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      Stack,
      {
        className: style_default3["header-content"],
        direction: "row",
        gap: "sm",
        justify: "space-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Stack, { direction: "row", gap: "sm", align: "center", justify: "start", children: [
            showSidebarToggle && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              SidebarToggleSlot,
              {
                bubblesVirtually: true,
                className: style_default3["sidebar-toggle-slot"]
              }
            ),
            visual && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                className: style_default3["header-visual"],
                "aria-hidden": "true",
                children: visual
              }
            ),
            title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              Text,
              {
                className: style_default3["header-title"],
                render: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(HeadingTag, {}),
                variant: "heading-lg",
                children: title
              }
            ),
            breadcrumbs,
            badges
          ] }),
          actions && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Stack,
            {
              align: "center",
              className: style_default3["header-actions"],
              direction: "row",
              gap: "sm",
              children: actions
            }
          )
        ]
      }
    ),
    subTitle && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      Text,
      {
        render: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {}),
        variant: "body-md",
        className: style_default3["header-subtitle"],
        children: subTitle
      }
    )
  ] });
}

// node_modules/@wordpress/admin-ui/build-module/page/index.mjs
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var STYLE_HASH_ATTRIBUTE4 = "data-wp-hash";
function getRuntime4() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument4(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash4(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE4}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE4) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle4(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime4();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash4(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE4, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument4(targetDocument) {
  const runtime = getRuntime4();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle4(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle4(hash, css) {
  const runtime = getRuntime4();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle4(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle4("aa9c241ccc", "._956b6df0898efed0__page{text-wrap:pretty;background-color:var(--wpds-color-bg-surface-neutral,#fcfcfc);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-flow:column;height:100%;position:relative;z-index:1}._0625b55e82a0d93d__header{background:var(--wpds-color-bg-surface-neutral-strong,#fff);border-block-end:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);inset-block-start:0;padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px);position:sticky;z-index:1}.a43c44d5ae28b2e8__header-content{min-height:calc(var(--wpds-dimension-base, 4px)*8)}.b7cb5b9daf3a3b25__header-actions{flex-shrink:0}._8113be94e7caf73c__header-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}._9a776c7f70996f61__header-visual{display:grid;flex-shrink:0;grid-template-columns:1fr;grid-template-rows:1fr;height:calc(var(--wpds-dimension-base, 4px)*6);width:calc(var(--wpds-dimension-base, 4px)*6);>*{grid-column:1/-1;grid-row:1/-1;max-height:100%;max-width:100%}}.d5e0920cd15d35bc__sidebar-toggle-slot:empty{display:none}._60fea2f6bf5319cd__header-subtitle{color:var(--wpds-color-fg-content-neutral-weak,#707070);padding-block-end:var(--wpds-dimension-padding-xs,4px)}.be5e57d029ec4036__content{display:flex;flex-direction:column;flex-grow:1;overflow:auto;&._128806d0b26e3a50__has-padding{padding:var(--wpds-dimension-padding-lg,16px) var(--wpds-dimension-padding-2xl,24px)}}");
}
var style_default4 = { "page": "_956b6df0898efed0__page", "header": "_0625b55e82a0d93d__header", "header-content": "a43c44d5ae28b2e8__header-content", "header-actions": "b7cb5b9daf3a3b25__header-actions", "header-title": "_8113be94e7caf73c__header-title", "header-visual": "_9a776c7f70996f61__header-visual", "sidebar-toggle-slot": "d5e0920cd15d35bc__sidebar-toggle-slot", "header-subtitle": "_60fea2f6bf5319cd__header-subtitle", "content": "be5e57d029ec4036__content", "has-padding": "_128806d0b26e3a50__has-padding" };
function Page({
  headingLevel,
  breadcrumbs,
  badges,
  visual,
  title,
  subTitle,
  children,
  className,
  actions,
  ariaLabel,
  hasPadding = false,
  showSidebarToggle = true
}) {
  const classes = clsx_default(style_default4.page, className);
  const effectiveAriaLabel = ariaLabel ?? (typeof title === "string" ? title : "");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(navigable_region_default, { className: classes, ariaLabel: effectiveAriaLabel, children: [
    (title || breadcrumbs || badges || actions || visual) && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Header,
      {
        headingLevel,
        breadcrumbs,
        badges,
        visual,
        title,
        subTitle,
        actions,
        showSidebarToggle
      }
    ),
    hasPadding ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        className: clsx_default(
          style_default4.content,
          style_default4["has-padding"]
        ),
        children
      }
    ) : children
  ] });
}
Page.SidebarToggleFill = SidebarToggleFill;
var page_default = Page;

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/direction-context/DirectionContext.js
var React17 = __toESM(require_react(), 1);
var DirectionContext = /* @__PURE__ */ React17.createContext(void 0);
if (true) DirectionContext.displayName = "DirectionContext";
function useDirection() {
  const context = React17.useContext(DirectionContext);
  return context?.direction ?? "ltr";
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var React18 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js
function getStateAttributesProps2(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveClassName.js
function resolveClassName2(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveStyle.js
function resolveStyle2(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var EMPTY_PROPS2 = {};
function mergeProps2(a2, b2, c2, d2, e2) {
  if (!c2 && !d2 && !e2 && !a2) {
    return createInitialMergedProps2(b2);
  }
  let merged = createInitialMergedProps2(a2);
  if (b2) {
    merged = mergeInto2(merged, b2);
  }
  if (c2) {
    merged = mergeInto2(merged, c2);
  }
  if (d2) {
    merged = mergeInto2(merged, d2);
  }
  if (e2) {
    merged = mergeInto2(merged, e2);
  }
  return merged;
}
function mergePropsN2(props) {
  if (props.length === 0) {
    return EMPTY_PROPS2;
  }
  if (props.length === 1) {
    return createInitialMergedProps2(props[0]);
  }
  let merged = createInitialMergedProps2(props[0]);
  for (let i2 = 1; i2 < props.length; i2 += 1) {
    merged = mergeInto2(merged, props[i2]);
  }
  return merged;
}
function createInitialMergedProps2(inputProps) {
  if (isPropsGetter2(inputProps)) {
    return {
      ...resolvePropsGetter2(inputProps, EMPTY_PROPS2)
    };
  }
  return copyInitialProps2(inputProps);
}
function mergeInto2(merged, inputProps) {
  if (isPropsGetter2(inputProps)) {
    return resolvePropsGetter2(inputProps, merged);
  }
  return mutablyMergeInto2(merged, inputProps);
}
function copyInitialProps2(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler2(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler2(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto2(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames2(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler2(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers2(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler2(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter2(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter2(inputProps, previousProps) {
  if (isPropsGetter2(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS2;
}
function mergeEventHandlers2(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler2(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent2(event)) {
      const baseUIEvent = event;
      makeEventPreventable2(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler2(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent2(event)) {
      makeEventPreventable2(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable2(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames2(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent2(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var import_react4 = __toESM(require_react(), 1);
function useRenderElement2(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps2(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp2(element, renderProp, outProps, state);
}
function useRenderElementProps2(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping7,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName2(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle2(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps2(state, stateAttributesMapping7) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps2(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames2(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps2(props) {
  if (Array.isArray(props)) {
    return mergePropsN2(props);
  }
  return mergeProps2(void 0, props);
}
var REACT_LAZY_TYPE2 = /* @__PURE__ */ Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN2 = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN2 = /[a-z]/;
function evaluateRenderProp2(element, render4, props, state) {
  if (render4) {
    if (typeof render4 === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent2(render4);
      }
      return render4(props, state);
    }
    const mergedProps = mergeProps2(props, render4.props);
    mergedProps.ref = props.ref;
    let newElement = render4;
    if (newElement?.$$typeof === REACT_LAZY_TYPE2) {
      const children = React18.Children.toArray(render4);
      newElement = children[0];
    }
    if (true) {
      if (!/* @__PURE__ */ React18.isValidElement(newElement)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React18.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag2(element, props);
    }
  }
  throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
}
function warnIfRenderPropLooksLikeComponent2(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN2.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN2.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag2(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ (0, import_react4.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ (0, import_react4.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React18.createElement(Tag, props);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/reason-parts.js
var reason_parts_exports = {};
__export(reason_parts_exports, {
  cancelOpen: () => cancelOpen,
  chipRemovePress: () => chipRemovePress,
  clearPress: () => clearPress,
  closePress: () => closePress,
  closeWatcher: () => closeWatcher,
  decrementPress: () => decrementPress,
  disabled: () => disabled,
  drag: () => drag,
  escapeKey: () => escapeKey,
  focusOut: () => focusOut,
  imperativeAction: () => imperativeAction,
  incrementPress: () => incrementPress,
  inputBlur: () => inputBlur,
  inputChange: () => inputChange,
  inputClear: () => inputClear,
  inputPaste: () => inputPaste,
  inputPress: () => inputPress,
  itemPress: () => itemPress,
  keyboard: () => keyboard,
  linkPress: () => linkPress,
  listNavigation: () => listNavigation,
  none: () => none,
  outsidePress: () => outsidePress,
  pointer: () => pointer,
  scrub: () => scrub,
  siblingOpen: () => siblingOpen,
  swipe: () => swipe,
  trackPress: () => trackPress,
  triggerFocus: () => triggerFocus,
  triggerHover: () => triggerHover,
  triggerPress: () => triggerPress,
  wheel: () => wheel,
  windowResize: () => windowResize
});
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var triggerFocus = "trigger-focus";
var outsidePress = "outside-press";
var itemPress = "item-press";
var closePress = "close-press";
var linkPress = "link-press";
var clearPress = "clear-press";
var chipRemovePress = "chip-remove-press";
var trackPress = "track-press";
var incrementPress = "increment-press";
var decrementPress = "decrement-press";
var inputChange = "input-change";
var inputClear = "input-clear";
var inputBlur = "input-blur";
var inputPaste = "input-paste";
var inputPress = "input-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var closeWatcher = "close-watcher";
var listNavigation = "list-navigation";
var keyboard = "keyboard";
var pointer = "pointer";
var drag = "drag";
var wheel = "wheel";
var scrub = "scrub";
var cancelOpen = "cancel-open";
var siblingOpen = "sibling-open";
var disabled = "disabled";
var imperativeAction = "imperative-action";
var swipe = "swipe";
var windowResize = "window-resize";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js
function createChangeEventDetails(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useBaseUiId.js
function useBaseUiId(idOverride) {
  return useId(idOverride, "base-ui");
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
var ReactDOM = __toESM(require_react_dom(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveRef.js
function resolveRef(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js
var TransitionStatusDataAttributes = /* @__PURE__ */ (function(TransitionStatusDataAttributes3) {
  TransitionStatusDataAttributes3["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes3["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes3;
})({});
var STARTING_HOOK = {
  [TransitionStatusDataAttributes.startingStyle]: ""
};
var ENDING_HOOK = {
  [TransitionStatusDataAttributes.endingStyle]: ""
};
var transitionStatusMapping = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK;
    }
    if (value === "ending") {
      return ENDING_HOOK;
    }
    return null;
  }
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      ReactDOM.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }).catch(() => {
        if (treatAbortedAsFinished) {
          if (!signal?.aborted) {
            done();
          }
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
        }
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js
var React19 = __toESM(require_react(), 1);
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = React19.useState(open && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = React19.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return void 0;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/use-button/useButton.js
var React22 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/composite/root/CompositeRootContext.js
var React20 = __toESM(require_react(), 1);
var CompositeRootContext = /* @__PURE__ */ React20.createContext(void 0);
if (true) CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
  const context = React20.useContext(CompositeRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
  }
  return context;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
var React21 = __toESM(require_react(), 1);
function useFocusableWhenDisabled(parameters) {
  const {
    focusableWhenDisabled,
    disabled: disabled3,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React21.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled3 && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled3) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled3) {
      additionalProps["aria-disabled"] = disabled3;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled3;
    }
    return additionalProps;
  }, [composite, disabled3, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/use-button/useButton.js
function useButton(parameters = {}) {
  const {
    disabled: disabled3 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React22.useRef(null);
  const compositeRootContext = useCompositeRootContext(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled({
    focusableWhenDisabled,
    disabled: disabled3,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (true) {
    React22.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message2 = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
          error(`${message2}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message2 = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
        error(`${message2}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React22.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement(element)) {
      return;
    }
    if (isCompositeItem && disabled3 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled3, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React22.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    const type = isNativeButton ? "button" : void 0;
    return mergeProps2({
      type,
      onClick(event) {
        if (disabled3) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled3) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled3) {
          return;
        }
        makeEventPreventable2(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (isLink || isNativeButton && isButton) {
            currentTarget.click();
            event.preventBaseUIHandler();
          } else if (shouldClick) {
            externalOnClick?.(event);
            event.preventBaseUIHandler();
          }
          return;
        }
        if (shouldClick) {
          if (!isNativeButton && (isSpaceKey || isEnterKey)) {
            event.preventDefault();
          }
          if (!isNativeButton && isEnterKey) {
            externalOnClick?.(event);
          }
        }
      },
      onKeyUp(event) {
        if (disabled3) {
          return;
        }
        makeEventPreventable2(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") {
          externalOnClick?.(event);
        }
      },
      onPointerDown(event) {
        if (disabled3) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, !isNativeButton ? {
      role: "button"
    } : void 0, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled3, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
  return Boolean(elem?.tagName === "A" && elem?.href);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js
var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/shadowDom.js
function activeElement(doc) {
  let element = doc.activeElement;
  while (element?.shadowRoot?.activeElement != null) {
    element = element.shadowRoot.activeElement;
  }
  return element;
}
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode?.();
  if (parent.contains(child)) {
    return true;
  }
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js
function isTargetInsideEnabledTrigger(target, triggerElements) {
  if (!isElement(target)) {
    return false;
  }
  const targetElement = target;
  if (triggerElements.hasElement(targetElement)) {
    return !targetElement.hasAttribute("data-trigger-disabled");
  }
  for (const [, trigger] of triggerElements.entries()) {
    if (contains(trigger, targetElement)) {
      return !trigger.hasAttribute("data-trigger-disabled");
    }
  }
  return false;
}
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const eventAgain = event;
  return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
  return element.matches("html,body");
}
function isTypeableElement(element) {
  return isHTMLElement(element) && element.matches(TYPEABLE_SELECTOR);
}
function isInteractiveElement(element) {
  return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
}
function isTypeableCombobox(element) {
  if (!element) {
    return false;
  }
  return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function matchesFocusVisible(element) {
  if (!element || isJSDOM) {
    return true;
  }
  try {
    return element.matches(":focus-visible");
  } catch (_e) {
    return true;
  }
}
function getFloatingFocusElement(floatingElement) {
  if (!floatingElement) {
    return null;
  }
  return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) || floatingElement;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/nodes.js
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
  const directChildren = nodes.filter((node) => node.parentId === id);
  return directChildren.flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getNodeAncestors(nodes, id) {
  let allAncestors = [];
  let currentParentId = nodes.find((node) => node.id === id)?.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode?.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
function isReactEvent(event) {
  return "nativeEvent" in event;
}
function isVirtualClick(event) {
  if (event.pointerType === "" && event.isTrusted) {
    return true;
  }
  if (isAndroid && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
  if (isJSDOM) {
    return false;
  }
  return !isAndroid && event.width === 0 && event.height === 0 || isAndroid && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
function isClickLikeEvent(event) {
  const type = event.type;
  return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js
function isHiddenByStyles(styles) {
  return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle2(element) : null) {
  if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
    return false;
  }
  if (typeof element.checkVisibility === "function") {
    return element.checkVisibility();
  }
  return styles.display !== "none" && styles.display !== "contents";
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/tabbable.js
var CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
  const assignedSlot = element.assignedSlot;
  if (assignedSlot) {
    return assignedSlot;
  }
  if (element.parentElement) {
    return element.parentElement;
  }
  const rootNode = element.getRootNode();
  return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
  for (const child of Array.from(details.children)) {
    if (getNodeName(child) === "summary") {
      return child;
    }
  }
  return null;
}
function isWithinOpenDetailsSummary(element, details) {
  const summary = getDetailsSummary(details);
  return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
  const nodeName = element ? getNodeName(element) : "";
  return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
  if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) {
    return false;
  }
  for (let current = element; current; current = getParentElement(current)) {
    const isAncestor = current !== element;
    const isSlot = getNodeName(current) === "slot";
    if (current.hasAttribute("inert")) {
      return false;
    }
    if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
      return false;
    }
  }
  return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
  const styles = getComputedStyle2(element);
  if (!isAncestor) {
    return isElementVisible(element, styles);
  }
  return styles.display !== "none";
}
function getTabIndex3(element) {
  const tabIndex = element.tabIndex;
  if (tabIndex < 0) {
    const nodeName = getNodeName(element);
    if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) {
      return 0;
    }
  }
  return tabIndex;
}
function getNamedRadioInput(element) {
  if (getNodeName(element) !== "input") {
    return null;
  }
  const input = element;
  return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio3(element, candidates) {
  const input = getNamedRadioInput(element);
  if (!input) {
    return true;
  }
  const checkedRadio = candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form && radio.checked;
  });
  if (checkedRadio) {
    return checkedRadio === input;
  }
  return candidates.find((candidate) => {
    const radio = getNamedRadioInput(candidate);
    return radio?.name === input.name && radio.form === input.form;
  }) === input;
}
function getComposedChildren(container) {
  if (isHTMLElement(container) && getNodeName(container) === "slot") {
    const assignedElements = container.assignedElements({
      flatten: true
    });
    if (assignedElements.length > 0) {
      return assignedElements;
    }
  }
  if (isHTMLElement(container) && container.shadowRoot) {
    return Array.from(container.shadowRoot.children);
  }
  return Array.from(container.children);
}
function appendCandidates(container, list) {
  getComposedChildren(container).forEach((child) => {
    if (isFocusableCandidate(child)) {
      list.push(child);
    }
    appendCandidates(child, list);
  });
}
function appendMatchingElements(container, selector, list) {
  getComposedChildren(container).forEach((child) => {
    if (isHTMLElement(child) && child.matches(selector)) {
      list.push(child);
    }
    appendMatchingElements(child, selector, list);
  });
}
function isTabbable(element) {
  return isFocusableElement(element) && getTabIndex3(element) >= 0;
}
function focusable(container) {
  const candidates = [];
  appendCandidates(container, candidates);
  return candidates.filter(isFocusableElement);
}
function tabbable3(container) {
  const candidates = focusable(container);
  return candidates.filter((element) => getTabIndex3(element) >= 0 && isTabbableRadio3(element, candidates));
}
function getTabbableIn(container, dir) {
  const list = tabbable3(container);
  const len = list.length;
  if (len === 0) {
    return void 0;
  }
  const active = activeElement(ownerDocument(container));
  const index2 = list.indexOf(active);
  const nextIndex = index2 === -1 ? dir === 1 ? 0 : len - 1 : index2 + dir;
  return list[nextIndex];
}
function getNextTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
  return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function getTabbableNearElement(referenceElement, dir) {
  if (!referenceElement) {
    return null;
  }
  const list = tabbable3(ownerDocument(referenceElement).body);
  const elementCount = list.length;
  if (elementCount === 0) {
    return null;
  }
  const index2 = list.indexOf(referenceElement);
  if (index2 === -1) {
    return null;
  }
  const nextIndex = (index2 + dir + elementCount) % elementCount;
  return list[nextIndex];
}
function getTabbableAfterElement(referenceElement) {
  return getTabbableNearElement(referenceElement, 1);
}
function getTabbableBeforeElement(referenceElement) {
  return getTabbableNearElement(referenceElement, -1);
}
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
  const tabbableElements = tabbable3(container);
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
function enableFocusInside(container) {
  const elements = [];
  appendMatchingElements(container, "[data-tabindex]", elements);
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/composite/composite.js
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var HOME = "Home";
var END = "End";
var HORIZONTAL_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT, ARROW_RIGHT]);
var VERTICAL_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN]);
var ARROW_KEYS = /* @__PURE__ */ new Set([...HORIZONTAL_KEYS, ...VERTICAL_KEYS]);
var ALL_KEYS = /* @__PURE__ */ new Set([...ARROW_KEYS, HOME, END]);
var COMPOSITE_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN, ARROW_LEFT, ARROW_RIGHT, HOME, END]);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js
var React23 = __toESM(require_react(), 1);
function useOpenChangeComplete(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
  React23.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingDelayGroup.js
var React24 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverShared.js
function resolveValue(value, pointerType) {
  if (pointerType != null && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "function") {
    return value();
  }
  return value;
}
function getDelay(value, prop, pointerType) {
  const result = resolveValue(value, pointerType);
  if (typeof result === "number") {
    return result;
  }
  return result?.[prop];
}
function getRestMs(value) {
  if (typeof value === "function") {
    return value();
  }
  return value;
}
function isClickLikeOpenEvent(openEventType, interactedInside) {
  return interactedInside || openEventType === "click" || openEventType === "mousedown";
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingDelayGroup.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var FloatingDelayGroupContext = /* @__PURE__ */ React24.createContext({
  hasProvider: false,
  timeoutMs: 0,
  delayRef: {
    current: 0
  },
  initialDelayRef: {
    current: 0
  },
  timeout: new Timeout(),
  currentIdRef: {
    current: null
  },
  currentContextRef: {
    current: null
  }
});
if (true) FloatingDelayGroupContext.displayName = "FloatingDelayGroupContext";
function FloatingDelayGroup(props) {
  const {
    children,
    delay,
    timeoutMs = 0
  } = props;
  const delayRef = React24.useRef(delay);
  const initialDelayRef = React24.useRef(delay);
  const currentIdRef = React24.useRef(null);
  const currentContextRef = React24.useRef(null);
  const timeout = useTimeout();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FloatingDelayGroupContext.Provider, {
    value: React24.useMemo(() => ({
      hasProvider: true,
      delayRef,
      initialDelayRef,
      currentIdRef,
      timeoutMs,
      currentContextRef,
      timeout
    }), [timeoutMs, timeout]),
    children
  });
}
function useDelayGroup(context, options = {
  open: false
}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const floatingId = store.useState("floatingId");
  const {
    open
  } = options;
  const groupContext = React24.useContext(FloatingDelayGroupContext);
  const {
    currentIdRef,
    delayRef,
    timeoutMs,
    initialDelayRef,
    currentContextRef,
    hasProvider,
    timeout
  } = groupContext;
  const [isInstantPhase, setIsInstantPhase] = React24.useState(false);
  useIsoLayoutEffect(() => {
    function unset() {
      setIsInstantPhase(false);
      currentContextRef.current?.setIsInstantPhase(false);
      currentIdRef.current = null;
      currentContextRef.current = null;
      delayRef.current = initialDelayRef.current;
    }
    if (!currentIdRef.current) {
      return void 0;
    }
    if (!open && currentIdRef.current === floatingId) {
      setIsInstantPhase(false);
      if (timeoutMs) {
        const closingId = floatingId;
        timeout.start(timeoutMs, () => {
          if (store.select("open") || currentIdRef.current && currentIdRef.current !== closingId) {
            return;
          }
          unset();
        });
        return () => {
          timeout.clear();
        };
      }
      unset();
    }
    return void 0;
  }, [open, floatingId, currentIdRef, delayRef, timeoutMs, initialDelayRef, currentContextRef, timeout, store]);
  useIsoLayoutEffect(() => {
    if (!open) {
      return;
    }
    const prevContext = currentContextRef.current;
    const prevId = currentIdRef.current;
    timeout.clear();
    currentContextRef.current = {
      onOpenChange: store.setOpen,
      setIsInstantPhase
    };
    currentIdRef.current = floatingId;
    delayRef.current = {
      open: 0,
      close: getDelay(initialDelayRef.current, "close")
    };
    if (prevId !== null && prevId !== floatingId) {
      setIsInstantPhase(true);
      prevContext?.setIsInstantPhase(true);
      prevContext?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.none));
    } else {
      setIsInstantPhase(false);
      prevContext?.setIsInstantPhase(false);
    }
  }, [open, floatingId, store, currentIdRef, delayRef, timeoutMs, initialDelayRef, currentContextRef, timeout]);
  useIsoLayoutEffect(() => {
    return () => {
      currentContextRef.current = null;
    };
  }, [currentContextRef]);
  return React24.useMemo(() => ({
    hasProvider,
    delayRef,
    isInstantPhase
  }), [hasProvider, delayRef, isInstantPhase]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js
var React28 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/FocusGuard.js
var React25 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var FocusGuard = /* @__PURE__ */ React25.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React25.useState();
  useIsoLayoutEffect(() => {
    if (isSafari) {
      setRole("button");
    }
  }, []);
  const restProps = {
    tabIndex: 0,
    // Role is only for VoiceOver
    role
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {
    ...props,
    ref,
    style: visuallyHidden,
    "aria-hidden": role ? void 0 : true,
    ...restProps,
    "data-base-ui-focus-guard": ""
  });
});
if (true) FocusGuard.displayName = "FocusGuard";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/createAttribute.js
function createAttribute(name) {
  return `data-base-ui-${name}`;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/enqueueFocus.js
var rafId = 0;
function enqueueFocus(el, options = {}) {
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  if (cancelPrevious) {
    cancelAnimationFrame(rafId);
  }
  const exec = () => el?.focus({
    preventScroll
  });
  if (sync) {
    exec();
    return NOOP;
  }
  const currentRafId = requestAnimationFrame(exec);
  rafId = currentRafId;
  return () => {
    if (rafId === currentRafId) {
      cancelAnimationFrame(currentRafId);
      rafId = 0;
    }
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/markOthers.js
var counters = {
  inert: /* @__PURE__ */ new WeakMap(),
  "aria-hidden": /* @__PURE__ */ new WeakMap()
};
var markerName = "data-base-ui-inert";
var uncontrolledElementsSets = {
  inert: /* @__PURE__ */ new WeakSet(),
  "aria-hidden": /* @__PURE__ */ new WeakSet()
};
var markerCounterMap = /* @__PURE__ */ new WeakMap();
var lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
  return uncontrolledElementsSets[controlAttribute];
}
function unwrapHost(node) {
  if (!node) {
    return null;
  }
  return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
var correctElements = (parent, targets) => targets.map((target) => {
  if (parent.contains(target)) {
    return target;
  }
  const correctedTarget = unwrapHost(target);
  if (parent.contains(correctedTarget)) {
    return correctedTarget;
  }
  return null;
}).filter((x2) => x2 != null);
var buildKeepSet = (targets) => {
  const keep = /* @__PURE__ */ new Set();
  targets.forEach((target) => {
    let node = target;
    while (node && !keep.has(node)) {
      keep.add(node);
      node = node.parentNode;
    }
  });
  return keep;
};
var collectOutsideElements = (root, keepElements, stopElements) => {
  const outside = [];
  const walk = (parent) => {
    if (!parent || stopElements.has(parent)) {
      return;
    }
    Array.from(parent.children).forEach((node) => {
      if (getNodeName(node) === "script") {
        return;
      }
      if (keepElements.has(node)) {
        walk(node);
      } else {
        outside.push(node);
      }
    });
  };
  walk(root);
  return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, {
  mark = true,
  markerIgnoreElements = []
}) {
  const controlAttribute = inert ? "inert" : ariaHidden ? "aria-hidden" : null;
  let counterMap = null;
  let uncontrolledElementsSet = null;
  const avoidElements = correctElements(body, uncorrectedAvoidElements);
  const markerIgnoreTargets = mark ? correctElements(body, markerIgnoreElements) : [];
  const markerIgnoreSet = new Set(markerIgnoreTargets);
  const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)).filter((target) => !markerIgnoreSet.has(target)) : [];
  const hiddenElements = [];
  const markedElements = [];
  if (controlAttribute) {
    const map = counters[controlAttribute];
    const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
    uncontrolledElementsSet = currentUncontrolledElementsSet;
    counterMap = map;
    const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
    const controlElements = avoidElements.concat(ariaLiveElements);
    const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
    controlTargets.forEach((node) => {
      const attr2 = node.getAttribute(controlAttribute);
      const alreadyHidden = attr2 !== null && attr2 !== "false";
      const counterValue = (map.get(node) || 0) + 1;
      map.set(node, counterValue);
      hiddenElements.push(node);
      if (counterValue === 1 && alreadyHidden) {
        currentUncontrolledElementsSet.add(node);
      }
      if (!alreadyHidden) {
        node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
      }
    });
  }
  if (mark) {
    markerTargets.forEach((node) => {
      const markerValue = (markerCounterMap.get(node) || 0) + 1;
      markerCounterMap.set(node, markerValue);
      markedElements.push(node);
      if (markerValue === 1) {
        node.setAttribute(markerName, "");
      }
    });
  }
  lockCount += 1;
  return () => {
    if (counterMap) {
      hiddenElements.forEach((element) => {
        const currentCounterValue = counterMap.get(element) || 0;
        const counterValue = currentCounterValue - 1;
        counterMap.set(element, counterValue);
        if (!counterValue) {
          if (!uncontrolledElementsSet?.has(element) && controlAttribute) {
            element.removeAttribute(controlAttribute);
          }
          uncontrolledElementsSet?.delete(element);
        }
      });
    }
    if (mark) {
      markedElements.forEach((element) => {
        const markerValue = (markerCounterMap.get(element) || 0) - 1;
        markerCounterMap.set(element, markerValue);
        if (!markerValue) {
          element.removeAttribute(markerName);
        }
      });
    }
    lockCount -= 1;
    if (!lockCount) {
      counters.inert = /* @__PURE__ */ new WeakMap();
      counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
      uncontrolledElementsSets.inert = /* @__PURE__ */ new WeakSet();
      uncontrolledElementsSets["aria-hidden"] = /* @__PURE__ */ new WeakSet();
      markerCounterMap = /* @__PURE__ */ new WeakMap();
    }
  };
}
function markOthers(avoidElements, options = {}) {
  const {
    ariaHidden = false,
    inert = false,
    mark = true,
    markerIgnoreElements = []
  } = options;
  const body = ownerDocument(avoidElements[0]).body;
  return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, {
    mark,
    markerIgnoreElements
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js
var React26 = __toESM(require_react(), 1);
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/constants.js
var PATIENT_CLICK_THRESHOLD = 500;
var DISABLED_TRANSITIONS_STYLE = {
  style: {
    transition: "none"
  }
};
var CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
var BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
var LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
var POPUP_COLLISION_AVOIDANCE = {
  fallbackAxisSide: "end"
};
var ownerVisuallyHidden = {
  clipPath: "inset(50%)",
  position: "fixed",
  top: 0,
  left: 0
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var PortalContext = /* @__PURE__ */ React26.createContext(null);
if (true) PortalContext.displayName = "PortalContext";
var usePortalContext = () => React26.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
  const {
    ref,
    container: containerProp,
    componentProps = EMPTY_OBJECT,
    elementProps
  } = props;
  const uniqueId = useId();
  const portalContext = usePortalContext();
  const parentPortalNode = portalContext?.portalNode;
  const [containerElement, setContainerElement] = React26.useState(null);
  const [portalNode, setPortalNode] = React26.useState(null);
  const setPortalNodeRef = useStableCallback((node) => {
    if (node !== null) {
      setPortalNode(node);
    }
  });
  const containerRef = React26.useRef(null);
  useIsoLayoutEffect(() => {
    if (containerProp === null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (uniqueId == null) {
      return;
    }
    const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
    if (resolvedContainer == null) {
      if (containerRef.current) {
        containerRef.current = null;
        setPortalNode(null);
        setContainerElement(null);
      }
      return;
    }
    if (containerRef.current !== resolvedContainer) {
      containerRef.current = resolvedContainer;
      setPortalNode(null);
      setContainerElement(resolvedContainer);
    }
  }, [containerProp, parentPortalNode, uniqueId]);
  const portalElement = useRenderElement2("div", componentProps, {
    ref: [ref, setPortalNodeRef],
    props: [{
      id: uniqueId,
      [attr]: ""
    }, elementProps]
  });
  const portalSubtree = containerElement && portalElement ? /* @__PURE__ */ ReactDOM2.createPortal(portalElement, containerElement) : null;
  return {
    portalNode,
    portalSubtree
  };
}
var FloatingPortal = /* @__PURE__ */ React26.forwardRef(function FloatingPortal2(componentProps, forwardedRef) {
  const {
    children,
    container,
    className,
    render: render4,
    renderGuards,
    style,
    ...elementProps
  } = componentProps;
  const {
    portalNode,
    portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  const beforeOutsideRef = React26.useRef(null);
  const afterOutsideRef = React26.useRef(null);
  const beforeInsideRef = React26.useRef(null);
  const afterInsideRef = React26.useRef(null);
  const [focusManagerState, setFocusManagerState] = React26.useState(null);
  const focusInsideDisabledRef = React26.useRef(false);
  const modal = focusManagerState?.modal;
  const open = focusManagerState?.open;
  const shouldRenderGuards = typeof renderGuards === "boolean" ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
  React26.useEffect(() => {
    if (!portalNode || modal) {
      return void 0;
    }
    function onFocus(event) {
      if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
        if (event.type === "focusin") {
          if (focusInsideDisabledRef.current) {
            enableFocusInside(portalNode);
            focusInsideDisabledRef.current = false;
          }
        } else {
          disableFocusInside(portalNode);
          focusInsideDisabledRef.current = true;
        }
      }
    }
    return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
  }, [portalNode, modal]);
  React26.useEffect(() => {
    if (!portalNode || open !== false) {
      return;
    }
    enableFocusInside(portalNode);
    focusInsideDisabledRef.current = false;
  }, [open, portalNode]);
  const portalContextValue = React26.useMemo(() => ({
    beforeOutsideRef,
    afterOutsideRef,
    beforeInsideRef,
    afterInsideRef,
    portalNode,
    setFocusManagerState
  }), [portalNode]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(React26.Fragment, {
    children: [portalSubtree, /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(PortalContext.Provider, {
      value: portalContextValue,
      children: [shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FocusGuard, {
        "data-type": "outside",
        ref: beforeOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            beforeInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          }
        }
      }), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {
        "aria-owns": portalNode.id,
        style: ownerVisuallyHidden
      }), portalNode && /* @__PURE__ */ ReactDOM2.createPortal(children, portalNode), shouldRenderGuards && portalNode && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FocusGuard, {
        "data-type": "outside",
        ref: afterOutsideRef,
        onFocus: (event) => {
          if (isOutsideEvent(event, portalNode)) {
            afterInsideRef.current?.focus();
          } else {
            const domReference = focusManagerState ? focusManagerState.domReference : null;
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
            if (focusManagerState?.closeOnFocusOut) {
              focusManagerState?.onOpenChange(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent));
            }
          }
        }
      })]
    })]
  });
});
if (true) FloatingPortal.displayName = "FloatingPortal";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js
var React27 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/createEventEmitter.js
function createEventEmitter() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      map.get(event)?.forEach((listener) => listener(data));
    },
    on(event, listener) {
      if (!map.has(event)) {
        map.set(event, /* @__PURE__ */ new Set());
      }
      map.get(event).add(listener);
    },
    off(event, listener) {
      map.get(event)?.delete(listener);
    }
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTreeStore.js
var FloatingTreeStore = class {
  nodesRef = {
    current: []
  };
  events = createEventEmitter();
  addNode(node) {
    this.nodesRef.current.push(node);
  }
  removeNode(node) {
    const index2 = this.nodesRef.current.findIndex((n2) => n2 === node);
    if (index2 !== -1) {
      this.nodesRef.current.splice(index2, 1);
    }
  }
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var FloatingNodeContext = /* @__PURE__ */ React27.createContext(null);
if (true) FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /* @__PURE__ */ React27.createContext(null);
if (true) FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () => React27.useContext(FloatingNodeContext)?.id || null;
var useFloatingTree = (externalTree) => {
  const contextTree = React27.useContext(FloatingTreeContext);
  return externalTree ?? contextTree;
};
function useFloatingNodeId(externalTree) {
  const id = useId();
  const tree = useFloatingTree(externalTree);
  const parentId = useFloatingParentNodeId();
  useIsoLayoutEffect(() => {
    if (!id) {
      return void 0;
    }
    const node = {
      id,
      parentId
    };
    tree?.addNode(node);
    return () => {
      tree?.removeNode(node);
    };
  }, [tree, id, parentId]);
  return id;
}
function FloatingNode(props) {
  const {
    children,
    id
  } = props;
  const parentId = useFloatingParentNodeId();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FloatingNodeContext.Provider, {
    value: React27.useMemo(() => ({
      id,
      parentId
    }), [id, parentId]),
    children
  });
}
function FloatingTree(props) {
  const {
    children,
    externalTree
  } = props;
  const tree = useRefWithInit(() => externalTree ?? new FloatingTreeStore()).current;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(FloatingTreeContext.Provider, {
    value: tree,
    children
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function getEventType(event, lastInteractionType) {
  const win = getWindow(getTarget(event));
  if (event instanceof win.KeyboardEvent) {
    return "keyboard";
  }
  if (event instanceof win.FocusEvent) {
    return lastInteractionType || "keyboard";
  }
  if ("pointerType" in event) {
    return event.pointerType || "keyboard";
  }
  if ("touches" in event) {
    return "touch";
  }
  if (event instanceof win.MouseEvent) {
    return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
  }
  return "";
}
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
  previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
    return entry.deref()?.isConnected;
  });
}
function addPreviouslyFocusedElement(element) {
  clearDisconnectedPreviouslyFocusedElements();
  if (element && getNodeName(element) !== "body") {
    previouslyFocusedElements.push(new WeakRef(element));
    if (previouslyFocusedElements.length > LIST_LIMIT) {
      previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
    }
  }
}
function getPreviouslyFocusedElement() {
  clearDisconnectedPreviouslyFocusedElements();
  return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
  if (!container) {
    return null;
  }
  if (isTabbable(container)) {
    return container;
  }
  return tabbable3(container)[0] || container;
}
function handleTabIndex(floatingFocusElement, orderRef) {
  if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) {
    return;
  }
  if (!orderRef.current.includes("floating") && !floatingFocusElement.getAttribute("role")?.includes("dialog")) {
    return;
  }
  const focusableElements = focusable(floatingFocusElement);
  const tabbableContent = focusableElements.filter((element) => {
    const dataTabIndex = element.getAttribute("data-tabindex") || "";
    return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
  });
  const tabIndex = floatingFocusElement.getAttribute("tabindex");
  if (orderRef.current.includes("floating") || tabbableContent.length === 0) {
    if (tabIndex !== "0") {
      floatingFocusElement.setAttribute("tabindex", "0");
    }
  } else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
    floatingFocusElement.setAttribute("tabindex", "-1");
    floatingFocusElement.setAttribute("data-tabindex", "-1");
  }
}
function FloatingFocusManager(props) {
  const {
    context,
    children,
    disabled: disabled3 = false,
    initialFocus = true,
    returnFocus = true,
    restoreFocus = false,
    modal = true,
    closeOnFocusOut = true,
    openInteractionType = "",
    nextFocusableElement,
    previousFocusableElement,
    beforeContentFocusGuardRef,
    externalTree,
    getInsideElements
  } = props;
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const domReference = store.useState("domReferenceElement");
  const floating = store.useState("floatingElement");
  const {
    events,
    dataRef
  } = store.context;
  const getNodeId = useStableCallback(() => dataRef.current.floatingContext?.nodeId);
  const ignoreInitialFocus = initialFocus === false;
  const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
  const orderRef = React28.useRef(["content"]);
  const initialFocusRef = useValueAsRef(initialFocus);
  const returnFocusRef = useValueAsRef(returnFocus);
  const openInteractionTypeRef = useValueAsRef(openInteractionType);
  const tree = useFloatingTree(externalTree);
  const portalContext = usePortalContext();
  const preventReturnFocusRef = React28.useRef(false);
  const isPointerDownRef = React28.useRef(false);
  const pointerDownOutsideRef = React28.useRef(false);
  const lastFocusedTabbableRef = React28.useRef(null);
  const closeTypeRef = React28.useRef("");
  const lastInteractionTypeRef = React28.useRef("");
  const beforeGuardRef = React28.useRef(null);
  const afterGuardRef = React28.useRef(null);
  const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
  const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext?.afterInsideRef);
  const blurTimeout = useTimeout();
  const pointerDownTimeout = useTimeout();
  const restoreFocusFrame = useAnimationFrame();
  const isInsidePortal = portalContext != null;
  const floatingFocusElement = getFloatingFocusElement(floating);
  const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
    return container ? tabbable3(container) : [];
  });
  const getResolvedInsideElements = useStableCallback(() => getInsideElements?.().filter((element) => element != null) ?? []);
  React28.useEffect(() => {
    if (disabled3 || !modal) {
      return void 0;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
          stopEvent(event);
        }
      }
    }
    const doc = ownerDocument(floatingFocusElement);
    return addEventListener(doc, "keydown", onKeyDown);
  }, [disabled3, domReference, floatingFocusElement, modal, orderRef, isUntrappedTypeableCombobox, getTabbableContent]);
  React28.useEffect(() => {
    if (disabled3 || !open) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function clearPointerDownOutside() {
      pointerDownOutsideRef.current = false;
    }
    function onPointerDown(event) {
      const target = getTarget(event);
      const insideElements = getResolvedInsideElements();
      const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element) => element === target || contains(element, target));
      pointerDownOutsideRef.current = !pointerTargetInside;
      lastInteractionTypeRef.current = event.pointerType || "keyboard";
      if (target?.closest(`[${CLICK_TRIGGER_IDENTIFIER}]`)) {
        isPointerDownRef.current = true;
      }
    }
    function onKeyDown() {
      lastInteractionTypeRef.current = "keyboard";
    }
    return mergeCleanups(addEventListener(doc, "pointerdown", onPointerDown, true), addEventListener(doc, "pointerup", clearPointerDownOutside, true), addEventListener(doc, "pointercancel", clearPointerDownOutside, true), addEventListener(doc, "keydown", onKeyDown, true));
  }, [disabled3, floating, domReference, floatingFocusElement, open, portalContext, getResolvedInsideElements]);
  React28.useEffect(() => {
    if (disabled3 || !closeOnFocusOut) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    function handlePointerDown() {
      isPointerDownRef.current = true;
      pointerDownTimeout.start(0, () => {
        isPointerDownRef.current = false;
      });
    }
    function handleFocusIn(event) {
      const target = getTarget(event);
      if (isTabbable(target)) {
        lastFocusedTabbableRef.current = target;
      }
    }
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const currentTarget = event.currentTarget;
      const target = getTarget(event);
      queueMicrotask(() => {
        const nodeId = getNodeId();
        const triggers = store.context.triggerElements;
        const insideElements = getResolvedInsideElements();
        const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute("focus-guard")) && [beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeInsideRef.current, portalContext?.afterInsideRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement)].includes(relatedTarget);
        const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || relatedTarget != null && triggers.hasElement(relatedTarget) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => [node.context?.elements.floating, getFloatingFocusElement(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
        if (currentTarget === domReference && floatingFocusElement) {
          handleTabIndex(floatingFocusElement, orderRef);
        }
        if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
          if (isHTMLElement(floatingFocusElement)) {
            floatingFocusElement.focus();
            if (restoreFocus === "popup") {
              restoreFocusFrame.request(() => {
                floatingFocusElement.focus();
              });
              return;
            }
          }
          const tabbableContent = getTabbableContent();
          const prevTabbable = lastFocusedTabbableRef.current;
          const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
          if (isHTMLElement(nodeToFocus)) {
            nodeToFocus.focus();
          }
        }
        if (dataRef.current.insideReactTree) {
          dataRef.current.insideReactTree = false;
          return;
        }
        if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
        // For an "untrapped" typeable combobox (input role=combobox with
        // initialFocus=false), re-opening the popup and tabbing out should still close it even
        // when the previously focused element (e.g. the next tabbable outside the popup) is
        // focused again. Otherwise, the popup remains open on the second Tab sequence:
        // click input -> Tab (closes) -> click input -> Tab.
        // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
        (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
          preventReturnFocusRef.current = true;
          store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event));
        }
      });
    }
    function markInsideReactTree() {
      if (pointerDownOutsideRef.current) {
        return;
      }
      dataRef.current.insideReactTree = true;
      blurTimeout.start(0, () => {
        dataRef.current.insideReactTree = false;
      });
    }
    const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
    if (!floating && !domReferenceElement) {
      return void 0;
    }
    return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
  }, [disabled3, domReference, floating, floatingFocusElement, modal, tree, portalContext, store, closeOnFocusOut, restoreFocus, getTabbableContent, isUntrappedTypeableCombobox, getNodeId, orderRef, dataRef, blurTimeout, pointerDownTimeout, restoreFocusFrame, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  React28.useEffect(() => {
    if (disabled3 || !floating || !open) {
      return void 0;
    }
    const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute("portal")}]`) || []);
    const ancestors = tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : [];
    const rootAncestorComboboxDomReference = ancestors.find((node) => isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
    const controlInsideElements = [floating, ...portalNodes, beforeGuardRef.current, afterGuardRef.current, portalContext?.beforeOutsideRef.current, portalContext?.afterOutsideRef.current, ...getResolvedInsideElements()];
    const insideElements = [...controlInsideElements, rootAncestorComboboxDomReference, resolveRef(previousFocusableElement), resolveRef(nextFocusableElement), isUntrappedTypeableCombobox ? domReference : null].filter((x2) => x2 != null);
    const ariaHiddenCleanup = markOthers(insideElements, {
      ariaHidden: modal || isUntrappedTypeableCombobox,
      mark: false
    });
    const markerInsideElements = [floating, ...portalNodes].filter((x2) => x2 != null);
    const markerCleanup = markOthers(markerInsideElements);
    return () => {
      markerCleanup();
      ariaHiddenCleanup();
    };
  }, [open, disabled3, domReference, floating, modal, orderRef, portalContext, isUntrappedTypeableCombobox, tree, getNodeId, nextFocusableElement, previousFocusableElement, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!open || disabled3 || !isHTMLElement(floatingFocusElement)) {
      return;
    }
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    queueMicrotask(() => {
      const initialFocusValueOrFn = initialFocusRef.current;
      const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
      if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) {
        return;
      }
      const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
      if (focusAlreadyInsideFloatingEl) {
        return;
      }
      let focusableElements = null;
      const getDefaultFocusElement = () => {
        if (focusableElements == null) {
          focusableElements = getTabbableContent(floatingFocusElement);
        }
        return focusableElements[0] || floatingFocusElement;
      };
      let elToFocus;
      if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
        elToFocus = getDefaultFocusElement();
      } else {
        elToFocus = resolveRef(resolvedInitialFocus);
      }
      elToFocus = elToFocus || getDefaultFocusElement();
      enqueueFocus(elToFocus, {
        preventScroll: elToFocus === floatingFocusElement
      });
    });
  }, [disabled3, open, floatingFocusElement, ignoreInitialFocus, getTabbableContent, initialFocusRef, openInteractionTypeRef]);
  useIsoLayoutEffect(() => {
    if (disabled3 || !floatingFocusElement) {
      return void 0;
    }
    const doc = ownerDocument(floatingFocusElement);
    const previouslyFocusedElement = activeElement(doc);
    addPreviouslyFocusedElement(previouslyFocusedElement);
    function onOpenChangeLocal(details) {
      if (!details.open) {
        closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
      }
      if (details.reason === reason_parts_exports.triggerHover && details.nativeEvent.type === "mouseleave") {
        preventReturnFocusRef.current = true;
      }
      if (details.reason !== reason_parts_exports.outsidePress) {
        return;
      }
      if (details.nested) {
        preventReturnFocusRef.current = false;
      } else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) {
        preventReturnFocusRef.current = false;
      } else {
        let isPreventScrollSupported = false;
        ownerDocument(floatingFocusElement).createElement("div").focus({
          get preventScroll() {
            isPreventScrollSupported = true;
            return false;
          }
        });
        if (isPreventScrollSupported) {
          preventReturnFocusRef.current = false;
        } else {
          preventReturnFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    function getReturnElement() {
      const returnFocusValueOrFn = returnFocusRef.current;
      let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeTypeRef.current) : returnFocusValueOrFn;
      if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) {
        return null;
      }
      if (resolvedReturnFocusValue === null) {
        resolvedReturnFocusValue = true;
      }
      if (typeof resolvedReturnFocusValue === "boolean") {
        const el = domReference || getPreviouslyFocusedElement();
        return el && el.isConnected ? el : null;
      }
      const fallback = domReference || getPreviouslyFocusedElement();
      return resolveRef(resolvedReturnFocusValue) || fallback || null;
    }
    return () => {
      events.off("openchange", onOpenChangeLocal);
      const activeEl = activeElement(doc);
      const insideElements = getResolvedInsideElements();
      const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => contains(node.context?.elements.floating, activeEl));
      const returnFocusValueOrFn = returnFocusRef.current;
      const returnElement = getReturnElement();
      queueMicrotask(() => {
        const tabbableReturnElement = getFirstTabbableElement(returnElement);
        const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== "boolean";
        if (returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && // If the focus moved somewhere else after mount, avoid returning focus
        // since it likely entered a different element which should be
        // respected: https://github.com/floating-ui/floating-ui/issues/2607
        (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
          tabbableReturnElement.focus({
            preventScroll: true
          });
        }
        preventReturnFocusRef.current = false;
      });
    };
  }, [disabled3, floating, floatingFocusElement, returnFocusRef, dataRef, events, tree, domReference, getNodeId, getResolvedInsideElements]);
  useIsoLayoutEffect(() => {
    if (!isWebKit2 || open || !floating) {
      return;
    }
    const activeEl = activeElement(ownerDocument(floating));
    if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) {
      return;
    }
    if (contains(floating, activeEl)) {
      activeEl.blur();
    }
  }, [open, floating]);
  useIsoLayoutEffect(() => {
    if (disabled3 || !portalContext) {
      return void 0;
    }
    portalContext.setFocusManagerState({
      modal,
      closeOnFocusOut,
      open,
      onOpenChange: store.setOpen,
      domReference
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [disabled3, portalContext, modal, open, store, closeOnFocusOut, domReference]);
  useIsoLayoutEffect(() => {
    if (disabled3 || !floatingFocusElement) {
      return void 0;
    }
    handleTabIndex(floatingFocusElement, orderRef);
    return () => {
      queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
    };
  }, [disabled3, floatingFocusElement, orderRef]);
  const shouldRenderGuards = !disabled3 && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(React28.Fragment, {
    children: [shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FocusGuard, {
      "data-type": "inside",
      ref: mergedBeforeGuardRef,
      onFocus: (event) => {
        if (modal) {
          const els = getTabbableContent();
          enqueueFocus(els[els.length - 1]);
        } else if (portalContext?.portalNode) {
          preventReturnFocusRef.current = false;
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const nextTabbable = getNextTabbable(domReference);
            nextTabbable?.focus();
          } else {
            resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
          }
        }
      }
    }), children, shouldRenderGuards && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(FocusGuard, {
      "data-type": "inside",
      ref: mergedAfterGuardRef,
      onFocus: (event) => {
        if (modal) {
          enqueueFocus(getTabbableContent()[0]);
        } else if (portalContext?.portalNode) {
          if (closeOnFocusOut) {
            preventReturnFocusRef.current = true;
          }
          if (isOutsideEvent(event, portalContext.portalNode)) {
            const prevTabbable = getPreviousTabbable(domReference);
            prevTabbable?.focus();
          } else {
            resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
          }
        }
      }
    })]
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClick.js
var React29 = __toESM(require_react(), 1);
function useClick(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const dataRef = store.context.dataRef;
  const {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    stickIfOpen = true,
    touchOpenDelay = 0,
    reason = reason_parts_exports.triggerPress
  } = props;
  const pointerTypeRef = React29.useRef(void 0);
  const frame = useAnimationFrame();
  const touchOpenTimeout = useTimeout();
  const reference = React29.useMemo(() => ({
    onPointerDown(event) {
      pointerTypeRef.current = event.pointerType;
    },
    onMouseDown(event) {
      const pointerType = pointerTypeRef.current;
      const nativeEvent = event.nativeEvent;
      const open = store.select("open");
      if (event.button !== 0 || eventOption === "click" || isMouseLikePointerType(pointerType, true) && ignoreMouse) {
        return;
      }
      const openEvent = dataRef.current.openEvent;
      const openEventType = openEvent?.type;
      const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== event.currentTarget;
      const nextOpen = open && hasClickedOnInactiveTrigger || !(open && toggle && (openEvent && stickIfOpen ? openEventType === "click" || openEventType === "mousedown" : true));
      const target = getTarget(nativeEvent);
      if (isTypeableElement(target)) {
        const details = createChangeEventDetails(reason, nativeEvent, target);
        if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
          touchOpenTimeout.start(touchOpenDelay, () => {
            store.setOpen(true, details);
          });
        } else {
          store.setOpen(nextOpen, details);
        }
        return;
      }
      const eventCurrentTarget = event.currentTarget;
      frame.request(() => {
        const details = createChangeEventDetails(reason, nativeEvent, eventCurrentTarget);
        if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
          touchOpenTimeout.start(touchOpenDelay, () => {
            store.setOpen(true, details);
          });
        } else {
          store.setOpen(nextOpen, details);
        }
      });
    },
    onClick(event) {
      if (eventOption === "mousedown-only") {
        return;
      }
      const pointerType = pointerTypeRef.current;
      if (eventOption === "mousedown" && pointerType) {
        pointerTypeRef.current = void 0;
        return;
      }
      if (isMouseLikePointerType(pointerType, true) && ignoreMouse) {
        return;
      }
      const open = store.select("open");
      const openEvent = dataRef.current.openEvent;
      const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== event.currentTarget;
      const nextOpen = open && hasClickedOnInactiveTrigger || !(open && toggle && (openEvent && stickIfOpen ? isClickLikeEvent(openEvent) : true));
      const details = createChangeEventDetails(reason, event.nativeEvent, event.currentTarget);
      if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) {
        touchOpenTimeout.start(touchOpenDelay, () => {
          store.setOpen(true, details);
        });
      } else {
        store.setOpen(nextOpen, details);
      }
    },
    onKeyDown() {
      pointerTypeRef.current = void 0;
    }
  }), [dataRef, eventOption, ignoreMouse, store, stickIfOpen, toggle, frame, touchOpenTimeout, touchOpenDelay, reason]);
  return React29.useMemo(() => enabled ? {
    reference
  } : EMPTY_OBJECT, [enabled, reference]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClientPoint.js
var React30 = __toESM(require_react(), 1);
function createVirtualElement(domElement, data) {
  let offsetX = null;
  let offsetY = null;
  let isAutoUpdateEvent = false;
  return {
    contextElement: domElement || void 0,
    getBoundingClientRect() {
      const domRect = domElement?.getBoundingClientRect() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      };
      const isXAxis = data.axis === "x" || data.axis === "both";
      const isYAxis = data.axis === "y" || data.axis === "both";
      const canTrackCursorOnAutoUpdate = ["mouseenter", "mousemove"].includes(data.dataRef.current.openEvent?.type || "") && data.pointerType !== "touch";
      let width = domRect.width;
      let height = domRect.height;
      let x2 = domRect.x;
      let y2 = domRect.y;
      if (offsetX == null && data.x && isXAxis) {
        offsetX = domRect.x - data.x;
      }
      if (offsetY == null && data.y && isYAxis) {
        offsetY = domRect.y - data.y;
      }
      x2 -= offsetX || 0;
      y2 -= offsetY || 0;
      width = 0;
      height = 0;
      if (!isAutoUpdateEvent || canTrackCursorOnAutoUpdate) {
        width = data.axis === "y" ? domRect.width : 0;
        height = data.axis === "x" ? domRect.height : 0;
        x2 = isXAxis && data.x != null ? data.x : x2;
        y2 = isYAxis && data.y != null ? data.y : y2;
      } else if (isAutoUpdateEvent && !canTrackCursorOnAutoUpdate) {
        height = data.axis === "x" ? domRect.height : height;
        width = data.axis === "y" ? domRect.width : width;
      }
      isAutoUpdateEvent = true;
      return {
        width,
        height,
        x: x2,
        y: y2,
        top: y2,
        right: x2 + width,
        bottom: y2 + height,
        left: x2
      };
    }
  };
}
function isMouseBasedEvent(event) {
  return event != null && event.clientX != null;
}
function useClientPoint(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floating = store.useState("floatingElement");
  const domReference = store.useState("domReferenceElement");
  const dataRef = store.context.dataRef;
  const {
    enabled = true,
    axis = "both"
  } = props;
  const initialRef = React30.useRef(false);
  const cleanupListenerRef = React30.useRef(null);
  const [pointerType, setPointerType] = React30.useState();
  const [reactive, setReactive] = React30.useState([]);
  const setReference = useStableCallback((newX, newY, referenceElement) => {
    if (initialRef.current) {
      return;
    }
    if (dataRef.current.openEvent && !isMouseBasedEvent(dataRef.current.openEvent)) {
      return;
    }
    store.set("positionReference", createVirtualElement(referenceElement ?? domReference, {
      x: newX,
      y: newY,
      axis,
      dataRef,
      pointerType
    }));
  });
  const handleReferenceEnterOrMove = useStableCallback((event) => {
    if (!open) {
      setReference(event.clientX, event.clientY, event.currentTarget);
    } else if (!cleanupListenerRef.current) {
      setReactive([]);
    }
  });
  const openCheck = isMouseLikePointerType(pointerType) ? floating : open;
  const addListener = React30.useCallback(() => {
    if (!openCheck || !enabled) {
      return void 0;
    }
    const win = getWindow(floating);
    function handleMouseMove(event) {
      const target = getTarget(event);
      if (!contains(floating, target)) {
        setReference(event.clientX, event.clientY);
      } else {
        cleanupListenerRef.current?.();
        cleanupListenerRef.current = null;
      }
    }
    if (!dataRef.current.openEvent || isMouseBasedEvent(dataRef.current.openEvent)) {
      const cleanup = () => {
        cleanupListenerRef.current?.();
        cleanupListenerRef.current = null;
      };
      cleanupListenerRef.current = addEventListener(win, "mousemove", handleMouseMove);
      return cleanup;
    }
    store.set("positionReference", domReference);
    return void 0;
  }, [openCheck, enabled, floating, dataRef, domReference, store, setReference]);
  React30.useEffect(() => {
    return addListener();
  }, [addListener, reactive]);
  React30.useEffect(() => {
    if (enabled && !floating) {
      initialRef.current = false;
    }
  }, [enabled, floating]);
  React30.useEffect(() => {
    if (!enabled && open) {
      initialRef.current = true;
    }
  }, [enabled, open]);
  const reference = React30.useMemo(() => {
    function setPointerTypeRef(event) {
      setPointerType(event.pointerType);
    }
    return {
      onPointerDown: setPointerTypeRef,
      onPointerEnter: setPointerTypeRef,
      onMouseMove: handleReferenceEnterOrMove,
      onMouseEnter: handleReferenceEnterOrMove
    };
  }, [handleReferenceEnterOrMove]);
  return React30.useMemo(() => enabled ? {
    reference,
    trigger: reference
  } : {}, [enabled, reference]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js
var React31 = __toESM(require_react(), 1);
var bubbleHandlerKeys = {
  intentional: "onClick",
  sloppy: "onPointerDown"
};
function alwaysFalse() {
  return false;
}
function normalizeProp(normalizable) {
  return {
    escapeKey: typeof normalizable === "boolean" ? normalizable : normalizable?.escapeKey ?? false,
    outsidePress: typeof normalizable === "boolean" ? normalizable : normalizable?.outsidePress ?? true
  };
}
function useDismiss(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const {
    dataRef
  } = store.context;
  const {
    enabled = true,
    escapeKey: escapeKey3 = true,
    outsidePress: outsidePressProp = true,
    outsidePressEvent = "sloppy",
    referencePress = alwaysFalse,
    referencePressEvent = "sloppy",
    bubbles,
    externalTree
  } = props;
  const tree = useFloatingTree(externalTree);
  const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
  const outsidePress3 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
  const outsidePressEnabled = outsidePress3 !== false;
  const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
  const pressStartedInsideRef = React31.useRef(false);
  const pressStartPreventedRef = React31.useRef(false);
  const suppressNextOutsideClickRef = React31.useRef(false);
  const {
    escapeKey: escapeKeyBubbles,
    outsidePress: outsidePressBubbles
  } = normalizeProp(bubbles);
  const touchStateRef = React31.useRef(null);
  const cancelDismissOnEndTimeout = useTimeout();
  const clearInsideReactTreeTimeout = useTimeout();
  const clearInsideReactTree = useStableCallback(() => {
    clearInsideReactTreeTimeout.clear();
    dataRef.current.insideReactTree = false;
  });
  const isComposingRef = React31.useRef(false);
  const currentPointerTypeRef = React31.useRef("");
  const isReferencePressEnabled = useStableCallback(referencePress);
  const closeOnEscapeKeyDown = useStableCallback((event) => {
    if (!open || !enabled || !escapeKey3 || event.key !== "Escape") {
      return;
    }
    if (isComposingRef.current) {
      return;
    }
    const nodeId = dataRef.current.floatingContext?.nodeId;
    const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
    if (!escapeKeyBubbles) {
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          if (child.context?.open && !child.context.dataRef.current.__escapeKeyBubbles) {
            shouldDismiss = false;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
    }
    const native = isReactEvent(event) ? event.nativeEvent : event;
    const eventDetails = createChangeEventDetails(reason_parts_exports.escapeKey, native);
    store.setOpen(false, eventDetails);
    if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
      event.stopPropagation();
    }
  });
  const markInsideReactTree = useStableCallback(() => {
    dataRef.current.insideReactTree = true;
    clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
  });
  React31.useEffect(() => {
    if (!open || !enabled) {
      return void 0;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    const compositionTimeout = new Timeout();
    const preventedPressSuppressionTimeout = new Timeout();
    function handleCompositionStart() {
      compositionTimeout.clear();
      isComposingRef.current = true;
    }
    function handleCompositionEnd() {
      compositionTimeout.start(
        // 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
        // Only apply to WebKit for the test to remain 0ms.
        isWebKit() ? 5 : 0,
        () => {
          isComposingRef.current = false;
        }
      );
    }
    function suppressImmediateOutsideClickAfterPreventedStart() {
      suppressNextOutsideClickRef.current = true;
      preventedPressSuppressionTimeout.start(0, () => {
        suppressNextOutsideClickRef.current = false;
      });
    }
    function resetPressStartState() {
      pressStartedInsideRef.current = false;
      pressStartPreventedRef.current = false;
    }
    function getOutsidePressEvent() {
      const type = currentPointerTypeRef.current;
      const computedType = type === "pen" || !type ? "mouse" : type;
      const outsidePressEventValue = getOutsidePressEventProp();
      const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
      if (typeof resolved === "string") {
        return resolved;
      }
      return resolved[computedType];
    }
    function shouldIgnoreEvent(event) {
      const computedOutsidePressEvent = getOutsidePressEvent();
      return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
    }
    function isEventWithinFloatingTree(event) {
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => isEventTargetWithin(event, node.context?.elements.floating));
      return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement")) || targetIsInsideChildren;
    }
    function closeOnPressOutside(event) {
      if (shouldIgnoreEvent(event)) {
        clearInsideReactTree();
        return;
      }
      if (dataRef.current.insideReactTree) {
        clearInsideReactTree();
        return;
      }
      const target = getTarget(event);
      const inertSelector = `[${createAttribute("inert")}]`;
      const targetRoot = isElement(target) ? target.getRootNode() : null;
      const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
      const triggers = store.context.triggerElements;
      if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) {
        return;
      }
      let targetRootAncestor = isElement(target) ? target : null;
      while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
        const nextParent = getParentNode(targetRootAncestor);
        if (isLastTraversableNode(nextParent) || !isElement(nextParent)) {
          break;
        }
        targetRootAncestor = nextParent;
      }
      if (markers.length && isElement(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
      !contains(target, store.select("floatingElement")) && // If the target root element contains none of the markers, then the
      // element was injected after the floating element rendered.
      markers.every((marker) => !contains(targetRootAncestor, marker))) {
        return;
      }
      if (isHTMLElement(target) && !("touches" in event)) {
        const lastTraversableNode = isLastTraversableNode(target);
        const style = getComputedStyle2(target);
        const scrollRe = /auto|scroll/;
        const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
        const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
        const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
        const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
        const isRTL2 = style.direction === "rtl";
        const pressedVerticalScrollbar = canScrollY && (isRTL2 ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
        const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
        if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
          return;
        }
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (getOutsidePressEvent() === "intentional" && suppressNextOutsideClickRef.current) {
        preventedPressSuppressionTimeout.clear();
        suppressNextOutsideClickRef.current = false;
        return;
      }
      if (typeof outsidePress3 === "function" && !outsidePress3(event)) {
        return;
      }
      const nodeId = dataRef.current.floatingContext?.nodeId;
      const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          if (child.context?.open && !child.context.dataRef.current.__outsidePressBubbles) {
            shouldDismiss = false;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.outsidePress, event));
      clearInsideReactTree();
    }
    function handlePointerDown(event) {
      if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      closeOnPressOutside(event);
    }
    function handleTouchStart(event) {
      if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      const touch = event.touches[0];
      if (touch) {
        touchStateRef.current = {
          startTime: Date.now(),
          startX: touch.clientX,
          startY: touch.clientY,
          dismissOnTouchEnd: false,
          dismissOnMouseDown: true
        };
        cancelDismissOnEndTimeout.start(1e3, () => {
          if (touchStateRef.current) {
            touchStateRef.current.dismissOnTouchEnd = false;
            touchStateRef.current.dismissOnMouseDown = false;
          }
        });
      }
    }
    function addTargetEventListenerOnce(event, listener) {
      const target = getTarget(event);
      if (!target) {
        return;
      }
      const unsubscribe2 = addEventListener(target, event.type, () => {
        listener(event);
        unsubscribe2();
      });
    }
    function handleTouchStartCapture(event) {
      currentPointerTypeRef.current = "touch";
      addTargetEventListenerOnce(event, handleTouchStart);
    }
    function closeOnPressOutsideCapture(event) {
      cancelDismissOnEndTimeout.clear();
      if (event.type === "pointerdown") {
        currentPointerTypeRef.current = event.pointerType;
      }
      if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
        return;
      }
      addTargetEventListenerOnce(event, (targetEvent) => {
        if (targetEvent.type === "pointerdown") {
          handlePointerDown(targetEvent);
        } else {
          closeOnPressOutside(targetEvent);
        }
      });
    }
    function handlePressEndCapture(event) {
      if (!pressStartedInsideRef.current) {
        return;
      }
      const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
      resetPressStartState();
      if (getOutsidePressEvent() !== "intentional") {
        return;
      }
      if (event.type === "pointercancel") {
        if (pressStartedInsideDefaultPrevented) {
          suppressImmediateOutsideClickAfterPreventedStart();
        }
        return;
      }
      if (isEventWithinFloatingTree(event)) {
        return;
      }
      if (pressStartedInsideDefaultPrevented) {
        suppressImmediateOutsideClickAfterPreventedStart();
        return;
      }
      if (typeof outsidePress3 === "function" && !outsidePress3(event)) {
        return;
      }
      preventedPressSuppressionTimeout.clear();
      suppressNextOutsideClickRef.current = true;
      clearInsideReactTree();
    }
    function handleTouchMove(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      const touch = event.touches[0];
      if (!touch) {
        return;
      }
      const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
      const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > 5) {
        touchStateRef.current.dismissOnTouchEnd = true;
      }
      if (distance > 10) {
        closeOnPressOutside(event);
        cancelDismissOnEndTimeout.clear();
        touchStateRef.current = null;
      }
    }
    function handleTouchMoveCapture(event) {
      addTargetEventListenerOnce(event, handleTouchMove);
    }
    function handleTouchEnd(event) {
      if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"))) {
        return;
      }
      if (touchStateRef.current.dismissOnTouchEnd) {
        closeOnPressOutside(event);
      }
      cancelDismissOnEndTimeout.clear();
      touchStateRef.current = null;
    }
    function handleTouchEndCapture(event) {
      addTargetEventListenerOnce(event, handleTouchEnd);
    }
    const doc = ownerDocument(floatingElement);
    const unsubscribe = mergeCleanups(escapeKey3 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, true), addEventListener(doc, "touchmove", handleTouchMoveCapture, true), addEventListener(doc, "touchend", handleTouchEndCapture, true)));
    return () => {
      unsubscribe();
      compositionTimeout.clear();
      preventedPressSuppressionTimeout.clear();
      resetPressStartState();
      suppressNextOutsideClickRef.current = false;
    };
  }, [dataRef, floatingElement, escapeKey3, outsidePressEnabled, outsidePress3, open, enabled, escapeKeyBubbles, outsidePressBubbles, closeOnEscapeKeyDown, clearInsideReactTree, getOutsidePressEventProp, tree, store, cancelDismissOnEndTimeout]);
  React31.useEffect(clearInsideReactTree, [outsidePress3, clearInsideReactTree]);
  const reference = React31.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    [bubbleHandlerKeys[referencePressEvent]]: (event) => {
      if (!isReferencePressEnabled()) {
        return;
      }
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent));
    },
    ...referencePressEvent !== "intentional" && {
      onClick(event) {
        if (!isReferencePressEnabled()) {
          return;
        }
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerPress, event.nativeEvent));
      }
    }
  }), [closeOnEscapeKeyDown, store, referencePressEvent, isReferencePressEnabled]);
  const markPressStartedInsideReactTree = useStableCallback((event) => {
    if (!open || !enabled || event.button !== 0) {
      return;
    }
    const target = getTarget(event.nativeEvent);
    if (!contains(store.select("floatingElement"), target)) {
      return;
    }
    if (!pressStartedInsideRef.current) {
      pressStartedInsideRef.current = true;
      pressStartPreventedRef.current = false;
    }
  });
  const markInsidePressStartPrevented = useStableCallback((event) => {
    if (!open || !enabled) {
      return;
    }
    if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
      return;
    }
    if (pressStartedInsideRef.current) {
      pressStartPreventedRef.current = true;
    }
  });
  const floating = React31.useMemo(() => ({
    onKeyDown: closeOnEscapeKeyDown,
    // `onMouseDown` may be blocked if `event.preventDefault()` is called in
    // `onPointerDown`, such as with <NumberField.ScrubArea>.
    // See https://github.com/mui/base-ui/pull/3379
    onPointerDown: markInsidePressStartPrevented,
    onMouseDown: markInsidePressStartPrevented,
    onClickCapture: markInsideReactTree,
    onMouseDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onPointerDownCapture(event) {
      markInsideReactTree();
      markPressStartedInsideReactTree(event);
    },
    onMouseUpCapture: markInsideReactTree,
    onTouchEndCapture: markInsideReactTree,
    onTouchMoveCapture: markInsideReactTree
  }), [closeOnEscapeKeyDown, markInsideReactTree, markPressStartedInsideReactTree, markInsidePressStartPrevented]);
  return React31.useMemo(() => enabled ? {
    reference,
    floating,
    trigger: reference
  } : {}, [enabled, reference, floating]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloating.js
var React34 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React32 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var ReactDOM3 = __toESM(require_react_dom(), 1);
var isClient = typeof document !== "undefined";
var noop2 = function noop3() {
};
var index = isClient ? import_react5.useLayoutEffect : noop2;
function deepEqual(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  if (typeof a2 !== typeof b2) {
    return false;
  }
  if (typeof a2 === "function" && a2.toString() === b2.toString()) {
    return true;
  }
  let length;
  let i2;
  let keys;
  if (a2 && b2 && typeof a2 === "object") {
    if (Array.isArray(a2)) {
      length = a2.length;
      if (length !== b2.length) return false;
      for (i2 = length; i2-- !== 0; ) {
        if (!deepEqual(a2[i2], b2[i2])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a2);
    length = keys.length;
    if (length !== Object.keys(b2).length) {
      return false;
    }
    for (i2 = length; i2-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b2, keys[i2])) {
        return false;
      }
    }
    for (i2 = length; i2-- !== 0; ) {
      const key = keys[i2];
      if (key === "_owner" && a2.$$typeof) {
        continue;
      }
      if (!deepEqual(a2[key], b2[key])) {
        return false;
      }
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React32.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform3,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React32.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React32.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React32.useState(null);
  const [_floating, _setFloating] = React32.useState(null);
  const setReference = React32.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React32.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React32.useRef(null);
  const floatingRef = React32.useRef(null);
  const dataRef = React32.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform3);
  const openRef = useLatestRef(open);
  const update2 = React32.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM3.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React32.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update2);
      }
      update2();
    }
  }, [referenceEl, floatingEl, update2, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React32.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React32.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React32.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x2 = roundByDPR(elements.floating, data.x);
    const y2 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x2 + "px, " + y2 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x2,
      top: y2
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React32.useMemo(() => ({
    ...data,
    update: update2,
    refs,
    elements,
    floatingStyles
  }), [data, update2, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var shift3 = (options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var limitShift3 = (options, deps) => {
  const result = limitShift2(options);
  return {
    fn: result.fn,
    options: [options, deps]
  };
};
var flip3 = (options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var size3 = (options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var hide3 = (options, deps) => {
  const result = hide2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingRootStore.js
var selectors = {
  open: createSelector((state) => state.open),
  transitionStatus: createSelector((state) => state.transitionStatus),
  domReferenceElement: createSelector((state) => state.domReferenceElement),
  referenceElement: createSelector((state) => state.positionReference ?? state.referenceElement),
  floatingElement: createSelector((state) => state.floatingElement),
  floatingId: createSelector((state) => state.floatingId)
};
var FloatingRootStore = class extends ReactStore {
  constructor(options) {
    const {
      syncOnly,
      nested,
      onOpenChange,
      triggerElements,
      ...initialState
    } = options;
    super({
      ...initialState,
      positionReference: initialState.referenceElement,
      domReferenceElement: initialState.referenceElement
    }, {
      onOpenChange,
      dataRef: {
        current: {}
      },
      events: createEventEmitter(),
      nested,
      triggerElements
    }, selectors);
    this.syncOnly = syncOnly;
  }
  /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */
  syncOpenEvent = (newOpen, event) => {
    if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
    // click events to upgrade a hover-open.
    event != null && isClickLikeEvent(event)) {
      this.context.dataRef.current.openEvent = newOpen ? event : void 0;
    }
  };
  /**
   * Runs the root-owned side effects for an open state change.
   */
  dispatchOpenChange = (newOpen, eventDetails) => {
    this.syncOpenEvent(newOpen, eventDetails.event);
    const details = {
      open: newOpen,
      reason: eventDetails.reason,
      nativeEvent: eventDetails.event,
      nested: this.context.nested,
      triggerElement: eventDetails.trigger
    };
    this.context.events.emit("openchange", details);
  };
  /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */
  setOpen = (newOpen, eventDetails) => {
    if (this.syncOnly) {
      this.context.onOpenChange?.(newOpen, eventDetails);
      return;
    }
    this.dispatchOpenChange(newOpen, eventDetails);
    this.context.onOpenChange?.(newOpen, eventDetails);
  };
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js
var React33 = __toESM(require_react(), 1);
function useTriggerRegistration(id, store) {
  const registeredElementIdRef = React33.useRef(null);
  const registeredElementRef = React33.useRef(null);
  return React33.useCallback((element) => {
    if (id === void 0) {
      return;
    }
    if (registeredElementIdRef.current !== null) {
      const registeredId = registeredElementIdRef.current;
      const registeredElement = registeredElementRef.current;
      const currentElement = store.context.triggerElements.getById(registeredId);
      if (registeredElement && currentElement === registeredElement) {
        store.context.triggerElements.delete(registeredId);
      }
      registeredElementIdRef.current = null;
      registeredElementRef.current = null;
    }
    if (element !== null) {
      registeredElementIdRef.current = id;
      registeredElementRef.current = element;
      store.context.triggerElements.add(id, element);
    }
  }, [store, id]);
}
function useTriggerDataForwarding(triggerId, triggerElementRef, store, stateUpdates) {
  const isMountedByThisTrigger = store.useState("isMountedByTrigger", triggerId);
  const baseRegisterTrigger = useTriggerRegistration(triggerId, store);
  const registerTrigger = useStableCallback((element) => {
    baseRegisterTrigger(element);
    if (!element || !store.select("open")) {
      return;
    }
    const activeTriggerId = store.select("activeTriggerId");
    if (activeTriggerId === triggerId) {
      store.update({
        activeTriggerElement: element,
        ...stateUpdates
      });
      return;
    }
    if (activeTriggerId == null) {
      store.update({
        activeTriggerId: triggerId,
        activeTriggerElement: element,
        ...stateUpdates
      });
    }
  });
  useIsoLayoutEffect(() => {
    if (isMountedByThisTrigger) {
      store.update({
        activeTriggerElement: triggerElementRef.current,
        ...stateUpdates
      });
    }
  }, [isMountedByThisTrigger, store, triggerElementRef, ...Object.values(stateUpdates)]);
  return {
    registerTrigger,
    isMountedByThisTrigger
  };
}
function useImplicitActiveTrigger(store) {
  const open = store.useState("open");
  useIsoLayoutEffect(() => {
    if (open && !store.select("activeTriggerId") && store.context.triggerElements.size === 1) {
      const iteratorResult = store.context.triggerElements.entries().next();
      if (!iteratorResult.done) {
        const [implicitTriggerId, implicitTriggerElement] = iteratorResult.value;
        store.update({
          activeTriggerId: implicitTriggerId,
          activeTriggerElement: implicitTriggerElement
        });
      }
    }
  }, [open, store]);
}
function useOpenStateTransitions(open, store, onUnmount) {
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus(open);
  store.useSyncedValues({
    mounted,
    transitionStatus
  });
  const forceUnmount = useStableCallback(() => {
    setMounted(false);
    store.update({
      activeTriggerId: null,
      activeTriggerElement: null,
      mounted: false
    });
    onUnmount?.();
    store.context.onOpenChangeComplete?.(false);
  });
  const preventUnmountingOnClose = store.useState("preventUnmountingOnClose");
  useOpenChangeComplete({
    enabled: !preventUnmountingOnClose,
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (!open) {
        forceUnmount();
      }
    }
  });
  return {
    forceUnmount,
    transitionStatus
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js
var PopupTriggerMap = class {
  constructor() {
    this.elementsSet = /* @__PURE__ */ new Set();
    this.idMap = /* @__PURE__ */ new Map();
  }
  /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */
  add(id, element) {
    const existingElement = this.idMap.get(id);
    if (existingElement === element) {
      return;
    }
    if (existingElement !== void 0) {
      this.elementsSet.delete(existingElement);
    }
    this.elementsSet.add(element);
    this.idMap.set(id, element);
    if (true) {
      if (this.elementsSet.size !== this.idMap.size) {
        throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
      }
    }
  }
  /**
   * Removes the trigger element with the given ID.
   */
  delete(id) {
    const element = this.idMap.get(id);
    if (element) {
      this.elementsSet.delete(element);
      this.idMap.delete(id);
    }
  }
  /**
   * Whether the given element is registered as a trigger.
   */
  hasElement(element) {
    return this.elementsSet.has(element);
  }
  /**
   * Whether there is a registered trigger element matching the given predicate.
   */
  hasMatchingElement(predicate) {
    for (const element of this.elementsSet) {
      if (predicate(element)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */
  getById(id) {
    return this.idMap.get(id);
  }
  /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */
  entries() {
    return this.idMap.entries();
  }
  /**
   * Returns an iterable of all registered trigger elements.
   */
  elements() {
    return this.elementsSet.values();
  }
  /**
   * Returns the number of registered trigger elements.
   */
  get size() {
    return this.idMap.size;
  }
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/utils/getEmptyRootContext.js
function getEmptyRootContext() {
  return new FloatingRootStore({
    open: false,
    transitionStatus: void 0,
    floatingElement: null,
    referenceElement: null,
    triggerElements: new PopupTriggerMap(),
    floatingId: "",
    syncOnly: false,
    nested: false,
    onOpenChange: void 0
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/popups/store.js
function createInitialPopupStoreState() {
  return {
    open: false,
    openProp: void 0,
    mounted: false,
    transitionStatus: void 0,
    floatingRootContext: getEmptyRootContext(),
    preventUnmountingOnClose: false,
    payload: void 0,
    activeTriggerId: null,
    activeTriggerElement: null,
    triggerIdProp: void 0,
    popupElement: null,
    positionerElement: null,
    activeTriggerProps: EMPTY_OBJECT,
    inactiveTriggerProps: EMPTY_OBJECT,
    popupProps: EMPTY_OBJECT
  };
}
var activeTriggerIdSelector = createSelector((state) => state.triggerIdProp ?? state.activeTriggerId);
var popupStoreSelectors = {
  open: createSelector((state) => state.openProp ?? state.open),
  mounted: createSelector((state) => state.mounted),
  transitionStatus: createSelector((state) => state.transitionStatus),
  floatingRootContext: createSelector((state) => state.floatingRootContext),
  preventUnmountingOnClose: createSelector((state) => state.preventUnmountingOnClose),
  payload: createSelector((state) => state.payload),
  activeTriggerId: activeTriggerIdSelector,
  activeTriggerElement: createSelector((state) => state.mounted ? state.activeTriggerElement : null),
  /**
   * Whether the trigger with the given ID was used to open the popup.
   */
  isTriggerActive: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId),
  /**
   * Whether the popup is open and was activated by a trigger with the given ID.
   */
  isOpenedByTrigger: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.open),
  /**
   * Whether the popup is mounted and was activated by a trigger with the given ID.
   */
  isMountedByTrigger: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.mounted),
  triggerProps: createSelector((state, isActive) => isActive ? state.activeTriggerProps : state.inactiveTriggerProps),
  popupProps: createSelector((state) => state.popupProps),
  popupElement: createSelector((state) => state.popupElement),
  positionerElement: createSelector((state) => state.positionerElement)
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloatingRootContext.js
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange,
    elements = {}
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elements.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
    }
  }
  const store = useRefWithInit(() => new FloatingRootStore({
    open,
    transitionStatus: void 0,
    onOpenChange,
    referenceElement: elements.reference ?? null,
    floatingElement: elements.floating ?? null,
    triggerElements: new PopupTriggerMap(),
    floatingId,
    syncOnly: false,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId
    };
    if (elements.reference !== void 0) {
      valuesToSync.referenceElement = elements.reference;
      valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
    }
    if (elements.floating !== void 0) {
      valuesToSync.floatingElement = elements.floating;
    }
    store.update(valuesToSync);
  }, [open, floatingId, elements.reference, elements.floating, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloating.js
function useFloating2(options = {}) {
  const {
    nodeId,
    externalTree
  } = options;
  const internalRootStore = useFloatingRootContext(options);
  const rootContext = options.rootContext || internalRootStore;
  const rootContextElements = {
    reference: rootContext.useState("referenceElement"),
    floating: rootContext.useState("floatingElement"),
    domReference: rootContext.useState("domReferenceElement")
  };
  const [positionReference, setPositionReferenceRaw] = React34.useState(null);
  const domReferenceRef = React34.useRef(null);
  const tree = useFloatingTree(externalTree);
  useIsoLayoutEffect(() => {
    if (rootContextElements.domReference) {
      domReferenceRef.current = rootContextElements.domReference;
    }
  }, [rootContextElements.domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...rootContextElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React34.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      getClientRects: () => node.getClientRects(),
      contextElement: node
    } : node;
    setPositionReferenceRaw(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const [localDomReference, setLocalDomReference] = React34.useState(void 0);
  const [localFloatingElement, setLocalFloatingElement] = React34.useState(null);
  rootContext.useSyncedValue("referenceElement", localDomReference ?? null);
  const localDomReferenceElement = isElement(localDomReference) ? localDomReference : null;
  rootContext.useSyncedValue("domReferenceElement", localDomReference === void 0 ? rootContextElements.domReference : localDomReferenceElement);
  rootContext.useSyncedValue("floatingElement", localFloatingElement);
  const setReference = React34.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setLocalDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs, setLocalDomReference]);
  const setFloating = React34.useCallback((node) => {
    setLocalFloatingElement(node);
    position.refs.setFloating(node);
  }, [position.refs]);
  const refs = React34.useMemo(() => ({
    ...position.refs,
    setReference,
    setFloating,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setFloating, setPositionReference]);
  const elements = React34.useMemo(() => ({
    ...position.elements,
    domReference: rootContextElements.domReference
  }), [position.elements, rootContextElements.domReference]);
  const open = rootContext.useState("open");
  const floatingId = rootContext.useState("floatingId");
  const context = React34.useMemo(() => ({
    ...position,
    dataRef: rootContext.context.dataRef,
    open,
    onOpenChange: rootContext.setOpen,
    events: rootContext.context.events,
    floatingId,
    refs,
    elements,
    nodeId,
    rootStore: rootContext
  }), [position, refs, elements, nodeId, rootContext, open, floatingId]);
  useIsoLayoutEffect(() => {
    rootContext.context.dataRef.current.floatingContext = context;
    const node = tree?.nodesRef.current.find((n2) => n2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React34.useMemo(() => ({
    ...position,
    context,
    refs,
    elements,
    rootStore: rootContext
  }), [position, refs, elements, context, rootContext]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.js
function useSyncedFloatingRootContext(options) {
  const {
    popupStore,
    treatPopupAsFloatingElement = false,
    onOpenChange
  } = options;
  const floatingId = useId();
  const nested = useFloatingParentNodeId() != null;
  const open = popupStore.useState("open");
  const referenceElement = popupStore.useState("activeTriggerElement");
  const floatingElement = popupStore.useState(treatPopupAsFloatingElement ? "popupElement" : "positionerElement");
  const triggerElements = popupStore.context.triggerElements;
  const store = useRefWithInit(() => new FloatingRootStore({
    open,
    transitionStatus: void 0,
    referenceElement,
    floatingElement,
    triggerElements,
    onOpenChange,
    floatingId,
    syncOnly: true,
    nested
  })).current;
  useIsoLayoutEffect(() => {
    const valuesToSync = {
      open,
      floatingId,
      referenceElement,
      floatingElement
    };
    if (isElement(referenceElement)) {
      valuesToSync.domReferenceElement = referenceElement;
    }
    if (store.state.positionReference === store.state.referenceElement) {
      valuesToSync.positionReference = referenceElement;
    }
    store.update(valuesToSync);
  }, [open, floatingId, referenceElement, floatingElement, store]);
  store.context.onOpenChange = onOpenChange;
  store.context.nested = nested;
  return store;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFocus.js
var React35 = __toESM(require_react(), 1);
var isMacSafari = isMac && isSafari;
function useFocus(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const {
    events,
    dataRef
  } = store.context;
  const {
    enabled = true,
    delay
  } = props;
  const blockFocusRef = React35.useRef(false);
  const blockedReferenceRef = React35.useRef(null);
  const timeout = useTimeout();
  const keyboardModalityRef = React35.useRef(true);
  React35.useEffect(() => {
    const domReference = store.select("domReferenceElement");
    if (!enabled) {
      return void 0;
    }
    const win = getWindow(domReference);
    function onBlur() {
      const currentDomReference = store.select("domReferenceElement");
      if (!store.select("open") && isHTMLElement(currentDomReference) && currentDomReference === activeElement(ownerDocument(currentDomReference))) {
        blockFocusRef.current = true;
      }
    }
    function onKeyDown() {
      keyboardModalityRef.current = true;
    }
    function onPointerDown() {
      keyboardModalityRef.current = false;
    }
    return mergeCleanups(addEventListener(win, "blur", onBlur), isMacSafari && addEventListener(win, "keydown", onKeyDown, true), isMacSafari && addEventListener(win, "pointerdown", onPointerDown, true));
  }, [store, enabled]);
  React35.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    function onOpenChangeLocal(details) {
      if (details.reason === reason_parts_exports.triggerPress || details.reason === reason_parts_exports.escapeKey) {
        const referenceElement = store.select("domReferenceElement");
        if (isElement(referenceElement)) {
          blockedReferenceRef.current = referenceElement;
          blockFocusRef.current = true;
        }
      }
    }
    events.on("openchange", onOpenChangeLocal);
    return () => {
      events.off("openchange", onOpenChangeLocal);
    };
  }, [events, enabled, store]);
  const reference = React35.useMemo(() => ({
    onMouseLeave() {
      blockFocusRef.current = false;
      blockedReferenceRef.current = null;
    },
    onFocus(event) {
      const focusTarget = event.currentTarget;
      if (blockFocusRef.current) {
        if (blockedReferenceRef.current === focusTarget) {
          return;
        }
        blockFocusRef.current = false;
        blockedReferenceRef.current = null;
      }
      const target = getTarget(event.nativeEvent);
      if (isElement(target)) {
        if (isMacSafari && !event.relatedTarget) {
          if (!keyboardModalityRef.current && !isTypeableElement(target)) {
            return;
          }
        } else if (!matchesFocusVisible(target)) {
          return;
        }
      }
      const movedFromOtherEnabledTrigger = isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements);
      const {
        nativeEvent,
        currentTarget
      } = event;
      const delayValue = typeof delay === "function" ? delay() : delay;
      if (store.select("open") && movedFromOtherEnabledTrigger || delayValue === 0 || delayValue === void 0) {
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent, currentTarget));
        return;
      }
      timeout.start(delayValue, () => {
        if (blockFocusRef.current) {
          return;
        }
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent, currentTarget));
      });
    },
    onBlur(event) {
      blockFocusRef.current = false;
      blockedReferenceRef.current = null;
      const relatedTarget = event.relatedTarget;
      const nativeEvent = event.nativeEvent;
      const movedToFocusGuard = isElement(relatedTarget) && relatedTarget.hasAttribute(createAttribute("focus-guard")) && relatedTarget.getAttribute("data-type") === "outside";
      timeout.start(0, () => {
        const domReference = store.select("domReferenceElement");
        const activeEl = activeElement(ownerDocument(domReference));
        if (!relatedTarget && activeEl === domReference) {
          return;
        }
        if (contains(dataRef.current.floatingContext?.refs.floating.current, activeEl) || contains(domReference, activeEl) || movedToFocusGuard) {
          return;
        }
        const nextFocusedElement = relatedTarget ?? activeEl;
        if (isTargetInsideEnabledTrigger(nextFocusedElement, store.context.triggerElements)) {
          return;
        }
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerFocus, nativeEvent));
      });
    }
  }), [dataRef, store, timeout, delay]);
  return React35.useMemo(() => enabled ? {
    reference,
    trigger: reference
  } : {}, [enabled, reference]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverFloatingInteraction.js
var React36 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverInteractionSharedState.js
var HoverInteraction = class _HoverInteraction {
  constructor() {
    this.pointerType = void 0;
    this.interactedInside = false;
    this.handler = void 0;
    this.blockMouseMove = true;
    this.performedPointerEventsMutation = false;
    this.pointerEventsScopeElement = null;
    this.pointerEventsReferenceElement = null;
    this.pointerEventsFloatingElement = null;
    this.restTimeoutPending = false;
    this.openChangeTimeout = new Timeout();
    this.restTimeout = new Timeout();
    this.handleCloseOptions = void 0;
  }
  static create() {
    return new _HoverInteraction();
  }
  dispose = () => {
    this.openChangeTimeout.clear();
    this.restTimeout.clear();
  };
  disposeEffect = () => {
    return this.dispose;
  };
};
var pointerEventsMutationOwnerByScopeElement = /* @__PURE__ */ new WeakMap();
function clearSafePolygonPointerEventsMutation(instance) {
  if (!instance.performedPointerEventsMutation) {
    return;
  }
  const scopeElement = instance.pointerEventsScopeElement;
  if (scopeElement && pointerEventsMutationOwnerByScopeElement.get(scopeElement) === instance) {
    instance.pointerEventsScopeElement?.style.removeProperty("pointer-events");
    instance.pointerEventsReferenceElement?.style.removeProperty("pointer-events");
    instance.pointerEventsFloatingElement?.style.removeProperty("pointer-events");
    pointerEventsMutationOwnerByScopeElement.delete(scopeElement);
  }
  instance.performedPointerEventsMutation = false;
  instance.pointerEventsScopeElement = null;
  instance.pointerEventsReferenceElement = null;
  instance.pointerEventsFloatingElement = null;
}
function applySafePolygonPointerEventsMutation(instance, options) {
  const {
    scopeElement,
    referenceElement,
    floatingElement
  } = options;
  const existingOwner = pointerEventsMutationOwnerByScopeElement.get(scopeElement);
  if (existingOwner && existingOwner !== instance) {
    clearSafePolygonPointerEventsMutation(existingOwner);
  }
  clearSafePolygonPointerEventsMutation(instance);
  instance.performedPointerEventsMutation = true;
  instance.pointerEventsScopeElement = scopeElement;
  instance.pointerEventsReferenceElement = referenceElement;
  instance.pointerEventsFloatingElement = floatingElement;
  pointerEventsMutationOwnerByScopeElement.set(scopeElement, instance);
  scopeElement.style.pointerEvents = "none";
  referenceElement.style.pointerEvents = "auto";
  floatingElement.style.pointerEvents = "auto";
}
function useHoverInteractionSharedState(store) {
  const instance = useRefWithInit(HoverInteraction.create).current;
  const data = store.context.dataRef.current;
  if (!data.hoverInteractionState) {
    data.hoverInteractionState = instance;
  }
  useOnMount(data.hoverInteractionState.disposeEffect);
  return data.hoverInteractionState;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverFloatingInteraction.js
function useHoverFloatingInteraction(context, parameters = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const floatingElement = store.useState("floatingElement");
  const domReferenceElement = store.useState("domReferenceElement");
  const {
    dataRef
  } = store.context;
  const {
    enabled = true,
    closeDelay: closeDelayProp = 0,
    nodeId: nodeIdProp
  } = parameters;
  const instance = useHoverInteractionSharedState(store);
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const isClickLikeOpenEvent2 = useStableCallback(() => {
    return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
  });
  const isHoverOpen = useStableCallback(() => {
    const type = dataRef.current.openEvent?.type;
    return type?.includes("mouse") && type !== "mousedown";
  });
  const isRelatedTargetInsideEnabledTrigger = useStableCallback((target) => {
    return isTargetInsideEnabledTrigger(target, store.context.triggerElements);
  });
  const closeWithDelay = React36.useCallback((event) => {
    const closeDelay = getDelay(closeDelayProp, "close", instance.pointerType);
    const close = () => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
      tree?.events.emit("floating.closed", event);
    };
    if (closeDelay) {
      instance.openChangeTimeout.start(closeDelay, close);
    } else {
      instance.openChangeTimeout.clear();
      close();
    }
  }, [closeDelayProp, store, instance, tree]);
  const clearPointerEvents = useStableCallback(() => {
    clearSafePolygonPointerEventsMutation(instance);
  });
  const handleInteractInside = useStableCallback((event) => {
    const target = getTarget(event);
    if (!isInteractiveElement(target)) {
      instance.interactedInside = false;
      return;
    }
    instance.interactedInside = target?.closest("[aria-haspopup]") != null;
  });
  useIsoLayoutEffect(() => {
    if (!open) {
      instance.pointerType = void 0;
      instance.restTimeoutPending = false;
      instance.interactedInside = false;
      clearPointerEvents();
    }
  }, [open, instance, clearPointerEvents]);
  React36.useEffect(() => {
    return clearPointerEvents;
  }, [clearPointerEvents]);
  useIsoLayoutEffect(() => {
    if (!enabled) {
      return void 0;
    }
    if (open && instance.handleCloseOptions?.blockPointerEvents && isHoverOpen() && isElement(domReferenceElement) && floatingElement) {
      const ref = domReferenceElement;
      const floatingEl = floatingElement;
      const doc = ownerDocument(floatingElement);
      const parentFloating = tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.elements.floating;
      if (parentFloating) {
        parentFloating.style.pointerEvents = "";
      }
      const scopeElement = instance.handleCloseOptions?.getScope?.() ?? instance.pointerEventsScopeElement ?? parentFloating ?? ref.closest("[data-rootownerid]") ?? doc.body;
      applySafePolygonPointerEventsMutation(instance, {
        scopeElement,
        referenceElement: ref,
        floatingElement: floatingEl
      });
      return () => {
        clearPointerEvents();
      };
    }
    return void 0;
  }, [enabled, open, domReferenceElement, floatingElement, instance, isHoverOpen, tree, parentId, clearPointerEvents]);
  const childClosedTimeout = useTimeout();
  React36.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    function onFloatingMouseEnter() {
      instance.openChangeTimeout.clear();
      childClosedTimeout.clear();
      tree?.events.off("floating.closed", onNodeClosed);
      clearPointerEvents();
    }
    function onFloatingMouseLeave(event) {
      if (tree && parentId && getNodeChildren(tree.nodesRef.current, parentId).length > 0) {
        tree.events.on("floating.closed", onNodeClosed);
        return;
      }
      if (isRelatedTargetInsideEnabledTrigger(event.relatedTarget)) {
        return;
      }
      const currentNodeId = dataRef.current.floatingContext?.nodeId ?? nodeIdProp;
      const relatedTarget = event.relatedTarget;
      const isMovingIntoDescendantFloating = tree && currentNodeId && isElement(relatedTarget) && getNodeChildren(tree.nodesRef.current, currentNodeId, false).some((node) => contains(node.context?.elements.floating, relatedTarget));
      if (isMovingIntoDescendantFloating) {
        return;
      }
      if (instance.handler) {
        instance.handler(event);
        return;
      }
      clearPointerEvents();
      if (!isClickLikeOpenEvent2()) {
        closeWithDelay(event);
      }
    }
    function onNodeClosed(event) {
      if (!tree || !parentId || getNodeChildren(tree.nodesRef.current, parentId).length > 0) {
        return;
      }
      childClosedTimeout.start(0, () => {
        tree.events.off("floating.closed", onNodeClosed);
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
        tree.events.emit("floating.closed", event);
      });
    }
    const floating = floatingElement;
    return mergeCleanups(floating && addEventListener(floating, "mouseenter", onFloatingMouseEnter), floating && addEventListener(floating, "mouseleave", onFloatingMouseLeave), floating && addEventListener(floating, "pointerdown", handleInteractInside, true), () => {
      tree?.events.off("floating.closed", onNodeClosed);
    });
  }, [enabled, floatingElement, store, dataRef, nodeIdProp, isClickLikeOpenEvent2, isRelatedTargetInsideEnabledTrigger, closeWithDelay, clearPointerEvents, handleInteractInside, instance, tree, parentId, childClosedTimeout]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverReferenceInteraction.js
var React37 = __toESM(require_react(), 1);
var ReactDOM4 = __toESM(require_react_dom(), 1);
var EMPTY_REF = {
  current: null
};
function useHoverReferenceInteraction(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const {
    dataRef,
    events
  } = store.context;
  const {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true,
    triggerElementRef = EMPTY_REF,
    externalTree,
    isActiveTrigger = true,
    getHandleCloseContext,
    isClosing
  } = props;
  const tree = useFloatingTree(externalTree);
  const instance = useHoverInteractionSharedState(store);
  const isHoverCloseActiveRef = React37.useRef(false);
  const handleCloseRef = useValueAsRef(handleClose);
  const delayRef = useValueAsRef(delay);
  const restMsRef = useValueAsRef(restMs);
  const enabledRef = useValueAsRef(enabled);
  const isClosingRef = useValueAsRef(isClosing);
  if (isActiveTrigger) {
    instance.handleCloseOptions = handleCloseRef.current?.__options;
  }
  const isClickLikeOpenEvent2 = useStableCallback(() => {
    return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
  });
  const isRelatedTargetInsideEnabledTrigger = useStableCallback((target) => {
    return isTargetInsideEnabledTrigger(target, store.context.triggerElements);
  });
  const isOverInactiveTrigger = useStableCallback((currentDomReference, currentTarget, target) => {
    const allTriggers = store.context.triggerElements;
    if (allTriggers.hasElement(currentTarget)) {
      return !currentDomReference || !contains(currentDomReference, currentTarget);
    }
    if (!isElement(target)) {
      return false;
    }
    const targetElement = target;
    return allTriggers.hasMatchingElement((trigger) => contains(trigger, targetElement)) && (!currentDomReference || !contains(currentDomReference, targetElement));
  });
  const closeWithDelay = useStableCallback((event, runElseBranch = true) => {
    const closeDelay = getDelay(delayRef.current, "close", instance.pointerType);
    if (closeDelay) {
      instance.openChangeTimeout.start(closeDelay, () => {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
        tree?.events.emit("floating.closed", event);
      });
    } else if (runElseBranch) {
      instance.openChangeTimeout.clear();
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.triggerHover, event));
      tree?.events.emit("floating.closed", event);
    }
  });
  const cleanupMouseMoveHandler = useStableCallback(() => {
    if (!instance.handler) {
      return;
    }
    const doc = ownerDocument(store.select("domReferenceElement"));
    doc.removeEventListener("mousemove", instance.handler);
    instance.handler = void 0;
  });
  const clearPointerEvents = useStableCallback(() => {
    clearSafePolygonPointerEventsMutation(instance);
  });
  React37.useEffect(() => cleanupMouseMoveHandler, [cleanupMouseMoveHandler]);
  React37.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    function onOpenChangeLocal(details) {
      if (!details.open) {
        isHoverCloseActiveRef.current = details.reason === reason_parts_exports.triggerHover;
        cleanupMouseMoveHandler();
        instance.openChangeTimeout.clear();
        instance.restTimeout.clear();
        instance.blockMouseMove = true;
        instance.restTimeoutPending = false;
      } else {
        isHoverCloseActiveRef.current = false;
      }
    }
    events.on("openchange", onOpenChangeLocal);
    return () => {
      events.off("openchange", onOpenChangeLocal);
    };
  }, [enabled, events, instance, cleanupMouseMoveHandler]);
  React37.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const trigger = triggerElementRef.current ?? (isActiveTrigger ? store.select("domReferenceElement") : null);
    if (!isElement(trigger)) {
      return void 0;
    }
    function onMouseEnter(event) {
      instance.openChangeTimeout.clear();
      instance.blockMouseMove = false;
      if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
        return;
      }
      const restMsValue = getRestMs(restMsRef.current);
      const openDelay = getDelay(delayRef.current, "open", instance.pointerType);
      const eventTarget = getTarget(event);
      const currentTarget = event.currentTarget ?? null;
      const currentDomReference = store.select("domReferenceElement");
      let triggerNode = currentTarget;
      if (isElement(eventTarget) && !store.context.triggerElements.hasElement(eventTarget)) {
        for (const triggerElement of store.context.triggerElements.elements()) {
          if (contains(triggerElement, eventTarget)) {
            triggerNode = triggerElement;
            break;
          }
        }
      }
      if (isElement(currentTarget) && isElement(currentDomReference) && !store.context.triggerElements.hasElement(currentTarget) && contains(currentTarget, currentDomReference)) {
        triggerNode = currentDomReference;
      }
      const isOverInactive = triggerNode == null ? false : isOverInactiveTrigger(currentDomReference, triggerNode, eventTarget);
      const isOpen = store.select("open");
      const isInClosingTransition = isClosingRef.current?.() ?? store.select("transitionStatus") === "ending";
      const isHoverCloseTransition = !isOpen && isInClosingTransition && isHoverCloseActiveRef.current;
      const isReenteringSameTriggerDuringCloseTransition = !isOverInactive && isElement(triggerNode) && isElement(currentDomReference) && contains(currentDomReference, triggerNode) && isHoverCloseTransition;
      const isRestOnlyDelay = restMsValue > 0 && !openDelay;
      const shouldOpenImmediately = isOverInactive && (isOpen || isHoverCloseTransition) || isReenteringSameTriggerDuringCloseTransition;
      const shouldOpen = !isOpen || isOverInactive;
      if (shouldOpenImmediately) {
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
        return;
      }
      if (isRestOnlyDelay) {
        return;
      }
      if (openDelay) {
        instance.openChangeTimeout.start(openDelay, () => {
          if (shouldOpen) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
          }
        });
      } else if (shouldOpen) {
        store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, event, triggerNode));
      }
    }
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent2()) {
        clearPointerEvents();
        return;
      }
      cleanupMouseMoveHandler();
      const domReferenceElement = store.select("domReferenceElement");
      const doc = ownerDocument(domReferenceElement);
      instance.restTimeout.clear();
      instance.restTimeoutPending = false;
      const handleCloseContextBase = dataRef.current.floatingContext ?? getHandleCloseContext?.();
      const ignoreRelatedTargetTrigger = isRelatedTargetInsideEnabledTrigger(event.relatedTarget);
      if (ignoreRelatedTargetTrigger) {
        return;
      }
      if (handleCloseRef.current && handleCloseContextBase) {
        if (!store.select("open")) {
          instance.openChangeTimeout.clear();
        }
        const currentTrigger = triggerElementRef.current;
        instance.handler = handleCloseRef.current({
          ...handleCloseContextBase,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            if (enabledRef.current && !isClickLikeOpenEvent2() && currentTrigger === store.select("domReferenceElement")) {
              closeWithDelay(event, true);
            }
          }
        });
        doc.addEventListener("mousemove", instance.handler);
        instance.handler(event);
        return;
      }
      const shouldClose = instance.pointerType === "touch" ? !contains(store.select("floatingElement"), event.relatedTarget) : true;
      if (shouldClose) {
        closeWithDelay(event);
      }
    }
    if (move) {
      return mergeCleanups(addEventListener(trigger, "mousemove", onMouseEnter, {
        once: true
      }), addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
    }
    return mergeCleanups(addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
  }, [cleanupMouseMoveHandler, clearPointerEvents, dataRef, delayRef, closeWithDelay, store, enabled, handleCloseRef, instance, isActiveTrigger, isOverInactiveTrigger, isClickLikeOpenEvent2, isRelatedTargetInsideEnabledTrigger, mouseOnly, move, restMsRef, triggerElementRef, tree, enabledRef, getHandleCloseContext, isClosingRef]);
  return React37.useMemo(() => {
    if (!enabled) {
      return void 0;
    }
    function setPointerRef(event) {
      instance.pointerType = event.pointerType;
    }
    return {
      onPointerDown: setPointerRef,
      onPointerEnter: setPointerRef,
      onMouseMove(event) {
        const {
          nativeEvent
        } = event;
        const trigger = event.currentTarget;
        const currentDomReference = store.select("domReferenceElement");
        const currentOpen = store.select("open");
        const isOverInactive = isOverInactiveTrigger(currentDomReference, trigger, event.target);
        if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
          return;
        }
        if (currentOpen && isOverInactive && instance.handleCloseOptions?.blockPointerEvents) {
          const floatingElement = store.select("floatingElement");
          if (floatingElement) {
            const scopeElement = instance.handleCloseOptions?.getScope?.() ?? trigger.ownerDocument.body;
            applySafePolygonPointerEventsMutation(instance, {
              scopeElement,
              referenceElement: trigger,
              floatingElement
            });
          }
        }
        const restMsValue = getRestMs(restMsRef.current);
        if (currentOpen && !isOverInactive || restMsValue === 0) {
          return;
        }
        if (!isOverInactive && instance.restTimeoutPending && event.movementX ** 2 + event.movementY ** 2 < 2) {
          return;
        }
        instance.restTimeout.clear();
        function handleMouseMove() {
          instance.restTimeoutPending = false;
          if (isClickLikeOpenEvent2()) {
            return;
          }
          const latestOpen = store.select("open");
          if (!instance.blockMouseMove && (!latestOpen || isOverInactive)) {
            store.setOpen(true, createChangeEventDetails(reason_parts_exports.triggerHover, nativeEvent, trigger));
          }
        }
        if (instance.pointerType === "touch") {
          ReactDOM4.flushSync(() => {
            handleMouseMove();
          });
        } else if (isOverInactive && currentOpen) {
          handleMouseMove();
        } else {
          instance.restTimeoutPending = true;
          instance.restTimeout.start(restMsValue, handleMouseMove);
        }
      }
    };
  }, [enabled, instance, isClickLikeOpenEvent2, isOverInactiveTrigger, mouseOnly, store, restMsRef]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js
var React38 = __toESM(require_react(), 1);
function useInteractions(propsList = []) {
  const referenceDeps = propsList.map((key) => key?.reference);
  const floatingDeps = propsList.map((key) => key?.floating);
  const itemDeps = propsList.map((key) => key?.item);
  const triggerDeps = propsList.map((key) => key?.trigger);
  const getReferenceProps = React38.useCallback(
    (userProps) => mergeProps3(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React38.useCallback(
    (userProps) => mergeProps3(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React38.useCallback(
    (userProps) => mergeProps3(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  const getTriggerProps = React38.useCallback(
    (userProps) => mergeProps3(userProps, propsList, "trigger"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    triggerDeps
  );
  return React38.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    getTriggerProps
  }), [getReferenceProps, getFloatingProps, getItemProps, getTriggerProps]);
}
function mergeProps3(userProps, propsList, elementKey) {
  const eventHandlers = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  const outputProps = {};
  if (elementKey === "floating") {
    outputProps.tabIndex = -1;
    outputProps[FOCUSABLE_ATTRIBUTE] = "";
  }
  for (const key in userProps) {
    if (isItem && userProps) {
      if (key === ACTIVE_KEY || key === SELECTED_KEY) {
        continue;
      }
    }
    outputProps[key] = userProps[key];
  }
  for (let i2 = 0; i2 < propsList.length; i2 += 1) {
    let props;
    const propsOrGetProps = propsList[i2]?.[elementKey];
    if (typeof propsOrGetProps === "function") {
      props = userProps ? propsOrGetProps(userProps) : null;
    } else {
      props = propsOrGetProps;
    }
    if (!props) {
      continue;
    }
    mutablyMergeProps(outputProps, props, isItem, eventHandlers);
  }
  mutablyMergeProps(outputProps, userProps, isItem, eventHandlers);
  return outputProps;
}
function mutablyMergeProps(outputProps, props, isItem, eventHandlers) {
  for (const key in props) {
    const value = props[key];
    if (isItem && (key === ACTIVE_KEY || key === SELECTED_KEY)) {
      continue;
    }
    if (!key.startsWith("on")) {
      outputProps[key] = value;
    } else {
      if (!eventHandlers.has(key)) {
        eventHandlers.set(key, []);
      }
      if (typeof value === "function") {
        eventHandlers.get(key)?.push(value);
        outputProps[key] = (...args) => {
          return eventHandlers.get(key)?.map((fn) => fn(...args)).find((val) => val !== void 0);
        };
      }
    }
  }
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useRole.js
var React39 = __toESM(require_react(), 1);
var componentRoleToAriaRoleMap = /* @__PURE__ */ new Map([["select", "listbox"], ["combobox", "listbox"], ["label", false]]);
function useRole(context, props = {}) {
  const store = "rootStore" in context ? context.rootStore : context;
  const open = store.useState("open");
  const defaultFloatingId = store.useState("floatingId");
  const domReference = store.useState("domReferenceElement");
  const floatingElement = store.useState("floatingElement");
  const {
    role = "dialog"
  } = props;
  const defaultReferenceId = useId();
  const referenceId = domReference?.id || defaultReferenceId;
  const floatingId = React39.useMemo(() => getFloatingFocusElement(floatingElement)?.id || defaultFloatingId, [floatingElement, defaultFloatingId]);
  const ariaRole = componentRoleToAriaRoleMap.get(role) ?? role;
  const parentId = useFloatingParentNodeId();
  const isNested = parentId != null;
  const trigger = React39.useMemo(() => {
    if (ariaRole === "tooltip" || role === "label") {
      return EMPTY_OBJECT;
    }
    return {
      "aria-haspopup": ariaRole === "alertdialog" ? "dialog" : ariaRole,
      "aria-expanded": "false",
      ...ariaRole === "listbox" && {
        role: "combobox"
      },
      ...ariaRole === "menu" && isNested && {
        role: "menuitem"
      },
      ...role === "select" && {
        "aria-autocomplete": "none"
      },
      ...role === "combobox" && {
        "aria-autocomplete": "list"
      }
    };
  }, [ariaRole, isNested, role]);
  const reference = React39.useMemo(() => {
    if (ariaRole === "tooltip" || role === "label") {
      return {
        [`aria-${role === "label" ? "labelledby" : "describedby"}`]: open ? floatingId : void 0
      };
    }
    const triggerProps = trigger;
    return {
      ...triggerProps,
      "aria-expanded": open ? "true" : "false",
      "aria-controls": open ? floatingId : void 0,
      ...ariaRole === "menu" && {
        id: referenceId
      }
    };
  }, [ariaRole, floatingId, open, referenceId, role, trigger]);
  const floating = React39.useMemo(() => {
    const floatingProps = {
      id: floatingId,
      ...ariaRole && {
        role: ariaRole
      }
    };
    if (ariaRole === "tooltip" || role === "label") {
      return floatingProps;
    }
    return {
      ...floatingProps,
      ...ariaRole === "menu" && {
        "aria-labelledby": referenceId
      }
    };
  }, [ariaRole, floatingId, referenceId, role]);
  const item = React39.useCallback(({
    active,
    selected
  }) => {
    const commonProps = {
      role: "option",
      ...active && {
        id: `${floatingId}-fui-option`
      }
    };
    switch (role) {
      case "select":
      case "combobox":
        return {
          ...commonProps,
          "aria-selected": selected
        };
      default:
    }
    return {};
  }, [floatingId, role]);
  return React39.useMemo(() => ({
    reference,
    floating,
    item,
    trigger
  }), [reference, floating, trigger, item]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/safePolygon.js
var CURSOR_SPEED_THRESHOLD = 0.1;
var CURSOR_SPEED_THRESHOLD_SQUARED = CURSOR_SPEED_THRESHOLD * CURSOR_SPEED_THRESHOLD;
var POLYGON_BUFFER = 0.5;
function hasIntersectingEdge(pointX, pointY, xi, yi, xj, yj) {
  return yi >= pointY !== yj >= pointY && pointX <= (xj - xi) * (pointY - yi) / (yj - yi) + xi;
}
function isPointInQuadrilateral(pointX, pointY, x1, y1, x2, y2, x3, y3, x4, y4) {
  let isInsideValue = false;
  if (hasIntersectingEdge(pointX, pointY, x1, y1, x2, y2)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x2, y2, x3, y3)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x3, y3, x4, y4)) {
    isInsideValue = !isInsideValue;
  }
  if (hasIntersectingEdge(pointX, pointY, x4, y4, x1, y1)) {
    isInsideValue = !isInsideValue;
  }
  return isInsideValue;
}
function isInsideRect(pointX, pointY, rect) {
  return pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height;
}
function isInsideAxisAlignedRect(pointX, pointY, x1, y1, x2, y2) {
  const minX = Math.min(x1, x2);
  const maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2);
  const maxY = Math.max(y1, y2);
  return pointX >= minX && pointX <= maxX && pointY >= minY && pointY <= maxY;
}
function safePolygon(options = {}) {
  const {
    blockPointerEvents = false
  } = options;
  const timeout = new Timeout();
  const fn = ({
    x: x2,
    y: y2,
    placement,
    elements,
    onClose,
    nodeId,
    tree
  }) => {
    const side = placement?.split("-")[0];
    let hasLanded = false;
    let lastX = null;
    let lastY = null;
    let lastCursorTime = typeof performance !== "undefined" ? performance.now() : 0;
    function isCursorMovingSlowly(nextX, nextY) {
      const currentTime = performance.now();
      const elapsedTime = currentTime - lastCursorTime;
      if (lastX === null || lastY === null || elapsedTime === 0) {
        lastX = nextX;
        lastY = nextY;
        lastCursorTime = currentTime;
        return false;
      }
      const deltaX = nextX - lastX;
      const deltaY = nextY - lastY;
      const distanceSquared = deltaX * deltaX + deltaY * deltaY;
      const thresholdSquared = elapsedTime * elapsedTime * CURSOR_SPEED_THRESHOLD_SQUARED;
      lastX = nextX;
      lastY = nextY;
      lastCursorTime = currentTime;
      return distanceSquared < thresholdSquared;
    }
    function close() {
      timeout.clear();
      onClose();
    }
    return function onMouseMove(event) {
      timeout.clear();
      const domReference = elements.domReference;
      const floating = elements.floating;
      if (!domReference || !floating || side == null || x2 == null || y2 == null) {
        return void 0;
      }
      const {
        clientX,
        clientY
      } = event;
      const target = getTarget(event);
      const isLeave = event.type === "mouseleave";
      const isOverFloatingEl = contains(floating, target);
      const isOverReferenceEl = contains(domReference, target);
      if (isOverFloatingEl) {
        hasLanded = true;
        if (!isLeave) {
          return void 0;
        }
      }
      if (isOverReferenceEl) {
        hasLanded = false;
        if (!isLeave) {
          hasLanded = true;
          return void 0;
        }
      }
      if (isLeave && isElement(event.relatedTarget) && contains(floating, event.relatedTarget)) {
        return void 0;
      }
      function hasOpenChildNode() {
        return Boolean(tree && getNodeChildren(tree.nodesRef.current, nodeId).length > 0);
      }
      function closeIfNoOpenChild() {
        if (!hasOpenChildNode()) {
          close();
        }
      }
      if (hasOpenChildNode()) {
        return void 0;
      }
      const refRect = domReference.getBoundingClientRect();
      const rect = floating.getBoundingClientRect();
      const cursorLeaveFromRight = x2 > rect.right - rect.width / 2;
      const cursorLeaveFromBottom = y2 > rect.bottom - rect.height / 2;
      const isFloatingWider = rect.width > refRect.width;
      const isFloatingTaller = rect.height > refRect.height;
      const left = (isFloatingWider ? refRect : rect).left;
      const right = (isFloatingWider ? refRect : rect).right;
      const top = (isFloatingTaller ? refRect : rect).top;
      const bottom = (isFloatingTaller ? refRect : rect).bottom;
      if (side === "top" && y2 >= refRect.bottom - 1 || side === "bottom" && y2 <= refRect.top + 1 || side === "left" && x2 >= refRect.right - 1 || side === "right" && x2 <= refRect.left + 1) {
        closeIfNoOpenChild();
        return void 0;
      }
      let isInsideTroughRect = false;
      switch (side) {
        case "top":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, refRect.top + 1, right, rect.bottom - 1);
          break;
        case "bottom":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, rect.top + 1, right, refRect.bottom - 1);
          break;
        case "left":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, rect.right - 1, bottom, refRect.left + 1, top);
          break;
        case "right":
          isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, refRect.right - 1, bottom, rect.left + 1, top);
          break;
        default:
      }
      if (isInsideTroughRect) {
        return void 0;
      }
      if (hasLanded && !isInsideRect(clientX, clientY, refRect)) {
        closeIfNoOpenChild();
        return void 0;
      }
      if (!isLeave && isCursorMovingSlowly(clientX, clientY)) {
        closeIfNoOpenChild();
        return void 0;
      }
      let isInsidePolygon = false;
      switch (side) {
        case "top": {
          const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneX = isFloatingWider ? x2 + cursorXOffset : cursorLeaveFromRight ? x2 + cursorXOffset : x2 - cursorXOffset;
          const cursorPointTwoX = isFloatingWider ? x2 - cursorXOffset : cursorLeaveFromRight ? x2 + cursorXOffset : x2 - cursorXOffset;
          const cursorPointY = y2 + POLYGON_BUFFER + 1;
          const commonYLeft = cursorLeaveFromRight ? rect.bottom - POLYGON_BUFFER : isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top;
          const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top : rect.bottom - POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
          break;
        }
        case "bottom": {
          const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneX = isFloatingWider ? x2 + cursorXOffset : cursorLeaveFromRight ? x2 + cursorXOffset : x2 - cursorXOffset;
          const cursorPointTwoX = isFloatingWider ? x2 - cursorXOffset : cursorLeaveFromRight ? x2 + cursorXOffset : x2 - cursorXOffset;
          const cursorPointY = y2 - POLYGON_BUFFER;
          const commonYLeft = cursorLeaveFromRight ? rect.top + POLYGON_BUFFER : isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom;
          const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom : rect.top + POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
          break;
        }
        case "left": {
          const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneY = isFloatingTaller ? y2 + cursorYOffset : cursorLeaveFromBottom ? y2 + cursorYOffset : y2 - cursorYOffset;
          const cursorPointTwoY = isFloatingTaller ? y2 - cursorYOffset : cursorLeaveFromBottom ? y2 + cursorYOffset : y2 - cursorYOffset;
          const cursorPointX = x2 + POLYGON_BUFFER + 1;
          const commonXTop = cursorLeaveFromBottom ? rect.right - POLYGON_BUFFER : isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left;
          const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left : rect.right - POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, commonXTop, rect.top, commonXBottom, rect.bottom, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY);
          break;
        }
        case "right": {
          const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
          const cursorPointOneY = isFloatingTaller ? y2 + cursorYOffset : cursorLeaveFromBottom ? y2 + cursorYOffset : y2 - cursorYOffset;
          const cursorPointTwoY = isFloatingTaller ? y2 - cursorYOffset : cursorLeaveFromBottom ? y2 + cursorYOffset : y2 - cursorYOffset;
          const cursorPointX = x2 - POLYGON_BUFFER;
          const commonXTop = cursorLeaveFromBottom ? rect.left + POLYGON_BUFFER : isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right;
          const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right : rect.left + POLYGON_BUFFER;
          isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY, commonXTop, rect.top, commonXBottom, rect.bottom);
          break;
        }
        default:
      }
      if (!isInsidePolygon) {
        closeIfNoOpenChild();
      } else if (!hasLanded) {
        timeout.start(40, closeIfNoOpenChild);
      }
      return void 0;
    };
  };
  fn.__options = {
    ...options,
    blockPointerEvents
  };
  return fn;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js
var React41 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useValueChanged.js
var React40 = __toESM(require_react(), 1);
function useValueChanged(value, onChange) {
  const valueRef = React40.useRef(value);
  const onChangeCallback = useStableCallback(onChange);
  useIsoLayoutEffect(() => {
    if (valueRef.current === value) {
      return;
    }
    onChangeCallback(valueRef.current);
  }, [value, onChangeCallback]);
  useIsoLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js
function useOpenInteractionType(open) {
  const [openMethod, setOpenMethod] = React41.useState(null);
  const handleTriggerClick = useStableCallback((_, interactionType) => {
    if (!open) {
      setOpenMethod(interactionType || // On iOS Safari, the hitslop around touch targets means tapping outside an element's
      // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
      // will be "" in that case.
      (isIOS ? "touch" : ""));
    }
  });
  useValueChanged(open, (previousOpen) => {
    if (previousOpen && !open) {
      setOpenMethod(null);
    }
  });
  const {
    onClick,
    onPointerDown
  } = useEnhancedClickHandler(handleTriggerClick);
  return React41.useMemo(() => ({
    openMethod,
    triggerProps: {
      onClick,
      onPointerDown
    }
  }), [openMethod, onClick, onPointerDown]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/popupStateMapping.js
var CommonPopupDataAttributes = (function(CommonPopupDataAttributes2) {
  CommonPopupDataAttributes2["open"] = "data-open";
  CommonPopupDataAttributes2["closed"] = "data-closed";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
  CommonPopupDataAttributes2[CommonPopupDataAttributes2["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
  CommonPopupDataAttributes2["anchorHidden"] = "data-anchor-hidden";
  CommonPopupDataAttributes2["side"] = "data-side";
  CommonPopupDataAttributes2["align"] = "data-align";
  return CommonPopupDataAttributes2;
})({});
var CommonTriggerDataAttributes = /* @__PURE__ */ (function(CommonTriggerDataAttributes2) {
  CommonTriggerDataAttributes2["popupOpen"] = "data-popup-open";
  CommonTriggerDataAttributes2["pressed"] = "data-pressed";
  return CommonTriggerDataAttributes2;
})({});
var TRIGGER_HOOK = {
  [CommonTriggerDataAttributes.popupOpen]: ""
};
var PRESSABLE_TRIGGER_HOOK = {
  [CommonTriggerDataAttributes.popupOpen]: "",
  [CommonTriggerDataAttributes.pressed]: ""
};
var POPUP_OPEN_HOOK = {
  [CommonPopupDataAttributes.open]: ""
};
var POPUP_CLOSED_HOOK = {
  [CommonPopupDataAttributes.closed]: ""
};
var ANCHOR_HIDDEN_HOOK = {
  [CommonPopupDataAttributes.anchorHidden]: ""
};
var triggerOpenStateMapping = {
  open(value) {
    if (value) {
      return TRIGGER_HOOK;
    }
    return null;
  }
};
var pressableTriggerOpenStateMapping = {
  open(value) {
    if (value) {
      return PRESSABLE_TRIGGER_HOOK;
    }
    return null;
  }
};
var popupStateMapping = {
  open(value) {
    if (value) {
      return POPUP_OPEN_HOOK;
    }
    return POPUP_CLOSED_HOOK;
  },
  anchorHidden(value) {
    if (value) {
      return ANCHOR_HIDDEN_HOOK;
    }
    return null;
  }
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js
var React42 = __toESM(require_react(), 1);
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var InternalBackdrop = /* @__PURE__ */ React42.forwardRef(function InternalBackdrop2(props, ref) {
  const {
    cutout,
    ...otherProps
  } = props;
  let clipPath;
  if (cutout) {
    const rect = cutout.getBoundingClientRect();
    clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", {
    ref,
    role: "presentation",
    "data-base-ui-inert": "",
    ...otherProps,
    style: {
      position: "fixed",
      inset: 0,
      userSelect: "none",
      WebkitUserSelect: "none",
      clipPath
    }
  });
});
if (true) InternalBackdrop.displayName = "InternalBackdrop";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js
var React43 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/floating-ui-react/middleware/arrow.js
var baseArrow = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x: x2,
      y: y2,
      placement,
      rects,
      platform: platform3,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0,
      offsetParent = "real"
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x: x2,
      y: y2
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform3.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = offsetParent === "real" ? await platform3.getOffsetParent?.(element) : elements.floating;
    let clientSize = elements.floating[clientProp] || rects.floating[length];
    if (!clientSize || !await platform3.isElement?.(arrowOffsetParent)) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
    const min2 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset4 = clamp(min2, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset4 && rects.reference[length] / 2 - (center < min2 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min2 ? center - min2 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset4,
        centerOffset: center - offset4 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
var arrow4 = (options, deps) => ({
  ...baseArrow(options),
  options: [options, deps]
});

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/hideMiddleware.js
var hide4 = {
  name: "hide",
  async fn(state) {
    const {
      width,
      height,
      x: x2,
      y: y2
    } = state.rects.reference;
    const anchorHidden = width === 0 && height === 0 && x2 === 0 && y2 === 0;
    const nativeHideResult = await hide3().fn(state);
    return {
      data: {
        referenceHidden: nativeHideResult.data?.referenceHidden || anchorHidden
      }
    };
  }
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/adaptiveOriginMiddleware.js
var DEFAULT_SIDES = {
  sideX: "left",
  sideY: "top"
};
var adaptiveOrigin = {
  name: "adaptiveOrigin",
  async fn(state) {
    const {
      x: rawX,
      y: rawY,
      rects: {
        floating: floatRect
      },
      elements: {
        floating
      },
      platform: platform3,
      strategy,
      placement
    } = state;
    const win = getWindow(floating);
    const styles = win.getComputedStyle(floating);
    const hasTransition = styles.transitionDuration !== "0s" && styles.transitionDuration !== "";
    if (!hasTransition) {
      return {
        x: rawX,
        y: rawY,
        data: DEFAULT_SIDES
      };
    }
    const offsetParent = await platform3.getOffsetParent?.(floating);
    let offsetDimensions = {
      width: 0,
      height: 0
    };
    if (strategy === "fixed" && win?.visualViewport) {
      offsetDimensions = {
        width: win.visualViewport.width,
        height: win.visualViewport.height
      };
    } else if (offsetParent === win) {
      const doc = ownerDocument(floating);
      offsetDimensions = {
        width: doc.documentElement.clientWidth,
        height: doc.documentElement.clientHeight
      };
    } else if (await platform3.isElement?.(offsetParent)) {
      offsetDimensions = await platform3.getDimensions(offsetParent);
    }
    const currentSide = getSide(placement);
    let x2 = rawX;
    let y2 = rawY;
    if (currentSide === "left") {
      x2 = offsetDimensions.width - (rawX + floatRect.width);
    }
    if (currentSide === "top") {
      y2 = offsetDimensions.height - (rawY + floatRect.height);
    }
    const sideX = currentSide === "left" ? "right" : DEFAULT_SIDES.sideX;
    const sideY = currentSide === "top" ? "bottom" : DEFAULT_SIDES.sideY;
    return {
      x: x2,
      y: y2,
      data: {
        sideX,
        sideY
      }
    };
  }
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js
function getLogicalSide(sideParam, renderedSide, isRtl) {
  const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
  const logicalRight = isRtl ? "inline-start" : "inline-end";
  const logicalLeft = isRtl ? "inline-end" : "inline-start";
  return {
    top: "top",
    right: isLogicalSideParam ? logicalRight : "right",
    bottom: "bottom",
    left: isLogicalSideParam ? logicalLeft : "left"
  }[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
  const {
    rects,
    placement
  } = state;
  const data = {
    side: getLogicalSide(sideParam, getSide(placement), isRtl),
    align: getAlignment(placement) || "center",
    anchor: {
      width: rects.reference.width,
      height: rects.reference.height
    },
    positioner: {
      width: rects.floating.width,
      height: rects.floating.height
    }
  };
  return data;
}
function useAnchorPositioning(params) {
  const {
    // Public parameters
    anchor,
    positionMethod = "absolute",
    side: sideParam = "bottom",
    sideOffset = 0,
    align = "center",
    alignOffset = 0,
    collisionBoundary,
    collisionPadding: collisionPaddingParam = 5,
    sticky = false,
    arrowPadding = 5,
    disableAnchorTracking = false,
    // Private parameters
    keepMounted = false,
    floatingRootContext,
    mounted,
    collisionAvoidance,
    shiftCrossAxis = false,
    nodeId,
    adaptiveOrigin: adaptiveOrigin2,
    lazyFlip = false,
    externalTree
  } = params;
  const [mountSide, setMountSide] = React43.useState(null);
  if (!mounted && mountSide !== null) {
    setMountSide(null);
  }
  const collisionAvoidanceSide = collisionAvoidance.side || "flip";
  const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
  const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
  const anchorFn = typeof anchor === "function" ? anchor : void 0;
  const anchorFnCallback = useStableCallback(anchorFn);
  const anchorDep = anchorFn ? anchorFnCallback : anchor;
  const anchorValueRef = useValueAsRef(anchor);
  const mountedRef = useValueAsRef(mounted);
  const direction = useDirection();
  const isRtl = direction === "rtl";
  const side = mountSide || {
    top: "top",
    right: "right",
    bottom: "bottom",
    left: "left",
    "inline-end": isRtl ? "left" : "right",
    "inline-start": isRtl ? "right" : "left"
  }[sideParam];
  const placement = align === "center" ? side : `${side}-${align}`;
  let collisionPadding = collisionPaddingParam;
  const bias = 1;
  const biasTop = sideParam === "bottom" ? bias : 0;
  const biasBottom = sideParam === "top" ? bias : 0;
  const biasLeft = sideParam === "right" ? bias : 0;
  const biasRight = sideParam === "left" ? bias : 0;
  if (typeof collisionPadding === "number") {
    collisionPadding = {
      top: collisionPadding + biasTop,
      right: collisionPadding + biasRight,
      bottom: collisionPadding + biasBottom,
      left: collisionPadding + biasLeft
    };
  } else if (collisionPadding) {
    collisionPadding = {
      top: (collisionPadding.top || 0) + biasTop,
      right: (collisionPadding.right || 0) + biasRight,
      bottom: (collisionPadding.bottom || 0) + biasBottom,
      left: (collisionPadding.left || 0) + biasLeft
    };
  }
  const commonCollisionProps = {
    boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
    padding: collisionPadding
  };
  const arrowRef = React43.useRef(null);
  const sideOffsetRef = useValueAsRef(sideOffset);
  const alignOffsetRef = useValueAsRef(alignOffset);
  const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
  const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
  const middleware = [offset3((state) => {
    const data = getOffsetData(state, sideParam, isRtl);
    const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
    const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
    return {
      mainAxis: sideAxis,
      crossAxis: alignAxis,
      alignmentAxis: alignAxis
    };
  }, [sideOffsetDep, alignOffsetDep, isRtl, sideParam])];
  const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
  const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
  const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip3({
    ...commonCollisionProps,
    // Ensure the popup flips if it's been limited by its --available-height and it resizes.
    // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
    padding: {
      top: collisionPadding.top + bias,
      right: collisionPadding.right + bias,
      bottom: collisionPadding.bottom + bias,
      left: collisionPadding.left + bias
    },
    mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
    crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
    fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
  });
  const shiftMiddleware = shiftDisabled ? null : shift3((data) => {
    const html = ownerDocument(data.elements.floating).documentElement;
    return {
      ...commonCollisionProps,
      // Use the Layout Viewport to avoid shifting around when pinch-zooming
      // for context menus.
      rootBoundary: shiftCrossAxis ? {
        x: 0,
        y: 0,
        width: html.clientWidth,
        height: html.clientHeight
      } : void 0,
      mainAxis: collisionAvoidanceAlign !== "none",
      crossAxis: crossAxisShiftEnabled,
      limiter: sticky || shiftCrossAxis ? void 0 : limitShift3((limitData) => {
        if (!arrowRef.current) {
          return {};
        }
        const {
          width,
          height
        } = arrowRef.current.getBoundingClientRect();
        const sideAxis = getSideAxis(getSide(limitData.placement));
        const arrowSize = sideAxis === "y" ? width : height;
        const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
        return {
          offset: arrowSize / 2 + offsetAmount / 2
        };
      })
    };
  }, [commonCollisionProps, sticky, shiftCrossAxis, collisionPadding, collisionAvoidanceAlign]);
  if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || align === "center") {
    middleware.push(shiftMiddleware, flipMiddleware);
  } else {
    middleware.push(flipMiddleware, shiftMiddleware);
  }
  middleware.push(size3({
    ...commonCollisionProps,
    apply({
      elements: {
        floating
      },
      availableWidth,
      availableHeight,
      rects
    }) {
      if (!mountedRef.current) {
        return;
      }
      const floatingStyle = floating.style;
      floatingStyle.setProperty("--available-width", `${availableWidth}px`);
      floatingStyle.setProperty("--available-height", `${availableHeight}px`);
      const dpr = getWindow(floating).devicePixelRatio || 1;
      const {
        x: x3,
        y: y3,
        width,
        height
      } = rects.reference;
      const anchorWidth = (Math.round((x3 + width) * dpr) - Math.round(x3 * dpr)) / dpr;
      const anchorHeight = (Math.round((y3 + height) * dpr) - Math.round(y3 * dpr)) / dpr;
      floatingStyle.setProperty("--anchor-width", `${anchorWidth}px`);
      floatingStyle.setProperty("--anchor-height", `${anchorHeight}px`);
    }
  }), arrow4(() => ({
    // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
    // we'll create a fake element.
    element: arrowRef.current || ownerDocument(arrowRef.current).createElement("div"),
    padding: arrowPadding,
    offsetParent: "floating"
  }), [arrowPadding]), {
    name: "transformOrigin",
    fn(state) {
      const {
        elements: elements2,
        middlewareData: middlewareData2,
        placement: renderedPlacement2,
        rects,
        y: y3
      } = state;
      const currentRenderedSide = getSide(renderedPlacement2);
      const currentRenderedAxis = getSideAxis(currentRenderedSide);
      const arrowEl = arrowRef.current;
      const arrowX = middlewareData2.arrow?.x || 0;
      const arrowY = middlewareData2.arrow?.y || 0;
      const arrowWidth = arrowEl?.clientWidth || 0;
      const arrowHeight = arrowEl?.clientHeight || 0;
      const transformX = arrowX + arrowWidth / 2;
      const transformY = arrowY + arrowHeight / 2;
      const shiftY = Math.abs(middlewareData2.shift?.y || 0);
      const halfAnchorHeight = rects.reference.height / 2;
      const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
      const isOverlappingAnchor = shiftY > sideOffsetValue;
      const adjacentTransformOrigin = {
        top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
        bottom: `${transformX}px ${-sideOffsetValue}px`,
        left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
        right: `${-sideOffsetValue}px ${transformY}px`
      }[currentRenderedSide];
      const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y3}px`;
      elements2.floating.style.setProperty("--transform-origin", crossAxisShiftEnabled && currentRenderedAxis === "y" && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
      return {};
    }
  }, hide4, adaptiveOrigin2);
  useIsoLayoutEffect(() => {
    if (!mounted && floatingRootContext) {
      floatingRootContext.update({
        referenceElement: null,
        floatingElement: null,
        domReferenceElement: null,
        positionReference: null
      });
    }
  }, [mounted, floatingRootContext]);
  const autoUpdateOptions = React43.useMemo(() => ({
    elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
    layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
  }), [disableAnchorTracking]);
  const {
    refs,
    elements,
    x: x2,
    y: y2,
    middlewareData,
    update: update2,
    placement: renderedPlacement,
    context,
    isPositioned,
    floatingStyles: originalFloatingStyles
  } = useFloating2({
    rootContext: floatingRootContext,
    open: keepMounted ? mounted : void 0,
    placement,
    middleware,
    strategy: positionMethod,
    whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
    nodeId,
    externalTree
  });
  const {
    sideX,
    sideY
  } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
  const resolvedPosition = isPositioned ? positionMethod : "fixed";
  const floatingStyles = React43.useMemo(() => {
    const base = adaptiveOrigin2 ? {
      position: resolvedPosition,
      [sideX]: x2,
      [sideY]: y2
    } : {
      position: resolvedPosition,
      ...originalFloatingStyles
    };
    if (!isPositioned) {
      base.opacity = 0;
    }
    return base;
  }, [adaptiveOrigin2, resolvedPosition, sideX, x2, sideY, y2, originalFloatingStyles, isPositioned]);
  const registeredPositionReferenceRef = React43.useRef(null);
  useIsoLayoutEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
    const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
    const finalAnchor = unwrappedElement || null;
    if (finalAnchor !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(finalAnchor);
      registeredPositionReferenceRef.current = finalAnchor;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React43.useEffect(() => {
    if (!mounted) {
      return;
    }
    const anchorValue = anchorValueRef.current;
    if (typeof anchorValue === "function") {
      return;
    }
    if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
      refs.setPositionReference(anchorValue.current);
      registeredPositionReferenceRef.current = anchorValue.current;
    }
  }, [mounted, refs, anchorDep, anchorValueRef]);
  React43.useEffect(() => {
    if (keepMounted && mounted && elements.domReference && elements.floating) {
      return autoUpdate(elements.domReference, elements.floating, update2, autoUpdateOptions);
    }
    return void 0;
  }, [keepMounted, mounted, elements, update2, autoUpdateOptions]);
  const renderedSide = getSide(renderedPlacement);
  const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
  const renderedAlign = getAlignment(renderedPlacement) || "center";
  const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
  useIsoLayoutEffect(() => {
    if (lazyFlip && mounted && isPositioned) {
      setMountSide(renderedSide);
    }
  }, [lazyFlip, mounted, isPositioned, renderedSide]);
  const arrowStyles = React43.useMemo(() => ({
    position: "absolute",
    top: middlewareData.arrow?.y,
    left: middlewareData.arrow?.x
  }), [middlewareData.arrow]);
  const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
  return React43.useMemo(() => ({
    positionerStyles: floatingStyles,
    arrowStyles,
    arrowRef,
    arrowUncentered,
    side: logicalRenderedSide,
    align: renderedAlign,
    physicalSide: renderedSide,
    anchorHidden,
    refs,
    context,
    isPositioned,
    update: update2
  }), [floatingStyles, arrowStyles, arrowRef, arrowUncentered, logicalRenderedSide, renderedAlign, renderedSide, anchorHidden, refs, context, isPositioned, update2]);
}
function isRef(param) {
  return param != null && "current" in param;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js
function getDisabledMountTransitionStyles(transitionStatus) {
  return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/usePositioner.js
function usePositioner(componentProps, state, {
  styles,
  transitionStatus,
  props,
  refs,
  hidden,
  inert = false
}) {
  const style = {
    ...styles
  };
  if (inert) {
    style.pointerEvents = "none";
  }
  return useRenderElement2("div", componentProps, {
    state,
    ref: refs,
    props: [{
      role: "presentation",
      hidden,
      style
    }, getDisabledMountTransitionStyles(transitionStatus), props],
    stateAttributesMapping: popupStateMapping
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/useAnchoredPopupScrollLock.js
var React44 = __toESM(require_react(), 1);
var VIEWPORT_WIDTH_TOLERANCE_PX = 20;
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
  const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = React44.useState(false);
  useIsoLayoutEffect(() => {
    if (!enabled || !touchOpen || positionerElement == null) {
      setTouchOpenShouldLockScroll(false);
      return;
    }
    const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
    const popupWidth = positionerElement.offsetWidth;
    setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
  }, [enabled, touchOpen, positionerElement]);
  useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/button/Button.js
var React45 = __toESM(require_react(), 1);
var Button = /* @__PURE__ */ React45.forwardRef(function Button2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    disabled: disabled3 = false,
    focusableWhenDisabled = false,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled3,
    focusableWhenDisabled,
    native: nativeButton
  });
  const state = {
    disabled: disabled3
  };
  return useRenderElement2("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [elementProps, getButtonProps]
  });
});
if (true) Button.displayName = "Button";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js
var React46 = __toESM(require_react(), 1);
var ToolbarRootContext = /* @__PURE__ */ React46.createContext(void 0);
if (true) ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
  const context = React46.useContext(ToolbarRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>." : formatErrorMessage_default(69));
  }
  return context;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/popups/useTriggerFocusGuards.js
var React47 = __toESM(require_react(), 1);
var ReactDOM5 = __toESM(require_react_dom(), 1);
function useTriggerFocusGuards(store, triggerElementRef) {
  const preFocusGuardRef = React47.useRef(null);
  const handlePreFocusGuardFocus = useStableCallback((event) => {
    ReactDOM5.flushSync(() => {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
    });
    const previousTabbable = getTabbableBeforeElement(preFocusGuardRef.current);
    previousTabbable?.focus();
  });
  const handleFocusTargetFocus = useStableCallback((event) => {
    const positionerElement = store.select("positionerElement");
    if (positionerElement && isOutsideEvent(event, positionerElement)) {
      store.context.beforeContentFocusGuardRef.current?.focus();
    } else {
      ReactDOM5.flushSync(() => {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.focusOut, event.nativeEvent, event.currentTarget));
      });
      let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
      while (nextTabbable !== null && contains(positionerElement, nextTabbable)) {
        const prevTabbable = nextTabbable;
        nextTabbable = getNextTabbable(nextTabbable);
        if (nextTabbable === prevTabbable) {
          break;
        }
      }
      nextTabbable?.focus();
    }
  });
  return {
    preFocusGuardRef,
    handlePreFocusGuardFocus,
    handleFocusTargetFocus
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/usePopupViewport.js
var React49 = __toESM(require_react(), 1);
var ReactDOM6 = __toESM(require_react_dom(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js
var React48 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/getCssDimensions.js
function getCssDimensions2(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js
var DEFAULT_ENABLED = () => true;
function usePopupAutoResize(parameters) {
  const {
    popupElement,
    positionerElement,
    content,
    mounted,
    enabled = DEFAULT_ENABLED,
    onMeasureLayout: onMeasureLayoutParam,
    onMeasureLayoutComplete: onMeasureLayoutCompleteParam,
    side,
    direction
  } = parameters;
  const runOnceAnimationsFinish = useAnimationsFinished(popupElement, true, false);
  const animationFrame = useAnimationFrame();
  const committedDimensionsRef = React48.useRef(null);
  const liveDimensionsRef = React48.useRef(null);
  const isInitialRenderRef = React48.useRef(true);
  const restoreAnchoringStylesRef = React48.useRef(NOOP);
  const onMeasureLayout = useStableCallback(onMeasureLayoutParam);
  const onMeasureLayoutComplete = useStableCallback(onMeasureLayoutCompleteParam);
  const anchoringStyles = React48.useMemo(() => {
    let isOriginSide = side === "top";
    let isPhysicalLeft = side === "left";
    if (direction === "rtl") {
      isOriginSide = isOriginSide || side === "inline-end";
      isPhysicalLeft = isPhysicalLeft || side === "inline-end";
    } else {
      isOriginSide = isOriginSide || side === "inline-start";
      isPhysicalLeft = isPhysicalLeft || side === "inline-start";
    }
    return isOriginSide ? {
      position: "absolute",
      [side === "top" ? "bottom" : "top"]: "0",
      [isPhysicalLeft ? "right" : "left"]: "0"
    } : EMPTY_OBJECT;
  }, [side, direction]);
  useIsoLayoutEffect(() => {
    if (!mounted || !enabled() || typeof ResizeObserver !== "function") {
      restoreAnchoringStylesRef.current = NOOP;
      isInitialRenderRef.current = true;
      committedDimensionsRef.current = null;
      liveDimensionsRef.current = null;
      return void 0;
    }
    if (!popupElement || !positionerElement) {
      return void 0;
    }
    restoreAnchoringStylesRef.current = applyElementStyles(popupElement, anchoringStyles);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        liveDimensionsRef.current = {
          width: Math.ceil(entry.borderBoxSize[0].inlineSize),
          height: Math.ceil(entry.borderBoxSize[0].blockSize)
        };
      }
    });
    observer.observe(popupElement);
    setPopupCssSize(popupElement, "auto");
    const restorePopupPosition = overrideElementStyle(popupElement, "position", "static");
    const restorePopupTransform = overrideElementStyle(popupElement, "transform", "none");
    const restorePopupScale = overrideElementStyle(popupElement, "scale", "1");
    const restorePositionerAvailableSize = applyElementStyles(positionerElement, {
      "--available-width": "max-content",
      "--available-height": "max-content"
    });
    function restoreMeasurementOverrides() {
      restorePopupPosition();
      restorePopupTransform();
      restorePositionerAvailableSize();
    }
    function restoreMeasurementOverridesIncludingScale() {
      restoreMeasurementOverrides();
      restorePopupScale();
    }
    onMeasureLayout?.();
    if (isInitialRenderRef.current || committedDimensionsRef.current === null) {
      setPositionerCssSize(positionerElement, "max-content");
      const dimensions = getCssDimensions2(popupElement);
      committedDimensionsRef.current = dimensions;
      setPositionerCssSize(positionerElement, dimensions);
      restoreMeasurementOverridesIncludingScale();
      onMeasureLayoutComplete?.(null, dimensions);
      isInitialRenderRef.current = false;
      return () => {
        observer.disconnect();
        restoreAnchoringStylesRef.current();
        restoreAnchoringStylesRef.current = NOOP;
      };
    }
    setPopupCssSize(popupElement, "auto");
    setPositionerCssSize(positionerElement, "max-content");
    const previousDimensions = committedDimensionsRef.current ?? liveDimensionsRef.current;
    const newDimensions = getCssDimensions2(popupElement);
    committedDimensionsRef.current = newDimensions;
    if (!previousDimensions) {
      setPositionerCssSize(positionerElement, newDimensions);
      restoreMeasurementOverridesIncludingScale();
      onMeasureLayoutComplete?.(null, newDimensions);
      return () => {
        observer.disconnect();
        animationFrame.cancel();
        restoreAnchoringStylesRef.current();
        restoreAnchoringStylesRef.current = NOOP;
      };
    }
    setPopupCssSize(popupElement, previousDimensions);
    restoreMeasurementOverridesIncludingScale();
    onMeasureLayoutComplete?.(previousDimensions, newDimensions);
    setPositionerCssSize(positionerElement, newDimensions);
    const abortController = new AbortController();
    animationFrame.request(() => {
      setPopupCssSize(popupElement, newDimensions);
      runOnceAnimationsFinish(() => {
        popupElement.style.setProperty("--popup-width", "auto");
        popupElement.style.setProperty("--popup-height", "auto");
      }, abortController.signal);
    });
    return () => {
      observer.disconnect();
      abortController.abort();
      animationFrame.cancel();
      restoreAnchoringStylesRef.current();
      restoreAnchoringStylesRef.current = NOOP;
    };
  }, [content, popupElement, positionerElement, runOnceAnimationsFinish, animationFrame, enabled, mounted, onMeasureLayout, onMeasureLayoutComplete, anchoringStyles]);
}
function overrideElementStyle(element, property, value) {
  const originalValue = element.style.getPropertyValue(property);
  element.style.setProperty(property, value);
  return () => {
    element.style.setProperty(property, originalValue);
  };
}
function applyElementStyles(element, styles) {
  const restorers = [];
  for (const [key, value] of Object.entries(styles)) {
    restorers.push(overrideElementStyle(element, key, value));
  }
  return restorers.length ? () => {
    restorers.forEach((restore) => restore());
  } : NOOP;
}
function setPopupCssSize(popupElement, size4) {
  const width = size4 === "auto" ? "auto" : `${size4.width}px`;
  const height = size4 === "auto" ? "auto" : `${size4.height}px`;
  popupElement.style.setProperty("--popup-width", width);
  popupElement.style.setProperty("--popup-height", height);
}
function setPositionerCssSize(positionerElement, size4) {
  const width = size4 === "max-content" ? "max-content" : `${size4.width}px`;
  const height = size4 === "max-content" ? "max-content" : `${size4.height}px`;
  positionerElement.style.setProperty("--positioner-width", width);
  positionerElement.style.setProperty("--positioner-height", height);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/usePopupViewport.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
function usePopupViewport(parameters) {
  const {
    store,
    side,
    cssVars,
    children
  } = parameters;
  const direction = useDirection();
  const activeTrigger = store.useState("activeTriggerElement");
  const activeTriggerId = store.useState("activeTriggerId");
  const open = store.useState("open");
  const payload = store.useState("payload");
  const mounted = store.useState("mounted");
  const popupElement = store.useState("popupElement");
  const positionerElement = store.useState("positionerElement");
  const previousActiveTrigger = usePreviousValue(open ? activeTrigger : null);
  const currentContentKey = usePopupContentKey(activeTriggerId, payload);
  const capturedNodeRef = React49.useRef(null);
  const [previousContentNode, setPreviousContentNode] = React49.useState(null);
  const [newTriggerOffset, setNewTriggerOffset] = React49.useState(null);
  const currentContainerRef = React49.useRef(null);
  const previousContainerRef = React49.useRef(null);
  const onAnimationsFinished = useAnimationsFinished(currentContainerRef, true, false);
  const cleanupFrame = useAnimationFrame();
  const [previousContentDimensions, setPreviousContentDimensions] = React49.useState(null);
  const [showStartingStyleAttribute, setShowStartingStyleAttribute] = React49.useState(false);
  useIsoLayoutEffect(() => {
    store.set("hasViewport", true);
    return () => {
      store.set("hasViewport", false);
    };
  }, [store]);
  const handleMeasureLayout = useStableCallback(() => {
    currentContainerRef.current?.style.setProperty("animation", "none");
    currentContainerRef.current?.style.setProperty("transition", "none");
    previousContainerRef.current?.style.setProperty("display", "none");
  });
  const handleMeasureLayoutComplete = useStableCallback((previousDimensions) => {
    currentContainerRef.current?.style.removeProperty("animation");
    currentContainerRef.current?.style.removeProperty("transition");
    previousContainerRef.current?.style.removeProperty("display");
    if (previousDimensions) {
      setPreviousContentDimensions(previousDimensions);
    }
  });
  const lastHandledTriggerRef = React49.useRef(null);
  useIsoLayoutEffect(() => {
    if (activeTrigger && previousActiveTrigger && activeTrigger !== previousActiveTrigger && lastHandledTriggerRef.current !== activeTrigger && capturedNodeRef.current) {
      setPreviousContentNode(capturedNodeRef.current);
      setShowStartingStyleAttribute(true);
      const offset4 = calculateRelativePosition(previousActiveTrigger, activeTrigger);
      setNewTriggerOffset(offset4);
      cleanupFrame.request(() => {
        ReactDOM6.flushSync(() => {
          setShowStartingStyleAttribute(false);
        });
        onAnimationsFinished(() => {
          setPreviousContentNode(null);
          setPreviousContentDimensions(null);
          capturedNodeRef.current = null;
        });
      });
      lastHandledTriggerRef.current = activeTrigger;
    }
  }, [activeTrigger, previousActiveTrigger, previousContentNode, onAnimationsFinished, cleanupFrame]);
  useIsoLayoutEffect(() => {
    const source = currentContainerRef.current;
    if (!source) {
      return;
    }
    const wrapper = ownerDocument(source).createElement("div");
    for (const child of Array.from(source.childNodes)) {
      wrapper.appendChild(child.cloneNode(true));
    }
    capturedNodeRef.current = wrapper;
  });
  const isTransitioning = previousContentNode != null;
  let childrenToRender;
  if (!isTransitioning) {
    childrenToRender = /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
      "data-current": true,
      ref: currentContainerRef,
      children
    }, currentContentKey);
  } else {
    childrenToRender = /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(React49.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        "data-previous": true,
        inert: inertValue(true),
        ref: previousContainerRef,
        style: {
          ...previousContentDimensions ? {
            [cssVars.popupWidth]: `${previousContentDimensions.width}px`,
            [cssVars.popupHeight]: `${previousContentDimensions.height}px`
          } : null,
          position: "absolute"
        },
        "data-ending-style": showStartingStyleAttribute ? void 0 : ""
      }, "previous"), /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", {
        "data-current": true,
        ref: currentContainerRef,
        "data-starting-style": showStartingStyleAttribute ? "" : void 0,
        children
      }, currentContentKey)]
    });
  }
  useIsoLayoutEffect(() => {
    const container = previousContainerRef.current;
    if (!container || !previousContentNode) {
      return;
    }
    container.replaceChildren(...Array.from(previousContentNode.childNodes));
  }, [previousContentNode]);
  usePopupAutoResize({
    popupElement,
    positionerElement,
    mounted,
    content: payload,
    onMeasureLayout: handleMeasureLayout,
    onMeasureLayoutComplete: handleMeasureLayoutComplete,
    side,
    direction
  });
  const state = {
    activationDirection: getActivationDirection(newTriggerOffset),
    transitioning: isTransitioning
  };
  return {
    children: childrenToRender,
    state
  };
}
function getActivationDirection(offset4) {
  if (!offset4) {
    return void 0;
  }
  return `${getValueWithTolerance(offset4.horizontal, 5, "right", "left")} ${getValueWithTolerance(offset4.vertical, 5, "down", "up")}`;
}
function getValueWithTolerance(value, tolerance, positiveLabel, negativeLabel) {
  if (value > tolerance) {
    return positiveLabel;
  }
  if (value < -tolerance) {
    return negativeLabel;
  }
  return "";
}
function calculateRelativePosition(from, to) {
  const fromRect = from.getBoundingClientRect();
  const toRect = to.getBoundingClientRect();
  const fromCenter = {
    x: fromRect.left + fromRect.width / 2,
    y: fromRect.top + fromRect.height / 2
  };
  const toCenter = {
    x: toRect.left + toRect.width / 2,
    y: toRect.top + toRect.height / 2
  };
  return {
    horizontal: toCenter.x - fromCenter.x,
    vertical: toCenter.y - fromCenter.y
  };
}
function usePopupContentKey(activeTriggerId, payload) {
  const [contentKey, setContentKey] = React49.useState(0);
  const previousActiveTriggerIdRef = React49.useRef(activeTriggerId);
  const previousPayloadRef = React49.useRef(payload);
  const pendingPayloadUpdateRef = React49.useRef(false);
  useIsoLayoutEffect(() => {
    const previousActiveTriggerId = previousActiveTriggerIdRef.current;
    const previousPayload = previousPayloadRef.current;
    const triggerIdChanged = activeTriggerId !== previousActiveTriggerId;
    const payloadChanged = payload !== previousPayload;
    if (triggerIdChanged) {
      setContentKey((value) => value + 1);
      pendingPayloadUpdateRef.current = !payloadChanged;
    } else if (pendingPayloadUpdateRef.current && payloadChanged) {
      setContentKey((value) => value + 1);
      pendingPayloadUpdateRef.current = false;
    }
    previousActiveTriggerIdRef.current = activeTriggerId;
    previousPayloadRef.current = payload;
  }, [activeTriggerId, payload]);
  return `${activeTriggerId ?? "current"}-${contentKey}`;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/index.parts.js
var index_parts_exports = {};
__export(index_parts_exports, {
  Arrow: () => PopoverArrow,
  Backdrop: () => PopoverBackdrop,
  Close: () => PopoverClose,
  Description: () => PopoverDescription,
  Handle: () => PopoverHandle,
  Popup: () => PopoverPopup,
  Portal: () => PopoverPortal,
  Positioner: () => PopoverPositioner,
  Root: () => PopoverRoot,
  Title: () => PopoverTitle,
  Trigger: () => PopoverTrigger,
  Viewport: () => PopoverViewport,
  createHandle: () => createPopoverHandle
});

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/root/PopoverRoot.js
var React52 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/root/PopoverRootContext.js
var React50 = __toESM(require_react(), 1);
var PopoverRootContext = /* @__PURE__ */ React50.createContext(void 0);
if (true) PopoverRootContext.displayName = "PopoverRootContext";
function usePopoverRootContext(optional) {
  const context = React50.useContext(PopoverRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: PopoverRootContext is missing. Popover parts must be placed within <Popover.Root>." : formatErrorMessage_default(47));
  }
  return context;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/store/PopoverStore.js
var React51 = __toESM(require_react(), 1);
var ReactDOM7 = __toESM(require_react_dom(), 1);
function createInitialState() {
  return {
    ...createInitialPopupStoreState(),
    disabled: false,
    modal: false,
    focusManagerModal: false,
    instantType: void 0,
    openMethod: null,
    openChangeReason: null,
    titleElementId: void 0,
    descriptionElementId: void 0,
    stickIfOpen: true,
    nested: false,
    openOnHover: false,
    closeDelay: 0,
    hasViewport: false
  };
}
var selectors2 = {
  ...popupStoreSelectors,
  disabled: createSelector((state) => state.disabled),
  instantType: createSelector((state) => state.instantType),
  openMethod: createSelector((state) => state.openMethod),
  openChangeReason: createSelector((state) => state.openChangeReason),
  modal: createSelector((state) => state.modal),
  focusManagerModal: createSelector((state) => state.focusManagerModal),
  stickIfOpen: createSelector((state) => state.stickIfOpen),
  titleElementId: createSelector((state) => state.titleElementId),
  descriptionElementId: createSelector((state) => state.descriptionElementId),
  openOnHover: createSelector((state) => state.openOnHover),
  closeDelay: createSelector((state) => state.closeDelay),
  hasViewport: createSelector((state) => state.hasViewport)
};
var PopoverStore = class _PopoverStore extends ReactStore {
  constructor(initialState) {
    const initial = {
      ...createInitialState(),
      ...initialState
    };
    if (initial.open && initialState?.mounted === void 0) {
      initial.mounted = true;
    }
    super(initial, {
      popupRef: /* @__PURE__ */ React51.createRef(),
      backdropRef: /* @__PURE__ */ React51.createRef(),
      internalBackdropRef: /* @__PURE__ */ React51.createRef(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0,
      triggerFocusTargetRef: /* @__PURE__ */ React51.createRef(),
      beforeContentFocusGuardRef: /* @__PURE__ */ React51.createRef(),
      stickIfOpenTimeout: new Timeout(),
      triggerElements: new PopupTriggerMap()
    }, selectors2);
  }
  setOpen = (nextOpen, eventDetails) => {
    const isHover = eventDetails.reason === reason_parts_exports.triggerHover;
    const isKeyboardClick = eventDetails.reason === reason_parts_exports.triggerPress && eventDetails.event.detail === 0;
    const isDismissClose = !nextOpen && (eventDetails.reason === reason_parts_exports.escapeKey || eventDetails.reason == null);
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
    const changeState = () => {
      const updatedState = {
        open: nextOpen,
        openChangeReason: eventDetails.reason
      };
      const newTriggerId = eventDetails.trigger?.id ?? null;
      if (newTriggerId || nextOpen) {
        updatedState.activeTriggerId = newTriggerId;
        updatedState.activeTriggerElement = eventDetails.trigger ?? null;
      }
      this.update(updatedState);
    };
    if (isHover) {
      this.set("stickIfOpen", true);
      this.context.stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, () => {
        this.set("stickIfOpen", false);
      });
      ReactDOM7.flushSync(changeState);
    } else {
      changeState();
    }
    if (isKeyboardClick || isDismissClose) {
      this.set("instantType", isKeyboardClick ? "click" : "dismiss");
    } else if (eventDetails.reason === reason_parts_exports.focusOut) {
      this.set("instantType", "focus");
    } else {
      this.set("instantType", void 0);
    }
  };
  static useStore(externalStore, initialState) {
    const internalStore = useRefWithInit(() => {
      return new _PopoverStore(initialState);
    }).current;
    const store = externalStore ?? internalStore;
    useOnMount(internalStore.disposeEffect);
    return store;
  }
  disposeEffect = () => {
    return this.context.stickIfOpenTimeout.disposeEffect();
  };
};

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/root/PopoverRoot.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
function PopoverRootComponent({
  props
}) {
  const {
    children,
    open: openProp,
    defaultOpen = false,
    onOpenChange,
    onOpenChangeComplete,
    modal = false,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null
  } = props;
  const store = PopoverStore.useStore(handle?.store, {
    modal,
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp
  });
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  const open = store.useState("open");
  const payload = store.useState("payload");
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const {
    openMethod,
    triggerProps: interactionTypeTriggerProps
  } = useOpenInteractionType(open);
  useImplicitActiveTrigger(store);
  const {
    forceUnmount
  } = useOpenStateTransitions(open, store, () => {
    store.update({
      stickIfOpen: true,
      openChangeReason: null
    });
  });
  React52.useEffect(() => {
    if (!open) {
      store.context.stickIfOpenTimeout.clear();
    }
  }, [store, open]);
  const handleImperativeClose = React52.useCallback(() => {
    store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction));
  }, [store]);
  React52.useImperativeHandle(props.actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  const floatingRootContext = useSyncedFloatingRootContext({
    popupStore: store,
    onOpenChange: store.setOpen
  });
  const dismiss = useDismiss(floatingRootContext, {
    outsidePressEvent: {
      // Ensure `aria-hidden` on outside elements is removed immediately
      // on outside press when trapping focus.
      mouse: modal === "trap-focus" ? "sloppy" : "intentional",
      touch: "sloppy"
    }
  });
  const role = useRole(floatingRootContext);
  const {
    getReferenceProps,
    getFloatingProps,
    getTriggerProps
  } = useInteractions([dismiss, role]);
  const activeTriggerProps = React52.useMemo(() => {
    return getReferenceProps(interactionTypeTriggerProps);
  }, [getReferenceProps, interactionTypeTriggerProps]);
  const inactiveTriggerProps = React52.useMemo(() => {
    return getTriggerProps(interactionTypeTriggerProps);
  }, [getTriggerProps, interactionTypeTriggerProps]);
  const popupProps = React52.useMemo(() => {
    return getFloatingProps();
  }, [getFloatingProps]);
  store.useSyncedValues({
    modal,
    openMethod,
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps,
    floatingRootContext,
    nested: useFloatingParentNodeId() != null
  });
  const popoverContext = React52.useMemo(() => ({
    store
  }), [store]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PopoverRootContext.Provider, {
    value: popoverContext,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
}
function PopoverRoot(props) {
  if (usePopoverRootContext(true)) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PopoverRootComponent, {
      props
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FloatingTree, {
    children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PopoverRootComponent, {
      props
    })
  });
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/trigger/PopoverTrigger.js
var React53 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/utils/constants.js
var OPEN_DELAY = 300;

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/trigger/PopoverTrigger.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var PopoverTrigger = /* @__PURE__ */ React53.forwardRef(function PopoverTrigger2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    disabled: disabled3 = false,
    nativeButton = true,
    handle,
    payload,
    openOnHover = false,
    delay = OPEN_DELAY,
    closeDelay = 0,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const rootContext = usePopoverRootContext(true);
  const store = handle?.store ?? rootContext?.store;
  if (!store) {
    throw new Error(true ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : formatErrorMessage_default(74));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
  const floatingContext = store.useState("floatingRootContext");
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const triggerElementRef = React53.useRef(null);
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload,
    disabled: disabled3,
    openOnHover,
    closeDelay
  });
  const openReason = store.useState("openChangeReason");
  const stickIfOpen = store.useState("stickIfOpen");
  const openMethod = store.useState("openMethod");
  const focusManagerModal = store.useState("focusManagerModal");
  const hoverProps = useHoverReferenceInteraction(floatingContext, {
    enabled: floatingContext != null && openOnHover && (openMethod !== "touch" || openReason !== reason_parts_exports.triggerPress),
    mouseOnly: true,
    move: false,
    handleClose: safePolygon(),
    restMs: delay,
    delay: {
      close: closeDelay
    },
    triggerElementRef,
    isActiveTrigger: isTriggerActive,
    isClosing: () => store.select("transitionStatus") === "ending"
  });
  const click = useClick(floatingContext, {
    enabled: floatingContext != null,
    stickIfOpen
  });
  const localProps = useInteractions([click]);
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  const state = {
    disabled: disabled3,
    open: isOpenedByThisTrigger
  };
  const {
    getButtonProps,
    buttonRef
  } = useButton({
    disabled: disabled3,
    native: nativeButton
  });
  const stateAttributesMapping7 = React53.useMemo(() => ({
    open(value) {
      if (value && openReason === reason_parts_exports.triggerPress) {
        return pressableTriggerOpenStateMapping.open(value);
      }
      return triggerOpenStateMapping.open(value);
    }
  }), [openReason]);
  const element = useRenderElement2("button", componentProps, {
    state,
    ref: [buttonRef, forwardedRef, registerTrigger, triggerElementRef],
    props: [localProps.getReferenceProps(), hoverProps, rootTriggerProps, {
      [CLICK_TRIGGER_IDENTIFIER]: "",
      id: thisTriggerId
    }, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping7
  });
  const {
    preFocusGuardRef,
    handlePreFocusGuardFocus,
    handleFocusTargetFocus
  } = useTriggerFocusGuards(store, triggerElementRef);
  if (isTriggerActive && !focusManagerModal) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(React53.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FocusGuard, {
        ref: preFocusGuardRef,
        onFocus: handlePreFocusGuardFocus
      }), /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(React53.Fragment, {
        children: element
      }, thisTriggerId), /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FocusGuard, {
        ref: store.context.triggerFocusTargetRef,
        onFocus: handleFocusTargetFocus
      })]
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(React53.Fragment, {
    children: element
  }, thisTriggerId);
});
if (true) PopoverTrigger.displayName = "PopoverTrigger";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/portal/PopoverPortal.js
var React55 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/portal/PopoverPortalContext.js
var React54 = __toESM(require_react(), 1);
var PopoverPortalContext = /* @__PURE__ */ React54.createContext(void 0);
if (true) PopoverPortalContext.displayName = "PopoverPortalContext";
function usePopoverPortalContext() {
  const value = React54.useContext(PopoverPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <Popover.Portal> is missing." : formatErrorMessage_default(45));
  }
  return value;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/portal/PopoverPortal.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var PopoverPortal = /* @__PURE__ */ React55.forwardRef(function PopoverPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const {
    store
  } = usePopoverRootContext();
  const mounted = store.useState("mounted");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PopoverPortalContext.Provider, {
    value: keepMounted,
    children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FloatingPortal, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) PopoverPortal.displayName = "PopoverPortal";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositioner.js
var React57 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositionerContext.js
var React56 = __toESM(require_react(), 1);
var PopoverPositionerContext = /* @__PURE__ */ React56.createContext(void 0);
if (true) PopoverPositionerContext.displayName = "PopoverPositionerContext";
function usePopoverPositionerContext() {
  const context = React56.useContext(PopoverPositionerContext);
  if (!context) {
    throw new Error(true ? "Base UI: PopoverPositionerContext is missing. PopoverPositioner parts must be placed within <Popover.Positioner>." : formatErrorMessage_default(46));
  }
  return context;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/positioner/PopoverPositioner.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var PopoverPositioner = /* @__PURE__ */ React57.forwardRef(function PopoverPositioner2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    anchor,
    positionMethod = "absolute",
    side = "bottom",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
    style,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const keepMounted = usePopoverPortalContext();
  const nodeId = useFloatingNodeId();
  const floatingRootContext = store.useState("floatingRootContext");
  const mounted = store.useState("mounted");
  const open = store.useState("open");
  const openReason = store.useState("openChangeReason");
  const triggerElement = store.useState("activeTriggerElement");
  const modal = store.useState("modal");
  const openMethod = store.useState("openMethod");
  const positionerElement = store.useState("positionerElement");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const hasViewport = store.useState("hasViewport");
  const prevTriggerElementRef = React57.useRef(null);
  const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
  const positioning = useAnchorPositioning({
    anchor,
    floatingRootContext,
    positionMethod,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    arrowPadding,
    collisionBoundary,
    collisionPadding,
    sticky,
    disableAnchorTracking,
    keepMounted,
    nodeId,
    collisionAvoidance,
    adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
  });
  const domReference = floatingRootContext.useState("domReferenceElement");
  useIsoLayoutEffect(() => {
    const currentTriggerElement = domReference;
    const prevTriggerElement = prevTriggerElementRef.current;
    if (currentTriggerElement) {
      prevTriggerElementRef.current = currentTriggerElement;
    }
    if (prevTriggerElement && currentTriggerElement && currentTriggerElement !== prevTriggerElement) {
      store.set("instantType", void 0);
      const ac = new AbortController();
      runOnceAnimationsFinish(() => {
        store.set("instantType", "trigger-change");
      }, ac.signal);
      return () => {
        ac.abort();
      };
    }
    return void 0;
  }, [domReference, runOnceAnimationsFinish, store]);
  const state = {
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    instant: instantType
  };
  useAnchoredPopupScrollLock(open && modal === true && openReason !== reason_parts_exports.triggerHover, openMethod === "touch", positionerElement, triggerElement);
  const setPositionerElement = React57.useCallback((element2) => {
    store.set("positionerElement", element2);
  }, [store]);
  const element = usePositioner(componentProps, state, {
    styles: positioning.positionerStyles,
    transitionStatus,
    props: elementProps,
    refs: [forwardedRef, setPositionerElement],
    hidden: !mounted,
    inert: !open
  });
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(PopoverPositionerContext.Provider, {
    value: positioning,
    children: [mounted && modal === true && openReason !== reason_parts_exports.triggerHover && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(InternalBackdrop, {
      ref: store.context.internalBackdropRef,
      inert: inertValue(!open),
      cutout: triggerElement
    }), /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(FloatingNode, {
      id: nodeId,
      children: element
    })]
  });
});
if (true) PopoverPositioner.displayName = "PopoverPositioner";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/popup/PopoverPopup.js
var React59 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/closePart.js
var React58 = __toESM(require_react(), 1);
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var ClosePartContext = /* @__PURE__ */ React58.createContext(void 0);
if (true) ClosePartContext.displayName = "ClosePartContext";
function useClosePartCount() {
  const [closePartCount, setClosePartCount] = React58.useState(0);
  const register2 = useStableCallback(() => {
    setClosePartCount((count) => count + 1);
    return () => {
      setClosePartCount((count) => Math.max(0, count - 1));
    };
  });
  const context = React58.useMemo(() => ({
    register: register2
  }), [register2]);
  return {
    context,
    hasClosePart: closePartCount > 0
  };
}
function ClosePartProvider(props) {
  const {
    value,
    children
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(ClosePartContext.Provider, {
    value,
    children
  });
}
function useClosePartRegistration() {
  const context = React58.useContext(ClosePartContext);
  useIsoLayoutEffect(() => {
    return context?.register();
  }, [context]);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/popup/PopoverPopup.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var stateAttributesMapping = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var PopoverPopup = /* @__PURE__ */ React59.forwardRef(function PopoverPopup2(componentProps, forwardedRef) {
  const {
    className,
    render: render4,
    initialFocus,
    finalFocus,
    style,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const positioner = usePopoverPositionerContext();
  const insideToolbar = useToolbarRootContext(true) != null;
  const {
    context: closePartContext,
    hasClosePart
  } = useClosePartCount();
  const open = store.useState("open");
  const openMethod = store.useState("openMethod");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const popupProps = store.useState("popupProps");
  const titleId = store.useState("titleElementId");
  const descriptionId = store.useState("descriptionElementId");
  const modal = store.useState("modal");
  const mounted = store.useState("mounted");
  const openReason = store.useState("openChangeReason");
  const activeTriggerElement = store.useState("activeTriggerElement");
  const floatingContext = store.useState("floatingRootContext");
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  const disabled3 = store.useState("disabled");
  const openOnHover = store.useState("openOnHover");
  const closeDelay = store.useState("closeDelay");
  useHoverFloatingInteraction(floatingContext, {
    enabled: openOnHover && !disabled3,
    closeDelay
  });
  function defaultInitialFocus(interactionType) {
    if (interactionType === "touch") {
      return store.context.popupRef.current;
    }
    return true;
  }
  const resolvedInitialFocus = initialFocus === void 0 ? defaultInitialFocus : initialFocus;
  const state = {
    open,
    side: positioner.side,
    align: positioner.align,
    instant: instantType,
    transitionStatus
  };
  const focusManagerModal = modal !== false && hasClosePart;
  store.useSyncedValue("focusManagerModal", focusManagerModal);
  const setPopupElement = React59.useCallback((element2) => {
    store.set("popupElement", element2);
  }, [store]);
  const element = useRenderElement2("div", componentProps, {
    state,
    ref: [forwardedRef, store.context.popupRef, setPopupElement],
    props: [popupProps, {
      "aria-labelledby": titleId,
      "aria-describedby": descriptionId,
      onKeyDown(event) {
        if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
          event.stopPropagation();
        }
      }
    }, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping
  });
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(FloatingFocusManager, {
    context: floatingContext,
    openInteractionType: openMethod,
    modal: focusManagerModal,
    disabled: !mounted || openReason === reason_parts_exports.triggerHover,
    initialFocus: resolvedInitialFocus,
    returnFocus: finalFocus,
    restoreFocus: "popup",
    previousFocusableElement: isHTMLElement(activeTriggerElement) ? activeTriggerElement : void 0,
    nextFocusableElement: store.context.triggerFocusTargetRef,
    beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
    children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ClosePartProvider, {
      value: closePartContext,
      children: element
    })
  });
});
if (true) PopoverPopup.displayName = "PopoverPopup";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/arrow/PopoverArrow.js
var React60 = __toESM(require_react(), 1);
var PopoverArrow = /* @__PURE__ */ React60.forwardRef(function PopoverArrow2(componentProps, forwardedRef) {
  const {
    className,
    render: render4,
    style,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const open = store.useState("open");
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = usePopoverPositionerContext();
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered
  };
  const element = useRenderElement2("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return element;
});
if (true) PopoverArrow.displayName = "PopoverArrow";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/backdrop/PopoverBackdrop.js
var React61 = __toESM(require_react(), 1);
var stateAttributesMapping2 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var PopoverBackdrop = /* @__PURE__ */ React61.forwardRef(function PopoverBackdrop2(props, forwardedRef) {
  const {
    className,
    render: render4,
    style,
    ...elementProps
  } = props;
  const {
    store
  } = usePopoverRootContext();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const transitionStatus = store.useState("transitionStatus");
  const openReason = store.useState("openChangeReason");
  const state = {
    open,
    transitionStatus
  };
  const element = useRenderElement2("div", props, {
    state,
    ref: [store.context.backdropRef, forwardedRef],
    props: [{
      role: "presentation",
      hidden: !mounted,
      style: {
        pointerEvents: openReason === reason_parts_exports.triggerHover ? "none" : void 0,
        userSelect: "none",
        WebkitUserSelect: "none"
      }
    }, elementProps],
    stateAttributesMapping: stateAttributesMapping2
  });
  return element;
});
if (true) PopoverBackdrop.displayName = "PopoverBackdrop";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/title/PopoverTitle.js
var React62 = __toESM(require_react(), 1);
var PopoverTitle = /* @__PURE__ */ React62.forwardRef(function PopoverTitle2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    style,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const id = useBaseUiId(elementProps.id);
  useIsoLayoutEffect(() => {
    store.set("titleElementId", id);
    return () => {
      store.set("titleElementId", void 0);
    };
  }, [store, id]);
  const element = useRenderElement2("h2", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) PopoverTitle.displayName = "PopoverTitle";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/description/PopoverDescription.js
var React63 = __toESM(require_react(), 1);
var PopoverDescription = /* @__PURE__ */ React63.forwardRef(function PopoverDescription2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    style,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const id = useBaseUiId(elementProps.id);
  useIsoLayoutEffect(() => {
    store.set("descriptionElementId", id);
    return () => {
      store.set("descriptionElementId", void 0);
    };
  }, [store, id]);
  const element = useRenderElement2("p", componentProps, {
    ref: forwardedRef,
    props: [{
      id
    }, elementProps]
  });
  return element;
});
if (true) PopoverDescription.displayName = "PopoverDescription";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/close/PopoverClose.js
var React64 = __toESM(require_react(), 1);
var PopoverClose = /* @__PURE__ */ React64.forwardRef(function PopoverClose2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    disabled: disabled3 = false,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    buttonRef,
    getButtonProps
  } = useButton({
    disabled: disabled3,
    focusableWhenDisabled: false,
    native: nativeButton
  });
  const {
    store
  } = usePopoverRootContext();
  useClosePartRegistration();
  const element = useRenderElement2("button", componentProps, {
    ref: [forwardedRef, buttonRef],
    props: [{
      onClick(event) {
        store.setOpen(false, createChangeEventDetails(reason_parts_exports.closePress, event.nativeEvent, event.currentTarget));
      }
    }, elementProps, getButtonProps]
  });
  return element;
});
if (true) PopoverClose.displayName = "PopoverClose";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/viewport/PopoverViewport.js
var React65 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/viewport/PopoverViewportCssVars.js
var PopoverViewportCssVars = /* @__PURE__ */ (function(PopoverViewportCssVars2) {
  PopoverViewportCssVars2["popupWidth"] = "--popup-width";
  PopoverViewportCssVars2["popupHeight"] = "--popup-height";
  return PopoverViewportCssVars2;
})({});

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/viewport/PopoverViewport.js
var stateAttributesMapping3 = {
  activationDirection: (value) => value ? {
    "data-activation-direction": value
  } : null
};
var PopoverViewport = /* @__PURE__ */ React65.forwardRef(function PopoverViewport2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const {
    store
  } = usePopoverRootContext();
  const {
    side
  } = usePopoverPositionerContext();
  const instantType = store.useState("instantType");
  const {
    children: childrenToRender,
    state: viewportState
  } = usePopupViewport({
    store,
    side,
    cssVars: PopoverViewportCssVars,
    children
  });
  const state = {
    activationDirection: viewportState.activationDirection,
    transitioning: viewportState.transitioning,
    instant: instantType
  };
  return useRenderElement2("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [elementProps, {
      children: childrenToRender
    }],
    stateAttributesMapping: stateAttributesMapping3
  });
});
if (true) PopoverViewport.displayName = "PopoverViewport";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/popover/store/PopoverHandle.js
var PopoverHandle = class {
  /**
   * Internal store holding the popover's state.
   * @internal
   */
  constructor() {
    this.store = new PopoverStore();
  }
  /**
   * Opens the popover and associates it with the trigger with the given id.
   * The trigger must be a Popover.Trigger component with this handle passed as a prop.
   *
   * @param triggerId ID of the trigger to associate with the popover.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) ?? void 0 : void 0;
    if (triggerId && !triggerElement) {
      throw new Error(true ? `Base UI: PopoverHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(80, triggerId));
    }
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
  }
  /**
   * Closes the popover.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Indicates whether the popover is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createPopoverHandle() {
  return new PopoverHandle();
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/FloatingPortalLite.js
var React66 = __toESM(require_react(), 1);
var ReactDOM8 = __toESM(require_react_dom(), 1);
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var FloatingPortalLite = /* @__PURE__ */ React66.forwardRef(function FloatingPortalLite2(componentProps, forwardedRef) {
  const {
    children,
    container,
    className,
    render: render4,
    style,
    ...elementProps
  } = componentProps;
  const {
    portalNode,
    portalSubtree
  } = useFloatingPortalNode({
    container,
    ref: forwardedRef,
    componentProps,
    elementProps
  });
  if (!portalSubtree && !portalNode) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(React66.Fragment, {
    children: [portalSubtree, portalNode && /* @__PURE__ */ ReactDOM8.createPortal(children, portalNode)]
  });
});
if (true) FloatingPortalLite.displayName = "FloatingPortalLite";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/index.parts.js
var index_parts_exports2 = {};
__export(index_parts_exports2, {
  Arrow: () => TooltipArrow,
  Handle: () => TooltipHandle,
  Popup: () => TooltipPopup,
  Portal: () => TooltipPortal,
  Positioner: () => TooltipPositioner,
  Provider: () => TooltipProvider,
  Root: () => TooltipRoot,
  Trigger: () => TooltipTrigger,
  Viewport: () => TooltipViewport,
  createHandle: () => createTooltipHandle
});

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js
var React69 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/root/TooltipRootContext.js
var React67 = __toESM(require_react(), 1);
var TooltipRootContext = /* @__PURE__ */ React67.createContext(void 0);
if (true) TooltipRootContext.displayName = "TooltipRootContext";
function useTooltipRootContext(optional) {
  const context = React67.useContext(TooltipRootContext);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: TooltipRootContext is missing. Tooltip parts must be placed within <Tooltip.Root>." : formatErrorMessage_default(72));
  }
  return context;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/store/TooltipStore.js
var React68 = __toESM(require_react(), 1);
var ReactDOM9 = __toESM(require_react_dom(), 1);
var selectors3 = {
  ...popupStoreSelectors,
  disabled: createSelector((state) => state.disabled),
  instantType: createSelector((state) => state.instantType),
  isInstantPhase: createSelector((state) => state.isInstantPhase),
  trackCursorAxis: createSelector((state) => state.trackCursorAxis),
  disableHoverablePopup: createSelector((state) => state.disableHoverablePopup),
  lastOpenChangeReason: createSelector((state) => state.openChangeReason),
  closeOnClick: createSelector((state) => state.closeOnClick),
  closeDelay: createSelector((state) => state.closeDelay),
  hasViewport: createSelector((state) => state.hasViewport)
};
var TooltipStore = class _TooltipStore extends ReactStore {
  constructor(initialState) {
    super({
      ...createInitialState2(),
      ...initialState
    }, {
      popupRef: /* @__PURE__ */ React68.createRef(),
      onOpenChange: void 0,
      onOpenChangeComplete: void 0,
      triggerElements: new PopupTriggerMap()
    }, selectors3);
  }
  setOpen = (nextOpen, eventDetails) => {
    const reason = eventDetails.reason;
    const isHover = reason === reason_parts_exports.triggerHover;
    const isFocusOpen = nextOpen && reason === reason_parts_exports.triggerFocus;
    const isDismissClose = !nextOpen && (reason === reason_parts_exports.triggerPress || reason === reason_parts_exports.escapeKey);
    eventDetails.preventUnmountOnClose = () => {
      this.set("preventUnmountingOnClose", true);
    };
    this.context.onOpenChange?.(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
    const changeState = () => {
      const updatedState = {
        open: nextOpen,
        openChangeReason: reason
      };
      if (isFocusOpen) {
        updatedState.instantType = "focus";
      } else if (isDismissClose) {
        updatedState.instantType = "dismiss";
      } else if (reason === reason_parts_exports.triggerHover) {
        updatedState.instantType = void 0;
      }
      const newTriggerId = eventDetails.trigger?.id ?? null;
      if (newTriggerId || nextOpen) {
        updatedState.activeTriggerId = newTriggerId;
        updatedState.activeTriggerElement = eventDetails.trigger ?? null;
      }
      this.update(updatedState);
    };
    if (isHover) {
      ReactDOM9.flushSync(changeState);
    } else {
      changeState();
    }
  };
  static useStore(externalStore, initialState) {
    const internalStore = useRefWithInit(() => {
      return new _TooltipStore(initialState);
    }).current;
    const store = externalStore ?? internalStore;
    const floatingRootContext = useSyncedFloatingRootContext({
      popupStore: store,
      onOpenChange: store.setOpen
    });
    store.state.floatingRootContext = floatingRootContext;
    return store;
  }
};
function createInitialState2() {
  return {
    ...createInitialPopupStoreState(),
    disabled: false,
    instantType: void 0,
    isInstantPhase: false,
    trackCursorAxis: "none",
    disableHoverablePopup: false,
    openChangeReason: null,
    closeOnClick: true,
    closeDelay: 0,
    hasViewport: false
  };
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/root/TooltipRoot.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var TooltipRoot = fastComponent(function TooltipRoot2(props) {
  const {
    disabled: disabled3 = false,
    defaultOpen = false,
    open: openProp,
    disableHoverablePopup = false,
    trackCursorAxis = "none",
    actionsRef,
    onOpenChange,
    onOpenChangeComplete,
    handle,
    triggerId: triggerIdProp,
    defaultTriggerId: defaultTriggerIdProp = null,
    children
  } = props;
  const store = TooltipStore.useStore(handle?.store, {
    open: defaultOpen,
    openProp,
    activeTriggerId: defaultTriggerIdProp,
    triggerIdProp
  });
  useOnFirstRender(() => {
    if (openProp === void 0 && store.state.open === false && defaultOpen === true) {
      store.update({
        open: true,
        activeTriggerId: defaultTriggerIdProp
      });
    }
  });
  store.useControlledProp("openProp", openProp);
  store.useControlledProp("triggerIdProp", triggerIdProp);
  store.useContextCallback("onOpenChange", onOpenChange);
  store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
  const openState = store.useState("open");
  const open = !disabled3 && openState;
  const activeTriggerId = store.useState("activeTriggerId");
  const payload = store.useState("payload");
  store.useSyncedValues({
    trackCursorAxis,
    disableHoverablePopup
  });
  useIsoLayoutEffect(() => {
    if (openState && disabled3) {
      store.setOpen(false, createChangeEventDetails(reason_parts_exports.disabled));
    }
  }, [openState, disabled3, store]);
  store.useSyncedValue("disabled", disabled3);
  useImplicitActiveTrigger(store);
  const {
    forceUnmount,
    transitionStatus
  } = useOpenStateTransitions(open, store);
  const floatingRootContext = store.select("floatingRootContext");
  const isInstantPhase = store.useState("isInstantPhase");
  const instantType = store.useState("instantType");
  const lastOpenChangeReason = store.useState("lastOpenChangeReason");
  const previousInstantTypeRef = React69.useRef(null);
  useIsoLayoutEffect(() => {
    if (transitionStatus === "ending" && lastOpenChangeReason === reason_parts_exports.none || transitionStatus !== "ending" && isInstantPhase) {
      if (instantType !== "delay") {
        previousInstantTypeRef.current = instantType;
      }
      store.set("instantType", "delay");
    } else if (previousInstantTypeRef.current !== null) {
      store.set("instantType", previousInstantTypeRef.current);
      previousInstantTypeRef.current = null;
    }
  }, [transitionStatus, isInstantPhase, lastOpenChangeReason, instantType, store]);
  useIsoLayoutEffect(() => {
    if (open) {
      if (activeTriggerId == null) {
        store.set("payload", void 0);
      }
    }
  }, [store, activeTriggerId, open]);
  const handleImperativeClose = React69.useCallback(() => {
    store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction));
  }, [store]);
  React69.useImperativeHandle(actionsRef, () => ({
    unmount: forceUnmount,
    close: handleImperativeClose
  }), [forceUnmount, handleImperativeClose]);
  const dismiss = useDismiss(floatingRootContext, {
    enabled: !disabled3,
    referencePress: () => store.select("closeOnClick")
  });
  const clientPoint = useClientPoint(floatingRootContext, {
    enabled: !disabled3 && trackCursorAxis !== "none",
    axis: trackCursorAxis === "none" ? void 0 : trackCursorAxis
  });
  const {
    getReferenceProps,
    getFloatingProps,
    getTriggerProps
  } = useInteractions([dismiss, clientPoint]);
  const activeTriggerProps = React69.useMemo(() => getReferenceProps(), [getReferenceProps]);
  const inactiveTriggerProps = React69.useMemo(() => getTriggerProps(), [getTriggerProps]);
  const popupProps = React69.useMemo(() => getFloatingProps(), [getFloatingProps]);
  store.useSyncedValues({
    activeTriggerProps,
    inactiveTriggerProps,
    popupProps
  });
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(TooltipRootContext.Provider, {
    value: store,
    children: typeof children === "function" ? children({
      payload
    }) : children
  });
});
if (true) TooltipRoot.displayName = "TooltipRoot";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js
var React71 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/provider/TooltipProviderContext.js
var React70 = __toESM(require_react(), 1);
var TooltipProviderContext = /* @__PURE__ */ React70.createContext(void 0);
if (true) TooltipProviderContext.displayName = "TooltipProviderContext";
function useTooltipProviderContext() {
  return React70.useContext(TooltipProviderContext);
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTriggerDataAttributes.js
var TooltipTriggerDataAttributes = (function(TooltipTriggerDataAttributes2) {
  TooltipTriggerDataAttributes2[TooltipTriggerDataAttributes2["popupOpen"] = CommonTriggerDataAttributes.popupOpen] = "popupOpen";
  TooltipTriggerDataAttributes2["triggerDisabled"] = "data-trigger-disabled";
  return TooltipTriggerDataAttributes2;
})({});

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/utils/constants.js
var OPEN_DELAY2 = 600;

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/trigger/TooltipTrigger.js
var TooltipTrigger = fastComponentRef(function TooltipTrigger2(componentProps, forwardedRef) {
  const {
    className,
    render: render4,
    handle,
    payload,
    disabled: disabledProp,
    delay,
    closeOnClick = true,
    closeDelay,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  const rootContext = useTooltipRootContext(true);
  const store = handle?.store ?? rootContext;
  if (!store) {
    throw new Error(true ? "Base UI: <Tooltip.Trigger> must be either used within a <Tooltip.Root> component or provided with a handle." : formatErrorMessage_default(82));
  }
  const thisTriggerId = useBaseUiId(idProp);
  const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
  const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
  const floatingRootContext = store.useState("floatingRootContext");
  const triggerElementRef = React71.useRef(null);
  const delayWithDefault = delay ?? OPEN_DELAY2;
  const closeDelayWithDefault = closeDelay ?? 0;
  const {
    registerTrigger,
    isMountedByThisTrigger
  } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
    payload,
    closeOnClick,
    closeDelay: closeDelayWithDefault
  });
  const providerContext = useTooltipProviderContext();
  const {
    delayRef,
    isInstantPhase,
    hasProvider
  } = useDelayGroup(floatingRootContext, {
    open: isOpenedByThisTrigger
  });
  store.useSyncedValue("isInstantPhase", isInstantPhase);
  const rootDisabled = store.useState("disabled");
  const disabled3 = disabledProp ?? rootDisabled;
  const trackCursorAxis = store.useState("trackCursorAxis");
  const disableHoverablePopup = store.useState("disableHoverablePopup");
  const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
    enabled: !disabled3,
    mouseOnly: true,
    move: false,
    handleClose: !disableHoverablePopup && trackCursorAxis !== "both" ? safePolygon() : null,
    restMs() {
      const providerDelay = providerContext?.delay;
      const groupOpenValue = typeof delayRef.current === "object" ? delayRef.current.open : void 0;
      let computedRestMs = delayWithDefault;
      if (hasProvider) {
        if (groupOpenValue !== 0) {
          computedRestMs = delay ?? providerDelay ?? delayWithDefault;
        } else {
          computedRestMs = 0;
        }
      }
      return computedRestMs;
    },
    delay() {
      const closeValue = typeof delayRef.current === "object" ? delayRef.current.close : void 0;
      let computedCloseDelay = closeDelayWithDefault;
      if (closeDelay == null && hasProvider) {
        computedCloseDelay = closeValue;
      }
      return {
        close: computedCloseDelay
      };
    },
    triggerElementRef,
    isActiveTrigger: isTriggerActive,
    isClosing: () => store.select("transitionStatus") === "ending"
  });
  const focusProps = useFocus(floatingRootContext, {
    enabled: !disabled3
  }).reference;
  const state = {
    open: isOpenedByThisTrigger
  };
  const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
  const element = useRenderElement2("button", componentProps, {
    state,
    ref: [forwardedRef, registerTrigger, triggerElementRef],
    props: [hoverProps, focusProps, rootTriggerProps, {
      onPointerDown() {
        store.set("closeOnClick", closeOnClick);
      },
      id: thisTriggerId,
      [TooltipTriggerDataAttributes.triggerDisabled]: disabled3 ? "" : void 0
    }, elementProps],
    stateAttributesMapping: triggerOpenStateMapping
  });
  return element;
});
if (true) TooltipTrigger.displayName = "TooltipTrigger";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js
var React73 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortalContext.js
var React72 = __toESM(require_react(), 1);
var TooltipPortalContext = /* @__PURE__ */ React72.createContext(void 0);
if (true) TooltipPortalContext.displayName = "TooltipPortalContext";
function useTooltipPortalContext() {
  const value = React72.useContext(TooltipPortalContext);
  if (value === void 0) {
    throw new Error(true ? "Base UI: <Tooltip.Portal> is missing." : formatErrorMessage_default(70));
  }
  return value;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/portal/TooltipPortal.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var TooltipPortal = /* @__PURE__ */ React73.forwardRef(function TooltipPortal2(props, forwardedRef) {
  const {
    keepMounted = false,
    ...portalProps
  } = props;
  const store = useTooltipRootContext();
  const mounted = store.useState("mounted");
  const shouldRender = mounted || keepMounted;
  if (!shouldRender) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(TooltipPortalContext.Provider, {
    value: keepMounted,
    children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(FloatingPortalLite, {
      ref: forwardedRef,
      ...portalProps
    })
  });
});
if (true) TooltipPortal.displayName = "TooltipPortal";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js
var React75 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositionerContext.js
var React74 = __toESM(require_react(), 1);
var TooltipPositionerContext = /* @__PURE__ */ React74.createContext(void 0);
if (true) TooltipPositionerContext.displayName = "TooltipPositionerContext";
function useTooltipPositionerContext() {
  const context = React74.useContext(TooltipPositionerContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>." : formatErrorMessage_default(71));
  }
  return context;
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/positioner/TooltipPositioner.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var TooltipPositioner = /* @__PURE__ */ React75.forwardRef(function TooltipPositioner2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    anchor,
    positionMethod = "absolute",
    side = "top",
    align = "center",
    sideOffset = 0,
    alignOffset = 0,
    collisionBoundary = "clipping-ancestors",
    collisionPadding = 5,
    arrowPadding = 5,
    sticky = false,
    disableAnchorTracking = false,
    collisionAvoidance = POPUP_COLLISION_AVOIDANCE,
    style,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const keepMounted = useTooltipPortalContext();
  const open = store.useState("open");
  const mounted = store.useState("mounted");
  const trackCursorAxis = store.useState("trackCursorAxis");
  const disableHoverablePopup = store.useState("disableHoverablePopup");
  const floatingRootContext = store.useState("floatingRootContext");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const hasViewport = store.useState("hasViewport");
  const positioning = useAnchorPositioning({
    anchor,
    positionMethod,
    floatingRootContext,
    mounted,
    side,
    sideOffset,
    align,
    alignOffset,
    collisionBoundary,
    collisionPadding,
    sticky,
    arrowPadding,
    disableAnchorTracking,
    keepMounted,
    collisionAvoidance,
    adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
  });
  const state = React75.useMemo(() => ({
    open,
    side: positioning.side,
    align: positioning.align,
    anchorHidden: positioning.anchorHidden,
    instant: trackCursorAxis !== "none" ? "tracking-cursor" : instantType
  }), [open, positioning.side, positioning.align, positioning.anchorHidden, trackCursorAxis, instantType]);
  const element = usePositioner(componentProps, state, {
    styles: positioning.positionerStyles,
    transitionStatus,
    props: elementProps,
    refs: [forwardedRef, store.useStateSetter("positionerElement")],
    hidden: !mounted,
    inert: !open || trackCursorAxis === "both" || disableHoverablePopup
  });
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(TooltipPositionerContext.Provider, {
    value: positioning,
    children: element
  });
});
if (true) TooltipPositioner.displayName = "TooltipPositioner";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/popup/TooltipPopup.js
var React76 = __toESM(require_react(), 1);
var stateAttributesMapping4 = {
  ...popupStateMapping,
  ...transitionStatusMapping
};
var TooltipPopup = /* @__PURE__ */ React76.forwardRef(function TooltipPopup2(componentProps, forwardedRef) {
  const {
    className,
    render: render4,
    style,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const {
    side,
    align
  } = useTooltipPositionerContext();
  const open = store.useState("open");
  const instantType = store.useState("instantType");
  const transitionStatus = store.useState("transitionStatus");
  const popupProps = store.useState("popupProps");
  const floatingContext = store.useState("floatingRootContext");
  useOpenChangeComplete({
    open,
    ref: store.context.popupRef,
    onComplete() {
      if (open) {
        store.context.onOpenChangeComplete?.(true);
      }
    }
  });
  const disabled3 = store.useState("disabled");
  const closeDelay = store.useState("closeDelay");
  useHoverFloatingInteraction(floatingContext, {
    enabled: !disabled3,
    closeDelay
  });
  const state = {
    open,
    side,
    align,
    instant: instantType,
    transitionStatus
  };
  const element = useRenderElement2("div", componentProps, {
    state,
    ref: [forwardedRef, store.context.popupRef, store.useStateSetter("popupElement")],
    props: [popupProps, getDisabledMountTransitionStyles(transitionStatus), elementProps],
    stateAttributesMapping: stateAttributesMapping4
  });
  return element;
});
if (true) TooltipPopup.displayName = "TooltipPopup";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/arrow/TooltipArrow.js
var React77 = __toESM(require_react(), 1);
var TooltipArrow = /* @__PURE__ */ React77.forwardRef(function TooltipArrow2(componentProps, forwardedRef) {
  const {
    className,
    render: render4,
    style,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const open = store.useState("open");
  const instantType = store.useState("instantType");
  const {
    arrowRef,
    side,
    align,
    arrowUncentered,
    arrowStyles
  } = useTooltipPositionerContext();
  const state = {
    open,
    side,
    align,
    uncentered: arrowUncentered,
    instant: instantType
  };
  const element = useRenderElement2("div", componentProps, {
    state,
    ref: [forwardedRef, arrowRef],
    props: [{
      style: arrowStyles,
      "aria-hidden": true
    }, elementProps],
    stateAttributesMapping: popupStateMapping
  });
  return element;
});
if (true) TooltipArrow.displayName = "TooltipArrow";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/provider/TooltipProvider.js
var React78 = __toESM(require_react(), 1);
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var TooltipProvider = function TooltipProvider2(props) {
  const {
    delay,
    closeDelay,
    timeout = 400
  } = props;
  const contextValue = React78.useMemo(() => ({
    delay,
    closeDelay
  }), [delay, closeDelay]);
  const delayValue = React78.useMemo(() => ({
    open: delay,
    close: closeDelay
  }), [delay, closeDelay]);
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(TooltipProviderContext.Provider, {
    value: contextValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FloatingDelayGroup, {
      delay: delayValue,
      timeoutMs: timeout,
      children: props.children
    })
  });
};
if (true) TooltipProvider.displayName = "TooltipProvider";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js
var React79 = __toESM(require_react(), 1);

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewportCssVars.js
var TooltipViewportCssVars = /* @__PURE__ */ (function(TooltipViewportCssVars2) {
  TooltipViewportCssVars2["popupWidth"] = "--popup-width";
  TooltipViewportCssVars2["popupHeight"] = "--popup-height";
  return TooltipViewportCssVars2;
})({});

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/viewport/TooltipViewport.js
var stateAttributesMapping5 = {
  activationDirection: (value) => value ? {
    "data-activation-direction": value
  } : null
};
var TooltipViewport = /* @__PURE__ */ React79.forwardRef(function TooltipViewport2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    style,
    children,
    ...elementProps
  } = componentProps;
  const store = useTooltipRootContext();
  const positioner = useTooltipPositionerContext();
  const instantType = store.useState("instantType");
  const {
    children: childrenToRender,
    state: viewportState
  } = usePopupViewport({
    store,
    side: positioner.side,
    cssVars: TooltipViewportCssVars,
    children
  });
  const state = {
    activationDirection: viewportState.activationDirection,
    transitioning: viewportState.transitioning,
    instant: instantType
  };
  return useRenderElement2("div", componentProps, {
    state,
    ref: forwardedRef,
    props: [elementProps, {
      children: childrenToRender
    }],
    stateAttributesMapping: stateAttributesMapping5
  });
});
if (true) TooltipViewport.displayName = "TooltipViewport";

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/tooltip/store/TooltipHandle.js
var TooltipHandle = class {
  /**
   * Internal store holding the tooltip state.
   * @internal
   */
  constructor() {
    this.store = new TooltipStore();
  }
  /**
   * Opens the tooltip and associates it with the trigger with the given ID.
   * The trigger must be a Tooltip.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the tooltip.
   */
  open(triggerId) {
    const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
    if (triggerId && !triggerElement) {
      throw new Error(true ? `Base UI: TooltipHandle.open: No trigger found with id "${triggerId}".` : formatErrorMessage_default(81, triggerId));
    }
    this.store.setOpen(true, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, triggerElement));
  }
  /**
   * Closes the tooltip.
   */
  close() {
    this.store.setOpen(false, createChangeEventDetails(reason_parts_exports.imperativeAction, void 0, void 0));
  }
  /**
   * Indicates whether the tooltip is currently open.
   */
  get isOpen() {
    return this.store.state.open;
  }
};
function createTooltipHandle() {
  return new TooltipHandle();
}

// node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/use-render/useRender.js
function useRender2(params) {
  return useRenderElement2(params.defaultTagName ?? "div", params, params);
}

// node_modules/@wordpress/ui/build-module/text/text.mjs
var import_element14 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='4130d64bea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "4130d64bea");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._83ed8a8da5dd50ea__text{margin:0}._14437cfb77831647__heading-2xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-2xl,32px);font-size:var(--wpds-typography-font-size-2xl,32px);line-height:var(--wpds-typography-line-height-2xl,40px)}._14437cfb77831647__heading-2xl,._3c78b7fa9b4072dd__heading-xl{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499)}._3c78b7fa9b4072dd__heading-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-md,24px)}.aa58f227716bcde2__heading-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);font-size:var(--wpds-typography-font-size-lg,15px)}.aa58f227716bcde2__heading-lg,.fc4da56d8dfe52c4__heading-md{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-sm,20px)}.fc4da56d8dfe52c4__heading-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);font-size:var(--wpds-typography-font-size-md,13px)}.a9b78c7c82e8dff7__heading-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-xs,11px);font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-xs,16px);text-transform:uppercase}._305ff559e52180d5__body-xl{--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-xl,32px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-xl,32px)}._305ff559e52180d5__body-xl,.ca1aa3fc2029e958__body-lg{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}.ca1aa3fc2029e958__body-lg{--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-lg,15px);line-height:var(--wpds-typography-line-height-md,24px)}._131101940be12424__body-md{--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px)}._0e8d87a42c1f75fa__body-sm,._131101940be12424__body-md{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}._0e8d87a42c1f75fa__body-sm{--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}'));
  document.head.appendChild(style);
}
var style_default5 = { "text": "_83ed8a8da5dd50ea__text", "heading-2xl": "_14437cfb77831647__heading-2xl", "heading-xl": "_3c78b7fa9b4072dd__heading-xl", "heading-lg": "aa58f227716bcde2__heading-lg", "heading-md": "fc4da56d8dfe52c4__heading-md", "heading-sm": "a9b78c7c82e8dff7__heading-sm", "body-xl": "_305ff559e52180d5__body-xl", "body-lg": "ca1aa3fc2029e958__body-lg", "body-md": "_131101940be12424__body-md", "body-sm": "_0e8d87a42c1f75fa__body-sm" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default2 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Text3 = (0, import_element14.forwardRef)(function Text22({ variant = "body-md", render: render4, className, ...props }, ref) {
  const element = useRender2({
    render: render4,
    defaultTagName: "span",
    ref,
    props: mergeProps2(props, {
      className: clsx_default(
        style_default5.text,
        global_css_defense_default2.heading,
        global_css_defense_default2.p,
        style_default5[variant],
        className
      )
    })
  });
  return element;
});

// node_modules/@wordpress/ui/build-module/button/button.mjs
var import_element15 = __toESM(require_element(), 1);
var import_i18n = __toESM(require_i18n(), 1);
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
import { speak } from "@wordpress/a11y";
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='26d90ece4e']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "26d90ece4e");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._97b0fc33c028be1a__button,.abbb272e2ce49bd6__is-unstyled{appearance:none;padding:0}._97b0fc33c028be1a__button{--wp-ui-button-font-weight:499;--wp-ui-button-background-color:var(--wpds-color-bg-interactive-brand-strong,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-brand-strong-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 93%,#000));--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-brand-strong,#fff);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-brand-strong-active,#fff);--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-strong-disabled,#8d8d8d);--wp-ui-button-padding-inline:var(--wpds-dimension-padding-md,12px);--wp-ui-button-height:40px;--wp-ui-button-aspect-ratio:auto;--wp-ui-button-font-size:var(--wpds-typography-font-size-md,13px);--wp-ui-button-min-width:calc(4ch + var(--wp-ui-button-padding-inline)*2);--wp-ui-button-border-color:var(--wp-ui-button-background-color);--wp-ui-button-border-color-active:var(--wp-ui-button-background-color-active);--wp-ui-button-border-color-disabled:var(--wp-ui-button-background-color-disabled);--_gcd-button-font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);--_gcd-button-font-size:var(--wp-ui-button-font-size);--_gcd-button-font-weight:var(--wp-ui-button-font-weight);align-items:center;aspect-ratio:var(--wp-ui-button-aspect-ratio);background-clip:padding-box;background-color:var(--wp-ui-button-background-color);border-color:var(--wp-ui-button-border-color);border-radius:var(--wpds-border-radius-sm,2px);border-style:solid;border-width:1px;color:var(--wp-ui-button-foreground-color);cursor:var(--wpds-cursor-control,pointer);display:inline-flex;font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wp-ui-button-font-size);font-weight:var(--wp-ui-button-font-weight);gap:var(--wpds-dimension-gap-sm,8px);height:var(--wp-ui-button-height);justify-content:center;line-height:var(--wpds-typography-line-height-sm,20px);min-width:var(--wp-ui-button-min-width);padding-inline:var(--wp-ui-button-padding-inline);position:relative;text-decoration:none;@media not (prefers-reduced-motion){transition:color .1s ease-out;*{transition:opacity .1s ease-out}}&[href]{cursor:pointer}[href]{color:inherit;text-decoration:inherit}&:not([data-disabled]):is(:hover,:active,:focus){background-color:var(--wp-ui-button-background-color-active);border-color:var(--wp-ui-button-border-color-active);color:var(--wp-ui-button-foreground-color-active)}&[data-disabled]:not(._914b42f315c0e580__is-loading){background-color:var(--wp-ui-button-background-color-disabled);border-color:var(--wp-ui-button-border-color-disabled);color:var(--wp-ui-button-foreground-color-disabled);@media (forced-colors:active){border-bottom-color:GrayText;border-left-color:GrayText;border-right-color:GrayText;border-top-color:GrayText;color:GrayText}}&:before{aspect-ratio:1;border:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid;border-block-end-color:#0000;border-block-start-color:var(--wp-ui-button-foreground-color);border-inline-end-color:var(--wp-ui-button-foreground-color);border-inline-start-color:#0000;border-radius:50%;box-sizing:border-box;content:"";display:block;height:var(--wp-ui-button-font-size);inset-inline-start:50%;opacity:0;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);@media not (prefers-reduced-motion){transition:opacity .1s ease-out}}}._908205475f9f2a92__is-small{--wp-ui-button-padding-inline:var(--wpds-dimension-padding-sm,8px);--wp-ui-button-height:24px}.dd460c965226cc77__is-brand{&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-brand,var(--wp-admin-theme-color,#3858e9));--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-brand-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 85%,#000));--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-brand-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-brand-weak-active,color-mix(in oklch,var(--wp-admin-theme-color,#3858e9) 12%,#fff));--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000)}}.e722a8f96726aa99__is-neutral{&.b50b3358c5fb4d0b__is-solid{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-strong,#2d2d2d);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-strong-active,#1e1e1e);--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-strong-disabled,#e6e6e6);--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-neutral-strong,#f0f0f0);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-neutral-strong-active,#f0f0f0);--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-strong-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline,&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e);--wp-ui-button-foreground-color-disabled:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d)}&._62d5a778b7b258ee__is-outline{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000);--wp-ui-button-border-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d);--wp-ui-button-border-color-active:var(--wpds-color-stroke-interactive-neutral-active,#6e6e6e);--wp-ui-button-border-color-disabled:var(--wpds-color-stroke-interactive-neutral-disabled,#dbdbdb)}&.ad0619a3217c6a5b__is-minimal{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-weak,#0000);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-weak-active,#ededed);--wp-ui-button-background-color-disabled:var(--wpds-color-bg-interactive-neutral-weak-disabled,#0000)}}.abbb272e2ce49bd6__is-unstyled{background:none;border:none;min-width:unset}.cf59cf1b69629838__is-compact{--wp-ui-button-height:32px}._914b42f315c0e580__is-loading{color:#0000;&:not([data-disabled]):is(:hover,:active,:focus){color:#0000}*{opacity:0}&:before{opacity:1;transition-delay:.05s;@media not (prefers-reduced-motion){animation:_5a1d53da6f830c8d__loading-animation 1s linear infinite}}}[aria-pressed=true].ad0619a3217c6a5b__is-minimal.e722a8f96726aa99__is-neutral{--wp-ui-button-background-color:var(--wpds-color-bg-interactive-neutral-strong,#2d2d2d);--wp-ui-button-background-color-active:var(--wpds-color-bg-interactive-neutral-strong,#2d2d2d);--wp-ui-button-foreground-color:var(--wpds-color-fg-interactive-neutral-strong,#f0f0f0);--wp-ui-button-foreground-color-active:var(--wpds-color-fg-interactive-neutral-strong,#f0f0f0)}}@keyframes _5a1d53da6f830c8d__loading-animation{0%{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(1turn)}}'));
  document.head.appendChild(style);
}
var style_default6 = { "button": "_97b0fc33c028be1a__button", "is-unstyled": "abbb272e2ce49bd6__is-unstyled", "is-loading": "_914b42f315c0e580__is-loading", "is-small": "_908205475f9f2a92__is-small", "is-brand": "dd460c965226cc77__is-brand", "is-outline": "_62d5a778b7b258ee__is-outline", "is-minimal": "ad0619a3217c6a5b__is-minimal", "is-neutral": "e722a8f96726aa99__is-neutral", "is-solid": "b50b3358c5fb4d0b__is-solid", "is-compact": "cf59cf1b69629838__is-compact", "loading-animation": "_5a1d53da6f830c8d__loading-animation" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='2a5ab8f3a7']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "2a5ab8f3a7");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._08e8a2e44959f892__outset-ring--focus,._970d04df7376df67__outset-ring--focus-within-except-active,.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible,.cd83dfc2126a0846__outset-ring--focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active,.ecadb9e080e2dfa5__outset-ring--focus-parent-visible{@media not (prefers-reduced-motion){--_gcd-a-transition:outline 0.1s ease-out;transition:outline .1s ease-out}outline:0 solid #0000;outline-offset:1px}._08e8a2e44959f892__outset-ring--focus:focus,._970d04df7376df67__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible:focus-within:has(:focus-visible),.cd83dfc2126a0846__outset-ring--focus-within:focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible:focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active:focus:not(:active),:focus-visible .ecadb9e080e2dfa5__outset-ring--focus-parent-visible{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9))}}"));
  document.head.appendChild(style);
}
var focus_default = { "outset-ring--focus": "_08e8a2e44959f892__outset-ring--focus", "outset-ring--focus-except-active": "e25b2bdd7aa21721__outset-ring--focus-except-active", "outset-ring--focus-visible": "d0541bc9dd9dc7b6__outset-ring--focus-visible", "outset-ring--focus-within": "cd83dfc2126a0846__outset-ring--focus-within", "outset-ring--focus-within-except-active": "_970d04df7376df67__outset-ring--focus-within-except-active", "outset-ring--focus-within-visible": "c5cb3ee4bddaa8e4__outset-ring--focus-within-visible", "outset-ring--focus-parent-visible": "ecadb9e080e2dfa5__outset-ring--focus-parent-visible" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default3 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Button3 = (0, import_element15.forwardRef)(
  function Button22({
    tone = "brand",
    variant = "solid",
    size: size4 = "default",
    className,
    focusableWhenDisabled = true,
    disabled: disabled3,
    loading,
    loadingAnnouncement = (0, import_i18n.__)("Loading"),
    children,
    ...props
  }, ref) {
    const mergedClassName = clsx_default(
      global_css_defense_default3.button,
      resets_default["box-sizing"],
      focus_default["outset-ring--focus-except-active"],
      variant !== "unstyled" && style_default6.button,
      style_default6[`is-${tone}`],
      style_default6[`is-${variant}`],
      style_default6[`is-${size4}`],
      loading && style_default6["is-loading"],
      className
    );
    (0, import_element15.useEffect)(() => {
      if (loading && loadingAnnouncement) {
        speak(loadingAnnouncement);
      }
    }, [loading, loadingAnnouncement]);
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      Button,
      {
        ref,
        className: mergedClassName,
        focusableWhenDisabled,
        disabled: disabled3 ?? loading,
        ...props,
        children
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/button/icon.mjs
var import_element17 = __toESM(require_element(), 1);

// node_modules/@wordpress/ui/build-module/icon/icon.mjs
var import_element16 = __toESM(require_element(), 1);
var import_primitives = __toESM(require_primitives(), 1);
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var Icon = (0, import_element16.forwardRef)(function Icon2({ icon, size: size4 = 24, ...restProps }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    import_primitives.SVG,
    {
      ref,
      fill: "currentColor",
      ...icon.props,
      ...restProps,
      width: size4,
      height: size4
    }
  );
});

// node_modules/@wordpress/ui/build-module/button/icon.mjs
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var ButtonIcon = (0, import_element17.forwardRef)(
  function ButtonIcon2({ icon, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      Icon,
      {
        ref,
        icon,
        viewBox: "4 4 16 16",
        size: 16,
        ...props
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/button/index.mjs
var Button4 = Object.assign(Button3, {
  /**
   * An icon component specifically designed to work well when rendered inside
   * a `Button` component.
   */
  Icon: ButtonIcon
});

// node_modules/@wordpress/ui/build-module/card/index.mjs
var card_exports = {};
__export(card_exports, {
  Content: () => Content,
  FullBleed: () => FullBleed,
  Header: () => Header2,
  Root: () => Root,
  Title: () => Title
});

// node_modules/@wordpress/ui/build-module/card/root.mjs
var import_element18 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default2 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default7 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Root = (0, import_element18.forwardRef)(function Card({ render: render4, ...restProps }, ref) {
  const mergedClassName = clsx_default(style_default7.root, resets_default2["box-sizing"]);
  const element = useRender2({
    defaultTagName: "div",
    render: render4,
    ref,
    props: mergeProps2({ className: mergedClassName }, restProps)
  });
  return element;
});

// node_modules/@wordpress/ui/build-module/card/header.mjs
var import_element19 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default8 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Header2 = (0, import_element19.forwardRef)(
  function CardHeader({ render: render4, ...props }, ref) {
    const element = useRender2({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps2({ className: style_default8.header }, props)
    });
    return element;
  }
);

// node_modules/@wordpress/ui/build-module/card/content.mjs
var import_element20 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default9 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Content = (0, import_element20.forwardRef)(
  function CardContent({ render: render4, ...props }, ref) {
    const element = useRender2({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps2({ className: style_default9.content }, props)
    });
    return element;
  }
);

// node_modules/@wordpress/ui/build-module/card/full-bleed.mjs
var import_element21 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='14f5e9ddeb']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "14f5e9ddeb");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}"));
  document.head.appendChild(style);
}
var style_default10 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var FullBleed = (0, import_element21.forwardRef)(
  function CardFullBleed({ render: render4, ...props }, ref) {
    const element = useRender2({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps2(
        { className: style_default10.fullbleed },
        props
      )
    });
    return element;
  }
);

// node_modules/@wordpress/ui/build-module/card/title.mjs
var import_element22 = __toESM(require_element(), 1);
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_TAG = /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", {});
var Title = (0, import_element22.forwardRef)(
  function CardTitle({ render: render4 = DEFAULT_TAG, children, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      Text3,
      {
        ref,
        variant: "heading-lg",
        render: render4,
        ...props,
        children
      }
    );
  }
);

// node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/caution.mjs
var import_primitives2 = __toESM(require_primitives(), 1);
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var caution_default = /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_primitives2.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_primitives2.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm-.75 12v-1.5h1.5V16h-1.5Zm0-8v5h1.5V8h-1.5Z" }) });

// node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/close-small.mjs
var import_primitives3 = __toESM(require_primitives(), 1);
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var close_small_default = /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_primitives3.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_primitives3.Path, { d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z" }) });

// node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/error.mjs
var import_primitives4 = __toESM(require_primitives(), 1);
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var error_default = /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_primitives4.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_primitives4.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.218 5.377a.25.25 0 0 0-.436 0l-7.29 12.96a.25.25 0 0 0 .218.373h14.58a.25.25 0 0 0 .218-.372l-7.29-12.96Zm-1.743-.735c.669-1.19 2.381-1.19 3.05 0l7.29 12.96a1.75 1.75 0 0 1-1.525 2.608H4.71a1.75 1.75 0 0 1-1.525-2.608l7.29-12.96ZM12.75 17.46h-1.5v-1.5h1.5v1.5Zm-1.5-3h1.5v-5h-1.5v5Z" }) });

// node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/info.mjs
var import_primitives5 = __toESM(require_primitives(), 1);
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var info_default = /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_primitives5.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_primitives5.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z" }) });

// node_modules/@wordpress/ui/node_modules/@wordpress/icons/build-module/library/published.mjs
var import_primitives6 = __toESM(require_primitives(), 1);
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var published_default = /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_primitives6.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_primitives6.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12 18.5a6.5 6.5 0 1 1 0-13 6.5 6.5 0 0 1 0 13ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm11.53-1.47-1.06-1.06L11 12.94l-1.47-1.47-1.06 1.06L11 15.06l4.53-4.53Z" }) });

// node_modules/@wordpress/ui/build-module/utils/render-portal-with-children.mjs
var import_element23 = __toESM(require_element(), 1);
function renderPortalWithChildren(portal, defaultPortal, children) {
  const rootPortal = portal ?? defaultPortal;
  return (0, import_element23.cloneElement)(rootPortal, {
    children
  });
}

// node_modules/@wordpress/ui/build-module/utils/use-deprioritized-initial-focus.mjs
var import_element24 = __toESM(require_element(), 1);
var getTabbableOptions = () => ({
  getShadowRoot: true,
  displayCheck: typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});
function useDeprioritizedInitialFocus({
  initialFocus,
  deprioritizedAttributes
}) {
  const popupRef = (0, import_element24.useRef)(null);
  let resolvedInitialFocus = initialFocus;
  if (initialFocus === void 0 || initialFocus === true) {
    resolvedInitialFocus = (interactionType) => {
      if (interactionType === "touch") {
        return popupRef.current ?? true;
      }
      const popup = popupRef.current;
      if (!popup) {
        return true;
      }
      const tabbables = tabbable(popup, getTabbableOptions());
      for (const el of tabbables) {
        if (el instanceof HTMLElement && !deprioritizedAttributes.some(
          (attr2) => el.hasAttribute(attr2)
        )) {
          return el;
        }
      }
      return true;
    };
  }
  return { resolvedInitialFocus, popupRef };
}

// node_modules/@wordpress/ui/build-module/lock-unlock.mjs
var import_private_apis = __toESM(require_private_apis(), 1);
var { lock, unlock } = (0, import_private_apis.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
  "I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.",
  "@wordpress/ui"
);

// node_modules/@wordpress/ui/build-module/stack/stack.mjs
var import_element25 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='b51ff41489']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "b51ff41489");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._19ce0419607e1896__stack{display:flex}}"));
  document.head.appendChild(style);
}
var style_default11 = { "stack": "_19ce0419607e1896__stack" };
var gapTokens2 = {
  xs: "var(--wpds-dimension-gap-xs, 4px)",
  sm: "var(--wpds-dimension-gap-sm, 8px)",
  md: "var(--wpds-dimension-gap-md, 12px)",
  lg: "var(--wpds-dimension-gap-lg, 16px)",
  xl: "var(--wpds-dimension-gap-xl, 24px)",
  "2xl": "var(--wpds-dimension-gap-2xl, 32px)",
  "3xl": "var(--wpds-dimension-gap-3xl, 40px)"
};
var Stack3 = (0, import_element25.forwardRef)(function Stack22({ direction, gap, align, justify, wrap, render: render4, ...props }, ref) {
  const style = {
    gap: gap && gapTokens2[gap],
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap
  };
  const element = useRender2({
    render: render4,
    ref,
    props: mergeProps2(props, { style, className: style_default11.stack })
  });
  return element;
});

// node_modules/@wordpress/ui/build-module/icon-button/icon-button.mjs
var import_element29 = __toESM(require_element(), 1);

// node_modules/@wordpress/ui/build-module/tooltip/popup.mjs
var import_element27 = __toESM(require_element(), 1);
var import_theme = __toESM(require_theme(), 1);

// node_modules/@wordpress/ui/build-module/tooltip/portal.mjs
var import_element26 = __toESM(require_element(), 1);
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var Portal = (0, import_element26.forwardRef)(
  function TooltipPortal3(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(index_parts_exports2.Portal, { ref, ...props });
  }
);

// node_modules/@wordpress/ui/build-module/tooltip/popup.mjs
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default3 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='8293efbb49']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "8293efbb49");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._480b748dd3510e64__positioner{z-index:var(--wp-ui-tooltip-z-index,initial)}._50096b232db7709d__popup{background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border-radius:var(--wpds-border-radius-sm,2px);box-shadow:var(--wpds-elevation-sm,0 1px 2px 0 #0000000d,0 2px 3px 0 #0000000a,0 6px 6px 0 #00000008,0 8px 8px 0 #00000005);color:var(--wpds-color-fg-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-sm,12px);line-height:1.4;padding:var(--wpds-dimension-padding-xs,4px) var(--wpds-dimension-padding-sm,8px);@media (forced-colors:active){border-bottom-color:CanvasText;border-bottom-style:solid;border-bottom-width:1px;border-left-color:CanvasText;border-left-style:solid;border-left-width:1px;border-right-color:CanvasText;border-right-style:solid;border-right-width:1px;border-top-color:CanvasText;border-top-style:solid;border-top-width:1px}}}'));
  document.head.appendChild(style);
}
var style_default12 = { "positioner": "_480b748dd3510e64__positioner", "popup": "_50096b232db7709d__popup" };
var ThemeProvider = unlock(import_theme.privateApis).ThemeProvider;
var Popup = (0, import_element27.forwardRef)(function TooltipPopup3({
  align = "center",
  portal,
  side = "top",
  sideOffset = 4,
  children,
  className,
  ...props
}, ref) {
  const portalChildren = /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    index_parts_exports2.Positioner,
    {
      align,
      side,
      sideOffset,
      className: clsx_default(resets_default3["box-sizing"], style_default12.positioner),
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ThemeProvider, { color: { bg: "#1e1e1e" }, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        index_parts_exports2.Popup,
        {
          ref,
          className: clsx_default(style_default12.popup, className),
          ...props,
          children
        }
      ) })
    }
  );
  return renderPortalWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Portal, {}), portalChildren);
});

// node_modules/@wordpress/ui/build-module/tooltip/trigger.mjs
var import_element28 = __toESM(require_element(), 1);
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var Trigger = (0, import_element28.forwardRef)(
  function TooltipTrigger3(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(index_parts_exports2.Trigger, { ref, ...props });
  }
);

// node_modules/@wordpress/ui/build-module/tooltip/root.mjs
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
function Root2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(index_parts_exports2.Root, { ...props });
}

// node_modules/@wordpress/ui/build-module/tooltip/provider.mjs
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
function Provider({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(index_parts_exports2.Provider, { ...props });
}

// node_modules/@wordpress/ui/build-module/icon-button/icon-button.mjs
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='358a2a646a']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "358a2a646a");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-compositions{._28cfdc260e755391__icon-button{--wp-ui-button-aspect-ratio:1;--wp-ui-button-padding-inline:0;--wp-ui-button-min-width:unset}.f1c70d719989a85a__icon{margin:-1px}}"));
  document.head.appendChild(style);
}
var style_default13 = { "icon-button": "_28cfdc260e755391__icon-button", "icon": "f1c70d719989a85a__icon" };
var IconButton = (0, import_element29.forwardRef)(
  function IconButton2({
    label,
    className,
    // Prevent accidental forwarding of `children`
    children: _children,
    disabled: disabled3,
    focusableWhenDisabled,
    icon,
    size: size4,
    shortcut,
    ...restProps
  }, ref) {
    const classes = clsx_default(style_default13["icon-button"], className);
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Provider, { delay: 0, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Root2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        Trigger,
        {
          ref,
          disabled: disabled3 && !focusableWhenDisabled,
          render: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            Button4,
            {
              ...restProps,
              size: size4,
              "aria-label": label,
              "aria-keyshortcuts": shortcut?.ariaKeyShortcut,
              disabled: disabled3,
              focusableWhenDisabled
            }
          ),
          className: classes,
          children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            Icon,
            {
              icon,
              size: 24,
              className: style_default13.icon
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(Popup, { children: [
        label,
        shortcut && /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("span", { "aria-hidden": "true", children: shortcut.displayShortcut })
        ] })
      ] })
    ] }) });
  }
);

// node_modules/@wordpress/ui/build-module/utils/create-overlay-title-validation.mjs
var import_element31 = __toESM(require_element(), 1);

// node_modules/@wordpress/ui/build-module/utils/use-schedule-validation.mjs
var import_element30 = __toESM(require_element(), 1);
function useScheduleValidation(validate) {
  const validateRef = (0, import_element30.useRef)(validate);
  validateRef.current = validate;
  const timerRef = (0, import_element30.useRef)(null);
  const unmountedRef = (0, import_element30.useRef)(false);
  const scheduleValidation = (0, import_element30.useCallback)(() => {
    if (unmountedRef.current) {
      return;
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      validateRef.current();
      timerRef.current = null;
    }, 0);
  }, []);
  (0, import_element30.useEffect)(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
  return scheduleValidation;
}

// node_modules/@wordpress/ui/build-module/utils/create-overlay-title-validation.mjs
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var VALIDATION_ENABLED = true;
function createOverlayTitleValidation(componentName) {
  const componentNameLowerCase = componentName.toLowerCase();
  const OverlayValidationContext = VALIDATION_ENABLED ? (0, import_element31.createContext)(null) : null;
  function useValidationContextDev() {
    return (0, import_element31.useContext)(OverlayValidationContext);
  }
  function useValidationContextProd() {
    return null;
  }
  const useValidationContext = VALIDATION_ENABLED ? useValidationContextDev : useValidationContextProd;
  function ValidationProviderDev({
    children
  }) {
    const titleElementRef = (0, import_element31.useRef)(null);
    const scheduleValidation = useScheduleValidation(() => {
      const titleElement = titleElementRef.current;
      if (!titleElement) {
        throw new Error(
          `${componentName}: Missing <${componentName}.Title>. For accessibility, every ${componentNameLowerCase} requires a title. If needed, the title can be visually hidden but must not be omitted.`
        );
      }
      const textContent = titleElement.textContent?.trim();
      if (!textContent) {
        throw new Error(
          `${componentName}: <${componentName}.Title> cannot be empty. Provide meaningful text content for the ${componentNameLowerCase} title.`
        );
      }
    });
    const registerTitle = (0, import_element31.useCallback)(
      (element) => {
        titleElementRef.current = element;
        scheduleValidation();
        return () => {
          titleElementRef.current = null;
          scheduleValidation();
        };
      },
      [scheduleValidation]
    );
    const contextValue = (0, import_element31.useMemo)(
      () => ({ registerTitle }),
      [registerTitle]
    );
    (0, import_element31.useEffect)(() => {
      scheduleValidation();
    }, [scheduleValidation]);
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(OverlayValidationContext.Provider, { value: contextValue, children });
  }
  function ValidationProviderProd({
    children
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children });
  }
  const ValidationProvider = VALIDATION_ENABLED ? ValidationProviderDev : ValidationProviderProd;
  return {
    ValidationProvider,
    useValidationContext
  };
}

// node_modules/@wordpress/ui/build-module/visually-hidden/visually-hidden.mjs
var import_element32 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='c46e8cb841']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "c46e8cb841");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.f37b9e2e191ebd66__visually-hidden{word-wrap:normal;border:0;clip-path:inset(50%);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;word-break:normal}}"));
  document.head.appendChild(style);
}
var style_default14 = { "visually-hidden": "f37b9e2e191ebd66__visually-hidden" };
var VisuallyHidden = (0, import_element32.forwardRef)(
  function VisuallyHidden2({ render: render4, ...restProps }, ref) {
    const element = useRender2({
      render: render4,
      ref,
      props: mergeProps2(
        { className: style_default14["visually-hidden"] },
        restProps,
        {
          // @ts-expect-error Arbitrary data-* attributes aren't indexable on the typed div props. Kept hardcoded so consumers can't change or remove it.
          "data-visually-hidden": ""
        }
      )
    });
    return element;
  }
);

// node_modules/@wordpress/ui/build-module/link/link.mjs
var import_element33 = __toESM(require_element(), 1);
var import_i18n2 = __toESM(require_i18n(), 1);
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default4 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='2a5ab8f3a7']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "2a5ab8f3a7");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._08e8a2e44959f892__outset-ring--focus,._970d04df7376df67__outset-ring--focus-within-except-active,.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible,.cd83dfc2126a0846__outset-ring--focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active,.ecadb9e080e2dfa5__outset-ring--focus-parent-visible{@media not (prefers-reduced-motion){--_gcd-a-transition:outline 0.1s ease-out;transition:outline .1s ease-out}outline:0 solid #0000;outline-offset:1px}._08e8a2e44959f892__outset-ring--focus:focus,._970d04df7376df67__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible:focus-within:has(:focus-visible),.cd83dfc2126a0846__outset-ring--focus-within:focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible:focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active:focus:not(:active),:focus-visible .ecadb9e080e2dfa5__outset-ring--focus-parent-visible{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9))}}"));
  document.head.appendChild(style);
}
var focus_default2 = { "outset-ring--focus": "_08e8a2e44959f892__outset-ring--focus", "outset-ring--focus-except-active": "e25b2bdd7aa21721__outset-ring--focus-except-active", "outset-ring--focus-visible": "d0541bc9dd9dc7b6__outset-ring--focus-visible", "outset-ring--focus-within": "cd83dfc2126a0846__outset-ring--focus-within", "outset-ring--focus-within-except-active": "_970d04df7376df67__outset-ring--focus-within-except-active", "outset-ring--focus-within-visible": "c5cb3ee4bddaa8e4__outset-ring--focus-within-visible", "outset-ring--focus-parent-visible": "ecadb9e080e2dfa5__outset-ring--focus-parent-visible" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='3cfc19ad21']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "3cfc19ad21");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{.d4250949359b05ce__link{text-decoration-thickness:from-font;text-underline-offset:.2em}.c6055659b8e2cd2c__is-brand,.c6055659b8e2cd2c__is-brand:visited{--_gcd-a-color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9));color:var(--wpds-color-fg-interactive-brand,var(--wp-admin-theme-color,#3858e9))}.c6055659b8e2cd2c__is-brand:active,.c6055659b8e2cd2c__is-brand:hover{--_gcd-a-color:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9));color:var(--wpds-color-fg-interactive-brand-active,var(--wp-admin-theme-color,#3858e9))}._92e0dfcaeee15b88__is-neutral,._92e0dfcaeee15b88__is-neutral:visited{--_gcd-a-color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);color:var(--wpds-color-fg-interactive-neutral,#1e1e1e);text-decoration-color:var(--wpds-color-stroke-interactive-neutral,#8d8d8d)}._92e0dfcaeee15b88__is-neutral:active,._92e0dfcaeee15b88__is-neutral:hover{--_gcd-a-color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e);color:var(--wpds-color-fg-interactive-neutral-active,#1e1e1e)}.cf122a9bf1035d42__is-unstyled{--_gcd-a-color:inherit;color:inherit;text-decoration:none}._0cb411afac4c86c7__link-icon{display:inline-block;font-weight:var(--wpds-typography-font-weight-regular,400);margin-inline-start:var(--wpds-dimension-padding-xs,4px);text-decoration:none}._0cb411afac4c86c7__link-icon:after{content:"\\2197"}._0cb411afac4c86c7__link-icon:dir(rtl):after{content:"\\2196"}}'));
  document.head.appendChild(style);
}
var style_default15 = { "link": "d4250949359b05ce__link", "is-brand": "c6055659b8e2cd2c__is-brand", "is-neutral": "_92e0dfcaeee15b88__is-neutral", "is-unstyled": "cf122a9bf1035d42__is-unstyled", "link-icon": "_0cb411afac4c86c7__link-icon" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='1fb29d3a3c']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "1fb29d3a3c");
  style.appendChild(document.createTextNode("._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}"));
  document.head.appendChild(style);
}
var global_css_defense_default4 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Link = (0, import_element33.forwardRef)(function Link2({
  children,
  variant = "default",
  tone = "brand",
  openInNewTab = false,
  render: render4,
  className,
  ...props
}, ref) {
  const element = useRender2({
    render: render4,
    defaultTagName: "a",
    ref,
    props: mergeProps2(props, {
      className: clsx_default(
        global_css_defense_default4.a,
        resets_default4["box-sizing"],
        focus_default2["outset-ring--focus"],
        variant !== "unstyled" && style_default15.link,
        variant !== "unstyled" && style_default15[`is-${tone}`],
        variant === "unstyled" && style_default15["is-unstyled"],
        className
      ),
      target: openInNewTab ? "_blank" : void 0,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
        children,
        openInNewTab && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          "span",
          {
            className: style_default15["link-icon"],
            role: "img",
            "aria-label": (
              /* translators: accessibility text appended to link text */
              (0, import_i18n2.__)("(opens in a new tab)")
            )
          }
        )
      ] })
    })
  });
  return element;
});

// node_modules/@wordpress/ui/build-module/notice/index.mjs
var notice_exports = {};
__export(notice_exports, {
  ActionButton: () => ActionButton,
  ActionLink: () => ActionLink,
  Actions: () => Actions,
  CloseIcon: () => CloseIcon,
  Description: () => Description,
  Root: () => Root3,
  Title: () => Title2
});

// node_modules/@wordpress/ui/build-module/notice/root.mjs
var import_element34 = __toESM(require_element(), 1);
import { speak as speak2 } from "@wordpress/a11y";
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default5 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default16 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var icons = {
  neutral: null,
  info: info_default,
  warning: caution_default,
  success: published_default,
  error: error_default
};
function getDefaultPoliteness(intent) {
  return intent === "error" ? "assertive" : "polite";
}
function safeRenderToString(message2) {
  if (!message2) {
    return void 0;
  }
  if (typeof message2 === "string") {
    return message2;
  }
  try {
    return (0, import_element34.renderToString)(message2);
  } catch {
    return void 0;
  }
}
function useSpokenMessage(message2, politeness) {
  const spokenMessage = safeRenderToString(message2);
  (0, import_element34.useEffect)(() => {
    if (spokenMessage) {
      speak2(spokenMessage, politeness);
    }
  }, [spokenMessage, politeness]);
}
var Root3 = (0, import_element34.forwardRef)(function Notice({
  intent = "neutral",
  children,
  icon,
  spokenMessage = children,
  politeness = getDefaultPoliteness(intent),
  render: render4,
  ...restProps
}, ref) {
  useSpokenMessage(spokenMessage, politeness);
  const iconElement = icon === null ? null : icon ?? icons[intent];
  const mergedClassName = clsx_default(
    style_default16.notice,
    style_default16[`is-${intent}`],
    resets_default5["box-sizing"]
  );
  const element = useRender2({
    defaultTagName: "div",
    render: render4,
    ref,
    props: mergeProps2(
      {
        className: mergedClassName,
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(import_jsx_runtime39.Fragment, { children: [
          children,
          iconElement && /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
            Icon,
            {
              className: style_default16.icon,
              icon: iconElement
            }
          )
        ] })
      },
      restProps
    )
  });
  return element;
});

// node_modules/@wordpress/ui/build-module/notice/title.mjs
var import_element35 = __toESM(require_element(), 1);
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default17 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var Title2 = (0, import_element35.forwardRef)(
  function NoticeTitle({ className, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      Text3,
      {
        ref,
        variant: "heading-md",
        className: clsx_default(style_default17.title, className),
        ...props
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/notice/description.mjs
var import_element36 = __toESM(require_element(), 1);
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default18 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var Description = (0, import_element36.forwardRef)(
  function NoticeDescription({ className, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
      Text3,
      {
        ref,
        variant: "body-md",
        className: clsx_default(style_default18.description, className),
        ...props
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/notice/actions.mjs
var import_element37 = __toESM(require_element(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default19 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var Actions = (0, import_element37.forwardRef)(
  function NoticeActions({ render: render4, ...props }, ref) {
    const element = useRender2({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps2(
        {
          className: style_default19.actions
        },
        props
      )
    });
    return element;
  }
);

// node_modules/@wordpress/ui/build-module/notice/close-icon.mjs
var import_element38 = __toESM(require_element(), 1);
var import_i18n3 = __toESM(require_i18n(), 1);
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default20 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var CloseIcon = (0, import_element38.forwardRef)(
  function NoticeCloseIcon({ className, icon = close_small_default, label = (0, import_i18n3.__)("Dismiss"), ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      IconButton,
      {
        ...props,
        ref,
        className: clsx_default(style_default20["close-icon"], className),
        variant: "minimal",
        size: "small",
        tone: "neutral",
        icon,
        label
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/notice/action-button.mjs
var import_element39 = __toESM(require_element(), 1);
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default21 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var ActionButton = (0, import_element39.forwardRef)(
  function NoticeActionButton({ className, loading, loadingAnnouncement, variant, ...props }, ref) {
    const loadingProps = loading !== void 0 ? { loading, loadingAnnouncement: loadingAnnouncement ?? "" } : {};
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      Button4,
      {
        ...props,
        ...loadingProps,
        ref,
        size: "compact",
        tone: "neutral",
        variant,
        className: clsx_default(
          style_default21["action-button"],
          style_default21[`is-action-button-${variant}`],
          className
        )
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/notice/action-link.mjs
var import_element40 = __toESM(require_element(), 1);
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='60dd1d4d42']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "60dd1d4d42");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._4145abab73d17514__notice{--icon-height:24px;--text-vertical-padding:calc((var(--icon-height) - var(--wpds-typography-line-height-sm, 20px))/2);--wp-ui-notice-background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-neutral,#dbdbdb);--wp-ui-notice-text-color:var(--wpds-color-fg-content-neutral,#1e1e1e);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-neutral,#1e1e1e);align-items:start;background-color:var(--wp-ui-notice-background-color);border:1px solid var(--wp-ui-notice-border-color);border-radius:var(--wpds-border-radius-lg,8px);container-type:inline-size;display:grid;grid-template-columns:auto 1fr auto;padding:var(--wpds-dimension-padding-md,12px)}.d0a25570cb528528__icon{color:var(--wp-ui-notice-decorative-icon-color);grid-column:1;grid-row:1;margin-inline-end:var(--wpds-dimension-gap-xs,4px)}._1904b570a89bb815__description,.b5397fb9d05389e3__title{color:var(--wp-ui-notice-text-color);grid-column:2;padding-block:var(--text-vertical-padding)}._1904b570a89bb815__description{text-wrap:pretty}._0a1270dcdd79c031__actions{display:flex;flex-wrap:wrap;gap:var(--wpds-dimension-gap-md,12px);grid-column:2}._4145abab73d17514__notice:has(._1904b570a89bb815__description) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions{margin-block-start:var(--wpds-dimension-gap-sm,8px)}._983740ab855c4e09__action-button{flex-shrink:0}.d329e7416d368d31__action-link{flex-shrink:0;&:not(:first-child){margin-inline-start:var(--wpds-dimension-gap-xs,4px)}&:not(:last-child){margin-inline-end:var(--wpds-dimension-gap-xs,4px)}}._487e6a5c1375f7dc__close-icon{grid-column:3;grid-row:1;margin-inline-start:var(--wpds-dimension-gap-xs,4px)}._531c140826094795__is-info{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-info-weak,#f3f9ff);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-info,#9fbcdc);--wp-ui-notice-text-color:var(--wpds-color-fg-content-info,#001b4f);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-info-weak,#006bd7)}.ae2e1004697cce95__is-warning{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-warning-weak,#fff7e1);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-warning,#d0b481);--wp-ui-notice-text-color:var(--wpds-color-fg-content-warning,#2e1900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-warning-weak,#926300)}._2e614a76af494837__is-success{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-success-weak,#ebffed);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-success,#8ac894);--wp-ui-notice-text-color:var(--wpds-color-fg-content-success,#002900);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-success-weak,#008030)}.af00331ae17a0065__is-error{--wp-ui-notice-background-color:var(--wpds-color-bg-surface-error-weak,#fff6f5);--wp-ui-notice-border-color:var(--wpds-color-stroke-surface-error,#daa39b);--wp-ui-notice-text-color:var(--wpds-color-fg-content-error,#470000);--wp-ui-notice-decorative-icon-color:var(--wpds-color-fg-content-error-weak,#cc1818)}@container (max-width: 320px){._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._0a1270dcdd79c031__actions,._4145abab73d17514__notice:has(.b5397fb9d05389e3__title) ._1904b570a89bb815__description{grid-column:1/3}}}@layer wp-ui-compositions{.d329e7416d368d31__action-link{margin-block:auto}._487e6a5c1375f7dc__close-icon,._983740ab855c4e09__action-button:is(._8ddb8fb33fbf3d38__is-action-button-outline,._77bbde495a8a0af3__is-action-button-minimal){--wp-ui-button-background-color-active:color-mix(in srgb,#0000 50%,var(--wpds-color-bg-interactive-neutral-weak-active,#ededed))}}"));
  document.head.appendChild(style);
}
var style_default22 = { "notice": "_4145abab73d17514__notice", "icon": "d0a25570cb528528__icon", "title": "b5397fb9d05389e3__title", "description": "_1904b570a89bb815__description", "actions": "_0a1270dcdd79c031__actions", "action-button": "_983740ab855c4e09__action-button", "action-link": "d329e7416d368d31__action-link", "close-icon": "_487e6a5c1375f7dc__close-icon", "is-info": "_531c140826094795__is-info", "is-warning": "ae2e1004697cce95__is-warning", "is-success": "_2e614a76af494837__is-success", "is-error": "af00331ae17a0065__is-error", "is-action-button-outline": "_8ddb8fb33fbf3d38__is-action-button-outline", "is-action-button-minimal": "_77bbde495a8a0af3__is-action-button-minimal" };
var ActionLink = (0, import_element40.forwardRef)(
  function NoticeActionLink({ className, render: render4, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      Text3,
      {
        ref,
        className: clsx_default(style_default22["action-link"], className),
        ...props,
        variant: "body-md",
        render: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Link, { tone: "neutral", variant: "default", render: render4 })
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/popover/index.mjs
var popover_exports = {};
__export(popover_exports, {
  Arrow: () => Arrow,
  Close: () => Close,
  Description: () => Description2,
  Popup: () => Popup2,
  Portal: () => Portal2,
  Root: () => Root4,
  Title: () => Title3,
  Trigger: () => Trigger2
});

// node_modules/@wordpress/ui/build-module/popover/arrow.mjs
var import_element41 = __toESM(require_element(), 1);
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='cc851ac208']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "cc851ac208");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._10450722b9676f78__positioner{z-index:var(--wp-ui-popover-z-index,initial)}._84e8f597bcf683b8__popup{background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--wpds-elevation-md,0 2px 3px 0 #0000000d,0 4px 5px 0 #0000000a,0 12px 12px 0 #00000008,0 16px 16px 0 #00000005);color:var(--wpds-color-fg-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-md,24px);outline:0;padding:var(--wpds-dimension-padding-lg,16px)}.e4d544aa033f05c6__backdrop~* ._84e8f597bcf683b8__popup{border-color:#0000}@media (forced-colors:active){._84e8f597bcf683b8__popup,.e4d544aa033f05c6__backdrop~* ._84e8f597bcf683b8__popup{border-color:CanvasText}}.ca05d3eb89321fcd__arrow{display:flex;&[data-side=top]{bottom:-8px;rotate:180deg}&[data-side=bottom]{rotate:0deg;top:-8px}&[data-side=left]{inset-inline-end:-13px;rotate:90deg}&[data-side=right]{inset-inline-start:-13px;rotate:-90deg}}._12d8edd9eb946b5f__arrow-fill{fill:var(--wpds-color-bg-surface-neutral-strong,#fff)}._6ddab482bd929dad__arrow-stroke{fill:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._6d7e4729cd96960e__title{--_gcd-heading-color:var(--wpds-color-fg-content-neutral,#1e1e1e);color:var(--wpds-color-fg-content-neutral,#1e1e1e)}.e4d544aa033f05c6__backdrop{background-color:#00000026;inset:0;position:fixed;z-index:var(--wp-ui-popover-z-index,initial)}}'));
  document.head.appendChild(style);
}
var style_default23 = { "positioner": "_10450722b9676f78__positioner", "popup": "_84e8f597bcf683b8__popup", "backdrop": "e4d544aa033f05c6__backdrop", "arrow": "ca05d3eb89321fcd__arrow", "arrow-fill": "_12d8edd9eb946b5f__arrow-fill", "arrow-stroke": "_6ddab482bd929dad__arrow-stroke", "title": "_6d7e4729cd96960e__title" };
function DefaultArrowSvg(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
    "svg",
    {
      width: "20",
      height: "10",
      viewBox: "0 0 20 10",
      fill: "none",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          "path",
          {
            d: "M20 10H0V8h1.465a4 4 0 0 0 2.676-1.027l5.19-4.388c.378-.341.96-.341 1.338 0l5.19 4.388A4 4 0 0 0 18.535 8H20z",
            className: style_default23["arrow-fill"]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
          "path",
          {
            d: "M10 3.097 4.81 7.486A5 5 0 0 1 1.465 8.77H0V8h1.465a4 4 0 0 0 2.676-1.027l5.19-4.388c.378-.341.96-.341 1.338 0l5.19 4.388A4 4 0 0 0 18.535 8H20v.77h-1.465a5 5 0 0 1-3.345-1.284z",
            className: style_default23["arrow-stroke"]
          }
        )
      ]
    }
  );
}
var Arrow = (0, import_element41.forwardRef)(function PopoverArrow3({ children, className, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    index_parts_exports.Arrow,
    {
      ref,
      className: clsx_default(style_default23.arrow, className),
      ...props,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(DefaultArrowSvg, {})
    }
  );
});

// node_modules/@wordpress/ui/build-module/popover/close.mjs
var import_element42 = __toESM(require_element(), 1);
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var Close = (0, import_element42.forwardRef)(
  function PopoverClose3(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
      index_parts_exports.Close,
      {
        ref,
        "data-wp-ui-popover-close": "",
        ...props
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/popover/description.mjs
var import_element43 = __toESM(require_element(), 1);
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var Description2 = (0, import_element43.forwardRef)(
  function PopoverDescription3({ children, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      Text3,
      {
        ref,
        variant: "body-md",
        render: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(index_parts_exports.Description, { ...props }),
        children
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/popover/popup.mjs
var import_element45 = __toESM(require_element(), 1);
var import_compose = __toESM(require_compose(), 1);
var import_theme2 = __toESM(require_theme(), 1);

// node_modules/@wordpress/ui/build-module/popover/context.mjs
var popoverTitleValidation = createOverlayTitleValidation("Popover");
var usePopoverValidationContext = popoverTitleValidation.useValidationContext;
var PopoverValidationProvider = popoverTitleValidation.ValidationProvider;

// node_modules/@wordpress/ui/build-module/popover/portal.mjs
var import_element44 = __toESM(require_element(), 1);
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var Portal2 = (0, import_element44.forwardRef)(
  function PopoverPortal3(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(index_parts_exports.Portal, { ref, ...props });
  }
);

// node_modules/@wordpress/ui/build-module/popover/popup.mjs
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='e3ae230cea']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "e3ae230cea");
  style.appendChild(document.createTextNode("@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}"));
  document.head.appendChild(style);
}
var resets_default6 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='cc851ac208']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "cc851ac208");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._10450722b9676f78__positioner{z-index:var(--wp-ui-popover-z-index,initial)}._84e8f597bcf683b8__popup{background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--wpds-elevation-md,0 2px 3px 0 #0000000d,0 4px 5px 0 #0000000a,0 12px 12px 0 #00000008,0 16px 16px 0 #00000005);color:var(--wpds-color-fg-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-md,24px);outline:0;padding:var(--wpds-dimension-padding-lg,16px)}.e4d544aa033f05c6__backdrop~* ._84e8f597bcf683b8__popup{border-color:#0000}@media (forced-colors:active){._84e8f597bcf683b8__popup,.e4d544aa033f05c6__backdrop~* ._84e8f597bcf683b8__popup{border-color:CanvasText}}.ca05d3eb89321fcd__arrow{display:flex;&[data-side=top]{bottom:-8px;rotate:180deg}&[data-side=bottom]{rotate:0deg;top:-8px}&[data-side=left]{inset-inline-end:-13px;rotate:90deg}&[data-side=right]{inset-inline-start:-13px;rotate:-90deg}}._12d8edd9eb946b5f__arrow-fill{fill:var(--wpds-color-bg-surface-neutral-strong,#fff)}._6ddab482bd929dad__arrow-stroke{fill:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._6d7e4729cd96960e__title{--_gcd-heading-color:var(--wpds-color-fg-content-neutral,#1e1e1e);color:var(--wpds-color-fg-content-neutral,#1e1e1e)}.e4d544aa033f05c6__backdrop{background-color:#00000026;inset:0;position:fixed;z-index:var(--wp-ui-popover-z-index,initial)}}'));
  document.head.appendChild(style);
}
var style_default24 = { "positioner": "_10450722b9676f78__positioner", "popup": "_84e8f597bcf683b8__popup", "backdrop": "e4d544aa033f05c6__backdrop", "arrow": "ca05d3eb89321fcd__arrow", "arrow-fill": "_12d8edd9eb946b5f__arrow-fill", "arrow-stroke": "_6ddab482bd929dad__arrow-stroke", "title": "_6d7e4729cd96960e__title" };
var ThemeProvider2 = unlock(import_theme2.privateApis).ThemeProvider;
var CLOSE_ATTR = "data-wp-ui-popover-close";
var Popup2 = (0, import_element45.forwardRef)(function PopoverPopup3({
  align = "center",
  alignOffset,
  anchor,
  // Matches the popup's border-radius (--wpds-border-radius-md).
  arrowPadding = 8,
  backdrop = false,
  children,
  className,
  collisionAvoidance,
  collisionBoundary,
  collisionPadding,
  portal,
  finalFocus,
  initialFocus,
  side = "bottom",
  sideOffset = 8,
  sticky,
  variant = "default",
  ...props
}, ref) {
  const { resolvedInitialFocus, popupRef } = useDeprioritizedInitialFocus({
    initialFocus,
    deprioritizedAttributes: [CLOSE_ATTR]
  });
  const mergedPopupRef = (0, import_compose.useMergeRefs)([ref, popupRef]);
  const backdropElement = backdrop ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(index_parts_exports.Backdrop, { className: style_default24.backdrop }) : null;
  const positioner = /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    index_parts_exports.Positioner,
    {
      align,
      alignOffset,
      anchor,
      arrowPadding,
      collisionAvoidance,
      collisionBoundary,
      collisionPadding,
      side,
      sideOffset,
      sticky,
      className: clsx_default(resets_default6["box-sizing"], style_default24.positioner),
      children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(ThemeProvider2, { children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
        index_parts_exports.Popup,
        {
          ref: mergedPopupRef,
          initialFocus: resolvedInitialFocus,
          finalFocus,
          className: clsx_default(
            variant !== "unstyled" && style_default24.popup,
            className
          ),
          ...props,
          children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(PopoverValidationProvider, { children })
        }
      ) })
    }
  );
  const portalChildren = /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(import_jsx_runtime49.Fragment, { children: [
    backdropElement,
    positioner
  ] });
  return renderPortalWithChildren(portal, /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(Portal2, {}), portalChildren);
});

// node_modules/@wordpress/ui/build-module/popover/root.mjs
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
function Root4(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(index_parts_exports.Root, { ...props });
}

// node_modules/@wordpress/ui/build-module/popover/title.mjs
var import_compose2 = __toESM(require_compose(), 1);
var import_element46 = __toESM(require_element(), 1);
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='cc851ac208']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "cc851ac208");
  style.appendChild(document.createTextNode('@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._10450722b9676f78__positioner{z-index:var(--wp-ui-popover-z-index,initial)}._84e8f597bcf683b8__popup{background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);border-radius:var(--wpds-border-radius-md,4px);box-shadow:var(--wpds-elevation-md,0 2px 3px 0 #0000000d,0 4px 5px 0 #0000000a,0 12px 12px 0 #00000008,0 16px 16px 0 #00000005);color:var(--wpds-color-fg-content-neutral,#1e1e1e);font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-md,24px);outline:0;padding:var(--wpds-dimension-padding-lg,16px)}.e4d544aa033f05c6__backdrop~* ._84e8f597bcf683b8__popup{border-color:#0000}@media (forced-colors:active){._84e8f597bcf683b8__popup,.e4d544aa033f05c6__backdrop~* ._84e8f597bcf683b8__popup{border-color:CanvasText}}.ca05d3eb89321fcd__arrow{display:flex;&[data-side=top]{bottom:-8px;rotate:180deg}&[data-side=bottom]{rotate:0deg;top:-8px}&[data-side=left]{inset-inline-end:-13px;rotate:90deg}&[data-side=right]{inset-inline-start:-13px;rotate:-90deg}}._12d8edd9eb946b5f__arrow-fill{fill:var(--wpds-color-bg-surface-neutral-strong,#fff)}._6ddab482bd929dad__arrow-stroke{fill:var(--wpds-color-stroke-surface-neutral,#dbdbdb)}._6d7e4729cd96960e__title{--_gcd-heading-color:var(--wpds-color-fg-content-neutral,#1e1e1e);color:var(--wpds-color-fg-content-neutral,#1e1e1e)}.e4d544aa033f05c6__backdrop{background-color:#00000026;inset:0;position:fixed;z-index:var(--wp-ui-popover-z-index,initial)}}'));
  document.head.appendChild(style);
}
var style_default25 = { "positioner": "_10450722b9676f78__positioner", "popup": "_84e8f597bcf683b8__popup", "backdrop": "e4d544aa033f05c6__backdrop", "arrow": "ca05d3eb89321fcd__arrow", "arrow-fill": "_12d8edd9eb946b5f__arrow-fill", "arrow-stroke": "_6ddab482bd929dad__arrow-stroke", "title": "_6d7e4729cd96960e__title" };
var Title3 = (0, import_element46.forwardRef)(
  function PopoverTitle3({ children, ...props }, forwardedRef) {
    const validationContext = usePopoverValidationContext();
    const internalRef = (0, import_element46.useRef)(null);
    const mergedRef = (0, import_compose2.useMergeRefs)([internalRef, forwardedRef]);
    (0, import_element46.useEffect)(() => {
      if (validationContext) {
        return validationContext.registerTitle(internalRef.current);
      }
      return void 0;
    }, [validationContext]);
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
      Text3,
      {
        ref: mergedRef,
        variant: "heading-xl",
        render: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(index_parts_exports.Title, { ...props }),
        className: style_default25.title,
        children
      }
    );
  }
);

// node_modules/@wordpress/ui/build-module/popover/trigger.mjs
var import_element47 = __toESM(require_element(), 1);
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var Trigger2 = (0, import_element47.forwardRef)(
  function PopoverTrigger3(props, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(index_parts_exports.Trigger, { ref, ...props });
  }
);

// routes/ai-home/stage.tsx
var import_components28 = __toESM(require_components());
var import_core_data2 = __toESM(require_core_data());
var import_data2 = __toESM(require_data());

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/badge/badge.mjs
var import_element49 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var React80 = __toESM(require_react(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js
function getStateAttributesProps3(state, customMapping) {
  const props = {};
  for (const key in state) {
    const value = state[key];
    if (customMapping?.hasOwnProperty(key)) {
      const customProps = customMapping[key](value);
      if (customProps != null) {
        Object.assign(props, customProps);
      }
      continue;
    }
    if (value === true) {
      props[`data-${key.toLowerCase()}`] = "";
    } else if (value) {
      props[`data-${key.toLowerCase()}`] = value.toString();
    }
  }
  return props;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveClassName.js
function resolveClassName3(className, state) {
  return typeof className === "function" ? className(state) : className;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveStyle.js
function resolveStyle3(style, state) {
  return typeof style === "function" ? style(state) : style;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/merge-props/mergeProps.js
var EMPTY_PROPS3 = {};
function mergeProps4(a2, b2, c2, d2, e2) {
  if (!c2 && !d2 && !e2 && !a2) {
    return createInitialMergedProps3(b2);
  }
  let merged = createInitialMergedProps3(a2);
  if (b2) {
    merged = mergeInto3(merged, b2);
  }
  if (c2) {
    merged = mergeInto3(merged, c2);
  }
  if (d2) {
    merged = mergeInto3(merged, d2);
  }
  if (e2) {
    merged = mergeInto3(merged, e2);
  }
  return merged;
}
function mergePropsN3(props) {
  if (props.length === 0) {
    return EMPTY_PROPS3;
  }
  if (props.length === 1) {
    return createInitialMergedProps3(props[0]);
  }
  let merged = createInitialMergedProps3(props[0]);
  for (let i2 = 1; i2 < props.length; i2 += 1) {
    merged = mergeInto3(merged, props[i2]);
  }
  return merged;
}
function createInitialMergedProps3(inputProps) {
  if (isPropsGetter3(inputProps)) {
    return {
      ...resolvePropsGetter3(inputProps, EMPTY_PROPS3)
    };
  }
  return copyInitialProps3(inputProps);
}
function mergeInto3(merged, inputProps) {
  if (isPropsGetter3(inputProps)) {
    return resolvePropsGetter3(inputProps, merged);
  }
  return mutablyMergeInto3(merged, inputProps);
}
function copyInitialProps3(inputProps) {
  const copiedProps = {
    ...inputProps
  };
  for (const propName in copiedProps) {
    const propValue = copiedProps[propName];
    if (isEventHandler3(propName, propValue)) {
      copiedProps[propName] = wrapEventHandler3(propValue);
    }
  }
  return copiedProps;
}
function mutablyMergeInto3(mergedProps, externalProps) {
  if (!externalProps) {
    return mergedProps;
  }
  for (const propName in externalProps) {
    const externalPropValue = externalProps[propName];
    switch (propName) {
      case "style": {
        mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
        break;
      }
      case "className": {
        mergedProps[propName] = mergeClassNames3(mergedProps.className, externalPropValue);
        break;
      }
      default: {
        if (isEventHandler3(propName, externalPropValue)) {
          mergedProps[propName] = mergeEventHandlers3(mergedProps[propName], externalPropValue);
        } else {
          mergedProps[propName] = externalPropValue;
        }
      }
    }
  }
  return mergedProps;
}
function isEventHandler3(key, value) {
  const code0 = key.charCodeAt(0);
  const code1 = key.charCodeAt(1);
  const code2 = key.charCodeAt(2);
  return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter3(inputProps) {
  return typeof inputProps === "function";
}
function resolvePropsGetter3(inputProps, previousProps) {
  if (isPropsGetter3(inputProps)) {
    return inputProps(previousProps);
  }
  return inputProps ?? EMPTY_PROPS3;
}
function mergeEventHandlers3(ourHandler, theirHandler) {
  if (!theirHandler) {
    return ourHandler;
  }
  if (!ourHandler) {
    return wrapEventHandler3(theirHandler);
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent3(event)) {
      const baseUIEvent = event;
      makeEventPreventable3(baseUIEvent);
      const result2 = theirHandler(...args);
      if (!baseUIEvent.baseUIHandlerPrevented) {
        ourHandler?.(...args);
      }
      return result2;
    }
    const result = theirHandler(...args);
    ourHandler?.(...args);
    return result;
  };
}
function wrapEventHandler3(handler) {
  if (!handler) {
    return handler;
  }
  return (...args) => {
    const event = args[0];
    if (isSyntheticEvent3(event)) {
      makeEventPreventable3(event);
    }
    return handler(...args);
  };
}
function makeEventPreventable3(event) {
  event.preventBaseUIHandler = () => {
    event.baseUIHandlerPrevented = true;
  };
  return event;
}
function mergeClassNames3(ourClassName, theirClassName) {
  if (theirClassName) {
    if (ourClassName) {
      return theirClassName + " " + ourClassName;
    }
    return theirClassName;
  }
  return ourClassName;
}
function isSyntheticEvent3(event) {
  return event != null && typeof event === "object" && "nativeEvent" in event;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useRenderElement.js
var import_react16 = __toESM(require_react(), 1);
function useRenderElement3(element, componentProps, params = {}) {
  const renderProp = componentProps.render;
  const outProps = useRenderElementProps3(componentProps, params);
  if (params.enabled === false) {
    return null;
  }
  const state = params.state ?? EMPTY_OBJECT;
  return evaluateRenderProp3(element, renderProp, outProps, state);
}
function useRenderElementProps3(componentProps, params = {}) {
  const {
    className: classNameProp,
    style: styleProp,
    render: renderProp
  } = componentProps;
  const {
    state = EMPTY_OBJECT,
    ref,
    props,
    stateAttributesMapping: stateAttributesMapping7,
    enabled = true
  } = params;
  const className = enabled ? resolveClassName3(classNameProp, state) : void 0;
  const style = enabled ? resolveStyle3(styleProp, state) : void 0;
  const stateProps = enabled ? getStateAttributesProps3(state, stateAttributesMapping7) : EMPTY_OBJECT;
  const resolvedProps = enabled && props ? resolveRenderFunctionProps3(props) : void 0;
  const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
  if (typeof document !== "undefined") {
    if (!enabled) {
      useMergedRefs(null, null);
    } else if (Array.isArray(ref)) {
      outProps.ref = useMergedRefsN([outProps.ref, getReactElementRef(renderProp), ...ref]);
    } else {
      outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
    }
  }
  if (!enabled) {
    return EMPTY_OBJECT;
  }
  if (className !== void 0) {
    outProps.className = mergeClassNames3(outProps.className, className);
  }
  if (style !== void 0) {
    outProps.style = mergeObjects(outProps.style, style);
  }
  return outProps;
}
function resolveRenderFunctionProps3(props) {
  if (Array.isArray(props)) {
    return mergePropsN3(props);
  }
  return mergeProps4(void 0, props);
}
var REACT_LAZY_TYPE3 = /* @__PURE__ */ Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN3 = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN3 = /[a-z]/;
function evaluateRenderProp3(element, render4, props, state) {
  if (render4) {
    if (typeof render4 === "function") {
      if (true) {
        warnIfRenderPropLooksLikeComponent3(render4);
      }
      return render4(props, state);
    }
    const mergedProps = mergeProps4(props, render4.props);
    mergedProps.ref = props.ref;
    let newElement = render4;
    if (newElement?.$$typeof === REACT_LAZY_TYPE3) {
      const children = React80.Children.toArray(render4);
      newElement = children[0];
    }
    if (true) {
      if (!/* @__PURE__ */ React80.isValidElement(newElement)) {
        throw new Error(["Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.", "A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.", "https://base-ui.com/r/invalid-render-prop"].join("\n"));
      }
    }
    return /* @__PURE__ */ React80.cloneElement(newElement, mergedProps);
  }
  if (element) {
    if (typeof element === "string") {
      return renderTag3(element, props);
    }
  }
  throw new Error(true ? "Base UI: Render element or function are not defined." : formatErrorMessage_default(8));
}
function warnIfRenderPropLooksLikeComponent3(renderFn) {
  const functionName = renderFn.name;
  if (functionName.length === 0) {
    return;
  }
  if (!COMPONENT_IDENTIFIER_PATTERN3.test(functionName)) {
    return;
  }
  if (!LOWERCASE_CHARACTER_PATTERN3.test(functionName)) {
    return;
  }
  warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag3(Tag, props) {
  if (Tag === "button") {
    return /* @__PURE__ */ (0, import_react16.createElement)("button", {
      type: "button",
      ...props,
      key: props.key
    });
  }
  if (Tag === "img") {
    return /* @__PURE__ */ (0, import_react16.createElement)("img", {
      alt: "",
      ...props,
      key: props.key
    });
  }
  return /* @__PURE__ */ React80.createElement(Tag, props);
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/reason-parts.js
var reason_parts_exports2 = {};
__export(reason_parts_exports2, {
  cancelOpen: () => cancelOpen2,
  chipRemovePress: () => chipRemovePress2,
  clearPress: () => clearPress2,
  closePress: () => closePress2,
  closeWatcher: () => closeWatcher2,
  decrementPress: () => decrementPress2,
  disabled: () => disabled2,
  drag: () => drag2,
  escapeKey: () => escapeKey2,
  focusOut: () => focusOut2,
  imperativeAction: () => imperativeAction2,
  incrementPress: () => incrementPress2,
  inputBlur: () => inputBlur2,
  inputChange: () => inputChange2,
  inputClear: () => inputClear2,
  inputPaste: () => inputPaste2,
  inputPress: () => inputPress2,
  itemPress: () => itemPress2,
  keyboard: () => keyboard2,
  linkPress: () => linkPress2,
  listNavigation: () => listNavigation2,
  none: () => none2,
  outsidePress: () => outsidePress2,
  pointer: () => pointer2,
  scrub: () => scrub2,
  siblingOpen: () => siblingOpen2,
  swipe: () => swipe2,
  trackPress: () => trackPress2,
  triggerFocus: () => triggerFocus2,
  triggerHover: () => triggerHover2,
  triggerPress: () => triggerPress2,
  wheel: () => wheel2,
  windowResize: () => windowResize2
});
var none2 = "none";
var triggerPress2 = "trigger-press";
var triggerHover2 = "trigger-hover";
var triggerFocus2 = "trigger-focus";
var outsidePress2 = "outside-press";
var itemPress2 = "item-press";
var closePress2 = "close-press";
var linkPress2 = "link-press";
var clearPress2 = "clear-press";
var chipRemovePress2 = "chip-remove-press";
var trackPress2 = "track-press";
var incrementPress2 = "increment-press";
var decrementPress2 = "decrement-press";
var inputChange2 = "input-change";
var inputClear2 = "input-clear";
var inputBlur2 = "input-blur";
var inputPaste2 = "input-paste";
var inputPress2 = "input-press";
var focusOut2 = "focus-out";
var escapeKey2 = "escape-key";
var closeWatcher2 = "close-watcher";
var listNavigation2 = "list-navigation";
var keyboard2 = "keyboard";
var pointer2 = "pointer";
var drag2 = "drag";
var wheel2 = "wheel";
var scrub2 = "scrub";
var cancelOpen2 = "cancel-open";
var siblingOpen2 = "sibling-open";
var disabled2 = "disabled";
var imperativeAction2 = "imperative-action";
var swipe2 = "swipe";
var windowResize2 = "window-resize";

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js
function createChangeEventDetails2(reason, event, trigger, customProperties) {
  let canceled = false;
  let allowPropagation = false;
  const custom = customProperties ?? EMPTY_OBJECT;
  const details = {
    reason,
    event: event ?? new Event("base-ui"),
    cancel() {
      canceled = true;
    },
    allowPropagation() {
      allowPropagation = true;
    },
    get isCanceled() {
      return canceled;
    },
    get isPropagationAllowed() {
      return allowPropagation;
    },
    trigger,
    ...custom
  };
  return details;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useBaseUiId.js
function useBaseUiId2(idOverride) {
  return useId(idOverride, "base-ui");
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/root/useCollapsibleRoot.js
var React82 = __toESM(require_react(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
var ReactDOM10 = __toESM(require_react_dom(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/resolveRef.js
function resolveRef2(maybeRef) {
  if (maybeRef == null) {
    return maybeRef;
  }
  return "current" in maybeRef ? maybeRef.current : maybeRef;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js
var TransitionStatusDataAttributes2 = /* @__PURE__ */ (function(TransitionStatusDataAttributes3) {
  TransitionStatusDataAttributes3["startingStyle"] = "data-starting-style";
  TransitionStatusDataAttributes3["endingStyle"] = "data-ending-style";
  return TransitionStatusDataAttributes3;
})({});
var STARTING_HOOK2 = {
  [TransitionStatusDataAttributes2.startingStyle]: ""
};
var ENDING_HOOK2 = {
  [TransitionStatusDataAttributes2.endingStyle]: ""
};
var transitionStatusMapping2 = {
  transitionStatus(value) {
    if (value === "starting") {
      return STARTING_HOOK2;
    }
    if (value === "ending") {
      return ENDING_HOOK2;
    }
    return null;
  }
};

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js
function useAnimationsFinished2(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
  const frame = useAnimationFrame();
  return useStableCallback((fnToExecute, signal = null) => {
    frame.cancel();
    const element = resolveRef2(elementOrRef);
    if (element == null) {
      return;
    }
    const resolvedElement = element;
    const done = () => {
      ReactDOM10.flushSync(fnToExecute);
    };
    if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
      fnToExecute();
      return;
    }
    function exec() {
      Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
        if (!signal?.aborted) {
          done();
        }
      }).catch(() => {
        if (treatAbortedAsFinished) {
          if (!signal?.aborted) {
            done();
          }
          return;
        }
        const currentAnimations = resolvedElement.getAnimations();
        if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) {
          exec();
        }
      });
    }
    if (waitForStartingStyleRemoved) {
      const startingStyleAttribute = TransitionStatusDataAttributes2.startingStyle;
      if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
        frame.request(exec);
        return;
      }
      const attributeObserver = new MutationObserver(() => {
        if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
          attributeObserver.disconnect();
          exec();
        }
      });
      attributeObserver.observe(resolvedElement, {
        attributes: true,
        attributeFilter: [startingStyleAttribute]
      });
      signal?.addEventListener("abort", () => attributeObserver.disconnect(), {
        once: true
      });
      return;
    }
    frame.request(exec);
  });
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js
var React81 = __toESM(require_react(), 1);
function useTransitionStatus2(open, enableIdleState = false, deferEndingState = false) {
  const [transitionStatus, setTransitionStatus] = React81.useState(open && enableIdleState ? "idle" : void 0);
  const [mounted, setMounted] = React81.useState(open);
  if (open && !mounted) {
    setMounted(true);
    setTransitionStatus("starting");
  }
  if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) {
    setTransitionStatus("ending");
  }
  if (!open && !mounted && transitionStatus === "ending") {
    setTransitionStatus(void 0);
  }
  useIsoLayoutEffect(() => {
    if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
      const frame = AnimationFrame.request(() => {
        setTransitionStatus("ending");
      });
      return () => {
        AnimationFrame.cancel(frame);
      };
    }
    return void 0;
  }, [open, mounted, transitionStatus, deferEndingState]);
  useIsoLayoutEffect(() => {
    if (!open || enableIdleState) {
      return void 0;
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus(void 0);
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open]);
  useIsoLayoutEffect(() => {
    if (!open || !enableIdleState) {
      return void 0;
    }
    if (open && mounted && transitionStatus !== "idle") {
      setTransitionStatus("starting");
    }
    const frame = AnimationFrame.request(() => {
      setTransitionStatus("idle");
    });
    return () => {
      AnimationFrame.cancel(frame);
    };
  }, [enableIdleState, open, mounted, transitionStatus]);
  return {
    mounted,
    setMounted,
    transitionStatus
  };
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/root/useCollapsibleRoot.js
function useCollapsibleRoot(parameters) {
  const {
    open: openParam,
    defaultOpen,
    onOpenChange,
    disabled: disabled3
  } = parameters;
  const isControlled = openParam !== void 0;
  const [open, setOpen] = useControlled({
    controlled: openParam,
    default: defaultOpen,
    name: "Collapsible",
    state: "open"
  });
  const {
    mounted,
    setMounted,
    transitionStatus
  } = useTransitionStatus2(open, true, true);
  const [visible, setVisible] = React82.useState(open);
  const [{
    height,
    width
  }, setDimensions] = React82.useState({
    height: void 0,
    width: void 0
  });
  const defaultPanelId = useBaseUiId2();
  const [panelIdState, setPanelIdState] = React82.useState();
  const panelId = panelIdState ?? defaultPanelId;
  const [hiddenUntilFound, setHiddenUntilFound] = React82.useState(false);
  const [keepMounted, setKeepMounted] = React82.useState(false);
  const abortControllerRef = React82.useRef(null);
  const animationTypeRef = React82.useRef(null);
  const transitionDimensionRef = React82.useRef(null);
  const panelRef = React82.useRef(null);
  const runOnceAnimationsFinish = useAnimationsFinished2(panelRef, false);
  const handleTrigger = useStableCallback((event) => {
    const nextOpen = !open;
    const eventDetails = createChangeEventDetails2(reason_parts_exports2.triggerPress, event.nativeEvent);
    onOpenChange(nextOpen, eventDetails);
    if (eventDetails.isCanceled) {
      return;
    }
    const panel = panelRef.current;
    if (animationTypeRef.current === "css-animation" && panel != null) {
      panel.style.removeProperty("animation-name");
    }
    if (!hiddenUntilFound && !keepMounted) {
      if (animationTypeRef.current != null && animationTypeRef.current !== "css-animation") {
        if (!mounted && nextOpen) {
          setMounted(true);
        }
      }
      if (animationTypeRef.current === "css-animation") {
        if (!visible && nextOpen) {
          setVisible(true);
        }
        if (!mounted && nextOpen) {
          setMounted(true);
        }
      }
    }
    setOpen(nextOpen);
    if (animationTypeRef.current === "none" && mounted && !nextOpen) {
      setMounted(false);
    }
  });
  useIsoLayoutEffect(() => {
    if (isControlled && animationTypeRef.current === "none" && !open) {
      setMounted(false);
    }
  }, [isControlled, open, openParam, setMounted]);
  return React82.useMemo(() => ({
    abortControllerRef,
    animationTypeRef,
    disabled: disabled3,
    handleTrigger,
    height,
    mounted,
    open,
    panelId,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setHiddenUntilFound,
    setKeepMounted,
    setMounted,
    setOpen,
    setPanelIdState,
    setVisible,
    transitionDimensionRef,
    transitionStatus,
    visible,
    width
  }), [abortControllerRef, animationTypeRef, disabled3, handleTrigger, height, mounted, open, panelId, panelRef, runOnceAnimationsFinish, setDimensions, setHiddenUntilFound, setKeepMounted, setMounted, setOpen, setVisible, transitionDimensionRef, transitionStatus, visible, width]);
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/root/CollapsibleRootContext.js
var React83 = __toESM(require_react(), 1);
var CollapsibleRootContext = /* @__PURE__ */ React83.createContext(void 0);
if (true) CollapsibleRootContext.displayName = "CollapsibleRootContext";
function useCollapsibleRootContext() {
  const context = React83.useContext(CollapsibleRootContext);
  if (context === void 0) {
    throw new Error(true ? "Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>." : formatErrorMessage_default(15));
  }
  return context;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanelDataAttributes.js
var CollapsiblePanelDataAttributes = (function(CollapsiblePanelDataAttributes2) {
  CollapsiblePanelDataAttributes2["open"] = "data-open";
  CollapsiblePanelDataAttributes2["closed"] = "data-closed";
  CollapsiblePanelDataAttributes2[CollapsiblePanelDataAttributes2["startingStyle"] = TransitionStatusDataAttributes2.startingStyle] = "startingStyle";
  CollapsiblePanelDataAttributes2[CollapsiblePanelDataAttributes2["endingStyle"] = TransitionStatusDataAttributes2.endingStyle] = "endingStyle";
  return CollapsiblePanelDataAttributes2;
})({});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/trigger/CollapsibleTriggerDataAttributes.js
var CollapsibleTriggerDataAttributes = /* @__PURE__ */ (function(CollapsibleTriggerDataAttributes2) {
  CollapsibleTriggerDataAttributes2["panelOpen"] = "data-panel-open";
  return CollapsibleTriggerDataAttributes2;
})({});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/collapsibleOpenStateMapping.js
var PANEL_OPEN_HOOK = {
  [CollapsiblePanelDataAttributes.open]: ""
};
var PANEL_CLOSED_HOOK = {
  [CollapsiblePanelDataAttributes.closed]: ""
};
var triggerOpenStateMapping2 = {
  open(value) {
    if (value) {
      return {
        [CollapsibleTriggerDataAttributes.panelOpen]: ""
      };
    }
    return null;
  }
};
var collapsibleOpenStateMapping = {
  open(value) {
    if (value) {
      return PANEL_OPEN_HOOK;
    }
    return PANEL_CLOSED_HOOK;
  }
};

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/use-button/useButton.js
var React86 = __toESM(require_react(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/composite/root/CompositeRootContext.js
var React84 = __toESM(require_react(), 1);
var CompositeRootContext2 = /* @__PURE__ */ React84.createContext(void 0);
if (true) CompositeRootContext2.displayName = "CompositeRootContext";
function useCompositeRootContext2(optional = false) {
  const context = React84.useContext(CompositeRootContext2);
  if (context === void 0 && !optional) {
    throw new Error(true ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage_default(16));
  }
  return context;
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js
var React85 = __toESM(require_react(), 1);
function useFocusableWhenDisabled2(parameters) {
  const {
    focusableWhenDisabled,
    disabled: disabled3,
    composite = false,
    tabIndex: tabIndexProp = 0,
    isNativeButton
  } = parameters;
  const isFocusableComposite = composite && focusableWhenDisabled !== false;
  const isNonFocusableComposite = composite && focusableWhenDisabled === false;
  const props = React85.useMemo(() => {
    const additionalProps = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(event) {
        if (disabled3 && focusableWhenDisabled && event.key !== "Tab") {
          event.preventDefault();
        }
      }
    };
    if (!composite) {
      additionalProps.tabIndex = tabIndexProp;
      if (!isNativeButton && disabled3) {
        additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
      }
    }
    if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled3) {
      additionalProps["aria-disabled"] = disabled3;
    }
    if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
      additionalProps.disabled = disabled3;
    }
    return additionalProps;
  }, [composite, disabled3, focusableWhenDisabled, isFocusableComposite, isNonFocusableComposite, isNativeButton, tabIndexProp]);
  return {
    props
  };
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/use-button/useButton.js
function useButton2(parameters = {}) {
  const {
    disabled: disabled3 = false,
    focusableWhenDisabled,
    tabIndex = 0,
    native: isNativeButton = true,
    composite: compositeProp
  } = parameters;
  const elementRef = React86.useRef(null);
  const compositeRootContext = useCompositeRootContext2(true);
  const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
  const {
    props: focusableWhenDisabledProps
  } = useFocusableWhenDisabled2({
    focusableWhenDisabled,
    disabled: disabled3,
    composite: isCompositeItem,
    tabIndex,
    isNativeButton
  });
  if (true) {
    React86.useEffect(() => {
      if (!elementRef.current) {
        return;
      }
      const isButtonTag = isButtonElement2(elementRef.current);
      if (isNativeButton) {
        if (!isButtonTag) {
          const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
          const message2 = "A component that acts as a button expected a native <button> because the `nativeButton` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the `render` prop, or set `nativeButton` to `false`.";
          error(`${message2}${ownerStackMessage}`);
        }
      } else if (isButtonTag) {
        const ownerStackMessage = SafeReact.captureOwnerStack?.() || "";
        const message2 = "A component that acts as a button expected a non-<button> because the `nativeButton` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as `role` or `aria-disabled`). Use a non-<button> in the `render` prop, or set `nativeButton` to `true`.";
        error(`${message2}${ownerStackMessage}`);
      }
    }, [isNativeButton]);
  }
  const updateDisabled = React86.useCallback(() => {
    const element = elementRef.current;
    if (!isButtonElement2(element)) {
      return;
    }
    if (isCompositeItem && disabled3 && focusableWhenDisabledProps.disabled === void 0 && element.disabled) {
      element.disabled = false;
    }
  }, [disabled3, focusableWhenDisabledProps.disabled, isCompositeItem]);
  useIsoLayoutEffect(updateDisabled, [updateDisabled]);
  const getButtonProps = React86.useCallback((externalProps = {}) => {
    const {
      onClick: externalOnClick,
      onMouseDown: externalOnMouseDown,
      onKeyUp: externalOnKeyUp,
      onKeyDown: externalOnKeyDown,
      onPointerDown: externalOnPointerDown,
      ...otherExternalProps
    } = externalProps;
    const type = isNativeButton ? "button" : void 0;
    return mergeProps4({
      type,
      onClick(event) {
        if (disabled3) {
          event.preventDefault();
          return;
        }
        externalOnClick?.(event);
      },
      onMouseDown(event) {
        if (!disabled3) {
          externalOnMouseDown?.(event);
        }
      },
      onKeyDown(event) {
        if (disabled3) {
          return;
        }
        makeEventPreventable3(event);
        externalOnKeyDown?.(event);
        if (event.baseUIHandlerPrevented) {
          return;
        }
        const isCurrentTarget = event.target === event.currentTarget;
        const currentTarget = event.currentTarget;
        const isButton = isButtonElement2(currentTarget);
        const isLink = !isNativeButton && isValidLinkElement2(currentTarget);
        const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
        const isEnterKey = event.key === "Enter";
        const isSpaceKey = event.key === " ";
        const role = currentTarget.getAttribute("role");
        const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
        if (isCurrentTarget && isCompositeItem && isSpaceKey) {
          if (event.defaultPrevented && isTextNavigationRole) {
            return;
          }
          event.preventDefault();
          if (isLink || isNativeButton && isButton) {
            currentTarget.click();
            event.preventBaseUIHandler();
          } else if (shouldClick) {
            externalOnClick?.(event);
            event.preventBaseUIHandler();
          }
          return;
        }
        if (shouldClick) {
          if (!isNativeButton && (isSpaceKey || isEnterKey)) {
            event.preventDefault();
          }
          if (!isNativeButton && isEnterKey) {
            externalOnClick?.(event);
          }
        }
      },
      onKeyUp(event) {
        if (disabled3) {
          return;
        }
        makeEventPreventable3(event);
        externalOnKeyUp?.(event);
        if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement2(event.currentTarget) && event.key === " ") {
          event.preventDefault();
          return;
        }
        if (event.baseUIHandlerPrevented) {
          return;
        }
        if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") {
          externalOnClick?.(event);
        }
      },
      onPointerDown(event) {
        if (disabled3) {
          event.preventDefault();
          return;
        }
        externalOnPointerDown?.(event);
      }
    }, !isNativeButton ? {
      role: "button"
    } : void 0, focusableWhenDisabledProps, otherExternalProps);
  }, [disabled3, focusableWhenDisabledProps, isCompositeItem, isNativeButton]);
  const buttonRef = useStableCallback((element) => {
    elementRef.current = element;
    updateDisabled();
  });
  return {
    getButtonProps,
    buttonRef
  };
}
function isButtonElement2(elem) {
  return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement2(elem) {
  return Boolean(elem?.tagName === "A" && elem?.href);
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/panel/useCollapsiblePanel.js
var React87 = __toESM(require_react(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/accordion/root/AccordionRootDataAttributes.js
var AccordionRootDataAttributes = /* @__PURE__ */ (function(AccordionRootDataAttributes2) {
  AccordionRootDataAttributes2["disabled"] = "data-disabled";
  AccordionRootDataAttributes2["orientation"] = "data-orientation";
  return AccordionRootDataAttributes2;
})({});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/panel/useCollapsiblePanel.js
function useCollapsiblePanel(parameters) {
  const {
    abortControllerRef,
    animationTypeRef,
    externalRef,
    height,
    hiddenUntilFound,
    keepMounted,
    id: idParam,
    mounted,
    onOpenChange,
    open,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setMounted,
    setOpen,
    setVisible,
    transitionDimensionRef,
    visible,
    width
  } = parameters;
  const isBeforeMatchRef = React87.useRef(false);
  const latestAnimationNameRef = React87.useRef(null);
  const shouldCancelInitialOpenAnimationRef = React87.useRef(open);
  const shouldCancelInitialOpenTransitionRef = React87.useRef(open);
  const endingStyleFrame = useAnimationFrame();
  const hidden = React87.useMemo(() => {
    if (animationTypeRef.current === "css-animation") {
      return !visible;
    }
    return !open && !mounted;
  }, [open, mounted, visible, animationTypeRef]);
  const handlePanelRef = useStableCallback((element) => {
    if (!element) {
      return void 0;
    }
    if (animationTypeRef.current == null || transitionDimensionRef.current == null) {
      const panelStyles = getComputedStyle(element);
      const hasAnimation = panelStyles.animationName !== "none" && panelStyles.animationName !== "";
      const hasTransition = panelStyles.transitionDuration !== "0s" && panelStyles.transitionDuration !== "";
      if (hasAnimation && hasTransition) {
        if (true) {
          warn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used.");
        }
      } else if (panelStyles.animationName === "none" && panelStyles.transitionDuration !== "0s") {
        animationTypeRef.current = "css-transition";
      } else if (panelStyles.animationName !== "none" && panelStyles.transitionDuration === "0s") {
        animationTypeRef.current = "css-animation";
      } else {
        animationTypeRef.current = "none";
      }
      if (element.getAttribute(AccordionRootDataAttributes.orientation) === "horizontal" || panelStyles.transitionProperty.indexOf("width") > -1) {
        transitionDimensionRef.current = "width";
      } else {
        transitionDimensionRef.current = "height";
      }
    }
    if (animationTypeRef.current !== "css-transition") {
      return void 0;
    }
    if (height === void 0 || width === void 0) {
      setDimensions({
        height: element.scrollHeight,
        width: element.scrollWidth
      });
      if (shouldCancelInitialOpenTransitionRef.current) {
        element.style.setProperty("transition-duration", "0s");
      }
    }
    let frame = -1;
    let nextFrame = -1;
    frame = AnimationFrame.request(() => {
      shouldCancelInitialOpenTransitionRef.current = false;
      nextFrame = AnimationFrame.request(() => {
        setTimeout(() => {
          element.style.removeProperty("transition-duration");
        });
      });
    });
    return () => {
      AnimationFrame.cancel(frame);
      AnimationFrame.cancel(nextFrame);
    };
  });
  const mergedPanelRef = useMergedRefs(externalRef, panelRef, handlePanelRef);
  useIsoLayoutEffect(() => {
    if (animationTypeRef.current !== "css-transition") {
      return void 0;
    }
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    let resizeFrame = -1;
    if (abortControllerRef.current != null) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    if (open) {
      const originalLayoutStyles = {
        "justify-content": panel.style.justifyContent,
        "align-items": panel.style.alignItems,
        "align-content": panel.style.alignContent,
        "justify-items": panel.style.justifyItems
      };
      Object.keys(originalLayoutStyles).forEach((key) => {
        panel.style.setProperty(key, "initial", "important");
      });
      if (!shouldCancelInitialOpenTransitionRef.current && !keepMounted) {
        panel.setAttribute(CollapsiblePanelDataAttributes.startingStyle, "");
      }
      setDimensions({
        height: panel.scrollHeight,
        width: panel.scrollWidth
      });
      resizeFrame = AnimationFrame.request(() => {
        Object.entries(originalLayoutStyles).forEach(([key, value]) => {
          if (value === "") {
            panel.style.removeProperty(key);
          } else {
            panel.style.setProperty(key, value);
          }
        });
      });
    } else {
      if (panel.scrollHeight === 0 && panel.scrollWidth === 0) {
        return void 0;
      }
      setDimensions({
        height: panel.scrollHeight,
        width: panel.scrollWidth
      });
      const abortController = new AbortController();
      abortControllerRef.current = abortController;
      const signal = abortController.signal;
      let attributeObserver = null;
      const endingStyleAttribute = CollapsiblePanelDataAttributes.endingStyle;
      attributeObserver = new MutationObserver((mutationList) => {
        const hasEndingStyle = mutationList.some((mutation) => mutation.type === "attributes" && mutation.attributeName === endingStyleAttribute);
        if (hasEndingStyle) {
          attributeObserver?.disconnect();
          attributeObserver = null;
          runOnceAnimationsFinish(() => {
            setDimensions({
              height: 0,
              width: 0
            });
            panel.style.removeProperty("content-visibility");
            setMounted(false);
            if (abortControllerRef.current === abortController) {
              abortControllerRef.current = null;
            }
          }, signal);
        }
      });
      attributeObserver.observe(panel, {
        attributes: true,
        attributeFilter: [endingStyleAttribute]
      });
      return () => {
        attributeObserver?.disconnect();
        endingStyleFrame.cancel();
        if (abortControllerRef.current === abortController) {
          abortController.abort();
          abortControllerRef.current = null;
        }
      };
    }
    return () => {
      AnimationFrame.cancel(resizeFrame);
    };
  }, [abortControllerRef, animationTypeRef, endingStyleFrame, hiddenUntilFound, keepMounted, mounted, open, panelRef, runOnceAnimationsFinish, setDimensions, setMounted]);
  useIsoLayoutEffect(() => {
    if (animationTypeRef.current !== "css-animation") {
      return;
    }
    const panel = panelRef.current;
    if (!panel) {
      return;
    }
    latestAnimationNameRef.current = panel.style.animationName || latestAnimationNameRef.current;
    panel.style.setProperty("animation-name", "none");
    setDimensions({
      height: panel.scrollHeight,
      width: panel.scrollWidth
    });
    if (!shouldCancelInitialOpenAnimationRef.current && !isBeforeMatchRef.current) {
      panel.style.removeProperty("animation-name");
    }
    if (open) {
      if (abortControllerRef.current != null) {
        abortControllerRef.current.abort();
        abortControllerRef.current = null;
      }
      setMounted(true);
      setVisible(true);
    } else {
      abortControllerRef.current = new AbortController();
      runOnceAnimationsFinish(() => {
        setMounted(false);
        setVisible(false);
        abortControllerRef.current = null;
      }, abortControllerRef.current.signal);
    }
  }, [abortControllerRef, animationTypeRef, open, panelRef, runOnceAnimationsFinish, setDimensions, setMounted, setVisible, visible]);
  useOnMount(() => {
    const frame = AnimationFrame.request(() => {
      shouldCancelInitialOpenAnimationRef.current = false;
    });
    return () => AnimationFrame.cancel(frame);
  });
  useIsoLayoutEffect(() => {
    if (!hiddenUntilFound) {
      return void 0;
    }
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    let frame = -1;
    let nextFrame = -1;
    if (open && isBeforeMatchRef.current) {
      panel.style.transitionDuration = "0s";
      setDimensions({
        height: panel.scrollHeight,
        width: panel.scrollWidth
      });
      frame = AnimationFrame.request(() => {
        isBeforeMatchRef.current = false;
        nextFrame = AnimationFrame.request(() => {
          setTimeout(() => {
            panel.style.removeProperty("transition-duration");
          });
        });
      });
    }
    return () => {
      AnimationFrame.cancel(frame);
      AnimationFrame.cancel(nextFrame);
    };
  }, [hiddenUntilFound, open, panelRef, setDimensions]);
  useIsoLayoutEffect(() => {
    const panel = panelRef.current;
    if (panel && hiddenUntilFound && hidden) {
      panel.setAttribute("hidden", "until-found");
      if (animationTypeRef.current === "css-transition") {
        panel.setAttribute(CollapsiblePanelDataAttributes.startingStyle, "");
      }
    }
  }, [hiddenUntilFound, hidden, animationTypeRef, panelRef]);
  React87.useEffect(function registerBeforeMatchListener() {
    const panel = panelRef.current;
    if (!panel) {
      return void 0;
    }
    function handleBeforeMatch(event) {
      isBeforeMatchRef.current = true;
      setOpen(true);
      onOpenChange(true, createChangeEventDetails2(reason_parts_exports2.none, event));
    }
    return addEventListener(panel, "beforematch", handleBeforeMatch);
  }, [onOpenChange, panelRef, setOpen]);
  return React87.useMemo(() => ({
    props: {
      hidden,
      id: idParam,
      ref: mergedPanelRef
    }
  }), [hidden, idParam, mergedPanelRef]);
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js
var React88 = __toESM(require_react(), 1);
function useOpenChangeComplete2(parameters) {
  const {
    enabled = true,
    open,
    ref,
    onComplete: onCompleteParam
  } = parameters;
  const onComplete = useStableCallback(onCompleteParam);
  const runOnceAnimationsFinish = useAnimationsFinished2(ref, open, false);
  React88.useEffect(() => {
    if (!enabled) {
      return void 0;
    }
    const abortController = new AbortController();
    runOnceAnimationsFinish(onComplete, abortController.signal);
    return () => {
      abortController.abort();
    };
  }, [enabled, open, onComplete, runOnceAnimationsFinish]);
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/index.parts.js
var index_parts_exports3 = {};
__export(index_parts_exports3, {
  Panel: () => CollapsiblePanel,
  Root: () => CollapsibleRoot,
  Trigger: () => CollapsibleTrigger
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/root/CollapsibleRoot.js
var React89 = __toESM(require_react(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/root/stateAttributesMapping.js
var collapsibleStateAttributesMapping = {
  ...collapsibleOpenStateMapping,
  ...transitionStatusMapping2
};

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/root/CollapsibleRoot.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var CollapsibleRoot = /* @__PURE__ */ React89.forwardRef(function CollapsibleRoot2(componentProps, forwardedRef) {
  const {
    render: render4,
    className,
    defaultOpen = false,
    disabled: disabled3 = false,
    onOpenChange: onOpenChangeProp,
    open,
    style,
    ...elementProps
  } = componentProps;
  const onOpenChange = useStableCallback(onOpenChangeProp);
  const collapsible = useCollapsibleRoot({
    open,
    defaultOpen,
    onOpenChange,
    disabled: disabled3
  });
  const state = React89.useMemo(() => ({
    open: collapsible.open,
    disabled: collapsible.disabled,
    transitionStatus: collapsible.transitionStatus
  }), [collapsible.open, collapsible.disabled, collapsible.transitionStatus]);
  const contextValue = React89.useMemo(() => ({
    ...collapsible,
    onOpenChange,
    state
  }), [collapsible, onOpenChange, state]);
  const element = useRenderElement3("div", componentProps, {
    state,
    ref: forwardedRef,
    props: elementProps,
    stateAttributesMapping: collapsibleStateAttributesMapping
  });
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(CollapsibleRootContext.Provider, {
    value: contextValue,
    children: element
  });
});
if (true) CollapsibleRoot.displayName = "CollapsibleRoot";

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/trigger/CollapsibleTrigger.js
var React90 = __toESM(require_react(), 1);
var stateAttributesMapping6 = {
  ...triggerOpenStateMapping2,
  ...transitionStatusMapping2
};
var CollapsibleTrigger = /* @__PURE__ */ React90.forwardRef(function CollapsibleTrigger2(componentProps, forwardedRef) {
  const {
    panelId,
    open,
    handleTrigger,
    state,
    disabled: contextDisabled
  } = useCollapsibleRootContext();
  const {
    className,
    disabled: disabled3 = contextDisabled,
    id,
    render: render4,
    nativeButton = true,
    style,
    ...elementProps
  } = componentProps;
  const {
    getButtonProps,
    buttonRef
  } = useButton2({
    disabled: disabled3,
    focusableWhenDisabled: true,
    native: nativeButton
  });
  const props = React90.useMemo(() => ({
    "aria-controls": open ? panelId : void 0,
    "aria-expanded": open,
    onClick: handleTrigger
  }), [panelId, open, handleTrigger]);
  const element = useRenderElement3("button", componentProps, {
    state,
    ref: [forwardedRef, buttonRef],
    props: [props, elementProps, getButtonProps],
    stateAttributesMapping: stateAttributesMapping6
  });
  return element;
});
if (true) CollapsibleTrigger.displayName = "CollapsibleTrigger";

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanel.js
var React91 = __toESM(require_react(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanelCssVars.js
var CollapsiblePanelCssVars = /* @__PURE__ */ (function(CollapsiblePanelCssVars2) {
  CollapsiblePanelCssVars2["collapsiblePanelHeight"] = "--collapsible-panel-height";
  CollapsiblePanelCssVars2["collapsiblePanelWidth"] = "--collapsible-panel-width";
  return CollapsiblePanelCssVars2;
})({});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/collapsible/panel/CollapsiblePanel.js
var CollapsiblePanel = /* @__PURE__ */ React91.forwardRef(function CollapsiblePanel2(componentProps, forwardedRef) {
  const {
    className,
    hiddenUntilFound: hiddenUntilFoundProp,
    keepMounted: keepMountedProp,
    render: render4,
    id: idProp,
    style,
    ...elementProps
  } = componentProps;
  if (true) {
    useIsoLayoutEffect(() => {
      if (hiddenUntilFoundProp && keepMountedProp === false) {
        warn("The `keepMounted={false}` prop on a Collapsible will be ignored when using `hiddenUntilFound` since it requires the Panel to remain mounted even when closed.");
      }
    }, [hiddenUntilFoundProp, keepMountedProp]);
  }
  const {
    abortControllerRef,
    animationTypeRef,
    height,
    mounted,
    onOpenChange,
    open,
    panelId,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setHiddenUntilFound,
    setKeepMounted,
    setMounted,
    setPanelIdState,
    setOpen,
    setVisible,
    state,
    transitionDimensionRef,
    visible,
    width,
    transitionStatus
  } = useCollapsibleRootContext();
  const hiddenUntilFound = hiddenUntilFoundProp ?? false;
  const keepMounted = keepMountedProp ?? false;
  useIsoLayoutEffect(() => {
    if (idProp) {
      setPanelIdState(idProp);
      return () => {
        setPanelIdState(void 0);
      };
    }
    return void 0;
  }, [idProp, setPanelIdState]);
  useIsoLayoutEffect(() => {
    setHiddenUntilFound(hiddenUntilFound);
  }, [setHiddenUntilFound, hiddenUntilFound]);
  useIsoLayoutEffect(() => {
    setKeepMounted(keepMounted);
  }, [setKeepMounted, keepMounted]);
  const {
    props
  } = useCollapsiblePanel({
    abortControllerRef,
    animationTypeRef,
    externalRef: forwardedRef,
    height,
    hiddenUntilFound,
    id: panelId,
    keepMounted,
    mounted,
    onOpenChange,
    open,
    panelRef,
    runOnceAnimationsFinish,
    setDimensions,
    setMounted,
    setOpen,
    setVisible,
    transitionDimensionRef,
    visible,
    width
  });
  useOpenChangeComplete2({
    open: open && transitionStatus === "idle",
    ref: panelRef,
    onComplete() {
      if (!open) {
        return;
      }
      setDimensions({
        height: void 0,
        width: void 0
      });
    }
  });
  const panelState = React91.useMemo(() => ({
    ...state,
    transitionStatus
  }), [state, transitionStatus]);
  const element = useRenderElement3("div", componentProps, {
    state: panelState,
    ref: [forwardedRef, panelRef],
    props: [props, {
      style: {
        [CollapsiblePanelCssVars.collapsiblePanelHeight]: height === void 0 ? "auto" : `${height}px`,
        [CollapsiblePanelCssVars.collapsiblePanelWidth]: width === void 0 ? "auto" : `${width}px`
      }
    }, elementProps],
    stateAttributesMapping: collapsibleStateAttributesMapping
  });
  const shouldRender = keepMounted || hiddenUntilFound || mounted;
  if (!shouldRender) {
    return null;
  }
  return element;
});
if (true) CollapsiblePanel.displayName = "CollapsiblePanel";

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/node_modules/@base-ui/react/esm/use-render/useRender.js
function useRender3(params) {
  return useRenderElement3(params.defaultTagName ?? "div", params, params);
}

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/text/text.mjs
var import_element48 = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE5 = "data-wp-hash";
function getRuntime5() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument5(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash5(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE5}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE5) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle5(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime5();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash5(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE5, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument5(targetDocument) {
  const runtime = getRuntime5();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle5(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle5(hash, css) {
  const runtime = getRuntime5();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle5(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle5("0c8601dd83", '@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._83ed8a8da5dd50ea__text{margin:0}._14437cfb77831647__heading-2xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-2xl,32px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-2xl,32px);--_gcd-p-line-height:var(--wpds-typography-line-height-2xl,40px);font-size:var(--wpds-typography-font-size-2xl,32px);line-height:var(--wpds-typography-line-height-2xl,40px)}._14437cfb77831647__heading-2xl,._3c78b7fa9b4072dd__heading-xl{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499)}._3c78b7fa9b4072dd__heading-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-md,24px)}.aa58f227716bcde2__heading-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-lg,15px)}.aa58f227716bcde2__heading-lg,.fc4da56d8dfe52c4__heading-md{font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-sm,20px)}.fc4da56d8dfe52c4__heading-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px)}.a9b78c7c82e8dff7__heading-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-xs,11px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-medium,499);--_gcd-p-font-size:var(--wpds-typography-font-size-xs,11px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-family:var(--wpds-typography-font-family-heading,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-size:var(--wpds-typography-font-size-xs,11px);font-weight:var(--wpds-typography-font-weight-medium,499);line-height:var(--wpds-typography-line-height-xs,16px);text-transform:uppercase}._305ff559e52180d5__body-xl{--_gcd-heading-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-xl,20px);--_gcd-p-line-height:var(--wpds-typography-line-height-xl,32px);font-size:var(--wpds-typography-font-size-xl,20px);line-height:var(--wpds-typography-line-height-xl,32px)}._305ff559e52180d5__body-xl,.ca1aa3fc2029e958__body-lg{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}.ca1aa3fc2029e958__body-lg{--_gcd-heading-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-lg,15px);--_gcd-p-line-height:var(--wpds-typography-line-height-md,24px);font-size:var(--wpds-typography-font-size-lg,15px);line-height:var(--wpds-typography-line-height-md,24px)}._131101940be12424__body-md{--_gcd-heading-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-md,13px);--_gcd-p-line-height:var(--wpds-typography-line-height-sm,20px);font-size:var(--wpds-typography-font-size-md,13px);line-height:var(--wpds-typography-line-height-sm,20px)}._0e8d87a42c1f75fa__body-sm,._131101940be12424__body-md{font-family:var(--wpds-typography-font-family-body,-apple-system,system-ui,"Segoe UI","Roboto","Oxygen-Sans","Ubuntu","Cantarell","Helvetica Neue",sans-serif);font-weight:var(--wpds-typography-font-weight-regular,400)}._0e8d87a42c1f75fa__body-sm{--_gcd-heading-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-heading-font-weight:var(--wpds-typography-font-weight-regular,400);--_gcd-p-font-size:var(--wpds-typography-font-size-sm,12px);--_gcd-p-line-height:var(--wpds-typography-line-height-xs,16px);font-size:var(--wpds-typography-font-size-sm,12px);line-height:var(--wpds-typography-line-height-xs,16px)}}');
}
var style_default26 = { "text": "_83ed8a8da5dd50ea__text", "heading-2xl": "_14437cfb77831647__heading-2xl", "heading-xl": "_3c78b7fa9b4072dd__heading-xl", "heading-lg": "aa58f227716bcde2__heading-lg", "heading-md": "fc4da56d8dfe52c4__heading-md", "heading-sm": "a9b78c7c82e8dff7__heading-sm", "body-xl": "_305ff559e52180d5__body-xl", "body-lg": "ca1aa3fc2029e958__body-lg", "body-md": "_131101940be12424__body-md", "body-sm": "_0e8d87a42c1f75fa__body-sm" };
if (typeof process === "undefined" || true) {
  registerStyle5("1fb29d3a3c", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}");
}
var global_css_defense_default5 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
var Text4 = (0, import_element48.forwardRef)(function Text23({ variant = "body-md", render: render4, className, ...props }, ref) {
  const element = useRender3({
    render: render4,
    defaultTagName: "span",
    ref,
    props: mergeProps4(props, {
      className: clsx_default(
        style_default26.text,
        global_css_defense_default5.heading,
        global_css_defense_default5.p,
        style_default26[variant],
        className
      )
    })
  });
  return element;
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/badge/badge.mjs
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var STYLE_HASH_ATTRIBUTE6 = "data-wp-hash";
function getRuntime6() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument6(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash6(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE6}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE6) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle6(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime6();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash6(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE6, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument6(targetDocument) {
  const runtime = getRuntime6();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle6(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle6(hash, css) {
  const runtime = getRuntime6();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle6(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle6("d6a685e1aa", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._96e6251aad1a6136__badge{border-radius:var(--wpds-border-radius-lg,8px);padding-block:var(--wpds-dimension-padding-xs,4px);padding-inline:var(--wpds-dimension-padding-sm,8px)}._99f7158cb520f750__is-high-intent{background-color:var(--wpds-color-bg-surface-error,#f6e6e3);color:var(--wpds-color-fg-content-error,#470000)}.c20ebef2365bc8b7__is-medium-intent{background-color:var(--wpds-color-bg-surface-warning,#fde6be);color:var(--wpds-color-fg-content-warning,#2e1900)}._365e1626c6202e52__is-low-intent{background-color:var(--wpds-color-bg-surface-caution,#fee995);color:var(--wpds-color-fg-content-caution,#281d00)}._33f8198127ddf4ef__is-stable-intent{background-color:var(--wpds-color-bg-surface-success,#c6f7cd);color:var(--wpds-color-fg-content-success,#002900)}._04c1aca8fc449412__is-informational-intent{background-color:var(--wpds-color-bg-surface-info,#deebfa);color:var(--wpds-color-fg-content-info,#001b4f)}._90726e69d495ec19__is-draft-intent{background-color:var(--wpds-color-bg-surface-neutral-weak,#f4f4f4);color:var(--wpds-color-fg-content-neutral,#1e1e1e)}._898f4a544993bd39__is-none-intent{background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:var(--wpds-border-width-xs,1px) solid var(--wpds-color-stroke-surface-neutral,#dbdbdb);color:var(--wpds-color-fg-content-neutral,#1e1e1e);padding-block:calc(var(--wpds-dimension-padding-xs, 4px) - var(--wpds-border-width-xs, 1px));padding-inline:calc(var(--wpds-dimension-padding-sm, 8px) - var(--wpds-border-width-xs, 1px))}}");
}
var style_default27 = { "badge": "_96e6251aad1a6136__badge", "is-high-intent": "_99f7158cb520f750__is-high-intent", "is-medium-intent": "c20ebef2365bc8b7__is-medium-intent", "is-low-intent": "_365e1626c6202e52__is-low-intent", "is-stable-intent": "_33f8198127ddf4ef__is-stable-intent", "is-informational-intent": "_04c1aca8fc449412__is-informational-intent", "is-draft-intent": "_90726e69d495ec19__is-draft-intent", "is-none-intent": "_898f4a544993bd39__is-none-intent" };
var Badge = (0, import_element49.forwardRef)(function Badge2({ intent = "none", className, ...props }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    Text4,
    {
      ref,
      className: clsx_default(
        style_default27.badge,
        style_default27[`is-${intent}-intent`],
        className
      ),
      ...props,
      variant: "body-sm"
    }
  );
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/icon/icon.mjs
var import_element50 = __toESM(require_element(), 1);
var import_primitives7 = __toESM(require_primitives(), 1);
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var Icon3 = (0, import_element50.forwardRef)(function Icon22({ icon, size: size4 = 24, ...restProps }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_primitives7.SVG,
    {
      ref,
      fill: "currentColor",
      ...icon.props,
      ...restProps,
      width: size4,
      height: size4
    }
  );
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/card/index.mjs
var card_exports2 = {};
__export(card_exports2, {
  Content: () => Content2,
  FullBleed: () => FullBleed2,
  Header: () => Header3,
  Root: () => Root5,
  Title: () => Title4
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/card/root.mjs
var import_element51 = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE7 = "data-wp-hash";
function getRuntime7() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument7(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash7(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE7}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE7) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle7(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime7();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash7(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE7, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument7(targetDocument) {
  const runtime = getRuntime7();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle7(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle7(hash, css) {
  const runtime = getRuntime7();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle7(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle7("e3ae230cea", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._336cd3e4e743482f__box-sizing{box-sizing:border-box;*,:after,:before{box-sizing:inherit}}}");
}
var resets_default7 = { "box-sizing": "_336cd3e4e743482f__box-sizing" };
if (typeof process === "undefined" || true) {
  registerStyle7("14f5e9ddeb", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}");
}
var style_default28 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Root5 = (0, import_element51.forwardRef)(function Card2({ render: render4, ...restProps }, ref) {
  const mergedClassName = clsx_default(style_default28.root, resets_default7["box-sizing"]);
  const element = useRender3({
    defaultTagName: "div",
    render: render4,
    ref,
    props: mergeProps4({ className: mergedClassName }, restProps)
  });
  return element;
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/card/header.mjs
var import_element52 = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE8 = "data-wp-hash";
function getRuntime8() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument8(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash8(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE8}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE8) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle8(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime8();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash8(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE8, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument8(targetDocument) {
  const runtime = getRuntime8();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle8(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle8(hash, css) {
  const runtime = getRuntime8();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle8(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle8("14f5e9ddeb", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}");
}
var style_default29 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Header3 = (0, import_element52.forwardRef)(
  function CardHeader2({ render: render4, ...props }, ref) {
    const element = useRender3({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps4({ className: style_default29.header }, props)
    });
    return element;
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/card/content.mjs
var import_element53 = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE9 = "data-wp-hash";
function getRuntime9() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument9(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash9(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE9}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE9) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle9(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime9();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash9(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE9, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument9(targetDocument) {
  const runtime = getRuntime9();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle9(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle9(hash, css) {
  const runtime = getRuntime9();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle9(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle9("14f5e9ddeb", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}");
}
var style_default30 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var Content2 = (0, import_element53.forwardRef)(
  function CardContent2({ render: render4, ...props }, ref) {
    const element = useRender3({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps4({ className: style_default30.content }, props)
    });
    return element;
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/card/full-bleed.mjs
var import_element54 = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE10 = "data-wp-hash";
function getRuntime10() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument10(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash10(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE10}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE10) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle10(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime10();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash10(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE10, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument10(targetDocument) {
  const runtime = getRuntime10();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle10(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle10(hash, css) {
  const runtime = getRuntime10();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle10(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle10("14f5e9ddeb", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._02872bf298eadc43__root{--wp-ui-card-padding:var(--wpds-dimension-padding-2xl,24px);--wp-ui-card-header-content-gap:var(--wpds-dimension-gap-xl,24px);--wp-ui-card-header-content-margin:calc(var(--wp-ui-card-header-content-gap) - var(--wp-ui-card-padding));background-color:var(--wpds-color-bg-surface-neutral-strong,#fff);border:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);border-radius:var(--wpds-border-radius-lg,8px);color:var(--wpds-color-fg-content-neutral,#1e1e1e);display:flex;flex-direction:column;overflow:clip}._5dffdaf2a6e669ac__content,.bbccc92e6ba5662d__header{padding:var(--wp-ui-card-padding);&:not(:first-child):not(:last-child){padding-block-end:0}}.bbccc92e6ba5662d__header+._5dffdaf2a6e669ac__content{margin-block-start:var(--wp-ui-card-header-content-margin);padding-block-start:0}.c1fa192587e1b4a6__fullbleed{margin-inline:calc(var(--wp-ui-card-padding)*-1);width:calc(100% + var(--wp-ui-card-padding)*2)}}");
}
var style_default31 = { "root": "_02872bf298eadc43__root", "header": "bbccc92e6ba5662d__header", "content": "_5dffdaf2a6e669ac__content", "fullbleed": "c1fa192587e1b4a6__fullbleed" };
var FullBleed2 = (0, import_element54.forwardRef)(
  function CardFullBleed2({ render: render4, ...props }, ref) {
    const element = useRender3({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps4(
        { className: style_default31.fullbleed },
        props
      )
    });
    return element;
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/card/title.mjs
var import_element55 = __toESM(require_element(), 1);
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_TAG2 = /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", {});
var Title4 = (0, import_element55.forwardRef)(
  function CardTitle2({ render: render4 = DEFAULT_TAG2, children, ...props }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      Text4,
      {
        ref,
        variant: "heading-lg",
        render: render4,
        ...props,
        children
      }
    );
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible/panel.mjs
var import_element56 = __toESM(require_element(), 1);
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var Panel = (0, import_element56.forwardRef)(
  function CollapsiblePanel3(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(index_parts_exports3.Panel, { ref: forwardedRef, ...props });
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible/root.mjs
var import_element57 = __toESM(require_element(), 1);
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var Root6 = (0, import_element57.forwardRef)(
  function CollapsibleRoot3(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(index_parts_exports3.Root, { ref: forwardedRef, ...props });
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible/trigger.mjs
var import_element58 = __toESM(require_element(), 1);
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var Trigger3 = (0, import_element58.forwardRef)(
  function CollapsibleTrigger3(props, forwardedRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(index_parts_exports3.Trigger, { ref: forwardedRef, ...props });
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible-card/index.mjs
var collapsible_card_exports = {};
__export(collapsible_card_exports, {
  Content: () => Content22,
  Header: () => Header22,
  HeaderDescription: () => HeaderDescription,
  Root: () => Root32
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible-card/root.mjs
var import_element59 = __toESM(require_element(), 1);
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var Root32 = (0, import_element59.forwardRef)(
  function CollapsibleCardRoot({ render: render4, ...restProps }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
      Root6,
      {
        ref,
        render: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(Root5, { render: render4 }),
        ...restProps
      }
    );
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible-card/header.mjs
var import_element61 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/chevron-down.mjs
var import_primitives8 = __toESM(require_primitives(), 1);
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var chevron_down_default = /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_primitives8.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(import_primitives8.Path, { d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/close-small.mjs
var import_primitives9 = __toESM(require_primitives(), 1);
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var close_small_default2 = /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_primitives9.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_primitives9.Path, { d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/envelope.mjs
var import_primitives10 = __toESM(require_primitives(), 1);
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var envelope_default = /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_primitives10.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_primitives10.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M3 7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm2-.5h14c.3 0 .5.2.5.5v1L12 13.5 4.5 7.9V7c0-.3.2-.5.5-.5Zm-.5 3.3V17c0 .3.2.5.5.5h14c.3 0 .5-.2.5-.5V9.8L12 15.4 4.5 9.8Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/error.mjs
var import_primitives11 = __toESM(require_primitives(), 1);
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var error_default2 = /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_primitives11.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(import_primitives11.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M12.218 5.377a.25.25 0 0 0-.436 0l-7.29 12.96a.25.25 0 0 0 .218.373h14.58a.25.25 0 0 0 .218-.372l-7.29-12.96Zm-1.743-.735c.669-1.19 2.381-1.19 3.05 0l7.29 12.96a1.75 1.75 0 0 1-1.525 2.608H4.71a1.75 1.75 0 0 1-1.525-2.608l7.29-12.96ZM12.75 17.46h-1.5v-1.5h1.5v1.5Zm-1.5-3h1.5v-5h-1.5v5Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/link.mjs
var import_primitives12 = __toESM(require_primitives(), 1);
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var link_default = /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_primitives12.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_primitives12.Path, { d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/mobile.mjs
var import_primitives13 = __toESM(require_primitives(), 1);
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var mobile_default = /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_primitives13.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_primitives13.Path, { d: "M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/pencil.mjs
var import_primitives14 = __toESM(require_primitives(), 1);
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var pencil_default = /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_primitives14.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_primitives14.Path, { d: "m19 7-3-3-8.5 8.5-1 4 4-1L19 7Zm-7 11.5H5V20h7v-1.5Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/seen.mjs
var import_primitives15 = __toESM(require_primitives(), 1);
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var seen_default = /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_primitives15.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(import_primitives15.Path, { d: "M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/icons/build-module/library/unseen.mjs
var import_primitives16 = __toESM(require_primitives(), 1);
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var unseen_default = /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_primitives16.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_primitives16.Path, { d: "M20.7 12.7s0-.1-.1-.2c0-.2-.2-.4-.4-.6-.3-.5-.9-1.2-1.6-1.8-.7-.6-1.5-1.3-2.6-1.8l-.6 1.4c.9.4 1.6 1 2.1 1.5.6.6 1.1 1.2 1.4 1.6.1.2.3.4.3.5v.1l.7-.3.7-.3Zm-5.2-9.3-1.8 4c-.5-.1-1.1-.2-1.7-.2-3 0-5.2 1.4-6.6 2.7-.7.7-1.2 1.3-1.6 1.8-.2.3-.3.5-.4.6 0 0 0 .1-.1.2s0 0 .7.3l.7.3V13c0-.1.2-.3.3-.5.3-.4.7-1 1.4-1.6 1.2-1.2 3-2.3 5.5-2.3H13v.3c-.4 0-.8-.1-1.1-.1-1.9 0-3.5 1.6-3.5 3.5s.6 2.3 1.6 2.9l-2 4.4.9.4 7.6-16.2-.9-.4Zm-3 12.6c1.7-.2 3-1.7 3-3.5s-.2-1.4-.6-1.9L12.4 16Z" }) });

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible-card/context.mjs
var import_element60 = __toESM(require_element(), 1);
var HeaderDescriptionIdContext = (0, import_element60.createContext)({
  setDescriptionId: () => {
  }
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible-card/header.mjs
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var STYLE_HASH_ATTRIBUTE11 = "data-wp-hash";
function getRuntime11() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument11(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash11(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE11}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE11) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle11(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime11();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash11(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE11, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument11(targetDocument) {
  const runtime = getRuntime11();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle11(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle11(hash, css) {
  const runtime = getRuntime11();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle11(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle11("f1b9bb6252", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._626190151275d6d3__heading-wrapper{--_gcd-heading-color:inherit;--_gcd-heading-font-size:inherit;--_gcd-heading-font-weight:inherit;--_gcd-heading-margin:0;font-family:inherit;line-height:inherit}.cab17c7a373cb60d__header-content{flex:1;min-width:0}.dd89d27c4f15912d__header-trigger-positioner{align-self:center;flex-shrink:0;max-height:0;overflow:visible}.bcfab5f2448bafef__header-trigger-wrapper{border-radius:var(--wpds-border-radius-sm,2px);display:flex;translate:0 -50%}._3106f8d2b0330faa__header-trigger{@media not (prefers-reduced-motion){transition:rotate .15s ease-out}}._5d2dfcb4085c6d0f__header[data-panel-open] ._3106f8d2b0330faa__header-trigger{rotate:180deg}._5d2dfcb4085c6d0f__header[data-disabled] ._3106f8d2b0330faa__header-trigger{color:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d)}.e34cf37ccd0d81e0__content{height:var(--collapsible-panel-height);margin-block-start:var(--wp-ui-card-header-content-margin);overflow:hidden;&._165c4572592944b2__overflowVisible{overflow:visible}&[hidden]:not([hidden=until-found]){display:none}&[data-ending-style],&[data-starting-style]{height:0}@media not (prefers-reduced-motion){transition:all .15s ease-out}}}@layer wp-ui-compositions{._41bfdbf7b6c087c2__content-inner{padding-block-start:0}._5d2dfcb4085c6d0f__header{align-items:stretch;display:flex;flex-direction:row;gap:var(--wpds-dimension-gap-sm,8px);outline:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}}}");
}
var style_default32 = { "heading-wrapper": "_626190151275d6d3__heading-wrapper", "header-content": "cab17c7a373cb60d__header-content", "header-trigger-positioner": "dd89d27c4f15912d__header-trigger-positioner", "header-trigger-wrapper": "bcfab5f2448bafef__header-trigger-wrapper", "header-trigger": "_3106f8d2b0330faa__header-trigger", "header": "_5d2dfcb4085c6d0f__header", "content": "e34cf37ccd0d81e0__content", "overflowVisible": "_165c4572592944b2__overflowVisible", "content-inner": "_41bfdbf7b6c087c2__content-inner" };
if (typeof process === "undefined" || true) {
  registerStyle11("1fb29d3a3c", "._6defc79820e382c6__button{box-sizing:var(--_gcd-button-box-sizing,border-box);font-family:var(--_gcd-button-font-family,inherit);font-size:var(--_gcd-button-font-size,inherit);font-weight:var(--_gcd-button-font-weight,inherit)}.d2cff2e5dea83bd1__input{box-sizing:var(--_gcd-input-box-sizing,border-box);font-family:var(--_gcd-input-font-family,inherit);font-size:var(--_gcd-input-font-size,inherit);font-weight:var(--_gcd-input-font-weight,inherit);margin:var(--_gcd-input-margin,0);&:is(textarea,[type=text],[type=password],[type=color],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){background-color:var(--_gcd-input-background-color,#0000);border:var(--_gcd-input-border,none);border-radius:var(--_gcd-input-border-radius,0);box-shadow:var(--_gcd-input-box-shadow,0 0 0 #0000);color:var(--_gcd-input-color,var(--wpds-color-fg-interactive-neutral,#1e1e1e));&:focus{border-color:var(--_gcd-input-border-color-focus,var(--wp-admin-theme-color));box-shadow:var(--_gcd-input-box-shadow-focus,none);outline:var(--_gcd-input-outline-focus,none)}&:disabled{background:var(--_gcd-input-background-disabled,#0000);border-color:var(--_gcd-input-border-color-disabled,#0000);box-shadow:var(--_gcd-input-box-shadow-disabled,none);color:var(--_gcd-input-color-disabled,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}&::placeholder{color:var(--_gcd-input-placeholder-color,var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d))}}&:is(textarea,[type=text],[type=password],[type=date],[type=datetime],[type=datetime-local],[type=email],[type=month],[type=number],[type=search],[type=tel],[type=time],[type=url],[type=week]){line-height:var(--_gcd-input-line-height,inherit);min-height:var(--_gcd-input-min-height,auto);padding:var(--_gcd-input-padding,0)}}._547d86373d02e108__textarea{box-sizing:var(--_gcd-textarea-box-sizing,border-box);overflow:var(--_gcd-textarea-overflow,auto);resize:var(--_gcd-textarea-resize,block)}._8c15fd0ed9f28ba4__div{outline:var(--_gcd-div-outline,0 solid #0000)}p._43cec3e1eec1066d__p{font-size:var(--_gcd-p-font-size,13px);line-height:var(--_gcd-p-line-height,1.5);margin:var(--_gcd-p-margin,0)}:is(h1,h2,h3,h4,h5,h6).e97669c6d9a38497__heading{color:var(--_gcd-heading-color,var(--wpds-color-fg-content-neutral,#1e1e1e));font-size:var(--_gcd-heading-font-size,inherit);font-weight:var(--_gcd-heading-font-weight,var(--wpds-typography-font-weight-medium,499));margin:var(--_gcd-heading-margin,0)}._2c0831b0499dbd6e__a,._2c0831b0499dbd6e__a:is(:hover,:focus,:active){border-radius:var(--_gcd-a-border-radius,0);box-shadow:var(--_gcd-a-box-shadow,none);color:var(--_gcd-a-color,inherit);outline:var(--_gcd-a-outline,0 solid #0000);transition:var(--_gcd-a-transition,none)}");
}
var global_css_defense_default6 = { "button": "_6defc79820e382c6__button", "input": "d2cff2e5dea83bd1__input", "textarea": "_547d86373d02e108__textarea", "div": "_8c15fd0ed9f28ba4__div", "p": "_43cec3e1eec1066d__p", "heading": "e97669c6d9a38497__heading", "a": "_2c0831b0499dbd6e__a" };
if (typeof process === "undefined" || true) {
  registerStyle11("2a5ab8f3a7", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-utilities{._08e8a2e44959f892__outset-ring--focus,._970d04df7376df67__outset-ring--focus-within-except-active,.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible,.cd83dfc2126a0846__outset-ring--focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active,.ecadb9e080e2dfa5__outset-ring--focus-parent-visible{@media not (prefers-reduced-motion){--_gcd-a-transition:outline 0.1s ease-out;transition:outline .1s ease-out}outline:0 solid #0000;outline-offset:1px}._08e8a2e44959f892__outset-ring--focus:focus,._970d04df7376df67__outset-ring--focus-within-except-active:focus-within:not(:has(:active)),.c5cb3ee4bddaa8e4__outset-ring--focus-within-visible:focus-within:has(:focus-visible),.cd83dfc2126a0846__outset-ring--focus-within:focus-within,.d0541bc9dd9dc7b6__outset-ring--focus-visible:focus-visible,.e25b2bdd7aa21721__outset-ring--focus-except-active:focus:not(:active),:focus-visible .ecadb9e080e2dfa5__outset-ring--focus-parent-visible{--_gcd-a-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));--_gcd-div-outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9));outline:var(--wpds-border-width-focus,var(--wp-admin-border-width-focus,2px)) solid var(--wpds-color-stroke-focus-brand,var(--wp-admin-theme-color,#3858e9))}}");
}
var focus_default3 = { "outset-ring--focus": "_08e8a2e44959f892__outset-ring--focus", "outset-ring--focus-except-active": "e25b2bdd7aa21721__outset-ring--focus-except-active", "outset-ring--focus-visible": "d0541bc9dd9dc7b6__outset-ring--focus-visible", "outset-ring--focus-within": "cd83dfc2126a0846__outset-ring--focus-within", "outset-ring--focus-within-except-active": "_970d04df7376df67__outset-ring--focus-within-except-active", "outset-ring--focus-within-visible": "c5cb3ee4bddaa8e4__outset-ring--focus-within-visible", "outset-ring--focus-parent-visible": "ecadb9e080e2dfa5__outset-ring--focus-parent-visible" };
var Header22 = (0, import_element61.forwardRef)(
  function CollapsibleCardHeader({ children, className, render: render4, ...restProps }, ref) {
    const [descriptionId, setDescriptionId] = (0, import_element61.useState)();
    const contextValue = (0, import_element61.useMemo)(
      () => ({ setDescriptionId }),
      [setDescriptionId]
    );
    return useRender3({
      defaultTagName: "div",
      render: render4,
      ref,
      props: mergeProps4(restProps, {
        className: clsx_default(
          global_css_defense_default6.heading,
          style_default32["heading-wrapper"],
          className
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(HeaderDescriptionIdContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
          Trigger3,
          {
            className: style_default32.header,
            render: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(Header3, {}),
            nativeButton: false,
            "aria-describedby": descriptionId,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime70.jsx)("div", { className: style_default32["header-content"], children }),
              /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
                "div",
                {
                  className: clsx_default(
                    style_default32["header-trigger-positioner"]
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
                    "div",
                    {
                      className: clsx_default(
                        style_default32["header-trigger-wrapper"],
                        global_css_defense_default6.div,
                        // While the interactive trigger element is the whole header,
                        // the focus ring will be displayed only on the icon to visually
                        // emulate it being the button.
                        focus_default3["outset-ring--focus-parent-visible"]
                      ),
                      children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
                        Icon3,
                        {
                          icon: chevron_down_default,
                          className: style_default32["header-trigger"]
                        }
                      )
                    }
                  )
                }
              )
            ]
          }
        ) })
      })
    });
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible-card/header-description.mjs
var import_element62 = __toESM(require_element(), 1);
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var HeaderDescription = (0, import_element62.forwardRef)(function CollapsibleCardHeaderDescription({ children, className, ...restProps }, ref) {
  const descriptionId = (0, import_element62.useId)();
  const { setDescriptionId } = (0, import_element62.useContext)(HeaderDescriptionIdContext);
  (0, import_element62.useEffect)(() => {
    setDescriptionId(descriptionId);
    return () => setDescriptionId(void 0);
  }, [descriptionId, setDescriptionId]);
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    "div",
    {
      ref,
      id: descriptionId,
      "aria-hidden": "true",
      className,
      ...restProps,
      children
    }
  );
});

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/collapsible-card/content.mjs
var import_element63 = __toESM(require_element(), 1);
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var STYLE_HASH_ATTRIBUTE12 = "data-wp-hash";
function getRuntime12() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument12(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash12(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE12}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE12) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle12(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime12();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash12(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE12, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument12(targetDocument) {
  const runtime = getRuntime12();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle12(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle12(hash, css) {
  const runtime = getRuntime12();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle12(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle12("f1b9bb6252", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._626190151275d6d3__heading-wrapper{--_gcd-heading-color:inherit;--_gcd-heading-font-size:inherit;--_gcd-heading-font-weight:inherit;--_gcd-heading-margin:0;font-family:inherit;line-height:inherit}.cab17c7a373cb60d__header-content{flex:1;min-width:0}.dd89d27c4f15912d__header-trigger-positioner{align-self:center;flex-shrink:0;max-height:0;overflow:visible}.bcfab5f2448bafef__header-trigger-wrapper{border-radius:var(--wpds-border-radius-sm,2px);display:flex;translate:0 -50%}._3106f8d2b0330faa__header-trigger{@media not (prefers-reduced-motion){transition:rotate .15s ease-out}}._5d2dfcb4085c6d0f__header[data-panel-open] ._3106f8d2b0330faa__header-trigger{rotate:180deg}._5d2dfcb4085c6d0f__header[data-disabled] ._3106f8d2b0330faa__header-trigger{color:var(--wpds-color-fg-interactive-neutral-disabled,#8d8d8d)}.e34cf37ccd0d81e0__content{height:var(--collapsible-panel-height);margin-block-start:var(--wp-ui-card-header-content-margin);overflow:hidden;&._165c4572592944b2__overflowVisible{overflow:visible}&[hidden]:not([hidden=until-found]){display:none}&[data-ending-style],&[data-starting-style]{height:0}@media not (prefers-reduced-motion){transition:all .15s ease-out}}}@layer wp-ui-compositions{._41bfdbf7b6c087c2__content-inner{padding-block-start:0}._5d2dfcb4085c6d0f__header{align-items:stretch;display:flex;flex-direction:row;gap:var(--wpds-dimension-gap-sm,8px);outline:none;&:not([data-disabled]){cursor:var(--wpds-cursor-control,pointer)}}}");
}
var style_default33 = { "heading-wrapper": "_626190151275d6d3__heading-wrapper", "header-content": "cab17c7a373cb60d__header-content", "header-trigger-positioner": "dd89d27c4f15912d__header-trigger-positioner", "header-trigger-wrapper": "bcfab5f2448bafef__header-trigger-wrapper", "header-trigger": "_3106f8d2b0330faa__header-trigger", "header": "_5d2dfcb4085c6d0f__header", "content": "e34cf37ccd0d81e0__content", "overflowVisible": "_165c4572592944b2__overflowVisible", "content-inner": "_41bfdbf7b6c087c2__content-inner" };
var Content22 = (0, import_element63.forwardRef)(
  function CollapsibleCardContent({ className, render: render4, children, hiddenUntilFound = true, ...restProps }, ref) {
    return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
      Panel,
      {
        ref,
        className: (state) => clsx_default(
          style_default33.content,
          state.open && state.transitionStatus === "idle" && style_default33.overflowVisible,
          className
        ),
        hiddenUntilFound,
        ...restProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          Content2,
          {
            className: style_default33["content-inner"],
            render: render4,
            children
          }
        )
      }
    );
  }
);

// node_modules/@wordpress/dataviews/node_modules/@wordpress/ui/build-module/stack/stack.mjs
var import_element64 = __toESM(require_element(), 1);
var STYLE_HASH_ATTRIBUTE13 = "data-wp-hash";
function getRuntime13() {
  const globalScope = globalThis;
  if (globalScope.__wpStyleRuntime) {
    return globalScope.__wpStyleRuntime;
  }
  globalScope.__wpStyleRuntime = {
    documents: /* @__PURE__ */ new Map(),
    styles: /* @__PURE__ */ new Map(),
    injectedStyles: /* @__PURE__ */ new WeakMap()
  };
  if (typeof document !== "undefined") {
    registerDocument13(document);
  }
  return globalScope.__wpStyleRuntime;
}
function documentContainsStyleHash13(targetDocument, hash) {
  if (!targetDocument.head) {
    return false;
  }
  for (const style of targetDocument.head.querySelectorAll(
    `style[${STYLE_HASH_ATTRIBUTE13}]`
  )) {
    if (style.getAttribute(STYLE_HASH_ATTRIBUTE13) === hash) {
      return true;
    }
  }
  return false;
}
function injectStyle13(targetDocument, hash, css) {
  if (!targetDocument.head) {
    return;
  }
  const runtime = getRuntime13();
  let injectedStyles = runtime.injectedStyles.get(targetDocument);
  if (!injectedStyles) {
    injectedStyles = /* @__PURE__ */ new Set();
    runtime.injectedStyles.set(targetDocument, injectedStyles);
  }
  if (injectedStyles.has(hash)) {
    return;
  }
  if (documentContainsStyleHash13(targetDocument, hash)) {
    injectedStyles.add(hash);
    return;
  }
  const style = targetDocument.createElement("style");
  style.setAttribute(STYLE_HASH_ATTRIBUTE13, hash);
  style.appendChild(targetDocument.createTextNode(css));
  targetDocument.head.appendChild(style);
  injectedStyles.add(hash);
}
function registerDocument13(targetDocument) {
  const runtime = getRuntime13();
  runtime.documents.set(
    targetDocument,
    (runtime.documents.get(targetDocument) ?? 0) + 1
  );
  for (const [hash, css] of runtime.styles) {
    injectStyle13(targetDocument, hash, css);
  }
  return () => {
    const count = runtime.documents.get(targetDocument);
    if (count === void 0) {
      return;
    }
    if (count <= 1) {
      runtime.documents.delete(targetDocument);
      return;
    }
    runtime.documents.set(targetDocument, count - 1);
  };
}
function registerStyle13(hash, css) {
  const runtime = getRuntime13();
  runtime.styles.set(hash, css);
  for (const targetDocument of runtime.documents.keys()) {
    injectStyle13(targetDocument, hash, css);
  }
}
if (typeof process === "undefined" || true) {
  registerStyle13("b51ff41489", "@layer wp-ui-utilities, wp-ui-components, wp-ui-compositions, wp-ui-overrides;@layer wp-ui-components{._19ce0419607e1896__stack{display:flex}}");
}
var style_default34 = { "stack": "_19ce0419607e1896__stack" };
var gapTokens3 = {
  xs: "var(--wpds-dimension-gap-xs, 4px)",
  sm: "var(--wpds-dimension-gap-sm, 8px)",
  md: "var(--wpds-dimension-gap-md, 12px)",
  lg: "var(--wpds-dimension-gap-lg, 16px)",
  xl: "var(--wpds-dimension-gap-xl, 24px)",
  "2xl": "var(--wpds-dimension-gap-2xl, 32px)",
  "3xl": "var(--wpds-dimension-gap-3xl, 40px)"
};
var Stack4 = (0, import_element64.forwardRef)(function Stack23({ direction, gap, align, justify, wrap, render: render4, ...props }, ref) {
  const style = {
    gap: gap && gapTokens3[gap],
    alignItems: align,
    justifyContent: justify,
    flexDirection: direction,
    flexWrap: wrap
  };
  const element = useRender3({
    render: render4,
    ref,
    props: mergeProps4(props, { style, className: style_default34.stack })
  });
  return element;
});

// node_modules/@wordpress/dataviews/build-module/constants.mjs
var import_i18n4 = __toESM(require_i18n(), 1);
var OPERATOR_IS_ANY = "isAny";
var OPERATOR_IS_NONE = "isNone";
var OPERATOR_IS_ALL = "isAll";
var OPERATOR_IS_NOT_ALL = "isNotAll";
var OPERATOR_BETWEEN = "between";
var OPERATOR_IN_THE_PAST = "inThePast";
var OPERATOR_OVER = "over";
var OPERATOR_IS = "is";
var OPERATOR_IS_NOT = "isNot";
var OPERATOR_LESS_THAN = "lessThan";
var OPERATOR_GREATER_THAN = "greaterThan";
var OPERATOR_LESS_THAN_OR_EQUAL = "lessThanOrEqual";
var OPERATOR_GREATER_THAN_OR_EQUAL = "greaterThanOrEqual";
var OPERATOR_BEFORE = "before";
var OPERATOR_AFTER = "after";
var OPERATOR_BEFORE_INC = "beforeInc";
var OPERATOR_AFTER_INC = "afterInc";
var OPERATOR_CONTAINS = "contains";
var OPERATOR_NOT_CONTAINS = "notContains";
var OPERATOR_STARTS_WITH = "startsWith";
var OPERATOR_ON = "on";
var OPERATOR_NOT_ON = "notOn";
var sortLabels = {
  asc: (0, import_i18n4.__)("Sort ascending"),
  desc: (0, import_i18n4.__)("Sort descending")
};

// node_modules/@wordpress/dataviews/build-module/lock-unlock.mjs
var import_private_apis2 = __toESM(require_private_apis(), 1);
var { lock: lock2, unlock: unlock2 } = (0, import_private_apis2.__dangerousOptInToUnstableAPIsOnlyForCoreModules)(
  "I acknowledge private features are not for use in themes or plugins and doing so will break in the next version of WordPress.",
  "@wordpress/dataviews"
);

// node_modules/@wordpress/dataviews/build-module/hooks/use-elements.mjs
var import_element65 = __toESM(require_element(), 1);
var EMPTY_ARRAY2 = [];
function useElements({
  elements,
  getElements
}) {
  const staticElements = Array.isArray(elements) && elements.length > 0 ? elements : EMPTY_ARRAY2;
  const [records, setRecords] = (0, import_element65.useState)(staticElements);
  const [isLoading, setIsLoading] = (0, import_element65.useState)(false);
  (0, import_element65.useEffect)(() => {
    if (!getElements) {
      setRecords(staticElements);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    getElements().then((fetchedElements) => {
      if (!cancelled) {
        const dynamicElements = Array.isArray(fetchedElements) && fetchedElements.length > 0 ? fetchedElements : staticElements;
        setRecords(dynamicElements);
      }
    }).catch(() => {
      if (!cancelled) {
        setRecords(staticElements);
      }
    }).finally(() => {
      if (!cancelled) {
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [getElements, staticElements]);
  return {
    elements: records,
    isLoading
  };
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = /* @__PURE__ */ Symbol.for("constructDateFrom");

// node_modules/@wordpress/dataviews/node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/addDays.js
function addDays(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/addMonths.js
function addMonths(date, amount, options) {
  const _date = toDate(date, options?.in);
  if (isNaN(amount)) return constructFrom(options?.in || date, NaN);
  if (!amount) {
    return _date;
  }
  const dayOfMonth = _date.getDate();
  const endOfDesiredMonth = constructFrom(options?.in || date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    );
    return _date;
  }
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/addWeeks.js
function addWeeks(date, amount, options) {
  return addDays(date, amount * 7, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/addYears.js
function addYears(date, amount, options) {
  return addMonths(date, amount * 12, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format6 = args.formats[width] || args.formats[args.defaultWidth];
    return format6;
  };
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index2 = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index2];
  };
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index2) => index2 + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset4, delimiter = "") {
  const sign = offset4 > 0 ? "-" : "+";
  const absOffset = Math.abs(offset4);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset4, delimiter) {
  if (offset4 % 60 === 0) {
    const sign = offset4 > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset4) / 60, 2);
  }
  return formatTimezone(offset4, delimiter);
}
function formatTimezone(offset4, delimiter = "") {
  const sign = offset4 > 0 ? "-" : "+";
  const absOffset = Math.abs(offset4);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/@wordpress/dataviews/node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format6, input) {
  const _message = message(token, format6, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format6, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format6}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/subDays.js
function subDays(date, amount, options) {
  return addDays(date, -amount, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/subMonths.js
function subMonths(date, amount, options) {
  return addMonths(date, -amount, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/subWeeks.js
function subWeeks(date, amount, options) {
  return addWeeks(date, -amount, options);
}

// node_modules/@wordpress/dataviews/node_modules/date-fns/subYears.js
function subYears(date, amount, options) {
  return addYears(date, -amount, options);
}

// node_modules/@wordpress/dataviews/build-module/utils/operators.mjs
var import_i18n5 = __toESM(require_i18n(), 1);
var import_element66 = __toESM(require_element(), 1);
var import_date = __toESM(require_date(), 1);
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var filterTextWrappers = {
  Name: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("span", { className: "dataviews-filters__summary-filter-text-name" }),
  Value: /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("span", { className: "dataviews-filters__summary-filter-text-value" })
};
function getRelativeDate(value, unit) {
  switch (unit) {
    case "days":
      return subDays(/* @__PURE__ */ new Date(), value);
    case "weeks":
      return subWeeks(/* @__PURE__ */ new Date(), value);
    case "months":
      return subMonths(/* @__PURE__ */ new Date(), value);
    case "years":
      return subYears(/* @__PURE__ */ new Date(), value);
    default:
      return /* @__PURE__ */ new Date();
  }
}
var isNoneOperatorDefinition = {
  /* translators: DataViews operator name */
  label: (0, import_i18n5.__)("Is none of"),
  filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
    (0, import_i18n5.sprintf)(
      /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is none of: Admin, Editor". */
      (0, import_i18n5.__)("<Name>%1$s is none of: </Name><Value>%2$s</Value>"),
      filter.name,
      activeElements.map((element) => element.label).join(", ")
    ),
    filterTextWrappers
  ),
  filter: ((item, field, filterValue) => {
    if (!filterValue?.length) {
      return true;
    }
    const fieldValue = field.getValue({ item });
    if (Array.isArray(fieldValue)) {
      return !filterValue.some(
        (fv) => fieldValue.includes(fv)
      );
    } else if (typeof fieldValue === "string") {
      return !filterValue.includes(fieldValue);
    }
    return false;
  }),
  selection: "multi"
};
var OPERATORS = [
  {
    name: OPERATOR_IS_ANY,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Includes"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is any: Admin, Editor". */
        (0, import_i18n5.__)("<Name>%1$s includes: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements.map((element) => element.label).join(", ")
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (!filterValue?.length) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      if (Array.isArray(fieldValue)) {
        return filterValue.some(
          (fv) => fieldValue.includes(fv)
        );
      } else if (typeof fieldValue === "string") {
        return filterValue.includes(fieldValue);
      }
      return false;
    },
    selection: "multi"
  },
  {
    name: OPERATOR_IS_NONE,
    ...isNoneOperatorDefinition
  },
  {
    name: OPERATOR_IS_ALL,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Includes all"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author includes all: Admin, Editor". */
        (0, import_i18n5.__)("<Name>%1$s includes all: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements.map((element) => element.label).join(", ")
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (!filterValue?.length) {
        return true;
      }
      return filterValue.every((value) => {
        return field.getValue({ item })?.includes(value);
      });
    },
    selection: "multi"
  },
  {
    name: OPERATOR_IS_NOT_ALL,
    ...isNoneOperatorDefinition
  },
  {
    name: OPERATOR_BETWEEN,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Between (inc)"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Item count"). 2: Filter value min. 3: Filter value max. e.g.: "Item count between (inc): 10 and 180". */
        (0, import_i18n5.__)(
          "<Name>%1$s between (inc): </Name><Value>%2$s and %3$s</Value>"
        ),
        filter.name,
        activeElements[0].label[0],
        activeElements[0].label[1]
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (!Array.isArray(filterValue) || filterValue.length !== 2 || filterValue[0] === void 0 || filterValue[1] === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      if (typeof fieldValue === "number" || fieldValue instanceof Date || typeof fieldValue === "string") {
        return fieldValue >= filterValue[0] && fieldValue <= filterValue[1];
      }
      return false;
    },
    selection: "custom"
  },
  {
    name: OPERATOR_IN_THE_PAST,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("In the past"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "7 days"): "Date is in the past: 7 days". */
        (0, import_i18n5.__)(
          "<Name>%1$s is in the past: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        `${activeElements[0].value.value} ${activeElements[0].value.unit}`
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue?.value === void 0 || filterValue?.unit === void 0) {
        return true;
      }
      const targetDate = getRelativeDate(
        filterValue.value,
        filterValue.unit
      );
      const fieldValue = (0, import_date.getDate)(field.getValue({ item }));
      return fieldValue >= targetDate && fieldValue <= /* @__PURE__ */ new Date();
    },
    selection: "custom"
  },
  {
    name: OPERATOR_OVER,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Over"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "7 days"): "Date is over: 7 days". */
        (0, import_i18n5.__)("<Name>%1$s is over: </Name><Value>%2$s</Value>"),
        filter.name,
        `${activeElements[0].value.value} ${activeElements[0].value.unit}`
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue?.value === void 0 || filterValue?.unit === void 0) {
        return true;
      }
      const targetDate = getRelativeDate(
        filterValue.value,
        filterValue.unit
      );
      const fieldValue = (0, import_date.getDate)(field.getValue({ item }));
      return fieldValue < targetDate;
    },
    selection: "custom"
  },
  {
    name: OPERATOR_IS,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Is"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is: Admin". */
        (0, import_i18n5.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      return filterValue === field.getValue({ item }) || filterValue === void 0;
    },
    selection: "single"
  },
  {
    name: OPERATOR_IS_NOT,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Is not"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Author"). 2: Filter value (e.g. "Admin"): "Author is not: Admin". */
        (0, import_i18n5.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      return filterValue !== field.getValue({ item });
    },
    selection: "single"
  },
  {
    name: OPERATOR_LESS_THAN,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Less than"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is less than: 10". */
        (0, import_i18n5.__)("<Name>%1$s is less than: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      return fieldValue < filterValue;
    },
    selection: "single"
  },
  {
    name: OPERATOR_GREATER_THAN,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Greater than"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is greater than: 10". */
        (0, import_i18n5.__)(
          "<Name>%1$s is greater than: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      return fieldValue > filterValue;
    },
    selection: "single"
  },
  {
    name: OPERATOR_LESS_THAN_OR_EQUAL,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Less than or equal"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is less than or equal to: 10". */
        (0, import_i18n5.__)(
          "<Name>%1$s is less than or equal to: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      return fieldValue <= filterValue;
    },
    selection: "single"
  },
  {
    name: OPERATOR_GREATER_THAN_OR_EQUAL,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Greater than or equal"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Count"). 2: Filter value (e.g. "10"): "Count is greater than or equal to: 10". */
        (0, import_i18n5.__)(
          "<Name>%1$s is greater than or equal to: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      return fieldValue >= filterValue;
    },
    selection: "single"
  },
  {
    name: OPERATOR_BEFORE,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Before"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is before: 2024-01-01". */
        (0, import_i18n5.__)("<Name>%1$s is before: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const filterDate = (0, import_date.getDate)(filterValue);
      const fieldDate = (0, import_date.getDate)(field.getValue({ item }));
      return fieldDate < filterDate;
    },
    selection: "single"
  },
  {
    name: OPERATOR_AFTER,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("After"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is after: 2024-01-01". */
        (0, import_i18n5.__)("<Name>%1$s is after: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const filterDate = (0, import_date.getDate)(filterValue);
      const fieldDate = (0, import_date.getDate)(field.getValue({ item }));
      return fieldDate > filterDate;
    },
    selection: "single"
  },
  {
    name: OPERATOR_BEFORE_INC,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Before (inc)"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is on or before: 2024-01-01". */
        (0, import_i18n5.__)(
          "<Name>%1$s is on or before: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const filterDate = (0, import_date.getDate)(filterValue);
      const fieldDate = (0, import_date.getDate)(field.getValue({ item }));
      return fieldDate <= filterDate;
    },
    selection: "single"
  },
  {
    name: OPERATOR_AFTER_INC,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("After (inc)"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is on or after: 2024-01-01". */
        (0, import_i18n5.__)(
          "<Name>%1$s is on or after: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const filterDate = (0, import_date.getDate)(filterValue);
      const fieldDate = (0, import_date.getDate)(field.getValue({ item }));
      return fieldDate >= filterDate;
    },
    selection: "single"
  },
  {
    name: OPERATOR_CONTAINS,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Contains"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Title"). 2: Filter value (e.g. "Hello"): "Title contains: Hello". */
        (0, import_i18n5.__)("<Name>%1$s contains: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      return typeof fieldValue === "string" && filterValue && fieldValue.toLowerCase().includes(String(filterValue).toLowerCase());
    },
    selection: "single"
  },
  {
    name: OPERATOR_NOT_CONTAINS,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Doesn't contain"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Title"). 2: Filter value (e.g. "Hello"): "Title doesn't contain: Hello". */
        (0, import_i18n5.__)(
          "<Name>%1$s doesn't contain: </Name><Value>%2$s</Value>"
        ),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      return typeof fieldValue === "string" && filterValue && !fieldValue.toLowerCase().includes(String(filterValue).toLowerCase());
    },
    selection: "single"
  },
  {
    name: OPERATOR_STARTS_WITH,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Starts with"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Title"). 2: Filter value (e.g. "Hello"): "Title starts with: Hello". */
        (0, import_i18n5.__)("<Name>%1$s starts with: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const fieldValue = field.getValue({ item });
      return typeof fieldValue === "string" && filterValue && fieldValue.toLowerCase().startsWith(String(filterValue).toLowerCase());
    },
    selection: "single"
  },
  {
    name: OPERATOR_ON,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("On"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is: 2024-01-01". */
        (0, import_i18n5.__)("<Name>%1$s is: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const filterDate = (0, import_date.getDate)(filterValue);
      const fieldDate = (0, import_date.getDate)(field.getValue({ item }));
      return filterDate.getTime() === fieldDate.getTime();
    },
    selection: "single"
  },
  {
    name: OPERATOR_NOT_ON,
    /* translators: DataViews operator name */
    label: (0, import_i18n5.__)("Not on"),
    filterText: (filter, activeElements) => (0, import_element66.createInterpolateElement)(
      (0, import_i18n5.sprintf)(
        /* translators: 1: Filter name (e.g. "Date"). 2: Filter value (e.g. "2024-01-01"): "Date is not: 2024-01-01". */
        (0, import_i18n5.__)("<Name>%1$s is not: </Name><Value>%2$s</Value>"),
        filter.name,
        activeElements[0].label
      ),
      filterTextWrappers
    ),
    filter(item, field, filterValue) {
      if (filterValue === void 0) {
        return true;
      }
      const filterDate = (0, import_date.getDate)(filterValue);
      const fieldDate = (0, import_date.getDate)(field.getValue({ item }));
      return filterDate.getTime() !== fieldDate.getTime();
    },
    selection: "single"
  }
];
var getOperatorByName = (name) => OPERATORS.find((op) => op.name === name);
var getAllOperatorNames = () => OPERATORS.map((op) => op.name);

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/checkbox.mjs
var import_components2 = __toESM(require_components(), 1);
var import_element67 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/utils/get-custom-validity.mjs
function getCustomValidity(isValid2, validity) {
  let customValidity;
  if (isValid2?.required && validity?.required) {
    customValidity = validity?.required?.message ? validity.required : void 0;
  } else if (isValid2?.pattern && validity?.pattern) {
    customValidity = validity.pattern;
  } else if (isValid2?.min && validity?.min) {
    customValidity = validity.min;
  } else if (isValid2?.max && validity?.max) {
    customValidity = validity.max;
  } else if (isValid2?.minLength && validity?.minLength) {
    customValidity = validity.minLength;
  } else if (isValid2?.maxLength && validity?.maxLength) {
    customValidity = validity.maxLength;
  } else if (isValid2?.elements && validity?.elements) {
    customValidity = validity.elements;
  } else if (validity?.custom) {
    customValidity = validity.custom;
  }
  return customValidity;
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/checkbox.mjs
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var { ValidatedCheckboxControl } = unlock2(import_components2.privateApis);
function Checkbox({
  field,
  onChange,
  data,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { getValue, setValue, label, description, isValid: isValid2 } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const onChangeControl = (0, import_element67.useCallback)(() => {
    onChange(
      setValue({ item: data, value: !getValue({ item: data }) })
    );
  }, [data, getValue, onChange, setValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    ValidatedCheckboxControl,
    {
      required: !!field.isValid?.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      hidden: hideLabelFromVision,
      label,
      help: description,
      checked: getValue({ item: data }),
      onChange: onChangeControl,
      disabled: disabled3
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/combobox.mjs
var import_components3 = __toESM(require_components(), 1);
var import_element68 = __toESM(require_element(), 1);
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var { ValidatedComboboxControl } = unlock2(import_components3.privateApis);
function Combobox({
  data,
  field,
  onChange,
  hideLabelFromVision,
  validity
}) {
  const { label, description, placeholder, getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data }) ?? "";
  const onChangeControl = (0, import_element68.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue ?? "" })),
    [data, onChange, setValue]
  );
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(import_components3.Spinner, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
    ValidatedComboboxControl,
    {
      required: !!field.isValid?.required,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      value,
      help: description,
      placeholder,
      options: elements,
      onChange: onChangeControl,
      hideLabelFromVision,
      allowReset: true,
      expandOnFocus: true
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/datetime.mjs
var import_components5 = __toESM(require_components(), 1);
var import_element71 = __toESM(require_element(), 1);
var import_i18n7 = __toESM(require_i18n(), 1);
var import_date3 = __toESM(require_date(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/utils/relative-date-control.mjs
var import_components4 = __toESM(require_components(), 1);
var import_element69 = __toESM(require_element(), 1);
var import_i18n6 = __toESM(require_i18n(), 1);
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var TIME_UNITS_OPTIONS = {
  [OPERATOR_IN_THE_PAST]: [
    { value: "days", label: (0, import_i18n6.__)("Days") },
    { value: "weeks", label: (0, import_i18n6.__)("Weeks") },
    { value: "months", label: (0, import_i18n6.__)("Months") },
    { value: "years", label: (0, import_i18n6.__)("Years") }
  ],
  [OPERATOR_OVER]: [
    { value: "days", label: (0, import_i18n6.__)("Days ago") },
    { value: "weeks", label: (0, import_i18n6.__)("Weeks ago") },
    { value: "months", label: (0, import_i18n6.__)("Months ago") },
    { value: "years", label: (0, import_i18n6.__)("Years ago") }
  ]
};
function RelativeDateControl({
  className,
  data,
  field,
  onChange,
  hideLabelFromVision,
  operator
}) {
  const options = TIME_UNITS_OPTIONS[operator === OPERATOR_IN_THE_PAST ? "inThePast" : "over"];
  const { id, label, description, getValue, setValue } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const fieldValue = getValue({ item: data });
  const { value: relValue = "", unit = options[0].value } = fieldValue && typeof fieldValue === "object" ? fieldValue : {};
  const onChangeValue = (0, import_element69.useCallback)(
    (newValue) => onChange(
      setValue({
        item: data,
        value: { value: Number(newValue), unit }
      })
    ),
    [onChange, setValue, data, unit]
  );
  const onChangeUnit = (0, import_element69.useCallback)(
    (newUnit) => onChange(
      setValue({
        item: data,
        value: { value: relValue, unit: newUnit }
      })
    ),
    [onChange, setValue, data, relValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
    import_components4.BaseControl,
    {
      id,
      className: clsx_default(className, "dataviews-controls__relative-date"),
      label,
      hideLabelFromVision,
      help: description,
      children: /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(Stack4, { direction: "row", gap: "sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
          import_components4.__experimentalNumberControl,
          {
            __next40pxDefaultSize: true,
            className: "dataviews-controls__relative-date-number",
            spinControls: "none",
            min: 1,
            step: 1,
            value: relValue,
            onChange: onChangeValue,
            disabled: disabled3
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime76.jsx)(
          import_components4.SelectControl,
          {
            className: "dataviews-controls__relative-date-unit",
            __next40pxDefaultSize: true,
            label: (0, import_i18n6.__)("Unit"),
            value: unit,
            options,
            onChange: onChangeUnit,
            hideLabelFromVision: true,
            disabled: disabled3
          }
        )
      ] })
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/utils/use-disabled-date-matchers.mjs
var import_element70 = __toESM(require_element(), 1);
function useDisabledDateMatchers(isValid2, parseDateFn) {
  const minConstraint = typeof isValid2.min?.constraint === "string" ? isValid2.min.constraint : void 0;
  const maxConstraint = typeof isValid2.max?.constraint === "string" ? isValid2.max.constraint : void 0;
  const disabledMatchers = (0, import_element70.useMemo)(() => {
    const matchers = [];
    if (minConstraint) {
      const minDate = parseDateFn(minConstraint);
      if (minDate) {
        matchers.push({ before: minDate });
      }
    }
    if (maxConstraint) {
      const maxDate = parseDateFn(maxConstraint);
      if (maxDate) {
        matchers.push({ after: maxDate });
      }
    }
    return matchers.length > 0 ? matchers : void 0;
  }, [minConstraint, maxConstraint, parseDateFn]);
  return { minConstraint, maxConstraint, disabledMatchers };
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/parse-date-time.mjs
var import_date2 = __toESM(require_date(), 1);
function parseDateTime(dateTimeString) {
  if (!dateTimeString) {
    return null;
  }
  const parsed = (0, import_date2.getDate)(dateTimeString);
  return parsed && isValid(parsed) ? parsed : null;
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/datetime.mjs
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var { DateCalendar, ValidatedInputControl } = unlock2(import_components5.privateApis);
var formatDateTime = (value) => {
  if (!value) {
    return "";
  }
  return (0, import_date3.dateI18n)("Y-m-d\\TH:i", (0, import_date3.getDate)(value));
};
function CalendarDateTimeControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity,
  config
}) {
  const { compact } = config || {};
  const { id, label, description, setValue, getValue, isValid: isValid2 } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const fieldValue = getValue({ item: data });
  const value = typeof fieldValue === "string" ? fieldValue : void 0;
  const [calendarMonth, setCalendarMonth] = (0, import_element71.useState)(() => {
    const parsedDate = parseDateTime(value);
    return parsedDate || /* @__PURE__ */ new Date();
  });
  const inputControlRef = (0, import_element71.useRef)(null);
  const validationTimeoutRef = (0, import_element71.useRef)(void 0);
  const previousFocusRef = (0, import_element71.useRef)(null);
  const { minConstraint, maxConstraint, disabledMatchers } = useDisabledDateMatchers(isValid2, parseDateTime);
  const onChangeCallback = (0, import_element71.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  (0, import_element71.useEffect)(() => {
    return () => {
      if (validationTimeoutRef.current) {
        clearTimeout(validationTimeoutRef.current);
      }
    };
  }, []);
  const onSelectDate = (0, import_element71.useCallback)(
    (newDate) => {
      let dateTimeValue;
      if (newDate) {
        const wpDate = (0, import_date3.dateI18n)("Y-m-d", newDate);
        let wpTime;
        if (value) {
          wpTime = (0, import_date3.dateI18n)("H:i", (0, import_date3.getDate)(value));
        } else {
          wpTime = (0, import_date3.dateI18n)("H:i", newDate);
        }
        const finalDateTime = (0, import_date3.getDate)(`${wpDate}T${wpTime}`);
        dateTimeValue = finalDateTime.toISOString();
        onChangeCallback(dateTimeValue);
        if (validationTimeoutRef.current) {
          clearTimeout(validationTimeoutRef.current);
        }
      } else {
        onChangeCallback(void 0);
      }
      previousFocusRef.current = inputControlRef.current && inputControlRef.current.ownerDocument.activeElement;
      validationTimeoutRef.current = setTimeout(() => {
        if (inputControlRef.current) {
          inputControlRef.current.focus();
          inputControlRef.current.blur();
          onChangeCallback(dateTimeValue);
          if (previousFocusRef.current && previousFocusRef.current instanceof HTMLElement) {
            previousFocusRef.current.focus();
          }
        }
      }, 0);
    },
    [onChangeCallback, value]
  );
  const handleManualDateTimeChange = (0, import_element71.useCallback)(
    (newValue) => {
      if (newValue) {
        const dateTime = (0, import_date3.getDate)(newValue);
        onChangeCallback(dateTime.toISOString());
        const parsedDate = parseDateTime(dateTime.toISOString());
        if (parsedDate) {
          setCalendarMonth(parsedDate);
        }
      } else {
        onChangeCallback(void 0);
      }
    },
    [onChangeCallback]
  );
  const { format: fieldFormat } = field;
  const weekStartsOn = fieldFormat.weekStartsOn ?? (0, import_date3.getSettings)().l10n.startOfWeek;
  const {
    timezone: { string: timezoneString }
  } = (0, import_date3.getSettings)();
  let displayLabel = label;
  if (isValid2?.required && !markWhenOptional && !hideLabelFromVision) {
    displayLabel = `${label} (${(0, import_i18n7.__)("Required")})`;
  } else if (!isValid2?.required && markWhenOptional && !hideLabelFromVision) {
    displayLabel = `${label} (${(0, import_i18n7.__)("Optional")})`;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    import_components5.BaseControl,
    {
      id,
      label: displayLabel,
      help: description,
      hideLabelFromVision,
      children: /* @__PURE__ */ (0, import_jsx_runtime77.jsxs)(Stack4, { direction: "column", gap: "lg", children: [
        /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
          ValidatedInputControl,
          {
            ref: inputControlRef,
            __next40pxDefaultSize: true,
            required: !!isValid2?.required,
            customValidity: getCustomValidity(isValid2, validity),
            type: "datetime-local",
            label: (0, import_i18n7.__)("Date time"),
            hideLabelFromVision: true,
            value: formatDateTime(value),
            onChange: handleManualDateTimeChange,
            disabled: disabled3,
            min: minConstraint ? formatDateTime(minConstraint) : void 0,
            max: maxConstraint ? formatDateTime(maxConstraint) : void 0
          }
        ),
        !compact && /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
          DateCalendar,
          {
            style: { width: "100%" },
            selected: value ? parseDateTime(value) || void 0 : void 0,
            onSelect: onSelectDate,
            month: calendarMonth,
            onMonthChange: setCalendarMonth,
            timeZone: timezoneString || void 0,
            weekStartsOn,
            disabled: disabled3 || disabledMatchers
          }
        )
      ] })
    }
  );
}
function DateTime({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  operator,
  validity,
  config
}) {
  if (operator === OPERATOR_IN_THE_PAST || operator === OPERATOR_OVER) {
    return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
      RelativeDateControl,
      {
        className: "dataviews-controls__datetime",
        data,
        field,
        onChange,
        hideLabelFromVision,
        operator
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    CalendarDateTimeControl,
    {
      data,
      field,
      onChange,
      hideLabelFromVision,
      markWhenOptional,
      validity,
      config
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/date.mjs
var import_components6 = __toESM(require_components(), 1);
var import_element72 = __toESM(require_element(), 1);
var import_i18n8 = __toESM(require_i18n(), 1);
var import_date4 = __toESM(require_date(), 1);
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var { DateCalendar: DateCalendar2, DateRangeCalendar } = unlock2(import_components6.privateApis);
var DATE_PRESETS = [
  {
    id: "today",
    label: (0, import_i18n8.__)("Today"),
    getValue: () => (0, import_date4.getDate)(null)
  },
  {
    id: "yesterday",
    label: (0, import_i18n8.__)("Yesterday"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return subDays(today, 1);
    }
  },
  {
    id: "past-week",
    label: (0, import_i18n8.__)("Past week"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return subDays(today, 7);
    }
  },
  {
    id: "past-month",
    label: (0, import_i18n8.__)("Past month"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return subMonths(today, 1);
    }
  }
];
var DATE_RANGE_PRESETS = [
  {
    id: "last-7-days",
    label: (0, import_i18n8.__)("Last 7 days"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return [subDays(today, 7), today];
    }
  },
  {
    id: "last-30-days",
    label: (0, import_i18n8.__)("Last 30 days"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return [subDays(today, 30), today];
    }
  },
  {
    id: "month-to-date",
    label: (0, import_i18n8.__)("Month to date"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return [startOfMonth(today), today];
    }
  },
  {
    id: "last-year",
    label: (0, import_i18n8.__)("Last year"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return [subYears(today, 1), today];
    }
  },
  {
    id: "year-to-date",
    label: (0, import_i18n8.__)("Year to date"),
    getValue: () => {
      const today = (0, import_date4.getDate)(null);
      return [startOfYear(today), today];
    }
  }
];
var parseDate = (dateString) => {
  if (!dateString) {
    return null;
  }
  const parsed = (0, import_date4.getDate)(dateString);
  return parsed && isValid(parsed) ? parsed : null;
};
var formatDate = (date) => {
  if (!date) {
    return "";
  }
  return typeof date === "string" ? date : format(date, "yyyy-MM-dd");
};
function ValidatedDateControl({
  field,
  validity,
  inputRefs,
  isTouched,
  setIsTouched,
  children
}) {
  const { isValid: isValid2 } = field;
  const [customValidity, setCustomValidity] = (0, import_element72.useState)(void 0);
  const validateRefs = (0, import_element72.useCallback)(() => {
    const refs = Array.isArray(inputRefs) ? inputRefs : [inputRefs];
    for (const ref of refs) {
      const input = ref.current;
      if (input && !input.validity.valid) {
        setCustomValidity({
          type: "invalid",
          message: input.validationMessage
        });
        return;
      }
    }
    setCustomValidity(void 0);
  }, [inputRefs]);
  (0, import_element72.useEffect)(() => {
    const refs = Array.isArray(inputRefs) ? inputRefs : [inputRefs];
    const result = validity ? getCustomValidity(isValid2, validity) : void 0;
    for (const ref of refs) {
      const input = ref.current;
      if (input) {
        input.setCustomValidity(
          result?.type === "invalid" && result.message ? result.message : ""
        );
      }
    }
  }, [inputRefs, isValid2, validity]);
  (0, import_element72.useEffect)(() => {
    const refs = Array.isArray(inputRefs) ? inputRefs : [inputRefs];
    const handleInvalid = (event) => {
      event.preventDefault();
      setIsTouched(true);
    };
    for (const ref of refs) {
      ref.current?.addEventListener("invalid", handleInvalid);
    }
    return () => {
      for (const ref of refs) {
        ref.current?.removeEventListener("invalid", handleInvalid);
      }
    };
  }, [inputRefs, setIsTouched]);
  (0, import_element72.useEffect)(() => {
    if (!isTouched) {
      return;
    }
    const result = validity ? getCustomValidity(isValid2, validity) : void 0;
    if (result) {
      setCustomValidity(result);
    } else {
      validateRefs();
    }
  }, [isTouched, isValid2, validity, validateRefs]);
  const onBlur = (event) => {
    if (isTouched) {
      return;
    }
    if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
      setIsTouched(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)("div", { onBlur, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime78.jsx)("div", { "aria-live": "polite", children: customValidity && /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
      "p",
      {
        className: clsx_default(
          "components-validated-control__indicator",
          customValidity.type === "invalid" ? "is-invalid" : void 0
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
            import_components6.Icon,
            {
              className: "components-validated-control__indicator-icon",
              icon: error_default2,
              size: 16,
              fill: "currentColor"
            }
          ),
          customValidity.message
        ]
      }
    ) })
  ] });
}
function CalendarDateControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const {
    id,
    label,
    description,
    setValue,
    getValue,
    isValid: isValid2,
    format: fieldFormat
  } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const [selectedPresetId, setSelectedPresetId] = (0, import_element72.useState)(
    null
  );
  const weekStartsOn = fieldFormat.weekStartsOn ?? (0, import_date4.getSettings)().l10n.startOfWeek;
  const fieldValue = getValue({ item: data });
  const value = typeof fieldValue === "string" ? fieldValue : void 0;
  const [calendarMonth, setCalendarMonth] = (0, import_element72.useState)(() => {
    const parsedDate = parseDate(value);
    return parsedDate || /* @__PURE__ */ new Date();
  });
  const [isTouched, setIsTouched] = (0, import_element72.useState)(false);
  const validityTargetRef = (0, import_element72.useRef)(null);
  const { minConstraint, maxConstraint, disabledMatchers } = useDisabledDateMatchers(isValid2, parseDate);
  const onChangeCallback = (0, import_element72.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  const onSelectDate = (0, import_element72.useCallback)(
    (newDate) => {
      const dateValue = newDate ? format(newDate, "yyyy-MM-dd") : void 0;
      onChangeCallback(dateValue);
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [onChangeCallback]
  );
  const handlePresetClick = (0, import_element72.useCallback)(
    (preset) => {
      const presetDate = preset.getValue();
      const dateValue = formatDate(presetDate);
      setCalendarMonth(presetDate);
      onChangeCallback(dateValue);
      setSelectedPresetId(preset.id);
      setIsTouched(true);
    },
    [onChangeCallback]
  );
  const handleManualDateChange = (0, import_element72.useCallback)(
    (newValue) => {
      onChangeCallback(newValue);
      if (newValue) {
        const parsedDate = parseDate(newValue);
        if (parsedDate) {
          setCalendarMonth(parsedDate);
        }
      }
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [onChangeCallback]
  );
  const {
    timezone: { string: timezoneString }
  } = (0, import_date4.getSettings)();
  let displayLabel = label;
  if (isValid2?.required && !markWhenOptional) {
    displayLabel = `${label} (${(0, import_i18n8.__)("Required")})`;
  } else if (!isValid2?.required && markWhenOptional) {
    displayLabel = `${label} (${(0, import_i18n8.__)("Optional")})`;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    ValidatedDateControl,
    {
      field,
      validity,
      inputRefs: validityTargetRef,
      isTouched,
      setIsTouched,
      children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
        import_components6.BaseControl,
        {
          id,
          className: "dataviews-controls__date",
          label: displayLabel,
          help: description,
          hideLabelFromVision,
          children: /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(Stack4, { direction: "column", gap: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              Stack4,
              {
                direction: "row",
                gap: "sm",
                wrap: "wrap",
                justify: "flex-start",
                children: [
                  DATE_PRESETS.map((preset) => {
                    const isSelected = selectedPresetId === preset.id;
                    return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                      import_components6.Button,
                      {
                        className: "dataviews-controls__date-preset",
                        variant: "tertiary",
                        isPressed: isSelected,
                        size: "small",
                        disabled: disabled3,
                        accessibleWhenDisabled: true,
                        onClick: () => handlePresetClick(preset),
                        children: preset.label
                      },
                      preset.id
                    );
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                    import_components6.Button,
                    {
                      className: "dataviews-controls__date-preset",
                      variant: "tertiary",
                      isPressed: !selectedPresetId,
                      size: "small",
                      disabled: !!selectedPresetId || disabled3,
                      accessibleWhenDisabled: true,
                      children: (0, import_i18n8.__)("Custom")
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
              import_components6.__experimentalInputControl,
              {
                __next40pxDefaultSize: true,
                ref: validityTargetRef,
                type: "date",
                label: (0, import_i18n8.__)("Date"),
                hideLabelFromVision: true,
                value,
                onChange: handleManualDateChange,
                required: !!field.isValid?.required,
                disabled: disabled3,
                min: minConstraint,
                max: maxConstraint
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
              DateCalendar2,
              {
                style: { width: "100%" },
                selected: value ? parseDate(value) || void 0 : void 0,
                onSelect: onSelectDate,
                month: calendarMonth,
                onMonthChange: setCalendarMonth,
                timeZone: timezoneString || void 0,
                weekStartsOn,
                disabled: disabled3 || disabledMatchers,
                disableNavigation: disabled3
              }
            )
          ] })
        }
      )
    }
  );
}
function CalendarDateRangeControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const {
    id,
    label,
    description,
    getValue,
    setValue,
    isValid: isValid2,
    format: fieldFormat
  } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  let value;
  const fieldValue = getValue({ item: data });
  if (Array.isArray(fieldValue) && fieldValue.length === 2 && fieldValue.every((date) => typeof date === "string")) {
    value = fieldValue;
  }
  const weekStartsOn = fieldFormat.weekStartsOn ?? (0, import_date4.getSettings)().l10n.startOfWeek;
  const { minConstraint, maxConstraint, disabledMatchers } = useDisabledDateMatchers(isValid2, parseDate);
  const onChangeCallback = (0, import_element72.useCallback)(
    (newValue) => {
      onChange(
        setValue({
          item: data,
          value: newValue
        })
      );
    },
    [data, onChange, setValue]
  );
  const [selectedPresetId, setSelectedPresetId] = (0, import_element72.useState)(
    null
  );
  const selectedRange = (0, import_element72.useMemo)(() => {
    if (!value) {
      return { from: void 0, to: void 0 };
    }
    const [from, to] = value;
    return {
      from: parseDate(from) || void 0,
      to: parseDate(to) || void 0
    };
  }, [value]);
  const [calendarMonth, setCalendarMonth] = (0, import_element72.useState)(() => {
    return selectedRange.from || /* @__PURE__ */ new Date();
  });
  const [isTouched, setIsTouched] = (0, import_element72.useState)(false);
  const fromInputRef = (0, import_element72.useRef)(null);
  const toInputRef = (0, import_element72.useRef)(null);
  const updateDateRange = (0, import_element72.useCallback)(
    (fromDate, toDate2) => {
      if (fromDate && toDate2) {
        onChangeCallback([
          formatDate(fromDate),
          formatDate(toDate2)
        ]);
      } else if (!fromDate && !toDate2) {
        onChangeCallback(void 0);
      }
    },
    [onChangeCallback]
  );
  const onSelectCalendarRange = (0, import_element72.useCallback)(
    (newRange) => {
      updateDateRange(newRange?.from, newRange?.to);
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [updateDateRange]
  );
  const handlePresetClick = (0, import_element72.useCallback)(
    (preset) => {
      const [startDate, endDate] = preset.getValue();
      setCalendarMonth(startDate);
      updateDateRange(startDate, endDate);
      setSelectedPresetId(preset.id);
      setIsTouched(true);
    },
    [updateDateRange]
  );
  const handleManualDateChange = (0, import_element72.useCallback)(
    (fromOrTo, newValue) => {
      const [currentFrom, currentTo] = value || [
        void 0,
        void 0
      ];
      const updatedFrom = fromOrTo === "from" ? newValue : currentFrom;
      const updatedTo = fromOrTo === "to" ? newValue : currentTo;
      updateDateRange(updatedFrom, updatedTo);
      if (newValue) {
        const parsedDate = parseDate(newValue);
        if (parsedDate) {
          setCalendarMonth(parsedDate);
        }
      }
      setSelectedPresetId(null);
      setIsTouched(true);
    },
    [value, updateDateRange]
  );
  const { timezone } = (0, import_date4.getSettings)();
  let displayLabel = label;
  if (field.isValid?.required && !markWhenOptional) {
    displayLabel = `${label} (${(0, import_i18n8.__)("Required")})`;
  } else if (!field.isValid?.required && markWhenOptional) {
    displayLabel = `${label} (${(0, import_i18n8.__)("Optional")})`;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    ValidatedDateControl,
    {
      field,
      validity,
      inputRefs: [fromInputRef, toInputRef],
      isTouched,
      setIsTouched,
      children: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
        import_components6.BaseControl,
        {
          id,
          className: "dataviews-controls__date",
          label: displayLabel,
          help: description,
          hideLabelFromVision,
          children: /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(Stack4, { direction: "column", gap: "lg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              Stack4,
              {
                direction: "row",
                gap: "sm",
                wrap: "wrap",
                justify: "flex-start",
                children: [
                  DATE_RANGE_PRESETS.map((preset) => {
                    const isSelected = selectedPresetId === preset.id;
                    return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                      import_components6.Button,
                      {
                        className: "dataviews-controls__date-preset",
                        variant: "tertiary",
                        isPressed: isSelected,
                        size: "small",
                        disabled: disabled3,
                        accessibleWhenDisabled: true,
                        onClick: () => handlePresetClick(preset),
                        children: preset.label
                      },
                      preset.id
                    );
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                    import_components6.Button,
                    {
                      className: "dataviews-controls__date-preset",
                      variant: "tertiary",
                      isPressed: !selectedPresetId,
                      size: "small",
                      accessibleWhenDisabled: true,
                      disabled: !!selectedPresetId || disabled3,
                      children: (0, import_i18n8.__)("Custom")
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsxs)(
              Stack4,
              {
                direction: "row",
                gap: "sm",
                justify: "space-between",
                className: "dataviews-controls__date-range-inputs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                    import_components6.__experimentalInputControl,
                    {
                      __next40pxDefaultSize: true,
                      ref: fromInputRef,
                      type: "date",
                      label: (0, import_i18n8.__)("From"),
                      hideLabelFromVision: true,
                      value: value?.[0],
                      onChange: (newValue) => handleManualDateChange("from", newValue),
                      required: !!field.isValid?.required,
                      disabled: disabled3,
                      min: minConstraint,
                      max: maxConstraint
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
                    import_components6.__experimentalInputControl,
                    {
                      __next40pxDefaultSize: true,
                      ref: toInputRef,
                      type: "date",
                      label: (0, import_i18n8.__)("To"),
                      hideLabelFromVision: true,
                      value: value?.[1],
                      onChange: (newValue) => handleManualDateChange("to", newValue),
                      required: !!field.isValid?.required,
                      disabled: disabled3,
                      min: minConstraint,
                      max: maxConstraint
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
              DateRangeCalendar,
              {
                style: { width: "100%" },
                selected: selectedRange,
                onSelect: onSelectCalendarRange,
                month: calendarMonth,
                onMonthChange: setCalendarMonth,
                timeZone: timezone.string || void 0,
                weekStartsOn,
                disabled: disabled3 || disabledMatchers
              }
            )
          ] })
        }
      )
    }
  );
}
function DateControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  operator,
  validity
}) {
  if (operator === OPERATOR_IN_THE_PAST || operator === OPERATOR_OVER) {
    return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
      RelativeDateControl,
      {
        className: "dataviews-controls__date",
        data,
        field,
        onChange,
        hideLabelFromVision,
        operator
      }
    );
  }
  if (operator === OPERATOR_BETWEEN) {
    return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
      CalendarDateRangeControl,
      {
        data,
        field,
        onChange,
        hideLabelFromVision,
        markWhenOptional,
        validity
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    CalendarDateControl,
    {
      data,
      field,
      onChange,
      hideLabelFromVision,
      markWhenOptional,
      validity
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/select.mjs
var import_components7 = __toESM(require_components(), 1);
var import_element73 = __toESM(require_element(), 1);
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var { ValidatedSelectControl } = unlock2(import_components7.privateApis);
function Select({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { type, label, description, getValue, setValue, isValid: isValid2 } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const isMultiple = type === "array";
  const value = getValue({ item: data }) ?? (isMultiple ? [] : "");
  const onChangeControl = (0, import_element73.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(import_components7.Spinner, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
    ValidatedSelectControl,
    {
      required: !!field.isValid?.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      value,
      help: description,
      options: elements,
      onChange: onChangeControl,
      __next40pxDefaultSize: true,
      hideLabelFromVision,
      multiple: isMultiple,
      disabled: disabled3
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/adaptive-select.mjs
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var ELEMENTS_THRESHOLD = 10;
function AdaptiveSelect(props) {
  const { field } = props;
  const { elements } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  if (elements.length >= ELEMENTS_THRESHOLD) {
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Combobox, { ...props });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Select, { ...props });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/email.mjs
var import_components9 = __toESM(require_components(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/utils/validated-input.mjs
var import_components8 = __toESM(require_components(), 1);
var import_element74 = __toESM(require_element(), 1);
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var { ValidatedInputControl: ValidatedInputControl2 } = unlock2(import_components8.privateApis);
function ValidatedText({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  type,
  prefix,
  suffix,
  validity
}) {
  const { label, placeholder, description, getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data });
  const disabled3 = field.isDisabled({ item: data, field });
  const onChangeControl = (0, import_element74.useCallback)(
    (newValue) => onChange(
      setValue({
        item: data,
        value: newValue
      })
    ),
    [data, setValue, onChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
    ValidatedInputControl2,
    {
      required: !!isValid2.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      placeholder,
      value: value ?? "",
      help: description,
      onChange: onChangeControl,
      hideLabelFromVision,
      type,
      prefix,
      suffix,
      disabled: disabled3,
      pattern: isValid2.pattern ? isValid2.pattern.constraint : void 0,
      minLength: isValid2.minLength ? isValid2.minLength.constraint : void 0,
      maxLength: isValid2.maxLength ? isValid2.maxLength.constraint : void 0,
      __next40pxDefaultSize: true
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/email.mjs
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);
function Email({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        markWhenOptional,
        validity,
        type: "email",
        prefix: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_components9.__experimentalInputControlPrefixWrapper, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(import_components9.Icon, { icon: envelope_default }) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/telephone.mjs
var import_components10 = __toESM(require_components(), 1);
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
function Telephone({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        markWhenOptional,
        validity,
        type: "tel",
        prefix: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_components10.__experimentalInputControlPrefixWrapper, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_components10.Icon, { icon: mobile_default }) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/url.mjs
var import_components11 = __toESM(require_components(), 1);
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
function Url({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        markWhenOptional,
        validity,
        type: "url",
        prefix: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_components11.__experimentalInputControlPrefixWrapper, { variant: "icon", children: /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(import_components11.Icon, { icon: link_default }) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/utils/validated-number.mjs
var import_components12 = __toESM(require_components(), 1);
var import_element75 = __toESM(require_element(), 1);
var import_i18n9 = __toESM(require_i18n(), 1);
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var { ValidatedNumberControl } = unlock2(import_components12.privateApis);
function toNumberOrEmpty(value) {
  if (value === "" || value === void 0) {
    return "";
  }
  const number = Number(value);
  return Number.isFinite(number) ? number : "";
}
function BetweenControls({
  value,
  onChange,
  hideLabelFromVision,
  step
}) {
  const [min2 = "", max2 = ""] = value;
  const onChangeMin = (0, import_element75.useCallback)(
    (newValue) => onChange([toNumberOrEmpty(newValue), max2]),
    [onChange, max2]
  );
  const onChangeMax = (0, import_element75.useCallback)(
    (newValue) => onChange([min2, toNumberOrEmpty(newValue)]),
    [onChange, min2]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
    import_components12.BaseControl,
    {
      help: (0, import_i18n9.__)("The max. value must be greater than the min. value."),
      children: /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)(import_components12.Flex, { direction: "row", gap: 4, children: [
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
          import_components12.__experimentalNumberControl,
          {
            label: (0, import_i18n9.__)("Min."),
            value: min2,
            max: max2 ? Number(max2) - step : void 0,
            onChange: onChangeMin,
            __next40pxDefaultSize: true,
            hideLabelFromVision,
            step
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
          import_components12.__experimentalNumberControl,
          {
            label: (0, import_i18n9.__)("Max."),
            value: max2,
            min: min2 ? Number(min2) + step : void 0,
            onChange: onChangeMax,
            __next40pxDefaultSize: true,
            hideLabelFromVision,
            step
          }
        )
      ] })
    }
  );
}
function ValidatedNumber({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  operator,
  validity
}) {
  const decimals = field.format?.decimals ?? 0;
  const step = Math.pow(10, Math.abs(decimals) * -1);
  const { label, description, getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data }) ?? "";
  const disabled3 = field.isDisabled({ item: data, field });
  const onChangeControl = (0, import_element75.useCallback)(
    (newValue) => {
      onChange(
        setValue({
          item: data,
          // Do not convert an empty string or undefined to a number,
          // otherwise there's a mismatch between the UI control (empty)
          // and the data relied by onChange (0).
          value: ["", void 0].includes(newValue) ? void 0 : Number(newValue)
        })
      );
    },
    [data, onChange, setValue]
  );
  const onChangeBetweenControls = (0, import_element75.useCallback)(
    (newValue) => {
      onChange(
        setValue({
          item: data,
          value: newValue
        })
      );
    },
    [data, onChange, setValue]
  );
  if (operator === OPERATOR_BETWEEN) {
    let valueBetween = ["", ""];
    if (Array.isArray(value) && value.length === 2 && value.every(
      (element) => typeof element === "number" || element === ""
    )) {
      valueBetween = value;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
      BetweenControls,
      {
        value: valueBetween,
        onChange: onChangeBetweenControls,
        hideLabelFromVision,
        step
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
    ValidatedNumberControl,
    {
      required: !!isValid2.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      help: description,
      value,
      onChange: onChangeControl,
      __next40pxDefaultSize: true,
      hideLabelFromVision,
      step,
      min: isValid2.min ? isValid2.min.constraint : void 0,
      max: isValid2.max ? isValid2.max.constraint : void 0,
      disabled: disabled3
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/integer.mjs
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
function Integer(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(ValidatedNumber, { ...props });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/number.mjs
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
function Number2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(ValidatedNumber, { ...props });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/radio.mjs
var import_components13 = __toESM(require_components(), 1);
var import_element76 = __toESM(require_element(), 1);
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var { ValidatedRadioControl } = unlock2(import_components13.privateApis);
function Radio({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { label, description, getValue, setValue, isValid: isValid2 } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  const value = getValue({ item: data });
  const onChangeControl = (0, import_element76.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(import_components13.Spinner, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(
    ValidatedRadioControl,
    {
      required: !!field.isValid?.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      help: description,
      onChange: onChangeControl,
      options: elements,
      selected: value,
      hideLabelFromVision,
      disabled: disabled3
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/text.mjs
var import_element77 = __toESM(require_element(), 1);
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
function Text5({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  config,
  validity
}) {
  const { prefix, suffix } = config || {};
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        markWhenOptional,
        validity,
        prefix: prefix ? (0, import_element77.createElement)(prefix) : void 0,
        suffix: suffix ? (0, import_element77.createElement)(suffix) : void 0
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/toggle.mjs
var import_components14 = __toESM(require_components(), 1);
var import_element78 = __toESM(require_element(), 1);
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var { ValidatedToggleControl } = unlock2(import_components14.privateApis);
function Toggle({
  field,
  onChange,
  data,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { label, description, getValue, setValue, isValid: isValid2 } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const onChangeControl = (0, import_element78.useCallback)(() => {
    onChange(
      setValue({ item: data, value: !getValue({ item: data }) })
    );
  }, [onChange, setValue, data, getValue]);
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
    ValidatedToggleControl,
    {
      required: !!isValid2.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      hidden: hideLabelFromVision,
      label,
      help: description,
      checked: getValue({ item: data }),
      onChange: onChangeControl,
      disabled: disabled3
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/textarea.mjs
var import_components15 = __toESM(require_components(), 1);
var import_element79 = __toESM(require_element(), 1);
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var { ValidatedTextareaControl } = unlock2(import_components15.privateApis);
function Textarea({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  config,
  validity
}) {
  const { rows = 4 } = config || {};
  const disabled3 = field.isDisabled({ item: data, field });
  const { label, placeholder, description, setValue, isValid: isValid2 } = field;
  const value = field.getValue({ item: data });
  const onChangeControl = (0, import_element79.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
    ValidatedTextareaControl,
    {
      required: !!isValid2.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      placeholder,
      value: value ?? "",
      help: description,
      onChange: onChangeControl,
      rows,
      disabled: disabled3,
      minLength: isValid2.minLength ? isValid2.minLength.constraint : void 0,
      maxLength: isValid2.maxLength ? isValid2.maxLength.constraint : void 0,
      __next40pxDefaultSize: true,
      hideLabelFromVision
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/toggle-group.mjs
var import_components16 = __toESM(require_components(), 1);
var import_element80 = __toESM(require_element(), 1);
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var { ValidatedToggleGroupControl } = unlock2(import_components16.privateApis);
function ToggleGroup({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { getValue, setValue, isValid: isValid2 } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const value = getValue({ item: data });
  const onChangeControl = (0, import_element80.useCallback)(
    (newValue) => onChange(setValue({ item: data, value: newValue })),
    [data, onChange, setValue]
  );
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(import_components16.Spinner, {});
  }
  if (elements.length === 0) {
    return null;
  }
  const selectedOption = elements.find((el) => el.value === value);
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
    ValidatedToggleGroupControl,
    {
      required: !!field.isValid?.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      __next40pxDefaultSize: true,
      isBlock: true,
      label: field.label,
      help: selectedOption?.description || field.description,
      onChange: onChangeControl,
      value,
      hideLabelFromVision,
      children: elements.map((el) => /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
        import_components16.__experimentalToggleGroupControlOption,
        {
          label: el.label,
          value: el.value,
          disabled: disabled3
        },
        el.value
      ))
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/array.mjs
var import_components17 = __toESM(require_components(), 1);
var import_element81 = __toESM(require_element(), 1);
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var { ValidatedFormTokenField } = unlock2(import_components17.privateApis);
function ArrayControl({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { label, placeholder, description, getValue, setValue, isValid: isValid2 } = field;
  const value = getValue({ item: data });
  const disabled3 = field.isDisabled({ item: data, field });
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  const arrayValueAsElements = (0, import_element81.useMemo)(
    () => Array.isArray(value) ? value.map((token) => {
      const element = elements?.find(
        (suggestion) => suggestion.value === token
      );
      return element || { value: token, label: token };
    }) : [],
    [value, elements]
  );
  const onChangeControl = (0, import_element81.useCallback)(
    (tokens) => {
      const valueTokens = tokens.map((token) => {
        if (typeof token === "object" && "value" in token) {
          return token.value;
        }
        return token;
      });
      onChange(setValue({ item: data, value: valueTokens }));
    },
    [onChange, setValue, data]
  );
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(import_components17.Spinner, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
    ValidatedFormTokenField,
    {
      required: !!isValid2?.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      label: hideLabelFromVision ? void 0 : label,
      value: arrayValueAsElements,
      onChange: onChangeControl,
      placeholder,
      suggestions: elements?.map((element) => element.value),
      disabled: disabled3,
      __experimentalValidateInput: (token) => {
        if (field.isValid?.elements && elements) {
          return elements.some(
            (element) => element.value === token || element.label === token
          );
        }
        return true;
      },
      __experimentalExpandOnFocus: elements && elements.length > 0,
      help: description ?? (field.isValid?.elements ? "" : void 0),
      displayTransform: (token) => {
        if (typeof token === "object" && "label" in token) {
          return token.label;
        }
        if (typeof token === "string" && elements) {
          const element = elements.find(
            (el) => el.value === token
          );
          return element?.label || token;
        }
        return token;
      },
      __experimentalRenderItem: ({ item }) => {
        if (typeof item === "string" && elements) {
          const element = elements.find(
            (el) => el.value === item
          );
          return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: element?.label || item });
        }
        return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)("span", { children: item });
      }
    }
  );
}

// node_modules/colord/index.mjs
var r2 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t = function(r3) {
  return "string" == typeof r3 ? r3.length > 0 : "number" == typeof r3;
};
var n = function(r3, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = Math.pow(10, t2)), Math.round(n2 * r3) / n2 + 0;
};
var e = function(r3, t2, n2) {
  return void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = 1), r3 > n2 ? n2 : r3 > t2 ? r3 : t2;
};
var u = function(r3) {
  return (r3 = isFinite(r3) ? r3 % 360 : 0) > 0 ? r3 : r3 + 360;
};
var a = function(r3) {
  return { r: e(r3.r, 0, 255), g: e(r3.g, 0, 255), b: e(r3.b, 0, 255), a: e(r3.a) };
};
var o = function(r3) {
  return { r: n(r3.r), g: n(r3.g), b: n(r3.b), a: n(r3.a, 3) };
};
var i = /^#([0-9a-f]{3,8})$/i;
var s = function(r3) {
  var t2 = r3.toString(16);
  return t2.length < 2 ? "0" + t2 : t2;
};
var h = function(r3) {
  var t2 = r3.r, n2 = r3.g, e2 = r3.b, u2 = r3.a, a2 = Math.max(t2, n2, e2), o2 = a2 - Math.min(t2, n2, e2), i2 = o2 ? a2 === t2 ? (n2 - e2) / o2 : a2 === n2 ? 2 + (e2 - t2) / o2 : 4 + (t2 - n2) / o2 : 0;
  return { h: 60 * (i2 < 0 ? i2 + 6 : i2), s: a2 ? o2 / a2 * 100 : 0, v: a2 / 255 * 100, a: u2 };
};
var b = function(r3) {
  var t2 = r3.h, n2 = r3.s, e2 = r3.v, u2 = r3.a;
  t2 = t2 / 360 * 6, n2 /= 100, e2 /= 100;
  var a2 = Math.floor(t2), o2 = e2 * (1 - n2), i2 = e2 * (1 - (t2 - a2) * n2), s2 = e2 * (1 - (1 - t2 + a2) * n2), h2 = a2 % 6;
  return { r: 255 * [e2, i2, o2, o2, s2, e2][h2], g: 255 * [s2, e2, e2, i2, o2, o2][h2], b: 255 * [o2, o2, s2, e2, e2, i2][h2], a: u2 };
};
var g = function(r3) {
  return { h: u(r3.h), s: e(r3.s, 0, 100), l: e(r3.l, 0, 100), a: e(r3.a) };
};
var d = function(r3) {
  return { h: n(r3.h), s: n(r3.s), l: n(r3.l), a: n(r3.a, 3) };
};
var f = function(r3) {
  return b((n2 = (t2 = r3).s, { h: t2.h, s: (n2 *= ((e2 = t2.l) < 50 ? e2 : 100 - e2) / 100) > 0 ? 2 * n2 / (e2 + n2) * 100 : 0, v: e2 + n2, a: t2.a }));
  var t2, n2, e2;
};
var c = function(r3) {
  return { h: (t2 = h(r3)).h, s: (u2 = (200 - (n2 = t2.s)) * (e2 = t2.v) / 100) > 0 && u2 < 200 ? n2 * e2 / 100 / (u2 <= 100 ? u2 : 200 - u2) * 100 : 0, l: u2 / 2, a: t2.a };
  var t2, n2, e2, u2;
};
var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y = { string: [[function(r3) {
  var t2 = i.exec(r3);
  return t2 ? (r3 = t2[1]).length <= 4 ? { r: parseInt(r3[0] + r3[0], 16), g: parseInt(r3[1] + r3[1], 16), b: parseInt(r3[2] + r3[2], 16), a: 4 === r3.length ? n(parseInt(r3[3] + r3[3], 16) / 255, 2) : 1 } : 6 === r3.length || 8 === r3.length ? { r: parseInt(r3.substr(0, 2), 16), g: parseInt(r3.substr(2, 2), 16), b: parseInt(r3.substr(4, 2), 16), a: 8 === r3.length ? n(parseInt(r3.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r3) {
  var t2 = v.exec(r3) || m.exec(r3);
  return t2 ? t2[2] !== t2[4] || t2[4] !== t2[6] ? null : a({ r: Number(t2[1]) / (t2[2] ? 100 / 255 : 1), g: Number(t2[3]) / (t2[4] ? 100 / 255 : 1), b: Number(t2[5]) / (t2[6] ? 100 / 255 : 1), a: void 0 === t2[7] ? 1 : Number(t2[7]) / (t2[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t2) {
  var n2 = l.exec(t2) || p.exec(t2);
  if (!n2) return null;
  var e2, u2, a2 = g({ h: (e2 = n2[1], u2 = n2[2], void 0 === u2 && (u2 = "deg"), Number(e2) * (r2[u2] || 1)), s: Number(n2[3]), l: Number(n2[4]), a: void 0 === n2[5] ? 1 : Number(n2[5]) / (n2[6] ? 100 : 1) });
  return f(a2);
}, "hsl"]], object: [[function(r3) {
  var n2 = r3.r, e2 = r3.g, u2 = r3.b, o2 = r3.a, i2 = void 0 === o2 ? 1 : o2;
  return t(n2) && t(e2) && t(u2) ? a({ r: Number(n2), g: Number(e2), b: Number(u2), a: Number(i2) }) : null;
}, "rgb"], [function(r3) {
  var n2 = r3.h, e2 = r3.s, u2 = r3.l, a2 = r3.a, o2 = void 0 === a2 ? 1 : a2;
  if (!t(n2) || !t(e2) || !t(u2)) return null;
  var i2 = g({ h: Number(n2), s: Number(e2), l: Number(u2), a: Number(o2) });
  return f(i2);
}, "hsl"], [function(r3) {
  var n2 = r3.h, a2 = r3.s, o2 = r3.v, i2 = r3.a, s2 = void 0 === i2 ? 1 : i2;
  if (!t(n2) || !t(a2) || !t(o2)) return null;
  var h2 = (function(r4) {
    return { h: u(r4.h), s: e(r4.s, 0, 100), v: e(r4.v, 0, 100), a: e(r4.a) };
  })({ h: Number(n2), s: Number(a2), v: Number(o2), a: Number(s2) });
  return b(h2);
}, "hsv"]] };
var N = function(r3, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var e2 = t2[n2][0](r3);
    if (e2) return [e2, t2[n2][1]];
  }
  return [null, void 0];
};
var x = function(r3) {
  return "string" == typeof r3 ? N(r3.trim(), y.string) : "object" == typeof r3 && null !== r3 ? N(r3, y.object) : [null, void 0];
};
var M = function(r3, t2) {
  var n2 = c(r3);
  return { h: n2.h, s: e(n2.s + 100 * t2, 0, 100), l: n2.l, a: n2.a };
};
var H = function(r3) {
  return (299 * r3.r + 587 * r3.g + 114 * r3.b) / 1e3 / 255;
};
var $ = function(r3, t2) {
  var n2 = c(r3);
  return { h: n2.h, s: n2.s, l: e(n2.l + 100 * t2, 0, 100), a: n2.a };
};
var j = (function() {
  function r3(r4) {
    this.parsed = x(r4)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r3.prototype.isValid = function() {
    return null !== this.parsed;
  }, r3.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r3.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r3.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r3.prototype.toHex = function() {
    return r4 = o(this.rgba), t2 = r4.r, e2 = r4.g, u2 = r4.b, i2 = (a2 = r4.a) < 1 ? s(n(255 * a2)) : "", "#" + s(t2) + s(e2) + s(u2) + i2;
    var r4, t2, e2, u2, a2, i2;
  }, r3.prototype.toRgb = function() {
    return o(this.rgba);
  }, r3.prototype.toRgbString = function() {
    return r4 = o(this.rgba), t2 = r4.r, n2 = r4.g, e2 = r4.b, (u2 = r4.a) < 1 ? "rgba(" + t2 + ", " + n2 + ", " + e2 + ", " + u2 + ")" : "rgb(" + t2 + ", " + n2 + ", " + e2 + ")";
    var r4, t2, n2, e2, u2;
  }, r3.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r3.prototype.toHslString = function() {
    return r4 = d(c(this.rgba)), t2 = r4.h, n2 = r4.s, e2 = r4.l, (u2 = r4.a) < 1 ? "hsla(" + t2 + ", " + n2 + "%, " + e2 + "%, " + u2 + ")" : "hsl(" + t2 + ", " + n2 + "%, " + e2 + "%)";
    var r4, t2, n2, e2, u2;
  }, r3.prototype.toHsv = function() {
    return r4 = h(this.rgba), { h: n(r4.h), s: n(r4.s), v: n(r4.v), a: n(r4.a, 3) };
    var r4;
  }, r3.prototype.invert = function() {
    return w({ r: 255 - (r4 = this.rgba).r, g: 255 - r4.g, b: 255 - r4.b, a: r4.a });
    var r4;
  }, r3.prototype.saturate = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w(M(this.rgba, r4));
  }, r3.prototype.desaturate = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w(M(this.rgba, -r4));
  }, r3.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r3.prototype.lighten = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w($(this.rgba, r4));
  }, r3.prototype.darken = function(r4) {
    return void 0 === r4 && (r4 = 0.1), w($(this.rgba, -r4));
  }, r3.prototype.rotate = function(r4) {
    return void 0 === r4 && (r4 = 15), this.hue(this.hue() + r4);
  }, r3.prototype.alpha = function(r4) {
    return "number" == typeof r4 ? w({ r: (t2 = this.rgba).r, g: t2.g, b: t2.b, a: r4 }) : n(this.rgba.a, 3);
    var t2;
  }, r3.prototype.hue = function(r4) {
    var t2 = c(this.rgba);
    return "number" == typeof r4 ? w({ h: r4, s: t2.s, l: t2.l, a: t2.a }) : n(t2.h);
  }, r3.prototype.isEqual = function(r4) {
    return this.toHex() === w(r4).toHex();
  }, r3;
})();
var w = function(r3) {
  return r3 instanceof j ? r3 : new j(r3);
};

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/color.mjs
var import_components18 = __toESM(require_components(), 1);
var import_element82 = __toESM(require_element(), 1);
var import_i18n10 = __toESM(require_i18n(), 1);
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
var { ValidatedInputControl: ValidatedInputControl3 } = unlock2(import_components18.privateApis);
var ColorPickerDropdown = ({
  color,
  onColorChange,
  disabled: disabled3
}) => {
  const validColor = color && w(color).isValid() ? color : "#ffffff";
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
    import_components18.Dropdown,
    {
      className: "dataviews-controls__color-picker-dropdown",
      popoverProps: { resize: false },
      renderToggle: ({ onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
        import_components18.Button,
        {
          onClick: onToggle,
          "aria-label": (0, import_i18n10.__)("Open color picker"),
          size: "small",
          disabled: disabled3,
          accessibleWhenDisabled: true,
          icon: () => /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_components18.ColorIndicator, { colorValue: validColor })
        }
      ),
      renderContent: () => /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_components18.__experimentalDropdownContentWrapper, { paddingSize: "none", children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
        import_components18.ColorPicker,
        {
          color: validColor,
          onChange: onColorChange,
          enableAlpha: true
        }
      ) })
    }
  );
};
function Color({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { label, placeholder, description, setValue, isValid: isValid2 } = field;
  const disabled3 = field.isDisabled({ item: data, field });
  const value = field.getValue({ item: data }) || "";
  const handleColorChange = (0, import_element82.useCallback)(
    (newColor) => {
      onChange(setValue({ item: data, value: newColor }));
    },
    [data, onChange, setValue]
  );
  const handleInputChange = (0, import_element82.useCallback)(
    (newValue) => {
      onChange(setValue({ item: data, value: newValue || "" }));
    },
    [data, onChange, setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
    ValidatedInputControl3,
    {
      required: !!field.isValid?.required,
      markWhenOptional,
      customValidity: getCustomValidity(isValid2, validity),
      label,
      placeholder,
      value,
      help: description,
      onChange: handleInputChange,
      hideLabelFromVision,
      type: "text",
      disabled: disabled3,
      prefix: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_components18.__experimentalInputControlPrefixWrapper, { variant: "control", children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
        ColorPickerDropdown,
        {
          color: value,
          onColorChange: handleColorChange,
          disabled: disabled3
        }
      ) })
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/password.mjs
var import_components19 = __toESM(require_components(), 1);
var import_element83 = __toESM(require_element(), 1);
var import_i18n11 = __toESM(require_i18n(), 1);
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
function Password({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const [isVisible, setIsVisible] = (0, import_element83.useState)(false);
  const disabled3 = field.isDisabled({ item: data, field });
  const toggleVisibility = (0, import_element83.useCallback)(() => {
    setIsVisible((prev) => !prev);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
    ValidatedText,
    {
      ...{
        data,
        field,
        onChange,
        hideLabelFromVision,
        markWhenOptional,
        validity,
        type: isVisible ? "text" : "password",
        suffix: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(import_components19.__experimentalInputControlSuffixWrapper, { variant: "control", children: /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
          import_components19.Button,
          {
            icon: isVisible ? unseen_default : seen_default,
            onClick: toggleVisibility,
            size: "small",
            label: isVisible ? (0, import_i18n11.__)("Hide password") : (0, import_i18n11.__)("Show password"),
            disabled: disabled3,
            accessibleWhenDisabled: true
          }
        ) })
      }
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/has-elements.mjs
function hasElements(field) {
  return Array.isArray(field.elements) && field.elements.length > 0 || typeof field.getElements === "function";
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-controls/index.mjs
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var FORM_CONTROLS = {
  adaptiveSelect: AdaptiveSelect,
  array: ArrayControl,
  checkbox: Checkbox,
  color: Color,
  combobox: Combobox,
  datetime: DateTime,
  date: DateControl,
  email: Email,
  telephone: Telephone,
  url: Url,
  integer: Integer,
  number: Number2,
  password: Password,
  radio: Radio,
  select: Select,
  text: Text5,
  toggle: Toggle,
  textarea: Textarea,
  toggleGroup: ToggleGroup
};
function isEditConfig(value) {
  return value && typeof value === "object" && typeof value.control === "string";
}
function createConfiguredControl(config) {
  const { control, ...controlConfig } = config;
  const BaseControlType = getControlByType(control);
  if (BaseControlType === null) {
    return null;
  }
  return function ConfiguredControl(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(BaseControlType, { ...props, config: controlConfig });
  };
}
function getControl(field, fallback) {
  if (typeof field.Edit === "function") {
    return field.Edit;
  }
  if (typeof field.Edit === "string") {
    return getControlByType(field.Edit);
  }
  if (isEditConfig(field.Edit)) {
    return createConfiguredControl(field.Edit);
  }
  if (hasElements(field) && field.type !== "array") {
    return getControlByType("adaptiveSelect");
  }
  if (fallback === null) {
    return null;
  }
  return getControlByType(fallback);
}
function getControlByType(type) {
  if (Object.keys(FORM_CONTROLS).includes(type)) {
    return FORM_CONTROLS[type];
  }
  return null;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-filter-by.mjs
function getFilterBy(field, defaultOperators, validOperators) {
  if (field.filterBy === false) {
    return false;
  }
  const operators = field.filterBy?.operators?.filter(
    (op) => validOperators.includes(op)
  ) ?? defaultOperators;
  if (operators.length === 0) {
    return false;
  }
  return {
    isPrimary: !!field.filterBy?.isPrimary,
    operators
  };
}
var get_filter_by_default = getFilterBy;

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-value-from-id.mjs
var getValueFromId = (id) => ({ item }) => {
  const path = id.split(".");
  let value = item;
  for (const segment of path) {
    if (value.hasOwnProperty(segment)) {
      value = value[segment];
    } else {
      value = void 0;
    }
  }
  return value;
};
var get_value_from_id_default = getValueFromId;

// node_modules/@wordpress/dataviews/build-module/field-types/utils/set-value-from-id.mjs
var setValueFromId = (id) => ({ value }) => {
  const path = id.split(".");
  const result = {};
  let current = result;
  for (const segment of path.slice(0, -1)) {
    current[segment] = {};
    current = current[segment];
  }
  current[path.at(-1)] = value;
  return result;
};
var set_value_from_id_default = setValueFromId;

// node_modules/@wordpress/dataviews/build-module/field-types/email.mjs
var import_i18n12 = __toESM(require_i18n(), 1);

// node_modules/@wordpress/dataviews/build-module/field-types/utils/render-from-elements.mjs
function RenderFromElements({
  item,
  field
}) {
  const { elements, isLoading } = useElements({
    elements: field.elements,
    getElements: field.getElements
  });
  const value = field.getValue({ item });
  if (isLoading) {
    return value;
  }
  if (elements.length === 0) {
    return value;
  }
  return elements?.find((element) => element.value === value)?.label || field.getValue({ item });
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/render-default.mjs
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
function render({
  item,
  field
}) {
  if (field.hasElements) {
    return /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(RenderFromElements, { item, field });
  }
  return field.getValueFormatted({ item, field });
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/sort-text.mjs
var sort_text_default = (a2, b2, direction) => {
  return direction === "asc" ? a2.localeCompare(b2) : b2.localeCompare(a2);
};

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-required.mjs
function isValidRequired(item, field) {
  const value = field.getValue({ item });
  return ![void 0, "", null].includes(value);
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-min-length.mjs
function isValidMinLength(item, field) {
  if (typeof field.isValid.minLength?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return String(value).length >= field.isValid.minLength.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-max-length.mjs
function isValidMaxLength(item, field) {
  if (typeof field.isValid.maxLength?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return String(value).length <= field.isValid.maxLength.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-pattern.mjs
function isValidPattern(item, field) {
  if (field.isValid.pattern?.constraint === void 0) {
    return true;
  }
  try {
    const regexp = new RegExp(field.isValid.pattern.constraint);
    const value = field.getValue({ item });
    if ([void 0, "", null].includes(value)) {
      return true;
    }
    return regexp.test(String(value));
  } catch {
    return false;
  }
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-elements.mjs
function isValidElements(item, field) {
  const elements = field.elements ?? [];
  const validValues = elements.map((el) => el.value);
  if (validValues.length === 0) {
    return true;
  }
  const value = field.getValue({ item });
  return [].concat(value).every((v2) => validValues.includes(v2));
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-value-formatted-default.mjs
function getValueFormatted({
  item,
  field
}) {
  return field.getValue({ item });
}
var get_value_formatted_default_default = getValueFormatted;

// node_modules/@wordpress/dataviews/build-module/field-types/email.mjs
var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
function isValidCustom(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !emailRegex.test(value)) {
    return (0, import_i18n12.__)("Value must be a valid email address.");
  }
  return null;
}
var email_default = {
  type: "email",
  render,
  Edit: "email",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  format: {},
  getValueFormatted: get_value_formatted_default_default,
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements,
    custom: isValidCustom
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/integer.mjs
var import_i18n13 = __toESM(require_i18n(), 1);

// node_modules/@wordpress/dataviews/build-module/field-types/utils/sort-number.mjs
var sort_number_default = (a2, b2, direction) => {
  return direction === "asc" ? a2 - b2 : b2 - a2;
};

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-min.mjs
function isValidMin(item, field) {
  if (typeof field.isValid.min?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return Number(value) >= field.isValid.min.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-max.mjs
function isValidMax(item, field) {
  if (typeof field.isValid.max?.constraint !== "number") {
    return false;
  }
  const value = field.getValue({ item });
  if ([void 0, "", null].includes(value)) {
    return true;
  }
  return Number(value) <= field.isValid.max.constraint;
}

// node_modules/@wordpress/dataviews/build-module/field-types/integer.mjs
var format2 = {
  separatorThousand: ","
};
function getValueFormatted2({
  item,
  field
}) {
  let value = field.getValue({ item });
  if (value === null || value === void 0) {
    return "";
  }
  value = Number(value);
  if (!Number.isFinite(value)) {
    return String(value);
  }
  let formatInteger;
  if (field.type !== "integer") {
    formatInteger = format2;
  } else {
    formatInteger = field.format;
  }
  const { separatorThousand } = formatInteger;
  const integerValue = Math.trunc(value);
  if (!separatorThousand) {
    return String(integerValue);
  }
  return String(integerValue).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    separatorThousand
  );
}
function isValidCustom2(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !Number.isInteger(value)) {
    return (0, import_i18n13.__)("Value must be an integer.");
  }
  return null;
}
var integer_default = {
  type: "integer",
  render,
  Edit: "integer",
  sort: sort_number_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN
  ],
  validOperators: [
    // Single-selection
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN,
    // Multiple-selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  format: format2,
  getValueFormatted: getValueFormatted2,
  validate: {
    required: isValidRequired,
    min: isValidMin,
    max: isValidMax,
    elements: isValidElements,
    custom: isValidCustom2
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/number.mjs
var import_i18n14 = __toESM(require_i18n(), 1);
var format3 = {
  separatorThousand: ",",
  separatorDecimal: ".",
  decimals: 2
};
function getValueFormatted3({
  item,
  field
}) {
  let value = field.getValue({ item });
  if (value === null || value === void 0) {
    return "";
  }
  value = Number(value);
  if (!Number.isFinite(value)) {
    return String(value);
  }
  let formatNumber;
  if (field.type !== "number") {
    formatNumber = format3;
  } else {
    formatNumber = field.format;
  }
  const { separatorThousand, separatorDecimal, decimals } = formatNumber;
  const fixedValue = value.toFixed(decimals);
  const [integerPart, decimalPart] = fixedValue.split(".");
  const formattedInteger = separatorThousand ? integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separatorThousand) : integerPart;
  return decimals === 0 ? formattedInteger : formattedInteger + separatorDecimal + decimalPart;
}
function isEmpty(value) {
  return value === "" || value === void 0 || value === null;
}
function isValidCustom3(item, field) {
  const value = field.getValue({ item });
  if (!isEmpty(value) && !Number.isFinite(value)) {
    return (0, import_i18n14.__)("Value must be a number.");
  }
  return null;
}
var number_default = {
  type: "number",
  render,
  Edit: "number",
  sort: sort_number_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN
  ],
  validOperators: [
    // Single-selection
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_LESS_THAN,
    OPERATOR_GREATER_THAN,
    OPERATOR_LESS_THAN_OR_EQUAL,
    OPERATOR_GREATER_THAN_OR_EQUAL,
    OPERATOR_BETWEEN,
    // Multiple-selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  format: format3,
  getValueFormatted: getValueFormatted3,
  validate: {
    required: isValidRequired,
    min: isValidMin,
    max: isValidMax,
    elements: isValidElements,
    custom: isValidCustom3
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/text.mjs
var text_default = {
  type: "text",
  render,
  Edit: "text",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    // Single selection
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  format: {},
  getValueFormatted: get_value_formatted_default_default,
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/datetime.mjs
var import_date7 = __toESM(require_date(), 1);

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-date-boundary.mjs
var import_date6 = __toESM(require_date(), 1);
function parseDateLike(value) {
  if (!value) {
    return null;
  }
  if (!isValid(new Date(value))) {
    return null;
  }
  const parsed = (0, import_date6.getDate)(value);
  return parsed && isValid(parsed) ? parsed : null;
}
function validateDateLikeBoundary(item, field, boundary) {
  const constraint = field.isValid[boundary]?.constraint;
  if (typeof constraint !== "string") {
    return false;
  }
  const value = field.getValue({ item });
  const boundaryValue = Array.isArray(value) ? value[boundary === "min" ? 0 : value.length - 1] : value;
  if (boundaryValue === void 0 || boundaryValue === null || boundaryValue === "") {
    return true;
  }
  const parsedConstraint = parseDateLike(constraint);
  const parsedValue = parseDateLike(String(boundaryValue));
  return !!parsedConstraint && !!parsedValue && (boundary === "min" ? parsedValue.getTime() >= parsedConstraint.getTime() : parsedValue.getTime() <= parsedConstraint.getTime());
}
function isValidMinDate(item, field) {
  return validateDateLikeBoundary(item, field, "min");
}
function isValidMaxDate(item, field) {
  return validateDateLikeBoundary(item, field, "max");
}

// node_modules/@wordpress/dataviews/build-module/field-types/datetime.mjs
var format4 = {
  datetime: (0, import_date7.getSettings)().formats.datetime,
  weekStartsOn: (0, import_date7.getSettings)().l10n.startOfWeek
};
function getValueFormatted4({
  item,
  field
}) {
  const value = field.getValue({ item });
  if (["", void 0, null].includes(value)) {
    return "";
  }
  let formatDatetime;
  if (field.type !== "datetime") {
    formatDatetime = format4;
  } else {
    formatDatetime = field.format;
  }
  return (0, import_date7.dateI18n)(formatDatetime.datetime, (0, import_date7.getDate)(value));
}
var sort = (a2, b2, direction) => {
  const timeA = new Date(a2).getTime();
  const timeB = new Date(b2).getTime();
  return direction === "asc" ? timeA - timeB : timeB - timeA;
};
var datetime_default = {
  type: "datetime",
  render,
  Edit: "datetime",
  sort,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER
  ],
  validOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER
  ],
  format: format4,
  getValueFormatted: getValueFormatted4,
  validate: {
    required: isValidRequired,
    elements: isValidElements,
    min: isValidMinDate,
    max: isValidMaxDate
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/date.mjs
var import_date8 = __toESM(require_date(), 1);
var format5 = {
  date: (0, import_date8.getSettings)().formats.date,
  weekStartsOn: (0, import_date8.getSettings)().l10n.startOfWeek
};
function getValueFormatted5({
  item,
  field
}) {
  const value = field.getValue({ item });
  if (["", void 0, null].includes(value)) {
    return "";
  }
  let formatDate2;
  if (field.type !== "date") {
    formatDate2 = format5;
  } else {
    formatDate2 = field.format;
  }
  return (0, import_date8.dateI18n)(formatDate2.date, (0, import_date8.getDate)(value));
}
var sort2 = (a2, b2, direction) => {
  const timeA = new Date(a2).getTime();
  const timeB = new Date(b2).getTime();
  return direction === "asc" ? timeA - timeB : timeB - timeA;
};
var date_default = {
  type: "date",
  render,
  Edit: "date",
  sort: sort2,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER,
    OPERATOR_BETWEEN
  ],
  validOperators: [
    OPERATOR_ON,
    OPERATOR_NOT_ON,
    OPERATOR_BEFORE,
    OPERATOR_AFTER,
    OPERATOR_BEFORE_INC,
    OPERATOR_AFTER_INC,
    OPERATOR_IN_THE_PAST,
    OPERATOR_OVER,
    OPERATOR_BETWEEN
  ],
  format: format5,
  getValueFormatted: getValueFormatted5,
  validate: {
    required: isValidRequired,
    elements: isValidElements,
    min: isValidMinDate,
    max: isValidMaxDate
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/boolean.mjs
var import_i18n15 = __toESM(require_i18n(), 1);

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-required-for-bool.mjs
function isValidRequiredForBool(item, field) {
  const value = field.getValue({ item });
  return value === true;
}

// node_modules/@wordpress/dataviews/build-module/field-types/boolean.mjs
function getValueFormatted6({
  item,
  field
}) {
  const value = field.getValue({ item });
  if (value === true) {
    return (0, import_i18n15.__)("True");
  }
  if (value === false) {
    return (0, import_i18n15.__)("False");
  }
  return "";
}
function isValidCustom4(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && ![true, false].includes(value)) {
    return (0, import_i18n15.__)("Value must be true, false, or undefined");
  }
  return null;
}
var sort3 = (a2, b2, direction) => {
  const boolA = Boolean(a2);
  const boolB = Boolean(b2);
  if (boolA === boolB) {
    return 0;
  }
  if (direction === "asc") {
    return boolA ? 1 : -1;
  }
  return boolA ? -1 : 1;
};
var boolean_default = {
  type: "boolean",
  render,
  Edit: "checkbox",
  sort: sort3,
  validate: {
    required: isValidRequiredForBool,
    elements: isValidElements,
    custom: isValidCustom4
  },
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS, OPERATOR_IS_NOT],
  validOperators: [OPERATOR_IS, OPERATOR_IS_NOT],
  format: {},
  getValueFormatted: getValueFormatted6
};

// node_modules/@wordpress/dataviews/build-module/field-types/media.mjs
var media_default = {
  type: "media",
  render: () => null,
  Edit: null,
  sort: () => 0,
  enableSorting: false,
  enableGlobalSearch: false,
  defaultOperators: [],
  validOperators: [],
  format: {},
  getValueFormatted: get_value_formatted_default_default,
  // cannot validate any constraint, so
  // the only available validation for the field author
  // would be providing a custom validator.
  validate: {}
};

// node_modules/@wordpress/dataviews/build-module/field-types/array.mjs
var import_i18n16 = __toESM(require_i18n(), 1);

// node_modules/@wordpress/dataviews/build-module/field-types/utils/is-valid-required-for-array.mjs
function isValidRequiredForArray(item, field) {
  const value = field.getValue({ item });
  return Array.isArray(value) && value.length > 0 && value.every(
    (element) => ![void 0, "", null].includes(element)
  );
}

// node_modules/@wordpress/dataviews/build-module/field-types/array.mjs
function getValueFormatted7({
  item,
  field
}) {
  const value = field.getValue({ item });
  const arr = Array.isArray(value) ? value : [];
  return arr.join(", ");
}
function render2({ item, field }) {
  return getValueFormatted7({ item, field });
}
function isValidCustom5(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !Array.isArray(value)) {
    return (0, import_i18n16.__)("Value must be an array.");
  }
  if (!value.every((v2) => typeof v2 === "string")) {
    return (0, import_i18n16.__)("Every value must be a string.");
  }
  return null;
}
var sort4 = (a2, b2, direction) => {
  const arrA = Array.isArray(a2) ? a2 : [];
  const arrB = Array.isArray(b2) ? b2 : [];
  if (arrA.length !== arrB.length) {
    return direction === "asc" ? arrA.length - arrB.length : arrB.length - arrA.length;
  }
  const joinedA = arrA.join(",");
  const joinedB = arrB.join(",");
  return direction === "asc" ? joinedA.localeCompare(joinedB) : joinedB.localeCompare(joinedA);
};
var array_default = {
  type: "array",
  render: render2,
  Edit: "array",
  sort: sort4,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  format: {},
  getValueFormatted: getValueFormatted7,
  validate: {
    required: isValidRequiredForArray,
    elements: isValidElements,
    custom: isValidCustom5
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/password.mjs
function getValueFormatted8({
  item,
  field
}) {
  return field.getValue({ item }) ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "";
}
var password_default = {
  type: "password",
  render,
  Edit: "password",
  sort: () => 0,
  // Passwords should not be sortable for security reasons
  enableSorting: false,
  enableGlobalSearch: false,
  defaultOperators: [],
  validOperators: [],
  format: {},
  getValueFormatted: getValueFormatted8,
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/telephone.mjs
var telephone_default = {
  type: "telephone",
  render,
  Edit: "telephone",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  format: {},
  getValueFormatted: get_value_formatted_default_default,
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/color.mjs
var import_i18n17 = __toESM(require_i18n(), 1);
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);
function render3({ item, field }) {
  if (field.hasElements) {
    return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(RenderFromElements, { item, field });
  }
  const value = get_value_formatted_default_default({ item, field });
  if (!value || !w(value).isValid()) {
    return value;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
      "div",
      {
        style: {
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: value,
          border: "1px solid #ddd",
          flexShrink: 0
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime98.jsx)("span", { children: value })
  ] });
}
function isValidCustom6(item, field) {
  const value = field.getValue({ item });
  if (![void 0, "", null].includes(value) && !w(value).isValid()) {
    return (0, import_i18n17.__)("Value must be a valid color.");
  }
  return null;
}
var sort5 = (a2, b2, direction) => {
  const colorA = w(a2);
  const colorB = w(b2);
  if (!colorA.isValid() && !colorB.isValid()) {
    return 0;
  }
  if (!colorA.isValid()) {
    return direction === "asc" ? 1 : -1;
  }
  if (!colorB.isValid()) {
    return direction === "asc" ? -1 : 1;
  }
  const hslA = colorA.toHsl();
  const hslB = colorB.toHsl();
  if (hslA.h !== hslB.h) {
    return direction === "asc" ? hslA.h - hslB.h : hslB.h - hslA.h;
  }
  if (hslA.s !== hslB.s) {
    return direction === "asc" ? hslA.s - hslB.s : hslB.s - hslA.s;
  }
  return direction === "asc" ? hslA.l - hslB.l : hslB.l - hslA.l;
};
var color_default = {
  type: "color",
  render: render3,
  Edit: "color",
  sort: sort5,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE
  ],
  format: {},
  getValueFormatted: get_value_formatted_default_default,
  validate: {
    required: isValidRequired,
    elements: isValidElements,
    custom: isValidCustom6
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/url.mjs
var url_default = {
  type: "url",
  render,
  Edit: "url",
  sort: sort_text_default,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS_ANY, OPERATOR_IS_NONE],
  validOperators: [
    OPERATOR_IS,
    OPERATOR_IS_NOT,
    OPERATOR_CONTAINS,
    OPERATOR_NOT_CONTAINS,
    OPERATOR_STARTS_WITH,
    // Multiple selection
    OPERATOR_IS_ANY,
    OPERATOR_IS_NONE,
    OPERATOR_IS_ALL,
    OPERATOR_IS_NOT_ALL
  ],
  format: {},
  getValueFormatted: get_value_formatted_default_default,
  validate: {
    required: isValidRequired,
    pattern: isValidPattern,
    minLength: isValidMinLength,
    maxLength: isValidMaxLength,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/no-type.mjs
var sort6 = (a2, b2, direction) => {
  if (typeof a2 === "number" && typeof b2 === "number") {
    return sort_number_default(a2, b2, direction);
  }
  return sort_text_default(a2, b2, direction);
};
var no_type_default = {
  // type: no type for this one
  render,
  Edit: null,
  sort: sort6,
  enableSorting: true,
  enableGlobalSearch: false,
  defaultOperators: [OPERATOR_IS, OPERATOR_IS_NOT],
  validOperators: getAllOperatorNames(),
  format: {},
  getValueFormatted: get_value_formatted_default_default,
  validate: {
    required: isValidRequired,
    elements: isValidElements
  }
};

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-is-valid.mjs
function supportsNumericRangeConstraint(type) {
  return type === "integer" || type === "number";
}
function supportsDateRangeConstraint(type) {
  return type === "date" || type === "datetime";
}
function normalizeRangeRule(value, fieldType, key) {
  const validator = fieldType.validate[key];
  if (validator && (typeof value === "number" && supportsNumericRangeConstraint(fieldType.type) || typeof value === "string" && supportsDateRangeConstraint(fieldType.type))) {
    return { constraint: value, validate: validator };
  }
  return void 0;
}
function getIsValid(field, fieldType) {
  const rules = field.isValid;
  let required;
  if (rules?.required === true && fieldType.validate.required !== void 0) {
    required = {
      constraint: true,
      validate: fieldType.validate.required
    };
  }
  let elements;
  if ((rules?.elements === true || // elements is enabled unless the field opts-out
  rules?.elements === void 0 && (!!field.elements || !!field.getElements)) && fieldType.validate.elements !== void 0) {
    elements = {
      constraint: true,
      validate: fieldType.validate.elements
    };
  }
  const min2 = normalizeRangeRule(rules?.min, fieldType, "min");
  const max2 = normalizeRangeRule(rules?.max, fieldType, "max");
  const minLengthValue = rules?.minLength;
  let minLength;
  if (typeof minLengthValue === "number" && fieldType.validate.minLength !== void 0) {
    minLength = {
      constraint: minLengthValue,
      validate: fieldType.validate.minLength
    };
  }
  const maxLengthValue = rules?.maxLength;
  let maxLength;
  if (typeof maxLengthValue === "number" && fieldType.validate.maxLength !== void 0) {
    maxLength = {
      constraint: maxLengthValue,
      validate: fieldType.validate.maxLength
    };
  }
  const patternValue = rules?.pattern;
  let pattern;
  if (patternValue !== void 0 && fieldType.validate.pattern !== void 0) {
    pattern = {
      constraint: patternValue,
      validate: fieldType.validate.pattern
    };
  }
  const custom = rules?.custom ?? fieldType.validate.custom;
  return {
    required,
    elements,
    min: min2,
    max: max2,
    minLength,
    maxLength,
    pattern,
    custom
  };
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-filter.mjs
function getFilter(fieldType) {
  return fieldType.validOperators.reduce((accumulator, operator) => {
    const operatorObj = getOperatorByName(operator);
    if (operatorObj?.filter) {
      accumulator[operator] = operatorObj.filter;
    }
    return accumulator;
  }, {});
}

// node_modules/@wordpress/dataviews/build-module/field-types/utils/get-format.mjs
function getFormat(field, fieldType) {
  return {
    ...fieldType.format,
    ...field.format
  };
}
var get_format_default = getFormat;

// node_modules/@wordpress/dataviews/build-module/field-types/index.mjs
function getFieldTypeByName(type) {
  const found = [
    email_default,
    integer_default,
    number_default,
    text_default,
    datetime_default,
    date_default,
    boolean_default,
    media_default,
    array_default,
    password_default,
    telephone_default,
    color_default,
    url_default
  ].find((fieldType) => fieldType?.type === type);
  if (!!found) {
    return found;
  }
  return no_type_default;
}
function normalizeFields(fields) {
  return fields.map((field) => {
    const fieldType = getFieldTypeByName(field.type);
    const getValue = field.getValue || get_value_from_id_default(field.id);
    const sort7 = function(a2, b2, direction) {
      const aValue = getValue({ item: a2 });
      const bValue = getValue({ item: b2 });
      return field.sort ? field.sort(aValue, bValue, direction) : fieldType.sort(aValue, bValue, direction);
    };
    return {
      id: field.id,
      label: field.label || field.id,
      header: field.header || field.label || field.id,
      description: field.description,
      placeholder: field.placeholder,
      getValue,
      setValue: field.setValue || set_value_from_id_default(field.id),
      elements: field.elements,
      getElements: field.getElements,
      hasElements: hasElements(field),
      isVisible: field.isVisible,
      isDisabled: typeof field.isDisabled === "function" ? field.isDisabled : () => !!field.isDisabled,
      enableHiding: field.enableHiding ?? true,
      readOnly: field.readOnly ?? false,
      // The type provides defaults for the following props
      type: fieldType.type,
      render: field.render ?? fieldType.render,
      Edit: getControl(field, fieldType.Edit),
      sort: sort7,
      enableSorting: field.enableSorting ?? fieldType.enableSorting,
      enableGlobalSearch: field.enableGlobalSearch ?? fieldType.enableGlobalSearch,
      isValid: getIsValid(field, fieldType),
      filterBy: get_filter_by_default(
        field,
        fieldType.defaultOperators,
        fieldType.validOperators
      ),
      filter: getFilter(fieldType),
      format: get_format_default(field, fieldType),
      getValueFormatted: field.getValueFormatted ?? fieldType.getValueFormatted
    };
  });
}

// node_modules/@wordpress/dataviews/build-module/dataform/index.mjs
var import_element95 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-context/index.mjs
var import_element84 = __toESM(require_element(), 1);
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var DataFormContext = (0, import_element84.createContext)({
  fields: []
});
DataFormContext.displayName = "DataFormContext";
function DataFormProvider({
  fields,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(DataFormContext.Provider, { value: { fields }, children });
}
var dataform_context_default = DataFormContext;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/data-form-layout.mjs
var import_element94 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/regular/index.mjs
var import_element85 = __toESM(require_element(), 1);
var import_components20 = __toESM(require_components(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/normalize-form.mjs
var import_i18n18 = __toESM(require_i18n(), 1);
var DEFAULT_LAYOUT = {
  type: "regular",
  labelPosition: "top"
};
var normalizeCardSummaryField = (sum) => {
  if (typeof sum === "string") {
    return [{ id: sum, visibility: "when-collapsed" }];
  }
  return sum.map((item) => {
    if (typeof item === "string") {
      return { id: item, visibility: "when-collapsed" };
    }
    return { id: item.id, visibility: item.visibility };
  });
};
function normalizeLayout(layout) {
  let normalizedLayout = DEFAULT_LAYOUT;
  if (layout?.type === "regular") {
    normalizedLayout = {
      type: "regular",
      labelPosition: layout?.labelPosition ?? "top"
    };
  } else if (layout?.type === "panel") {
    const summary = layout.summary ?? [];
    const normalizedSummary = Array.isArray(summary) ? summary : [summary];
    const openAs = layout?.openAs;
    let normalizedOpenAs;
    if (typeof openAs === "object" && openAs.type === "modal") {
      normalizedOpenAs = {
        type: "modal",
        applyLabel: openAs.applyLabel?.trim() || (0, import_i18n18.__)("Apply"),
        cancelLabel: openAs.cancelLabel?.trim() || (0, import_i18n18.__)("Cancel")
      };
    } else if (openAs === "modal") {
      normalizedOpenAs = {
        type: "modal",
        applyLabel: (0, import_i18n18.__)("Apply"),
        cancelLabel: (0, import_i18n18.__)("Cancel")
      };
    } else {
      normalizedOpenAs = { type: "dropdown" };
    }
    normalizedLayout = {
      type: "panel",
      labelPosition: layout?.labelPosition ?? "side",
      openAs: normalizedOpenAs,
      summary: normalizedSummary,
      editVisibility: layout?.editVisibility ?? "on-hover"
    };
  } else if (layout?.type === "card") {
    if (layout.withHeader === false) {
      normalizedLayout = {
        type: "card",
        withHeader: false,
        isOpened: true,
        summary: [],
        isCollapsible: false
      };
    } else {
      const summary = layout.summary ?? [];
      normalizedLayout = {
        type: "card",
        withHeader: true,
        isOpened: typeof layout.isOpened === "boolean" ? layout.isOpened : true,
        summary: normalizeCardSummaryField(summary),
        isCollapsible: layout.isCollapsible === void 0 ? true : layout.isCollapsible
      };
    }
  } else if (layout?.type === "row") {
    normalizedLayout = {
      type: "row",
      alignment: layout?.alignment ?? "center",
      styles: layout?.styles ?? {}
    };
  } else if (layout?.type === "details") {
    normalizedLayout = {
      type: "details",
      summary: layout?.summary ?? ""
    };
  }
  return normalizedLayout;
}
function normalizeForm(form) {
  const normalizedFormLayout = normalizeLayout(form?.layout);
  const normalizedFields = (form.fields ?? []).map(
    (field) => {
      if (typeof field === "string") {
        return {
          id: field,
          layout: normalizedFormLayout
        };
      }
      const fieldLayout = field.layout ? normalizeLayout(field.layout) : normalizedFormLayout;
      return {
        id: field.id,
        layout: fieldLayout,
        ...!!field.label && { label: field.label },
        ...!!field.description && {
          description: field.description
        },
        ..."children" in field && Array.isArray(field.children) && {
          children: normalizeForm({
            fields: field.children,
            layout: DEFAULT_LAYOUT
          }).fields
        }
      };
    }
  );
  return {
    layout: normalizedFormLayout,
    fields: normalizedFields
  };
}
var normalize_form_default = normalizeForm;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/regular/index.mjs
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
function Header4({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
    Stack4,
    {
      direction: "column",
      className: "dataforms-layouts-regular__header",
      gap: "lg",
      children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(Stack4, { direction: "row", align: "center", children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_components20.__experimentalHeading, { level: 2, size: 13, children: title }) })
    }
  );
}
function FormRegularField({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { fields } = (0, import_element85.useContext)(dataform_context_default);
  const layout = field.layout;
  const form = (0, import_element85.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: !!field.children ? field.children : []
    }),
    [field]
  );
  if (!!field.children) {
    return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_jsx_runtime100.Fragment, { children: [
      !hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(Header4, { title: field.label }),
      /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
        DataFormLayout,
        {
          data,
          form,
          onChange,
          validity: validity?.children
        }
      )
    ] });
  }
  const labelPosition = layout.labelPosition;
  const fieldDefinition = fields.find(
    (fieldDef) => fieldDef.id === field.id
  );
  if (!fieldDefinition || !fieldDefinition.Edit) {
    return null;
  }
  if (labelPosition === "side") {
    return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(
      Stack4,
      {
        direction: "row",
        className: "dataforms-layouts-regular__field",
        gap: "sm",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
            "div",
            {
              className: clsx_default(
                "dataforms-layouts-regular__field-label",
                `dataforms-layouts-regular__field-label--label-position-${labelPosition}`
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_components20.BaseControl.VisualLabel, { children: fieldDefinition.label })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: "dataforms-layouts-regular__field-control", children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
            fieldDefinition.render,
            {
              item: data,
              field: fieldDefinition
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
            fieldDefinition.Edit,
            {
              data,
              field: fieldDefinition,
              onChange,
              hideLabelFromVision: true,
              markWhenOptional,
              validity
            },
            fieldDefinition.id
          ) })
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: "dataforms-layouts-regular__field", children: fieldDefinition.readOnly === true ? /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_jsx_runtime100.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(import_jsx_runtime100.Fragment, { children: [
    !hideLabelFromVision && labelPosition !== "none" && /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(import_components20.BaseControl.VisualLabel, { children: fieldDefinition.label }),
    /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
      fieldDefinition.render,
      {
        item: data,
        field: fieldDefinition
      }
    )
  ] }) }) : /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
    fieldDefinition.Edit,
    {
      data,
      field: fieldDefinition,
      onChange,
      hideLabelFromVision: labelPosition === "none" ? true : hideLabelFromVision,
      markWhenOptional,
      validity
    }
  ) });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/modal.mjs
var import_deepmerge2 = __toESM(require_cjs(), 1);
var import_components23 = __toESM(require_components(), 1);
var import_element90 = __toESM(require_element(), 1);
var import_compose4 = __toESM(require_compose(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/summary-button.mjs
var import_components22 = __toESM(require_components(), 1);
var import_i18n19 = __toESM(require_i18n(), 1);
var import_compose3 = __toESM(require_compose(), 1);
var import_element86 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/utils/get-label-classname.mjs
function getLabelClassName(labelPosition, showError) {
  return clsx_default(
    "dataforms-layouts-panel__field-label",
    `dataforms-layouts-panel__field-label--label-position-${labelPosition}`,
    { "has-error": showError }
  );
}
var get_label_classname_default = getLabelClassName;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/utils/get-label-content.mjs
var import_components21 = __toESM(require_components(), 1);
var import_jsx_runtime101 = __toESM(require_jsx_runtime(), 1);
function getLabelContent(showError, errorMessage, fieldLabel) {
  return showError ? /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_components21.Tooltip, { text: errorMessage, placement: "top", children: /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)("span", { className: "dataforms-layouts-panel__field-label-error-content", children: [
    /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(import_components21.Icon, { icon: error_default2, size: 16 }),
    fieldLabel
  ] }) }) : fieldLabel;
}
var get_label_content_default = getLabelContent;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/utils/get-first-validation-error.mjs
function getFirstValidationError(validity) {
  if (!validity) {
    return void 0;
  }
  const validityRules = Object.keys(validity).filter(
    (key) => key !== "children"
  );
  for (const key of validityRules) {
    const rule = validity[key];
    if (rule === void 0) {
      continue;
    }
    if (rule.type === "invalid") {
      if (rule.message) {
        return rule.message;
      }
      if (key === "required") {
        return "A required field is empty";
      }
      return "Unidentified validation error";
    }
  }
  if (validity.children) {
    for (const childValidity of Object.values(validity.children)) {
      const childError = getFirstValidationError(childValidity);
      if (childError) {
        return childError;
      }
    }
  }
  return void 0;
}
var get_first_validation_error_default = getFirstValidationError;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/summary-button.mjs
var import_jsx_runtime102 = __toESM(require_jsx_runtime(), 1);
function SummaryButton({
  data,
  field,
  fieldLabel,
  summaryFields,
  validity,
  touched,
  disabled: disabled3,
  onClick,
  "aria-expanded": ariaExpanded
}) {
  const { labelPosition, editVisibility } = field.layout;
  const errorMessage = get_first_validation_error_default(validity);
  const showError = touched && !!errorMessage;
  const labelClassName = get_label_classname_default(labelPosition, showError);
  const labelContent = get_label_content_default(showError, errorMessage, fieldLabel);
  const className = clsx_default(
    "dataforms-layouts-panel__field-trigger",
    `dataforms-layouts-panel__field-trigger--label-${labelPosition}`,
    {
      "is-disabled": disabled3,
      "dataforms-layouts-panel__field-trigger--edit-always": editVisibility === "always"
    }
  );
  const controlId = (0, import_compose3.useInstanceId)(
    SummaryButton,
    "dataforms-layouts-panel__field-control"
  );
  const ariaLabel = showError ? (0, import_i18n19.sprintf)(
    // translators: %s: Field name.
    (0, import_i18n19._x)("Edit %s (has errors)", "field"),
    fieldLabel || ""
  ) : (0, import_i18n19.sprintf)(
    // translators: %s: Field name.
    (0, import_i18n19._x)("Edit %s", "field"),
    fieldLabel || ""
  );
  const rowRef = (0, import_element86.useRef)(null);
  const handleRowClick = () => {
    const selection = rowRef.current?.ownerDocument.defaultView?.getSelection();
    if (selection && selection.toString().length > 0) {
      return;
    }
    onClick();
  };
  const handleKeyDown = (event) => {
    if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsxs)(
    "div",
    {
      ref: rowRef,
      className,
      onClick: !disabled3 ? handleRowClick : void 0,
      onKeyDown: !disabled3 ? handleKeyDown : void 0,
      children: [
        labelPosition !== "none" && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("span", { className: labelClassName, children: labelContent }),
        labelPosition === "none" && showError && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_components22.Tooltip, { text: errorMessage, placement: "top", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("span", { className: "dataforms-layouts-panel__field-label-error-content", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_components22.Icon, { icon: error_default2, size: 16 }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          "span",
          {
            id: `${controlId}`,
            className: "dataforms-layouts-panel__field-control",
            children: summaryFields.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
              "span",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "100%",
                  gap: "2px"
                },
                children: summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
                  "span",
                  {
                    style: { width: "100%" },
                    children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
                      summaryField.render,
                      {
                        item: data,
                        field: summaryField
                      }
                    )
                  },
                  summaryField.id
                ))
              }
            ) : summaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
              summaryField.render,
              {
                item: data,
                field: summaryField
              },
              summaryField.id
            ))
          }
        ),
        !disabled3 && /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
          import_components22.Button,
          {
            className: "dataforms-layouts-panel__field-trigger-icon",
            label: ariaLabel,
            icon: pencil_default,
            size: "small",
            "aria-expanded": ariaExpanded,
            "aria-haspopup": "dialog",
            "aria-describedby": `${controlId}`
          }
        )
      ]
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/hooks/use-form-validity.mjs
var import_deepmerge = __toESM(require_cjs(), 1);
var import_es6 = __toESM(require_es6(), 1);
var import_element87 = __toESM(require_element(), 1);
var import_i18n20 = __toESM(require_i18n(), 1);
function isFormValid(formValidity) {
  if (!formValidity) {
    return true;
  }
  return Object.values(formValidity).every((fieldValidation) => {
    return Object.entries(fieldValidation).every(
      ([key, validation]) => {
        if (key === "children" && validation && typeof validation === "object") {
          return isFormValid(validation);
        }
        return validation.type !== "invalid" && validation.type !== "validating";
      }
    );
  });
}
function getFormFieldsToValidate(form, fields) {
  const normalizedForm = normalize_form_default(form);
  if (normalizedForm.fields.length === 0) {
    return [];
  }
  const fieldsMap = /* @__PURE__ */ new Map();
  fields.forEach((field) => {
    fieldsMap.set(field.id, field);
  });
  function processFormField(formField) {
    if ("children" in formField && Array.isArray(formField.children)) {
      const processedChildren = formField.children.map(processFormField).filter((child) => child !== null);
      if (processedChildren.length === 0) {
        return null;
      }
      const fieldDef2 = fieldsMap.get(formField.id);
      if (fieldDef2) {
        const [normalizedField2] = normalizeFields([
          fieldDef2
        ]);
        return {
          id: formField.id,
          children: processedChildren,
          field: normalizedField2
        };
      }
      return {
        id: formField.id,
        children: processedChildren
      };
    }
    const fieldDef = fieldsMap.get(formField.id);
    if (!fieldDef) {
      return null;
    }
    const [normalizedField] = normalizeFields([fieldDef]);
    return {
      id: formField.id,
      children: [],
      field: normalizedField
    };
  }
  const toValidate = normalizedForm.fields.map(processFormField).filter((field) => field !== null);
  return toValidate;
}
function setValidityAtPath(formValidity, fieldValidity, path) {
  if (!formValidity) {
    formValidity = {};
  }
  if (path.length === 0) {
    return formValidity;
  }
  const result = { ...formValidity };
  let current = result;
  for (let i2 = 0; i2 < path.length - 1; i2++) {
    const segment = path[i2];
    if (!current[segment]) {
      current[segment] = {};
    }
    current[segment] = { ...current[segment] };
    current = current[segment];
  }
  const finalKey = path[path.length - 1];
  current[finalKey] = {
    ...current[finalKey] || {},
    ...fieldValidity
  };
  return result;
}
function removeValidationProperty(formValidity, path, property) {
  if (!formValidity || path.length === 0) {
    return formValidity;
  }
  const result = { ...formValidity };
  let current = result;
  for (let i2 = 0; i2 < path.length - 1; i2++) {
    const segment = path[i2];
    if (!current[segment]) {
      return formValidity;
    }
    current[segment] = { ...current[segment] };
    current = current[segment];
  }
  const finalKey = path[path.length - 1];
  if (!current[finalKey]) {
    return formValidity;
  }
  const fieldValidity = { ...current[finalKey] };
  delete fieldValidity[property];
  if (Object.keys(fieldValidity).length === 0) {
    delete current[finalKey];
  } else {
    current[finalKey] = fieldValidity;
  }
  if (Object.keys(result).length === 0) {
    return void 0;
  }
  return result;
}
function handleElementsValidationAsync(promise, formField, promiseHandler) {
  const { elementsCounterRef, setFormValidity, path, item } = promiseHandler;
  const currentToken = (elementsCounterRef.current[formField.id] || 0) + 1;
  elementsCounterRef.current[formField.id] = currentToken;
  promise.then((result) => {
    if (currentToken !== elementsCounterRef.current[formField.id]) {
      return;
    }
    if (!Array.isArray(result)) {
      setFormValidity((prev) => {
        const newFormValidity = setValidityAtPath(
          prev,
          {
            elements: {
              type: "invalid",
              message: (0, import_i18n20.__)("Could not validate elements.")
            }
          },
          [...path, formField.id]
        );
        return newFormValidity;
      });
      return;
    }
    if (formField.field?.isValid.elements && !formField.field.isValid.elements.validate(item, {
      ...formField.field,
      elements: result
    })) {
      setFormValidity((prev) => {
        const newFormValidity = setValidityAtPath(
          prev,
          {
            elements: {
              type: "invalid",
              message: (0, import_i18n20.__)(
                "Value must be one of the elements."
              )
            }
          },
          [...path, formField.id]
        );
        return newFormValidity;
      });
    } else {
      setFormValidity((prev) => {
        return removeValidationProperty(
          prev,
          [...path, formField.id],
          "elements"
        );
      });
    }
  }).catch((error2) => {
    if (currentToken !== elementsCounterRef.current[formField.id]) {
      return;
    }
    let errorMessage;
    if (error2 instanceof Error) {
      errorMessage = error2.message;
    } else {
      errorMessage = String(error2) || (0, import_i18n20.__)(
        "Unknown error when running elements validation asynchronously."
      );
    }
    setFormValidity((prev) => {
      const newFormValidity = setValidityAtPath(
        prev,
        {
          elements: {
            type: "invalid",
            message: errorMessage
          }
        },
        [...path, formField.id]
      );
      return newFormValidity;
    });
  });
}
function handleCustomValidationAsync(promise, formField, promiseHandler) {
  const { customCounterRef, setFormValidity, path } = promiseHandler;
  const currentToken = (customCounterRef.current[formField.id] || 0) + 1;
  customCounterRef.current[formField.id] = currentToken;
  promise.then((result) => {
    if (currentToken !== customCounterRef.current[formField.id]) {
      return;
    }
    if (result === null) {
      setFormValidity((prev) => {
        return removeValidationProperty(
          prev,
          [...path, formField.id],
          "custom"
        );
      });
      return;
    }
    if (typeof result === "string") {
      setFormValidity((prev) => {
        const newFormValidity = setValidityAtPath(
          prev,
          {
            custom: {
              type: "invalid",
              message: result
            }
          },
          [...path, formField.id]
        );
        return newFormValidity;
      });
      return;
    }
    setFormValidity((prev) => {
      const newFormValidity = setValidityAtPath(
        prev,
        {
          custom: {
            type: "invalid",
            message: (0, import_i18n20.__)("Validation could not be processed.")
          }
        },
        [...path, formField.id]
      );
      return newFormValidity;
    });
  }).catch((error2) => {
    if (currentToken !== customCounterRef.current[formField.id]) {
      return;
    }
    let errorMessage;
    if (error2 instanceof Error) {
      errorMessage = error2.message;
    } else {
      errorMessage = String(error2) || (0, import_i18n20.__)(
        "Unknown error when running custom validation asynchronously."
      );
    }
    setFormValidity((prev) => {
      const newFormValidity = setValidityAtPath(
        prev,
        {
          custom: {
            type: "invalid",
            message: errorMessage
          }
        },
        [...path, formField.id]
      );
      return newFormValidity;
    });
  });
}
function validateFormField(item, formField, promiseHandler) {
  if (formField.field?.isValid.required && !formField.field.isValid.required.validate(item, formField.field)) {
    return {
      required: { type: "invalid" }
    };
  }
  if (formField.field?.isValid.pattern && !formField.field.isValid.pattern.validate(item, formField.field)) {
    return {
      pattern: {
        type: "invalid",
        message: (0, import_i18n20.__)("Value does not match the required pattern.")
      }
    };
  }
  if (formField.field?.isValid.min && !formField.field.isValid.min.validate(item, formField.field)) {
    return {
      min: {
        type: "invalid",
        message: (0, import_i18n20.__)("Value is below the minimum.")
      }
    };
  }
  if (formField.field?.isValid.max && !formField.field.isValid.max.validate(item, formField.field)) {
    return {
      max: {
        type: "invalid",
        message: (0, import_i18n20.__)("Value is above the maximum.")
      }
    };
  }
  if (formField.field?.isValid.minLength && !formField.field.isValid.minLength.validate(item, formField.field)) {
    return {
      minLength: {
        type: "invalid",
        message: (0, import_i18n20.__)("Value is too short.")
      }
    };
  }
  if (formField.field?.isValid.maxLength && !formField.field.isValid.maxLength.validate(item, formField.field)) {
    return {
      maxLength: {
        type: "invalid",
        message: (0, import_i18n20.__)("Value is too long.")
      }
    };
  }
  if (formField.field?.isValid.elements && formField.field.hasElements && !formField.field.getElements && Array.isArray(formField.field.elements) && !formField.field.isValid.elements.validate(item, formField.field)) {
    return {
      elements: {
        type: "invalid",
        message: (0, import_i18n20.__)("Value must be one of the elements.")
      }
    };
  }
  let customError;
  if (!!formField.field && formField.field.isValid.custom) {
    try {
      const value = formField.field.getValue({ item });
      customError = formField.field.isValid.custom(
        (0, import_deepmerge.default)(
          item,
          formField.field.setValue({
            item,
            value
          })
        ),
        formField.field
      );
    } catch (error2) {
      let errorMessage;
      if (error2 instanceof Error) {
        errorMessage = error2.message;
      } else {
        errorMessage = String(error2) || (0, import_i18n20.__)("Unknown error when running custom validation.");
      }
      return {
        custom: {
          type: "invalid",
          message: errorMessage
        }
      };
    }
  }
  if (typeof customError === "string") {
    return {
      custom: {
        type: "invalid",
        message: customError
      }
    };
  }
  const fieldValidity = {};
  if (!!formField.field && formField.field.isValid.elements && formField.field.hasElements && typeof formField.field.getElements === "function") {
    handleElementsValidationAsync(
      formField.field.getElements(),
      formField,
      promiseHandler
    );
    fieldValidity.elements = {
      type: "validating",
      message: (0, import_i18n20.__)("Validating\u2026")
    };
  }
  if (customError instanceof Promise) {
    handleCustomValidationAsync(customError, formField, promiseHandler);
    fieldValidity.custom = {
      type: "validating",
      message: (0, import_i18n20.__)("Validating\u2026")
    };
  }
  if (Object.keys(fieldValidity).length > 0) {
    return fieldValidity;
  }
  if (formField.children.length > 0) {
    const result = {};
    formField.children.forEach((child) => {
      result[child.id] = validateFormField(item, child, {
        ...promiseHandler,
        path: [...promiseHandler.path, formField.id, "children"]
      });
    });
    const filteredResult = {};
    Object.entries(result).forEach(([key, value]) => {
      if (value !== void 0) {
        filteredResult[key] = value;
      }
    });
    if (Object.keys(filteredResult).length === 0) {
      return void 0;
    }
    return {
      children: filteredResult
    };
  }
  return void 0;
}
function getFormFieldValue(formField, item) {
  const fieldValue = formField?.field?.getValue({ item });
  if (formField.children.length === 0) {
    return fieldValue;
  }
  const childrenValues = formField.children.map(
    (child) => getFormFieldValue(child, item)
  );
  if (!childrenValues) {
    return fieldValue;
  }
  return {
    value: fieldValue,
    children: childrenValues
  };
}
function useFormValidity(item, fields, form) {
  const [formValidity, setFormValidity] = (0, import_element87.useState)();
  const customCounterRef = (0, import_element87.useRef)({});
  const elementsCounterRef = (0, import_element87.useRef)({});
  const previousValuesRef = (0, import_element87.useRef)({});
  const validate = (0, import_element87.useCallback)(() => {
    const promiseHandler = {
      customCounterRef,
      elementsCounterRef,
      setFormValidity,
      path: [],
      item
    };
    const formFieldsToValidate = getFormFieldsToValidate(form, fields);
    if (formFieldsToValidate.length === 0) {
      setFormValidity(void 0);
      return;
    }
    const newFormValidity = {};
    const untouchedFields = [];
    formFieldsToValidate.forEach((formField) => {
      const value = getFormFieldValue(formField, item);
      if (previousValuesRef.current.hasOwnProperty(formField.id) && (0, import_es6.default)(
        previousValuesRef.current[formField.id],
        value
      )) {
        untouchedFields.push(formField.id);
        return;
      }
      previousValuesRef.current[formField.id] = value;
      const fieldValidity = validateFormField(
        item,
        formField,
        promiseHandler
      );
      if (fieldValidity !== void 0) {
        newFormValidity[formField.id] = fieldValidity;
      }
    });
    setFormValidity((existingFormValidity) => {
      let validity = {
        ...existingFormValidity,
        ...newFormValidity
      };
      const fieldsToKeep = [
        ...untouchedFields,
        ...Object.keys(newFormValidity)
      ];
      Object.keys(validity).forEach((key) => {
        if (validity && !fieldsToKeep.includes(key)) {
          delete validity[key];
        }
      });
      if (Object.keys(validity).length === 0) {
        validity = void 0;
      }
      const areEqual = (0, import_es6.default)(existingFormValidity, validity);
      if (areEqual) {
        return existingFormValidity;
      }
      return validity;
    });
  }, [item, fields, form]);
  (0, import_element87.useEffect)(() => {
    validate();
  }, [validate]);
  return {
    validity: formValidity,
    isValid: isFormValid(formValidity)
  };
}
var use_form_validity_default = useFormValidity;

// node_modules/@wordpress/dataviews/build-module/hooks/use-report-validity.mjs
var import_element88 = __toESM(require_element(), 1);
function useReportValidity(ref, shouldReport) {
  (0, import_element88.useEffect)(() => {
    if (shouldReport && ref.current) {
      const inputs = ref.current.querySelectorAll(
        "input, textarea, select"
      );
      inputs.forEach((input) => {
        input.reportValidity();
      });
    }
  }, [shouldReport, ref]);
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/utils/use-field-from-form-field.mjs
var import_element89 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/get-summary-fields.mjs
function extractSummaryIds(summary) {
  if (Array.isArray(summary)) {
    return summary.map(
      (item) => typeof item === "string" ? item : item.id
    );
  }
  return [];
}
var getSummaryFields = (summaryField, fields) => {
  if (Array.isArray(summaryField) && summaryField.length > 0) {
    const summaryIds = extractSummaryIds(summaryField);
    return summaryIds.map(
      (summaryId) => fields.find((_field) => _field.id === summaryId)
    ).filter((_field) => _field !== void 0);
  }
  return [];
};

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/utils/use-field-from-form-field.mjs
var getFieldDefinition = (field, fields) => {
  const fieldDefinition = fields.find((_field) => _field.id === field.id);
  if (!fieldDefinition) {
    return fields.find((_field) => {
      if (!!field.children) {
        const simpleChildren = field.children.filter(
          (child) => !child.children
        );
        if (simpleChildren.length === 0) {
          return false;
        }
        return _field.id === simpleChildren[0].id;
      }
      return _field.id === field.id;
    });
  }
  return fieldDefinition;
};
function useFieldFromFormField(field) {
  const { fields } = (0, import_element89.useContext)(dataform_context_default);
  const layout = field.layout;
  const summaryFields = getSummaryFields(layout.summary, fields);
  const fieldDefinition = getFieldDefinition(field, fields);
  const fieldLabel = !!field.children ? field.label : fieldDefinition?.label;
  if (summaryFields.length === 0) {
    return {
      summaryFields: fieldDefinition ? [fieldDefinition] : [],
      fieldDefinition,
      fieldLabel
    };
  }
  return {
    summaryFields,
    fieldDefinition,
    fieldLabel
  };
}
var use_field_from_form_field_default = useFieldFromFormField;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/modal.mjs
var import_jsx_runtime103 = __toESM(require_jsx_runtime(), 1);
function ModalContent({
  data,
  field,
  onChange,
  fieldLabel,
  onClose,
  touched
}) {
  const { openAs } = field.layout;
  const { applyLabel, cancelLabel } = openAs;
  const { fields } = (0, import_element90.useContext)(dataform_context_default);
  const [changes, setChanges] = (0, import_element90.useState)({});
  const modalData = (0, import_element90.useMemo)(() => {
    return (0, import_deepmerge2.default)(data, changes, {
      arrayMerge: (target, source) => source
    });
  }, [data, changes]);
  const form = (0, import_element90.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: !!field.children ? field.children : (
        // If not explicit children return the field id itself.
        [{ id: field.id, layout: DEFAULT_LAYOUT }]
      )
    }),
    [field]
  );
  const fieldsAsFieldType = fields.map((f2) => ({
    ...f2,
    Edit: f2.Edit === null ? void 0 : f2.Edit,
    isValid: {
      required: f2.isValid.required?.constraint,
      elements: f2.isValid.elements?.constraint,
      min: f2.isValid.min?.constraint,
      max: f2.isValid.max?.constraint,
      pattern: f2.isValid.pattern?.constraint,
      minLength: f2.isValid.minLength?.constraint,
      maxLength: f2.isValid.maxLength?.constraint
    }
  }));
  const { validity } = use_form_validity_default(modalData, fieldsAsFieldType, form);
  const onApply = () => {
    onChange(changes);
    onClose();
  };
  const handleOnChange = (newValue) => {
    setChanges(
      (prev) => (0, import_deepmerge2.default)(prev, newValue, {
        arrayMerge: (target, source) => source
      })
    );
  };
  const focusOnMountRef = (0, import_compose4.useFocusOnMount)("firstInputElement");
  const contentRef = (0, import_element90.useRef)(null);
  const mergedRef = (0, import_compose4.useMergeRefs)([focusOnMountRef, contentRef]);
  useReportValidity(contentRef, touched);
  return /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)(
    import_components23.Modal,
    {
      className: "dataforms-layouts-panel__modal",
      onRequestClose: onClose,
      isFullScreen: false,
      title: fieldLabel,
      size: "medium",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime103.jsx)("div", { ref: mergedRef, children: /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
          DataFormLayout,
          {
            data: modalData,
            form,
            onChange: handleOnChange,
            validity,
            children: (FieldLayout, childField, childFieldValidity, markWhenOptional) => /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
              FieldLayout,
              {
                data: modalData,
                field: childField,
                onChange: handleOnChange,
                hideLabelFromVision: form.fields.length < 2,
                markWhenOptional,
                validity: childFieldValidity
              },
              childField.id
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)(
          Stack4,
          {
            direction: "row",
            className: "dataforms-layouts-panel__modal-footer",
            gap: "md",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(import_components23.__experimentalSpacer, { style: { flex: 1 } }),
              /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
                import_components23.Button,
                {
                  variant: "tertiary",
                  onClick: onClose,
                  __next40pxDefaultSize: true,
                  children: cancelLabel
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
                import_components23.Button,
                {
                  variant: "primary",
                  onClick: onApply,
                  __next40pxDefaultSize: true,
                  children: applyLabel
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function PanelModal({
  data,
  field,
  onChange,
  validity
}) {
  const [touched, setTouched] = (0, import_element90.useState)(false);
  const [isOpen, setIsOpen] = (0, import_element90.useState)(false);
  const { fieldDefinition, fieldLabel, summaryFields } = use_field_from_form_field_default(field);
  if (!fieldDefinition) {
    return null;
  }
  const handleClose = () => {
    setIsOpen(false);
    setTouched(true);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime103.jsxs)(import_jsx_runtime103.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
      SummaryButton,
      {
        data,
        field,
        fieldLabel,
        summaryFields,
        validity,
        touched,
        disabled: fieldDefinition.readOnly === true,
        onClick: () => setIsOpen(true),
        "aria-expanded": isOpen
      }
    ),
    isOpen && /* @__PURE__ */ (0, import_jsx_runtime103.jsx)(
      ModalContent,
      {
        data,
        field,
        onChange,
        fieldLabel: fieldLabel ?? "",
        onClose: handleClose,
        touched
      }
    )
  ] });
}
var modal_default = PanelModal;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/dropdown.mjs
var import_components24 = __toESM(require_components(), 1);
var import_i18n21 = __toESM(require_i18n(), 1);
var import_element91 = __toESM(require_element(), 1);
var import_compose5 = __toESM(require_compose(), 1);
var import_jsx_runtime104 = __toESM(require_jsx_runtime(), 1);
function DropdownHeader({
  title,
  onClose
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
    Stack4,
    {
      direction: "column",
      className: "dataforms-layouts-panel__dropdown-header",
      gap: "lg",
      children: /* @__PURE__ */ (0, import_jsx_runtime104.jsxs)(Stack4, { direction: "row", gap: "sm", align: "center", children: [
        title && /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(import_components24.__experimentalHeading, { level: 2, size: 13, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(import_components24.__experimentalSpacer, { style: { flex: 1 } }),
        onClose && /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
          import_components24.Button,
          {
            label: (0, import_i18n21.__)("Close"),
            icon: close_small_default2,
            onClick: onClose,
            size: "small"
          }
        )
      ] })
    }
  );
}
function DropdownContentWithValidation({
  touched,
  children
}) {
  const ref = (0, import_element91.useRef)(null);
  useReportValidity(ref, touched);
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsx)("div", { ref, children });
}
function PanelDropdown({
  data,
  field,
  onChange,
  validity
}) {
  const [touched, setTouched] = (0, import_element91.useState)(false);
  const [popoverAnchor, setPopoverAnchor] = (0, import_element91.useState)(
    null
  );
  const popoverProps = (0, import_element91.useMemo)(
    () => ({
      // Anchor the popover to the middle of the entire row so that it doesn't
      // move around when the label changes.
      anchor: popoverAnchor,
      placement: "left-start",
      offset: 36,
      shift: true
    }),
    [popoverAnchor]
  );
  const [dialogRef, dialogProps] = (0, import_compose5.__experimentalUseDialog)({
    focusOnMount: "firstInputElement"
  });
  const form = (0, import_element91.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: !!field.children ? field.children : (
        // If not explicit children return the field id itself.
        [{ id: field.id, layout: DEFAULT_LAYOUT }]
      )
    }),
    [field]
  );
  const formValidity = (0, import_element91.useMemo)(() => {
    if (validity === void 0) {
      return void 0;
    }
    if (!!field.children) {
      return validity?.children;
    }
    return { [field.id]: validity };
  }, [validity, field]);
  const { fieldDefinition, fieldLabel, summaryFields } = use_field_from_form_field_default(field);
  if (!fieldDefinition) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
    "div",
    {
      ref: setPopoverAnchor,
      className: "dataforms-layouts-panel__field-dropdown-anchor",
      children: /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
        import_components24.Dropdown,
        {
          contentClassName: "dataforms-layouts-panel__field-dropdown",
          popoverProps,
          focusOnMount: false,
          onToggle: (willOpen) => {
            if (!willOpen) {
              setTouched(true);
            }
          },
          renderToggle: ({ isOpen, onToggle }) => /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
            SummaryButton,
            {
              data,
              field,
              fieldLabel,
              summaryFields,
              validity,
              touched,
              disabled: fieldDefinition.readOnly === true,
              onClick: onToggle,
              "aria-expanded": isOpen
            }
          ),
          renderContent: ({ onClose }) => /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(DropdownContentWithValidation, { touched, children: /* @__PURE__ */ (0, import_jsx_runtime104.jsxs)("div", { ref: dialogRef, ...dialogProps, children: [
            /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
              DropdownHeader,
              {
                title: fieldLabel,
                onClose
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
              DataFormLayout,
              {
                data,
                form,
                onChange,
                validity: formValidity,
                children: (FieldLayout, childField, childFieldValidity, markWhenOptional) => /* @__PURE__ */ (0, import_jsx_runtime104.jsx)(
                  FieldLayout,
                  {
                    data,
                    field: childField,
                    onChange,
                    hideLabelFromVision: (form?.fields ?? []).length < 2,
                    markWhenOptional,
                    validity: childFieldValidity
                  },
                  childField.id
                )
              }
            )
          ] }) })
        }
      )
    }
  );
}
var dropdown_default = PanelDropdown;

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/panel/index.mjs
var import_jsx_runtime105 = __toESM(require_jsx_runtime(), 1);
function FormPanelField({
  data,
  field,
  onChange,
  validity
}) {
  const layout = field.layout;
  if (layout.openAs.type === "modal") {
    return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
      modal_default,
      {
        data,
        field,
        onChange,
        validity
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime105.jsx)(
    dropdown_default,
    {
      data,
      field,
      onChange,
      validity
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/card/index.mjs
var import_element92 = __toESM(require_element(), 1);

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/validation-badge.mjs
var import_i18n22 = __toESM(require_i18n(), 1);
var import_jsx_runtime106 = __toESM(require_jsx_runtime(), 1);
function countInvalidFields(validity) {
  if (!validity) {
    return 0;
  }
  let count = 0;
  const validityRules = Object.keys(validity).filter(
    (key) => key !== "children"
  );
  for (const key of validityRules) {
    const rule = validity[key];
    if (rule?.type === "invalid") {
      count++;
    }
  }
  if (validity.children) {
    for (const childValidity of Object.values(validity.children)) {
      count += countInvalidFields(childValidity);
    }
  }
  return count;
}
function ValidationBadge({
  validity
}) {
  const invalidCount = countInvalidFields(validity);
  if (invalidCount === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime106.jsx)(Badge, { intent: "high", children: (0, import_i18n22.sprintf)(
    /* translators: %d: Number of fields that need attention */
    (0, import_i18n22._n)(
      "%d field needs attention",
      "%d fields need attention",
      invalidCount
    ),
    invalidCount
  ) });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/card/index.mjs
var import_jsx_runtime107 = __toESM(require_jsx_runtime(), 1);
function isSummaryFieldVisible(summaryField, summaryConfig, isOpen) {
  if (!summaryConfig || Array.isArray(summaryConfig) && summaryConfig.length === 0) {
    return false;
  }
  const summaryConfigArray = Array.isArray(summaryConfig) ? summaryConfig : [summaryConfig];
  const fieldConfig = summaryConfigArray.find((config) => {
    if (typeof config === "string") {
      return config === summaryField.id;
    }
    if (typeof config === "object" && "id" in config) {
      return config.id === summaryField.id;
    }
    return false;
  });
  if (!fieldConfig) {
    return false;
  }
  if (typeof fieldConfig === "string") {
    return true;
  }
  if (typeof fieldConfig === "object" && "visibility" in fieldConfig) {
    return fieldConfig.visibility === "always" || fieldConfig.visibility === "when-collapsed" && !isOpen;
  }
  return true;
}
function HeaderContent({
  data,
  fields,
  label,
  layout,
  isOpen,
  touched,
  validity
}) {
  const summaryFields = getSummaryFields(layout.summary, fields);
  const visibleSummaryFields = summaryFields.filter(
    (summaryField) => isSummaryFieldVisible(summaryField, layout.summary, isOpen)
  );
  const hasBadge = touched && layout.isCollapsible;
  const hasSummary = visibleSummaryFields.length > 0 && layout.withHeader;
  return /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(
    Stack4,
    {
      align: "center",
      justify: "space-between",
      className: "dataforms-layouts-card__field-header-content",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(card_exports2.Title, { children: label }),
        (hasBadge || hasSummary) && /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(collapsible_card_exports.HeaderDescription, { className: "dataforms-layouts-card__field-header-content-description", children: [
          hasBadge && /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(ValidationBadge, { validity }),
          hasSummary && /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("div", { className: "dataforms-layouts-card__field-summary", children: visibleSummaryFields.map((summaryField) => /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
            summaryField.render,
            {
              item: data,
              field: summaryField
            },
            summaryField.id
          )) })
        ] })
      ]
    }
  );
}
function BodyContent({
  data,
  field,
  form,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity,
  withHeader
}) {
  if (field.children) {
    return /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(import_jsx_runtime107.Fragment, { children: [
      field.description && /* @__PURE__ */ (0, import_jsx_runtime107.jsx)("div", { className: "dataforms-layouts-card__field-description", children: field.description }),
      /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
        DataFormLayout,
        {
          data,
          form,
          onChange,
          validity: validity?.children
        }
      )
    ] });
  }
  const SingleFieldLayout = getFormFieldLayout("regular")?.component;
  if (!SingleFieldLayout) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
    SingleFieldLayout,
    {
      data,
      field,
      onChange,
      hideLabelFromVision: hideLabelFromVision || withHeader,
      markWhenOptional,
      validity
    }
  );
}
function FormCardField({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const { fields } = (0, import_element92.useContext)(dataform_context_default);
  const layout = field.layout;
  const contentRef = (0, import_element92.useRef)(null);
  const form = (0, import_element92.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: field.children ?? []
    }),
    [field]
  );
  const { isOpened, isCollapsible } = layout;
  const [isOpen, setIsOpen] = (0, import_element92.useState)(isOpened);
  const [touched, setTouched] = (0, import_element92.useState)(false);
  (0, import_element92.useEffect)(() => {
    setIsOpen(isOpened);
  }, [isOpened]);
  const handleOpenChange = (0, import_element92.useCallback)((open) => {
    if (!open) {
      setTouched(true);
    }
    setIsOpen(open);
  }, []);
  const handleBlur = (0, import_element92.useCallback)(() => {
    setTouched(true);
  }, []);
  useReportValidity(
    contentRef,
    (isCollapsible ? isOpen : true) && touched
  );
  let label = field.label;
  let withHeader;
  if (field.children) {
    withHeader = !!label && layout.withHeader;
  } else {
    const fieldDefinition = fields.find(
      (fieldDef) => fieldDef.id === field.id
    );
    if (!fieldDefinition || !fieldDefinition.Edit) {
      return null;
    }
    label = fieldDefinition.label;
    withHeader = !!label && layout.withHeader;
  }
  const bodyContent = /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
    BodyContent,
    {
      data,
      field,
      form,
      onChange,
      hideLabelFromVision,
      markWhenOptional,
      validity,
      withHeader
    }
  );
  const headerContent = /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
    HeaderContent,
    {
      data,
      fields,
      label,
      layout,
      isOpen: isCollapsible ? !!isOpen : true,
      touched,
      validity
    }
  );
  if (withHeader && isCollapsible) {
    return /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(
      collapsible_card_exports.Root,
      {
        className: "dataforms-layouts-card__field",
        open: isOpen,
        onOpenChange: handleOpenChange,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(collapsible_card_exports.Header, { children: headerContent }),
          /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(
            collapsible_card_exports.Content,
            {
              ref: contentRef,
              onBlur: handleBlur,
              children: bodyContent
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime107.jsxs)(card_exports2.Root, { className: "dataforms-layouts-card__field", children: [
    withHeader && /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(card_exports2.Header, { children: headerContent }),
    /* @__PURE__ */ (0, import_jsx_runtime107.jsx)(card_exports2.Content, { ref: contentRef, onBlur: handleBlur, children: bodyContent })
  ] });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/row/index.mjs
var import_components25 = __toESM(require_components(), 1);
var import_jsx_runtime108 = __toESM(require_jsx_runtime(), 1);
function Header5({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    Stack4,
    {
      direction: "column",
      className: "dataforms-layouts-row__header",
      gap: "lg",
      children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Stack4, { direction: "row", align: "center", children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_components25.__experimentalHeading, { level: 2, size: 13, children: title }) })
    }
  );
}
var EMPTY_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_jsx_runtime108.Fragment, { children });
function FormRowField({
  data,
  field,
  onChange,
  hideLabelFromVision,
  markWhenOptional,
  validity
}) {
  const layout = field.layout;
  if (!!field.children) {
    const form = {
      layout: DEFAULT_LAYOUT,
      fields: field.children
    };
    return /* @__PURE__ */ (0, import_jsx_runtime108.jsxs)("div", { className: "dataforms-layouts-row__field", children: [
      !hideLabelFromVision && field.label && /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Header5, { title: field.label }),
      /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(Stack4, { direction: "row", align: layout.alignment, gap: "lg", children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
        DataFormLayout,
        {
          data,
          form,
          onChange,
          validity: validity?.children,
          as: EMPTY_WRAPPER,
          children: (FieldLayout, childField, childFieldValidity) => /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
            "div",
            {
              className: "dataforms-layouts-row__field-control",
              style: layout.styles[childField.id],
              children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
                FieldLayout,
                {
                  data,
                  field: childField,
                  onChange,
                  hideLabelFromVision,
                  markWhenOptional,
                  validity: childFieldValidity
                }
              )
            },
            childField.id
          )
        }
      ) })
    ] });
  }
  const RegularLayout = getFormFieldLayout("regular")?.component;
  if (!RegularLayout) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(import_jsx_runtime108.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)("div", { className: "dataforms-layouts-row__field-control", children: /* @__PURE__ */ (0, import_jsx_runtime108.jsx)(
    RegularLayout,
    {
      data,
      field,
      onChange,
      markWhenOptional,
      validity
    }
  ) }) });
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/details/index.mjs
var import_element93 = __toESM(require_element(), 1);
var import_i18n23 = __toESM(require_i18n(), 1);
var import_jsx_runtime109 = __toESM(require_jsx_runtime(), 1);
function FormDetailsField({
  data,
  field,
  onChange,
  validity
}) {
  const { fields } = (0, import_element93.useContext)(dataform_context_default);
  const detailsRef = (0, import_element93.useRef)(null);
  const contentRef = (0, import_element93.useRef)(null);
  const [touched, setTouched] = (0, import_element93.useState)(false);
  const [isOpen, setIsOpen] = (0, import_element93.useState)(false);
  const form = (0, import_element93.useMemo)(
    () => ({
      layout: DEFAULT_LAYOUT,
      fields: field.children ?? []
    }),
    [field]
  );
  (0, import_element93.useEffect)(() => {
    const details = detailsRef.current;
    if (!details) {
      return;
    }
    const handleToggle = () => {
      const nowOpen = details.open;
      if (!nowOpen) {
        setTouched(true);
      }
      setIsOpen(nowOpen);
    };
    details.addEventListener("toggle", handleToggle);
    return () => {
      details.removeEventListener("toggle", handleToggle);
    };
  }, []);
  useReportValidity(contentRef, isOpen && touched);
  const handleBlur = (0, import_element93.useCallback)(() => {
    setTouched(true);
  }, []);
  if (!field.children) {
    return null;
  }
  const summaryFieldId = field.layout.summary ?? "";
  const summaryField = summaryFieldId ? fields.find((fieldDef) => fieldDef.id === summaryFieldId) : void 0;
  let summaryContent;
  if (summaryField && summaryField.render) {
    summaryContent = /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(summaryField.render, { item: data, field: summaryField });
  } else {
    summaryContent = field.label || (0, import_i18n23.__)("More details");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(
    "details",
    {
      ref: detailsRef,
      className: "dataforms-layouts-details__details",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime109.jsx)("summary", { className: "dataforms-layouts-details__summary", children: /* @__PURE__ */ (0, import_jsx_runtime109.jsxs)(
          Stack4,
          {
            direction: "row",
            align: "center",
            gap: "md",
            className: "dataforms-layouts-details__summary-content",
            children: [
              summaryContent,
              touched && /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(ValidationBadge, { validity })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
          "div",
          {
            ref: contentRef,
            className: "dataforms-layouts-details__content",
            onBlur: handleBlur,
            children: /* @__PURE__ */ (0, import_jsx_runtime109.jsx)(
              DataFormLayout,
              {
                data,
                form,
                onChange,
                validity: validity?.children
              }
            )
          }
        )
      ]
    }
  );
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/index.mjs
var import_jsx_runtime110 = __toESM(require_jsx_runtime(), 1);
var FORM_FIELD_LAYOUTS = [
  {
    type: "regular",
    component: FormRegularField,
    wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
      Stack4,
      {
        direction: "column",
        className: "dataforms-layouts__wrapper",
        gap: "lg",
        children
      }
    )
  },
  {
    type: "panel",
    component: FormPanelField,
    wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
      Stack4,
      {
        direction: "column",
        className: "dataforms-layouts__wrapper",
        gap: "md",
        children
      }
    )
  },
  {
    type: "card",
    component: FormCardField,
    wrapper: ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
      Stack4,
      {
        direction: "column",
        className: "dataforms-layouts__wrapper",
        gap: "xl",
        children
      }
    )
  },
  {
    type: "row",
    component: FormRowField,
    wrapper: ({
      children,
      layout
    }) => /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
      Stack4,
      {
        direction: "column",
        className: "dataforms-layouts__wrapper",
        gap: "lg",
        children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)("div", { className: "dataforms-layouts-row__field", children: /* @__PURE__ */ (0, import_jsx_runtime110.jsx)(
          Stack4,
          {
            direction: "row",
            gap: "lg",
            align: layout.alignment,
            children
          }
        ) })
      }
    )
  },
  {
    type: "details",
    component: FormDetailsField
  }
];
function getFormFieldLayout(type) {
  return FORM_FIELD_LAYOUTS.find((layout) => layout.type === type);
}

// node_modules/@wordpress/dataviews/build-module/components/dataform-layouts/data-form-layout.mjs
var import_jsx_runtime111 = __toESM(require_jsx_runtime(), 1);
var DEFAULT_WRAPPER = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(Stack4, { direction: "column", className: "dataforms-layouts__wrapper", gap: "lg", children });
function DataFormLayout({
  data,
  form,
  onChange,
  validity,
  children,
  as
}) {
  const { fields: fieldDefinitions } = (0, import_element94.useContext)(dataform_context_default);
  const markWhenOptional = (0, import_element94.useMemo)(() => {
    const requiredCount = fieldDefinitions.filter(
      (f2) => !!f2.isValid?.required
    ).length;
    const optionalCount = fieldDefinitions.length - requiredCount;
    return requiredCount > optionalCount;
  }, [fieldDefinitions]);
  function getFieldDefinition2(field) {
    return fieldDefinitions.find(
      (fieldDefinition) => fieldDefinition.id === field.id
    );
  }
  const Wrapper = as ?? getFormFieldLayout(form.layout.type)?.wrapper ?? DEFAULT_WRAPPER;
  return /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(Wrapper, { layout: form.layout, children: form.fields.map((formField) => {
    const FieldLayout = getFormFieldLayout(formField.layout.type)?.component;
    if (!FieldLayout) {
      return null;
    }
    const fieldDefinition = !formField.children ? getFieldDefinition2(formField) : void 0;
    if (fieldDefinition && fieldDefinition.isVisible && !fieldDefinition.isVisible(data)) {
      return null;
    }
    if (children) {
      return children(
        FieldLayout,
        formField,
        validity?.[formField.id],
        markWhenOptional
      );
    }
    return /* @__PURE__ */ (0, import_jsx_runtime111.jsx)(
      FieldLayout,
      {
        data,
        field: formField,
        onChange,
        markWhenOptional,
        validity: validity?.[formField.id]
      },
      formField.id
    );
  }) });
}

// node_modules/@wordpress/dataviews/build-module/dataform/index.mjs
var import_jsx_runtime112 = __toESM(require_jsx_runtime(), 1);
function DataForm({
  data,
  form,
  fields,
  onChange,
  validity
}) {
  const normalizedForm = (0, import_element95.useMemo)(() => normalize_form_default(form), [form]);
  const normalizedFields = (0, import_element95.useMemo)(
    () => normalizeFields(fields),
    [fields]
  );
  if (!form.fields) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(DataFormProvider, { fields: normalizedFields, children: /* @__PURE__ */ (0, import_jsx_runtime112.jsx)(
    DataFormLayout,
    {
      data,
      form: normalizedForm,
      onChange,
      validity
    }
  ) });
}

// routes/ai-home/stage.tsx
var import_element100 = __toESM(require_element());
var import_i18n27 = __toESM(require_i18n());

// node_modules/@wordpress/icons/build-module/library/check.mjs
var import_primitives17 = __toESM(require_primitives(), 1);
var import_jsx_runtime113 = __toESM(require_jsx_runtime(), 1);
var check_default = /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_primitives17.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime113.jsx)(import_primitives17.Path, { d: "M16.5 7.5 10 13.9l-2.5-2.4-1 1 3.5 3.6 7.5-7.6z" }) });

// node_modules/@wordpress/icons/build-module/library/info.mjs
var import_primitives18 = __toESM(require_primitives(), 1);
var import_jsx_runtime114 = __toESM(require_jsx_runtime(), 1);
var info_default2 = /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(import_primitives18.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime114.jsx)(import_primitives18.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 12a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0ZM12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4v1.5h-1.5V8h1.5Zm0 8v-5h-1.5v5h1.5Z" }) });

// node_modules/@wordpress/icons/build-module/library/more-vertical.mjs
var import_primitives19 = __toESM(require_primitives(), 1);
var import_jsx_runtime115 = __toESM(require_jsx_runtime(), 1);
var more_vertical_default = /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_primitives19.SVG, { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime115.jsx)(import_primitives19.Path, { d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z" }) });

// routes/ai-home/stage.tsx
var import_notices2 = __toESM(require_notices());

// routes/ai-home/ai-icon.tsx
var import_primitives20 = __toESM(require_primitives());
var import_jsx_runtime116 = __toESM(require_jsx_runtime());
function AIIcon({
  className = "wpai-icon"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime116.jsxs)(import_primitives20.SVG, { viewBox: "0 0 236 236", className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_primitives20.Path, { d: "m183.227 194.475-32.474-84.289V79.172h12.744v-12.12H72.494v12.12h12.744v31.014l-32.474 84.289a11.7 11.7 0 0 0-.764 4.118C52 204.885 57.101 210 63.376 210h109.239c1.405 0 2.791-.267 4.106-.766 5.866-2.264 8.781-8.877 6.506-14.759M97.324 112.45V79.529h41.343v32.921l16.156 41.939a45.6 45.6 0 0 0-11.357-1.426c-10.878 0-21.187 3.833-29.381 10.695a33.5 33.5 0 0 1-21.56 7.824 33.4 33.4 0 0 1-16.317-4.224zm-32.918 85.43 7.412-19.214a45.6 45.6 0 0 0 20.725 4.955c10.878 0 21.187-3.833 29.381-10.695 6.025-5.026 13.561-7.824 21.56-7.824a33.4 33.4 0 0 1 17.347 4.83l10.754 27.948z" }),
    /* @__PURE__ */ (0, import_jsx_runtime116.jsx)(import_primitives20.Path, { d: "m116.024 85.774.911 2.469c1.194 3.237 1.791 4.856 2.969 6.036 1.177 1.181 2.791 1.78 6.019 2.978l2.462.913-2.462.914c-3.228 1.198-4.842 1.797-6.019 2.977-1.178 1.181-1.775 2.799-2.969 6.037l-.911 2.468-.911-2.468c-1.195-3.238-1.792-4.856-2.969-6.037-1.178-1.18-2.792-1.779-6.02-2.977l-2.462-.914 2.462-.913c3.228-1.198 4.842-1.797 6.02-2.978 1.177-1.18 1.774-2.799 2.969-6.036zM122.546 120.224l1.223 3.317c1.605 4.349 2.408 6.524 3.99 8.11 1.582 1.587 3.75 2.391 8.087 4.001l3.308 1.227-3.308 1.227c-4.337 1.61-6.505 2.414-8.087 4.001-1.582 1.586-2.385 3.761-3.99 8.11l-1.223 3.317-1.224-3.317c-1.605-4.349-2.407-6.524-3.989-8.11-1.582-1.587-3.751-2.391-8.088-4.001l-3.308-1.227 3.308-1.227c4.337-1.61 6.506-2.414 8.088-4.001 1.582-1.586 2.384-3.761 3.989-8.11zM117.882 44.024l.645 1.749c.846 2.294 1.27 3.44 2.104 4.277s1.978 1.261 4.265 2.11l1.745.647-1.745.648c-2.287.848-3.431 1.273-4.265 2.11-.834.836-1.258 1.983-2.104 4.277l-.645 1.749-.646-1.75c-.846-2.293-1.269-3.44-2.104-4.277-.834-.836-1.978-1.26-4.265-2.11l-1.744-.647 1.744-.647c2.287-.849 3.431-1.273 4.265-2.11.835-.836 1.258-1.983 2.104-4.277zM130.622 26l.461 1.25c.605 1.638.907 2.457 1.503 3.055.596.597 1.413.9 3.047 1.507l1.246.462-1.246.462c-1.634.607-2.451.91-3.047 1.507-.596.598-.898 1.417-1.503 3.056l-.461 1.249-.461-1.25c-.604-1.638-.907-2.457-1.503-3.055-.596-.597-1.413-.9-3.046-1.507l-1.246-.462 1.246-.462c1.633-.607 2.45-.91 3.046-1.507.596-.598.899-1.417 1.503-3.055z" })
  ] });
}

// routes/ai-home/components/DeveloperSettings.tsx
var import_components26 = __toESM(require_components());
var import_element98 = __toESM(require_element());
var import_i18n26 = __toESM(require_i18n());

// routes/ai-home/hooks/use-developer-feature-settings.ts
var import_core_data = __toESM(require_core_data());
var import_data = __toESM(require_data());
var import_element96 = __toESM(require_element());
var import_i18n24 = __toESM(require_i18n());
var import_notices = __toESM(require_notices());
var EMPTY_SETTINGS = { provider: "", model: "" };
function useDeveloperFeatureSettings(featureId) {
  const fieldKey = `wpai_feature_${featureId}_field_developer`;
  const { editedRecord, isSaving } = (0, import_data.useSelect)((select) => {
    const store = select(import_core_data.store);
    return {
      editedRecord: store.getEditedEntityRecord("root", "site"),
      isSaving: store.isSavingEntityRecord("root", "site")
    };
  }, []);
  const { editEntityRecord } = (0, import_data.useDispatch)(import_core_data.store);
  const { __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEdits } = (0, import_data.useDispatch)(import_core_data.store);
  const { createErrorNotice } = (0, import_data.useDispatch)(import_notices.store);
  const rawValue = editedRecord?.[fieldKey];
  const settings = rawValue && typeof rawValue === "object" && !Array.isArray(rawValue) ? (() => {
    const raw = rawValue;
    return {
      provider: typeof raw.provider === "string" ? raw.provider : "",
      model: typeof raw.model === "string" ? raw.model : ""
    };
  })() : EMPTY_SETTINGS;
  const save = (0, import_element96.useCallback)(
    async (value) => {
      editEntityRecord("root", "site", void 0, {
        [fieldKey]: value
      });
      try {
        await saveSpecifiedEdits(
          "root",
          "site",
          void 0,
          [fieldKey],
          { throwOnError: true }
        );
      } catch {
        createErrorNotice(
          (0, import_i18n24.__)("Failed to save developer settings.", "ai"),
          { type: "snackbar" }
        );
      }
    },
    [fieldKey, editEntityRecord, saveSpecifiedEdits, createErrorNotice]
  );
  const update2 = (0, import_element96.useCallback)(
    (next) => save(next),
    [save]
  );
  const clear = (0, import_element96.useCallback)(
    () => save({}),
    [save]
  );
  return { settings, update: update2, clear, isSaving };
}

// routes/ai-home/hooks/use-providers.ts
var import_api_fetch = __toESM(require_api_fetch());
var import_element97 = __toESM(require_element());
var import_i18n25 = __toESM(require_i18n());
var providersCache = /* @__PURE__ */ new Map();
function fetchProviders(capability) {
  const existing = providersCache.get(capability);
  if (existing) {
    return existing;
  }
  const promise = (0, import_api_fetch.default)({
    path: `/ai/v1/providers?capability=${encodeURIComponent(
      capability
    )}`
  }).catch((error2) => {
    providersCache.delete(capability);
    throw error2;
  });
  providersCache.set(capability, promise);
  return promise;
}
function useProviders(capability) {
  const [providers, setProviders] = (0, import_element97.useState)([]);
  const [isLoading, setIsLoading] = (0, import_element97.useState)(capability !== "none");
  const [fetchError, setFetchError] = (0, import_element97.useState)(null);
  (0, import_element97.useEffect)(() => {
    if (capability === "none") {
      setProviders([]);
      setFetchError(null);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setFetchError(null);
    fetchProviders(capability).then((data) => {
      setProviders(data);
      setFetchError(null);
    }).catch(() => {
      setProviders([]);
      setFetchError((0, import_i18n25.__)("Failed to load providers.", "ai"));
    }).finally(() => {
      setIsLoading(false);
    });
  }, [capability]);
  return { providers, isLoading, fetchError };
}

// routes/ai-home/components/DeveloperSettings.tsx
var import_jsx_runtime117 = __toESM(require_jsx_runtime());
function DeveloperSettings({
  featureId,
  capability
}) {
  const { providers, isLoading, fetchError } = useProviders(capability);
  const formWrapperRef = (0, import_element98.useRef)(null);
  const { settings, update: update2, clear, isSaving } = useDeveloperFeatureSettings(featureId);
  const getModelElements = (0, import_element98.useCallback)(() => {
    const provider = providers.find((p2) => p2.id === settings.provider);
    if (!provider) {
      return Promise.resolve([]);
    }
    return Promise.resolve([
      { value: "", label: (0, import_i18n26.__)("\u2014 Default \u2014", "ai") },
      ...provider.models.map((m2) => ({
        value: m2.id,
        label: m2.name
      }))
    ]);
  }, [settings.provider, providers]);
  const fields = (0, import_element98.useMemo)(
    () => [
      {
        id: "provider",
        type: "text",
        label: (0, import_i18n26.__)("Provider", "ai"),
        elements: [
          { value: "", label: (0, import_i18n26.__)("\u2014 Default \u2014", "ai") },
          ...providers.map((p2) => ({
            value: p2.id,
            label: p2.name
          }))
        ],
        Edit: "select"
      },
      {
        id: "model",
        type: "text",
        label: (0, import_i18n26.__)("Model", "ai"),
        isVisible: (data) => !!data.provider && !!providers.find((p2) => p2.id === data.provider),
        getElements: getModelElements,
        Edit: "select"
      }
    ],
    [providers, getModelElements]
  );
  const form = (0, import_element98.useMemo)(
    () => ({ fields: ["provider", "model"] }),
    []
  );
  const handleChange = (0, import_element98.useCallback)(
    (changes) => {
      if ("provider" in changes) {
        void update2({ provider: changes.provider ?? "", model: "" });
      } else {
        void update2({ ...settings, ...changes });
      }
    },
    [update2, settings]
  );
  const hasSavedSelection = settings.provider !== "" || settings.model !== "";
  const hasStaleProvider = !!settings.provider && !providers.find((p2) => p2.id === settings.provider);
  if (capability === "none") {
    return /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("div", { className: "ai-developer-mode-fields ai-feature-settings-form", children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("p", { children: (0, import_i18n26.__)(
      "This feature does not require an AI provider or model.",
      "ai"
    ) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)("div", { className: "ai-developer-mode-fields ai-feature-settings-form", children: [
    isLoading && /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)("div", { className: "ai-developer-mode-fields__loading-provider", children: [
      /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("span", { className: "ai-developer-mode-fields__loading-provider-label", children: (0, import_i18n26.__)("Provider", "ai") }),
      /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(import_components26.Spinner, {})
    ] }),
    !isLoading && fetchError && /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("p", { className: "ai-developer-mode-field__error", children: fetchError }),
    !isLoading && !fetchError && /* @__PURE__ */ (0, import_jsx_runtime117.jsxs)(import_jsx_runtime117.Fragment, { children: [
      hasStaleProvider && /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(
        notice_exports.Root,
        {
          className: "ai-developer-mode-fields__notice",
          intent: "warning",
          children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(notice_exports.Description, { children: (0, import_i18n26.__)(
            "The previously selected provider is no longer available. This feature will not function as expected until a valid provider is selected or the selection is reset to default.",
            "ai"
          ) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime117.jsx)("div", { ref: formWrapperRef, children: /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(
        DataForm,
        {
          data: settings,
          fields,
          form,
          onChange: handleChange
        }
      ) }),
      hasSavedSelection && /* @__PURE__ */ (0, import_jsx_runtime117.jsx)(
        import_components26.Button,
        {
          variant: "link",
          className: "ai-developer-mode-fields__reset-button",
          onClick: () => {
            formWrapperRef.current?.querySelector(
              "select"
            )?.focus();
            void clear();
          },
          disabled: isSaving,
          accessibleWhenDisabled: true,
          children: (0, import_i18n26.__)("Reset to default", "ai")
        }
      )
    ] })
  ] });
}

// routes/ai-home/components/FeatureToggle.tsx
var import_components27 = __toESM(require_components());

// routes/ai-home/hooks/use-developer-mode.ts
var import_element99 = __toESM(require_element());
var STORAGE_KEY = "ai_developer_mode";
var DeveloperModeContext = (0, import_element99.createContext)(false);
function useDeveloperModeContext() {
  return (0, import_element99.useContext)(DeveloperModeContext);
}
function useDeveloperMode() {
  const [isDeveloperMode, setIsDeveloperMode] = (0, import_element99.useState)(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });
  (0, import_element99.useEffect)(() => {
    try {
      if (isDeveloperMode) {
        localStorage.setItem(STORAGE_KEY, "true");
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
    }
  }, [isDeveloperMode]);
  const toggleDeveloperMode = (0, import_element99.useCallback)(() => {
    setIsDeveloperMode((prev) => !prev);
  }, []);
  return { isDeveloperMode, toggleDeveloperMode };
}

// routes/ai-home/components/FeatureToggle.tsx
var import_jsx_runtime118 = __toESM(require_jsx_runtime());
var FEATURE_SETTING_PATTERN = /^wpai_feature_(.+)_enabled$/;
function FeatureToggle({
  field,
  data,
  onChange,
  featureId,
  capability = "text_generation"
}) {
  const checked = !!field.getValue({ item: data });
  const isDeveloperMode = useDeveloperModeContext();
  const resolvedFeatureId = featureId ?? FEATURE_SETTING_PATTERN.exec(field.id)?.[1] ?? field.id;
  return /* @__PURE__ */ (0, import_jsx_runtime118.jsxs)(import_jsx_runtime118.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
      import_components27.ToggleControl,
      {
        label: field.label,
        help: field.description,
        checked,
        onChange: (value) => {
          onChange({ [field.id]: value });
        }
      }
    ),
    checked && isDeveloperMode && /* @__PURE__ */ (0, import_jsx_runtime118.jsx)(
      DeveloperSettings,
      {
        featureId: resolvedFeatureId,
        capability
      }
    )
  ] });
}

// routes/ai-home/style.scss
if (typeof document !== "undefined" && true && !document.head.querySelector("style[data-wp-hash='876f12e8c1']")) {
  const style = document.createElement("style");
  style.setAttribute("data-wp-hash", "876f12e8c1");
  style.appendChild(document.createTextNode(".ai-settings-page{box-sizing:border-box;margin:0 auto;max-width:680px;padding:24px;width:100%}@media (max-width:480px){.ai-settings-page{padding:8px}}.ai-settings-page__infotip-trigger{align-items:center;background:none;border:none;border-radius:var(--wpds-border-radius-sm,2px);color:inherit;cursor:var(--wpds-cursor-control,pointer);display:inline-flex;padding:0}.ai-settings-page__infotip-trigger:focus-visible{outline:2px solid var(--wp-admin-theme-color);outline-offset:2px}.ai-settings-page__infotip-description{display:block;line-height:1.5;margin:0;max-width:100%;width:min(360px,100vw - 40px)}.ai-feature-settings-form{margin-top:var(--wpds-dimension-padding-xs,4px);max-width:480px;padding-inline-start:40px}.ai-section-actions{border-top:1px solid var(--wpds-color-stroke-surface-neutral-weak,#e4e4e4);margin-top:var(--wpds-dimension-padding-md,12px);padding-top:var(--wpds-dimension-padding-sm,8px)}.ai-showcase-card--disabled{opacity:.6}.ai-settings-page__loading{min-height:50vh}.ai-developer-mode-fields{margin-top:var(--wpds-dimension-gap-lg,16px)}.ai-developer-mode-fields .ai-developer-mode-fields__loading-provider{display:flex;flex-direction:column;gap:8px}.ai-developer-mode-fields .ai-developer-mode-fields__loading-provider-label{font-size:11px;font-weight:499;line-height:1.4}.ai-developer-mode-fields .ai-developer-mode-fields__notice{margin-bottom:var(--wpds-dimension-gap-lg,12px)}.ai-developer-mode-fields .ai-developer-mode-fields__reset-button{margin-top:var(--wpds-dimension-gap-lg,12px)}"));
  document.head.appendChild(style);
}

// routes/ai-home/stage.tsx
var import_jsx_runtime119 = __toESM(require_jsx_runtime());
var FEATURE_SETTING_PATTERN2 = /^wpai_feature_(.+)_enabled$/;
var GLOBAL_FIELD_ID = "wpai_features_enabled";
var noop4 = () => {
};
function isRecord(value) {
  return typeof value === "object" && value !== null;
}
function toStringValue(value) {
  return typeof value === "string" ? value : "";
}
function isDefined(value) {
  return value !== null && value !== void 0;
}
function isSettingsField(value) {
  if (!isRecord(value)) {
    return false;
  }
  const id = value["id"];
  return typeof id === "string" && id !== "";
}
function parseFeatureGroup(value) {
  if (!isRecord(value)) {
    return null;
  }
  const featureGroup = value;
  const id = toStringValue(featureGroup.id);
  if (!id) {
    return null;
  }
  return {
    id,
    label: toStringValue(featureGroup.label) || id,
    description: toStringValue(featureGroup.description)
  };
}
function parseFeature(value) {
  if (!isRecord(value)) {
    return null;
  }
  const feature = value;
  const settingName = toStringValue(feature.settingName);
  if (!settingName) {
    return null;
  }
  const id = toStringValue(feature.id) || getFeatureIdFromSettingName(settingName);
  const rawFields = Array.isArray(feature.settingsFields) ? feature.settingsFields : [];
  return {
    id,
    settingName,
    label: toStringValue(feature.label) || getDefaultLabel(id),
    description: toStringValue(feature.description),
    category: toStringValue(feature.category) || "other",
    settingsFields: rawFields.filter(isSettingsField),
    stability: toStringValue(feature.stability) || "experimental",
    image: toStringValue(feature.image),
    capability: toStringValue(feature.capability) || "text_generation"
  };
}
function getFeatureIdFromSettingName(settingName) {
  const match2 = FEATURE_SETTING_PATTERN2.exec(settingName);
  return match2?.[1] ?? settingName;
}
function getDefaultLabel(key) {
  return key.split(/[-_]/).filter(Boolean).map((part) => part[0]?.toUpperCase() + part.slice(1)).join(" ");
}
function getSectionId(groupId) {
  return `feature-group-${groupId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}
function buildFallbackFeatureGroups(features) {
  const categories = Array.from(
    new Set(features.map((feature) => feature.category || "other"))
  );
  return categories.map((category) => ({
    id: category,
    label: category === "other" ? (0, import_i18n27.__)("Other Features", "ai") : getDefaultLabel(category),
    description: category === "other" ? (0, import_i18n27.__)("Additional AI-powered features.", "ai") : ""
  }));
}
function getPageData() {
  const fallback = {
    hasCredentials: false,
    hasValidCredentials: false,
    connectorsUrl: "",
    featureGroups: [],
    features: []
  };
  try {
    const rawData = JSON.parse(
      document.getElementById("wp-script-module-data-ai-wp-admin")?.textContent ?? "{}"
    );
    if (!isRecord(rawData)) {
      return fallback;
    }
    const pageData = rawData;
    const featureGroups = Array.isArray(pageData.featureGroups) ? pageData.featureGroups.map(parseFeatureGroup).filter(isDefined) : [];
    const features = Array.isArray(pageData.features) ? pageData.features.map(parseFeature).filter(isDefined) : [];
    return {
      hasCredentials: Boolean(pageData.hasCredentials),
      hasValidCredentials: Boolean(pageData.hasValidCredentials),
      connectorsUrl: toStringValue(pageData.connectorsUrl),
      featureGroups,
      features
    };
  } catch {
    return fallback;
  }
}
var PAGE_DATA = getPageData();
var STABLE_FEATURE_DEFINITIONS = (() => {
  const unique = [];
  const seen = /* @__PURE__ */ new Set();
  for (const feature of PAGE_DATA.features) {
    if (!seen.has(feature.settingName)) {
      seen.add(feature.settingName);
      unique.push(feature);
    }
  }
  return unique;
})();
function InfoTip({ content }) {
  const title = (0, import_i18n27.__)("More information", "ai");
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(popover_exports.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
      popover_exports.Trigger,
      {
        openOnHover: true,
        delay: 200,
        closeDelay: 200,
        "aria-label": title,
        className: "ai-settings-page__infotip-trigger",
        children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(Icon, { icon: info_default2, size: 20 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
      popover_exports.Popup,
      {
        side: "bottom",
        align: "end",
        className: "ai-settings-page__infotip-popover",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(popover_exports.Arrow, {}),
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(VisuallyHidden, { render: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(popover_exports.Title, {}), children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(popover_exports.Description, { className: "ai-settings-page__infotip-description", children: content })
        ]
      }
    )
  ] });
}
function buildToggleMessage(edits, featureDefinitions) {
  const entries = Object.entries(edits);
  if (entries.length === 0) {
    return (0, import_i18n27.__)("Settings saved.", "ai");
  }
  if (entries.length > 1) {
    const allEnabled = entries.every(([, value]) => value === true);
    const allDisabled = entries.every(([, value]) => value === false);
    const count = entries.length;
    if (allEnabled) {
      return (0, import_i18n27.sprintf)(
        // translators: %d: Number of experiments.
        (0, import_i18n27._n)(
          "%d experiment enabled",
          "%d experiments enabled",
          count,
          "ai"
        ),
        count
      );
    }
    if (allDisabled) {
      return (0, import_i18n27.sprintf)(
        // translators: %d: Number of experiments.
        (0, import_i18n27._n)(
          "%d experiment disabled",
          "%d experiments disabled",
          count,
          "ai"
        ),
        count
      );
    }
    return (0, import_i18n27.sprintf)(
      // translators: %d: Number of experiments.
      (0, import_i18n27._n)(
        "%d experiment updated",
        "%d experiments updated",
        count,
        "ai"
      ),
      count
    );
  }
  const entry = entries[0];
  if (!entry) {
    return (0, import_i18n27.__)("Settings saved.", "ai");
  }
  if (entry[0] === GLOBAL_FIELD_ID) {
    return entry[1] ? (0, import_i18n27.__)("AI enabled.", "ai") : (0, import_i18n27.__)("AI disabled.", "ai");
  }
  const feature = featureDefinitions.find(
    (f2) => f2.settingName === entry[0]
  );
  const label = feature?.label ?? entry[0];
  return entry[1] ? (
    // translators: %s: Feature label.
    (0, import_i18n27.sprintf)((0, import_i18n27.__)("%s enabled.", "ai"), label)
  ) : (
    // translators: %s: Feature label.
    (0, import_i18n27.sprintf)((0, import_i18n27.__)("%s disabled.", "ai"), label)
  );
}
function DisabledToggle({ field, data }) {
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
    import_components28.ToggleControl,
    {
      label: field.label,
      help: field.description,
      checked: !!field.getValue({ item: data }),
      onChange: noop4,
      disabled: true
    }
  );
}
function SectionActions({
  experimentSettings,
  data,
  globalEnabled,
  onBulkChange
}) {
  const allEnabled = (0, import_element100.useMemo)(() => {
    return experimentSettings.every(
      (settingName) => data[settingName]
    );
  }, [experimentSettings, data]);
  const allDisabled = (0, import_element100.useMemo)(() => {
    return experimentSettings.every(
      (settingName) => !data[settingName]
    );
  }, [experimentSettings, data]);
  const handleEnableAll = (0, import_element100.useCallback)(() => {
    const edits = {};
    let enabledCount = 0;
    for (const settingName of experimentSettings) {
      if (!data[settingName]) {
        edits[settingName] = true;
        enabledCount++;
      }
    }
    if (enabledCount > 0) {
      onBulkChange(edits);
    }
  }, [experimentSettings, data, onBulkChange]);
  const handleDisableAll = (0, import_element100.useCallback)(() => {
    const edits = {};
    let disabledCount = 0;
    for (const settingName of experimentSettings) {
      if (data[settingName]) {
        edits[settingName] = false;
        disabledCount++;
      }
    }
    if (disabledCount > 0) {
      onBulkChange(edits);
    }
  }, [experimentSettings, data, onBulkChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(Stack3, { className: "ai-section-actions", direction: "row", gap: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
      Button4,
      {
        variant: "outline",
        size: "compact",
        onClick: handleEnableAll,
        disabled: !globalEnabled || allEnabled,
        children: (0, import_i18n27.__)("Enable all", "ai")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
      Button4,
      {
        variant: "outline",
        size: "compact",
        onClick: handleDisableAll,
        disabled: !globalEnabled || allDisabled,
        children: (0, import_i18n27.__)("Disable all", "ai")
      }
    )
  ] });
}
function InlineFeatureSettings({ feature }) {
  const fieldIds = (0, import_element100.useMemo)(
    () => feature.settingsFields.map((f2) => f2.id),
    [feature.settingsFields]
  );
  const { editedRecord, nonTransientEdits } = (0, import_data2.useSelect)((select) => {
    const store = select(import_core_data2.store);
    return {
      editedRecord: store.getEditedEntityRecord("root", "site"),
      nonTransientEdits: store.getEntityRecordNonTransientEdits(
        "root",
        "site"
      ) ?? {}
    };
  }, []);
  const [isSaving, setIsSaving] = (0, import_element100.useState)(false);
  const isDirty = (0, import_element100.useMemo)(
    () => fieldIds.some((id) => id in nonTransientEdits),
    [fieldIds, nonTransientEdits]
  );
  const { editEntityRecord } = (0, import_data2.useDispatch)(import_core_data2.store);
  const { __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEdits } = (0, import_data2.useDispatch)(import_core_data2.store);
  const { createSuccessNotice, createErrorNotice } = (0, import_data2.useDispatch)(import_notices2.store);
  const data = (0, import_element100.useMemo)(() => {
    const base = {};
    for (const field of feature.settingsFields) {
      base[field.id] = editedRecord?.[field.id] ?? field.default;
    }
    return base;
  }, [feature.settingsFields, editedRecord]);
  const fields = (0, import_element100.useMemo)(
    () => feature.settingsFields.map(
      ({ default: _, ...fieldProps }) => fieldProps
    ),
    [feature.settingsFields]
  );
  const form = (0, import_element100.useMemo)(
    () => ({
      fields: feature.settingsFields.map((f2) => f2.id)
    }),
    [feature.settingsFields]
  );
  const handleChange = (0, import_element100.useCallback)(
    (edits) => {
      editEntityRecord("root", "site", void 0, edits);
    },
    [editEntityRecord]
  );
  const handleSave = (0, import_element100.useCallback)(async () => {
    setIsSaving(true);
    try {
      await saveSpecifiedEdits("root", "site", void 0, fieldIds, {
        throwOnError: true
      });
      createSuccessNotice(
        (0, import_i18n27.sprintf)(
          // translators: %s: Feature label.
          (0, import_i18n27.__)("%s settings saved.", "ai"),
          feature.label
        ),
        { type: "snackbar" }
      );
    } catch {
      createErrorNotice((0, import_i18n27.__)("Failed to save settings.", "ai"), {
        type: "snackbar"
      });
    } finally {
      setIsSaving(false);
    }
  }, [
    saveSpecifiedEdits,
    fieldIds,
    createSuccessNotice,
    createErrorNotice,
    feature.label
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(Stack3, { direction: "column", gap: "md", className: "ai-feature-settings-form", children: [
    /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
      DataForm,
      {
        data,
        fields,
        form,
        onChange: handleChange
      }
    ),
    isDirty && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(Stack3, { align: "flex-end", direction: "row", children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
      Button4,
      {
        variant: "solid",
        onClick: handleSave,
        disabled: isSaving,
        size: "compact",
        "aria-label": (0, import_i18n27.sprintf)(
          // translators: %s: Feature label.
          (0, import_i18n27.__)("Save %s settings", "ai"),
          feature.label
        ),
        loadingAnnouncement: isSaving ? (0, import_i18n27.__)("Saving settings\u2026", "ai") : "",
        loading: isSaving,
        children: (0, import_i18n27.__)("Save", "ai")
      }
    ) })
  ] });
}
var FEATURES_BY_SETTING = new Map(
  STABLE_FEATURE_DEFINITIONS.filter(
    (f2) => f2.settingsFields.length > 0
  ).map((f2) => [f2.settingName, f2])
);
function FeatureToggleWithSettings({
  field,
  data,
  onChange
}) {
  const feature = FEATURES_BY_SETTING.get(field.id);
  const checked = !!field.getValue({ item: data });
  const isDeveloperMode = useDeveloperModeContext();
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)("div", { className: "ai-feature-toggle-with-settings", children: [
    /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
      import_components28.ToggleControl,
      {
        label: field.label,
        help: field.description,
        checked,
        onChange: (value) => {
          onChange({ [field.id]: value });
        }
      }
    ),
    checked && feature && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(InlineFeatureSettings, { feature }),
    checked && isDeveloperMode && feature && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
      DeveloperSettings,
      {
        featureId: feature.id,
        capability: feature.capability
      }
    )
  ] });
}
var VISUAL_CARD_FEATURES = new Map(
  STABLE_FEATURE_DEFINITIONS.filter(
    (f2) => f2.stability === "stable" && f2.image !== ""
  ).map((f2) => [f2.settingName, f2])
);
function VisualCardToggle({
  field,
  data,
  onChange
}) {
  const feature = VISUAL_CARD_FEATURES.get(field.id);
  const globalEnabled = !!data[GLOBAL_FIELD_ID];
  const checked = !!field.getValue({ item: data });
  const isDeveloperMode = useDeveloperModeContext();
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(
    card_exports.Root,
    {
      className: `${!globalEnabled ? " ai-showcase-card--disabled" : ""}`,
      children: [
        feature?.image && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)("img", { alt: "", loading: "lazy", src: feature.image }),
        /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(card_exports.Content, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
            import_components28.ToggleControl,
            {
              label: field.label,
              checked,
              onChange: (value) => onChange({ [field.id]: value }),
              disabled: !globalEnabled,
              help: field.description
            }
          ),
          checked && isDeveloperMode && feature && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
            DeveloperSettings,
            {
              featureId: feature.id,
              capability: feature.capability
            }
          )
        ] })
      ]
    }
  );
}
function AISettingsPage() {
  const { editedRecord, isLoading } = (0, import_data2.useSelect)((select) => {
    const store = select(import_core_data2.store);
    return {
      editedRecord: store.getEditedEntityRecord("root", "site"),
      isLoading: !store.hasFinishedResolution("getEntityRecord", [
        "root",
        "site"
      ])
    };
  }, []);
  const { editEntityRecord } = (0, import_data2.useDispatch)(import_core_data2.store);
  const { __experimentalSaveSpecifiedEntityEdits: saveSpecifiedEdits } = (0, import_data2.useDispatch)(import_core_data2.store);
  const { createSuccessNotice, createErrorNotice } = (0, import_data2.useDispatch)(import_notices2.store);
  const registry = (0, import_data2.useRegistry)();
  const { isDeveloperMode, toggleDeveloperMode } = useDeveloperMode();
  const featureDefinitions = (0, import_element100.useMemo)(() => {
    if (STABLE_FEATURE_DEFINITIONS.length > 0) {
      return STABLE_FEATURE_DEFINITIONS;
    }
    const seen = /* @__PURE__ */ new Set();
    return Object.keys(editedRecord ?? {}).filter((key) => FEATURE_SETTING_PATTERN2.test(key)).sort().reduce((acc, settingName) => {
      if (seen.has(settingName)) {
        return acc;
      }
      seen.add(settingName);
      const id = getFeatureIdFromSettingName(settingName);
      acc.push({
        id,
        settingName,
        label: getDefaultLabel(id),
        description: "",
        category: "other",
        settingsFields: [],
        stability: "experimental",
        image: "",
        capability: "text_generation"
      });
      return acc;
    }, []);
  }, [editedRecord]);
  const featureGroups = (0, import_element100.useMemo)(
    () => PAGE_DATA.featureGroups.length > 0 ? PAGE_DATA.featureGroups : buildFallbackFeatureGroups(featureDefinitions),
    [featureDefinitions]
  );
  const aiSettingKeys = (0, import_element100.useMemo)(() => {
    const settingKeys = /* @__PURE__ */ new Set([GLOBAL_FIELD_ID]);
    for (const feature of featureDefinitions) {
      settingKeys.add(feature.settingName);
    }
    return Array.from(settingKeys);
  }, [featureDefinitions]);
  const data = (0, import_element100.useMemo)(() => {
    const aiSettings = {};
    for (const key of aiSettingKeys) {
      aiSettings[key] = Boolean(editedRecord?.[key] ?? false);
    }
    return aiSettings;
  }, [aiSettingKeys, editedRecord]);
  const globalEnabled = Boolean(data[GLOBAL_FIELD_ID]);
  const globalToggleDescription = (0, import_i18n27.__)(
    "Control whether AI is enabled for your site. When disabled, all features and experiments will be inactive regardless of their individual settings.",
    "ai"
  );
  const handleChange = (0, import_element100.useCallback)(
    async (edits) => {
      const keys = Object.keys(edits);
      editEntityRecord("root", "site", void 0, edits);
      const message2 = buildToggleMessage(edits, featureDefinitions);
      try {
        await saveSpecifiedEdits("root", "site", void 0, keys, {
          throwOnError: true
        });
        createSuccessNotice(message2, { type: "snackbar" });
      } catch {
        const serverRecord = registry.select(import_core_data2.store).getEntityRecord("root", "site");
        const revert = {};
        for (const key of keys) {
          revert[key] = serverRecord?.[key];
        }
        editEntityRecord("root", "site", void 0, revert);
        createErrorNotice((0, import_i18n27.__)("Failed to save settings.", "ai"), {
          type: "snackbar"
        });
      }
    },
    [
      editEntityRecord,
      saveSpecifiedEdits,
      createSuccessNotice,
      createErrorNotice,
      featureDefinitions,
      registry
    ]
  );
  const fields = (0, import_element100.useMemo)(() => {
    const sectionActionsFields = [];
    const groupedFields = /* @__PURE__ */ new Map();
    for (const feature of featureDefinitions) {
      const category = feature.category || "other";
      const categoryFields = groupedFields.get(category) ?? [];
      categoryFields.push(feature.settingName);
      groupedFields.set(category, categoryFields);
    }
    for (const group of featureGroups) {
      const experimentSettings = groupedFields.get(group.id) ?? [];
      if (experimentSettings.length <= 1) {
        continue;
      }
      const actionFieldId = `section-actions-${group.id}`;
      sectionActionsFields.push({
        id: actionFieldId,
        label: "",
        type: "text",
        Edit: (props) => /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          SectionActions,
          {
            ...props,
            experimentSettings,
            globalEnabled,
            onBulkChange: handleChange
          }
        )
      });
    }
    const featureFields = featureDefinitions.map((feature) => {
      const baseField = {
        id: feature.settingName,
        label: feature.label,
        description: feature.description,
        type: "boolean"
      };
      if (VISUAL_CARD_FEATURES.has(feature.settingName)) {
        baseField.Edit = VisualCardToggle;
      } else if (!globalEnabled) {
        baseField.Edit = DisabledToggle;
      } else if (feature.settingsFields.length > 0) {
        baseField.Edit = FeatureToggleWithSettings;
      } else {
        const featureId = feature.id;
        const featureCapability = feature.capability;
        baseField.Edit = (props) => /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          FeatureToggle,
          {
            ...props,
            featureId,
            capability: featureCapability
          }
        );
      }
      return baseField;
    });
    return [...sectionActionsFields, ...featureFields];
  }, [featureDefinitions, featureGroups, globalEnabled, handleChange]);
  const form = (0, import_element100.useMemo)(() => {
    const showcaseChildren = [];
    const groupedFields = /* @__PURE__ */ new Map();
    for (const feature of featureDefinitions) {
      if (VISUAL_CARD_FEATURES.has(feature.settingName)) {
        showcaseChildren.push(feature.settingName);
      } else {
        const category = feature.category || "other";
        const categoryFields = groupedFields.get(category) ?? [];
        categoryFields.push(feature.settingName);
        groupedFields.set(category, categoryFields);
      }
    }
    const sectionFields = [];
    if (showcaseChildren.length > 0) {
      const rows = [];
      for (let i2 = 0; i2 < showcaseChildren.length; i2 += 2) {
        rows.push({
          id: `showcase-row-${i2}`,
          layout: { type: "row" },
          children: showcaseChildren.slice(i2, i2 + 2)
        });
      }
      sectionFields.push({
        id: "feature-group-showcase",
        layout: {
          type: "regular",
          labelPosition: "none"
        },
        children: rows
      });
    }
    const seenCategories = /* @__PURE__ */ new Set();
    for (const group of featureGroups) {
      const children = groupedFields.get(group.id) ?? [];
      if (children.length === 0) {
        continue;
      }
      seenCategories.add(group.id);
      const actionFieldId = `section-actions-${group.id}`;
      sectionFields.push({
        id: getSectionId(group.id),
        label: group.label,
        description: group.description,
        layout: {
          type: "card",
          withHeader: true,
          isOpened: true,
          isCollapsible: true
        },
        children: children.length > 1 ? [...children, actionFieldId] : children
      });
    }
    for (const [category, children] of groupedFields.entries()) {
      if (children.length === 0 || seenCategories.has(category)) {
        continue;
      }
      const actionFieldId = `section-actions-${category}`;
      sectionFields.push({
        id: getSectionId(category),
        label: getDefaultLabel(category),
        description: "",
        layout: {
          type: "card",
          withHeader: true,
          isOpened: true,
          isCollapsible: true
        },
        children: children.length > 1 ? [...children, actionFieldId] : children
      });
    }
    return {
      fields: sectionFields
    };
  }, [featureDefinitions, featureGroups]);
  return /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(DeveloperModeContext.Provider, { value: isDeveloperMode, children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
    page_default,
    {
      visual: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(AIIcon, {}),
      title: (0, import_i18n27.__)("AI", "ai"),
      subTitle: (0, import_i18n27.__)(
        "Configure AI features and experiments for your WordPress site.",
        "ai"
      ),
      actions: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(import_jsx_runtime119.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(Stack3, { align: "center", gap: "xs", children: [
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
            import_components28.ToggleControl,
            {
              label: (0, import_i18n27.__)("Enable AI", "ai"),
              checked: globalEnabled,
              onChange: (checked) => {
                void handleChange({
                  [GLOBAL_FIELD_ID]: checked
                });
              },
              disabled: isLoading
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(InfoTip, { content: globalToggleDescription })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          Link,
          {
            href: "https://github.com/WordPress/ai/tree/develop/docs",
            openInNewTab: true,
            children: (0, import_i18n27.__)("Docs", "ai")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          Link,
          {
            href: "https://github.com/WordPress/ai/blob/develop/CONTRIBUTING.md",
            openInNewTab: true,
            children: (0, import_i18n27.__)("Contribute", "ai")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          import_components28.DropdownMenu,
          {
            icon: more_vertical_default,
            label: (0, import_i18n27.__)("Developer Tools", "ai"),
            children: () => /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
              import_components28.MenuGroup,
              {
                label: (0, import_i18n27.__)("Developer Tools", "ai"),
                children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
                  import_components28.MenuItem,
                  {
                    role: "menuitemcheckbox",
                    isSelected: isDeveloperMode,
                    info: (0, import_i18n27.__)(
                      "Select a specific provider and model per feature",
                      "ai"
                    ),
                    icon: isDeveloperMode ? check_default : null,
                    onClick: () => {
                      toggleDeveloperMode();
                    },
                    children: (0, import_i18n27.__)("Model selection", "ai")
                  }
                )
              }
            )
          }
        )
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(Stack3, { className: "ai-settings-page", direction: "column", gap: "md", children: [
        !PAGE_DATA.hasValidCredentials && /* @__PURE__ */ (0, import_jsx_runtime119.jsxs)(notice_exports.Root, { intent: "error", children: [
          /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(notice_exports.Description, { children: !PAGE_DATA.hasCredentials ? (0, import_i18n27.__)(
            "The AI plugin requires a valid AI Connector to function properly. Verify you have one or more AI Connectors configured.",
            "ai"
          ) : (0, import_i18n27.__)(
            "The AI plugin requires a valid AI Connector to function properly. Please review the AI Connectors you have configured to ensure they are valid.",
            "ai"
          ) }),
          PAGE_DATA.connectorsUrl && /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(notice_exports.Actions, { children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
            notice_exports.ActionLink,
            {
              href: PAGE_DATA.connectorsUrl,
              children: (0, import_i18n27.__)("Manage Connectors", "ai")
            }
          ) })
        ] }),
        isLoading ? /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          Stack3,
          {
            align: "center",
            className: "ai-settings-page__loading",
            justify: "center",
            children: /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(import_components28.Spinner, {})
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime119.jsx)(
          DataForm,
          {
            data,
            fields,
            form,
            onChange: handleChange
          }
        )
      ] })
    }
  ) });
}
var stage = AISettingsPage;
export {
  stage
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.4.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
