!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["Rili Public Library: React Components"]=t(require("react"),require("prop-types")):e["Rili Public Library: React Components"]=t(e.react,e["prop-types"])}(window,function(e,t){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="UK7I")}({UK7I:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r("cDcd"),n=r("rf6O");class i extends o.Component{constructor(e){super(e),this.selectOption=(e=>{e.preventDefault();const t=this.props.name,r=e.target.dataset.value;this.props.onSelect(t,r)})}render(){const{options:e,value:t}=this.props;return o.createElement("div",{className:"radio-group form-field"},e.map(e=>o.createElement("div",{key:e.value,className:"radio-option"},o.createElement("button",{className:"psuedo-label","data-value":e.value,onClick:this.selectOption,type:"button"},e.text),o.createElement("label",{className:e.value===t?"selected":"","data-value":e.value,htmlFor:e.value,onClick:this.selectOption}))))}}i.propTypes={name:n.string.isRequired,onSelect:n.func.isRequired,options:n.arrayOf(n.shape({value:n.oneOfType([n.string,n.number,n.bool]).isRequired,text:n.string.isRequired})).isRequired,value:n.oneOfType([n.string,n.number,n.bool]).isRequired},t.default=i},cDcd:function(t,r){t.exports=e},rf6O:function(e,r){e.exports=t}})});
//# sourceMappingURL=RadioGroup.js.map