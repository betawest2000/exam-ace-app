// Import all question code modules
import clamp from './clamp';
import functionLength from './function-length';
import makeCounter from './make-counter';
import mean from './mean';
import numberOfArguments from './number-of-arguments';
import sleep from './sleep';
import arraySquare from './array-square';
import cancellableInterval from './cancellable-interval';
import cancellableTimeout from './cancellable-timeout';
import chunk from './chunk';
import compact from './compact';
import difference from './difference';
import dropRightWhile from './drop-right-while';
import dropWhile from './drop-while';
import fill from './fill';
import findIndex from './find-index';
import findLastIndex from './find-last-index';
import fromPairs from './from-pairs';
import functionApply from './function-apply';
import functionCall from './function-call';
import get from './get';
import inRange from './in-range';
import intersection from './intersection';
import maxBy from './max-by';
import minBy from './min-by';
import objectMap from './object-map';
import once from './once';
import promiseReject from './promise-reject';
import range from './range';
import rangeRight from './range-right';
import singleton from './singleton';
import typeUtilities from './type-utilities';
import uniqueArray from './unique-array';
import arrayAt from './array-at';
import arrayFilter from './array-filter';
import arrayMap from './array-map';
import arrayReduce from './array-reduce';
import compose from './compose';
import cycle from './cycle';
import functionBind from './function-bind';
import jqueryCss from './jquery-css';
import promiseRace from './promise-race';
import size from './size';
import sum from './sum';
import typeUtilitiesIi from './type-utilities-ii';
import makeCounterIi from './make-counter-ii';
import arrayConcat from './array-concat';
import countBy from './count-by';
import curry from './curry';
import debounce from './debounce';
import groupBy from './group-by';
import intersectionBy from './intersection-by';
import intersectionWith from './intersection-with';
import isEmpty from './is-empty';
import limit from './limit';
import promiseMerge from './promise-merge';
import promiseTimeout from './promise-timeout';
import promiseResolve from './promise-resolve';
import promiseWithResolvers from './promise-with-resolvers';
import promisify from './promisify';
import promisifyIi from './promisify-ii';
import throttle from './throttle';
import turtle from './turtle';
import unionBy from './union-by';
import camelCaseKeys from './camel-case-keys';
import classnames from './classnames';
import compactIi from './compact-ii';
import conformsTo from './conforms-to';
import curryIi from './curry-ii';
import dataMerging from './data-merging';
import debounceIi from './debounce-ii';
import eventEmitter from './event-emitter';
import eventEmitterIi from './event-emitter-ii';
import flatten from './flatten';
import getElementsByStyle from './get-elements-by-style';
import getElementsByTagName from './get-elements-by-tag-name';
import htmlSerializer from './html-serializer';
import identicalDomTrees from './identical-dom-trees';
import jqueryClassManipulation from './jquery-class-manipulation';
import jsonStringify from './json-stringify';
import listFormat from './list-format';
import mapAsync from './map-async';
import memoize from './memoize';
import middlewares from './middlewares';
import promiseAll from './promise-all';
import promiseAllSettled from './promise-all-settled';
import promiseAny from './promise-any';
import resumableInterval from './resumable-interval';
import squashObject from './squash-object';
import textSearch from './text-search';
import deepClone from './deep-clone';
import deepEqual from './deep-equal';
import deepMap from './deep-map';
import getElementsByClassName from './get-elements-by-class-name';
import mapAsyncLimit from './map-async-limit';
import textSearchIi from './text-search-ii';
import deepMerge from './deep-merge';
import deepOmit from './deep-omit';
import memoizeIi from './memoize-ii';
import curryIii from './curry-iii';
import classnamesIi from './classnames-ii';
import backboneModel from './backbone-model';
import dataSelection from './data-selection';
import getElementsByTagNameHierarchy from './get-elements-by-tag-name-hierarchy';
import tableOfContents from './table-of-contents';
import deepCloneIi from './deep-clone-ii';
import jsonStringifyIi from './json-stringify-ii';

