(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))o(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(u){if(u.ep)return;u.ep=!0;const d=a(u);fetch(u.href,d)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function Fg(r,i){for(var a=0;a<i.length;a++){const o=i[a];if(typeof o!="string"&&!Array.isArray(o)){for(const u in o)if(u!=="default"&&!(u in r)){const d=Object.getOwnPropertyDescriptor(o,u);d&&Object.defineProperty(r,u,d.get?d:{enumerable:!0,get:()=>o[u]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function xt(r){"@babel/helpers - typeof";return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},xt(r)}function _t(r,i){if(!(r instanceof i))throw new TypeError("Cannot call a class as a function")}function Mg(r,i){if(xt(r)!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var o=a.call(r,i);if(xt(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}function Xf(r){var i=Mg(r,"string");return xt(i)=="symbol"?i:i+""}function Ad(r,i){for(var a=0;a<i.length;a++){var o=i[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,Xf(o.key),o)}}function Tt(r,i,a){return i&&Ad(r.prototype,i),a&&Ad(r,a),Object.defineProperty(r,"prototype",{writable:!1}),r}function Sn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ql(r,i){return ql=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,o){return a.__proto__=o,a},ql(r,i)}function Da(r,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&ql(r,i)}function fo(r,i){if(i&&(xt(i)=="object"||typeof i=="function"))return i;if(i!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Sn(r)}function Vt(r){return Vt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},Vt(r)}function Wt(r,i,a){return(i=Xf(i))in r?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r}function Yf(r){if(Array.isArray(r))return r}function jg(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Rd(r,i){(i==null||i>r.length)&&(i=r.length);for(var a=0,o=Array(i);a<i;a++)o[a]=r[a];return o}function Qf(r,i){if(r){if(typeof r=="string")return Rd(r,i);var a={}.toString.call(r).slice(8,-1);return a==="Object"&&r.constructor&&(a=r.constructor.name),a==="Map"||a==="Set"?Array.from(r):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Rd(r,i):void 0}}function Jf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ag(r){return Yf(r)||jg(r)||Qf(r)||Jf()}function Id(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function Dd(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Id(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Id(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}var Rg={type:"logger",log:function(r){this.output("log",r)},warn:function(r){this.output("warn",r)},error:function(r){this.output("error",r)},output:function(r,i){console&&console[r]&&console[r].apply(console,i)}},Ig=(function(){function r(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_t(this,r),this.init(i,a)}return Tt(r,[{key:"init",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=a.prefix||"i18next:",this.logger=i||Rg,this.options=a,this.debug=a.debug}},{key:"setDebug",value:function(i){this.debug=i}},{key:"log",value:function(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return this.forward(a,"log","",!0)}},{key:"warn",value:function(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return this.forward(a,"warn","",!0)}},{key:"error",value:function(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return this.forward(a,"error","")}},{key:"deprecate",value:function(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return this.forward(a,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(i,a,o,u){return u&&!this.debug?null:(typeof i[0]=="string"&&(i[0]="".concat(o).concat(this.prefix," ").concat(i[0])),this.logger[a](i))}},{key:"create",value:function(i){return new r(this.logger,Dd(Dd({},{prefix:"".concat(this.prefix,":").concat(i,":")}),this.options))}},{key:"clone",value:function(i){return i=i||this.options,i.prefix=i.prefix||this.prefix,new r(this.logger,i)}}]),r})(),Ht=new Ig,En=(function(){function r(){_t(this,r),this.observers={}}return Tt(r,[{key:"on",value:function(i,a){var o=this;return i.split(" ").forEach(function(u){o.observers[u]=o.observers[u]||[],o.observers[u].push(a)}),this}},{key:"off",value:function(i,a){if(this.observers[i]){if(!a){delete this.observers[i];return}this.observers[i]=this.observers[i].filter(function(o){return o!==a})}}},{key:"emit",value:function(i){for(var a=arguments.length,o=new Array(a>1?a-1:0),u=1;u<a;u++)o[u-1]=arguments[u];if(this.observers[i]){var d=[].concat(this.observers[i]);d.forEach(function(p){p.apply(void 0,o)})}if(this.observers["*"]){var f=[].concat(this.observers["*"]);f.forEach(function(p){p.apply(p,[i].concat(o))})}}}]),r})();function ao(){var r,i,a=new Promise(function(o,u){r=o,i=u});return a.resolve=r,a.reject=i,a}function $d(r){return r==null?"":""+r}function Dg(r,i,a){r.forEach(function(o){i[o]&&(a[o]=i[o])})}function Ss(r,i,a){function o(p){return p&&p.indexOf("###")>-1?p.replace(/###/g,"."):p}function u(){return!r||typeof r=="string"}for(var d=typeof i!="string"?[].concat(i):i.split(".");d.length>1;){if(u())return{};var f=o(d.shift());!r[f]&&a&&(r[f]=new a),Object.prototype.hasOwnProperty.call(r,f)?r=r[f]:r={}}return u()?{}:{obj:r,k:o(d.shift())}}function Bd(r,i,a){var o=Ss(r,i,Object),u=o.obj,d=o.k;u[d]=a}function $g(r,i,a,o){var u=Ss(r,i,Object),d=u.obj,f=u.k;d[f]=d[f]||[],d[f].push(a)}function Fa(r,i){var a=Ss(r,i),o=a.obj,u=a.k;if(o)return o[u]}function Hd(r,i,a){var o=Fa(r,a);return o!==void 0?o:Fa(i,a)}function Zf(r,i,a){for(var o in i)o!=="__proto__"&&o!=="constructor"&&(o in r?typeof r[o]=="string"||r[o]instanceof String||typeof i[o]=="string"||i[o]instanceof String?a&&(r[o]=i[o]):Zf(r[o],i[o],a):r[o]=i[o]);return r}function pr(r){return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Bg={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Hg(r){return typeof r=="string"?r.replace(/[&<>"'\/]/g,function(i){return Bg[i]}):r}var $a=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Ug=[" ",",","?","!",";"];function Vg(r,i,a){i=i||"",a=a||"";var o=Ug.filter(function(p){return i.indexOf(p)<0&&a.indexOf(p)<0});if(o.length===0)return!0;var u=new RegExp("(".concat(o.map(function(p){return p==="?"?"\\?":p}).join("|"),")")),d=!u.test(r);if(!d){var f=r.indexOf(a);f>0&&!u.test(r.substring(0,f))&&(d=!0)}return d}function Ud(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function Ea(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Ud(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Ud(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}function Wg(r){var i=Kg();return function(){var a=Vt(r),o;if(i){var u=Vt(this).constructor;o=Reflect.construct(a,arguments,u)}else o=a.apply(this,arguments);return fo(this,o)}}function Kg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Gf(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(r){if(r[i])return r[i];for(var o=i.split(a),u=r,d=0;d<o.length;++d){if(!u||typeof u[o[d]]=="string"&&d+1<o.length)return;if(u[o[d]]===void 0){for(var f=2,p=o.slice(d,d+f).join(a),g=u[p];g===void 0&&o.length>d+f;)f++,p=o.slice(d,d+f).join(a),g=u[p];if(g===void 0)return;if(g===null)return null;if(i.endsWith(p)){if(typeof g=="string")return g;if(p&&typeof g[p]=="string")return g[p]}var y=o.slice(d+f).join(a);return y?Gf(g,y,a):void 0}u=u[o[d]]}return u}}var qg=(function(r){Da(a,r);var i=Wg(a);function a(o){var u,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return _t(this,a),u=i.call(this),$a&&En.call(Sn(u)),u.data=o||{},u.options=d,u.options.keySeparator===void 0&&(u.options.keySeparator="."),u.options.ignoreJSONStructure===void 0&&(u.options.ignoreJSONStructure=!0),u}return Tt(a,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var u=this.options.ns.indexOf(o);u>-1&&this.options.ns.splice(u,1)}},{key:"getResource",value:function(o,u,d){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=f.keySeparator!==void 0?f.keySeparator:this.options.keySeparator,g=f.ignoreJSONStructure!==void 0?f.ignoreJSONStructure:this.options.ignoreJSONStructure,y=[o,u];d&&typeof d!="string"&&(y=y.concat(d)),d&&typeof d=="string"&&(y=y.concat(p?d.split(p):d)),o.indexOf(".")>-1&&(y=o.split("."));var v=Fa(this.data,y);return v||!g||typeof d!="string"?v:Gf(this.data&&this.data[o]&&this.data[o][u],d,p)}},{key:"addResource",value:function(o,u,d,f){var p=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},g=this.options.keySeparator;g===void 0&&(g=".");var y=[o,u];d&&(y=y.concat(g?d.split(g):d)),o.indexOf(".")>-1&&(y=o.split("."),f=u,u=y[1]),this.addNamespaces(u),Bd(this.data,y,f),p.silent||this.emit("added",o,u,d,f)}},{key:"addResources",value:function(o,u,d){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var p in d)(typeof d[p]=="string"||Object.prototype.toString.apply(d[p])==="[object Array]")&&this.addResource(o,u,p,d[p],{silent:!0});f.silent||this.emit("added",o,u,d)}},{key:"addResourceBundle",value:function(o,u,d,f,p){var g=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},y=[o,u];o.indexOf(".")>-1&&(y=o.split("."),f=d,d=u,u=y[1]),this.addNamespaces(u);var v=Fa(this.data,y)||{};f?Zf(v,d,p):v=Ea(Ea({},v),d),Bd(this.data,y,v),g.silent||this.emit("added",o,u,d)}},{key:"removeResourceBundle",value:function(o,u){this.hasResourceBundle(o,u)&&delete this.data[o][u],this.removeNamespaces(u),this.emit("removed",o,u)}},{key:"hasResourceBundle",value:function(o,u){return this.getResource(o,u)!==void 0}},{key:"getResourceBundle",value:function(o,u){return u||(u=this.options.defaultNS),this.options.compatibilityAPI==="v1"?Ea(Ea({},{}),this.getResource(o,u)):this.getResource(o,u)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var u=this.getDataByLanguage(o),d=u&&Object.keys(u)||[];return!!d.find(function(f){return u[f]&&Object.keys(u[f]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),a})(En),ep={processors:{},addPostProcessor:function(r){this.processors[r.name]=r},handle:function(r,i,a,o,u){var d=this;return r.forEach(function(f){d.processors[f]&&(i=d.processors[f].process(i,a,o,u))}),i}};function Vd(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function tt(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Vd(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Vd(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}function Xg(r){var i=Yg();return function(){var a=Vt(r),o;if(i){var u=Vt(this).constructor;o=Reflect.construct(a,arguments,u)}else o=a.apply(this,arguments);return fo(this,o)}}function Yg(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var Wd={},Kd=(function(r){Da(a,r);var i=Xg(a);function a(o){var u,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return _t(this,a),u=i.call(this),$a&&En.call(Sn(u)),Dg(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],o,Sn(u)),u.options=d,u.options.keySeparator===void 0&&(u.options.keySeparator="."),u.logger=Ht.create("translator"),u}return Tt(a,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var d=this.resolve(o,u);return d&&d.res!==void 0}},{key:"extractFromKey",value:function(o,u){var d=u.nsSeparator!==void 0?u.nsSeparator:this.options.nsSeparator;d===void 0&&(d=":");var f=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,p=u.ns||this.options.defaultNS||[],g=d&&o.indexOf(d)>-1,y=!this.options.userDefinedKeySeparator&&!u.keySeparator&&!this.options.userDefinedNsSeparator&&!u.nsSeparator&&!Vg(o,d,f);if(g&&!y){var v=o.match(this.interpolator.nestingRegexp);if(v&&v.length>0)return{key:o,namespaces:p};var x=o.split(d);(d!==f||d===f&&this.options.ns.indexOf(x[0])>-1)&&(p=x.shift()),o=x.join(f)}return typeof p=="string"&&(p=[p]),{key:o,namespaces:p}}},{key:"translate",value:function(o,u,d){var f=this;if(xt(u)!=="object"&&this.options.overloadTranslationOptionHandler&&(u=this.options.overloadTranslationOptionHandler(arguments)),u||(u={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var p=u.returnDetails!==void 0?u.returnDetails:this.options.returnDetails,g=u.keySeparator!==void 0?u.keySeparator:this.options.keySeparator,y=this.extractFromKey(o[o.length-1],u),v=y.key,x=y.namespaces,_=x[x.length-1],R=u.lng||this.language,M=u.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(R&&R.toLowerCase()==="cimode"){if(M){var O=u.nsSeparator||this.options.nsSeparator;return p?{res:"".concat(_).concat(O).concat(v),usedKey:v,exactUsedKey:v,usedLng:R,usedNS:_}:"".concat(_).concat(O).concat(v)}return p?{res:v,usedKey:v,exactUsedKey:v,usedLng:R,usedNS:_}:v}var z=this.resolve(o,u),T=z&&z.res,k=z&&z.usedKey||v,E=z&&z.exactUsedKey||v,j=Object.prototype.toString.apply(T),P=["[object Number]","[object Function]","[object RegExp]"],A=u.joinArrays!==void 0?u.joinArrays:this.options.joinArrays,$=!this.i18nFormat||this.i18nFormat.handleAsObject,Q=typeof T!="string"&&typeof T!="boolean"&&typeof T!="number";if($&&T&&Q&&P.indexOf(j)<0&&!(typeof A=="string"&&j==="[object Array]")){if(!u.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var K=this.options.returnedObjectHandler?this.options.returnedObjectHandler(k,T,tt(tt({},u),{},{ns:x})):"key '".concat(v," (").concat(this.language,")' returned an object instead of string.");return p?(z.res=K,z):K}if(g){var ie=j==="[object Array]",pe=ie?[]:{},_e=ie?E:k;for(var Oe in T)if(Object.prototype.hasOwnProperty.call(T,Oe)){var He="".concat(_e).concat(g).concat(Oe);pe[Oe]=this.translate(He,tt(tt({},u),{joinArrays:!1,ns:x})),pe[Oe]===He&&(pe[Oe]=T[Oe])}T=pe}}else if($&&typeof A=="string"&&j==="[object Array]")T=T.join(A),T&&(T=this.extendTranslation(T,o,u,d));else{var Ue=!1,Le=!1,we=u.count!==void 0&&typeof u.count!="string",V=a.hasDefaultValue(u),G=we?this.pluralResolver.getSuffix(R,u.count,u):"",b=u["defaultValue".concat(G)]||u.defaultValue;!this.isValidLookup(T)&&V&&(Ue=!0,T=b),this.isValidLookup(T)||(Le=!0,T=v);var I=u.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,Y=I&&Le?void 0:T,le=V&&b!==T&&this.options.updateMissing;if(Le||Ue||le){if(this.logger.log(le?"updateKey":"missingKey",R,_,v,le?b:T),g){var oe=this.resolve(v,tt(tt({},u),{},{keySeparator:!1}));oe&&oe.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var ue=[],se=this.languageUtils.getFallbackCodes(this.options.fallbackLng,u.lng||this.language);if(this.options.saveMissingTo==="fallback"&&se&&se[0])for(var fe=0;fe<se.length;fe++)ue.push(se[fe]);else this.options.saveMissingTo==="all"?ue=this.languageUtils.toResolveHierarchy(u.lng||this.language):ue.push(u.lng||this.language);var ce=function(Ce,mt,gt){var Pn=V&&gt!==T?gt:Y;f.options.missingKeyHandler?f.options.missingKeyHandler(Ce,_,mt,Pn,le,u):f.backendConnector&&f.backendConnector.saveMissing&&f.backendConnector.saveMissing(Ce,_,mt,Pn,le,u),f.emit("missingKey",Ce,_,mt,T)};this.options.saveMissing&&(this.options.saveMissingPlurals&&we?ue.forEach(function(Ce){f.pluralResolver.getSuffixes(Ce,u).forEach(function(mt){ce([Ce],v+mt,u["defaultValue".concat(mt)]||b)})}):ce(ue,v,b))}T=this.extendTranslation(T,o,u,z,d),Le&&T===v&&this.options.appendNamespaceToMissingKey&&(T="".concat(_,":").concat(v)),(Le||Ue)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?T=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(_,":").concat(v):v,Ue?T:void 0):T=this.options.parseMissingKeyHandler(T))}return p?(z.res=T,z):T}},{key:"extendTranslation",value:function(o,u,d,f,p){var g=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,tt(tt({},this.options.interpolation.defaultVariables),d),f.usedLng,f.usedNS,f.usedKey,{resolved:f});else if(!d.skipInterpolation){d.interpolation&&this.interpolator.init(tt(tt({},d),{interpolation:tt(tt({},this.options.interpolation),d.interpolation)}));var y=typeof o=="string"&&(d&&d.interpolation&&d.interpolation.skipOnVariables!==void 0?d.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),v;if(y){var x=o.match(this.interpolator.nestingRegexp);v=x&&x.length}var _=d.replace&&typeof d.replace!="string"?d.replace:d;if(this.options.interpolation.defaultVariables&&(_=tt(tt({},this.options.interpolation.defaultVariables),_)),o=this.interpolator.interpolate(o,_,d.lng||this.language,d),y){var R=o.match(this.interpolator.nestingRegexp),M=R&&R.length;v<M&&(d.nest=!1)}d.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var T=arguments.length,k=new Array(T),E=0;E<T;E++)k[E]=arguments[E];return p&&p[0]===k[0]&&!d.context?(g.logger.warn("It seems you are nesting recursively key: ".concat(k[0]," in key: ").concat(u[0])),null):g.translate.apply(g,k.concat([u]))},d)),d.interpolation&&this.interpolator.reset()}var O=d.postProcess||this.options.postProcess,z=typeof O=="string"?[O]:O;return o!=null&&z&&z.length&&d.applyPostProcessor!==!1&&(o=ep.handle(z,o,u,this.options&&this.options.postProcessPassResolved?tt({i18nResolved:f},d):d,this)),o}},{key:"resolve",value:function(o){var u=this,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f,p,g,y,v;return typeof o=="string"&&(o=[o]),o.forEach(function(x){if(!u.isValidLookup(f)){var _=u.extractFromKey(x,d),R=_.key;p=R;var M=_.namespaces;u.options.fallbackNS&&(M=M.concat(u.options.fallbackNS));var O=d.count!==void 0&&typeof d.count!="string",z=O&&!d.ordinal&&d.count===0&&u.pluralResolver.shouldUseIntlApi(),T=d.context!==void 0&&(typeof d.context=="string"||typeof d.context=="number")&&d.context!=="",k=d.lngs?d.lngs:u.languageUtils.toResolveHierarchy(d.lng||u.language,d.fallbackLng);M.forEach(function(E){u.isValidLookup(f)||(v=E,!Wd["".concat(k[0],"-").concat(E)]&&u.utils&&u.utils.hasLoadedNamespace&&!u.utils.hasLoadedNamespace(v)&&(Wd["".concat(k[0],"-").concat(E)]=!0,u.logger.warn('key "'.concat(p,'" for languages "').concat(k.join(", "),`" won't get resolved as namespace "`).concat(v,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),k.forEach(function(j){if(!u.isValidLookup(f)){y=j;var P=[R];if(u.i18nFormat&&u.i18nFormat.addLookupKeys)u.i18nFormat.addLookupKeys(P,R,j,E,d);else{var A;O&&(A=u.pluralResolver.getSuffix(j,d.count,d));var $="".concat(u.options.pluralSeparator,"zero");if(O&&(P.push(R+A),z&&P.push(R+$)),T){var Q="".concat(R).concat(u.options.contextSeparator).concat(d.context);P.push(Q),O&&(P.push(Q+A),z&&P.push(Q+$))}}for(var K;K=P.pop();)u.isValidLookup(f)||(g=K,f=u.getResource(j,E,K,d))}}))})}}),{res:f,usedKey:p,exactUsedKey:g,usedLng:y,usedNS:v}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,u,d){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,u,d,f):this.resourceStore.getResource(o,u,d,f)}}],[{key:"hasDefaultValue",value:function(o){var u="defaultValue";for(var d in o)if(Object.prototype.hasOwnProperty.call(o,d)&&u===d.substring(0,u.length)&&o[d]!==void 0)return!0;return!1}}]),a})(En);function Dl(r){return r.charAt(0).toUpperCase()+r.slice(1)}var qd=(function(){function r(i){_t(this,r),this.options=i,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Ht.create("languageUtils")}return Tt(r,[{key:"getScriptPartFromCode",value:function(i){if(!i||i.indexOf("-")<0)return null;var a=i.split("-");return a.length===2||(a.pop(),a[a.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(a.join("-"))}},{key:"getLanguagePartFromCode",value:function(i){if(!i||i.indexOf("-")<0)return i;var a=i.split("-");return this.formatLanguageCode(a[0])}},{key:"formatLanguageCode",value:function(i){if(typeof i=="string"&&i.indexOf("-")>-1){var a=["hans","hant","latn","cyrl","cans","mong","arab"],o=i.split("-");return this.options.lowerCaseLng?o=o.map(function(u){return u.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),a.indexOf(o[1].toLowerCase())>-1&&(o[1]=Dl(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),a.indexOf(o[1].toLowerCase())>-1&&(o[1]=Dl(o[1].toLowerCase())),a.indexOf(o[2].toLowerCase())>-1&&(o[2]=Dl(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?i.toLowerCase():i}},{key:"isSupportedCode",value:function(i){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(i=this.getLanguagePartFromCode(i)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(i)>-1}},{key:"getBestMatchFromCodes",value:function(i){var a=this;if(!i)return null;var o;return i.forEach(function(u){if(!o){var d=a.formatLanguageCode(u);(!a.options.supportedLngs||a.isSupportedCode(d))&&(o=d)}}),!o&&this.options.supportedLngs&&i.forEach(function(u){if(!o){var d=a.getLanguagePartFromCode(u);if(a.isSupportedCode(d))return o=d;o=a.options.supportedLngs.find(function(f){if(f.indexOf(d)===0)return f})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(i,a){if(!i)return[];if(typeof i=="function"&&(i=i(a)),typeof i=="string"&&(i=[i]),Object.prototype.toString.apply(i)==="[object Array]")return i;if(!a)return i.default||[];var o=i[a];return o||(o=i[this.getScriptPartFromCode(a)]),o||(o=i[this.formatLanguageCode(a)]),o||(o=i[this.getLanguagePartFromCode(a)]),o||(o=i.default),o||[]}},{key:"toResolveHierarchy",value:function(i,a){var o=this,u=this.getFallbackCodes(a||this.options.fallbackLng||[],i),d=[],f=function(p){p&&(o.isSupportedCode(p)?d.push(p):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(p)))};return typeof i=="string"&&i.indexOf("-")>-1?(this.options.load!=="languageOnly"&&f(this.formatLanguageCode(i)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&f(this.getScriptPartFromCode(i)),this.options.load!=="currentOnly"&&f(this.getLanguagePartFromCode(i))):typeof i=="string"&&f(this.formatLanguageCode(i)),u.forEach(function(p){d.indexOf(p)<0&&f(o.formatLanguageCode(p))}),d}}]),r})(),Qg=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Jg={1:function(r){return+(r>1)},2:function(r){return+(r!=1)},3:function(r){return 0},4:function(r){return r%10==1&&r%100!=11?0:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?1:2},5:function(r){return r==0?0:r==1?1:r==2?2:r%100>=3&&r%100<=10?3:r%100>=11?4:5},6:function(r){return r==1?0:r>=2&&r<=4?1:2},7:function(r){return r==1?0:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?1:2},8:function(r){return r==1?0:r==2?1:r!=8&&r!=11?2:3},9:function(r){return+(r>=2)},10:function(r){return r==1?0:r==2?1:r<7?2:r<11?3:4},11:function(r){return r==1||r==11?0:r==2||r==12?1:r>2&&r<20?2:3},12:function(r){return+(r%10!=1||r%100==11)},13:function(r){return+(r!==0)},14:function(r){return r==1?0:r==2?1:r==3?2:3},15:function(r){return r%10==1&&r%100!=11?0:r%10>=2&&(r%100<10||r%100>=20)?1:2},16:function(r){return r%10==1&&r%100!=11?0:r!==0?1:2},17:function(r){return r==1||r%10==1&&r%100!=11?0:1},18:function(r){return r==0?0:r==1?1:2},19:function(r){return r==1?0:r==0||r%100>1&&r%100<11?1:r%100>10&&r%100<20?2:3},20:function(r){return r==1?0:r==0||r%100>0&&r%100<20?1:2},21:function(r){return r%100==1?1:r%100==2?2:r%100==3||r%100==4?3:0},22:function(r){return r==1?0:r==2?1:(r<0||r>10)&&r%10==0?2:3}},Zg=["v1","v2","v3"],Xd={zero:0,one:1,two:2,few:3,many:4,other:5};function Gg(){var r={};return Qg.forEach(function(i){i.lngs.forEach(function(a){r[a]={numbers:i.nr,plurals:Jg[i.fc]}})}),r}var eh=(function(){function r(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};_t(this,r),this.languageUtils=i,this.options=a,this.logger=Ht.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Gg()}return Tt(r,[{key:"addRule",value:function(i,a){this.rules[i]=a}},{key:"getRule",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(i,{type:a.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[i]||this.rules[this.languageUtils.getLanguagePartFromCode(i)]}},{key:"needsPlural",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(i,a);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(i,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(i,o).map(function(u){return"".concat(a).concat(u)})}},{key:"getSuffixes",value:function(i){var a=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=this.getRule(i,o);return u?this.shouldUseIntlApi()?u.resolvedOptions().pluralCategories.sort(function(d,f){return Xd[d]-Xd[f]}).map(function(d){return"".concat(a.options.prepend).concat(d)}):u.numbers.map(function(d){return a.getSuffix(i,d,o)}):[]}},{key:"getSuffix",value:function(i,a){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=this.getRule(i,o);return u?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(u.select(a)):this.getSuffixRetroCompatible(u,a):(this.logger.warn("no plural rule found for: ".concat(i)),"")}},{key:"getSuffixRetroCompatible",value:function(i,a){var o=this,u=i.noAbs?i.plurals(a):i.plurals(Math.abs(a)),d=i.numbers[u];this.options.simplifyPluralSuffix&&i.numbers.length===2&&i.numbers[0]===1&&(d===2?d="plural":d===1&&(d=""));var f=function(){return o.options.prepend&&d.toString()?o.options.prepend+d.toString():d.toString()};return this.options.compatibilityJSON==="v1"?d===1?"":typeof d=="number"?"_plural_".concat(d.toString()):f():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&i.numbers.length===2&&i.numbers[0]===1?f():this.options.prepend&&u.toString()?this.options.prepend+u.toString():u.toString()}},{key:"shouldUseIntlApi",value:function(){return!Zg.includes(this.options.compatibilityJSON)}}]),r})();function Yd(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function Nt(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Yd(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Yd(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}var th=(function(){function r(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_t(this,r),this.logger=Ht.create("interpolator"),this.options=i,this.format=i.interpolation&&i.interpolation.format||function(a){return a},this.init(i)}return Tt(r,[{key:"init",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};i.interpolation||(i.interpolation={escapeValue:!0});var a=i.interpolation;this.escape=a.escape!==void 0?a.escape:Hg,this.escapeValue=a.escapeValue!==void 0?a.escapeValue:!0,this.useRawValueToEscape=a.useRawValueToEscape!==void 0?a.useRawValueToEscape:!1,this.prefix=a.prefix?pr(a.prefix):a.prefixEscaped||"{{",this.suffix=a.suffix?pr(a.suffix):a.suffixEscaped||"}}",this.formatSeparator=a.formatSeparator?a.formatSeparator:a.formatSeparator||",",this.unescapePrefix=a.unescapeSuffix?"":a.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":a.unescapeSuffix||"",this.nestingPrefix=a.nestingPrefix?pr(a.nestingPrefix):a.nestingPrefixEscaped||pr("$t("),this.nestingSuffix=a.nestingSuffix?pr(a.nestingSuffix):a.nestingSuffixEscaped||pr(")"),this.nestingOptionsSeparator=a.nestingOptionsSeparator?a.nestingOptionsSeparator:a.nestingOptionsSeparator||",",this.maxReplaces=a.maxReplaces?a.maxReplaces:1e3,this.alwaysFormat=a.alwaysFormat!==void 0?a.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var i="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(i,"g");var a="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(a,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(i,a,o,u){var d=this,f,p,g,y=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function v(O){return O.replace(/\$/g,"$$$$")}var x=function(O){if(O.indexOf(d.formatSeparator)<0){var z=Hd(a,y,O);return d.alwaysFormat?d.format(z,void 0,o,Nt(Nt(Nt({},u),a),{},{interpolationkey:O})):z}var T=O.split(d.formatSeparator),k=T.shift().trim(),E=T.join(d.formatSeparator).trim();return d.format(Hd(a,y,k),E,o,Nt(Nt(Nt({},u),a),{},{interpolationkey:k}))};this.resetRegExp();var _=u&&u.missingInterpolationHandler||this.options.missingInterpolationHandler,R=u&&u.interpolation&&u.interpolation.skipOnVariables!==void 0?u.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,M=[{regex:this.regexpUnescape,safeValue:function(O){return v(O)}},{regex:this.regexp,safeValue:function(O){return d.escapeValue?v(d.escape(O)):v(O)}}];return M.forEach(function(O){for(g=0;f=O.regex.exec(i);){var z=f[1].trim();if(p=x(z),p===void 0)if(typeof _=="function"){var T=_(i,f,u);p=typeof T=="string"?T:""}else if(u&&Object.prototype.hasOwnProperty.call(u,z))p="";else if(R){p=f[0];continue}else d.logger.warn("missed to pass in variable ".concat(z," for interpolating ").concat(i)),p="";else typeof p!="string"&&!d.useRawValueToEscape&&(p=$d(p));var k=O.safeValue(p);if(i=i.replace(f[0],k),R?(O.regex.lastIndex+=p.length,O.regex.lastIndex-=f[0].length):O.regex.lastIndex=0,g++,g>=d.maxReplaces)break}}),i}},{key:"nest",value:function(i,a){var o=this,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},d,f,p;function g(_,R){var M=this.nestingOptionsSeparator;if(_.indexOf(M)<0)return _;var O=_.split(new RegExp("".concat(M,"[ ]*{"))),z="{".concat(O[1]);_=O[0],z=this.interpolate(z,p);var T=z.match(/'/g),k=z.match(/"/g);(T&&T.length%2===0&&!k||k.length%2!==0)&&(z=z.replace(/'/g,'"'));try{p=JSON.parse(z),R&&(p=Nt(Nt({},R),p))}catch(E){return this.logger.warn("failed parsing options string in nesting for key ".concat(_),E),"".concat(_).concat(M).concat(z)}return delete p.defaultValue,_}for(;d=this.nestingRegexp.exec(i);){var y=[];p=Nt({},u),p=p.replace&&typeof p.replace!="string"?p.replace:p,p.applyPostProcessor=!1,delete p.defaultValue;var v=!1;if(d[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(d[1])){var x=d[1].split(this.formatSeparator).map(function(_){return _.trim()});d[1]=x.shift(),y=x,v=!0}if(f=a(g.call(this,d[1].trim(),p),p),f&&d[0]===i&&typeof f!="string")return f;typeof f!="string"&&(f=$d(f)),f||(this.logger.warn("missed to resolve ".concat(d[1]," for nesting ").concat(i)),f=""),v&&(f=y.reduce(function(_,R){return o.format(_,R,u.lng,Nt(Nt({},u),{},{interpolationkey:d[1].trim()}))},f.trim())),i=i.replace(d[0],f),this.regexp.lastIndex=0}return i}}]),r})();function Qd(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function en(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Qd(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Qd(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}function nh(r){var i=r.toLowerCase().trim(),a={};if(r.indexOf("(")>-1){var o=r.split("(");i=o[0].toLowerCase().trim();var u=o[1].substring(0,o[1].length-1);if(i==="currency"&&u.indexOf(":")<0)a.currency||(a.currency=u.trim());else if(i==="relativetime"&&u.indexOf(":")<0)a.range||(a.range=u.trim());else{var d=u.split(";");d.forEach(function(f){if(f){var p=f.split(":"),g=Ag(p),y=g[0],v=g.slice(1),x=v.join(":").trim().replace(/^'+|'+$/g,"");a[y.trim()]||(a[y.trim()]=x),x==="false"&&(a[y.trim()]=!1),x==="true"&&(a[y.trim()]=!0),isNaN(x)||(a[y.trim()]=parseInt(x,10))}})}}return{formatName:i,formatOptions:a}}function mr(r){var i={};return function(a,o,u){var d=o+JSON.stringify(u),f=i[d];return f||(f=r(o,u),i[d]=f),f(a)}}var rh=(function(){function r(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_t(this,r),this.logger=Ht.create("formatter"),this.options=i,this.formats={number:mr(function(a,o){var u=new Intl.NumberFormat(a,en({},o));return function(d){return u.format(d)}}),currency:mr(function(a,o){var u=new Intl.NumberFormat(a,en(en({},o),{},{style:"currency"}));return function(d){return u.format(d)}}),datetime:mr(function(a,o){var u=new Intl.DateTimeFormat(a,en({},o));return function(d){return u.format(d)}}),relativetime:mr(function(a,o){var u=new Intl.RelativeTimeFormat(a,en({},o));return function(d){return u.format(d,o.range||"day")}}),list:mr(function(a,o){var u=new Intl.ListFormat(a,en({},o));return function(d){return u.format(d)}})},this.init(i)}return Tt(r,[{key:"init",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=a.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(i,a){this.formats[i.toLowerCase().trim()]=a}},{key:"addCached",value:function(i,a){this.formats[i.toLowerCase().trim()]=mr(a)}},{key:"format",value:function(i,a,o){var u=this,d=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},f=a.split(this.formatSeparator),p=f.reduce(function(g,y){var v=nh(y),x=v.formatName,_=v.formatOptions;if(u.formats[x]){var R=g;try{var M=d&&d.formatParams&&d.formatParams[d.interpolationkey]||{},O=M.locale||M.lng||d.locale||d.lng||o;R=u.formats[x](g,O,en(en(en({},_),d),M))}catch(z){u.logger.warn(z)}return R}else u.logger.warn("there was no format function for ".concat(x));return g},i);return p}}]),r})();function Jd(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function Zd(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?Jd(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):Jd(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}function oh(r){var i=ah();return function(){var a=Vt(r),o;if(i){var u=Vt(this).constructor;o=Reflect.construct(a,arguments,u)}else o=a.apply(this,arguments);return fo(this,o)}}function ah(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ih(r,i){r.pending[i]!==void 0&&(delete r.pending[i],r.pendingCount--)}var lh=(function(r){Da(a,r);var i=oh(a);function a(o,u,d){var f,p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return _t(this,a),f=i.call(this),$a&&En.call(Sn(f)),f.backend=o,f.store=u,f.services=d,f.languageUtils=d.languageUtils,f.options=p,f.logger=Ht.create("backendConnector"),f.waitingReads=[],f.maxParallelReads=p.maxParallelReads||10,f.readingCalls=0,f.maxRetries=p.maxRetries>=0?p.maxRetries:5,f.retryTimeout=p.retryTimeout>=1?p.retryTimeout:350,f.state={},f.queue=[],f.backend&&f.backend.init&&f.backend.init(d,p.backend,p),f}return Tt(a,[{key:"queueLoad",value:function(o,u,d,f){var p=this,g={},y={},v={},x={};return o.forEach(function(_){var R=!0;u.forEach(function(M){var O="".concat(_,"|").concat(M);!d.reload&&p.store.hasResourceBundle(_,M)?p.state[O]=2:p.state[O]<0||(p.state[O]===1?y[O]===void 0&&(y[O]=!0):(p.state[O]=1,R=!1,y[O]===void 0&&(y[O]=!0),g[O]===void 0&&(g[O]=!0),x[M]===void 0&&(x[M]=!0)))}),R||(v[_]=!0)}),(Object.keys(g).length||Object.keys(y).length)&&this.queue.push({pending:y,pendingCount:Object.keys(y).length,loaded:{},errors:[],callback:f}),{toLoad:Object.keys(g),pending:Object.keys(y),toLoadLanguages:Object.keys(v),toLoadNamespaces:Object.keys(x)}}},{key:"loaded",value:function(o,u,d){var f=o.split("|"),p=f[0],g=f[1];u&&this.emit("failedLoading",p,g,u),d&&this.store.addResourceBundle(p,g,d),this.state[o]=u?-1:2;var y={};this.queue.forEach(function(v){$g(v.loaded,[p],g),ih(v,o),u&&v.errors.push(u),v.pendingCount===0&&!v.done&&(Object.keys(v.loaded).forEach(function(x){y[x]||(y[x]={});var _=v.loaded[x];_.length&&_.forEach(function(R){y[x][R]===void 0&&(y[x][R]=!0)})}),v.done=!0,v.errors.length?v.callback(v.errors):v.callback())}),this.emit("loaded",y),this.queue=this.queue.filter(function(v){return!v.done})}},{key:"read",value:function(o,u,d){var f=this,p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,g=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,y=arguments.length>5?arguments[5]:void 0;if(!o.length)return y(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:u,fcName:d,tried:p,wait:g,callback:y});return}this.readingCalls++;var v=function(R,M){if(f.readingCalls--,f.waitingReads.length>0){var O=f.waitingReads.shift();f.read(O.lng,O.ns,O.fcName,O.tried,O.wait,O.callback)}if(R&&M&&p<f.maxRetries){setTimeout(function(){f.read.call(f,o,u,d,p+1,g*2,y)},g);return}y(R,M)},x=this.backend[d].bind(this.backend);if(x.length===2){try{var _=x(o,u);_&&typeof _.then=="function"?_.then(function(R){return v(null,R)}).catch(v):v(null,_)}catch(R){v(R)}return}return x(o,u,v)}},{key:"prepareLoading",value:function(o,u){var d=this,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},p=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),p&&p();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof u=="string"&&(u=[u]);var g=this.queueLoad(o,u,f,p);if(!g.toLoad.length)return g.pending.length||p(),null;g.toLoad.forEach(function(y){d.loadOne(y)})}},{key:"load",value:function(o,u,d){this.prepareLoading(o,u,{},d)}},{key:"reload",value:function(o,u,d){this.prepareLoading(o,u,{reload:!0},d)}},{key:"loadOne",value:function(o){var u=this,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",f=o.split("|"),p=f[0],g=f[1];this.read(p,g,"read",void 0,void 0,function(y,v){y&&u.logger.warn("".concat(d,"loading namespace ").concat(g," for language ").concat(p," failed"),y),!y&&v&&u.logger.log("".concat(d,"loaded namespace ").concat(g," for language ").concat(p),v),u.loaded(o,y,v)})}},{key:"saveMissing",value:function(o,u,d,f,p){var g=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},y=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(u)){this.logger.warn('did not save key "'.concat(d,'" as the namespace "').concat(u,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(d==null||d==="")){if(this.backend&&this.backend.create){var v=Zd(Zd({},g),{},{isUpdate:p}),x=this.backend.create.bind(this.backend);if(x.length<6)try{var _;x.length===5?_=x(o,u,d,f,v):_=x(o,u,d,f),_&&typeof _.then=="function"?_.then(function(R){return y(null,R)}).catch(y):y(null,_)}catch(R){y(R)}else x(o,u,d,f,y,v)}!o||!o[0]||this.store.addResource(o[0],u,d,f)}}}]),a})(En);function Gd(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(r){var i={};if(xt(r[1])==="object"&&(i=r[1]),typeof r[1]=="string"&&(i.defaultValue=r[1]),typeof r[2]=="string"&&(i.tDescription=r[2]),xt(r[2])==="object"||xt(r[3])==="object"){var a=r[3]||r[2];Object.keys(a).forEach(function(o){i[o]=a[o]})}return i},interpolation:{escapeValue:!0,format:function(r,i,a,o){return r},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function ef(r){return typeof r.ns=="string"&&(r.ns=[r.ns]),typeof r.fallbackLng=="string"&&(r.fallbackLng=[r.fallbackLng]),typeof r.fallbackNS=="string"&&(r.fallbackNS=[r.fallbackNS]),r.supportedLngs&&r.supportedLngs.indexOf("cimode")<0&&(r.supportedLngs=r.supportedLngs.concat(["cimode"])),r}function tf(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function It(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?tf(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):tf(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}function sh(r){var i=uh();return function(){var a=Vt(r),o;if(i){var u=Vt(this).constructor;o=Reflect.construct(a,arguments,u)}else o=a.apply(this,arguments);return fo(this,o)}}function uh(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Oa(){}function ch(r){var i=Object.getOwnPropertyNames(Object.getPrototypeOf(r));i.forEach(function(a){typeof r[a]=="function"&&(r[a]=r[a].bind(r))})}var Ma=(function(r){Da(a,r);var i=sh(a);function a(){var o,u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=arguments.length>1?arguments[1]:void 0;if(_t(this,a),o=i.call(this),$a&&En.call(Sn(o)),o.options=ef(u),o.services={},o.logger=Ht,o.modules={external:[]},ch(Sn(o)),d&&!o.isInitialized&&!u.isClone){if(!o.options.initImmediate)return o.init(u,d),fo(o,Sn(o));setTimeout(function(){o.init(u,d)},0)}return o}return Tt(a,[{key:"init",value:function(){var o=this,u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=arguments.length>1?arguments[1]:void 0;typeof u=="function"&&(d=u,u={}),!u.defaultNS&&u.defaultNS!==!1&&u.ns&&(typeof u.ns=="string"?u.defaultNS=u.ns:u.ns.indexOf("translation")<0&&(u.defaultNS=u.ns[0]));var f=Gd();this.options=It(It(It({},f),this.options),ef(u)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=It(It({},f.interpolation),this.options.interpolation)),u.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=u.keySeparator),u.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=u.nsSeparator);function p(z){return z?typeof z=="function"?new z:z:null}if(!this.options.isClone){this.modules.logger?Ht.init(p(this.modules.logger),this.options):Ht.init(null,this.options);var g;this.modules.formatter?g=this.modules.formatter:typeof Intl<"u"&&(g=rh);var y=new qd(this.options);this.store=new qg(this.options.resources,this.options);var v=this.services;v.logger=Ht,v.resourceStore=this.store,v.languageUtils=y,v.pluralResolver=new eh(y,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),g&&(!this.options.interpolation.format||this.options.interpolation.format===f.interpolation.format)&&(v.formatter=p(g),v.formatter.init(v,this.options),this.options.interpolation.format=v.formatter.format.bind(v.formatter)),v.interpolator=new th(this.options),v.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},v.backendConnector=new lh(p(this.modules.backend),v.resourceStore,v,this.options),v.backendConnector.on("*",function(z){for(var T=arguments.length,k=new Array(T>1?T-1:0),E=1;E<T;E++)k[E-1]=arguments[E];o.emit.apply(o,[z].concat(k))}),this.modules.languageDetector&&(v.languageDetector=p(this.modules.languageDetector),v.languageDetector.init&&v.languageDetector.init(v,this.options.detection,this.options)),this.modules.i18nFormat&&(v.i18nFormat=p(this.modules.i18nFormat),v.i18nFormat.init&&v.i18nFormat.init(this)),this.translator=new Kd(this.services,this.options),this.translator.on("*",function(z){for(var T=arguments.length,k=new Array(T>1?T-1:0),E=1;E<T;E++)k[E-1]=arguments[E];o.emit.apply(o,[z].concat(k))}),this.modules.external.forEach(function(z){z.init&&z.init(o)})}if(this.format=this.options.interpolation.format,d||(d=Oa),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var x=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);x.length>0&&x[0]!=="dev"&&(this.options.lng=x[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var _=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];_.forEach(function(z){o[z]=function(){var T;return(T=o.store)[z].apply(T,arguments)}});var R=["addResource","addResources","addResourceBundle","removeResourceBundle"];R.forEach(function(z){o[z]=function(){var T;return(T=o.store)[z].apply(T,arguments),o}});var M=ao(),O=function(){var z=function(T,k){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),M.resolve(k),d(T,k)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return z(null,o.t.bind(o));o.changeLanguage(o.options.lng,z)};return this.options.resources||!this.options.initImmediate?O():setTimeout(O,0),M}},{key:"loadResources",value:function(o){var u=this,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oa,f=d,p=typeof o=="string"?o:this.language;if(typeof o=="function"&&(f=o),!this.options.resources||this.options.partialBundledLanguages){if(p&&p.toLowerCase()==="cimode")return f();var g=[],y=function(x){if(x){var _=u.services.languageUtils.toResolveHierarchy(x);_.forEach(function(R){g.indexOf(R)<0&&g.push(R)})}};if(p)y(p);else{var v=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);v.forEach(function(x){return y(x)})}this.options.preload&&this.options.preload.forEach(function(x){return y(x)}),this.services.backendConnector.load(g,this.options.ns,function(x){!x&&!u.resolvedLanguage&&u.language&&u.setResolvedLanguage(u.language),f(x)})}else f(null)}},{key:"reloadResources",value:function(o,u,d){var f=ao();return o||(o=this.languages),u||(u=this.options.ns),d||(d=Oa),this.services.backendConnector.reload(o,u,function(p){f.resolve(),d(p)}),f}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&ep.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var u=0;u<this.languages.length;u++){var d=this.languages[u];if(!(["cimode","dev"].indexOf(d)>-1)&&this.store.hasLanguageSomeTranslations(d)){this.resolvedLanguage=d;break}}}},{key:"changeLanguage",value:function(o,u){var d=this;this.isLanguageChangingTo=o;var f=ao();this.emit("languageChanging",o);var p=function(v){d.language=v,d.languages=d.services.languageUtils.toResolveHierarchy(v),d.resolvedLanguage=void 0,d.setResolvedLanguage(v)},g=function(v,x){x?(p(x),d.translator.changeLanguage(x),d.isLanguageChangingTo=void 0,d.emit("languageChanged",x),d.logger.log("languageChanged",x)):d.isLanguageChangingTo=void 0,f.resolve(function(){return d.t.apply(d,arguments)}),u&&u(v,function(){return d.t.apply(d,arguments)})},y=function(v){!o&&!v&&d.services.languageDetector&&(v=[]);var x=typeof v=="string"?v:d.services.languageUtils.getBestMatchFromCodes(v);x&&(d.language||p(x),d.translator.language||d.translator.changeLanguage(x),d.services.languageDetector&&d.services.languageDetector.cacheUserLanguage&&d.services.languageDetector.cacheUserLanguage(x)),d.loadResources(x,function(_){g(_,x)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?y(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(y):this.services.languageDetector.detect(y):y(o),f}},{key:"getFixedT",value:function(o,u,d){var f=this,p=function g(y,v){var x;if(xt(v)!=="object"){for(var _=arguments.length,R=new Array(_>2?_-2:0),M=2;M<_;M++)R[M-2]=arguments[M];x=f.options.overloadTranslationOptionHandler([y,v].concat(R))}else x=It({},v);x.lng=x.lng||g.lng,x.lngs=x.lngs||g.lngs,x.ns=x.ns||g.ns,x.keyPrefix=x.keyPrefix||d||g.keyPrefix;var O=f.options.keySeparator||".",z;return x.keyPrefix&&Array.isArray(y)?z=y.map(function(T){return"".concat(x.keyPrefix).concat(O).concat(T)}):z=x.keyPrefix?"".concat(x.keyPrefix).concat(O).concat(y):y,f.t(z,x)};return typeof o=="string"?p.lng=o:p.lngs=o,p.ns=u,p.keyPrefix=d,p}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var u=this,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var f=this.resolvedLanguage||this.languages[0],p=this.options?this.options.fallbackLng:!1,g=this.languages[this.languages.length-1];if(f.toLowerCase()==="cimode")return!0;var y=function(x,_){var R=u.services.backendConnector.state["".concat(x,"|").concat(_)];return R===-1||R===2};if(d.precheck){var v=d.precheck(this,y);if(v!==void 0)return v}return!!(this.hasResourceBundle(f,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||y(f,o)&&(!p||y(g,o)))}},{key:"loadNamespaces",value:function(o,u){var d=this,f=ao();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(p){d.options.ns.indexOf(p)<0&&d.options.ns.push(p)}),this.loadResources(function(p){f.resolve(),u&&u(p)}),f):(u&&u(),Promise.resolve())}},{key:"loadLanguages",value:function(o,u){var d=ao();typeof o=="string"&&(o=[o]);var f=this.options.preload||[],p=o.filter(function(g){return f.indexOf(g)<0});return p.length?(this.options.preload=f.concat(p),this.loadResources(function(g){d.resolve(),u&&u(g)}),d):(u&&u(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var u=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],d=this.services&&this.services.languageUtils||new qd(Gd());return u.indexOf(d.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Oa,f=It(It(It({},this.options),u),{isClone:!0}),p=new a(f);(u.debug!==void 0||u.prefix!==void 0)&&(p.logger=p.logger.clone(u));var g=["store","services","language"];return g.forEach(function(y){p[y]=o[y]}),p.services=It({},this.services),p.services.utils={hasLoadedNamespace:p.hasLoadedNamespace.bind(p)},p.translator=new Kd(p.services,p.options),p.translator.on("*",function(y){for(var v=arguments.length,x=new Array(v>1?v-1:0),_=1;_<v;_++)x[_-1]=arguments[_];p.emit.apply(p,[y].concat(x))}),p.init(f,d),p.translator.options=p.options,p.translator.backendConnector.services.utils={hasLoadedNamespace:p.hasLoadedNamespace.bind(p)},p}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),a})(En);Wt(Ma,"createInstance",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;return new Ma(r,i)});var Ze=Ma.createInstance();Ze.createInstance=Ma.createInstance;Ze.createInstance;Ze.dir;Ze.init;Ze.loadResources;Ze.reloadResources;Ze.use;Ze.changeLanguage;Ze.getFixedT;Ze.t;Ze.exists;Ze.setDefaultNamespace;Ze.hasLoadedNamespace;Ze.loadNamespaces;Ze.loadLanguages;var nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var rf={exports:{}},de={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var of;function fh(){if(of)return de;of=1;var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(b){return b===null||typeof b!="object"?null:(b=x&&b[x]||b["@@iterator"],typeof b=="function"?b:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,O={};function z(b,I,Y){this.props=b,this.context=I,this.refs=O,this.updater=Y||R}z.prototype.isReactComponent={},z.prototype.setState=function(b,I){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,I,"setState")},z.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function T(){}T.prototype=z.prototype;function k(b,I,Y){this.props=b,this.context=I,this.refs=O,this.updater=Y||R}var E=k.prototype=new T;E.constructor=k,M(E,z.prototype),E.isPureReactComponent=!0;var j=Array.isArray,P=Object.prototype.hasOwnProperty,A={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function Q(b,I,Y){var le,oe={},ue=null,se=null;if(I!=null)for(le in I.ref!==void 0&&(se=I.ref),I.key!==void 0&&(ue=""+I.key),I)P.call(I,le)&&!$.hasOwnProperty(le)&&(oe[le]=I[le]);var fe=arguments.length-2;if(fe===1)oe.children=Y;else if(1<fe){for(var ce=Array(fe),Ce=0;Ce<fe;Ce++)ce[Ce]=arguments[Ce+2];oe.children=ce}if(b&&b.defaultProps)for(le in fe=b.defaultProps,fe)oe[le]===void 0&&(oe[le]=fe[le]);return{$$typeof:r,type:b,key:ue,ref:se,props:oe,_owner:A.current}}function K(b,I){return{$$typeof:r,type:b.type,key:I,ref:b.ref,props:b.props,_owner:b._owner}}function ie(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function pe(b){var I={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(Y){return I[Y]})}var _e=/\/+/g;function Oe(b,I){return typeof b=="object"&&b!==null&&b.key!=null?pe(""+b.key):I.toString(36)}function He(b,I,Y,le,oe){var ue=typeof b;(ue==="undefined"||ue==="boolean")&&(b=null);var se=!1;if(b===null)se=!0;else switch(ue){case"string":case"number":se=!0;break;case"object":switch(b.$$typeof){case r:case i:se=!0}}if(se)return se=b,oe=oe(se),b=le===""?"."+Oe(se,0):le,j(oe)?(Y="",b!=null&&(Y=b.replace(_e,"$&/")+"/"),He(oe,I,Y,"",function(Ce){return Ce})):oe!=null&&(ie(oe)&&(oe=K(oe,Y+(!oe.key||se&&se.key===oe.key?"":(""+oe.key).replace(_e,"$&/")+"/")+b)),I.push(oe)),1;if(se=0,le=le===""?".":le+":",j(b))for(var fe=0;fe<b.length;fe++){ue=b[fe];var ce=le+Oe(ue,fe);se+=He(ue,I,Y,ce,oe)}else if(ce=_(b),typeof ce=="function")for(b=ce.call(b),fe=0;!(ue=b.next()).done;)ue=ue.value,ce=le+Oe(ue,fe++),se+=He(ue,I,Y,ce,oe);else if(ue==="object")throw I=String(b),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return se}function Ue(b,I,Y){if(b==null)return b;var le=[],oe=0;return He(b,le,"","",function(ue){return I.call(Y,ue,oe++)}),le}function Le(b){if(b._status===-1){var I=b._result;I=I(),I.then(function(Y){(b._status===0||b._status===-1)&&(b._status=1,b._result=Y)},function(Y){(b._status===0||b._status===-1)&&(b._status=2,b._result=Y)}),b._status===-1&&(b._status=0,b._result=I)}if(b._status===1)return b._result.default;throw b._result}var we={current:null},V={transition:null},G={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:V,ReactCurrentOwner:A};return de.Children={map:Ue,forEach:function(b,I,Y){Ue(b,function(){I.apply(this,arguments)},Y)},count:function(b){var I=0;return Ue(b,function(){I++}),I},toArray:function(b){return Ue(b,function(I){return I})||[]},only:function(b){if(!ie(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},de.Component=z,de.Fragment=a,de.Profiler=u,de.PureComponent=k,de.StrictMode=o,de.Suspense=g,de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,de.cloneElement=function(b,I,Y){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var le=M({},b.props),oe=b.key,ue=b.ref,se=b._owner;if(I!=null){if(I.ref!==void 0&&(ue=I.ref,se=A.current),I.key!==void 0&&(oe=""+I.key),b.type&&b.type.defaultProps)var fe=b.type.defaultProps;for(ce in I)P.call(I,ce)&&!$.hasOwnProperty(ce)&&(le[ce]=I[ce]===void 0&&fe!==void 0?fe[ce]:I[ce])}var ce=arguments.length-2;if(ce===1)le.children=Y;else if(1<ce){fe=Array(ce);for(var Ce=0;Ce<ce;Ce++)fe[Ce]=arguments[Ce+2];le.children=fe}return{$$typeof:r,type:b.type,key:oe,ref:ue,props:le,_owner:se}},de.createContext=function(b){return b={$$typeof:f,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:d,_context:b},b.Consumer=b},de.createElement=Q,de.createFactory=function(b){var I=Q.bind(null,b);return I.type=b,I},de.createRef=function(){return{current:null}},de.forwardRef=function(b){return{$$typeof:p,render:b}},de.isValidElement=ie,de.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:Le}},de.memo=function(b,I){return{$$typeof:y,type:b,compare:I===void 0?null:I}},de.startTransition=function(b){var I=V.transition;V.transition={};try{b()}finally{V.transition=I}},de.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},de.useCallback=function(b,I){return we.current.useCallback(b,I)},de.useContext=function(b){return we.current.useContext(b)},de.useDebugValue=function(){},de.useDeferredValue=function(b){return we.current.useDeferredValue(b)},de.useEffect=function(b,I){return we.current.useEffect(b,I)},de.useId=function(){return we.current.useId()},de.useImperativeHandle=function(b,I,Y){return we.current.useImperativeHandle(b,I,Y)},de.useInsertionEffect=function(b,I){return we.current.useInsertionEffect(b,I)},de.useLayoutEffect=function(b,I){return we.current.useLayoutEffect(b,I)},de.useMemo=function(b,I){return we.current.useMemo(b,I)},de.useReducer=function(b,I,Y){return we.current.useReducer(b,I,Y)},de.useRef=function(b){return we.current.useRef(b)},de.useState=function(b){return we.current.useState(b)},de.useSyncExternalStore=function(b,I,Y){return we.current.useSyncExternalStore(b,I,Y)},de.useTransition=function(){return we.current.useTransition()},de.version="18.2.0",de}var af;function tp(){return af||(af=1,rf.exports=fh()),rf.exports}var D=tp();const Cs=dh(D),lf=Fg({__proto__:null,default:Cs},[D]);function ph(){if(console&&console.warn){for(var r,i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];typeof a[0]=="string"&&(a[0]="react-i18next:: ".concat(a[0])),(r=console).warn.apply(r,a)}}var sf={};function Xl(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];typeof i[0]=="string"&&sf[i[0]]||(typeof i[0]=="string"&&(sf[i[0]]=new Date),ph.apply(void 0,i))}function uf(r,i,a){r.loadNamespaces(i,function(){if(r.isInitialized)a();else{var o=function u(){setTimeout(function(){r.off("initialized",u)},0),a()};r.on("initialized",o)}})}function mh(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=i.languages[0],u=i.options?i.options.fallbackLng:!1,d=i.languages[i.languages.length-1];if(o.toLowerCase()==="cimode")return!0;var f=function(p,g){var y=i.services.backendConnector.state["".concat(p,"|").concat(g)];return y===-1||y===2};return a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!f(i.isLanguageChangingTo,r)?!1:!!(i.hasResourceBundle(o,r)||!i.services.backendConnector.backend||i.options.resources&&!i.options.partialBundledLanguages||f(o,r)&&(!u||f(d,r)))}function gh(r,i){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!i.languages||!i.languages.length)return Xl("i18n.languages were undefined or empty",i.languages),!0;var o=i.options.ignoreJSONStructure!==void 0;return o?i.hasLoadedNamespace(r,{precheck:function(u,d){if(a.bindI18n&&a.bindI18n.indexOf("languageChanging")>-1&&u.services.backendConnector.backend&&u.isLanguageChangingTo&&!d(u.isLanguageChangingTo,r))return!1}}):mh(r,i,a)}var hh=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,yh={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},bh=function(r){return yh[r]},vh=function(r){return r.replace(hh,bh)};function cf(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function df(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?cf(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):cf(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}var Yl={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:vh};function wh(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Yl=df(df({},Yl),r)}function kh(){return Yl}var np;function xh(r){np=r}function Sh(){return np}var Ch={type:"3rdParty",init:function(r){wh(r.options.react),xh(r)}},Eh=D.createContext(),Oh=(function(){function r(){_t(this,r),this.usedNamespaces={}}return Tt(r,[{key:"addUsedNamespaces",value:function(i){var a=this;i.forEach(function(o){a.usedNamespaces[o]||(a.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),r})();function Ph(r,i){var a=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(a!=null){var o,u,d,f,p=[],g=!0,y=!1;try{if(d=(a=a.call(r)).next,i!==0)for(;!(g=(o=d.call(a)).done)&&(p.push(o.value),p.length!==i);g=!0);}catch(v){y=!0,u=v}finally{try{if(!g&&a.return!=null&&(f=a.return(),Object(f)!==f))return}finally{if(y)throw u}}return p}}function zh(r,i){return Yf(r)||Ph(r,i)||Qf(r,i)||Jf()}function ff(r,i){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);i&&(o=o.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),a.push.apply(a,o)}return a}function $l(r){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?ff(Object(a),!0).forEach(function(o){Wt(r,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):ff(Object(a)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(a,o))})}return r}var Lh=function(r,i){var a=D.useRef();return D.useEffect(function(){a.current=r},[r,i]),a.current};function Es(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=i.i18n,o=D.useContext(Eh)||{},u=o.i18n,d=o.defaultNS,f=a||u||Sh();if(f&&!f.reportNamespaces&&(f.reportNamespaces=new Oh),!f){Xl("You will need to pass in an i18next instance by using initReactI18next");var p=function(Q,K){return typeof K=="string"?K:K&&xt(K)==="object"&&typeof K.defaultValue=="string"?K.defaultValue:Array.isArray(Q)?Q[Q.length-1]:Q},g=[p,{},!1];return g.t=p,g.i18n={},g.ready=!1,g}f.options.react&&f.options.react.wait!==void 0&&Xl("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var y=$l($l($l({},kh()),f.options.react),i),v=y.useSuspense,x=y.keyPrefix,_=d||f.options&&f.options.defaultNS;_=typeof _=="string"?[_]:_||["translation"],f.reportNamespaces.addUsedNamespaces&&f.reportNamespaces.addUsedNamespaces(_);var R=(f.isInitialized||f.initializedStoreOnce)&&_.every(function(Q){return gh(Q,f,y)});function M(){return f.getFixedT(null,y.nsMode==="fallback"?_:_[0],x)}var O=D.useState(M),z=zh(O,2),T=z[0],k=z[1],E=_.join(),j=Lh(E),P=D.useRef(!0);D.useEffect(function(){var Q=y.bindI18n,K=y.bindI18nStore;P.current=!0,!R&&!v&&uf(f,_,function(){P.current&&k(M)}),R&&j&&j!==E&&P.current&&k(M);function ie(){P.current&&k(M)}return Q&&f&&f.on(Q,ie),K&&f&&f.store.on(K,ie),function(){P.current=!1,Q&&f&&Q.split(" ").forEach(function(pe){return f.off(pe,ie)}),K&&f&&K.split(" ").forEach(function(pe){return f.store.off(pe,ie)})}},[f,E]);var A=D.useRef(!0);D.useEffect(function(){P.current&&!A.current&&k(M),A.current=!1},[f,x]);var $=[T,f,R];if($.t=T,$.i18n=f,$.ready=R,R||!R&&!v)return $;throw new Promise(function(Q){uf(f,_,function(){Q()})})}const Nh={EA:"EA",indicator:"Indicator",projects:"Projects"},_h={title:"👋 Hi! I'm Agus Pujianto",description:"Founder of Dagangduit.com — creating smart trading systems, expert advisors, and AI-powered financial tools to help traders grow consistently.",link:"Explore Projects"},Th="MMM dd, yyyy",Fh={title:"Comments",btn:"Click to Comment",owner:"Author"},Mh={title:"Projects"},jh={tab:Nh,intro:_h,dateFormat:Th,comment:Fh,projects:Mh},Ah={translation:jh},Rh="translation",Ih={en:Ah},Dh=localStorage.getItem("language");Ze.use(Ch).init({resources:Ih,defaultNS:Rh,lng:Dh||"en"});var Pa={},Bl={exports:{}},lt={},pf={exports:{}},mf={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var gf;function $h(){return gf||(gf=1,(function(r){function i(V,G){var b=V.length;V.push(G);e:for(;0<b;){var I=b-1>>>1,Y=V[I];if(0<u(Y,G))V[I]=G,V[b]=Y,b=I;else break e}}function a(V){return V.length===0?null:V[0]}function o(V){if(V.length===0)return null;var G=V[0],b=V.pop();if(b!==G){V[0]=b;e:for(var I=0,Y=V.length,le=Y>>>1;I<le;){var oe=2*(I+1)-1,ue=V[oe],se=oe+1,fe=V[se];if(0>u(ue,b))se<Y&&0>u(fe,ue)?(V[I]=fe,V[se]=b,I=se):(V[I]=ue,V[oe]=b,I=oe);else if(se<Y&&0>u(fe,b))V[I]=fe,V[se]=b,I=se;else break e}}return G}function u(V,G){var b=V.sortIndex-G.sortIndex;return b!==0?b:V.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],y=[],v=1,x=null,_=3,R=!1,M=!1,O=!1,z=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(V){for(var G=a(y);G!==null;){if(G.callback===null)o(y);else if(G.startTime<=V)o(y),G.sortIndex=G.expirationTime,i(g,G);else break;G=a(y)}}function j(V){if(O=!1,E(V),!M)if(a(g)!==null)M=!0,Le(P);else{var G=a(y);G!==null&&we(j,G.startTime-V)}}function P(V,G){M=!1,O&&(O=!1,T(Q),Q=-1),R=!0;var b=_;try{for(E(G),x=a(g);x!==null&&(!(x.expirationTime>G)||V&&!pe());){var I=x.callback;if(typeof I=="function"){x.callback=null,_=x.priorityLevel;var Y=I(x.expirationTime<=G);G=r.unstable_now(),typeof Y=="function"?x.callback=Y:x===a(g)&&o(g),E(G)}else o(g);x=a(g)}if(x!==null)var le=!0;else{var oe=a(y);oe!==null&&we(j,oe.startTime-G),le=!1}return le}finally{x=null,_=b,R=!1}}var A=!1,$=null,Q=-1,K=5,ie=-1;function pe(){return!(r.unstable_now()-ie<K)}function _e(){if($!==null){var V=r.unstable_now();ie=V;var G=!0;try{G=$(!0,V)}finally{G?Oe():(A=!1,$=null)}}else A=!1}var Oe;if(typeof k=="function")Oe=function(){k(_e)};else if(typeof MessageChannel<"u"){var He=new MessageChannel,Ue=He.port2;He.port1.onmessage=_e,Oe=function(){Ue.postMessage(null)}}else Oe=function(){z(_e,0)};function Le(V){$=V,A||(A=!0,Oe())}function we(V,G){Q=z(function(){V(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(V){V.callback=null},r.unstable_continueExecution=function(){M||R||(M=!0,Le(P))},r.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<V?Math.floor(1e3/V):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return a(g)},r.unstable_next=function(V){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var b=_;_=G;try{return V()}finally{_=b}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var b=_;_=V;try{return G()}finally{_=b}},r.unstable_scheduleCallback=function(V,G,b){var I=r.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?I+b:I):b=I,V){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=b+Y,V={id:v++,callback:G,priorityLevel:V,startTime:b,expirationTime:Y,sortIndex:-1},b>I?(V.sortIndex=b,i(y,V),a(g)===null&&V===a(y)&&(O?(T(Q),Q=-1):O=!0,we(j,b-I))):(V.sortIndex=Y,i(g,V),M||R||(M=!0,Le(P))),V},r.unstable_shouldYield=pe,r.unstable_wrapCallback=function(V){var G=_;return function(){var b=_;_=G;try{return V.apply(this,arguments)}finally{_=b}}}})(mf)),mf}var hf;function Bh(){return hf||(hf=1,pf.exports=$h()),pf.exports}/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var yf;function Hh(){if(yf)return lt;yf=1;var r=tp(),i=Bh();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,u={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(u[e]=t,e=0;e<t.length;e++)o.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(e){return g.call(x,e)?!0:g.call(v,e)?!1:y.test(e)?x[e]=!0:(v[e]=!0,!1)}function R(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function M(e,t,n,l){if(t===null||typeof t>"u"||R(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function O(e,t,n,l,s,c,m){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=m}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];z[t]=new O(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function k(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(T,k);z[t]=new O(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(T,k);z[t]=new O(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(T,k);z[t]=new O(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function E(e,t,n,l){var s=z.hasOwnProperty(t)?z[t]:null;(s!==null?s.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(M(t,n,s,l)&&(n=null),l||s===null?_(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,l=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var j=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),A=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),pe=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Oe=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Ue=Symbol.for("react.memo"),Le=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),V=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var b=Object.assign,I;function Y(e){if(I===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);I=t&&t[1]||""}return`
`+I+e}var le=!1;function oe(e,t){if(!e||le)return"";le=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(F){var l=F}Reflect.construct(e,[],t)}else{try{t.call()}catch(F){l=F}e.call(t.prototype)}else{try{throw Error()}catch(F){l=F}e()}}catch(F){if(F&&l&&typeof F.stack=="string"){for(var s=F.stack.split(`
`),c=l.stack.split(`
`),m=s.length-1,h=c.length-1;1<=m&&0<=h&&s[m]!==c[h];)h--;for(;1<=m&&0<=h;m--,h--)if(s[m]!==c[h]){if(m!==1||h!==1)do if(m--,h--,0>h||s[m]!==c[h]){var w=`
`+s[m].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=m&&0<=h);break}}}finally{le=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Y(e):""}function ue(e){switch(e.tag){case 5:return Y(e.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return e=oe(e.type,!1),e;case 11:return e=oe(e.type.render,!1),e;case 1:return e=oe(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case A:return"Portal";case K:return"Profiler";case Q:return"StrictMode";case Oe:return"Suspense";case He:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pe:return(e.displayName||"Context")+".Consumer";case ie:return(e._context.displayName||"Context")+".Provider";case _e:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ue:return t=e.displayName||null,t!==null?t:se(e.type)||"Memo";case Le:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}function fe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(t);case 8:return t===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mt(e){var t=Ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,c=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(m){l=""+m,c.call(this,m)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(m){l=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gt(e){e._valueTracker||(e._valueTracker=mt(e))}function Pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ce(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qa(e,t){var n=t.checked;return b({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bs(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=ce(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hs(e,t){t=t.checked,t!=null&&E(e,"checked",t,!1)}function Xa(e,t){Hs(e,t);var n=ce(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,ce(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Us(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ya(e,t,n){(t!=="number"||tn(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function Hn(e,t,n,l){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&l&&(e[n].defaultSelected=!0)}else{for(n=""+ce(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Qa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return b({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if(wr(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ce(n)}}function Ws(e,t){var n=ce(t.value),l=ce(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function Ks(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ja(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yo,Xs=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,s)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yo=yo||document.createElement("div"),yo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rp=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){Rp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function Ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function Qs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,s=Ys(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,s):e[n]=s}}var Ip=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Za(e,t){if(t){if(Ip[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ei=null;function ti(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ni=null,Un=null,Vn=null;function Js(e){if(e=Vr(e)){if(typeof ni!="function")throw Error(a(280));var t=e.stateNode;t&&(t=$o(t),ni(e.stateNode,e.type,t))}}function Zs(e){Un?Vn?Vn.push(e):Vn=[e]:Un=e}function Gs(){if(Un){var e=Un,t=Vn;if(Vn=Un=null,Js(e),t)for(e=0;e<t.length;e++)Js(t[e])}}function eu(e,t){return e(t)}function tu(){}var ri=!1;function nu(e,t,n){if(ri)return e(t,n);ri=!0;try{return eu(e,t,n)}finally{ri=!1,(Un!==null||Vn!==null)&&(tu(),Gs())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var l=$o(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var oi=!1;if(p)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){oi=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{oi=!1}function Dp(e,t,n,l,s,c,m,h,w){var F=Array.prototype.slice.call(arguments,3);try{t.apply(n,F)}catch(H){this.onError(H)}}var Er=!1,bo=null,vo=!1,ai=null,$p={onError:function(e){Er=!0,bo=e}};function Bp(e,t,n,l,s,c,m,h,w){Er=!1,bo=null,Dp.apply($p,arguments)}function Hp(e,t,n,l,s,c,m,h,w){if(Bp.apply(this,arguments),Er){if(Er){var F=bo;Er=!1,bo=null}else throw Error(a(198));vo||(vo=!0,ai=F)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ru(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(zn(e)!==e)throw Error(a(188))}function Up(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,l=t;;){var s=n.return;if(s===null)break;var c=s.alternate;if(c===null){if(l=s.return,l!==null){n=l;continue}break}if(s.child===c.child){for(c=s.child;c;){if(c===n)return ou(s),e;if(c===l)return ou(s),t;c=c.sibling}throw Error(a(188))}if(n.return!==l.return)n=s,l=c;else{for(var m=!1,h=s.child;h;){if(h===n){m=!0,n=s,l=c;break}if(h===l){m=!0,l=s,n=c;break}h=h.sibling}if(!m){for(h=c.child;h;){if(h===n){m=!0,n=c,l=s;break}if(h===l){m=!0,l=c,n=s;break}h=h.sibling}if(!m)throw Error(a(189))}}if(n.alternate!==l)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function au(e){return e=Up(e),e!==null?iu(e):null}function iu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=iu(e);if(t!==null)return t;e=e.sibling}return null}var lu=i.unstable_scheduleCallback,su=i.unstable_cancelCallback,Vp=i.unstable_shouldYield,Wp=i.unstable_requestPaint,Te=i.unstable_now,Kp=i.unstable_getCurrentPriorityLevel,ii=i.unstable_ImmediatePriority,uu=i.unstable_UserBlockingPriority,wo=i.unstable_NormalPriority,qp=i.unstable_LowPriority,cu=i.unstable_IdlePriority,ko=null,Ft=null;function Xp(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(ko,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Jp,Yp=Math.log,Qp=Math.LN2;function Jp(e){return e>>>=0,e===0?32:31-(Yp(e)/Qp|0)|0}var xo=64,So=4194304;function Or(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Co(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,s=e.suspendedLanes,c=e.pingedLanes,m=n&268435455;if(m!==0){var h=m&~s;h!==0?l=Or(h):(c&=m,c!==0&&(l=Or(c)))}else m=n&~s,m!==0?l=Or(m):c!==0&&(l=Or(c));if(l===0)return 0;if(t!==0&&t!==l&&(t&s)===0&&(s=l&-l,c=t&-t,s>=c||s===16&&(c&4194240)!==0))return t;if((l&4)!==0&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-St(t),s=1<<n,l|=e[n],t&=~s;return l}function Zp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,c=e.pendingLanes;0<c;){var m=31-St(c),h=1<<m,w=s[m];w===-1?((h&n)===0||(h&l)!==0)&&(s[m]=Zp(h,t)):w<=t&&(e.expiredLanes|=h),c&=~h}}function li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function du(){var e=xo;return xo<<=1,(xo&4194240)===0&&(xo=64),e}function si(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function em(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-St(n),c=1<<s;t[s]=0,l[s]=-1,e[s]=-1,n&=~c}}function ui(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-St(n),s=1<<l;s&t|e[l]&t&&(e[l]|=t),n&=~s}}var ve=0;function fu(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var pu,ci,mu,gu,hu,di=!1,Eo=[],nn=null,rn=null,on=null,zr=new Map,Lr=new Map,an=[],tm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yu(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lr.delete(t.pointerId)}}function Nr(e,t,n,l,s,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[s]},t!==null&&(t=Vr(t),t!==null&&ci(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function nm(e,t,n,l,s){switch(t){case"focusin":return nn=Nr(nn,e,t,n,l,s),!0;case"dragenter":return rn=Nr(rn,e,t,n,l,s),!0;case"mouseover":return on=Nr(on,e,t,n,l,s),!0;case"pointerover":var c=s.pointerId;return zr.set(c,Nr(zr.get(c)||null,e,t,n,l,s)),!0;case"gotpointercapture":return c=s.pointerId,Lr.set(c,Nr(Lr.get(c)||null,e,t,n,l,s)),!0}return!1}function bu(e){var t=Ln(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=ru(n),t!==null){e.blockedOn=t,hu(e.priority,function(){mu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);ei=l,n.target.dispatchEvent(l),ei=null}else return t=Vr(n),t!==null&&ci(t),e.blockedOn=n,!1;t.shift()}return!0}function vu(e,t,n){Oo(e)&&n.delete(t)}function rm(){di=!1,nn!==null&&Oo(nn)&&(nn=null),rn!==null&&Oo(rn)&&(rn=null),on!==null&&Oo(on)&&(on=null),zr.forEach(vu),Lr.forEach(vu)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,rm)))}function Tr(e){function t(s){return _r(s,e)}if(0<Eo.length){_r(Eo[0],e);for(var n=1;n<Eo.length;n++){var l=Eo[n];l.blockedOn===e&&(l.blockedOn=null)}}for(nn!==null&&_r(nn,e),rn!==null&&_r(rn,e),on!==null&&_r(on,e),zr.forEach(t),Lr.forEach(t),n=0;n<an.length;n++)l=an[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)bu(n),n.blockedOn===null&&an.shift()}var Wn=j.ReactCurrentBatchConfig,Po=!0;function om(e,t,n,l){var s=ve,c=Wn.transition;Wn.transition=null;try{ve=1,fi(e,t,n,l)}finally{ve=s,Wn.transition=c}}function am(e,t,n,l){var s=ve,c=Wn.transition;Wn.transition=null;try{ve=4,fi(e,t,n,l)}finally{ve=s,Wn.transition=c}}function fi(e,t,n,l){if(Po){var s=pi(e,t,n,l);if(s===null)Ni(e,t,l,zo,n),yu(e,l);else if(nm(s,e,t,n,l))l.stopPropagation();else if(yu(e,l),t&4&&-1<tm.indexOf(e)){for(;s!==null;){var c=Vr(s);if(c!==null&&pu(c),c=pi(e,t,n,l),c===null&&Ni(e,t,l,zo,n),c===s)break;s=c}s!==null&&l.stopPropagation()}else Ni(e,t,l,null,n)}}var zo=null;function pi(e,t,n,l){if(zo=null,e=ti(l),e=Ln(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ru(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zo=e,null}function wu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kp()){case ii:return 1;case uu:return 4;case wo:case qp:return 16;case cu:return 536870912;default:return 16}default:return 16}}var ln=null,mi=null,Lo=null;function ku(){if(Lo)return Lo;var e,t=mi,n=t.length,l,s="value"in ln?ln.value:ln.textContent,c=s.length;for(e=0;e<n&&t[e]===s[e];e++);var m=n-e;for(l=1;l<=m&&t[n-l]===s[c-l];l++);return Lo=s.slice(e,1<l?1-l:void 0)}function No(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function xu(){return!1}function ut(e){function t(n,l,s,c,m){this._reactName=n,this._targetInst=s,this.type=l,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(c):c[h]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?_o:xu,this.isPropagationStopped=xu,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gi=ut(Kn),Fr=b({},Kn,{view:0,detail:0}),im=ut(Fr),hi,yi,Mr,To=b({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mr&&(Mr&&e.type==="mousemove"?(hi=e.screenX-Mr.screenX,yi=e.screenY-Mr.screenY):yi=hi=0,Mr=e),hi)},movementY:function(e){return"movementY"in e?e.movementY:yi}}),Su=ut(To),lm=b({},To,{dataTransfer:0}),sm=ut(lm),um=b({},Fr,{relatedTarget:0}),bi=ut(um),cm=b({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),dm=ut(cm),fm=b({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pm=ut(fm),mm=b({},Kn,{data:0}),Cu=ut(mm),gm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ym[e])?!!t[e]:!1}function vi(){return bm}var vm=b({},Fr,{key:function(e){if(e.key){var t=gm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=No(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vi,charCode:function(e){return e.type==="keypress"?No(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?No(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wm=ut(vm),km=b({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eu=ut(km),xm=b({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vi}),Sm=ut(xm),Cm=b({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=ut(Cm),Om=b({},To,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pm=ut(Om),zm=[9,13,27,32],wi=p&&"CompositionEvent"in window,jr=null;p&&"documentMode"in document&&(jr=document.documentMode);var Lm=p&&"TextEvent"in window&&!jr,Ou=p&&(!wi||jr&&8<jr&&11>=jr),Pu=" ",zu=!1;function Lu(e,t){switch(e){case"keyup":return zm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function Nm(e,t){switch(e){case"compositionend":return Nu(t);case"keypress":return t.which!==32?null:(zu=!0,Pu);case"textInput":return e=t.data,e===Pu&&zu?null:e;default:return null}}function _m(e,t){if(qn)return e==="compositionend"||!wi&&Lu(e,t)?(e=ku(),Lo=mi=ln=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ou&&t.locale!=="ko"?null:t.data;default:return null}}var Tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tm[e.type]:t==="textarea"}function Tu(e,t,n,l){Zs(l),t=Ro(t,"onChange"),0<t.length&&(n=new gi("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Ar=null,Rr=null;function Fm(e){Qu(e,0)}function Fo(e){var t=Zn(e);if(Pn(t))return e}function Mm(e,t){if(e==="change")return t}var Fu=!1;if(p){var ki;if(p){var xi="oninput"in document;if(!xi){var Mu=document.createElement("div");Mu.setAttribute("oninput","return;"),xi=typeof Mu.oninput=="function"}ki=xi}else ki=!1;Fu=ki&&(!document.documentMode||9<document.documentMode)}function ju(){Ar&&(Ar.detachEvent("onpropertychange",Au),Rr=Ar=null)}function Au(e){if(e.propertyName==="value"&&Fo(Rr)){var t=[];Tu(t,Rr,e,ti(e)),nu(Fm,t)}}function jm(e,t,n){e==="focusin"?(ju(),Ar=t,Rr=n,Ar.attachEvent("onpropertychange",Au)):e==="focusout"&&ju()}function Am(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fo(Rr)}function Rm(e,t){if(e==="click")return Fo(t)}function Im(e,t){if(e==="input"||e==="change")return Fo(t)}function Dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Dm;function Ir(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var s=n[l];if(!g.call(t,s)||!Ct(e[s],t[s]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var n=Ru(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ru(n)}}function Du(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Du(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $u(){for(var e=window,t=tn();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=tn(e.document)}return t}function Si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $m(e){var t=$u(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Du(n.ownerDocument.documentElement,n)){if(l!==null&&Si(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,c=Math.min(l.start,s);l=l.end===void 0?c:Math.min(l.end,s),!e.extend&&c>l&&(s=l,l=c,c=s),s=Iu(n,c);var m=Iu(n,l);s&&m&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==m.node||e.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),c>l?(e.addRange(t),e.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bm=p&&"documentMode"in document&&11>=document.documentMode,Xn=null,Ci=null,Dr=null,Ei=!1;function Bu(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ei||Xn==null||Xn!==tn(l)||(l=Xn,"selectionStart"in l&&Si(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Dr&&Ir(Dr,l)||(Dr=l,l=Ro(Ci,"onSelect"),0<l.length&&(t=new gi("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Xn)))}function Mo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Yn={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Oi={},Hu={};p&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Yn.animationend.animation,delete Yn.animationiteration.animation,delete Yn.animationstart.animation),"TransitionEvent"in window||delete Yn.transitionend.transition);function jo(e){if(Oi[e])return Oi[e];if(!Yn[e])return e;var t=Yn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hu)return Oi[e]=t[n];return e}var Uu=jo("animationend"),Vu=jo("animationiteration"),Wu=jo("animationstart"),Ku=jo("transitionend"),qu=new Map,Xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){qu.set(e,t),d(t,[e])}for(var Pi=0;Pi<Xu.length;Pi++){var zi=Xu[Pi],Hm=zi.toLowerCase(),Um=zi[0].toUpperCase()+zi.slice(1);sn(Hm,"on"+Um)}sn(Uu,"onAnimationEnd"),sn(Vu,"onAnimationIteration"),sn(Wu,"onAnimationStart"),sn("dblclick","onDoubleClick"),sn("focusin","onFocus"),sn("focusout","onBlur"),sn(Ku,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function Yu(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,Hp(l,t,void 0,e),e.currentTarget=null}function Qu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],s=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var m=l.length-1;0<=m;m--){var h=l[m],w=h.instance,F=h.currentTarget;if(h=h.listener,w!==c&&s.isPropagationStopped())break e;Yu(s,h,F),c=w}else for(m=0;m<l.length;m++){if(h=l[m],w=h.instance,F=h.currentTarget,h=h.listener,w!==c&&s.isPropagationStopped())break e;Yu(s,h,F),c=w}}}if(vo)throw e=ai,vo=!1,ai=null,e}function xe(e,t){var n=t[Ai];n===void 0&&(n=t[Ai]=new Set);var l=e+"__bubble";n.has(l)||(Ju(t,e,2,!1),n.add(l))}function Li(e,t,n){var l=0;t&&(l|=4),Ju(n,e,l,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Ao]){e[Ao]=!0,o.forEach(function(n){n!=="selectionchange"&&(Vm.has(n)||Li(n,!1,e),Li(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Li("selectionchange",!1,t))}}function Ju(e,t,n,l){switch(wu(t)){case 1:var s=om;break;case 4:s=am;break;default:s=fi}n=s.bind(null,t,n,e),s=void 0,!oi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Ni(e,t,n,l,s){var c=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var h=l.stateNode.containerInfo;if(h===s||h.nodeType===8&&h.parentNode===s)break;if(m===4)for(m=l.return;m!==null;){var w=m.tag;if((w===3||w===4)&&(w=m.stateNode.containerInfo,w===s||w.nodeType===8&&w.parentNode===s))return;m=m.return}for(;h!==null;){if(m=Ln(h),m===null)return;if(w=m.tag,w===5||w===6){l=c=m;continue e}h=h.parentNode}}l=l.return}nu(function(){var F=c,H=ti(n),U=[];e:{var B=qu.get(e);if(B!==void 0){var X=gi,Z=e;switch(e){case"keypress":if(No(n)===0)break e;case"keydown":case"keyup":X=wm;break;case"focusin":Z="focus",X=bi;break;case"focusout":Z="blur",X=bi;break;case"beforeblur":case"afterblur":X=bi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=sm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Sm;break;case Uu:case Vu:case Wu:X=dm;break;case Ku:X=Em;break;case"scroll":X=im;break;case"wheel":X=Pm;break;case"copy":case"cut":case"paste":X=pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Eu}var ee=(t&4)!==0,Fe=!ee&&e==="scroll",L=ee?B!==null?B+"Capture":null:B;ee=[];for(var S=F,N;S!==null;){N=S;var W=N.stateNode;if(N.tag===5&&W!==null&&(N=W,L!==null&&(W=Sr(S,L),W!=null&&ee.push(Hr(S,W,N)))),Fe)break;S=S.return}0<ee.length&&(B=new X(B,Z,null,n,H),U.push({event:B,listeners:ee}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",B&&n!==ei&&(Z=n.relatedTarget||n.fromElement)&&(Ln(Z)||Z[Kt]))break e;if((X||B)&&(B=H.window===H?H:(B=H.ownerDocument)?B.defaultView||B.parentWindow:window,X?(Z=n.relatedTarget||n.toElement,X=F,Z=Z?Ln(Z):null,Z!==null&&(Fe=zn(Z),Z!==Fe||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(X=null,Z=F),X!==Z)){if(ee=Su,W="onMouseLeave",L="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Eu,W="onPointerLeave",L="onPointerEnter",S="pointer"),Fe=X==null?B:Zn(X),N=Z==null?B:Zn(Z),B=new ee(W,S+"leave",X,n,H),B.target=Fe,B.relatedTarget=N,W=null,Ln(H)===F&&(ee=new ee(L,S+"enter",Z,n,H),ee.target=N,ee.relatedTarget=Fe,W=ee),Fe=W,X&&Z)t:{for(ee=X,L=Z,S=0,N=ee;N;N=Qn(N))S++;for(N=0,W=L;W;W=Qn(W))N++;for(;0<S-N;)ee=Qn(ee),S--;for(;0<N-S;)L=Qn(L),N--;for(;S--;){if(ee===L||L!==null&&ee===L.alternate)break t;ee=Qn(ee),L=Qn(L)}ee=null}else ee=null;X!==null&&Zu(U,B,X,ee,!1),Z!==null&&Fe!==null&&Zu(U,Fe,Z,ee,!0)}}e:{if(B=F?Zn(F):window,X=B.nodeName&&B.nodeName.toLowerCase(),X==="select"||X==="input"&&B.type==="file")var te=Mm;else if(_u(B))if(Fu)te=Im;else{te=Am;var ne=jm}else(X=B.nodeName)&&X.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(te=Rm);if(te&&(te=te(e,F))){Tu(U,te,n,H);break e}ne&&ne(e,B,F),e==="focusout"&&(ne=B._wrapperState)&&ne.controlled&&B.type==="number"&&Ya(B,"number",B.value)}switch(ne=F?Zn(F):window,e){case"focusin":(_u(ne)||ne.contentEditable==="true")&&(Xn=ne,Ci=F,Dr=null);break;case"focusout":Dr=Ci=Xn=null;break;case"mousedown":Ei=!0;break;case"contextmenu":case"mouseup":case"dragend":Ei=!1,Bu(U,n,H);break;case"selectionchange":if(Bm)break;case"keydown":case"keyup":Bu(U,n,H)}var re;if(wi)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else qn?Lu(e,n)&&(ae="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(Ou&&n.locale!=="ko"&&(qn||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&qn&&(re=ku()):(ln=H,mi="value"in ln?ln.value:ln.textContent,qn=!0)),ne=Ro(F,ae),0<ne.length&&(ae=new Cu(ae,e,null,n,H),U.push({event:ae,listeners:ne}),re?ae.data=re:(re=Nu(n),re!==null&&(ae.data=re)))),(re=Lm?Nm(e,n):_m(e,n))&&(F=Ro(F,"onBeforeInput"),0<F.length&&(H=new Cu("onBeforeInput","beforeinput",null,n,H),U.push({event:H,listeners:F}),H.data=re))}Qu(U,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",l=[];e!==null;){var s=e,c=s.stateNode;s.tag===5&&c!==null&&(s=c,c=Sr(e,n),c!=null&&l.unshift(Hr(e,c,s)),c=Sr(e,t),c!=null&&l.push(Hr(e,c,s))),e=e.return}return l}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,t,n,l,s){for(var c=t._reactName,m=[];n!==null&&n!==l;){var h=n,w=h.alternate,F=h.stateNode;if(w!==null&&w===l)break;h.tag===5&&F!==null&&(h=F,s?(w=Sr(n,c),w!=null&&m.unshift(Hr(n,w,h))):s||(w=Sr(n,c),w!=null&&m.push(Hr(n,w,h)))),n=n.return}m.length!==0&&e.push({event:t,listeners:m})}var Wm=/\r\n?/g,Km=/\u0000|\uFFFD/g;function Gu(e){return(typeof e=="string"?e:""+e).replace(Wm,`
`).replace(Km,"")}function Io(e,t,n){if(t=Gu(t),Gu(e)!==t&&n)throw Error(a(425))}function Do(){}var _i=null,Ti=null;function Fi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(Ym)}:Mi;function Ym(e){setTimeout(function(){throw e})}function ji(e,t){var n=t,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(l===0){e.removeChild(s),Tr(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=s}while(n);Tr(t)}function un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Jn,Ur="__reactProps$"+Jn,Kt="__reactContainer$"+Jn,Ai="__reactEvents$"+Jn,Qm="__reactListeners$"+Jn,Jm="__reactHandles$"+Jn;function Ln(e){var t=e[Mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[Mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[Mt])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[Mt]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function $o(e){return e[Ur]||null}var Ri=[],Gn=-1;function cn(e){return{current:e}}function Se(e){0>Gn||(e.current=Ri[Gn],Ri[Gn]=null,Gn--)}function ke(e,t){Gn++,Ri[Gn]=e.current,e.current=t}var dn={},qe=cn(dn),nt=cn(!1),Nn=dn;function er(e,t){var n=e.type.contextTypes;if(!n)return dn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var s={},c;for(c in n)s[c]=t[c];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function rt(e){return e=e.childContextTypes,e!=null}function Bo(){Se(nt),Se(qe)}function nc(e,t,n){if(qe.current!==dn)throw Error(a(168));ke(qe,t),ke(nt,n)}function rc(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var s in l)if(!(s in t))throw Error(a(108,fe(e)||"Unknown",s));return b({},n,l)}function Ho(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dn,Nn=qe.current,ke(qe,e),ke(nt,nt.current),!0}function oc(e,t,n){var l=e.stateNode;if(!l)throw Error(a(169));n?(e=rc(e,t,Nn),l.__reactInternalMemoizedMergedChildContext=e,Se(nt),Se(qe),ke(qe,e)):Se(nt),ke(nt,n)}var qt=null,Uo=!1,Ii=!1;function ac(e){qt===null?qt=[e]:qt.push(e)}function Zm(e){Uo=!0,ac(e)}function fn(){if(!Ii&&qt!==null){Ii=!0;var e=0,t=ve;try{var n=qt;for(ve=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}qt=null,Uo=!1}catch(s){throw qt!==null&&(qt=qt.slice(e+1)),lu(ii,fn),s}finally{ve=t,Ii=!1}}return null}var tr=[],nr=0,Vo=null,Wo=0,ht=[],yt=0,_n=null,Xt=1,Yt="";function Tn(e,t){tr[nr++]=Wo,tr[nr++]=Vo,Vo=e,Wo=t}function ic(e,t,n){ht[yt++]=Xt,ht[yt++]=Yt,ht[yt++]=_n,_n=e;var l=Xt;e=Yt;var s=32-St(l)-1;l&=~(1<<s),n+=1;var c=32-St(t)+s;if(30<c){var m=s-s%5;c=(l&(1<<m)-1).toString(32),l>>=m,s-=m,Xt=1<<32-St(t)+s|n<<s|l,Yt=c+e}else Xt=1<<c|n<<s|l,Yt=e}function Di(e){e.return!==null&&(Tn(e,1),ic(e,1,0))}function $i(e){for(;e===Vo;)Vo=tr[--nr],tr[nr]=null,Wo=tr[--nr],tr[nr]=null;for(;e===_n;)_n=ht[--yt],ht[yt]=null,Yt=ht[--yt],ht[yt]=null,Xt=ht[--yt],ht[yt]=null}var ct=null,dt=null,Ee=!1,Et=null;function lc(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,dt=un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_n!==null?{id:Xt,overflow:Yt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ct=e,dt=null,!0):!1;default:return!1}}function Bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hi(e){if(Ee){var t=dt;if(t){var n=t;if(!sc(e,t)){if(Bi(e))throw Error(a(418));t=un(n.nextSibling);var l=ct;t&&sc(e,t)?lc(l,n):(e.flags=e.flags&-4097|2,Ee=!1,ct=e)}}else{if(Bi(e))throw Error(a(418));e.flags=e.flags&-4097|2,Ee=!1,ct=e}}}function uc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Ko(e){if(e!==ct)return!1;if(!Ee)return uc(e),Ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fi(e.type,e.memoizedProps)),t&&(t=dt)){if(Bi(e))throw cc(),Error(a(418));for(;t;)lc(e,t),t=un(t.nextSibling)}if(uc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=un(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ct?un(e.stateNode.nextSibling):null;return!0}function cc(){for(var e=dt;e;)e=un(e.nextSibling)}function rr(){dt=ct=null,Ee=!1}function Ui(e){Et===null?Et=[e]:Et.push(e)}var Gm=j.ReactCurrentBatchConfig;function Ot(e,t){if(e&&e.defaultProps){t=b({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qo=cn(null),Xo=null,or=null,Vi=null;function Wi(){Vi=or=Xo=null}function Ki(e){var t=qo.current;Se(qo),e._currentValue=t}function qi(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function ar(e,t){Xo=e,Vi=or=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ot=!0),e.firstContext=null)}function bt(e){var t=e._currentValue;if(Vi!==e)if(e={context:e,memoizedValue:t,next:null},or===null){if(Xo===null)throw Error(a(308));or=e,Xo.dependencies={lanes:0,firstContext:e}}else or=or.next=e;return t}var Fn=null;function Xi(e){Fn===null?Fn=[e]:Fn.push(e)}function dc(e,t,n,l){var s=t.interleaved;return s===null?(n.next=n,Xi(t)):(n.next=s.next,s.next=n),t.interleaved=n,Qt(e,l)}function Qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pn=!1;function Yi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,Qt(e,n)}return s=l.interleaved,s===null?(t.next=t,Xi(l)):(t.next=s.next,s.next=t),l.interleaved=t,Qt(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ui(e,n)}}function pc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var s=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var m={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};c===null?s=c=m:c=c.next=m,n=n.next}while(n!==null);c===null?s=c=t:c=c.next=t}else s=c=t;n={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:c,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qo(e,t,n,l){var s=e.updateQueue;pn=!1;var c=s.firstBaseUpdate,m=s.lastBaseUpdate,h=s.shared.pending;if(h!==null){s.shared.pending=null;var w=h,F=w.next;w.next=null,m===null?c=F:m.next=F,m=w;var H=e.alternate;H!==null&&(H=H.updateQueue,h=H.lastBaseUpdate,h!==m&&(h===null?H.firstBaseUpdate=F:h.next=F,H.lastBaseUpdate=w))}if(c!==null){var U=s.baseState;m=0,H=F=w=null,h=c;do{var B=h.lane,X=h.eventTime;if((l&B)===B){H!==null&&(H=H.next={eventTime:X,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var Z=e,ee=h;switch(B=t,X=n,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){U=Z.call(X,U,B);break e}U=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,B=typeof Z=="function"?Z.call(X,U,B):Z,B==null)break e;U=b({},U,B);break e;case 2:pn=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,B=s.effects,B===null?s.effects=[h]:B.push(h))}else X={eventTime:X,lane:B,tag:h.tag,payload:h.payload,callback:h.callback,next:null},H===null?(F=H=X,w=U):H=H.next=X,m|=B;if(h=h.next,h===null){if(h=s.shared.pending,h===null)break;B=h,h=B.next,B.next=null,s.lastBaseUpdate=B,s.shared.pending=null}}while(!0);if(H===null&&(w=U),s.baseState=w,s.firstBaseUpdate=F,s.lastBaseUpdate=H,t=s.shared.interleaved,t!==null){s=t;do m|=s.lane,s=s.next;while(s!==t)}else c===null&&(s.shared.lanes=0);An|=m,e.lanes=m,e.memoizedState=U}}function mc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],s=l.callback;if(s!==null){if(l.callback=null,l=n,typeof s!="function")throw Error(a(191,s));s.call(l)}}}var gc=new r.Component().refs;function Qi(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Jo={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=et(),s=bn(e),c=Jt(l,s);c.payload=t,n!=null&&(c.callback=n),t=mn(e,c,s),t!==null&&(Lt(t,e,s,l),Yo(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=et(),s=bn(e),c=Jt(l,s);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=mn(e,c,s),t!==null&&(Lt(t,e,s,l),Yo(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=et(),l=bn(e),s=Jt(n,l);s.tag=2,t!=null&&(s.callback=t),t=mn(e,s,l),t!==null&&(Lt(t,e,l,n),Yo(t,e,l))}};function hc(e,t,n,l,s,c,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,m):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,l)||!Ir(s,c):!0}function yc(e,t,n){var l=!1,s=dn,c=t.contextType;return typeof c=="object"&&c!==null?c=bt(c):(s=rt(t)?Nn:qe.current,l=t.contextTypes,c=(l=l!=null)?er(e,s):dn),t=new t(n,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jo,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=c),t}function bc(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&Jo.enqueueReplaceState(t,t.state,null)}function Ji(e,t,n,l){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs=gc,Yi(e);var c=t.contextType;typeof c=="object"&&c!==null?s.context=bt(c):(c=rt(t)?Nn:qe.current,s.context=er(e,c)),s.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Qi(e,t,c,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Jo.enqueueReplaceState(s,s.state,null),Qo(e,n,s,l),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var l=n.stateNode}if(!l)throw Error(a(147,e));var s=l,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(m){var h=s.refs;h===gc&&(h=s.refs={}),m===null?delete h[c]:h[c]=m},t._stringRef=c,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vc(e){var t=e._init;return t(e._payload)}function wc(e){function t(L,S){if(e){var N=L.deletions;N===null?(L.deletions=[S],L.flags|=16):N.push(S)}}function n(L,S){if(!e)return null;for(;S!==null;)t(L,S),S=S.sibling;return null}function l(L,S){for(L=new Map;S!==null;)S.key!==null?L.set(S.key,S):L.set(S.index,S),S=S.sibling;return L}function s(L,S){return L=wn(L,S),L.index=0,L.sibling=null,L}function c(L,S,N){return L.index=N,e?(N=L.alternate,N!==null?(N=N.index,N<S?(L.flags|=2,S):N):(L.flags|=2,S)):(L.flags|=1048576,S)}function m(L){return e&&L.alternate===null&&(L.flags|=2),L}function h(L,S,N,W){return S===null||S.tag!==6?(S=Fl(N,L.mode,W),S.return=L,S):(S=s(S,N),S.return=L,S)}function w(L,S,N,W){var te=N.type;return te===$?H(L,S,N.props.children,W,N.key):S!==null&&(S.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Le&&vc(te)===S.type)?(W=s(S,N.props),W.ref=Wr(L,S,N),W.return=L,W):(W=ya(N.type,N.key,N.props,null,L.mode,W),W.ref=Wr(L,S,N),W.return=L,W)}function F(L,S,N,W){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=Ml(N,L.mode,W),S.return=L,S):(S=s(S,N.children||[]),S.return=L,S)}function H(L,S,N,W,te){return S===null||S.tag!==7?(S=$n(N,L.mode,W,te),S.return=L,S):(S=s(S,N),S.return=L,S)}function U(L,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Fl(""+S,L.mode,N),S.return=L,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case P:return N=ya(S.type,S.key,S.props,null,L.mode,N),N.ref=Wr(L,null,S),N.return=L,N;case A:return S=Ml(S,L.mode,N),S.return=L,S;case Le:var W=S._init;return U(L,W(S._payload),N)}if(wr(S)||G(S))return S=$n(S,L.mode,N,null),S.return=L,S;Zo(L,S)}return null}function B(L,S,N,W){var te=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return te!==null?null:h(L,S,""+N,W);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case P:return N.key===te?w(L,S,N,W):null;case A:return N.key===te?F(L,S,N,W):null;case Le:return te=N._init,B(L,S,te(N._payload),W)}if(wr(N)||G(N))return te!==null?null:H(L,S,N,W,null);Zo(L,N)}return null}function X(L,S,N,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return L=L.get(N)||null,h(S,L,""+W,te);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case P:return L=L.get(W.key===null?N:W.key)||null,w(S,L,W,te);case A:return L=L.get(W.key===null?N:W.key)||null,F(S,L,W,te);case Le:var ne=W._init;return X(L,S,N,ne(W._payload),te)}if(wr(W)||G(W))return L=L.get(N)||null,H(S,L,W,te,null);Zo(S,W)}return null}function Z(L,S,N,W){for(var te=null,ne=null,re=S,ae=S=0,Be=null;re!==null&&ae<N.length;ae++){re.index>ae?(Be=re,re=null):Be=re.sibling;var ge=B(L,re,N[ae],W);if(ge===null){re===null&&(re=Be);break}e&&re&&ge.alternate===null&&t(L,re),S=c(ge,S,ae),ne===null?te=ge:ne.sibling=ge,ne=ge,re=Be}if(ae===N.length)return n(L,re),Ee&&Tn(L,ae),te;if(re===null){for(;ae<N.length;ae++)re=U(L,N[ae],W),re!==null&&(S=c(re,S,ae),ne===null?te=re:ne.sibling=re,ne=re);return Ee&&Tn(L,ae),te}for(re=l(L,re);ae<N.length;ae++)Be=X(re,L,ae,N[ae],W),Be!==null&&(e&&Be.alternate!==null&&re.delete(Be.key===null?ae:Be.key),S=c(Be,S,ae),ne===null?te=Be:ne.sibling=Be,ne=Be);return e&&re.forEach(function(kn){return t(L,kn)}),Ee&&Tn(L,ae),te}function ee(L,S,N,W){var te=G(N);if(typeof te!="function")throw Error(a(150));if(N=te.call(N),N==null)throw Error(a(151));for(var ne=te=null,re=S,ae=S=0,Be=null,ge=N.next();re!==null&&!ge.done;ae++,ge=N.next()){re.index>ae?(Be=re,re=null):Be=re.sibling;var kn=B(L,re,ge.value,W);if(kn===null){re===null&&(re=Be);break}e&&re&&kn.alternate===null&&t(L,re),S=c(kn,S,ae),ne===null?te=kn:ne.sibling=kn,ne=kn,re=Be}if(ge.done)return n(L,re),Ee&&Tn(L,ae),te;if(re===null){for(;!ge.done;ae++,ge=N.next())ge=U(L,ge.value,W),ge!==null&&(S=c(ge,S,ae),ne===null?te=ge:ne.sibling=ge,ne=ge);return Ee&&Tn(L,ae),te}for(re=l(L,re);!ge.done;ae++,ge=N.next())ge=X(re,L,ae,ge.value,W),ge!==null&&(e&&ge.alternate!==null&&re.delete(ge.key===null?ae:ge.key),S=c(ge,S,ae),ne===null?te=ge:ne.sibling=ge,ne=ge);return e&&re.forEach(function(Tg){return t(L,Tg)}),Ee&&Tn(L,ae),te}function Fe(L,S,N,W){if(typeof N=="object"&&N!==null&&N.type===$&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case P:e:{for(var te=N.key,ne=S;ne!==null;){if(ne.key===te){if(te=N.type,te===$){if(ne.tag===7){n(L,ne.sibling),S=s(ne,N.props.children),S.return=L,L=S;break e}}else if(ne.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===Le&&vc(te)===ne.type){n(L,ne.sibling),S=s(ne,N.props),S.ref=Wr(L,ne,N),S.return=L,L=S;break e}n(L,ne);break}else t(L,ne);ne=ne.sibling}N.type===$?(S=$n(N.props.children,L.mode,W,N.key),S.return=L,L=S):(W=ya(N.type,N.key,N.props,null,L.mode,W),W.ref=Wr(L,S,N),W.return=L,L=W)}return m(L);case A:e:{for(ne=N.key;S!==null;){if(S.key===ne)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){n(L,S.sibling),S=s(S,N.children||[]),S.return=L,L=S;break e}else{n(L,S);break}else t(L,S);S=S.sibling}S=Ml(N,L.mode,W),S.return=L,L=S}return m(L);case Le:return ne=N._init,Fe(L,S,ne(N._payload),W)}if(wr(N))return Z(L,S,N,W);if(G(N))return ee(L,S,N,W);Zo(L,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,S!==null&&S.tag===6?(n(L,S.sibling),S=s(S,N),S.return=L,L=S):(n(L,S),S=Fl(N,L.mode,W),S.return=L,L=S),m(L)):n(L,S)}return Fe}var ir=wc(!0),kc=wc(!1),Kr={},jt=cn(Kr),qr=cn(Kr),Xr=cn(Kr);function Mn(e){if(e===Kr)throw Error(a(174));return e}function Zi(e,t){switch(ke(Xr,t),ke(qr,e),ke(jt,Kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ja(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ja(t,e)}Se(jt),ke(jt,t)}function lr(){Se(jt),Se(qr),Se(Xr)}function xc(e){Mn(Xr.current);var t=Mn(jt.current),n=Ja(t,e.type);t!==n&&(ke(qr,e),ke(jt,n))}function Gi(e){qr.current===e&&(Se(jt),Se(qr))}var Pe=cn(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function tl(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var ea=j.ReactCurrentDispatcher,nl=j.ReactCurrentBatchConfig,jn=0,ze=null,Ae=null,De=null,ta=!1,Yr=!1,Qr=0,eg=0;function Xe(){throw Error(a(321))}function rl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function ol(e,t,n,l,s,c){if(jn=c,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ea.current=e===null||e.memoizedState===null?og:ag,e=n(l,s),Yr){c=0;do{if(Yr=!1,Qr=0,25<=c)throw Error(a(301));c+=1,De=Ae=null,t.updateQueue=null,ea.current=ig,e=n(l,s)}while(Yr)}if(ea.current=oa,t=Ae!==null&&Ae.next!==null,jn=0,De=Ae=ze=null,ta=!1,t)throw Error(a(300));return e}function al(){var e=Qr!==0;return Qr=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ze.memoizedState=De=e:De=De.next=e,De}function vt(){if(Ae===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ae.next;var t=De===null?ze.memoizedState:De.next;if(t!==null)De=t,Ae=e;else{if(e===null)throw Error(a(310));Ae=e,e={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},De===null?ze.memoizedState=De=e:De=De.next=e}return De}function Jr(e,t){return typeof t=="function"?t(e):t}function il(e){var t=vt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var l=Ae,s=l.baseQueue,c=n.pending;if(c!==null){if(s!==null){var m=s.next;s.next=c.next,c.next=m}l.baseQueue=s=c,n.pending=null}if(s!==null){c=s.next,l=l.baseState;var h=m=null,w=null,F=c;do{var H=F.lane;if((jn&H)===H)w!==null&&(w=w.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),l=F.hasEagerState?F.eagerState:e(l,F.action);else{var U={lane:H,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};w===null?(h=w=U,m=l):w=w.next=U,ze.lanes|=H,An|=H}F=F.next}while(F!==null&&F!==c);w===null?m=l:w.next=h,Ct(l,t.memoizedState)||(ot=!0),t.memoizedState=l,t.baseState=m,t.baseQueue=w,n.lastRenderedState=l}if(e=n.interleaved,e!==null){s=e;do c=s.lane,ze.lanes|=c,An|=c,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ll(e){var t=vt(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var l=n.dispatch,s=n.pending,c=t.memoizedState;if(s!==null){n.pending=null;var m=s=s.next;do c=e(c,m.action),m=m.next;while(m!==s);Ct(c,t.memoizedState)||(ot=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),n.lastRenderedState=c}return[c,l]}function Sc(){}function Cc(e,t){var n=ze,l=vt(),s=t(),c=!Ct(l.memoizedState,s);if(c&&(l.memoizedState=s,ot=!0),l=l.queue,sl(Pc.bind(null,n,l,e),[e]),l.getSnapshot!==t||c||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Zr(9,Oc.bind(null,n,l,s,t),void 0,null),$e===null)throw Error(a(349));(jn&30)!==0||Ec(n,t,s)}return s}function Ec(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oc(e,t,n,l){t.value=n,t.getSnapshot=l,zc(t)&&Lc(e)}function Pc(e,t,n){return n(function(){zc(t)&&Lc(e)})}function zc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Lc(e){var t=Qt(e,1);t!==null&&Lt(t,e,1,-1)}function Nc(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=rg.bind(null,ze,e),[t.memoizedState,e]}function Zr(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function _c(){return vt().memoizedState}function na(e,t,n,l){var s=At();ze.flags|=e,s.memoizedState=Zr(1|t,n,void 0,l===void 0?null:l)}function ra(e,t,n,l){var s=vt();l=l===void 0?null:l;var c=void 0;if(Ae!==null){var m=Ae.memoizedState;if(c=m.destroy,l!==null&&rl(l,m.deps)){s.memoizedState=Zr(t,n,c,l);return}}ze.flags|=e,s.memoizedState=Zr(1|t,n,c,l)}function Tc(e,t){return na(8390656,8,e,t)}function sl(e,t){return ra(2048,8,e,t)}function Fc(e,t){return ra(4,2,e,t)}function Mc(e,t){return ra(4,4,e,t)}function jc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ac(e,t,n){return n=n!=null?n.concat([e]):null,ra(4,4,jc.bind(null,t,e),n)}function ul(){}function Rc(e,t){var n=vt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&rl(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Ic(e,t){var n=vt();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&rl(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function Dc(e,t,n){return(jn&21)===0?(e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=n):(Ct(n,t)||(n=du(),ze.lanes|=n,An|=n,e.baseState=!0),t)}function tg(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var l=nl.transition;nl.transition={};try{e(!1),t()}finally{ve=n,nl.transition=l}}function $c(){return vt().memoizedState}function ng(e,t,n){var l=bn(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},Bc(e))Hc(t,n);else if(n=dc(e,t,n,l),n!==null){var s=et();Lt(n,e,l,s),Uc(n,t,l)}}function rg(e,t,n){var l=bn(e),s={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Hc(t,s);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var m=t.lastRenderedState,h=c(m,n);if(s.hasEagerState=!0,s.eagerState=h,Ct(h,m)){var w=t.interleaved;w===null?(s.next=s,Xi(t)):(s.next=w.next,w.next=s),t.interleaved=s;return}}catch{}finally{}n=dc(e,t,s,l),n!==null&&(s=et(),Lt(n,e,l,s),Uc(n,t,l))}}function Bc(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Hc(e,t){Yr=ta=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uc(e,t,n){if((n&4194240)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,ui(e,n)}}var oa={readContext:bt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},og={readContext:bt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:bt,useEffect:Tc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,na(4194308,4,jc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return na(4194308,4,e,t)},useInsertionEffect:function(e,t){return na(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=At();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=ng.bind(null,ze,e),[l.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Nc,useDebugValue:ul,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Nc(!1),t=e[0];return e=tg.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=ze,s=At();if(Ee){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),$e===null)throw Error(a(349));(jn&30)!==0||Ec(l,t,n)}s.memoizedState=n;var c={value:n,getSnapshot:t};return s.queue=c,Tc(Pc.bind(null,l,c,e),[e]),l.flags|=2048,Zr(9,Oc.bind(null,l,c,n,t),void 0,null),n},useId:function(){var e=At(),t=$e.identifierPrefix;if(Ee){var n=Yt,l=Xt;n=(l&~(1<<32-St(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=eg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ag={readContext:bt,useCallback:Rc,useContext:bt,useEffect:sl,useImperativeHandle:Ac,useInsertionEffect:Fc,useLayoutEffect:Mc,useMemo:Ic,useReducer:il,useRef:_c,useState:function(){return il(Jr)},useDebugValue:ul,useDeferredValue:function(e){var t=vt();return Dc(t,Ae.memoizedState,e)},useTransition:function(){var e=il(Jr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:$c,unstable_isNewReconciler:!1},ig={readContext:bt,useCallback:Rc,useContext:bt,useEffect:sl,useImperativeHandle:Ac,useInsertionEffect:Fc,useLayoutEffect:Mc,useMemo:Ic,useReducer:ll,useRef:_c,useState:function(){return ll(Jr)},useDebugValue:ul,useDeferredValue:function(e){var t=vt();return Ae===null?t.memoizedState=e:Dc(t,Ae.memoizedState,e)},useTransition:function(){var e=ll(Jr)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Sc,useSyncExternalStore:Cc,useId:$c,unstable_isNewReconciler:!1};function sr(e,t){try{var n="",l=t;do n+=ue(l),l=l.return;while(l);var s=n}catch(c){s=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:s,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lg=typeof WeakMap=="function"?WeakMap:Map;function Vc(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){da||(da=!0,El=l),dl(e,t)},n}function Wc(e,t,n){n=Jt(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var s=t.value;n.payload=function(){return l(s)},n.callback=function(){dl(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){dl(e,t),typeof l!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var m=t.stack;this.componentDidCatch(t.value,{componentStack:m!==null?m:""})}),n}function Kc(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new lg;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(n)||(s.add(n),e=kg.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xc(e,t,n,l,s){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,mn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=s,e)}var sg=j.ReactCurrentOwner,ot=!1;function Ge(e,t,n,l){t.child=e===null?kc(t,null,n,l):ir(t,e.child,n,l)}function Yc(e,t,n,l,s){n=n.render;var c=t.ref;return ar(t,s),l=ol(e,t,n,l,c,s),n=al(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Zt(e,t,s)):(Ee&&n&&Di(t),t.flags|=1,Ge(e,t,l,s),t.child)}function Qc(e,t,n,l,s){if(e===null){var c=n.type;return typeof c=="function"&&!Tl(c)&&c.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=c,Jc(e,t,c,l,s)):(e=ya(n.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,(e.lanes&s)===0){var m=c.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(m,l)&&e.ref===t.ref)return Zt(e,t,s)}return t.flags|=1,e=wn(c,l),e.ref=t.ref,e.return=t,t.child=e}function Jc(e,t,n,l,s){if(e!==null){var c=e.memoizedProps;if(Ir(c,l)&&e.ref===t.ref)if(ot=!1,t.pendingProps=l=c,(e.lanes&s)!==0)(e.flags&131072)!==0&&(ot=!0);else return t.lanes=e.lanes,Zt(e,t,s)}return fl(e,t,n,l,s)}function Zc(e,t,n){var l=t.pendingProps,s=l.children,c=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ke(cr,ft),ft|=n;else{if((n&1073741824)===0)return e=c!==null?c.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ke(cr,ft),ft|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=c!==null?c.baseLanes:n,ke(cr,ft),ft|=l}else c!==null?(l=c.baseLanes|n,t.memoizedState=null):l=n,ke(cr,ft),ft|=l;return Ge(e,t,s,n),t.child}function Gc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function fl(e,t,n,l,s){var c=rt(n)?Nn:qe.current;return c=er(t,c),ar(t,s),n=ol(e,t,n,l,c,s),l=al(),e!==null&&!ot?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Zt(e,t,s)):(Ee&&l&&Di(t),t.flags|=1,Ge(e,t,n,s),t.child)}function ed(e,t,n,l,s){if(rt(n)){var c=!0;Ho(t)}else c=!1;if(ar(t,s),t.stateNode===null)ia(e,t),yc(t,n,l),Ji(t,n,l,s),l=!0;else if(e===null){var m=t.stateNode,h=t.memoizedProps;m.props=h;var w=m.context,F=n.contextType;typeof F=="object"&&F!==null?F=bt(F):(F=rt(n)?Nn:qe.current,F=er(t,F));var H=n.getDerivedStateFromProps,U=typeof H=="function"||typeof m.getSnapshotBeforeUpdate=="function";U||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(h!==l||w!==F)&&bc(t,m,l,F),pn=!1;var B=t.memoizedState;m.state=B,Qo(t,l,m,s),w=t.memoizedState,h!==l||B!==w||nt.current||pn?(typeof H=="function"&&(Qi(t,n,H,l),w=t.memoizedState),(h=pn||hc(t,n,h,l,B,w,F))?(U||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(t.flags|=4194308)):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=w),m.props=l,m.state=w,m.context=F,l=h):(typeof m.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{m=t.stateNode,fc(e,t),h=t.memoizedProps,F=t.type===t.elementType?h:Ot(t.type,h),m.props=F,U=t.pendingProps,B=m.context,w=n.contextType,typeof w=="object"&&w!==null?w=bt(w):(w=rt(n)?Nn:qe.current,w=er(t,w));var X=n.getDerivedStateFromProps;(H=typeof X=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(h!==U||B!==w)&&bc(t,m,l,w),pn=!1,B=t.memoizedState,m.state=B,Qo(t,l,m,s);var Z=t.memoizedState;h!==U||B!==Z||nt.current||pn?(typeof X=="function"&&(Qi(t,n,X,l),Z=t.memoizedState),(F=pn||hc(t,n,F,l,B,Z,w)||!1)?(H||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,Z,w),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,Z,w)),typeof m.componentDidUpdate=="function"&&(t.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof m.componentDidUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=Z),m.props=l,m.state=Z,m.context=w,l=F):(typeof m.componentDidUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),l=!1)}return pl(e,t,n,l,c,s)}function pl(e,t,n,l,s,c){Gc(e,t);var m=(t.flags&128)!==0;if(!l&&!m)return s&&oc(t,n,!1),Zt(e,t,c);l=t.stateNode,sg.current=t;var h=m&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&m?(t.child=ir(t,e.child,null,c),t.child=ir(t,null,h,c)):Ge(e,t,h,c),t.memoizedState=l.state,s&&oc(t,n,!0),t.child}function td(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),Zi(e,t.containerInfo)}function nd(e,t,n,l,s){return rr(),Ui(s),t.flags|=256,Ge(e,t,n,l),t.child}var ml={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function rd(e,t,n){var l=t.pendingProps,s=Pe.current,c=!1,m=(t.flags&128)!==0,h;if((h=m)||(h=e!==null&&e.memoizedState===null?!1:(s&2)!==0),h?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),ke(Pe,s&1),e===null)return Hi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(m=l.children,e=l.fallback,c?(l=t.mode,c=t.child,m={mode:"hidden",children:m},(l&1)===0&&c!==null?(c.childLanes=0,c.pendingProps=m):c=ba(m,l,0,null),e=$n(e,l,n,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=gl(n),t.memoizedState=ml,e):hl(t,m));if(s=e.memoizedState,s!==null&&(h=s.dehydrated,h!==null))return ug(e,t,m,l,h,s,n);if(c){c=l.fallback,m=t.mode,s=e.child,h=s.sibling;var w={mode:"hidden",children:l.children};return(m&1)===0&&t.child!==s?(l=t.child,l.childLanes=0,l.pendingProps=w,t.deletions=null):(l=wn(s,w),l.subtreeFlags=s.subtreeFlags&14680064),h!==null?c=wn(h,c):(c=$n(c,m,n,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,l=c,c=t.child,m=e.child.memoizedState,m=m===null?gl(n):{baseLanes:m.baseLanes|n,cachePool:null,transitions:m.transitions},c.memoizedState=m,c.childLanes=e.childLanes&~n,t.memoizedState=ml,l}return c=e.child,e=c.sibling,l=wn(c,{mode:"visible",children:l.children}),(t.mode&1)===0&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function hl(e,t){return t=ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function aa(e,t,n,l){return l!==null&&Ui(l),ir(t,e.child,null,n),e=hl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ug(e,t,n,l,s,c,m){if(n)return t.flags&256?(t.flags&=-257,l=cl(Error(a(422))),aa(e,t,m,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=l.fallback,s=t.mode,l=ba({mode:"visible",children:l.children},s,0,null),c=$n(c,s,m,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,(t.mode&1)!==0&&ir(t,e.child,null,m),t.child.memoizedState=gl(m),t.memoizedState=ml,c);if((t.mode&1)===0)return aa(e,t,m,null);if(s.data==="$!"){if(l=s.nextSibling&&s.nextSibling.dataset,l)var h=l.dgst;return l=h,c=Error(a(419)),l=cl(c,l,void 0),aa(e,t,m,l)}if(h=(m&e.childLanes)!==0,ot||h){if(l=$e,l!==null){switch(m&-m){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=(s&(l.suspendedLanes|m))!==0?0:s,s!==0&&s!==c.retryLane&&(c.retryLane=s,Qt(e,s),Lt(l,e,s,-1))}return _l(),l=cl(Error(a(421))),aa(e,t,m,l)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=xg.bind(null,e),s._reactRetry=t,null):(e=c.treeContext,dt=un(s.nextSibling),ct=t,Ee=!0,Et=null,e!==null&&(ht[yt++]=Xt,ht[yt++]=Yt,ht[yt++]=_n,Xt=e.id,Yt=e.overflow,_n=t),t=hl(t,l.children),t.flags|=4096,t)}function od(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),qi(e.return,t,n)}function yl(e,t,n,l,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:s}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=n,c.tailMode=s)}function ad(e,t,n){var l=t.pendingProps,s=l.revealOrder,c=l.tail;if(Ge(e,t,l.children,n),l=Pe.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,n,t);else if(e.tag===19)od(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(ke(Pe,l),(t.mode&1)===0)t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),yl(t,!1,s,n,c);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Go(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}yl(t,!0,n,null,c);break;case"together":yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ia(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cg(e,t,n){switch(t.tag){case 3:td(t),rr();break;case 5:xc(t);break;case 1:rt(t.type)&&Ho(t);break;case 4:Zi(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,s=t.memoizedProps.value;ke(qo,l._currentValue),l._currentValue=s;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(ke(Pe,Pe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?rd(e,t,n):(ke(Pe,Pe.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ke(Pe,Pe.current&1);break;case 19:if(l=(n&t.childLanes)!==0,(e.flags&128)!==0){if(l)return ad(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ke(Pe,Pe.current),l)break;return null;case 22:case 23:return t.lanes=0,Zc(e,t,n)}return Zt(e,t,n)}var id,bl,ld,sd;id=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},bl=function(){},ld=function(e,t,n,l){var s=e.memoizedProps;if(s!==l){e=t.stateNode,Mn(jt.current);var c=null;switch(n){case"input":s=qa(e,s),l=qa(e,l),c=[];break;case"select":s=b({},s,{value:void 0}),l=b({},l,{value:void 0}),c=[];break;case"textarea":s=Qa(e,s),l=Qa(e,l),c=[];break;default:typeof s.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Do)}Za(n,l);var m;n=null;for(F in s)if(!l.hasOwnProperty(F)&&s.hasOwnProperty(F)&&s[F]!=null)if(F==="style"){var h=s[F];for(m in h)h.hasOwnProperty(m)&&(n||(n={}),n[m]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(u.hasOwnProperty(F)?c||(c=[]):(c=c||[]).push(F,null));for(F in l){var w=l[F];if(h=s?.[F],l.hasOwnProperty(F)&&w!==h&&(w!=null||h!=null))if(F==="style")if(h){for(m in h)!h.hasOwnProperty(m)||w&&w.hasOwnProperty(m)||(n||(n={}),n[m]="");for(m in w)w.hasOwnProperty(m)&&h[m]!==w[m]&&(n||(n={}),n[m]=w[m])}else n||(c||(c=[]),c.push(F,n)),n=w;else F==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,h=h?h.__html:void 0,w!=null&&h!==w&&(c=c||[]).push(F,w)):F==="children"?typeof w!="string"&&typeof w!="number"||(c=c||[]).push(F,""+w):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(u.hasOwnProperty(F)?(w!=null&&F==="onScroll"&&xe("scroll",e),c||h===w||(c=[])):(c=c||[]).push(F,w))}n&&(c=c||[]).push("style",n);var F=c;(t.updateQueue=F)&&(t.flags|=4)}},sd=function(e,t,n,l){n!==l&&(t.flags|=4)};function Gr(e,t){if(!Ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags&14680064,l|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function dg(e,t,n){var l=t.pendingProps;switch($i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return rt(t.type)&&Bo(),Ye(t),null;case 3:return l=t.stateNode,lr(),Se(nt),Se(qe),tl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Et!==null&&(zl(Et),Et=null))),bl(e,t),Ye(t),null;case 5:Gi(t);var s=Mn(Xr.current);if(n=t.type,e!==null&&t.stateNode!=null)ld(e,t,n,l,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(a(166));return Ye(t),null}if(e=Mn(jt.current),Ko(t)){l=t.stateNode,n=t.type;var c=t.memoizedProps;switch(l[Mt]=t,l[Ur]=c,e=(t.mode&1)!==0,n){case"dialog":xe("cancel",l),xe("close",l);break;case"iframe":case"object":case"embed":xe("load",l);break;case"video":case"audio":for(s=0;s<$r.length;s++)xe($r[s],l);break;case"source":xe("error",l);break;case"img":case"image":case"link":xe("error",l),xe("load",l);break;case"details":xe("toggle",l);break;case"input":Bs(l,c),xe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!c.multiple},xe("invalid",l);break;case"textarea":Vs(l,c),xe("invalid",l)}Za(n,c),s=null;for(var m in c)if(c.hasOwnProperty(m)){var h=c[m];m==="children"?typeof h=="string"?l.textContent!==h&&(c.suppressHydrationWarning!==!0&&Io(l.textContent,h,e),s=["children",h]):typeof h=="number"&&l.textContent!==""+h&&(c.suppressHydrationWarning!==!0&&Io(l.textContent,h,e),s=["children",""+h]):u.hasOwnProperty(m)&&h!=null&&m==="onScroll"&&xe("scroll",l)}switch(n){case"input":gt(l),Us(l,c,!0);break;case"textarea":gt(l),Ks(l);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(l.onclick=Do)}l=s,t.updateQueue=l,l!==null&&(t.flags|=4)}else{m=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=m.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=m.createElement(n,{is:l.is}):(e=m.createElement(n),n==="select"&&(m=e,l.multiple?m.multiple=!0:l.size&&(m.size=l.size))):e=m.createElementNS(e,n),e[Mt]=t,e[Ur]=l,id(e,t,!1,!1),t.stateNode=e;e:{switch(m=Ga(n,l),n){case"dialog":xe("cancel",e),xe("close",e),s=l;break;case"iframe":case"object":case"embed":xe("load",e),s=l;break;case"video":case"audio":for(s=0;s<$r.length;s++)xe($r[s],e);s=l;break;case"source":xe("error",e),s=l;break;case"img":case"image":case"link":xe("error",e),xe("load",e),s=l;break;case"details":xe("toggle",e),s=l;break;case"input":Bs(e,l),s=qa(e,l),xe("invalid",e);break;case"option":s=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},s=b({},l,{value:void 0}),xe("invalid",e);break;case"textarea":Vs(e,l),s=Qa(e,l),xe("invalid",e);break;default:s=l}Za(n,s),h=s;for(c in h)if(h.hasOwnProperty(c)){var w=h[c];c==="style"?Qs(e,w):c==="dangerouslySetInnerHTML"?(w=w?w.__html:void 0,w!=null&&Xs(e,w)):c==="children"?typeof w=="string"?(n!=="textarea"||w!=="")&&kr(e,w):typeof w=="number"&&kr(e,""+w):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?w!=null&&c==="onScroll"&&xe("scroll",e):w!=null&&E(e,c,w,m))}switch(n){case"input":gt(e),Us(e,l,!1);break;case"textarea":gt(e),Ks(e);break;case"option":l.value!=null&&e.setAttribute("value",""+ce(l.value));break;case"select":e.multiple=!!l.multiple,c=l.value,c!=null?Hn(e,!!l.multiple,c,!1):l.defaultValue!=null&&Hn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)sd(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(a(166));if(n=Mn(Xr.current),Mn(jt.current),Ko(t)){if(l=t.stateNode,n=t.memoizedProps,l[Mt]=t,(c=l.nodeValue!==n)&&(e=ct,e!==null))switch(e.tag){case 3:Io(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(l.nodeValue,n,(e.mode&1)!==0)}c&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Mt]=t,t.stateNode=l}return Ye(t),null;case 13:if(Se(Pe),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ee&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)cc(),rr(),t.flags|=98560,c=!1;else if(c=Ko(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(a(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(a(317));c[Mt]=t}else rr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),c=!1}else Et!==null&&(zl(Et),Et=null),c=!0;if(!c)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Pe.current&1)!==0?Re===0&&(Re=3):_l())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return lr(),bl(e,t),e===null&&Br(t.stateNode.containerInfo),Ye(t),null;case 10:return Ki(t.type._context),Ye(t),null;case 17:return rt(t.type)&&Bo(),Ye(t),null;case 19:if(Se(Pe),c=t.memoizedState,c===null)return Ye(t),null;if(l=(t.flags&128)!==0,m=c.rendering,m===null)if(l)Gr(c,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(m=Go(e),m!==null){for(t.flags|=128,Gr(c,!1),l=m.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)c=n,e=l,c.flags&=14680066,m=c.alternate,m===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=m.childLanes,c.lanes=m.lanes,c.child=m.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=m.memoizedProps,c.memoizedState=m.memoizedState,c.updateQueue=m.updateQueue,c.type=m.type,e=m.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ke(Pe,Pe.current&1|2),t.child}e=e.sibling}c.tail!==null&&Te()>dr&&(t.flags|=128,l=!0,Gr(c,!1),t.lanes=4194304)}else{if(!l)if(e=Go(m),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Ee)return Ye(t),null}else 2*Te()-c.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,l=!0,Gr(c,!1),t.lanes=4194304);c.isBackwards?(m.sibling=t.child,t.child=m):(n=c.last,n!==null?n.sibling=m:t.child=m,c.last=m)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Te(),t.sibling=null,n=Pe.current,ke(Pe,l?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return Nl(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&(t.mode&1)!==0?(ft&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function fg(e,t){switch($i(t),t.tag){case 1:return rt(t.type)&&Bo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),Se(nt),Se(qe),tl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Gi(t),null;case 13:if(Se(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Se(Pe),null;case 4:return lr(),null;case 10:return Ki(t.type._context),null;case 22:case 23:return Nl(),null;case 24:return null;default:return null}}var la=!1,Qe=!1,pg=typeof WeakSet=="function"?WeakSet:Set,J=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){Ne(e,t,l)}else n.current=null}function ud(e,t,n){try{n()}catch(l){Ne(e,t,l)}}var cd=!1;function mg(e,t){if(_i=Po,e=$u(),Si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var s=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var m=0,h=-1,w=-1,F=0,H=0,U=e,B=null;t:for(;;){for(var X;U!==n||s!==0&&U.nodeType!==3||(h=m+s),U!==c||l!==0&&U.nodeType!==3||(w=m+l),U.nodeType===3&&(m+=U.nodeValue.length),(X=U.firstChild)!==null;)B=U,U=X;for(;;){if(U===e)break t;if(B===n&&++F===s&&(h=m),B===c&&++H===l&&(w=m),(X=U.nextSibling)!==null)break;U=B,B=U.parentNode}U=X}n=h===-1||w===-1?null:{start:h,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ti={focusedElem:e,selectionRange:n},Po=!1,J=t;J!==null;)if(t=J,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,J=e;else for(;J!==null;){t=J;try{var Z=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Fe=Z.memoizedState,L=t.stateNode,S=L.getSnapshotBeforeUpdate(t.elementType===t.type?ee:Ot(t.type,ee),Fe);L.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(W){Ne(t,t.return,W)}if(e=t.sibling,e!==null){e.return=t.return,J=e;break}J=t.return}return Z=cd,cd=!1,Z}function eo(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&ud(t,n,c)}s=s.next}while(s!==l)}}function sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function dd(e){var t=e.alternate;t!==null&&(e.alternate=null,dd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Ur],delete t[Ai],delete t[Qm],delete t[Jm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fd(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wl(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Do));else if(l!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}function kl(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}var Ve=null,Pt=!1;function gn(e,t,n){for(n=n.child;n!==null;)md(e,t,n),n=n.sibling}function md(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(ko,n)}catch{}switch(n.tag){case 5:Qe||ur(n,t);case 6:var l=Ve,s=Pt;Ve=null,gn(e,t,n),Ve=l,Pt=s,Ve!==null&&(Pt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Pt?(e=Ve,n=n.stateNode,e.nodeType===8?ji(e.parentNode,n):e.nodeType===1&&ji(e,n),Tr(e)):ji(Ve,n.stateNode));break;case 4:l=Ve,s=Pt,Ve=n.stateNode.containerInfo,Pt=!0,gn(e,t,n),Ve=l,Pt=s;break;case 0:case 11:case 14:case 15:if(!Qe&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){s=l=l.next;do{var c=s,m=c.destroy;c=c.tag,m!==void 0&&((c&2)!==0||(c&4)!==0)&&ud(n,t,m),s=s.next}while(s!==l)}gn(e,t,n);break;case 1:if(!Qe&&(ur(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(h){Ne(n,t,h)}gn(e,t,n);break;case 21:gn(e,t,n);break;case 22:n.mode&1?(Qe=(l=Qe)||n.memoizedState!==null,gn(e,t,n),Qe=l):gn(e,t,n);break;default:gn(e,t,n)}}function gd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pg),t.forEach(function(l){var s=Sg.bind(null,e,l);n.has(l)||(n.add(l),l.then(s,s))})}}function zt(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var s=n[l];try{var c=e,m=t,h=m;e:for(;h!==null;){switch(h.tag){case 5:Ve=h.stateNode,Pt=!1;break e;case 3:Ve=h.stateNode.containerInfo,Pt=!0;break e;case 4:Ve=h.stateNode.containerInfo,Pt=!0;break e}h=h.return}if(Ve===null)throw Error(a(160));md(c,m,s),Ve=null,Pt=!1;var w=s.alternate;w!==null&&(w.return=null),s.return=null}catch(F){Ne(s,t,F)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hd(t,e),t=t.sibling}function hd(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zt(t,e),Rt(e),l&4){try{eo(3,e,e.return),sa(3,e)}catch(ee){Ne(e,e.return,ee)}try{eo(5,e,e.return)}catch(ee){Ne(e,e.return,ee)}}break;case 1:zt(t,e),Rt(e),l&512&&n!==null&&ur(n,n.return);break;case 5:if(zt(t,e),Rt(e),l&512&&n!==null&&ur(n,n.return),e.flags&32){var s=e.stateNode;try{kr(s,"")}catch(ee){Ne(e,e.return,ee)}}if(l&4&&(s=e.stateNode,s!=null)){var c=e.memoizedProps,m=n!==null?n.memoizedProps:c,h=e.type,w=e.updateQueue;if(e.updateQueue=null,w!==null)try{h==="input"&&c.type==="radio"&&c.name!=null&&Hs(s,c),Ga(h,m);var F=Ga(h,c);for(m=0;m<w.length;m+=2){var H=w[m],U=w[m+1];H==="style"?Qs(s,U):H==="dangerouslySetInnerHTML"?Xs(s,U):H==="children"?kr(s,U):E(s,H,U,F)}switch(h){case"input":Xa(s,c);break;case"textarea":Ws(s,c);break;case"select":var B=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!c.multiple;var X=c.value;X!=null?Hn(s,!!c.multiple,X,!1):B!==!!c.multiple&&(c.defaultValue!=null?Hn(s,!!c.multiple,c.defaultValue,!0):Hn(s,!!c.multiple,c.multiple?[]:"",!1))}s[Ur]=c}catch(ee){Ne(e,e.return,ee)}}break;case 6:if(zt(t,e),Rt(e),l&4){if(e.stateNode===null)throw Error(a(162));s=e.stateNode,c=e.memoizedProps;try{s.nodeValue=c}catch(ee){Ne(e,e.return,ee)}}break;case 3:if(zt(t,e),Rt(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(ee){Ne(e,e.return,ee)}break;case 4:zt(t,e),Rt(e);break;case 13:zt(t,e),Rt(e),s=e.child,s.flags&8192&&(c=s.memoizedState!==null,s.stateNode.isHidden=c,!c||s.alternate!==null&&s.alternate.memoizedState!==null||(Cl=Te())),l&4&&gd(e);break;case 22:if(H=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(F=Qe)||H,zt(t,e),Qe=F):zt(t,e),Rt(e),l&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!H&&(e.mode&1)!==0)for(J=e,H=e.child;H!==null;){for(U=J=H;J!==null;){switch(B=J,X=B.child,B.tag){case 0:case 11:case 14:case 15:eo(4,B,B.return);break;case 1:ur(B,B.return);var Z=B.stateNode;if(typeof Z.componentWillUnmount=="function"){l=B,n=B.return;try{t=l,Z.props=t.memoizedProps,Z.state=t.memoizedState,Z.componentWillUnmount()}catch(ee){Ne(l,n,ee)}}break;case 5:ur(B,B.return);break;case 22:if(B.memoizedState!==null){vd(U);continue}}X!==null?(X.return=B,J=X):vd(U)}H=H.sibling}e:for(H=null,U=e;;){if(U.tag===5){if(H===null){H=U;try{s=U.stateNode,F?(c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(h=U.stateNode,w=U.memoizedProps.style,m=w!=null&&w.hasOwnProperty("display")?w.display:null,h.style.display=Ys("display",m))}catch(ee){Ne(e,e.return,ee)}}}else if(U.tag===6){if(H===null)try{U.stateNode.nodeValue=F?"":U.memoizedProps}catch(ee){Ne(e,e.return,ee)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;H===U&&(H=null),U=U.return}H===U&&(H=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:zt(t,e),Rt(e),l&4&&gd(e);break;case 21:break;default:zt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(fd(n)){var l=n;break e}n=n.return}throw Error(a(160))}switch(l.tag){case 5:var s=l.stateNode;l.flags&32&&(kr(s,""),l.flags&=-33);var c=pd(e);kl(e,c,s);break;case 3:case 4:var m=l.stateNode.containerInfo,h=pd(e);wl(e,h,m);break;default:throw Error(a(161))}}catch(w){Ne(e,e.return,w)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function gg(e,t,n){J=e,yd(e)}function yd(e,t,n){for(var l=(e.mode&1)!==0;J!==null;){var s=J,c=s.child;if(s.tag===22&&l){var m=s.memoizedState!==null||la;if(!m){var h=s.alternate,w=h!==null&&h.memoizedState!==null||Qe;h=la;var F=Qe;if(la=m,(Qe=w)&&!F)for(J=s;J!==null;)m=J,w=m.child,m.tag===22&&m.memoizedState!==null?wd(s):w!==null?(w.return=m,J=w):wd(s);for(;c!==null;)J=c,yd(c),c=c.sibling;J=s,la=h,Qe=F}bd(e)}else(s.subtreeFlags&8772)!==0&&c!==null?(c.return=s,J=c):bd(e)}}function bd(e){for(;J!==null;){var t=J;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||sa(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!Qe)if(n===null)l.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Ot(t.type,n.memoizedProps);l.componentDidUpdate(s,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&mc(t,c,l);break;case 3:var m=t.updateQueue;if(m!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mc(t,m,n)}break;case 5:var h=t.stateNode;if(n===null&&t.flags&4){n=h;var w=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":w.autoFocus&&n.focus();break;case"img":w.src&&(n.src=w.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var F=t.alternate;if(F!==null){var H=F.memoizedState;if(H!==null){var U=H.dehydrated;U!==null&&Tr(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Qe||t.flags&512&&vl(t)}catch(B){Ne(t,t.return,B)}}if(t===e){J=null;break}if(n=t.sibling,n!==null){n.return=t.return,J=n;break}J=t.return}}function vd(e){for(;J!==null;){var t=J;if(t===e){J=null;break}var n=t.sibling;if(n!==null){n.return=t.return,J=n;break}J=t.return}}function wd(e){for(;J!==null;){var t=J;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{sa(4,t)}catch(w){Ne(t,n,w)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var s=t.return;try{l.componentDidMount()}catch(w){Ne(t,s,w)}}var c=t.return;try{vl(t)}catch(w){Ne(t,c,w)}break;case 5:var m=t.return;try{vl(t)}catch(w){Ne(t,m,w)}}}catch(w){Ne(t,t.return,w)}if(t===e){J=null;break}var h=t.sibling;if(h!==null){h.return=t.return,J=h;break}J=t.return}}var hg=Math.ceil,ua=j.ReactCurrentDispatcher,xl=j.ReactCurrentOwner,wt=j.ReactCurrentBatchConfig,me=0,$e=null,Me=null,We=0,ft=0,cr=cn(0),Re=0,to=null,An=0,ca=0,Sl=0,no=null,at=null,Cl=0,dr=1/0,Gt=null,da=!1,El=null,hn=null,fa=!1,yn=null,pa=0,ro=0,Ol=null,ma=-1,ga=0;function et(){return(me&6)!==0?Te():ma!==-1?ma:ma=Te()}function bn(e){return(e.mode&1)===0?1:(me&2)!==0&&We!==0?We&-We:Gm.transition!==null?(ga===0&&(ga=du()),ga):(e=ve,e!==0||(e=window.event,e=e===void 0?16:wu(e.type)),e)}function Lt(e,t,n,l){if(50<ro)throw ro=0,Ol=null,Error(a(185));Pr(e,n,l),((me&2)===0||e!==$e)&&(e===$e&&((me&2)===0&&(ca|=n),Re===4&&vn(e,We)),it(e,l),n===1&&me===0&&(t.mode&1)===0&&(dr=Te()+500,Uo&&fn()))}function it(e,t){var n=e.callbackNode;Gp(e,t);var l=Co(e,e===$e?We:0);if(l===0)n!==null&&su(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&su(n),t===1)e.tag===0?Zm(xd.bind(null,e)):ac(xd.bind(null,e)),Xm(function(){(me&6)===0&&fn()}),n=null;else{switch(fu(l)){case 1:n=ii;break;case 4:n=uu;break;case 16:n=wo;break;case 536870912:n=cu;break;default:n=wo}n=Nd(n,kd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kd(e,t){if(ma=-1,ga=0,(me&6)!==0)throw Error(a(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var l=Co(e,e===$e?We:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||t)t=ha(e,l);else{t=l;var s=me;me|=2;var c=Cd();($e!==e||We!==t)&&(Gt=null,dr=Te()+500,In(e,t));do try{vg();break}catch(h){Sd(e,h)}while(!0);Wi(),ua.current=c,me=s,Me!==null?t=0:($e=null,We=0,t=Re)}if(t!==0){if(t===2&&(s=li(e),s!==0&&(l=s,t=Pl(e,s))),t===1)throw n=to,In(e,0),vn(e,l),it(e,Te()),n;if(t===6)vn(e,l);else{if(s=e.current.alternate,(l&30)===0&&!yg(s)&&(t=ha(e,l),t===2&&(c=li(e),c!==0&&(l=c,t=Pl(e,c))),t===1))throw n=to,In(e,0),vn(e,l),it(e,Te()),n;switch(e.finishedWork=s,e.finishedLanes=l,t){case 0:case 1:throw Error(a(345));case 2:Dn(e,at,Gt);break;case 3:if(vn(e,l),(l&130023424)===l&&(t=Cl+500-Te(),10<t)){if(Co(e,0)!==0)break;if(s=e.suspendedLanes,(s&l)!==l){et(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Mi(Dn.bind(null,e,at,Gt),t);break}Dn(e,at,Gt);break;case 4:if(vn(e,l),(l&4194240)===l)break;for(t=e.eventTimes,s=-1;0<l;){var m=31-St(l);c=1<<m,m=t[m],m>s&&(s=m),l&=~c}if(l=s,l=Te()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*hg(l/1960))-l,10<l){e.timeoutHandle=Mi(Dn.bind(null,e,at,Gt),l);break}Dn(e,at,Gt);break;case 5:Dn(e,at,Gt);break;default:throw Error(a(329))}}}return it(e,Te()),e.callbackNode===n?kd.bind(null,e):null}function Pl(e,t){var n=no;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=ha(e,t),e!==2&&(t=at,at=n,t!==null&&zl(t)),e}function zl(e){at===null?at=e:at.push.apply(at,e)}function yg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var s=n[l],c=s.getSnapshot;s=s.value;try{if(!Ct(c(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vn(e,t){for(t&=~Sl,t&=~ca,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),l=1<<n;e[n]=-1,t&=~l}}function xd(e){if((me&6)!==0)throw Error(a(327));fr();var t=Co(e,0);if((t&1)===0)return it(e,Te()),null;var n=ha(e,t);if(e.tag!==0&&n===2){var l=li(e);l!==0&&(t=l,n=Pl(e,l))}if(n===1)throw n=to,In(e,0),vn(e,t),it(e,Te()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,at,Gt),it(e,Te()),null}function Ll(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(dr=Te()+500,Uo&&fn())}}function Rn(e){yn!==null&&yn.tag===0&&(me&6)===0&&fr();var t=me;me|=1;var n=wt.transition,l=ve;try{if(wt.transition=null,ve=1,e)return e()}finally{ve=l,wt.transition=n,me=t,(me&6)===0&&fn()}}function Nl(){ft=cr.current,Se(cr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qm(n)),Me!==null)for(n=Me.return;n!==null;){var l=n;switch($i(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Bo();break;case 3:lr(),Se(nt),Se(qe),tl();break;case 5:Gi(l);break;case 4:lr();break;case 13:Se(Pe);break;case 19:Se(Pe);break;case 10:Ki(l.type._context);break;case 22:case 23:Nl()}n=n.return}if($e=e,Me=e=wn(e.current,null),We=ft=t,Re=0,to=null,Sl=ca=An=0,at=no=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],l=n.interleaved,l!==null){n.interleaved=null;var s=l.next,c=n.pending;if(c!==null){var m=c.next;c.next=s,l.next=m}n.pending=l}Fn=null}return e}function Sd(e,t){do{var n=Me;try{if(Wi(),ea.current=oa,ta){for(var l=ze.memoizedState;l!==null;){var s=l.queue;s!==null&&(s.pending=null),l=l.next}ta=!1}if(jn=0,De=Ae=ze=null,Yr=!1,Qr=0,xl.current=null,n===null||n.return===null){Re=1,to=t,Me=null;break}e:{var c=e,m=n.return,h=n,w=t;if(t=We,h.flags|=32768,w!==null&&typeof w=="object"&&typeof w.then=="function"){var F=w,H=h,U=H.tag;if((H.mode&1)===0&&(U===0||U===11||U===15)){var B=H.alternate;B?(H.updateQueue=B.updateQueue,H.memoizedState=B.memoizedState,H.lanes=B.lanes):(H.updateQueue=null,H.memoizedState=null)}var X=qc(m);if(X!==null){X.flags&=-257,Xc(X,m,h,c,t),X.mode&1&&Kc(c,F,t),t=X,w=F;var Z=t.updateQueue;if(Z===null){var ee=new Set;ee.add(w),t.updateQueue=ee}else Z.add(w);break e}else{if((t&1)===0){Kc(c,F,t),_l();break e}w=Error(a(426))}}else if(Ee&&h.mode&1){var Fe=qc(m);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),Xc(Fe,m,h,c,t),Ui(sr(w,h));break e}}c=w=sr(w,h),Re!==4&&(Re=2),no===null?no=[c]:no.push(c),c=m;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var L=Vc(c,w,t);pc(c,L);break e;case 1:h=w;var S=c.type,N=c.stateNode;if((c.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(hn===null||!hn.has(N)))){c.flags|=65536,t&=-t,c.lanes|=t;var W=Wc(c,h,t);pc(c,W);break e}}c=c.return}while(c!==null)}Od(n)}catch(te){t=te,Me===n&&n!==null&&(Me=n=n.return);continue}break}while(!0)}function Cd(){var e=ua.current;return ua.current=oa,e===null?oa:e}function _l(){(Re===0||Re===3||Re===2)&&(Re=4),$e===null||(An&268435455)===0&&(ca&268435455)===0||vn($e,We)}function ha(e,t){var n=me;me|=2;var l=Cd();($e!==e||We!==t)&&(Gt=null,In(e,t));do try{bg();break}catch(s){Sd(e,s)}while(!0);if(Wi(),me=n,ua.current=l,Me!==null)throw Error(a(261));return $e=null,We=0,Re}function bg(){for(;Me!==null;)Ed(Me)}function vg(){for(;Me!==null&&!Vp();)Ed(Me)}function Ed(e){var t=Ld(e.alternate,e,ft);e.memoizedProps=e.pendingProps,t===null?Od(e):Me=t,xl.current=null}function Od(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=dg(n,t,ft),n!==null){Me=n;return}}else{if(n=fg(n,t),n!==null){n.flags&=32767,Me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Me=null;return}}if(t=t.sibling,t!==null){Me=t;return}Me=t=e}while(t!==null);Re===0&&(Re=5)}function Dn(e,t,n){var l=ve,s=wt.transition;try{wt.transition=null,ve=1,wg(e,t,n,l)}finally{wt.transition=s,ve=l}return null}function wg(e,t,n,l){do fr();while(yn!==null);if((me&6)!==0)throw Error(a(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var c=n.lanes|n.childLanes;if(em(e,c),e===$e&&(Me=$e=null,We=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fa||(fa=!0,Nd(wo,function(){return fr(),null})),c=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||c){c=wt.transition,wt.transition=null;var m=ve;ve=1;var h=me;me|=4,xl.current=null,mg(e,n),hd(n,e),$m(Ti),Po=!!_i,Ti=_i=null,e.current=n,gg(n),Wp(),me=h,ve=m,wt.transition=c}else e.current=n;if(fa&&(fa=!1,yn=e,pa=s),c=e.pendingLanes,c===0&&(hn=null),Xp(n.stateNode),it(e,Te()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],l(s.value,{componentStack:s.stack,digest:s.digest});if(da)throw da=!1,e=El,El=null,e;return(pa&1)!==0&&e.tag!==0&&fr(),c=e.pendingLanes,(c&1)!==0?e===Ol?ro++:(ro=0,Ol=e):ro=0,fn(),null}function fr(){if(yn!==null){var e=fu(pa),t=wt.transition,n=ve;try{if(wt.transition=null,ve=16>e?16:e,yn===null)var l=!1;else{if(e=yn,yn=null,pa=0,(me&6)!==0)throw Error(a(331));var s=me;for(me|=4,J=e.current;J!==null;){var c=J,m=c.child;if((J.flags&16)!==0){var h=c.deletions;if(h!==null){for(var w=0;w<h.length;w++){var F=h[w];for(J=F;J!==null;){var H=J;switch(H.tag){case 0:case 11:case 15:eo(8,H,c)}var U=H.child;if(U!==null)U.return=H,J=U;else for(;J!==null;){H=J;var B=H.sibling,X=H.return;if(dd(H),H===F){J=null;break}if(B!==null){B.return=X,J=B;break}J=X}}}var Z=c.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Fe=ee.sibling;ee.sibling=null,ee=Fe}while(ee!==null)}}J=c}}if((c.subtreeFlags&2064)!==0&&m!==null)m.return=c,J=m;else e:for(;J!==null;){if(c=J,(c.flags&2048)!==0)switch(c.tag){case 0:case 11:case 15:eo(9,c,c.return)}var L=c.sibling;if(L!==null){L.return=c.return,J=L;break e}J=c.return}}var S=e.current;for(J=S;J!==null;){m=J;var N=m.child;if((m.subtreeFlags&2064)!==0&&N!==null)N.return=m,J=N;else e:for(m=S;J!==null;){if(h=J,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:sa(9,h)}}catch(te){Ne(h,h.return,te)}if(h===m){J=null;break e}var W=h.sibling;if(W!==null){W.return=h.return,J=W;break e}J=h.return}}if(me=s,fn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(ko,e)}catch{}l=!0}return l}finally{ve=n,wt.transition=t}}return!1}function Pd(e,t,n){t=sr(n,t),t=Vc(e,t,1),e=mn(e,t,1),t=et(),e!==null&&(Pr(e,1,t),it(e,t))}function Ne(e,t,n){if(e.tag===3)Pd(e,e,n);else for(;t!==null;){if(t.tag===3){Pd(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(hn===null||!hn.has(l))){e=sr(n,e),e=Wc(t,e,1),t=mn(t,e,1),e=et(),t!==null&&(Pr(t,1,e),it(t,e));break}}t=t.return}}function kg(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=et(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(We&n)===n&&(Re===4||Re===3&&(We&130023424)===We&&500>Te()-Cl?In(e,0):Sl|=n),it(e,t)}function zd(e,t){t===0&&((e.mode&1)===0?t=1:(t=So,So<<=1,(So&130023424)===0&&(So=4194304)));var n=et();e=Qt(e,t),e!==null&&(Pr(e,t,n),it(e,n))}function xg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zd(e,n)}function Sg(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(a(314))}l!==null&&l.delete(t),zd(e,n)}var Ld;Ld=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)ot=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ot=!1,cg(e,t,n);ot=(e.flags&131072)!==0}else ot=!1,Ee&&(t.flags&1048576)!==0&&ic(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ia(e,t),e=t.pendingProps;var s=er(t,qe.current);ar(t,n),s=ol(null,t,l,e,s,n);var c=al();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(l)?(c=!0,Ho(t)):c=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Yi(t),s.updater=Jo,t.stateNode=s,s._reactInternals=t,Ji(t,l,e,n),t=pl(null,t,l,!0,c,n)):(t.tag=0,Ee&&c&&Di(t),Ge(null,t,s,n),t=t.child),t;case 16:l=t.elementType;e:{switch(ia(e,t),e=t.pendingProps,s=l._init,l=s(l._payload),t.type=l,s=t.tag=Eg(l),e=Ot(l,e),s){case 0:t=fl(null,t,l,e,n);break e;case 1:t=ed(null,t,l,e,n);break e;case 11:t=Yc(null,t,l,e,n);break e;case 14:t=Qc(null,t,l,Ot(l.type,e),n);break e}throw Error(a(306,l,""))}return t;case 0:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Ot(l,s),fl(e,t,l,s,n);case 1:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Ot(l,s),ed(e,t,l,s,n);case 3:e:{if(td(t),e===null)throw Error(a(387));l=t.pendingProps,c=t.memoizedState,s=c.element,fc(e,t),Qo(t,l,null,n);var m=t.memoizedState;if(l=m.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:m.cache,pendingSuspenseBoundaries:m.pendingSuspenseBoundaries,transitions:m.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){s=sr(Error(a(423)),t),t=nd(e,t,l,n,s);break e}else if(l!==s){s=sr(Error(a(424)),t),t=nd(e,t,l,n,s);break e}else for(dt=un(t.stateNode.containerInfo.firstChild),ct=t,Ee=!0,Et=null,n=kc(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),l===s){t=Zt(e,t,n);break e}Ge(e,t,l,n)}t=t.child}return t;case 5:return xc(t),e===null&&Hi(t),l=t.type,s=t.pendingProps,c=e!==null?e.memoizedProps:null,m=s.children,Fi(l,s)?m=null:c!==null&&Fi(l,c)&&(t.flags|=32),Gc(e,t),Ge(e,t,m,n),t.child;case 6:return e===null&&Hi(t),null;case 13:return rd(e,t,n);case 4:return Zi(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ir(t,null,l,n):Ge(e,t,l,n),t.child;case 11:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Ot(l,s),Yc(e,t,l,s,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,s=t.pendingProps,c=t.memoizedProps,m=s.value,ke(qo,l._currentValue),l._currentValue=m,c!==null)if(Ct(c.value,m)){if(c.children===s.children&&!nt.current){t=Zt(e,t,n);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var h=c.dependencies;if(h!==null){m=c.child;for(var w=h.firstContext;w!==null;){if(w.context===l){if(c.tag===1){w=Jt(-1,n&-n),w.tag=2;var F=c.updateQueue;if(F!==null){F=F.shared;var H=F.pending;H===null?w.next=w:(w.next=H.next,H.next=w),F.pending=w}}c.lanes|=n,w=c.alternate,w!==null&&(w.lanes|=n),qi(c.return,n,t),h.lanes|=n;break}w=w.next}}else if(c.tag===10)m=c.type===t.type?null:c.child;else if(c.tag===18){if(m=c.return,m===null)throw Error(a(341));m.lanes|=n,h=m.alternate,h!==null&&(h.lanes|=n),qi(m,n,t),m=c.sibling}else m=c.child;if(m!==null)m.return=c;else for(m=c;m!==null;){if(m===t){m=null;break}if(c=m.sibling,c!==null){c.return=m.return,m=c;break}m=m.return}c=m}Ge(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,l=t.pendingProps.children,ar(t,n),s=bt(s),l=l(s),t.flags|=1,Ge(e,t,l,n),t.child;case 14:return l=t.type,s=Ot(l,t.pendingProps),s=Ot(l.type,s),Qc(e,t,l,s,n);case 15:return Jc(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,s=t.pendingProps,s=t.elementType===l?s:Ot(l,s),ia(e,t),t.tag=1,rt(l)?(e=!0,Ho(t)):e=!1,ar(t,n),yc(t,l,s),Ji(t,l,s,n),pl(null,t,l,!0,e,n);case 19:return ad(e,t,n);case 22:return Zc(e,t,n)}throw Error(a(156,t.tag))};function Nd(e,t){return lu(e,t)}function Cg(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,l){return new Cg(e,t,n,l)}function Tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return Tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===Ue)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ya(e,t,n,l,s,c){var m=2;if(l=e,typeof e=="function")Tl(e)&&(m=1);else if(typeof e=="string")m=5;else e:switch(e){case $:return $n(n.children,s,c,t);case Q:m=8,s|=8;break;case K:return e=kt(12,n,t,s|2),e.elementType=K,e.lanes=c,e;case Oe:return e=kt(13,n,t,s),e.elementType=Oe,e.lanes=c,e;case He:return e=kt(19,n,t,s),e.elementType=He,e.lanes=c,e;case we:return ba(n,s,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:m=10;break e;case pe:m=9;break e;case _e:m=11;break e;case Ue:m=14;break e;case Le:m=16,l=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=kt(m,n,t,s),t.elementType=e,t.type=l,t.lanes=c,t}function $n(e,t,n,l){return e=kt(7,e,l,t),e.lanes=n,e}function ba(e,t,n,l){return e=kt(22,e,l,t),e.elementType=we,e.lanes=n,e.stateNode={isHidden:!1},e}function Fl(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function Ml(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Og(e,t,n,l,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=l,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function jl(e,t,n,l,s,c,m,h,w){return e=new Og(e,t,n,h,w),t===1?(t=1,c===!0&&(t|=8)):t=0,c=kt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yi(c),e}function Pg(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function _d(e){if(!e)return dn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(rt(n))return rc(e,n,t)}return t}function Td(e,t,n,l,s,c,m,h,w){return e=jl(n,l,!0,e,s,c,m,h,w),e.context=_d(null),n=e.current,l=et(),s=bn(n),c=Jt(l,s),c.callback=t??null,mn(n,c,s),e.current.lanes=s,Pr(e,s,l),it(e,l),e}function va(e,t,n,l){var s=t.current,c=et(),m=bn(s);return n=_d(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(c,m),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=mn(s,t,m),e!==null&&(Lt(e,s,m,c),Yo(e,s,m)),m}function wa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){Fd(e,t),(e=e.alternate)&&Fd(e,t)}function zg(){return null}var Md=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rl(e){this._internalRoot=e}ka.prototype.render=Rl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));va(e,t,null,null)},ka.prototype.unmount=Rl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rn(function(){va(null,e,null,null)}),t[Kt]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=gu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&bu(e)}};function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jd(){}function Lg(e,t,n,l,s){if(s){if(typeof l=="function"){var c=l;l=function(){var F=wa(m);c.call(F)}}var m=Td(t,l,e,0,null,!1,!1,"",jd);return e._reactRootContainer=m,e[Kt]=m.current,Br(e.nodeType===8?e.parentNode:e),Rn(),m}for(;s=e.lastChild;)e.removeChild(s);if(typeof l=="function"){var h=l;l=function(){var F=wa(w);h.call(F)}}var w=jl(e,0,!1,null,null,!1,!1,"",jd);return e._reactRootContainer=w,e[Kt]=w.current,Br(e.nodeType===8?e.parentNode:e),Rn(function(){va(t,w,n,l)}),w}function Sa(e,t,n,l,s){var c=n._reactRootContainer;if(c){var m=c;if(typeof s=="function"){var h=s;s=function(){var w=wa(m);h.call(w)}}va(t,m,e,s)}else m=Lg(n,t,e,s,l);return wa(m)}pu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Or(t.pendingLanes);n!==0&&(ui(t,n|1),it(t,Te()),(me&6)===0&&(dr=Te()+500,fn()))}break;case 13:Rn(function(){var l=Qt(e,1);if(l!==null){var s=et();Lt(l,e,1,s)}}),Al(e,1)}},ci=function(e){if(e.tag===13){var t=Qt(e,134217728);if(t!==null){var n=et();Lt(t,e,134217728,n)}Al(e,134217728)}},mu=function(e){if(e.tag===13){var t=bn(e),n=Qt(e,t);if(n!==null){var l=et();Lt(n,e,t,l)}Al(e,t)}},gu=function(){return ve},hu=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}},ni=function(e,t,n){switch(t){case"input":if(Xa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var s=$o(l);if(!s)throw Error(a(90));Pn(l),Xa(l,s)}}}break;case"textarea":Ws(e,n);break;case"select":t=n.value,t!=null&&Hn(e,!!n.multiple,t,!1)}},eu=Ll,tu=Rn;var Ng={usingClientEntryPoint:!1,Events:[Vr,Zn,$o,Zs,Gs,Ll]},oo={findFiberByHostInstance:Ln,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_g={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:j.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=au(e),e===null?null:e.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||zg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ko=Ca.inject(_g),Ft=Ca}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ng,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Il(t))throw Error(a(200));return Pg(e,t,null,n)},lt.createRoot=function(e,t){if(!Il(e))throw Error(a(299));var n=!1,l="",s=Md;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=jl(e,1,!1,null,null,n,!1,l,s),e[Kt]=t.current,Br(e.nodeType===8?e.parentNode:e),new Rl(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=au(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return Rn(e)},lt.hydrate=function(e,t,n){if(!xa(t))throw Error(a(200));return Sa(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Il(e))throw Error(a(405));var l=n!=null&&n.hydratedSources||null,s=!1,c="",m=Md;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),t=Td(t,null,e,1,n??null,s,!1,c,m),e[Kt]=t.current,Br(e),l)for(e=0;e<l.length;e++)n=l[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new ka(t)},lt.render=function(e,t,n){if(!xa(t))throw Error(a(200));return Sa(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!xa(e))throw Error(a(40));return e._reactRootContainer?(Rn(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1},lt.unstable_batchedUpdates=Ll,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!xa(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Sa(e,t,n,!1,l)},lt.version="18.2.0-next-9e3b772b8-20220608",lt}var bf;function Uh(){if(bf)return Bl.exports;bf=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Bl.exports=Hh(),Bl.exports}var vf;function Vh(){if(vf)return Pa;vf=1;var r=Uh();return Pa.createRoot=r.createRoot,Pa.hydrateRoot=r.hydrateRoot,Pa}var Wh=Vh();/**
* @remix-run/router v1.3.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function lo(){return lo=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},lo.apply(this,arguments)}var xn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(xn||(xn={}));const wf="popstate";function Kh(r){r===void 0&&(r={});function i(u,d){let{pathname:f="/",search:p="",hash:g=""}=Bn(u.location.hash.substr(1));return Ql("",{pathname:f,search:p,hash:g},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function a(u,d){let f=u.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let g=u.location.href,y=g.indexOf("#");p=y===-1?g:g.slice(0,y)}return p+"#"+(typeof d=="string"?d:ja(d))}function o(u,d){qh(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(d)+")")}return Yh(i,a,o,r)}function Ie(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}function qh(r,i){if(!r){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function Xh(){return Math.random().toString(36).substr(2,8)}function kf(r,i){return{usr:r.state,key:r.key,idx:i}}function Ql(r,i,a,o){return a===void 0&&(a=null),lo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof i=="string"?Bn(i):i,{state:a,key:i&&i.key||o||Xh()})}function ja(r){let{pathname:i="/",search:a="",hash:o=""}=r;return a&&a!=="?"&&(i+=a.charAt(0)==="?"?a:"?"+a),o&&o!=="#"&&(i+=o.charAt(0)==="#"?o:"#"+o),i}function Bn(r){let i={};if(r){let a=r.indexOf("#");a>=0&&(i.hash=r.substr(a),r=r.substr(0,a));let o=r.indexOf("?");o>=0&&(i.search=r.substr(o),r=r.substr(0,o)),r&&(i.pathname=r)}return i}function Yh(r,i,a,o){o===void 0&&(o={});let{window:u=document.defaultView,v5Compat:d=!1}=o,f=u.history,p=xn.Pop,g=null,y=v();y==null&&(y=0,f.replaceState(lo({},f.state,{idx:y}),""));function v(){return(f.state||{idx:null}).idx}function x(){p=xn.Pop;let z=v(),T=z==null?null:z-y;y=z,g&&g({action:p,location:O.location,delta:T})}function _(z,T){p=xn.Push;let k=Ql(O.location,z,T);a&&a(k,z),y=v()+1;let E=kf(k,y),j=O.createHref(k);try{f.pushState(E,"",j)}catch{u.location.assign(j)}d&&g&&g({action:p,location:O.location,delta:1})}function R(z,T){p=xn.Replace;let k=Ql(O.location,z,T);a&&a(k,z),y=v();let E=kf(k,y),j=O.createHref(k);f.replaceState(E,"",j),d&&g&&g({action:p,location:O.location,delta:0})}function M(z){let T=u.location.origin!=="null"?u.location.origin:u.location.href,k=typeof z=="string"?z:ja(z);return Ie(T,"No window.location.(origin|href) available to create URL for href: "+k),new URL(k,T)}let O={get action(){return p},get location(){return r(u,f)},listen(z){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(wf,x),g=z,()=>{u.removeEventListener(wf,x),g=null}},createHref(z){return i(u,z)},createURL:M,encodeLocation(z){let T=M(z);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:_,replace:R,go(z){return f.go(z)}};return O}var xf;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(xf||(xf={}));function Qh(r,i,a){a===void 0&&(a="/");let o=typeof i=="string"?Bn(i):i,u=Os(o.pathname||"/",a);if(u==null)return null;let d=rp(r);Jh(d);let f=null;for(let p=0;f==null&&p<d.length;++p)f=iy(d[p],uy(u));return f}function rp(r,i,a,o){i===void 0&&(i=[]),a===void 0&&(a=[]),o===void 0&&(o="");let u=(d,f,p)=>{let g={relativePath:p===void 0?d.path||"":p,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};g.relativePath.startsWith("/")&&(Ie(g.relativePath.startsWith(o),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(o.length));let y=Cn([o,g.relativePath]),v=a.concat(g);d.children&&d.children.length>0&&(Ie(d.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),rp(d.children,i,v,y)),!(d.path==null&&!d.index)&&i.push({path:y,score:oy(y,d.index),routesMeta:v})};return r.forEach((d,f)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))u(d,f);else for(let g of op(d.path))u(d,f,g)}),i}function op(r){let i=r.split("/");if(i.length===0)return[];let[a,...o]=i,u=a.endsWith("?"),d=a.replace(/\?$/,"");if(o.length===0)return u?[d,""]:[d];let f=op(o.join("/")),p=[];return p.push(...f.map(g=>g===""?d:[d,g].join("/"))),u&&p.push(...f),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function Jh(r){r.sort((i,a)=>i.score!==a.score?a.score-i.score:ay(i.routesMeta.map(o=>o.childrenIndex),a.routesMeta.map(o=>o.childrenIndex)))}const Zh=/^:\w+$/,Gh=3,ey=2,ty=1,ny=10,ry=-2,Sf=r=>r==="*";function oy(r,i){let a=r.split("/"),o=a.length;return a.some(Sf)&&(o+=ry),i&&(o+=ey),a.filter(u=>!Sf(u)).reduce((u,d)=>u+(Zh.test(d)?Gh:d===""?ty:ny),o)}function ay(r,i){return r.length===i.length&&r.slice(0,-1).every((a,o)=>a===i[o])?r[r.length-1]-i[i.length-1]:0}function iy(r,i){let{routesMeta:a}=r,o={},u="/",d=[];for(let f=0;f<a.length;++f){let p=a[f],g=f===a.length-1,y=u==="/"?i:i.slice(u.length)||"/",v=ly({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},y);if(!v)return null;Object.assign(o,v.params);let x=p.route;d.push({params:o,pathname:Cn([u,v.pathname]),pathnameBase:py(Cn([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=Cn([u,v.pathnameBase]))}return d}function ly(r,i){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[a,o]=sy(r.path,r.caseSensitive,r.end),u=i.match(a);if(!u)return null;let d=u[0],f=d.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:o.reduce((g,y,v)=>{if(y==="*"){let x=p[v]||"";f=d.slice(0,d.length-x.length).replace(/(.)\/+$/,"$1")}return g[y]=cy(p[v]||"",y),g},{}),pathname:d,pathnameBase:f,pattern:r}}function sy(r,i,a){i===void 0&&(i=!1),a===void 0&&(a=!0),Ps(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let o=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(d,f)=>(o.push(f),"/([^\\/]+)"));return r.endsWith("*")?(o.push("*"),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),o]}function uy(r){try{return decodeURI(r)}catch(i){return Ps(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),r}}function cy(r,i){try{return decodeURIComponent(r)}catch(a){return Ps(!1,'The value for the URL param "'+i+'" will not be decoded because'+(' the string "'+r+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),r}}function Os(r,i){if(i==="/")return r;if(!r.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,o=r.charAt(a);return o&&o!=="/"?null:r.slice(a)||"/"}function Ps(r,i){if(!r){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function dy(r,i){i===void 0&&(i="/");let{pathname:a,search:o="",hash:u=""}=typeof r=="string"?Bn(r):r;return{pathname:a?a.startsWith("/")?a:fy(a,i):i,search:my(o),hash:gy(u)}}function fy(r,i){let a=i.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function Hl(r,i,a,o){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ap(r){return r.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function ip(r,i,a,o){o===void 0&&(o=!1);let u;typeof r=="string"?u=Bn(r):(u=lo({},r),Ie(!u.pathname||!u.pathname.includes("?"),Hl("?","pathname","search",u)),Ie(!u.pathname||!u.pathname.includes("#"),Hl("#","pathname","hash",u)),Ie(!u.search||!u.search.includes("#"),Hl("#","search","hash",u)));let d=r===""||u.pathname==="",f=d?"/":u.pathname,p;if(o||f==null)p=a;else{let x=i.length-1;if(f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),x-=1;u.pathname=_.join("/")}p=x>=0?i[x]:"/"}let g=dy(u,p),y=f&&f!=="/"&&f.endsWith("/"),v=(d||f===".")&&a.endsWith("/");return!g.pathname.endsWith("/")&&(y||v)&&(g.pathname+="/"),g}const Cn=r=>r.join("/").replace(/\/\/+/g,"/"),py=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),my=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,gy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function hy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const lp=["post","put","patch","delete"];new Set(lp);const yy=["get",...lp];new Set(yy);/**
* React Router v6.8.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Jl(){return Jl=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},Jl.apply(this,arguments)}const sp=D.createContext(null),zs=D.createContext(null),br=D.createContext(null),Ba=D.createContext(null),On=D.createContext({outlet:null,matches:[]}),up=D.createContext(null);function by(r,i){let{relative:a}=i===void 0?{}:i;po()||Ie(!1);let{basename:o,navigator:u}=D.useContext(br),{hash:d,pathname:f,search:p}=Ls(r,{relative:a}),g=f;return o!=="/"&&(g=f==="/"?o:Cn([o,f])),u.createHref({pathname:g,search:p,hash:d})}function po(){return D.useContext(Ba)!=null}function mo(){return po()||Ie(!1),D.useContext(Ba).location}function go(){po()||Ie(!1);let{basename:r,navigator:i}=D.useContext(br),{matches:a}=D.useContext(On),{pathname:o}=mo(),u=JSON.stringify(ap(a).map(f=>f.pathnameBase)),d=D.useRef(!1);return D.useEffect(()=>{d.current=!0}),D.useCallback(function(f,p){if(p===void 0&&(p={}),!d.current)return;if(typeof f=="number"){i.go(f);return}let g=ip(f,JSON.parse(u),o,p.relative==="path");r!=="/"&&(g.pathname=g.pathname==="/"?r:Cn([r,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[r,i,u,o])}const vy=D.createContext(null);function wy(r){let i=D.useContext(On).outlet;return i&&D.createElement(vy.Provider,{value:r},i)}function cp(){let{matches:r}=D.useContext(On),i=r[r.length-1];return i?i.params:{}}function Ls(r,i){let{relative:a}=i===void 0?{}:i,{matches:o}=D.useContext(On),{pathname:u}=mo(),d=JSON.stringify(ap(o).map(f=>f.pathnameBase));return D.useMemo(()=>ip(r,JSON.parse(d),u,a==="path"),[r,d,u,a])}function ky(r,i){po()||Ie(!1);let{navigator:a}=D.useContext(br),o=D.useContext(zs),{matches:u}=D.useContext(On),d=u[u.length-1],f=d?d.params:{};d&&d.pathname;let p=d?d.pathnameBase:"/";d&&d.route;let g=mo(),y;if(i){var v;let O=typeof i=="string"?Bn(i):i;p==="/"||(v=O.pathname)!=null&&v.startsWith(p)||Ie(!1),y=O}else y=g;let x=y.pathname||"/",_=p==="/"?x:x.slice(p.length)||"/",R=Qh(r,{pathname:_}),M=Ey(R&&R.map(O=>Object.assign({},O,{params:Object.assign({},f,O.params),pathname:Cn([p,a.encodeLocation?a.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?p:Cn([p,a.encodeLocation?a.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),u,o||void 0);return i&&M?D.createElement(Ba.Provider,{value:{location:Jl({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:xn.Pop}},M):M}function xy(){let r=Ly(),i=hy(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),a=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},i),a?D.createElement("pre",{style:o},a):null,null)}class Sy extends D.Component{constructor(i){super(i),this.state={location:i.location,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,a){return a.location!==i.location?{error:i.error,location:i.location}:{error:i.error||a.error,location:a.location}}componentDidCatch(i,a){console.error("React Router caught the following error during render",i,a)}render(){return this.state.error?D.createElement(On.Provider,{value:this.props.routeContext},D.createElement(up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cy(r){let{routeContext:i,match:a,children:o}=r,u=D.useContext(sp);return u&&u.static&&u.staticContext&&a.route.errorElement&&(u.staticContext._deepestRenderedBoundaryId=a.route.id),D.createElement(On.Provider,{value:i},o)}function Ey(r,i,a){if(i===void 0&&(i=[]),r==null)if(a!=null&&a.errors)r=a.matches;else return null;let o=r,u=a?.errors;if(u!=null){let d=o.findIndex(f=>f.route.id&&u?.[f.route.id]);d>=0||Ie(!1),o=o.slice(0,Math.min(o.length,d+1))}return o.reduceRight((d,f,p)=>{let g=f.route.id?u?.[f.route.id]:null,y=a?f.route.errorElement||D.createElement(xy,null):null,v=i.concat(o.slice(0,p+1)),x=()=>D.createElement(Cy,{match:f,routeContext:{outlet:d,matches:v}},g?y:f.route.element!==void 0?f.route.element:d);return a&&(f.route.errorElement||p===0)?D.createElement(Sy,{location:a.location,component:y,error:g,children:x(),routeContext:{outlet:null,matches:v}}):x()},null)}var Cf;(function(r){r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator"})(Cf||(Cf={}));var Aa;(function(r){r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator"})(Aa||(Aa={}));function Oy(r){let i=D.useContext(zs);return i||Ie(!1),i}function Py(r){let i=D.useContext(On);return i||Ie(!1),i}function zy(r){let i=Py(),a=i.matches[i.matches.length-1];return a.route.id||Ie(!1),a.route.id}function Ly(){var r;let i=D.useContext(up),a=Oy(Aa.UseRouteError),o=zy(Aa.UseRouteError);return i||((r=a.errors)==null?void 0:r[o])}function Zl(r){return wy(r.context)}function Dt(r){Ie(!1)}function Ny(r){let{basename:i="/",children:a=null,location:o,navigationType:u=xn.Pop,navigator:d,static:f=!1}=r;po()&&Ie(!1);let p=i.replace(/^\/*/,"/"),g=D.useMemo(()=>({basename:p,navigator:d,static:f}),[p,d,f]);typeof o=="string"&&(o=Bn(o));let{pathname:y="/",search:v="",hash:x="",state:_=null,key:R="default"}=o,M=D.useMemo(()=>{let O=Os(y,p);return O==null?null:{pathname:O,search:v,hash:x,state:_,key:R}},[p,y,v,x,_,R]);return M==null?null:D.createElement(br.Provider,{value:g},D.createElement(Ba.Provider,{children:a,value:{location:M,navigationType:u}}))}function _y(r){let{children:i,location:a}=r,o=D.useContext(sp),u=o&&!i?o.router.routes:Gl(i);return ky(u,a)}var Ef;(function(r){r[r.pending=0]="pending",r[r.success=1]="success",r[r.error=2]="error"})(Ef||(Ef={}));new Promise(()=>{});function Gl(r,i){i===void 0&&(i=[]);let a=[];return D.Children.forEach(r,(o,u)=>{if(!D.isValidElement(o))return;if(o.type===D.Fragment){a.push.apply(a,Gl(o.props.children,i));return}o.type!==Dt&&Ie(!1),!o.props.index||!o.props.children||Ie(!1);let d=[...i,u],f={id:o.props.id||d.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,hasErrorBoundary:o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle};o.props.children&&(f.children=Gl(o.props.children,d)),a.push(f)}),a}/**
* React Router DOM v6.8.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Ra(){return Ra=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},Ra.apply(this,arguments)}function dp(r,i){if(r==null)return{};var a={},o=Object.keys(r),u,d;for(d=0;d<o.length;d++)u=o[d],!(i.indexOf(u)>=0)&&(a[u]=r[u]);return a}function Ty(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Fy(r,i){return r.button===0&&(!i||i==="_self")&&!Ty(r)}const My=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],jy=["aria-current","caseSensitive","className","end","style","to","children"];function Ay(r){let{basename:i,children:a,window:o}=r,u=D.useRef();u.current==null&&(u.current=Kh({window:o,v5Compat:!0}));let d=u.current,[f,p]=D.useState({action:d.action,location:d.location});return D.useLayoutEffect(()=>d.listen(p),[d]),D.createElement(Ny,{basename:i,children:a,location:f.location,navigationType:f.action,navigator:d})}const Ry=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Iy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ns=D.forwardRef(function(r,i){let{onClick:a,relative:o,reloadDocument:u,replace:d,state:f,target:p,to:g,preventScrollReset:y}=r,v=dp(r,My),{basename:x}=D.useContext(br),_,R=!1;if(typeof g=="string"&&Iy.test(g)&&(_=g,Ry)){let T=new URL(window.location.href),k=g.startsWith("//")?new URL(T.protocol+g):new URL(g),E=Os(k.pathname,x);k.origin===T.origin&&E!=null?g=E+k.search+k.hash:R=!0}let M=by(g,{relative:o}),O=$y(g,{replace:d,state:f,target:p,preventScrollReset:y,relative:o});function z(T){a&&a(T),T.defaultPrevented||O(T)}return D.createElement("a",Ra({},v,{href:_||M,onClick:R||u?a:z,ref:i,target:p}))}),Dy=D.forwardRef(function(r,i){let{"aria-current":a="page",caseSensitive:o=!1,className:u="",end:d=!1,style:f,to:p,children:g}=r,y=dp(r,jy),v=Ls(p,{relative:y.relative}),x=mo(),_=D.useContext(zs),{navigator:R}=D.useContext(br),M=R.encodeLocation?R.encodeLocation(v).pathname:v.pathname,O=x.pathname,z=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;o||(O=O.toLowerCase(),z=z?z.toLowerCase():null,M=M.toLowerCase());let T=O===M||!d&&O.startsWith(M)&&O.charAt(M.length)==="/",k=z!=null&&(z===M||!d&&z.startsWith(M)&&z.charAt(M.length)==="/"),E=T?a:void 0,j;typeof u=="function"?j=u({isActive:T,isPending:k}):j=[u,T?"active":null,k?"pending":null].filter(Boolean).join(" ");let P=typeof f=="function"?f({isActive:T,isPending:k}):f;return D.createElement(Ns,Ra({},y,{"aria-current":E,className:j,ref:i,style:P,to:p}),typeof g=="function"?g({isActive:T,isPending:k}):g)});var Of;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmitImpl="useSubmitImpl",r.UseFetcher="useFetcher"})(Of||(Of={}));var Pf;(function(r){r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Pf||(Pf={}));function $y(r,i){let{target:a,replace:o,state:u,preventScrollReset:d,relative:f}=i===void 0?{}:i,p=go(),g=mo(),y=Ls(r,{relative:f});return D.useCallback(v=>{if(Fy(v,a)){v.preventDefault();let x=o!==void 0?o:ja(g)===ja(y);p(r,{replace:x,state:u,preventScrollReset:d,relative:f})}},[g,p,y,o,u,a,r,d,f])}function es(){return es=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},es.apply(null,arguments)}function fp(r){var i=Object.create(null);return function(a){return i[a]===void 0&&(i[a]=r(a)),i[a]}}var By=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Hy=fp(function(r){return By.test(r)||r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)<91});function Uy(r){if(r.sheet)return r.sheet;for(var i=0;i<document.styleSheets.length;i++)if(document.styleSheets[i].ownerNode===r)return document.styleSheets[i]}function Vy(r){var i=document.createElement("style");return i.setAttribute("data-emotion",r.key),r.nonce!==void 0&&i.setAttribute("nonce",r.nonce),i.appendChild(document.createTextNode("")),i.setAttribute("data-s",""),i}var Wy=(function(){function r(a){var o=this;this._insertTag=function(u){var d;o.tags.length===0?o.insertionPoint?d=o.insertionPoint.nextSibling:o.prepend?d=o.container.firstChild:d=o.before:d=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(u,d),o.tags.push(u)},this.isSpeedy=a.speedy===void 0?!0:a.speedy,this.tags=[],this.ctr=0,this.nonce=a.nonce,this.key=a.key,this.container=a.container,this.prepend=a.prepend,this.insertionPoint=a.insertionPoint,this.before=null}var i=r.prototype;return i.hydrate=function(a){a.forEach(this._insertTag)},i.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Vy(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var u=Uy(o);try{u.insertRule(a,u.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(a));this.ctr++},i.flush=function(){this.tags.forEach(function(a){return a.parentNode&&a.parentNode.removeChild(a)}),this.tags=[],this.ctr=0},r})(),Je="-ms-",Ia="-moz-",he="-webkit-",pp="comm",_s="rule",Ts="decl",Ky="@import",mp="@keyframes",qy=Math.abs,Ha=String.fromCharCode,Xy=Object.assign;function Yy(r,i){return Ke(r,0)^45?(((i<<2^Ke(r,0))<<2^Ke(r,1))<<2^Ke(r,2))<<2^Ke(r,3):0}function gp(r){return r.trim()}function Qy(r,i){return(r=i.exec(r))?r[0]:r}function be(r,i,a){return r.replace(i,a)}function ts(r,i){return r.indexOf(i)}function Ke(r,i){return r.charCodeAt(i)|0}function so(r,i,a){return r.slice(i,a)}function $t(r){return r.length}function Fs(r){return r.length}function za(r,i){return i.push(r),r}function Jy(r,i){return r.map(i).join("")}var Ua=1,hr=1,hp=0,st=0,je=0,vr="";function Va(r,i,a,o,u,d,f){return{value:r,root:i,parent:a,type:o,props:u,children:d,line:Ua,column:hr,length:f,return:""}}function io(r,i){return Xy(Va("",null,null,"",null,null,0),r,{length:-r.length},i)}function Zy(){return je}function Gy(){return je=st>0?Ke(vr,--st):0,hr--,je===10&&(hr=1,Ua--),je}function pt(){return je=st<hp?Ke(vr,st++):0,hr++,je===10&&(hr=1,Ua++),je}function Ut(){return Ke(vr,st)}function Na(){return st}function ho(r,i){return so(vr,r,i)}function uo(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yp(r){return Ua=hr=1,hp=$t(vr=r),st=0,[]}function bp(r){return vr="",r}function _a(r){return gp(ho(st-1,ns(r===91?r+2:r===40?r+1:r)))}function eb(r){for(;(je=Ut())&&je<33;)pt();return uo(r)>2||uo(je)>3?"":" "}function tb(r,i){for(;--i&&pt()&&!(je<48||je>102||je>57&&je<65||je>70&&je<97););return ho(r,Na()+(i<6&&Ut()==32&&pt()==32))}function ns(r){for(;pt();)switch(je){case r:return st;case 34:case 39:r!==34&&r!==39&&ns(je);break;case 40:r===41&&ns(r);break;case 92:pt();break}return st}function nb(r,i){for(;pt()&&r+je!==57&&!(r+je===84&&Ut()===47););return"/*"+ho(i,st-1)+"*"+Ha(r===47?r:pt())}function rb(r){for(;!uo(Ut());)pt();return ho(r,st)}function ob(r){return bp(Ta("",null,null,null,[""],r=yp(r),0,[0],r))}function Ta(r,i,a,o,u,d,f,p,g){for(var y=0,v=0,x=f,_=0,R=0,M=0,O=1,z=1,T=1,k=0,E="",j=u,P=d,A=o,$=E;z;)switch(M=k,k=pt()){case 40:if(M!=108&&Ke($,x-1)==58){ts($+=be(_a(k),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:$+=_a(k);break;case 9:case 10:case 13:case 32:$+=eb(M);break;case 92:$+=tb(Na()-1,7);continue;case 47:switch(Ut()){case 42:case 47:za(ab(nb(pt(),Na()),i,a),g);break;default:$+="/"}break;case 123*O:p[y++]=$t($)*T;case 125*O:case 59:case 0:switch(k){case 0:case 125:z=0;case 59+v:R>0&&$t($)-x&&za(R>32?Lf($+";",o,a,x-1):Lf(be($," ","")+";",o,a,x-2),g);break;case 59:$+=";";default:if(za(A=zf($,i,a,y,v,u,p,E,j=[],P=[],x),d),k===123)if(v===0)Ta($,i,A,A,j,d,x,p,P);else switch(_===99&&Ke($,3)===110?100:_){case 100:case 109:case 115:Ta(r,A,A,o&&za(zf(r,A,A,0,0,u,p,E,u,j=[],x),P),u,P,x,p,o?j:P);break;default:Ta($,A,A,A,[""],P,0,p,P)}}y=v=R=0,O=T=1,E=$="",x=f;break;case 58:x=1+$t($),R=M;default:if(O<1){if(k==123)--O;else if(k==125&&O++==0&&Gy()==125)continue}switch($+=Ha(k),k*O){case 38:T=v>0?1:($+="\f",-1);break;case 44:p[y++]=($t($)-1)*T,T=1;break;case 64:Ut()===45&&($+=_a(pt())),_=Ut(),v=x=$t(E=$+=rb(Na())),k++;break;case 45:M===45&&$t($)==2&&(O=0)}}return d}function zf(r,i,a,o,u,d,f,p,g,y,v){for(var x=u-1,_=u===0?d:[""],R=Fs(_),M=0,O=0,z=0;M<o;++M)for(var T=0,k=so(r,x+1,x=qy(O=f[M])),E=r;T<R;++T)(E=gp(O>0?_[T]+" "+k:be(k,/&\f/g,_[T])))&&(g[z++]=E);return Va(r,i,a,u===0?_s:p,g,y,v)}function ab(r,i,a){return Va(r,i,a,pp,Ha(Zy()),so(r,2,-2),0)}function Lf(r,i,a,o){return Va(r,i,a,Ts,so(r,0,o),so(r,o+1,-1),o)}function gr(r,i){for(var a="",o=Fs(r),u=0;u<o;u++)a+=i(r[u],u,r,i)||"";return a}function ib(r,i,a,o){switch(r.type){case Ky:case Ts:return r.return=r.return||r.value;case pp:return"";case mp:return r.return=r.value+"{"+gr(r.children,o)+"}";case _s:r.value=r.props.join(",")}return $t(a=gr(r.children,o))?r.return=r.value+"{"+a+"}":""}function lb(r){var i=Fs(r);return function(a,o,u,d){for(var f="",p=0;p<i;p++)f+=r[p](a,o,u,d)||"";return f}}function sb(r){return function(i){i.root||(i=i.return)&&r(i)}}var ub=function(r,i,a){for(var o=0,u=0;o=u,u=Ut(),o===38&&u===12&&(i[a]=1),!uo(u);)pt();return ho(r,st)},cb=function(r,i){var a=-1,o=44;do switch(uo(o)){case 0:o===38&&Ut()===12&&(i[a]=1),r[a]+=ub(st-1,i,a);break;case 2:r[a]+=_a(o);break;case 4:if(o===44){r[++a]=Ut()===58?"&\f":"",i[a]=r[a].length;break}default:r[a]+=Ha(o)}while(o=pt());return r},db=function(r,i){return bp(cb(yp(r),i))},Nf=new WeakMap,fb=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var i=r.value,a=r.parent,o=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&i.charCodeAt(0)!==58&&!Nf.get(a))&&!o){Nf.set(r,!0);for(var u=[],d=db(i,u),f=a.props,p=0,g=0;p<d.length;p++)for(var y=0;y<f.length;y++,g++)r.props[g]=u[p]?d[p].replace(/&\f/g,f[y]):f[y]+" "+d[p]}}},pb=function(r){if(r.type==="decl"){var i=r.value;i.charCodeAt(0)===108&&i.charCodeAt(2)===98&&(r.return="",r.value="")}};function vp(r,i){switch(Yy(r,i)){case 5103:return he+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return he+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return he+r+Ia+r+Je+r+r;case 6828:case 4268:return he+r+Je+r+r;case 6165:return he+r+Je+"flex-"+r+r;case 5187:return he+r+be(r,/(\w+).+(:[^]+)/,he+"box-$1$2"+Je+"flex-$1$2")+r;case 5443:return he+r+Je+"flex-item-"+be(r,/flex-|-self/,"")+r;case 4675:return he+r+Je+"flex-line-pack"+be(r,/align-content|flex-|-self/,"")+r;case 5548:return he+r+Je+be(r,"shrink","negative")+r;case 5292:return he+r+Je+be(r,"basis","preferred-size")+r;case 6060:return he+"box-"+be(r,"-grow","")+he+r+Je+be(r,"grow","positive")+r;case 4554:return he+be(r,/([^-])(transform)/g,"$1"+he+"$2")+r;case 6187:return be(be(be(r,/(zoom-|grab)/,he+"$1"),/(image-set)/,he+"$1"),r,"")+r;case 5495:case 3959:return be(r,/(image-set\([^]*)/,he+"$1$`$1");case 4968:return be(be(r,/(.+:)(flex-)?(.*)/,he+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+he+r+r;case 4095:case 3583:case 4068:case 2532:return be(r,/(.+)-inline(.+)/,he+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($t(r)-1-i>6)switch(Ke(r,i+1)){case 109:if(Ke(r,i+4)!==45)break;case 102:return be(r,/(.+:)(.+)-([^]+)/,"$1"+he+"$2-$3$1"+Ia+(Ke(r,i+3)==108?"$3":"$2-$3"))+r;case 115:return~ts(r,"stretch")?vp(be(r,"stretch","fill-available"),i)+r:r}break;case 4949:if(Ke(r,i+1)!==115)break;case 6444:switch(Ke(r,$t(r)-3-(~ts(r,"!important")&&10))){case 107:return be(r,":",":"+he)+r;case 101:return be(r,/(.+:)([^;!]+)(;|!.+)?/,"$1"+he+(Ke(r,14)===45?"inline-":"")+"box$3$1"+he+"$2$3$1"+Je+"$2box$3")+r}break;case 5936:switch(Ke(r,i+11)){case 114:return he+r+Je+be(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return he+r+Je+be(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return he+r+Je+be(r,/[svh]\w+-[tblr]{2}/,"lr")+r}return he+r+Je+r+r}return r}var mb=function(r,i,a,o){if(r.length>-1&&!r.return)switch(r.type){case Ts:r.return=vp(r.value,r.length);break;case mp:return gr([io(r,{value:be(r.value,"@","@"+he)})],o);case _s:if(r.length)return Jy(r.props,function(u){switch(Qy(u,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gr([io(r,{props:[be(u,/:(read-\w+)/,":"+Ia+"$1")]})],o);case"::placeholder":return gr([io(r,{props:[be(u,/:(plac\w+)/,":"+he+"input-$1")]}),io(r,{props:[be(u,/:(plac\w+)/,":"+Ia+"$1")]}),io(r,{props:[be(u,/:(plac\w+)/,Je+"input-$1")]})],o)}return""})}},gb=[mb],hb=function(r){var i=r.key;if(i==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(M){var O=M.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(M),M.setAttribute("data-s",""))})}var o=r.stylisPlugins||gb,u={},d,f=[];d=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+i+' "]'),function(M){for(var O=M.getAttribute("data-emotion").split(" "),z=1;z<O.length;z++)u[O[z]]=!0;f.push(M)});var p,g=[fb,pb];{var y,v=[ib,sb(function(M){y.insert(M)})],x=lb(g.concat(o,v)),_=function(M){return gr(ob(M),x)};p=function(M,O,z,T){y=z,_(M?M+"{"+O.styles+"}":O.styles),T&&(R.inserted[O.name]=!0)}}var R={key:i,sheet:new Wy({key:i,container:d,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:u,registered:{},insert:p};return R.sheet.hydrate(f),R},_f={exports:{}},ye={};/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Tf;function yb(){if(Tf)return ye;Tf=1;var r=typeof Symbol=="function"&&Symbol.for,i=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,d=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,g=r?Symbol.for("react.async_mode"):60111,y=r?Symbol.for("react.concurrent_mode"):60111,v=r?Symbol.for("react.forward_ref"):60112,x=r?Symbol.for("react.suspense"):60113,_=r?Symbol.for("react.suspense_list"):60120,R=r?Symbol.for("react.memo"):60115,M=r?Symbol.for("react.lazy"):60116,O=r?Symbol.for("react.block"):60121,z=r?Symbol.for("react.fundamental"):60117,T=r?Symbol.for("react.responder"):60118,k=r?Symbol.for("react.scope"):60119;function E(P){if(typeof P=="object"&&P!==null){var A=P.$$typeof;switch(A){case i:switch(P=P.type,P){case g:case y:case o:case d:case u:case x:return P;default:switch(P=P&&P.$$typeof,P){case p:case v:case M:case R:case f:return P;default:return A}}case a:return A}}}function j(P){return E(P)===y}return ye.AsyncMode=g,ye.ConcurrentMode=y,ye.ContextConsumer=p,ye.ContextProvider=f,ye.Element=i,ye.ForwardRef=v,ye.Fragment=o,ye.Lazy=M,ye.Memo=R,ye.Portal=a,ye.Profiler=d,ye.StrictMode=u,ye.Suspense=x,ye.isAsyncMode=function(P){return j(P)||E(P)===g},ye.isConcurrentMode=j,ye.isContextConsumer=function(P){return E(P)===p},ye.isContextProvider=function(P){return E(P)===f},ye.isElement=function(P){return typeof P=="object"&&P!==null&&P.$$typeof===i},ye.isForwardRef=function(P){return E(P)===v},ye.isFragment=function(P){return E(P)===o},ye.isLazy=function(P){return E(P)===M},ye.isMemo=function(P){return E(P)===R},ye.isPortal=function(P){return E(P)===a},ye.isProfiler=function(P){return E(P)===d},ye.isStrictMode=function(P){return E(P)===u},ye.isSuspense=function(P){return E(P)===x},ye.isValidElementType=function(P){return typeof P=="string"||typeof P=="function"||P===o||P===y||P===d||P===u||P===x||P===_||typeof P=="object"&&P!==null&&(P.$$typeof===M||P.$$typeof===R||P.$$typeof===f||P.$$typeof===p||P.$$typeof===v||P.$$typeof===z||P.$$typeof===T||P.$$typeof===k||P.$$typeof===O)},ye.typeOf=E,ye}var Ff;function bb(){return Ff||(Ff=1,_f.exports=yb()),_f.exports}var Ul,Mf;function vb(){if(Mf)return Ul;Mf=1;var r=bb(),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},d={};d[r.ForwardRef]=o,d[r.Memo]=u;function f(M){return r.isMemo(M)?u:d[M.$$typeof]||i}var p=Object.defineProperty,g=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,v=Object.getOwnPropertyDescriptor,x=Object.getPrototypeOf,_=Object.prototype;function R(M,O,z){if(typeof O!="string"){if(_){var T=x(O);T&&T!==_&&R(M,T,z)}var k=g(O);y&&(k=k.concat(y(O)));for(var E=f(M),j=f(O),P=0;P<k.length;++P){var A=k[P];if(!a[A]&&!(z&&z[A])&&!(j&&j[A])&&!(E&&E[A])){var $=v(O,A);try{p(M,A,$)}catch{}}}}return M}return Ul=R,Ul}vb();var wb=!0;function wp(r,i,a){var o="";return a.split(" ").forEach(function(u){r[u]!==void 0?i.push(r[u]+";"):o+=u+" "}),o}var Ms=function(r,i,a){var o=r.key+"-"+i.name;(a===!1||wb===!1)&&r.registered[o]===void 0&&(r.registered[o]=i.styles)},js=function(r,i,a){Ms(r,i,a);var o=r.key+"-"+i.name;if(r.inserted[i.name]===void 0){var u=i;do r.insert(i===u?"."+o:"",u,r.sheet,!0),u=u.next;while(u!==void 0)}};function kb(r){for(var i=0,a,o=0,u=r.length;u>=4;++o,u-=4)a=r.charCodeAt(o)&255|(r.charCodeAt(++o)&255)<<8|(r.charCodeAt(++o)&255)<<16|(r.charCodeAt(++o)&255)<<24,a=(a&65535)*1540483477+((a>>>16)*59797<<16),a^=a>>>24,i=(a&65535)*1540483477+((a>>>16)*59797<<16)^(i&65535)*1540483477+((i>>>16)*59797<<16);switch(u){case 3:i^=(r.charCodeAt(o+2)&255)<<16;case 2:i^=(r.charCodeAt(o+1)&255)<<8;case 1:i^=r.charCodeAt(o)&255,i=(i&65535)*1540483477+((i>>>16)*59797<<16)}return i^=i>>>13,i=(i&65535)*1540483477+((i>>>16)*59797<<16),((i^i>>>15)>>>0).toString(36)}var xb={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Sb=/[A-Z]|^ms/g,Cb=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kp=function(r){return r.charCodeAt(1)===45},jf=function(r){return r!=null&&typeof r!="boolean"},Vl=fp(function(r){return kp(r)?r:r.replace(Sb,"-$&").toLowerCase()}),Af=function(r,i){switch(r){case"animation":case"animationName":if(typeof i=="string")return i.replace(Cb,function(a,o,u){return Bt={name:o,styles:u,next:Bt},o})}return xb[r]!==1&&!kp(r)&&typeof i=="number"&&i!==0?i+"px":i};function co(r,i,a){if(a==null)return"";if(a.__emotion_styles!==void 0)return a;switch(typeof a){case"boolean":return"";case"object":{if(a.anim===1)return Bt={name:a.name,styles:a.styles,next:Bt},a.name;if(a.styles!==void 0){var o=a.next;if(o!==void 0)for(;o!==void 0;)Bt={name:o.name,styles:o.styles,next:Bt},o=o.next;var u=a.styles+";";return u}return Eb(r,i,a)}case"function":{if(r!==void 0){var d=Bt,f=a(r);return Bt=d,co(r,i,f)}break}}if(i==null)return a;var p=i[a];return p!==void 0?p:a}function Eb(r,i,a){var o="";if(Array.isArray(a))for(var u=0;u<a.length;u++)o+=co(r,i,a[u])+";";else for(var d in a){var f=a[d];if(typeof f!="object")i!=null&&i[f]!==void 0?o+=d+"{"+i[f]+"}":jf(f)&&(o+=Vl(d)+":"+Af(d,f)+";");else if(Array.isArray(f)&&typeof f[0]=="string"&&(i==null||i[f[0]]===void 0))for(var p=0;p<f.length;p++)jf(f[p])&&(o+=Vl(d)+":"+Af(d,f[p])+";");else{var g=co(r,i,f);switch(d){case"animation":case"animationName":{o+=Vl(d)+":"+g+";";break}default:o+=d+"{"+g+"}"}}}return o}var Rf=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Bt,Wa=function(r,i,a){if(r.length===1&&typeof r[0]=="object"&&r[0]!==null&&r[0].styles!==void 0)return r[0];var o=!0,u="";Bt=void 0;var d=r[0];d==null||d.raw===void 0?(o=!1,u+=co(a,i,d)):u+=d[0];for(var f=1;f<r.length;f++)u+=co(a,i,r[f]),o&&(u+=d[f]);Rf.lastIndex=0;for(var p="",g;(g=Rf.exec(u))!==null;)p+="-"+g[1];var y=kb(u)+p;return{name:y,styles:u,next:Bt}},Ob=function(r){return r()},xp=lf.useInsertionEffect?lf.useInsertionEffect:!1,Sp=xp||Ob,If=xp||D.useLayoutEffect,As={}.hasOwnProperty,Cp=D.createContext(typeof HTMLElement<"u"?hb({key:"css"}):null);Cp.Provider;var Rs=function(r){return D.forwardRef(function(i,a){var o=D.useContext(Cp);return r(i,o,a)})},Is=D.createContext({}),rs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Pb=function(r,i){var a={};for(var o in i)As.call(i,o)&&(a[o]=i[o]);return a[rs]=r,a},zb=function(r){var i=r.cache,a=r.serialized,o=r.isStringTag;return Ms(i,a,o),Sp(function(){return js(i,a,o)}),null},Lb=Rs(function(r,i,a){var o=r.css;typeof o=="string"&&i.registered[o]!==void 0&&(o=i.registered[o]);var u=r[rs],d=[o],f="";typeof r.className=="string"?f=wp(i.registered,d,r.className):r.className!=null&&(f=r.className+" ");var p=Wa(d,void 0,D.useContext(Is));f+=i.key+"-"+p.name;var g={};for(var y in r)As.call(r,y)&&y!=="css"&&y!==rs&&(g[y]=r[y]);return g.ref=a,g.className=f,D.createElement(D.Fragment,null,D.createElement(zb,{cache:i,serialized:p,isStringTag:typeof u=="string"}),D.createElement(u,g))}),C=function(r,i){var a=arguments;if(i==null||!As.call(i,"css"))return D.createElement.apply(void 0,a);var o=a.length,u=new Array(o);u[0]=Lb,u[1]=Pb(r,i);for(var d=2;d<o;d++)u[d]=a[d];return D.createElement.apply(null,u)},Ep=Rs(function(r,i){var a=r.styles,o=Wa([a],void 0,D.useContext(Is)),u=D.useRef();return If(function(){var d=i.key+"-global",f=new i.sheet.constructor({key:d,nonce:i.sheet.nonce,container:i.sheet.container,speedy:i.sheet.isSpeedy}),p=!1,g=document.querySelector('style[data-emotion="'+d+" "+o.name+'"]');return i.sheet.tags.length&&(f.before=i.sheet.tags[0]),g!==null&&(p=!0,g.setAttribute("data-emotion",d),f.hydrate([g])),u.current=[f,p],function(){f.flush()}},[i]),If(function(){var d=u.current,f=d[0],p=d[1];if(p){d[1]=!1;return}if(o.next!==void 0&&js(i,o.next,!0),f.tags.length){var g=f.tags[f.tags.length-1].nextElementSibling;f.before=g,f.flush()}i.insert("",o,f,!1)},[i,o.name]),null});function Op(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return Wa(i)}var Nb=Hy,_b=function(r){return r!=="theme"},Df=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Nb:_b},$f=function(r,i,a){var o;if(i){var u=i.shouldForwardProp;o=r.__emotion_forwardProp&&u?function(d){return r.__emotion_forwardProp(d)&&u(d)}:u}return typeof o!="function"&&a&&(o=r.__emotion_forwardProp),o},Tb=function(r){var i=r.cache,a=r.serialized,o=r.isStringTag;return Ms(i,a,o),Sp(function(){return js(i,a,o)}),null},Fb=function r(i,a){var o=i.__emotion_real===i,u=o&&i.__emotion_base||i,d,f;a!==void 0&&(d=a.label,f=a.target);var p=$f(i,a,o),g=p||Df(u),y=!g("as");return function(){var v=arguments,x=o&&i.__emotion_styles!==void 0?i.__emotion_styles.slice(0):[];if(d!==void 0&&x.push("label:"+d+";"),v[0]==null||v[0].raw===void 0)x.push.apply(x,v);else{x.push(v[0][0]);for(var _=v.length,R=1;R<_;R++)x.push(v[R],v[0][R])}var M=Rs(function(O,z,T){var k=y&&O.as||u,E="",j=[],P=O;if(O.theme==null){P={};for(var A in O)P[A]=O[A];P.theme=D.useContext(Is)}typeof O.className=="string"?E=wp(z.registered,j,O.className):O.className!=null&&(E=O.className+" ");var $=Wa(x.concat(j),z.registered,P);E+=z.key+"-"+$.name,f!==void 0&&(E+=" "+f);var Q=y&&p===void 0?Df(k):g,K={};for(var ie in O)y&&ie==="as"||Q(ie)&&(K[ie]=O[ie]);return K.className=E,K.ref=T,D.createElement(D.Fragment,null,D.createElement(Tb,{cache:z,serialized:$,isStringTag:typeof k=="string"}),D.createElement(k,K))});return M.displayName=d!==void 0?d:"Styled("+(typeof u=="string"?u:u.displayName||u.name||"Component")+")",M.defaultProps=i.defaultProps,M.__emotion_real=M,M.__emotion_base=u,M.__emotion_styles=x,M.__emotion_forwardProp=p,Object.defineProperty(M,"toString",{value:function(){return"."+f}}),M.withComponent=function(O,z){return r(O,es({},a,z,{shouldForwardProp:$f(M,z,!0)})).apply(void 0,x)},M}},Mb=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],q=Fb.bind();Mb.forEach(function(r){q[r]=q(r)});const Pp=[{id:1,title:"SuperTrader EA",description:"Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.",price:59,image:"/images/ea/1.png",category:"Scalping"},{id:2,title:"ScalperPro EA",description:"EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.",price:79,image:"/images/ea/1.png",category:"Scalper"},{id:3,title:"SmartBot EA",description:"AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.",price:99,image:"/images/ea/1.png",category:"AI Trading"}];function jb(r){const i=new Path2D;return r.forEach((a,o)=>{o===0?i.moveTo(a.x,a.y):i.lineTo(a.x,a.y)}),i}class zp{x;y;size;color;angle=2*Math.PI*Math.random();rotate=Math.random()*Math.PI;speed=.2+Math.random()*1.5;constructor(i,a,o,u){this.x=i,this.y=a,this.size=o,this.color=u}move(){this.x+=this.speed,this.rotate-=this.speed*.006}createGradient(i){const a=this.size*1.5,o=this.angle+Math.PI,u=this.x+this.size*Math.sin(this.angle+this.rotate),d=this.y+this.size*Math.cos(this.angle+this.rotate),f=this.x+a*Math.sin(o+this.rotate),p=this.y+a*Math.cos(o+this.rotate),g=i.createLinearGradient(u,d,f,p);return g.addColorStop(0,this.color),g.addColorStop(.3,this.color),g.addColorStop(.85,"#ffffff"),g}}class Lp extends zp{sides;constructor(i,a,o,u,d){super(i,a,o,u),this.sides=d}draw(i){const a=this.size/2,o=Math.PI*2/this.sides,u=[];Array.from({length:this.sides}).forEach((f,p)=>{u.push({x:this.x+a*Math.sin(o*p+this.rotate),y:this.y+a*Math.cos(o*p+this.rotate)})});const d=jb(u);i.fillStyle=this.createGradient(i),i.fill(d)}}class Ab extends Lp{constructor(i,a,o,u){super(i,a,o,u,3)}}class Rb extends Lp{constructor(i,a,o,u){super(i,a,o,u,4)}}class Ib extends zp{draw(i){const a=this.size/2,o=new Path2D;o.moveTo(0,0),o.arc(this.x,this.y,a,0,2*Math.PI),i.fillStyle=this.createGradient(i),i.fill(o)}}const Db=q.canvas({height:"100%",width:"100%",opacity:"0",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),$b={opacity:"1"},Bf=[Ab,Rb,Ib],Hf=["#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e"];function yr(r){const{count:i,sizes:a}=r,[o,u]=D.useState(!1),d=D.useRef(null),f=D.useRef([]),p=D.useCallback(()=>{if(!d.current)return;const x=d.current.getBoundingClientRect();d.current.width=x.width,d.current.height=x.height},[]),g=D.useCallback(()=>{if(!d.current)return;const x=d.current.width,_=d.current.height,R=f.current.length===0;for(;f.current.length<i;){const M=Bf[Math.floor(Math.random()*Bf.length)],O=Hf[Math.floor(Math.random()*Hf.length)],z=a[0]+Math.random()*(a[1]-a[0]),T=R?Math.random()*x:-z,k=Math.random()*_;f.current.push(new M(T,k,z,O))}},[]),y=D.useCallback(()=>{if(!d.current)return;const x=d.current.getContext("2d"),_=d.current.width,R=d.current.height;x.clearRect(0,0,_,R),f.current.forEach(M=>{M.move(),M.draw(x)}),f.current=f.current.filter(M=>M.x-M.size<_)},[]),v=D.useCallback(()=>{g(),y(),requestAnimationFrame(v)},[]);return D.useEffect(()=>(p(),v(),u(!0),window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}),[]),C(Db,{ref:d,css:[o&&$b]})}const Bb=q.div`
  ${{position:"relative",minHeight:"100vh",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,Hb=q.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",opacity:"0.4",".dark &":{opacity:"0.3"}}),Ub=q.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",opacity:"0.6",".dark &":{opacity:"0.4"}}),Vb=q.h1({marginBottom:"2.5rem",textAlign:"center",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),Wb=q.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),Kb=q.div`
  ${{position:"relative",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}}

  /* Bayangan adaptif */
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);*/

  /* Mode gelap: bayangan putih tebal */
  .dark & {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

    .dark & {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.35);
    }
  }
`,qb=q.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),Xb=q.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Yb=q.div({padding:"1.25rem"}),Qb=q.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Jb=q.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),Zb=q.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),Gb=q.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function e0(){const r=go(),i=a=>{r(`/EA/${a}`)};return C(Bb,null,C(Hb,null,C(yr,{count:12,sizes:[30,60]})),C(Ub,null,C(yr,{count:12,sizes:[40,80]})),C(Vb,null,"Expert Advisors Collection"),C(Wb,null,Pp.map(a=>C(Kb,{key:a.id,onClick:()=>i(a.id)},C(qb,null,C(Xb,{src:a.image,alt:a.title})),C(Yb,null,C(Qb,null,a.category),C(Jb,null,a.title),C(Zb,null,a.description),C(Gb,null,"$",a.price))))))}const t0=q.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",maxWidth:"56rem",borderRadius:"1.5rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem","--tw-shadow":"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),n0=q.img({marginBottom:"1.5rem",height:"20rem",width:"100%",borderRadius:"1rem",objectFit:"cover"}),r0=q.h2({marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}),o0=q.span({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),a0=q.p({marginBottom:"1.5rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}),i0=q.div({marginBottom:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))"}),l0=q.div({display:"flex",gap:"1rem"}),Np=q.button({borderRadius:"0.5rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),s0=q(Np)({"--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}}),u0=q(Np)({"--tw-bg-opacity":"1",backgroundColor:"rgb(107 114 128 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}});function c0(){const{id:r}=cp(),i=go(),a=Pp.find(o=>o.id===Number(r));return a?C("div",{css:{minHeight:"100vh","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))",paddingTop:"2.5rem",paddingBottom:"2.5rem"}},C(t0,null,C(n0,{src:a.image,alt:a.title}),C(o0,null,a.category),C(r0,null,a.title),C(a0,null,a.description),C(i0,null,"$",a.price),C(l0,null,C(s0,null,"Buy Now"),C(u0,{onClick:()=>i("/EA")},"Back")))):C("div",{css:{marginTop:"5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}},"Product not found.",C("button",{css:{marginLeft:"0.75rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline"},onClick:()=>i("/EA")},"Back to list"))}const _p=[{id:1,title:"SuperTrader EA",description:"Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.",price:59,image:"/images/ea/update.png",category:"Scalping"},{id:2,title:"ScalperPro EA",description:"EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.",price:79,image:"/images/ea/update.png",category:"Scalper"},{id:3,title:"SmartBot EA",description:"AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.",price:99,image:"/images/ea/update.png",category:"AI Trading"}],d0=q.div`
  ${{position:"relative",minHeight:"100vh",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,f0=q.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",opacity:"0.4",".dark &":{opacity:"0.3"}}),p0=q.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",opacity:"0.6",".dark &":{opacity:"0.4"}}),m0=q.h1({marginBottom:"2.5rem",textAlign:"center",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),g0=q.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),h0=q.div`
  ${{position:"relative",cursor:"pointer",overflow:"hidden",borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}}

  /* Bayangan adaptif */
  /* box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);*/

  /* Mode gelap: bayangan putih tebal */
  .dark & {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);

    .dark & {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.35);
    }
  }
`,y0=q.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),b0=q.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),v0=q.div({padding:"1.25rem"}),w0=q.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),k0=q.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),x0=q.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),S0=q.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function C0(){const r=go(),i=a=>{r(`/Indicator/${a}`)};return C(d0,null,C(f0,null,C(yr,{count:12,sizes:[30,60]})),C(p0,null,C(yr,{count:12,sizes:[40,80]})),C(m0,null,"Indicator Collection"),C(g0,null,_p.map(a=>C(h0,{key:a.id,onClick:()=>i(a.id)},C(y0,null,C(b0,{src:a.image,alt:a.title})),C(v0,null,C(w0,null,a.category),C(k0,null,a.title),C(x0,null,a.description),C(S0,null,"$",a.price))))))}const E0=q.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",maxWidth:"56rem",borderRadius:"1.5rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem","--tw-shadow":"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),O0=q.img({marginBottom:"1.5rem",height:"20rem",width:"100%",borderRadius:"1rem",objectFit:"cover"}),P0=q.h2({marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}),z0=q.span({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),L0=q.p({marginBottom:"1.5rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}),N0=q.div({marginBottom:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))"}),_0=q.div({display:"flex",gap:"1rem"}),Tp=q.button({borderRadius:"0.5rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),T0=q(Tp)({"--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}}),F0=q(Tp)({"--tw-bg-opacity":"1",backgroundColor:"rgb(107 114 128 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}});function M0(){const{id:r}=cp(),i=go(),a=_p.find(o=>o.id===Number(r));return a?C("div",{css:{minHeight:"100vh","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))",paddingTop:"2.5rem",paddingBottom:"2.5rem"}},C(E0,null,C(O0,{src:a.image,alt:a.title}),C(z0,null,a.category),C(P0,null,a.title),C(L0,null,a.description),C(N0,null,"$",a.price),C(_0,null,C(T0,null,"Buy Now"),C(F0,{onClick:()=>i("/INDICATOR")},"Back")))):C("div",{css:{marginTop:"5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}},"Product not found.",C("button",{css:{marginLeft:"0.75rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline"},onClick:()=>i("/EA")},"Back to list"))}function os(){return os=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},os.apply(null,arguments)}const j0=r=>C("svg",os({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"})),A0=q.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",zIndex:"0",userSelect:"none"}),R0=q.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",userSelect:"none",zIndex:"2"}),I0=q.main({display:"flex",width:"100%",flex:"1 1 0%",flexDirection:"column",justifyContent:"center",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"5rem",paddingBottom:"5rem"}),D0=q.div({position:"relative",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",textAlign:"center",zIndex:"1"}),$0=q.h2({fontSize:"3rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(71 85 105 / var(--tw-text-opacity))"}),B0=q.p({marginTop:"1.5rem",fontSize:"1.875rem",lineHeight:"2.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),H0=q.button({marginTop:"3rem",display:"inline-flex",alignItems:"center",gap:"1rem",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(239 246 255 / var(--tw-text-opacity))",outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{gap:"2rem"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}});function U0(){const{t:r}=Es();return C(I0,null,C(A0,null,C(yr,{count:12,sizes:[30,60]})),C(R0,null,C(yr,{count:12,sizes:[40,80]})),C(D0,null,C($0,null,r("intro.title")),C(B0,null,r("intro.description")),C(Ns,{to:"/EA"},C(H0,null,C("span",null,r("intro.link")),C(j0,null)))))}const V0=`/* dark */
.markdown-body {
  color-scheme: dark;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #f0f6fc;
  background-color: #0d1117;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #4493f8;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #3d444db3;
}

.markdown-body mark {
  background-color: #bb800926;
  color: #f0f6fc;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 2.5rem;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #3d444db3;
  height: .25em;
  padding: 0;
  margin: 1.5rem 0;
  background-color: #3d444d;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #9198a1;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
  font-variant: tabular-nums;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #1f6feb;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 0.25rem;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  line-height: 10px;
  color: #f0f6fc;
  vertical-align: middle;
  background-color: #151b23;
  border: solid 1px #3d444db3;
  border-bottom-color: #3d444db3;
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 #3d444db3;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #3d444db3;
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #9198a1;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #9198a1;
  border-left: .25em solid #3d444d;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: 0.5rem !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #f85149;
}

.markdown-body .anchor {
  float: left;
  padding-right: 0.25rem;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 1rem;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #f0f6fc;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 1rem;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 1rem;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #3d444d;
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: #0d1117;
  border-top: 1px solid #3d444db3;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #151b23;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #3d444d;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #f0f6fc;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: #656c7633;
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 1rem;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 1rem;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #f0f6fc;
  background-color: #151b23;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 0.5rem 9px;
  text-align: right;
  background: #0d1117;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #151b23;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #9198a1;
  border-top: 1px solid #3d444d;
}

.markdown-body .footnotes ol {
  padding-left: 1rem;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 1rem;
  margin-top: 1rem;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: calc(0.5rem*-1);
  right: calc(0.5rem*-1);
  bottom: calc(0.5rem*-1);
  left: calc(1.5rem*-1);
  pointer-events: none;
  content: "";
  border: 2px solid #1f6feb;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #f0f6fc;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body body:has(:modal) {
  padding-right: var(--dialog-scrollgutter) !important;
}

.markdown-body .pl-c {
  color: #9198a1;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #79c0ff;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #d2a8ff;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #f0f6fc;
}

.markdown-body .pl-ent {
  color: #7ee787;
}

.markdown-body .pl-k {
  color: #ff7b72;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #a5d6ff;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #ffa657;
}

.markdown-body .pl-bu {
  color: #f85149;
}

.markdown-body .pl-ii {
  color: #f0f6fc;
  background-color: #8e1519;
}

.markdown-body .pl-c2 {
  color: #f0f6fc;
  background-color: #b62324;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #7ee787;
}

.markdown-body .pl-ml {
  color: #f2cc60;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #1f6feb;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #f0f6fc;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #f0f6fc;
}

.markdown-body .pl-md {
  color: #ffdcd7;
  background-color: #67060c;
}

.markdown-body .pl-mi1 {
  color: #aff5b4;
  background-color: #033a16;
}

.markdown-body .pl-mc {
  color: #ffdfb6;
  background-color: #5a1e02;
}

.markdown-body .pl-mi2 {
  color: #f0f6fc;
  background-color: #1158c7;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #d2a8ff;
}

.markdown-body .pl-ba {
  color: #9198a1;
}

.markdown-body .pl-sg {
  color: #3d444d;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #a5d6ff;
}

.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),
.markdown-body button:focus:not(:focus-visible),
.markdown-body summary:focus:not(:focus-visible),
.markdown-body a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.markdown-body [tabindex="0"]:focus:not(:focus-visible),
.markdown-body details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 0.25rem;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body ul:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body ol:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: inherit;
  border-left: .25em solid #3d444d;
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: #1f6feb;
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #4493f8;
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: #8957e5;
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: #ab7df8;
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: #9e6a03;
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #d29922;
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: #238636;
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #3fb950;
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: #da3633;
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #f85149;
}

.markdown-body>*:first-child>.heading-element:first-child {
  margin-top: 0 !important;
}

.markdown-body .highlight pre:has(+.zeroclipboard-container) {
  min-height: 52px;
}

`,W0=`/* light */
.markdown-body {
  color-scheme: light;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #1f2328;
  background-color: #ffffff;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
}

.markdown-body .octicon {
  display: inline-block;
  fill: currentColor;
  vertical-align: text-bottom;
}

.markdown-body h1:hover .anchor .octicon-link:before,
.markdown-body h2:hover .anchor .octicon-link:before,
.markdown-body h3:hover .anchor .octicon-link:before,
.markdown-body h4:hover .anchor .octicon-link:before,
.markdown-body h5:hover .anchor .octicon-link:before,
.markdown-body h6:hover .anchor .octicon-link:before {
  width: 16px;
  height: 16px;
  content: ' ';
  display: inline-block;
  background-color: currentColor;
  -webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
  mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

.markdown-body details,
.markdown-body figcaption,
.markdown-body figure {
  display: block;
}

.markdown-body summary {
  display: list-item;
}

.markdown-body [hidden] {
  display: none !important;
}

.markdown-body a {
  background-color: transparent;
  color: #0969da;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

.markdown-body b,
.markdown-body strong {
  font-weight: 600;
}

.markdown-body dfn {
  font-style: italic;
}

.markdown-body h1 {
  margin: .67em 0;
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 2em;
  border-bottom: 1px solid #d1d9e0b3;
}

.markdown-body mark {
  background-color: #fff8c5;
  color: #1f2328;
}

.markdown-body small {
  font-size: 90%;
}

.markdown-body sub,
.markdown-body sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

.markdown-body sub {
  bottom: -0.25em;
}

.markdown-body sup {
  top: -0.5em;
}

.markdown-body img {
  border-style: none;
  max-width: 100%;
  box-sizing: content-box;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 2.5rem;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #d1d9e0b3;
  height: .25em;
  padding: 0;
  margin: 1.5rem 0;
  background-color: #d1d9e0;
  border: 0;
}

.markdown-body input {
  font: inherit;
  margin: 0;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

.markdown-body [type=button],
.markdown-body [type=reset],
.markdown-body [type=submit] {
  -webkit-appearance: button;
  appearance: button;
}

.markdown-body [type=checkbox],
.markdown-body [type=radio] {
  box-sizing: border-box;
  padding: 0;
}

.markdown-body [type=number]::-webkit-inner-spin-button,
.markdown-body [type=number]::-webkit-outer-spin-button {
  height: auto;
}

.markdown-body [type=search]::-webkit-search-cancel-button,
.markdown-body [type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #59636e;
  opacity: 1;
}

.markdown-body hr::before {
  display: table;
  content: "";
}

.markdown-body hr::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body table {
  border-spacing: 0;
  border-collapse: collapse;
  display: block;
  width: max-content;
  max-width: 100%;
  overflow: auto;
  font-variant: tabular-nums;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:focus:not(:focus-visible),
.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body input[type=radio]:focus:not(:focus-visible),
.markdown-body input[type=checkbox]:focus:not(:focus-visible) {
  outline: solid 1px transparent;
}

.markdown-body a:focus-visible,
.markdown-body [role=button]:focus-visible,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus-visible {
  outline: 2px solid #0969da;
  outline-offset: -2px;
  box-shadow: none;
}

.markdown-body a:not([class]):focus,
.markdown-body a:not([class]):focus-visible,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=radio]:focus-visible,
.markdown-body input[type=checkbox]:focus,
.markdown-body input[type=checkbox]:focus-visible {
  outline-offset: 0;
}

.markdown-body kbd {
  display: inline-block;
  padding: 0.25rem;
  font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  line-height: 10px;
  color: #1f2328;
  vertical-align: middle;
  background-color: #f6f8fa;
  border: solid 1px #d1d9e0b3;
  border-bottom-color: #d1d9e0b3;
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 #d1d9e0b3;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #d1d9e0b3;
}

.markdown-body h3 {
  font-weight: 600;
  font-size: 1.25em;
}

.markdown-body h4 {
  font-weight: 600;
  font-size: 1em;
}

.markdown-body h5 {
  font-weight: 600;
  font-size: .875em;
}

.markdown-body h6 {
  font-weight: 600;
  font-size: .85em;
  color: #59636e;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #59636e;
  border-left: .25em solid #d1d9e0;
}

.markdown-body ul,
.markdown-body ol {
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 2em;
}

.markdown-body ol ol,
.markdown-body ul ol {
  list-style-type: lower-roman;
}

.markdown-body ul ul ol,
.markdown-body ul ol ol,
.markdown-body ol ul ol,
.markdown-body ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-body dd {
  margin-left: 0;
}

.markdown-body tt,
.markdown-body code,
.markdown-body samp {
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  font-size: 12px;
  word-wrap: normal;
}

.markdown-body .octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}

.markdown-body input::-webkit-outer-spin-button,
.markdown-body input::-webkit-inner-spin-button {
  margin: 0;
  appearance: none;
}

.markdown-body .mr-2 {
  margin-right: 0.5rem !important;
}

.markdown-body::before {
  display: table;
  content: "";
}

.markdown-body::after {
  display: table;
  clear: both;
  content: "";
}

.markdown-body>*:first-child {
  margin-top: 0 !important;
}

.markdown-body>*:last-child {
  margin-bottom: 0 !important;
}

.markdown-body a:not([href]) {
  color: inherit;
  text-decoration: none;
}

.markdown-body .absent {
  color: #d1242f;
}

.markdown-body .anchor {
  float: left;
  padding-right: 0.25rem;
  margin-left: -20px;
  line-height: 1;
}

.markdown-body .anchor:focus {
  outline: none;
}

.markdown-body p,
.markdown-body blockquote,
.markdown-body ul,
.markdown-body ol,
.markdown-body dl,
.markdown-body table,
.markdown-body pre,
.markdown-body details {
  margin-top: 0;
  margin-bottom: 1rem;
}

.markdown-body blockquote>:first-child {
  margin-top: 0;
}

.markdown-body blockquote>:last-child {
  margin-bottom: 0;
}

.markdown-body h1 .octicon-link,
.markdown-body h2 .octicon-link,
.markdown-body h3 .octicon-link,
.markdown-body h4 .octicon-link,
.markdown-body h5 .octicon-link,
.markdown-body h6 .octicon-link {
  color: #1f2328;
  vertical-align: middle;
  visibility: hidden;
}

.markdown-body h1:hover .anchor,
.markdown-body h2:hover .anchor,
.markdown-body h3:hover .anchor,
.markdown-body h4:hover .anchor,
.markdown-body h5:hover .anchor,
.markdown-body h6:hover .anchor {
  text-decoration: none;
}

.markdown-body h1:hover .anchor .octicon-link,
.markdown-body h2:hover .anchor .octicon-link,
.markdown-body h3:hover .anchor .octicon-link,
.markdown-body h4:hover .anchor .octicon-link,
.markdown-body h5:hover .anchor .octicon-link,
.markdown-body h6:hover .anchor .octicon-link {
  visibility: visible;
}

.markdown-body h1 tt,
.markdown-body h1 code,
.markdown-body h2 tt,
.markdown-body h2 code,
.markdown-body h3 tt,
.markdown-body h3 code,
.markdown-body h4 tt,
.markdown-body h4 code,
.markdown-body h5 tt,
.markdown-body h5 code,
.markdown-body h6 tt,
.markdown-body h6 code {
  padding: 0 .2em;
  font-size: inherit;
}

.markdown-body summary h1,
.markdown-body summary h2,
.markdown-body summary h3,
.markdown-body summary h4,
.markdown-body summary h5,
.markdown-body summary h6 {
  display: inline-block;
}

.markdown-body summary h1 .anchor,
.markdown-body summary h2 .anchor,
.markdown-body summary h3 .anchor,
.markdown-body summary h4 .anchor,
.markdown-body summary h5 .anchor,
.markdown-body summary h6 .anchor {
  margin-left: -40px;
}

.markdown-body summary h1,
.markdown-body summary h2 {
  padding-bottom: 0;
  border-bottom: 0;
}

.markdown-body ul.no-list,
.markdown-body ol.no-list {
  padding: 0;
  list-style-type: none;
}

.markdown-body ol[type="a s"] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type="A s"] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type="i s"] {
  list-style-type: lower-roman;
}

.markdown-body ol[type="I s"] {
  list-style-type: upper-roman;
}

.markdown-body ol[type="1"] {
  list-style-type: decimal;
}

.markdown-body div>ol:not([type]) {
  list-style-type: decimal;
}

.markdown-body ul ul,
.markdown-body ul ol,
.markdown-body ol ol,
.markdown-body ol ul {
  margin-top: 0;
  margin-bottom: 0;
}

.markdown-body li>p {
  margin-top: 1rem;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 1rem;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #d1d9e0;
}

.markdown-body table td>:last-child {
  margin-bottom: 0;
}

.markdown-body table tr {
  background-color: #ffffff;
  border-top: 1px solid #d1d9e0b3;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.markdown-body table img {
  background-color: transparent;
}

.markdown-body img[align=right] {
  padding-left: 20px;
}

.markdown-body img[align=left] {
  padding-right: 20px;
}

.markdown-body .emoji {
  max-width: none;
  vertical-align: text-top;
  background-color: transparent;
}

.markdown-body span.frame {
  display: block;
  overflow: hidden;
}

.markdown-body span.frame>span {
  display: block;
  float: left;
  width: auto;
  padding: 7px;
  margin: 13px 0 0;
  overflow: hidden;
  border: 1px solid #d1d9e0;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #1f2328;
}

.markdown-body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-center>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: center;
}

.markdown-body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}

.markdown-body span.align-right {
  display: block;
  overflow: hidden;
  clear: both;
}

.markdown-body span.align-right>span {
  display: block;
  margin: 13px 0 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body span.align-right span img {
  margin: 0;
  text-align: right;
}

.markdown-body span.float-left {
  display: block;
  float: left;
  margin-right: 13px;
  overflow: hidden;
}

.markdown-body span.float-left span {
  margin: 13px 0 0;
}

.markdown-body span.float-right {
  display: block;
  float: right;
  margin-left: 13px;
  overflow: hidden;
}

.markdown-body span.float-right>span {
  display: block;
  margin: 13px auto 0;
  overflow: hidden;
  text-align: right;
}

.markdown-body code,
.markdown-body tt {
  padding: .2em .4em;
  margin: 0;
  font-size: 85%;
  white-space: break-spaces;
  background-color: #818b981f;
  border-radius: 6px;
}

.markdown-body code br,
.markdown-body tt br {
  display: none;
}

.markdown-body del code {
  text-decoration: inherit;
}

.markdown-body samp {
  font-size: 85%;
}

.markdown-body pre code {
  font-size: 100%;
}

.markdown-body pre>code {
  padding: 0;
  margin: 0;
  word-break: normal;
  white-space: pre;
  background: transparent;
  border: 0;
}

.markdown-body .highlight {
  margin-bottom: 1rem;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 1rem;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  color: #1f2328;
  background-color: #f6f8fa;
  border-radius: 6px;
}

.markdown-body pre code,
.markdown-body pre tt {
  display: inline;
  max-width: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  line-height: inherit;
  word-wrap: normal;
  background-color: transparent;
  border: 0;
}

.markdown-body .csv-data td,
.markdown-body .csv-data th {
  padding: 5px;
  overflow: hidden;
  font-size: 12px;
  line-height: 1;
  text-align: left;
  white-space: nowrap;
}

.markdown-body .csv-data .blob-num {
  padding: 10px 0.5rem 9px;
  text-align: right;
  background: #ffffff;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #f6f8fa;
  border-top: 0;
}

.markdown-body [data-footnote-ref]::before {
  content: "[";
}

.markdown-body [data-footnote-ref]::after {
  content: "]";
}

.markdown-body .footnotes {
  font-size: 12px;
  color: #59636e;
  border-top: 1px solid #d1d9e0;
}

.markdown-body .footnotes ol {
  padding-left: 1rem;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 1rem;
  margin-top: 1rem;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: calc(0.5rem*-1);
  right: calc(0.5rem*-1);
  bottom: calc(0.5rem*-1);
  left: calc(1.5rem*-1);
  pointer-events: none;
  content: "";
  border: 2px solid #0969da;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #1f2328;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body body:has(:modal) {
  padding-right: var(--dialog-scrollgutter) !important;
}

.markdown-body .pl-c {
  color: #59636e;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #0550ae;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #6639ba;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #1f2328;
}

.markdown-body .pl-ent {
  color: #0550ae;
}

.markdown-body .pl-k {
  color: #cf222e;
}

.markdown-body .pl-s,
.markdown-body .pl-pds,
.markdown-body .pl-s .pl-pse .pl-s1,
.markdown-body .pl-sr,
.markdown-body .pl-sr .pl-cce,
.markdown-body .pl-sr .pl-sre,
.markdown-body .pl-sr .pl-sra {
  color: #0a3069;
}

.markdown-body .pl-v,
.markdown-body .pl-smw {
  color: #953800;
}

.markdown-body .pl-bu {
  color: #82071e;
}

.markdown-body .pl-ii {
  color: #f6f8fa;
  background-color: #82071e;
}

.markdown-body .pl-c2 {
  color: #f6f8fa;
  background-color: #cf222e;
}

.markdown-body .pl-sr .pl-cce {
  font-weight: bold;
  color: #116329;
}

.markdown-body .pl-ml {
  color: #3b2300;
}

.markdown-body .pl-mh,
.markdown-body .pl-mh .pl-en,
.markdown-body .pl-ms {
  font-weight: bold;
  color: #0550ae;
}

.markdown-body .pl-mi {
  font-style: italic;
  color: #1f2328;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #1f2328;
}

.markdown-body .pl-md {
  color: #82071e;
  background-color: #ffebe9;
}

.markdown-body .pl-mi1 {
  color: #116329;
  background-color: #dafbe1;
}

.markdown-body .pl-mc {
  color: #953800;
  background-color: #ffd8b5;
}

.markdown-body .pl-mi2 {
  color: #d1d9e0;
  background-color: #0550ae;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #8250df;
}

.markdown-body .pl-ba {
  color: #59636e;
}

.markdown-body .pl-sg {
  color: #818b98;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #0a3069;
}

.markdown-body [role=button]:focus:not(:focus-visible),
.markdown-body [role=tabpanel][tabindex="0"]:focus:not(:focus-visible),
.markdown-body button:focus:not(:focus-visible),
.markdown-body summary:focus:not(:focus-visible),
.markdown-body a:focus:not(:focus-visible) {
  outline: none;
  box-shadow: none;
}

.markdown-body [tabindex="0"]:focus:not(:focus-visible),
.markdown-body details-dialog:focus:not(:focus-visible) {
  outline: none;
}

.markdown-body g-emoji {
  display: inline-block;
  min-width: 1ch;
  font-family: "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 1em;
  font-style: normal !important;
  font-weight: 400;
  line-height: 1;
  vertical-align: -0.075em;
}

.markdown-body g-emoji img {
  width: 1em;
  height: 1em;
}

.markdown-body .task-list-item {
  list-style-type: none;
}

.markdown-body .task-list-item label {
  font-weight: 400;
}

.markdown-body .task-list-item.enabled label {
  cursor: pointer;
}

.markdown-body .task-list-item+.task-list-item {
  margin-top: 0.25rem;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body ul:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body ol:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list:hover .task-list-item-convert-container,
.markdown-body .contains-task-list:focus-within .task-list-item-convert-container {
  display: block;
  width: auto;
  height: 24px;
  overflow: visible;
  clip: auto;
}

.markdown-body ::-webkit-calendar-picker-indicator {
  filter: invert(50%);
}

.markdown-body .markdown-alert {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  color: inherit;
  border-left: .25em solid #d1d9e0;
}

.markdown-body .markdown-alert>:first-child {
  margin-top: 0;
}

.markdown-body .markdown-alert>:last-child {
  margin-bottom: 0;
}

.markdown-body .markdown-alert .markdown-alert-title {
  display: flex;
  font-weight: 500;
  align-items: center;
  line-height: 1;
}

.markdown-body .markdown-alert.markdown-alert-note {
  border-left-color: #0969da;
}

.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title {
  color: #0969da;
}

.markdown-body .markdown-alert.markdown-alert-important {
  border-left-color: #8250df;
}

.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title {
  color: #8250df;
}

.markdown-body .markdown-alert.markdown-alert-warning {
  border-left-color: #9a6700;
}

.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title {
  color: #9a6700;
}

.markdown-body .markdown-alert.markdown-alert-tip {
  border-left-color: #1a7f37;
}

.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title {
  color: #1a7f37;
}

.markdown-body .markdown-alert.markdown-alert-caution {
  border-left-color: #cf222e;
}

.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title {
  color: #d1242f;
}

.markdown-body>*:first-child>.heading-element:first-child {
  margin-top: 0 !important;
}

.markdown-body .highlight pre:has(+.zeroclipboard-container) {
  min-height: 52px;
}

`,K0=`/**
 * VS theme by Andrew Lock (https://andrewlock.net)
 * Inspired by Visual Studio syntax coloring
 */

code[class*="language-"],
pre[class*="language-"] {
	color: #393A34;
	font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	font-size: .9em;
	line-height: 1.2em;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre > code[class*="language-"] {
	font-size: 1em;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	background: #C1DEF1;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	background: #C1DEF1;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	border: 1px solid #dddddd;
	background-color: white;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .2em;
	padding-top: 1px;
	padding-bottom: 1px;
	background: #f8f8f8;
	border: 1px solid #dddddd;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #008000;
	font-style: italic;
}

.token.namespace {
	opacity: .7;
}

.token.string {
	color: #A31515;
}

.token.punctuation,
.token.operator {
	color: #393A34; /* no highlight */
}

.token.url,
.token.symbol,
.token.number,
.token.boolean,
.token.variable,
.token.constant,
.token.inserted {
	color: #36acaa;
}

.token.atrule,
.token.keyword,
.token.attr-value,
.language-autohotkey .token.selector,
.language-json .token.boolean,
.language-json .token.number,
code[class*="language-css"] {
	color: #0000ff;
}

.token.function {
	color: #393A34;
}

.token.deleted,
.language-autohotkey .token.tag {
	color: #9a050f;
}

.token.selector,
.language-autohotkey .token.keyword {
	color: #00009f;
}

.token.important {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.italic {
	font-style: italic;
}

.token.class-name,
.language-json .token.property {
	color: #2B91AF;
}

.token.tag,
.token.selector {
	color: #800000;
}

.token.attr-name,
.token.property,
.token.regex,
.token.entity {
	color: #ff0000;
}

.token.directive.tag .tag {
	background: #ffff00;
	color: #393A34;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers.line-numbers .line-numbers-rows {
	border-right-color: #a5a5a5;
}

.line-numbers .line-numbers-rows > span:before {
	color: #2B91AF;
}

/* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
.line-highlight.line-highlight {
	background: rgba(193, 222, 241, 0.2);
	background: -webkit-linear-gradient(left, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0));
	background: linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0));
}
`,q0=`pre[class*="language-"],
code[class*="language-"] {
	color: #d4d4d4;
	font-size: 13px;
	text-shadow: none;
	font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::selection,
code[class*="language-"]::selection,
pre[class*="language-"] *::selection,
code[class*="language-"] *::selection {
	text-shadow: none;
	background: #264F78;
}

@media print {
	pre[class*="language-"],
	code[class*="language-"] {
		text-shadow: none;
	}
}

pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	background: #1e1e1e;
}

:not(pre) > code[class*="language-"] {
	padding: .1em .3em;
	border-radius: .3em;
	color: #db4c69;
	background: #1e1e1e;
}
/*********************************************************
* Tokens
*/
.namespace {
	opacity: .7;
}

.token.doctype .token.doctype-tag {
	color: #569CD6;
}

.token.doctype .token.name {
	color: #9cdcfe;
}

.token.comment,
.token.prolog {
	color: #6a9955;
}

.token.punctuation,
.language-html .language-css .token.punctuation,
.language-html .language-javascript .token.punctuation {
	color: #d4d4d4;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.inserted,
.token.unit {
	color: #b5cea8;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.deleted {
	color: #ce9178;
}

.language-css .token.string.url {
	text-decoration: underline;
}

.token.operator,
.token.entity {
	color: #d4d4d4;
}

.token.operator.arrow {
	color: #569CD6;
}

.token.atrule {
	color: #ce9178;
}

.token.atrule .token.rule {
	color: #c586c0;
}

.token.atrule .token.url {
	color: #9cdcfe;
}

.token.atrule .token.url .token.function {
	color: #dcdcaa;
}

.token.atrule .token.url .token.punctuation {
	color: #d4d4d4;
}

.token.keyword {
	color: #569CD6;
}

.token.keyword.module,
.token.keyword.control-flow {
	color: #c586c0;
}

.token.function,
.token.function .token.maybe-class-name {
	color: #dcdcaa;
}

.token.regex {
	color: #d16969;
}

.token.important {
	color: #569cd6;
}

.token.italic {
	font-style: italic;
}

.token.constant {
	color: #9cdcfe;
}

.token.class-name,
.token.maybe-class-name {
	color: #4ec9b0;
}

.token.console {
	color: #9cdcfe;
}

.token.parameter {
	color: #9cdcfe;
}

.token.interpolation {
	color: #9cdcfe;
}

.token.punctuation.interpolation-punctuation {
	color: #569cd6;
}

.token.boolean {
	color: #569cd6;
}

.token.property,
.token.variable,
.token.imports .token.maybe-class-name,
.token.exports .token.maybe-class-name {
	color: #9cdcfe;
}

.token.selector {
	color: #d7ba7d;
}

.token.escape {
	color: #d7ba7d;
}

.token.tag {
	color: #569cd6;
}

.token.tag .token.punctuation {
	color: #808080;
}

.token.cdata {
	color: #808080;
}

.token.attr-name {
	color: #9cdcfe;
}

.token.attr-value,
.token.attr-value .token.punctuation {
	color: #ce9178;
}

.token.attr-value .token.punctuation.attr-equals {
	color: #d4d4d4;
}

.token.entity {
	color: #569cd6;
}

.token.namespace {
	color: #4ec9b0;
}
/*********************************************************
* Language Specific
*/

pre[class*="language-javascript"],
code[class*="language-javascript"],
pre[class*="language-jsx"],
code[class*="language-jsx"],
pre[class*="language-typescript"],
code[class*="language-typescript"],
pre[class*="language-tsx"],
code[class*="language-tsx"] {
	color: #9cdcfe;
}

pre[class*="language-css"],
code[class*="language-css"] {
	color: #ce9178;
}

pre[class*="language-html"],
code[class*="language-html"] {
	color: #d4d4d4;
}

.language-regex .token.anchor {
	color: #dcdcaa;
}

.language-html .token.punctuation {
	color: #808080;
}
/*********************************************************
* Line highlighting
*/
pre[class*="language-"] > code[class*="language-"] {
	position: relative;
	z-index: 1;
}

.line-highlight.line-highlight {
	background: #f7ebc6;
	box-shadow: inset 5px 0 0 #f7d87c;
	z-index: 0;
}
`;function as(){return as=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},as.apply(null,arguments)}const X0=r=>C("svg",as({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"}));function is(){return is=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},is.apply(null,arguments)}const Y0=r=>C("svg",is({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8zm2-8v4h4V5h-4zm0 10v4h4v-4h-4zM5 5v4h4V5H5zm0 10v4h4v-4H5z"}));function ls(){return ls=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ls.apply(null,arguments)}const Q0=r=>C("svg",ls({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"}));function ss(){return ss=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ss.apply(null,arguments)}const J0=r=>C("svg",ss({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248A15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"}));function us(){return us=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},us.apply(null,arguments)}const Z0=r=>C("svg",us({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"}));function cs(){return cs=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},cs.apply(null,arguments)}const G0=r=>C("svg",cs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"}));function ds(){return ds=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ds.apply(null,arguments)}const e1=r=>C("svg",ds({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"m21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"}));function fs(){return fs=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},fs.apply(null,arguments)}const t1=r=>C("svg",fs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"}));function n1(r,i){const[a,o]=D.useState(()=>{try{const d=window.localStorage.getItem(r);return d?JSON.parse(d):i}catch{return i}}),u=D.useCallback(d=>{o(d),window.localStorage.setItem(r,JSON.stringify(d))},[]);return[a,u]}const r1=D.createContext(!1);function o1(){const[r,i]=n1("dark-mode-enabled"),a=r??!0;return D.useEffect(()=>{a?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[a]),[a,i]}var Uf={exports:{}},Vf;function a1(){return Vf||(Vf=1,(function(r){var i=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
* Prism: Lightweight, robust, elegant syntax highlighting
*
* @license MIT <https://opensource.org/licenses/MIT>
* @author Lea Verou <https://lea.verou.me>
* @namespace
* @public
*/var a=(function(o){var u=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,d=0,f={},p={manual:o.Prism&&o.Prism.manual,disableWorkerMessageHandler:o.Prism&&o.Prism.disableWorkerMessageHandler,util:{encode:function k(E){return E instanceof g?new g(E.type,k(E.content),E.alias):Array.isArray(E)?E.map(k):E.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(k){return Object.prototype.toString.call(k).slice(8,-1)},objId:function(k){return k.__id||Object.defineProperty(k,"__id",{value:++d}),k.__id},clone:function k(E,j){j=j||{};var P,A;switch(p.util.type(E)){case"Object":if(A=p.util.objId(E),j[A])return j[A];P={},j[A]=P;for(var $ in E)E.hasOwnProperty($)&&(P[$]=k(E[$],j));return P;case"Array":return A=p.util.objId(E),j[A]?j[A]:(P=[],j[A]=P,E.forEach(function(Q,K){P[K]=k(Q,j)}),P);default:return E}},getLanguage:function(k){for(;k;){var E=u.exec(k.className);if(E)return E[1].toLowerCase();k=k.parentElement}return"none"},setLanguage:function(k,E){k.className=k.className.replace(RegExp(u,"gi"),""),k.classList.add("language-"+E)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(P){var k=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(P.stack)||[])[1];if(k){var E=document.getElementsByTagName("script");for(var j in E)if(E[j].src==k)return E[j]}return null}},isActive:function(k,E,j){for(var P="no-"+E;k;){var A=k.classList;if(A.contains(E))return!0;if(A.contains(P))return!1;k=k.parentElement}return!!j}},languages:{plain:f,plaintext:f,text:f,txt:f,extend:function(k,E){var j=p.util.clone(p.languages[k]);for(var P in E)j[P]=E[P];return j},insertBefore:function(k,E,j,P){P=P||p.languages;var A=P[k],$={};for(var Q in A)if(A.hasOwnProperty(Q)){if(Q==E)for(var K in j)j.hasOwnProperty(K)&&($[K]=j[K]);j.hasOwnProperty(Q)||($[Q]=A[Q])}var ie=P[k];return P[k]=$,p.languages.DFS(p.languages,function(pe,_e){_e===ie&&pe!=k&&(this[pe]=$)}),$},DFS:function k(E,j,P,A){A=A||{};var $=p.util.objId;for(var Q in E)if(E.hasOwnProperty(Q)){j.call(E,Q,E[Q],P||Q);var K=E[Q],ie=p.util.type(K);ie==="Object"&&!A[$(K)]?(A[$(K)]=!0,k(K,j,null,A)):ie==="Array"&&!A[$(K)]&&(A[$(K)]=!0,k(K,j,Q,A))}}},plugins:{},highlightAll:function(k,E){p.highlightAllUnder(document,k,E)},highlightAllUnder:function(k,E,j){var P={callback:j,container:k,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};p.hooks.run("before-highlightall",P),P.elements=Array.prototype.slice.apply(P.container.querySelectorAll(P.selector)),p.hooks.run("before-all-elements-highlight",P);for(var A=0,$;$=P.elements[A++];)p.highlightElement($,E===!0,P.callback)},highlightElement:function(k,E,j){var P=p.util.getLanguage(k),A=p.languages[P];p.util.setLanguage(k,P);var $=k.parentElement;$&&$.nodeName.toLowerCase()==="pre"&&p.util.setLanguage($,P);var Q=k.textContent,K={element:k,language:P,grammar:A,code:Q};function ie(_e){K.highlightedCode=_e,p.hooks.run("before-insert",K),K.element.innerHTML=K.highlightedCode,p.hooks.run("after-highlight",K),p.hooks.run("complete",K),j&&j.call(K.element)}if(p.hooks.run("before-sanity-check",K),$=K.element.parentElement,$&&$.nodeName.toLowerCase()==="pre"&&!$.hasAttribute("tabindex")&&$.setAttribute("tabindex","0"),!K.code){p.hooks.run("complete",K),j&&j.call(K.element);return}if(p.hooks.run("before-highlight",K),!K.grammar){ie(p.util.encode(K.code));return}if(E&&o.Worker){var pe=new Worker(p.filename);pe.onmessage=function(_e){ie(_e.data)},pe.postMessage(JSON.stringify({language:K.language,code:K.code,immediateClose:!0}))}else ie(p.highlight(K.code,K.grammar,K.language))},highlight:function(k,E,j){var P={code:k,grammar:E,language:j};if(p.hooks.run("before-tokenize",P),!P.grammar)throw new Error('The language "'+P.language+'" has no grammar.');return P.tokens=p.tokenize(P.code,P.grammar),p.hooks.run("after-tokenize",P),g.stringify(p.util.encode(P.tokens),P.language)},tokenize:function(k,E){var j=E.rest;if(j){for(var P in j)E[P]=j[P];delete E.rest}var A=new x;return _(A,A.head,k),v(k,A,E,A.head,0),M(A)},hooks:{all:{},add:function(k,E){var j=p.hooks.all;j[k]=j[k]||[],j[k].push(E)},run:function(k,E){var j=p.hooks.all[k];if(!(!j||!j.length))for(var P=0,A;A=j[P++];)A(E)}},Token:g};o.Prism=p;function g(k,E,j,P){this.type=k,this.content=E,this.alias=j,this.length=(P||"").length|0}g.stringify=function k(E,j){if(typeof E=="string")return E;if(Array.isArray(E)){var P="";return E.forEach(function(ie){P+=k(ie,j)}),P}var A={type:E.type,content:k(E.content,j),tag:"span",classes:["token",E.type],attributes:{},language:j},$=E.alias;$&&(Array.isArray($)?Array.prototype.push.apply(A.classes,$):A.classes.push($)),p.hooks.run("wrap",A);var Q="";for(var K in A.attributes)Q+=" "+K+'="'+(A.attributes[K]||"").replace(/"/g,"&quot;")+'"';return"<"+A.tag+' class="'+A.classes.join(" ")+'"'+Q+">"+A.content+"</"+A.tag+">"};function y(k,E,j,P){k.lastIndex=E;var A=k.exec(j);if(A&&P&&A[1]){var $=A[1].length;A.index+=$,A[0]=A[0].slice($)}return A}function v(k,E,j,P,A,$){for(var Q in j)if(!(!j.hasOwnProperty(Q)||!j[Q])){var K=j[Q];K=Array.isArray(K)?K:[K];for(var ie=0;ie<K.length;++ie){if($&&$.cause==Q+","+ie)return;var pe=K[ie],_e=pe.inside,Oe=!!pe.lookbehind,He=!!pe.greedy,Ue=pe.alias;if(He&&!pe.pattern.global){var Le=pe.pattern.toString().match(/[imsuy]*$/)[0];pe.pattern=RegExp(pe.pattern.source,Le+"g")}for(var we=pe.pattern||pe,V=P.next,G=A;V!==E.tail&&!($&&G>=$.reach);G+=V.value.length,V=V.next){var b=V.value;if(E.length>k.length)return;if(!(b instanceof g)){var I=1,Y;if(He){if(Y=y(we,G,k,Oe),!Y||Y.index>=k.length)break;var se=Y.index,le=Y.index+Y[0].length,oe=G;for(oe+=V.value.length;se>=oe;)V=V.next,oe+=V.value.length;if(oe-=V.value.length,G=oe,V.value instanceof g)continue;for(var ue=V;ue!==E.tail&&(oe<le||typeof ue.value=="string");ue=ue.next)I++,oe+=ue.value.length;I--,b=k.slice(G,oe),Y.index-=G}else if(Y=y(we,0,b,Oe),!Y)continue;var se=Y.index,fe=Y[0],ce=b.slice(0,se),Ce=b.slice(se+fe.length),mt=G+b.length;$&&mt>$.reach&&($.reach=mt);var gt=V.prev;ce&&(gt=_(E,gt,ce),G+=ce.length),R(E,gt,I);var Pn=new g(Q,_e?p.tokenize(fe,_e):fe,Ue,fe);if(V=_(E,gt,Pn),Ce&&_(E,V,Ce),I>1){var tn={cause:Q+","+ie,reach:mt};v(k,E,j,V.prev,G,tn),$&&tn.reach>$.reach&&($.reach=tn.reach)}}}}}}function x(){var k={value:null,prev:null,next:null},E={value:null,prev:k,next:null};k.next=E,this.head=k,this.tail=E,this.length=0}function _(k,E,j){var P=E.next,A={value:j,prev:E,next:P};return E.next=A,P.prev=A,k.length++,A}function R(k,E,j){for(var P=E.next,A=0;A<j&&P!==k.tail;A++)P=P.next;E.next=P,P.prev=E,k.length-=A}function M(k){for(var E=[],j=k.head.next;j!==k.tail;)E.push(j.value),j=j.next;return E}if(!o.document)return o.addEventListener&&(p.disableWorkerMessageHandler||o.addEventListener("message",function(k){var E=JSON.parse(k.data),j=E.language,P=E.code,A=E.immediateClose;o.postMessage(p.highlight(P,p.languages[j],j)),A&&o.close()},!1)),p;var O=p.util.currentScript();O&&(p.filename=O.src,O.hasAttribute("data-manual")&&(p.manual=!0));function z(){p.manual||p.highlightAll()}if(!p.manual){var T=document.readyState;T==="loading"||T==="interactive"&&O&&O.defer?document.addEventListener("DOMContentLoaded",z):window.requestAnimationFrame?window.requestAnimationFrame(z):window.setTimeout(z,16)}return p})(i);r.exports&&(r.exports=a),typeof nf<"u"&&(nf.Prism=a),a.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.languages.markup.doctype.inside["internal-subset"].inside=a.languages.markup,a.hooks.add("wrap",function(o){o.type==="entity"&&(o.attributes.title=o.content.replace(/&amp;/,"&"))}),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(o,u){var d={};d["language-"+u]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[u]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;var f={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};f["language-"+u]={pattern:/[\s\S]+/,inside:a.languages[u]};var p={};p[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:f},a.languages.insertBefore("markup","cdata",p)}}),Object.defineProperty(a.languages.markup.tag,"addAttribute",{value:function(o,u){a.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+o+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[u,"language-"+u],inside:a.languages[u]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,a.languages.xml=a.languages.extend("markup",{}),a.languages.ssml=a.languages.xml,a.languages.atom=a.languages.xml,a.languages.rss=a.languages.xml,(function(o){var u=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;o.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+u.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+u.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+u.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+u.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:u,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},o.languages.css.atrule.inside.rest=o.languages.css;var d=o.languages.markup;d&&(d.tag.addInlined("style","css"),d.tag.addAttribute("style","css"))})(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:a.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),a.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),a.languages.markup&&(a.languages.markup.tag.addInlined("script","javascript"),a.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),a.languages.js=a.languages.javascript,(function(){if(typeof a>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var o="Loading…",u=function(O,z){return"✖ Error "+O+" while fetching file: "+z},d="✖ Error: File does not exist or is empty",f={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},p="data-src-status",g="loading",y="loaded",v="failed",x="pre[data-src]:not(["+p+'="'+y+'"]):not(['+p+'="'+g+'"])';function _(O,z,T){var k=new XMLHttpRequest;k.open("GET",O,!0),k.onreadystatechange=function(){k.readyState==4&&(k.status<400&&k.responseText?z(k.responseText):k.status>=400?T(u(k.status,k.statusText)):T(d))},k.send(null)}function R(O){var z=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(O||"");if(z){var T=Number(z[1]),k=z[2],E=z[3];return k?E?[T,Number(E)]:[T,void 0]:[T,T]}}a.hooks.add("before-highlightall",function(O){O.selector+=", "+x}),a.hooks.add("before-sanity-check",function(O){var z=O.element;if(z.matches(x)){O.code="",z.setAttribute(p,g);var T=z.appendChild(document.createElement("CODE"));T.textContent=o;var k=z.getAttribute("data-src"),E=O.language;if(E==="none"){var j=(/\.(\w+)$/.exec(k)||[,"none"])[1];E=f[j]||j}a.util.setLanguage(T,E),a.util.setLanguage(z,E);var P=a.plugins.autoloader;P&&P.loadLanguages(E),_(k,function(A){z.setAttribute(p,y);var $=R(z.getAttribute("data-range"));if($){var Q=A.split(/\r\n?|\n/g),K=$[0],ie=$[1]==null?Q.length:$[1];K<0&&(K+=Q.length),K=Math.max(0,Math.min(K-1,Q.length)),ie<0&&(ie+=Q.length),ie=Math.max(0,Math.min(ie,Q.length)),A=Q.slice(K,ie).join(`
`),z.hasAttribute("data-start")||z.setAttribute("data-start",String(K+1))}T.textContent=A,a.highlightElement(T)},function(A){z.setAttribute(p,v),T.textContent=A})}}),a.plugins.fileHighlight={highlight:function(O){for(var z=(O||document).querySelectorAll(x),T=0,k;k=z[T++];)a.highlightElement(k)}};var M=!1;a.fileHighlight=function(){M||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),M=!0),a.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Uf)),Uf.exports}a1();async function Wf(r,i){const a=document.getElementById(r);a&&a.remove();const o=document.createElement("style");o.setAttribute("id",r),o.textContent=i,document.head.appendChild(o)}const i1="Agus Pujianto",l1="aguspujiantoo@gmail.com",s1="dagangduit.github.io",u1=q.div`
  ${{position:"relative",display:"flex",minHeight:"100vh",flexDirection:"column",paddingBottom:"4rem"}}
`,c1=q.header({height:"5rem",width:"100%"}),d1=q.div({marginLeft:"auto",marginRight:"auto",display:"flex",height:"100%",maxWidth:"1024px",alignItems:"center",paddingLeft:"2rem",paddingRight:"2rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(100 116 139 / var(--tw-text-opacity))"}),f1=q(Ns)`
  ${{fontSize:"1.125rem",lineHeight:"1.75rem"}}
`,p1=q.span({marginLeft:"0.125rem",marginRight:"0.125rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),m1=q.nav({marginLeft:"auto",display:"grid",gridAutoFlow:"column",gap:"0.75rem",lineHeight:"1.25rem","@media (min-width: 1024px)":{gap:"1.5rem"}}),Fp={cursor:"pointer",opacity:"0.6",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}},La=q.a`
  ${Fp}
`,Wl=q(Dy)`
  ${Fp}

  &.active {
    ${{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}}
  }
`,g1=q.div({height:"100%",width:"1px","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}}),h1=q.footer({position:"absolute",bottom:"1rem",left:"0px",width:"100%",userSelect:"none","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.5rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"},textAlign:"center",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(203 213 225 / var(--tw-text-opacity))"}),y1=q.div({marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",".dark &":{"--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}});function b1(){const{t:r}=Es(),[i,a]=o1();D.useEffect(()=>{Wf("prism-theme",i?q0:K0),Wf("markdown-theme",i?V0:W0)},[i]);const o=D.useCallback(()=>{a(!i)},[i]),u=D.useCallback(()=>{window.open("https://dagangduit.com/","_blank")},[]);return C(r1.Provider,{value:i},C(u1,null,C(c1,null,C(d1,null,C(f1,{to:"/"},C("span",null),C(p1,null,i1)),C(m1,null,C(Wl,{to:"/EA"},C(X0,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),C("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},r("tab.EA"))),C(Wl,{to:"/indicator"},C(e1,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),C("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},r("tab.indicator"))),C(Wl,{to:"/projects"},C(Y0,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),C("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},r("tab.projects"))),C(g1,null),C(La,{href:`mailto:${l1}`},C(Z0,null)),C(La,{href:s1,target:"_blank"},C(Q0,null)),C(La,{onClick:u},C(J0,null)),C(La,{onClick:o},C(i?t1:G0,null))))),C(Zl,null),C(h1,null,C(y1,null,C("a",{css:{":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}},href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY-NC-SA 4.0"),C("span",{css:{marginLeft:"0.5rem","--tw-text-opacity":"1",color:"rgb(203 213 225 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(241 245 249 / var(--tw-text-opacity))"}}},"2023-present © Agus Pujianto")))))}function ps(){return ps=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ps.apply(null,arguments)}const v1=r=>C("svg",ps({viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"}),C("path",{fill:"currentColor",d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z"}));function ms(){return ms=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ms.apply(null,arguments)}const w1=r=>C("svg",ms({viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"}));function gs(){return gs=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},gs.apply(null,arguments)}const k1=r=>C("svg",gs({viewBox:"0 0 16 16",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"}));function hs(){return hs=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},hs.apply(null,arguments)}const x1=r=>C("svg",hs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414L24 12zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757L2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"}));function ys(){return ys=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ys.apply(null,arguments)}const S1=r=>C("svg",ys({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M2.8 14h2.04l-.545 2.725l5.744 2.154l7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15l-9 3l-8-3z"}));function bs(){return bs=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},bs.apply(null,arguments)}const C1=r=>C("svg",bs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4H5.188z"}));function vs(){return vs=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},vs.apply(null,arguments)}const E1=r=>C("svg",vs({viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},r),C("path",{fill:"currentColor",d:"M3.316 3L12 18l8.684-15H23L12 22L1 3h2.316zm4.342 0L12 10.5L16.342 3h2.316L12 14.5L5.342 3h2.316z"}));function ws(){return ws=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ws.apply(null,arguments)}const O1=r=>C("svg",ws({viewBox:"0 0 15 15",width:"1.2em",height:"1.2em"},r),C("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5V.5Z"}));function ks(){return ks=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},ks.apply(null,arguments)}const P1=r=>C("svg",ks({viewBox:"0 0 15 15",width:"1.2em",height:"1.2em"},r),C("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5Z"}));function xs(){return xs=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var a=arguments[i];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},xs.apply(null,arguments)}const z1=r=>C("svg",xs({viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r),C("path",{fill:"#368832",d:"M19.792 7.071h2.553v2.553H24.9V7.071h2.552v2.553H30v2.552h-2.55v2.551H30v2.553h-2.551v2.552H24.9v-2.55h-2.55v2.552h-2.557v-2.55H17.24v-2.559h2.553v-2.546H17.24V9.622h2.554Zm2.553 7.658H24.9v-2.553h-2.555Zm-7.656 9.284a10.2 10.2 0 0 1-4.653.915a7.6 7.6 0 0 1-5.89-2.336A8.839 8.839 0 0 1 2 16.367a9.436 9.436 0 0 1 2.412-6.719a8.181 8.181 0 0 1 6.259-2.577a11.1 11.1 0 0 1 4.018.638v3.745a6.81 6.81 0 0 0-3.723-1.036a4.793 4.793 0 0 0-3.7 1.529a5.879 5.879 0 0 0-1.407 4.142a5.774 5.774 0 0 0 1.328 3.992a4.551 4.551 0 0 0 3.575 1.487a7.288 7.288 0 0 0 3.927-1.108Z"})),L1=q.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),N1=q.div`
  ${{position:"absolute",top:"0.75rem",left:"0.75rem",display:"flex",height:"2.25rem",width:"2.25rem",alignItems:"center",justifyContent:"center",overflow:"hidden",borderRadius:"0.375rem",fontWeight:"700"}}

  &::before {
    ${{position:"absolute",top:"0px",left:"0px",display:"block",height:"100%",width:"100%",opacity:"0.2",content:"''"}}
    background-color: currentColor;
  }
`,_1=q.a({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),T1=q.div`
  ${{marginTop:"0.5rem",overflow:"hidden",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}}

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,F1=q.ul({marginTop:"0.5rem",display:"flex",minWidth:"0px","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.75rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),Kl=q.li({display:"flex",alignItems:"center"}),Kf={default:{component:x1,color:""},TypeScript:{component:P1,color:"#3178C6"},JavaScript:{component:O1,color:"#FCD002"},HTML:{component:C1,color:"#FF3C41"},CSS:{component:S1,color:"#10BDFF"},Vue:{component:E1,color:"#41B883"},"C#":{component:z1,color:"#368833"}};function M1(r){const{project:i}=r,a=Kf[r.project.language]??Kf.default;return C(L1,null,C(N1,{style:{color:a.color}},C(a.component,null)),C(_1,{href:i.htmlUrl},i.fullName),C(T1,null,i.description),C(F1,null,C(Kl,null,C(k1,null),C("span",{css:{marginLeft:"0.5rem"}},i.stargazersCount)),C(Kl,null,C(w1,null),C("span",{css:{marginLeft:"0.5rem"}},i.forksCount)),C(Kl,null,C(v1,null),C("span",{css:{marginLeft:"0.5rem"}},i.openIssuesCount))))}const j1=q.div({height:"1.5rem","@keyframes pulse":{"50%":{opacity:".5"}},animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}});function Ka(r){return r.children??C(j1,r)}const A1=q.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),R1=q(Ka)({position:"absolute",top:"0.75rem",left:"0.75rem",height:"2.25rem",width:"2.25rem",borderRadius:"0.375rem"}),I1=q(Ka)({height:"1.25rem",width:"50%","--tw-text-opacity":"1",color:"rgb(191 219 254 / var(--tw-text-opacity))"}),D1=q(Ka)({marginTop:"0.5rem",width:"66.666667%"}),$1=q.div({marginTop:"0.5rem",display:"flex"}),B1=q(Ka)({marginRight:"1rem",height:"1.25rem",width:"2.5rem"});function H1(){return C(A1,null,C(R1,null),C(I1,null),C(D1,null),C($1,null,Array.from({length:3}).map((r,i)=>C(B1,{key:i}))))}function U1(r,i=!1){const[a,o]=D.useState(i);return[a,async(...u)=>{o(!0);try{return await r(...u)}finally{o(!1)}}]}class Ds{constructor(i,a,o,u){this.id=i,this.login=a,this.avatarUrl=o,this.htmlUrl=u}static from(i){return new Ds(i.id,i.login,i.avatar_url,i.html_url)}}class $s{constructor(i,a,o,u,d,f,p,g,y,v,x,_,R,M,O){this.id=i,this.owner=a,this.fullName=o,this.name=u,this.htmlUrl=d,this.description=f,this.language=p,this.forksCount=g,this.stargazersCount=y,this.openIssuesCount=v,this.archived=x,this.disabled=_,this.pushedAt=R,this.createdAt=M,this.updatedAt=O}static from(i){return new $s(i.id,Ds.from(i.owner),i.full_name,i.name,i.html_url,i.description,i.language,i.forks_count,i.stargazers_count,i.open_issues_count,i.archived,i.disabled,i.pushed_at,i.created_at,i.updated_at)}}var Mp=(r=>(r.Asc="asc",r.Desc="desc",r))(Mp||{}),jp=(r=>(r.Created="created",r.Updated="updated",r.Pushed="pushed",r.FullName="full_name",r))(jp||{}),Ap=(r=>(r.All="all",r.Owner="owner",r.Member="member",r))(Ap||{});function V1(r){const i=new URLSearchParams;return Object.keys(r).forEach(a=>{r[a]&&i.append(a,String(r[a]))}),`?${i.toString()}`}function W1(r){return["POST","PUT","PATCH"].includes(r)}class K1{constructor(i,a,o){this.token=i,this.owner=a,this.repo=o}apiBase="https://api.github.com";async request(i,a,o){let u="",d=o;return o&&!W1(i)&&(u=V1(o),d=void 0),(await fetch([this.apiBase,a,u].join(""),{method:i,headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/vnd.github.v3+json",Authorization:`token ${this.token}`},body:d?JSON.stringify(d):void 0})).json()}async listMilestones(i={}){const{state:a,sort:o,direction:u,page:d,pageSize:f}=i,p={state:a,sort:o,direction:u,page:d,per_page:f};return this.request("GET",`/repos/${this.owner}/${this.repo}/milestones`,p)}async listIssues(i){const{milestone:a,labels:o,state:u,sort:d,direction:f,page:p,pageSize:g}=i,y={milestone:a,labels:o,state:u,sort:d,direction:f,page:p,per_page:g,creator:this.owner};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues`,y)}getIssue(i){return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${i}`)}listComments(i){const{issue:a,sort:o,direction:u,page:d,pageSize:f}=i,p={sort:o,direction:u,page:d,per_page:f};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${a}/comments`,p)}listRepositories(i){const{type:a,sort:o,direction:u,page:d,pageSize:f}=i,p={type:a,sort:o,direction:u,page:d,per_page:f};return this.request("GET",`/users/${this.owner}/repos`,p)}}const q1=new K1("FAKE_TOKEN_PART1FAKE_TOKEN_PART2","FAKE_USER","FAKE_REPO"),X1=q.main({marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:"1024px",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"3rem",paddingBottom:"3rem"}),Y1=q.h2({fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgb(51 65 85 / var(--tw-text-opacity))"}),qf=q.div({marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"0.5rem","@media (min-width: 1024px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}});function Q1(){const{t:r}=Es(),[i,a]=D.useState([]),[o,u]=U1(D.useCallback(async()=>{const d=await q1.listRepositories({type:Ap.All,sort:jp.Pushed,direction:Mp.Desc,page:1,pageSize:50});a(d.map($s.from).filter(f=>f.stargazersCount>0&&!f.archived&&!f.disabled).sort((f,p)=>p.stargazersCount-f.stargazersCount))},[]),!0);return D.useEffect(()=>{u()},[]),C(X1,null,C(Y1,null,r("projects.title")),o&&C(qf,null,Array.from({length:10}).map((d,f)=>C(H1,{key:f}))),!!i.length&&C(qf,null,i.map(d=>C(M1,{key:d.id,project:d}))))}function J1(){return C(Ay,null,C(_y,null,C(Dt,{path:"/",element:C(b1,null)},C(Dt,{path:"",element:C(U0,null)}),C(Dt,{path:"EA",element:C(Zl,null)},C(Dt,{path:"",element:C(e0,null)}),C(Dt,{path:":id",element:C(c0,null)})),C(Dt,{path:"indicator",element:C(Zl,null)},C(Dt,{path:"",element:C(C0,null)}),C(Dt,{path:":id",element:C(M0,null)})),C(Dt,{path:"projects",element:C(Q1,null)}))))}const Z1=()=>C(Ep,{styles:Op`*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}
::before, ::after {
  --tw-content: '';
}
html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-feature-settings:  normal;
}
body {
  margin: 0;
  line-height: inherit;
}
hr {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
abbr:where([title]) {
  text-decoration: underline dotted;
}
h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit;
}
a {
  color: inherit;
  text-decoration: inherit;
}
b, strong {
  font-weight: bolder;
}
code, kbd, samp, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 1em;
}
small {
  font-size: 80%;
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  color: inherit;
  margin: 0;
  padding: 0;
}
button, select {
  text-transform: none;
}
button, [type='button'], [type='reset'], [type='submit'] {
  -webkit-appearance: button;
  background-color: transparent;
  background-image: none;
}
:-moz-focusring {
  outline: auto;
}
:-moz-ui-invalid {
  box-shadow: none;
}
progress {
  vertical-align: baseline;
}
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
  height: auto;
}
[type='search'] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
summary {
  display: list-item;
}
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol, ul, menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
textarea {
  resize: vertical;
}
input::placeholder, textarea::placeholder {
  opacity: 1;
  color: #9ca3af;
}
button, [role="button"] {
  cursor: pointer;
}
:disabled {
  cursor: default;
}
img, svg, video, canvas, audio, iframe, embed, object {
  display: block;
  vertical-align: middle;
}
img, video {
  max-width: 100%;
  height: auto;
}
[hidden] {
  display: none;
}
::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: var(--tw-empty,/*!*/ /*!*/);
  --tw-pan-y: var(--tw-empty,/*!*/ /*!*/);
  --tw-pinch-zoom: var(--tw-empty,/*!*/ /*!*/);
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal: var(--tw-empty,/*!*/ /*!*/);
  --tw-slashed-zero: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-figure: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-spacing: var(--tw-empty,/*!*/ /*!*/);
  --tw-numeric-fraction: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-sepia: var(--tw-empty,/*!*/ /*!*/);
  --tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
  --tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
}`}),G1=Op`
  @import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@5.2/distr/fira_code.css);

  body {
    font-family: 'Fira Code VF', 'Segoe UI', 'Consolas', 'monospace', 'Microsoft YaHei';
    font-variant-ligatures: normal;
    background-size: 32px 32px;
    background-image: radial-gradient(rgba(59, 130, 246, 0.2) 1px, rgba(59, 130, 246, 0) 0px);
    ${{overflowY:"scroll",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}
    ${{"--tw-bg-opacity":"1",backgroundColor:"rgb(248 250 252 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(15 23 42 / var(--tw-text-opacity))"}}
    ${{".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(0 0 0 / var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}}}
  }

  *::-webkit-scrollbar {
    ${{height:"0.5rem",width:"0.5rem"}}
  }

  *::-webkit-scrollbar-thumb {
    ${{"--tw-bg-opacity":"1",backgroundColor:"rgb(226 232 240 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(51 65 85 / var(--tw-bg-opacity))"}}}
  }
`;function ev(){return C(Cs.Fragment,null,C(Z1,null),C(Ep,{styles:G1}))}document.title="Agus Pujianto";const tv=document.getElementById("root"),nv=Wh.createRoot(tv);nv.render(C(Cs.Fragment,null,C(ev,null),C(J1,null)));
