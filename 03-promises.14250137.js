!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("6JpON"),i=document.querySelector(".form"),c=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]');function f(n,t){return new Promise((function(e,n){var o=Math.random()>.3;setTimeout((function(){o?e():n()}),t)})).then((function(){e(u).Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(){e(u).Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(c.value),t=1;t<=l.value;t+=1)1!==t&&(n+=Number(a.value)),f(t,n);i.reset()}))}();
//# sourceMappingURL=03-promises.14250137.js.map