// Export as an object
const codeModules = {
  "clamp": clamp,
  "function-length": functionLength,
  "make-counter": makeCounter,
  "mean": mean,
  "number-of-arguments": numberOfArguments,
  "sleep": sleep,
  "array-square": arraySquare,
  "cancellable-interval": cancellableInterval,
  "cancellable-timeout": cancellableTimeout,
  "chunk": chunk,
  "compact": compact,
  "difference": difference,
  "drop-right-while": dropRightWhile,
  "drop-while": dropWhile,
  "fill": fill,
  "find-index": findIndex,
  "find-last-index": findLastIndex,
  "from-pairs": fromPairs,
  "function-apply": functionApply,
  "function-call": functionCall,
  "get": get,
  "in-range": inRange,
  "intersection": intersection,
  "max-by": maxBy,
  "min-by": minBy,
  "object-map": objectMap,
  "once": once,
  "promise-reject": promiseReject,
  "range": range,
  "range-right": rangeRight,
  "singleton": singleton,
  "type-utilities": typeUtilities,
  "unique-array": uniqueArray,
  "array-at": arrayAt,
  "array-filter": arrayFilter,
  "array-map": arrayMap,
  "array-reduce": arrayReduce,
  "compose": compose,
  "cycle": cycle,
  "function-bind": functionBind,
  "jquery-css": jqueryCss,
  "promise-race": promiseRace,
  "size": size,
  "sum": sum,
  "type-utilities-ii": typeUtilitiesIi,
  "make-counter-ii": makeCounterIi,
  "array-concat": arrayConcat,
  "count-by": countBy,
  "curry": curry,
  "debounce": debounce,
  "group-by": groupBy,
  "intersection-by": intersectionBy,
  "intersection-with": intersectionWith,
  "is-empty": isEmpty,
  "limit": limit,
  "promise-merge": promiseMerge,
  "promise-timeout": promiseTimeout,
  "promise-resolve": promiseResolve,
  "promise-with-resolvers": promiseWithResolvers,
  "promisify": promisify,
  "promisify-ii": promisifyIi,
  "throttle": throttle,
  "turtle": turtle,
  "union-by": unionBy,
  "camel-case-keys": camelCaseKeys,
  "classnames": classnames,
  "compact-ii": compactIi,
  "conforms-to": conformsTo,
  "curry-ii": curryIi,
  "data-merging": dataMerging,
  "debounce-ii": debounceIi,
  "event-emitter": eventEmitter,
  "event-emitter-ii": eventEmitterIi,
  "flatten": flatten,
  "get-elements-by-style": getElementsByStyle,
  "get-elements-by-tag-name": getElementsByTagName,
  "html-serializer": htmlSerializer,
  "identical-dom-trees": identicalDomTrees,
  "jquery-class-manipulation": jqueryClassManipulation,
  "json-stringify": jsonStringify,
  "list-format": listFormat,
  "map-async": mapAsync,
  "memoize": memoize,
  "middlewares": middlewares,
  "promise-all": promiseAll,
  "promise-all-settled": promiseAllSettled,
  "promise-any": promiseAny,
  "resumable-interval": resumableInterval,
  "squash-object": squashObject,
  "text-search": textSearch,
  "deep-clone": deepClone,
  "deep-equal": deepEqual,
  "deep-map": deepMap,
  "get-elements-by-class-name": getElementsByClassName,
  "map-async-limit": mapAsyncLimit,
  "text-search-ii": textSearchIi,
  "deep-merge": deepMerge,
  "deep-omit": deepOmit,
  "memoize-ii": memoizeIi,
  "curry-iii": curryIii,
  "classnames-ii": classnamesIi,
  "backbone-model": backboneModel,
  "data-selection": dataSelection,
  "get-elements-by-tag-name-hierarchy": getElementsByTagNameHierarchy,
  "table-of-contents": tableOfContents,
  "deep-clone-ii": deepCloneIi,
  "json-stringify-ii": jsonStringifyIi,
} as Record<string, Record<string, string | Record<string, string>>>;

export default codeModules;
