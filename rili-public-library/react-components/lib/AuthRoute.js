!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-redux"),require("react-router-dom"),require("redux")):"function"==typeof define&&define.amd?define(["react","react-redux","react-router-dom","redux"],t):"object"==typeof exports?exports["Rili Public Library: React Components"]=t(require("react"),require("react-redux"),require("react-router-dom"),require("redux")):e["Rili Public Library: React Components"]=t(e.react,e["react-redux"],e["react-router-dom"],e.redux)}(window,function(e,t,r,o){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s="PD4M")}({PD4M:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r("cDcd"),n=r("oncg"),c=r("h74D"),u=r("rKB8"),i=r("jqod");t.default=n.withRouter(c.connect(e=>({}),e=>u.bindActionCreators({},e))(class extends o.Component{constructor(e){super(e),this.redirectPath="/login";const{redirectPath:t}=this.props;t&&(this.redirectPath=t)}render(){const{exact:e,isAuthorized:t,location:r,path:c}=this.props,u=Object.assign({},this.props);return delete u.access,delete u.component,o.createElement(n.Route,{location:r,path:c,exact:e,render:e=>t?o.createElement(this.props.component,Object.assign({},e)):o.createElement(i.default,{statusCode:307,to:{pathname:this.redirectPath,state:{from:e.location}}})})}}))},cDcd:function(t,r){t.exports=e},h74D:function(e,r){e.exports=t},jqod:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const o=r("cDcd"),n=r("oncg");t.default=class extends o.Component{constructor(e){super(e)}render(){const{from:e,statusCode:t,to:r}=this.props;return o.createElement(n.Route,{render:({staticContext:c})=>(c&&(c.statusCode=t),o.createElement(n.Redirect,{from:e,to:r}))})}}},oncg:function(e,t){e.exports=r},rKB8:function(e,t){e.exports=o}})});
//# sourceMappingURL=AuthRoute.js.map