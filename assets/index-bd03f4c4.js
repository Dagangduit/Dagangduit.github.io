var pm=Object.defineProperty;var mm=(e,n,t)=>n in e?pm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var un=(e,n,t)=>(mm(e,typeof n!="symbol"?n+"":n,t),t);function hm(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function tn(e){return tn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},tn(e)}function xn(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function gm(e,n){if(tn(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(tn(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function md(e){var n=gm(e,"string");return tn(n)==="symbol"?n:String(n)}function su(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,md(r.key),r)}}function Sn(e,n,t){return n&&su(e.prototype,n),t&&su(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Wn(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Da(e,n){return Da=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Da(e,n)}function Oi(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Da(e,n)}function ro(e,n){if(n&&(tn(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wn(e)}function bn(e){return bn=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},bn(e)}function rt(e,n,t){return n=md(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ym(e){if(Array.isArray(e))return e}function vm(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uu(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function wm(e,n){if(e){if(typeof e=="string")return uu(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return uu(e,n)}}function km(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bm(e){return ym(e)||vm(e)||wm(e)||km()}function cu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function du(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?cu(Object(t),!0).forEach(function(r){rt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):cu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var xm={type:"logger",log:function(n){this.output("log",n)},warn:function(n){this.output("warn",n)},error:function(n){this.output("error",n)},output:function(n,t){console&&console[n]&&console[n].apply(console,t)}},Sm=function(){function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xn(this,e),this.init(n,t)}return Sn(e,[{key:"init",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=t||xm,this.options=r,this.debug=r.debug}},{key:"setDebug",value:function(t){this.debug=t}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.forward(r,"error","")}},{key:"deprecate",value:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}},{key:"forward",value:function(t,r,o,i){return i&&!this.debug?null:(typeof t[0]=="string"&&(t[0]="".concat(o).concat(this.prefix," ").concat(t[0])),this.logger[r](t))}},{key:"create",value:function(t){return new e(this.logger,du(du({},{prefix:"".concat(this.prefix,":").concat(t,":")}),this.options))}},{key:"clone",value:function(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}}]),e}(),yn=new Sm,et=function(){function e(){xn(this,e),this.observers={}}return Sn(e,[{key:"on",value:function(t,r){var o=this;return t.split(" ").forEach(function(i){o.observers[i]=o.observers[i]||[],o.observers[i].push(r)}),this}},{key:"off",value:function(t,r){if(this.observers[t]){if(!r){delete this.observers[t];return}this.observers[t]=this.observers[t].filter(function(o){return o!==r})}}},{key:"emit",value:function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];if(this.observers[t]){var a=[].concat(this.observers[t]);a.forEach(function(s){s.apply(void 0,o)})}if(this.observers["*"]){var l=[].concat(this.observers["*"]);l.forEach(function(s){s.apply(s,[t].concat(o))})}}}]),e}();function fr(){var e,n,t=new Promise(function(r,o){e=r,n=o});return t.resolve=e,t.reject=n,t}function fu(e){return e==null?"":""+e}function Cm(e,n,t){e.forEach(function(r){n[r]&&(t[r]=n[r])})}function Kl(e,n,t){function r(l){return l&&l.indexOf("###")>-1?l.replace(/###/g,"."):l}function o(){return!e||typeof e=="string"}for(var i=typeof n!="string"?[].concat(n):n.split(".");i.length>1;){if(o())return{};var a=r(i.shift());!e[a]&&t&&(e[a]=new t),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={}}return o()?{}:{obj:e,k:r(i.shift())}}function pu(e,n,t){var r=Kl(e,n,Object),o=r.obj,i=r.k;o[i]=t}function Em(e,n,t,r){var o=Kl(e,n,Object),i=o.obj,a=o.k;i[a]=i[a]||[],r&&(i[a]=i[a].concat(t)),r||i[a].push(t)}function Jo(e,n){var t=Kl(e,n),r=t.obj,o=t.k;if(r)return r[o]}function mu(e,n,t){var r=Jo(e,t);return r!==void 0?r:Jo(n,t)}function hd(e,n,t){for(var r in n)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof n[r]=="string"||n[r]instanceof String?t&&(e[r]=n[r]):hd(e[r],n[r],t):e[r]=n[r]);return e}function Ot(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Pm={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Om(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,function(n){return Pm[n]}):e}var Li=typeof window<"u"&&window.navigator&&typeof window.navigator.userAgentData>"u"&&window.navigator.userAgent&&window.navigator.userAgent.indexOf("MSIE")>-1,Lm=[" ",",","?","!",";"];function zm(e,n,t){n=n||"",t=t||"";var r=Lm.filter(function(l){return n.indexOf(l)<0&&t.indexOf(l)<0});if(r.length===0)return!0;var o=new RegExp("(".concat(r.map(function(l){return l==="?"?"\\?":l}).join("|"),")")),i=!o.test(e);if(!i){var a=e.indexOf(t);a>0&&!o.test(e.substring(0,a))&&(i=!0)}return i}function hu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function mo(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?hu(Object(t),!0).forEach(function(r){rt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):hu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Rm(e){var n=_m();return function(){var r=bn(e),o;if(n){var i=bn(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function _m(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function gd(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(e){if(e[n])return e[n];for(var r=n.split(t),o=e,i=0;i<r.length;++i){if(!o||typeof o[r[i]]=="string"&&i+1<r.length)return;if(o[r[i]]===void 0){for(var a=2,l=r.slice(i,i+a).join(t),s=o[l];s===void 0&&r.length>i+a;)a++,l=r.slice(i,i+a).join(t),s=o[l];if(s===void 0)return;if(s===null)return null;if(n.endsWith(l)){if(typeof s=="string")return s;if(l&&typeof s[l]=="string")return s[l]}var c=r.slice(i+a).join(t);return c?gd(s,c,t):void 0}o=o[r[i]]}return o}}var Nm=function(e){Oi(t,e);var n=Rm(t);function t(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};return xn(this,t),o=n.call(this),Li&&et.call(Wn(o)),o.data=r||{},o.options=i,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.options.ignoreJSONStructure===void 0&&(o.options.ignoreJSONStructure=!0),o}return Sn(t,[{key:"addNamespaces",value:function(o){this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}},{key:"removeNamespaces",value:function(o){var i=this.options.ns.indexOf(o);i>-1&&this.options.ns.splice(i,1)}},{key:"getResource",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,c=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure,m=[o,i];a&&typeof a!="string"&&(m=m.concat(a)),a&&typeof a=="string"&&(m=m.concat(s?a.split(s):a)),o.indexOf(".")>-1&&(m=o.split("."));var p=Jo(this.data,m);return p||!c||typeof a!="string"?p:gd(this.data&&this.data[o]&&this.data[o][i],a,s)}},{key:"addResource",value:function(o,i,a,l){var s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1},c=this.options.keySeparator;c===void 0&&(c=".");var m=[o,i];a&&(m=m.concat(c?a.split(c):a)),o.indexOf(".")>-1&&(m=o.split("."),l=i,i=m[1]),this.addNamespaces(i),pu(this.data,m,l),s.silent||this.emit("added",o,i,a,l)}},{key:"addResources",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(var s in a)(typeof a[s]=="string"||Object.prototype.toString.apply(a[s])==="[object Array]")&&this.addResource(o,i,s,a[s],{silent:!0});l.silent||this.emit("added",o,i,a)}},{key:"addResourceBundle",value:function(o,i,a,l,s){var c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},m=[o,i];o.indexOf(".")>-1&&(m=o.split("."),l=a,a=i,i=m[1]),this.addNamespaces(i);var p=Jo(this.data,m)||{};l?hd(p,a,s):p=mo(mo({},p),a),pu(this.data,m,p),c.silent||this.emit("added",o,i,a)}},{key:"removeResourceBundle",value:function(o,i){this.hasResourceBundle(o,i)&&delete this.data[o][i],this.removeNamespaces(i),this.emit("removed",o,i)}},{key:"hasResourceBundle",value:function(o,i){return this.getResource(o,i)!==void 0}},{key:"getResourceBundle",value:function(o,i){return i||(i=this.options.defaultNS),this.options.compatibilityAPI==="v1"?mo(mo({},{}),this.getResource(o,i)):this.getResource(o,i)}},{key:"getDataByLanguage",value:function(o){return this.data[o]}},{key:"hasLanguageSomeTranslations",value:function(o){var i=this.getDataByLanguage(o),a=i&&Object.keys(i)||[];return!!a.find(function(l){return i[l]&&Object.keys(i[l]).length>0})}},{key:"toJSON",value:function(){return this.data}}]),t}(et),yd={processors:{},addPostProcessor:function(n){this.processors[n.name]=n},handle:function(n,t,r,o,i){var a=this;return n.forEach(function(l){a.processors[l]&&(t=a.processors[l].process(t,r,o,i))}),t}};function gu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function be(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?gu(Object(t),!0).forEach(function(r){rt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):gu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Tm(e){var n=Fm();return function(){var r=bn(e),o;if(n){var i=bn(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function Fm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}var yu={},vu=function(e){Oi(t,e);var n=Tm(t);function t(r){var o,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return xn(this,t),o=n.call(this),Li&&et.call(Wn(o)),Cm(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],r,Wn(o)),o.options=i,o.options.keySeparator===void 0&&(o.options.keySeparator="."),o.logger=yn.create("translator"),o}return Sn(t,[{key:"changeLanguage",value:function(o){o&&(this.language=o)}},{key:"exists",value:function(o){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(o==null)return!1;var a=this.resolve(o,i);return a&&a.res!==void 0}},{key:"extractFromKey",value:function(o,i){var a=i.nsSeparator!==void 0?i.nsSeparator:this.options.nsSeparator;a===void 0&&(a=":");var l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,s=i.ns||this.options.defaultNS||[],c=a&&o.indexOf(a)>-1,m=!this.options.userDefinedKeySeparator&&!i.keySeparator&&!this.options.userDefinedNsSeparator&&!i.nsSeparator&&!zm(o,a,l);if(c&&!m){var p=o.match(this.interpolator.nestingRegexp);if(p&&p.length>0)return{key:o,namespaces:s};var h=o.split(a);(a!==l||a===l&&this.options.ns.indexOf(h[0])>-1)&&(s=h.shift()),o=h.join(l)}return typeof s=="string"&&(s=[s]),{key:o,namespaces:s}}},{key:"translate",value:function(o,i,a){var l=this;if(tn(i)!=="object"&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),i||(i={}),o==null)return"";Array.isArray(o)||(o=[String(o)]);var s=i.returnDetails!==void 0?i.returnDetails:this.options.returnDetails,c=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,m=this.extractFromKey(o[o.length-1],i),p=m.key,h=m.namespaces,y=h[h.length-1],w=i.lng||this.language,v=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(w&&w.toLowerCase()==="cimode"){if(v){var x=i.nsSeparator||this.options.nsSeparator;return s?{res:"".concat(y).concat(x).concat(p),usedKey:p,exactUsedKey:p,usedLng:w,usedNS:y}:"".concat(y).concat(x).concat(p)}return s?{res:p,usedKey:p,exactUsedKey:p,usedLng:w,usedNS:y}:p}var f=this.resolve(o,i),u=f&&f.res,d=f&&f.usedKey||p,g=f&&f.exactUsedKey||p,k=Object.prototype.toString.apply(u),b=["[object Number]","[object Function]","[object RegExp]"],C=i.joinArrays!==void 0?i.joinArrays:this.options.joinArrays,P=!this.i18nFormat||this.i18nFormat.handleAsObject,O=typeof u!="string"&&typeof u!="boolean"&&typeof u!="number";if(P&&u&&O&&b.indexOf(k)<0&&!(typeof C=="string"&&k==="[object Array]")){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");var _=this.options.returnedObjectHandler?this.options.returnedObjectHandler(d,u,be(be({},i),{},{ns:h})):"key '".concat(p," (").concat(this.language,")' returned an object instead of string.");return s?(f.res=_,f):_}if(c){var $=k==="[object Array]",re=$?[]:{},ln=$?g:d;for(var Ue in u)if(Object.prototype.hasOwnProperty.call(u,Ue)){var Et="".concat(ln).concat(c).concat(Ue);re[Ue]=this.translate(Et,be(be({},i),{joinArrays:!1,ns:h})),re[Ue]===Et&&(re[Ue]=u[Ue])}u=re}}else if(P&&typeof C=="string"&&k==="[object Array]")u=u.join(C),u&&(u=this.extendTranslation(u,o,i,a));else{var sn=!1,Be=!1,z=i.count!==void 0&&typeof i.count!="string",T=t.hasDefaultValue(i),F=z?this.pluralResolver.getSuffix(w,i.count,i):"",M=i["defaultValue".concat(F)]||i.defaultValue;!this.isValidLookup(u)&&T&&(sn=!0,u=M),this.isValidLookup(u)||(Be=!0,u=p);var D=i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey,jn=D&&Be?void 0:u,Z=T&&M!==u&&this.options.updateMissing;if(Be||sn||Z){if(this.logger.log(Z?"updateKey":"missingKey",w,y,p,Z?M:u),c){var He=this.resolve(p,be(be({},i),{},{keySeparator:!1}));He&&He.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}var le=[],Pe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Pe&&Pe[0])for(var st=0;st<Pe.length;st++)le.push(Pe[st]);else this.options.saveMissingTo==="all"?le=this.languageUtils.toResolveHierarchy(i.lng||this.language):le.push(i.lng||this.language);var cr=function(Je,dr,Pt){var lu=T&&Pt!==u?Pt:jn;l.options.missingKeyHandler?l.options.missingKeyHandler(Je,y,dr,lu,Z,i):l.backendConnector&&l.backendConnector.saveMissing&&l.backendConnector.saveMissing(Je,y,dr,lu,Z,i),l.emit("missingKey",Je,y,dr,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&z?le.forEach(function(ut){l.pluralResolver.getSuffixes(ut,i).forEach(function(Je){cr([ut],p+Je,i["defaultValue".concat(Je)]||M)})}):cr(le,p,M))}u=this.extendTranslation(u,o,i,f,a),Be&&u===p&&this.options.appendNamespaceToMissingKey&&(u="".concat(y,":").concat(p)),(Be||sn)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?u=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?"".concat(y,":").concat(p):p,sn?u:void 0):u=this.options.parseMissingKeyHandler(u))}return s?(f.res=u,f):u}},{key:"extendTranslation",value:function(o,i,a,l,s){var c=this;if(this.i18nFormat&&this.i18nFormat.parse)o=this.i18nFormat.parse(o,be(be({},this.options.interpolation.defaultVariables),a),l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!a.skipInterpolation){a.interpolation&&this.interpolator.init(be(be({},a),{interpolation:be(be({},this.options.interpolation),a.interpolation)}));var m=typeof o=="string"&&(a&&a.interpolation&&a.interpolation.skipOnVariables!==void 0?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables),p;if(m){var h=o.match(this.interpolator.nestingRegexp);p=h&&h.length}var y=a.replace&&typeof a.replace!="string"?a.replace:a;if(this.options.interpolation.defaultVariables&&(y=be(be({},this.options.interpolation.defaultVariables),y)),o=this.interpolator.interpolate(o,y,a.lng||this.language,a),m){var w=o.match(this.interpolator.nestingRegexp),v=w&&w.length;p<v&&(a.nest=!1)}a.nest!==!1&&(o=this.interpolator.nest(o,function(){for(var u=arguments.length,d=new Array(u),g=0;g<u;g++)d[g]=arguments[g];return s&&s[0]===d[0]&&!a.context?(c.logger.warn("It seems you are nesting recursively key: ".concat(d[0]," in key: ").concat(i[0])),null):c.translate.apply(c,d.concat([i]))},a)),a.interpolation&&this.interpolator.reset()}var x=a.postProcess||this.options.postProcess,f=typeof x=="string"?[x]:x;return o!=null&&f&&f.length&&a.applyPostProcessor!==!1&&(o=yd.handle(f,o,i,this.options&&this.options.postProcessPassResolved?be({i18nResolved:l},a):a,this)),o}},{key:"resolve",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l,s,c,m,p;return typeof o=="string"&&(o=[o]),o.forEach(function(h){if(!i.isValidLookup(l)){var y=i.extractFromKey(h,a),w=y.key;s=w;var v=y.namespaces;i.options.fallbackNS&&(v=v.concat(i.options.fallbackNS));var x=a.count!==void 0&&typeof a.count!="string",f=x&&!a.ordinal&&a.count===0&&i.pluralResolver.shouldUseIntlApi(),u=a.context!==void 0&&(typeof a.context=="string"||typeof a.context=="number")&&a.context!=="",d=a.lngs?a.lngs:i.languageUtils.toResolveHierarchy(a.lng||i.language,a.fallbackLng);v.forEach(function(g){i.isValidLookup(l)||(p=g,!yu["".concat(d[0],"-").concat(g)]&&i.utils&&i.utils.hasLoadedNamespace&&!i.utils.hasLoadedNamespace(p)&&(yu["".concat(d[0],"-").concat(g)]=!0,i.logger.warn('key "'.concat(s,'" for languages "').concat(d.join(", "),`" won't get resolved as namespace "`).concat(p,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),d.forEach(function(k){if(!i.isValidLookup(l)){m=k;var b=[w];if(i.i18nFormat&&i.i18nFormat.addLookupKeys)i.i18nFormat.addLookupKeys(b,w,k,g,a);else{var C;x&&(C=i.pluralResolver.getSuffix(k,a.count,a));var P="".concat(i.options.pluralSeparator,"zero");if(x&&(b.push(w+C),f&&b.push(w+P)),u){var O="".concat(w).concat(i.options.contextSeparator).concat(a.context);b.push(O),x&&(b.push(O+C),f&&b.push(O+P))}}for(var _;_=b.pop();)i.isValidLookup(l)||(c=_,l=i.getResource(k,g,_,a))}}))})}}),{res:l,usedKey:s,exactUsedKey:c,usedLng:m,usedNS:p}}},{key:"isValidLookup",value:function(o){return o!==void 0&&!(!this.options.returnNull&&o===null)&&!(!this.options.returnEmptyString&&o==="")}},{key:"getResource",value:function(o,i,a){var l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(o,i,a,l):this.resourceStore.getResource(o,i,a,l)}}],[{key:"hasDefaultValue",value:function(o){var i="defaultValue";for(var a in o)if(Object.prototype.hasOwnProperty.call(o,a)&&i===a.substring(0,i.length)&&o[a]!==void 0)return!0;return!1}}]),t}(et);function la(e){return e.charAt(0).toUpperCase()+e.slice(1)}var wu=function(){function e(n){xn(this,e),this.options=n,this.supportedLngs=this.options.supportedLngs||!1,this.logger=yn.create("languageUtils")}return Sn(e,[{key:"getScriptPartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return null;var r=t.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}},{key:"getLanguagePartFromCode",value:function(t){if(!t||t.indexOf("-")<0)return t;var r=t.split("-");return this.formatLanguageCode(r[0])}},{key:"formatLanguageCode",value:function(t){if(typeof t=="string"&&t.indexOf("-")>-1){var r=["hans","hant","latn","cyrl","cans","mong","arab"],o=t.split("-");return this.options.lowerCaseLng?o=o.map(function(i){return i.toLowerCase()}):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=la(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=la(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=la(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}},{key:"isSupportedCode",value:function(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}},{key:"getBestMatchFromCodes",value:function(t){var r=this;if(!t)return null;var o;return t.forEach(function(i){if(!o){var a=r.formatLanguageCode(i);(!r.options.supportedLngs||r.isSupportedCode(a))&&(o=a)}}),!o&&this.options.supportedLngs&&t.forEach(function(i){if(!o){var a=r.getLanguagePartFromCode(i);if(r.isSupportedCode(a))return o=a;o=r.options.supportedLngs.find(function(l){if(l.indexOf(a)===0)return l})}}),o||(o=this.getFallbackCodes(this.options.fallbackLng)[0]),o}},{key:"getFallbackCodes",value:function(t,r){if(!t)return[];if(typeof t=="function"&&(t=t(r)),typeof t=="string"&&(t=[t]),Object.prototype.toString.apply(t)==="[object Array]")return t;if(!r)return t.default||[];var o=t[r];return o||(o=t[this.getScriptPartFromCode(r)]),o||(o=t[this.formatLanguageCode(r)]),o||(o=t[this.getLanguagePartFromCode(r)]),o||(o=t.default),o||[]}},{key:"toResolveHierarchy",value:function(t,r){var o=this,i=this.getFallbackCodes(r||this.options.fallbackLng||[],t),a=[],l=function(c){c&&(o.isSupportedCode(c)?a.push(c):o.logger.warn("rejecting language code not found in supportedLngs: ".concat(c)))};return typeof t=="string"&&t.indexOf("-")>-1?(this.options.load!=="languageOnly"&&l(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&l(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&l(this.getLanguagePartFromCode(t))):typeof t=="string"&&l(this.formatLanguageCode(t)),i.forEach(function(s){a.indexOf(s)<0&&l(o.formatLanguageCode(s))}),a}}]),e}(),jm=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Am={1:function(n){return Number(n>1)},2:function(n){return Number(n!=1)},3:function(n){return 0},4:function(n){return Number(n%10==1&&n%100!=11?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2)},5:function(n){return Number(n==0?0:n==1?1:n==2?2:n%100>=3&&n%100<=10?3:n%100>=11?4:5)},6:function(n){return Number(n==1?0:n>=2&&n<=4?1:2)},7:function(n){return Number(n==1?0:n%10>=2&&n%10<=4&&(n%100<10||n%100>=20)?1:2)},8:function(n){return Number(n==1?0:n==2?1:n!=8&&n!=11?2:3)},9:function(n){return Number(n>=2)},10:function(n){return Number(n==1?0:n==2?1:n<7?2:n<11?3:4)},11:function(n){return Number(n==1||n==11?0:n==2||n==12?1:n>2&&n<20?2:3)},12:function(n){return Number(n%10!=1||n%100==11)},13:function(n){return Number(n!==0)},14:function(n){return Number(n==1?0:n==2?1:n==3?2:3)},15:function(n){return Number(n%10==1&&n%100!=11?0:n%10>=2&&(n%100<10||n%100>=20)?1:2)},16:function(n){return Number(n%10==1&&n%100!=11?0:n!==0?1:2)},17:function(n){return Number(n==1||n%10==1&&n%100!=11?0:1)},18:function(n){return Number(n==0?0:n==1?1:2)},19:function(n){return Number(n==1?0:n==0||n%100>1&&n%100<11?1:n%100>10&&n%100<20?2:3)},20:function(n){return Number(n==1?0:n==0||n%100>0&&n%100<20?1:2)},21:function(n){return Number(n%100==1?1:n%100==2?2:n%100==3||n%100==4?3:0)},22:function(n){return Number(n==1?0:n==2?1:(n<0||n>10)&&n%10==0?2:3)}},$m=["v1","v2","v3"],ku={zero:0,one:1,two:2,few:3,many:4,other:5};function Im(){var e={};return jm.forEach(function(n){n.lngs.forEach(function(t){e[t]={numbers:n.nr,plurals:Am[n.fc]}})}),e}var Mm=function(){function e(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};xn(this,e),this.languageUtils=n,this.options=t,this.logger=yn.create("pluralResolver"),(!this.options.compatibilityJSON||this.options.compatibilityJSON==="v4")&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Im()}return Sn(e,[{key:"addRule",value:function(t,r){this.rules[t]=r}},{key:"getRule",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(t,{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}},{key:"needsPlural",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=this.getRule(t,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}},{key:"getPluralFormsOfKey",value:function(t,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,o).map(function(i){return"".concat(r).concat(i)})}},{key:"getSuffixes",value:function(t){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=this.getRule(t,o);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort(function(a,l){return ku[a]-ku[l]}).map(function(a){return"".concat(r.options.prepend).concat(a)}):i.numbers.map(function(a){return r.getSuffix(t,a,o)}):[]}},{key:"getSuffix",value:function(t,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.getRule(t,o);return i?this.shouldUseIntlApi()?"".concat(this.options.prepend).concat(i.select(r)):this.getSuffixRetroCompatible(i,r):(this.logger.warn("no plural rule found for: ".concat(t)),"")}},{key:"getSuffixRetroCompatible",value:function(t,r){var o=this,i=t.noAbs?t.plurals(r):t.plurals(Math.abs(r)),a=t.numbers[i];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(a===2?a="plural":a===1&&(a=""));var l=function(){return o.options.prepend&&a.toString()?o.options.prepend+a.toString():a.toString()};return this.options.compatibilityJSON==="v1"?a===1?"":typeof a=="number"?"_plural_".concat(a.toString()):l():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?l():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}},{key:"shouldUseIntlApi",value:function(){return!$m.includes(this.options.compatibilityJSON)}}]),e}();function bu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Xe(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?bu(Object(t),!0).forEach(function(r){rt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):bu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Dm=function(){function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xn(this,e),this.logger=yn.create("interpolator"),this.options=n,this.format=n.interpolation&&n.interpolation.format||function(t){return t},this.init(n)}return Sn(e,[{key:"init",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});var r=t.interpolation;this.escape=r.escape!==void 0?r.escape:Om,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Ot(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Ot(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Ot(r.nestingPrefix):r.nestingPrefixEscaped||Ot("$t("),this.nestingSuffix=r.nestingSuffix?Ot(r.nestingSuffix):r.nestingSuffixEscaped||Ot(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}},{key:"reset",value:function(){this.options&&this.init(this.options)}},{key:"resetRegExp",value:function(){var t="".concat(this.prefix,"(.+?)").concat(this.suffix);this.regexp=new RegExp(t,"g");var r="".concat(this.prefix).concat(this.unescapePrefix,"(.+?)").concat(this.unescapeSuffix).concat(this.suffix);this.regexpUnescape=new RegExp(r,"g");var o="".concat(this.nestingPrefix,"(.+?)").concat(this.nestingSuffix);this.nestingRegexp=new RegExp(o,"g")}},{key:"interpolate",value:function(t,r,o,i){var a=this,l,s,c,m=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function p(x){return x.replace(/\$/g,"$$$$")}var h=function(f){if(f.indexOf(a.formatSeparator)<0){var u=mu(r,m,f);return a.alwaysFormat?a.format(u,void 0,o,Xe(Xe(Xe({},i),r),{},{interpolationkey:f})):u}var d=f.split(a.formatSeparator),g=d.shift().trim(),k=d.join(a.formatSeparator).trim();return a.format(mu(r,m,g),k,o,Xe(Xe(Xe({},i),r),{},{interpolationkey:g}))};this.resetRegExp();var y=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,w=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables,v=[{regex:this.regexpUnescape,safeValue:function(f){return p(f)}},{regex:this.regexp,safeValue:function(f){return a.escapeValue?p(a.escape(f)):p(f)}}];return v.forEach(function(x){for(c=0;l=x.regex.exec(t);){var f=l[1].trim();if(s=h(f),s===void 0)if(typeof y=="function"){var u=y(t,l,i);s=typeof u=="string"?u:""}else if(i&&Object.prototype.hasOwnProperty.call(i,f))s="";else if(w){s=l[0];continue}else a.logger.warn("missed to pass in variable ".concat(f," for interpolating ").concat(t)),s="";else typeof s!="string"&&!a.useRawValueToEscape&&(s=fu(s));var d=x.safeValue(s);if(t=t.replace(l[0],d),w?(x.regex.lastIndex+=s.length,x.regex.lastIndex-=l[0].length):x.regex.lastIndex=0,c++,c>=a.maxReplaces)break}}),t}},{key:"nest",value:function(t,r){var o=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a,l,s;function c(y,w){var v=this.nestingOptionsSeparator;if(y.indexOf(v)<0)return y;var x=y.split(new RegExp("".concat(v,"[ ]*{"))),f="{".concat(x[1]);y=x[0],f=this.interpolate(f,s);var u=f.match(/'/g),d=f.match(/"/g);(u&&u.length%2===0&&!d||d.length%2!==0)&&(f=f.replace(/'/g,'"'));try{s=JSON.parse(f),w&&(s=Xe(Xe({},w),s))}catch(g){return this.logger.warn("failed parsing options string in nesting for key ".concat(y),g),"".concat(y).concat(v).concat(f)}return delete s.defaultValue,y}for(;a=this.nestingRegexp.exec(t);){var m=[];s=Xe({},i),s=s.replace&&typeof s.replace!="string"?s.replace:s,s.applyPostProcessor=!1,delete s.defaultValue;var p=!1;if(a[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(a[1])){var h=a[1].split(this.formatSeparator).map(function(y){return y.trim()});a[1]=h.shift(),m=h,p=!0}if(l=r(c.call(this,a[1].trim(),s),s),l&&a[0]===t&&typeof l!="string")return l;typeof l!="string"&&(l=fu(l)),l||(this.logger.warn("missed to resolve ".concat(a[1]," for nesting ").concat(t)),l=""),p&&(l=m.reduce(function(y,w){return o.format(y,w,i.lng,Xe(Xe({},i),{},{interpolationkey:a[1].trim()}))},l.trim())),t=t.replace(a[0],l),this.regexp.lastIndex=0}return t}}]),e}();function xu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Cn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?xu(Object(t),!0).forEach(function(r){rt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Um(e){var n=e.toLowerCase().trim(),t={};if(e.indexOf("(")>-1){var r=e.split("(");n=r[0].toLowerCase().trim();var o=r[1].substring(0,r[1].length-1);if(n==="currency"&&o.indexOf(":")<0)t.currency||(t.currency=o.trim());else if(n==="relativetime"&&o.indexOf(":")<0)t.range||(t.range=o.trim());else{var i=o.split(";");i.forEach(function(a){if(a){var l=a.split(":"),s=bm(l),c=s[0],m=s.slice(1),p=m.join(":").trim().replace(/^'+|'+$/g,"");t[c.trim()]||(t[c.trim()]=p),p==="false"&&(t[c.trim()]=!1),p==="true"&&(t[c.trim()]=!0),isNaN(p)||(t[c.trim()]=parseInt(p,10))}})}}return{formatName:n,formatOptions:t}}function Lt(e){var n={};return function(r,o,i){var a=o+JSON.stringify(i),l=n[a];return l||(l=e(o,i),n[a]=l),l(r)}}var Bm=function(){function e(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xn(this,e),this.logger=yn.create("formatter"),this.options=n,this.formats={number:Lt(function(t,r){var o=new Intl.NumberFormat(t,Cn({},r));return function(i){return o.format(i)}}),currency:Lt(function(t,r){var o=new Intl.NumberFormat(t,Cn(Cn({},r),{},{style:"currency"}));return function(i){return o.format(i)}}),datetime:Lt(function(t,r){var o=new Intl.DateTimeFormat(t,Cn({},r));return function(i){return o.format(i)}}),relativetime:Lt(function(t,r){var o=new Intl.RelativeTimeFormat(t,Cn({},r));return function(i){return o.format(i,r.range||"day")}}),list:Lt(function(t,r){var o=new Intl.ListFormat(t,Cn({},r));return function(i){return o.format(i)}})},this.init(n)}return Sn(e,[{key:"init",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}},o=r.interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}},{key:"add",value:function(t,r){this.formats[t.toLowerCase().trim()]=r}},{key:"addCached",value:function(t,r){this.formats[t.toLowerCase().trim()]=Lt(r)}},{key:"format",value:function(t,r,o){var i=this,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=r.split(this.formatSeparator),s=l.reduce(function(c,m){var p=Um(m),h=p.formatName,y=p.formatOptions;if(i.formats[h]){var w=c;try{var v=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},x=v.locale||v.lng||a.locale||a.lng||o;w=i.formats[h](c,x,Cn(Cn(Cn({},y),a),v))}catch(f){i.logger.warn(f)}return w}else i.logger.warn("there was no format function for ".concat(h));return c},t);return s}}]),e}();function Su(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Cu(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Su(Object(t),!0).forEach(function(r){rt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Su(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Hm(e){var n=Wm();return function(){var r=bn(e),o;if(n){var i=bn(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function Wm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Vm(e,n){e.pending[n]!==void 0&&(delete e.pending[n],e.pendingCount--)}var Km=function(e){Oi(t,e);var n=Hm(t);function t(r,o,i){var a,l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return xn(this,t),a=n.call(this),Li&&et.call(Wn(a)),a.backend=r,a.store=o,a.services=i,a.languageUtils=i.languageUtils,a.options=l,a.logger=yn.create("backendConnector"),a.waitingReads=[],a.maxParallelReads=l.maxParallelReads||10,a.readingCalls=0,a.maxRetries=l.maxRetries>=0?l.maxRetries:5,a.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,a.state={},a.queue=[],a.backend&&a.backend.init&&a.backend.init(i,l.backend,l),a}return Sn(t,[{key:"queueLoad",value:function(o,i,a,l){var s=this,c={},m={},p={},h={};return o.forEach(function(y){var w=!0;i.forEach(function(v){var x="".concat(y,"|").concat(v);!a.reload&&s.store.hasResourceBundle(y,v)?s.state[x]=2:s.state[x]<0||(s.state[x]===1?m[x]===void 0&&(m[x]=!0):(s.state[x]=1,w=!1,m[x]===void 0&&(m[x]=!0),c[x]===void 0&&(c[x]=!0),h[v]===void 0&&(h[v]=!0)))}),w||(p[y]=!0)}),(Object.keys(c).length||Object.keys(m).length)&&this.queue.push({pending:m,pendingCount:Object.keys(m).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(c),pending:Object.keys(m),toLoadLanguages:Object.keys(p),toLoadNamespaces:Object.keys(h)}}},{key:"loaded",value:function(o,i,a){var l=o.split("|"),s=l[0],c=l[1];i&&this.emit("failedLoading",s,c,i),a&&this.store.addResourceBundle(s,c,a),this.state[o]=i?-1:2;var m={};this.queue.forEach(function(p){Em(p.loaded,[s],c),Vm(p,o),i&&p.errors.push(i),p.pendingCount===0&&!p.done&&(Object.keys(p.loaded).forEach(function(h){m[h]||(m[h]={});var y=p.loaded[h];y.length&&y.forEach(function(w){m[h][w]===void 0&&(m[h][w]=!0)})}),p.done=!0,p.errors.length?p.callback(p.errors):p.callback())}),this.emit("loaded",m),this.queue=this.queue.filter(function(p){return!p.done})}},{key:"read",value:function(o,i,a){var l=this,s=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,c=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,m=arguments.length>5?arguments[5]:void 0;if(!o.length)return m(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:o,ns:i,fcName:a,tried:s,wait:c,callback:m});return}this.readingCalls++;var p=function(v,x){if(l.readingCalls--,l.waitingReads.length>0){var f=l.waitingReads.shift();l.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(v&&x&&s<l.maxRetries){setTimeout(function(){l.read.call(l,o,i,a,s+1,c*2,m)},c);return}m(v,x)},h=this.backend[a].bind(this.backend);if(h.length===2){try{var y=h(o,i);y&&typeof y.then=="function"?y.then(function(w){return p(null,w)}).catch(p):p(null,y)}catch(w){p(w)}return}return h(o,i,p)}},{key:"prepareLoading",value:function(o,i){var a=this,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),s&&s();typeof o=="string"&&(o=this.languageUtils.toResolveHierarchy(o)),typeof i=="string"&&(i=[i]);var c=this.queueLoad(o,i,l,s);if(!c.toLoad.length)return c.pending.length||s(),null;c.toLoad.forEach(function(m){a.loadOne(m)})}},{key:"load",value:function(o,i,a){this.prepareLoading(o,i,{},a)}},{key:"reload",value:function(o,i,a){this.prepareLoading(o,i,{reload:!0},a)}},{key:"loadOne",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",l=o.split("|"),s=l[0],c=l[1];this.read(s,c,"read",void 0,void 0,function(m,p){m&&i.logger.warn("".concat(a,"loading namespace ").concat(c," for language ").concat(s," failed"),m),!m&&p&&i.logger.log("".concat(a,"loaded namespace ").concat(c," for language ").concat(s),p),i.loaded(o,m,p)})}},{key:"saveMissing",value:function(o,i,a,l,s){var c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},m=arguments.length>6&&arguments[6]!==void 0?arguments[6]:function(){};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(i)){this.logger.warn('did not save key "'.concat(a,'" as the namespace "').concat(i,'" was not yet loaded'),"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(a==null||a==="")){if(this.backend&&this.backend.create){var p=Cu(Cu({},c),{},{isUpdate:s}),h=this.backend.create.bind(this.backend);if(h.length<6)try{var y;h.length===5?y=h(o,i,a,l,p):y=h(o,i,a,l),y&&typeof y.then=="function"?y.then(function(w){return m(null,w)}).catch(m):m(null,y)}catch(w){m(w)}else h(o,i,a,l,m,p)}!o||!o[0]||this.store.addResource(o[0],i,a,l)}}}]),t}(et);function Eu(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(n){var t={};if(tn(n[1])==="object"&&(t=n[1]),typeof n[1]=="string"&&(t.defaultValue=n[1]),typeof n[2]=="string"&&(t.tDescription=n[2]),tn(n[2])==="object"||tn(n[3])==="object"){var r=n[3]||n[2];Object.keys(r).forEach(function(o){t[o]=r[o]})}return t},interpolation:{escapeValue:!0,format:function(n,t,r,o){return n},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function Pu(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function Ou(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function cn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Ou(Object(t),!0).forEach(function(r){rt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ou(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Qm(e){var n=Gm();return function(){var r=bn(e),o;if(n){var i=bn(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return ro(this,o)}}function Gm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ho(){}function Ym(e){var n=Object.getOwnPropertyNames(Object.getPrototypeOf(e));n.forEach(function(t){typeof e[t]=="function"&&(e[t]=e[t].bind(e))})}var Xo=function(e){Oi(t,e);var n=Qm(t);function t(){var r,o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;if(xn(this,t),r=n.call(this),Li&&et.call(Wn(r)),r.options=Pu(o),r.services={},r.logger=yn,r.modules={external:[]},Ym(Wn(r)),i&&!r.isInitialized&&!o.isClone){if(!r.options.initImmediate)return r.init(o,i),ro(r,Wn(r));setTimeout(function(){r.init(o,i)},0)}return r}return Sn(t,[{key:"init",value:function(){var o=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;typeof i=="function"&&(a=i,i={}),!i.defaultNS&&i.defaultNS!==!1&&i.ns&&(typeof i.ns=="string"?i.defaultNS=i.ns:i.ns.indexOf("translation")<0&&(i.defaultNS=i.ns[0]));var l=Eu();this.options=cn(cn(cn({},l),this.options),Pu(i)),this.options.compatibilityAPI!=="v1"&&(this.options.interpolation=cn(cn({},l.interpolation),this.options.interpolation)),i.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=i.keySeparator),i.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=i.nsSeparator);function s(f){return f?typeof f=="function"?new f:f:null}if(!this.options.isClone){this.modules.logger?yn.init(s(this.modules.logger),this.options):yn.init(null,this.options);var c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=Bm);var m=new wu(this.options);this.store=new Nm(this.options.resources,this.options);var p=this.services;p.logger=yn,p.resourceStore=this.store,p.languageUtils=m,p.pluralResolver=new Mm(m,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(p.formatter=s(c),p.formatter.init(p,this.options),this.options.interpolation.format=p.formatter.format.bind(p.formatter)),p.interpolator=new Dm(this.options),p.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},p.backendConnector=new Km(s(this.modules.backend),p.resourceStore,p,this.options),p.backendConnector.on("*",function(f){for(var u=arguments.length,d=new Array(u>1?u-1:0),g=1;g<u;g++)d[g-1]=arguments[g];o.emit.apply(o,[f].concat(d))}),this.modules.languageDetector&&(p.languageDetector=s(this.modules.languageDetector),p.languageDetector.init&&p.languageDetector.init(p,this.options.detection,this.options)),this.modules.i18nFormat&&(p.i18nFormat=s(this.modules.i18nFormat),p.i18nFormat.init&&p.i18nFormat.init(this)),this.translator=new vu(this.services,this.options),this.translator.on("*",function(f){for(var u=arguments.length,d=new Array(u>1?u-1:0),g=1;g<u;g++)d[g-1]=arguments[g];o.emit.apply(o,[f].concat(d))}),this.modules.external.forEach(function(f){f.init&&f.init(o)})}if(this.format=this.options.interpolation.format,a||(a=ho),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){var h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined");var y=["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"];y.forEach(function(f){o[f]=function(){var u;return(u=o.store)[f].apply(u,arguments)}});var w=["addResource","addResources","addResourceBundle","removeResourceBundle"];w.forEach(function(f){o[f]=function(){var u;return(u=o.store)[f].apply(u,arguments),o}});var v=fr(),x=function(){var u=function(g,k){o.isInitialized&&!o.initializedStoreOnce&&o.logger.warn("init: i18next is already initialized. You should call init just once!"),o.isInitialized=!0,o.options.isClone||o.logger.log("initialized",o.options),o.emit("initialized",o.options),v.resolve(k),a(g,k)};if(o.languages&&o.options.compatibilityAPI!=="v1"&&!o.isInitialized)return u(null,o.t.bind(o));o.changeLanguage(o.options.lng,u)};return this.options.resources||!this.options.initImmediate?x():setTimeout(x,0),v}},{key:"loadResources",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ho,l=a,s=typeof o=="string"?o:this.language;if(typeof o=="function"&&(l=o),!this.options.resources||this.options.partialBundledLanguages){if(s&&s.toLowerCase()==="cimode")return l();var c=[],m=function(y){if(y){var w=i.services.languageUtils.toResolveHierarchy(y);w.forEach(function(v){c.indexOf(v)<0&&c.push(v)})}};if(s)m(s);else{var p=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);p.forEach(function(h){return m(h)})}this.options.preload&&this.options.preload.forEach(function(h){return m(h)}),this.services.backendConnector.load(c,this.options.ns,function(h){!h&&!i.resolvedLanguage&&i.language&&i.setResolvedLanguage(i.language),l(h)})}else l(null)}},{key:"reloadResources",value:function(o,i,a){var l=fr();return o||(o=this.languages),i||(i=this.options.ns),a||(a=ho),this.services.backendConnector.reload(o,i,function(s){l.resolve(),a(s)}),l}},{key:"use",value:function(o){if(!o)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!o.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return o.type==="backend"&&(this.modules.backend=o),(o.type==="logger"||o.log&&o.warn&&o.error)&&(this.modules.logger=o),o.type==="languageDetector"&&(this.modules.languageDetector=o),o.type==="i18nFormat"&&(this.modules.i18nFormat=o),o.type==="postProcessor"&&yd.addPostProcessor(o),o.type==="formatter"&&(this.modules.formatter=o),o.type==="3rdParty"&&this.modules.external.push(o),this}},{key:"setResolvedLanguage",value:function(o){if(!(!o||!this.languages)&&!(["cimode","dev"].indexOf(o)>-1))for(var i=0;i<this.languages.length;i++){var a=this.languages[i];if(!(["cimode","dev"].indexOf(a)>-1)&&this.store.hasLanguageSomeTranslations(a)){this.resolvedLanguage=a;break}}}},{key:"changeLanguage",value:function(o,i){var a=this;this.isLanguageChangingTo=o;var l=fr();this.emit("languageChanging",o);var s=function(h){a.language=h,a.languages=a.services.languageUtils.toResolveHierarchy(h),a.resolvedLanguage=void 0,a.setResolvedLanguage(h)},c=function(h,y){y?(s(y),a.translator.changeLanguage(y),a.isLanguageChangingTo=void 0,a.emit("languageChanged",y),a.logger.log("languageChanged",y)):a.isLanguageChangingTo=void 0,l.resolve(function(){return a.t.apply(a,arguments)}),i&&i(h,function(){return a.t.apply(a,arguments)})},m=function(h){!o&&!h&&a.services.languageDetector&&(h=[]);var y=typeof h=="string"?h:a.services.languageUtils.getBestMatchFromCodes(h);y&&(a.language||s(y),a.translator.language||a.translator.changeLanguage(y),a.services.languageDetector&&a.services.languageDetector.cacheUserLanguage&&a.services.languageDetector.cacheUserLanguage(y)),a.loadResources(y,function(w){c(w,y)})};return!o&&this.services.languageDetector&&!this.services.languageDetector.async?m(this.services.languageDetector.detect()):!o&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(m):this.services.languageDetector.detect(m):m(o),l}},{key:"getFixedT",value:function(o,i,a){var l=this,s=function c(m,p){var h;if(tn(p)!=="object"){for(var y=arguments.length,w=new Array(y>2?y-2:0),v=2;v<y;v++)w[v-2]=arguments[v];h=l.options.overloadTranslationOptionHandler([m,p].concat(w))}else h=cn({},p);h.lng=h.lng||c.lng,h.lngs=h.lngs||c.lngs,h.ns=h.ns||c.ns,h.keyPrefix=h.keyPrefix||a||c.keyPrefix;var x=l.options.keySeparator||".",f;return h.keyPrefix&&Array.isArray(m)?f=m.map(function(u){return"".concat(h.keyPrefix).concat(x).concat(u)}):f=h.keyPrefix?"".concat(h.keyPrefix).concat(x).concat(m):m,l.t(f,h)};return typeof o=="string"?s.lng=o:s.lngs=o,s.ns=i,s.keyPrefix=a,s}},{key:"t",value:function(){var o;return this.translator&&(o=this.translator).translate.apply(o,arguments)}},{key:"exists",value:function(){var o;return this.translator&&(o=this.translator).exists.apply(o,arguments)}},{key:"setDefaultNamespace",value:function(o){this.options.defaultNS=o}},{key:"hasLoadedNamespace",value:function(o){var i=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;var l=this.resolvedLanguage||this.languages[0],s=this.options?this.options.fallbackLng:!1,c=this.languages[this.languages.length-1];if(l.toLowerCase()==="cimode")return!0;var m=function(y,w){var v=i.services.backendConnector.state["".concat(y,"|").concat(w)];return v===-1||v===2};if(a.precheck){var p=a.precheck(this,m);if(p!==void 0)return p}return!!(this.hasResourceBundle(l,o)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||m(l,o)&&(!s||m(c,o)))}},{key:"loadNamespaces",value:function(o,i){var a=this,l=fr();return this.options.ns?(typeof o=="string"&&(o=[o]),o.forEach(function(s){a.options.ns.indexOf(s)<0&&a.options.ns.push(s)}),this.loadResources(function(s){l.resolve(),i&&i(s)}),l):(i&&i(),Promise.resolve())}},{key:"loadLanguages",value:function(o,i){var a=fr();typeof o=="string"&&(o=[o]);var l=this.options.preload||[],s=o.filter(function(c){return l.indexOf(c)<0});return s.length?(this.options.preload=l.concat(s),this.loadResources(function(c){a.resolve(),i&&i(c)}),a):(i&&i(),Promise.resolve())}},{key:"dir",value:function(o){if(o||(o=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!o)return"rtl";var i=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],a=this.services&&this.services.languageUtils||new wu(Eu());return i.indexOf(a.getLanguagePartFromCode(o))>-1||o.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}},{key:"cloneInstance",value:function(){var o=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ho,l=cn(cn(cn({},this.options),i),{isClone:!0}),s=new t(l);(i.debug!==void 0||i.prefix!==void 0)&&(s.logger=s.logger.clone(i));var c=["store","services","language"];return c.forEach(function(m){s[m]=o[m]}),s.services=cn({},this.services),s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s.translator=new vu(s.services,s.options),s.translator.on("*",function(m){for(var p=arguments.length,h=new Array(p>1?p-1:0),y=1;y<p;y++)h[y-1]=arguments[y];s.emit.apply(s,[m].concat(h))}),s.init(l,a),s.translator.options=s.options,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}},{key:"toJSON",value:function(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}]),t}(et);rt(Xo,"createInstance",function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Xo(e,n)});var ke=Xo.createInstance();ke.createInstance=Xo.createInstance;ke.createInstance;ke.dir;ke.init;ke.loadResources;ke.reloadResources;ke.use;ke.changeLanguage;ke.getFixedT;ke.t;ke.exists;ke.setDefaultNamespace;ke.hasLoadedNamespace;ke.loadNamespaces;ke.loadLanguages;function Yt(e){return Yt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Yt(e)}function Jm(e,n){if(Yt(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n||"default");if(Yt(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function vd(e){var n=Jm(e,"string");return Yt(n)==="symbol"?n:String(n)}function wd(e,n,t){return n=vd(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Lu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E={},Zm={get exports(){return E},set exports(e){E=e}},A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oo=Symbol.for("react.element"),qm=Symbol.for("react.portal"),eh=Symbol.for("react.fragment"),nh=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),rh=Symbol.for("react.provider"),oh=Symbol.for("react.context"),ih=Symbol.for("react.forward_ref"),ah=Symbol.for("react.suspense"),lh=Symbol.for("react.memo"),sh=Symbol.for("react.lazy"),zu=Symbol.iterator;function uh(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bd=Object.assign,xd={};function ir(e,n,t){this.props=e,this.context=n,this.refs=xd,this.updater=t||kd}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sd(){}Sd.prototype=ir.prototype;function Ql(e,n,t){this.props=e,this.context=n,this.refs=xd,this.updater=t||kd}var Gl=Ql.prototype=new Sd;Gl.constructor=Ql;bd(Gl,ir.prototype);Gl.isPureReactComponent=!0;var Ru=Array.isArray,Cd=Object.prototype.hasOwnProperty,Yl={current:null},Ed={key:!0,ref:!0,__self:!0,__source:!0};function Pd(e,n,t){var r,o={},i=null,a=null;if(n!=null)for(r in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(i=""+n.key),n)Cd.call(n,r)&&!Ed.hasOwnProperty(r)&&(o[r]=n[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:oo,type:e,key:i,ref:a,props:o,_owner:Yl.current}}function ch(e,n){return{$$typeof:oo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function dh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var _u=/\/+/g;function sa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?dh(""+e.key):n.toString(36)}function jo(e,n,t,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case oo:case qm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+sa(a,0):r,Ru(o)?(t="",e!=null&&(t=e.replace(_u,"$&/")+"/"),jo(o,n,t,"",function(c){return c})):o!=null&&(Jl(o)&&(o=ch(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(_u,"$&/")+"/")+e)),n.push(o)),1;if(a=0,r=r===""?".":r+":",Ru(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+sa(i,l);a+=jo(i,n,t,s,o)}else if(s=uh(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+sa(i,l++),a+=jo(i,n,t,s,o);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function go(e,n,t){if(e==null)return e;var r=[],o=0;return jo(e,r,"","",function(i){return n.call(t,i,o++)}),r}function fh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},Ao={transition:null},ph={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:Yl};A.Children={map:go,forEach:function(e,n,t){go(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return go(e,function(){n++}),n},toArray:function(e){return go(e,function(n){return n})||[]},only:function(e){if(!Jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=ir;A.Fragment=eh;A.Profiler=th;A.PureComponent=Ql;A.StrictMode=nh;A.Suspense=ah;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ph;A.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bd({},e.props),o=e.key,i=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,a=Yl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Cd.call(n,s)&&!Ed.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:oo,type:e.type,key:o,ref:i,props:r,_owner:a}};A.createContext=function(e){return e={$$typeof:oh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rh,_context:e},e.Consumer=e};A.createElement=Pd;A.createFactory=function(e){var n=Pd.bind(null,e);return n.type=e,n};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:ih,render:e}};A.isValidElement=Jl;A.lazy=function(e){return{$$typeof:sh,_payload:{_status:-1,_result:e},_init:fh}};A.memo=function(e,n){return{$$typeof:lh,type:e,compare:n===void 0?null:n}};A.startTransition=function(e){var n=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=n}};A.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};A.useCallback=function(e,n){return Ce.current.useCallback(e,n)};A.useContext=function(e){return Ce.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};A.useEffect=function(e,n){return Ce.current.useEffect(e,n)};A.useId=function(){return Ce.current.useId()};A.useImperativeHandle=function(e,n,t){return Ce.current.useImperativeHandle(e,n,t)};A.useInsertionEffect=function(e,n){return Ce.current.useInsertionEffect(e,n)};A.useLayoutEffect=function(e,n){return Ce.current.useLayoutEffect(e,n)};A.useMemo=function(e,n){return Ce.current.useMemo(e,n)};A.useReducer=function(e,n,t){return Ce.current.useReducer(e,n,t)};A.useRef=function(e){return Ce.current.useRef(e)};A.useState=function(e){return Ce.current.useState(e)};A.useSyncExternalStore=function(e,n,t){return Ce.current.useSyncExternalStore(e,n,t)};A.useTransition=function(){return Ce.current.useTransition()};A.version="18.2.0";(function(e){e.exports=A})(Zm);const Xl=Xm(E),jr=hm({__proto__:null,default:Xl},[E]);function mh(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];typeof t[0]=="string"&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var Nu={};function Ua(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];typeof n[0]=="string"&&Nu[n[0]]||(typeof n[0]=="string"&&(Nu[n[0]]=new Date),mh.apply(void 0,n))}function Tu(e,n,t){e.loadNamespaces(n,function(){if(e.isInitialized)t();else{var r=function o(){setTimeout(function(){e.off("initialized",o)},0),t()};e.on("initialized",r)}})}function hh(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.languages[0],o=n.options?n.options.fallbackLng:!1,i=n.languages[n.languages.length-1];if(r.toLowerCase()==="cimode")return!0;var a=function(s,c){var m=n.services.backendConnector.state["".concat(s,"|").concat(c)];return m===-1||m===2};return t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)?!1:!!(n.hasResourceBundle(r,e)||!n.services.backendConnector.backend||n.options.resources&&!n.options.partialBundledLanguages||a(r,e)&&(!o||a(i,e)))}function gh(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!n.languages||!n.languages.length)return Ua("i18n.languages were undefined or empty",n.languages),!0;var r=n.options.ignoreJSONStructure!==void 0;return r?n.hasLoadedNamespace(e,{precheck:function(i,a){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!a(i.isLanguageChangingTo,e))return!1}}):hh(e,n,t)}var yh=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,vh={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},wh=function(n){return vh[n]},kh=function(n){return n.replace(yh,wh)};function Fu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ju(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Fu(Object(t),!0).forEach(function(r){wd(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Fu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Ba={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:kh};function bh(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ba=ju(ju({},Ba),e)}function xh(){return Ba}var Od;function Sh(e){Od=e}function Ch(){return Od}function Eh(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Au(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,vd(r.key),r)}}function Ph(e,n,t){return n&&Au(e.prototype,n),t&&Au(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var Oh={type:"3rdParty",init:function(n){bh(n.options.react),Sh(n)}},Lh=E.createContext(),zh=function(){function e(){Eh(this,e),this.usedNamespaces={}}return Ph(e,[{key:"addUsedNamespaces",value:function(t){var r=this;t.forEach(function(o){r.usedNamespaces[o]||(r.usedNamespaces[o]=!0)})}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function Rh(e){if(Array.isArray(e))return e}function _h(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,o,i,a,l=[],s=!0,c=!1;try{if(i=(t=t.call(e)).next,n===0){if(Object(t)!==t)return;s=!1}else for(;!(s=(r=i.call(t)).done)&&(l.push(r.value),l.length!==n);s=!0);}catch(m){c=!0,o=m}finally{try{if(!s&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}function $u(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Nh(e,n){if(e){if(typeof e=="string")return $u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $u(e,n)}}function Th(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fh(e,n){return Rh(e)||_h(e,n)||Nh(e,n)||Th()}function Iu(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function ua(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Iu(Object(t),!0).forEach(function(r){wd(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Iu(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var jh=function(n,t){var r=E.useRef();return E.useEffect(function(){r.current=t?r.current:n},[n,t]),r.current};function Zl(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.i18n,r=E.useContext(Lh)||{},o=r.i18n,i=r.defaultNS,a=t||o||Ch();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new zh),!a){Ua("You will need to pass in an i18next instance by using initReactI18next");var l=function(O,_){return typeof _=="string"?_:_&&Yt(_)==="object"&&typeof _.defaultValue=="string"?_.defaultValue:Array.isArray(O)?O[O.length-1]:O},s=[l,{},!1];return s.t=l,s.i18n={},s.ready=!1,s}a.options.react&&a.options.react.wait!==void 0&&Ua("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var c=ua(ua(ua({},xh()),a.options.react),n),m=c.useSuspense,p=c.keyPrefix,h=e||i||a.options&&a.options.defaultNS;h=typeof h=="string"?[h]:h||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(h);var y=(a.isInitialized||a.initializedStoreOnce)&&h.every(function(P){return gh(P,a,c)});function w(){return a.getFixedT(null,c.nsMode==="fallback"?h:h[0],p)}var v=E.useState(w),x=Fh(v,2),f=x[0],u=x[1],d=h.join(),g=jh(d),k=E.useRef(!0);E.useEffect(function(){var P=c.bindI18n,O=c.bindI18nStore;k.current=!0,!y&&!m&&Tu(a,h,function(){k.current&&u(w)}),y&&g&&g!==d&&k.current&&u(w);function _(){k.current&&u(w)}return P&&a&&a.on(P,_),O&&a&&a.store.on(O,_),function(){k.current=!1,P&&a&&P.split(" ").forEach(function($){return a.off($,_)}),O&&a&&O.split(" ").forEach(function($){return a.store.off($,_)})}},[a,d]);var b=E.useRef(!0);E.useEffect(function(){k.current&&!b.current&&u(w),b.current=!1},[a,p]);var C=[f,a,y];if(C.t=f,C.i18n=a,C.ready=y,y||!y&&!m)return C;throw new Promise(function(P){Tu(a,h,function(){P()})})}const Ah={EA:"文章",indicator:"代码片段",projects:"项目"},$h={title:"👋 你好，我是Harrie",description:"一个全栈的Web开发者，主要专注于Node.js、Vue、React等技术",link:"开始阅读"},Ih="yyyy / MM / dd",Mh={title:"评论",btn:"评论",owner:"作者"},Dh={title:"项目"},Uh={tab:Ah,intro:$h,dateFormat:Ih,comment:Mh,projects:Dh},Bh={translation:Uh},Hh={EA:"EA",indicator:"Indicator",projects:"Projects"},Wh={title:"👋 Hi! I'm Agus Pujianto",description:"Founder of Dagangduit.com — creating smart trading systems, expert advisors, and AI-powered financial tools to help traders grow consistently.",link:"Explore Projects"},Vh="MMM dd, yyyy",Kh={title:"Comments",btn:"Click to Comment",owner:"Author"},Qh={title:"Projects"},Gh={tab:Hh,intro:Wh,dateFormat:Vh,comment:Kh,projects:Qh},Yh={translation:Gh},Jh="translation",Xh={cn:Bh,en:Yh},Zh=navigator.language==="zh-CN"?"cn":"en",qh=localStorage.getItem("language");ke.use(Oh).init({resources:Xh,defaultNS:Jh,lng:qh||Zh});var Ha={},eg={get exports(){return Ha},set exports(e){Ha=e}},Ie={},Wa={},ng={get exports(){return Wa},set exports(e){Wa=e}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(z,T){var F=z.length;z.push(T);e:for(;0<F;){var M=F-1>>>1,D=z[M];if(0<o(D,T))z[M]=T,z[F]=D,F=M;else break e}}function t(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var T=z[0],F=z.pop();if(F!==T){z[0]=F;e:for(var M=0,D=z.length,jn=D>>>1;M<jn;){var Z=2*(M+1)-1,He=z[Z],le=Z+1,Pe=z[le];if(0>o(He,F))le<D&&0>o(Pe,He)?(z[M]=Pe,z[le]=F,M=le):(z[M]=He,z[Z]=F,M=Z);else if(le<D&&0>o(Pe,F))z[M]=Pe,z[le]=F,M=le;else break e}}return T}function o(z,T){var F=z.sortIndex-T.sortIndex;return F!==0?F:z.id-T.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],c=[],m=1,p=null,h=3,y=!1,w=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(z){for(var T=t(c);T!==null;){if(T.callback===null)r(c);else if(T.startTime<=z)r(c),T.sortIndex=T.expirationTime,n(s,T);else break;T=t(c)}}function g(z){if(v=!1,d(z),!w)if(t(s)!==null)w=!0,sn(k);else{var T=t(c);T!==null&&Be(g,T.startTime-z)}}function k(z,T){w=!1,v&&(v=!1,f(P),P=-1),y=!0;var F=h;try{for(d(T),p=t(s);p!==null&&(!(p.expirationTime>T)||z&&!$());){var M=p.callback;if(typeof M=="function"){p.callback=null,h=p.priorityLevel;var D=M(p.expirationTime<=T);T=e.unstable_now(),typeof D=="function"?p.callback=D:p===t(s)&&r(s),d(T)}else r(s);p=t(s)}if(p!==null)var jn=!0;else{var Z=t(c);Z!==null&&Be(g,Z.startTime-T),jn=!1}return jn}finally{p=null,h=F,y=!1}}var b=!1,C=null,P=-1,O=5,_=-1;function $(){return!(e.unstable_now()-_<O)}function re(){if(C!==null){var z=e.unstable_now();_=z;var T=!0;try{T=C(!0,z)}finally{T?ln():(b=!1,C=null)}}else b=!1}var ln;if(typeof u=="function")ln=function(){u(re)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,Et=Ue.port2;Ue.port1.onmessage=re,ln=function(){Et.postMessage(null)}}else ln=function(){x(re,0)};function sn(z){C=z,b||(b=!0,ln())}function Be(z,T){P=x(function(){z(e.unstable_now())},T)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||y||(w=!0,sn(k))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(z){switch(h){case 1:case 2:case 3:var T=3;break;default:T=h}var F=h;h=T;try{return z()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,T){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var F=h;h=z;try{return T()}finally{h=F}},e.unstable_scheduleCallback=function(z,T,F){var M=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?M+F:M):F=M,z){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=F+D,z={id:m++,callback:T,priorityLevel:z,startTime:F,expirationTime:D,sortIndex:-1},F>M?(z.sortIndex=F,n(c,z),t(s)===null&&z===t(c)&&(v?(f(P),P=-1):v=!0,Be(g,F-M))):(z.sortIndex=D,n(s,z),w||y||(w=!0,sn(k))),z},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(z){var T=h;return function(){var F=h;h=T;try{return z.apply(this,arguments)}finally{h=F}}}})(Ld);(function(e){e.exports=Ld})(ng);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=E,$e=Wa;function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rd=new Set,Ar={};function xt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(Ar[e]=n,e=0;e<n.length;e++)Rd.add(n[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Va=Object.prototype.hasOwnProperty,tg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mu={},Du={};function rg(e){return Va.call(Du,e)?!0:Va.call(Mu,e)?!1:tg.test(e)?Du[e]=!0:(Mu[e]=!0,!1)}function og(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ig(e,n,t,r){if(n===null||typeof n>"u"||og(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ee(e,n,t,r,o,i,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=a}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];me[n]=new Ee(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function es(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ql,es);me[n]=new Ee(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ql,es);me[n]=new Ee(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ql,es);me[n]=new Ee(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function ns(e,n,t,r){var o=me.hasOwnProperty(n)?me[n]:null;(o!==null?o.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(ig(n,t,o,r)&&(t=null),r||o===null?rg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,r=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Fn=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yo=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),ts=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),rs=Symbol.for("react.forward_ref"),Qa=Symbol.for("react.suspense"),Ga=Symbol.for("react.suspense_list"),os=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Td=Symbol.for("react.offscreen"),Uu=Symbol.iterator;function pr(e){return e===null||typeof e!="object"?null:(e=Uu&&e[Uu]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,ca;function xr(e){if(ca===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ca=n&&n[1]||""}return`
`+ca+e}var da=!1;function fa(e,n){if(!e||da)return"";da=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var r=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){r=c}e.call(n.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{da=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?xr(e):""}function ag(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=fa(e.type,!1),e;case 11:return e=fa(e.type.render,!1),e;case 1:return e=fa(e.type,!0),e;default:return""}}function Ya(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case Rt:return"Portal";case Ka:return"Profiler";case ts:return"StrictMode";case Qa:return"Suspense";case Ga:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Nd:return(e.displayName||"Context")+".Consumer";case _d:return(e._context.displayName||"Context")+".Provider";case rs:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case os:return n=e.displayName||null,n!==null?n:Ya(e.type)||"Memo";case $n:n=e._payload,e=e._init;try{return Ya(e(n))}catch{}}return null}function lg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ya(n);case 8:return n===ts?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function sg(e){var n=Fd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vo(e){e._valueTracker||(e._valueTracker=sg(e))}function jd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Fd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,n){var t=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Bu(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=nt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ad(e,n){n=n.checked,n!=null&&ns(e,"checked",n,!1)}function Xa(e,n){Ad(e,n);var t=nt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Za(e,n.type,t):n.hasOwnProperty("defaultValue")&&Za(e,n.type,nt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Hu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Za(e,n,t){(n!=="number"||Zo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Sr=Array.isArray;function Bt(e,n,t,r){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&r&&(e[t].defaultSelected=!0)}else{for(t=""+nt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function qa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(L(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(L(92));if(Sr(t)){if(1<t.length)throw Error(L(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:nt(t)}}function $d(e,n){var t=nt(n.value),r=nt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Vu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Id(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Id(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wo,Md=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function $r(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ug=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){ug.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Pr[n]=Pr[e]})});function Dd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+n).trim():n+"px"}function Ud(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=Dd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,o):e[t]=o}}var cg=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nl(e,n){if(n){if(cg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(L(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(L(61))}if(n.style!=null&&typeof n.style!="object")throw Error(L(62))}}function tl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,Ht=null,Wt=null;function Ku(e){if(e=lo(e)){if(typeof ol!="function")throw Error(L(280));var n=e.stateNode;n&&(n=Ti(n),ol(e.stateNode,e.type,n))}}function Bd(e){Ht?Wt?Wt.push(e):Wt=[e]:Ht=e}function Hd(){if(Ht){var e=Ht,n=Wt;if(Wt=Ht=null,Ku(e),n)for(e=0;e<n.length;e++)Ku(n[e])}}function Wd(e,n){return e(n)}function Vd(){}var pa=!1;function Kd(e,n,t){if(pa)return e(n,t);pa=!0;try{return Wd(e,n,t)}finally{pa=!1,(Ht!==null||Wt!==null)&&(Vd(),Hd())}}function Ir(e,n){var t=e.stateNode;if(t===null)return null;var r=Ti(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,n,typeof t));return t}var il=!1;if(Rn)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){il=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{il=!1}function dg(e,n,t,r,o,i,a,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(m){this.onError(m)}}var Or=!1,qo=null,ei=!1,al=null,fg={onError:function(e){Or=!0,qo=e}};function pg(e,n,t,r,o,i,a,l,s){Or=!1,qo=null,dg.apply(fg,arguments)}function mg(e,n,t,r,o,i,a,l,s){if(pg.apply(this,arguments),Or){if(Or){var c=qo;Or=!1,qo=null}else throw Error(L(198));ei||(ei=!0,al=c)}}function St(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Qd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Qu(e){if(St(e)!==e)throw Error(L(188))}function hg(e){var n=e.alternate;if(!n){if(n=St(e),n===null)throw Error(L(188));return n!==e?null:e}for(var t=e,r=n;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return Qu(o),e;if(i===r)return Qu(o),n;i=i.sibling}throw Error(L(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(L(189))}}if(t.alternate!==r)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:n}function Gd(e){return e=hg(e),e!==null?Yd(e):null}function Yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Yd(e);if(n!==null)return n;e=e.sibling}return null}var Jd=$e.unstable_scheduleCallback,Gu=$e.unstable_cancelCallback,gg=$e.unstable_shouldYield,yg=$e.unstable_requestPaint,ee=$e.unstable_now,vg=$e.unstable_getCurrentPriorityLevel,as=$e.unstable_ImmediatePriority,Xd=$e.unstable_UserBlockingPriority,ni=$e.unstable_NormalPriority,wg=$e.unstable_LowPriority,Zd=$e.unstable_IdlePriority,zi=null,vn=null;function kg(e){if(vn&&typeof vn.onCommitFiberRoot=="function")try{vn.onCommitFiberRoot(zi,e,void 0,(e.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:Sg,bg=Math.log,xg=Math.LN2;function Sg(e){return e>>>=0,e===0?32:31-(bg(e)/xg|0)|0}var ko=64,bo=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=Cr(l):(i&=a,i!==0&&(r=Cr(i)))}else a=t&~o,a!==0?r=Cr(a):i!==0&&(r=Cr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&o)&&(o=r&-r,i=n&-n,o>=i||o===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-rn(n),o=1<<t,r|=e[t],n&=~o;return r}function Cg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-rn(i),l=1<<a,s=o[a];s===-1?(!(l&t)||l&r)&&(o[a]=Cg(l,n)):s<=n&&(e.expiredLanes|=l),i&=~l}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function ma(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function io(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-rn(n),e[n]=t}function Pg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-rn(t),i=1<<o;n[o]=0,r[o]=-1,e[o]=-1,t&=~i}}function ls(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-rn(t),o=1<<r;o&n|e[r]&n&&(e[r]|=n),t&=~o}}var H=0;function ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nf,ss,tf,rf,of,sl=!1,xo=[],Vn=null,Kn=null,Qn=null,Mr=new Map,Dr=new Map,Mn=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(e,n){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Mr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dr.delete(n.pointerId)}}function hr(e,n,t,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},n!==null&&(n=lo(n),n!==null&&ss(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function Lg(e,n,t,r,o){switch(n){case"focusin":return Vn=hr(Vn,e,n,t,r,o),!0;case"dragenter":return Kn=hr(Kn,e,n,t,r,o),!0;case"mouseover":return Qn=hr(Qn,e,n,t,r,o),!0;case"pointerover":var i=o.pointerId;return Mr.set(i,hr(Mr.get(i)||null,e,n,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Dr.set(i,hr(Dr.get(i)||null,e,n,t,r,o)),!0}return!1}function af(e){var n=ft(e.target);if(n!==null){var t=St(n);if(t!==null){if(n=t.tag,n===13){if(n=Qd(t),n!==null){e.blockedOn=n,of(e.priority,function(){tf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ul(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);rl=r,t.target.dispatchEvent(r),rl=null}else return n=lo(t),n!==null&&ss(n),e.blockedOn=t,!1;n.shift()}return!0}function Ju(e,n,t){$o(e)&&t.delete(n)}function zg(){sl=!1,Vn!==null&&$o(Vn)&&(Vn=null),Kn!==null&&$o(Kn)&&(Kn=null),Qn!==null&&$o(Qn)&&(Qn=null),Mr.forEach(Ju),Dr.forEach(Ju)}function gr(e,n){e.blockedOn===n&&(e.blockedOn=null,sl||(sl=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,zg)))}function Ur(e){function n(o){return gr(o,e)}if(0<xo.length){gr(xo[0],e);for(var t=1;t<xo.length;t++){var r=xo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&gr(Vn,e),Kn!==null&&gr(Kn,e),Qn!==null&&gr(Qn,e),Mr.forEach(n),Dr.forEach(n),t=0;t<Mn.length;t++)r=Mn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Mn.length&&(t=Mn[0],t.blockedOn===null);)af(t),t.blockedOn===null&&Mn.shift()}var Vt=Fn.ReactCurrentBatchConfig,ri=!0;function Rg(e,n,t,r){var o=H,i=Vt.transition;Vt.transition=null;try{H=1,us(e,n,t,r)}finally{H=o,Vt.transition=i}}function _g(e,n,t,r){var o=H,i=Vt.transition;Vt.transition=null;try{H=4,us(e,n,t,r)}finally{H=o,Vt.transition=i}}function us(e,n,t,r){if(ri){var o=ul(e,n,t,r);if(o===null)Ca(e,n,r,oi,t),Yu(e,r);else if(Lg(o,e,n,t,r))r.stopPropagation();else if(Yu(e,r),n&4&&-1<Og.indexOf(e)){for(;o!==null;){var i=lo(o);if(i!==null&&nf(i),i=ul(e,n,t,r),i===null&&Ca(e,n,r,oi,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ca(e,n,r,null,t)}}var oi=null;function ul(e,n,t,r){if(oi=null,e=is(r),e=ft(e),e!==null)if(n=St(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Qd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return oi=e,null}function lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vg()){case as:return 1;case Xd:return 4;case ni:case wg:return 16;case Zd:return 536870912;default:return 16}default:return 16}}var Un=null,cs=null,Io=null;function sf(){if(Io)return Io;var e,n=cs,t=n.length,r,o="value"in Un?Un.value:Un.textContent,i=o.length;for(e=0;e<t&&n[e]===o[e];e++);var a=t-e;for(r=1;r<=a&&n[t-r]===o[i-r];r++);return Io=o.slice(e,1<r?1-r:void 0)}function Mo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function So(){return!0}function Xu(){return!1}function Me(e){function n(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?So:Xu,this.isPropagationStopped=Xu,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ds=Me(ar),ao=X({},ar,{view:0,detail:0}),Ng=Me(ao),ha,ga,yr,Ri=X({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(ha=e.screenX-yr.screenX,ga=e.screenY-yr.screenY):ga=ha=0,yr=e),ha)},movementY:function(e){return"movementY"in e?e.movementY:ga}}),Zu=Me(Ri),Tg=X({},Ri,{dataTransfer:0}),Fg=Me(Tg),jg=X({},ao,{relatedTarget:0}),ya=Me(jg),Ag=X({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),$g=Me(Ag),Ig=X({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mg=Me(Ig),Dg=X({},ar,{data:0}),qu=Me(Dg),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hg[e])?!!n[e]:!1}function fs(){return Wg}var Vg=X({},ao,{key:function(e){if(e.key){var n=Ug[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=Me(Vg),Qg=X({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ec=Me(Qg),Gg=X({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),Yg=Me(Gg),Jg=X({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=Me(Jg),Zg=X({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qg=Me(Zg),e0=[9,13,27,32],ps=Rn&&"CompositionEvent"in window,Lr=null;Rn&&"documentMode"in document&&(Lr=document.documentMode);var n0=Rn&&"TextEvent"in window&&!Lr,uf=Rn&&(!ps||Lr&&8<Lr&&11>=Lr),nc=String.fromCharCode(32),tc=!1;function cf(e,n){switch(e){case"keyup":return e0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nt=!1;function t0(e,n){switch(e){case"compositionend":return df(n);case"keypress":return n.which!==32?null:(tc=!0,nc);case"textInput":return e=n.data,e===nc&&tc?null:e;default:return null}}function r0(e,n){if(Nt)return e==="compositionend"||!ps&&cf(e,n)?(e=sf(),Io=cs=Un=null,Nt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return uf&&n.locale!=="ko"?null:n.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!o0[e.type]:n==="textarea"}function ff(e,n,t,r){Bd(r),n=ii(n,"onChange"),0<n.length&&(t=new ds("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var zr=null,Br=null;function i0(e){Sf(e,0)}function _i(e){var n=jt(e);if(jd(n))return e}function a0(e,n){if(e==="change")return n}var pf=!1;if(Rn){var va;if(Rn){var wa="oninput"in document;if(!wa){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),wa=typeof oc.oninput=="function"}va=wa}else va=!1;pf=va&&(!document.documentMode||9<document.documentMode)}function ic(){zr&&(zr.detachEvent("onpropertychange",mf),Br=zr=null)}function mf(e){if(e.propertyName==="value"&&_i(Br)){var n=[];ff(n,Br,e,is(e)),Kd(i0,n)}}function l0(e,n,t){e==="focusin"?(ic(),zr=n,Br=t,zr.attachEvent("onpropertychange",mf)):e==="focusout"&&ic()}function s0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _i(Br)}function u0(e,n){if(e==="click")return _i(n)}function c0(e,n){if(e==="input"||e==="change")return _i(n)}function d0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:d0;function Hr(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Va.call(n,o)||!an(e[o],n[o]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lc(e,n){var t=ac(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ac(t)}}function hf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gf(){for(var e=window,n=Zo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Zo(e.document)}return n}function ms(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function f0(e){var n=gf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&hf(t.ownerDocument.documentElement,t)){if(r!==null&&ms(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=lc(t,i);var a=lc(t,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var p0=Rn&&"documentMode"in document&&11>=document.documentMode,Tt=null,cl=null,Rr=null,dl=!1;function sc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dl||Tt==null||Tt!==Zo(r)||(r=Tt,"selectionStart"in r&&ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&Hr(Rr,r)||(Rr=r,r=ii(cl,"onSelect"),0<r.length&&(n=new ds("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Tt)))}function Co(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ft={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},ka={},yf={};Rn&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Ft.animationend.animation,delete Ft.animationiteration.animation,delete Ft.animationstart.animation),"TransitionEvent"in window||delete Ft.transitionend.transition);function Ni(e){if(ka[e])return ka[e];if(!Ft[e])return e;var n=Ft[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in yf)return ka[e]=n[t];return e}var vf=Ni("animationend"),wf=Ni("animationiteration"),kf=Ni("animationstart"),bf=Ni("transitionend"),xf=new Map,uc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ot(e,n){xf.set(e,n),xt(n,[e])}for(var ba=0;ba<uc.length;ba++){var xa=uc[ba],m0=xa.toLowerCase(),h0=xa[0].toUpperCase()+xa.slice(1);ot(m0,"on"+h0)}ot(vf,"onAnimationEnd");ot(wf,"onAnimationIteration");ot(kf,"onAnimationStart");ot("dblclick","onDoubleClick");ot("focusin","onFocus");ot("focusout","onBlur");ot(bf,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);xt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xt("onBeforeInput",["compositionend","keypress","textInput","paste"]);xt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function cc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,mg(r,n,void 0,e),e.currentTarget=null}function Sf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],o=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;cc(o,l,c),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;cc(o,l,c),i=s}}}if(ei)throw e=al,ei=!1,al=null,e}function K(e,n){var t=n[gl];t===void 0&&(t=n[gl]=new Set);var r=e+"__bubble";t.has(r)||(Cf(n,e,2,!1),t.add(r))}function Sa(e,n,t){var r=0;n&&(r|=4),Cf(t,e,r,n)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Eo]){e[Eo]=!0,Rd.forEach(function(t){t!=="selectionchange"&&(g0.has(t)||Sa(t,!1,e),Sa(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Eo]||(n[Eo]=!0,Sa("selectionchange",!1,n))}}function Cf(e,n,t,r){switch(lf(n)){case 1:var o=Rg;break;case 4:o=_g;break;default:o=us}t=o.bind(null,n,t,e),o=void 0,!il||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function Ca(e,n,t,r,o){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=ft(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Kd(function(){var c=i,m=is(t),p=[];e:{var h=xf.get(e);if(h!==void 0){var y=ds,w=e;switch(e){case"keypress":if(Mo(t)===0)break e;case"keydown":case"keyup":y=Kg;break;case"focusin":w="focus",y=ya;break;case"focusout":w="blur",y=ya;break;case"beforeblur":case"afterblur":y=ya;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Zu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Yg;break;case vf:case wf:case kf:y=$g;break;case bf:y=Xg;break;case"scroll":y=Ng;break;case"wheel":y=qg;break;case"copy":case"cut":case"paste":y=Mg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ec}var v=(n&4)!==0,x=!v&&e==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var u=c,d;u!==null;){d=u;var g=d.stateNode;if(d.tag===5&&g!==null&&(d=g,f!==null&&(g=Ir(u,f),g!=null&&v.push(Vr(u,g,d)))),x)break;u=u.return}0<v.length&&(h=new y(h,w,null,t,m),p.push({event:h,listeners:v}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==rl&&(w=t.relatedTarget||t.fromElement)&&(ft(w)||w[_n]))break e;if((y||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=t.relatedTarget||t.toElement,y=c,w=w?ft(w):null,w!==null&&(x=St(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=c),y!==w)){if(v=Zu,g="onMouseLeave",f="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=ec,g="onPointerLeave",f="onPointerEnter",u="pointer"),x=y==null?h:jt(y),d=w==null?h:jt(w),h=new v(g,u+"leave",y,t,m),h.target=x,h.relatedTarget=d,g=null,ft(m)===c&&(v=new v(f,u+"enter",w,t,m),v.target=d,v.relatedTarget=x,g=v),x=g,y&&w)n:{for(v=y,f=w,u=0,d=v;d;d=zt(d))u++;for(d=0,g=f;g;g=zt(g))d++;for(;0<u-d;)v=zt(v),u--;for(;0<d-u;)f=zt(f),d--;for(;u--;){if(v===f||f!==null&&v===f.alternate)break n;v=zt(v),f=zt(f)}v=null}else v=null;y!==null&&dc(p,h,y,v,!1),w!==null&&x!==null&&dc(p,x,w,v,!0)}}e:{if(h=c?jt(c):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=a0;else if(rc(h))if(pf)k=c0;else{k=s0;var b=l0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=u0);if(k&&(k=k(e,c))){ff(p,k,t,m);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Za(h,"number",h.value)}switch(b=c?jt(c):window,e){case"focusin":(rc(b)||b.contentEditable==="true")&&(Tt=b,cl=c,Rr=null);break;case"focusout":Rr=cl=Tt=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,sc(p,t,m);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":sc(p,t,m)}var C;if(ps)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Nt?cf(e,t)&&(P="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(uf&&t.locale!=="ko"&&(Nt||P!=="onCompositionStart"?P==="onCompositionEnd"&&Nt&&(C=sf()):(Un=m,cs="value"in Un?Un.value:Un.textContent,Nt=!0)),b=ii(c,P),0<b.length&&(P=new qu(P,e,null,t,m),p.push({event:P,listeners:b}),C?P.data=C:(C=df(t),C!==null&&(P.data=C)))),(C=n0?t0(e,t):r0(e,t))&&(c=ii(c,"onBeforeInput"),0<c.length&&(m=new qu("onBeforeInput","beforeinput",null,t,m),p.push({event:m,listeners:c}),m.data=C))}Sf(p,n)})}function Vr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ii(e,n){for(var t=n+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Ir(e,t),i!=null&&r.unshift(Vr(e,i,o)),i=Ir(e,n),i!=null&&r.push(Vr(e,i,o))),e=e.return}return r}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dc(e,n,t,r,o){for(var i=n._reactName,a=[];t!==null&&t!==r;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&c!==null&&(l=c,o?(s=Ir(t,i),s!=null&&a.unshift(Vr(t,s,l))):o||(s=Ir(t,i),s!=null&&a.push(Vr(t,s,l)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var y0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function fc(e){return(typeof e=="string"?e:""+e).replace(y0,`
`).replace(v0,"")}function Po(e,n,t){if(n=fc(n),fc(e)!==n&&t)throw Error(L(425))}function ai(){}var fl=null,pl=null;function ml(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,w0=typeof clearTimeout=="function"?clearTimeout:void 0,pc=typeof Promise=="function"?Promise:void 0,k0=typeof queueMicrotask=="function"?queueMicrotask:typeof pc<"u"?function(e){return pc.resolve(null).then(e).catch(b0)}:hl;function b0(e){setTimeout(function(){throw e})}function Ea(e,n){var t=n,r=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){e.removeChild(o),Ur(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);Ur(n)}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function mc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),gn="__reactFiber$"+lr,Kr="__reactProps$"+lr,_n="__reactContainer$"+lr,gl="__reactEvents$"+lr,x0="__reactListeners$"+lr,S0="__reactHandles$"+lr;function ft(e){var n=e[gn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[_n]||t[gn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=mc(e);e!==null;){if(t=e[gn])return t;e=mc(e)}return n}e=t,t=e.parentNode}return null}function lo(e){return e=e[gn]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ti(e){return e[Kr]||null}var yl=[],At=-1;function it(e){return{current:e}}function Q(e){0>At||(e.current=yl[At],yl[At]=null,At--)}function V(e,n){At++,yl[At]=e.current,e.current=n}var tt={},we=it(tt),ze=it(!1),yt=tt;function Xt(e,n){var t=e.type.contextTypes;if(!t)return tt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function li(){Q(ze),Q(we)}function hc(e,n,t){if(we.current!==tt)throw Error(L(168));V(we,n),V(ze,t)}function Ef(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in n))throw Error(L(108,lg(e)||"Unknown",o));return X({},t,r)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tt,yt=we.current,V(we,e),V(ze,ze.current),!0}function gc(e,n,t){var r=e.stateNode;if(!r)throw Error(L(169));t?(e=Ef(e,n,yt),r.__reactInternalMemoizedMergedChildContext=e,Q(ze),Q(we),V(we,e)):Q(ze),V(ze,t)}var Pn=null,Fi=!1,Pa=!1;function Pf(e){Pn===null?Pn=[e]:Pn.push(e)}function C0(e){Fi=!0,Pf(e)}function at(){if(!Pa&&Pn!==null){Pa=!0;var e=0,n=H;try{var t=Pn;for(H=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,Fi=!1}catch(o){throw Pn!==null&&(Pn=Pn.slice(e+1)),Jd(as,at),o}finally{H=n,Pa=!1}}return null}var $t=[],It=0,ui=null,ci=0,We=[],Ve=0,vt=null,On=1,Ln="";function ct(e,n){$t[It++]=ci,$t[It++]=ui,ui=e,ci=n}function Of(e,n,t){We[Ve++]=On,We[Ve++]=Ln,We[Ve++]=vt,vt=e;var r=On;e=Ln;var o=32-rn(r)-1;r&=~(1<<o),t+=1;var i=32-rn(n)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,On=1<<32-rn(n)+o|t<<o|r,Ln=i+e}else On=1<<i|t<<o|r,Ln=e}function hs(e){e.return!==null&&(ct(e,1),Of(e,1,0))}function gs(e){for(;e===ui;)ui=$t[--It],$t[It]=null,ci=$t[--It],$t[It]=null;for(;e===vt;)vt=We[--Ve],We[Ve]=null,Ln=We[--Ve],We[Ve]=null,On=We[--Ve],We[Ve]=null}var je=null,Fe=null,G=!1,nn=null;function Lf(e,n){var t=Ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function yc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,je=e,Fe=Gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,je=e,Fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=vt!==null?{id:On,overflow:Ln}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,je=e,Fe=null,!0):!1;default:return!1}}function vl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(G){var n=Fe;if(n){var t=n;if(!yc(e,n)){if(vl(e))throw Error(L(418));n=Gn(t.nextSibling);var r=je;n&&yc(e,n)?Lf(r,t):(e.flags=e.flags&-4097|2,G=!1,je=e)}}else{if(vl(e))throw Error(L(418));e.flags=e.flags&-4097|2,G=!1,je=e}}}function vc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Oo(e){if(e!==je)return!1;if(!G)return vc(e),G=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ml(e.type,e.memoizedProps)),n&&(n=Fe)){if(vl(e))throw zf(),Error(L(418));for(;n;)Lf(e,n),n=Gn(n.nextSibling)}if(vc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Fe=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Fe=null}}else Fe=je?Gn(e.stateNode.nextSibling):null;return!0}function zf(){for(var e=Fe;e;)e=Gn(e.nextSibling)}function Zt(){Fe=je=null,G=!1}function ys(e){nn===null?nn=[e]:nn.push(e)}var E0=Fn.ReactCurrentBatchConfig;function qe(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}var di=it(null),fi=null,Mt=null,vs=null;function ws(){vs=Mt=fi=null}function ks(e){var n=di.current;Q(di),e._currentValue=n}function kl(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Kt(e,n){fi=e,vs=Mt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Le=!0),e.firstContext=null)}function Ge(e){var n=e._currentValue;if(vs!==e)if(e={context:e,memoizedValue:n,next:null},Mt===null){if(fi===null)throw Error(L(308));Mt=e,fi.dependencies={lanes:0,firstContext:e}}else Mt=Mt.next=e;return n}var pt=null;function bs(e){pt===null?pt=[e]:pt.push(e)}function Rf(e,n,t,r){var o=n.interleaved;return o===null?(t.next=t,bs(n)):(t.next=o.next,o.next=t),n.interleaved=t,Nn(e,r)}function Nn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var In=!1;function xs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _f(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Yn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),r.pending=n,Nn(e,t)}return o=r.interleaved,o===null?(n.next=n,bs(r)):(n.next=o.next,o.next=n),r.interleaved=n,Nn(e,t)}function Do(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ls(e,t)}}function wc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=n:i=i.next=n}else o=i=n;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function pi(e,n,t,r){var o=e.updateQueue;In=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,c=s.next;s.next=null,a===null?i=c:a.next=c,a=s;var m=e.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==a&&(l===null?m.firstBaseUpdate=c:l.next=c,m.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;a=0,m=c=s=null,l=i;do{var h=l.lane,y=l.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(h=n,y=t,v.tag){case 1:if(w=v.payload,typeof w=="function"){p=w.call(y,p,h);break e}p=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,h=typeof w=="function"?w.call(y,p,h):w,h==null)break e;p=X({},p,h);break e;case 2:In=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(c=m=y,s=p):m=m.next=y,a|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(m===null&&(s=p),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=m,n=o.shared.interleaved,n!==null){o=n;do a|=o.lane,o=o.next;while(o!==n)}else i===null&&(o.shared.lanes=0);kt|=a,e.lanes=a,e.memoizedState=p}}function kc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(L(191,o));o.call(r)}}}var Nf=new zd.Component().refs;function bl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:X({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ji={isMounted:function(e){return(e=e._reactInternals)?St(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Se(),o=Xn(e),i=zn(r,o);i.payload=n,t!=null&&(i.callback=t),n=Yn(e,i,o),n!==null&&(on(n,e,o,r),Do(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Se(),o=Xn(e),i=zn(r,o);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Yn(e,i,o),n!==null&&(on(n,e,o,r),Do(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Se(),r=Xn(e),o=zn(t,r);o.tag=2,n!=null&&(o.callback=n),n=Yn(e,o,r),n!==null&&(on(n,e,r,t),Do(n,e,r))}};function bc(e,n,t,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):n.prototype&&n.prototype.isPureReactComponent?!Hr(t,r)||!Hr(o,i):!0}function Tf(e,n,t){var r=!1,o=tt,i=n.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(o=Re(n)?yt:we.current,r=n.contextTypes,i=(r=r!=null)?Xt(e,o):tt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ji,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),n}function xc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ji.enqueueReplaceState(n,n.state,null)}function xl(e,n,t,r){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs=Nf,xs(e);var i=n.contextType;typeof i=="object"&&i!==null?o.context=Ge(i):(i=Re(n)?yt:we.current,o.context=Xt(e,i)),o.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(bl(e,n,i,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&ji.enqueueReplaceState(o,o.state,null),pi(e,t,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var r=t.stateNode}if(!r)throw Error(L(147,e));var o=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(a){var l=o.refs;l===Nf&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},n._stringRef=i,n)}if(typeof e!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,e))}return e}function Lo(e,n){throw e=Object.prototype.toString.call(n),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Sc(e){var n=e._init;return n(e._payload)}function Ff(e){function n(f,u){if(e){var d=f.deletions;d===null?(f.deletions=[u],f.flags|=16):d.push(u)}}function t(f,u){if(!e)return null;for(;u!==null;)n(f,u),u=u.sibling;return null}function r(f,u){for(f=new Map;u!==null;)u.key!==null?f.set(u.key,u):f.set(u.index,u),u=u.sibling;return f}function o(f,u){return f=Zn(f,u),f.index=0,f.sibling=null,f}function i(f,u,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<u?(f.flags|=2,u):d):(f.flags|=2,u)):(f.flags|=1048576,u)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,u,d,g){return u===null||u.tag!==6?(u=Ta(d,f.mode,g),u.return=f,u):(u=o(u,d),u.return=f,u)}function s(f,u,d,g){var k=d.type;return k===_t?m(f,u,d.props.children,g,d.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===$n&&Sc(k)===u.type)?(g=o(u,d.props),g.ref=vr(f,u,d),g.return=f,g):(g=Ko(d.type,d.key,d.props,null,f.mode,g),g.ref=vr(f,u,d),g.return=f,g)}function c(f,u,d,g){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Fa(d,f.mode,g),u.return=f,u):(u=o(u,d.children||[]),u.return=f,u)}function m(f,u,d,g,k){return u===null||u.tag!==7?(u=gt(d,f.mode,g,k),u.return=f,u):(u=o(u,d),u.return=f,u)}function p(f,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ta(""+u,f.mode,d),u.return=f,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case yo:return d=Ko(u.type,u.key,u.props,null,f.mode,d),d.ref=vr(f,null,u),d.return=f,d;case Rt:return u=Fa(u,f.mode,d),u.return=f,u;case $n:var g=u._init;return p(f,g(u._payload),d)}if(Sr(u)||pr(u))return u=gt(u,f.mode,d,null),u.return=f,u;Lo(f,u)}return null}function h(f,u,d,g){var k=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:l(f,u,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yo:return d.key===k?s(f,u,d,g):null;case Rt:return d.key===k?c(f,u,d,g):null;case $n:return k=d._init,h(f,u,k(d._payload),g)}if(Sr(d)||pr(d))return k!==null?null:m(f,u,d,g,null);Lo(f,d)}return null}function y(f,u,d,g,k){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(d)||null,l(u,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yo:return f=f.get(g.key===null?d:g.key)||null,s(u,f,g,k);case Rt:return f=f.get(g.key===null?d:g.key)||null,c(u,f,g,k);case $n:var b=g._init;return y(f,u,d,b(g._payload),k)}if(Sr(g)||pr(g))return f=f.get(d)||null,m(u,f,g,k,null);Lo(u,g)}return null}function w(f,u,d,g){for(var k=null,b=null,C=u,P=u=0,O=null;C!==null&&P<d.length;P++){C.index>P?(O=C,C=null):O=C.sibling;var _=h(f,C,d[P],g);if(_===null){C===null&&(C=O);break}e&&C&&_.alternate===null&&n(f,C),u=i(_,u,P),b===null?k=_:b.sibling=_,b=_,C=O}if(P===d.length)return t(f,C),G&&ct(f,P),k;if(C===null){for(;P<d.length;P++)C=p(f,d[P],g),C!==null&&(u=i(C,u,P),b===null?k=C:b.sibling=C,b=C);return G&&ct(f,P),k}for(C=r(f,C);P<d.length;P++)O=y(C,f,P,d[P],g),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),u=i(O,u,P),b===null?k=O:b.sibling=O,b=O);return e&&C.forEach(function($){return n(f,$)}),G&&ct(f,P),k}function v(f,u,d,g){var k=pr(d);if(typeof k!="function")throw Error(L(150));if(d=k.call(d),d==null)throw Error(L(151));for(var b=k=null,C=u,P=u=0,O=null,_=d.next();C!==null&&!_.done;P++,_=d.next()){C.index>P?(O=C,C=null):O=C.sibling;var $=h(f,C,_.value,g);if($===null){C===null&&(C=O);break}e&&C&&$.alternate===null&&n(f,C),u=i($,u,P),b===null?k=$:b.sibling=$,b=$,C=O}if(_.done)return t(f,C),G&&ct(f,P),k;if(C===null){for(;!_.done;P++,_=d.next())_=p(f,_.value,g),_!==null&&(u=i(_,u,P),b===null?k=_:b.sibling=_,b=_);return G&&ct(f,P),k}for(C=r(f,C);!_.done;P++,_=d.next())_=y(C,f,P,_.value,g),_!==null&&(e&&_.alternate!==null&&C.delete(_.key===null?P:_.key),u=i(_,u,P),b===null?k=_:b.sibling=_,b=_);return e&&C.forEach(function(re){return n(f,re)}),G&&ct(f,P),k}function x(f,u,d,g){if(typeof d=="object"&&d!==null&&d.type===_t&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case yo:e:{for(var k=d.key,b=u;b!==null;){if(b.key===k){if(k=d.type,k===_t){if(b.tag===7){t(f,b.sibling),u=o(b,d.props.children),u.return=f,f=u;break e}}else if(b.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===$n&&Sc(k)===b.type){t(f,b.sibling),u=o(b,d.props),u.ref=vr(f,b,d),u.return=f,f=u;break e}t(f,b);break}else n(f,b);b=b.sibling}d.type===_t?(u=gt(d.props.children,f.mode,g,d.key),u.return=f,f=u):(g=Ko(d.type,d.key,d.props,null,f.mode,g),g.ref=vr(f,u,d),g.return=f,f=g)}return a(f);case Rt:e:{for(b=d.key;u!==null;){if(u.key===b)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){t(f,u.sibling),u=o(u,d.children||[]),u.return=f,f=u;break e}else{t(f,u);break}else n(f,u);u=u.sibling}u=Fa(d,f.mode,g),u.return=f,f=u}return a(f);case $n:return b=d._init,x(f,u,b(d._payload),g)}if(Sr(d))return w(f,u,d,g);if(pr(d))return v(f,u,d,g);Lo(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(t(f,u.sibling),u=o(u,d),u.return=f,f=u):(t(f,u),u=Ta(d,f.mode,g),u.return=f,f=u),a(f)):t(f,u)}return x}var qt=Ff(!0),jf=Ff(!1),so={},wn=it(so),Qr=it(so),Gr=it(so);function mt(e){if(e===so)throw Error(L(174));return e}function Ss(e,n){switch(V(Gr,n),V(Qr,e),V(wn,so),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:el(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=el(n,e)}Q(wn),V(wn,n)}function er(){Q(wn),Q(Qr),Q(Gr)}function Af(e){mt(Gr.current);var n=mt(wn.current),t=el(n,e.type);n!==t&&(V(Qr,e),V(wn,t))}function Cs(e){Qr.current===e&&(Q(wn),Q(Qr))}var Y=it(0);function mi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=[];function Es(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var Uo=Fn.ReactCurrentDispatcher,La=Fn.ReactCurrentBatchConfig,wt=0,J=null,oe=null,se=null,hi=!1,_r=!1,Yr=0,P0=0;function he(){throw Error(L(321))}function Ps(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!an(e[t],n[t]))return!1;return!0}function Os(e,n,t,r,o,i){if(wt=i,J=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Uo.current=e===null||e.memoizedState===null?R0:_0,e=t(r,o),_r){i=0;do{if(_r=!1,Yr=0,25<=i)throw Error(L(301));i+=1,se=oe=null,n.updateQueue=null,Uo.current=N0,e=t(r,o)}while(_r)}if(Uo.current=gi,n=oe!==null&&oe.next!==null,wt=0,se=oe=J=null,hi=!1,n)throw Error(L(300));return e}function Ls(){var e=Yr!==0;return Yr=0,e}function pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?J.memoizedState=se=e:se=se.next=e,se}function Ye(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var n=se===null?J.memoizedState:se.next;if(n!==null)se=n,oe=e;else{if(e===null)throw Error(L(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},se===null?J.memoizedState=se=e:se=se.next=e}return se}function Jr(e,n){return typeof n=="function"?n(e):n}function za(e){var n=Ye(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=oe,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,c=i;do{var m=c.lane;if((wt&m)===m)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=p,a=r):s=s.next=p,J.lanes|=m,kt|=m}c=c.next}while(c!==null&&c!==i);s===null?a=r:s.next=l,an(r,n.memoizedState)||(Le=!0),n.memoizedState=r,n.baseState=a,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){o=e;do i=o.lane,J.lanes|=i,kt|=i,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ra(e){var n=Ye(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=t.dispatch,o=t.pending,i=n.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);an(i,n.memoizedState)||(Le=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function $f(){}function If(e,n){var t=J,r=Ye(),o=n(),i=!an(r.memoizedState,o);if(i&&(r.memoizedState=o,Le=!0),r=r.queue,zs(Uf.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||se!==null&&se.memoizedState.tag&1){if(t.flags|=2048,Xr(9,Df.bind(null,t,r,o,n),void 0,null),ue===null)throw Error(L(349));wt&30||Mf(t,n,o)}return o}function Mf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Df(e,n,t,r){n.value=t,n.getSnapshot=r,Bf(n)&&Hf(e)}function Uf(e,n,t){return t(function(){Bf(n)&&Hf(e)})}function Bf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!an(e,t)}catch{return!0}}function Hf(e){var n=Nn(e,1);n!==null&&on(n,e,1,-1)}function Cc(e){var n=pn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},n.queue=e,e=e.dispatch=z0.bind(null,J,e),[n.memoizedState,e]}function Xr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=J.updateQueue,n===null?(n={lastEffect:null,stores:null},J.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Wf(){return Ye().memoizedState}function Bo(e,n,t,r){var o=pn();J.flags|=e,o.memoizedState=Xr(1|n,t,void 0,r===void 0?null:r)}function Ai(e,n,t,r){var o=Ye();r=r===void 0?null:r;var i=void 0;if(oe!==null){var a=oe.memoizedState;if(i=a.destroy,r!==null&&Ps(r,a.deps)){o.memoizedState=Xr(n,t,i,r);return}}J.flags|=e,o.memoizedState=Xr(1|n,t,i,r)}function Ec(e,n){return Bo(8390656,8,e,n)}function zs(e,n){return Ai(2048,8,e,n)}function Vf(e,n){return Ai(4,2,e,n)}function Kf(e,n){return Ai(4,4,e,n)}function Qf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gf(e,n,t){return t=t!=null?t.concat([e]):null,Ai(4,4,Qf.bind(null,n,e),t)}function Rs(){}function Yf(e,n){var t=Ye();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ps(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Jf(e,n){var t=Ye();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ps(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Xf(e,n,t){return wt&21?(an(t,n)||(t=qd(),J.lanes|=t,kt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=t)}function O0(e,n){var t=H;H=t!==0&&4>t?t:4,e(!0);var r=La.transition;La.transition={};try{e(!1),n()}finally{H=t,La.transition=r}}function Zf(){return Ye().memoizedState}function L0(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},qf(e))ep(n,t);else if(t=Rf(e,n,t,r),t!==null){var o=Se();on(t,e,r,o),np(t,n,r)}}function z0(e,n,t){var r=Xn(e),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(qf(e))ep(n,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var a=n.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,an(l,a)){var s=n.interleaved;s===null?(o.next=o,bs(n)):(o.next=s.next,s.next=o),n.interleaved=o;return}}catch{}finally{}t=Rf(e,n,o,r),t!==null&&(o=Se(),on(t,e,r,o),np(t,n,r))}}function qf(e){var n=e.alternate;return e===J||n!==null&&n===J}function ep(e,n){_r=hi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function np(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ls(e,t)}}var gi={readContext:Ge,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},R0={readContext:Ge,useCallback:function(e,n){return pn().memoizedState=[e,n===void 0?null:n],e},useContext:Ge,useEffect:Ec,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Bo(4194308,4,Qf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Bo(4194308,4,e,n)},useInsertionEffect:function(e,n){return Bo(4,2,e,n)},useMemo:function(e,n){var t=pn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=pn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=L0.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var n=pn();return e={current:e},n.memoizedState=e},useState:Cc,useDebugValue:Rs,useDeferredValue:function(e){return pn().memoizedState=e},useTransition:function(){var e=Cc(!1),n=e[0];return e=O0.bind(null,e[1]),pn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=J,o=pn();if(G){if(t===void 0)throw Error(L(407));t=t()}else{if(t=n(),ue===null)throw Error(L(349));wt&30||Mf(r,n,t)}o.memoizedState=t;var i={value:t,getSnapshot:n};return o.queue=i,Ec(Uf.bind(null,r,i,e),[e]),r.flags|=2048,Xr(9,Df.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=pn(),n=ue.identifierPrefix;if(G){var t=Ln,r=On;t=(r&~(1<<32-rn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Yr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=P0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},_0={readContext:Ge,useCallback:Yf,useContext:Ge,useEffect:zs,useImperativeHandle:Gf,useInsertionEffect:Vf,useLayoutEffect:Kf,useMemo:Jf,useReducer:za,useRef:Wf,useState:function(){return za(Jr)},useDebugValue:Rs,useDeferredValue:function(e){var n=Ye();return Xf(n,oe.memoizedState,e)},useTransition:function(){var e=za(Jr)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:$f,useSyncExternalStore:If,useId:Zf,unstable_isNewReconciler:!1},N0={readContext:Ge,useCallback:Yf,useContext:Ge,useEffect:zs,useImperativeHandle:Gf,useInsertionEffect:Vf,useLayoutEffect:Kf,useMemo:Jf,useReducer:Ra,useRef:Wf,useState:function(){return Ra(Jr)},useDebugValue:Rs,useDeferredValue:function(e){var n=Ye();return oe===null?n.memoizedState=e:Xf(n,oe.memoizedState,e)},useTransition:function(){var e=Ra(Jr)[0],n=Ye().memoizedState;return[e,n]},useMutableSource:$f,useSyncExternalStore:If,useId:Zf,unstable_isNewReconciler:!1};function nr(e,n){try{var t="",r=n;do t+=ag(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:o,digest:null}}function _a(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Sl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var T0=typeof WeakMap=="function"?WeakMap:Map;function tp(e,n,t){t=zn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){vi||(vi=!0,Tl=r),Sl(e,n)},t}function rp(e,n,t){t=zn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=n.value;t.payload=function(){return r(o)},t.callback=function(){Sl(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Sl(e,n),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Pc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new T0;var o=new Set;r.set(n,o)}else o=r.get(n),o===void 0&&(o=new Set,r.set(n,o));o.has(t)||(o.add(t),e=Q0.bind(null,e,n,t),n.then(e,e))}function Oc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Lc(e,n,t,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=zn(-1,1),n.tag=2,Yn(t,n,1))),t.lanes|=1),e)}var F0=Fn.ReactCurrentOwner,Le=!1;function xe(e,n,t,r){n.child=e===null?jf(n,null,t,r):qt(n,e.child,t,r)}function zc(e,n,t,r,o){t=t.render;var i=n.ref;return Kt(n,o),r=Os(e,n,t,r,i,o),t=Ls(),e!==null&&!Le?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Tn(e,n,o)):(G&&t&&hs(n),n.flags|=1,xe(e,n,r,o),n.child)}function Rc(e,n,t,r,o){if(e===null){var i=t.type;return typeof i=="function"&&!Is(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,op(e,n,i,r,o)):(e=Ko(t.type,null,r,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:Hr,t(a,r)&&e.ref===n.ref)return Tn(e,n,o)}return n.flags|=1,e=Zn(i,r),e.ref=n.ref,e.return=n,n.child=e}function op(e,n,t,r,o){if(e!==null){var i=e.memoizedProps;if(Hr(i,r)&&e.ref===n.ref)if(Le=!1,n.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return n.lanes=e.lanes,Tn(e,n,o)}return Cl(e,n,t,r,o)}function ip(e,n,t){var r=n.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Ut,Te),Te|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,V(Ut,Te),Te|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,V(Ut,Te),Te|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,V(Ut,Te),Te|=r;return xe(e,n,o,t),n.child}function ap(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Cl(e,n,t,r,o){var i=Re(t)?yt:we.current;return i=Xt(n,i),Kt(n,o),t=Os(e,n,t,r,i,o),r=Ls(),e!==null&&!Le?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Tn(e,n,o)):(G&&r&&hs(n),n.flags|=1,xe(e,n,t,o),n.child)}function _c(e,n,t,r,o){if(Re(t)){var i=!0;si(n)}else i=!1;if(Kt(n,o),n.stateNode===null)Ho(e,n),Tf(n,t,r),xl(n,t,r,o),r=!0;else if(e===null){var a=n.stateNode,l=n.memoizedProps;a.props=l;var s=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ge(c):(c=Re(t)?yt:we.current,c=Xt(n,c));var m=t.getDerivedStateFromProps,p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==c)&&xc(n,a,r,c),In=!1;var h=n.memoizedState;a.state=h,pi(n,r,a,o),s=n.memoizedState,l!==r||h!==s||ze.current||In?(typeof m=="function"&&(bl(n,t,m,r),s=n.memoizedState),(l=In||bc(n,t,l,r,h,s,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),a.props=r,a.state=s,a.context=c,r=l):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{a=n.stateNode,_f(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:qe(n.type,l),a.props=c,p=n.pendingProps,h=a.context,s=t.contextType,typeof s=="object"&&s!==null?s=Ge(s):(s=Re(t)?yt:we.current,s=Xt(n,s));var y=t.getDerivedStateFromProps;(m=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||h!==s)&&xc(n,a,r,s),In=!1,h=n.memoizedState,a.state=h,pi(n,r,a,o);var w=n.memoizedState;l!==p||h!==w||ze.current||In?(typeof y=="function"&&(bl(n,t,y,r),w=n.memoizedState),(c=In||bc(n,t,c,r,h,w,s)||!1)?(m||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=w),a.props=r,a.state=w,a.context=s,r=c):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return El(e,n,t,r,i,o)}function El(e,n,t,r,o,i){ap(e,n);var a=(n.flags&128)!==0;if(!r&&!a)return o&&gc(n,t,!1),Tn(e,n,i);r=n.stateNode,F0.current=n;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&a?(n.child=qt(n,e.child,null,i),n.child=qt(n,null,l,i)):xe(e,n,l,i),n.memoizedState=r.state,o&&gc(n,t,!0),n.child}function lp(e){var n=e.stateNode;n.pendingContext?hc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&hc(e,n.context,!1),Ss(e,n.containerInfo)}function Nc(e,n,t,r,o){return Zt(),ys(o),n.flags|=256,xe(e,n,t,r),n.child}var Pl={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function sp(e,n,t){var r=n.pendingProps,o=Y.current,i=!1,a=(n.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Y,o&1),e===null)return wl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=r.children,e=r.fallback,i?(r=n.mode,i=n.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Mi(a,r,0,null),e=gt(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ol(t),n.memoizedState=Pl,e):_s(n,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return j0(e,n,a,r,l,o,t);if(i){i=r.fallback,a=n.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&n.child!==o?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=Zn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Zn(l,i):(i=gt(i,a,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,a=e.child.memoizedState,a=a===null?Ol(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~t,n.memoizedState=Pl,r}return i=e.child,e=i.sibling,r=Zn(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function _s(e,n){return n=Mi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function zo(e,n,t,r){return r!==null&&ys(r),qt(n,e.child,null,t),e=_s(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function j0(e,n,t,r,o,i,a){if(t)return n.flags&256?(n.flags&=-257,r=_a(Error(L(422))),zo(e,n,a,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,o=n.mode,r=Mi({mode:"visible",children:r.children},o,0,null),i=gt(i,o,a,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&qt(n,e.child,null,a),n.child.memoizedState=Ol(a),n.memoizedState=Pl,i);if(!(n.mode&1))return zo(e,n,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=_a(i,r,void 0),zo(e,n,a,r)}if(l=(a&e.childLanes)!==0,Le||l){if(r=ue,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nn(e,o),on(r,e,o,-1))}return $s(),r=_a(Error(L(421))),zo(e,n,a,r)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=G0.bind(null,e),o._reactRetry=n,null):(e=i.treeContext,Fe=Gn(o.nextSibling),je=n,G=!0,nn=null,e!==null&&(We[Ve++]=On,We[Ve++]=Ln,We[Ve++]=vt,On=e.id,Ln=e.overflow,vt=n),n=_s(n,r.children),n.flags|=4096,n)}function Tc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),kl(e.return,n,t)}function Na(e,n,t,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function up(e,n,t){var r=n.pendingProps,o=r.revealOrder,i=r.tail;if(xe(e,n,r.children,t),r=Y.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,t,n);else if(e.tag===19)Tc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Y,r),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&mi(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),Na(n,!1,o,t,i);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&mi(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}Na(n,!0,t,null,i);break;case"together":Na(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ho(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),kt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(L(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function A0(e,n,t){switch(n.tag){case 3:lp(n),Zt();break;case 5:Af(n);break;case 1:Re(n.type)&&si(n);break;case 4:Ss(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,o=n.memoizedProps.value;V(di,r._currentValue),r._currentValue=o;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),n.flags|=128,null):t&n.child.childLanes?sp(e,n,t):(V(Y,Y.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return up(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return n.lanes=0,ip(e,n,t)}return Tn(e,n,t)}var cp,Ll,dp,fp;cp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ll=function(){};dp=function(e,n,t,r){var o=e.memoizedProps;if(o!==r){e=n.stateNode,mt(wn.current);var i=null;switch(t){case"input":o=Ja(e,o),r=Ja(e,r),i=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),i=[];break;case"textarea":o=qa(e,o),r=qa(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ai)}nl(t,r);var a;t=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var l=o[c];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ar.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var s=r[c];if(l=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(t||(t={}),t[a]=s[a])}else t||(i||(i=[]),i.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ar.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&K("scroll",e),i||l===s||(i=[])):(i=i||[]).push(c,s))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};fp=function(e,n,t,r){t!==r&&(n.flags|=4)};function wr(e,n){if(!G)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function $0(e,n,t){var r=n.pendingProps;switch(gs(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(n),null;case 1:return Re(n.type)&&li(),ge(n),null;case 3:return r=n.stateNode,er(),Q(ze),Q(we),Es(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,nn!==null&&(Al(nn),nn=null))),Ll(e,n),ge(n),null;case 5:Cs(n);var o=mt(Gr.current);if(t=n.type,e!==null&&n.stateNode!=null)dp(e,n,t,r,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(L(166));return ge(n),null}if(e=mt(wn.current),Oo(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[gn]=n,r[Kr]=i,e=(n.mode&1)!==0,t){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(o=0;o<Er.length;o++)K(Er[o],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Bu(r,i),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},K("invalid",r);break;case"textarea":Wu(r,i),K("invalid",r)}nl(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Po(r.textContent,l,e),o=["children",""+l]):Ar.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&K("scroll",r)}switch(t){case"input":vo(r),Hu(r,i,!0);break;case"textarea":vo(r),Vu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ai)}r=o,n.updateQueue=r,r!==null&&(n.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Id(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(t,{is:r.is}):(e=a.createElement(t),t==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,t),e[gn]=n,e[Kr]=r,cp(e,n,!1,!1),n.stateNode=e;e:{switch(a=tl(t,r),t){case"dialog":K("cancel",e),K("close",e),o=r;break;case"iframe":case"object":case"embed":K("load",e),o=r;break;case"video":case"audio":for(o=0;o<Er.length;o++)K(Er[o],e);o=r;break;case"source":K("error",e),o=r;break;case"img":case"image":case"link":K("error",e),K("load",e),o=r;break;case"details":K("toggle",e),o=r;break;case"input":Bu(e,r),o=Ja(e,r),K("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),K("invalid",e);break;case"textarea":Wu(e,r),o=qa(e,r),K("invalid",e);break;default:o=r}nl(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Ud(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Md(e,s)):i==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&$r(e,s):typeof s=="number"&&$r(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ar.hasOwnProperty(i)?s!=null&&i==="onScroll"&&K("scroll",e):s!=null&&ns(e,i,s,a))}switch(t){case"input":vo(e),Hu(e,r,!1);break;case"textarea":vo(e),Vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+nt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ai)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ge(n),null;case 6:if(e&&n.stateNode!=null)fp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(L(166));if(t=mt(Gr.current),mt(wn.current),Oo(n)){if(r=n.stateNode,t=n.memoizedProps,r[gn]=n,(i=r.nodeValue!==t)&&(e=je,e!==null))switch(e.tag){case 3:Po(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Po(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[gn]=n,n.stateNode=r}return ge(n),null;case 13:if(Q(Y),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&Fe!==null&&n.mode&1&&!(n.flags&128))zf(),Zt(),n.flags|=98560,i=!1;else if(i=Oo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[gn]=n}else Zt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ge(n),i=!1}else nn!==null&&(Al(nn),nn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||Y.current&1?ie===0&&(ie=3):$s())),n.updateQueue!==null&&(n.flags|=4),ge(n),null);case 4:return er(),Ll(e,n),e===null&&Wr(n.stateNode.containerInfo),ge(n),null;case 10:return ks(n.type._context),ge(n),null;case 17:return Re(n.type)&&li(),ge(n),null;case 19:if(Q(Y),i=n.memoizedState,i===null)return ge(n),null;if(r=(n.flags&128)!==0,a=i.rendering,a===null)if(r)wr(i,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=mi(e),a!==null){for(n.flags|=128,wr(i,!1),r=a.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return V(Y,Y.current&1|2),n.child}e=e.sibling}i.tail!==null&&ee()>tr&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304)}else{if(!r)if(e=mi(a),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!G)return ge(n),null}else 2*ee()-i.renderingStartTime>tr&&t!==1073741824&&(n.flags|=128,r=!0,wr(i,!1),n.lanes=4194304);i.isBackwards?(a.sibling=n.child,n.child=a):(t=i.last,t!==null?t.sibling=a:n.child=a,i.last=a)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ee(),n.sibling=null,t=Y.current,V(Y,r?t&1|2:t&1),n):(ge(n),null);case 22:case 23:return As(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Te&1073741824&&(ge(n),n.subtreeFlags&6&&(n.flags|=8192)):ge(n),null;case 24:return null;case 25:return null}throw Error(L(156,n.tag))}function I0(e,n){switch(gs(n),n.tag){case 1:return Re(n.type)&&li(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return er(),Q(ze),Q(we),Es(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Cs(n),null;case 13:if(Q(Y),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(L(340));Zt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(Y),null;case 4:return er(),null;case 10:return ks(n.type._context),null;case 22:case 23:return As(),null;case 24:return null;default:return null}}var Ro=!1,ve=!1,M0=typeof WeakSet=="function"?WeakSet:Set,N=null;function Dt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){q(e,n,r)}else t.current=null}function zl(e,n,t){try{t()}catch(r){q(e,n,r)}}var Fc=!1;function D0(e,n){if(fl=ri,e=gf(),ms(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var a=0,l=-1,s=-1,c=0,m=0,p=e,h=null;n:for(;;){for(var y;p!==t||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(s=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(y=p.firstChild)!==null;)h=p,p=y;for(;;){if(p===e)break n;if(h===t&&++c===o&&(l=a),h===i&&++m===r&&(s=a),(y=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=y}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(pl={focusedElem:e,selectionRange:t},ri=!1,N=n;N!==null;)if(n=N,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,N=e;else for(;N!==null;){n=N;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,x=w.memoizedState,f=n.stateNode,u=f.getSnapshotBeforeUpdate(n.elementType===n.type?v:qe(n.type,v),x);f.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(g){q(n,n.return,g)}if(e=n.sibling,e!==null){e.return=n.return,N=e;break}N=n.return}return w=Fc,Fc=!1,w}function Nr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&zl(n,t,i)}o=o.next}while(o!==r)}}function $i(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Rl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function pp(e){var n=e.alternate;n!==null&&(e.alternate=null,pp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[gn],delete n[Kr],delete n[gl],delete n[x0],delete n[S0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function mp(e){return e.tag===5||e.tag===3||e.tag===4}function jc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _l(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ai));else if(r!==4&&(e=e.child,e!==null))for(_l(e,n,t),e=e.sibling;e!==null;)_l(e,n,t),e=e.sibling}function Nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}var de=null,en=!1;function An(e,n,t){for(t=t.child;t!==null;)hp(e,n,t),t=t.sibling}function hp(e,n,t){if(vn&&typeof vn.onCommitFiberUnmount=="function")try{vn.onCommitFiberUnmount(zi,t)}catch{}switch(t.tag){case 5:ve||Dt(t,n);case 6:var r=de,o=en;de=null,An(e,n,t),de=r,en=o,de!==null&&(en?(e=de,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):de.removeChild(t.stateNode));break;case 18:de!==null&&(en?(e=de,t=t.stateNode,e.nodeType===8?Ea(e.parentNode,t):e.nodeType===1&&Ea(e,t),Ur(e)):Ea(de,t.stateNode));break;case 4:r=de,o=en,de=t.stateNode.containerInfo,en=!0,An(e,n,t),de=r,en=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&zl(t,n,a),o=o.next}while(o!==r)}An(e,n,t);break;case 1:if(!ve&&(Dt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){q(t,n,l)}An(e,n,t);break;case 21:An(e,n,t);break;case 22:t.mode&1?(ve=(r=ve)||t.memoizedState!==null,An(e,n,t),ve=r):An(e,n,t);break;default:An(e,n,t)}}function Ac(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new M0),n.forEach(function(r){var o=Y0.bind(null,e,r);t.has(r)||(t.add(r),r.then(o,o))})}}function Ze(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=e,a=n,l=a;e:for(;l!==null;){switch(l.tag){case 5:de=l.stateNode,en=!1;break e;case 3:de=l.stateNode.containerInfo,en=!0;break e;case 4:de=l.stateNode.containerInfo,en=!0;break e}l=l.return}if(de===null)throw Error(L(160));hp(i,a,o),de=null,en=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){q(o,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gp(n,e),n=n.sibling}function gp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(n,e),dn(e),r&4){try{Nr(3,e,e.return),$i(3,e)}catch(v){q(e,e.return,v)}try{Nr(5,e,e.return)}catch(v){q(e,e.return,v)}}break;case 1:Ze(n,e),dn(e),r&512&&t!==null&&Dt(t,t.return);break;case 5:if(Ze(n,e),dn(e),r&512&&t!==null&&Dt(t,t.return),e.flags&32){var o=e.stateNode;try{$r(o,"")}catch(v){q(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=t!==null?t.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ad(o,i),tl(l,a);var c=tl(l,i);for(a=0;a<s.length;a+=2){var m=s[a],p=s[a+1];m==="style"?Ud(o,p):m==="dangerouslySetInnerHTML"?Md(o,p):m==="children"?$r(o,p):ns(o,m,p,c)}switch(l){case"input":Xa(o,i);break;case"textarea":$d(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Bt(o,!!i.multiple,y,!1):h!==!!i.multiple&&(i.defaultValue!=null?Bt(o,!!i.multiple,i.defaultValue,!0):Bt(o,!!i.multiple,i.multiple?[]:"",!1))}o[Kr]=i}catch(v){q(e,e.return,v)}}break;case 6:if(Ze(n,e),dn(e),r&4){if(e.stateNode===null)throw Error(L(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){q(e,e.return,v)}}break;case 3:if(Ze(n,e),dn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ur(n.containerInfo)}catch(v){q(e,e.return,v)}break;case 4:Ze(n,e),dn(e);break;case 13:Ze(n,e),dn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Fs=ee())),r&4&&Ac(e);break;case 22:if(m=t!==null&&t.memoizedState!==null,e.mode&1?(ve=(c=ve)||m,Ze(n,e),ve=c):Ze(n,e),dn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(N=e,m=e.child;m!==null;){for(p=N=m;N!==null;){switch(h=N,y=h.child,h.tag){case 0:case 11:case 14:case 15:Nr(4,h,h.return);break;case 1:Dt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(v){q(r,t,v)}}break;case 5:Dt(h,h.return);break;case 22:if(h.memoizedState!==null){Ic(p);continue}}y!==null?(y.return=h,N=y):Ic(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,s=p.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Dd("display",a))}catch(v){q(e,e.return,v)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(v){q(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ze(n,e),dn(e),r&4&&Ac(e);break;case 21:break;default:Ze(n,e),dn(e)}}function dn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(mp(t)){var r=t;break e}t=t.return}throw Error(L(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($r(o,""),r.flags&=-33);var i=jc(e);Nl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=jc(e);_l(e,l,a);break;default:throw Error(L(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function U0(e,n,t){N=e,yp(e)}function yp(e,n,t){for(var r=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ro;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||ve;l=Ro;var c=ve;if(Ro=a,(ve=s)&&!c)for(N=o;N!==null;)a=N,s=a.child,a.tag===22&&a.memoizedState!==null?Mc(o):s!==null?(s.return=a,N=s):Mc(o);for(;i!==null;)N=i,yp(i),i=i.sibling;N=o,Ro=l,ve=c}$c(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):$c(e)}}function $c(e){for(;N!==null;){var n=N;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ve||$i(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ve)if(t===null)r.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:qe(n.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&kc(n,i,r);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}kc(n,a,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Ur(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ve||n.flags&512&&Rl(n)}catch(h){q(n,n.return,h)}}if(n===e){N=null;break}if(t=n.sibling,t!==null){t.return=n.return,N=t;break}N=n.return}}function Ic(e){for(;N!==null;){var n=N;if(n===e){N=null;break}var t=n.sibling;if(t!==null){t.return=n.return,N=t;break}N=n.return}}function Mc(e){for(;N!==null;){var n=N;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{$i(4,n)}catch(s){q(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var o=n.return;try{r.componentDidMount()}catch(s){q(n,o,s)}}var i=n.return;try{Rl(n)}catch(s){q(n,i,s)}break;case 5:var a=n.return;try{Rl(n)}catch(s){q(n,a,s)}}}catch(s){q(n,n.return,s)}if(n===e){N=null;break}var l=n.sibling;if(l!==null){l.return=n.return,N=l;break}N=n.return}}var B0=Math.ceil,yi=Fn.ReactCurrentDispatcher,Ns=Fn.ReactCurrentOwner,Qe=Fn.ReactCurrentBatchConfig,I=0,ue=null,te=null,pe=0,Te=0,Ut=it(0),ie=0,Zr=null,kt=0,Ii=0,Ts=0,Tr=null,Oe=null,Fs=0,tr=1/0,En=null,vi=!1,Tl=null,Jn=null,_o=!1,Bn=null,wi=0,Fr=0,Fl=null,Wo=-1,Vo=0;function Se(){return I&6?ee():Wo!==-1?Wo:Wo=ee()}function Xn(e){return e.mode&1?I&2&&pe!==0?pe&-pe:E0.transition!==null?(Vo===0&&(Vo=qd()),Vo):(e=H,e!==0||(e=window.event,e=e===void 0?16:lf(e.type)),e):1}function on(e,n,t,r){if(50<Fr)throw Fr=0,Fl=null,Error(L(185));io(e,t,r),(!(I&2)||e!==ue)&&(e===ue&&(!(I&2)&&(Ii|=t),ie===4&&Dn(e,pe)),_e(e,r),t===1&&I===0&&!(n.mode&1)&&(tr=ee()+500,Fi&&at()))}function _e(e,n){var t=e.callbackNode;Eg(e,n);var r=ti(e,e===ue?pe:0);if(r===0)t!==null&&Gu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Gu(t),n===1)e.tag===0?C0(Dc.bind(null,e)):Pf(Dc.bind(null,e)),k0(function(){!(I&6)&&at()}),t=null;else{switch(ef(r)){case 1:t=as;break;case 4:t=Xd;break;case 16:t=ni;break;case 536870912:t=Zd;break;default:t=ni}t=Ep(t,vp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function vp(e,n){if(Wo=-1,Vo=0,I&6)throw Error(L(327));var t=e.callbackNode;if(Qt()&&e.callbackNode!==t)return null;var r=ti(e,e===ue?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ki(e,r);else{n=r;var o=I;I|=2;var i=kp();(ue!==e||pe!==n)&&(En=null,tr=ee()+500,ht(e,n));do try{V0();break}catch(l){wp(e,l)}while(1);ws(),yi.current=i,I=o,te!==null?n=0:(ue=null,pe=0,n=ie)}if(n!==0){if(n===2&&(o=ll(e),o!==0&&(r=o,n=jl(e,o))),n===1)throw t=Zr,ht(e,0),Dn(e,r),_e(e,ee()),t;if(n===6)Dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!H0(o)&&(n=ki(e,r),n===2&&(i=ll(e),i!==0&&(r=i,n=jl(e,i))),n===1))throw t=Zr,ht(e,0),Dn(e,r),_e(e,ee()),t;switch(e.finishedWork=o,e.finishedLanes=r,n){case 0:case 1:throw Error(L(345));case 2:dt(e,Oe,En);break;case 3:if(Dn(e,r),(r&130023424)===r&&(n=Fs+500-ee(),10<n)){if(ti(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=hl(dt.bind(null,e,Oe,En),n);break}dt(e,Oe,En);break;case 4:if(Dn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,o=-1;0<r;){var a=31-rn(r);i=1<<a,a=n[a],a>o&&(o=a),r&=~i}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*B0(r/1960))-r,10<r){e.timeoutHandle=hl(dt.bind(null,e,Oe,En),r);break}dt(e,Oe,En);break;case 5:dt(e,Oe,En);break;default:throw Error(L(329))}}}return _e(e,ee()),e.callbackNode===t?vp.bind(null,e):null}function jl(e,n){var t=Tr;return e.current.memoizedState.isDehydrated&&(ht(e,n).flags|=256),e=ki(e,n),e!==2&&(n=Oe,Oe=t,n!==null&&Al(n)),e}function Al(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function H0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!an(i(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Dn(e,n){for(n&=~Ts,n&=~Ii,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-rn(n),r=1<<t;e[t]=-1,n&=~r}}function Dc(e){if(I&6)throw Error(L(327));Qt();var n=ti(e,0);if(!(n&1))return _e(e,ee()),null;var t=ki(e,n);if(e.tag!==0&&t===2){var r=ll(e);r!==0&&(n=r,t=jl(e,r))}if(t===1)throw t=Zr,ht(e,0),Dn(e,n),_e(e,ee()),t;if(t===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,dt(e,Oe,En),_e(e,ee()),null}function js(e,n){var t=I;I|=1;try{return e(n)}finally{I=t,I===0&&(tr=ee()+500,Fi&&at())}}function bt(e){Bn!==null&&Bn.tag===0&&!(I&6)&&Qt();var n=I;I|=1;var t=Qe.transition,r=H;try{if(Qe.transition=null,H=1,e)return e()}finally{H=r,Qe.transition=t,I=n,!(I&6)&&at()}}function As(){Te=Ut.current,Q(Ut)}function ht(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,w0(t)),te!==null)for(t=te.return;t!==null;){var r=t;switch(gs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&li();break;case 3:er(),Q(ze),Q(we),Es();break;case 5:Cs(r);break;case 4:er();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:ks(r.type._context);break;case 22:case 23:As()}t=t.return}if(ue=e,te=e=Zn(e.current,null),pe=Te=n,ie=0,Zr=null,Ts=Ii=kt=0,Oe=Tr=null,pt!==null){for(n=0;n<pt.length;n++)if(t=pt[n],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}pt=null}return e}function wp(e,n){do{var t=te;try{if(ws(),Uo.current=gi,hi){for(var r=J.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}hi=!1}if(wt=0,se=oe=J=null,_r=!1,Yr=0,Ns.current=null,t===null||t.return===null){ie=1,Zr=n,te=null;break}e:{var i=e,a=t.return,l=t,s=n;if(n=pe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Oc(a);if(y!==null){y.flags&=-257,Lc(y,a,l,i,n),y.mode&1&&Pc(i,c,n),n=y,s=c;var w=n.updateQueue;if(w===null){var v=new Set;v.add(s),n.updateQueue=v}else w.add(s);break e}else{if(!(n&1)){Pc(i,c,n),$s();break e}s=Error(L(426))}}else if(G&&l.mode&1){var x=Oc(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Lc(x,a,l,i,n),ys(nr(s,l));break e}}i=s=nr(s,l),ie!==4&&(ie=2),Tr===null?Tr=[i]:Tr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var f=tp(i,s,n);wc(i,f);break e;case 1:l=s;var u=i.type,d=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Jn===null||!Jn.has(d)))){i.flags|=65536,n&=-n,i.lanes|=n;var g=rp(i,l,n);wc(i,g);break e}}i=i.return}while(i!==null)}xp(t)}catch(k){n=k,te===t&&t!==null&&(te=t=t.return);continue}break}while(1)}function kp(){var e=yi.current;return yi.current=gi,e===null?gi:e}function $s(){(ie===0||ie===3||ie===2)&&(ie=4),ue===null||!(kt&268435455)&&!(Ii&268435455)||Dn(ue,pe)}function ki(e,n){var t=I;I|=2;var r=kp();(ue!==e||pe!==n)&&(En=null,ht(e,n));do try{W0();break}catch(o){wp(e,o)}while(1);if(ws(),I=t,yi.current=r,te!==null)throw Error(L(261));return ue=null,pe=0,ie}function W0(){for(;te!==null;)bp(te)}function V0(){for(;te!==null&&!gg();)bp(te)}function bp(e){var n=Cp(e.alternate,e,Te);e.memoizedProps=e.pendingProps,n===null?xp(e):te=n,Ns.current=null}function xp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=I0(t,n),t!==null){t.flags&=32767,te=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(t=$0(t,n,Te),t!==null){te=t;return}if(n=n.sibling,n!==null){te=n;return}te=n=e}while(n!==null);ie===0&&(ie=5)}function dt(e,n,t){var r=H,o=Qe.transition;try{Qe.transition=null,H=1,K0(e,n,t,r)}finally{Qe.transition=o,H=r}return null}function K0(e,n,t,r){do Qt();while(Bn!==null);if(I&6)throw Error(L(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Pg(e,i),e===ue&&(te=ue=null,pe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_o||(_o=!0,Ep(ni,function(){return Qt(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Qe.transition,Qe.transition=null;var a=H;H=1;var l=I;I|=4,Ns.current=null,D0(e,t),gp(t,e),f0(pl),ri=!!fl,pl=fl=null,e.current=t,U0(t),yg(),I=l,H=a,Qe.transition=i}else e.current=t;if(_o&&(_o=!1,Bn=e,wi=o),i=e.pendingLanes,i===0&&(Jn=null),kg(t.stateNode),_e(e,ee()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(vi)throw vi=!1,e=Tl,Tl=null,e;return wi&1&&e.tag!==0&&Qt(),i=e.pendingLanes,i&1?e===Fl?Fr++:(Fr=0,Fl=e):Fr=0,at(),null}function Qt(){if(Bn!==null){var e=ef(wi),n=Qe.transition,t=H;try{if(Qe.transition=null,H=16>e?16:e,Bn===null)var r=!1;else{if(e=Bn,Bn=null,wi=0,I&6)throw Error(L(331));var o=I;for(I|=4,N=e.current;N!==null;){var i=N,a=i.child;if(N.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(N=c;N!==null;){var m=N;switch(m.tag){case 0:case 11:case 15:Nr(8,m,i)}var p=m.child;if(p!==null)p.return=m,N=p;else for(;N!==null;){m=N;var h=m.sibling,y=m.return;if(pp(m),m===c){N=null;break}if(h!==null){h.return=y,N=h;break}N=y}}}var w=i.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}N=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,N=a;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Nr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,N=f;break e}N=i.return}}var u=e.current;for(N=u;N!==null;){a=N;var d=a.child;if(a.subtreeFlags&2064&&d!==null)d.return=a,N=d;else e:for(a=u;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$i(9,l)}}catch(k){q(l,l.return,k)}if(l===a){N=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,N=g;break e}N=l.return}}if(I=o,at(),vn&&typeof vn.onPostCommitFiberRoot=="function")try{vn.onPostCommitFiberRoot(zi,e)}catch{}r=!0}return r}finally{H=t,Qe.transition=n}}return!1}function Uc(e,n,t){n=nr(t,n),n=tp(e,n,1),e=Yn(e,n,1),n=Se(),e!==null&&(io(e,1,n),_e(e,n))}function q(e,n,t){if(e.tag===3)Uc(e,e,t);else for(;n!==null;){if(n.tag===3){Uc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){e=nr(t,e),e=rp(n,e,1),n=Yn(n,e,1),e=Se(),n!==null&&(io(n,1,e),_e(n,e));break}}n=n.return}}function Q0(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Se(),e.pingedLanes|=e.suspendedLanes&t,ue===e&&(pe&t)===t&&(ie===4||ie===3&&(pe&130023424)===pe&&500>ee()-Fs?ht(e,0):Ts|=t),_e(e,n)}function Sp(e,n){n===0&&(e.mode&1?(n=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):n=1);var t=Se();e=Nn(e,n),e!==null&&(io(e,n,t),_e(e,t))}function G0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Sp(e,t)}function Y0(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(n),Sp(e,t)}var Cp;Cp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ze.current)Le=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Le=!1,A0(e,n,t);Le=!!(e.flags&131072)}else Le=!1,G&&n.flags&1048576&&Of(n,ci,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Ho(e,n),e=n.pendingProps;var o=Xt(n,we.current);Kt(n,t),o=Os(null,n,r,e,o,t);var i=Ls();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Re(r)?(i=!0,si(n)):i=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,xs(n),o.updater=ji,n.stateNode=o,o._reactInternals=n,xl(n,r,e,t),n=El(null,n,r,!0,i,t)):(n.tag=0,G&&i&&hs(n),xe(null,n,o,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Ho(e,n),e=n.pendingProps,o=r._init,r=o(r._payload),n.type=r,o=n.tag=X0(r),e=qe(r,e),o){case 0:n=Cl(null,n,r,e,t);break e;case 1:n=_c(null,n,r,e,t);break e;case 11:n=zc(null,n,r,e,t);break e;case 14:n=Rc(null,n,r,qe(r.type,e),t);break e}throw Error(L(306,r,""))}return n;case 0:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),Cl(e,n,r,o,t);case 1:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),_c(e,n,r,o,t);case 3:e:{if(lp(n),e===null)throw Error(L(387));r=n.pendingProps,i=n.memoizedState,o=i.element,_f(e,n),pi(n,r,null,t);var a=n.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){o=nr(Error(L(423)),n),n=Nc(e,n,r,t,o);break e}else if(r!==o){o=nr(Error(L(424)),n),n=Nc(e,n,r,t,o);break e}else for(Fe=Gn(n.stateNode.containerInfo.firstChild),je=n,G=!0,nn=null,t=jf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Zt(),r===o){n=Tn(e,n,t);break e}xe(e,n,r,t)}n=n.child}return n;case 5:return Af(n),e===null&&wl(n),r=n.type,o=n.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ml(r,o)?a=null:i!==null&&ml(r,i)&&(n.flags|=32),ap(e,n),xe(e,n,a,t),n.child;case 6:return e===null&&wl(n),null;case 13:return sp(e,n,t);case 4:return Ss(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=qt(n,null,r,t):xe(e,n,r,t),n.child;case 11:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),zc(e,n,r,o,t);case 7:return xe(e,n,n.pendingProps,t),n.child;case 8:return xe(e,n,n.pendingProps.children,t),n.child;case 12:return xe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,o=n.pendingProps,i=n.memoizedProps,a=o.value,V(di,r._currentValue),r._currentValue=a,i!==null)if(an(i.value,a)){if(i.children===o.children&&!ze.current){n=Tn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=zn(-1,t&-t),s.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?s.next=s:(s.next=m.next,m.next=s),c.pending=s}}i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),kl(i.return,t,n),l.lanes|=t;break}s=s.next}}else if(i.tag===10)a=i.type===n.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(L(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),kl(a,t,n),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===n){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}xe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,r=n.pendingProps.children,Kt(n,t),o=Ge(o),r=r(o),n.flags|=1,xe(e,n,r,t),n.child;case 14:return r=n.type,o=qe(r,n.pendingProps),o=qe(r.type,o),Rc(e,n,r,o,t);case 15:return op(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,o=n.pendingProps,o=n.elementType===r?o:qe(r,o),Ho(e,n),n.tag=1,Re(r)?(e=!0,si(n)):e=!1,Kt(n,t),Tf(n,r,o),xl(n,r,o,t),El(null,n,r,!0,e,t);case 19:return up(e,n,t);case 22:return ip(e,n,t)}throw Error(L(156,n.tag))};function Ep(e,n){return Jd(e,n)}function J0(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,n,t,r){return new J0(e,n,t,r)}function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X0(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rs)return 11;if(e===os)return 14}return 2}function Zn(e,n){var t=e.alternate;return t===null?(t=Ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Ko(e,n,t,r,o,i){var a=2;if(r=e,typeof e=="function")Is(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _t:return gt(t.children,o,i,n);case ts:a=8,o|=8;break;case Ka:return e=Ke(12,t,n,o|2),e.elementType=Ka,e.lanes=i,e;case Qa:return e=Ke(13,t,n,o),e.elementType=Qa,e.lanes=i,e;case Ga:return e=Ke(19,t,n,o),e.elementType=Ga,e.lanes=i,e;case Td:return Mi(t,o,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _d:a=10;break e;case Nd:a=9;break e;case rs:a=11;break e;case os:a=14;break e;case $n:a=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return n=Ke(a,t,n,o),n.elementType=e,n.type=r,n.lanes=i,n}function gt(e,n,t,r){return e=Ke(7,e,r,n),e.lanes=t,e}function Mi(e,n,t,r){return e=Ke(22,e,r,n),e.elementType=Td,e.lanes=t,e.stateNode={isHidden:!1},e}function Ta(e,n,t){return e=Ke(6,e,null,n),e.lanes=t,e}function Fa(e,n,t){return n=Ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Z0(e,n,t,r,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ma(0),this.expirationTimes=ma(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ma(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ms(e,n,t,r,o,i,a,l,s){return e=new Z0(e,n,t,l,s),n===1?(n=1,i===!0&&(n|=8)):n=0,i=Ke(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},xs(i),e}function q0(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Pp(e){if(!e)return tt;e=e._reactInternals;e:{if(St(e)!==e||e.tag!==1)throw Error(L(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Re(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(L(171))}if(e.tag===1){var t=e.type;if(Re(t))return Ef(e,t,n)}return n}function Op(e,n,t,r,o,i,a,l,s){return e=Ms(t,r,!0,e,o,i,a,l,s),e.context=Pp(null),t=e.current,r=Se(),o=Xn(t),i=zn(r,o),i.callback=n??null,Yn(t,i,o),e.current.lanes=o,io(e,o,r),_e(e,r),e}function Di(e,n,t,r){var o=n.current,i=Se(),a=Xn(o);return t=Pp(t),n.context===null?n.context=t:n.pendingContext=t,n=zn(i,a),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Yn(o,n,a),e!==null&&(on(e,o,a,i),Do(e,o,a)),a}function bi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ds(e,n){Bc(e,n),(e=e.alternate)&&Bc(e,n)}function e1(){return null}var Lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Us(e){this._internalRoot=e}Ui.prototype.render=Us.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(L(409));Di(e,n,null,null)};Ui.prototype.unmount=Us.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;bt(function(){Di(null,e,null,null)}),n[_n]=null}};function Ui(e){this._internalRoot=e}Ui.prototype.unstable_scheduleHydration=function(e){if(e){var n=rf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Mn.length&&n!==0&&n<Mn[t].priority;t++);Mn.splice(t,0,e),t===0&&af(e)}};function Bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hc(){}function n1(e,n,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=bi(a);i.call(c)}}var a=Op(n,r,e,0,null,!1,!1,"",Hc);return e._reactRootContainer=a,e[_n]=a.current,Wr(e.nodeType===8?e.parentNode:e),bt(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var c=bi(s);l.call(c)}}var s=Ms(e,0,!1,null,null,!1,!1,"",Hc);return e._reactRootContainer=s,e[_n]=s.current,Wr(e.nodeType===8?e.parentNode:e),bt(function(){Di(n,s,t,r)}),s}function Hi(e,n,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=bi(a);l.call(s)}}Di(n,a,e,o)}else a=n1(t,n,e,o,r);return bi(a)}nf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Cr(n.pendingLanes);t!==0&&(ls(n,t|1),_e(n,ee()),!(I&6)&&(tr=ee()+500,at()))}break;case 13:bt(function(){var r=Nn(e,1);if(r!==null){var o=Se();on(r,e,1,o)}}),Ds(e,1)}};ss=function(e){if(e.tag===13){var n=Nn(e,134217728);if(n!==null){var t=Se();on(n,e,134217728,t)}Ds(e,134217728)}};tf=function(e){if(e.tag===13){var n=Xn(e),t=Nn(e,n);if(t!==null){var r=Se();on(t,e,n,r)}Ds(e,n)}};rf=function(){return H};of=function(e,n){var t=H;try{return H=e,n()}finally{H=t}};ol=function(e,n,t){switch(n){case"input":if(Xa(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var o=Ti(r);if(!o)throw Error(L(90));jd(r),Xa(r,o)}}}break;case"textarea":$d(e,t);break;case"select":n=t.value,n!=null&&Bt(e,!!t.multiple,n,!1)}};Wd=js;Vd=bt;var t1={usingClientEntryPoint:!1,Events:[lo,jt,Ti,Bd,Hd,js]},kr={findFiberByHostInstance:ft,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},r1={bundleType:kr.bundleType,version:kr.version,rendererPackageName:kr.rendererPackageName,rendererConfig:kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gd(e),e===null?null:e.stateNode},findFiberByHostInstance:kr.findFiberByHostInstance||e1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{zi=No.inject(r1),vn=No}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t1;Ie.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bs(n))throw Error(L(200));return q0(e,n,null,t)};Ie.createRoot=function(e,n){if(!Bs(e))throw Error(L(299));var t=!1,r="",o=Lp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=Ms(e,1,!1,null,null,t,!1,r,o),e[_n]=n.current,Wr(e.nodeType===8?e.parentNode:e),new Us(n)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Gd(n),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return bt(e)};Ie.hydrate=function(e,n,t){if(!Bi(n))throw Error(L(200));return Hi(null,e,n,!0,t)};Ie.hydrateRoot=function(e,n,t){if(!Bs(e))throw Error(L(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=Lp;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Op(n,null,e,1,t??null,o,!1,i,a),e[_n]=n.current,Wr(e),r)for(e=0;e<r.length;e++)t=r[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Ui(n)};Ie.render=function(e,n,t){if(!Bi(n))throw Error(L(200));return Hi(null,e,n,!1,t)};Ie.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(L(40));return e._reactRootContainer?(bt(function(){Hi(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};Ie.unstable_batchedUpdates=js;Ie.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Bi(t))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Hi(e,n,t,!1,r)};Ie.version="18.2.0-next-9e3b772b8-20220608";(function(e){function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}n(),e.exports=Ie})(eg);var zp,Wc=Ha;zp=Wc.createRoot,Wc.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qr(){return qr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},qr.apply(this,arguments)}var Hn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Hn||(Hn={}));const Vc="popstate";function o1(e){e===void 0&&(e={});function n(o,i){let{pathname:a="/",search:l="",hash:s=""}=Ct(o.location.hash.substr(1));return $l("",{pathname:a,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(o,i){let a=o.document.querySelector("base"),l="";if(a&&a.getAttribute("href")){let s=o.location.href,c=s.indexOf("#");l=c===-1?s:s.slice(0,c)}return l+"#"+(typeof i=="string"?i:xi(i))}function r(o,i){i1(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return l1(n,t,r,e)}function ae(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function i1(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function a1(){return Math.random().toString(36).substr(2,8)}function Kc(e,n){return{usr:e.state,key:e.key,idx:n}}function $l(e,n,t,r){return t===void 0&&(t=null),qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?Ct(n):n,{state:t,key:n&&n.key||r||a1()})}function xi(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Ct(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function l1(e,n,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Hn.Pop,s=null,c=m();c==null&&(c=0,a.replaceState(qr({},a.state,{idx:c}),""));function m(){return(a.state||{idx:null}).idx}function p(){l=Hn.Pop;let x=m(),f=x==null?null:x-c;c=x,s&&s({action:l,location:v.location,delta:f})}function h(x,f){l=Hn.Push;let u=$l(v.location,x,f);t&&t(u,x),c=m()+1;let d=Kc(u,c),g=v.createHref(u);try{a.pushState(d,"",g)}catch{o.location.assign(g)}i&&s&&s({action:l,location:v.location,delta:1})}function y(x,f){l=Hn.Replace;let u=$l(v.location,x,f);t&&t(u,x),c=m();let d=Kc(u,c),g=v.createHref(u);a.replaceState(d,"",g),i&&s&&s({action:l,location:v.location,delta:0})}function w(x){let f=o.location.origin!=="null"?o.location.origin:o.location.href,u=typeof x=="string"?x:xi(x);return ae(f,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,f)}let v={get action(){return l},get location(){return e(o,a)},listen(x){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Vc,p),s=x,()=>{o.removeEventListener(Vc,p),s=null}},createHref(x){return n(o,x)},createURL:w,encodeLocation(x){let f=w(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:y,go(x){return a.go(x)}};return v}var Qc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Qc||(Qc={}));function s1(e,n,t){t===void 0&&(t="/");let r=typeof n=="string"?Ct(n):n,o=Hs(r.pathname||"/",t);if(o==null)return null;let i=Rp(e);u1(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=v1(i[l],b1(o));return a}function Rp(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(ae(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=qn([r,s.relativePath]),m=t.concat(s);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Rp(i.children,n,m,c)),!(i.path==null&&!i.index)&&n.push({path:c,score:g1(c,i.index),routesMeta:m})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of _p(i.path))o(i,a,s)}),n}function _p(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,o=t.endsWith("?"),i=t.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=_p(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function u1(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:y1(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const c1=/^:\w+$/,d1=3,f1=2,p1=1,m1=10,h1=-2,Gc=e=>e==="*";function g1(e,n){let t=e.split("/"),r=t.length;return t.some(Gc)&&(r+=h1),n&&(r+=f1),t.filter(o=>!Gc(o)).reduce((o,i)=>o+(c1.test(i)?d1:i===""?p1:m1),r)}function y1(e,n){return e.length===n.length&&e.slice(0,-1).every((r,o)=>r===n[o])?e[e.length-1]-n[n.length-1]:0}function v1(e,n){let{routesMeta:t}=e,r={},o="/",i=[];for(let a=0;a<t.length;++a){let l=t[a],s=a===t.length-1,c=o==="/"?n:n.slice(o.length)||"/",m=w1({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},c);if(!m)return null;Object.assign(r,m.params);let p=l.route;i.push({params:r,pathname:qn([o,m.pathname]),pathnameBase:E1(qn([o,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(o=qn([o,m.pathnameBase]))}return i}function w1(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=k1(e.path,e.caseSensitive,e.end),o=n.match(t);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((c,m,p)=>{if(m==="*"){let h=l[p]||"";a=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return c[m]=x1(l[p]||"",m),c},{}),pathname:i,pathnameBase:a,pattern:e}}function k1(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ws(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,n?void 0:"i"),r]}function b1(e){try{return decodeURI(e)}catch(n){return Ws(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function x1(e,n){try{return decodeURIComponent(e)}catch(t){return Ws(!1,'The value for the URL param "'+n+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),e}}function Hs(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}function Ws(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function S1(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:o=""}=typeof e=="string"?Ct(e):e;return{pathname:t?t.startsWith("/")?t:C1(t,n):n,search:P1(r),hash:O1(o)}}function C1(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ja(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Np(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Tp(e,n,t,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Ct(e):(o=qr({},e),ae(!o.pathname||!o.pathname.includes("?"),ja("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),ja("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),ja("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(r||a==null)l=t;else{let p=n.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),p-=1;o.pathname=h.join("/")}l=p>=0?n[p]:"/"}let s=S1(o,l),c=a&&a!=="/"&&a.endsWith("/"),m=(i||a===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||m)&&(s.pathname+="/"),s}const qn=e=>e.join("/").replace(/\/\/+/g,"/"),E1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),P1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,O1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function L1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const z1=["post","put","patch","delete"];[...z1];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Il.apply(this,arguments)}function R1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}const _1=typeof Object.is=="function"?Object.is:R1,{useState:N1,useEffect:T1,useLayoutEffect:F1,useDebugValue:j1}=jr;function A1(e,n,t){const r=n(),[{inst:o},i]=N1({inst:{value:r,getSnapshot:n}});return F1(()=>{o.value=r,o.getSnapshot=n,Aa(o)&&i({inst:o})},[e,r,n]),T1(()=>(Aa(o)&&i({inst:o}),e(()=>{Aa(o)&&i({inst:o})})),[e]),j1(r),r}function Aa(e){const n=e.getSnapshot,t=e.value;try{const r=n();return!_1(t,r)}catch{return!0}}function $1(e,n,t){return n()}const I1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M1=!I1,D1=M1?$1:A1;"useSyncExternalStore"in jr&&(e=>e.useSyncExternalStore)(jr);const Fp=E.createContext(null),Vs=E.createContext(null),sr=E.createContext(null),Wi=E.createContext(null),lt=E.createContext({outlet:null,matches:[]}),jp=E.createContext(null);function U1(e,n){let{relative:t}=n===void 0?{}:n;uo()||ae(!1);let{basename:r,navigator:o}=E.useContext(sr),{hash:i,pathname:a,search:l}=Ks(e,{relative:t}),s=a;return r!=="/"&&(s=a==="/"?r:qn([r,a])),o.createHref({pathname:s,search:l,hash:i})}function uo(){return E.useContext(Wi)!=null}function co(){return uo()||ae(!1),E.useContext(Wi).location}function fo(){uo()||ae(!1);let{basename:e,navigator:n}=E.useContext(sr),{matches:t}=E.useContext(lt),{pathname:r}=co(),o=JSON.stringify(Np(t).map(l=>l.pathnameBase)),i=E.useRef(!1);return E.useEffect(()=>{i.current=!0}),E.useCallback(function(l,s){if(s===void 0&&(s={}),!i.current)return;if(typeof l=="number"){n.go(l);return}let c=Tp(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:qn([e,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[e,n,o,r])}const B1=E.createContext(null);function H1(e){let n=E.useContext(lt).outlet;return n&&E.createElement(B1.Provider,{value:e},n)}function Ap(){let{matches:e}=E.useContext(lt),n=e[e.length-1];return n?n.params:{}}function Ks(e,n){let{relative:t}=n===void 0?{}:n,{matches:r}=E.useContext(lt),{pathname:o}=co(),i=JSON.stringify(Np(r).map(a=>a.pathnameBase));return E.useMemo(()=>Tp(e,JSON.parse(i),o,t==="path"),[e,i,o,t])}function W1(e,n){uo()||ae(!1);let{navigator:t}=E.useContext(sr),r=E.useContext(Vs),{matches:o}=E.useContext(lt),i=o[o.length-1],a=i?i.params:{};i&&i.pathname;let l=i?i.pathnameBase:"/";i&&i.route;let s=co(),c;if(n){var m;let v=typeof n=="string"?Ct(n):n;l==="/"||(m=v.pathname)!=null&&m.startsWith(l)||ae(!1),c=v}else c=s;let p=c.pathname||"/",h=l==="/"?p:p.slice(l.length)||"/",y=s1(e,{pathname:h}),w=G1(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:qn([l,t.encodeLocation?t.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:qn([l,t.encodeLocation?t.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,r||void 0);return n&&w?E.createElement(Wi.Provider,{value:{location:Il({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Hn.Pop}},w):w}function V1(){let e=Z1(),n=L1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:o},t):null,i)}class K1 extends E.Component{constructor(n){super(n),this.state={location:n.location,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location?{error:n.error,location:n.location}:{error:n.error||t.error,location:t.location}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error?E.createElement(lt.Provider,{value:this.props.routeContext},E.createElement(jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Q1(e){let{routeContext:n,match:t,children:r}=e,o=E.useContext(Fp);return o&&o.static&&o.staticContext&&t.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(lt.Provider,{value:n},r)}function G1(e,n,t){if(n===void 0&&(n=[]),e==null)if(t!=null&&t.errors)e=t.matches;else return null;let r=e,o=t==null?void 0:t.errors;if(o!=null){let i=r.findIndex(a=>a.route.id&&(o==null?void 0:o[a.route.id]));i>=0||ae(!1),r=r.slice(0,Math.min(r.length,i+1))}return r.reduceRight((i,a,l)=>{let s=a.route.id?o==null?void 0:o[a.route.id]:null,c=t?a.route.errorElement||E.createElement(V1,null):null,m=n.concat(r.slice(0,l+1)),p=()=>E.createElement(Q1,{match:a,routeContext:{outlet:i,matches:m}},s?c:a.route.element!==void 0?a.route.element:i);return t&&(a.route.errorElement||l===0)?E.createElement(K1,{location:t.location,component:c,error:s,children:p(),routeContext:{outlet:null,matches:m}}):p()},null)}var Yc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Yc||(Yc={}));var Si;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(Si||(Si={}));function Y1(e){let n=E.useContext(Vs);return n||ae(!1),n}function J1(e){let n=E.useContext(lt);return n||ae(!1),n}function X1(e){let n=J1(),t=n.matches[n.matches.length-1];return t.route.id||ae(!1),t.route.id}function Z1(){var e;let n=E.useContext(jp),t=Y1(Si.UseRouteError),r=X1(Si.UseRouteError);return n||((e=t.errors)==null?void 0:e[r])}function Ml(e){return H1(e.context)}function fn(e){ae(!1)}function q1(e){let{basename:n="/",children:t=null,location:r,navigationType:o=Hn.Pop,navigator:i,static:a=!1}=e;uo()&&ae(!1);let l=n.replace(/^\/*/,"/"),s=E.useMemo(()=>({basename:l,navigator:i,static:a}),[l,i,a]);typeof r=="string"&&(r=Ct(r));let{pathname:c="/",search:m="",hash:p="",state:h=null,key:y="default"}=r,w=E.useMemo(()=>{let v=Hs(c,l);return v==null?null:{pathname:v,search:m,hash:p,state:h,key:y}},[l,c,m,p,h,y]);return w==null?null:E.createElement(sr.Provider,{value:s},E.createElement(Wi.Provider,{children:t,value:{location:w,navigationType:o}}))}function ey(e){let{children:n,location:t}=e,r=E.useContext(Fp),o=r&&!n?r.router.routes:Dl(n);return W1(o,t)}var Jc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Jc||(Jc={}));new Promise(()=>{});function Dl(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(r,o)=>{if(!E.isValidElement(r))return;if(r.type===E.Fragment){t.push.apply(t,Dl(r.props.children,n));return}r.type!==fn&&ae(!1),!r.props.index||!r.props.children||ae(!1);let i=[...n,o],a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(a.children=Dl(r.props.children,i)),t.push(a)}),t}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ci.apply(this,arguments)}function $p(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function ny(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ty(e,n){return e.button===0&&(!n||n==="_self")&&!ny(e)}const ry=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],oy=["aria-current","caseSensitive","className","end","style","to","children"];function iy(e){let{basename:n,children:t,window:r}=e,o=E.useRef();o.current==null&&(o.current=o1({window:r,v5Compat:!0}));let i=o.current,[a,l]=E.useState({action:i.action,location:i.location});return E.useLayoutEffect(()=>i.listen(l),[i]),E.createElement(q1,{basename:n,children:t,location:a.location,navigationType:a.action,navigator:i})}const ay=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ly=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qs=E.forwardRef(function(n,t){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:c,preventScrollReset:m}=n,p=$p(n,ry),{basename:h}=E.useContext(sr),y,w=!1;if(typeof c=="string"&&ly.test(c)&&(y=c,ay)){let u=new URL(window.location.href),d=c.startsWith("//")?new URL(u.protocol+c):new URL(c),g=Hs(d.pathname,h);d.origin===u.origin&&g!=null?c=g+d.search+d.hash:w=!0}let v=U1(c,{relative:o}),x=uy(c,{replace:a,state:l,target:s,preventScrollReset:m,relative:o});function f(u){r&&r(u),u.defaultPrevented||x(u)}return E.createElement("a",Ci({},p,{href:y||v,onClick:w||i?r:f,ref:t,target:s}))}),sy=E.forwardRef(function(n,t){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:l,to:s,children:c}=n,m=$p(n,oy),p=Ks(s,{relative:m.relative}),h=co(),y=E.useContext(Vs),{navigator:w}=E.useContext(sr),v=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,x=h.pathname,f=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(x=x.toLowerCase(),f=f?f.toLowerCase():null,v=v.toLowerCase());let u=x===v||!a&&x.startsWith(v)&&x.charAt(v.length)==="/",d=f!=null&&(f===v||!a&&f.startsWith(v)&&f.charAt(v.length)==="/"),g=u?r:void 0,k;typeof i=="function"?k=i({isActive:u,isPending:d}):k=[i,u?"active":null,d?"pending":null].filter(Boolean).join(" ");let b=typeof l=="function"?l({isActive:u,isPending:d}):l;return E.createElement(Qs,Ci({},m,{"aria-current":g,className:k,ref:t,style:b,to:s}),typeof c=="function"?c({isActive:u,isPending:d}):c)});var Xc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Xc||(Xc={}));var Zc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Zc||(Zc={}));function uy(e,n){let{target:t,replace:r,state:o,preventScrollReset:i,relative:a}=n===void 0?{}:n,l=fo(),s=co(),c=Ks(e,{relative:a});return E.useCallback(m=>{if(ty(m,t)){m.preventDefault();let p=r!==void 0?r:xi(s)===xi(c);l(e,{replace:p,state:o,preventScrollReset:i,relative:a})}},[s,l,c,r,o,t,e,i,a])}function Ul(){return Ul=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ul.apply(this,arguments)}function Ip(e){var n=Object.create(null);return function(t){return n[t]===void 0&&(n[t]=e(t)),n[t]}}var cy=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dy=Ip(function(e){return cy.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function fy(e){if(e.sheet)return e.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===e)return document.styleSheets[n]}function py(e){var n=document.createElement("style");return n.setAttribute("data-emotion",e.key),e.nonce!==void 0&&n.setAttribute("nonce",e.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var my=function(){function e(t){var r=this;this._insertTag=function(o){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,i),r.tags.push(o)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var n=e.prototype;return n.hydrate=function(r){r.forEach(this._insertTag)},n.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(py(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var i=fy(o);try{i.insertRule(r,i.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},n.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),ye="-ms-",Ei="-moz-",U="-webkit-",Mp="comm",Gs="rule",Ys="decl",hy="@import",Dp="@keyframes",gy=Math.abs,Vi=String.fromCharCode,yy=Object.assign;function vy(e,n){return fe(e,0)^45?(((n<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3):0}function Up(e){return e.trim()}function wy(e,n){return(e=n.exec(e))?e[0]:e}function B(e,n,t){return e.replace(n,t)}function Bl(e,n){return e.indexOf(n)}function fe(e,n){return e.charCodeAt(n)|0}function eo(e,n,t){return e.slice(n,t)}function mn(e){return e.length}function Js(e){return e.length}function To(e,n){return n.push(e),e}function ky(e,n){return e.map(n).join("")}var Ki=1,rr=1,Bp=0,Ne=0,ne=0,ur="";function Qi(e,n,t,r,o,i,a){return{value:e,root:n,parent:t,type:r,props:o,children:i,line:Ki,column:rr,length:a,return:""}}function br(e,n){return yy(Qi("",null,null,"",null,null,0),e,{length:-e.length},n)}function by(){return ne}function xy(){return ne=Ne>0?fe(ur,--Ne):0,rr--,ne===10&&(rr=1,Ki--),ne}function Ae(){return ne=Ne<Bp?fe(ur,Ne++):0,rr++,ne===10&&(rr=1,Ki++),ne}function kn(){return fe(ur,Ne)}function Qo(){return Ne}function po(e,n){return eo(ur,e,n)}function no(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hp(e){return Ki=rr=1,Bp=mn(ur=e),Ne=0,[]}function Wp(e){return ur="",e}function Go(e){return Up(po(Ne-1,Hl(e===91?e+2:e===40?e+1:e)))}function Sy(e){for(;(ne=kn())&&ne<33;)Ae();return no(e)>2||no(ne)>3?"":" "}function Cy(e,n){for(;--n&&Ae()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return po(e,Qo()+(n<6&&kn()==32&&Ae()==32))}function Hl(e){for(;Ae();)switch(ne){case e:return Ne;case 34:case 39:e!==34&&e!==39&&Hl(ne);break;case 40:e===41&&Hl(e);break;case 92:Ae();break}return Ne}function Ey(e,n){for(;Ae()&&e+ne!==47+10;)if(e+ne===42+42&&kn()===47)break;return"/*"+po(n,Ne-1)+"*"+Vi(e===47?e:Ae())}function Py(e){for(;!no(kn());)Ae();return po(e,Ne)}function Oy(e){return Wp(Yo("",null,null,null,[""],e=Hp(e),0,[0],e))}function Yo(e,n,t,r,o,i,a,l,s){for(var c=0,m=0,p=a,h=0,y=0,w=0,v=1,x=1,f=1,u=0,d="",g=o,k=i,b=r,C=d;x;)switch(w=u,u=Ae()){case 40:if(w!=108&&fe(C,p-1)==58){Bl(C+=B(Go(u),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:C+=Go(u);break;case 9:case 10:case 13:case 32:C+=Sy(w);break;case 92:C+=Cy(Qo()-1,7);continue;case 47:switch(kn()){case 42:case 47:To(Ly(Ey(Ae(),Qo()),n,t),s);break;default:C+="/"}break;case 123*v:l[c++]=mn(C)*f;case 125*v:case 59:case 0:switch(u){case 0:case 125:x=0;case 59+m:y>0&&mn(C)-p&&To(y>32?ed(C+";",r,t,p-1):ed(B(C," ","")+";",r,t,p-2),s);break;case 59:C+=";";default:if(To(b=qc(C,n,t,c,m,o,l,d,g=[],k=[],p),i),u===123)if(m===0)Yo(C,n,b,b,g,i,p,l,k);else switch(h===99&&fe(C,3)===110?100:h){case 100:case 109:case 115:Yo(e,b,b,r&&To(qc(e,b,b,0,0,o,l,d,o,g=[],p),k),o,k,p,l,r?g:k);break;default:Yo(C,b,b,b,[""],k,0,l,k)}}c=m=y=0,v=f=1,d=C="",p=a;break;case 58:p=1+mn(C),y=w;default:if(v<1){if(u==123)--v;else if(u==125&&v++==0&&xy()==125)continue}switch(C+=Vi(u),u*v){case 38:f=m>0?1:(C+="\f",-1);break;case 44:l[c++]=(mn(C)-1)*f,f=1;break;case 64:kn()===45&&(C+=Go(Ae())),h=kn(),m=p=mn(d=C+=Py(Qo())),u++;break;case 45:w===45&&mn(C)==2&&(v=0)}}return i}function qc(e,n,t,r,o,i,a,l,s,c,m){for(var p=o-1,h=o===0?i:[""],y=Js(h),w=0,v=0,x=0;w<r;++w)for(var f=0,u=eo(e,p+1,p=gy(v=a[w])),d=e;f<y;++f)(d=Up(v>0?h[f]+" "+u:B(u,/&\f/g,h[f])))&&(s[x++]=d);return Qi(e,n,t,o===0?Gs:l,s,c,m)}function Ly(e,n,t){return Qi(e,n,t,Mp,Vi(by()),eo(e,2,-2),0)}function ed(e,n,t,r){return Qi(e,n,t,Ys,eo(e,0,r),eo(e,r+1,-1),r)}function Gt(e,n){for(var t="",r=Js(e),o=0;o<r;o++)t+=n(e[o],o,e,n)||"";return t}function zy(e,n,t,r){switch(e.type){case hy:case Ys:return e.return=e.return||e.value;case Mp:return"";case Dp:return e.return=e.value+"{"+Gt(e.children,r)+"}";case Gs:e.value=e.props.join(",")}return mn(t=Gt(e.children,r))?e.return=e.value+"{"+t+"}":""}function Ry(e){var n=Js(e);return function(t,r,o,i){for(var a="",l=0;l<n;l++)a+=e[l](t,r,o,i)||"";return a}}function _y(e){return function(n){n.root||(n=n.return)&&e(n)}}var Ny=function(n,t,r){for(var o=0,i=0;o=i,i=kn(),o===38&&i===12&&(t[r]=1),!no(i);)Ae();return po(n,Ne)},Ty=function(n,t){var r=-1,o=44;do switch(no(o)){case 0:o===38&&kn()===12&&(t[r]=1),n[r]+=Ny(Ne-1,t,r);break;case 2:n[r]+=Go(o);break;case 4:if(o===44){n[++r]=kn()===58?"&\f":"",t[r]=n[r].length;break}default:n[r]+=Vi(o)}while(o=Ae());return n},Fy=function(n,t){return Wp(Ty(Hp(n),t))},nd=new WeakMap,jy=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var t=n.value,r=n.parent,o=n.column===r.column&&n.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(n.props.length===1&&t.charCodeAt(0)!==58&&!nd.get(r))&&!o){nd.set(n,!0);for(var i=[],a=Fy(t,i),l=r.props,s=0,c=0;s<a.length;s++)for(var m=0;m<l.length;m++,c++)n.props[c]=i[s]?a[s].replace(/&\f/g,l[m]):l[m]+" "+a[s]}}},Ay=function(n){if(n.type==="decl"){var t=n.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(n.return="",n.value="")}};function Vp(e,n){switch(vy(e,n)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+Ei+e+ye+e+e;case 6828:case 4268:return U+e+ye+e+e;case 6165:return U+e+ye+"flex-"+e+e;case 5187:return U+e+B(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+ye+"flex-$1$2")+e;case 5443:return U+e+ye+"flex-item-"+B(e,/flex-|-self/,"")+e;case 4675:return U+e+ye+"flex-line-pack"+B(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+ye+B(e,"shrink","negative")+e;case 5292:return U+e+ye+B(e,"basis","preferred-size")+e;case 6060:return U+"box-"+B(e,"-grow","")+U+e+ye+B(e,"grow","positive")+e;case 4554:return U+B(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(e)-1-n>6)switch(fe(e,n+1)){case 109:if(fe(e,n+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+Ei+(fe(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Bl(e,"stretch")?Vp(B(e,"stretch","fill-available"),n)+e:e}break;case 4949:if(fe(e,n+1)!==115)break;case 6444:switch(fe(e,mn(e)-3-(~Bl(e,"!important")&&10))){case 107:return B(e,":",":"+U)+e;case 101:return B(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(fe(e,14)===45?"inline-":"")+"box$3$1"+U+"$2$3$1"+ye+"$2box$3")+e}break;case 5936:switch(fe(e,n+11)){case 114:return U+e+ye+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+ye+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+ye+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+ye+e+e}return e}var $y=function(n,t,r,o){if(n.length>-1&&!n.return)switch(n.type){case Ys:n.return=Vp(n.value,n.length);break;case Dp:return Gt([br(n,{value:B(n.value,"@","@"+U)})],o);case Gs:if(n.length)return ky(n.props,function(i){switch(wy(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Gt([br(n,{props:[B(i,/:(read-\w+)/,":"+Ei+"$1")]})],o);case"::placeholder":return Gt([br(n,{props:[B(i,/:(plac\w+)/,":"+U+"input-$1")]}),br(n,{props:[B(i,/:(plac\w+)/,":"+Ei+"$1")]}),br(n,{props:[B(i,/:(plac\w+)/,ye+"input-$1")]})],o)}return""})}},Iy=[$y],My=function(n){var t=n.key;if(t==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var x=v.getAttribute("data-emotion");x.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=n.stylisPlugins||Iy,i={},a,l=[];a=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(v){for(var x=v.getAttribute("data-emotion").split(" "),f=1;f<x.length;f++)i[x[f]]=!0;l.push(v)});var s,c=[jy,Ay];{var m,p=[zy,_y(function(v){m.insert(v)})],h=Ry(c.concat(o,p)),y=function(x){return Gt(Oy(x),h)};s=function(x,f,u,d){m=u,y(x?x+"{"+f.styles+"}":f.styles),d&&(w.inserted[f.name]=!0)}}var w={key:t,sheet:new my({key:t,container:a,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:i,registered:{},insert:s};return w.sheet.hydrate(l),w},Wl={},Dy={get exports(){return Wl},set exports(e){Wl=e}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=typeof Symbol=="function"&&Symbol.for,Xs=ce?Symbol.for("react.element"):60103,Zs=ce?Symbol.for("react.portal"):60106,Gi=ce?Symbol.for("react.fragment"):60107,Yi=ce?Symbol.for("react.strict_mode"):60108,Ji=ce?Symbol.for("react.profiler"):60114,Xi=ce?Symbol.for("react.provider"):60109,Zi=ce?Symbol.for("react.context"):60110,qs=ce?Symbol.for("react.async_mode"):60111,qi=ce?Symbol.for("react.concurrent_mode"):60111,ea=ce?Symbol.for("react.forward_ref"):60112,na=ce?Symbol.for("react.suspense"):60113,Uy=ce?Symbol.for("react.suspense_list"):60120,ta=ce?Symbol.for("react.memo"):60115,ra=ce?Symbol.for("react.lazy"):60116,By=ce?Symbol.for("react.block"):60121,Hy=ce?Symbol.for("react.fundamental"):60117,Wy=ce?Symbol.for("react.responder"):60118,Vy=ce?Symbol.for("react.scope"):60119;function De(e){if(typeof e=="object"&&e!==null){var n=e.$$typeof;switch(n){case Xs:switch(e=e.type,e){case qs:case qi:case Gi:case Ji:case Yi:case na:return e;default:switch(e=e&&e.$$typeof,e){case Zi:case ea:case ra:case ta:case Xi:return e;default:return n}}case Zs:return n}}}function Kp(e){return De(e)===qi}W.AsyncMode=qs;W.ConcurrentMode=qi;W.ContextConsumer=Zi;W.ContextProvider=Xi;W.Element=Xs;W.ForwardRef=ea;W.Fragment=Gi;W.Lazy=ra;W.Memo=ta;W.Portal=Zs;W.Profiler=Ji;W.StrictMode=Yi;W.Suspense=na;W.isAsyncMode=function(e){return Kp(e)||De(e)===qs};W.isConcurrentMode=Kp;W.isContextConsumer=function(e){return De(e)===Zi};W.isContextProvider=function(e){return De(e)===Xi};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xs};W.isForwardRef=function(e){return De(e)===ea};W.isFragment=function(e){return De(e)===Gi};W.isLazy=function(e){return De(e)===ra};W.isMemo=function(e){return De(e)===ta};W.isPortal=function(e){return De(e)===Zs};W.isProfiler=function(e){return De(e)===Ji};W.isStrictMode=function(e){return De(e)===Yi};W.isSuspense=function(e){return De(e)===na};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Gi||e===qi||e===Ji||e===Yi||e===na||e===Uy||typeof e=="object"&&e!==null&&(e.$$typeof===ra||e.$$typeof===ta||e.$$typeof===Xi||e.$$typeof===Zi||e.$$typeof===ea||e.$$typeof===Hy||e.$$typeof===Wy||e.$$typeof===Vy||e.$$typeof===By)};W.typeOf=De;(function(e){e.exports=W})(Dy);var Qp=Wl,Ky={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gp={};Gp[Qp.ForwardRef]=Ky;Gp[Qp.Memo]=Qy;var Gy=!0;function Yp(e,n,t){var r="";return t.split(" ").forEach(function(o){e[o]!==void 0?n.push(e[o]+";"):r+=o+" "}),r}var eu=function(n,t,r){var o=n.key+"-"+t.name;(r===!1||Gy===!1)&&n.registered[o]===void 0&&(n.registered[o]=t.styles)},nu=function(n,t,r){eu(n,t,r);var o=n.key+"-"+t.name;if(n.inserted[t.name]===void 0){var i=t;do n.insert(t===i?"."+o:"",i,n.sheet,!0),i=i.next;while(i!==void 0)}};function Yy(e){for(var n=0,t,r=0,o=e.length;o>=4;++r,o-=4)t=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,n=(t&65535)*1540483477+((t>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(o){case 3:n^=(e.charCodeAt(r+2)&255)<<16;case 2:n^=(e.charCodeAt(r+1)&255)<<8;case 1:n^=e.charCodeAt(r)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var Jy={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xy=/[A-Z]|^ms/g,Zy=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Jp=function(n){return n.charCodeAt(1)===45},td=function(n){return n!=null&&typeof n!="boolean"},$a=Ip(function(e){return Jp(e)?e:e.replace(Xy,"-$&").toLowerCase()}),rd=function(n,t){switch(n){case"animation":case"animationName":if(typeof t=="string")return t.replace(Zy,function(r,o,i){return hn={name:o,styles:i,next:hn},o})}return Jy[n]!==1&&!Jp(n)&&typeof t=="number"&&t!==0?t+"px":t};function to(e,n,t){if(t==null)return"";if(t.__emotion_styles!==void 0)return t;switch(typeof t){case"boolean":return"";case"object":{if(t.anim===1)return hn={name:t.name,styles:t.styles,next:hn},t.name;if(t.styles!==void 0){var r=t.next;if(r!==void 0)for(;r!==void 0;)hn={name:r.name,styles:r.styles,next:hn},r=r.next;var o=t.styles+";";return o}return qy(e,n,t)}case"function":{if(e!==void 0){var i=hn,a=t(e);return hn=i,to(e,n,a)}break}}if(n==null)return t;var l=n[t];return l!==void 0?l:t}function qy(e,n,t){var r="";if(Array.isArray(t))for(var o=0;o<t.length;o++)r+=to(e,n,t[o])+";";else for(var i in t){var a=t[i];if(typeof a!="object")n!=null&&n[a]!==void 0?r+=i+"{"+n[a]+"}":td(a)&&(r+=$a(i)+":"+rd(i,a)+";");else if(Array.isArray(a)&&typeof a[0]=="string"&&(n==null||n[a[0]]===void 0))for(var l=0;l<a.length;l++)td(a[l])&&(r+=$a(i)+":"+rd(i,a[l])+";");else{var s=to(e,n,a);switch(i){case"animation":case"animationName":{r+=$a(i)+":"+s+";";break}default:r+=i+"{"+s+"}"}}}return r}var od=/label:\s*([^\s;\n{]+)\s*(;|$)/g,hn,oa=function(n,t,r){if(n.length===1&&typeof n[0]=="object"&&n[0]!==null&&n[0].styles!==void 0)return n[0];var o=!0,i="";hn=void 0;var a=n[0];a==null||a.raw===void 0?(o=!1,i+=to(r,t,a)):i+=a[0];for(var l=1;l<n.length;l++)i+=to(r,t,n[l]),o&&(i+=a[l]);od.lastIndex=0;for(var s="",c;(c=od.exec(i))!==null;)s+="-"+c[1];var m=Yy(i)+s;return{name:m,styles:i,next:hn}},ev=function(n){return n()},Xp=jr["useInsertionEffect"]?jr["useInsertionEffect"]:!1,Zp=Xp||ev,id=Xp||E.useLayoutEffect,tu={}.hasOwnProperty,qp=E.createContext(typeof HTMLElement<"u"?My({key:"css"}):null);qp.Provider;var ru=function(n){return E.forwardRef(function(t,r){var o=E.useContext(qp);return n(t,o,r)})},ou=E.createContext({}),Vl="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",nv=function(n,t){var r={};for(var o in t)tu.call(t,o)&&(r[o]=t[o]);return r[Vl]=n,r},tv=function(n){var t=n.cache,r=n.serialized,o=n.isStringTag;return eu(t,r,o),Zp(function(){return nu(t,r,o)}),null},rv=ru(function(e,n,t){var r=e.css;typeof r=="string"&&n.registered[r]!==void 0&&(r=n.registered[r]);var o=e[Vl],i=[r],a="";typeof e.className=="string"?a=Yp(n.registered,i,e.className):e.className!=null&&(a=e.className+" ");var l=oa(i,void 0,E.useContext(ou));a+=n.key+"-"+l.name;var s={};for(var c in e)tu.call(e,c)&&c!=="css"&&c!==Vl&&(s[c]=e[c]);return s.ref=t,s.className=a,E.createElement(E.Fragment,null,E.createElement(tv,{cache:n,serialized:l,isStringTag:typeof o=="string"}),E.createElement(o,s))}),S=function(n,t){var r=arguments;if(t==null||!tu.call(t,"css"))return E.createElement.apply(void 0,r);var o=r.length,i=new Array(o);i[0]=rv,i[1]=nv(n,t);for(var a=2;a<o;a++)i[a]=r[a];return E.createElement.apply(null,i)},em=ru(function(e,n){var t=e.styles,r=oa([t],void 0,E.useContext(ou)),o=E.useRef();return id(function(){var i=n.key+"-global",a=new n.sheet.constructor({key:i,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),l=!1,s=document.querySelector('style[data-emotion="'+i+" "+r.name+'"]');return n.sheet.tags.length&&(a.before=n.sheet.tags[0]),s!==null&&(l=!0,s.setAttribute("data-emotion",i),a.hydrate([s])),o.current=[a,l],function(){a.flush()}},[n]),id(function(){var i=o.current,a=i[0],l=i[1];if(l){i[1]=!1;return}if(r.next!==void 0&&nu(n,r.next,!0),a.tags.length){var s=a.tags[a.tags.length-1].nextElementSibling;a.before=s,a.flush()}n.insert("",r,a,!1)},[n,r.name]),null});function nm(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return oa(n)}var ov=dy,iv=function(n){return n!=="theme"},ad=function(n){return typeof n=="string"&&n.charCodeAt(0)>96?ov:iv},ld=function(n,t,r){var o;if(t){var i=t.shouldForwardProp;o=n.__emotion_forwardProp&&i?function(a){return n.__emotion_forwardProp(a)&&i(a)}:i}return typeof o!="function"&&r&&(o=n.__emotion_forwardProp),o},av=function(n){var t=n.cache,r=n.serialized,o=n.isStringTag;return eu(t,r,o),Zp(function(){return nu(t,r,o)}),null},lv=function e(n,t){var r=n.__emotion_real===n,o=r&&n.__emotion_base||n,i,a;t!==void 0&&(i=t.label,a=t.target);var l=ld(n,t,r),s=l||ad(o),c=!s("as");return function(){var m=arguments,p=r&&n.__emotion_styles!==void 0?n.__emotion_styles.slice(0):[];if(i!==void 0&&p.push("label:"+i+";"),m[0]==null||m[0].raw===void 0)p.push.apply(p,m);else{p.push(m[0][0]);for(var h=m.length,y=1;y<h;y++)p.push(m[y],m[0][y])}var w=ru(function(v,x,f){var u=c&&v.as||o,d="",g=[],k=v;if(v.theme==null){k={};for(var b in v)k[b]=v[b];k.theme=E.useContext(ou)}typeof v.className=="string"?d=Yp(x.registered,g,v.className):v.className!=null&&(d=v.className+" ");var C=oa(p.concat(g),x.registered,k);d+=x.key+"-"+C.name,a!==void 0&&(d+=" "+a);var P=c&&l===void 0?ad(u):s,O={};for(var _ in v)c&&_==="as"||P(_)&&(O[_]=v[_]);return O.className=d,O.ref=f,E.createElement(E.Fragment,null,E.createElement(av,{cache:x,serialized:C,isStringTag:typeof u=="string"}),E.createElement(u,O))});return w.displayName=i!==void 0?i:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",w.defaultProps=n.defaultProps,w.__emotion_real=w,w.__emotion_base=o,w.__emotion_styles=p,w.__emotion_forwardProp=l,Object.defineProperty(w,"toString",{value:function(){return"."+a}}),w.withComponent=function(v,x){return e(v,Ul({},t,x,{shouldForwardProp:ld(w,x,!0)})).apply(void 0,p)},w}},sv=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],R=lv.bind();sv.forEach(function(e){R[e]=R(e)});const tm=[{id:1,title:"SuperTrader EA",description:"Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.",price:59,image:"/images/ea/1.png",category:"Scalping"},{id:2,title:"ScalperPro EA",description:"EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.",price:79,image:"/images/ea/1.png",category:"Scalper"},{id:3,title:"SmartBot EA",description:"AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.",price:99,image:"/images/ea/1.png",category:"AI Trading"}];function uv(e){const n=new Path2D;return e.forEach((t,r)=>{r===0?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}),n}class rm{constructor(n,t,r,o){un(this,"x");un(this,"y");un(this,"size");un(this,"color");un(this,"angle",2*Math.PI*Math.random());un(this,"rotate",Math.random()*Math.PI);un(this,"speed",.2+Math.random()*1.5);this.x=n,this.y=t,this.size=r,this.color=o}move(){this.x+=this.speed,this.rotate-=this.speed*.006}createGradient(n){const t=this.size*1.5,r=this.angle+Math.PI,o=this.x+this.size*Math.sin(this.angle+this.rotate),i=this.y+this.size*Math.cos(this.angle+this.rotate),a=this.x+t*Math.sin(r+this.rotate),l=this.y+t*Math.cos(r+this.rotate),s=n.createLinearGradient(o,i,a,l);return s.addColorStop(0,this.color),s.addColorStop(.3,this.color),s.addColorStop(.85,"#ffffff"),s}}class om extends rm{constructor(t,r,o,i,a){super(t,r,o,i);un(this,"sides");this.sides=a}draw(t){const r=this.size/2,o=Math.PI*2/this.sides,i=[];Array.from({length:this.sides}).forEach((l,s)=>{i.push({x:this.x+r*Math.sin(o*s+this.rotate),y:this.y+r*Math.cos(o*s+this.rotate)})});const a=uv(i);t.fillStyle=this.createGradient(t),t.fill(a)}}class cv extends om{constructor(n,t,r,o){super(n,t,r,o,3)}}class dv extends om{constructor(n,t,r,o){super(n,t,r,o,4)}}class fv extends rm{draw(n){const t=this.size/2,r=new Path2D;r.moveTo(0,0),r.arc(this.x,this.y,t,0,2*Math.PI),n.fillStyle=this.createGradient(n),n.fill(r)}}const pv=R.canvas({height:"100%",width:"100%",opacity:"0",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),mv={opacity:"1"},sd=[cv,dv,fv],ud=["#f97316","#f59e0b","#eab308","#84cc16","#22c55e","#10b981","#14b8a6","#06b6d4","#0ea5e9","#3b82f6","#6366f1","#8b5cf6","#a855f7","#d946ef","#ec4899","#f43f5e"];function or(e){const{count:n,sizes:t}=e,[r,o]=E.useState(!1),i=E.useRef(null),a=E.useRef([]),l=E.useCallback(()=>{if(!i.current)return;const p=i.current.getBoundingClientRect();i.current.width=p.width,i.current.height=p.height},[]),s=E.useCallback(()=>{if(!i.current)return;const p=i.current.width,h=i.current.height,y=a.current.length===0;for(;a.current.length<n;){const w=sd[Math.floor(Math.random()*sd.length)],v=ud[Math.floor(Math.random()*ud.length)],x=t[0]+Math.random()*(t[1]-t[0]),f=y?Math.random()*p:-x,u=Math.random()*h;a.current.push(new w(f,u,x,v))}},[]),c=E.useCallback(()=>{if(!i.current)return;const p=i.current.getContext("2d"),h=i.current.width,y=i.current.height;p.clearRect(0,0,h,y),a.current.forEach(w=>{w.move(),w.draw(p)}),a.current=a.current.filter(w=>w.x-w.size<h)},[]),m=E.useCallback(()=>{s(),c(),requestAnimationFrame(m)},[]);return E.useEffect(()=>(l(),m(),o(!0),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[]),S(pv,{ref:i,css:[r&&mv]})}const hv=R.div`
  ${{position:"relative",minHeight:"100vh",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,gv=R.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",opacity:"0.4",".dark &":{opacity:"0.3"}}),yv=R.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",opacity:"0.6",".dark &":{opacity:"0.4"}}),vv=R.h1({marginBottom:"2.5rem",textAlign:"center",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),wv=R.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),kv=R.div`
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
`,bv=R.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),xv=R.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Sv=R.div({padding:"1.25rem"}),Cv=R.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Ev=R.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),Pv=R.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),Ov=R.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function Lv(){const e=fo(),n=t=>{e(`/EA/${t}`)};return S(hv,null,S(gv,null,S(or,{count:12,sizes:[30,60]})),S(yv,null,S(or,{count:12,sizes:[40,80]})),S(vv,null,"Expert Advisors Collection"),S(wv,null,tm.map(t=>S(kv,{key:t.id,onClick:()=>n(t.id)},S(bv,null,S(xv,{src:t.image,alt:t.title})),S(Sv,null,S(Cv,null,t.category),S(Ev,null,t.title),S(Pv,null,t.description),S(Ov,null,"$",t.price))))))}const zv=R.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",maxWidth:"56rem",borderRadius:"1.5rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem","--tw-shadow":"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),Rv=R.img({marginBottom:"1.5rem",height:"20rem",width:"100%",borderRadius:"1rem",objectFit:"cover"}),_v=R.h2({marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}),Nv=R.span({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Tv=R.p({marginBottom:"1.5rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}),Fv=R.div({marginBottom:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))"}),jv=R.div({display:"flex",gap:"1rem"}),im=R.button({borderRadius:"0.5rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),Av=R(im)({"--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}}),$v=R(im)({"--tw-bg-opacity":"1",backgroundColor:"rgb(107 114 128 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}});function Iv(){const{id:e}=Ap(),n=fo(),t=tm.find(r=>r.id===Number(e));return t?S("div",{css:{minHeight:"100vh","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))",paddingTop:"2.5rem",paddingBottom:"2.5rem"}},S(zv,null,S(Rv,{src:t.image,alt:t.title}),S(Nv,null,t.category),S(_v,null,t.title),S(Tv,null,t.description),S(Fv,null,"$",t.price),S(jv,null,S(Av,null,"Buy Now"),S($v,{onClick:()=>n("/EA")},"Back")))):S("div",{css:{marginTop:"5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}},"Product not found.",S("button",{css:{marginLeft:"0.75rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline"},onClick:()=>n("/EA")},"Back to list"))}const am=[{id:1,title:"SuperTrader EA",description:"Expert Advisor yang dirancang untuk trading aman dan stabil, cocok untuk semua pair major.",price:59,image:"/images/ea/update.png",category:"Scalping"},{id:2,title:"ScalperPro EA",description:"EA terbaik untuk scalping cepat di timeframe kecil, dengan sistem risk management adaptif.",price:79,image:"/images/ea/update.png",category:"Scalper"},{id:3,title:"SmartBot EA",description:"AI-powered Expert Advisor dengan analisa multi-timeframe dan sinyal auto-adaptif.",price:99,image:"/images/ea/update.png",category:"AI Trading"}],Mv=R.div`
  ${{position:"relative",minHeight:"100vh",overflow:"hidden",paddingTop:"2.5rem",paddingBottom:"2.5rem",transitionProperty:"color, background-color, border-color, text-decoration-color, fill, stroke",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms"}}
`,Dv=R.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-20",opacity:"0.4",".dark &":{opacity:"0.3"}}),Uv=R.div({pointerEvents:"none",position:"absolute",top:"0px",right:"0px",bottom:"0px",left:"0px",zIndex:"-10",opacity:"0.6",".dark &":{opacity:"0.4"}}),Bv=R.h1({marginBottom:"2.5rem",textAlign:"center",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(243 244 246 / var(--tw-text-opacity))"}}),Hv=R.div({marginLeft:"auto",marginRight:"auto",display:"grid",maxWidth:"72rem",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"2rem",padding:"2rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"}}),Wv=R.div`
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
`,Vv=R.div({position:"relative",height:"14rem",width:"100%",overflow:"hidden"}),Kv=R.img({height:"100%",width:"100%",objectFit:"cover",transitionProperty:"transform",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"500ms",":hover":{"--tw-scale-x":"1.1","--tw-scale-y":"1.1",transform:"translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"}}),Qv=R.div({padding:"1.25rem"}),Gv=R.p({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"500",textTransform:"uppercase",letterSpacing:"0.025em","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Yv=R.h3({marginTop:"0.5rem",marginBottom:"0.25rem",fontSize:"1.125rem",lineHeight:"1.75rem",fontWeight:"600"}),Jv=R.p({marginBottom:"0.75rem",fontSize:"0.875rem",lineHeight:"1.375",opacity:"0.8"}),Xv=R.span({fontSize:"1rem",lineHeight:"1.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))",".dark &":{"--tw-text-opacity":"1",color:"rgb(74 222 128 / var(--tw-text-opacity))"}});function Zv(){const e=fo(),n=t=>{e(`/Indicator/${t}`)};return S(Mv,null,S(Dv,null,S(or,{count:12,sizes:[30,60]})),S(Uv,null,S(or,{count:12,sizes:[40,80]})),S(Bv,null,"Indicator Collection"),S(Hv,null,am.map(t=>S(Wv,{key:t.id,onClick:()=>n(t.id)},S(Vv,null,S(Kv,{src:t.image,alt:t.title})),S(Qv,null,S(Gv,null,t.category),S(Yv,null,t.title),S(Jv,null,t.description),S(Xv,null,"$",t.price))))))}const qv=R.div({marginLeft:"auto",marginRight:"auto",marginTop:"2.5rem",maxWidth:"56rem",borderRadius:"1.5rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"2rem","--tw-shadow":"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}),ew=R.img({marginBottom:"1.5rem",height:"20rem",width:"100%",borderRadius:"1rem",objectFit:"cover"}),nw=R.h2({marginBottom:"1rem",fontSize:"1.875rem",lineHeight:"2.25rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(31 41 55 / var(--tw-text-opacity))"}),tw=R.span({fontSize:"0.875rem",lineHeight:"1.25rem",fontWeight:"600",textTransform:"uppercase","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),rw=R.p({marginBottom:"1.5rem",lineHeight:"1.625","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}),ow=R.div({marginBottom:"1.5rem",fontSize:"1.25rem",lineHeight:"1.75rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(22 163 74 / var(--tw-text-opacity))"}),iw=R.div({display:"flex",gap:"1rem"}),lm=R.button({borderRadius:"0.5rem",paddingLeft:"1.25rem",paddingRight:"1.25rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(255 255 255 / var(--tw-text-opacity))",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms"}),aw=R(lm)({"--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}}),lw=R(lm)({"--tw-bg-opacity":"1",backgroundColor:"rgb(107 114 128 / var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgb(75 85 99 / var(--tw-bg-opacity))"}});function sw(){const{id:e}=Ap(),n=fo(),t=am.find(r=>r.id===Number(e));return t?S("div",{css:{minHeight:"100vh","--tw-bg-opacity":"1",backgroundColor:"rgb(243 244 246 / var(--tw-bg-opacity))",paddingTop:"2.5rem",paddingBottom:"2.5rem"}},S(qv,null,S(ew,{src:t.image,alt:t.title}),S(tw,null,t.category),S(nw,null,t.title),S(rw,null,t.description),S(ow,null,"$",t.price),S(iw,null,S(aw,null,"Buy Now"),S(lw,{onClick:()=>n("/INDICATOR")},"Back")))):S("div",{css:{marginTop:"5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(75 85 99 / var(--tw-text-opacity))"}},"Product not found.",S("button",{css:{marginLeft:"0.75rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",textDecorationLine:"underline"},onClick:()=>n("/EA")},"Back to list"))}var Pi={},uw={get exports(){return Pi},set exports(e){Pi=e}},ia={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw=E,dw=Symbol.for("react.element"),fw=Symbol.for("react.fragment"),pw=Object.prototype.hasOwnProperty,mw=cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hw={key:!0,ref:!0,__self:!0,__source:!0};function sm(e,n,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(a=n.ref);for(r in n)pw.call(n,r)&&!hw.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)o[r]===void 0&&(o[r]=n[r]);return{$$typeof:dw,type:e,key:i,ref:a,props:o,_owner:mw.current}}ia.Fragment=fw;ia.jsx=sm;ia.jsxs=sm;(function(e){e.exports=ia})(uw);const j=Pi.jsx,gw=Pi.jsxs,yw=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"})}),vw=R.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",opacity:"0.5","--tw-blur":"blur(4px)",filter:"var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)",zIndex:"0",userSelect:"none"}),ww=R.div({pointerEvents:"none",position:"absolute",top:"0px",left:"0px",height:"100%",width:"100%",userSelect:"none",zIndex:"2"}),kw=R.main({display:"flex",width:"100%",flex:"1 1 0%",flexDirection:"column",justifyContent:"center",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"5rem",paddingBottom:"5rem"}),bw=R.div({position:"relative",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",textAlign:"center",zIndex:"1"}),xw=R.h2({fontSize:"3rem",lineHeight:"2.5rem",fontWeight:"700","--tw-text-opacity":"1",color:"rgb(71 85 105 / var(--tw-text-opacity))"}),Sw=R.p({marginTop:"1.5rem",fontSize:"1.875rem",lineHeight:"2.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),Cw=R.button({marginTop:"3rem",display:"inline-flex",alignItems:"center",gap:"1rem",borderRadius:"9999px","--tw-bg-opacity":"1",backgroundColor:"rgb(59 130 246 / var(--tw-bg-opacity))",paddingTop:"0.75rem",paddingBottom:"0.75rem",paddingLeft:"1.5rem",paddingRight:"1.5rem",textAlign:"center","--tw-text-opacity":"1",color:"rgb(239 246 255 / var(--tw-text-opacity))",outline:"2px solid transparent",outlineOffset:"2px",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms",":hover":{gap:"2rem"},":active":{"--tw-bg-opacity":"1",backgroundColor:"rgb(37 99 235 / var(--tw-bg-opacity))"}});function Ew(){const{t:e}=Zl();return S(kw,null,S(vw,null,S(or,{count:12,sizes:[30,60]})),S(ww,null,S(or,{count:12,sizes:[40,80]})),S(bw,null,S(xw,null,e("intro.title")),S(Sw,null,e("intro.description")),S(Qs,{to:"/EA"},S(Cw,null,S("span",null,e("intro.link")),S(yw,null)))))}const Pw=`.markdown-body {
  color-scheme: dark;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #c9d1d9;
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
  color: #58a6ff;
  text-decoration: none;
}

.markdown-body abbr[title] {
  border-bottom: none;
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
  border-bottom: 1px solid #21262d;
}

.markdown-body mark {
  background-color: rgba(187,128,9,0.15);
  color: #c9d1d9;
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
  background-color: #0d1117;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 40px;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid #21262d;
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #30363d;
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
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #6e7681;
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
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body details:not([open])>*:not(summary) {
  display: none !important;
}

.markdown-body a:focus,
.markdown-body [role=button]:focus,
.markdown-body input[type=radio]:focus,
.markdown-body input[type=checkbox]:focus {
  outline: 2px solid #58a6ff;
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
  outline: 2px solid #58a6ff;
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
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #c9d1d9;
  vertical-align: middle;
  background-color: #161b22;
  border: solid 1px rgba(110,118,129,0.4);
  border-bottom-color: rgba(110,118,129,0.4);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(110,118,129,0.4);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid #21262d;
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
  color: #8b949e;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #8b949e;
  border-left: .25em solid #30363d;
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
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
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
  -webkit-appearance: none;
  appearance: none;
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
  padding-right: 4px;
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
  margin-bottom: 16px;
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
  color: #c9d1d9;
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

.markdown-body ol[type=a] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type=A] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type=i] {
  list-style-type: lower-roman;
}

.markdown-body ol[type=I] {
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
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #30363d;
}

.markdown-body table tr {
  background-color: #0d1117;
  border-top: 1px solid #21262d;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #161b22;
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
  border: 1px solid #30363d;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #c9d1d9;
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
  background-color: rgba(110,118,129,0.4);
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
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #161b22;
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
  padding: 10px 8px 9px;
  text-align: right;
  background: #0d1117;
  border: 0;
}

.markdown-body .csv-data tr {
  border-top: 0;
}

.markdown-body .csv-data th {
  font-weight: 600;
  background: #161b22;
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
  color: #8b949e;
  border-top: 1px solid #30363d;
}

.markdown-body .footnotes ol {
  padding-left: 16px;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid #1f6feb;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #c9d1d9;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: #8b949e;
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
  color: #c9d1d9;
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
  color: #c9d1d9;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #c9d1d9;
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
  color: #c9d1d9;
  background-color: #1158c7;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #d2a8ff;
}

.markdown-body .pl-ba {
  color: #8b949e;
}

.markdown-body .pl-sg {
  color: #484f58;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #a5d6ff;
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
  margin-top: 4px;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list {
  position: relative;
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
`,Ow=`.markdown-body {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  margin: 0;
  color: #24292f;
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
  border-bottom: 1px solid hsla(210,18%,87%,1);
}

.markdown-body mark {
  background-color: #fff8c5;
  color: #24292f;
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
  background-color: #ffffff;
}

.markdown-body code,
.markdown-body kbd,
.markdown-body pre,
.markdown-body samp {
  font-family: monospace;
  font-size: 1em;
}

.markdown-body figure {
  margin: 1em 40px;
}

.markdown-body hr {
  box-sizing: content-box;
  overflow: hidden;
  background: transparent;
  border-bottom: 1px solid hsla(210,18%,87%,1);
  height: .25em;
  padding: 0;
  margin: 24px 0;
  background-color: #d0d7de;
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
}

.markdown-body ::-webkit-input-placeholder {
  color: inherit;
  opacity: .54;
}

.markdown-body ::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

.markdown-body a:hover {
  text-decoration: underline;
}

.markdown-body ::placeholder {
  color: #6e7781;
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
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body details summary {
  cursor: pointer;
}

.markdown-body details:not([open])>*:not(summary) {
  display: none !important;
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
  padding: 3px 5px;
  font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  line-height: 10px;
  color: #24292f;
  vertical-align: middle;
  background-color: #f6f8fa;
  border: solid 1px rgba(175,184,193,0.2);
  border-bottom-color: rgba(175,184,193,0.2);
  border-radius: 6px;
  box-shadow: inset 0 -1px 0 rgba(175,184,193,0.2);
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3,
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  margin-top: 24px;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.25;
}

.markdown-body h2 {
  font-weight: 600;
  padding-bottom: .3em;
  font-size: 1.5em;
  border-bottom: 1px solid hsla(210,18%,87%,1);
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
  color: #57606a;
}

.markdown-body p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-body blockquote {
  margin: 0;
  padding: 0 1em;
  color: #57606a;
  border-left: .25em solid #d0d7de;
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
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
  font-size: 12px;
}

.markdown-body pre {
  margin-top: 0;
  margin-bottom: 0;
  font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
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
  -webkit-appearance: none;
  appearance: none;
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
  color: #cf222e;
}

.markdown-body .anchor {
  float: left;
  padding-right: 4px;
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
  margin-bottom: 16px;
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
  color: #24292f;
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

.markdown-body ol[type=a] {
  list-style-type: lower-alpha;
}

.markdown-body ol[type=A] {
  list-style-type: upper-alpha;
}

.markdown-body ol[type=i] {
  list-style-type: lower-roman;
}

.markdown-body ol[type=I] {
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
  margin-top: 16px;
}

.markdown-body li+li {
  margin-top: .25em;
}

.markdown-body dl {
  padding: 0;
}

.markdown-body dl dt {
  padding: 0;
  margin-top: 16px;
  font-size: 1em;
  font-style: italic;
  font-weight: 600;
}

.markdown-body dl dd {
  padding: 0 16px;
  margin-bottom: 16px;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table th,
.markdown-body table td {
  padding: 6px 13px;
  border: 1px solid #d0d7de;
}

.markdown-body table tr {
  background-color: #ffffff;
  border-top: 1px solid hsla(210,18%,87%,1);
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
  border: 1px solid #d0d7de;
}

.markdown-body span.frame span img {
  display: block;
  float: left;
}

.markdown-body span.frame span span {
  display: block;
  padding: 5px 0 0;
  clear: both;
  color: #24292f;
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
  background-color: rgba(175,184,193,0.2);
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
  margin-bottom: 16px;
}

.markdown-body .highlight pre {
  margin-bottom: 0;
  word-break: normal;
}

.markdown-body .highlight pre,
.markdown-body pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
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
  padding: 10px 8px 9px;
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
  color: #57606a;
  border-top: 1px solid #d0d7de;
}

.markdown-body .footnotes ol {
  padding-left: 16px;
}

.markdown-body .footnotes ol ul {
  display: inline-block;
  padding-left: 16px;
  margin-top: 16px;
}

.markdown-body .footnotes li {
  position: relative;
}

.markdown-body .footnotes li:target::before {
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -24px;
  pointer-events: none;
  content: "";
  border: 2px solid #0969da;
  border-radius: 6px;
}

.markdown-body .footnotes li:target {
  color: #24292f;
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
  font-family: monospace;
}

.markdown-body .pl-c {
  color: #6e7781;
}

.markdown-body .pl-c1,
.markdown-body .pl-s .pl-v {
  color: #0550ae;
}

.markdown-body .pl-e,
.markdown-body .pl-en {
  color: #8250df;
}

.markdown-body .pl-smi,
.markdown-body .pl-s .pl-s1 {
  color: #24292f;
}

.markdown-body .pl-ent {
  color: #116329;
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
  color: #24292f;
}

.markdown-body .pl-mb {
  font-weight: bold;
  color: #24292f;
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
  color: #eaeef2;
  background-color: #0550ae;
}

.markdown-body .pl-mdr {
  font-weight: bold;
  color: #8250df;
}

.markdown-body .pl-ba {
  color: #57606a;
}

.markdown-body .pl-sg {
  color: #8c959f;
}

.markdown-body .pl-corl {
  text-decoration: underline;
  color: #0a3069;
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
  margin-top: 4px;
}

.markdown-body .task-list-item .handle {
  display: none;
}

.markdown-body .task-list-item-checkbox {
  margin: 0 .2em .25em -1.4em;
  vertical-align: middle;
}

.markdown-body .contains-task-list:dir(rtl) .task-list-item-checkbox {
  margin: 0 -1.6em .25em .2em;
}

.markdown-body .contains-task-list {
  position: relative;
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
`,Lw=`/**
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
`,zw=`pre[class*="language-"],
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
`,Rw=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"})}),_w=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8zm2-8v4h4V5h-4zm0 10v4h4v-4h-4zM5 5v4h4V5H5zm0 10v4h4v-4H5z"})}),Nw=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"})}),Tw=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333A8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248A15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"})}),Fw=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"})}),jw=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"})}),Aw=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"m21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z"})}),$w=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"})});function Iw(e,n){const[t,r]=E.useState(()=>{try{const i=window.localStorage.getItem(e);return i?JSON.parse(i):n}catch{return n}}),o=E.useCallback(i=>{r(i),window.localStorage.setItem(e,JSON.stringify(i))},[]);return[t,o]}const Mw=E.createContext(!1);function Dw(){const[e,n]=Iw("dark-mode-enabled"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,r=e??t;return E.useEffect(()=>{r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]),[r,n]}var cd={},Uw={get exports(){return cd},set exports(e){cd=e}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=function(r){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,i=0,a={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function u(d){return d instanceof s?new s(d.type,u(d.content),d.alias):Array.isArray(d)?d.map(u):d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(u){return Object.prototype.toString.call(u).slice(8,-1)},objId:function(u){return u.__id||Object.defineProperty(u,"__id",{value:++i}),u.__id},clone:function u(d,g){g=g||{};var k,b;switch(l.util.type(d)){case"Object":if(b=l.util.objId(d),g[b])return g[b];k={},g[b]=k;for(var C in d)d.hasOwnProperty(C)&&(k[C]=u(d[C],g));return k;case"Array":return b=l.util.objId(d),g[b]?g[b]:(k=[],g[b]=k,d.forEach(function(P,O){k[O]=u(P,g)}),k);default:return d}},getLanguage:function(u){for(;u;){var d=o.exec(u.className);if(d)return d[1].toLowerCase();u=u.parentElement}return"none"},setLanguage:function(u,d){u.className=u.className.replace(RegExp(o,"gi"),""),u.classList.add("language-"+d)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(k){var u=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(k.stack)||[])[1];if(u){var d=document.getElementsByTagName("script");for(var g in d)if(d[g].src==u)return d[g]}return null}},isActive:function(u,d,g){for(var k="no-"+d;u;){var b=u.classList;if(b.contains(d))return!0;if(b.contains(k))return!1;u=u.parentElement}return!!g}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(u,d){var g=l.util.clone(l.languages[u]);for(var k in d)g[k]=d[k];return g},insertBefore:function(u,d,g,k){k=k||l.languages;var b=k[u],C={};for(var P in b)if(b.hasOwnProperty(P)){if(P==d)for(var O in g)g.hasOwnProperty(O)&&(C[O]=g[O]);g.hasOwnProperty(P)||(C[P]=b[P])}var _=k[u];return k[u]=C,l.languages.DFS(l.languages,function($,re){re===_&&$!=u&&(this[$]=C)}),C},DFS:function u(d,g,k,b){b=b||{};var C=l.util.objId;for(var P in d)if(d.hasOwnProperty(P)){g.call(d,P,d[P],k||P);var O=d[P],_=l.util.type(O);_==="Object"&&!b[C(O)]?(b[C(O)]=!0,u(O,g,null,b)):_==="Array"&&!b[C(O)]&&(b[C(O)]=!0,u(O,g,P,b))}}},plugins:{},highlightAll:function(u,d){l.highlightAllUnder(document,u,d)},highlightAllUnder:function(u,d,g){var k={callback:g,container:u,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",k),k.elements=Array.prototype.slice.apply(k.container.querySelectorAll(k.selector)),l.hooks.run("before-all-elements-highlight",k);for(var b=0,C;C=k.elements[b++];)l.highlightElement(C,d===!0,k.callback)},highlightElement:function(u,d,g){var k=l.util.getLanguage(u),b=l.languages[k];l.util.setLanguage(u,k);var C=u.parentElement;C&&C.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(C,k);var P=u.textContent,O={element:u,language:k,grammar:b,code:P};function _(re){O.highlightedCode=re,l.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,l.hooks.run("after-highlight",O),l.hooks.run("complete",O),g&&g.call(O.element)}if(l.hooks.run("before-sanity-check",O),C=O.element.parentElement,C&&C.nodeName.toLowerCase()==="pre"&&!C.hasAttribute("tabindex")&&C.setAttribute("tabindex","0"),!O.code){l.hooks.run("complete",O),g&&g.call(O.element);return}if(l.hooks.run("before-highlight",O),!O.grammar){_(l.util.encode(O.code));return}if(d&&r.Worker){var $=new Worker(l.filename);$.onmessage=function(re){_(re.data)},$.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else _(l.highlight(O.code,O.grammar,O.language))},highlight:function(u,d,g){var k={code:u,grammar:d,language:g};if(l.hooks.run("before-tokenize",k),!k.grammar)throw new Error('The language "'+k.language+'" has no grammar.');return k.tokens=l.tokenize(k.code,k.grammar),l.hooks.run("after-tokenize",k),s.stringify(l.util.encode(k.tokens),k.language)},tokenize:function(u,d){var g=d.rest;if(g){for(var k in g)d[k]=g[k];delete d.rest}var b=new p;return h(b,b.head,u),m(u,b,d,b.head,0),w(b)},hooks:{all:{},add:function(u,d){var g=l.hooks.all;g[u]=g[u]||[],g[u].push(d)},run:function(u,d){var g=l.hooks.all[u];if(!(!g||!g.length))for(var k=0,b;b=g[k++];)b(d)}},Token:s};r.Prism=l;function s(u,d,g,k){this.type=u,this.content=d,this.alias=g,this.length=(k||"").length|0}s.stringify=function u(d,g){if(typeof d=="string")return d;if(Array.isArray(d)){var k="";return d.forEach(function(_){k+=u(_,g)}),k}var b={type:d.type,content:u(d.content,g),tag:"span",classes:["token",d.type],attributes:{},language:g},C=d.alias;C&&(Array.isArray(C)?Array.prototype.push.apply(b.classes,C):b.classes.push(C)),l.hooks.run("wrap",b);var P="";for(var O in b.attributes)P+=" "+O+'="'+(b.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+b.tag+' class="'+b.classes.join(" ")+'"'+P+">"+b.content+"</"+b.tag+">"};function c(u,d,g,k){u.lastIndex=d;var b=u.exec(g);if(b&&k&&b[1]){var C=b[1].length;b.index+=C,b[0]=b[0].slice(C)}return b}function m(u,d,g,k,b,C){for(var P in g)if(!(!g.hasOwnProperty(P)||!g[P])){var O=g[P];O=Array.isArray(O)?O:[O];for(var _=0;_<O.length;++_){if(C&&C.cause==P+","+_)return;var $=O[_],re=$.inside,ln=!!$.lookbehind,Ue=!!$.greedy,Et=$.alias;if(Ue&&!$.pattern.global){var sn=$.pattern.toString().match(/[imsuy]*$/)[0];$.pattern=RegExp($.pattern.source,sn+"g")}for(var Be=$.pattern||$,z=k.next,T=b;z!==d.tail&&!(C&&T>=C.reach);T+=z.value.length,z=z.next){var F=z.value;if(d.length>u.length)return;if(!(F instanceof s)){var M=1,D;if(Ue){if(D=c(Be,T,u,ln),!D||D.index>=u.length)break;var le=D.index,jn=D.index+D[0].length,Z=T;for(Z+=z.value.length;le>=Z;)z=z.next,Z+=z.value.length;if(Z-=z.value.length,T=Z,z.value instanceof s)continue;for(var He=z;He!==d.tail&&(Z<jn||typeof He.value=="string");He=He.next)M++,Z+=He.value.length;M--,F=u.slice(T,Z),D.index-=T}else if(D=c(Be,0,F,ln),!D)continue;var le=D.index,Pe=D[0],st=F.slice(0,le),cr=F.slice(le+Pe.length),ut=T+F.length;C&&ut>C.reach&&(C.reach=ut);var Je=z.prev;st&&(Je=h(d,Je,st),T+=st.length),y(d,Je,M);var dr=new s(P,re?l.tokenize(Pe,re):Pe,Et,Pe);if(z=h(d,Je,dr),cr&&h(d,z,cr),M>1){var Pt={cause:P+","+_,reach:ut};m(u,d,g,z.prev,T,Pt),C&&Pt.reach>C.reach&&(C.reach=Pt.reach)}}}}}}function p(){var u={value:null,prev:null,next:null},d={value:null,prev:u,next:null};u.next=d,this.head=u,this.tail=d,this.length=0}function h(u,d,g){var k=d.next,b={value:g,prev:d,next:k};return d.next=b,k.prev=b,u.length++,b}function y(u,d,g){for(var k=d.next,b=0;b<g&&k!==u.tail;b++)k=k.next;d.next=k,k.prev=d,u.length-=b}function w(u){for(var d=[],g=u.head.next;g!==u.tail;)d.push(g.value),g=g.next;return d}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(u){var d=JSON.parse(u.data),g=d.language,k=d.code,b=d.immediateClose;r.postMessage(l.highlight(k,l.languages[g],g)),b&&r.close()},!1)),l;var v=l.util.currentScript();v&&(l.filename=v.src,v.hasAttribute("data-manual")&&(l.manual=!0));function x(){l.manual||l.highlightAll()}if(!l.manual){var f=document.readyState;f==="loading"||f==="interactive"&&v&&v.defer?document.addEventListener("DOMContentLoaded",x):window.requestAnimationFrame?window.requestAnimationFrame(x):window.setTimeout(x,16)}return l}(n);e.exports&&(e.exports=t),typeof Lu<"u"&&(Lu.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(o,i){var a={};a["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[i]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};l["language-"+i]={pattern:/[\s\S]+/,inside:t.languages[i]};var s={};s[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(r,o){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:t.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(r){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var i=r.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",o=function(v,x){return"✖ Error "+v+" while fetching file: "+x},i="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",s="loading",c="loaded",m="failed",p="pre[data-src]:not(["+l+'="'+c+'"]):not(['+l+'="'+s+'"])';function h(v,x,f){var u=new XMLHttpRequest;u.open("GET",v,!0),u.onreadystatechange=function(){u.readyState==4&&(u.status<400&&u.responseText?x(u.responseText):u.status>=400?f(o(u.status,u.statusText)):f(i))},u.send(null)}function y(v){var x=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(v||"");if(x){var f=Number(x[1]),u=x[2],d=x[3];return u?d?[f,Number(d)]:[f,void 0]:[f,f]}}t.hooks.add("before-highlightall",function(v){v.selector+=", "+p}),t.hooks.add("before-sanity-check",function(v){var x=v.element;if(x.matches(p)){v.code="",x.setAttribute(l,s);var f=x.appendChild(document.createElement("CODE"));f.textContent=r;var u=x.getAttribute("data-src"),d=v.language;if(d==="none"){var g=(/\.(\w+)$/.exec(u)||[,"none"])[1];d=a[g]||g}t.util.setLanguage(f,d),t.util.setLanguage(x,d);var k=t.plugins.autoloader;k&&k.loadLanguages(d),h(u,function(b){x.setAttribute(l,c);var C=y(x.getAttribute("data-range"));if(C){var P=b.split(/\r\n?|\n/g),O=C[0],_=C[1]==null?P.length:C[1];O<0&&(O+=P.length),O=Math.max(0,Math.min(O-1,P.length)),_<0&&(_+=P.length),_=Math.max(0,Math.min(_,P.length)),b=P.slice(O,_).join(`
`),x.hasAttribute("data-start")||x.setAttribute("data-start",String(O+1))}f.textContent=b,t.highlightElement(f)},function(b){x.setAttribute(l,m),f.textContent=b})}}),t.plugins.fileHighlight={highlight:function(x){for(var f=(x||document).querySelectorAll(p),u=0,d;d=f[u++];)t.highlightElement(d)}};var w=!1;t.fileHighlight=function(){w||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),w=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(Uw);async function dd(e,n){const t=document.getElementById(e);t&&t.remove();const r=document.createElement("style");r.setAttribute("id",e),r.textContent=n,document.head.appendChild(r)}const Bw="Agus Pujianto",Hw="aguspujiantoo@gmail.com",Ww="dagangduit.github.io",Vw=R.div`
  ${{position:"relative",display:"flex",minHeight:"100vh",flexDirection:"column",paddingBottom:"4rem"}}
`,Kw=R.header({height:"5rem",width:"100%"}),Qw=R.div({marginLeft:"auto",marginRight:"auto",display:"flex",height:"100%",maxWidth:"1024px",alignItems:"center",paddingLeft:"2rem",paddingRight:"2rem",fontWeight:"600","--tw-text-opacity":"1",color:"rgb(100 116 139 / var(--tw-text-opacity))"}),Gw=R(Qs)`
  ${{fontSize:"1.125rem",lineHeight:"1.75rem"}}
`,Yw=R.span({marginLeft:"0.125rem",marginRight:"0.125rem","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),Jw=R.nav({marginLeft:"auto",display:"grid",gridAutoFlow:"column",gap:"0.75rem",lineHeight:"1.25rem","@media (min-width: 1024px)":{gap:"1.5rem"}}),um={cursor:"pointer",opacity:"0.6",":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}},Fo=R.a`
  ${um}
`,Ia=R(sy)`
  ${um}

  &.active {
    ${{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))",opacity:"1"}}
  }
`,Xw=R.div({height:"100%",width:"1px","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}}),Zw=R.footer({position:"absolute",bottom:"1rem",left:"0px",width:"100%",userSelect:"none","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.5rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))"},textAlign:"center",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(203 213 225 / var(--tw-text-opacity))"}),qw=R.div({marginLeft:"auto",marginRight:"auto",maxWidth:"1024px",".dark &":{"--tw-text-opacity":"1",color:"rgb(30 41 59 / var(--tw-text-opacity))"}});function ek(){const{t:e}=Zl(),[n,t]=Dw();E.useEffect(()=>{dd("prism-theme",n?zw:Ow),dd("markdown-theme",n?Pw:Lw)},[n]);const r=E.useCallback(()=>{t(!n)},[n]),o=E.useCallback(()=>{window.open("https://dagangduit.com/","_blank")},[]);return S(Mw.Provider,{value:n},S(Vw,null,S(Kw,null,S(Qw,null,S(Gw,{to:"/"},S("span",null),S(Yw,null,Bw)),S(Jw,null,S(Ia,{to:"/EA"},S(Rw,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),S("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.EA"))),S(Ia,{to:"/indicator"},S(Aw,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),S("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.indicator"))),S(Ia,{to:"/projects"},S(_w,{css:{display:"inline","@media (min-width: 1024px)":{display:"none"}}}),S("span",{css:{display:"none","@media (min-width: 1024px)":{display:"inline"}}},e("tab.projects"))),S(Xw,null),S(Fo,{href:`mailto:${Hw}`},S(Fw,null)),S(Fo,{href:Ww,target:"_blank"},S(Nw,null)),S(Fo,{onClick:o},S(Tw,null)),S(Fo,{onClick:r},S(n?$w:jw,null))))),S(Ml,null),S(Zw,null,S(qw,null,S("a",{css:{":hover":{"--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}},href:"https://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY-NC-SA 4.0"),S("span",{css:{marginLeft:"0.5rem"}},"2016-present © varHarrie")))))}const nk=e=>gw("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:[j("path",{fill:"currentColor",d:"M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"}),j("path",{fill:"currentColor",d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0Z"})]}),tk=e=>j("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"})}),rk=e=>j("svg",{viewBox:"0 0 16 16",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M8 .25a.75.75 0 0 1 .673.418l1.882 3.815l4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97l.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45l2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084l2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456l-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183l-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"})}),ok=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"m24 12l-5.657 5.657l-1.414-1.414L21.172 12l-4.243-4.243l1.414-1.414L24 12zM2.828 12l4.243 4.243l-1.414 1.414L0 12l5.657-5.657L7.07 7.757L2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"})}),ik=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M2.8 14h2.04l-.545 2.725l5.744 2.154l7.227-2.41L18.36 11H3.4l.4-2h14.96l.8-4H4.6L5 3h17l-3 15l-9 3l-8-3z"})}),ak=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"m12 18.178l-4.62-1.256l-.328-3.544h2.27l.158 1.844l2.52.667l2.52-.667l.26-2.866H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178zM3 2h18l-1.623 18L12 22l-7.377-2L3 2zm2.188 2L6.49 18.434L12 19.928l5.51-1.494L18.812 4H5.188z"})}),lk=e=>j("svg",{viewBox:"0 0 24 24",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"currentColor",d:"M3.316 3L12 18l8.684-15H23L12 22L1 3h2.316zm4.342 0L12 10.5L16.342 3h2.316L12 14.5L5.342 3h2.316z"})}),sk=e=>j("svg",{viewBox:"0 0 15 15",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11m-2-5v5a1.5 1.5 0 0 1-3 0M.5.5h14v14H.5V.5Z"})}),uk=e=>j("svg",{viewBox:"0 0 15 15",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"none",stroke:"currentColor",d:"M12.5 8v-.167c0-.736-.597-1.333-1.333-1.333H10a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 0 1 0 3h-1A1.5 1.5 0 0 1 8.5 11M8 6.5H3m2.5 0V13M.5.5h14v14H.5V.5Z"})}),ck=e=>j("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em",...e,children:j("path",{fill:"#368832",d:"M19.792 7.071h2.553v2.553H24.9V7.071h2.552v2.553H30v2.552h-2.55v2.551H30v2.553h-2.551v2.552H24.9v-2.55h-2.55v2.552h-2.557v-2.55H17.24v-2.559h2.553v-2.546H17.24V9.622h2.554Zm2.553 7.658H24.9v-2.553h-2.555Zm-7.656 9.284a10.2 10.2 0 0 1-4.653.915a7.6 7.6 0 0 1-5.89-2.336A8.839 8.839 0 0 1 2 16.367a9.436 9.436 0 0 1 2.412-6.719a8.181 8.181 0 0 1 6.259-2.577a11.1 11.1 0 0 1 4.018.638v3.745a6.81 6.81 0 0 0-3.723-1.036a4.793 4.793 0 0 0-3.7 1.529a5.879 5.879 0 0 0-1.407 4.142a5.774 5.774 0 0 0 1.328 3.992a4.551 4.551 0 0 0 3.575 1.487a7.288 7.288 0 0 0 3.927-1.108Z"})}),dk=R.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),fk=R.div`
  ${{position:"absolute",top:"0.75rem",left:"0.75rem",display:"flex",height:"2.25rem",width:"2.25rem",alignItems:"center",justifyContent:"center",overflow:"hidden",borderRadius:"0.375rem",fontWeight:"700"}}

  &::before {
    ${{position:"absolute",top:"0px",left:"0px",display:"block",height:"100%",width:"100%",opacity:"0.2",content:"''"}}
    background-color: currentColor;
  }
`,pk=R.a({display:"block",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap","--tw-text-opacity":"1",color:"rgb(59 130 246 / var(--tw-text-opacity))"}),mk=R.div`
  ${{marginTop:"0.5rem",overflow:"hidden",fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}}

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,hk=R.ul({marginTop:"0.5rem",display:"flex",minWidth:"0px","> :not([hidden]) ~ :not([hidden])":{"--tw-space-x-reverse":"0",marginRight:"calc(0.75rem * var(--tw-space-x-reverse))",marginLeft:"calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))"},fontSize:"0.875rem",lineHeight:"1.25rem","--tw-text-opacity":"1",color:"rgb(148 163 184 / var(--tw-text-opacity))"}),Ma=R.li({display:"flex",alignItems:"center"}),fd={default:{component:ok,color:""},TypeScript:{component:uk,color:"#3178C6"},JavaScript:{component:sk,color:"#FCD002"},HTML:{component:ak,color:"#FF3C41"},CSS:{component:ik,color:"#10BDFF"},Vue:{component:lk,color:"#41B883"},"C#":{component:ck,color:"#368833"}};function gk(e){const{project:n}=e,t=fd[e.project.language]??fd.default;return S(dk,null,S(fk,{style:{color:t.color}},S(t.component,null)),S(pk,{href:n.htmlUrl},n.fullName),S(mk,null,n.description),S(hk,null,S(Ma,null,S(rk,null),S("span",{css:{marginLeft:"0.5rem"}},n.stargazersCount)),S(Ma,null,S(tk,null),S("span",{css:{marginLeft:"0.5rem"}},n.forksCount)),S(Ma,null,S(nk,null),S("span",{css:{marginLeft:"0.5rem"}},n.openIssuesCount))))}const yk=R.div({height:"1.5rem","@keyframes pulse":{"50%":{opacity:".5"}},animation:"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",borderRadius:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgb(229 231 235 / var(--tw-bg-opacity))",".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(31 41 55 / var(--tw-bg-opacity))"}});function aa(e){return e.children??S(yk,e)}const vk=R.div({position:"relative",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgb(255 255 255 / var(--tw-bg-opacity))",padding:"0.75rem",paddingLeft:"3.5rem","--tw-shadow":"0 1px 2px 0 rgb(0 0 0 / 0.05)","--tw-shadow-colored":"0 1px 2px 0 var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)","--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":"var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)","--tw-ring-color":"rgb(71 85 105 / 0.05)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"300ms",":hover":{"--tw-shadow":"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)","--tw-shadow-colored":"0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},".dark &":{"--tw-bg-opacity":"1",backgroundColor:"rgb(17 24 39 / var(--tw-bg-opacity))"}}),wk=R(aa)({position:"absolute",top:"0.75rem",left:"0.75rem",height:"2.25rem",width:"2.25rem",borderRadius:"0.375rem"}),kk=R(aa)({height:"1.25rem",width:"50%","--tw-text-opacity":"1",color:"rgb(191 219 254 / var(--tw-text-opacity))"}),bk=R(aa)({marginTop:"0.5rem",width:"66.666667%"}),xk=R.div({marginTop:"0.5rem",display:"flex"}),Sk=R(aa)({marginRight:"1rem",height:"1.25rem",width:"2.5rem"});function Ck(){return S(vk,null,S(wk,null),S(kk,null),S(bk,null),S(xk,null,Array.from({length:3}).map((e,n)=>S(Sk,{key:n}))))}function Ek(e,n=!1){const[t,r]=E.useState(n);return[t,async(...i)=>{r(!0);try{return await e(...i)}finally{r(!1)}}]}class iu{constructor(n,t,r,o){this.id=n,this.login=t,this.avatarUrl=r,this.htmlUrl=o}static from(n){return new iu(n.id,n.login,n.avatar_url,n.html_url)}}class au{constructor(n,t,r,o,i,a,l,s,c,m,p,h,y,w,v){this.id=n,this.owner=t,this.fullName=r,this.name=o,this.htmlUrl=i,this.description=a,this.language=l,this.forksCount=s,this.stargazersCount=c,this.openIssuesCount=m,this.archived=p,this.disabled=h,this.pushedAt=y,this.createdAt=w,this.updatedAt=v}static from(n){return new au(n.id,iu.from(n.owner),n.full_name,n.name,n.html_url,n.description,n.language,n.forks_count,n.stargazers_count,n.open_issues_count,n.archived,n.disabled,n.pushed_at,n.created_at,n.updated_at)}}var cm=(e=>(e.Asc="asc",e.Desc="desc",e))(cm||{}),dm=(e=>(e.Created="created",e.Updated="updated",e.Pushed="pushed",e.FullName="full_name",e))(dm||{}),fm=(e=>(e.All="all",e.Owner="owner",e.Member="member",e))(fm||{});function Pk(e){const n=new URLSearchParams;return Object.keys(e).forEach(t=>{e[t]&&n.append(t,String(e[t]))}),`?${n.toString()}`}function Ok(e){return["POST","PUT","PATCH"].includes(e)}class Lk{constructor(n,t,r){un(this,"apiBase","https://api.github.com");this.token=n,this.owner=t,this.repo=r}async request(n,t,r){let o="",i=r;return r&&!Ok(n)&&(o=Pk(r),i=void 0),(await fetch([this.apiBase,t,o].join(""),{method:n,headers:{"Content-Type":"application/json;charset=UTF-8",Accept:"application/vnd.github.v3+json",Authorization:`token ${this.token}`},body:i?JSON.stringify(i):void 0})).json()}async listMilestones(n={}){const{state:t,sort:r,direction:o,page:i,pageSize:a}=n,l={state:t,sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/repos/${this.owner}/${this.repo}/milestones`,l)}async listIssues(n){const{milestone:t,labels:r,state:o,sort:i,direction:a,page:l,pageSize:s}=n,c={milestone:t,labels:r,state:o,sort:i,direction:a,page:l,per_page:s,creator:this.owner};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues`,c)}getIssue(n){return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${n}`)}listComments(n){const{issue:t,sort:r,direction:o,page:i,pageSize:a}=n,l={sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/repos/${this.owner}/${this.repo}/issues/${t}/comments`,l)}listRepositories(n){const{type:t,sort:r,direction:o,page:i,pageSize:a}=n,l={type:t,sort:r,direction:o,page:i,per_page:a};return this.request("GET",`/users/${this.owner}/repos`,l)}}const zk=new Lk("FAKE_TOKEN_PART1FAKE_TOKEN_PART2","FAKE_USER","FAKE_REPO"),Rk=R.main({marginLeft:"auto",marginRight:"auto",width:"100%",maxWidth:"1024px",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"3rem",paddingBottom:"3rem"}),_k=R.h2({fontSize:"1.5rem",lineHeight:"2rem","--tw-text-opacity":"1",color:"rgb(51 65 85 / var(--tw-text-opacity))"}),pd=R.div({marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"0.5rem","@media (min-width: 1024px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"}});function Nk(){const{t:e}=Zl(),[n,t]=E.useState([]),[r,o]=Ek(E.useCallback(async()=>{const i=await zk.listRepositories({type:fm.All,sort:dm.Pushed,direction:cm.Desc,page:1,pageSize:50});t(i.map(au.from).filter(a=>a.stargazersCount>0&&!a.archived&&!a.disabled).sort((a,l)=>l.stargazersCount-a.stargazersCount))},[]),!0);return E.useEffect(()=>{o()},[]),S(Rk,null,S(_k,null,e("projects.title")),r&&S(pd,null,Array.from({length:10}).map((i,a)=>S(Ck,{key:a}))),!!n.length&&S(pd,null,n.map(i=>S(gk,{key:i.id,project:i}))))}function Tk(){return S(iy,null,S(ey,null,S(fn,{path:"/",element:S(ek,null)},S(fn,{path:"",element:S(Ew,null)}),S(fn,{path:"EA",element:S(Ml,null)},S(fn,{path:"",element:S(Lv,null)}),S(fn,{path:":id",element:S(Iv,null)})),S(fn,{path:"indicator",element:S(Ml,null)},S(fn,{path:"",element:S(Zv,null)}),S(fn,{path:":id",element:S(sw,null)})),S(fn,{path:"projects",element:S(Nk,null)}))))}const Fk=()=>S(em,{styles:nm`*, ::before, ::after {
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
}`}),jk=nm`
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
`;function Ak(){return S(Xl.Fragment,null,S(Fk,null),S(em,{styles:jk}))}document.title="Agus Pujianto";const $k=document.getElementById("root"),Ik=zp($k);Ik.render(S(Xl.Fragment,null,S(Ak,null),S(Tk,null)));
