var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error(e.message)}},n=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e.message)}},o=e=>{try{localStorage.removeItem(e)}catch(e){console.error(e.message)}};var r={},i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=s||l||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function y(e,t,n){var o,r,i,a,f,c,u=0,s=!1,l=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,u=t,a=e.apply(i,n)}function y(e){return u=e,f=setTimeout(S,t),s?m(e):a}function h(e){var n=e-c;return void 0===c||n>=t||n<0||l&&e-u>=i}function S(){var e=g();if(h(e))return w(e);f=setTimeout(S,function(e){var n=t-(e-c);return l?p(n,i-(e-u)):n}(e))}function w(e){return f=void 0,d&&o?m(e):(o=r=void 0,a)}function O(){var e=g(),n=h(e);if(o=arguments,r=this,c=e,n){if(void 0===f)return y(c);if(l)return f=setTimeout(S,t),m(c)}return void 0===f&&(f=setTimeout(S,t)),a}return t=j(t)||0,b(n)&&(s=!!n.leading,i=(l="maxWait"in n)?v(j(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=f.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):a.test(e)?NaN:+e}r=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:o,maxWait:t,trailing:r})};const h=document.querySelector(".js-feedback-form"),S=document.querySelector(".js-feedback-form input"),w=document.querySelector(".js-feedback-form textarea");function O(){const e={email:S.value,message:w.value};t("feedback-form-state",e)}h.addEventListener("submit",(function(e){e.preventDefault(),h.reset(),function(){const e=n("feedback-form-state");console.log(e)}()})),S.addEventListener("input",r(O,500)),w.addEventListener("input",r(O,500)),function(){const e=n("feedback-form-state")||"";S.value=e.email||"",w.value=e.message||"",o("feedback-form-state")}();
//# sourceMappingURL=03-feedback.e301c750.js.map
