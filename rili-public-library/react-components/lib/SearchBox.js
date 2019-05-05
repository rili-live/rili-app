!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["classnames","react","prop-types"],t):"object"==typeof exports?exports["Rili Public Library: React Components"]=t(require("classnames"),require("react"),require("prop-types")):e["Rili Public Library: React Components"]=t(e.classnames,e.react,e["prop-types"])}(window,function(e,t,a){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/",a(a.s="CG+G")}({"8ky+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={isRequired:{errorMessageLocalizationKey:"validations.isRequired",regex:/^(?!\s*$).+/},lettersOnly:{errorMessageLocalizationKey:"validations.lettersOnly",regex:/^$|^[a-zA-Z]*$/},numbersOnly:{errorMessageLocalizationKey:"validations.numbersOnly",regex:/^$|^[0-9]*$/}}},"CG+G":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("cDcd"),r=a("rf6O"),i=a("K2gz"),o=a("QLoG"),s=a("8ky+");class l extends n.Component{constructor(e){super(e),this.handleInputChange=((e,t)=>{this.setState({inputValue:t,isDirty:!!t.length}),this.props.onChange(e,t)}),this.handleSearch=(e=>{this.props.onSearch(e,this.state.inputValue)}),this.onBlur=(()=>{this.setState({isActive:!1})}),this.onFocus=(()=>{this.setState({isActive:!0})}),this.state={inputValue:e.value,isDirty:!!e.value,isActive:!1}}componentWillReceiveProps(e){this.setState({inputValue:e.value})}render(){const{autoComplete:e,disabled:t,id:a,labelText:r,name:s,translate:l,validations:u}=this.props,{inputValue:d,isActive:c,isDirty:p}=this.state,m=i.default({"is-dirty":p,"is-active":c});return n.createElement("div",{className:`search-box icon-medium search ${m}`},n.createElement("label",{htmlFor:a},r),n.createElement(o.default,{autoComplete:e,disabled:t,id:a,name:s,onChange:this.handleInputChange,onBlur:this.onBlur,onEnter:this.handleSearch,translate:l,type:"search",onFocus:this.onFocus,validations:u,value:d}))}}l.propTypes={autoComplete:r.oneOf(["off","on"]),disabled:r.bool,id:r.string.isRequired,labelText:r.string.isRequired,name:r.string.isRequired,onChange:r.func.isRequired,onSearch:r.func.isRequired,translate:r.func.isRequired,value:r.string.isRequired,validations:r.arrayOf(r.oneOf(Object.keys(s.default)))},l.defaultProps={autoComplete:"on",disabled:!1,isRequired:!1,validations:[]},t.default=l},K2gz:function(t,a){t.exports=e},QLoG:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=a("cDcd"),r=a("rf6O"),i=a("K2gz"),o=a("oPNX"),s=a("8ky+");class l extends n.Component{constructor(e){super(e),this.handleInputChange=(e=>{const t=e.target.name,a=e.target.value;this.setState({isDirty:a&&!1!==a,inputValue:a}),this.props.onChange(t,a)}),this.handleKeyDown=(e=>{this.props.onEnter&&e.keyCode===o.Key.Enter&&this.props.onEnter(e)}),this.onFocus=(()=>{this.setState({isTouched:!0}),this.props.onFocus&&this.props.onFocus()}),this.updateValidations=(e=>{const{onValidate:t,translate:a}=this.props,n=[];0!==e.validations.length&&(e.validations.forEach(t=>{s.default[t].regex.test(e.value)||n.push({key:t,message:a(s.default[t].errorMessageLocalizationKey,{value:e.value})})}),this.setState({validationErrors:n}),t&&t({[e.id]:n}))}),this.state={isDirty:!1,isTouched:!1,inputValue:e.value,validationErrors:[]}}componentDidMount(){this.updateValidations(this.props)}componentWillReceiveProps(e){this.props.value!==e.value?this.setState({inputValue:e.value},()=>this.updateValidations(e)):e.validations.some(t=>!this.props.validations.includes(t)&&(this.updateValidations(e),!0))}render(){const{autoComplete:e,className:t,disabled:a,formClassName:r,id:o,name:s,placeholder:l,type:u,onBlur:d,validations:c}=this.props,{inputValue:p,isDirty:m,isTouched:h,validationErrors:f}=this.state,y=i.default({"is-dirty":m,"is-invalid":f.length>0,"is-touched":h,"is-valid":0===f.length&&c.length>0});return n.createElement("div",{className:`form-field ${r}`},n.createElement("input",{ref:e=>{this.inputEl=e},autoComplete:e,className:`${t} ${y}`,disabled:a,id:o,name:s,type:u,value:p,onChange:this.handleInputChange,onBlur:d,onFocus:this.onFocus,onKeyDown:this.handleKeyDown,placeholder:l}),f.length>0&&(h||m)&&n.createElement("div",{className:"validation-errors"},f.map(e=>n.createElement("div",{key:e.key,className:"message-container icon-small attention-alert"},n.createElement("em",{className:"message"},e.message)))))}}l.propTypes={autoComplete:r.oneOf(["off","on"]),className:r.string,formClassName:r.string,disabled:r.bool,id:r.string.isRequired,name:r.string.isRequired,onChange:r.func.isRequired,onBlur:r.func,onFocus:r.func,onEnter:r.func,onValidate:r.func,placeholder:r.string,translate:r.func.isRequired,type:r.oneOf(["number","password","search","text","url"]),validations:r.arrayOf(r.oneOf(Object.keys(s.default))),value:r.string},l.defaultProps={autoComplete:"on",className:"appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter py-3 px-4",disabled:!1,formClassName:"",isRequired:!1,onBlur:null,onFocus:null,onEnter:null,onValidate:null,placeholder:"",type:"text",validations:[],value:""},t.default=l},cDcd:function(e,a){e.exports=t},oPNX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.Backspace=8]="Backspace",e[e.Tab=9]="Tab",e[e.Enter=13]="Enter",e[e.Shift=16]="Shift",e[e.Ctrl=17]="Ctrl",e[e.Alt=18]="Alt",e[e.PauseBreak=19]="PauseBreak",e[e.CapsLock=20]="CapsLock",e[e.Escape=27]="Escape",e[e.Space=32]="Space",e[e.PageUp=33]="PageUp",e[e.PageDown=34]="PageDown",e[e.End=35]="End",e[e.Home=36]="Home",e[e.LeftArrow=37]="LeftArrow",e[e.UpArrow=38]="UpArrow",e[e.RightArrow=39]="RightArrow",e[e.DownArrow=40]="DownArrow",e[e.Insert=45]="Insert",e[e.Delete=46]="Delete",e[e.Zero=48]="Zero",e[e.ClosedParen=48]="ClosedParen",e[e.One=49]="One",e[e.ExclamationMark=49]="ExclamationMark",e[e.Two=50]="Two",e[e.AtSign=50]="AtSign",e[e.Three=51]="Three",e[e.PoundSign=51]="PoundSign",e[e.Hash=51]="Hash",e[e.Four=52]="Four",e[e.DollarSign=52]="DollarSign",e[e.Five=53]="Five",e[e.PercentSign=53]="PercentSign",e[e.Six=54]="Six",e[e.Caret=54]="Caret",e[e.Hat=54]="Hat",e[e.Seven=55]="Seven",e[e.Ampersand=55]="Ampersand",e[e.Eight=56]="Eight",e[e.Star=56]="Star",e[e.Asterik=56]="Asterik",e[e.Nine=57]="Nine",e[e.OpenParen=57]="OpenParen",e[e.A=65]="A",e[e.B=66]="B",e[e.C=67]="C",e[e.D=68]="D",e[e.E=69]="E",e[e.F=70]="F",e[e.G=71]="G",e[e.H=72]="H",e[e.I=73]="I",e[e.J=74]="J",e[e.K=75]="K",e[e.L=76]="L",e[e.M=77]="M",e[e.N=78]="N",e[e.O=79]="O",e[e.P=80]="P",e[e.Q=81]="Q",e[e.R=82]="R",e[e.S=83]="S",e[e.T=84]="T",e[e.U=85]="U",e[e.V=86]="V",e[e.W=87]="W",e[e.X=88]="X",e[e.Y=89]="Y",e[e.Z=90]="Z",e[e.LeftWindowKey=91]="LeftWindowKey",e[e.RightWindowKey=92]="RightWindowKey",e[e.SelectKey=93]="SelectKey",e[e.Numpad0=96]="Numpad0",e[e.Numpad1=97]="Numpad1",e[e.Numpad2=98]="Numpad2",e[e.Numpad3=99]="Numpad3",e[e.Numpad4=100]="Numpad4",e[e.Numpad5=101]="Numpad5",e[e.Numpad6=102]="Numpad6",e[e.Numpad7=103]="Numpad7",e[e.Numpad8=104]="Numpad8",e[e.Numpad9=105]="Numpad9",e[e.Multiply=106]="Multiply",e[e.Add=107]="Add",e[e.Subtract=109]="Subtract",e[e.DecimalPoint=110]="DecimalPoint",e[e.Divide=111]="Divide",e[e.F1=112]="F1",e[e.F2=113]="F2",e[e.F3=114]="F3",e[e.F4=115]="F4",e[e.F5=116]="F5",e[e.F6=117]="F6",e[e.F7=118]="F7",e[e.F8=119]="F8",e[e.F9=120]="F9",e[e.F10=121]="F10",e[e.F11=122]="F11",e[e.F12=123]="F12",e[e.NumLock=144]="NumLock",e[e.ScrollLock=145]="ScrollLock",e[e.SemiColon=186]="SemiColon",e[e.Equals=187]="Equals",e[e.Comma=188]="Comma",e[e.Dash=189]="Dash",e[e.Period=190]="Period",e[e.UnderScore=189]="UnderScore",e[e.PlusSign=187]="PlusSign",e[e.ForwardSlash=191]="ForwardSlash",e[e.Tilde=192]="Tilde",e[e.GraveAccent=192]="GraveAccent",e[e.OpenBracket=219]="OpenBracket",e[e.ClosedBracket=221]="ClosedBracket",e[e.Quote=222]="Quote"}(t.Key||(t.Key={}))},rf6O:function(e,t){e.exports=a}})});
//# sourceMappingURL=SearchBox.js.map