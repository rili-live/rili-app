!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["Rili Public Library: Utilities"]=t():e["Rili Public Library: Utilities"]=t()}(global,function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="tJR5")}({tJR5:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=(({totalItems:e,itemsPerPage:t,pageNumber:r},o=5)=>{let n,i;const u=e?Math.ceil(e/t):0,l=r,f=[],c=Math.floor(o/2);for(let e=0;e<u;e+=1)f.push({pageNumber:e+1});return u<=o?(i=1,n=u):l<=c?(i=1,n=o):l+c>=u?(i=u-(o-1),n=u):o%2==0?(i=l-c,n=l+(c-1)):(i=l-c,n=l+c),{totalPages:u,pagesList:f.slice(i-1,n)}})}})});