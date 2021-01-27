!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t=t||self).index=t.index||{},t.index.js={}))}(this,(function(t){"use strict";var e=Object.prototype.toString.call,n=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===e.call(t)};var r=function(t){return"[object Object]"===e.call(t)};function o(t,e){if(!(t instanceof HTMLElement))throw new Error("请传入正确的DOM元素");return getComputedStyle?getComputedStyle(t).getPropertyValue(e):t.style.stylename}function i(t){if(!(t instanceof HTMLElement))throw new Error("请传入正确的元素");return t.parentNode===document?null:t.parentNode}var a=function(t){if(Array.isArray(t))return t};var l=function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}};var c=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")};var u=function(t,e){return a(t)||l(t,e)||c()},f=function(){return Math.random().toString(36).slice(2)},s=function(t){if(t instanceof Function){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return t.apply(void 0,n)}return t};t.addClass=function(t,e){if(!(t instanceof HTMLElement))throw"第一个参数必须是一个HTML元素节点，而不是".concat(t);if(!e)throw"传入的className为空";t.classList.add(e)},t.blobToFile=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file",n=arguments.length>2?arguments[2]:void 0;if(!n)throw new Error("请传入转化文件的类型type!!!");return new File([t],e,{type:n})},t.dataURLToBlob=function(t){for(var e=t.split(","),n=atob(e[1]),r=n.length,o=new Uint8Array(r);r--;)o[r]=n.charCodeAt(r);return new Blob([o])},t.dataURLtoFile=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file",n=arguments.length>2?arguments[2]:void 0,r=t.split(","),o=atob(r[1]);!n&&(n=r[0].replace("data:","").replace(";base64",""));for(var i=o.length,a=new Uint8Array(i);i--;)a[i]=o.charCodeAt(i);return new File([a],e,{type:n})},t.debounce=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var r=this,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];e&&clearTimeout(e),e=setTimeout((function(){t.apply(r,i)}),n)}},t.deepCopy=function(t){return JSON.parse(JSON.stringify(t))},t.fileOrBlobToDataURL=function(t){var e=new FileReader;return e.readAsDataURL(t),new Promise((function(t,n){e.onload=function(e){t(e.target.result)},e.onerror=function(t){n(t)}}))},t.fileToBlob=function(t){var e=new FileReader;return e.readAsArrayBuffer(t),new Promise((function(n,r){e.onload=function(e){n(new Blob([e.target.result],{type:t.type}))},e.onerror=function(t){r(t)}}))},t.getElementStyle=function(t,e,n){return n?getComputedStyle(t,n)[e]:t&&t.style&&t.style[e]?t.style[e]:(getComputedStyle(t)||{})[e]},t.getElementStyleValue=o,t.getParentElement=i,t.getParentWithStyle=function(t,e,n){if(!(t instanceof HTMLElement))throw new Error("请传入正确的DOM元素");for(var r=i(t);r;){if([window,document,document.body,document.documentElement].includes(r))return window;for(var a="",l=0;l<e.length;l++)a+=o(r,e[l]);for(var c=0;c<e.length;c++)if(a.includes(n[c]))return r;r=r.parentNode}return window},t.getScrollHeight=function(t){return!t||[window,document,document.body,document.documentElement].includes(t)?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight):t.scrollHeight},t.getScrollTop=function(t){return!t||[window,document,document.body,document.documentElement].includes(t)?Math.max(document.body.scrollTop,document.documentElement.scrollTop,window.scrollY):t.scrollTop},t.isArray=n,t.isDate=function(t){return!(!t||isNaN(Date.parse(t)))},t.isEmtpyArr=function(t){if(!n(t))throw"This value is not an Array: "+t;return 0===t.length},t.isEmtpyObj=function(t){if(!r(t))throw"This value is not an Object: "+t;return 0===Object.keys(t).length},t.isMobile=function(){var t=navigator.userAgent;return["iPhone","iPad","Android","Windows Phone","BB10; Touch","BB10; Touch","PlayBook","Nokia"].filter((function(e){return t.indexOf(e)>0})).length>0},t.isNumber=function(t){return"[object Number]"===e.call(t)},t.isObject=r,t.loasdScript=function(t){return new Promise((function(e,n){var r=document.createElement("script");r.async=!0,r.src=t,r.onload=e,r.onerror=function(e){return n(new Error("Unable to load "+t+": "+e))},document.body.appendChild(r)}))},t.nextElement=function(t){return t.nextElementSibling||function(){var e=t;do{e=e.nextSibling}while(e&&1!==e.nodeType);return e}()},t.preventDefault=function(t){if(!t)throw"传参event不存在";t.preventDefault()},t.queryAnalysis=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e={},n=t?location.hash:location.search;if(!n)return{};if(window.URLSearchParams){var r=new URLSearchParams(n),o=!0,i=!1,a=void 0;try{for(var l,c=r.keys()[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var f=l.value;e[f]=r.get(f)}}catch(t){i=!0,a=t}finally{try{o||null==c.return||c.return()}finally{if(i)throw a}}return e}return(n=(n=n.substring(1,n.length)).split("&")).forEach((function(t){t=t.split("=");var n=u(t,2),r=n[0],o=n[1];e[r]||(e[r]=o)})),e},t.randomStr=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:11,e=t/11,n="",r=0;r<e;r++)n+=f();return n.slice(0,t)},t.readClass=function(t,e){if(!(t instanceof HTMLElement))throw"第一个参数必须是一个HTML元素节点，而不是".concat(t);if(!e)throw"传入的className为空";return t.classList.contains(e)},t.removeClass=function(t,e){if(!(t instanceof HTMLElement))throw"第一个参数必须是一个HTML元素节点，而不是".concat(t);if(!e)throw"传入的className为空";t.classList.remove(e)},t.replaceClass=function(t,e,n){if(!(t instanceof HTMLElement))throw"第一个参数必须是一个HTML元素节点，而不是".concat(t);if(!e)throw"传入的需要被替换的className为空";if(!n)throw"传入的需要替换的className为空";t.classList.replace(e,n)},t.stopPropagation=function(t){if(!t)throw"传参event不存在";t.stopPropagation()},t.throttle=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var r=Date.now(),o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];if(!e)return t.apply(this,i),void(e=r);e+n<=r&&(t.apply(this,i),e=r)}},t.toString=e,t.tryFunc=s,t.tryPromiseFunc=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return new Promise((function(e,r){try{var o=s.apply(void 0,[t].concat(n));o instanceof Promise?o.then((function(t){return e(t)})).catch((function(t){return r(t)})):e(o)}catch(t){r(t)}}))},Object.defineProperty(t,"__esModule",{value:!0})}));
