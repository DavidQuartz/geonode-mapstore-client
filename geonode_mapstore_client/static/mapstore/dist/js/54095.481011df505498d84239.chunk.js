(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[54095],{352595:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=(0,r(461365).Z)(r(480681).aV)},145869:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(124852),o=r.n(n),i=r(45697),c=r.n(i);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function a(e,t,r){return t=s(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,p()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function p(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(p=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function b(e,t,r){return(t=y(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e){var t=function(e,t){if("object"!=u(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o().createElement("label",{className:"mapstore-switch-btn ".concat(this.props.className)},o().createElement("input",{type:"checkbox",disabled:this.props.disabled,checked:this.props.checked,onChange:function(){return e.props.onChange(!e.props.checked)}}),o().createElement("span",{onClick:function(){return e.props.onClick(!e.props.checked)},className:"m-slider"}))}}])&&l(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);b(d,"propTypes",{disabled:c().bool,className:c().string,checked:c().bool,onChange:c().func,onClick:c().func}),b(d,"defaultProps",{className:"",checked:!1,onChange:function(){},onClick:function(){}});const h=d},112346:(e,t,r)=>{"use strict";r.d(t,{Z:()=>B});var n=r(124852),o=r.n(n),i=r(45697),c=r.n(i),u=r(480681),l=r(145869),a=r(80717),p=r(805346);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function b(e,t,r){return t=d(t),function(e,t){if(t&&("object"==s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],d(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function m(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this;return o().createElement(a.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},btnGroupProps:{style:{margin:5}},buttons:[{glyph:this.props.checked?"chevron-down":"chevron-left",visible:!0,disabled:this.props.disabled,tooltip:this.props.checked?o().createElement(p.Z,{msgId:"collapse"}):o().createElement(p.Z,{msgId:"expand"}),onClick:function(){return e.props.onClick(!e.props.checked)}}]})}}])&&f(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);m(g,"propTypes",{checked:c().bool,disabled:c().bool,onClick:c().func}),m(g,"defaultProps",{checked:!1,disabled:!1,onClick:function(){}});const w=g;var O=r(38560),j=r(82110);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,x(n.key),n)}}function k(e,t,r){return t=_(t),function(e,t){if(t&&("object"==P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,S()?Reflect.construct(t,r||[],_(e).constructor):t.apply(e,r))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function T(e,t,r){return(t=x(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e){var t=function(e,t){if("object"!=P(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==P(t)?t:t+""}var N=function(){return o().createElement(O.Z,{className:"square-button-sm no-border switch-error"},o().createElement(u.gG,{glyph:"exclamation-mark",className:"text-danger"}))},Z=function(){return o().createElement("div",{className:"switch-loading"},o().createElement(j.Z,{size:"small"}))},R=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return T(e=k(this,t,[].concat(n)),"state",{}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(t,e),r=t,(n=[{key:"renderHeader",value:function(){var e=this,t=this.props.useToolbar?w:l.Z;return o().createElement("div",null,o().createElement("div",{className:"pull-left"},this.props.title||this.props.header),o().createElement("div",{className:"pull-right"},this.props.locked?null:o().createElement(t,{disabled:this.props.disabled,checked:this.props.expanded,onClick:function(t){e.props.disabled||e.props.onSwitch(t)}}),this.props.error?o().createElement(N,null):null,this.props.loading?o().createElement(Z,null):null,this.props.buttons.length>0&&this.props.expanded&&o().createElement(a.Z,{btnDefaultProps:{className:"square-button-sm no-border"},buttons:this.props.buttons})))}},{key:"render",value:function(){return o().createElement(u.s_,{className:"mapstore-switch-panel",collapsible:!0,expanded:this.props.expanded,defaultExpanded:this.props.defaultExpanded,header:this.renderHeader()},this.props.children)}}])&&E(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);T(R,"propTypes",{header:c().node,title:c().oneOfType([c().string,c().node]),defaultExpanded:c().string,expanded:c().bool,onSwitch:c().func,locked:c().bool,buttons:c().array,loading:c().bool,disabled:c().bool,error:c().any,useToolbar:c().bool}),T(R,"defaultProps",{title:"",disabled:!1,expanded:!1,onSwitch:function(){},locked:!1,buttons:[],useToolbar:!1});const B=R},202576:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(124852),o=r.n(n),i=r(180307),c=r.n(i),u=r(45697),l=r.n(u),a=r(480681),p=r(352595),s=r(950966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function y(e,t,r){return t=h(t),function(e,t){if(t&&("object"==f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,r||[],h(e).constructor):t.apply(e,r))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:t+""}var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),r=t,(n=[{key:"renderPopover",value:function(){return o().createElement(a.J2,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title,style:this.props.popoverStyle},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(a.gG,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(s.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(p.Z,{placement:this.props.placement,show:!0,target:function(){return c().findDOMNode(e.target)}},this.renderPopover())])}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);v(w,"propTypes",{id:l().string,title:l().string,text:l().string,glyph:l().string,bsStyle:l().string,placement:l().string,left:l().number,top:l().number,trigger:l().oneOfType([l().array,l().bool]),popoverStyle:l().object}),v(w,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const O=w}}]);