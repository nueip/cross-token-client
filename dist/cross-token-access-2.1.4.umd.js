(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TokenInjection = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var promise$7 = {exports: {}};

	var promise$6 = {exports: {}};

	var check$1 = function (it) {
	  return it && it.Math == Math && it;
	};
	var global$L =
	  check$1(typeof globalThis == 'object' && globalThis) ||
	  check$1(typeof window == 'object' && window) ||
	  check$1(typeof self == 'object' && self) ||
	  check$1(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  (function () { return this; })() || Function('return this')();

	var fails$B = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$A = fails$B;
	var functionBindNative$1 = !fails$A(function () {
	  var test = (function () {  }).bind();
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$5 = functionBindNative$1;
	var FunctionPrototype$5 = Function.prototype;
	var apply$5 = FunctionPrototype$5.apply;
	var call$o = FunctionPrototype$5.call;
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND$5 ? call$o.bind(apply$5) : function () {
	  return call$o.apply(apply$5, arguments);
	});

	var NATIVE_BIND$4 = functionBindNative$1;
	var FunctionPrototype$4 = Function.prototype;
	var call$n = FunctionPrototype$4.call;
	var uncurryThisWithBind = NATIVE_BIND$4 && FunctionPrototype$4.bind.bind(call$n, call$n);
	var functionUncurryThisRaw = function (fn) {
	  return NATIVE_BIND$4 ? uncurryThisWithBind(fn) : function () {
	    return call$n.apply(fn, arguments);
	  };
	};

	var uncurryThisRaw$1 = functionUncurryThisRaw;
	var toString$c = uncurryThisRaw$1({}.toString);
	var stringSlice$2 = uncurryThisRaw$1(''.slice);
	var classofRaw$3 = function (it) {
	  return stringSlice$2(toString$c(it), 8, -1);
	};

	var classofRaw$2 = classofRaw$3;
	var uncurryThisRaw = functionUncurryThisRaw;
	var functionUncurryThis$1 = function (fn) {
	  if (classofRaw$2(fn) === 'Function') return uncurryThisRaw(fn);
	};

	var documentAll$2 = typeof document == 'object' && document.all;
	var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;
	var documentAll_1 = {
	  all: documentAll$2,
	  IS_HTMLDDA: IS_HTMLDDA
	};

	var $documentAll$1 = documentAll_1;
	var documentAll$1 = $documentAll$1.all;
	var isCallable$w = $documentAll$1.IS_HTMLDDA ? function (argument) {
	  return typeof argument == 'function' || argument === documentAll$1;
	} : function (argument) {
	  return typeof argument == 'function';
	};

	var objectGetOwnPropertyDescriptor$1 = {};

	var fails$z = fails$B;
	var descriptors$1 = !fails$z(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var NATIVE_BIND$3 = functionBindNative$1;
	var call$m = Function.prototype.call;
	var functionCall$1 = NATIVE_BIND$3 ? call$m.bind(call$m) : function () {
	  return call$m.apply(call$m, arguments);
	};

	var objectPropertyIsEnumerable$1 = {};

	var $propertyIsEnumerable$2 = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
	var NASHORN_BUG$1 = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable$2.call({ 1: 2 }, 1);
	objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$4(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$2;

	var createPropertyDescriptor$a = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var uncurryThis$y = functionUncurryThis$1;
	var fails$y = fails$B;
	var classof$d = classofRaw$3;
	var $Object$5 = Object;
	var split$1 = uncurryThis$y(''.split);
	var indexedObject$1 = fails$y(function () {
	  return !$Object$5('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$d(it) == 'String' ? split$1(it, '') : $Object$5(it);
	} : $Object$5;

	var isNullOrUndefined$6 = function (it) {
	  return it === null || it === undefined;
	};

	var isNullOrUndefined$5 = isNullOrUndefined$6;
	var $TypeError$e = TypeError;
	var requireObjectCoercible$7 = function (it) {
	  if (isNullOrUndefined$5(it)) throw $TypeError$e("Can't call method on " + it);
	  return it;
	};

	var IndexedObject$4 = indexedObject$1;
	var requireObjectCoercible$6 = requireObjectCoercible$7;
	var toIndexedObject$d = function (it) {
	  return IndexedObject$4(requireObjectCoercible$6(it));
	};

	var isCallable$v = isCallable$w;
	var $documentAll = documentAll_1;
	var documentAll = $documentAll.all;
	var isObject$o = $documentAll.IS_HTMLDDA ? function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$v(it) || it === documentAll;
	} : function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$v(it);
	};

	var path$j = {};

	var path$i = path$j;
	var global$K = global$L;
	var isCallable$u = isCallable$w;
	var aFunction$1 = function (variable) {
	  return isCallable$u(variable) ? variable : undefined;
	};
	var getBuiltIn$h = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path$i[namespace]) || aFunction$1(global$K[namespace])
	    : path$i[namespace] && path$i[namespace][method] || global$K[namespace] && global$K[namespace][method];
	};

	var uncurryThis$x = functionUncurryThis$1;
	var objectIsPrototypeOf$1 = uncurryThis$x({}.isPrototypeOf);

	var getBuiltIn$g = getBuiltIn$h;
	var engineUserAgent$1 = getBuiltIn$g('navigator', 'userAgent') || '';

	var global$J = global$L;
	var userAgent$5 = engineUserAgent$1;
	var process$5 = global$J.process;
	var Deno$2 = global$J.Deno;
	var versions$1 = process$5 && process$5.versions || Deno$2 && Deno$2.version;
	var v8$1 = versions$1 && versions$1.v8;
	var match$1, version$1;
	if (v8$1) {
	  match$1 = v8$1.split('.');
	  version$1 = match$1[0] > 0 && match$1[0] < 4 ? 1 : +(match$1[0] + match$1[1]);
	}
	if (!version$1 && userAgent$5) {
	  match$1 = userAgent$5.match(/Edge\/(\d+)/);
	  if (!match$1 || match$1[1] >= 74) {
	    match$1 = userAgent$5.match(/Chrome\/(\d+)/);
	    if (match$1) version$1 = +match$1[1];
	  }
	}
	var engineV8Version$1 = version$1;

	var V8_VERSION$4 = engineV8Version$1;
	var fails$x = fails$B;
	var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$x(function () {
	  var symbol = Symbol();
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    !Symbol.sham && V8_VERSION$4 && V8_VERSION$4 < 41;
	});

	var NATIVE_SYMBOL$7 = symbolConstructorDetection;
	var useSymbolAsUid$1 = NATIVE_SYMBOL$7
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var getBuiltIn$f = getBuiltIn$h;
	var isCallable$t = isCallable$w;
	var isPrototypeOf$a = objectIsPrototypeOf$1;
	var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;
	var $Object$4 = Object;
	var isSymbol$7 = USE_SYMBOL_AS_UID$3 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$f('Symbol');
	  return isCallable$t($Symbol) && isPrototypeOf$a($Symbol.prototype, $Object$4(it));
	};

	var $String$3 = String;
	var tryToString$7 = function (argument) {
	  try {
	    return $String$3(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var isCallable$s = isCallable$w;
	var tryToString$6 = tryToString$7;
	var $TypeError$d = TypeError;
	var aCallable$b = function (argument) {
	  if (isCallable$s(argument)) return argument;
	  throw $TypeError$d(tryToString$6(argument) + ' is not a function');
	};

	var aCallable$a = aCallable$b;
	var isNullOrUndefined$4 = isNullOrUndefined$6;
	var getMethod$5 = function (V, P) {
	  var func = V[P];
	  return isNullOrUndefined$4(func) ? undefined : aCallable$a(func);
	};

	var call$l = functionCall$1;
	var isCallable$r = isCallable$w;
	var isObject$n = isObject$o;
	var $TypeError$c = TypeError;
	var ordinaryToPrimitive$3 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$r(fn = input.toString) && !isObject$n(val = call$l(fn, input))) return val;
	  if (isCallable$r(fn = input.valueOf) && !isObject$n(val = call$l(fn, input))) return val;
	  if (pref !== 'string' && isCallable$r(fn = input.toString) && !isObject$n(val = call$l(fn, input))) return val;
	  throw $TypeError$c("Can't convert object to primitive value");
	};

	var shared$a = {exports: {}};

	var isPure = true;

	var global$I = global$L;
	var defineProperty$i = Object.defineProperty;
	var defineGlobalProperty$1 = function (key, value) {
	  try {
	    defineProperty$i(global$I, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$I[key] = value;
	  } return value;
	};

	var global$H = global$L;
	var defineGlobalProperty = defineGlobalProperty$1;
	var SHARED$1 = '__core-js_shared__';
	var store$7 = global$H[SHARED$1] || defineGlobalProperty(SHARED$1, {});
	var sharedStore$1 = store$7;

	var store$6 = sharedStore$1;
	(shared$a.exports = function (key, value) {
	  return store$6[key] || (store$6[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.25.5',
	  mode: 'pure' ,
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var requireObjectCoercible$5 = requireObjectCoercible$7;
	var $Object$3 = Object;
	var toObject$a = function (argument) {
	  return $Object$3(requireObjectCoercible$5(argument));
	};

	var uncurryThis$w = functionUncurryThis$1;
	var toObject$9 = toObject$a;
	var hasOwnProperty$1 = uncurryThis$w({}.hasOwnProperty);
	var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$1(toObject$9(it), key);
	};

	var uncurryThis$v = functionUncurryThis$1;
	var id$2 = 0;
	var postfix$1 = Math.random();
	var toString$b = uncurryThis$v(1.0.toString);
	var uid$7 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$b(++id$2 + postfix$1, 36);
	};

	var global$G = global$L;
	var shared$9 = shared$a.exports;
	var hasOwn$o = hasOwnProperty_1$1;
	var uid$6 = uid$7;
	var NATIVE_SYMBOL$6 = symbolConstructorDetection;
	var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
	var WellKnownSymbolsStore$2 = shared$9('wks');
	var Symbol$3 = global$G.Symbol;
	var symbolFor$1 = Symbol$3 && Symbol$3['for'];
	var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$2 ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$6;
	var wellKnownSymbol$o = function (name) {
	  if (!hasOwn$o(WellKnownSymbolsStore$2, name) || !(NATIVE_SYMBOL$6 || typeof WellKnownSymbolsStore$2[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL$6 && hasOwn$o(Symbol$3, name)) {
	      WellKnownSymbolsStore$2[name] = Symbol$3[name];
	    } else if (USE_SYMBOL_AS_UID$2 && symbolFor$1) {
	      WellKnownSymbolsStore$2[name] = symbolFor$1(description);
	    } else {
	      WellKnownSymbolsStore$2[name] = createWellKnownSymbol$1(description);
	    }
	  } return WellKnownSymbolsStore$2[name];
	};

	var call$k = functionCall$1;
	var isObject$m = isObject$o;
	var isSymbol$6 = isSymbol$7;
	var getMethod$4 = getMethod$5;
	var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
	var wellKnownSymbol$n = wellKnownSymbol$o;
	var $TypeError$b = TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$n('toPrimitive');
	var toPrimitive$3 = function (input, pref) {
	  if (!isObject$m(input) || isSymbol$6(input)) return input;
	  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$k(exoticToPrim, input, pref);
	    if (!isObject$m(result) || isSymbol$6(result)) return result;
	    throw $TypeError$b("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive$2(input, pref);
	};

	var toPrimitive$2 = toPrimitive$3;
	var isSymbol$5 = isSymbol$7;
	var toPropertyKey$7 = function (argument) {
	  var key = toPrimitive$2(argument, 'string');
	  return isSymbol$5(key) ? key : key + '';
	};

	var global$F = global$L;
	var isObject$l = isObject$o;
	var document$4 = global$F.document;
	var EXISTS$3 = isObject$l(document$4) && isObject$l(document$4.createElement);
	var documentCreateElement$2 = function (it) {
	  return EXISTS$3 ? document$4.createElement(it) : {};
	};

	var DESCRIPTORS$l = descriptors$1;
	var fails$w = fails$B;
	var createElement$2 = documentCreateElement$2;
	var ie8DomDefine$1 = !DESCRIPTORS$l && !fails$w(function () {
	  return Object.defineProperty(createElement$2('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$k = descriptors$1;
	var call$j = functionCall$1;
	var propertyIsEnumerableModule$3 = objectPropertyIsEnumerable$1;
	var createPropertyDescriptor$9 = createPropertyDescriptor$a;
	var toIndexedObject$c = toIndexedObject$d;
	var toPropertyKey$6 = toPropertyKey$7;
	var hasOwn$n = hasOwnProperty_1$1;
	var IE8_DOM_DEFINE$3 = ie8DomDefine$1;
	var $getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
	objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$k ? $getOwnPropertyDescriptor$4 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$c(O);
	  P = toPropertyKey$6(P);
	  if (IE8_DOM_DEFINE$3) try {
	    return $getOwnPropertyDescriptor$4(O, P);
	  } catch (error) {  }
	  if (hasOwn$n(O, P)) return createPropertyDescriptor$9(!call$j(propertyIsEnumerableModule$3.f, O, P), O[P]);
	};

	var fails$v = fails$B;
	var isCallable$q = isCallable$w;
	var replacement$1 = /#|\.prototype\./;
	var isForced$4 = function (feature, detection) {
	  var value = data$2[normalize$1(feature)];
	  return value == POLYFILL$1 ? true
	    : value == NATIVE$1 ? false
	    : isCallable$q(detection) ? fails$v(detection)
	    : !!detection;
	};
	var normalize$1 = isForced$4.normalize = function (string) {
	  return String(string).replace(replacement$1, '.').toLowerCase();
	};
	var data$2 = isForced$4.data = {};
	var NATIVE$1 = isForced$4.NATIVE = 'N';
	var POLYFILL$1 = isForced$4.POLYFILL = 'P';
	var isForced_1$1 = isForced$4;

	var uncurryThis$u = functionUncurryThis$1;
	var aCallable$9 = aCallable$b;
	var NATIVE_BIND$2 = functionBindNative$1;
	var bind$d = uncurryThis$u(uncurryThis$u.bind);
	var functionBindContext = function (fn, that) {
	  aCallable$9(fn);
	  return that === undefined ? fn : NATIVE_BIND$2 ? bind$d(fn, that) : function () {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty$1 = {};

	var DESCRIPTORS$j = descriptors$1;
	var fails$u = fails$B;
	var v8PrototypeDefineBug$1 = DESCRIPTORS$j && fails$u(function () {
	  return Object.defineProperty(function () {  }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var isObject$k = isObject$o;
	var $String$2 = String;
	var $TypeError$a = TypeError;
	var anObject$e = function (argument) {
	  if (isObject$k(argument)) return argument;
	  throw $TypeError$a($String$2(argument) + ' is not an object');
	};

	var DESCRIPTORS$i = descriptors$1;
	var IE8_DOM_DEFINE$2 = ie8DomDefine$1;
	var V8_PROTOTYPE_DEFINE_BUG$2 = v8PrototypeDefineBug$1;
	var anObject$d = anObject$e;
	var toPropertyKey$5 = toPropertyKey$7;
	var $TypeError$9 = TypeError;
	var $defineProperty$2 = Object.defineProperty;
	var $getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;
	var ENUMERABLE$1 = 'enumerable';
	var CONFIGURABLE$3 = 'configurable';
	var WRITABLE$1 = 'writable';
	objectDefineProperty$1.f = DESCRIPTORS$i ? V8_PROTOTYPE_DEFINE_BUG$2 ? function defineProperty(O, P, Attributes) {
	  anObject$d(O);
	  P = toPropertyKey$5(P);
	  anObject$d(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE$1 in Attributes && !Attributes[WRITABLE$1]) {
	    var current = $getOwnPropertyDescriptor$3(O, P);
	    if (current && current[WRITABLE$1]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$3 in Attributes ? Attributes[CONFIGURABLE$3] : current[CONFIGURABLE$3],
	        enumerable: ENUMERABLE$1 in Attributes ? Attributes[ENUMERABLE$1] : current[ENUMERABLE$1],
	        writable: false
	      };
	    }
	  } return $defineProperty$2(O, P, Attributes);
	} : $defineProperty$2 : function defineProperty(O, P, Attributes) {
	  anObject$d(O);
	  P = toPropertyKey$5(P);
	  anObject$d(Attributes);
	  if (IE8_DOM_DEFINE$2) try {
	    return $defineProperty$2(O, P, Attributes);
	  } catch (error) {  }
	  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$9('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$h = descriptors$1;
	var definePropertyModule$7 = objectDefineProperty$1;
	var createPropertyDescriptor$8 = createPropertyDescriptor$a;
	var createNonEnumerableProperty$c = DESCRIPTORS$h ? function (object, key, value) {
	  return definePropertyModule$7.f(object, key, createPropertyDescriptor$8(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$E = global$L;
	var apply$4 = functionApply;
	var uncurryThis$t = functionUncurryThis$1;
	var isCallable$p = isCallable$w;
	var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;
	var isForced$3 = isForced_1$1;
	var path$h = path$j;
	var bind$c = functionBindContext;
	var createNonEnumerableProperty$b = createNonEnumerableProperty$c;
	var hasOwn$m = hasOwnProperty_1$1;
	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return apply$4(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};
	var _export$1 = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;
	  var nativeSource = GLOBAL ? global$E : STATIC ? global$E[TARGET] : (global$E[TARGET] || {}).prototype;
	  var target = GLOBAL ? path$h : path$h[TARGET] || createNonEnumerableProperty$b(path$h, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
	  for (key in source) {
	    FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    USE_NATIVE = !FORCED && nativeSource && hasOwn$m(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.dontCallGetSet) {
	      descriptor = getOwnPropertyDescriptor$3(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];
	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;
	    if (options.bind && USE_NATIVE) resultProperty = bind$c(sourceProperty, global$E);
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    else if (PROTO && isCallable$p(sourceProperty)) resultProperty = uncurryThis$t(sourceProperty);
	    else resultProperty = sourceProperty;
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$b(resultProperty, 'sham', true);
	    }
	    createNonEnumerableProperty$b(target, key, resultProperty);
	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwn$m(path$h, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$b(path$h, VIRTUAL_PROTOTYPE, {});
	      }
	      createNonEnumerableProperty$b(path$h[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty$b(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var shared$8 = shared$a.exports;
	var uid$5 = uid$7;
	var keys$5 = shared$8('keys');
	var sharedKey$6 = function (key) {
	  return keys$5[key] || (keys$5[key] = uid$5(key));
	};

	var fails$t = fails$B;
	var correctPrototypeGetter = !fails$t(function () {
	  function F() {  }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var hasOwn$l = hasOwnProperty_1$1;
	var isCallable$o = isCallable$w;
	var toObject$8 = toObject$a;
	var sharedKey$5 = sharedKey$6;
	var CORRECT_PROTOTYPE_GETTER$1 = correctPrototypeGetter;
	var IE_PROTO$1 = sharedKey$5('IE_PROTO');
	var $Object$2 = Object;
	var ObjectPrototype$1 = $Object$2.prototype;
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER$1 ? $Object$2.getPrototypeOf : function (O) {
	  var object = toObject$8(O);
	  if (hasOwn$l(object, IE_PROTO$1)) return object[IE_PROTO$1];
	  var constructor = object.constructor;
	  if (isCallable$o(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof $Object$2 ? ObjectPrototype$1 : null;
	};

	var isCallable$n = isCallable$w;
	var $String$1 = String;
	var $TypeError$8 = TypeError;
	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$n(argument)) return argument;
	  throw $TypeError$8("Can't set " + $String$1(argument) + ' as a prototype');
	};

	var uncurryThis$s = functionUncurryThis$1;
	var anObject$c = anObject$e;
	var aPossiblePrototype = aPossiblePrototype$1;
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThis$s(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {  }
	  return function setPrototypeOf(O, proto) {
	    anObject$c(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var objectGetOwnPropertyNames$1 = {};

	var ceil$1 = Math.ceil;
	var floor$1 = Math.floor;
	var mathTrunc = Math.trunc || function trunc(x) {
	  var n = +x;
	  return (n > 0 ? floor$1 : ceil$1)(n);
	};

	var trunc = mathTrunc;
	var toIntegerOrInfinity$6 = function (argument) {
	  var number = +argument;
	  return number !== number || number === 0 ? 0 : trunc(number);
	};

	var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;
	var max$3 = Math.max;
	var min$3 = Math.min;
	var toAbsoluteIndex$5 = function (index, length) {
	  var integer = toIntegerOrInfinity$5(index);
	  return integer < 0 ? max$3(integer + length, 0) : min$3(integer, length);
	};

	var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;
	var min$2 = Math.min;
	var toLength$3 = function (argument) {
	  return argument > 0 ? min$2(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0;
	};

	var toLength$2 = toLength$3;
	var lengthOfArrayLike$8 = function (obj) {
	  return toLength$2(obj.length);
	};

	var toIndexedObject$b = toIndexedObject$d;
	var toAbsoluteIndex$4 = toAbsoluteIndex$5;
	var lengthOfArrayLike$7 = lengthOfArrayLike$8;
	var createMethod$4 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$b($this);
	    var length = lengthOfArrayLike$7(O);
	    var index = toAbsoluteIndex$4(fromIndex, length);
	    var value;
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};
	var arrayIncludes$1 = {
	  includes: createMethod$4(true),
	  indexOf: createMethod$4(false)
	};

	var hiddenKeys$a = {};

	var uncurryThis$r = functionUncurryThis$1;
	var hasOwn$k = hasOwnProperty_1$1;
	var toIndexedObject$a = toIndexedObject$d;
	var indexOf$1 = arrayIncludes$1.indexOf;
	var hiddenKeys$9 = hiddenKeys$a;
	var push$4 = uncurryThis$r([].push);
	var objectKeysInternal$1 = function (object, names) {
	  var O = toIndexedObject$a(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$k(hiddenKeys$9, key) && hasOwn$k(O, key) && push$4(result, key);
	  while (names.length > i) if (hasOwn$k(O, key = names[i++])) {
	    ~indexOf$1(result, key) || push$4(result, key);
	  }
	  return result;
	};

	var enumBugKeys$5 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys$2 = objectKeysInternal$1;
	var enumBugKeys$4 = enumBugKeys$5;
	var hiddenKeys$8 = enumBugKeys$4.concat('length', 'prototype');
	objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$2(O, hiddenKeys$8);
	};

	var objectGetOwnPropertySymbols$1 = {};

	objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

	var getBuiltIn$e = getBuiltIn$h;
	var uncurryThis$q = functionUncurryThis$1;
	var getOwnPropertyNamesModule$3 = objectGetOwnPropertyNames$1;
	var getOwnPropertySymbolsModule$4 = objectGetOwnPropertySymbols$1;
	var anObject$b = anObject$e;
	var concat$7 = uncurryThis$q([].concat);
	var ownKeys$3 = getBuiltIn$e('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$3.f(anObject$b(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$4.f;
	  return getOwnPropertySymbols ? concat$7(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$j = hasOwnProperty_1$1;
	var ownKeys$2 = ownKeys$3;
	var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor$1;
	var definePropertyModule$6 = objectDefineProperty$1;
	var copyConstructorProperties$3 = function (target, source, exceptions) {
	  var keys = ownKeys$2(source);
	  var defineProperty = definePropertyModule$6.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$j(target, key) && !(exceptions && hasOwn$j(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var objectDefineProperties = {};

	var internalObjectKeys$1 = objectKeysInternal$1;
	var enumBugKeys$3 = enumBugKeys$5;
	var objectKeys$4 = Object.keys || function keys(O) {
	  return internalObjectKeys$1(O, enumBugKeys$3);
	};

	var DESCRIPTORS$g = descriptors$1;
	var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug$1;
	var definePropertyModule$5 = objectDefineProperty$1;
	var anObject$a = anObject$e;
	var toIndexedObject$9 = toIndexedObject$d;
	var objectKeys$3 = objectKeys$4;
	objectDefineProperties.f = DESCRIPTORS$g && !V8_PROTOTYPE_DEFINE_BUG$1 ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$a(O);
	  var props = toIndexedObject$9(Properties);
	  var keys = objectKeys$3(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$5.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$d = getBuiltIn$h;
	var html$2 = getBuiltIn$d('document', 'documentElement');

	var anObject$9 = anObject$e;
	var definePropertiesModule$1 = objectDefineProperties;
	var enumBugKeys$2 = enumBugKeys$5;
	var hiddenKeys$7 = hiddenKeys$a;
	var html$1 = html$2;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$4 = sharedKey$6;
	var GT = '>';
	var LT = '<';
	var PROTOTYPE$1 = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey$4('IE_PROTO');
	var EmptyConstructor = function () {  };
	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null;
	  return temp;
	};
	var NullProtoObjectViaIFrame = function () {
	  var iframe = documentCreateElement$1('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html$1.appendChild(iframe);
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    activeXDocument = new ActiveXObject('htmlfile');
	  } catch (error) {  }
	  NullProtoObject = typeof document != 'undefined'
	    ? document.domain && activeXDocument
	      ? NullProtoObjectViaActiveX(activeXDocument)
	      : NullProtoObjectViaIFrame()
	    : NullProtoObjectViaActiveX(activeXDocument);
	  var length = enumBugKeys$2.length;
	  while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys$2[length]];
	  return NullProtoObject();
	};
	hiddenKeys$7[IE_PROTO] = true;
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE$1] = anObject$9(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE$1] = null;
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : definePropertiesModule$1.f(result, Properties);
	};

	var uncurryThis$p = functionUncurryThis$1;
	var $Error$1 = Error;
	var replace$2 = uncurryThis$p(''.replace);
	var TEST = (function (arg) { return String($Error$1(arg).stack); })('zxcasd');
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
	var errorStackClear = function (stack, dropEntries) {
	  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$1.prepareStackTrace) {
	    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } return stack;
	};

	var isObject$j = isObject$o;
	var createNonEnumerableProperty$a = createNonEnumerableProperty$c;
	var installErrorCause$1 = function (O, options) {
	  if (isObject$j(options) && 'cause' in options) {
	    createNonEnumerableProperty$a(O, 'cause', options.cause);
	  }
	};

	var iterators = {};

	var wellKnownSymbol$m = wellKnownSymbol$o;
	var Iterators$6 = iterators;
	var ITERATOR$6 = wellKnownSymbol$m('iterator');
	var ArrayPrototype$5 = Array.prototype;
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators$6.Array === it || ArrayPrototype$5[ITERATOR$6] === it);
	};

	var wellKnownSymbol$l = wellKnownSymbol$o;
	var TO_STRING_TAG$4 = wellKnownSymbol$l('toStringTag');
	var test$1 = {};
	test$1[TO_STRING_TAG$4] = 'z';
	var toStringTagSupport = String(test$1) === '[object z]';

	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$m = isCallable$w;
	var classofRaw$1 = classofRaw$3;
	var wellKnownSymbol$k = wellKnownSymbol$o;
	var TO_STRING_TAG$3 = wellKnownSymbol$k('toStringTag');
	var $Object$1 = Object;
	var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) {  }
	};
	var classof$c = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$3)) == 'string' ? tag
	    : CORRECT_ARGUMENTS ? classofRaw$1(O)
	    : (result = classofRaw$1(O)) == 'Object' && isCallable$m(O.callee) ? 'Arguments' : result;
	};

	var classof$b = classof$c;
	var getMethod$3 = getMethod$5;
	var isNullOrUndefined$3 = isNullOrUndefined$6;
	var Iterators$5 = iterators;
	var wellKnownSymbol$j = wellKnownSymbol$o;
	var ITERATOR$5 = wellKnownSymbol$j('iterator');
	var getIteratorMethod$2 = function (it) {
	  if (!isNullOrUndefined$3(it)) return getMethod$3(it, ITERATOR$5)
	    || getMethod$3(it, '@@iterator')
	    || Iterators$5[classof$b(it)];
	};

	var call$i = functionCall$1;
	var aCallable$8 = aCallable$b;
	var anObject$8 = anObject$e;
	var tryToString$5 = tryToString$7;
	var getIteratorMethod$1 = getIteratorMethod$2;
	var $TypeError$7 = TypeError;
	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable$8(iteratorMethod)) return anObject$8(call$i(iteratorMethod, argument));
	  throw $TypeError$7(tryToString$5(argument) + ' is not iterable');
	};

	var call$h = functionCall$1;
	var anObject$7 = anObject$e;
	var getMethod$2 = getMethod$5;
	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$7(iterator);
	  try {
	    innerResult = getMethod$2(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$h(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$7(innerResult);
	  return value;
	};

	var bind$b = functionBindContext;
	var call$g = functionCall$1;
	var anObject$6 = anObject$e;
	var tryToString$4 = tryToString$7;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var lengthOfArrayLike$6 = lengthOfArrayLike$8;
	var isPrototypeOf$9 = objectIsPrototypeOf$1;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;
	var iteratorClose = iteratorClose$1;
	var $TypeError$6 = TypeError;
	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};
	var ResultPrototype = Result.prototype;
	var iterate$7 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
	  var IS_RECORD = !!(options && options.IS_RECORD);
	  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
	  var INTERRUPTED = !!(options && options.INTERRUPTED);
	  var fn = bind$b(unboundFunction, that);
	  var iterator, iterFn, index, length, result, next, step;
	  var stop = function (condition) {
	    if (iterator) iteratorClose(iterator, 'normal', condition);
	    return new Result(true, condition);
	  };
	  var callFn = function (value) {
	    if (AS_ENTRIES) {
	      anObject$6(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };
	  if (IS_RECORD) {
	    iterator = iterable.iterator;
	  } else if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (!iterFn) throw $TypeError$6(tryToString$4(iterable) + ' is not iterable');
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$6(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$9(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }
	  next = IS_RECORD ? iterable.next : iterator.next;
	  while (!(step = call$g(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$9(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var classof$a = classof$c;
	var $String = String;
	var toString$a = function (argument) {
	  if (classof$a(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return $String(argument);
	};

	var toString$9 = toString$a;
	var normalizeStringArgument$1 = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$9(argument);
	};

	var fails$s = fails$B;
	var createPropertyDescriptor$7 = createPropertyDescriptor$a;
	var errorStackInstallable = !fails$s(function () {
	  var error = Error('a');
	  if (!('stack' in error)) return true;
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$7(1, 7));
	  return error.stack !== 7;
	});

	var $$z = _export$1;
	var isPrototypeOf$8 = objectIsPrototypeOf$1;
	var getPrototypeOf$9 = objectGetPrototypeOf;
	var setPrototypeOf$7 = objectSetPrototypeOf;
	var copyConstructorProperties$2 = copyConstructorProperties$3;
	var create$a = objectCreate;
	var createNonEnumerableProperty$9 = createNonEnumerableProperty$c;
	var createPropertyDescriptor$6 = createPropertyDescriptor$a;
	var clearErrorStack = errorStackClear;
	var installErrorCause = installErrorCause$1;
	var iterate$6 = iterate$7;
	var normalizeStringArgument = normalizeStringArgument$1;
	var wellKnownSymbol$i = wellKnownSymbol$o;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;
	var TO_STRING_TAG$2 = wellKnownSymbol$i('toStringTag');
	var $Error = Error;
	var push$3 = [].push;
	var $AggregateError = function AggregateError(errors, message ) {
	  var options = arguments.length > 2 ? arguments[2] : undefined;
	  var isInstance = isPrototypeOf$8(AggregateErrorPrototype, this);
	  var that;
	  if (setPrototypeOf$7) {
	    that = setPrototypeOf$7($Error(), isInstance ? getPrototypeOf$9(this) : AggregateErrorPrototype);
	  } else {
	    that = isInstance ? this : create$a(AggregateErrorPrototype);
	    createNonEnumerableProperty$9(that, TO_STRING_TAG$2, 'Error');
	  }
	  if (message !== undefined) createNonEnumerableProperty$9(that, 'message', normalizeStringArgument(message));
	  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty$9(that, 'stack', clearErrorStack(that.stack, 1));
	  installErrorCause(that, options);
	  var errorsArray = [];
	  iterate$6(errors, push$3, { that: errorsArray });
	  createNonEnumerableProperty$9(that, 'errors', errorsArray);
	  return that;
	};
	if (setPrototypeOf$7) setPrototypeOf$7($AggregateError, $Error);
	else copyConstructorProperties$2($AggregateError, $Error, { name: true });
	var AggregateErrorPrototype = $AggregateError.prototype = create$a($Error.prototype, {
	  constructor: createPropertyDescriptor$6(1, $AggregateError),
	  message: createPropertyDescriptor$6(1, ''),
	  name: createPropertyDescriptor$6(1, 'AggregateError')
	});
	$$z({ global: true, constructor: true, arity: 2 }, {
	  AggregateError: $AggregateError
	});

	var addToUnscopables$1 = function () {  };

	var global$D = global$L;
	var isCallable$l = isCallable$w;
	var WeakMap$4 = global$D.WeakMap;
	var weakMapBasicDetection = isCallable$l(WeakMap$4) && /native code/.test(String(WeakMap$4));

	var NATIVE_WEAK_MAP$1 = weakMapBasicDetection;
	var global$C = global$L;
	var isObject$i = isObject$o;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$c;
	var hasOwn$i = hasOwnProperty_1$1;
	var shared$7 = sharedStore$1;
	var sharedKey$3 = sharedKey$6;
	var hiddenKeys$6 = hiddenKeys$a;
	var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
	var TypeError$a = global$C.TypeError;
	var WeakMap$3 = global$C.WeakMap;
	var set$2, get$1, has$1;
	var enforce$1 = function (it) {
	  return has$1(it) ? get$1(it) : set$2(it, {});
	};
	var getterFor$1 = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$i(it) || (state = get$1(it)).type !== TYPE) {
	      throw TypeError$a('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};
	if (NATIVE_WEAK_MAP$1 || shared$7.state) {
	  var store$5 = shared$7.state || (shared$7.state = new WeakMap$3());
	  store$5.get = store$5.get;
	  store$5.has = store$5.has;
	  store$5.set = store$5.set;
	  set$2 = function (it, metadata) {
	    if (store$5.has(it)) throw TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    store$5.set(it, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return store$5.get(it) || {};
	  };
	  has$1 = function (it) {
	    return store$5.has(it);
	  };
	} else {
	  var STATE$1 = sharedKey$3('state');
	  hiddenKeys$6[STATE$1] = true;
	  set$2 = function (it, metadata) {
	    if (hasOwn$i(it, STATE$1)) throw TypeError$a(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    createNonEnumerableProperty$8(it, STATE$1, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return hasOwn$i(it, STATE$1) ? it[STATE$1] : {};
	  };
	  has$1 = function (it) {
	    return hasOwn$i(it, STATE$1);
	  };
	}
	var internalState$1 = {
	  set: set$2,
	  get: get$1,
	  has: has$1,
	  enforce: enforce$1,
	  getterFor: getterFor$1
	};

	var DESCRIPTORS$f = descriptors$1;
	var hasOwn$h = hasOwnProperty_1$1;
	var FunctionPrototype$3 = Function.prototype;
	var getDescriptor$1 = DESCRIPTORS$f && Object.getOwnPropertyDescriptor;
	var EXISTS$2 = hasOwn$h(FunctionPrototype$3, 'name');
	var PROPER$1 = EXISTS$2 && (function something() {  }).name === 'something';
	var CONFIGURABLE$2 = EXISTS$2 && (!DESCRIPTORS$f || (DESCRIPTORS$f && getDescriptor$1(FunctionPrototype$3, 'name').configurable));
	var functionName$1 = {
	  EXISTS: EXISTS$2,
	  PROPER: PROPER$1,
	  CONFIGURABLE: CONFIGURABLE$2
	};

	var createNonEnumerableProperty$7 = createNonEnumerableProperty$c;
	var defineBuiltIn$6 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$7(target, key, value);
	  return target;
	};

	var fails$r = fails$B;
	var isCallable$k = isCallable$w;
	var isObject$h = isObject$o;
	var create$9 = objectCreate;
	var getPrototypeOf$8 = objectGetPrototypeOf;
	var defineBuiltIn$5 = defineBuiltIn$6;
	var wellKnownSymbol$h = wellKnownSymbol$o;
	var ITERATOR$4 = wellKnownSymbol$h('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
	if ([].keys) {
	  arrayIterator = [].keys();
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$8(getPrototypeOf$8(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}
	var NEW_ITERATOR_PROTOTYPE = !isObject$h(IteratorPrototype$1) || fails$r(function () {
	  var test = {};
	  return IteratorPrototype$1[ITERATOR$4].call(test) !== test;
	});
	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$9(IteratorPrototype$1);
	if (!isCallable$k(IteratorPrototype$1[ITERATOR$4])) {
	  defineBuiltIn$5(IteratorPrototype$1, ITERATOR$4, function () {
	    return this;
	  });
	}
	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$9 = classof$c;
	var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$9(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$h = objectDefineProperty$1.f;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$c;
	var hasOwn$g = hasOwnProperty_1$1;
	var toString$8 = objectToString;
	var wellKnownSymbol$g = wellKnownSymbol$o;
	var TO_STRING_TAG$1 = wellKnownSymbol$g('toStringTag');
	var setToStringTag$7 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwn$g(target, TO_STRING_TAG$1)) {
	      defineProperty$h(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty$6(target, 'toString', toString$8);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create$8 = objectCreate;
	var createPropertyDescriptor$5 = createPropertyDescriptor$a;
	var setToStringTag$6 = setToStringTag$7;
	var Iterators$4 = iterators;
	var returnThis$1 = function () { return this; };
	var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$8(IteratorPrototype, { next: createPropertyDescriptor$5(+!ENUMERABLE_NEXT, next) });
	  setToStringTag$6(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$4[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$y = _export$1;
	var call$f = functionCall$1;
	var FunctionName = functionName$1;
	var createIteratorConstructor = iteratorCreateConstructor;
	var getPrototypeOf$7 = objectGetPrototypeOf;
	var setToStringTag$5 = setToStringTag$7;
	var defineBuiltIn$4 = defineBuiltIn$6;
	var wellKnownSymbol$f = wellKnownSymbol$o;
	var Iterators$3 = iterators;
	var IteratorsCore = iteratorsCore;
	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	FunctionName.CONFIGURABLE;
	IteratorsCore.IteratorPrototype;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$3 = wellKnownSymbol$f('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';
	var returnThis = function () { return this; };
	var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
	  createIteratorConstructor(IteratorConstructor, NAME, next);
	  var getIterationMethod = function (KIND) {
	    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
	    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
	    switch (KIND) {
	      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
	      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
	      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
	    } return function () { return new IteratorConstructor(this); };
	  };
	  var TO_STRING_TAG = NAME + ' Iterator';
	  var INCORRECT_VALUES_NAME = false;
	  var IterablePrototype = Iterable.prototype;
	  var nativeIterator = IterablePrototype[ITERATOR$3]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf$7(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      setToStringTag$5(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$3[TO_STRING_TAG] = returnThis;
	    }
	  }
	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$f(nativeIterator, this); };
	    }
	  }
	  if (DEFAULT) {
	    methods = {
	      values: getIterationMethod(VALUES),
	      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
	      entries: getIterationMethod(ENTRIES)
	    };
	    if (FORCED) for (KEY in methods) {
	      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
	        defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$y({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }
	  if ((FORCED) && IterablePrototype[ITERATOR$3] !== defaultIterator) {
	    defineBuiltIn$4(IterablePrototype, ITERATOR$3, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$3[NAME] = defaultIterator;
	  return methods;
	};

	var createIterResultObject$3 = function (value, done) {
	  return { value: value, done: done };
	};

	var toIndexedObject$8 = toIndexedObject$d;
	var addToUnscopables = addToUnscopables$1;
	var Iterators$2 = iterators;
	var InternalStateModule$6 = internalState$1;
	var defineProperty$g = objectDefineProperty$1.f;
	var defineIterator$2 = iteratorDefine;
	var createIterResultObject$2 = createIterResultObject$3;
	var IS_PURE$1 = isPure;
	var DESCRIPTORS$e = descriptors$1;
	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$5 = InternalStateModule$6.set;
	var getInternalState$3 = InternalStateModule$6.getterFor(ARRAY_ITERATOR);
	defineIterator$2(Array, 'Array', function (iterated, kind) {
	  setInternalState$5(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$8(iterated),
	    index: 0,
	    kind: kind
	  });
	}, function () {
	  var state = getInternalState$3(this);
	  var target = state.target;
	  var kind = state.kind;
	  var index = state.index++;
	  if (!target || index >= target.length) {
	    state.target = undefined;
	    return createIterResultObject$2(undefined, true);
	  }
	  if (kind == 'keys') return createIterResultObject$2(index, false);
	  if (kind == 'values') return createIterResultObject$2(target[index], false);
	  return createIterResultObject$2([index, target[index]], false);
	}, 'values');
	var values = Iterators$2.Arguments = Iterators$2.Array;
	addToUnscopables();
	addToUnscopables();
	addToUnscopables();
	if (!IS_PURE$1 && DESCRIPTORS$e && values.name !== 'values') try {
	  defineProperty$g(values, 'name', { value: 'values' });
	} catch (error) {  }

	var classof$8 = classofRaw$3;
	var global$B = global$L;
	var engineIsNode = classof$8(global$B.process) == 'process';

	var getBuiltIn$c = getBuiltIn$h;
	var definePropertyModule$4 = objectDefineProperty$1;
	var wellKnownSymbol$e = wellKnownSymbol$o;
	var DESCRIPTORS$d = descriptors$1;
	var SPECIES$5 = wellKnownSymbol$e('species');
	var setSpecies$2 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$c(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule$4.f;
	  if (DESCRIPTORS$d && Constructor && !Constructor[SPECIES$5]) {
	    defineProperty(Constructor, SPECIES$5, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var isPrototypeOf$7 = objectIsPrototypeOf$1;
	var $TypeError$5 = TypeError;
	var anInstance$3 = function (it, Prototype) {
	  if (isPrototypeOf$7(Prototype, it)) return it;
	  throw $TypeError$5('Incorrect invocation');
	};

	var uncurryThis$o = functionUncurryThis$1;
	var isCallable$j = isCallable$w;
	var store$4 = sharedStore$1;
	var functionToString$2 = uncurryThis$o(Function.toString);
	if (!isCallable$j(store$4.inspectSource)) {
	  store$4.inspectSource = function (it) {
	    return functionToString$2(it);
	  };
	}
	var inspectSource$5 = store$4.inspectSource;

	var uncurryThis$n = functionUncurryThis$1;
	var fails$q = fails$B;
	var isCallable$i = isCallable$w;
	var classof$7 = classof$c;
	var getBuiltIn$b = getBuiltIn$h;
	var inspectSource$4 = inspectSource$5;
	var noop = function () {  };
	var empty = [];
	var construct = getBuiltIn$b('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$2 = uncurryThis$n(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
	var isConstructorModern = function isConstructor(argument) {
	  if (!isCallable$i(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};
	var isConstructorLegacy = function isConstructor(argument) {
	  if (!isCallable$i(argument)) return false;
	  switch (classof$7(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  }
	  try {
	    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$4(argument));
	  } catch (error) {
	    return true;
	  }
	};
	isConstructorLegacy.sham = true;
	var isConstructor$3 = !construct || fails$q(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var isConstructor$2 = isConstructor$3;
	var tryToString$3 = tryToString$7;
	var $TypeError$4 = TypeError;
	var aConstructor$1 = function (argument) {
	  if (isConstructor$2(argument)) return argument;
	  throw $TypeError$4(tryToString$3(argument) + ' is not a constructor');
	};

	var anObject$5 = anObject$e;
	var aConstructor = aConstructor$1;
	var isNullOrUndefined$2 = isNullOrUndefined$6;
	var wellKnownSymbol$d = wellKnownSymbol$o;
	var SPECIES$4 = wellKnownSymbol$d('species');
	var speciesConstructor$2 = function (O, defaultConstructor) {
	  var C = anObject$5(O).constructor;
	  var S;
	  return C === undefined || isNullOrUndefined$2(S = anObject$5(C)[SPECIES$4]) ? defaultConstructor : aConstructor(S);
	};

	var uncurryThis$m = functionUncurryThis$1;
	var arraySlice$4 = uncurryThis$m([].slice);

	var $TypeError$3 = TypeError;
	var validateArgumentsLength$2 = function (passed, required) {
	  if (passed < required) throw $TypeError$3('Not enough arguments');
	  return passed;
	};

	var userAgent$4 = engineUserAgent$1;
	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

	var global$A = global$L;
	var apply$3 = functionApply;
	var bind$a = functionBindContext;
	var isCallable$h = isCallable$w;
	var hasOwn$f = hasOwnProperty_1$1;
	var fails$p = fails$B;
	var html = html$2;
	var arraySlice$3 = arraySlice$4;
	var createElement$1 = documentCreateElement$2;
	var validateArgumentsLength$1 = validateArgumentsLength$2;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$3 = engineIsNode;
	var set$1 = global$A.setImmediate;
	var clear = global$A.clearImmediate;
	var process$4 = global$A.process;
	var Dispatch = global$A.Dispatch;
	var Function$2 = global$A.Function;
	var MessageChannel = global$A.MessageChannel;
	var String$3 = global$A.String;
	var counter = 0;
	var queue$1 = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var $location, defer, channel, port;
	try {
	  $location = global$A.location;
	} catch (error) {  }
	var run = function (id) {
	  if (hasOwn$f(queue$1, id)) {
	    var fn = queue$1[id];
	    delete queue$1[id];
	    fn();
	  }
	};
	var runner = function (id) {
	  return function () {
	    run(id);
	  };
	};
	var listener = function (event) {
	  run(event.data);
	};
	var post = function (id) {
	  global$A.postMessage(String$3(id), $location.protocol + '//' + $location.host);
	};
	if (!set$1 || !clear) {
	  set$1 = function setImmediate(handler) {
	    validateArgumentsLength$1(arguments.length, 1);
	    var fn = isCallable$h(handler) ? handler : Function$2(handler);
	    var args = arraySlice$3(arguments, 1);
	    queue$1[++counter] = function () {
	      apply$3(fn, undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue$1[id];
	  };
	  if (IS_NODE$3) {
	    defer = function (id) {
	      process$4.nextTick(runner(id));
	    };
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(runner(id));
	    };
	  } else if (MessageChannel && !IS_IOS$1) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = bind$a(port.postMessage, port);
	  } else if (
	    global$A.addEventListener &&
	    isCallable$h(global$A.postMessage) &&
	    !global$A.importScripts &&
	    $location && $location.protocol !== 'file:' &&
	    !fails$p(post)
	  ) {
	    defer = post;
	    global$A.addEventListener('message', listener, false);
	  } else if (ONREADYSTATECHANGE in createElement$1('script')) {
	    defer = function (id) {
	      html.appendChild(createElement$1('script'))[ONREADYSTATECHANGE] = function () {
	        html.removeChild(this);
	        run(id);
	      };
	    };
	  } else {
	    defer = function (id) {
	      setTimeout(runner(id), 0);
	    };
	  }
	}
	var task$1 = {
	  set: set$1,
	  clear: clear
	};

	var userAgent$3 = engineUserAgent$1;
	var global$z = global$L;
	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && global$z.Pebble !== undefined;

	var userAgent$2 = engineUserAgent$1;
	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

	var global$y = global$L;
	var bind$9 = functionBindContext;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor$1.f;
	var macrotask = task$1.set;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$2 = engineIsNode;
	var MutationObserver = global$y.MutationObserver || global$y.WebKitMutationObserver;
	var document$3 = global$y.document;
	var process$3 = global$y.process;
	var Promise$1 = global$y.Promise;
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$y, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
	var flush, head, last, notify$1, toggle, node, promise$5, then;
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE$2 && (parent = process$3.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (error) {
	        if (head) notify$1();
	        else last = undefined;
	        throw error;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };
	  if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$3) {
	    toggle = true;
	    node = document$3.createTextNode('');
	    new MutationObserver(flush).observe(node, { characterData: true });
	    notify$1 = function () {
	      node.data = toggle = !toggle;
	    };
	  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
	    promise$5 = Promise$1.resolve(undefined);
	    promise$5.constructor = Promise$1;
	    then = bind$9(promise$5.then, promise$5);
	    notify$1 = function () {
	      then(flush);
	    };
	  } else if (IS_NODE$2) {
	    notify$1 = function () {
	      process$3.nextTick(flush);
	    };
	  } else {
	    macrotask = bind$9(macrotask, global$y);
	    notify$1 = function () {
	      macrotask(flush);
	    };
	  }
	}
	var microtask$1 = queueMicrotask || function (fn) {
	  var task = { fn: fn, next: undefined };
	  if (last) last.next = task;
	  if (!head) {
	    head = task;
	    notify$1();
	  } last = task;
	};

	var global$x = global$L;
	var hostReportErrors$1 = function (a, b) {
	  var console = global$x.console;
	  if (console && console.error) {
	    arguments.length == 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform$6 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var Queue$1 = function () {
	  this.head = null;
	  this.tail = null;
	};
	Queue$1.prototype = {
	  add: function (item) {
	    var entry = { item: item, next: null };
	    if (this.head) this.tail.next = entry;
	    else this.head = entry;
	    this.tail = entry;
	  },
	  get: function () {
	    var entry = this.head;
	    if (entry) {
	      this.head = entry.next;
	      if (this.tail === entry) this.tail = null;
	      return entry.item;
	    }
	  }
	};
	var queue = Queue$1;

	var global$w = global$L;
	var promiseNativeConstructor = global$w.Promise;

	var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

	var IS_DENO$1 = engineIsDeno;
	var IS_NODE$1 = engineIsNode;
	var engineIsBrowser = !IS_DENO$1 && !IS_NODE$1
	  && typeof window == 'object'
	  && typeof document == 'object';

	var global$v = global$L;
	var NativePromiseConstructor$5 = promiseNativeConstructor;
	var isCallable$g = isCallable$w;
	var isForced$2 = isForced_1$1;
	var inspectSource$3 = inspectSource$5;
	var wellKnownSymbol$c = wellKnownSymbol$o;
	var IS_BROWSER = engineIsBrowser;
	var IS_DENO = engineIsDeno;
	var V8_VERSION$3 = engineV8Version$1;
	var NativePromisePrototype$2 = NativePromiseConstructor$5 && NativePromiseConstructor$5.prototype;
	var SPECIES$3 = wellKnownSymbol$c('species');
	var SUBCLASSING = false;
	var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$g(global$v.PromiseRejectionEvent);
	var FORCED_PROMISE_CONSTRUCTOR$5 = isForced$2('Promise', function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource$3(NativePromiseConstructor$5);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$5);
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$3 === 66) return true;
	  if (!(NativePromisePrototype$2['catch'] && NativePromisePrototype$2['finally'])) return true;
	  if (!V8_VERSION$3 || V8_VERSION$3 < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
	    var promise = new NativePromiseConstructor$5(function (resolve) { resolve(1); });
	    var FakePromise = function (exec) {
	      exec(function () {  }, function () {  });
	    };
	    var constructor = promise.constructor = {};
	    constructor[SPECIES$3] = FakePromise;
	    SUBCLASSING = promise.then(function () {  }) instanceof FakePromise;
	    if (!SUBCLASSING) return true;
	  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER || IS_DENO) && !NATIVE_PROMISE_REJECTION_EVENT$1;
	});
	var promiseConstructorDetection = {
	  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
	  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
	  SUBCLASSING: SUBCLASSING
	};

	var newPromiseCapability$2 = {};

	var aCallable$7 = aCallable$b;
	var $TypeError$2 = TypeError;
	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw $TypeError$2('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$7(resolve);
	  this.reject = aCallable$7(reject);
	};
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var $$x = _export$1;
	var IS_NODE = engineIsNode;
	var global$u = global$L;
	var call$e = functionCall$1;
	var defineBuiltIn$3 = defineBuiltIn$6;
	var setToStringTag$4 = setToStringTag$7;
	var setSpecies$1 = setSpecies$2;
	var aCallable$6 = aCallable$b;
	var isCallable$f = isCallable$w;
	var isObject$g = isObject$o;
	var anInstance$2 = anInstance$3;
	var speciesConstructor$1 = speciesConstructor$2;
	var task = task$1.set;
	var microtask = microtask$1;
	var hostReportErrors = hostReportErrors$1;
	var perform$5 = perform$6;
	var Queue = queue;
	var InternalStateModule$5 = internalState$1;
	var NativePromiseConstructor$4 = promiseNativeConstructor;
	var PromiseConstructorDetection = promiseConstructorDetection;
	var newPromiseCapabilityModule$6 = newPromiseCapability$2;
	var PROMISE = 'Promise';
	var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
	var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
	PromiseConstructorDetection.SUBCLASSING;
	var getInternalPromiseState = InternalStateModule$5.getterFor(PROMISE);
	var setInternalState$4 = InternalStateModule$5.set;
	var NativePromisePrototype$1 = NativePromiseConstructor$4 && NativePromiseConstructor$4.prototype;
	var PromiseConstructor = NativePromiseConstructor$4;
	var PromisePrototype = NativePromisePrototype$1;
	var TypeError$9 = global$u.TypeError;
	var document$2 = global$u.document;
	var process$2 = global$u.process;
	var newPromiseCapability$1 = newPromiseCapabilityModule$6.f;
	var newGenericPromiseCapability = newPromiseCapability$1;
	var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global$u.dispatchEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var Internal, OwnPromiseCapability, PromiseWrapper;
	var isThenable = function (it) {
	  var then;
	  return isObject$g(it) && isCallable$f(then = it.then) ? then : false;
	};
	var callReaction = function (reaction, state) {
	  var value = state.value;
	  var ok = state.state == FULFILLED;
	  var handler = ok ? reaction.ok : reaction.fail;
	  var resolve = reaction.resolve;
	  var reject = reaction.reject;
	  var domain = reaction.domain;
	  var result, then, exited;
	  try {
	    if (handler) {
	      if (!ok) {
	        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
	        state.rejection = HANDLED;
	      }
	      if (handler === true) result = value;
	      else {
	        if (domain) domain.enter();
	        result = handler(value);
	        if (domain) {
	          domain.exit();
	          exited = true;
	        }
	      }
	      if (result === reaction.promise) {
	        reject(TypeError$9('Promise-chain cycle'));
	      } else if (then = isThenable(result)) {
	        call$e(then, result, resolve, reject);
	      } else resolve(result);
	    } else reject(value);
	  } catch (error) {
	    if (domain && !exited) domain.exit();
	    reject(error);
	  }
	};
	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  microtask(function () {
	    var reactions = state.reactions;
	    var reaction;
	    while (reaction = reactions.get()) {
	      callReaction(reaction, state);
	    }
	    state.notified = false;
	    if (isReject && !state.rejection) onUnhandled(state);
	  });
	};
	var dispatchEvent = function (name, promise, reason) {
	  var event, handler;
	  if (DISPATCH_EVENT) {
	    event = document$2.createEvent('Event');
	    event.promise = promise;
	    event.reason = reason;
	    event.initEvent(name, false, true);
	    global$u.dispatchEvent(event);
	  } else event = { promise: promise, reason: reason };
	  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$u['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};
	var onUnhandled = function (state) {
	  call$e(task, global$u, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$5(function () {
	        if (IS_NODE) {
	          process$2.emit('unhandledRejection', value, promise);
	        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
	      });
	      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
	      if (result.error) throw result.value;
	    }
	  });
	};
	var isUnhandled = function (state) {
	  return state.rejection !== HANDLED && !state.parent;
	};
	var onHandleUnhandled = function (state) {
	  call$e(task, global$u, function () {
	    var promise = state.facade;
	    if (IS_NODE) {
	      process$2.emit('rejectionHandled', promise);
	    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
	  });
	};
	var bind$8 = function (fn, state, unwrap) {
	  return function (value) {
	    fn(state, value, unwrap);
	  };
	};
	var internalReject = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  state.value = value;
	  state.state = REJECTED;
	  notify(state, true);
	};
	var internalResolve = function (state, value, unwrap) {
	  if (state.done) return;
	  state.done = true;
	  if (unwrap) state = unwrap;
	  try {
	    if (state.facade === value) throw TypeError$9("Promise can't be resolved itself");
	    var then = isThenable(value);
	    if (then) {
	      microtask(function () {
	        var wrapper = { done: false };
	        try {
	          call$e(then, value,
	            bind$8(internalResolve, wrapper, state),
	            bind$8(internalReject, wrapper, state)
	          );
	        } catch (error) {
	          internalReject(wrapper, error, state);
	        }
	      });
	    } else {
	      state.value = value;
	      state.state = FULFILLED;
	      notify(state, false);
	    }
	  } catch (error) {
	    internalReject({ done: false }, error, state);
	  }
	};
	if (FORCED_PROMISE_CONSTRUCTOR$4) {
	  PromiseConstructor = function Promise(executor) {
	    anInstance$2(this, PromisePrototype);
	    aCallable$6(executor);
	    call$e(Internal, this);
	    var state = getInternalPromiseState(this);
	    try {
	      executor(bind$8(internalResolve, state), bind$8(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromisePrototype = PromiseConstructor.prototype;
	  Internal = function Promise(executor) {
	    setInternalState$4(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: new Queue(),
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = defineBuiltIn$3(PromisePrototype, 'then', function then(onFulfilled, onRejected) {
	    var state = getInternalPromiseState(this);
	    var reaction = newPromiseCapability$1(speciesConstructor$1(this, PromiseConstructor));
	    state.parent = true;
	    reaction.ok = isCallable$f(onFulfilled) ? onFulfilled : true;
	    reaction.fail = isCallable$f(onRejected) && onRejected;
	    reaction.domain = IS_NODE ? process$2.domain : undefined;
	    if (state.state == PENDING) state.reactions.add(reaction);
	    else microtask(function () {
	      callReaction(reaction, state);
	    });
	    return reaction.promise;
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalPromiseState(promise);
	    this.promise = promise;
	    this.resolve = bind$8(internalResolve, state);
	    this.reject = bind$8(internalReject, state);
	  };
	  newPromiseCapabilityModule$6.f = newPromiseCapability$1 = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	$$x({ global: true, constructor: true, wrap: true, forced: FORCED_PROMISE_CONSTRUCTOR$4 }, {
	  Promise: PromiseConstructor
	});
	setToStringTag$4(PromiseConstructor, PROMISE, false, true);
	setSpecies$1(PROMISE);

	var wellKnownSymbol$b = wellKnownSymbol$o;
	var ITERATOR$2 = wellKnownSymbol$b('iterator');
	var SAFE_CLOSING = false;
	try {
	  var called = 0;
	  var iteratorWithReturn = {
	    next: function () {
	      return { done: !!called++ };
	    },
	    'return': function () {
	      SAFE_CLOSING = true;
	    }
	  };
	  iteratorWithReturn[ITERATOR$2] = function () {
	    return this;
	  };
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) {  }
	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$2] = function () {
	      return {
	        next: function () {
	          return { done: ITERATION_SUPPORT = true };
	        }
	      };
	    };
	    exec(object);
	  } catch (error) {  }
	  return ITERATION_SUPPORT;
	};

	var NativePromiseConstructor$3 = promiseNativeConstructor;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
	var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function (iterable) {
	  NativePromiseConstructor$3.all(iterable).then(undefined, function () {  });
	});

	var $$w = _export$1;
	var call$d = functionCall$1;
	var aCallable$5 = aCallable$b;
	var newPromiseCapabilityModule$5 = newPromiseCapability$2;
	var perform$4 = perform$6;
	var iterate$5 = iterate$7;
	var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
	$$w({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$5.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$4(function () {
	      var $promiseResolve = aCallable$5(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$5(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$d($promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$v = _export$1;
	var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
	var NativePromiseConstructor$2 = promiseNativeConstructor;
	NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
	$$v({ target: 'Promise', proto: true, forced: FORCED_PROMISE_CONSTRUCTOR$2, real: true }, {
	  'catch': function (onRejected) {
	    return this.then(undefined, onRejected);
	  }
	});

	var $$u = _export$1;
	var call$c = functionCall$1;
	var aCallable$4 = aCallable$b;
	var newPromiseCapabilityModule$4 = newPromiseCapability$2;
	var perform$3 = perform$6;
	var iterate$4 = iterate$7;
	var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
	$$u({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$4.f(C);
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aCallable$4(C.resolve);
	      iterate$4(iterable, function (promise) {
	        call$c($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$t = _export$1;
	var call$b = functionCall$1;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
	$$t({ target: 'Promise', stat: true, forced: FORCED_PROMISE_CONSTRUCTOR$1 }, {
	  reject: function reject(r) {
	    var capability = newPromiseCapabilityModule$3.f(this);
	    call$b(capability.reject, undefined, r);
	    return capability.promise;
	  }
	});

	var anObject$4 = anObject$e;
	var isObject$f = isObject$o;
	var newPromiseCapability = newPromiseCapability$2;
	var promiseResolve$3 = function (C, x) {
	  anObject$4(C);
	  if (isObject$f(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var $$s = _export$1;
	var getBuiltIn$a = getBuiltIn$h;
	var IS_PURE = isPure;
	var NativePromiseConstructor$1 = promiseNativeConstructor;
	var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
	var promiseResolve$2 = promiseResolve$3;
	var PromiseConstructorWrapper = getBuiltIn$a('Promise');
	var CHECK_WRAPPER = !FORCED_PROMISE_CONSTRUCTOR;
	$$s({ target: 'Promise', stat: true, forced: IS_PURE  }, {
	  resolve: function resolve(x) {
	    return promiseResolve$2(CHECK_WRAPPER && this === PromiseConstructorWrapper ? NativePromiseConstructor$1 : this, x);
	  }
	});

	var $$r = _export$1;
	var call$a = functionCall$1;
	var aCallable$3 = aCallable$b;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$2 = perform$6;
	var iterate$3 = iterate$7;
	$$r({ target: 'Promise', stat: true }, {
	  allSettled: function allSettled(iterable) {
	    var C = this;
	    var capability = newPromiseCapabilityModule$2.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$2(function () {
	      var promiseResolve = aCallable$3(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$3(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$a(promiseResolve, C, promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'fulfilled', value: value };
	          --remaining || resolve(values);
	        }, function (error) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[index] = { status: 'rejected', reason: error };
	          --remaining || resolve(values);
	        });
	      });
	      --remaining || resolve(values);
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$q = _export$1;
	var call$9 = functionCall$1;
	var aCallable$2 = aCallable$b;
	var getBuiltIn$9 = getBuiltIn$h;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform$1 = perform$6;
	var iterate$2 = iterate$7;
	var PROMISE_ANY_ERROR = 'No one promise resolved';
	$$q({ target: 'Promise', stat: true }, {
	  any: function any(iterable) {
	    var C = this;
	    var AggregateError = getBuiltIn$9('AggregateError');
	    var capability = newPromiseCapabilityModule$1.f(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$1(function () {
	      var promiseResolve = aCallable$2(C.resolve);
	      var errors = [];
	      var counter = 0;
	      var remaining = 1;
	      var alreadyResolved = false;
	      iterate$2(iterable, function (promise) {
	        var index = counter++;
	        var alreadyRejected = false;
	        remaining++;
	        call$9(promiseResolve, C, promise).then(function (value) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyResolved = true;
	          resolve(value);
	        }, function (error) {
	          if (alreadyRejected || alreadyResolved) return;
	          alreadyRejected = true;
	          errors[index] = error;
	          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	        });
	      });
	      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$p = _export$1;
	var NativePromiseConstructor = promiseNativeConstructor;
	var fails$o = fails$B;
	var getBuiltIn$8 = getBuiltIn$h;
	var isCallable$e = isCallable$w;
	var speciesConstructor = speciesConstructor$2;
	var promiseResolve$1 = promiseResolve$3;
	var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
	var NON_GENERIC = !!NativePromiseConstructor && fails$o(function () {
	  NativePromisePrototype['finally'].call({ then: function () {  } }, function () {  });
	});
	$$p({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn$8('Promise'));
	    var isFunction = isCallable$e(onFinally);
	    return this.then(
	      isFunction ? function (x) {
	        return promiseResolve$1(C, onFinally()).then(function () { return x; });
	      } : onFinally,
	      isFunction ? function (e) {
	        return promiseResolve$1(C, onFinally()).then(function () { throw e; });
	      } : onFinally
	    );
	  }
	});

	var uncurryThis$l = functionUncurryThis$1;
	var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
	var toString$7 = toString$a;
	var requireObjectCoercible$4 = requireObjectCoercible$7;
	var charAt$2 = uncurryThis$l(''.charAt);
	var charCodeAt$1 = uncurryThis$l(''.charCodeAt);
	var stringSlice$1 = uncurryThis$l(''.slice);
	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$7(requireObjectCoercible$4($this));
	    var position = toIntegerOrInfinity$3(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = charCodeAt$1(S, position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING
	          ? charAt$2(S, position)
	          : first
	        : CONVERT_TO_STRING
	          ? stringSlice$1(S, position, position + 2)
	          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};
	var stringMultibyte = {
	  codeAt: createMethod$3(false),
	  charAt: createMethod$3(true)
	};

	var charAt$1 = stringMultibyte.charAt;
	var toString$6 = toString$a;
	var InternalStateModule$4 = internalState$1;
	var defineIterator$1 = iteratorDefine;
	var createIterResultObject$1 = createIterResultObject$3;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$3 = InternalStateModule$4.set;
	var getInternalState$2 = InternalStateModule$4.getterFor(STRING_ITERATOR);
	defineIterator$1(String, 'String', function (iterated) {
	  setInternalState$3(this, {
	    type: STRING_ITERATOR,
	    string: toString$6(iterated),
	    index: 0
	  });
	}, function next() {
	  var state = getInternalState$2(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return createIterResultObject$1(undefined, true);
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return createIterResultObject$1(point, false);
	});

	var path$g = path$j;
	var promise$4 = path$g.Promise;

	var domIterables = {
	  CSSRuleList: 0,
	  CSSStyleDeclaration: 0,
	  CSSValueList: 0,
	  ClientRectList: 0,
	  DOMRectList: 0,
	  DOMStringList: 0,
	  DOMTokenList: 1,
	  DataTransferItemList: 0,
	  FileList: 0,
	  HTMLAllCollection: 0,
	  HTMLCollection: 0,
	  HTMLFormElement: 0,
	  HTMLSelectElement: 0,
	  MediaList: 0,
	  MimeTypeArray: 0,
	  NamedNodeMap: 0,
	  NodeList: 1,
	  PaintRequestList: 0,
	  Plugin: 0,
	  PluginArray: 0,
	  SVGLengthList: 0,
	  SVGNumberList: 0,
	  SVGPathSegList: 0,
	  SVGPointList: 0,
	  SVGStringList: 0,
	  SVGTransformList: 0,
	  SourceBufferList: 0,
	  StyleSheetList: 0,
	  TextTrackCueList: 0,
	  TextTrackList: 0,
	  TouchList: 0
	};

	var DOMIterables$1 = domIterables;
	var global$t = global$L;
	var classof$6 = classof$c;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$c;
	var Iterators$1 = iterators;
	var wellKnownSymbol$a = wellKnownSymbol$o;
	var TO_STRING_TAG = wellKnownSymbol$a('toStringTag');
	for (var COLLECTION_NAME in DOMIterables$1) {
	  var Collection = global$t[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof$6(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }
	  Iterators$1[COLLECTION_NAME] = Iterators$1.Array;
	}

	var parent$G = promise$4;
	var promise$3 = parent$G;

	var parent$F = promise$3;
	var promise$2 = parent$F;

	var $$o = _export$1;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$6;
	$$o({ target: 'Promise', stat: true, forced: true }, {
	  'try': function (callbackfn) {
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var parent$E = promise$2;
	var promise$1 = parent$E;

	(function (module) {
		module.exports = promise$1;
	} (promise$6));
	getDefaultExportFromCjs(promise$6.exports);

	(function (module) {
		module.exports = promise$6.exports;
	} (promise$7));
	var _Promise$1 = getDefaultExportFromCjs(promise$7.exports);

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }
	  if (info.done) {
	    resolve(value);
	  } else {
	    _Promise$1.resolve(value).then(_next, _throw);
	  }
	}
	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	      args = arguments;
	    return new _Promise$1(function (resolve, reject) {
	      var gen = fn.apply(self, args);
	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }
	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }
	      _next(undefined);
	    });
	  };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var defineProperty$f = {exports: {}};

	var defineProperty$e = {exports: {}};

	var defineProperty$d = {exports: {}};

	var $$n = _export$1;
	var DESCRIPTORS$c = descriptors$1;
	var defineProperty$c = objectDefineProperty$1.f;
	$$n({ target: 'Object', stat: true, forced: Object.defineProperty !== defineProperty$c, sham: !DESCRIPTORS$c }, {
	  defineProperty: defineProperty$c
	});

	var path$f = path$j;
	var Object$5 = path$f.Object;
	var defineProperty$b = defineProperty$d.exports = function defineProperty(it, key, desc) {
	  return Object$5.defineProperty(it, key, desc);
	};
	if (Object$5.defineProperty.sham) defineProperty$b.sham = true;

	var parent$D = defineProperty$d.exports;
	var defineProperty$a = parent$D;

	var parent$C = defineProperty$a;
	var defineProperty$9 = parent$C;

	var parent$B = defineProperty$9;
	var defineProperty$8 = parent$B;

	(function (module) {
		module.exports = defineProperty$8;
	} (defineProperty$e));
	getDefaultExportFromCjs(defineProperty$e.exports);

	(function (module) {
		module.exports = defineProperty$e.exports;
	} (defineProperty$f));
	var _Object$defineProperty = getDefaultExportFromCjs(defineProperty$f.exports);

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    _Object$defineProperty(target, descriptor.key, descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  _Object$defineProperty(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	var regeneratorRuntime$1 = {exports: {}};

	var _typeof$1 = {exports: {}};

	var symbol$5 = {exports: {}};

	var symbol$4 = {exports: {}};

	var classof$5 = classofRaw$3;
	var isArray$6 = Array.isArray || function isArray(argument) {
	  return classof$5(argument) == 'Array';
	};

	var $TypeError$1 = TypeError;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var doesNotExceedSafeInteger$1 = function (it) {
	  if (it > MAX_SAFE_INTEGER) throw $TypeError$1('Maximum allowed index exceeded');
	  return it;
	};

	var toPropertyKey$4 = toPropertyKey$7;
	var definePropertyModule$3 = objectDefineProperty$1;
	var createPropertyDescriptor$4 = createPropertyDescriptor$a;
	var createProperty$3 = function (object, key, value) {
	  var propertyKey = toPropertyKey$4(key);
	  if (propertyKey in object) definePropertyModule$3.f(object, propertyKey, createPropertyDescriptor$4(0, value));
	  else object[propertyKey] = value;
	};

	var isArray$5 = isArray$6;
	var isConstructor$1 = isConstructor$3;
	var isObject$e = isObject$o;
	var wellKnownSymbol$9 = wellKnownSymbol$o;
	var SPECIES$2 = wellKnownSymbol$9('species');
	var $Array$2 = Array;
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$5(originalArray)) {
	    C = originalArray.constructor;
	    if (isConstructor$1(C) && (C === $Array$2 || isArray$5(C.prototype))) C = undefined;
	    else if (isObject$e(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? $Array$2 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;
	var arraySpeciesCreate$2 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var fails$n = fails$B;
	var wellKnownSymbol$8 = wellKnownSymbol$o;
	var V8_VERSION$2 = engineV8Version$1;
	var SPECIES$1 = wellKnownSymbol$8('species');
	var arrayMethodHasSpeciesSupport$3 = function (METHOD_NAME) {
	  return V8_VERSION$2 >= 51 || !fails$n(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$m = _export$1;
	var fails$m = fails$B;
	var isArray$4 = isArray$6;
	var isObject$d = isObject$o;
	var toObject$7 = toObject$a;
	var lengthOfArrayLike$5 = lengthOfArrayLike$8;
	var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
	var createProperty$2 = createProperty$3;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$3;
	var wellKnownSymbol$7 = wellKnownSymbol$o;
	var V8_VERSION$1 = engineV8Version$1;
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$7('isConcatSpreadable');
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$m(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$2('concat');
	var isConcatSpreadable = function (O) {
	  if (!isObject$d(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$4(O);
	};
	var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
	$$m({ target: 'Array', proto: true, arity: 1, forced: FORCED$2 }, {
	  concat: function concat(arg) {
	    var O = toObject$7(this);
	    var A = arraySpeciesCreate$1(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$5(E);
	        doesNotExceedSafeInteger(n + len);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty$2(A, n, E[k]);
	      } else {
	        doesNotExceedSafeInteger(n + 1);
	        createProperty$2(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var objectGetOwnPropertyNamesExternal = {};

	var toAbsoluteIndex$3 = toAbsoluteIndex$5;
	var lengthOfArrayLike$4 = lengthOfArrayLike$8;
	var createProperty$1 = createProperty$3;
	var $Array$1 = Array;
	var max$2 = Math.max;
	var arraySliceSimple = function (O, start, end) {
	  var length = lengthOfArrayLike$4(O);
	  var k = toAbsoluteIndex$3(start, length);
	  var fin = toAbsoluteIndex$3(end === undefined ? length : end, length);
	  var result = $Array$1(max$2(fin - k, 0));
	  for (var n = 0; k < fin; k++, n++) createProperty$1(result, n, O[k]);
	  result.length = n;
	  return result;
	};

	var classof$4 = classofRaw$3;
	var toIndexedObject$7 = toIndexedObject$d;
	var $getOwnPropertyNames$1 = objectGetOwnPropertyNames$1.f;
	var arraySlice$2 = arraySliceSimple;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames$1(it);
	  } catch (error) {
	    return arraySlice$2(windowNames);
	  }
	};
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$4(it) == 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames$1(toIndexedObject$7(it));
	};

	var wellKnownSymbolWrapped = {};

	var wellKnownSymbol$6 = wellKnownSymbol$o;
	wellKnownSymbolWrapped.f = wellKnownSymbol$6;

	var path$e = path$j;
	var hasOwn$e = hasOwnProperty_1$1;
	var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var defineProperty$7 = objectDefineProperty$1.f;
	var wellKnownSymbolDefine = function (NAME) {
	  var Symbol = path$e.Symbol || (path$e.Symbol = {});
	  if (!hasOwn$e(Symbol, NAME)) defineProperty$7(Symbol, NAME, {
	    value: wrappedWellKnownSymbolModule$1.f(NAME)
	  });
	};

	var call$8 = functionCall$1;
	var getBuiltIn$7 = getBuiltIn$h;
	var wellKnownSymbol$5 = wellKnownSymbol$o;
	var defineBuiltIn$2 = defineBuiltIn$6;
	var symbolDefineToPrimitive = function () {
	  var Symbol = getBuiltIn$7('Symbol');
	  var SymbolPrototype = Symbol && Symbol.prototype;
	  var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
	  var TO_PRIMITIVE = wellKnownSymbol$5('toPrimitive');
	  if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
	    defineBuiltIn$2(SymbolPrototype, TO_PRIMITIVE, function (hint) {
	      return call$8(valueOf, this);
	    }, { arity: 1 });
	  }
	};

	var bind$7 = functionBindContext;
	var uncurryThis$k = functionUncurryThis$1;
	var IndexedObject$3 = indexedObject$1;
	var toObject$6 = toObject$a;
	var lengthOfArrayLike$3 = lengthOfArrayLike$8;
	var arraySpeciesCreate = arraySpeciesCreate$2;
	var push$2 = uncurryThis$k([].push);
	var createMethod$2 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$6($this);
	    var self = IndexedObject$3(O);
	    var boundFunction = bind$7(callbackfn, that);
	    var length = lengthOfArrayLike$3(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result;
	        else if (result) switch (TYPE) {
	          case 3: return true;
	          case 5: return value;
	          case 6: return index;
	          case 2: push$2(target, value);
	        } else switch (TYPE) {
	          case 4: return false;
	          case 7: push$2(target, value);
	        }
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};
	var arrayIteration = {
	  forEach: createMethod$2(0),
	  map: createMethod$2(1),
	  filter: createMethod$2(2),
	  some: createMethod$2(3),
	  every: createMethod$2(4),
	  find: createMethod$2(5),
	  findIndex: createMethod$2(6),
	  filterReject: createMethod$2(7)
	};

	var $$l = _export$1;
	var global$s = global$L;
	var call$7 = functionCall$1;
	var uncurryThis$j = functionUncurryThis$1;
	var DESCRIPTORS$b = descriptors$1;
	var NATIVE_SYMBOL$5 = symbolConstructorDetection;
	var fails$l = fails$B;
	var hasOwn$d = hasOwnProperty_1$1;
	var isPrototypeOf$6 = objectIsPrototypeOf$1;
	var anObject$3 = anObject$e;
	var toIndexedObject$6 = toIndexedObject$d;
	var toPropertyKey$3 = toPropertyKey$7;
	var $toString = toString$a;
	var createPropertyDescriptor$3 = createPropertyDescriptor$a;
	var nativeObjectCreate = objectCreate;
	var objectKeys$2 = objectKeys$4;
	var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames$1;
	var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
	var getOwnPropertySymbolsModule$3 = objectGetOwnPropertySymbols$1;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor$1;
	var definePropertyModule$2 = objectDefineProperty$1;
	var definePropertiesModule = objectDefineProperties;
	var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable$1;
	var defineBuiltIn$1 = defineBuiltIn$6;
	var shared$6 = shared$a.exports;
	var sharedKey$2 = sharedKey$6;
	var hiddenKeys$5 = hiddenKeys$a;
	var uid$4 = uid$7;
	var wellKnownSymbol$4 = wellKnownSymbol$o;
	var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var defineWellKnownSymbol$l = wellKnownSymbolDefine;
	var defineSymbolToPrimitive$1 = symbolDefineToPrimitive;
	var setToStringTag$3 = setToStringTag$7;
	var InternalStateModule$3 = internalState$1;
	var $forEach$1 = arrayIteration.forEach;
	var HIDDEN = sharedKey$2('hidden');
	var SYMBOL = 'Symbol';
	var PROTOTYPE = 'prototype';
	var setInternalState$2 = InternalStateModule$3.set;
	var getInternalState$1 = InternalStateModule$3.getterFor(SYMBOL);
	var ObjectPrototype = Object[PROTOTYPE];
	var $Symbol = global$s.Symbol;
	var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
	var TypeError$8 = global$s.TypeError;
	var QObject = global$s.QObject;
	var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	var nativeDefineProperty = definePropertyModule$2.f;
	var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
	var nativePropertyIsEnumerable = propertyIsEnumerableModule$2.f;
	var push$1 = uncurryThis$j([].push);
	var AllSymbols = shared$6('symbols');
	var ObjectPrototypeSymbols = shared$6('op-symbols');
	var WellKnownSymbolsStore$1 = shared$6('wks');
	var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	var setSymbolDescriptor = DESCRIPTORS$b && fails$l(function () {
	  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
	    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (O, P, Attributes) {
	  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
	  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
	  nativeDefineProperty(O, P, Attributes);
	  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
	    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
	  }
	} : nativeDefineProperty;
	var wrap$1 = function (tag, description) {
	  var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
	  setInternalState$2(symbol, {
	    type: SYMBOL,
	    tag: tag,
	    description: description
	  });
	  if (!DESCRIPTORS$b) symbol.description = description;
	  return symbol;
	};
	var $defineProperty$1 = function defineProperty(O, P, Attributes) {
	  if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
	  anObject$3(O);
	  var key = toPropertyKey$3(P);
	  anObject$3(Attributes);
	  if (hasOwn$d(AllSymbols, key)) {
	    if (!Attributes.enumerable) {
	      if (!hasOwn$d(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor$3(1, {}));
	      O[HIDDEN][key] = true;
	    } else {
	      if (hasOwn$d(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
	      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor$3(0, false) });
	    } return setSymbolDescriptor(O, key, Attributes);
	  } return nativeDefineProperty(O, key, Attributes);
	};
	var $defineProperties = function defineProperties(O, Properties) {
	  anObject$3(O);
	  var properties = toIndexedObject$6(Properties);
	  var keys = objectKeys$2(properties).concat($getOwnPropertySymbols(properties));
	  $forEach$1(keys, function (key) {
	    if (!DESCRIPTORS$b || call$7($propertyIsEnumerable$1, properties, key)) $defineProperty$1(O, key, properties[key]);
	  });
	  return O;
	};
	var $create = function create(O, Properties) {
	  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
	};
	var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
	  var P = toPropertyKey$3(V);
	  var enumerable = call$7(nativePropertyIsEnumerable, this, P);
	  if (this === ObjectPrototype && hasOwn$d(AllSymbols, P) && !hasOwn$d(ObjectPrototypeSymbols, P)) return false;
	  return enumerable || !hasOwn$d(this, P) || !hasOwn$d(AllSymbols, P) || hasOwn$d(this, HIDDEN) && this[HIDDEN][P]
	    ? enumerable : true;
	};
	var $getOwnPropertyDescriptor$2 = function getOwnPropertyDescriptor(O, P) {
	  var it = toIndexedObject$6(O);
	  var key = toPropertyKey$3(P);
	  if (it === ObjectPrototype && hasOwn$d(AllSymbols, key) && !hasOwn$d(ObjectPrototypeSymbols, key)) return;
	  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
	  if (descriptor && hasOwn$d(AllSymbols, key) && !(hasOwn$d(it, HIDDEN) && it[HIDDEN][key])) {
	    descriptor.enumerable = true;
	  }
	  return descriptor;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(O) {
	  var names = nativeGetOwnPropertyNames(toIndexedObject$6(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (!hasOwn$d(AllSymbols, key) && !hasOwn$d(hiddenKeys$5, key)) push$1(result, key);
	  });
	  return result;
	};
	var $getOwnPropertySymbols = function (O) {
	  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
	  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$6(O));
	  var result = [];
	  $forEach$1(names, function (key) {
	    if (hasOwn$d(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$d(ObjectPrototype, key))) {
	      push$1(result, AllSymbols[key]);
	    }
	  });
	  return result;
	};
	if (!NATIVE_SYMBOL$5) {
	  $Symbol = function Symbol() {
	    if (isPrototypeOf$6(SymbolPrototype, this)) throw TypeError$8('Symbol is not a constructor');
	    var description = !arguments.length || arguments[0] === undefined ? undefined : $toString(arguments[0]);
	    var tag = uid$4(description);
	    var setter = function (value) {
	      if (this === ObjectPrototype) call$7(setter, ObjectPrototypeSymbols, value);
	      if (hasOwn$d(this, HIDDEN) && hasOwn$d(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDescriptor(this, tag, createPropertyDescriptor$3(1, value));
	    };
	    if (DESCRIPTORS$b && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
	    return wrap$1(tag, description);
	  };
	  SymbolPrototype = $Symbol[PROTOTYPE];
	  defineBuiltIn$1(SymbolPrototype, 'toString', function toString() {
	    return getInternalState$1(this).tag;
	  });
	  defineBuiltIn$1($Symbol, 'withoutSetter', function (description) {
	    return wrap$1(uid$4(description), description);
	  });
	  propertyIsEnumerableModule$2.f = $propertyIsEnumerable$1;
	  definePropertyModule$2.f = $defineProperty$1;
	  definePropertiesModule.f = $defineProperties;
	  getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor$2;
	  getOwnPropertyNamesModule$2.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
	  getOwnPropertySymbolsModule$3.f = $getOwnPropertySymbols;
	  wrappedWellKnownSymbolModule.f = function (name) {
	    return wrap$1(wellKnownSymbol$4(name), name);
	  };
	  if (DESCRIPTORS$b) {
	    nativeDefineProperty(SymbolPrototype, 'description', {
	      configurable: true,
	      get: function description() {
	        return getInternalState$1(this).description;
	      }
	    });
	  }
	}
	$$l({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL$5, sham: !NATIVE_SYMBOL$5 }, {
	  Symbol: $Symbol
	});
	$forEach$1(objectKeys$2(WellKnownSymbolsStore$1), function (name) {
	  defineWellKnownSymbol$l(name);
	});
	$$l({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL$5 }, {
	  useSetter: function () { USE_SETTER = true; },
	  useSimple: function () { USE_SETTER = false; }
	});
	$$l({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5, sham: !DESCRIPTORS$b }, {
	  create: $create,
	  defineProperty: $defineProperty$1,
	  defineProperties: $defineProperties,
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$2
	});
	$$l({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL$5 }, {
	  getOwnPropertyNames: $getOwnPropertyNames
	});
	defineSymbolToPrimitive$1();
	setToStringTag$3($Symbol, SYMBOL);
	hiddenKeys$5[HIDDEN] = true;

	var NATIVE_SYMBOL$4 = symbolConstructorDetection;
	var symbolRegistryDetection = NATIVE_SYMBOL$4 && !!Symbol['for'] && !!Symbol.keyFor;

	var $$k = _export$1;
	var getBuiltIn$6 = getBuiltIn$h;
	var hasOwn$c = hasOwnProperty_1$1;
	var toString$5 = toString$a;
	var shared$5 = shared$a.exports;
	var NATIVE_SYMBOL_REGISTRY$1 = symbolRegistryDetection;
	var StringToSymbolRegistry = shared$5('string-to-symbol-registry');
	var SymbolToStringRegistry$1 = shared$5('symbol-to-string-registry');
	$$k({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY$1 }, {
	  'for': function (key) {
	    var string = toString$5(key);
	    if (hasOwn$c(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
	    var symbol = getBuiltIn$6('Symbol')(string);
	    StringToSymbolRegistry[string] = symbol;
	    SymbolToStringRegistry$1[symbol] = string;
	    return symbol;
	  }
	});

	var $$j = _export$1;
	var hasOwn$b = hasOwnProperty_1$1;
	var isSymbol$4 = isSymbol$7;
	var tryToString$2 = tryToString$7;
	var shared$4 = shared$a.exports;
	var NATIVE_SYMBOL_REGISTRY = symbolRegistryDetection;
	var SymbolToStringRegistry = shared$4('symbol-to-string-registry');
	$$j({ target: 'Symbol', stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
	  keyFor: function keyFor(sym) {
	    if (!isSymbol$4(sym)) throw TypeError(tryToString$2(sym) + ' is not a symbol');
	    if (hasOwn$b(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
	  }
	});

	var $$i = _export$1;
	var getBuiltIn$5 = getBuiltIn$h;
	var apply$2 = functionApply;
	var call$6 = functionCall$1;
	var uncurryThis$i = functionUncurryThis$1;
	var fails$k = fails$B;
	var isArray$3 = isArray$6;
	var isCallable$d = isCallable$w;
	var isObject$c = isObject$o;
	var isSymbol$3 = isSymbol$7;
	var arraySlice$1 = arraySlice$4;
	var NATIVE_SYMBOL$3 = symbolConstructorDetection;
	var $stringify = getBuiltIn$5('JSON', 'stringify');
	var exec$1 = uncurryThis$i(/./.exec);
	var charAt = uncurryThis$i(''.charAt);
	var charCodeAt = uncurryThis$i(''.charCodeAt);
	var replace$1 = uncurryThis$i(''.replace);
	var numberToString = uncurryThis$i(1.0.toString);
	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;
	var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL$3 || fails$k(function () {
	  var symbol = getBuiltIn$5('Symbol')();
	  return $stringify([symbol]) != '[null]'
	    || $stringify({ a: symbol }) != '{}'
	    || $stringify(Object(symbol)) != '{}';
	});
	var ILL_FORMED_UNICODE = fails$k(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});
	var stringifyWithSymbolsFix = function (it, replacer) {
	  var args = arraySlice$1(arguments);
	  var $replacer = replacer;
	  if (!isObject$c(replacer) && it === undefined || isSymbol$3(it)) return;
	  if (!isArray$3(replacer)) replacer = function (key, value) {
	    if (isCallable$d($replacer)) value = call$6($replacer, this, key, value);
	    if (!isSymbol$3(value)) return value;
	  };
	  args[1] = replacer;
	  return apply$2($stringify, null, args);
	};
	var fixIllFormed = function (match, offset, string) {
	  var prev = charAt(string, offset - 1);
	  var next = charAt(string, offset + 1);
	  if ((exec$1(low, match) && !exec$1(hi, next)) || (exec$1(hi, match) && !exec$1(low, prev))) {
	    return '\\u' + numberToString(charCodeAt(match, 0), 16);
	  } return match;
	};
	if ($stringify) {
	  $$i({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
	    stringify: function stringify(it, replacer, space) {
	      var args = arraySlice$1(arguments);
	      var result = apply$2(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
	      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace$1(result, tester, fixIllFormed) : result;
	    }
	  });
	}

	var $$h = _export$1;
	var NATIVE_SYMBOL$2 = symbolConstructorDetection;
	var fails$j = fails$B;
	var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols$1;
	var toObject$5 = toObject$a;
	var FORCED$1 = !NATIVE_SYMBOL$2 || fails$j(function () { getOwnPropertySymbolsModule$2.f(1); });
	$$h({ target: 'Object', stat: true, forced: FORCED$1 }, {
	  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
	    var $getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
	    return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject$5(it)) : [];
	  }
	});

	var defineWellKnownSymbol$k = wellKnownSymbolDefine;
	defineWellKnownSymbol$k('asyncIterator');

	var defineWellKnownSymbol$j = wellKnownSymbolDefine;
	defineWellKnownSymbol$j('hasInstance');

	var defineWellKnownSymbol$i = wellKnownSymbolDefine;
	defineWellKnownSymbol$i('isConcatSpreadable');

	var defineWellKnownSymbol$h = wellKnownSymbolDefine;
	defineWellKnownSymbol$h('iterator');

	var defineWellKnownSymbol$g = wellKnownSymbolDefine;
	defineWellKnownSymbol$g('match');

	var defineWellKnownSymbol$f = wellKnownSymbolDefine;
	defineWellKnownSymbol$f('matchAll');

	var defineWellKnownSymbol$e = wellKnownSymbolDefine;
	defineWellKnownSymbol$e('replace');

	var defineWellKnownSymbol$d = wellKnownSymbolDefine;
	defineWellKnownSymbol$d('search');

	var defineWellKnownSymbol$c = wellKnownSymbolDefine;
	defineWellKnownSymbol$c('species');

	var defineWellKnownSymbol$b = wellKnownSymbolDefine;
	defineWellKnownSymbol$b('split');

	var defineWellKnownSymbol$a = wellKnownSymbolDefine;
	var defineSymbolToPrimitive = symbolDefineToPrimitive;
	defineWellKnownSymbol$a('toPrimitive');
	defineSymbolToPrimitive();

	var getBuiltIn$4 = getBuiltIn$h;
	var defineWellKnownSymbol$9 = wellKnownSymbolDefine;
	var setToStringTag$2 = setToStringTag$7;
	defineWellKnownSymbol$9('toStringTag');
	setToStringTag$2(getBuiltIn$4('Symbol'), 'Symbol');

	var defineWellKnownSymbol$8 = wellKnownSymbolDefine;
	defineWellKnownSymbol$8('unscopables');

	var global$r = global$L;
	var setToStringTag$1 = setToStringTag$7;
	setToStringTag$1(global$r.JSON, 'JSON', true);

	var path$d = path$j;
	var symbol$3 = path$d.Symbol;

	var parent$A = symbol$3;
	var symbol$2 = parent$A;

	var parent$z = symbol$2;
	var symbol$1 = parent$z;

	var defineWellKnownSymbol$7 = wellKnownSymbolDefine;
	defineWellKnownSymbol$7('asyncDispose');

	var defineWellKnownSymbol$6 = wellKnownSymbolDefine;
	defineWellKnownSymbol$6('dispose');

	var defineWellKnownSymbol$5 = wellKnownSymbolDefine;
	defineWellKnownSymbol$5('matcher');

	var defineWellKnownSymbol$4 = wellKnownSymbolDefine;
	defineWellKnownSymbol$4('metadataKey');

	var defineWellKnownSymbol$3 = wellKnownSymbolDefine;
	defineWellKnownSymbol$3('observable');

	var defineWellKnownSymbol$2 = wellKnownSymbolDefine;
	defineWellKnownSymbol$2('metadata');

	var defineWellKnownSymbol$1 = wellKnownSymbolDefine;
	defineWellKnownSymbol$1('patternMatch');

	var defineWellKnownSymbol = wellKnownSymbolDefine;
	defineWellKnownSymbol('replaceAll');

	var parent$y = symbol$1;
	var symbol = parent$y;

	(function (module) {
		module.exports = symbol;
	} (symbol$4));
	getDefaultExportFromCjs(symbol$4.exports);

	(function (module) {
		module.exports = symbol$4.exports;
	} (symbol$5));
	var _Symbol = getDefaultExportFromCjs(symbol$5.exports);

	var iterator$5 = {exports: {}};

	var iterator$4 = {exports: {}};

	var WrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
	var iterator$3 = WrappedWellKnownSymbolModule$1.f('iterator');

	var parent$x = iterator$3;
	var iterator$2 = parent$x;

	var parent$w = iterator$2;
	var iterator$1 = parent$w;

	var parent$v = iterator$1;
	var iterator = parent$v;

	(function (module) {
		module.exports = iterator;
	} (iterator$4));
	getDefaultExportFromCjs(iterator$4.exports);

	(function (module) {
		module.exports = iterator$4.exports;
	} (iterator$5));
	var _Symbol$iterator = getDefaultExportFromCjs(iterator$5.exports);

	(function (module) {
		var _Symbol = symbol$5.exports;
		var _Symbol$iterator = iterator$5.exports;
		function _typeof(obj) {
		  "@babel/helpers - typeof";
		  return (module.exports = _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
		    return typeof obj;
		  } : function (obj) {
		    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
		}
		module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (_typeof$1));
	getDefaultExportFromCjs(_typeof$1.exports);

	var create$7 = {exports: {}};

	var create$6 = {exports: {}};

	var $$g = _export$1;
	var DESCRIPTORS$a = descriptors$1;
	var create$5 = objectCreate;
	$$g({ target: 'Object', stat: true, sham: !DESCRIPTORS$a }, {
	  create: create$5
	});

	var path$c = path$j;
	var Object$4 = path$c.Object;
	var create$4 = function create(P, D) {
	  return Object$4.create(P, D);
	};

	var parent$u = create$4;
	var create$3 = parent$u;

	var parent$t = create$3;
	var create$2 = parent$t;

	var parent$s = create$2;
	var create$1 = parent$s;

	(function (module) {
		module.exports = create$1;
	} (create$6));
	getDefaultExportFromCjs(create$6.exports);

	(function (module) {
		module.exports = create$6.exports;
	} (create$7));
	getDefaultExportFromCjs(create$7.exports);

	var getPrototypeOf$6 = {exports: {}};

	var getPrototypeOf$5 = {exports: {}};

	var $$f = _export$1;
	var fails$i = fails$B;
	var toObject$4 = toObject$a;
	var nativeGetPrototypeOf = objectGetPrototypeOf;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
	var FAILS_ON_PRIMITIVES$3 = fails$i(function () { nativeGetPrototypeOf(1); });
	$$f({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3, sham: !CORRECT_PROTOTYPE_GETTER }, {
	  getPrototypeOf: function getPrototypeOf(it) {
	    return nativeGetPrototypeOf(toObject$4(it));
	  }
	});

	var path$b = path$j;
	var getPrototypeOf$4 = path$b.Object.getPrototypeOf;

	var parent$r = getPrototypeOf$4;
	var getPrototypeOf$3 = parent$r;

	var parent$q = getPrototypeOf$3;
	var getPrototypeOf$2 = parent$q;

	var parent$p = getPrototypeOf$2;
	var getPrototypeOf$1 = parent$p;

	(function (module) {
		module.exports = getPrototypeOf$1;
	} (getPrototypeOf$5));
	getDefaultExportFromCjs(getPrototypeOf$5.exports);

	(function (module) {
		module.exports = getPrototypeOf$5.exports;
	} (getPrototypeOf$6));
	getDefaultExportFromCjs(getPrototypeOf$6.exports);

	var forEach$a = {exports: {}};

	var forEach$9 = {exports: {}};

	var fails$h = fails$B;
	var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$h(function () {
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;
	var STRICT_METHOD$1 = arrayMethodIsStrict$2('forEach');
	var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn ) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	var $$e = _export$1;
	var forEach$8 = arrayForEach;
	$$e({ target: 'Array', proto: true, forced: [].forEach != forEach$8 }, {
	  forEach: forEach$8
	});

	var path$a = path$j;
	var entryVirtual$5 = function (CONSTRUCTOR) {
	  return path$a[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$4 = entryVirtual$5;
	var forEach$7 = entryVirtual$4('Array').forEach;

	var parent$o = forEach$7;
	var forEach$6 = parent$o;

	var classof$3 = classof$c;
	var hasOwn$a = hasOwnProperty_1$1;
	var isPrototypeOf$5 = objectIsPrototypeOf$1;
	var method$4 = forEach$6;
	var ArrayPrototype$4 = Array.prototype;
	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};
	var forEach$5 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype$4 || (isPrototypeOf$5(ArrayPrototype$4, it) && own === ArrayPrototype$4.forEach)
	    || hasOwn$a(DOMIterables, classof$3(it)) ? method$4 : own;
	};

	var parent$n = forEach$5;
	var forEach$4 = parent$n;

	var parent$m = forEach$4;
	var forEach$3 = parent$m;

	(function (module) {
		module.exports = forEach$3;
	} (forEach$9));
	getDefaultExportFromCjs(forEach$9.exports);

	(function (module) {
		module.exports = forEach$9.exports;
	} (forEach$a));
	getDefaultExportFromCjs(forEach$a.exports);

	var setPrototypeOf$6 = {exports: {}};

	var setPrototypeOf$5 = {exports: {}};

	var $$d = _export$1;
	var setPrototypeOf$4 = objectSetPrototypeOf;
	$$d({ target: 'Object', stat: true }, {
	  setPrototypeOf: setPrototypeOf$4
	});

	var path$9 = path$j;
	var setPrototypeOf$3 = path$9.Object.setPrototypeOf;

	var parent$l = setPrototypeOf$3;
	var setPrototypeOf$2 = parent$l;

	var parent$k = setPrototypeOf$2;
	var setPrototypeOf$1 = parent$k;

	var parent$j = setPrototypeOf$1;
	var setPrototypeOf = parent$j;

	(function (module) {
		module.exports = setPrototypeOf;
	} (setPrototypeOf$5));
	getDefaultExportFromCjs(setPrototypeOf$5.exports);

	(function (module) {
		module.exports = setPrototypeOf$5.exports;
	} (setPrototypeOf$6));
	getDefaultExportFromCjs(setPrototypeOf$6.exports);

	var reverse$6 = {exports: {}};

	var reverse$5 = {exports: {}};

	var $$c = _export$1;
	var uncurryThis$h = functionUncurryThis$1;
	var isArray$2 = isArray$6;
	var nativeReverse = uncurryThis$h([].reverse);
	var test = [1, 2];
	$$c({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
	  reverse: function reverse() {
	    if (isArray$2(this)) this.length = this.length;
	    return nativeReverse(this);
	  }
	});

	var entryVirtual$3 = entryVirtual$5;
	var reverse$4 = entryVirtual$3('Array').reverse;

	var isPrototypeOf$4 = objectIsPrototypeOf$1;
	var method$3 = reverse$4;
	var ArrayPrototype$3 = Array.prototype;
	var reverse$3 = function (it) {
	  var own = it.reverse;
	  return it === ArrayPrototype$3 || (isPrototypeOf$4(ArrayPrototype$3, it) && own === ArrayPrototype$3.reverse) ? method$3 : own;
	};

	var parent$i = reverse$3;
	var reverse$2 = parent$i;

	var parent$h = reverse$2;
	var reverse$1 = parent$h;

	var parent$g = reverse$1;
	var reverse = parent$g;

	(function (module) {
		module.exports = reverse;
	} (reverse$5));
	getDefaultExportFromCjs(reverse$5.exports);

	(function (module) {
		module.exports = reverse$5.exports;
	} (reverse$6));
	getDefaultExportFromCjs(reverse$6.exports);

	var slice$8 = {exports: {}};

	var slice$7 = {exports: {}};

	var $$b = _export$1;
	var isArray$1 = isArray$6;
	var isConstructor = isConstructor$3;
	var isObject$b = isObject$o;
	var toAbsoluteIndex$2 = toAbsoluteIndex$5;
	var lengthOfArrayLike$2 = lengthOfArrayLike$8;
	var toIndexedObject$5 = toIndexedObject$d;
	var createProperty = createProperty$3;
	var wellKnownSymbol$3 = wellKnownSymbol$o;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$3;
	var nativeSlice = arraySlice$4;
	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('slice');
	var SPECIES = wellKnownSymbol$3('species');
	var $Array = Array;
	var max$1 = Math.max;
	$$b({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject$5(this);
	    var length = lengthOfArrayLike$2(O);
	    var k = toAbsoluteIndex$2(start, length);
	    var fin = toAbsoluteIndex$2(end === undefined ? length : end, length);
	    var Constructor, result, n;
	    if (isArray$1(O)) {
	      Constructor = O.constructor;
	      if (isConstructor(Constructor) && (Constructor === $Array || isArray$1(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject$b(Constructor)) {
	        Constructor = Constructor[SPECIES];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === $Array || Constructor === undefined) {
	        return nativeSlice(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? $Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var entryVirtual$2 = entryVirtual$5;
	var slice$6 = entryVirtual$2('Array').slice;

	var isPrototypeOf$3 = objectIsPrototypeOf$1;
	var method$2 = slice$6;
	var ArrayPrototype$2 = Array.prototype;
	var slice$5 = function (it) {
	  var own = it.slice;
	  return it === ArrayPrototype$2 || (isPrototypeOf$3(ArrayPrototype$2, it) && own === ArrayPrototype$2.slice) ? method$2 : own;
	};

	var parent$f = slice$5;
	var slice$4 = parent$f;

	var parent$e = slice$4;
	var slice$3 = parent$e;

	var parent$d = slice$3;
	var slice$2 = parent$d;

	(function (module) {
		module.exports = slice$2;
	} (slice$7));
	getDefaultExportFromCjs(slice$7.exports);

	(function (module) {
		module.exports = slice$7.exports;
	} (slice$8));
	getDefaultExportFromCjs(slice$8.exports);

	(function (module) {
		var _typeof = _typeof$1.exports["default"];
		var _Symbol = symbol$5.exports;
		var _Object$defineProperty = defineProperty$f.exports;
		var _Object$create = create$7.exports;
		var _Object$getPrototypeOf = getPrototypeOf$6.exports;
		var _forEachInstanceProperty = forEach$a.exports;
		var _Object$setPrototypeOf = setPrototypeOf$6.exports;
		var _Promise = promise$7.exports;
		var _reverseInstanceProperty = reverse$6.exports;
		var _sliceInstanceProperty = slice$8.exports;
		function _regeneratorRuntime() {
		  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
		    return exports;
		  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
		  var exports = {},
		    Op = Object.prototype,
		    hasOwn = Op.hasOwnProperty,
		    $Symbol = "function" == typeof _Symbol ? _Symbol : {},
		    iteratorSymbol = $Symbol.iterator || "@@iterator",
		    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
		    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
		  function define(obj, key, value) {
		    return _Object$defineProperty(obj, key, {
		      value: value,
		      enumerable: !0,
		      configurable: !0,
		      writable: !0
		    }), obj[key];
		  }
		  try {
		    define({}, "");
		  } catch (err) {
		    define = function define(obj, key, value) {
		      return obj[key] = value;
		    };
		  }
		  function wrap(innerFn, outerFn, self, tryLocsList) {
		    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
		      generator = _Object$create(protoGenerator.prototype),
		      context = new Context(tryLocsList || []);
		    return generator._invoke = function (innerFn, self, context) {
		      var state = "suspendedStart";
		      return function (method, arg) {
		        if ("executing" === state) throw new Error("Generator is already running");
		        if ("completed" === state) {
		          if ("throw" === method) throw arg;
		          return doneResult();
		        }
		        for (context.method = method, context.arg = arg;;) {
		          var delegate = context.delegate;
		          if (delegate) {
		            var delegateResult = maybeInvokeDelegate(delegate, context);
		            if (delegateResult) {
		              if (delegateResult === ContinueSentinel) continue;
		              return delegateResult;
		            }
		          }
		          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
		            if ("suspendedStart" === state) throw state = "completed", context.arg;
		            context.dispatchException(context.arg);
		          } else "return" === context.method && context.abrupt("return", context.arg);
		          state = "executing";
		          var record = tryCatch(innerFn, self, context);
		          if ("normal" === record.type) {
		            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
		            return {
		              value: record.arg,
		              done: context.done
		            };
		          }
		          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
		        }
		      };
		    }(innerFn, self, context), generator;
		  }
		  function tryCatch(fn, obj, arg) {
		    try {
		      return {
		        type: "normal",
		        arg: fn.call(obj, arg)
		      };
		    } catch (err) {
		      return {
		        type: "throw",
		        arg: err
		      };
		    }
		  }
		  exports.wrap = wrap;
		  var ContinueSentinel = {};
		  function Generator() {}
		  function GeneratorFunction() {}
		  function GeneratorFunctionPrototype() {}
		  var IteratorPrototype = {};
		  define(IteratorPrototype, iteratorSymbol, function () {
		    return this;
		  });
		  var getProto = _Object$getPrototypeOf,
		    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
		  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
		  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = _Object$create(IteratorPrototype);
		  function defineIteratorMethods(prototype) {
		    var _context;
		    _forEachInstanceProperty(_context = ["next", "throw", "return"]).call(_context, function (method) {
		      define(prototype, method, function (arg) {
		        return this._invoke(method, arg);
		      });
		    });
		  }
		  function AsyncIterator(generator, PromiseImpl) {
		    function invoke(method, arg, resolve, reject) {
		      var record = tryCatch(generator[method], generator, arg);
		      if ("throw" !== record.type) {
		        var result = record.arg,
		          value = result.value;
		        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
		          invoke("next", value, resolve, reject);
		        }, function (err) {
		          invoke("throw", err, resolve, reject);
		        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
		          result.value = unwrapped, resolve(result);
		        }, function (error) {
		          return invoke("throw", error, resolve, reject);
		        });
		      }
		      reject(record.arg);
		    }
		    var previousPromise;
		    this._invoke = function (method, arg) {
		      function callInvokeWithMethodAndArg() {
		        return new PromiseImpl(function (resolve, reject) {
		          invoke(method, arg, resolve, reject);
		        });
		      }
		      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
		    };
		  }
		  function maybeInvokeDelegate(delegate, context) {
		    var method = delegate.iterator[context.method];
		    if (undefined === method) {
		      if (context.delegate = null, "throw" === context.method) {
		        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
		        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
		      }
		      return ContinueSentinel;
		    }
		    var record = tryCatch(method, delegate.iterator, context.arg);
		    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
		    var info = record.arg;
		    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
		  }
		  function pushTryEntry(locs) {
		    var entry = {
		      tryLoc: locs[0]
		    };
		    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
		  }
		  function resetTryEntry(entry) {
		    var record = entry.completion || {};
		    record.type = "normal", delete record.arg, entry.completion = record;
		  }
		  function Context(tryLocsList) {
		    this.tryEntries = [{
		      tryLoc: "root"
		    }], _forEachInstanceProperty(tryLocsList).call(tryLocsList, pushTryEntry, this), this.reset(!0);
		  }
		  function values(iterable) {
		    if (iterable) {
		      var iteratorMethod = iterable[iteratorSymbol];
		      if (iteratorMethod) return iteratorMethod.call(iterable);
		      if ("function" == typeof iterable.next) return iterable;
		      if (!isNaN(iterable.length)) {
		        var i = -1,
		          next = function next() {
		            for (; ++i < iterable.length;) {
		              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
		            }
		            return next.value = undefined, next.done = !0, next;
		          };
		        return next.next = next;
		      }
		    }
		    return {
		      next: doneResult
		    };
		  }
		  function doneResult() {
		    return {
		      value: undefined,
		      done: !0
		    };
		  }
		  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
		    var ctor = "function" == typeof genFun && genFun.constructor;
		    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
		  }, exports.mark = function (genFun) {
		    return _Object$setPrototypeOf ? _Object$setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = _Object$create(Gp), genFun;
		  }, exports.awrap = function (arg) {
		    return {
		      __await: arg
		    };
		  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
		    return this;
		  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
		    void 0 === PromiseImpl && (PromiseImpl = _Promise);
		    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
		    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
		      return result.done ? result.value : iter.next();
		    });
		  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
		    return this;
		  }), define(Gp, "toString", function () {
		    return "[object Generator]";
		  }), exports.keys = function (object) {
		    var keys = [];
		    for (var key in object) {
		      keys.push(key);
		    }
		    return _reverseInstanceProperty(keys).call(keys), function next() {
		      for (; keys.length;) {
		        var key = keys.pop();
		        if (key in object) return next.value = key, next.done = !1, next;
		      }
		      return next.done = !0, next;
		    };
		  }, exports.values = values, Context.prototype = {
		    constructor: Context,
		    reset: function reset(skipTempReset) {
		      var _context2;
		      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, _forEachInstanceProperty(_context2 = this.tryEntries).call(_context2, resetTryEntry), !skipTempReset) for (var name in this) {
		        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+_sliceInstanceProperty(name).call(name, 1)) && (this[name] = undefined);
		      }
		    },
		    stop: function stop() {
		      this.done = !0;
		      var rootRecord = this.tryEntries[0].completion;
		      if ("throw" === rootRecord.type) throw rootRecord.arg;
		      return this.rval;
		    },
		    dispatchException: function dispatchException(exception) {
		      if (this.done) throw exception;
		      var context = this;
		      function handle(loc, caught) {
		        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
		      }
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i],
		          record = entry.completion;
		        if ("root" === entry.tryLoc) return handle("end");
		        if (entry.tryLoc <= this.prev) {
		          var hasCatch = hasOwn.call(entry, "catchLoc"),
		            hasFinally = hasOwn.call(entry, "finallyLoc");
		          if (hasCatch && hasFinally) {
		            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
		            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
		          } else if (hasCatch) {
		            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
		          } else {
		            if (!hasFinally) throw new Error("try statement without catch or finally");
		            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
		          }
		        }
		      }
		    },
		    abrupt: function abrupt(type, arg) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
		          var finallyEntry = entry;
		          break;
		        }
		      }
		      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
		      var record = finallyEntry ? finallyEntry.completion : {};
		      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
		    },
		    complete: function complete(record, afterLoc) {
		      if ("throw" === record.type) throw record.arg;
		      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
		    },
		    finish: function finish(finallyLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
		      }
		    },
		    "catch": function _catch(tryLoc) {
		      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
		        var entry = this.tryEntries[i];
		        if (entry.tryLoc === tryLoc) {
		          var record = entry.completion;
		          if ("throw" === record.type) {
		            var thrown = record.arg;
		            resetTryEntry(entry);
		          }
		          return thrown;
		        }
		      }
		      throw new Error("illegal catch attempt");
		    },
		    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
		      return this.delegate = {
		        iterator: values(iterable),
		        resultName: resultName,
		        nextLoc: nextLoc
		      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
		    }
		  }, exports;
		}
		module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
	} (regeneratorRuntime$1));
	getDefaultExportFromCjs(regeneratorRuntime$1.exports);

	var runtime = regeneratorRuntime$1.exports();
	var regenerator = runtime;
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}

	var freeze$2 = {exports: {}};

	var fails$g = fails$B;
	var freezing = !fails$g(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = {exports: {}};

	var fails$f = fails$B;
	var arrayBufferNonExtensible = fails$f(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	var fails$e = fails$B;
	var isObject$a = isObject$o;
	var classof$2 = classofRaw$3;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$2 = fails$e(function () { $isExtensible(1); });
	var objectIsExtensible = (FAILS_ON_PRIMITIVES$2 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject$a(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$2(it) == 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var $$a = _export$1;
	var uncurryThis$g = functionUncurryThis$1;
	var hiddenKeys$4 = hiddenKeys$a;
	var isObject$9 = isObject$o;
	var hasOwn$9 = hasOwnProperty_1$1;
	var defineProperty$6 = objectDefineProperty$1.f;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames$1;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible = objectIsExtensible;
	var uid$3 = uid$7;
	var FREEZING$1 = freezing;
	var REQUIRED = false;
	var METADATA = uid$3('meta');
	var id$1 = 0;
	var setMetadata = function (it) {
	  defineProperty$6(it, METADATA, { value: {
	    objectID: 'O' + id$1++,
	    weakData: {}
	  } });
	};
	var fastKey$1 = function (it, create) {
	  if (!isObject$9(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!hasOwn$9(it, METADATA)) {
	    if (!isExtensible(it)) return 'F';
	    if (!create) return 'E';
	    setMetadata(it);
	  } return it[METADATA].objectID;
	};
	var getWeakData = function (it, create) {
	  if (!hasOwn$9(it, METADATA)) {
	    if (!isExtensible(it)) return true;
	    if (!create) return false;
	    setMetadata(it);
	  } return it[METADATA].weakData;
	};
	var onFreeze$1 = function (it) {
	  if (FREEZING$1 && REQUIRED && isExtensible(it) && !hasOwn$9(it, METADATA)) setMetadata(it);
	  return it;
	};
	var enable = function () {
	  meta.enable = function () {  };
	  REQUIRED = true;
	  var getOwnPropertyNames = getOwnPropertyNamesModule$1.f;
	  var splice = uncurryThis$g([].splice);
	  var test = {};
	  test[METADATA] = 1;
	  if (getOwnPropertyNames(test).length) {
	    getOwnPropertyNamesModule$1.f = function (it) {
	      var result = getOwnPropertyNames(it);
	      for (var i = 0, length = result.length; i < length; i++) {
	        if (result[i] === METADATA) {
	          splice(result, i, 1);
	          break;
	        }
	      } return result;
	    };
	    $$a({ target: 'Object', stat: true, forced: true }, {
	      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
	    });
	  }
	};
	var meta = internalMetadata.exports = {
	  enable: enable,
	  fastKey: fastKey$1,
	  getWeakData: getWeakData,
	  onFreeze: onFreeze$1
	};
	hiddenKeys$4[METADATA] = true;

	var $$9 = _export$1;
	var FREEZING = freezing;
	var fails$d = fails$B;
	var isObject$8 = isObject$o;
	var onFreeze = internalMetadata.exports.onFreeze;
	var $freeze = Object.freeze;
	var FAILS_ON_PRIMITIVES$1 = fails$d(function () { $freeze(1); });
	$$9({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !FREEZING }, {
	  freeze: function freeze(it) {
	    return $freeze && isObject$8(it) ? $freeze(onFreeze(it)) : it;
	  }
	});

	var path$8 = path$j;
	var freeze$1 = path$8.Object.freeze;

	var parent$c = freeze$1;
	var freeze = parent$c;

	(function (module) {
		module.exports = freeze;
	} (freeze$2));
	var _Object$freeze = getDefaultExportFromCjs(freeze$2.exports);

	var map$6 = {exports: {}};

	var $$8 = _export$1;
	var global$q = global$L;
	var InternalMetadataModule = internalMetadata.exports;
	var fails$c = fails$B;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$c;
	var iterate$1 = iterate$7;
	var anInstance$1 = anInstance$3;
	var isCallable$c = isCallable$w;
	var isObject$7 = isObject$o;
	var setToStringTag = setToStringTag$7;
	var defineProperty$5 = objectDefineProperty$1.f;
	var forEach$2 = arrayIteration.forEach;
	var DESCRIPTORS$9 = descriptors$1;
	var InternalStateModule$2 = internalState$1;
	var setInternalState$1 = InternalStateModule$2.set;
	var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
	var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$q[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var exported = {};
	  var Constructor;
	  if (!DESCRIPTORS$9 || !isCallable$c(NativeConstructor)
	    || !(IS_WEAK || NativePrototype.forEach && !fails$c(function () { new NativeConstructor().entries().next(); }))
	  ) {
	    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
	    InternalMetadataModule.enable();
	  } else {
	    Constructor = wrapper(function (target, iterable) {
	      setInternalState$1(anInstance$1(target, Prototype), {
	        type: CONSTRUCTOR_NAME,
	        collection: new NativeConstructor()
	      });
	      if (iterable != undefined) iterate$1(iterable, target[ADDER], { that: target, AS_ENTRIES: IS_MAP });
	    });
	    var Prototype = Constructor.prototype;
	    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
	    forEach$2(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
	        createNonEnumerableProperty$4(Prototype, KEY, function (a, b) {
	          var collection = getInternalState(this).collection;
	          if (!IS_ADDER && IS_WEAK && !isObject$7(a)) return KEY == 'get' ? undefined : false;
	          var result = collection[KEY](a === 0 ? 0 : a, b);
	          return IS_ADDER ? this : result;
	        });
	      }
	    });
	    IS_WEAK || defineProperty$5(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }
	  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$8({ global: true, forced: true }, exported);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var defineBuiltIn = defineBuiltIn$6;
	var defineBuiltIns$1 = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else defineBuiltIn(target, key, src[key], options);
	  } return target;
	};

	var defineProperty$4 = objectDefineProperty$1.f;
	var create = objectCreate;
	var defineBuiltIns = defineBuiltIns$1;
	var bind$6 = functionBindContext;
	var anInstance = anInstance$3;
	var isNullOrUndefined$1 = isNullOrUndefined$6;
	var iterate = iterate$7;
	var defineIterator = iteratorDefine;
	var createIterResultObject = createIterResultObject$3;
	var setSpecies = setSpecies$2;
	var DESCRIPTORS$8 = descriptors$1;
	var fastKey = internalMetadata.exports.fastKey;
	var InternalStateModule$1 = internalState$1;
	var setInternalState = InternalStateModule$1.set;
	var internalStateGetterFor = InternalStateModule$1.getterFor;
	var collectionStrong$1 = {
	  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
	    var Constructor = wrapper(function (that, iterable) {
	      anInstance(that, Prototype);
	      setInternalState(that, {
	        type: CONSTRUCTOR_NAME,
	        index: create(null),
	        first: undefined,
	        last: undefined,
	        size: 0
	      });
	      if (!DESCRIPTORS$8) that.size = 0;
	      if (!isNullOrUndefined$1(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
	    });
	    var Prototype = Constructor.prototype;
	    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var define = function (that, key, value) {
	      var state = getInternalState(that);
	      var entry = getEntry(that, key);
	      var previous, index;
	      if (entry) {
	        entry.value = value;
	      } else {
	        state.last = entry = {
	          index: index = fastKey(key, true),
	          key: key,
	          value: value,
	          previous: previous = state.last,
	          next: undefined,
	          removed: false
	        };
	        if (!state.first) state.first = entry;
	        if (previous) previous.next = entry;
	        if (DESCRIPTORS$8) state.size++;
	        else that.size++;
	        if (index !== 'F') state.index[index] = entry;
	      } return that;
	    };
	    var getEntry = function (that, key) {
	      var state = getInternalState(that);
	      var index = fastKey(key);
	      var entry;
	      if (index !== 'F') return state.index[index];
	      for (entry = state.first; entry; entry = entry.next) {
	        if (entry.key == key) return entry;
	      }
	    };
	    defineBuiltIns(Prototype, {
	      clear: function clear() {
	        var that = this;
	        var state = getInternalState(that);
	        var data = state.index;
	        var entry = state.first;
	        while (entry) {
	          entry.removed = true;
	          if (entry.previous) entry.previous = entry.previous.next = undefined;
	          delete data[entry.index];
	          entry = entry.next;
	        }
	        state.first = state.last = undefined;
	        if (DESCRIPTORS$8) state.size = 0;
	        else that.size = 0;
	      },
	      'delete': function (key) {
	        var that = this;
	        var state = getInternalState(that);
	        var entry = getEntry(that, key);
	        if (entry) {
	          var next = entry.next;
	          var prev = entry.previous;
	          delete state.index[entry.index];
	          entry.removed = true;
	          if (prev) prev.next = next;
	          if (next) next.previous = prev;
	          if (state.first == entry) state.first = next;
	          if (state.last == entry) state.last = prev;
	          if (DESCRIPTORS$8) state.size--;
	          else that.size--;
	        } return !!entry;
	      },
	      forEach: function forEach(callbackfn ) {
	        var state = getInternalState(this);
	        var boundFunction = bind$6(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	        var entry;
	        while (entry = entry ? entry.next : state.first) {
	          boundFunction(entry.value, entry.key, this);
	          while (entry && entry.removed) entry = entry.previous;
	        }
	      },
	      has: function has(key) {
	        return !!getEntry(this, key);
	      }
	    });
	    defineBuiltIns(Prototype, IS_MAP ? {
	      get: function get(key) {
	        var entry = getEntry(this, key);
	        return entry && entry.value;
	      },
	      set: function set(key, value) {
	        return define(this, key === 0 ? 0 : key, value);
	      }
	    } : {
	      add: function add(value) {
	        return define(this, value = value === 0 ? 0 : value, value);
	      }
	    });
	    if (DESCRIPTORS$8) defineProperty$4(Prototype, 'size', {
	      get: function () {
	        return getInternalState(this).size;
	      }
	    });
	    return Constructor;
	  },
	  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
	    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
	    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
	    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
	    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
	      setInternalState(this, {
	        type: ITERATOR_NAME,
	        target: iterated,
	        state: getInternalCollectionState(iterated),
	        kind: kind,
	        last: undefined
	      });
	    }, function () {
	      var state = getInternalIteratorState(this);
	      var kind = state.kind;
	      var entry = state.last;
	      while (entry && entry.removed) entry = entry.previous;
	      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
	        state.target = undefined;
	        return createIterResultObject(undefined, true);
	      }
	      if (kind == 'keys') return createIterResultObject(entry.key, false);
	      if (kind == 'values') return createIterResultObject(entry.value, false);
	      return createIterResultObject([entry.key, entry.value], false);
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};

	var collection = collection$1;
	var collectionStrong = collectionStrong$1;
	collection('Map', function (init) {
	  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	var path$7 = path$j;
	var map$5 = path$7.Map;

	var parent$b = map$5;
	var map$4 = parent$b;

	(function (module) {
		module.exports = map$4;
	} (map$6));
	var _Map = getDefaultExportFromCjs(map$6.exports);

	var promise = {exports: {}};

	(function (module) {
		module.exports = promise$3;
	} (promise));
	var _Promise = getDefaultExportFromCjs(promise.exports);

	var concat$6 = {exports: {}};

	var entryVirtual$1 = entryVirtual$5;
	var concat$5 = entryVirtual$1('Array').concat;

	var isPrototypeOf$2 = objectIsPrototypeOf$1;
	var method$1 = concat$5;
	var ArrayPrototype$1 = Array.prototype;
	var concat$4 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$1 || (isPrototypeOf$2(ArrayPrototype$1, it) && own === ArrayPrototype$1.concat) ? method$1 : own;
	};

	var parent$a = concat$4;
	var concat$3 = parent$a;

	(function (module) {
		module.exports = concat$3;
	} (concat$6));
	var _concatInstanceProperty = getDefaultExportFromCjs(concat$6.exports);

	var setInterval$2 = {exports: {}};

	var global$p = global$L;
	var apply$1 = functionApply;
	var isCallable$b = isCallable$w;
	var userAgent$1 = engineUserAgent$1;
	var arraySlice = arraySlice$4;
	var validateArgumentsLength = validateArgumentsLength$2;
	var MSIE = /MSIE .\./.test(userAgent$1);
	var Function$1 = global$p.Function;
	var wrap = function (scheduler) {
	  return MSIE ? function (handler, timeout ) {
	    var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
	    var fn = isCallable$b(handler) ? handler : Function$1(handler);
	    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      apply$1(fn, this, args);
	    } : fn, timeout);
	  } : scheduler;
	};
	var schedulersFix = {
	  setTimeout: wrap(global$p.setTimeout),
	  setInterval: wrap(global$p.setInterval)
	};

	var $$7 = _export$1;
	var global$o = global$L;
	var setInterval$1 = schedulersFix.setInterval;
	$$7({ global: true, bind: true, forced: global$o.setInterval !== setInterval$1 }, {
	  setInterval: setInterval$1
	});

	var $$6 = _export$1;
	var global$n = global$L;
	var setTimeout$3 = schedulersFix.setTimeout;
	$$6({ global: true, bind: true, forced: global$n.setTimeout !== setTimeout$3 }, {
	  setTimeout: setTimeout$3
	});

	var path$6 = path$j;
	var setInterval = path$6.setInterval;

	(function (module) {
		module.exports = setInterval;
	} (setInterval$2));
	var _setInterval = getDefaultExportFromCjs(setInterval$2.exports);

	var setTimeout$2 = {exports: {}};

	var path$5 = path$j;
	var setTimeout$1 = path$5.setTimeout;

	(function (module) {
		module.exports = setTimeout$1;
	} (setTimeout$2));
	var _setTimeout = getDefaultExportFromCjs(setTimeout$2.exports);

	var _parseInt$3 = {exports: {}};

	var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$f = functionUncurryThis$1;
	var requireObjectCoercible$3 = requireObjectCoercible$7;
	var toString$4 = toString$a;
	var whitespaces$1 = whitespaces$2;
	var replace = uncurryThis$f(''.replace);
	var whitespace = '[' + whitespaces$1 + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$4(requireObjectCoercible$3($this));
	    if (TYPE & 1) string = replace(string, ltrim, '');
	    if (TYPE & 2) string = replace(string, rtrim, '');
	    return string;
	  };
	};
	var stringTrim = {
	  start: createMethod$1(1),
	  end: createMethod$1(2),
	  trim: createMethod$1(3)
	};

	var global$m = global$L;
	var fails$b = fails$B;
	var uncurryThis$e = functionUncurryThis$1;
	var toString$3 = toString$a;
	var trim$1 = stringTrim.trim;
	var whitespaces = whitespaces$2;
	var $parseInt$1 = global$m.parseInt;
	var Symbol$2 = global$m.Symbol;
	var ITERATOR$1 = Symbol$2 && Symbol$2.iterator;
	var hex = /^[+-]?0x/i;
	var exec = uncurryThis$e(hex.exec);
	var FORCED = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
	  || (ITERATOR$1 && !fails$b(function () { $parseInt$1(Object(ITERATOR$1)); }));
	var numberParseInt = FORCED ? function parseInt(string, radix) {
	  var S = trim$1(toString$3(string));
	  return $parseInt$1(S, (radix >>> 0) || (exec(hex, S) ? 16 : 10));
	} : $parseInt$1;

	var $$5 = _export$1;
	var $parseInt = numberParseInt;
	$$5({ global: true, forced: parseInt != $parseInt }, {
	  parseInt: $parseInt
	});

	var path$4 = path$j;
	var _parseInt$2 = path$4.parseInt;

	var parent$9 = _parseInt$2;
	var _parseInt$1 = parent$9;

	(function (module) {
		module.exports = _parseInt$1;
	} (_parseInt$3));
	var _parseInt = getDefaultExportFromCjs(_parseInt$3.exports);

	var now$2 = {exports: {}};

	var $$4 = _export$1;
	var uncurryThis$d = functionUncurryThis$1;
	var $Date = Date;
	var thisTimeValue = uncurryThis$d($Date.prototype.getTime);
	$$4({ target: 'Date', stat: true }, {
	  now: function now() {
	    return thisTimeValue(new $Date());
	  }
	});

	var path$3 = path$j;
	var now$1 = path$3.Date.now;

	var parent$8 = now$1;
	var now = parent$8;

	(function (module) {
		module.exports = now;
	} (now$2));
	var _Date$now = getDefaultExportFromCjs(now$2.exports);

	var callBind$1 = {exports: {}};

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice$1 = Array.prototype.slice;
	var toStr$2 = Object.prototype.toString;
	var funcType = '[object Function]';
	var implementation$5 = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice$1.call(arguments, 1);
	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice$1.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice$1.call(arguments))
	            );
	        }
	    };
	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }
	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);
	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }
	    return bound;
	};

	var implementation$4 = implementation$5;
	var functionBind = Function.prototype.bind || implementation$4;

	var shams = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
		if (typeof Symbol.iterator === 'symbol') { return true; }
		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') { return false; }
		if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }
		var symVal = 42;
		obj[sym] = symVal;
		for (sym in obj) { return false; }
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }
		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }
		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) { return false; }
		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }
		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
		}
		return true;
	};

	var origSymbol = typeof Symbol !== 'undefined' && Symbol;
	var hasSymbolSham = shams;
	var hasSymbols$2 = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') { return false; }
		if (typeof Symbol !== 'function') { return false; }
		if (typeof origSymbol('foo') !== 'symbol') { return false; }
		if (typeof Symbol('bar') !== 'symbol') { return false; }
		return hasSymbolSham();
	};

	var bind$5 = functionBind;
	var src = bind$5.call(Function.call, Object.prototype.hasOwnProperty);

	var undefined$1;
	var $SyntaxError = SyntaxError;
	var $Function = Function;
	var $TypeError = TypeError;
	var getEvalledConstructor = function (expressionSyntax) {
		try {
			return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
		} catch (e) {}
	};
	var $gOPD = Object.getOwnPropertyDescriptor;
	if ($gOPD) {
		try {
			$gOPD({}, '');
		} catch (e) {
			$gOPD = null;
		}
	}
	var throwTypeError = function () {
		throw new $TypeError();
	};
	var ThrowTypeError = $gOPD
		? (function () {
			try {
				arguments.callee;
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					return $gOPD(arguments, 'callee').get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}())
		: throwTypeError;
	var hasSymbols$1 = hasSymbols$2();
	var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; };
	var needsEval = {};
	var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);
	var INTRINSICS = {
		'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
		'%Array%': Array,
		'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
		'%ArrayIteratorPrototype%': hasSymbols$1 ? getProto([][Symbol.iterator]()) : undefined$1,
		'%AsyncFromSyncIteratorPrototype%': undefined$1,
		'%AsyncFunction%': needsEval,
		'%AsyncGenerator%': needsEval,
		'%AsyncGeneratorFunction%': needsEval,
		'%AsyncIteratorPrototype%': needsEval,
		'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
		'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
		'%Boolean%': Boolean,
		'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
		'%Date%': Date,
		'%decodeURI%': decodeURI,
		'%decodeURIComponent%': decodeURIComponent,
		'%encodeURI%': encodeURI,
		'%encodeURIComponent%': encodeURIComponent,
		'%Error%': Error,
		'%eval%': eval,
		'%EvalError%': EvalError,
		'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
		'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
		'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
		'%Function%': $Function,
		'%GeneratorFunction%': needsEval,
		'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
		'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
		'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
		'%isFinite%': isFinite,
		'%isNaN%': isNaN,
		'%IteratorPrototype%': hasSymbols$1 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
		'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
		'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
		'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
		'%Math%': Math,
		'%Number%': Number,
		'%Object%': Object,
		'%parseFloat%': parseFloat,
		'%parseInt%': parseInt,
		'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
		'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
		'%RangeError%': RangeError,
		'%ReferenceError%': ReferenceError,
		'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
		'%RegExp%': RegExp,
		'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
		'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
		'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
		'%String%': String,
		'%StringIteratorPrototype%': hasSymbols$1 ? getProto(''[Symbol.iterator]()) : undefined$1,
		'%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
		'%SyntaxError%': $SyntaxError,
		'%ThrowTypeError%': ThrowTypeError,
		'%TypedArray%': TypedArray,
		'%TypeError%': $TypeError,
		'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
		'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
		'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
		'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
		'%URIError%': URIError,
		'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
		'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
		'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
	};
	var doEval = function doEval(name) {
		var value;
		if (name === '%AsyncFunction%') {
			value = getEvalledConstructor('async function () {}');
		} else if (name === '%GeneratorFunction%') {
			value = getEvalledConstructor('function* () {}');
		} else if (name === '%AsyncGeneratorFunction%') {
			value = getEvalledConstructor('async function* () {}');
		} else if (name === '%AsyncGenerator%') {
			var fn = doEval('%AsyncGeneratorFunction%');
			if (fn) {
				value = fn.prototype;
			}
		} else if (name === '%AsyncIteratorPrototype%') {
			var gen = doEval('%AsyncGenerator%');
			if (gen) {
				value = getProto(gen.prototype);
			}
		}
		INTRINSICS[name] = value;
		return value;
	};
	var LEGACY_ALIASES = {
		'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
		'%ArrayPrototype%': ['Array', 'prototype'],
		'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
		'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
		'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
		'%ArrayProto_values%': ['Array', 'prototype', 'values'],
		'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
		'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
		'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
		'%BooleanPrototype%': ['Boolean', 'prototype'],
		'%DataViewPrototype%': ['DataView', 'prototype'],
		'%DatePrototype%': ['Date', 'prototype'],
		'%ErrorPrototype%': ['Error', 'prototype'],
		'%EvalErrorPrototype%': ['EvalError', 'prototype'],
		'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
		'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
		'%FunctionPrototype%': ['Function', 'prototype'],
		'%Generator%': ['GeneratorFunction', 'prototype'],
		'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
		'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
		'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
		'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
		'%JSONParse%': ['JSON', 'parse'],
		'%JSONStringify%': ['JSON', 'stringify'],
		'%MapPrototype%': ['Map', 'prototype'],
		'%NumberPrototype%': ['Number', 'prototype'],
		'%ObjectPrototype%': ['Object', 'prototype'],
		'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
		'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
		'%PromisePrototype%': ['Promise', 'prototype'],
		'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
		'%Promise_all%': ['Promise', 'all'],
		'%Promise_reject%': ['Promise', 'reject'],
		'%Promise_resolve%': ['Promise', 'resolve'],
		'%RangeErrorPrototype%': ['RangeError', 'prototype'],
		'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
		'%RegExpPrototype%': ['RegExp', 'prototype'],
		'%SetPrototype%': ['Set', 'prototype'],
		'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
		'%StringPrototype%': ['String', 'prototype'],
		'%SymbolPrototype%': ['Symbol', 'prototype'],
		'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
		'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
		'%TypeErrorPrototype%': ['TypeError', 'prototype'],
		'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
		'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
		'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
		'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
		'%URIErrorPrototype%': ['URIError', 'prototype'],
		'%WeakMapPrototype%': ['WeakMap', 'prototype'],
		'%WeakSetPrototype%': ['WeakSet', 'prototype']
	};
	var bind$4 = functionBind;
	var hasOwn$8 = src;
	var $concat = bind$4.call(Function.call, Array.prototype.concat);
	var $spliceApply = bind$4.call(Function.apply, Array.prototype.splice);
	var $replace = bind$4.call(Function.call, String.prototype.replace);
	var $strSlice = bind$4.call(Function.call, String.prototype.slice);
	var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
	var reEscapeChar = /\\(\\)?/g;
	var stringToPath = function stringToPath(string) {
		var first = $strSlice(string, 0, 1);
		var last = $strSlice(string, -1);
		if (first === '%' && last !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
		} else if (last === '%' && first !== '%') {
			throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
		}
		var result = [];
		$replace(string, rePropName, function (match, number, quote, subString) {
			result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
		});
		return result;
	};
	var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
		var intrinsicName = name;
		var alias;
		if (hasOwn$8(LEGACY_ALIASES, intrinsicName)) {
			alias = LEGACY_ALIASES[intrinsicName];
			intrinsicName = '%' + alias[0] + '%';
		}
		if (hasOwn$8(INTRINSICS, intrinsicName)) {
			var value = INTRINSICS[intrinsicName];
			if (value === needsEval) {
				value = doEval(intrinsicName);
			}
			if (typeof value === 'undefined' && !allowMissing) {
				throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
			}
			return {
				alias: alias,
				name: intrinsicName,
				value: value
			};
		}
		throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
	};
	var getIntrinsic = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new $TypeError('intrinsic name must be a non-empty string');
		}
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new $TypeError('"allowMissing" argument must be a boolean');
		}
		var parts = stringToPath(name);
		var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
		var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
		var intrinsicRealName = intrinsic.name;
		var value = intrinsic.value;
		var skipFurtherCaching = false;
		var alias = intrinsic.alias;
		if (alias) {
			intrinsicBaseName = alias[0];
			$spliceApply(parts, $concat([0, 1], alias));
		}
		for (var i = 1, isOwn = true; i < parts.length; i += 1) {
			var part = parts[i];
			var first = $strSlice(part, 0, 1);
			var last = $strSlice(part, -1);
			if (
				(
					(first === '"' || first === "'" || first === '`')
					|| (last === '"' || last === "'" || last === '`')
				)
				&& first !== last
			) {
				throw new $SyntaxError('property names with quotes must have matching quotes');
			}
			if (part === 'constructor' || !isOwn) {
				skipFurtherCaching = true;
			}
			intrinsicBaseName += '.' + part;
			intrinsicRealName = '%' + intrinsicBaseName + '%';
			if (hasOwn$8(INTRINSICS, intrinsicRealName)) {
				value = INTRINSICS[intrinsicRealName];
			} else if (value != null) {
				if (!(part in value)) {
					if (!allowMissing) {
						throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
					}
					return void undefined$1;
				}
				if ($gOPD && (i + 1) >= parts.length) {
					var desc = $gOPD(value, part);
					isOwn = !!desc;
					if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
						value = desc.get;
					} else {
						value = value[part];
					}
				} else {
					isOwn = hasOwn$8(value, part);
					value = value[part];
				}
				if (isOwn && !skipFurtherCaching) {
					INTRINSICS[intrinsicRealName] = value;
				}
			}
		}
		return value;
	};

	(function (module) {
		var bind = functionBind;
		var GetIntrinsic = getIntrinsic;
		var $apply = GetIntrinsic('%Function.prototype.apply%');
		var $call = GetIntrinsic('%Function.prototype.call%');
		var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
		var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
		var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
		var $max = GetIntrinsic('%Math.max%');
		if ($defineProperty) {
			try {
				$defineProperty({}, 'a', { value: 1 });
			} catch (e) {
				$defineProperty = null;
			}
		}
		module.exports = function callBind(originalFunction) {
			var func = $reflectApply(bind, $call, arguments);
			if ($gOPD && $defineProperty) {
				var desc = $gOPD(func, 'length');
				if (desc.configurable) {
					$defineProperty(
						func,
						'length',
						{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
					);
				}
			}
			return func;
		};
		var applyBind = function applyBind() {
			return $reflectApply(bind, $apply, arguments);
		};
		if ($defineProperty) {
			$defineProperty(module.exports, 'apply', { value: applyBind });
		} else {
			module.exports.apply = applyBind;
		}
	} (callBind$1));

	var toStr$1 = Object.prototype.toString;
	var isArguments = function isArguments(value) {
		var str = toStr$1.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr$1.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};

	var implementation$3;
	var hasRequiredImplementation;
	function requireImplementation () {
		if (hasRequiredImplementation) return implementation$3;
		hasRequiredImplementation = 1;
		var keysShim;
		if (!Object.keys) {
			var has = Object.prototype.hasOwnProperty;
			var toStr = Object.prototype.toString;
			var isArgs = isArguments;
			var isEnumerable = Object.prototype.propertyIsEnumerable;
			var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
			var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
			var dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			];
			var equalsConstructorPrototype = function (o) {
				var ctor = o.constructor;
				return ctor && ctor.prototype === o;
			};
			var excludedKeys = {
				$applicationCache: true,
				$console: true,
				$external: true,
				$frame: true,
				$frameElement: true,
				$frames: true,
				$innerHeight: true,
				$innerWidth: true,
				$onmozfullscreenchange: true,
				$onmozfullscreenerror: true,
				$outerHeight: true,
				$outerWidth: true,
				$pageXOffset: true,
				$pageYOffset: true,
				$parent: true,
				$scrollLeft: true,
				$scrollTop: true,
				$scrollX: true,
				$scrollY: true,
				$self: true,
				$webkitIndexedDB: true,
				$webkitStorageInfo: true,
				$window: true
			};
			var hasAutomationEqualityBug = (function () {
				if (typeof window === 'undefined') { return false; }
				for (var k in window) {
					try {
						if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
							try {
								equalsConstructorPrototype(window[k]);
							} catch (e) {
								return true;
							}
						}
					} catch (e) {
						return true;
					}
				}
				return false;
			}());
			var equalsConstructorPrototypeIfNotBuggy = function (o) {
				if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
					return equalsConstructorPrototype(o);
				}
				try {
					return equalsConstructorPrototype(o);
				} catch (e) {
					return false;
				}
			};
			keysShim = function keys(object) {
				var isObject = object !== null && typeof object === 'object';
				var isFunction = toStr.call(object) === '[object Function]';
				var isArguments = isArgs(object);
				var isString = isObject && toStr.call(object) === '[object String]';
				var theKeys = [];
				if (!isObject && !isFunction && !isArguments) {
					throw new TypeError('Object.keys called on a non-object');
				}
				var skipProto = hasProtoEnumBug && isFunction;
				if (isString && object.length > 0 && !has.call(object, 0)) {
					for (var i = 0; i < object.length; ++i) {
						theKeys.push(String(i));
					}
				}
				if (isArguments && object.length > 0) {
					for (var j = 0; j < object.length; ++j) {
						theKeys.push(String(j));
					}
				} else {
					for (var name in object) {
						if (!(skipProto && name === 'prototype') && has.call(object, name)) {
							theKeys.push(String(name));
						}
					}
				}
				if (hasDontEnumBug) {
					var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
					for (var k = 0; k < dontEnums.length; ++k) {
						if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
							theKeys.push(dontEnums[k]);
						}
					}
				}
				return theKeys;
			};
		}
		implementation$3 = keysShim;
		return implementation$3;
	}

	var slice = Array.prototype.slice;
	var isArgs = isArguments;
	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : requireImplementation();
	var originalKeys = Object.keys;
	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2));
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					}
					return originalKeys(object);
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};
	var objectKeys$1 = keysShim;

	var keys$4 = objectKeys$1;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
	var toStr = Object.prototype.toString;
	var concat$2 = Array.prototype.concat;
	var origDefineProperty = Object.defineProperty;
	var isFunction$2 = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};
	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			origDefineProperty(obj, 'x', { enumerable: false, value: obj });
			for (var _ in obj) {
				return false;
			}
			return obj.x === obj;
		} catch (e) {
			return false;
		}
	};
	var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();
	var defineProperty$3 = function (object, name, value, predicate) {
		if (name in object && (!isFunction$2(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			origDefineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};
	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys$4(map);
		if (hasSymbols) {
			props = concat$2.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty$3(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	var defineProperties_1 = defineProperties;

	var requirePromise$3 = function requirePromise() {
		if (typeof Promise !== 'function') {
			throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
		}
	};

	var IsCallable$1 = {exports: {}};

	var isCallable$a;
	var hasRequiredIsCallable$1;
	function requireIsCallable$1 () {
		if (hasRequiredIsCallable$1) return isCallable$a;
		hasRequiredIsCallable$1 = 1;
		var fnToStr = Function.prototype.toString;
		var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
		var badArrayLike;
		var isCallableMarker;
		if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
			try {
				badArrayLike = Object.defineProperty({}, 'length', {
					get: function () {
						throw isCallableMarker;
					}
				});
				isCallableMarker = {};
				reflectApply(function () { throw 42; }, null, badArrayLike);
			} catch (_) {
				if (_ !== isCallableMarker) {
					reflectApply = null;
				}
			}
		} else {
			reflectApply = null;
		}
		var constructorRegex = /^\s*class\b/;
		var isES6ClassFn = function isES6ClassFunction(value) {
			try {
				var fnStr = fnToStr.call(value);
				return constructorRegex.test(fnStr);
			} catch (e) {
				return false;
			}
		};
		var tryFunctionObject = function tryFunctionToStr(value) {
			try {
				if (isES6ClassFn(value)) { return false; }
				fnToStr.call(value);
				return true;
			} catch (e) {
				return false;
			}
		};
		var toStr = Object.prototype.toString;
		var fnClass = '[object Function]';
		var genClass = '[object GeneratorFunction]';
		var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag;
		var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};
		isCallable$a = reflectApply
			? function isCallable(value) {
				if (value === documentDotAll) { return true; }
				if (!value) { return false; }
				if (typeof value !== 'function' && typeof value !== 'object') { return false; }
				if (typeof value === 'function' && !value.prototype) { return true; }
				try {
					reflectApply(value, null, badArrayLike);
				} catch (e) {
					if (e !== isCallableMarker) { return false; }
				}
				return !isES6ClassFn(value);
			}
			: function isCallable(value) {
				if (value === documentDotAll) { return true; }
				if (!value) { return false; }
				if (typeof value !== 'function' && typeof value !== 'object') { return false; }
				if (typeof value === 'function' && !value.prototype) { return true; }
				if (hasToStringTag) { return tryFunctionObject(value); }
				if (isES6ClassFn(value)) { return false; }
				var strClass = toStr.call(value);
				return strClass === fnClass || strClass === genClass;
			};
		return isCallable$a;
	}

	var hasRequiredIsCallable;
	function requireIsCallable () {
		if (hasRequiredIsCallable) return IsCallable$1.exports;
		hasRequiredIsCallable = 1;
		(function (module) {
			module.exports = requireIsCallable$1();
	} (IsCallable$1));
		return IsCallable$1.exports;
	}

	var IsConstructor = {exports: {}};

	var GetIntrinsic = {exports: {}};

	var hasRequiredGetIntrinsic;
	function requireGetIntrinsic () {
		if (hasRequiredGetIntrinsic) return GetIntrinsic.exports;
		hasRequiredGetIntrinsic = 1;
		(function (module) {
			module.exports = getIntrinsic;
	} (GetIntrinsic));
		return GetIntrinsic.exports;
	}

	var isPropertyDescriptor;
	var hasRequiredIsPropertyDescriptor;
	function requireIsPropertyDescriptor () {
		if (hasRequiredIsPropertyDescriptor) return isPropertyDescriptor;
		hasRequiredIsPropertyDescriptor = 1;
		var GetIntrinsic = getIntrinsic;
		var has = src;
		var $TypeError = GetIntrinsic('%TypeError%');
		isPropertyDescriptor = function IsPropertyDescriptor(ES, Desc) {
			if (ES.Type(Desc) !== 'Object') {
				return false;
			}
			var allowed = {
				'[[Configurable]]': true,
				'[[Enumerable]]': true,
				'[[Get]]': true,
				'[[Set]]': true,
				'[[Value]]': true,
				'[[Writable]]': true
			};
			for (var key in Desc) {
				if (has(Desc, key) && !allowed[key]) {
					return false;
				}
			}
			if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
				throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
			}
			return true;
		};
		return isPropertyDescriptor;
	}

	var callBound;
	var hasRequiredCallBound;
	function requireCallBound () {
		if (hasRequiredCallBound) return callBound;
		hasRequiredCallBound = 1;
		var GetIntrinsic = getIntrinsic;
		var callBind = callBind$1.exports;
		var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
		callBound = function callBoundIntrinsic(name, allowMissing) {
			var intrinsic = GetIntrinsic(name, !!allowMissing);
			if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
				return callBind(intrinsic);
			}
			return intrinsic;
		};
		return callBound;
	}

	var IsArray;
	var hasRequiredIsArray;
	function requireIsArray () {
		if (hasRequiredIsArray) return IsArray;
		hasRequiredIsArray = 1;
		var GetIntrinsic = getIntrinsic;
		var $Array = GetIntrinsic('%Array%');
		var toStr = !$Array.isArray && requireCallBound()('Object.prototype.toString');
		IsArray = $Array.isArray || function IsArray(argument) {
			return toStr(argument) === '[object Array]';
		};
		return IsArray;
	}

	var DefineOwnProperty;
	var hasRequiredDefineOwnProperty;
	function requireDefineOwnProperty () {
		if (hasRequiredDefineOwnProperty) return DefineOwnProperty;
		hasRequiredDefineOwnProperty = 1;
		var GetIntrinsic = getIntrinsic;
		var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
		if ($defineProperty) {
			try {
				$defineProperty({}, 'a', { value: 1 });
			} catch (e) {
				$defineProperty = null;
			}
		}
		var hasArrayLengthDefineBug = Object.defineProperty && Object.defineProperty([], 'length', { value: 1 }).length === 0;
		var isArray = hasArrayLengthDefineBug && requireIsArray();
		var callBound = requireCallBound();
		var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
		DefineOwnProperty = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
			if (!$defineProperty) {
				if (!IsDataDescriptor(desc)) {
					return false;
				}
				if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
					return false;
				}
				if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
					return false;
				}
				var V = desc['[[Value]]'];
				O[P] = V;
				return SameValue(O[P], V);
			}
			if (
				hasArrayLengthDefineBug
				&& P === 'length'
				&& '[[Value]]' in desc
				&& isArray(O)
				&& O.length !== desc['[[Value]]']
			) {
				O.length = desc['[[Value]]'];
				return O.length === desc['[[Value]]'];
			}
			$defineProperty(O, P, FromPropertyDescriptor(desc));
			return true;
		};
		return DefineOwnProperty;
	}

	var assertRecord;
	var hasRequiredAssertRecord;
	function requireAssertRecord () {
		if (hasRequiredAssertRecord) return assertRecord;
		hasRequiredAssertRecord = 1;
		var GetIntrinsic = getIntrinsic;
		var $TypeError = GetIntrinsic('%TypeError%');
		var $SyntaxError = GetIntrinsic('%SyntaxError%');
		var has = src;
		var predicates = {
			'Property Descriptor': function isPropertyDescriptor(Type, Desc) {
				if (Type(Desc) !== 'Object') {
					return false;
				}
				var allowed = {
					'[[Configurable]]': true,
					'[[Enumerable]]': true,
					'[[Get]]': true,
					'[[Set]]': true,
					'[[Value]]': true,
					'[[Writable]]': true
				};
				for (var key in Desc) {
					if (has(Desc, key) && !allowed[key]) {
						return false;
					}
				}
				var isData = has(Desc, '[[Value]]');
				var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
				if (isData && IsAccessor) {
					throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
				}
				return true;
			}
		};
		assertRecord = function assertRecord(Type, recordType, argumentName, value) {
			var predicate = predicates[recordType];
			if (typeof predicate !== 'function') {
				throw new $SyntaxError('unknown record type: ' + recordType);
			}
			if (!predicate(Type, value)) {
				throw new $TypeError(argumentName + ' must be a ' + recordType);
			}
		};
		return assertRecord;
	}

	var Type$2;
	var hasRequiredType$1;
	function requireType$1 () {
		if (hasRequiredType$1) return Type$2;
		hasRequiredType$1 = 1;
		Type$2 = function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		};
		return Type$2;
	}

	var Type$1;
	var hasRequiredType;
	function requireType () {
		if (hasRequiredType) return Type$1;
		hasRequiredType = 1;
		var ES5Type = requireType$1();
		Type$1 = function Type(x) {
			if (typeof x === 'symbol') {
				return 'Symbol';
			}
			if (typeof x === 'bigint') {
				return 'BigInt';
			}
			return ES5Type(x);
		};
		return Type$1;
	}

	var FromPropertyDescriptor;
	var hasRequiredFromPropertyDescriptor;
	function requireFromPropertyDescriptor () {
		if (hasRequiredFromPropertyDescriptor) return FromPropertyDescriptor;
		hasRequiredFromPropertyDescriptor = 1;
		var assertRecord = requireAssertRecord();
		var Type = requireType();
		FromPropertyDescriptor = function FromPropertyDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return Desc;
			}
			assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
			var obj = {};
			if ('[[Value]]' in Desc) {
				obj.value = Desc['[[Value]]'];
			}
			if ('[[Writable]]' in Desc) {
				obj.writable = Desc['[[Writable]]'];
			}
			if ('[[Get]]' in Desc) {
				obj.get = Desc['[[Get]]'];
			}
			if ('[[Set]]' in Desc) {
				obj.set = Desc['[[Set]]'];
			}
			if ('[[Enumerable]]' in Desc) {
				obj.enumerable = Desc['[[Enumerable]]'];
			}
			if ('[[Configurable]]' in Desc) {
				obj.configurable = Desc['[[Configurable]]'];
			}
			return obj;
		};
		return FromPropertyDescriptor;
	}

	var IsAccessorDescriptor;
	var hasRequiredIsAccessorDescriptor;
	function requireIsAccessorDescriptor () {
		if (hasRequiredIsAccessorDescriptor) return IsAccessorDescriptor;
		hasRequiredIsAccessorDescriptor = 1;
		var has = src;
		var assertRecord = requireAssertRecord();
		var Type = requireType();
		IsAccessorDescriptor = function IsAccessorDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}
			assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
			if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
				return false;
			}
			return true;
		};
		return IsAccessorDescriptor;
	}

	var IsDataDescriptor;
	var hasRequiredIsDataDescriptor;
	function requireIsDataDescriptor () {
		if (hasRequiredIsDataDescriptor) return IsDataDescriptor;
		hasRequiredIsDataDescriptor = 1;
		var has = src;
		var assertRecord = requireAssertRecord();
		var Type = requireType();
		IsDataDescriptor = function IsDataDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}
			assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
			if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
				return false;
			}
			return true;
		};
		return IsDataDescriptor;
	}

	var IsPropertyKey;
	var hasRequiredIsPropertyKey;
	function requireIsPropertyKey () {
		if (hasRequiredIsPropertyKey) return IsPropertyKey;
		hasRequiredIsPropertyKey = 1;
		IsPropertyKey = function IsPropertyKey(argument) {
			return typeof argument === 'string' || typeof argument === 'symbol';
		};
		return IsPropertyKey;
	}

	var _isNaN;
	var hasRequired_isNaN;
	function require_isNaN () {
		if (hasRequired_isNaN) return _isNaN;
		hasRequired_isNaN = 1;
		_isNaN = Number.isNaN || function isNaN(a) {
			return a !== a;
		};
		return _isNaN;
	}

	var SameValue;
	var hasRequiredSameValue;
	function requireSameValue () {
		if (hasRequiredSameValue) return SameValue;
		hasRequiredSameValue = 1;
		var $isNaN = require_isNaN();
		SameValue = function SameValue(x, y) {
			if (x === y) {
				if (x === 0) { return 1 / x === 1 / y; }
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		};
		return SameValue;
	}

	var ToBoolean;
	var hasRequiredToBoolean;
	function requireToBoolean () {
		if (hasRequiredToBoolean) return ToBoolean;
		hasRequiredToBoolean = 1;
		ToBoolean = function ToBoolean(value) { return !!value; };
		return ToBoolean;
	}

	var ToPropertyDescriptor;
	var hasRequiredToPropertyDescriptor;
	function requireToPropertyDescriptor () {
		if (hasRequiredToPropertyDescriptor) return ToPropertyDescriptor;
		hasRequiredToPropertyDescriptor = 1;
		var has = src;
		var GetIntrinsic = getIntrinsic;
		var $TypeError = GetIntrinsic('%TypeError%');
		var Type = requireType();
		var ToBoolean = requireToBoolean();
		var IsCallable = requireIsCallable();
		ToPropertyDescriptor = function ToPropertyDescriptor(Obj) {
			if (Type(Obj) !== 'Object') {
				throw new $TypeError('ToPropertyDescriptor requires an object');
			}
			var desc = {};
			if (has(Obj, 'enumerable')) {
				desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
			}
			if (has(Obj, 'configurable')) {
				desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
			}
			if (has(Obj, 'value')) {
				desc['[[Value]]'] = Obj.value;
			}
			if (has(Obj, 'writable')) {
				desc['[[Writable]]'] = ToBoolean(Obj.writable);
			}
			if (has(Obj, 'get')) {
				var getter = Obj.get;
				if (typeof getter !== 'undefined' && !IsCallable(getter)) {
					throw new $TypeError('getter must be a function');
				}
				desc['[[Get]]'] = getter;
			}
			if (has(Obj, 'set')) {
				var setter = Obj.set;
				if (typeof setter !== 'undefined' && !IsCallable(setter)) {
					throw new $TypeError('setter must be a function');
				}
				desc['[[Set]]'] = setter;
			}
			if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
				throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
			}
			return desc;
		};
		return ToPropertyDescriptor;
	}

	var DefinePropertyOrThrow;
	var hasRequiredDefinePropertyOrThrow;
	function requireDefinePropertyOrThrow () {
		if (hasRequiredDefinePropertyOrThrow) return DefinePropertyOrThrow;
		hasRequiredDefinePropertyOrThrow = 1;
		var GetIntrinsic = getIntrinsic;
		var $TypeError = GetIntrinsic('%TypeError%');
		var isPropertyDescriptor = requireIsPropertyDescriptor();
		var DefineOwnProperty = requireDefineOwnProperty();
		var FromPropertyDescriptor = requireFromPropertyDescriptor();
		var IsAccessorDescriptor = requireIsAccessorDescriptor();
		var IsDataDescriptor = requireIsDataDescriptor();
		var IsPropertyKey = requireIsPropertyKey();
		var SameValue = requireSameValue();
		var ToPropertyDescriptor = requireToPropertyDescriptor();
		var Type = requireType();
		DefinePropertyOrThrow = function DefinePropertyOrThrow(O, P, desc) {
			if (Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			if (!IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			var Desc = isPropertyDescriptor({
				Type: Type,
				IsDataDescriptor: IsDataDescriptor,
				IsAccessorDescriptor: IsAccessorDescriptor
			}, desc) ? desc : ToPropertyDescriptor(desc);
			if (!isPropertyDescriptor({
				Type: Type,
				IsDataDescriptor: IsDataDescriptor,
				IsAccessorDescriptor: IsAccessorDescriptor
			}, Desc)) {
				throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
			}
			return DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				Desc
			);
		};
		return DefinePropertyOrThrow;
	}

	var hasRequiredIsConstructor;
	function requireIsConstructor () {
		if (hasRequiredIsConstructor) return IsConstructor.exports;
		hasRequiredIsConstructor = 1;
		var GetIntrinsic = requireGetIntrinsic();
		var $construct = GetIntrinsic('%Reflect.construct%', true);
		var DefinePropertyOrThrow = requireDefinePropertyOrThrow();
		try {
			DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
		} catch (e) {
			DefinePropertyOrThrow = null;
		}
		if (DefinePropertyOrThrow && $construct) {
			var isConstructorMarker = {};
			var badArrayLike = {};
			DefinePropertyOrThrow(badArrayLike, 'length', {
				'[[Get]]': function () {
					throw isConstructorMarker;
				},
				'[[Enumerable]]': true
			});
			IsConstructor.exports = function IsConstructor(argument) {
				try {
					$construct(argument, badArrayLike);
				} catch (err) {
					return err === isConstructorMarker;
				}
			};
		} else {
			IsConstructor.exports = function IsConstructor(argument) {
				return typeof argument === 'function' && !!argument.prototype;
			};
		}
		return IsConstructor.exports;
	}

	var SpeciesConstructor$1;
	var hasRequiredSpeciesConstructor;
	function requireSpeciesConstructor () {
		if (hasRequiredSpeciesConstructor) return SpeciesConstructor$1;
		hasRequiredSpeciesConstructor = 1;
		var GetIntrinsic = getIntrinsic;
		var $species = GetIntrinsic('%Symbol.species%', true);
		var $TypeError = GetIntrinsic('%TypeError%');
		var IsConstructor = requireIsConstructor();
		var Type = requireType();
		SpeciesConstructor$1 = function SpeciesConstructor(O, defaultConstructor) {
			if (Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			var C = O.constructor;
			if (typeof C === 'undefined') {
				return defaultConstructor;
			}
			if (Type(C) !== 'Object') {
				throw new $TypeError('O.constructor is not an Object');
			}
			var S = $species ? C[$species] : void 0;
			if (S == null) {
				return defaultConstructor;
			}
			if (IsConstructor(S)) {
				return S;
			}
			throw new $TypeError('no constructor found');
		};
		return SpeciesConstructor$1;
	}

	var requirePromise$2 = requirePromise$3;
	requirePromise$2();
	var IsCallable = requireIsCallable();
	var SpeciesConstructor = requireSpeciesConstructor();
	var Type = requireType();
	var promiseResolve = function PromiseResolve(C, value) {
		return new C(function (resolve) {
			resolve(value);
		});
	};
	var OriginalPromise = Promise;
	var createThenFinally = function CreateThenFinally(C, onFinally) {
		return function (value) {
			var result = onFinally();
			var promise = promiseResolve(C, result);
			var valueThunk = function () {
				return value;
			};
			return promise.then(valueThunk);
		};
	};
	var createCatchFinally = function CreateCatchFinally(C, onFinally) {
		return function (reason) {
			var result = onFinally();
			var promise = promiseResolve(C, result);
			var thrower = function () {
				throw reason;
			};
			return promise.then(thrower);
		};
	};
	var promiseFinally = function finally_(onFinally) {
		var promise = this;
		if (Type(promise) !== 'Object') {
			throw new TypeError('receiver is not an Object');
		}
		var C = SpeciesConstructor(promise, OriginalPromise);
		var thenFinally = onFinally;
		var catchFinally = onFinally;
		if (IsCallable(onFinally)) {
			thenFinally = createThenFinally(C, onFinally);
			catchFinally = createCatchFinally(C, onFinally);
		}
		return promise.then(thenFinally, catchFinally);
	};
	if (Object.getOwnPropertyDescriptor) {
		var descriptor = Object.getOwnPropertyDescriptor(promiseFinally, 'name');
		if (descriptor && descriptor.configurable) {
			Object.defineProperty(promiseFinally, 'name', { configurable: true, value: 'finally' });
		}
	}
	var implementation$2 = promiseFinally;

	var requirePromise$1 = requirePromise$3;
	var implementation$1 = implementation$2;
	var polyfill = function getPolyfill() {
		requirePromise$1();
		return typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation$1;
	};

	var requirePromise = requirePromise$3;
	var getPolyfill$1 = polyfill;
	var define$1 = defineProperties_1;
	var shim$1 = function shimPromiseFinally() {
		requirePromise();
		var polyfill = getPolyfill$1();
		define$1(Promise.prototype, { 'finally': polyfill }, {
			'finally': function testFinally() {
				return Promise.prototype['finally'] !== polyfill;
			}
		});
		return polyfill;
	};

	var callBind = callBind$1.exports;
	var define = defineProperties_1;
	var implementation = implementation$2;
	var getPolyfill = polyfill;
	var shim = shim$1;
	var bound = callBind(getPolyfill());
	define(bound, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});
	var promise_prototype_finally = bound;

	/*! js-cookie v3.0.1 | MIT */
	/* eslint-disable no-var */
	function assign$4 (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      target[key] = source[key];
	    }
	  }
	  return target
	}
	/* eslint-enable no-var */

	/* eslint-disable no-var */
	var defaultConverter = {
	  read: function (value) {
	    if (value[0] === '"') {
	      value = value.slice(1, -1);
	    }
	    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
	  },
	  write: function (value) {
	    return encodeURIComponent(value).replace(
	      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
	      decodeURIComponent
	    )
	  }
	};
	/* eslint-enable no-var */

	/* eslint-disable no-var */

	function init (converter, defaultAttributes) {
	  function set (key, value, attributes) {
	    if (typeof document === 'undefined') {
	      return
	    }

	    attributes = assign$4({}, defaultAttributes, attributes);

	    if (typeof attributes.expires === 'number') {
	      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
	    }
	    if (attributes.expires) {
	      attributes.expires = attributes.expires.toUTCString();
	    }

	    key = encodeURIComponent(key)
	      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
	      .replace(/[()]/g, escape);

	    var stringifiedAttributes = '';
	    for (var attributeName in attributes) {
	      if (!attributes[attributeName]) {
	        continue
	      }

	      stringifiedAttributes += '; ' + attributeName;

	      if (attributes[attributeName] === true) {
	        continue
	      }

	      // Considers RFC 6265 section 5.2:
	      // ...
	      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
	      //     character:
	      // Consume the characters of the unparsed-attributes up to,
	      // not including, the first %x3B (";") character.
	      // ...
	      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
	    }

	    return (document.cookie =
	      key + '=' + converter.write(value, key) + stringifiedAttributes)
	  }

	  function get (key) {
	    if (typeof document === 'undefined' || (arguments.length && !key)) {
	      return
	    }

	    // To prevent the for loop in the first place assign an empty array
	    // in case there are no cookies at all.
	    var cookies = document.cookie ? document.cookie.split('; ') : [];
	    var jar = {};
	    for (var i = 0; i < cookies.length; i++) {
	      var parts = cookies[i].split('=');
	      var value = parts.slice(1).join('=');

	      try {
	        var foundKey = decodeURIComponent(parts[0]);
	        jar[foundKey] = converter.read(value, foundKey);

	        if (key === foundKey) {
	          break
	        }
	      } catch (e) {}
	    }

	    return key ? jar[key] : jar
	  }

	  return Object.create(
	    {
	      set: set,
	      get: get,
	      remove: function (key, attributes) {
	        set(
	          key,
	          '',
	          assign$4({}, attributes, {
	            expires: -1
	          })
	        );
	      },
	      withAttributes: function (attributes) {
	        return init(this.converter, assign$4({}, this.attributes, attributes))
	      },
	      withConverter: function (converter) {
	        return init(assign$4({}, this.converter, converter), this.attributes)
	      }
	    },
	    {
	      attributes: { value: Object.freeze(defaultAttributes) },
	      converter: { value: Object.freeze(converter) }
	    }
	  )
	}

	var api$1 = init(defaultConverter, { path: '/' });

	var ACCESS_TOKEN_NAME = 'token_access_token';
	var REFRESH_TOKEN_NAME = 'token_refresh_token';
	var TOKEN_CREATE_TIME_NAME = 'token_createtime';
	var TOKEN_EXPIRED_NAME = 'token_expires_in';
	var TOKEN_REFRESH_BEFORE = _parseInt(2000 + Math.random() * 300, 10);
	var TOKEN_AUTO_REFRESH_INTERVAL = 300;
	var TOKEN_AUTO_SYNC_INTERVAL = 1000;
	var TOKEN_TYPE = 'token_type';
	var TOKEN_SCOPE = 'token_scope';
	var TOKEN_CHECK_SUM = 'token_checksum';
	var LOGOUT_TIME = 1000 * 43200;
	var MAX_REQUEST_TIMES = 20;
	var MAX_REQUEST_MESSAGE = 'Number of requests exceeded limit.';

	function _typeof(obj) {
	  "@babel/helpers - typeof";
	  return _typeof = "function" == typeof _Symbol && "symbol" == typeof _Symbol$iterator ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && "function" == typeof _Symbol && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
	  }, _typeof(obj);
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};
	var global$l =
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$a = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$9 = fails$a;
	var descriptors = !fails$9(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var fails$8 = fails$a;
	var functionBindNative = !fails$8(function () {
	  var test = (function () {  }).bind();
	  return typeof test != 'function' || test.hasOwnProperty('prototype');
	});

	var NATIVE_BIND$1 = functionBindNative;
	var call$5 = Function.prototype.call;
	var functionCall = NATIVE_BIND$1 ? call$5.bind(call$5) : function () {
	  return call$5.apply(call$5, arguments);
	};

	var objectPropertyIsEnumerable = {};

	var $propertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);
	objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$1(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable;

	var createPropertyDescriptor$2 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var NATIVE_BIND = functionBindNative;
	var FunctionPrototype$2 = Function.prototype;
	var bind$3 = FunctionPrototype$2.bind;
	var call$4 = FunctionPrototype$2.call;
	var uncurryThis$c = NATIVE_BIND && bind$3.bind(call$4, call$4);
	var functionUncurryThis = NATIVE_BIND ? function (fn) {
	  return fn && uncurryThis$c(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$4.apply(fn, arguments);
	  };
	};

	var uncurryThis$b = functionUncurryThis;
	var toString$2 = uncurryThis$b({}.toString);
	var stringSlice = uncurryThis$b(''.slice);
	var classofRaw = function (it) {
	  return stringSlice(toString$2(it), 8, -1);
	};

	var global$k = global$l;
	var uncurryThis$a = functionUncurryThis;
	var fails$7 = fails$a;
	var classof$1 = classofRaw;
	var Object$3 = global$k.Object;
	var split = uncurryThis$a(''.split);
	var indexedObject = fails$7(function () {
	  return !Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$1(it) == 'String' ? split(it, '') : Object$3(it);
	} : Object$3;

	var global$j = global$l;
	var TypeError$7 = global$j.TypeError;
	var requireObjectCoercible$2 = function (it) {
	  if (it == undefined) throw TypeError$7("Can't call method on " + it);
	  return it;
	};

	var IndexedObject$2 = indexedObject;
	var requireObjectCoercible$1 = requireObjectCoercible$2;
	var toIndexedObject$4 = function (it) {
	  return IndexedObject$2(requireObjectCoercible$1(it));
	};

	var isCallable$9 = function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$8 = isCallable$9;
	var isObject$6 = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$8(it);
	};

	var global$i = global$l;
	var isCallable$7 = isCallable$9;
	var aFunction = function (argument) {
	  return isCallable$7(argument) ? argument : undefined;
	};
	var getBuiltIn$3 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$i[namespace]) : global$i[namespace] && global$i[namespace][method];
	};

	var uncurryThis$9 = functionUncurryThis;
	var objectIsPrototypeOf = uncurryThis$9({}.isPrototypeOf);

	var getBuiltIn$2 = getBuiltIn$3;
	var engineUserAgent = getBuiltIn$2('navigator', 'userAgent') || '';

	var global$h = global$l;
	var userAgent = engineUserAgent;
	var process$1 = global$h.process;
	var Deno$1 = global$h.Deno;
	var versions = process$1 && process$1.versions || Deno$1 && Deno$1.version;
	var v8 = versions && versions.v8;
	var match, version;
	if (v8) {
	  match = v8.split('.');
	  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
	}
	if (!version && userAgent) {
	  match = userAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = userAgent.match(/Chrome\/(\d+)/);
	    if (match) version = +match[1];
	  }
	}
	var engineV8Version = version;

	var V8_VERSION = engineV8Version;
	var fails$6 = fails$a;
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
	  var symbol = Symbol();
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});

	var NATIVE_SYMBOL$1 = nativeSymbol;
	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$g = global$l;
	var getBuiltIn$1 = getBuiltIn$3;
	var isCallable$6 = isCallable$9;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
	var Object$2 = global$g.Object;
	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$1('Symbol');
	  return isCallable$6($Symbol) && isPrototypeOf$1($Symbol.prototype, Object$2(it));
	};

	var global$f = global$l;
	var String$2 = global$f.String;
	var tryToString$1 = function (argument) {
	  try {
	    return String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$e = global$l;
	var isCallable$5 = isCallable$9;
	var tryToString = tryToString$1;
	var TypeError$6 = global$e.TypeError;
	var aCallable$1 = function (argument) {
	  if (isCallable$5(argument)) return argument;
	  throw TypeError$6(tryToString(argument) + ' is not a function');
	};

	var aCallable = aCallable$1;
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable(func);
	};

	var global$d = global$l;
	var call$3 = functionCall;
	var isCallable$4 = isCallable$9;
	var isObject$5 = isObject$6;
	var TypeError$5 = global$d.TypeError;
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$4(fn = input.toString) && !isObject$5(val = call$3(fn, input))) return val;
	  if (isCallable$4(fn = input.valueOf) && !isObject$5(val = call$3(fn, input))) return val;
	  if (pref !== 'string' && isCallable$4(fn = input.toString) && !isObject$5(val = call$3(fn, input))) return val;
	  throw TypeError$5("Can't convert object to primitive value");
	};

	var shared$3 = {exports: {}};

	var global$c = global$l;
	var defineProperty$2 = Object.defineProperty;
	var setGlobal$3 = function (key, value) {
	  try {
	    defineProperty$2(global$c, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$c[key] = value;
	  } return value;
	};

	var global$b = global$l;
	var setGlobal$2 = setGlobal$3;
	var SHARED = '__core-js_shared__';
	var store$3 = global$b[SHARED] || setGlobal$2(SHARED, {});
	var sharedStore = store$3;

	var store$2 = sharedStore;
	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.22.3',
	  mode: 'global',
	  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
	  license: 'https://github.com/zloirock/core-js/blob/v3.22.3/LICENSE',
	  source: 'https://github.com/zloirock/core-js'
	});

	var global$a = global$l;
	var requireObjectCoercible = requireObjectCoercible$2;
	var Object$1 = global$a.Object;
	var toObject$3 = function (argument) {
	  return Object$1(requireObjectCoercible(argument));
	};

	var uncurryThis$8 = functionUncurryThis;
	var toObject$2 = toObject$3;
	var hasOwnProperty = uncurryThis$8({}.hasOwnProperty);
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty(toObject$2(it), key);
	};

	var uncurryThis$7 = functionUncurryThis;
	var id = 0;
	var postfix = Math.random();
	var toString$1 = uncurryThis$7(1.0.toString);
	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$1(++id + postfix, 36);
	};

	var global$9 = global$l;
	var shared$2 = shared$3.exports;
	var hasOwn$7 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;
	var WellKnownSymbolsStore = shared$2('wks');
	var Symbol$1 = global$9.Symbol;
	var symbolFor = Symbol$1 && Symbol$1['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
	var wellKnownSymbol$2 = function (name) {
	  if (!hasOwn$7(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$7(Symbol$1, name)) {
	      WellKnownSymbolsStore[name] = Symbol$1[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var global$8 = global$l;
	var call$2 = functionCall;
	var isObject$4 = isObject$6;
	var isSymbol$1 = isSymbol$2;
	var getMethod = getMethod$1;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol$1 = wellKnownSymbol$2;
	var TypeError$4 = global$8.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol$1('toPrimitive');
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$4(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$2(exoticToPrim, input, pref);
	    if (!isObject$4(result) || isSymbol$1(result)) return result;
	    throw TypeError$4("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive(input, pref);
	};

	var toPrimitive = toPrimitive$1;
	var isSymbol = isSymbol$2;
	var toPropertyKey$2 = function (argument) {
	  var key = toPrimitive(argument, 'string');
	  return isSymbol(key) ? key : key + '';
	};

	var global$7 = global$l;
	var isObject$3 = isObject$6;
	var document$1 = global$7.document;
	var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);
	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$7 = descriptors;
	var fails$5 = fails$a;
	var createElement = documentCreateElement;
	var ie8DomDefine = !DESCRIPTORS$7 && !fails$5(function () {
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$6 = descriptors;
	var call$1 = functionCall;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
	var createPropertyDescriptor$1 = createPropertyDescriptor$2;
	var toIndexedObject$3 = toIndexedObject$4;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$6 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$3(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) {  }
	  if (hasOwn$6(O, P)) return createPropertyDescriptor$1(!call$1(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$5 = descriptors;
	var fails$4 = fails$a;
	var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$4(function () {
	  return Object.defineProperty(function () {  }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var global$6 = global$l;
	var isObject$2 = isObject$6;
	var String$1 = global$6.String;
	var TypeError$3 = global$6.TypeError;
	var anObject$2 = function (argument) {
	  if (isObject$2(argument)) return argument;
	  throw TypeError$3(String$1(argument) + ' is not an object');
	};

	var global$5 = global$l;
	var DESCRIPTORS$4 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var anObject$1 = anObject$2;
	var toPropertyKey = toPropertyKey$2;
	var TypeError$2 = global$5.TypeError;
	var $defineProperty = Object.defineProperty;
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';
	objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey(P);
	  anObject$1(Attributes);
	  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
	    var current = $getOwnPropertyDescriptor(O, P);
	    if (current && current[WRITABLE]) {
	      O[P] = Attributes.value;
	      Attributes = {
	        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
	        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
	        writable: false
	      };
	    }
	  } return $defineProperty(O, P, Attributes);
	} : $defineProperty : function defineProperty(O, P, Attributes) {
	  anObject$1(O);
	  P = toPropertyKey(P);
	  anObject$1(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return $defineProperty(O, P, Attributes);
	  } catch (error) {  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$2('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$3 = descriptors;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$2;
	var createNonEnumerableProperty$3 = DESCRIPTORS$3 ? function (object, key, value) {
	  return definePropertyModule$1.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var redefine$1 = {exports: {}};

	var uncurryThis$6 = functionUncurryThis;
	var isCallable$3 = isCallable$9;
	var store$1 = sharedStore;
	var functionToString$1 = uncurryThis$6(Function.toString);
	if (!isCallable$3(store$1.inspectSource)) {
	  store$1.inspectSource = function (it) {
	    return functionToString$1(it);
	  };
	}
	var inspectSource$2 = store$1.inspectSource;

	var global$4 = global$l;
	var isCallable$2 = isCallable$9;
	var inspectSource$1 = inspectSource$2;
	var WeakMap$2 = global$4.WeakMap;
	var nativeWeakMap = isCallable$2(WeakMap$2) && /native code/.test(inspectSource$1(WeakMap$2));

	var shared$1 = shared$3.exports;
	var uid = uid$2;
	var keys$3 = shared$1('keys');
	var sharedKey$1 = function (key) {
	  return keys$3[key] || (keys$3[key] = uid(key));
	};

	var hiddenKeys$3 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$3 = global$l;
	var uncurryThis$5 = functionUncurryThis;
	var isObject$1 = isObject$6;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
	var hasOwn$5 = hasOwnProperty_1;
	var shared = sharedStore;
	var sharedKey = sharedKey$1;
	var hiddenKeys$2 = hiddenKeys$3;
	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global$3.TypeError;
	var WeakMap$1 = global$3.WeakMap;
	var set, get, has;
	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};
	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};
	if (NATIVE_WEAK_MAP || shared.state) {
	  var store = shared.state || (shared.state = new WeakMap$1());
	  var wmget = uncurryThis$5(store.get);
	  var wmhas = uncurryThis$5(store.has);
	  var wmset = uncurryThis$5(store.set);
	  set = function (it, metadata) {
	    if (wmhas(store, it)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    wmset(store, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget(store, it) || {};
	  };
	  has = function (it) {
	    return wmhas(store, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys$2[STATE] = true;
	  set = function (it, metadata) {
	    if (hasOwn$5(it, STATE)) throw new TypeError$1(OBJECT_ALREADY_INITIALIZED);
	    metadata.facade = it;
	    createNonEnumerableProperty$2(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return hasOwn$5(it, STATE) ? it[STATE] : {};
	  };
	  has = function (it) {
	    return hasOwn$5(it, STATE);
	  };
	}
	var internalState = {
	  set: set,
	  get: get,
	  has: has,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var DESCRIPTORS$2 = descriptors;
	var hasOwn$4 = hasOwnProperty_1;
	var FunctionPrototype$1 = Function.prototype;
	var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;
	var EXISTS = hasOwn$4(FunctionPrototype$1, 'name');
	var PROPER = EXISTS && (function something() {  }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || (DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, 'name').configurable));
	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var global$2 = global$l;
	var isCallable$1 = isCallable$9;
	var hasOwn$3 = hasOwnProperty_1;
	var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
	var setGlobal$1 = setGlobal$3;
	var inspectSource = inspectSource$2;
	var InternalStateModule = internalState;
	var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
	var getInternalState = InternalStateModule.get;
	var enforceInternalState = InternalStateModule.enforce;
	var TEMPLATE = String(String).split('String');
	(redefine$1.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  var name = options && options.name !== undefined ? options.name : key;
	  var state;
	  if (isCallable$1(value)) {
	    if (String(name).slice(0, 7) === 'Symbol(') {
	      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
	    }
	    if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
	      createNonEnumerableProperty$1(value, 'name', name);
	    }
	    state = enforceInternalState(value);
	    if (!state.source) {
	      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
	    }
	  }
	  if (O === global$2) {
	    if (simple) O[key] = value;
	    else setGlobal$1(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty$1(O, key, value);
	})(Function.prototype, 'toString', function toString() {
	  return isCallable$1(this) && getInternalState(this).source || inspectSource(this);
	});

	var objectGetOwnPropertyNames = {};

	var ceil = Math.ceil;
	var floor = Math.floor;
	var toIntegerOrInfinity$2 = function (argument) {
	  var number = +argument;
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
	};

	var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
	var max = Math.max;
	var min$1 = Math.min;
	var toAbsoluteIndex$1 = function (index, length) {
	  var integer = toIntegerOrInfinity$1(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	var toIntegerOrInfinity = toIntegerOrInfinity$2;
	var min = Math.min;
	var toLength$1 = function (argument) {
	  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0;
	};

	var toLength = toLength$1;
	var lengthOfArrayLike$1 = function (obj) {
	  return toLength(obj.length);
	};

	var toIndexedObject$2 = toIndexedObject$4;
	var toAbsoluteIndex = toAbsoluteIndex$1;
	var lengthOfArrayLike = lengthOfArrayLike$1;
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$2($this);
	    var length = lengthOfArrayLike(O);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      if (value != value) return true;
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};
	var arrayIncludes = {
	  includes: createMethod(true),
	  indexOf: createMethod(false)
	};

	var uncurryThis$4 = functionUncurryThis;
	var hasOwn$2 = hasOwnProperty_1;
	var toIndexedObject$1 = toIndexedObject$4;
	var indexOf = arrayIncludes.indexOf;
	var hiddenKeys$1 = hiddenKeys$3;
	var push = uncurryThis$4([].push);
	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject$1(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$2(hiddenKeys$1, key) && hasOwn$2(O, key) && push(result, key);
	  while (names.length > i) if (hasOwn$2(O, key = names[i++])) {
	    ~indexOf(result, key) || push(result, key);
	  }
	  return result;
	};

	var enumBugKeys$1 = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var internalObjectKeys = objectKeysInternal;
	var enumBugKeys = enumBugKeys$1;
	var hiddenKeys = enumBugKeys.concat('length', 'prototype');
	objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys(O, hiddenKeys);
	};

	var objectGetOwnPropertySymbols = {};

	objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

	var getBuiltIn = getBuiltIn$3;
	var uncurryThis$3 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
	var anObject = anObject$2;
	var concat$1 = uncurryThis$3([].concat);
	var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$1 = hasOwnProperty_1;
	var ownKeys = ownKeys$1;
	var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
	var definePropertyModule = objectDefineProperty;
	var copyConstructorProperties$1 = function (target, source, exceptions) {
	  var keys = ownKeys(source);
	  var defineProperty = definePropertyModule.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
	      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	    }
	  }
	};

	var fails$3 = fails$a;
	var isCallable = isCallable$9;
	var replacement = /#|\.prototype\./;
	var isForced$1 = function (feature, detection) {
	  var value = data$1[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : isCallable(detection) ? fails$3(detection)
	    : !!detection;
	};
	var normalize = isForced$1.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};
	var data$1 = isForced$1.data = {};
	var NATIVE = isForced$1.NATIVE = 'N';
	var POLYFILL = isForced$1.POLYFILL = 'P';
	var isForced_1 = isForced$1;

	var global$1 = global$l;
	var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	var createNonEnumerableProperty = createNonEnumerableProperty$3;
	var redefine = redefine$1.exports;
	var setGlobal = setGlobal$3;
	var copyConstructorProperties = copyConstructorProperties$1;
	var isForced = isForced_1;
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global$1;
	  } else if (STATIC) {
	    target = global$1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty == typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    redefine(target, key, sourceProperty, options);
	  }
	};

	var fails$2 = fails$a;
	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$2(function () {
	    method.call(null, argument || function () { return 1; }, 1);
	  });
	};

	var $$3 = _export;
	var uncurryThis$2 = functionUncurryThis;
	var IndexedObject$1 = indexedObject;
	var toIndexedObject = toIndexedObject$4;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;
	var un$Join = uncurryThis$2([].join);
	var ES3_STRINGS = IndexedObject$1 != Object;
	var STRICT_METHOD = arrayMethodIsStrict('join', ',');
	$$3({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD }, {
	  join: function join(separator) {
	    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
	  }
	});

	var getPrototypeOf = {exports: {}};

	(function (module) {
		module.exports = getPrototypeOf$3;
	} (getPrototypeOf));
	var _Object$getPrototypeOf = getDefaultExportFromCjs(getPrototypeOf.exports);

	var toStringTag$2 = {exports: {}};

	var WrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
	var toStringTag$1 = WrappedWellKnownSymbolModule.f('toStringTag');

	var parent$7 = toStringTag$1;
	var toStringTag = parent$7;

	(function (module) {
		module.exports = toStringTag;
	} (toStringTag$2));
	var _Symbol$toStringTag = getDefaultExportFromCjs(toStringTag$2.exports);

	var isIterable$6 = {exports: {}};

	var isIterable$5 = {exports: {}};

	var classof = classof$c;
	var hasOwn = hasOwnProperty_1$1;
	var isNullOrUndefined = isNullOrUndefined$6;
	var wellKnownSymbol = wellKnownSymbol$o;
	var Iterators = iterators;
	var ITERATOR = wellKnownSymbol('iterator');
	var $Object = Object;
	var isIterable$4 = function (it) {
	  if (isNullOrUndefined(it)) return false;
	  var O = $Object(it);
	  return O[ITERATOR] !== undefined
	    || '@@iterator' in O
	    || hasOwn(Iterators, classof(O));
	};

	var isIterable$3 = isIterable$4;
	var isIterable_1 = isIterable$3;

	var parent$6 = isIterable_1;
	var isIterable$2 = parent$6;

	var parent$5 = isIterable$2;
	var isIterable$1 = parent$5;

	var parent$4 = isIterable$1;
	var isIterable = parent$4;

	(function (module) {
		module.exports = isIterable;
	} (isIterable$5));
	getDefaultExportFromCjs(isIterable$5.exports);

	(function (module) {
		module.exports = isIterable$5.exports;
	} (isIterable$6));
	var _isIterable = getDefaultExportFromCjs(isIterable$6.exports);

	var map$3 = {exports: {}};

	var $$2 = _export$1;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$3;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
	$$2({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn ) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual = entryVirtual$5;
	var map$2 = entryVirtual('Array').map;

	var isPrototypeOf = objectIsPrototypeOf$1;
	var method = map$2;
	var ArrayPrototype = Array.prototype;
	var map$1 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map) ? method : own;
	};

	var parent$3 = map$1;
	var map = parent$3;

	(function (module) {
		module.exports = map;
	} (map$3));
	var _mapInstanceProperty = getDefaultExportFromCjs(map$3.exports);

	var keys$2 = {exports: {}};

	var $$1 = _export$1;
	var toObject$1 = toObject$a;
	var nativeKeys = objectKeys$4;
	var fails$1 = fails$B;
	var FAILS_ON_PRIMITIVES = fails$1(function () { nativeKeys(1); });
	$$1({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys(toObject$1(it));
	  }
	});

	var path$2 = path$j;
	var keys$1 = path$2.Object.keys;

	var parent$2 = keys$1;
	var keys = parent$2;

	(function (module) {
		module.exports = keys;
	} (keys$2));
	var _Object$keys = getDefaultExportFromCjs(keys$2.exports);

	var assign$3 = {exports: {}};

	var DESCRIPTORS$1 = descriptors$1;
	var uncurryThis$1 = functionUncurryThis$1;
	var call = functionCall$1;
	var fails = fails$B;
	var objectKeys = objectKeys$4;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols$1;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable$1;
	var toObject = toObject$a;
	var IndexedObject = indexedObject$1;
	var $assign = Object.assign;
	var defineProperty$1 = Object.defineProperty;
	var concat = uncurryThis$1([].concat);
	var objectAssign = !$assign || fails(function () {
	  if (DESCRIPTORS$1 && $assign({ b: 1 }, $assign(defineProperty$1({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$1(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  var A = {};
	  var B = {};
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) {
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  var propertyIsEnumerable = propertyIsEnumerableModule.f;
	  while (argumentsLength > index) {
	    var S = IndexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!DESCRIPTORS$1 || call(propertyIsEnumerable, S, key)) T[key] = S[key];
	    }
	  } return T;
	} : $assign;

	var $ = _export$1;
	var assign$2 = objectAssign;
	$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign$2 }, {
	  assign: assign$2
	});

	var path$1 = path$j;
	var assign$1 = path$1.Object.assign;

	var parent$1 = assign$1;
	var assign = parent$1;

	(function (module) {
		module.exports = assign;
	} (assign$3));
	var _Object$assign = getDefaultExportFromCjs(assign$3.exports);

	var forEach$1 = {exports: {}};

	(function (module) {
		module.exports = forEach$5;
	} (forEach$1));
	var _forEachInstanceProperty = getDefaultExportFromCjs(forEach$1.exports);

	function isString$1(str) {
	  return typeof str === 'string';
	}
	function isEmptyStr(str) {
	  return !str || str.length === 0;
	}
	function isFunction$1(value) {
	  return typeof value === 'function';
	}
	function isPlainObject$1(value) {
	  if (_typeof(value) !== 'object' || value === null) {
	    return false;
	  }
	  var prototype = _Object$getPrototypeOf(value);
	  return (prototype === null || prototype === Object.prototype || _Object$getPrototypeOf(prototype) === null) && !(_Symbol$toStringTag in value) && !_isIterable(value);
	}
	function queryString(params) {
	  var _context;
	  return _mapInstanceProperty(_context = _Object$keys(params)).call(_context, function (key) {
	    var _context2;
	    return _concatInstanceProperty(_context2 = "".concat(key, "=")).call(_context2, params[key]);
	  }).join('&');
	}
	function rand(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}
	var deepMerge = _Object$assign || function assign(target) {
	  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	  if (isPlainObject$1(target) && args.length > 0) {
	    _forEachInstanceProperty(args).call(args, function (arg) {
	      if (isPlainObject$1(arg)) {
	        var _context3;
	        _forEachInstanceProperty(_context3 = _Object$keys(arg)).call(_context3, function (key) {
	          target[key] = arg[key];
	        });
	      }
	    });
	  }
	  return target;
	};

	var axios$3 = {exports: {}};

	var axios$2 = {exports: {}};

	var bind$2 = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

	var bind$1 = bind$2;
	var toString = Object.prototype.toString;
	var kindOf = (function(cache) {
	  return function(thing) {
	    var str = toString.call(thing);
	    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
	  };
	})(Object.create(null));
	function kindOfTest(type) {
	  type = type.toLowerCase();
	  return function isKindOf(thing) {
	    return kindOf(thing) === type;
	  };
	}
	function isArray(val) {
	  return Array.isArray(val);
	}
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}
	var isArrayBuffer = kindOfTest('ArrayBuffer');
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
	  }
	  return result;
	}
	function isString(val) {
	  return typeof val === 'string';
	}
	function isNumber(val) {
	  return typeof val === 'number';
	}
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	function isPlainObject(val) {
	  if (kindOf(val) !== 'object') {
	    return false;
	  }
	  var prototype = Object.getPrototypeOf(val);
	  return prototype === null || prototype === Object.prototype;
	}
	var isDate = kindOfTest('Date');
	var isFile = kindOfTest('File');
	var isBlob = kindOfTest('Blob');
	var isFileList = kindOfTest('FileList');
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	function isFormData(thing) {
	  var pattern = '[object FormData]';
	  return thing && (
	    (typeof FormData === 'function' && thing instanceof FormData) ||
	    toString.call(thing) === pattern ||
	    (isFunction(thing.toString) && thing.toString() === pattern)
	  );
	}
	var isURLSearchParams = kindOfTest('URLSearchParams');
	function trim(str) {
	  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
	}
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}
	function forEach(obj, fn) {
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	  if (typeof obj !== 'object') {
	    obj = [obj];
	  }
	  if (isArray(obj)) {
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	function merge() {
	  var result = {};
	  function assignValue(val, key) {
	    if (isPlainObject(result[key]) && isPlainObject(val)) {
	      result[key] = merge(result[key], val);
	    } else if (isPlainObject(val)) {
	      result[key] = merge({}, val);
	    } else if (isArray(val)) {
	      result[key] = val.slice();
	    } else {
	      result[key] = val;
	    }
	  }
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind$1(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	function stripBOM(content) {
	  if (content.charCodeAt(0) === 0xFEFF) {
	    content = content.slice(1);
	  }
	  return content;
	}
	function inherits(constructor, superConstructor, props, descriptors) {
	  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
	  constructor.prototype.constructor = constructor;
	  props && Object.assign(constructor.prototype, props);
	}
	function toFlatObject(sourceObj, destObj, filter) {
	  var props;
	  var i;
	  var prop;
	  var merged = {};
	  destObj = destObj || {};
	  do {
	    props = Object.getOwnPropertyNames(sourceObj);
	    i = props.length;
	    while (i-- > 0) {
	      prop = props[i];
	      if (!merged[prop]) {
	        destObj[prop] = sourceObj[prop];
	        merged[prop] = true;
	      }
	    }
	    sourceObj = Object.getPrototypeOf(sourceObj);
	  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
	  return destObj;
	}
	function endsWith(str, searchString, position) {
	  str = String(str);
	  if (position === undefined || position > str.length) {
	    position = str.length;
	  }
	  position -= searchString.length;
	  var lastIndex = str.indexOf(searchString, position);
	  return lastIndex !== -1 && lastIndex === position;
	}
	function toArray(thing) {
	  if (!thing) return null;
	  var i = thing.length;
	  if (isUndefined(i)) return null;
	  var arr = new Array(i);
	  while (i-- > 0) {
	    arr[i] = thing[i];
	  }
	  return arr;
	}
	var isTypedArray = (function(TypedArray) {
	  return function(thing) {
	    return TypedArray && thing instanceof TypedArray;
	  };
	})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));
	var utils$9 = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isPlainObject: isPlainObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM,
	  inherits: inherits,
	  toFlatObject: toFlatObject,
	  kindOf: kindOf,
	  kindOfTest: kindOfTest,
	  endsWith: endsWith,
	  toArray: toArray,
	  isTypedArray: isTypedArray,
	  isFileList: isFileList
	};

	var utils$8 = utils$9;
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	var buildURL$1 = function buildURL(url, params, paramsSerializer) {
	  if (!params) {
	    return url;
	  }
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils$8.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	    utils$8.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	      if (utils$8.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }
	      utils$8.forEach(val, function parseValue(v) {
	        if (utils$8.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils$8.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	    serializedParams = parts.join('&');
	  }
	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	  return url;
	};

	var utils$7 = utils$9;
	function InterceptorManager$1() {
	  this.handlers = [];
	}
	InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected,
	    synchronous: options ? options.synchronous : false,
	    runWhen: options ? options.runWhen : null
	  });
	  return this.handlers.length - 1;
	};
	InterceptorManager$1.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	InterceptorManager$1.prototype.forEach = function forEach(fn) {
	  utils$7.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	var InterceptorManager_1 = InterceptorManager$1;

	var utils$6 = utils$9;
	var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
	  utils$6.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	var AxiosError_1;
	var hasRequiredAxiosError;
	function requireAxiosError () {
		if (hasRequiredAxiosError) return AxiosError_1;
		hasRequiredAxiosError = 1;
		var utils = utils$9;
		function AxiosError(message, code, config, request, response) {
		  Error.call(this);
		  this.message = message;
		  this.name = 'AxiosError';
		  code && (this.code = code);
		  config && (this.config = config);
		  request && (this.request = request);
		  response && (this.response = response);
		}
		utils.inherits(AxiosError, Error, {
		  toJSON: function toJSON() {
		    return {
		      message: this.message,
		      name: this.name,
		      description: this.description,
		      number: this.number,
		      fileName: this.fileName,
		      lineNumber: this.lineNumber,
		      columnNumber: this.columnNumber,
		      stack: this.stack,
		      config: this.config,
		      code: this.code,
		      status: this.response && this.response.status ? this.response.status : null
		    };
		  }
		});
		var prototype = AxiosError.prototype;
		var descriptors = {};
		[
		  'ERR_BAD_OPTION_VALUE',
		  'ERR_BAD_OPTION',
		  'ECONNABORTED',
		  'ETIMEDOUT',
		  'ERR_NETWORK',
		  'ERR_FR_TOO_MANY_REDIRECTS',
		  'ERR_DEPRECATED',
		  'ERR_BAD_RESPONSE',
		  'ERR_BAD_REQUEST',
		  'ERR_CANCELED'
		].forEach(function(code) {
		  descriptors[code] = {value: code};
		});
		Object.defineProperties(AxiosError, descriptors);
		Object.defineProperty(prototype, 'isAxiosError', {value: true});
		AxiosError.from = function(error, code, config, request, response, customProps) {
		  var axiosError = Object.create(prototype);
		  utils.toFlatObject(error, axiosError, function filter(obj) {
		    return obj !== Error.prototype;
		  });
		  AxiosError.call(axiosError, error.message, code, config, request, response);
		  axiosError.name = error.name;
		  customProps && Object.assign(axiosError, customProps);
		  return axiosError;
		};
		AxiosError_1 = AxiosError;
		return AxiosError_1;
	}

	var transitional = {
	  silentJSONParsing: true,
	  forcedJSONParsing: true,
	  clarifyTimeoutError: false
	};

	var toFormData_1;
	var hasRequiredToFormData;
	function requireToFormData () {
		if (hasRequiredToFormData) return toFormData_1;
		hasRequiredToFormData = 1;
		var utils = utils$9;
		function toFormData(obj, formData) {
		  formData = formData || new FormData();
		  var stack = [];
		  function convertValue(value) {
		    if (value === null) return '';
		    if (utils.isDate(value)) {
		      return value.toISOString();
		    }
		    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
		      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
		    }
		    return value;
		  }
		  function build(data, parentKey) {
		    if (utils.isPlainObject(data) || utils.isArray(data)) {
		      if (stack.indexOf(data) !== -1) {
		        throw Error('Circular reference detected in ' + parentKey);
		      }
		      stack.push(data);
		      utils.forEach(data, function each(value, key) {
		        if (utils.isUndefined(value)) return;
		        var fullKey = parentKey ? parentKey + '.' + key : key;
		        var arr;
		        if (value && !parentKey && typeof value === 'object') {
		          if (utils.endsWith(key, '{}')) {
		            value = JSON.stringify(value);
		          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
		            arr.forEach(function(el) {
		              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
		            });
		            return;
		          }
		        }
		        build(value, fullKey);
		      });
		      stack.pop();
		    } else {
		      formData.append(parentKey, convertValue(data));
		    }
		  }
		  build(obj);
		  return formData;
		}
		toFormData_1 = toFormData;
		return toFormData_1;
	}

	var settle;
	var hasRequiredSettle;
	function requireSettle () {
		if (hasRequiredSettle) return settle;
		hasRequiredSettle = 1;
		var AxiosError = requireAxiosError();
		settle = function settle(resolve, reject, response) {
		  var validateStatus = response.config.validateStatus;
		  if (!response.status || !validateStatus || validateStatus(response.status)) {
		    resolve(response);
		  } else {
		    reject(new AxiosError(
		      'Request failed with status code ' + response.status,
		      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
		      response.config,
		      response.request,
		      response
		    ));
		  }
		};
		return settle;
	}

	var cookies;
	var hasRequiredCookies;
	function requireCookies () {
		if (hasRequiredCookies) return cookies;
		hasRequiredCookies = 1;
		var utils = utils$9;
		cookies = (
		  utils.isStandardBrowserEnv() ?
		    (function standardBrowserEnv() {
		      return {
		        write: function write(name, value, expires, path, domain, secure) {
		          var cookie = [];
		          cookie.push(name + '=' + encodeURIComponent(value));
		          if (utils.isNumber(expires)) {
		            cookie.push('expires=' + new Date(expires).toGMTString());
		          }
		          if (utils.isString(path)) {
		            cookie.push('path=' + path);
		          }
		          if (utils.isString(domain)) {
		            cookie.push('domain=' + domain);
		          }
		          if (secure === true) {
		            cookie.push('secure');
		          }
		          document.cookie = cookie.join('; ');
		        },
		        read: function read(name) {
		          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
		          return (match ? decodeURIComponent(match[3]) : null);
		        },
		        remove: function remove(name) {
		          this.write(name, '', Date.now() - 86400000);
		        }
		      };
		    })() :
		    (function nonStandardBrowserEnv() {
		      return {
		        write: function write() {},
		        read: function read() { return null; },
		        remove: function remove() {}
		      };
		    })()
		);
		return cookies;
	}

	var isAbsoluteURL$1 = function isAbsoluteURL(url) {
	  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
	};

	var combineURLs$1 = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	var isAbsoluteURL = isAbsoluteURL$1;
	var combineURLs = combineURLs$1;
	var buildFullPath$1 = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};

	var parseHeaders;
	var hasRequiredParseHeaders;
	function requireParseHeaders () {
		if (hasRequiredParseHeaders) return parseHeaders;
		hasRequiredParseHeaders = 1;
		var utils = utils$9;
		var ignoreDuplicateOf = [
		  'age', 'authorization', 'content-length', 'content-type', 'etag',
		  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
		  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
		  'referer', 'retry-after', 'user-agent'
		];
		parseHeaders = function parseHeaders(headers) {
		  var parsed = {};
		  var key;
		  var val;
		  var i;
		  if (!headers) { return parsed; }
		  utils.forEach(headers.split('\n'), function parser(line) {
		    i = line.indexOf(':');
		    key = utils.trim(line.substr(0, i)).toLowerCase();
		    val = utils.trim(line.substr(i + 1));
		    if (key) {
		      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
		        return;
		      }
		      if (key === 'set-cookie') {
		        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
		      } else {
		        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
		      }
		    }
		  });
		  return parsed;
		};
		return parseHeaders;
	}

	var isURLSameOrigin;
	var hasRequiredIsURLSameOrigin;
	function requireIsURLSameOrigin () {
		if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
		hasRequiredIsURLSameOrigin = 1;
		var utils = utils$9;
		isURLSameOrigin = (
		  utils.isStandardBrowserEnv() ?
		    (function standardBrowserEnv() {
		      var msie = /(msie|trident)/i.test(navigator.userAgent);
		      var urlParsingNode = document.createElement('a');
		      var originURL;
		      function resolveURL(url) {
		        var href = url;
		        if (msie) {
		          urlParsingNode.setAttribute('href', href);
		          href = urlParsingNode.href;
		        }
		        urlParsingNode.setAttribute('href', href);
		        return {
		          href: urlParsingNode.href,
		          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
		          host: urlParsingNode.host,
		          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
		          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
		          hostname: urlParsingNode.hostname,
		          port: urlParsingNode.port,
		          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
		            urlParsingNode.pathname :
		            '/' + urlParsingNode.pathname
		        };
		      }
		      originURL = resolveURL(window.location.href);
		      return function isURLSameOrigin(requestURL) {
		        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
		        return (parsed.protocol === originURL.protocol &&
		            parsed.host === originURL.host);
		      };
		    })() :
		    (function nonStandardBrowserEnv() {
		      return function isURLSameOrigin() {
		        return true;
		      };
		    })()
		);
		return isURLSameOrigin;
	}

	var CanceledError_1;
	var hasRequiredCanceledError;
	function requireCanceledError () {
		if (hasRequiredCanceledError) return CanceledError_1;
		hasRequiredCanceledError = 1;
		var AxiosError = requireAxiosError();
		var utils = utils$9;
		function CanceledError(message) {
		  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
		  this.name = 'CanceledError';
		}
		utils.inherits(CanceledError, AxiosError, {
		  __CANCEL__: true
		});
		CanceledError_1 = CanceledError;
		return CanceledError_1;
	}

	var parseProtocol;
	var hasRequiredParseProtocol;
	function requireParseProtocol () {
		if (hasRequiredParseProtocol) return parseProtocol;
		hasRequiredParseProtocol = 1;
		parseProtocol = function parseProtocol(url) {
		  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
		  return match && match[1] || '';
		};
		return parseProtocol;
	}

	var xhr;
	var hasRequiredXhr;
	function requireXhr () {
		if (hasRequiredXhr) return xhr;
		hasRequiredXhr = 1;
		var utils = utils$9;
		var settle = requireSettle();
		var cookies = requireCookies();
		var buildURL = buildURL$1;
		var buildFullPath = buildFullPath$1;
		var parseHeaders = requireParseHeaders();
		var isURLSameOrigin = requireIsURLSameOrigin();
		var transitionalDefaults = transitional;
		var AxiosError = requireAxiosError();
		var CanceledError = requireCanceledError();
		var parseProtocol = requireParseProtocol();
		xhr = function xhrAdapter(config) {
		  return new Promise(function dispatchXhrRequest(resolve, reject) {
		    var requestData = config.data;
		    var requestHeaders = config.headers;
		    var responseType = config.responseType;
		    var onCanceled;
		    function done() {
		      if (config.cancelToken) {
		        config.cancelToken.unsubscribe(onCanceled);
		      }
		      if (config.signal) {
		        config.signal.removeEventListener('abort', onCanceled);
		      }
		    }
		    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
		      delete requestHeaders['Content-Type'];
		    }
		    var request = new XMLHttpRequest();
		    if (config.auth) {
		      var username = config.auth.username || '';
		      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
		      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
		    }
		    var fullPath = buildFullPath(config.baseURL, config.url);
		    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
		    request.timeout = config.timeout;
		    function onloadend() {
		      if (!request) {
		        return;
		      }
		      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
		      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
		        request.responseText : request.response;
		      var response = {
		        data: responseData,
		        status: request.status,
		        statusText: request.statusText,
		        headers: responseHeaders,
		        config: config,
		        request: request
		      };
		      settle(function _resolve(value) {
		        resolve(value);
		        done();
		      }, function _reject(err) {
		        reject(err);
		        done();
		      }, response);
		      request = null;
		    }
		    if ('onloadend' in request) {
		      request.onloadend = onloadend;
		    } else {
		      request.onreadystatechange = function handleLoad() {
		        if (!request || request.readyState !== 4) {
		          return;
		        }
		        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
		          return;
		        }
		        setTimeout(onloadend);
		      };
		    }
		    request.onabort = function handleAbort() {
		      if (!request) {
		        return;
		      }
		      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));
		      request = null;
		    };
		    request.onerror = function handleError() {
		      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));
		      request = null;
		    };
		    request.ontimeout = function handleTimeout() {
		      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
		      var transitional = config.transitional || transitionalDefaults;
		      if (config.timeoutErrorMessage) {
		        timeoutErrorMessage = config.timeoutErrorMessage;
		      }
		      reject(new AxiosError(
		        timeoutErrorMessage,
		        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
		        config,
		        request));
		      request = null;
		    };
		    if (utils.isStandardBrowserEnv()) {
		      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
		        cookies.read(config.xsrfCookieName) :
		        undefined;
		      if (xsrfValue) {
		        requestHeaders[config.xsrfHeaderName] = xsrfValue;
		      }
		    }
		    if ('setRequestHeader' in request) {
		      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
		        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
		          delete requestHeaders[key];
		        } else {
		          request.setRequestHeader(key, val);
		        }
		      });
		    }
		    if (!utils.isUndefined(config.withCredentials)) {
		      request.withCredentials = !!config.withCredentials;
		    }
		    if (responseType && responseType !== 'json') {
		      request.responseType = config.responseType;
		    }
		    if (typeof config.onDownloadProgress === 'function') {
		      request.addEventListener('progress', config.onDownloadProgress);
		    }
		    if (typeof config.onUploadProgress === 'function' && request.upload) {
		      request.upload.addEventListener('progress', config.onUploadProgress);
		    }
		    if (config.cancelToken || config.signal) {
		      onCanceled = function(cancel) {
		        if (!request) {
		          return;
		        }
		        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
		        request.abort();
		        request = null;
		      };
		      config.cancelToken && config.cancelToken.subscribe(onCanceled);
		      if (config.signal) {
		        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
		      }
		    }
		    if (!requestData) {
		      requestData = null;
		    }
		    var protocol = parseProtocol(fullPath);
		    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
		      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
		      return;
		    }
		    request.send(requestData);
		  });
		};
		return xhr;
	}

	var _null;
	var hasRequired_null;
	function require_null () {
		if (hasRequired_null) return _null;
		hasRequired_null = 1;
		_null = null;
		return _null;
	}

	var utils$5 = utils$9;
	var normalizeHeaderName = normalizeHeaderName$1;
	var AxiosError$1 = requireAxiosError();
	var transitionalDefaults = transitional;
	var toFormData = requireToFormData();
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	function setContentTypeIfUnset(headers, value) {
	  if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    adapter = requireXhr();
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    adapter = requireXhr();
	  }
	  return adapter;
	}
	function stringifySafely(rawValue, parser, encoder) {
	  if (utils$5.isString(rawValue)) {
	    try {
	      (parser || JSON.parse)(rawValue);
	      return utils$5.trim(rawValue);
	    } catch (e) {
	      if (e.name !== 'SyntaxError') {
	        throw e;
	      }
	    }
	  }
	  return (encoder || JSON.stringify)(rawValue);
	}
	var defaults$3 = {
	  transitional: transitionalDefaults,
	  adapter: getDefaultAdapter(),
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils$5.isFormData(data) ||
	      utils$5.isArrayBuffer(data) ||
	      utils$5.isBuffer(data) ||
	      utils$5.isStream(data) ||
	      utils$5.isFile(data) ||
	      utils$5.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils$5.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils$5.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    var isObjectPayload = utils$5.isObject(data);
	    var contentType = headers && headers['Content-Type'];
	    var isFileList;
	    if ((isFileList = utils$5.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
	      var _FormData = this.env && this.env.FormData;
	      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
	    } else if (isObjectPayload || contentType === 'application/json') {
	      setContentTypeIfUnset(headers, 'application/json');
	      return stringifySafely(data);
	    }
	    return data;
	  }],
	  transformResponse: [function transformResponse(data) {
	    var transitional = this.transitional || defaults$3.transitional;
	    var silentJSONParsing = transitional && transitional.silentJSONParsing;
	    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
	    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';
	    if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
	      try {
	        return JSON.parse(data);
	      } catch (e) {
	        if (strictJSONParsing) {
	          if (e.name === 'SyntaxError') {
	            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
	          }
	          throw e;
	        }
	      }
	    }
	    return data;
	  }],
	  timeout: 0,
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	  maxContentLength: -1,
	  maxBodyLength: -1,
	  env: {
	    FormData: require_null()
	  },
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  },
	  headers: {
	    common: {
	      'Accept': 'application/json, text/plain, */*'
	    }
	  }
	};
	utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults$3.headers[method] = {};
	});
	utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
	});
	var defaults_1 = defaults$3;

	var utils$4 = utils$9;
	var defaults$2 = defaults_1;
	var transformData$1 = function transformData(data, headers, fns) {
	  var context = this || defaults$2;
	  utils$4.forEach(fns, function transform(fn) {
	    data = fn.call(context, data, headers);
	  });
	  return data;
	};

	var isCancel$2;
	var hasRequiredIsCancel;
	function requireIsCancel () {
		if (hasRequiredIsCancel) return isCancel$2;
		hasRequiredIsCancel = 1;
		isCancel$2 = function isCancel(value) {
		  return !!(value && value.__CANCEL__);
		};
		return isCancel$2;
	}

	var utils$3 = utils$9;
	var transformData = transformData$1;
	var isCancel$1 = requireIsCancel();
	var defaults$1 = defaults_1;
	var CanceledError = requireCanceledError();
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	  if (config.signal && config.signal.aborted) {
	    throw new CanceledError();
	  }
	}
	var dispatchRequest$1 = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	  config.headers = config.headers || {};
	  config.data = transformData.call(
	    config,
	    config.data,
	    config.headers,
	    config.transformRequest
	  );
	  config.headers = utils$3.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );
	  utils$3.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );
	  var adapter = config.adapter || defaults$1.adapter;
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	    response.data = transformData.call(
	      config,
	      response.data,
	      response.headers,
	      config.transformResponse
	    );
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel$1(reason)) {
	      throwIfCancellationRequested(config);
	      if (reason && reason.response) {
	        reason.response.data = transformData.call(
	          config,
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }
	    return Promise.reject(reason);
	  });
	};

	var utils$2 = utils$9;
	var mergeConfig$2 = function mergeConfig(config1, config2) {
	  config2 = config2 || {};
	  var config = {};
	  function getMergedValue(target, source) {
	    if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
	      return utils$2.merge(target, source);
	    } else if (utils$2.isPlainObject(source)) {
	      return utils$2.merge({}, source);
	    } else if (utils$2.isArray(source)) {
	      return source.slice();
	    }
	    return source;
	  }
	  function mergeDeepProperties(prop) {
	    if (!utils$2.isUndefined(config2[prop])) {
	      return getMergedValue(config1[prop], config2[prop]);
	    } else if (!utils$2.isUndefined(config1[prop])) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }
	  function valueFromConfig2(prop) {
	    if (!utils$2.isUndefined(config2[prop])) {
	      return getMergedValue(undefined, config2[prop]);
	    }
	  }
	  function defaultToConfig2(prop) {
	    if (!utils$2.isUndefined(config2[prop])) {
	      return getMergedValue(undefined, config2[prop]);
	    } else if (!utils$2.isUndefined(config1[prop])) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }
	  function mergeDirectKeys(prop) {
	    if (prop in config2) {
	      return getMergedValue(config1[prop], config2[prop]);
	    } else if (prop in config1) {
	      return getMergedValue(undefined, config1[prop]);
	    }
	  }
	  var mergeMap = {
	    'url': valueFromConfig2,
	    'method': valueFromConfig2,
	    'data': valueFromConfig2,
	    'baseURL': defaultToConfig2,
	    'transformRequest': defaultToConfig2,
	    'transformResponse': defaultToConfig2,
	    'paramsSerializer': defaultToConfig2,
	    'timeout': defaultToConfig2,
	    'timeoutMessage': defaultToConfig2,
	    'withCredentials': defaultToConfig2,
	    'adapter': defaultToConfig2,
	    'responseType': defaultToConfig2,
	    'xsrfCookieName': defaultToConfig2,
	    'xsrfHeaderName': defaultToConfig2,
	    'onUploadProgress': defaultToConfig2,
	    'onDownloadProgress': defaultToConfig2,
	    'decompress': defaultToConfig2,
	    'maxContentLength': defaultToConfig2,
	    'maxBodyLength': defaultToConfig2,
	    'beforeRedirect': defaultToConfig2,
	    'transport': defaultToConfig2,
	    'httpAgent': defaultToConfig2,
	    'httpsAgent': defaultToConfig2,
	    'cancelToken': defaultToConfig2,
	    'socketPath': defaultToConfig2,
	    'responseEncoding': defaultToConfig2,
	    'validateStatus': mergeDirectKeys
	  };
	  utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
	    var merge = mergeMap[prop] || mergeDeepProperties;
	    var configValue = merge(prop);
	    (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
	  });
	  return config;
	};

	var data;
	var hasRequiredData;
	function requireData () {
		if (hasRequiredData) return data;
		hasRequiredData = 1;
		data = {
		  "version": "0.27.2"
		};
		return data;
	}

	var VERSION = requireData().version;
	var AxiosError = requireAxiosError();
	var validators$1 = {};
	['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
	  validators$1[type] = function validator(thing) {
	    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
	  };
	});
	var deprecatedWarnings = {};
	validators$1.transitional = function transitional(validator, version, message) {
	  function formatMessage(opt, desc) {
	    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
	  }
	  return function(value, opt, opts) {
	    if (validator === false) {
	      throw new AxiosError(
	        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
	        AxiosError.ERR_DEPRECATED
	      );
	    }
	    if (version && !deprecatedWarnings[opt]) {
	      deprecatedWarnings[opt] = true;
	      console.warn(
	        formatMessage(
	          opt,
	          ' has been deprecated since v' + version + ' and will be removed in the near future'
	        )
	      );
	    }
	    return validator ? validator(value, opt, opts) : true;
	  };
	};
	function assertOptions(options, schema, allowUnknown) {
	  if (typeof options !== 'object') {
	    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
	  }
	  var keys = Object.keys(options);
	  var i = keys.length;
	  while (i-- > 0) {
	    var opt = keys[i];
	    var validator = schema[opt];
	    if (validator) {
	      var value = options[opt];
	      var result = value === undefined || validator(value, opt, options);
	      if (result !== true) {
	        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
	      }
	      continue;
	    }
	    if (allowUnknown !== true) {
	      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
	    }
	  }
	}
	var validator$1 = {
	  assertOptions: assertOptions,
	  validators: validators$1
	};

	var utils$1 = utils$9;
	var buildURL = buildURL$1;
	var InterceptorManager = InterceptorManager_1;
	var dispatchRequest = dispatchRequest$1;
	var mergeConfig$1 = mergeConfig$2;
	var buildFullPath = buildFullPath$1;
	var validator = validator$1;
	var validators = validator.validators;
	function Axios$1(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	Axios$1.prototype.request = function request(configOrUrl, config) {
	  if (typeof configOrUrl === 'string') {
	    config = config || {};
	    config.url = configOrUrl;
	  } else {
	    config = configOrUrl || {};
	  }
	  config = mergeConfig$1(this.defaults, config);
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }
	  var transitional = config.transitional;
	  if (transitional !== undefined) {
	    validator.assertOptions(transitional, {
	      silentJSONParsing: validators.transitional(validators.boolean),
	      forcedJSONParsing: validators.transitional(validators.boolean),
	      clarifyTimeoutError: validators.transitional(validators.boolean)
	    }, false);
	  }
	  var requestInterceptorChain = [];
	  var synchronousRequestInterceptors = true;
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
	      return;
	    }
	    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
	    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	  var responseInterceptorChain = [];
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	  var promise;
	  if (!synchronousRequestInterceptors) {
	    var chain = [dispatchRequest, undefined];
	    Array.prototype.unshift.apply(chain, requestInterceptorChain);
	    chain = chain.concat(responseInterceptorChain);
	    promise = Promise.resolve(config);
	    while (chain.length) {
	      promise = promise.then(chain.shift(), chain.shift());
	    }
	    return promise;
	  }
	  var newConfig = config;
	  while (requestInterceptorChain.length) {
	    var onFulfilled = requestInterceptorChain.shift();
	    var onRejected = requestInterceptorChain.shift();
	    try {
	      newConfig = onFulfilled(newConfig);
	    } catch (error) {
	      onRejected(error);
	      break;
	    }
	  }
	  try {
	    promise = dispatchRequest(newConfig);
	  } catch (error) {
	    return Promise.reject(error);
	  }
	  while (responseInterceptorChain.length) {
	    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
	  }
	  return promise;
	};
	Axios$1.prototype.getUri = function getUri(config) {
	  config = mergeConfig$1(this.defaults, config);
	  var fullPath = buildFullPath(config.baseURL, config.url);
	  return buildURL(fullPath, config.params, config.paramsSerializer);
	};
	utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  Axios$1.prototype[method] = function(url, config) {
	    return this.request(mergeConfig$1(config || {}, {
	      method: method,
	      url: url,
	      data: (config || {}).data
	    }));
	  };
	});
	utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  function generateHTTPMethod(isForm) {
	    return function httpMethod(url, data, config) {
	      return this.request(mergeConfig$1(config || {}, {
	        method: method,
	        headers: isForm ? {
	          'Content-Type': 'multipart/form-data'
	        } : {},
	        url: url,
	        data: data
	      }));
	    };
	  }
	  Axios$1.prototype[method] = generateHTTPMethod();
	  Axios$1.prototype[method + 'Form'] = generateHTTPMethod(true);
	});
	var Axios_1 = Axios$1;

	var CancelToken_1;
	var hasRequiredCancelToken;
	function requireCancelToken () {
		if (hasRequiredCancelToken) return CancelToken_1;
		hasRequiredCancelToken = 1;
		var CanceledError = requireCanceledError();
		function CancelToken(executor) {
		  if (typeof executor !== 'function') {
		    throw new TypeError('executor must be a function.');
		  }
		  var resolvePromise;
		  this.promise = new Promise(function promiseExecutor(resolve) {
		    resolvePromise = resolve;
		  });
		  var token = this;
		  this.promise.then(function(cancel) {
		    if (!token._listeners) return;
		    var i;
		    var l = token._listeners.length;
		    for (i = 0; i < l; i++) {
		      token._listeners[i](cancel);
		    }
		    token._listeners = null;
		  });
		  this.promise.then = function(onfulfilled) {
		    var _resolve;
		    var promise = new Promise(function(resolve) {
		      token.subscribe(resolve);
		      _resolve = resolve;
		    }).then(onfulfilled);
		    promise.cancel = function reject() {
		      token.unsubscribe(_resolve);
		    };
		    return promise;
		  };
		  executor(function cancel(message) {
		    if (token.reason) {
		      return;
		    }
		    token.reason = new CanceledError(message);
		    resolvePromise(token.reason);
		  });
		}
		CancelToken.prototype.throwIfRequested = function throwIfRequested() {
		  if (this.reason) {
		    throw this.reason;
		  }
		};
		CancelToken.prototype.subscribe = function subscribe(listener) {
		  if (this.reason) {
		    listener(this.reason);
		    return;
		  }
		  if (this._listeners) {
		    this._listeners.push(listener);
		  } else {
		    this._listeners = [listener];
		  }
		};
		CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
		  if (!this._listeners) {
		    return;
		  }
		  var index = this._listeners.indexOf(listener);
		  if (index !== -1) {
		    this._listeners.splice(index, 1);
		  }
		};
		CancelToken.source = function source() {
		  var cancel;
		  var token = new CancelToken(function executor(c) {
		    cancel = c;
		  });
		  return {
		    token: token,
		    cancel: cancel
		  };
		};
		CancelToken_1 = CancelToken;
		return CancelToken_1;
	}

	var spread;
	var hasRequiredSpread;
	function requireSpread () {
		if (hasRequiredSpread) return spread;
		hasRequiredSpread = 1;
		spread = function spread(callback) {
		  return function wrap(arr) {
		    return callback.apply(null, arr);
		  };
		};
		return spread;
	}

	var isAxiosError;
	var hasRequiredIsAxiosError;
	function requireIsAxiosError () {
		if (hasRequiredIsAxiosError) return isAxiosError;
		hasRequiredIsAxiosError = 1;
		var utils = utils$9;
		isAxiosError = function isAxiosError(payload) {
		  return utils.isObject(payload) && (payload.isAxiosError === true);
		};
		return isAxiosError;
	}

	var utils = utils$9;
	var bind = bind$2;
	var Axios = Axios_1;
	var mergeConfig = mergeConfig$2;
	var defaults = defaults_1;
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	  utils.extend(instance, Axios.prototype, context);
	  utils.extend(instance, context);
	  instance.create = function create(instanceConfig) {
	    return createInstance(mergeConfig(defaultConfig, instanceConfig));
	  };
	  return instance;
	}
	var axios$1 = createInstance(defaults);
	axios$1.Axios = Axios;
	axios$1.CanceledError = requireCanceledError();
	axios$1.CancelToken = requireCancelToken();
	axios$1.isCancel = requireIsCancel();
	axios$1.VERSION = requireData().version;
	axios$1.toFormData = requireToFormData();
	axios$1.AxiosError = requireAxiosError();
	axios$1.Cancel = axios$1.CanceledError;
	axios$1.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios$1.spread = requireSpread();
	axios$1.isAxiosError = requireIsAxiosError();
	axios$2.exports = axios$1;
	axios$2.exports.default = axios$1;

	(function (module) {
		module.exports = axios$2.exports;
	} (axios$3));
	var axios = getDefaultExportFromCjs(axios$3.exports);

	var baseConfig = {
	  baseURL: '',
	  withCredentials: true,
	  timeout: 30000,
	  headers: {}
	};
	var api = {
	  sync: '/oauth2/token/api',
	  refresh: '/oauth2/token/api',
	  validate: '/api/oauth2/token'
	};
	var restPending = new _Map();
	var addPending = function addPending(config) {
	  var key = [config.method, config.url].join('&');
	  config.cancelToken = new axios.CancelToken(function (cancel) {
	    if (!restPending.has(key)) restPending.set(key, cancel);
	  });
	};
	var removePending = function removePending(config) {
	  var key = [config.method, config.url].join('&');
	  if (restPending.has(key)) {
	    var cancel = restPending.get(key);
	    cancel(key);
	    restPending.delete(key);
	  }
	};
	var cancelRequest = function cancelRequest(config) {
	  var key = [config.method, config.url].join('&');
	  config.cancelToken = new axios.CancelToken(function (cancel) {
	    cancel(key);
	  });
	};
	var isCancel = function isCancel(error) {
	  return axios.isCancel(error);
	};
	function checkConfig() {
	  var _context;
	  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var keysArr = [];
	  _forEachInstanceProperty(_context = _Object$keys(config)).call(_context, function (key) {
	    if (!Object.prototype.hasOwnProperty.call(baseConfig, key)) {
	      keysArr.push(key);
	    }
	  });
	  var diff = keysArr.length && keysArr.length > 0;
	  if (diff) console.error("Request config error: [".concat(keysArr, "] not exists!"));
	  return diff;
	}
	var httpRequset = function httpRequset(config) {
	  var keyExists = checkConfig(config);
	  var newOptions = keyExists ? {} : deepMerge(baseConfig, isPlainObject$1(config) && config);
	  return axios.create(newOptions);
	};

	var stringify$2 = {exports: {}};

	var path = path$j;
	var apply = functionApply;
	if (!path.JSON) path.JSON = { stringify: JSON.stringify };
	var stringify$1 = function stringify(it, replacer, space) {
	  return apply(path.JSON.stringify, null, arguments);
	};

	var parent = stringify$1;
	var stringify = parent;

	(function (module) {
		module.exports = stringify;
	} (stringify$2));
	var _JSON$stringify = getDefaultExportFromCjs(stringify$2.exports);

	var errorMsg = {
	  typeVerify: function typeVerify(type) {
	    return "[Type Error]: Must be a '".concat(type, "'.");
	  }
	};
	var stringTypeVerify = function stringTypeVerify(string) {
	  return !(!isString$1(string) && console.error(errorMsg.typeVerify('string')));
	};
	var webStorage = {
	set: function set(key, value) {
	    if (stringTypeVerify(key)) {
	      localStorage.setItem(key, _JSON$stringify(value));
	    }
	  },
	get: function get(key) {
	    return stringTypeVerify(key) ? JSON.parse(localStorage.getItem(key)) : null;
	  },
	remove: function remove(key) {
	    if (!stringTypeVerify(key)) {
	      return;
	    }
	    localStorage.removeItem(key);
	  },
	clear: function clear() {
	    localStorage.clear();
	  }
	};

	var setTokens = function seTokens() {
	  var keyList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var keyObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  _forEachInstanceProperty(keyList).call(keyList, function (key) {
	    if (key in keyObj) {
	      webStorage.set(key, keyObj[key]);
	    }
	  });
	};
	var removeTokens = function removeToken() {
	  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  _forEachInstanceProperty(keys).call(keys, function (value) {
	    webStorage.remove(value);
	  });
	};

	var DESCRIPTORS = descriptors;
	var FUNCTION_NAME_EXISTS = functionName.EXISTS;
	var uncurryThis = functionUncurryThis;
	var defineProperty = objectDefineProperty.f;
	var FunctionPrototype = Function.prototype;
	var functionToString = uncurryThis(FunctionPrototype.toString);
	var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
	var regExpExec = uncurryThis(nameRE.exec);
	var NAME = 'name';
	if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
	  defineProperty(FunctionPrototype, NAME, {
	    configurable: true,
	    get: function () {
	      try {
	        return regExpExec(nameRE, functionToString(this))[1];
	      } catch (error) {
	        return '';
	      }
	    }
	  });
	}

	function reset(_x) {
	  return _reset.apply(this, arguments);
	}
	function _reset() {
	  _reset = _asyncToGenerator( regenerator.mark(function _callee(instance) {
	    return regenerator.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            removeTokens(instance.tokenKeys);
	            instance.intervalSync = null;
	            instance.intervalRefresh = null;
	            instance.syncTimes = 0;
	            instance.refreshTimes = 0;
	            instance.axiosPending.clear();
	          case 6:
	          case "end":
	            return _context.stop();
	        }
	      }
	    }, _callee);
	  }));
	  return _reset.apply(this, arguments);
	}
	function autoLogout(instance) {
	  _setTimeout(function () {
	    return instance.logoutIAM();
	  }, LOGOUT_TIME);
	}
	function interceptors(instance) {
	  instance.rest.interceptors.request.use(function (config) {
	    if (!instance.options.xhr_with) {
	      delete config.headers['X-Requested-With'];
	    }
	    removePending(config);
	    if (instance.isLogin()) {
	      addPending(config);
	    } else {
	      cancelRequest(config);
	    }
	    return config;
	  }, function (error) {
	    return _Promise.reject(error);
	  });
	  instance.cancelTimes = 0;
	  instance.rest.interceptors.response.use(function (res) {
	    removePending(res);
	    return res;
	  }, function (error) {
	    if (isCancel(error)) {
	      instance.cancelTimes += 1;
	      error.isLogout = true;
	      reset(instance).then(function () {
	        if (isFunction$1(instance.options.onLogout) && instance.cancelTimes === 1) {
	          instance.options.onLogout();
	        }
	      });
	    }
	    return _Promise.reject(error);
	  });
	}
	function exception(instance, messageIpt, codeIpt) {
	  instance.code = codeIpt || 200;
	  instance.message = messageIpt || 'OK';
	  instance.name = 'exception';
	  return instance;
	}
	var privateMethods = {
	  interceptors: interceptors,
	  reset: reset,
	  autoLogout: autoLogout,
	  exception: exception
	};

	promise_prototype_finally.shim();
	var DEFAULTS = _Object$freeze({
	  autopilot: true,
	  sso_url: '',
	  cookie_prefix: '',
	  redirect_url: '',
	  xhr_with: false,
	  onLogout: null
	});
	var TokenInjection = function () {
	  function TokenInjection() {
	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    _classCallCheck(this, TokenInjection);
	    this.options = deepMerge(DEFAULTS, options);
	    this.options.cookie_prefix = !isEmptyStr(this.options.cookie_prefix) ? "".concat(this.options.cookie_prefix, "_") : '';
	    this.tokenKeys = [ACCESS_TOKEN_NAME, TOKEN_EXPIRED_NAME, TOKEN_TYPE, TOKEN_SCOPE, REFRESH_TOKEN_NAME, TOKEN_CHECK_SUM, TOKEN_CREATE_TIME_NAME];
	    this.intervalSync = null;
	    this.intervalRefresh = null;
	    this.syncTimes = 0;
	    this.refreshTimes = 0;
	    this.axiosPending = new _Map();
	    this.rest = httpRequset({
	      baseURL: this.options.sso_url,
	      headers: {
	        'X-Requested-With': 'XMLHttpRequest'
	      }
	    });
	    privateMethods.interceptors(this);
	    if (this.options.autopilot) {
	      this.init();
	    }
	  }
	  _createClass(TokenInjection, [{
	    key: "init",
	    value: function init() {
	      var instance = this;
	      return instance.sync().then(function () {
	        instance.autoSync();
	        instance.autoRefresh();
	        privateMethods.autoLogout(instance);
	      }).catch(function (error) {
	        if (error.isLogout) {
	          instance.loginIAM();
	        }
	        throw new Error(error);
	      });
	    }
	  }, {
	    key: "sync",
	    value: function sync() {
	      var instance = this;
	      var rest = this.rest,
	        tokenKeys = this.tokenKeys;
	      return new _Promise(function (resolve, reject) {
	        rest.get(api.sync).then(function (res) {
	          var tokenInfo = res.data || {};
	          instance.axiosPending.set('sync', res.request.readyState);
	          instance.syncTimes = 0;
	          removeTokens(tokenKeys);
	          try {
	            setTokens(tokenKeys, tokenInfo);
	          } catch (error) {
	            webStorage.clear();
	            instance.logoutIAM();
	          }
	          resolve(res);
	        }).catch(function (error) {
	          instance.syncTimes += 1;
	          if (instance.syncTimes >= MAX_REQUEST_TIMES) {
	            throw new Error(MAX_REQUEST_MESSAGE, instance.syncTimes);
	          }
	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: "refresh",
	    value: function refresh() {
	      var instance = this;
	      var rest = this.rest;
	      var refreshToken = webStorage.get(REFRESH_TOKEN_NAME);
	      if (!refreshToken) {
	        throw privateMethods.exception(instance, 'Need Refresh Token !', 401);
	      }
	      return new _Promise(function (resolve, reject) {
	        var _context;
	        rest.post(_concatInstanceProperty(_context = "".concat(api.refresh, "?v=")).call(_context, rand(11111, 99999)), queryString({
	          refresh_token: refreshToken
	        }), {
	          headers: {
	            'Content-Type': 'application/x-www-form-urlencoded'
	          }
	        }).then(function (res) {
	          instance.refreshTimes = 0;
	          instance.axiosPending.set('refresh', {
	            readyState: res.request.readyState
	          });
	          resolve(res);
	        }).catch(function (error) {
	          instance.refreshTimes += 1;
	          if (instance.refreshTimes >= MAX_REQUEST_TIMES) {
	            throw new Error(MAX_REQUEST_MESSAGE, instance.refreshTimes);
	          }
	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: "autoSync",
	    value: function autoSync() {
	      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var instance = this;
	      var options = this.options;
	      var tkCheckSum = "".concat(options.cookie_prefix, "tkchecksum");
	      var syncReadyState = instance.axiosPending.get('sync');
	      var getSyncState = function getSyncState() {
	        return typeof syncReadyState === 'undefined' || syncReadyState === null;
	      };
	      var checkSumNoEqual = function checkSumNoEqual() {
	        return api$1.get(tkCheckSum) !== webStorage.get('token_checksum');
	      };
	      if (!instance.intervalSync) {
	        instance.intervalSync = _setInterval( _asyncToGenerator( regenerator.mark(function _callee() {
	          return regenerator.wrap(function _callee$(_context2) {
	            while (1) {
	              switch (_context2.prev = _context2.next) {
	                case 0:
	                  if (!(checkSumNoEqual() && (getSyncState() || syncReadyState === 4))) {
	                    _context2.next = 3;
	                    break;
	                  }
	                  _context2.next = 3;
	                  return instance.sync().catch(function () {
	                    instance.autoSyncStop();
	                    _setTimeout(function () {
	                      return instance.autoSync();
	                    }, 30000);
	                  });
	                case 3:
	                case "end":
	                  return _context2.stop();
	              }
	            }
	          }, _callee);
	        })), interval * 1000 || TOKEN_AUTO_SYNC_INTERVAL);
	      }
	    }
	  }, {
	    key: "autoSyncStop",
	    value: function autoSyncStop() {
	      var instance = this;
	      if (instance.intervalSync) {
	        clearInterval(instance.intervalSync);
	        instance.intervalSync = null;
	        instance.axiosPending.delete('sync');
	      }
	    }
	  }, {
	    key: "autoRefresh",
	    value: function autoRefresh() {
	      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var instance = this;
	      var refreshStop = function refreshStop() {
	        instance.autoRefreshStop();
	        _setTimeout(function () {
	          return instance.autoRefresh();
	        }, 30000);
	      };
	      if (!instance.intervalRefresh) {
	        var refreshReadyState = instance.axiosPending.get('refresh');
	        var getRefreshState = function getRefreshState() {
	          return typeof refreshReadyState === 'undefined' || refreshReadyState === null;
	        };
	        instance.intervalRefresh = _setInterval(function () {
	          try {
	            var nowTime = _parseInt(_Date$now() / 1000, 10);
	            var createKey = webStorage.get(TOKEN_CREATE_TIME_NAME);
	            var createTime = _parseInt(createKey, 10);
	            var expiredKey = webStorage.get(TOKEN_EXPIRED_NAME);
	            var expireTime = _parseInt(expiredKey, 10);
	            var refreshTime = createTime + expireTime - TOKEN_REFRESH_BEFORE;
	            if (nowTime >= refreshTime && (getRefreshState() || refreshReadyState === 4)) {
	              instance.refresh().catch(function () {
	                refreshStop();
	              });
	            }
	          } catch (e) {
	            var _context3;
	            console.log(_concatInstanceProperty(_context3 = "[".concat(e.code, "]")).call(_context3, e.message));
	            refreshStop();
	          }
	        }, interval * 1000 || TOKEN_AUTO_REFRESH_INTERVAL * 1000);
	      }
	    }
	  }, {
	    key: "autoRefreshStop",
	    value: function autoRefreshStop() {
	      var instance = this;
	      if (instance.intervalRefresh) {
	        clearInterval(instance.intervalRefresh);
	        instance.intervalRefresh = null;
	        instance.axiosPending.delete('refresh');
	      }
	    }
	  }, {
	    key: "validate",
	    value: function validate(token) {
	      var rest = this.rest;
	      var validateToken = token || '';
	      return new _Promise(function (resolve, reject) {
	        var _context4;
	        rest.get(_concatInstanceProperty(_context4 = "".concat(api.validate, "?v=")).call(_context4, rand(11111, 99999)), {
	          headers: {
	            Authorization: "Bearer ".concat(validateToken)
	          }
	        }).then(function (res) {
	          resolve(res);
	        }).catch(function (error) {
	          reject(error);
	        });
	      });
	    }
	  }, {
	    key: "getToken",
	    value: function getToken() {
	      return webStorage.get(ACCESS_TOKEN_NAME);
	    }
	  }, {
	    key: "getLang",
	    value: function getLang() {
	      var options = this.options;
	      return api$1.get("".concat(options.cookie_prefix, "lang")) || 'en';
	    }
	  }, {
	    key: "loginIAM",
	    value: function loginIAM() {
	      var _context5;
	      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var options = this.options;
	      var ssoUrl = _concatInstanceProperty(_context5 = "".concat(options.sso_url, "/login?redirect_uri=")).call(_context5, options.redirect_url) || '';
	      window.open(ssoUrl, target || '_self');
	    }
	  }, {
	    key: "logoutIAM",
	    value: function logoutIAM() {
	      var instance = this;
	      var options = this.options;
	      var ssoUrl = "".concat(options.sso_url, "/logout") || '';
	      privateMethods.reset(instance).then(function () {
	        window.location.href = ssoUrl;
	      });
	    }
	  }, {
	    key: "isLogin",
	    value: function isLogin() {
	      var options = this.options;
	      var loginKey = "".concat(options.cookie_prefix, "login");
	      var loginCookie = api$1.get(loginKey);
	      return loginCookie && loginCookie === '1';
	    }
	  }, {
	    key: "axiosCreate",
	    value: function axiosCreate() {
	      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	      var instance = this;
	      instance.options.sso_url = config.baseURL || '';
	      instance.rest = httpRequset(config);
	      return instance;
	    }
	  }]);
	  return TokenInjection;
	}();

	return TokenInjection;

}));
