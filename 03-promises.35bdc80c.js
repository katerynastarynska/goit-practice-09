function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("7Y9D8");const i=document.querySelector(".form"),l=document.querySelector('input[name="delay"]'),d=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');function c(t,n){return new Promise(((e,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?e():t()}),n)})).then((()=>{e(u).Notify.success(`Fulfilled promise ${t} in ${n}ms`)})).catch((()=>{e(u).Notify.failure(`Rejected promise ${t} in ${n}ms`)}))}i.addEventListener("submit",(function(e){e.preventDefault();let t=Number(l.value);for(let e=1;e<=a.value;e+=1)1!==e&&(t+=Number(d.value)),c(e,t)}));
//# sourceMappingURL=03-promises.35bdc80c.js.map