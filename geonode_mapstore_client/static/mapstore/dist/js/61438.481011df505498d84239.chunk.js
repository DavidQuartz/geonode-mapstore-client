(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[61438],{57604:(t,e,r)=>{"use strict";r.d(e,{XV:()=>n,mE:()=>o,at:()=>i,mD:()=>a,jw:()=>u,yR:()=>c,pF:()=>l,PZ:()=>s});var n="DIMENSION:UPDATE_LAYER_DIMENSION_DATA",o="TIME_MANAGER:SET_CURRENT_TIME",i="TIME_MANAGER:SET_OFFSET_TIME",a="TIME_MANAGER:MOVE_TIME",u=function(t,e,r){return{type:n,dimension:e,layerId:t,data:r}},c=function(t){return{type:o,time:t}},l=function(t){return{type:i,offsetTime:t}},s=function(t){return{type:a,time:t}}},162187:(t,e,r)=>{"use strict";r.d(e,{NH:()=>n,E7:()=>o,N7:()=>i,qg:()=>a,L9:()=>u,hQ:()=>c,NC:()=>l,c9:()=>s,up:()=>p,AN:()=>f,FZ:()=>y,Fi:()=>m,KB:()=>d,E0:()=>v,Q_:()=>b,hY:()=>E,wO:()=>h,sT:()=>g,wR:()=>O,h1:()=>S,hS:()=>T,zK:()=>A,VS:()=>P,oz:()=>I,FH:()=>w,XN:()=>N,Ym:()=>j,RQ:()=>_,Xt:()=>L});var n="PLAYBACK:START",o="PLAYBACK:PAUSE",i="PLAYBACK:STOP",a="PLAYBACK:INIT",u="PLAYBACK:SET_FRAMES",c="PLAYBACK:APPEND_FRAMES",l="PLAYBACK:FRAMES_LOADING",s="PLAYBACK:SET_CURRENT_FRAME",p="PLAYBACK:SELECT_PLAYBACK_RANGE",f="PLAYBACK:SET_INTERVAL_DATA",y="PLAYBACK:SETTINGS_CHANGE",m="PLAYBACK:TOGGLE_ANIMATION_MODE",d="PLAYBACK:ANIMATION_STEP_MOVE",v="PLAYBACK:UPDATE_METADATA",b={PLAY:"PLAY",STOP:"STOP",PAUSE:"PAUSE"},E=function(){return{type:n}},h=function(){return{type:o}},g=function(){return{type:i}},O=function(t){return{type:u,frames:t}},S=function(t){return{type:s,frame:t}},T=function(t){return{type:c,frames:t}},A=function(t){return{type:l,loading:t}},P=function(t){return{type:p,range:t}},I=function(t,e){return{type:y,name:t,value:e}},w=function(){return{type:m}},N=function(t){return{type:d,direction:t}},j=function(t){var e=t.next,r=t.previous,n=t.forTime;return{type:v,forTime:n,next:e,previous:r}},_=function(t){return{type:f,timeIntervalData:t}},L=function(t){return{type:a,payload:t}}},757676:(t,e,r)=>{"use strict";r.d(e,{qx:()=>n,Lv:()=>o,iv:()=>i,br:()=>a,Xe:()=>u,_V:()=>c,JU:()=>l,cb:()=>s,lz:()=>p,Wb:()=>f,M5:()=>y,w:()=>m,p:()=>d,Ud:()=>v,vf:()=>b,AE:()=>E,xp:()=>h,i9:()=>g,HM:()=>O,y3:()=>S,cO:()=>T,aA:()=>A,Nb:()=>P,kq:()=>I,PQ:()=>w,KI:()=>N,m7:()=>j,Hz:()=>_,w2:()=>L,Z7:()=>M,_e:()=>C,FE:()=>D,st:()=>k,Qq:()=>R,bz:()=>x,mF:()=>B});var n="TIMELINE:SELECT_TIME",o="TIMELINE:RANGE_CHANGE",i="TIMELINE:RANGE_DATA_LOADED",a="TIMELINE:LOADING",u="TIMELINE:INIT_SELECT_LAYER",c="TIMELINE:SELECT_LAYER",l="TIMELINE:ENABLE_OFFSET",s="TIMELINE:AUTOSELECT",p="TIMELINE:SET_SNAP_TYPE",f="TIMELINE:SET_END_VALUES_SUPPORT",y="TIMELINE:SET_COLLAPSED",m="TIMELINE:SET_MAP_SYNC",d="TIMELINE:INIT_TIMELINE",v="TIMELINE:RESET_TIMELINE",b="TIMELINE:SET_RANGE_INIT",E="TIMELINE:SNAP_RADIO_BUTTON_ENABLED",h="TIMELINE:SET_LAYERS",g="TIMELINE:UPDATE_LAYERS_SETTINGS",O=function(t,e,r,o){return{type:n,time:t,group:e,what:r,item:o}},S=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.start,r=t.end;return{type:o,start:e,end:r}},T=function(t,e,r,n){return{type:i,layerId:t,range:e,histogram:r,domain:n}},A=function(t,e){return{type:a,layerId:t,loading:e}},P=function(t){return{type:u,layerId:t,snap:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}},I=function(t){return{type:c,layerId:t,snap:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}},w=function(t){return{type:l,enabled:t}},N=function(){return{type:s}},j=function(t){return{type:p,snapType:t}},_=function(t){return{type:f,endValuesSupport:t}},L=function(t){return{type:y,collapsed:t}},M=function(t){return{type:m,mapSync:t}},C=function(t){return{type:d,config:t}},D=function(){return{type:v}},k=function(t){return{type:b,value:t}},R=function(t){return{type:E,snapRadioButtonEnabled:t}},x=function(t){return{type:h,layers:t}},B=function(t,e){return{type:g,id:t,checked:e}}},496361:(t,e,r)=>{"use strict";r.d(e,{i8:()=>v,ot:()=>b,Ci:()=>E,CX:()=>h});var n=r(666654),o=r.n(n),i=r(313880),a=r.n(i),u=r(49977),c=r(375875),l=r.n(c),s=r(510284);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=p(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(t){return Object.keys(t).reduce((function(e,r){return void 0!==t[r]&&null!==t[r]?y(y({},e),{},m({},r,t[r])):e}),{})},v=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.service,i=void 0===o?"WMTS":o,a=n.version,c=void 0===a?"1.0.0":a,p=n.tileMatrixSet,f=void 0===p?"EPSG:4326":p,m=n.bbox,v=n.domains,b=n.expandLimit;return u.Observable.defer((function(){return l().get(t,{params:d(y({service:i,REQUEST:"DescribeDomains",version:c,layer:e,tileMatrixSet:f,bbox:m,domains:v,expandLimit:b},r))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},b=function(t,e,r,n,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=i.service,c=void 0===a?"WMTS":a,p=i.version,f=void 0===p?"1.1.0":p,m=i.tileMatrixSet,v=void 0===m?"EPSG:4326":m,b=i.bbox;return u.Observable.defer((function(){return l().get(t,{params:d(y({service:c,REQUEST:"GetHistogram",resolution:o,histogram:r,version:f,layer:e,tileMatrixSet:v,bbox:b},n))})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},E=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=n.time,i=n.fromValue,a=n.sort,c=void 0===a?"asc":a,p=n.limit,f=void 0===p?20:p,y=n.fromEnd,m=void 0!==y&&y,v=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},b=v.bbox,E=v.tileMatrixSet,h=void 0===E?"EPSG:4326":E,g=v.service,O=void 0===g?"WMTS":g,S=v.version,T=void 0===S?"1.0.0":S;return u.Observable.defer((function(){return l().get(t,{params:d({service:O,version:T,request:"GetDomainValues",tileMatrixSet:h,bbox:b,layer:e,domain:r,fromValue:i,sort:c,limit:f,fromEnd:m,time:o})})})).let(s.oB).switchMap((function(t){return(0,s.sw)(t.data)}))},h=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).url;return o()(t,"/wms")?a()(t,/\/wms$/,"/gwc/service/wmts"):o()(t,"/ows")?a()(t,/\/ows$/,"/gwc/service/wmts"):t}},212610:(t,e,r)=>{"use strict";r.d(e,{Z:()=>l});var n=r(124852),o=r.n(n),i=r(867076),a=r(957557),u=r.n(a),c=r(815135);const l=(0,i.branch)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.disabled,r=t.noTooltipWhenDisabled;return!(void 0!==r&&r&&e)}),c.Z,(function(t){return function(e){return o().createElement(t,u()(e,["tooltipId","tooltip","noTooltipWhenDisabled"]),e.children)}}))},617252:(t,e,r)=>{"use strict";r.d(e,{Z:()=>g});var n=r(124852),o=r.n(n),i=r(867076),a=r(45697),u=r.n(a),c=r(957557),l=r.n(c),s=r(480681),p=r(950966);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function m(t,e,r){return e=v(e),function(t,e){if(e&&("object"==f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,d()?Reflect.construct(e,r||[],v(t).constructor):e.apply(t,r))}function d(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(d=function(){return!!t})()}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function E(t,e,r){return(e=h(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function h(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:e+""}const g=(0,i.branch)((function(t){return t.popover}),(function(t){var e;return e=function(e){function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),m(this,r,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(r,e),n=r,(a=[{key:"renderPopover",value:function(){return o().createElement(s.J2,l()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var e=(0,i.toClass)(t);return o().createElement(e,l()(this.props,["popover"]))}},{key:"render",value:function(){var t=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:t,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&y(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a}(o().Component),E(e,"propTypes",{popover:u().object}),E(e,"defaultProps",{popover:{trigger:!0}}),e}))},80717:(t,e,r)=>{"use strict";r.d(e,{Z:()=>p});var n=r(124852),o=r.n(n),i=r(819081),a=r.n(i),u=r(480681),c=r(90085),l=["visible","Element","renderButton"];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},s.apply(null,arguments)}const p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.buttons,r=void 0===e?[]:e,n=t.btnGroupProps,i=void 0===n?{}:n,p=t.btnDefaultProps,f=void 0===p?{}:p,y=t.transitionProps,m=void 0===y?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:y,d=function(){return r.map((function(t,e){var r=t.visible,n=void 0===r||r,i=t.Element,a=t.renderButton,u=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,l);return n?a||i&&o().createElement(i,s({key:u.key||e},u))||o().createElement(c.Z,s({key:u.key||e},f,u)):null}))};return o().createElement(u.hE,i,m?o().createElement(a(),m,d()):d())}},90085:(t,e,r)=>{"use strict";r.d(e,{Z:()=>v});var n=r(124852),o=r.n(n),i=r(867076),a=r(805346),u=r(957557),c=r.n(u),l=r(480681),s=r(532425),p=r(212610),f=r(617252),y=r(38560),m=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},d.apply(null,arguments)}const v=(0,i.compose)(p.Z,f.Z)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.glyph,r=t.loading,n=t.text,i=void 0===n?"":n,u=t.textId,p=t.glyphClassName,f=void 0===p?"":p,v=t.loaderProps,b=void 0===v?{}:v,E=t.children,h=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||{}.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,m);return o().createElement(y.Z,c()(h,["pullRight","confirmNo","confirmYes"]),e&&!r?o().createElement(l.gG,{glyph:e,className:f}):null,u?o().createElement(a.Z,{msgId:u}):i,r?o().createElement(s.Z,d({className:"ms-loader".concat(h.bsStyle&&" ms-loader-"+h.bsStyle||"").concat(h.bsSize&&" ms-loader-"+h.bsSize||"")},b)):null,E)}))},365295:(t,e,r)=>{"use strict";r.d(e,{Z:()=>I});var n=r(124852),o=r.n(n),i=r(532475),a=r.n(i),u=r(414293),c=r.n(u),l=r(45697),s=r.n(l),p=r(730381),f=r.n(p),y=r(480681),m=r(815135),d=r(38560);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,T(n.key),n)}}function E(t,e,r){return e=g(e),function(t,e){if(e&&("object"==v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,h()?Reflect.construct(e,r||[],g(t).constructor):e.apply(t,r))}function h(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(h=function(){return!!t})()}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function S(t,e,r){return(e=T(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function T(t){var e=function(t,e){if("object"!=v(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==v(e)?e:e+""}var A=(0,m.Z)(y.gG),P=function(t){function e(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return S(t=E(this,e,[].concat(n)),"onUpdate",(function(e,r){var n=f()(t.props.date).utc(),o=r?f()(n).add(1,e):f()(n).subtract(1,e);o.isValid()&&!isNaN(o.toDate().getTime())&&t.props.onUpdate(o.toISOString())})),S(t,"onChange",(function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t){return t};if(""!==r){var o=f()(t.props.date).utc(),i=o["day"===e?"date":e]&&f()(o)["day"===e?"date":e](n(r));i.isValid()&&!isNaN(i.toDate().getTime())&&t.props.onUpdate(i.toISOString())}})),S(t,"getForm",(function(){var e=t.props.date&&f()(t.props.date).utc();return[{name:"icon",value:"calendar",type:"icon"},{name:"day",placeholder:"DD",value:e&&e.date()},{name:"month",placeholder:"MM",readOnly:!0,value:e&&e.month(),format:function(t){return!c()(t)&&""!==t&&f().monthsShort(t)},parseValue:function(t){return t-1}},{name:"year",placeholder:"YYYY",value:e&&e.year()},{name:"icon",value:"time",type:"icon"},{name:"hours",placeholder:"hh",value:e&&e.hours()},{name:"separator",value:":",type:"separator"},{name:"minutes",placeholder:"mm",value:e&&e.minutes()},{name:"separator",value:":",type:"separator"},{name:"seconds",placeholder:"ss",value:e&&e.seconds()},{name:"separator",value:e&&e.utcOffset(),type:"separator",format:function(t){return"UTC "+(t>=0?"+":"-")+a()(t/60,2,0)}}]})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t=this,e=this.getForm();return o().createElement(y.l0,{className:"ms-inline-datetime ".concat(this.props.className),style:this.props.style},o().createElement(y.cw,{controlId:"inlineDateTime"},this.props.glyph&&o().createElement("div",{style:this.props.clickable?{cursor:"pointer"}:{},onClick:function(){return t.props.clickable&&t.props.onIconClick(t.props.date,t.props.glyph)}},o().createElement(A,{tooltip:this.props.clickable?this.props.tooltip:void 0,tooltipId:this.props.clickable?this.props.tooltipId:void 0,className:"ms-inline-datetime-icon",glyph:this.props.glyph})),e.map((function(e){return"icon"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},o().createElement(A,{glyph:e.value}))||"separator"===e.type&&o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},e.format&&e.format(e.value)||e.value)||o().createElement("div",{className:"ms-inline-datetime-input ms-dt-".concat(e.name)},t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name,!0)}},o().createElement(A,{glyph:"chevron-up"})),o().createElement(y.NI,{type:"text",readOnly:e.readOnly,placeholder:e.placeholder||e.name,disabled:!t.props.date,value:e.format&&e.format(e.value)||e.value,onChange:function(r){return t.onChange(e.name,r.target.value,e.parseValue)}}),t.props.showButtons&&o().createElement(d.Z,{bsSize:"xs",disabled:!t.props.date,onClick:function(){return t.onUpdate(e.name)}},o().createElement(A,{glyph:"chevron-down"})))}))))}}])&&b(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(o().Component);S(P,"propTypes",{date:s().string,clickable:s().bool,onUpdate:s().func,onIconClick:s().func,glyph:s().string,style:s().object,className:s().string,tooltip:s().string,tooltipId:s().string,showButtons:s().bool}),S(P,"defaultProps",{date:"",onIconClick:function(){},clickable:!1,onUpdate:function(){},glyph:"time",style:{},className:"",tooltip:""});const I=P},589919:(t,e,r)=>{"use strict";r.d(e,{hP:()=>l});var n=r(984596),o=r.n(n),i=r(49977),a=r.n(i);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var c=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.startWith.apply(t,function(t){if(Array.isArray(t))return u(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return u(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())},l=function(t,e,r){return function(n){return(r?c(n,o()(t)).catch(r):c(n,o()(t))).concat(a().Observable.from(o()(e)))}}},50886:(t,e,r)=>{"use strict";r.d(e,{A:()=>d});var n=r(49977),o=r.n(n),i=r(496361),a=r(55237);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return m(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var d=function(t,e,r,n,u){return o().Observable.forkJoin(i.Ci.apply(void 0,f(t(r,s(s({sort:"asc",limit:1},u&&{fromValue:e?(0,a.p)(u,.001,"remove"):u}),"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})),i.Ci.apply(void 0,f(t(r,s(s({sort:"desc",limit:1},u&&{fromValue:e?(0,a.p)(u,.001,"add"):u}),"end"===n?{fromEnd:!0}:{})))).map((function(t){return t.DomainValues.Domain.split(",")})).map((function(t){return c(t,1)[0]})).catch((function(t){return t&&o().Observable.of(null)})))}},937307:(t,e,r)=>{"use strict";r.d(e,{Z:()=>y});var n=r(57604),o=r(580416),i=r(782904),a=r(761868),u=r(730381),c=r.n(u),l=r(66604),s=r.n(l),p=r(535937),f=r.n(p);const y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case n.XV:return(0,a.t8)("data[".concat(e.dimension,"][").concat(e.layerId,"]"),e.data,t);case n.mE:return(0,a.t8)("currentTime",e.time,t);case n.at:return(0,a.t8)("offsetTime",e.offsetTime,t);case n.mD:if(t.offsetTime&&t.currentTime){var r=c()(t.offsetTime).diff(t.currentTime),u=c()(e.time).add(r);return(0,a.t8)("currentTime",e.time,(0,a.t8)("offsetTime",u.toISOString(),t))}return(0,a.t8)("currentTime",e.time,t);case o.sb:var l=s()(t.data,(function(t){return f()(t,(function(t,r){return r!==e.node}))}));return(0,a.t8)("data",l,t);case i.l:return(0,a.t8)("data",void 0,(0,a.t8)("currentTime",void 0,(0,a.t8)("offsetTime",void 0,t)));default:return t}}},176843:(t,e,r)=>{"use strict";r.d(e,{z2:()=>o,V3:()=>i,dS:()=>a,yt:()=>c,E2:()=>l,Np:()=>s,KC:()=>p,Wq:()=>f,rp:()=>y,PF:()=>m});var n=r(22222),o=function(t){return t&&t.playback&&t.playback.settings},i=function(t){return(o(t)||{}).frameDuration||5},a=function(t){return t&&t.playback&&t.playback.status},u=function(t){return t&&t.playback&&t.playback.frames},c=function(t){var e=u(t)||[];return e[e.length-1]},l=function(t){return t&&t.playback&&t.playback.framesLoading},s=function(t){return t&&t.playback&&t.playback.currentFrame},p=function(t){return function(t){return t&&t.playback&&t.playback.playbackRange}(t)},f=function(t){return(u(t)||[])[s(t)]},y=function(t){return t&&t.playback&&t.playback.metadata},m=(0,n.P1)(u,s,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return{hasNext:t[e+1],hasPrevious:t[e-1]}}))},18190:t=>{var e=Math.floor;t.exports=function(t,r){var n="";if(!t||r<1||r>9007199254740991)return n;do{r%2&&(n+=t),(r=e(r/2))&&(t+=t)}while(r);return n}},378302:(t,e,r)=>{var n=r(18190),o=r(880531),i=r(440180),a=r(862689),u=r(788016),c=r(683140),l=Math.ceil;t.exports=function(t,e){var r=(e=void 0===e?" ":o(e)).length;if(r<2)return r?n(e,t):e;var s=n(e,l(t/u(e)));return a(e)?i(c(s),0,t).join(""):s.slice(0,t)}},532475:(t,e,r)=>{var n=r(378302),o=r(788016),i=r(640554),a=r(479833);t.exports=function(t,e,r){t=a(t);var u=(e=i(e))?o(t):0;return e&&u<e?n(e-u,r)+t:t}}}]);