(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TokenInjection = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	var check$1 = function (it) {
	  return it && it.Math == Math && it;
	};
	var global$11 =
	  check$1(typeof globalThis == 'object' && globalThis) ||
	  check$1(typeof window == 'object' && window) ||
	  check$1(typeof self == 'object' && self) ||
	  check$1(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  (function () { return this; })() || Function('return this')();

	var FunctionPrototype$5 = Function.prototype;
	var apply$7 = FunctionPrototype$5.apply;
	var bind$f = FunctionPrototype$5.bind;
	var call$h = FunctionPrototype$5.call;
	var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind$f ? call$h.bind(apply$7) : function () {
	  return call$h.apply(apply$7, arguments);
	});

	var FunctionPrototype$4 = Function.prototype;
	var bind$e = FunctionPrototype$4.bind;
	var call$g = FunctionPrototype$4.call;
	var callBind$3 = bind$e && bind$e.bind(call$g);
	var functionUncurryThis$1 = bind$e ? function (fn) {
	  return fn && callBind$3(call$g, fn);
	} : function (fn) {
	  return fn && function () {
	    return call$g.apply(fn, arguments);
	  };
	};

	var isCallable$u = function (argument) {
	  return typeof argument == 'function';
	};

	var objectGetOwnPropertyDescriptor$1 = {};

	var fails$u = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$t = fails$u;
	var descriptors$1 = !fails$t(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var call$f = Function.prototype.call;
	var functionCall$1 = call$f.bind ? call$f.bind(call$f) : function () {
	  return call$f.apply(call$f, arguments);
	};

	var objectPropertyIsEnumerable$1 = {};

	var $propertyIsEnumerable$1 = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
	var NASHORN_BUG$1 = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable$1.call({ 1: 2 }, 1);
	objectPropertyIsEnumerable$1.f = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor$4(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : $propertyIsEnumerable$1;

	var createPropertyDescriptor$9 = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var uncurryThis$x = functionUncurryThis$1;
	var toString$b = uncurryThis$x({}.toString);
	var stringSlice$2 = uncurryThis$x(''.slice);
	var classofRaw$2 = function (it) {
	  return stringSlice$2(toString$b(it), 8, -1);
	};

	var global$10 = global$11;
	var uncurryThis$w = functionUncurryThis$1;
	var fails$s = fails$u;
	var classof$c = classofRaw$2;
	var Object$9 = global$10.Object;
	var split$2 = uncurryThis$w(''.split);
	var indexedObject$1 = fails$s(function () {
	  return !Object$9('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$c(it) == 'String' ? split$2(it, '') : Object$9(it);
	} : Object$9;

	var global$$ = global$11;
	var TypeError$l = global$$.TypeError;
	var requireObjectCoercible$7 = function (it) {
	  if (it == undefined) throw TypeError$l("Can't call method on " + it);
	  return it;
	};

	var IndexedObject$3 = indexedObject$1;
	var requireObjectCoercible$6 = requireObjectCoercible$7;
	var toIndexedObject$b = function (it) {
	  return IndexedObject$3(requireObjectCoercible$6(it));
	};

	var isCallable$t = isCallable$u;
	var isObject$q = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$t(it);
	};

	var path$d = {};

	var path$c = path$d;
	var global$_ = global$11;
	var isCallable$s = isCallable$u;
	var aFunction$1 = function (variable) {
	  return isCallable$s(variable) ? variable : undefined;
	};
	var getBuiltIn$e = function (namespace, method) {
	  return arguments.length < 2 ? aFunction$1(path$c[namespace]) || aFunction$1(global$_[namespace])
	    : path$c[namespace] && path$c[namespace][method] || global$_[namespace] && global$_[namespace][method];
	};

	var uncurryThis$v = functionUncurryThis$1;
	var objectIsPrototypeOf$1 = uncurryThis$v({}.isPrototypeOf);

	var getBuiltIn$d = getBuiltIn$e;
	var engineUserAgent$1 = getBuiltIn$d('navigator', 'userAgent') || '';

	var global$Z = global$11;
	var userAgent$5 = engineUserAgent$1;
	var process$5 = global$Z.process;
	var Deno$1 = global$Z.Deno;
	var versions$1 = process$5 && process$5.versions || Deno$1 && Deno$1.version;
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
	var fails$r = fails$u;
	var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$r(function () {
	  var symbol = Symbol();
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    !Symbol.sham && V8_VERSION$4 && V8_VERSION$4 < 41;
	});

	var NATIVE_SYMBOL$3 = nativeSymbol$1;
	var useSymbolAsUid$1 = NATIVE_SYMBOL$3
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$Y = global$11;
	var getBuiltIn$c = getBuiltIn$e;
	var isCallable$r = isCallable$u;
	var isPrototypeOf$7 = objectIsPrototypeOf$1;
	var USE_SYMBOL_AS_UID$3 = useSymbolAsUid$1;
	var Object$8 = global$Y.Object;
	var isSymbol$5 = USE_SYMBOL_AS_UID$3 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$c('Symbol');
	  return isCallable$r($Symbol) && isPrototypeOf$7($Symbol.prototype, Object$8(it));
	};

	var global$X = global$11;
	var String$7 = global$X.String;
	var tryToString$6 = function (argument) {
	  try {
	    return String$7(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$W = global$11;
	var isCallable$q = isCallable$u;
	var tryToString$5 = tryToString$6;
	var TypeError$k = global$W.TypeError;
	var aCallable$9 = function (argument) {
	  if (isCallable$q(argument)) return argument;
	  throw TypeError$k(tryToString$5(argument) + ' is not a function');
	};

	var aCallable$8 = aCallable$9;
	var getMethod$5 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable$8(func);
	};

	var global$V = global$11;
	var call$e = functionCall$1;
	var isCallable$p = isCallable$u;
	var isObject$p = isObject$q;
	var TypeError$j = global$V.TypeError;
	var ordinaryToPrimitive$3 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$p(fn = input.toString) && !isObject$p(val = call$e(fn, input))) return val;
	  if (isCallable$p(fn = input.valueOf) && !isObject$p(val = call$e(fn, input))) return val;
	  if (pref !== 'string' && isCallable$p(fn = input.toString) && !isObject$p(val = call$e(fn, input))) return val;
	  throw TypeError$j("Can't convert object to primitive value");
	};

	var shared$7 = {exports: {}};

	var isPure = true;

	var global$U = global$11;
	var defineProperty$f = Object.defineProperty;
	var setGlobal$5 = function (key, value) {
	  try {
	    defineProperty$f(global$U, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$U[key] = value;
	  } return value;
	};

	var global$T = global$11;
	var setGlobal$4 = setGlobal$5;
	var SHARED$1 = '__core-js_shared__';
	var store$7 = global$T[SHARED$1] || setGlobal$4(SHARED$1, {});
	var sharedStore$1 = store$7;

	var store$6 = sharedStore$1;
	(shared$7.exports = function (key, value) {
	  return store$6[key] || (store$6[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.19.1',
	  mode: 'pure' ,
	  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
	});

	var global$S = global$11;
	var requireObjectCoercible$5 = requireObjectCoercible$7;
	var Object$7 = global$S.Object;
	var toObject$7 = function (argument) {
	  return Object$7(requireObjectCoercible$5(argument));
	};

	var uncurryThis$u = functionUncurryThis$1;
	var toObject$6 = toObject$7;
	var hasOwnProperty$9 = uncurryThis$u({}.hasOwnProperty);
	var hasOwnProperty_1$1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$9(toObject$6(it), key);
	};

	var uncurryThis$t = functionUncurryThis$1;
	var id$2 = 0;
	var postfix$1 = Math.random();
	var toString$a = uncurryThis$t(1.0.toString);
	var uid$6 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$a(++id$2 + postfix$1, 36);
	};

	var global$R = global$11;
	var shared$6 = shared$7.exports;
	var hasOwn$j = hasOwnProperty_1$1;
	var uid$5 = uid$6;
	var NATIVE_SYMBOL$2 = nativeSymbol$1;
	var USE_SYMBOL_AS_UID$2 = useSymbolAsUid$1;
	var WellKnownSymbolsStore$1 = shared$6('wks');
	var Symbol$6 = global$R.Symbol;
	var symbolFor$1 = Symbol$6 && Symbol$6['for'];
	var createWellKnownSymbol$1 = USE_SYMBOL_AS_UID$2 ? Symbol$6 : Symbol$6 && Symbol$6.withoutSetter || uid$5;
	var wellKnownSymbol$j = function (name) {
	  if (!hasOwn$j(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL$2 && hasOwn$j(Symbol$6, name)) {
	      WellKnownSymbolsStore$1[name] = Symbol$6[name];
	    } else if (USE_SYMBOL_AS_UID$2 && symbolFor$1) {
	      WellKnownSymbolsStore$1[name] = symbolFor$1(description);
	    } else {
	      WellKnownSymbolsStore$1[name] = createWellKnownSymbol$1(description);
	    }
	  } return WellKnownSymbolsStore$1[name];
	};

	var global$Q = global$11;
	var call$d = functionCall$1;
	var isObject$o = isObject$q;
	var isSymbol$4 = isSymbol$5;
	var getMethod$4 = getMethod$5;
	var ordinaryToPrimitive$2 = ordinaryToPrimitive$3;
	var wellKnownSymbol$i = wellKnownSymbol$j;
	var TypeError$i = global$Q.TypeError;
	var TO_PRIMITIVE$1 = wellKnownSymbol$i('toPrimitive');
	var toPrimitive$3 = function (input, pref) {
	  if (!isObject$o(input) || isSymbol$4(input)) return input;
	  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE$1);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$d(exoticToPrim, input, pref);
	    if (!isObject$o(result) || isSymbol$4(result)) return result;
	    throw TypeError$i("Can't convert object to primitive value");
	  }
	  if (pref === undefined) pref = 'number';
	  return ordinaryToPrimitive$2(input, pref);
	};

	var toPrimitive$2 = toPrimitive$3;
	var isSymbol$3 = isSymbol$5;
	var toPropertyKey$6 = function (argument) {
	  var key = toPrimitive$2(argument, 'string');
	  return isSymbol$3(key) ? key : key + '';
	};

	var global$P = global$11;
	var isObject$n = isObject$q;
	var document$4 = global$P.document;
	var EXISTS$3 = isObject$n(document$4) && isObject$n(document$4.createElement);
	var documentCreateElement$2 = function (it) {
	  return EXISTS$3 ? document$4.createElement(it) : {};
	};

	var DESCRIPTORS$g = descriptors$1;
	var fails$q = fails$u;
	var createElement$2 = documentCreateElement$2;
	var ie8DomDefine$1 = !DESCRIPTORS$g && !fails$q(function () {
	  return Object.defineProperty(createElement$2('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$f = descriptors$1;
	var call$c = functionCall$1;
	var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable$1;
	var createPropertyDescriptor$8 = createPropertyDescriptor$9;
	var toIndexedObject$a = toIndexedObject$b;
	var toPropertyKey$5 = toPropertyKey$6;
	var hasOwn$i = hasOwnProperty_1$1;
	var IE8_DOM_DEFINE$3 = ie8DomDefine$1;
	var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
	objectGetOwnPropertyDescriptor$1.f = DESCRIPTORS$f ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$a(O);
	  P = toPropertyKey$5(P);
	  if (IE8_DOM_DEFINE$3) try {
	    return $getOwnPropertyDescriptor$2(O, P);
	  } catch (error) {  }
	  if (hasOwn$i(O, P)) return createPropertyDescriptor$8(!call$c(propertyIsEnumerableModule$1.f, O, P), O[P]);
	};

	var fails$p = fails$u;
	var isCallable$o = isCallable$u;
	var replacement$1 = /#|\.prototype\./;
	var isForced$4 = function (feature, detection) {
	  var value = data$2[normalize$1(feature)];
	  return value == POLYFILL$1 ? true
	    : value == NATIVE$1 ? false
	    : isCallable$o(detection) ? fails$p(detection)
	    : !!detection;
	};
	var normalize$1 = isForced$4.normalize = function (string) {
	  return String(string).replace(replacement$1, '.').toLowerCase();
	};
	var data$2 = isForced$4.data = {};
	var NATIVE$1 = isForced$4.NATIVE = 'N';
	var POLYFILL$1 = isForced$4.POLYFILL = 'P';
	var isForced_1$1 = isForced$4;

	var uncurryThis$s = functionUncurryThis$1;
	var aCallable$7 = aCallable$9;
	var bind$d = uncurryThis$s(uncurryThis$s.bind);
	var functionBindContext = function (fn, that) {
	  aCallable$7(fn);
	  return that === undefined ? fn : bind$d ? bind$d(fn, that) : function () {
	    return fn.apply(that, arguments);
	  };
	};

	var objectDefineProperty$1 = {};

	var global$O = global$11;
	var isObject$m = isObject$q;
	var String$6 = global$O.String;
	var TypeError$h = global$O.TypeError;
	var anObject$d = function (argument) {
	  if (isObject$m(argument)) return argument;
	  throw TypeError$h(String$6(argument) + ' is not an object');
	};

	var global$N = global$11;
	var DESCRIPTORS$e = descriptors$1;
	var IE8_DOM_DEFINE$2 = ie8DomDefine$1;
	var anObject$c = anObject$d;
	var toPropertyKey$4 = toPropertyKey$6;
	var TypeError$g = global$N.TypeError;
	var $defineProperty$2 = Object.defineProperty;
	objectDefineProperty$1.f = DESCRIPTORS$e ? $defineProperty$2 : function defineProperty(O, P, Attributes) {
	  anObject$c(O);
	  P = toPropertyKey$4(P);
	  anObject$c(Attributes);
	  if (IE8_DOM_DEFINE$2) try {
	    return $defineProperty$2(O, P, Attributes);
	  } catch (error) {  }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError$g('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var DESCRIPTORS$d = descriptors$1;
	var definePropertyModule$6 = objectDefineProperty$1;
	var createPropertyDescriptor$7 = createPropertyDescriptor$9;
	var createNonEnumerableProperty$c = DESCRIPTORS$d ? function (object, key, value) {
	  return definePropertyModule$6.f(object, key, createPropertyDescriptor$7(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var global$M = global$11;
	var apply$6 = functionApply;
	var uncurryThis$r = functionUncurryThis$1;
	var isCallable$n = isCallable$u;
	var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;
	var isForced$3 = isForced_1$1;
	var path$b = path$d;
	var bind$c = functionBindContext;
	var createNonEnumerableProperty$b = createNonEnumerableProperty$c;
	var hasOwn$h = hasOwnProperty_1$1;
	var wrapConstructor = function (NativeConstructor) {
	  var Wrapper = function (a, b, c) {
	    if (this instanceof Wrapper) {
	      switch (arguments.length) {
	        case 0: return new NativeConstructor();
	        case 1: return new NativeConstructor(a);
	        case 2: return new NativeConstructor(a, b);
	      } return new NativeConstructor(a, b, c);
	    } return apply$6(NativeConstructor, this, arguments);
	  };
	  Wrapper.prototype = NativeConstructor.prototype;
	  return Wrapper;
	};
	var _export$1 = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var PROTO = options.proto;
	  var nativeSource = GLOBAL ? global$M : STATIC ? global$M[TARGET] : (global$M[TARGET] || {}).prototype;
	  var target = GLOBAL ? path$b : path$b[TARGET] || createNonEnumerableProperty$b(path$b, TARGET, {})[TARGET];
	  var targetPrototype = target.prototype;
	  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
	  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
	  for (key in source) {
	    FORCED = isForced$3(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    USE_NATIVE = !FORCED && nativeSource && hasOwn$h(nativeSource, key);
	    targetProperty = target[key];
	    if (USE_NATIVE) if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$3(nativeSource, key);
	      nativeProperty = descriptor && descriptor.value;
	    } else nativeProperty = nativeSource[key];
	    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];
	    if (USE_NATIVE && typeof targetProperty == typeof sourceProperty) continue;
	    if (options.bind && USE_NATIVE) resultProperty = bind$c(sourceProperty, global$M);
	    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
	    else if (PROTO && isCallable$n(sourceProperty)) resultProperty = uncurryThis$r(sourceProperty);
	    else resultProperty = sourceProperty;
	    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty$b(resultProperty, 'sham', true);
	    }
	    createNonEnumerableProperty$b(target, key, resultProperty);
	    if (PROTO) {
	      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
	      if (!hasOwn$h(path$b, VIRTUAL_PROTOTYPE)) {
	        createNonEnumerableProperty$b(path$b, VIRTUAL_PROTOTYPE, {});
	      }
	      createNonEnumerableProperty$b(path$b[VIRTUAL_PROTOTYPE], key, sourceProperty);
	      if (options.real && targetPrototype && !targetPrototype[key]) {
	        createNonEnumerableProperty$b(targetPrototype, key, sourceProperty);
	      }
	    }
	  }
	};

	var shared$5 = shared$7.exports;
	var uid$4 = uid$6;
	var keys$7 = shared$5('keys');
	var sharedKey$5 = function (key) {
	  return keys$7[key] || (keys$7[key] = uid$4(key));
	};

	var fails$o = fails$u;
	var correctPrototypeGetter = !fails$o(function () {
	  function F() {  }
	  F.prototype.constructor = null;
	  return Object.getPrototypeOf(new F()) !== F.prototype;
	});

	var global$L = global$11;
	var hasOwn$g = hasOwnProperty_1$1;
	var isCallable$m = isCallable$u;
	var toObject$5 = toObject$7;
	var sharedKey$4 = sharedKey$5;
	var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
	var IE_PROTO$1 = sharedKey$4('IE_PROTO');
	var Object$6 = global$L.Object;
	var ObjectPrototype = Object$6.prototype;
	var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$6.getPrototypeOf : function (O) {
	  var object = toObject$5(O);
	  if (hasOwn$g(object, IE_PROTO$1)) return object[IE_PROTO$1];
	  var constructor = object.constructor;
	  if (isCallable$m(constructor) && object instanceof constructor) {
	    return constructor.prototype;
	  } return object instanceof Object$6 ? ObjectPrototype : null;
	};

	var global$K = global$11;
	var isCallable$l = isCallable$u;
	var String$5 = global$K.String;
	var TypeError$f = global$K.TypeError;
	var aPossiblePrototype$1 = function (argument) {
	  if (typeof argument == 'object' || isCallable$l(argument)) return argument;
	  throw TypeError$f("Can't set " + String$5(argument) + ' as a prototype');
	};

	var uncurryThis$q = functionUncurryThis$1;
	var anObject$b = anObject$d;
	var aPossiblePrototype = aPossiblePrototype$1;
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = uncurryThis$q(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
	    setter(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) {  }
	  return function setPrototypeOf(O, proto) {
	    anObject$b(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	var objectGetOwnPropertyNames$1 = {};

	var ceil$1 = Math.ceil;
	var floor$1 = Math.floor;
	var toIntegerOrInfinity$6 = function (argument) {
	  var number = +argument;
	  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil$1)(number);
	};

	var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;
	var max$1 = Math.max;
	var min$3 = Math.min;
	var toAbsoluteIndex$3 = function (index, length) {
	  var integer = toIntegerOrInfinity$5(index);
	  return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
	};

	var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;
	var min$2 = Math.min;
	var toLength$3 = function (argument) {
	  return argument > 0 ? min$2(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0;
	};

	var toLength$2 = toLength$3;
	var lengthOfArrayLike$6 = function (obj) {
	  return toLength$2(obj.length);
	};

	var toIndexedObject$9 = toIndexedObject$b;
	var toAbsoluteIndex$2 = toAbsoluteIndex$3;
	var lengthOfArrayLike$5 = lengthOfArrayLike$6;
	var createMethod$4 = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject$9($this);
	    var length = lengthOfArrayLike$5(O);
	    var index = toAbsoluteIndex$2(fromIndex, length);
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

	var hiddenKeys$9 = {};

	var uncurryThis$p = functionUncurryThis$1;
	var hasOwn$f = hasOwnProperty_1$1;
	var toIndexedObject$8 = toIndexedObject$b;
	var indexOf$1 = arrayIncludes$1.indexOf;
	var hiddenKeys$8 = hiddenKeys$9;
	var push$3 = uncurryThis$p([].push);
	var objectKeysInternal$1 = function (object, names) {
	  var O = toIndexedObject$8(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !hasOwn$f(hiddenKeys$8, key) && hasOwn$f(O, key) && push$3(result, key);
	  while (names.length > i) if (hasOwn$f(O, key = names[i++])) {
	    ~indexOf$1(result, key) || push$3(result, key);
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
	var hiddenKeys$7 = enumBugKeys$4.concat('length', 'prototype');
	objectGetOwnPropertyNames$1.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return internalObjectKeys$2(O, hiddenKeys$7);
	};

	var objectGetOwnPropertySymbols$1 = {};

	objectGetOwnPropertySymbols$1.f = Object.getOwnPropertySymbols;

	var getBuiltIn$b = getBuiltIn$e;
	var uncurryThis$o = functionUncurryThis$1;
	var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames$1;
	var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols$1;
	var anObject$a = anObject$d;
	var concat$6 = uncurryThis$o([].concat);
	var ownKeys$3 = getBuiltIn$b('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule$2.f(anObject$a(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
	  return getOwnPropertySymbols ? concat$6(keys, getOwnPropertySymbols(it)) : keys;
	};

	var hasOwn$e = hasOwnProperty_1$1;
	var ownKeys$2 = ownKeys$3;
	var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor$1;
	var definePropertyModule$5 = objectDefineProperty$1;
	var copyConstructorProperties$3 = function (target, source) {
	  var keys = ownKeys$2(source);
	  var defineProperty = definePropertyModule$5.f;
	  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$1.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!hasOwn$e(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var internalObjectKeys$1 = objectKeysInternal$1;
	var enumBugKeys$3 = enumBugKeys$5;
	var objectKeys$2 = Object.keys || function keys(O) {
	  return internalObjectKeys$1(O, enumBugKeys$3);
	};

	var DESCRIPTORS$c = descriptors$1;
	var definePropertyModule$4 = objectDefineProperty$1;
	var anObject$9 = anObject$d;
	var toIndexedObject$7 = toIndexedObject$b;
	var objectKeys$1 = objectKeys$2;
	var objectDefineProperties = DESCRIPTORS$c ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject$9(O);
	  var props = toIndexedObject$7(Properties);
	  var keys = objectKeys$1(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
	  return O;
	};

	var getBuiltIn$a = getBuiltIn$e;
	var html$2 = getBuiltIn$a('document', 'documentElement');

	var anObject$8 = anObject$d;
	var defineProperties$1 = objectDefineProperties;
	var enumBugKeys$2 = enumBugKeys$5;
	var hiddenKeys$6 = hiddenKeys$9;
	var html$1 = html$2;
	var documentCreateElement$1 = documentCreateElement$2;
	var sharedKey$3 = sharedKey$5;
	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey$3('IE_PROTO');
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
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$2[length]];
	  return NullProtoObject();
	};
	hiddenKeys$6[IE_PROTO] = true;
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject$8(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : defineProperties$1(result, Properties);
	};

	var uncurryThis$n = functionUncurryThis$1;
	var arraySlice$4 = uncurryThis$n([].slice);

	var uncurryThis$m = functionUncurryThis$1;
	var arraySlice$3 = arraySlice$4;
	var replace$2 = uncurryThis$m(''.replace);
	var split$1 = uncurryThis$m(''.split);
	var join = uncurryThis$m([].join);
	var TEST = (function (arg) { return String(Error(arg).stack); })('zxcasd');
	var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
	var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
	var IS_FIREFOX_OR_SAFARI_STACK = /@[^\n]*\n/.test(TEST) && !/zxcasd/.test(TEST);
	var clearErrorStack$1 = function (stack, dropEntries) {
	  if (typeof stack != 'string') return stack;
	  if (IS_V8_OR_CHAKRA_STACK) {
	    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
	  } else if (IS_FIREFOX_OR_SAFARI_STACK) {
	    return join(arraySlice$3(split$1(stack, '\n'), dropEntries), '\n');
	  } return stack;
	};

	var isObject$l = isObject$q;
	var createNonEnumerableProperty$a = createNonEnumerableProperty$c;
	var installErrorCause$1 = function (O, options) {
	  if (isObject$l(options) && 'cause' in options) {
	    createNonEnumerableProperty$a(O, 'cause', options.cause);
	  }
	};

	var iterators = {};

	var wellKnownSymbol$h = wellKnownSymbol$j;
	var Iterators$5 = iterators;
	var ITERATOR$5 = wellKnownSymbol$h('iterator');
	var ArrayPrototype$3 = Array.prototype;
	var isArrayIteratorMethod$1 = function (it) {
	  return it !== undefined && (Iterators$5.Array === it || ArrayPrototype$3[ITERATOR$5] === it);
	};

	var wellKnownSymbol$g = wellKnownSymbol$j;
	var TO_STRING_TAG$4 = wellKnownSymbol$g('toStringTag');
	var test = {};
	test[TO_STRING_TAG$4] = 'z';
	var toStringTagSupport = String(test) === '[object z]';

	var global$J = global$11;
	var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
	var isCallable$k = isCallable$u;
	var classofRaw$1 = classofRaw$2;
	var wellKnownSymbol$f = wellKnownSymbol$j;
	var TO_STRING_TAG$3 = wellKnownSymbol$f('toStringTag');
	var Object$5 = global$J.Object;
	var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (error) {  }
	};
	var classof$b = TO_STRING_TAG_SUPPORT$2 ? classofRaw$1 : function (it) {
	  var O, tag, result;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    : typeof (tag = tryGet(O = Object$5(it), TO_STRING_TAG$3)) == 'string' ? tag
	    : CORRECT_ARGUMENTS ? classofRaw$1(O)
	    : (result = classofRaw$1(O)) == 'Object' && isCallable$k(O.callee) ? 'Arguments' : result;
	};

	var classof$a = classof$b;
	var getMethod$3 = getMethod$5;
	var Iterators$4 = iterators;
	var wellKnownSymbol$e = wellKnownSymbol$j;
	var ITERATOR$4 = wellKnownSymbol$e('iterator');
	var getIteratorMethod$2 = function (it) {
	  if (it != undefined) return getMethod$3(it, ITERATOR$4)
	    || getMethod$3(it, '@@iterator')
	    || Iterators$4[classof$a(it)];
	};

	var global$I = global$11;
	var call$b = functionCall$1;
	var aCallable$6 = aCallable$9;
	var anObject$7 = anObject$d;
	var tryToString$4 = tryToString$6;
	var getIteratorMethod$1 = getIteratorMethod$2;
	var TypeError$e = global$I.TypeError;
	var getIterator$1 = function (argument, usingIterator) {
	  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
	  if (aCallable$6(iteratorMethod)) return anObject$7(call$b(iteratorMethod, argument));
	  throw TypeError$e(tryToString$4(argument) + ' is not iterable');
	};

	var call$a = functionCall$1;
	var anObject$6 = anObject$d;
	var getMethod$2 = getMethod$5;
	var iteratorClose$1 = function (iterator, kind, value) {
	  var innerResult, innerError;
	  anObject$6(iterator);
	  try {
	    innerResult = getMethod$2(iterator, 'return');
	    if (!innerResult) {
	      if (kind === 'throw') throw value;
	      return value;
	    }
	    innerResult = call$a(innerResult, iterator);
	  } catch (error) {
	    innerError = true;
	    innerResult = error;
	  }
	  if (kind === 'throw') throw value;
	  if (innerError) throw innerResult;
	  anObject$6(innerResult);
	  return value;
	};

	var global$H = global$11;
	var bind$b = functionBindContext;
	var call$9 = functionCall$1;
	var anObject$5 = anObject$d;
	var tryToString$3 = tryToString$6;
	var isArrayIteratorMethod = isArrayIteratorMethod$1;
	var lengthOfArrayLike$4 = lengthOfArrayLike$6;
	var isPrototypeOf$6 = objectIsPrototypeOf$1;
	var getIterator = getIterator$1;
	var getIteratorMethod = getIteratorMethod$2;
	var iteratorClose = iteratorClose$1;
	var TypeError$d = global$H.TypeError;
	var Result = function (stopped, result) {
	  this.stopped = stopped;
	  this.result = result;
	};
	var ResultPrototype = Result.prototype;
	var iterate$6 = function (iterable, unboundFunction, options) {
	  var that = options && options.that;
	  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
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
	      anObject$5(value);
	      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
	    } return INTERRUPTED ? fn(value, stop) : fn(value);
	  };
	  if (IS_ITERATOR) {
	    iterator = iterable;
	  } else {
	    iterFn = getIteratorMethod(iterable);
	    if (!iterFn) throw TypeError$d(tryToString$3(iterable) + ' is not iterable');
	    if (isArrayIteratorMethod(iterFn)) {
	      for (index = 0, length = lengthOfArrayLike$4(iterable); length > index; index++) {
	        result = callFn(iterable[index]);
	        if (result && isPrototypeOf$6(ResultPrototype, result)) return result;
	      } return new Result(false);
	    }
	    iterator = getIterator(iterable, iterFn);
	  }
	  next = iterator.next;
	  while (!(step = call$9(next, iterator)).done) {
	    try {
	      result = callFn(step.value);
	    } catch (error) {
	      iteratorClose(iterator, 'throw', error);
	    }
	    if (typeof result == 'object' && result && isPrototypeOf$6(ResultPrototype, result)) return result;
	  } return new Result(false);
	};

	var global$G = global$11;
	var classof$9 = classof$b;
	var String$4 = global$G.String;
	var toString$9 = function (argument) {
	  if (classof$9(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
	  return String$4(argument);
	};

	var toString$8 = toString$9;
	var normalizeStringArgument$1 = function (argument, $default) {
	  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$8(argument);
	};

	var fails$n = fails$u;
	var createPropertyDescriptor$6 = createPropertyDescriptor$9;
	var errorStackInstallable = !fails$n(function () {
	  var error = Error('a');
	  if (!('stack' in error)) return true;
	  Object.defineProperty(error, 'stack', createPropertyDescriptor$6(1, 7));
	  return error.stack !== 7;
	});

	var $$j = _export$1;
	var global$F = global$11;
	var isPrototypeOf$5 = objectIsPrototypeOf$1;
	var getPrototypeOf$2 = objectGetPrototypeOf;
	var setPrototypeOf = objectSetPrototypeOf;
	var copyConstructorProperties$2 = copyConstructorProperties$3;
	var create$3 = objectCreate;
	var createNonEnumerableProperty$9 = createNonEnumerableProperty$c;
	var createPropertyDescriptor$5 = createPropertyDescriptor$9;
	var clearErrorStack = clearErrorStack$1;
	var installErrorCause = installErrorCause$1;
	var iterate$5 = iterate$6;
	var normalizeStringArgument = normalizeStringArgument$1;
	var wellKnownSymbol$d = wellKnownSymbol$j;
	var ERROR_STACK_INSTALLABLE = errorStackInstallable;
	var TO_STRING_TAG$2 = wellKnownSymbol$d('toStringTag');
	var Error$1 = global$F.Error;
	var push$2 = [].push;
	var $AggregateError = function AggregateError(errors, message ) {
	  var options = arguments.length > 2 ? arguments[2] : undefined;
	  var isInstance = isPrototypeOf$5(AggregateErrorPrototype, this);
	  var that;
	  if (setPrototypeOf) {
	    that = setPrototypeOf(new Error$1(undefined), isInstance ? getPrototypeOf$2(this) : AggregateErrorPrototype);
	  } else {
	    that = isInstance ? this : create$3(AggregateErrorPrototype);
	    createNonEnumerableProperty$9(that, TO_STRING_TAG$2, 'Error');
	  }
	  createNonEnumerableProperty$9(that, 'message', normalizeStringArgument(message, ''));
	  if (ERROR_STACK_INSTALLABLE) createNonEnumerableProperty$9(that, 'stack', clearErrorStack(that.stack, 1));
	  installErrorCause(that, options);
	  var errorsArray = [];
	  iterate$5(errors, push$2, { that: errorsArray });
	  createNonEnumerableProperty$9(that, 'errors', errorsArray);
	  return that;
	};
	if (setPrototypeOf) setPrototypeOf($AggregateError, Error$1);
	else copyConstructorProperties$2($AggregateError, Error$1);
	var AggregateErrorPrototype = $AggregateError.prototype = create$3(Error$1.prototype, {
	  constructor: createPropertyDescriptor$5(1, $AggregateError),
	  message: createPropertyDescriptor$5(1, ''),
	  name: createPropertyDescriptor$5(1, 'AggregateError')
	});
	$$j({ global: true }, {
	  AggregateError: $AggregateError
	});

	var uncurryThis$l = functionUncurryThis$1;
	var isCallable$j = isCallable$u;
	var store$5 = sharedStore$1;
	var functionToString$2 = uncurryThis$l(Function.toString);
	if (!isCallable$j(store$5.inspectSource)) {
	  store$5.inspectSource = function (it) {
	    return functionToString$2(it);
	  };
	}
	var inspectSource$6 = store$5.inspectSource;

	var global$E = global$11;
	var isCallable$i = isCallable$u;
	var inspectSource$5 = inspectSource$6;
	var WeakMap$4 = global$E.WeakMap;
	var nativeWeakMap$1 = isCallable$i(WeakMap$4) && /native code/.test(inspectSource$5(WeakMap$4));

	var NATIVE_WEAK_MAP$1 = nativeWeakMap$1;
	var global$D = global$11;
	var uncurryThis$k = functionUncurryThis$1;
	var isObject$k = isObject$q;
	var createNonEnumerableProperty$8 = createNonEnumerableProperty$c;
	var hasOwn$d = hasOwnProperty_1$1;
	var shared$4 = sharedStore$1;
	var sharedKey$2 = sharedKey$5;
	var hiddenKeys$5 = hiddenKeys$9;
	var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
	var TypeError$c = global$D.TypeError;
	var WeakMap$3 = global$D.WeakMap;
	var set$2, get$1, has$7;
	var enforce$1 = function (it) {
	  return has$7(it) ? get$1(it) : set$2(it, {});
	};
	var getterFor$1 = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$k(it) || (state = get$1(it)).type !== TYPE) {
	      throw TypeError$c('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};
	if (NATIVE_WEAK_MAP$1 || shared$4.state) {
	  var store$4 = shared$4.state || (shared$4.state = new WeakMap$3());
	  var wmget$1 = uncurryThis$k(store$4.get);
	  var wmhas$1 = uncurryThis$k(store$4.has);
	  var wmset$1 = uncurryThis$k(store$4.set);
	  set$2 = function (it, metadata) {
	    if (wmhas$1(store$4, it)) throw new TypeError$c(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    wmset$1(store$4, it, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return wmget$1(store$4, it) || {};
	  };
	  has$7 = function (it) {
	    return wmhas$1(store$4, it);
	  };
	} else {
	  var STATE$1 = sharedKey$2('state');
	  hiddenKeys$5[STATE$1] = true;
	  set$2 = function (it, metadata) {
	    if (hasOwn$d(it, STATE$1)) throw new TypeError$c(OBJECT_ALREADY_INITIALIZED$1);
	    metadata.facade = it;
	    createNonEnumerableProperty$8(it, STATE$1, metadata);
	    return metadata;
	  };
	  get$1 = function (it) {
	    return hasOwn$d(it, STATE$1) ? it[STATE$1] : {};
	  };
	  has$7 = function (it) {
	    return hasOwn$d(it, STATE$1);
	  };
	}
	var internalState$1 = {
	  set: set$2,
	  get: get$1,
	  has: has$7,
	  enforce: enforce$1,
	  getterFor: getterFor$1
	};

	var DESCRIPTORS$b = descriptors$1;
	var hasOwn$c = hasOwnProperty_1$1;
	var FunctionPrototype$3 = Function.prototype;
	var getDescriptor$1 = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;
	var EXISTS$2 = hasOwn$c(FunctionPrototype$3, 'name');
	var PROPER$1 = EXISTS$2 && (function something() {  }).name === 'something';
	var CONFIGURABLE$2 = EXISTS$2 && (!DESCRIPTORS$b || (DESCRIPTORS$b && getDescriptor$1(FunctionPrototype$3, 'name').configurable));
	var functionName$1 = {
	  EXISTS: EXISTS$2,
	  PROPER: PROPER$1,
	  CONFIGURABLE: CONFIGURABLE$2
	};

	var createNonEnumerableProperty$7 = createNonEnumerableProperty$c;
	var redefine$5 = function (target, key, value, options) {
	  if (options && options.enumerable) target[key] = value;
	  else createNonEnumerableProperty$7(target, key, value);
	};

	var fails$m = fails$u;
	var isCallable$h = isCallable$u;
	var create$2 = objectCreate;
	var getPrototypeOf$1 = objectGetPrototypeOf;
	var redefine$4 = redefine$5;
	var wellKnownSymbol$c = wellKnownSymbol$j;
	var ITERATOR$3 = wellKnownSymbol$c('iterator');
	var BUGGY_SAFARI_ITERATORS$1 = false;
	var IteratorPrototype$1, PrototypeOfArrayIteratorPrototype, arrayIterator;
	if ([].keys) {
	  arrayIterator = [].keys();
	  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
	  else {
	    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
	    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$1 = PrototypeOfArrayIteratorPrototype;
	  }
	}
	var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$1 == undefined || fails$m(function () {
	  var test = {};
	  return IteratorPrototype$1[ITERATOR$3].call(test) !== test;
	});
	if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$1 = {};
	else IteratorPrototype$1 = create$2(IteratorPrototype$1);
	if (!isCallable$h(IteratorPrototype$1[ITERATOR$3])) {
	  redefine$4(IteratorPrototype$1, ITERATOR$3, function () {
	    return this;
	  });
	}
	var iteratorsCore = {
	  IteratorPrototype: IteratorPrototype$1,
	  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
	};

	var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
	var classof$8 = classof$b;
	var objectToString$2 = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
	  return '[object ' + classof$8(this) + ']';
	};

	var TO_STRING_TAG_SUPPORT = toStringTagSupport;
	var defineProperty$e = objectDefineProperty$1.f;
	var createNonEnumerableProperty$6 = createNonEnumerableProperty$c;
	var hasOwn$b = hasOwnProperty_1$1;
	var toString$7 = objectToString$2;
	var wellKnownSymbol$b = wellKnownSymbol$j;
	var TO_STRING_TAG$1 = wellKnownSymbol$b('toStringTag');
	var setToStringTag$4 = function (it, TAG, STATIC, SET_METHOD) {
	  if (it) {
	    var target = STATIC ? it : it.prototype;
	    if (!hasOwn$b(target, TO_STRING_TAG$1)) {
	      defineProperty$e(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
	    }
	    if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
	      createNonEnumerableProperty$6(target, 'toString', toString$7);
	    }
	  }
	};

	var IteratorPrototype = iteratorsCore.IteratorPrototype;
	var create$1 = objectCreate;
	var createPropertyDescriptor$4 = createPropertyDescriptor$9;
	var setToStringTag$3 = setToStringTag$4;
	var Iterators$3 = iterators;
	var returnThis$1 = function () { return this; };
	var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
	  var TO_STRING_TAG = NAME + ' Iterator';
	  IteratorConstructor.prototype = create$1(IteratorPrototype, { next: createPropertyDescriptor$4(1, next) });
	  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false, true);
	  Iterators$3[TO_STRING_TAG] = returnThis$1;
	  return IteratorConstructor;
	};

	var $$i = _export$1;
	var call$8 = functionCall$1;
	var FunctionName = functionName$1;
	var createIteratorConstructor = createIteratorConstructor$1;
	var getPrototypeOf = objectGetPrototypeOf;
	var setToStringTag$2 = setToStringTag$4;
	var redefine$3 = redefine$5;
	var wellKnownSymbol$a = wellKnownSymbol$j;
	var Iterators$2 = iterators;
	var IteratorsCore = iteratorsCore;
	var PROPER_FUNCTION_NAME = FunctionName.PROPER;
	var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
	var ITERATOR$2 = wellKnownSymbol$a('iterator');
	var KEYS = 'keys';
	var VALUES = 'values';
	var ENTRIES = 'entries';
	var returnThis = function () { return this; };
	var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
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
	  var nativeIterator = IterablePrototype[ITERATOR$2]
	    || IterablePrototype['@@iterator']
	    || DEFAULT && IterablePrototype[DEFAULT];
	  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
	  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
	  var CurrentIteratorPrototype, methods, KEY;
	  if (anyNativeIterator) {
	    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
	    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
	      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
	      Iterators$2[TO_STRING_TAG] = returnThis;
	    }
	  }
	  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
	    {
	      INCORRECT_VALUES_NAME = true;
	      defaultIterator = function values() { return call$8(nativeIterator, this); };
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
	        redefine$3(IterablePrototype, KEY, methods[KEY]);
	      }
	    } else $$i({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
	  }
	  if ((FORCED) && IterablePrototype[ITERATOR$2] !== defaultIterator) {
	    redefine$3(IterablePrototype, ITERATOR$2, defaultIterator, { name: DEFAULT });
	  }
	  Iterators$2[NAME] = defaultIterator;
	  return methods;
	};

	var toIndexedObject$6 = toIndexedObject$b;
	var Iterators$1 = iterators;
	var InternalStateModule$5 = internalState$1;
	var defineIterator$2 = defineIterator$3;
	var ARRAY_ITERATOR = 'Array Iterator';
	var setInternalState$4 = InternalStateModule$5.set;
	var getInternalState$3 = InternalStateModule$5.getterFor(ARRAY_ITERATOR);
	defineIterator$2(Array, 'Array', function (iterated, kind) {
	  setInternalState$4(this, {
	    type: ARRAY_ITERATOR,
	    target: toIndexedObject$6(iterated),
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
	    return { value: undefined, done: true };
	  }
	  if (kind == 'keys') return { value: index, done: false };
	  if (kind == 'values') return { value: target[index], done: false };
	  return { value: [index, target[index]], done: false };
	}, 'values');
	Iterators$1.Arguments = Iterators$1.Array;

	var global$C = global$11;
	var nativePromiseConstructor = global$C.Promise;

	var redefine$2 = redefine$5;
	var redefineAll$2 = function (target, src, options) {
	  for (var key in src) {
	    if (options && options.unsafe && target[key]) target[key] = src[key];
	    else redefine$2(target, key, src[key], options);
	  } return target;
	};

	var getBuiltIn$9 = getBuiltIn$e;
	var definePropertyModule$3 = objectDefineProperty$1;
	var wellKnownSymbol$9 = wellKnownSymbol$j;
	var DESCRIPTORS$a = descriptors$1;
	var SPECIES$4 = wellKnownSymbol$9('species');
	var setSpecies$2 = function (CONSTRUCTOR_NAME) {
	  var Constructor = getBuiltIn$9(CONSTRUCTOR_NAME);
	  var defineProperty = definePropertyModule$3.f;
	  if (DESCRIPTORS$a && Constructor && !Constructor[SPECIES$4]) {
	    defineProperty(Constructor, SPECIES$4, {
	      configurable: true,
	      get: function () { return this; }
	    });
	  }
	};

	var global$B = global$11;
	var isPrototypeOf$4 = objectIsPrototypeOf$1;
	var TypeError$b = global$B.TypeError;
	var anInstance$3 = function (it, Prototype) {
	  if (isPrototypeOf$4(Prototype, it)) return it;
	  throw TypeError$b('Incorrect invocation');
	};

	var wellKnownSymbol$8 = wellKnownSymbol$j;
	var ITERATOR$1 = wellKnownSymbol$8('iterator');
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
	  iteratorWithReturn[ITERATOR$1] = function () {
	    return this;
	  };
	  Array.from(iteratorWithReturn, function () { throw 2; });
	} catch (error) {  }
	var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
	  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
	  var ITERATION_SUPPORT = false;
	  try {
	    var object = {};
	    object[ITERATOR$1] = function () {
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

	var uncurryThis$j = functionUncurryThis$1;
	var fails$l = fails$u;
	var isCallable$g = isCallable$u;
	var classof$7 = classof$b;
	var getBuiltIn$8 = getBuiltIn$e;
	var inspectSource$4 = inspectSource$6;
	var noop = function () {  };
	var empty = [];
	var construct = getBuiltIn$8('Reflect', 'construct');
	var constructorRegExp = /^\s*(?:class|function)\b/;
	var exec$2 = uncurryThis$j(constructorRegExp.exec);
	var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
	var isConstructorModern = function (argument) {
	  if (!isCallable$g(argument)) return false;
	  try {
	    construct(noop, empty, argument);
	    return true;
	  } catch (error) {
	    return false;
	  }
	};
	var isConstructorLegacy = function (argument) {
	  if (!isCallable$g(argument)) return false;
	  switch (classof$7(argument)) {
	    case 'AsyncFunction':
	    case 'GeneratorFunction':
	    case 'AsyncGeneratorFunction': return false;
	  } return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource$4(argument));
	};
	var isConstructor$2 = !construct || fails$l(function () {
	  var called;
	  return isConstructorModern(isConstructorModern.call)
	    || !isConstructorModern(Object)
	    || !isConstructorModern(function () { called = true; })
	    || called;
	}) ? isConstructorLegacy : isConstructorModern;

	var global$A = global$11;
	var isConstructor$1 = isConstructor$2;
	var tryToString$2 = tryToString$6;
	var TypeError$a = global$A.TypeError;
	var aConstructor$1 = function (argument) {
	  if (isConstructor$1(argument)) return argument;
	  throw TypeError$a(tryToString$2(argument) + ' is not a constructor');
	};

	var anObject$4 = anObject$d;
	var aConstructor = aConstructor$1;
	var wellKnownSymbol$7 = wellKnownSymbol$j;
	var SPECIES$3 = wellKnownSymbol$7('species');
	var speciesConstructor$2 = function (O, defaultConstructor) {
	  var C = anObject$4(O).constructor;
	  var S;
	  return C === undefined || (S = anObject$4(C)[SPECIES$3]) == undefined ? defaultConstructor : aConstructor(S);
	};

	var userAgent$4 = engineUserAgent$1;
	var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$4);

	var classof$6 = classofRaw$2;
	var global$z = global$11;
	var engineIsNode = classof$6(global$z.process) == 'process';

	var global$y = global$11;
	var apply$5 = functionApply;
	var bind$a = functionBindContext;
	var isCallable$f = isCallable$u;
	var hasOwn$a = hasOwnProperty_1$1;
	var fails$k = fails$u;
	var html = html$2;
	var arraySlice$2 = arraySlice$4;
	var createElement$1 = documentCreateElement$2;
	var IS_IOS$1 = engineIsIos;
	var IS_NODE$2 = engineIsNode;
	var set$1 = global$y.setImmediate;
	var clear = global$y.clearImmediate;
	var process$4 = global$y.process;
	var Dispatch = global$y.Dispatch;
	var Function$2 = global$y.Function;
	var MessageChannel = global$y.MessageChannel;
	var String$3 = global$y.String;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var location, defer, channel, port;
	try {
	  location = global$y.location;
	} catch (error) {  }
	var run = function (id) {
	  if (hasOwn$a(queue, id)) {
	    var fn = queue[id];
	    delete queue[id];
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
	  global$y.postMessage(String$3(id), location.protocol + '//' + location.host);
	};
	if (!set$1 || !clear) {
	  set$1 = function setImmediate(fn) {
	    var args = arraySlice$2(arguments, 1);
	    queue[++counter] = function () {
	      apply$5(isCallable$f(fn) ? fn : Function$2(fn), undefined, args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clear = function clearImmediate(id) {
	    delete queue[id];
	  };
	  if (IS_NODE$2) {
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
	    global$y.addEventListener &&
	    isCallable$f(global$y.postMessage) &&
	    !global$y.importScripts &&
	    location && location.protocol !== 'file:' &&
	    !fails$k(post)
	  ) {
	    defer = post;
	    global$y.addEventListener('message', listener, false);
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
	var global$x = global$11;
	var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$3) && global$x.Pebble !== undefined;

	var userAgent$2 = engineUserAgent$1;
	var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent$2);

	var global$w = global$11;
	var bind$9 = functionBindContext;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor$1.f;
	var macrotask = task$1.set;
	var IS_IOS = engineIsIos;
	var IS_IOS_PEBBLE = engineIsIosPebble;
	var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
	var IS_NODE$1 = engineIsNode;
	var MutationObserver = global$w.MutationObserver || global$w.WebKitMutationObserver;
	var document$3 = global$w.document;
	var process$3 = global$w.process;
	var Promise$1 = global$w.Promise;
	var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$w, 'queueMicrotask');
	var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
	var flush, head, last, notify$1, toggle, node, promise$5, then;
	if (!queueMicrotask) {
	  flush = function () {
	    var parent, fn;
	    if (IS_NODE$1 && (parent = process$3.domain)) parent.exit();
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
	  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$3) {
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
	  } else if (IS_NODE$1) {
	    notify$1 = function () {
	      process$3.nextTick(flush);
	    };
	  } else {
	    macrotask = bind$9(macrotask, global$w);
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

	var newPromiseCapability$2 = {};

	var aCallable$5 = aCallable$9;
	var PromiseCapability = function (C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = aCallable$5(resolve);
	  this.reject = aCallable$5(reject);
	};
	newPromiseCapability$2.f = function (C) {
	  return new PromiseCapability(C);
	};

	var anObject$3 = anObject$d;
	var isObject$j = isObject$q;
	var newPromiseCapability$1 = newPromiseCapability$2;
	var promiseResolve$3 = function (C, x) {
	  anObject$3(C);
	  if (isObject$j(x) && x.constructor === C) return x;
	  var promiseCapability = newPromiseCapability$1.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var global$v = global$11;
	var hostReportErrors$1 = function (a, b) {
	  var console = global$v.console;
	  if (console && console.error) {
	    arguments.length == 1 ? console.error(a) : console.error(a, b);
	  }
	};

	var perform$4 = function (exec) {
	  try {
	    return { error: false, value: exec() };
	  } catch (error) {
	    return { error: true, value: error };
	  }
	};

	var engineIsBrowser = typeof window == 'object';

	var $$h = _export$1;
	var IS_PURE = isPure;
	var global$u = global$11;
	var getBuiltIn$7 = getBuiltIn$e;
	var call$7 = functionCall$1;
	var NativePromise$1 = nativePromiseConstructor;
	var redefineAll$1 = redefineAll$2;
	var setToStringTag$1 = setToStringTag$4;
	var setSpecies$1 = setSpecies$2;
	var aCallable$4 = aCallable$9;
	var isCallable$e = isCallable$u;
	var isObject$i = isObject$q;
	var anInstance$2 = anInstance$3;
	var inspectSource$3 = inspectSource$6;
	var iterate$4 = iterate$6;
	var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
	var speciesConstructor$1 = speciesConstructor$2;
	var task = task$1.set;
	var microtask = microtask$1;
	var promiseResolve$2 = promiseResolve$3;
	var hostReportErrors = hostReportErrors$1;
	var newPromiseCapabilityModule$3 = newPromiseCapability$2;
	var perform$3 = perform$4;
	var InternalStateModule$4 = internalState$1;
	var isForced$2 = isForced_1$1;
	var wellKnownSymbol$6 = wellKnownSymbol$j;
	var IS_BROWSER = engineIsBrowser;
	var IS_NODE = engineIsNode;
	var V8_VERSION$3 = engineV8Version$1;
	var SPECIES$2 = wellKnownSymbol$6('species');
	var PROMISE = 'Promise';
	var getInternalState$2 = InternalStateModule$4.get;
	var setInternalState$3 = InternalStateModule$4.set;
	var getInternalPromiseState = InternalStateModule$4.getterFor(PROMISE);
	var NativePromisePrototype = NativePromise$1 && NativePromise$1.prototype;
	var PromiseConstructor = NativePromise$1;
	var PromisePrototype = NativePromisePrototype;
	var TypeError$9 = global$u.TypeError;
	var document$2 = global$u.document;
	var process$2 = global$u.process;
	var newPromiseCapability = newPromiseCapabilityModule$3.f;
	var newGenericPromiseCapability = newPromiseCapability;
	var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global$u.dispatchEvent);
	var NATIVE_REJECTION_EVENT = isCallable$e(global$u.PromiseRejectionEvent);
	var UNHANDLED_REJECTION = 'unhandledrejection';
	var REJECTION_HANDLED = 'rejectionhandled';
	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	var HANDLED = 1;
	var UNHANDLED = 2;
	var SUBCLASSING = false;
	var Internal, OwnPromiseCapability, PromiseWrapper;
	var FORCED$3 = isForced$2(PROMISE, function () {
	  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource$3(PromiseConstructor);
	  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor);
	  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION$3 === 66) return true;
	  if (!PromisePrototype['finally']) return true;
	  if (V8_VERSION$3 >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
	  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
	  var FakePromise = function (exec) {
	    exec(function () {  }, function () {  });
	  };
	  var constructor = promise.constructor = {};
	  constructor[SPECIES$2] = FakePromise;
	  SUBCLASSING = promise.then(function () {  }) instanceof FakePromise;
	  if (!SUBCLASSING) return true;
	  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
	});
	var INCORRECT_ITERATION = FORCED$3 || !checkCorrectnessOfIteration(function (iterable) {
	  PromiseConstructor.all(iterable)['catch'](function () {  });
	});
	var isThenable = function (it) {
	  var then;
	  return isObject$i(it) && isCallable$e(then = it.then) ? then : false;
	};
	var notify = function (state, isReject) {
	  if (state.notified) return;
	  state.notified = true;
	  var chain = state.reactions;
	  microtask(function () {
	    var value = state.value;
	    var ok = state.state == FULFILLED;
	    var index = 0;
	    while (chain.length > index) {
	      var reaction = chain[index++];
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
	            call$7(then, result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (error) {
	        if (domain && !exited) domain.exit();
	        reject(error);
	      }
	    }
	    state.reactions = [];
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
	  if (!NATIVE_REJECTION_EVENT && (handler = global$u['on' + name])) handler(event);
	  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
	};
	var onUnhandled = function (state) {
	  call$7(task, global$u, function () {
	    var promise = state.facade;
	    var value = state.value;
	    var IS_UNHANDLED = isUnhandled(state);
	    var result;
	    if (IS_UNHANDLED) {
	      result = perform$3(function () {
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
	  call$7(task, global$u, function () {
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
	          call$7(then, value,
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
	if (FORCED$3) {
	  PromiseConstructor = function Promise(executor) {
	    anInstance$2(this, PromisePrototype);
	    aCallable$4(executor);
	    call$7(Internal, this);
	    var state = getInternalState$2(this);
	    try {
	      executor(bind$8(internalResolve, state), bind$8(internalReject, state));
	    } catch (error) {
	      internalReject(state, error);
	    }
	  };
	  PromisePrototype = PromiseConstructor.prototype;
	  Internal = function Promise(executor) {
	    setInternalState$3(this, {
	      type: PROMISE,
	      done: false,
	      notified: false,
	      parent: false,
	      reactions: [],
	      rejection: false,
	      state: PENDING,
	      value: undefined
	    });
	  };
	  Internal.prototype = redefineAll$1(PromisePrototype, {
	    then: function then(onFulfilled, onRejected) {
	      var state = getInternalPromiseState(this);
	      var reactions = state.reactions;
	      var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
	      reaction.ok = isCallable$e(onFulfilled) ? onFulfilled : true;
	      reaction.fail = isCallable$e(onRejected) && onRejected;
	      reaction.domain = IS_NODE ? process$2.domain : undefined;
	      state.parent = true;
	      reactions[reactions.length] = reaction;
	      if (state.state != PENDING) notify(state, false);
	      return reaction.promise;
	    },
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    var state = getInternalState$2(promise);
	    this.promise = promise;
	    this.resolve = bind$8(internalResolve, state);
	    this.reject = bind$8(internalReject, state);
	  };
	  newPromiseCapabilityModule$3.f = newPromiseCapability = function (C) {
	    return C === PromiseConstructor || C === PromiseWrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}
	$$h({ global: true, wrap: true, forced: FORCED$3 }, {
	  Promise: PromiseConstructor
	});
	setToStringTag$1(PromiseConstructor, PROMISE, false, true);
	setSpecies$1(PROMISE);
	PromiseWrapper = getBuiltIn$7(PROMISE);
	$$h({ target: PROMISE, stat: true, forced: FORCED$3 }, {
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    call$7(capability.reject, undefined, r);
	    return capability.promise;
	  }
	});
	$$h({ target: PROMISE, stat: true, forced: IS_PURE  }, {
	  resolve: function resolve(x) {
	    return promiseResolve$2(this === PromiseWrapper ? PromiseConstructor : this, x);
	  }
	});
	$$h({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aCallable$4(C.resolve);
	      var values = [];
	      var counter = 0;
	      var remaining = 1;
	      iterate$4(iterable, function (promise) {
	        var index = counter++;
	        var alreadyCalled = false;
	        remaining++;
	        call$7($promiseResolve, C, promise).then(function (value) {
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
	  },
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = perform$3(function () {
	      var $promiseResolve = aCallable$4(C.resolve);
	      iterate$4(iterable, function (promise) {
	        call$7($promiseResolve, C, promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.error) reject(result.value);
	    return capability.promise;
	  }
	});

	var $$g = _export$1;
	var call$6 = functionCall$1;
	var aCallable$3 = aCallable$9;
	var newPromiseCapabilityModule$2 = newPromiseCapability$2;
	var perform$2 = perform$4;
	var iterate$3 = iterate$6;
	$$g({ target: 'Promise', stat: true }, {
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
	        call$6(promiseResolve, C, promise).then(function (value) {
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

	var $$f = _export$1;
	var aCallable$2 = aCallable$9;
	var getBuiltIn$6 = getBuiltIn$e;
	var call$5 = functionCall$1;
	var newPromiseCapabilityModule$1 = newPromiseCapability$2;
	var perform$1 = perform$4;
	var iterate$2 = iterate$6;
	var PROMISE_ANY_ERROR = 'No one promise resolved';
	$$f({ target: 'Promise', stat: true }, {
	  any: function any(iterable) {
	    var C = this;
	    var AggregateError = getBuiltIn$6('AggregateError');
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
	        call$5(promiseResolve, C, promise).then(function (value) {
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

	var $$e = _export$1;
	var NativePromise = nativePromiseConstructor;
	var fails$j = fails$u;
	var getBuiltIn$5 = getBuiltIn$e;
	var isCallable$d = isCallable$u;
	var speciesConstructor = speciesConstructor$2;
	var promiseResolve$1 = promiseResolve$3;
	var NON_GENERIC = !!NativePromise && fails$j(function () {
	  NativePromise.prototype['finally'].call({ then: function () {  } }, function () {  });
	});
	$$e({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
	  'finally': function (onFinally) {
	    var C = speciesConstructor(this, getBuiltIn$5('Promise'));
	    var isFunction = isCallable$d(onFinally);
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

	var uncurryThis$i = functionUncurryThis$1;
	var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
	var toString$6 = toString$9;
	var requireObjectCoercible$4 = requireObjectCoercible$7;
	var charAt$2 = uncurryThis$i(''.charAt);
	var charCodeAt$1 = uncurryThis$i(''.charCodeAt);
	var stringSlice$1 = uncurryThis$i(''.slice);
	var createMethod$3 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = toString$6(requireObjectCoercible$4($this));
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
	var toString$5 = toString$9;
	var InternalStateModule$3 = internalState$1;
	var defineIterator$1 = defineIterator$3;
	var STRING_ITERATOR = 'String Iterator';
	var setInternalState$2 = InternalStateModule$3.set;
	var getInternalState$1 = InternalStateModule$3.getterFor(STRING_ITERATOR);
	defineIterator$1(String, 'String', function (iterated) {
	  setInternalState$2(this, {
	    type: STRING_ITERATOR,
	    string: toString$5(iterated),
	    index: 0
	  });
	}, function next() {
	  var state = getInternalState$1(this);
	  var string = state.string;
	  var index = state.index;
	  var point;
	  if (index >= string.length) return { value: undefined, done: true };
	  point = charAt$1(string, index);
	  state.index += point.length;
	  return { value: point, done: false };
	});

	var path$a = path$d;
	var promise$4 = path$a.Promise;

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
	var global$t = global$11;
	var classof$5 = classof$b;
	var createNonEnumerableProperty$5 = createNonEnumerableProperty$c;
	var Iterators = iterators;
	var wellKnownSymbol$5 = wellKnownSymbol$j;
	var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
	for (var COLLECTION_NAME in DOMIterables$1) {
	  var Collection = global$t[COLLECTION_NAME];
	  var CollectionPrototype = Collection && Collection.prototype;
	  if (CollectionPrototype && classof$5(CollectionPrototype) !== TO_STRING_TAG) {
	    createNonEnumerableProperty$5(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
	  }
	  Iterators[COLLECTION_NAME] = Iterators.Array;
	}

	var parent$c = promise$4;
	var promise$3 = parent$c;

	var $$d = _export$1;
	var newPromiseCapabilityModule = newPromiseCapability$2;
	var perform = perform$4;
	$$d({ target: 'Promise', stat: true }, {
	  'try': function (callbackfn) {
	    var promiseCapability = newPromiseCapabilityModule.f(this);
	    var result = perform(callbackfn);
	    (result.error ? promiseCapability.reject : promiseCapability.resolve)(result.value);
	    return promiseCapability.promise;
	  }
	});

	var parent$b = promise$3;
	var promise$2 = parent$b;

	var promise$1 = promise$2;

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
	    promise$1.resolve(value).then(_next, _throw);
	  }
	}
	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new promise$1(function (resolve, reject) {
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

	var defineProperty$d = {exports: {}};

	var $$c = _export$1;
	var DESCRIPTORS$9 = descriptors$1;
	var objectDefinePropertyModile = objectDefineProperty$1;
	$$c({ target: 'Object', stat: true, forced: !DESCRIPTORS$9, sham: !DESCRIPTORS$9 }, {
	  defineProperty: objectDefinePropertyModile.f
	});

	var path$9 = path$d;
	var Object$4 = path$9.Object;
	var defineProperty$c = defineProperty$d.exports = function defineProperty(it, key, desc) {
	  return Object$4.defineProperty(it, key, desc);
	};
	if (Object$4.defineProperty.sham) defineProperty$c.sham = true;

	var parent$a = defineProperty$d.exports;
	var defineProperty$b = parent$a;

	var parent$9 = defineProperty$b;
	var defineProperty$a = parent$9;

	var defineProperty$9 = defineProperty$a;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    defineProperty$9(target, descriptor.key, descriptor);
	  }
	}
	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  defineProperty$9(Constructor, "prototype", {
	    writable: false
	  });
	  return Constructor;
	}

	var runtime = {exports: {}};

	(function (module) {
	var runtime = (function (exports) {
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1;
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	    return generator;
	  }
	  exports.wrap = wrap;
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	  var ContinueSentinel = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var IteratorPrototype = {};
	  define(IteratorPrototype, iteratorSymbol, function () {
	    return this;
	  });
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = GeneratorFunctionPrototype;
	  define(Gp, "constructor", GeneratorFunctionPrototype);
	  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }
	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };
	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }
	    var previousPromise;
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	      return previousPromise =
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	    this._invoke = enqueue;
	  }
	  defineIteratorMethods(AsyncIterator.prototype);
	  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
	    return this;
	  });
	  exports.AsyncIterator = AsyncIterator;
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );
	    return exports.isGeneratorFunction(outerFn)
	      ? iter
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	        return doneResult();
	      }
	      context.method = method;
	      context.arg = arg;
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	        if (context.method === "next") {
	          context.sent = context._sent = context.arg;
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	          context.dispatchException(context.arg);
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	        state = GenStateExecuting;
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	          return {
	            value: record.arg,
	            done: context.done
	          };
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      context.delegate = null;
	      if (context.method === "throw") {
	        if (delegate.iterator["return"]) {
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);
	          if (context.method === "throw") {
	            return ContinueSentinel;
	          }
	        }
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	      return ContinueSentinel;
	    }
	    var record = tryCatch(method, delegate.iterator, context.arg);
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	    var info = record.arg;
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	    if (info.done) {
	      context[delegate.resultName] = info.value;
	      context.next = delegate.nextLoc;
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }
	    } else {
	      return info;
	    }
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	  defineIteratorMethods(Gp);
	  define(Gp, toStringTagSymbol, "Generator");
	  define(Gp, iteratorSymbol, function() {
	    return this;
	  });
	  define(Gp, "toString", function() {
	    return "[object Generator]";
	  });
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	    this.tryEntries.push(entry);
	  }
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	  function Context(tryLocsList) {
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	      next.done = true;
	      return next;
	    };
	  };
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	          next.value = undefined$1;
	          next.done = true;
	          return next;
	        };
	        return next.next = next;
	      }
	    }
	    return { next: doneResult };
	  }
	  exports.values = values;
	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }
	  Context.prototype = {
	    constructor: Context,
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;
	      this.method = "next";
	      this.arg = undefined$1;
	      this.tryEntries.forEach(resetTryEntry);
	      if (!skipTempReset) {
	        for (var name in this) {
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },
	    stop: function() {
	      this.done = true;
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	      return this.rval;
	    },
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        if (caught) {
	          context.method = "next";
	          context.arg = undefined$1;
	        }
	        return !! caught;
	      }
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	        if (entry.tryLoc === "root") {
	          return handle("end");
	        }
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        finallyEntry = null;
	      }
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	      return this.complete(record);
	    },
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	      return ContinueSentinel;
	    },
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	      if (this.method === "next") {
	        this.arg = undefined$1;
	      }
	      return ContinueSentinel;
	    }
	  };
	  return exports;
	}(
	  module.exports 
	));
	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  if (typeof globalThis === "object") {
	    globalThis.regeneratorRuntime = runtime;
	  } else {
	    Function("r", "regeneratorRuntime = r")(runtime);
	  }
	}
	}(runtime));

	var regenerator = runtime.exports;

	var fails$i = fails$u;
	var freezing = !fails$i(function () {
	  return Object.isExtensible(Object.preventExtensions({}));
	});

	var internalMetadata = {exports: {}};

	var objectGetOwnPropertyNamesExternal = {};

	var classof$4 = classofRaw$2;
	var toIndexedObject$5 = toIndexedObject$b;
	var $getOwnPropertyNames = objectGetOwnPropertyNames$1.f;
	var arraySlice$1 = arraySlice$4;
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	var getWindowNames = function (it) {
	  try {
	    return $getOwnPropertyNames(it);
	  } catch (error) {
	    return arraySlice$1(windowNames);
	  }
	};
	objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
	  return windowNames && classof$4(it) == 'Window'
	    ? getWindowNames(it)
	    : $getOwnPropertyNames(toIndexedObject$5(it));
	};

	var fails$h = fails$u;
	var arrayBufferNonExtensible = fails$h(function () {
	  if (typeof ArrayBuffer == 'function') {
	    var buffer = new ArrayBuffer(8);
	    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
	  }
	});

	var fails$g = fails$u;
	var isObject$h = isObject$q;
	var classof$3 = classofRaw$2;
	var ARRAY_BUFFER_NON_EXTENSIBLE = arrayBufferNonExtensible;
	var $isExtensible = Object.isExtensible;
	var FAILS_ON_PRIMITIVES$2 = fails$g(function () { $isExtensible(1); });
	var objectIsExtensible = (FAILS_ON_PRIMITIVES$2 || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
	  if (!isObject$h(it)) return false;
	  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof$3(it) == 'ArrayBuffer') return false;
	  return $isExtensible ? $isExtensible(it) : true;
	} : $isExtensible;

	var $$b = _export$1;
	var uncurryThis$h = functionUncurryThis$1;
	var hiddenKeys$4 = hiddenKeys$9;
	var isObject$g = isObject$q;
	var hasOwn$9 = hasOwnProperty_1$1;
	var defineProperty$8 = objectDefineProperty$1.f;
	var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames$1;
	var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
	var isExtensible = objectIsExtensible;
	var uid$3 = uid$6;
	var FREEZING$1 = freezing;
	var REQUIRED = false;
	var METADATA = uid$3('meta');
	var id$1 = 0;
	var setMetadata = function (it) {
	  defineProperty$8(it, METADATA, { value: {
	    objectID: 'O' + id$1++,
	    weakData: {}
	  } });
	};
	var fastKey$1 = function (it, create) {
	  if (!isObject$g(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
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
	  var splice = uncurryThis$h([].splice);
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
	    $$b({ target: 'Object', stat: true, forced: true }, {
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

	var $$a = _export$1;
	var FREEZING = freezing;
	var fails$f = fails$u;
	var isObject$f = isObject$q;
	var onFreeze = internalMetadata.exports.onFreeze;
	var $freeze = Object.freeze;
	var FAILS_ON_PRIMITIVES$1 = fails$f(function () { $freeze(1); });
	$$a({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1, sham: !FREEZING }, {
	  freeze: function freeze(it) {
	    return $freeze && isObject$f(it) ? $freeze(onFreeze(it)) : it;
	  }
	});

	var path$8 = path$d;
	var freeze$2 = path$8.Object.freeze;

	var parent$8 = freeze$2;
	var freeze$1 = parent$8;

	var freeze = freeze$1;

	var classof$2 = classofRaw$2;
	var isArray$8 = Array.isArray || function isArray(argument) {
	  return classof$2(argument) == 'Array';
	};

	var global$s = global$11;
	var isArray$7 = isArray$8;
	var isConstructor = isConstructor$2;
	var isObject$e = isObject$q;
	var wellKnownSymbol$4 = wellKnownSymbol$j;
	var SPECIES$1 = wellKnownSymbol$4('species');
	var Array$2 = global$s.Array;
	var arraySpeciesConstructor$1 = function (originalArray) {
	  var C;
	  if (isArray$7(originalArray)) {
	    C = originalArray.constructor;
	    if (isConstructor(C) && (C === Array$2 || isArray$7(C.prototype))) C = undefined;
	    else if (isObject$e(C)) {
	      C = C[SPECIES$1];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array$2 : C;
	};

	var arraySpeciesConstructor = arraySpeciesConstructor$1;
	var arraySpeciesCreate$2 = function (originalArray, length) {
	  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
	};

	var bind$7 = functionBindContext;
	var uncurryThis$g = functionUncurryThis$1;
	var IndexedObject$2 = indexedObject$1;
	var toObject$4 = toObject$7;
	var lengthOfArrayLike$3 = lengthOfArrayLike$6;
	var arraySpeciesCreate$1 = arraySpeciesCreate$2;
	var push$1 = uncurryThis$g([].push);
	var createMethod$2 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var IS_FILTER_REJECT = TYPE == 7;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject$4($this);
	    var self = IndexedObject$2(O);
	    var boundFunction = bind$7(callbackfn, that);
	    var length = lengthOfArrayLike$3(self);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate$1;
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
	          case 2: push$1(target, value);
	        } else switch (TYPE) {
	          case 4: return false;
	          case 7: push$1(target, value);
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

	var $$9 = _export$1;
	var global$r = global$11;
	var InternalMetadataModule = internalMetadata.exports;
	var fails$e = fails$u;
	var createNonEnumerableProperty$4 = createNonEnumerableProperty$c;
	var iterate$1 = iterate$6;
	var anInstance$1 = anInstance$3;
	var isCallable$c = isCallable$u;
	var isObject$d = isObject$q;
	var setToStringTag = setToStringTag$4;
	var defineProperty$7 = objectDefineProperty$1.f;
	var forEach$7 = arrayIteration.forEach;
	var DESCRIPTORS$8 = descriptors$1;
	var InternalStateModule$2 = internalState$1;
	var setInternalState$1 = InternalStateModule$2.set;
	var internalStateGetterFor$1 = InternalStateModule$2.getterFor;
	var collection$1 = function (CONSTRUCTOR_NAME, wrapper, common) {
	  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
	  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
	  var ADDER = IS_MAP ? 'set' : 'add';
	  var NativeConstructor = global$r[CONSTRUCTOR_NAME];
	  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
	  var exported = {};
	  var Constructor;
	  if (!DESCRIPTORS$8 || !isCallable$c(NativeConstructor)
	    || !(IS_WEAK || NativePrototype.forEach && !fails$e(function () { new NativeConstructor().entries().next(); }))
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
	    forEach$7(['add', 'clear', 'delete', 'forEach', 'get', 'has', 'set', 'keys', 'values', 'entries'], function (KEY) {
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if (KEY in NativePrototype && !(IS_WEAK && KEY == 'clear')) {
	        createNonEnumerableProperty$4(Prototype, KEY, function (a, b) {
	          var collection = getInternalState(this).collection;
	          if (!IS_ADDER && IS_WEAK && !isObject$d(a)) return KEY == 'get' ? undefined : false;
	          var result = collection[KEY](a === 0 ? 0 : a, b);
	          return IS_ADDER ? this : result;
	        });
	      }
	    });
	    IS_WEAK || defineProperty$7(Prototype, 'size', {
	      configurable: true,
	      get: function () {
	        return getInternalState(this).collection.size;
	      }
	    });
	  }
	  setToStringTag(Constructor, CONSTRUCTOR_NAME, false, true);
	  exported[CONSTRUCTOR_NAME] = Constructor;
	  $$9({ global: true, forced: true }, exported);
	  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
	  return Constructor;
	};

	var defineProperty$6 = objectDefineProperty$1.f;
	var create = objectCreate;
	var redefineAll = redefineAll$2;
	var bind$6 = functionBindContext;
	var anInstance = anInstance$3;
	var iterate = iterate$6;
	var defineIterator = defineIterator$3;
	var setSpecies = setSpecies$2;
	var DESCRIPTORS$7 = descriptors$1;
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
	      if (!DESCRIPTORS$7) that.size = 0;
	      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
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
	        if (DESCRIPTORS$7) state.size++;
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
	    redefineAll(Prototype, {
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
	        if (DESCRIPTORS$7) state.size = 0;
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
	          if (DESCRIPTORS$7) state.size--;
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
	    redefineAll(Prototype, IS_MAP ? {
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
	    if (DESCRIPTORS$7) defineProperty$6(Prototype, 'size', {
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
	        return { value: undefined, done: true };
	      }
	      if (kind == 'keys') return { value: entry.key, done: false };
	      if (kind == 'values') return { value: entry.value, done: false };
	      return { value: [entry.key, entry.value], done: false };
	    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);
	    setSpecies(CONSTRUCTOR_NAME);
	  }
	};

	var collection = collection$1;
	var collectionStrong = collectionStrong$1;
	collection('Map', function (init) {
	  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
	}, collectionStrong);

	var path$7 = path$d;
	var map$6 = path$7.Map;

	var parent$7 = map$6;
	var map$5 = parent$7;

	var map$4 = map$5;

	var promise = promise$3;

	var toPropertyKey$3 = toPropertyKey$6;
	var definePropertyModule$2 = objectDefineProperty$1;
	var createPropertyDescriptor$3 = createPropertyDescriptor$9;
	var createProperty$1 = function (object, key, value) {
	  var propertyKey = toPropertyKey$3(key);
	  if (propertyKey in object) definePropertyModule$2.f(object, propertyKey, createPropertyDescriptor$3(0, value));
	  else object[propertyKey] = value;
	};

	var fails$d = fails$u;
	var wellKnownSymbol$3 = wellKnownSymbol$j;
	var V8_VERSION$2 = engineV8Version$1;
	var SPECIES = wellKnownSymbol$3('species');
	var arrayMethodHasSpeciesSupport$2 = function (METHOD_NAME) {
	  return V8_VERSION$2 >= 51 || !fails$d(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var $$8 = _export$1;
	var global$q = global$11;
	var fails$c = fails$u;
	var isArray$6 = isArray$8;
	var isObject$c = isObject$q;
	var toObject$3 = toObject$7;
	var lengthOfArrayLike$2 = lengthOfArrayLike$6;
	var createProperty = createProperty$1;
	var arraySpeciesCreate = arraySpeciesCreate$2;
	var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$2;
	var wellKnownSymbol$2 = wellKnownSymbol$j;
	var V8_VERSION$1 = engineV8Version$1;
	var IS_CONCAT_SPREADABLE = wellKnownSymbol$2('isConcatSpreadable');
	var MAX_SAFE_INTEGER$2 = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
	var TypeError$8 = global$q.TypeError;
	var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$c(function () {
	  var array = [];
	  array[IS_CONCAT_SPREADABLE] = false;
	  return array.concat()[0] !== array;
	});
	var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('concat');
	var isConcatSpreadable = function (O) {
	  if (!isObject$c(O)) return false;
	  var spreadable = O[IS_CONCAT_SPREADABLE];
	  return spreadable !== undefined ? !!spreadable : isArray$6(O);
	};
	var FORCED$2 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
	$$8({ target: 'Array', proto: true, forced: FORCED$2 }, {
	  concat: function concat(arg) {
	    var O = toObject$3(this);
	    var A = arraySpeciesCreate(O, 0);
	    var n = 0;
	    var i, k, length, len, E;
	    for (i = -1, length = arguments.length; i < length; i++) {
	      E = i === -1 ? O : arguments[i];
	      if (isConcatSpreadable(E)) {
	        len = lengthOfArrayLike$2(E);
	        if (n + len > MAX_SAFE_INTEGER$2) throw TypeError$8(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
	      } else {
	        if (n >= MAX_SAFE_INTEGER$2) throw TypeError$8(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
	        createProperty(A, n++, E);
	      }
	    }
	    A.length = n;
	    return A;
	  }
	});

	var path$6 = path$d;
	var entryVirtual$3 = function (CONSTRUCTOR) {
	  return path$6[CONSTRUCTOR + 'Prototype'];
	};

	var entryVirtual$2 = entryVirtual$3;
	var concat$5 = entryVirtual$2('Array').concat;

	var isPrototypeOf$3 = objectIsPrototypeOf$1;
	var method$2 = concat$5;
	var ArrayPrototype$2 = Array.prototype;
	var concat$4 = function (it) {
	  var own = it.concat;
	  return it === ArrayPrototype$2 || (isPrototypeOf$3(ArrayPrototype$2, it) && own === ArrayPrototype$2.concat) ? method$2 : own;
	};

	var parent$6 = concat$4;
	var concat$3 = parent$6;

	var concat$2 = concat$3;

	var $$7 = _export$1;
	var global$p = global$11;
	var apply$4 = functionApply;
	var isCallable$b = isCallable$u;
	var userAgent$1 = engineUserAgent$1;
	var arraySlice = arraySlice$4;
	var MSIE = /MSIE .\./.test(userAgent$1);
	var Function$1 = global$p.Function;
	var wrap = function (scheduler) {
	  return function (handler, timeout ) {
	    var boundArgs = arguments.length > 2;
	    var args = boundArgs ? arraySlice(arguments, 2) : undefined;
	    return scheduler(boundArgs ? function () {
	      apply$4(isCallable$b(handler) ? handler : Function$1(handler), this, args);
	    } : handler, timeout);
	  };
	};
	$$7({ global: true, bind: true, forced: MSIE }, {
	  setTimeout: wrap(global$p.setTimeout),
	  setInterval: wrap(global$p.setInterval)
	});

	var path$5 = path$d;
	var setInterval$1 = path$5.setInterval;

	var setInterval = setInterval$1;

	var path$4 = path$d;
	var setTimeout$2 = path$4.setTimeout;

	var setTimeout$1 = setTimeout$2;

	var whitespaces$2 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
	  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var uncurryThis$f = functionUncurryThis$1;
	var requireObjectCoercible$3 = requireObjectCoercible$7;
	var toString$4 = toString$9;
	var whitespaces$1 = whitespaces$2;
	var replace$1 = uncurryThis$f(''.replace);
	var whitespace = '[' + whitespaces$1 + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');
	var createMethod$1 = function (TYPE) {
	  return function ($this) {
	    var string = toString$4(requireObjectCoercible$3($this));
	    if (TYPE & 1) string = replace$1(string, ltrim, '');
	    if (TYPE & 2) string = replace$1(string, rtrim, '');
	    return string;
	  };
	};
	var stringTrim = {
	  start: createMethod$1(1),
	  end: createMethod$1(2),
	  trim: createMethod$1(3)
	};

	var global$o = global$11;
	var fails$b = fails$u;
	var uncurryThis$e = functionUncurryThis$1;
	var toString$3 = toString$9;
	var trim$1 = stringTrim.trim;
	var whitespaces = whitespaces$2;
	var $parseInt$1 = global$o.parseInt;
	var Symbol$5 = global$o.Symbol;
	var ITERATOR = Symbol$5 && Symbol$5.iterator;
	var hex = /^[+-]?0x/i;
	var exec$1 = uncurryThis$e(hex.exec);
	var FORCED$1 = $parseInt$1(whitespaces + '08') !== 8 || $parseInt$1(whitespaces + '0x16') !== 22
	  || (ITERATOR && !fails$b(function () { $parseInt$1(Object(ITERATOR)); }));
	var numberParseInt = FORCED$1 ? function parseInt(string, radix) {
	  var S = trim$1(toString$3(string));
	  return $parseInt$1(S, (radix >>> 0) || (exec$1(hex, S) ? 16 : 10));
	} : $parseInt$1;

	var $$6 = _export$1;
	var $parseInt = numberParseInt;
	$$6({ global: true, forced: parseInt != $parseInt }, {
	  parseInt: $parseInt
	});

	var path$3 = path$d;
	var _parseInt$2 = path$3.parseInt;

	var parent$5 = _parseInt$2;
	var _parseInt$1 = parent$5;

	var _parseInt = _parseInt$1;

	var $$5 = _export$1;
	var global$n = global$11;
	var uncurryThis$d = functionUncurryThis$1;
	var Date$1 = global$n.Date;
	var getTime = uncurryThis$d(Date$1.prototype.getTime);
	$$5({ target: 'Date', stat: true }, {
	  now: function now() {
	    return getTime(new Date$1());
	  }
	});

	var path$2 = path$d;
	var now$2 = path$2.Date.now;

	var parent$4 = now$2;
	var now$1 = parent$4;

	var now = now$1;

	var callBind$2 = {exports: {}};

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice$1 = Array.prototype.slice;
	var toStr$5 = Object.prototype.toString;
	var funcType = '[object Function]';
	var implementation$5 = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr$5.call(target) !== funcType) {
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
	var $SyntaxError$1 = SyntaxError;
	var $Function = Function;
	var $TypeError$5 = TypeError;
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
		throw new $TypeError$5();
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
		'%SyntaxError%': $SyntaxError$1,
		'%ThrowTypeError%': ThrowTypeError,
		'%TypedArray%': TypedArray,
		'%TypeError%': $TypeError$5,
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
			throw new $SyntaxError$1('invalid intrinsic syntax, expected closing `%`');
		} else if (last === '%' && first !== '%') {
			throw new $SyntaxError$1('invalid intrinsic syntax, expected opening `%`');
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
				throw new $TypeError$5('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
			}
			return {
				alias: alias,
				name: intrinsicName,
				value: value
			};
		}
		throw new $SyntaxError$1('intrinsic ' + name + ' does not exist!');
	};
	var getIntrinsic = function GetIntrinsic(name, allowMissing) {
		if (typeof name !== 'string' || name.length === 0) {
			throw new $TypeError$5('intrinsic name must be a non-empty string');
		}
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new $TypeError$5('"allowMissing" argument must be a boolean');
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
				throw new $SyntaxError$1('property names with quotes must have matching quotes');
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
						throw new $TypeError$5('base intrinsic for ' + name + ' exists, but the property is not available.');
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
	}(callBind$2));

	var toStr$4 = Object.prototype.toString;
	var isArguments$2 = function isArguments(value) {
		var str = toStr$4.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr$4.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};

	var keysShim$1;
	if (!Object.keys) {
		var has$6 = Object.prototype.hasOwnProperty;
		var toStr$3 = Object.prototype.toString;
		var isArgs$1 = isArguments$2;
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
					if (!excludedKeys['$' + k] && has$6.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
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
		keysShim$1 = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr$3.call(object) === '[object Function]';
			var isArguments = isArgs$1(object);
			var isString = isObject && toStr$3.call(object) === '[object String]';
			var theKeys = [];
			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}
			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has$6.call(object, 0)) {
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
					if (!(skipProto && name === 'prototype') && has$6.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}
			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has$6.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
	}
	var implementation$3 = keysShim$1;

	var slice = Array.prototype.slice;
	var isArgs = isArguments$2;
	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) { return origKeys(o); } : implementation$3;
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
	var objectKeys = keysShim;

	var keys$6 = objectKeys;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
	var toStr$2 = Object.prototype.toString;
	var concat$1 = Array.prototype.concat;
	var origDefineProperty = Object.defineProperty;
	var isFunction$4 = function (fn) {
		return typeof fn === 'function' && toStr$2.call(fn) === '[object Function]';
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
	var defineProperty$5 = function (object, name, value, predicate) {
		if (name in object && (!isFunction$4(predicate) || !predicate())) {
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
		var props = keys$6(map);
		if (hasSymbols) {
			props = concat$1.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty$5(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};
	defineProperties.supportsDescriptors = !!supportsDescriptors;
	var defineProperties_1 = defineProperties;

	var requirePromise$3 = function requirePromise() {
		if (typeof Promise !== 'function') {
			throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
		}
	};

	var fnToStr = Function.prototype.toString;
	var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
	var badArrayLike$1;
	var isCallableMarker;
	if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
		try {
			badArrayLike$1 = Object.defineProperty({}, 'length', {
				get: function () {
					throw isCallableMarker;
				}
			});
			isCallableMarker = {};
			reflectApply(function () { throw 42; }, null, badArrayLike$1);
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
	var toStr$1 = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag;
	var documentDotAll = typeof document === 'object' && typeof document.all === 'undefined' && document.all !== undefined ? document.all : {};
	var isCallable$a = reflectApply
		? function isCallable(value) {
			if (value === documentDotAll) { return true; }
			if (!value) { return false; }
			if (typeof value !== 'function' && typeof value !== 'object') { return false; }
			if (typeof value === 'function' && !value.prototype) { return true; }
			try {
				reflectApply(value, null, badArrayLike$1);
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
			var strClass = toStr$1.call(value);
			return strClass === fnClass || strClass === genClass;
		};

	var IsCallable$2 = isCallable$a;

	var IsConstructor$1 = {exports: {}};

	var GetIntrinsic$9 = getIntrinsic;

	var GetIntrinsic$8 = getIntrinsic;
	var has$5 = src;
	var $TypeError$4 = GetIntrinsic$8('%TypeError%');
	var isPropertyDescriptor$1 = function IsPropertyDescriptor(ES, Desc) {
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
			if (has$5(Desc, key) && !allowed[key]) {
				return false;
			}
		}
		if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {
			throw new $TypeError$4('Property Descriptors may not be both accessor and data descriptors');
		}
		return true;
	};

	var GetIntrinsic$7 = getIntrinsic;
	var callBind$1 = callBind$2.exports;
	var $indexOf = callBind$1(GetIntrinsic$7('String.prototype.indexOf'));
	var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
		var intrinsic = GetIntrinsic$7(name, !!allowMissing);
		if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
			return callBind$1(intrinsic);
		}
		return intrinsic;
	};

	var GetIntrinsic$6 = getIntrinsic;
	var $Array = GetIntrinsic$6('%Array%');
	var toStr = !$Array.isArray && callBound$1('Object.prototype.toString');
	var IsArray = $Array.isArray || function IsArray(argument) {
		return toStr(argument) === '[object Array]';
	};

	var GetIntrinsic$5 = getIntrinsic;
	var $defineProperty$1 = GetIntrinsic$5('%Object.defineProperty%', true);
	if ($defineProperty$1) {
		try {
			$defineProperty$1({}, 'a', { value: 1 });
		} catch (e) {
			$defineProperty$1 = null;
		}
	}
	var hasArrayLengthDefineBug = Object.defineProperty && Object.defineProperty([], 'length', { value: 1 }).length === 0;
	var isArray$5 = hasArrayLengthDefineBug && IsArray;
	var callBound = callBound$1;
	var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
	var DefineOwnProperty$1 = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
		if (!$defineProperty$1) {
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
			&& isArray$5(O)
			&& O.length !== desc['[[Value]]']
		) {
			O.length = desc['[[Value]]'];
			return O.length === desc['[[Value]]'];
		}
		$defineProperty$1(O, P, FromPropertyDescriptor(desc));
		return true;
	};

	var GetIntrinsic$4 = getIntrinsic;
	var $TypeError$3 = GetIntrinsic$4('%TypeError%');
	var $SyntaxError = GetIntrinsic$4('%SyntaxError%');
	var has$4 = src;
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
				if (has$4(Desc, key) && !allowed[key]) {
					return false;
				}
			}
			var isData = has$4(Desc, '[[Value]]');
			var IsAccessor = has$4(Desc, '[[Get]]') || has$4(Desc, '[[Set]]');
			if (isData && IsAccessor) {
				throw new $TypeError$3('Property Descriptors may not be both accessor and data descriptors');
			}
			return true;
		}
	};
	var assertRecord$3 = function assertRecord(Type, recordType, argumentName, value) {
		var predicate = predicates[recordType];
		if (typeof predicate !== 'function') {
			throw new $SyntaxError('unknown record type: ' + recordType);
		}
		if (!predicate(Type, value)) {
			throw new $TypeError$3(argumentName + ' must be a ' + recordType);
		}
	};

	var Type$8 = function Type(x) {
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

	var ES5Type = Type$8;
	var Type$7 = function Type(x) {
		if (typeof x === 'symbol') {
			return 'Symbol';
		}
		if (typeof x === 'bigint') {
			return 'BigInt';
		}
		return ES5Type(x);
	};

	var assertRecord$2 = assertRecord$3;
	var Type$6 = Type$7;
	var FromPropertyDescriptor$1 = function FromPropertyDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return Desc;
		}
		assertRecord$2(Type$6, 'Property Descriptor', 'Desc', Desc);
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

	var has$3 = src;
	var assertRecord$1 = assertRecord$3;
	var Type$5 = Type$7;
	var IsAccessorDescriptor$1 = function IsAccessorDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}
		assertRecord$1(Type$5, 'Property Descriptor', 'Desc', Desc);
		if (!has$3(Desc, '[[Get]]') && !has$3(Desc, '[[Set]]')) {
			return false;
		}
		return true;
	};

	var has$2 = src;
	var assertRecord = assertRecord$3;
	var Type$4 = Type$7;
	var IsDataDescriptor$1 = function IsDataDescriptor(Desc) {
		if (typeof Desc === 'undefined') {
			return false;
		}
		assertRecord(Type$4, 'Property Descriptor', 'Desc', Desc);
		if (!has$2(Desc, '[[Value]]') && !has$2(Desc, '[[Writable]]')) {
			return false;
		}
		return true;
	};

	var IsPropertyKey$1 = function IsPropertyKey(argument) {
		return typeof argument === 'string' || typeof argument === 'symbol';
	};

	var _isNaN = Number.isNaN || function isNaN(a) {
		return a !== a;
	};

	var $isNaN = _isNaN;
	var SameValue$1 = function SameValue(x, y) {
		if (x === y) {
			if (x === 0) { return 1 / x === 1 / y; }
			return true;
		}
		return $isNaN(x) && $isNaN(y);
	};

	var ToBoolean$1 = function ToBoolean(value) { return !!value; };

	var has$1 = src;
	var GetIntrinsic$3 = getIntrinsic;
	var $TypeError$2 = GetIntrinsic$3('%TypeError%');
	var Type$3 = Type$7;
	var ToBoolean = ToBoolean$1;
	var IsCallable$1 = IsCallable$2;
	var ToPropertyDescriptor$1 = function ToPropertyDescriptor(Obj) {
		if (Type$3(Obj) !== 'Object') {
			throw new $TypeError$2('ToPropertyDescriptor requires an object');
		}
		var desc = {};
		if (has$1(Obj, 'enumerable')) {
			desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
		}
		if (has$1(Obj, 'configurable')) {
			desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
		}
		if (has$1(Obj, 'value')) {
			desc['[[Value]]'] = Obj.value;
		}
		if (has$1(Obj, 'writable')) {
			desc['[[Writable]]'] = ToBoolean(Obj.writable);
		}
		if (has$1(Obj, 'get')) {
			var getter = Obj.get;
			if (typeof getter !== 'undefined' && !IsCallable$1(getter)) {
				throw new $TypeError$2('getter must be a function');
			}
			desc['[[Get]]'] = getter;
		}
		if (has$1(Obj, 'set')) {
			var setter = Obj.set;
			if (typeof setter !== 'undefined' && !IsCallable$1(setter)) {
				throw new $TypeError$2('setter must be a function');
			}
			desc['[[Set]]'] = setter;
		}
		if ((has$1(desc, '[[Get]]') || has$1(desc, '[[Set]]')) && (has$1(desc, '[[Value]]') || has$1(desc, '[[Writable]]'))) {
			throw new $TypeError$2('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
		}
		return desc;
	};

	var GetIntrinsic$2 = getIntrinsic;
	var $TypeError$1 = GetIntrinsic$2('%TypeError%');
	var isPropertyDescriptor = isPropertyDescriptor$1;
	var DefineOwnProperty = DefineOwnProperty$1;
	var FromPropertyDescriptor = FromPropertyDescriptor$1;
	var IsAccessorDescriptor = IsAccessorDescriptor$1;
	var IsDataDescriptor = IsDataDescriptor$1;
	var IsPropertyKey = IsPropertyKey$1;
	var SameValue = SameValue$1;
	var ToPropertyDescriptor = ToPropertyDescriptor$1;
	var Type$2 = Type$7;
	var DefinePropertyOrThrow$1 = function DefinePropertyOrThrow(O, P, desc) {
		if (Type$2(O) !== 'Object') {
			throw new $TypeError$1('Assertion failed: Type(O) is not Object');
		}
		if (!IsPropertyKey(P)) {
			throw new $TypeError$1('Assertion failed: IsPropertyKey(P) is not true');
		}
		var Desc = isPropertyDescriptor({
			Type: Type$2,
			IsDataDescriptor: IsDataDescriptor,
			IsAccessorDescriptor: IsAccessorDescriptor
		}, desc) ? desc : ToPropertyDescriptor(desc);
		if (!isPropertyDescriptor({
			Type: Type$2,
			IsDataDescriptor: IsDataDescriptor,
			IsAccessorDescriptor: IsAccessorDescriptor
		}, Desc)) {
			throw new $TypeError$1('Assertion failed: Desc is not a valid Property Descriptor');
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

	var GetIntrinsic$1 = GetIntrinsic$9;
	var $construct = GetIntrinsic$1('%Reflect.construct%', true);
	var DefinePropertyOrThrow = DefinePropertyOrThrow$1;
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
		IsConstructor$1.exports = function IsConstructor(argument) {
			try {
				$construct(argument, badArrayLike);
			} catch (err) {
				return err === isConstructorMarker;
			}
		};
	} else {
		IsConstructor$1.exports = function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype;
		};
	}

	var GetIntrinsic = getIntrinsic;
	var $species = GetIntrinsic('%Symbol.species%', true);
	var $TypeError = GetIntrinsic('%TypeError%');
	var IsConstructor = IsConstructor$1.exports;
	var Type$1 = Type$7;
	var SpeciesConstructor$1 = function SpeciesConstructor(O, defaultConstructor) {
		if (Type$1(O) !== 'Object') {
			throw new $TypeError('Assertion failed: Type(O) is not Object');
		}
		var C = O.constructor;
		if (typeof C === 'undefined') {
			return defaultConstructor;
		}
		if (Type$1(C) !== 'Object') {
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

	var requirePromise$2 = requirePromise$3;
	requirePromise$2();
	var IsCallable = IsCallable$2;
	var SpeciesConstructor = SpeciesConstructor$1;
	var Type = Type$7;
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

	var callBind = callBind$2.exports;
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
	function assign (target) {
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

	    attributes = assign({}, defaultAttributes, attributes);

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
	          assign({}, attributes, {
	            expires: -1
	          })
	        );
	      },
	      withAttributes: function (attributes) {
	        return init(this.converter, assign({}, this.attributes, attributes))
	      },
	      withConverter: function (converter) {
	        return init(assign({}, this.converter, converter), this.attributes)
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
	var LOGOUT_TIME = 1000 * 86400;
	var MAX_REQUEST_TIMES = 20;
	var MAX_REQUEST_MESSAGE = 'Number of requests exceeded limit.';

	var $$4 = _export$1;
	var $map = arrayIteration.map;
	var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$2;
	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
	$$4({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
	  map: function map(callbackfn ) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var entryVirtual$1 = entryVirtual$3;
	var map$3 = entryVirtual$1('Array').map;

	var isPrototypeOf$2 = objectIsPrototypeOf$1;
	var method$1 = map$3;
	var ArrayPrototype$1 = Array.prototype;
	var map$2 = function (it) {
	  var own = it.map;
	  return it === ArrayPrototype$1 || (isPrototypeOf$2(ArrayPrototype$1, it) && own === ArrayPrototype$1.map) ? method$1 : own;
	};

	var parent$3 = map$2;
	var map$1 = parent$3;

	var map = map$1;

	var $$3 = _export$1;
	var toObject$2 = toObject$7;
	var nativeKeys$2 = objectKeys$2;
	var fails$a = fails$u;
	var FAILS_ON_PRIMITIVES = fails$a(function () { nativeKeys$2(1); });
	$$3({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
	  keys: function keys(it) {
	    return nativeKeys$2(toObject$2(it));
	  }
	});

	var path$1 = path$d;
	var keys$5 = path$1.Object.keys;

	var parent$2 = keys$5;
	var keys$4 = parent$2;

	var keys$3 = keys$4;

	var check = function (it) {
	  return it && it.Math == Math && it;
	};
	var global$m =
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  (function () { return this; })() || Function('return this')();

	var objectGetOwnPropertyDescriptor = {};

	var fails$9 = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	var fails$8 = fails$9;
	var descriptors = !fails$8(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var call$4 = Function.prototype.call;
	var functionCall = call$4.bind ? call$4.bind(call$4) : function () {
	  return call$4.apply(call$4, arguments);
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

	var FunctionPrototype$2 = Function.prototype;
	var bind$3 = FunctionPrototype$2.bind;
	var call$3 = FunctionPrototype$2.call;
	var uncurryThis$c = bind$3 && bind$3.bind(call$3, call$3);
	var functionUncurryThis = bind$3 ? function (fn) {
	  return fn && uncurryThis$c(fn);
	} : function (fn) {
	  return fn && function () {
	    return call$3.apply(fn, arguments);
	  };
	};

	var uncurryThis$b = functionUncurryThis;
	var toString$2 = uncurryThis$b({}.toString);
	var stringSlice = uncurryThis$b(''.slice);
	var classofRaw = function (it) {
	  return stringSlice(toString$2(it), 8, -1);
	};

	var global$l = global$m;
	var uncurryThis$a = functionUncurryThis;
	var fails$7 = fails$9;
	var classof$1 = classofRaw;
	var Object$3 = global$l.Object;
	var split = uncurryThis$a(''.split);
	var indexedObject = fails$7(function () {
	  return !Object$3('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classof$1(it) == 'String' ? split(it, '') : Object$3(it);
	} : Object$3;

	var global$k = global$m;
	var TypeError$7 = global$k.TypeError;
	var requireObjectCoercible$2 = function (it) {
	  if (it == undefined) throw TypeError$7("Can't call method on " + it);
	  return it;
	};

	var IndexedObject$1 = indexedObject;
	var requireObjectCoercible$1 = requireObjectCoercible$2;
	var toIndexedObject$4 = function (it) {
	  return IndexedObject$1(requireObjectCoercible$1(it));
	};

	var isCallable$9 = function (argument) {
	  return typeof argument == 'function';
	};

	var isCallable$8 = isCallable$9;
	var isObject$b = function (it) {
	  return typeof it == 'object' ? it !== null : isCallable$8(it);
	};

	var global$j = global$m;
	var isCallable$7 = isCallable$9;
	var aFunction = function (argument) {
	  return isCallable$7(argument) ? argument : undefined;
	};
	var getBuiltIn$4 = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(global$j[namespace]) : global$j[namespace] && global$j[namespace][method];
	};

	var uncurryThis$9 = functionUncurryThis;
	var objectIsPrototypeOf = uncurryThis$9({}.isPrototypeOf);

	var getBuiltIn$3 = getBuiltIn$4;
	var engineUserAgent = getBuiltIn$3('navigator', 'userAgent') || '';

	var global$i = global$m;
	var userAgent = engineUserAgent;
	var process$1 = global$i.process;
	var Deno = global$i.Deno;
	var versions = process$1 && process$1.versions || Deno && Deno.version;
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
	var fails$6 = fails$9;
	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$6(function () {
	  var symbol = Symbol();
	  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
	    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
	});

	var NATIVE_SYMBOL$1 = nativeSymbol;
	var useSymbolAsUid = NATIVE_SYMBOL$1
	  && !Symbol.sham
	  && typeof Symbol.iterator == 'symbol';

	var global$h = global$m;
	var getBuiltIn$2 = getBuiltIn$4;
	var isCallable$6 = isCallable$9;
	var isPrototypeOf$1 = objectIsPrototypeOf;
	var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
	var Object$2 = global$h.Object;
	var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  var $Symbol = getBuiltIn$2('Symbol');
	  return isCallable$6($Symbol) && isPrototypeOf$1($Symbol.prototype, Object$2(it));
	};

	var global$g = global$m;
	var String$2 = global$g.String;
	var tryToString$1 = function (argument) {
	  try {
	    return String$2(argument);
	  } catch (error) {
	    return 'Object';
	  }
	};

	var global$f = global$m;
	var isCallable$5 = isCallable$9;
	var tryToString = tryToString$1;
	var TypeError$6 = global$f.TypeError;
	var aCallable$1 = function (argument) {
	  if (isCallable$5(argument)) return argument;
	  throw TypeError$6(tryToString(argument) + ' is not a function');
	};

	var aCallable = aCallable$1;
	var getMethod$1 = function (V, P) {
	  var func = V[P];
	  return func == null ? undefined : aCallable(func);
	};

	var global$e = global$m;
	var call$2 = functionCall;
	var isCallable$4 = isCallable$9;
	var isObject$a = isObject$b;
	var TypeError$5 = global$e.TypeError;
	var ordinaryToPrimitive$1 = function (input, pref) {
	  var fn, val;
	  if (pref === 'string' && isCallable$4(fn = input.toString) && !isObject$a(val = call$2(fn, input))) return val;
	  if (isCallable$4(fn = input.valueOf) && !isObject$a(val = call$2(fn, input))) return val;
	  if (pref !== 'string' && isCallable$4(fn = input.toString) && !isObject$a(val = call$2(fn, input))) return val;
	  throw TypeError$5("Can't convert object to primitive value");
	};

	var shared$3 = {exports: {}};

	var global$d = global$m;
	var defineProperty$4 = Object.defineProperty;
	var setGlobal$3 = function (key, value) {
	  try {
	    defineProperty$4(global$d, key, { value: value, configurable: true, writable: true });
	  } catch (error) {
	    global$d[key] = value;
	  } return value;
	};

	var global$c = global$m;
	var setGlobal$2 = setGlobal$3;
	var SHARED = '__core-js_shared__';
	var store$3 = global$c[SHARED] || setGlobal$2(SHARED, {});
	var sharedStore = store$3;

	var store$2 = sharedStore;
	(shared$3.exports = function (key, value) {
	  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.20.2',
	  mode: 'global',
	  copyright: '© 2022 Denis Pushkarev (zloirock.ru)'
	});

	var global$b = global$m;
	var requireObjectCoercible = requireObjectCoercible$2;
	var Object$1 = global$b.Object;
	var toObject$1 = function (argument) {
	  return Object$1(requireObjectCoercible(argument));
	};

	var uncurryThis$8 = functionUncurryThis;
	var toObject = toObject$1;
	var hasOwnProperty$8 = uncurryThis$8({}.hasOwnProperty);
	var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
	  return hasOwnProperty$8(toObject(it), key);
	};

	var uncurryThis$7 = functionUncurryThis;
	var id = 0;
	var postfix = Math.random();
	var toString$1 = uncurryThis$7(1.0.toString);
	var uid$2 = function (key) {
	  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$1(++id + postfix, 36);
	};

	var global$a = global$m;
	var shared$2 = shared$3.exports;
	var hasOwn$7 = hasOwnProperty_1;
	var uid$1 = uid$2;
	var NATIVE_SYMBOL = nativeSymbol;
	var USE_SYMBOL_AS_UID = useSymbolAsUid;
	var WellKnownSymbolsStore = shared$2('wks');
	var Symbol$4 = global$a.Symbol;
	var symbolFor = Symbol$4 && Symbol$4['for'];
	var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$4 : Symbol$4 && Symbol$4.withoutSetter || uid$1;
	var wellKnownSymbol$1 = function (name) {
	  if (!hasOwn$7(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
	    var description = 'Symbol.' + name;
	    if (NATIVE_SYMBOL && hasOwn$7(Symbol$4, name)) {
	      WellKnownSymbolsStore[name] = Symbol$4[name];
	    } else if (USE_SYMBOL_AS_UID && symbolFor) {
	      WellKnownSymbolsStore[name] = symbolFor(description);
	    } else {
	      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
	    }
	  } return WellKnownSymbolsStore[name];
	};

	var global$9 = global$m;
	var call$1 = functionCall;
	var isObject$9 = isObject$b;
	var isSymbol$1 = isSymbol$2;
	var getMethod = getMethod$1;
	var ordinaryToPrimitive = ordinaryToPrimitive$1;
	var wellKnownSymbol = wellKnownSymbol$1;
	var TypeError$4 = global$9.TypeError;
	var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
	var toPrimitive$1 = function (input, pref) {
	  if (!isObject$9(input) || isSymbol$1(input)) return input;
	  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
	  var result;
	  if (exoticToPrim) {
	    if (pref === undefined) pref = 'default';
	    result = call$1(exoticToPrim, input, pref);
	    if (!isObject$9(result) || isSymbol$1(result)) return result;
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

	var global$8 = global$m;
	var isObject$8 = isObject$b;
	var document$1 = global$8.document;
	var EXISTS$1 = isObject$8(document$1) && isObject$8(document$1.createElement);
	var documentCreateElement = function (it) {
	  return EXISTS$1 ? document$1.createElement(it) : {};
	};

	var DESCRIPTORS$6 = descriptors;
	var fails$5 = fails$9;
	var createElement = documentCreateElement;
	var ie8DomDefine = !DESCRIPTORS$6 && !fails$5(function () {
	  return Object.defineProperty(createElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var DESCRIPTORS$5 = descriptors;
	var call = functionCall;
	var propertyIsEnumerableModule = objectPropertyIsEnumerable;
	var createPropertyDescriptor$1 = createPropertyDescriptor$2;
	var toIndexedObject$3 = toIndexedObject$4;
	var toPropertyKey$1 = toPropertyKey$2;
	var hasOwn$6 = hasOwnProperty_1;
	var IE8_DOM_DEFINE$1 = ie8DomDefine;
	var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
	objectGetOwnPropertyDescriptor.f = DESCRIPTORS$5 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject$3(O);
	  P = toPropertyKey$1(P);
	  if (IE8_DOM_DEFINE$1) try {
	    return $getOwnPropertyDescriptor$1(O, P);
	  } catch (error) {  }
	  if (hasOwn$6(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
	};

	var objectDefineProperty = {};

	var DESCRIPTORS$4 = descriptors;
	var fails$4 = fails$9;
	var v8PrototypeDefineBug = DESCRIPTORS$4 && fails$4(function () {
	  return Object.defineProperty(function () {  }, 'prototype', {
	    value: 42,
	    writable: false
	  }).prototype != 42;
	});

	var global$7 = global$m;
	var isObject$7 = isObject$b;
	var String$1 = global$7.String;
	var TypeError$3 = global$7.TypeError;
	var anObject$2 = function (argument) {
	  if (isObject$7(argument)) return argument;
	  throw TypeError$3(String$1(argument) + ' is not an object');
	};

	var global$6 = global$m;
	var DESCRIPTORS$3 = descriptors;
	var IE8_DOM_DEFINE = ie8DomDefine;
	var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
	var anObject$1 = anObject$2;
	var toPropertyKey = toPropertyKey$2;
	var TypeError$2 = global$6.TypeError;
	var $defineProperty = Object.defineProperty;
	var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var ENUMERABLE = 'enumerable';
	var CONFIGURABLE$1 = 'configurable';
	var WRITABLE = 'writable';
	objectDefineProperty.f = DESCRIPTORS$3 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
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

	var DESCRIPTORS$2 = descriptors;
	var definePropertyModule$1 = objectDefineProperty;
	var createPropertyDescriptor = createPropertyDescriptor$2;
	var createNonEnumerableProperty$3 = DESCRIPTORS$2 ? function (object, key, value) {
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

	var global$5 = global$m;
	var isCallable$2 = isCallable$9;
	var inspectSource$1 = inspectSource$2;
	var WeakMap$2 = global$5.WeakMap;
	var nativeWeakMap = isCallable$2(WeakMap$2) && /native code/.test(inspectSource$1(WeakMap$2));

	var shared$1 = shared$3.exports;
	var uid = uid$2;
	var keys$2 = shared$1('keys');
	var sharedKey$1 = function (key) {
	  return keys$2[key] || (keys$2[key] = uid(key));
	};

	var hiddenKeys$3 = {};

	var NATIVE_WEAK_MAP = nativeWeakMap;
	var global$4 = global$m;
	var uncurryThis$5 = functionUncurryThis;
	var isObject$6 = isObject$b;
	var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
	var hasOwn$5 = hasOwnProperty_1;
	var shared = sharedStore;
	var sharedKey = sharedKey$1;
	var hiddenKeys$2 = hiddenKeys$3;
	var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
	var TypeError$1 = global$4.TypeError;
	var WeakMap$1 = global$4.WeakMap;
	var set, get, has;
	var enforce = function (it) {
	  return has(it) ? get(it) : set(it, {});
	};
	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject$6(it) || (state = get(it)).type !== TYPE) {
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

	var DESCRIPTORS$1 = descriptors;
	var hasOwn$4 = hasOwnProperty_1;
	var FunctionPrototype$1 = Function.prototype;
	var getDescriptor = DESCRIPTORS$1 && Object.getOwnPropertyDescriptor;
	var EXISTS = hasOwn$4(FunctionPrototype$1, 'name');
	var PROPER = EXISTS && (function something() {  }).name === 'something';
	var CONFIGURABLE = EXISTS && (!DESCRIPTORS$1 || (DESCRIPTORS$1 && getDescriptor(FunctionPrototype$1, 'name').configurable));
	var functionName = {
	  EXISTS: EXISTS,
	  PROPER: PROPER,
	  CONFIGURABLE: CONFIGURABLE
	};

	var global$3 = global$m;
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
	  if (O === global$3) {
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

	var getBuiltIn$1 = getBuiltIn$4;
	var uncurryThis$3 = functionUncurryThis;
	var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
	var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
	var anObject = anObject$2;
	var concat = uncurryThis$3([].concat);
	var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = getOwnPropertyNamesModule.f(anObject(it));
	  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
	  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
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

	var fails$3 = fails$9;
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

	var global$2 = global$m;
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
	    target = global$2;
	  } else if (STATIC) {
	    target = global$2[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global$2[TARGET] || {}).prototype;
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

	var fails$2 = fails$9;
	var arrayMethodIsStrict$3 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$2(function () {
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $$2 = _export;
	var uncurryThis$2 = functionUncurryThis;
	var IndexedObject = indexedObject;
	var toIndexedObject = toIndexedObject$4;
	var arrayMethodIsStrict$2 = arrayMethodIsStrict$3;
	var un$Join = uncurryThis$2([].join);
	var ES3_STRINGS = IndexedObject != Object;
	var STRICT_METHOD$1 = arrayMethodIsStrict$2('join', ',');
	$$2({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$1 }, {
	  join: function join(separator) {
	    return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
	  }
	});

	var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	var _freeGlobal = freeGlobal$1;

	var freeGlobal = _freeGlobal;
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	var root$2 = freeGlobal || freeSelf || Function('return this')();
	var _root = root$2;

	var root$1 = _root;
	var Symbol$3 = root$1.Symbol;
	var _Symbol = Symbol$3;

	var Symbol$2 = _Symbol;
	var objectProto$9 = Object.prototype;
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
	var nativeObjectToString$1 = objectProto$9.toString;
	var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;
	function getRawTag$1(value) {
	  var isOwn = hasOwnProperty$7.call(value, symToStringTag$1),
	      tag = value[symToStringTag$1];
	  try {
	    value[symToStringTag$1] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	  var result = nativeObjectToString$1.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag$1] = tag;
	    } else {
	      delete value[symToStringTag$1];
	    }
	  }
	  return result;
	}
	var _getRawTag = getRawTag$1;

	var objectProto$8 = Object.prototype;
	var nativeObjectToString = objectProto$8.toString;
	function objectToString$1(value) {
	  return nativeObjectToString.call(value);
	}
	var _objectToString = objectToString$1;

	var Symbol$1 = _Symbol,
	    getRawTag = _getRawTag,
	    objectToString = _objectToString;
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
	function baseGetTag$5(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	var _baseGetTag = baseGetTag$5;

	function isObject$5(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	var isObject_1 = isObject$5;

	var baseGetTag$4 = _baseGetTag,
	    isObject$4 = isObject_1;
	var asyncTag = '[object AsyncFunction]',
	    funcTag$1 = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	function isFunction$3(value) {
	  if (!isObject$4(value)) {
	    return false;
	  }
	  var tag = baseGetTag$4(value);
	  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	var isFunction_1 = isFunction$3;

	var root = _root;
	var coreJsData$1 = root['__core-js_shared__'];
	var _coreJsData = coreJsData$1;

	var coreJsData = _coreJsData;
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	function isMasked$1(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	var _isMasked = isMasked$1;

	var funcProto$2 = Function.prototype;
	var funcToString$2 = funcProto$2.toString;
	function toSource$1(func) {
	  if (func != null) {
	    try {
	      return funcToString$2.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	var _toSource = toSource$1;

	var isFunction$2 = isFunction_1,
	    isMasked = _isMasked,
	    isObject$3 = isObject_1,
	    toSource = _toSource;
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	var funcProto$1 = Function.prototype,
	    objectProto$7 = Object.prototype;
	var funcToString$1 = funcProto$1.toString;
	var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$6).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	function baseIsNative$1(value) {
	  if (!isObject$3(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	var _baseIsNative = baseIsNative$1;

	function getValue$1(object, key) {
	  return object == null ? undefined : object[key];
	}
	var _getValue = getValue$1;

	var baseIsNative = _baseIsNative,
	    getValue = _getValue;
	function getNative$1(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	var _getNative = getNative$1;

	var getNative = _getNative;
	var defineProperty$3 = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	var _defineProperty = defineProperty$3;

	var defineProperty$2 = _defineProperty;
	function baseAssignValue$2(object, key, value) {
	  if (key == '__proto__' && defineProperty$2) {
	    defineProperty$2(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	var _baseAssignValue = baseAssignValue$2;

	function eq$2(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	var eq_1 = eq$2;

	var baseAssignValue$1 = _baseAssignValue,
	    eq$1 = eq_1;
	var objectProto$6 = Object.prototype;
	var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
	function assignValue$1(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$5.call(object, key) && eq$1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue$1(object, key, value);
	  }
	}
	var _assignValue = assignValue$1;

	var assignValue = _assignValue,
	    baseAssignValue = _baseAssignValue;
	function copyObject$1(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	  var index = -1,
	      length = props.length;
	  while (++index < length) {
	    var key = props[index];
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	var _copyObject = copyObject$1;

	function identity$3(value) {
	  return value;
	}
	var identity_1 = identity$3;

	function apply$3(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	var _apply = apply$3;

	var apply$2 = _apply;
	var nativeMax = Math.max;
	function overRest$1(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return apply$2(func, this, otherArgs);
	  };
	}
	var _overRest = overRest$1;

	function constant$1(value) {
	  return function() {
	    return value;
	  };
	}
	var constant_1 = constant$1;

	var constant = constant_1,
	    defineProperty$1 = _defineProperty,
	    identity$2 = identity_1;
	var baseSetToString$1 = !defineProperty$1 ? identity$2 : function(func, string) {
	  return defineProperty$1(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant(string),
	    'writable': true
	  });
	};
	var _baseSetToString = baseSetToString$1;

	var HOT_COUNT = 800,
	    HOT_SPAN = 16;
	var nativeNow = Date.now;
	function shortOut$1(func) {
	  var count = 0,
	      lastCalled = 0;
	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);
	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}
	var _shortOut = shortOut$1;

	var baseSetToString = _baseSetToString,
	    shortOut = _shortOut;
	var setToString$1 = shortOut(baseSetToString);
	var _setToString = setToString$1;

	var identity$1 = identity_1,
	    overRest = _overRest,
	    setToString = _setToString;
	function baseRest$1(func, start) {
	  return setToString(overRest(func, start, identity$1), func + '');
	}
	var _baseRest = baseRest$1;

	var MAX_SAFE_INTEGER$1 = 9007199254740991;
	function isLength$2(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
	}
	var isLength_1 = isLength$2;

	var isFunction$1 = isFunction_1,
	    isLength$1 = isLength_1;
	function isArrayLike$4(value) {
	  return value != null && isLength$1(value.length) && !isFunction$1(value);
	}
	var isArrayLike_1 = isArrayLike$4;

	var MAX_SAFE_INTEGER = 9007199254740991;
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	function isIndex$2(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}
	var _isIndex = isIndex$2;

	var eq = eq_1,
	    isArrayLike$3 = isArrayLike_1,
	    isIndex$1 = _isIndex,
	    isObject$2 = isObject_1;
	function isIterateeCall$1(value, index, object) {
	  if (!isObject$2(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike$3(object) && isIndex$1(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	var _isIterateeCall = isIterateeCall$1;

	var baseRest = _baseRest,
	    isIterateeCall = _isIterateeCall;
	function createAssigner$1(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	var _createAssigner = createAssigner$1;

	function baseTimes$1(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	var _baseTimes = baseTimes$1;

	function isObjectLike$5(value) {
	  return value != null && typeof value == 'object';
	}
	var isObjectLike_1 = isObjectLike$5;

	var baseGetTag$3 = _baseGetTag,
	    isObjectLike$4 = isObjectLike_1;
	var argsTag$1 = '[object Arguments]';
	function baseIsArguments$1(value) {
	  return isObjectLike$4(value) && baseGetTag$3(value) == argsTag$1;
	}
	var _baseIsArguments = baseIsArguments$1;

	var baseIsArguments = _baseIsArguments,
	    isObjectLike$3 = isObjectLike_1;
	var objectProto$5 = Object.prototype;
	var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
	var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
	var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike$3(value) && hasOwnProperty$4.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	var isArguments_1 = isArguments$1;

	var isArray$4 = Array.isArray;
	var isArray_1 = isArray$4;

	var isBuffer$2 = {exports: {}};

	function stubFalse() {
	  return false;
	}
	var stubFalse_1 = stubFalse;

	(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;
	var freeExports = exports && !exports.nodeType && exports;
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	var moduleExports = freeModule && freeModule.exports === freeExports;
	var Buffer = moduleExports ? root.Buffer : undefined;
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	var isBuffer = nativeIsBuffer || stubFalse;
	module.exports = isBuffer;
	}(isBuffer$2, isBuffer$2.exports));

	var baseGetTag$2 = _baseGetTag,
	    isLength = isLength_1,
	    isObjectLike$2 = isObjectLike_1;
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag$1 = '[object String]',
	    weakMapTag = '[object WeakMap]';
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag$1] =
	typedArrayTags[weakMapTag] = false;
	function baseIsTypedArray$1(value) {
	  return isObjectLike$2(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag$2(value)];
	}
	var _baseIsTypedArray = baseIsTypedArray$1;

	function baseUnary$1(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	var _baseUnary = baseUnary$1;

	var _nodeUtil = {exports: {}};

	(function (module, exports) {
	var freeGlobal = _freeGlobal;
	var freeExports = exports && !exports.nodeType && exports;
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
	var moduleExports = freeModule && freeModule.exports === freeExports;
	var freeProcess = moduleExports && freeGlobal.process;
	var nodeUtil = (function() {
	  try {
	    var types = freeModule && freeModule.require && freeModule.require('util').types;
	    if (types) {
	      return types;
	    }
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	module.exports = nodeUtil;
	}(_nodeUtil, _nodeUtil.exports));

	var baseIsTypedArray = _baseIsTypedArray,
	    baseUnary = _baseUnary,
	    nodeUtil = _nodeUtil.exports;
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	var isTypedArray_1 = isTypedArray$1;

	var baseTimes = _baseTimes,
	    isArguments = isArguments_1,
	    isArray$3 = isArray_1,
	    isBuffer$1 = isBuffer$2.exports,
	    isIndex = _isIndex,
	    isTypedArray = isTypedArray_1;
	var objectProto$4 = Object.prototype;
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
	function arrayLikeKeys$2(value, inherited) {
	  var isArr = isArray$3(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer$1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	  for (var key in value) {
	    if ((inherited || hasOwnProperty$3.call(value, key)) &&
	        !(skipIndexes && (
	           key == 'length' ||
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	var _arrayLikeKeys = arrayLikeKeys$2;

	var objectProto$3 = Object.prototype;
	function isPrototype$2(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;
	  return value === proto;
	}
	var _isPrototype = isPrototype$2;

	function nativeKeysIn$1(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	var _nativeKeysIn = nativeKeysIn$1;

	var isObject$1 = isObject_1,
	    isPrototype$1 = _isPrototype,
	    nativeKeysIn = _nativeKeysIn;
	var objectProto$2 = Object.prototype;
	var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
	function baseKeysIn$1(object) {
	  if (!isObject$1(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype$1(object),
	      result = [];
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$2.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	var _baseKeysIn = baseKeysIn$1;

	var arrayLikeKeys$1 = _arrayLikeKeys,
	    baseKeysIn = _baseKeysIn,
	    isArrayLike$2 = isArrayLike_1;
	function keysIn$1(object) {
	  return isArrayLike$2(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
	}
	var keysIn_1 = keysIn$1;

	var copyObject = _copyObject,
	    createAssigner = _createAssigner,
	    keysIn = keysIn_1;
	var assignIn = createAssigner(function(object, source) {
	  copyObject(source, keysIn(source), object);
	});
	var assignIn_1 = assignIn;

	function queryString(params) {
	  var _context;
	  return map(_context = keys$3(params)).call(_context, function (key) {
	    var _context2;
	    return concat$2(_context2 = "".concat(key, "=")).call(_context2, params[key]);
	  }).join('&');
	}
	function rand(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}
	function deepMerge() {
	  var _context3;
	  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	  return assignIn_1.apply(void 0, concat$2(_context3 = [null]).call(_context3, args));
	}

	var fails$1 = fails$u;
	var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails$1(function () {
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $forEach = arrayIteration.forEach;
	var arrayMethodIsStrict = arrayMethodIsStrict$1;
	var STRICT_METHOD = arrayMethodIsStrict('forEach');
	var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn ) {
	  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	} : [].forEach;

	var $$1 = _export$1;
	var forEach$6 = arrayForEach;
	$$1({ target: 'Array', proto: true, forced: [].forEach != forEach$6 }, {
	  forEach: forEach$6
	});

	var entryVirtual = entryVirtual$3;
	var forEach$5 = entryVirtual('Array').forEach;

	var parent$1 = forEach$5;
	var forEach$4 = parent$1;

	var classof = classof$b;
	var hasOwn = hasOwnProperty_1$1;
	var isPrototypeOf = objectIsPrototypeOf$1;
	var method = forEach$4;
	var ArrayPrototype = Array.prototype;
	var DOMIterables = {
	  DOMTokenList: true,
	  NodeList: true
	};
	var forEach$3 = function (it) {
	  var own = it.forEach;
	  return it === ArrayPrototype || (isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach)
	    || hasOwn(DOMIterables, classof(it)) ? method : own;
	};

	var forEach$2 = forEach$3;

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
	function isArray$2(val) {
	  return toString.call(val) === '[object Array]';
	}
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}
	function isString$1(val) {
	  return typeof val === 'string';
	}
	function isNumber(val) {
	  return typeof val === 'number';
	}
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}
	function isPlainObject$1(val) {
	  if (toString.call(val) !== '[object Object]') {
	    return false;
	  }
	  var prototype = Object.getPrototypeOf(val);
	  return prototype === null || prototype === Object.prototype;
	}
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
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
	function forEach$1(obj, fn) {
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	  if (typeof obj !== 'object') {
	    obj = [obj];
	  }
	  if (isArray$2(obj)) {
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
	    if (isPlainObject$1(result[key]) && isPlainObject$1(val)) {
	      result[key] = merge(result[key], val);
	    } else if (isPlainObject$1(val)) {
	      result[key] = merge({}, val);
	    } else if (isArray$2(val)) {
	      result[key] = val.slice();
	    } else {
	      result[key] = val;
	    }
	  }
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach$1(arguments[i], assignValue);
	  }
	  return result;
	}
	function extend(a, b, thisArg) {
	  forEach$1(b, function assignValue(val, key) {
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
	var utils$d = {
	  isArray: isArray$2,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString$1,
	  isNumber: isNumber,
	  isObject: isObject,
	  isPlainObject: isPlainObject$1,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach$1,
	  merge: merge,
	  extend: extend,
	  trim: trim,
	  stripBOM: stripBOM
	};

	var utils$c = utils$d;
	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}
	var buildURL$2 = function buildURL(url, params, paramsSerializer) {
	  if (!params) {
	    return url;
	  }
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils$c.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	    utils$c.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	      if (utils$c.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }
	      utils$c.forEach(val, function parseValue(v) {
	        if (utils$c.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils$c.isObject(v)) {
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

	var utils$b = utils$d;
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
	  utils$b.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	var InterceptorManager_1 = InterceptorManager$1;

	var utils$a = utils$d;
	var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
	  utils$a.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	var enhanceError$2 = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;
	  error.toJSON = function toJSON() {
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
	  };
	  return error;
	};

	var enhanceError$1 = enhanceError$2;
	var createError$2 = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError$1(error, config, code, request, response);
	};

	var createError$1 = createError$2;
	var settle$1 = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError$1(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};

	var utils$9 = utils$d;
	var cookies$1 = (
	  utils$9.isStandardBrowserEnv() ?
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));
	          if (utils$9.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }
	          if (utils$9.isString(path)) {
	            cookie.push('path=' + path);
	          }
	          if (utils$9.isString(domain)) {
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

	var isAbsoluteURL$1 = function isAbsoluteURL(url) {
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
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

	var utils$8 = utils$d;
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];
	var parseHeaders$1 = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	  if (!headers) { return parsed; }
	  utils$8.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils$8.trim(line.substr(0, i)).toLowerCase();
	    val = utils$8.trim(line.substr(i + 1));
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

	var utils$7 = utils$d;
	var isURLSameOrigin$1 = (
	  utils$7.isStandardBrowserEnv() ?
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
	        var parsed = (utils$7.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
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

	function Cancel$3(message) {
	  this.message = message;
	}
	Cancel$3.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	Cancel$3.prototype.__CANCEL__ = true;
	var Cancel_1 = Cancel$3;

	var utils$6 = utils$d;
	var settle = settle$1;
	var cookies = cookies$1;
	var buildURL$1 = buildURL$2;
	var buildFullPath = buildFullPath$1;
	var parseHeaders = parseHeaders$1;
	var isURLSameOrigin = isURLSameOrigin$1;
	var createError = createError$2;
	var defaults$4 = defaults_1;
	var Cancel$2 = Cancel_1;
	var xhr = function xhrAdapter(config) {
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
	    if (utils$6.isFormData(requestData)) {
	      delete requestHeaders['Content-Type'];
	    }
	    var request = new XMLHttpRequest();
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	    var fullPath = buildFullPath(config.baseURL, config.url);
	    request.open(config.method.toUpperCase(), buildURL$1(fullPath, config.params, config.paramsSerializer), true);
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
	      reject(createError('Request aborted', config, 'ECONNABORTED', request));
	      request = null;
	    };
	    request.onerror = function handleError() {
	      reject(createError('Network Error', config, null, request));
	      request = null;
	    };
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
	      var transitional = config.transitional || defaults$4.transitional;
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(createError(
	        timeoutErrorMessage,
	        config,
	        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
	        request));
	      request = null;
	    };
	    if (utils$6.isStandardBrowserEnv()) {
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies.read(config.xsrfCookieName) :
	        undefined;
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	    if ('setRequestHeader' in request) {
	      utils$6.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          delete requestHeaders[key];
	        } else {
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	    if (!utils$6.isUndefined(config.withCredentials)) {
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
	        reject(!cancel || (cancel && cancel.type) ? new Cancel$2('canceled') : cancel);
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
	    request.send(requestData);
	  });
	};

	var utils$5 = utils$d;
	var normalizeHeaderName = normalizeHeaderName$1;
	var enhanceError = enhanceError$2;
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
	    adapter = xhr;
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    adapter = xhr;
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
	  transitional: {
	    silentJSONParsing: true,
	    forcedJSONParsing: true,
	    clarifyTimeoutError: false
	  },
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
	    if (utils$5.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
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
	            throw enhanceError(e, this, 'E_JSON_PARSE');
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

	var utils$4 = utils$d;
	var defaults$2 = defaults_1;
	var transformData$1 = function transformData(data, headers, fns) {
	  var context = this || defaults$2;
	  utils$4.forEach(fns, function transform(fn) {
	    data = fn.call(context, data, headers);
	  });
	  return data;
	};

	var isCancel$2 = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

	var utils$3 = utils$d;
	var transformData = transformData$1;
	var isCancel$1 = isCancel$2;
	var defaults$1 = defaults_1;
	var Cancel$1 = Cancel_1;
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	  if (config.signal && config.signal.aborted) {
	    throw new Cancel$1('canceled');
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

	var utils$2 = utils$d;
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

	var data = {
	  "version": "0.24.0"
	};

	var VERSION = data.version;
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
	      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
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
	    throw new TypeError('options must be an object');
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
	        throw new TypeError('option ' + opt + ' must be ' + result);
	      }
	      continue;
	    }
	    if (allowUnknown !== true) {
	      throw Error('Unknown option ' + opt);
	    }
	  }
	}
	var validator$1 = {
	  assertOptions: assertOptions,
	  validators: validators$1
	};

	var utils$1 = utils$d;
	var buildURL = buildURL$2;
	var InterceptorManager = InterceptorManager_1;
	var dispatchRequest = dispatchRequest$1;
	var mergeConfig$1 = mergeConfig$2;
	var validator = validator$1;
	var validators = validator.validators;
	function Axios$1(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	Axios$1.prototype.request = function request(config) {
	  if (typeof config === 'string') {
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
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
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
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
	  Axios$1.prototype[method] = function(url, data, config) {
	    return this.request(mergeConfig$1(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	var Axios_1 = Axios$1;

	var Cancel = Cancel_1;
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
	    token.reason = new Cancel(message);
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
	var CancelToken_1 = CancelToken;

	var spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

	var isAxiosError = function isAxiosError(payload) {
	  return (typeof payload === 'object') && (payload.isAxiosError === true);
	};

	var utils = utils$d;
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
	axios$1.Cancel = Cancel_1;
	axios$1.CancelToken = CancelToken_1;
	axios$1.isCancel = isCancel$2;
	axios$1.VERSION = data.version;
	axios$1.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios$1.spread = spread;
	axios$1.isAxiosError = isAxiosError;
	axios$2.exports = axios$1;
	axios$2.exports.default = axios$1;

	var axios = axios$2.exports;

	function overArg$2(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	var _overArg = overArg$2;

	var overArg$1 = _overArg;
	var getPrototype$1 = overArg$1(Object.getPrototypeOf, Object);
	var _getPrototype = getPrototype$1;

	var baseGetTag$1 = _baseGetTag,
	    getPrototype = _getPrototype,
	    isObjectLike$1 = isObjectLike_1;
	var objectTag = '[object Object]';
	var funcProto = Function.prototype,
	    objectProto$1 = Object.prototype;
	var funcToString = funcProto.toString;
	var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
	var objectCtorString = funcToString.call(Object);
	function isPlainObject(value) {
	  if (!isObjectLike$1(value) || baseGetTag$1(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	var isPlainObject_1 = isPlainObject;

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
	var restPending = new map$4();
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
	  forEach$2(_context = keys$3(config)).call(_context, function (key) {
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
	  var newOptions = keyExists ? {} : deepMerge(baseConfig, isPlainObject_1(config) && config);
	  return axios.create(newOptions);
	};

	function arrayEach$1(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	var _arrayEach = arrayEach$1;

	function createBaseFor$1(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	var _createBaseFor = createBaseFor$1;

	var createBaseFor = _createBaseFor;
	var baseFor$1 = createBaseFor();
	var _baseFor = baseFor$1;

	var overArg = _overArg;
	var nativeKeys$1 = overArg(Object.keys, Object);
	var _nativeKeys = nativeKeys$1;

	var isPrototype = _isPrototype,
	    nativeKeys = _nativeKeys;
	var objectProto = Object.prototype;
	var hasOwnProperty = objectProto.hasOwnProperty;
	function baseKeys$1(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	var _baseKeys = baseKeys$1;

	var arrayLikeKeys = _arrayLikeKeys,
	    baseKeys = _baseKeys,
	    isArrayLike$1 = isArrayLike_1;
	function keys$1(object) {
	  return isArrayLike$1(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	var keys_1 = keys$1;

	var baseFor = _baseFor,
	    keys = keys_1;
	function baseForOwn$1(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	var _baseForOwn = baseForOwn$1;

	var isArrayLike = isArrayLike_1;
	function createBaseEach$1(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	var _createBaseEach = createBaseEach$1;

	var baseForOwn = _baseForOwn,
	    createBaseEach = _createBaseEach;
	var baseEach$1 = createBaseEach(baseForOwn);
	var _baseEach = baseEach$1;

	var identity = identity_1;
	function castFunction$1(value) {
	  return typeof value == 'function' ? value : identity;
	}
	var _castFunction = castFunction$1;

	var arrayEach = _arrayEach,
	    baseEach = _baseEach,
	    castFunction = _castFunction,
	    isArray$1 = isArray_1;
	function forEach(collection, iteratee) {
	  var func = isArray$1(collection) ? arrayEach : baseEach;
	  return func(collection, castFunction(iteratee));
	}
	var forEach_1 = forEach;

	var $ = _export$1;
	var global$1 = global$11;
	var getBuiltIn = getBuiltIn$e;
	var apply$1 = functionApply;
	var uncurryThis$1 = functionUncurryThis$1;
	var fails = fails$u;
	var Array$1 = global$1.Array;
	var $stringify = getBuiltIn('JSON', 'stringify');
	var exec = uncurryThis$1(/./.exec);
	var charAt = uncurryThis$1(''.charAt);
	var charCodeAt = uncurryThis$1(''.charCodeAt);
	var replace = uncurryThis$1(''.replace);
	var numberToString = uncurryThis$1(1.0.toString);
	var tester = /[\uD800-\uDFFF]/g;
	var low = /^[\uD800-\uDBFF]$/;
	var hi = /^[\uDC00-\uDFFF]$/;
	var fix = function (match, offset, string) {
	  var prev = charAt(string, offset - 1);
	  var next = charAt(string, offset + 1);
	  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
	    return '\\u' + numberToString(charCodeAt(match, 0), 16);
	  } return match;
	};
	var FORCED = fails(function () {
	  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
	    || $stringify('\uDEAD') !== '"\\udead"';
	});
	if ($stringify) {
	  $({ target: 'JSON', stat: true, forced: FORCED }, {
	    stringify: function stringify(it, replacer, space) {
	      for (var i = 0, l = arguments.length, args = Array$1(l); i < l; i++) args[i] = arguments[i];
	      var result = apply$1($stringify, null, args);
	      return typeof result == 'string' ? replace(result, tester, fix) : result;
	    }
	  });
	}

	var path = path$d;
	var apply = functionApply;
	if (!path.JSON) path.JSON = { stringify: JSON.stringify };
	var stringify$2 = function stringify(it, replacer, space) {
	  return apply(path.JSON.stringify, null, arguments);
	};

	var parent = stringify$2;
	var stringify$1 = parent;

	var stringify = stringify$1;

	var baseGetTag = _baseGetTag,
	    isArray = isArray_1,
	    isObjectLike = isObjectLike_1;
	var stringTag = '[object String]';
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
	}
	var isString_1 = isString;

	var errorMsg = {
	  typeVerify: function typeVerify(type) {
	    return "[Type Error]: Must be a '".concat(type, "'.");
	  }
	};
	var stringTypeVerify = function stringTypeVerify(string) {
	  return !(!isString_1(string) && console.error(errorMsg.typeVerify('string')));
	};
	var webStorage = {
	  set: function set(key, value) {
	    if (stringTypeVerify(key)) {
	      localStorage.setItem(key, stringify(value));
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
	  forEach$2(keyList).call(keyList, function (key) {
	    if (key in keyObj) {
	      webStorage.set(key, keyObj[key]);
	    }
	  });
	};
	var removeTokens = function removeToken() {
	  var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  forEach_1(keys, function (value) {
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
	  setTimeout$1(function () {
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
	    return promise.reject(error);
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
	        if (isFunction_1(instance.options.onLogout) && instance.cancelTimes === 1) {
	          instance.options.onLogout();
	        }
	      });
	    }
	    return promise.reject(error);
	  });
	}
	function exception(instance, messageIpt, codeIpt) {
	  instance.code = codeIpt || 200;
	  instance.message = messageIpt || 'OK';
	  instance.name = 'exception';
	}
	var privateMethods = {
	  interceptors: interceptors,
	  reset: reset,
	  autoLogout: autoLogout,
	  exception: exception
	};

	promise_prototype_finally.shim();
	var DEFAULTS = freeze({
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
	    this.tokenKeys = [ACCESS_TOKEN_NAME, TOKEN_EXPIRED_NAME, TOKEN_TYPE, TOKEN_SCOPE, REFRESH_TOKEN_NAME, TOKEN_CHECK_SUM, TOKEN_CREATE_TIME_NAME];
	    this.intervalSync = null;
	    this.intervalRefresh = null;
	    this.syncTimes = 0;
	    this.refreshTimes = 0;
	    this.axiosPending = new map$4();
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
	        privateMethods.autoLogout();
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
	      return new promise(function (resolve, reject) {
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
	      var _context;
	      var instance = this;
	      var rest = this.rest;
	      var refreshToken = webStorage.get(REFRESH_TOKEN_NAME);
	      if (!refreshToken) {
	        throw privateMethods.exception(instance, 'Need Refresh Token !', 401);
	      }
	      return rest.post(concat$2(_context = "".concat(api.refresh, "?v=")).call(_context, rand(11111, 99999)), queryString({
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
	        return res;
	      }).catch(function (error) {
	        instance.refreshTimes += 1;
	        if (instance.refreshTimes >= MAX_REQUEST_TIMES) {
	          throw new Error(MAX_REQUEST_MESSAGE, instance.refreshTimes);
	        }
	        return error;
	      });
	    }
	  }, {
	    key: "autoSync",
	    value: function autoSync() {
	      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var instance = this;
	      var options = this.options;
	      var tkCheckSum = "".concat(options.cookie_prefix, "tkchecksum") || 'tkchecksum';
	      var syncReadyState = instance.axiosPending.get('sync');
	      var getSyncState = function getSyncState() {
	        return typeof syncReadyState === 'undefined' || syncReadyState === null;
	      };
	      var checkSumNoEqual = function checkSumNoEqual() {
	        return api$1.get(tkCheckSum) !== webStorage.get('token_checksum');
	      };
	      if (!instance.intervalSync) {
	        instance.intervalSync = setInterval( _asyncToGenerator( regenerator.mark(function _callee() {
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
	                    setTimeout$1(function () {
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
	        setTimeout$1(function () {
	          return instance.autoRefresh();
	        }, 30000);
	      };
	      if (!instance.intervalRefresh) {
	        var refreshReadyState = instance.axiosPending.get('refresh');
	        var getRefreshState = function getRefreshState() {
	          return typeof refreshReadyState === 'undefined' || refreshReadyState === null;
	        };
	        instance.intervalRefresh = setInterval(function () {
	          try {
	            var nowTime = _parseInt(now() / 1000, 10);
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
	            console.log(concat$2(_context3 = "[".concat(e.code, "]")).call(_context3, e.message));
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
	      var _context4;
	      var rest = this.rest;
	      var validateToken = token || '';
	      return rest.get(concat$2(_context4 = "".concat(api.validate, "?v=")).call(_context4, rand(11111, 99999)), {
	        headers: {
	          Authorization: "Bearer ".concat(validateToken)
	        }
	      });
	    }
	  }, {
	    key: "getToken",
	    value: function getToken() {
	      return webStorage.get(ACCESS_TOKEN_NAME);
	    }
	  }, {
	    key: "loginIAM",
	    value: function loginIAM() {
	      var _context5;
	      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	      var options = this.options;
	      var ssoUrl = concat$2(_context5 = "".concat(options.sso_url, "/login?redirect_uri=")).call(_context5, options.redirect_url) || '';
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
	      var loginKey = "".concat(options.cookie_prefix, "login") || 'login';
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
